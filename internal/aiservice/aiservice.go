package aiservice

import (
	"context"
	"sync"

	"github.com/GoMudEngine/GoMud/internal/configs"
	"github.com/GoMudEngine/GoMud/internal/mudlog"
)

// Provider is the interface for LLM backends
type Provider interface {
	Complete(ctx context.Context, req CompletionRequest) (string, error)
	Name() string
}

// CompletionRequest holds everything needed for an LLM call
type CompletionRequest struct {
	SystemPrompt string
	Messages     []Message
	MaxTokens    int
}

// Message represents a single exchange in conversation history
type Message struct {
	Role    string `json:"role"`    // "user" or "assistant"
	Content string `json:"content"`
}

var (
	activeProvider Provider
	providerMu     sync.RWMutex
	initialized    bool
)

// Init sets up the AI service based on config
func Init() {
	cfg := configs.GetIntegrationsConfig().AI

	if !bool(cfg.Enabled) {
		mudlog.Info("aiservice", "status", "disabled")
		return
	}

	providerMu.Lock()
	defer providerMu.Unlock()

	switch string(cfg.Provider) {
	case "anthropic":
		key := string(cfg.AnthropicKey)
		if key == "" {
			mudlog.Error("aiservice", "error", "Anthropic API key not set")
			return
		}
		activeProvider = NewAnthropicProvider(key, string(cfg.AnthropicModel))
		mudlog.Info("aiservice", "provider", "anthropic", "model", string(cfg.AnthropicModel))
	case "ollama":
		activeProvider = NewOllamaProvider(string(cfg.OllamaUrl), string(cfg.OllamaModel))
		mudlog.Info("aiservice", "provider", "ollama", "model", string(cfg.OllamaModel))
	default:
		mudlog.Error("aiservice", "error", "unknown provider: "+string(cfg.Provider))
		return
	}

	initialized = true
	mudlog.Info("aiservice", "status", "initialized")
}

// GetProvider returns the active provider (nil if not initialized)
func GetProvider() Provider {
	providerMu.RLock()
	defer providerMu.RUnlock()
	return activeProvider
}

// IsEnabled returns true if the AI service is initialized and ready
func IsEnabled() bool {
	providerMu.RLock()
	defer providerMu.RUnlock()
	return initialized && activeProvider != nil
}
