package aiservice

import (
	"context"
	"fmt"
	"strings"
	"time"

	"github.com/GoMudEngine/GoMud/internal/configs"
	"github.com/GoMudEngine/GoMud/internal/events"
	"github.com/GoMudEngine/GoMud/internal/mobs"
	"github.com/GoMudEngine/GoMud/internal/mudlog"
	"github.com/GoMudEngine/GoMud/internal/users"
	"github.com/GoMudEngine/GoMud/internal/util"
)

// TryAIResponse attempts to generate an AI response for a mob.
// Returns true if AI is handling it (even if the API call hasn't completed yet).
// Returns false if AI is not available for this mob (caller should fall back to default behavior).
func TryAIResponse(mob *mobs.Mob, user *users.UserRecord, question string) bool {
	// 1. Check if AI is enabled globally
	if !IsEnabled() {
		return false
	}

	cfg := configs.GetIntegrationsConfig().AI

	// 2. Check if this mob has AI context
	aiCtx := LoadMobAIContext(int(mob.MobId), mob.Zone)
	if aiCtx == nil {
		return false
	}

	// 3. Check rate limit
	if !GetRateLimiter().Allow(user.UserId) {
		user.SendText(fmt.Sprintf(`<ansi fg="mobname">%s</ansi> <ansi fg="8">pauses, seeming lost in thought for a moment.</ansi>`, mob.Character.Name))
		return true // consumed the ask, just rate limited
	}

	// 4. Send thinking indicator
	user.SendText(fmt.Sprintf(`<ansi fg="mobname">%s</ansi> <ansi fg="8">considers your question...</ansi>`, mob.Character.Name))

	// 5. Build conversation history
	memory := GetMemory()
	history := memory.Get(user.UserId, mob.InstanceId)

	// Add the current question
	allMessages := make([]Message, 0, len(history)+1)
	allMessages = append(allMessages, history...)
	allMessages = append(allMessages, Message{Role: "user", Content: question})

	// Build system prompt
	systemPrompt := aiCtx.SystemPrompt
	if aiCtx.Style != "" {
		systemPrompt += "\n\nSPEECH STYLE:\n" + aiCtx.Style
	}
	if aiCtx.Knowledge != "" {
		systemPrompt += "\n\nKNOWLEDGE:\n" + aiCtx.Knowledge
	}

	// Capture values for the goroutine
	mobInstanceId := mob.InstanceId
	mobName := mob.Character.Name
	userId := user.UserId
	roomId := mob.Character.RoomId
	maxTokens := int(cfg.MaxTokens)
	timeoutSecs := int(cfg.TimeoutSecs)
	provider := GetProvider()

	// 6. Spawn goroutine for API call
	go func() {
		ctx, cancel := context.WithTimeout(context.Background(), time.Duration(timeoutSecs)*time.Second)
		defer cancel()

		response, err := provider.Complete(ctx, CompletionRequest{
			SystemPrompt: systemPrompt,
			Messages:     allMessages,
			MaxTokens:    maxTokens,
		})

		if err != nil {
			mudlog.Error("aiservice", "error", fmt.Sprintf("AI call for mob %s failed: %v", mobName, err))
			// Queue a fallback emote
			events.AddToQueue(events.Input{
				MobInstanceId: mobInstanceId,
				InputText:     "emote shakes their head, distracted.",
				ReadyTurn:     util.GetTurnCount() + 1,
			})
			return
		}

		// Sanitize response — strip any ANSI-like tags the LLM might generate
		response = sanitizeResponse(response)

		// Truncate if needed
		if len(response) > aiCtx.MaxResponseLen {
			// Cut at last sentence boundary
			truncated := response[:aiCtx.MaxResponseLen]
			if lastPeriod := strings.LastIndexAny(truncated, ".!?"); lastPeriod > 0 {
				response = truncated[:lastPeriod+1]
			} else {
				response = truncated + "..."
			}
		}

		// Save to memory
		memory.Add(userId, mobInstanceId,
			Message{Role: "user", Content: question},
			Message{Role: "assistant", Content: response})

		// Queue the mob's response — split into lines if long
		lines := splitIntoSayCommands(response)
		turnOffset := uint64(0)
		for _, line := range lines {
			events.AddToQueue(events.Input{
				MobInstanceId: mobInstanceId,
				InputText:     fmt.Sprintf("say %s", line),
				ReadyTurn:     util.GetTurnCount() + 1 + turnOffset,
			})
			turnOffset += 40 // ~2 seconds between lines (at 50ms/turn)
		}

		// Try to have another NPC in the room chime in
		lastTurn := util.GetTurnCount() + 1 + turnOffset
		TryChimeIn(roomId, mobInstanceId, userId, question, response, mobName, lastTurn)
	}()

	return true
}

// sanitizeResponse cleans LLM output for MUD display
func sanitizeResponse(s string) string {
	// Remove any XML/HTML-like tags the LLM might output
	s = strings.ReplaceAll(s, "<", "(")
	s = strings.ReplaceAll(s, ">", ")")

	// Collapse multiple newlines
	for strings.Contains(s, "\n\n") {
		s = strings.ReplaceAll(s, "\n\n", "\n")
	}

	// Replace newlines with spaces (MUD say commands are single-line)
	s = strings.ReplaceAll(s, "\n", " ")

	// Collapse multiple spaces
	for strings.Contains(s, "  ") {
		s = strings.ReplaceAll(s, "  ", " ")
	}

	return strings.TrimSpace(s)
}

// splitIntoSayCommands breaks a response into lines suitable for mob say commands
func splitIntoSayCommands(response string) []string {
	// If short enough, return as single line
	if len(response) <= 160 {
		return []string{response}
	}

	// Split on sentence boundaries
	var lines []string
	remaining := response
	for len(remaining) > 0 {
		if len(remaining) <= 160 {
			lines = append(lines, strings.TrimSpace(remaining))
			break
		}

		// Find a sentence boundary within 160 chars
		cutPoint := 160
		chunk := remaining[:cutPoint]
		if lastSentence := strings.LastIndexAny(chunk, ".!?"); lastSentence > 40 {
			cutPoint = lastSentence + 1
		} else if lastSpace := strings.LastIndex(chunk, " "); lastSpace > 40 {
			cutPoint = lastSpace
		}

		lines = append(lines, strings.TrimSpace(remaining[:cutPoint]))
		remaining = strings.TrimSpace(remaining[cutPoint:])
	}

	return lines
}
