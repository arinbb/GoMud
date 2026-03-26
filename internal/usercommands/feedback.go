package usercommands

import (
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/GoMudEngine/GoMud/internal/events"
	"github.com/GoMudEngine/GoMud/internal/mobs"
	"github.com/GoMudEngine/GoMud/internal/rooms"
	"github.com/GoMudEngine/GoMud/internal/users"
)

func Feedback(rest string, user *users.UserRecord, room *rooms.Room, flags events.EventFlag) (bool, error) {

	if len(strings.TrimSpace(rest)) == 0 {
		user.SendText(``)
		user.SendText(`<ansi fg="command">feedback</ansi> <ansi fg="8">- Leave feedback about this room, an NPC, or anything else.</ansi>`)
		user.SendText(``)
		user.SendText(`<ansi fg="3">Usage: feedback <your message></ansi>`)
		user.SendText(`<ansi fg="8">Example: feedback the librarian should mention the browse command</ansi>`)
		user.SendText(`<ansi fg="8">Example: feedback this room description is too long</ansi>`)
		user.SendText(`<ansi fg="8">Example: feedback love the idle messages here</ansi>`)
		user.SendText(``)
		return true, nil
	}

	// Gather context
	roomId := room.RoomId
	roomTitle := room.Title
	zoneName := room.Zone

	// Find NPCs in the room
	var npcNames []string
	for _, mobInstId := range room.GetMobs(rooms.FindAll) {
		mob := mobs.GetInstance(mobInstId)
		if mob != nil {
			npcNames = append(npcNames, mob.Character.Name)
		}
	}
	npcList := strings.Join(npcNames, ", ")
	if len(npcList) == 0 {
		npcList = "none"
	}

	// Auto-detect what the feedback references
	restLower := strings.ToLower(rest)
	var detectedSubject string

	// Check if feedback mentions any NPC by name
	for _, name := range npcNames {
		if strings.Contains(restLower, strings.ToLower(name)) {
			detectedSubject = "NPC: " + name
			break
		}
	}

	// Check if it mentions room-related words
	if detectedSubject == "" {
		roomWords := []string{"room", "description", "exits", "exit", "idle", "dark", "biome", "map"}
		for _, w := range roomWords {
			if strings.Contains(restLower, w) {
				detectedSubject = "Room: " + roomTitle
				break
			}
		}
	}

	// Check if it mentions item-related words
	if detectedSubject == "" {
		itemWords := []string{"item", "book", "reel", "film", "painting", "record", "disc", "souvenir", "container", "shelf", "shelves"}
		for _, w := range itemWords {
			if strings.Contains(restLower, w) {
				detectedSubject = "Items/Containers"
				break
			}
		}
	}

	if detectedSubject == "" {
		detectedSubject = "General"
	}

	// Format the feedback entry
	timestamp := time.Now().Format("2006-01-02 15:04:05")
	playerName := user.Character.Name

	logEntry := fmt.Sprintf("[%s] Player: %s | Zone: %s | Room: %d (%s) | NPCs: %s | Subject: %s | Feedback: %s\n",
		timestamp, playerName, zoneName, roomId, roomTitle, npcList, detectedSubject, rest)

	// Write to feedback log file
	feedbackPath := "_datafiles/world/storyworlds/feedback.log"
	f, err := os.OpenFile(feedbackPath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err == nil {
		f.WriteString(logEntry)
		f.Close()
	}

	// Notify admins via mudlog (visible in server logs)
	// Also broadcast to online admins
	adminMsg := fmt.Sprintf(`<ansi fg="yellow">[FEEDBACK]</ansi> <ansi fg="username">%s</ansi> in <ansi fg="room-title">%s</ansi> [%s]: <ansi fg="8">%s</ansi> <ansi fg="3">(%s)</ansi>`,
		playerName, roomTitle, zoneName, rest, detectedSubject)

	// Send to all admin/mod users directly
	for _, u := range users.GetAllActiveUsers() {
		if u.Role == users.RoleAdmin {
			u.SendText(adminMsg)
		}
	}

	// Confirm to the player
	user.SendText(``)
	user.SendText(fmt.Sprintf(`<ansi fg="10">Feedback recorded. Thank you!</ansi>`))
	user.SendText(fmt.Sprintf(`<ansi fg="8">Context: %s | %s (room %d) | NPCs: %s</ansi>`, zoneName, roomTitle, roomId, npcList))
	user.SendText(``)

	return true, nil
}
