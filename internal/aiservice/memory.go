package aiservice

import (
	"fmt"
	"sync"
	"time"
)

const memoryTTL = 10 * time.Minute

type conversationEntry struct {
	messages  []Message
	lastUsed  time.Time
}

type ConversationMemory struct {
	mu       sync.RWMutex
	sessions map[string]*conversationEntry
	maxSize  int
}

var globalMemory *ConversationMemory

func InitMemory(maxSize int) {
	if maxSize <= 0 {
		maxSize = 5
	}
	globalMemory = &ConversationMemory{
		sessions: make(map[string]*conversationEntry),
		maxSize:  maxSize,
	}

	// Start cleanup goroutine
	go func() {
		ticker := time.NewTicker(time.Minute)
		for range ticker.C {
			globalMemory.cleanup()
		}
	}()
}

func memoryKey(userId int, mobInstanceId int) string {
	return fmt.Sprintf("%d-%d", userId, mobInstanceId)
}

// Get returns conversation history for a player-mob pair
func (m *ConversationMemory) Get(userId int, mobInstanceId int) []Message {
	m.mu.RLock()
	defer m.mu.RUnlock()

	key := memoryKey(userId, mobInstanceId)
	entry, ok := m.sessions[key]
	if !ok {
		return nil
	}

	// Return a copy
	result := make([]Message, len(entry.messages))
	copy(result, entry.messages)
	return result
}

// Add stores a user question and assistant response
func (m *ConversationMemory) Add(userId int, mobInstanceId int, userMsg Message, assistantMsg Message) {
	m.mu.Lock()
	defer m.mu.Unlock()

	key := memoryKey(userId, mobInstanceId)
	entry, ok := m.sessions[key]
	if !ok {
		entry = &conversationEntry{
			messages: make([]Message, 0, m.maxSize*2),
		}
		m.sessions[key] = entry
	}

	entry.messages = append(entry.messages, userMsg, assistantMsg)
	entry.lastUsed = time.Now()

	// Trim to max size (each exchange is 2 messages)
	maxMessages := m.maxSize * 2
	if len(entry.messages) > maxMessages {
		entry.messages = entry.messages[len(entry.messages)-maxMessages:]
	}
}

// cleanup removes expired sessions
func (m *ConversationMemory) cleanup() {
	m.mu.Lock()
	defer m.mu.Unlock()

	now := time.Now()
	for key, entry := range m.sessions {
		if now.Sub(entry.lastUsed) > memoryTTL {
			delete(m.sessions, key)
		}
	}
}

// GetMemory returns the global conversation memory
func GetMemory() *ConversationMemory {
	return globalMemory
}
