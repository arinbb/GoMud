package aiservice

import (
	"context"
	"fmt"
	"math/rand"
	"sync"
	"time"

	"github.com/GoMudEngine/GoMud/internal/events"
	"github.com/GoMudEngine/GoMud/internal/mobs"
	"github.com/GoMudEngine/GoMud/internal/mudlog"
	"github.com/GoMudEngine/GoMud/internal/rooms"
)

const (
	chimeInChance   = 30  // percent chance of a chime-in
	chimeInCooldown = 60  // seconds before same NPC can chime in again
	chimeInMaxLen   = 120 // max response length for chime-ins
)

var (
	chimeInCooldowns sync.Map // map[int]time.Time keyed by mob instance ID
)

// canChimeIn checks if the mob is off cooldown
func canChimeIn(mobInstanceId int) bool {
	if last, ok := chimeInCooldowns.Load(mobInstanceId); ok {
		if time.Since(last.(time.Time)) < time.Duration(chimeInCooldown)*time.Second {
			return false
		}
	}
	return true
}

// markChimeIn records that this mob just chimed in
func markChimeIn(mobInstanceId int) {
	chimeInCooldowns.Store(mobInstanceId, time.Now())
}

// TryChimeIn attempts to have another NPC in the room react to a conversation.
// Called from the goroutine in TryAIResponse after NPC-A's response is queued.
func TryChimeIn(roomId int, excludeMobInstanceId int, userId int, topic string, npcAResponse string, npcAName string, lastTurn uint64) {
	// Roll the dice
	if rand.Intn(100) >= chimeInChance {
		return
	}

	// Find the room
	room := rooms.LoadRoom(roomId)
	if room == nil {
		return
	}

	// Get neutral (non-hostile, non-aggro) mobs in the room
	mobIds := room.GetMobs(rooms.FindNeutral)
	if len(mobIds) == 0 {
		return
	}

	// Collect eligible candidates
	type candidate struct {
		mob   *mobs.Mob
		aiCtx *MobAIContext
	}
	var candidates []candidate

	for _, mId := range mobIds {
		if mId == excludeMobInstanceId {
			continue
		}

		mob := mobs.GetInstance(mId)
		if mob == nil {
			continue
		}

		if !canChimeIn(mob.InstanceId) {
			continue
		}

		aiCtx := LoadMobAIContext(int(mob.MobId), mob.Zone)
		if aiCtx == nil {
			continue
		}

		candidates = append(candidates, candidate{mob: mob, aiCtx: aiCtx})
	}

	if len(candidates) == 0 {
		return
	}

	// Pick one at random
	pick := candidates[rand.Intn(len(candidates))]

	// Check rate limit (shares the player's rate limit bucket)
	if !GetRateLimiter().Allow(userId) {
		return
	}

	// Mark cooldown
	markChimeIn(pick.mob.InstanceId)

	// Build the chime-in prompt
	systemPrompt := pick.aiCtx.SystemPrompt
	if pick.aiCtx.Knowledge != "" {
		systemPrompt += "\n\nKNOWLEDGE:\n" + pick.aiCtx.Knowledge
	}
	systemPrompt += "\n\nYou just overheard a nearby conversation. React with a brief interjection — one sentence only. Stay in character."

	userMessage := fmt.Sprintf("%s was asked about \"%s\" and said: \"%s\"", npcAName, topic, npcAResponse)

	messages := []Message{
		{Role: "user", Content: userMessage},
	}

	// Capture values for the goroutine
	mobInstanceId := pick.mob.InstanceId
	mobName := pick.mob.Character.Name
	provider := GetProvider()
	timeoutSecs := 10

	go func() {
		ctx, cancel := context.WithTimeout(context.Background(), time.Duration(timeoutSecs)*time.Second)
		defer cancel()

		response, err := provider.Complete(ctx, CompletionRequest{
			SystemPrompt: systemPrompt,
			Messages:     messages,
			MaxTokens:    60,
		})

		if err != nil {
			mudlog.Error("aiservice", "chime-in error", fmt.Sprintf("AI chime-in for mob %s failed: %v", mobName, err))
			return
		}

		response = sanitizeResponse(response)

		// Truncate to max length
		if len(response) > chimeInMaxLen {
			if lastPeriod := findLastSentenceEnd(response[:chimeInMaxLen]); lastPeriod > 0 {
				response = response[:lastPeriod+1]
			} else {
				response = response[:chimeInMaxLen] + "..."
			}
		}

		// Queue the chime-in with a delay after NPC-A finishes
		// 160-240 turns = ~2-3 rounds at 80 turns/round
		delay := uint64(160 + rand.Intn(80))
		events.AddToQueue(events.Input{
			MobInstanceId: mobInstanceId,
			InputText:     fmt.Sprintf("say %s", response),
			ReadyTurn:     lastTurn + delay,
		})

		mudlog.Info("aiservice", "chime-in", fmt.Sprintf("%s reacting to %s's conversation", mobName, npcAName))
	}()
}

// findLastSentenceEnd returns the index of the last sentence-ending punctuation
func findLastSentenceEnd(s string) int {
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == '.' || s[i] == '!' || s[i] == '?' {
			return i
		}
	}
	return -1
}
