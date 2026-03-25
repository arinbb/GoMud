package configs

type Integrations struct {
	Discord IntegrationsDiscord `yaml:"Discord"`
	AI      IntegrationsAI      `yaml:"AI"`
}

type IntegrationsDiscord struct {
	WebhookUrl ConfigSecret `yaml:"WebhookUrl" env:"DISCORD_WEBHOOK_URL"` // Optional Discord URL to post updates to
}

type IntegrationsAI struct {
	Enabled        ConfigBool   `yaml:"Enabled"`                                        // Master switch for AI NPC dialogue
	Provider       ConfigString `yaml:"Provider"`                                       // "anthropic" or "ollama"
	AnthropicKey   ConfigSecret `yaml:"AnthropicKey" env:"ANTHROPIC_API_KEY"`           // Anthropic API key
	AnthropicModel ConfigString `yaml:"AnthropicModel"`                                 // Default: claude-sonnet-4-20250514
	OllamaUrl      ConfigString `yaml:"OllamaUrl"`                                     // Default: http://localhost:11434
	OllamaModel    ConfigString `yaml:"OllamaModel"`                                   // Default: llama3.2
	MaxTokens      ConfigInt    `yaml:"MaxTokens"`                                      // Default: 150
	MemorySize     ConfigInt    `yaml:"MemorySize"`                                     // Conversation history size, default: 5
	RateLimit      ConfigInt    `yaml:"RateLimit"`                                      // Max AI calls per window, default: 20
	RateWindow     ConfigInt    `yaml:"RateWindow"`                                     // Rate window in seconds, default: 600
	TimeoutSecs    ConfigInt    `yaml:"TimeoutSecs"`                                    // API timeout, default: 10
}

func (i *Integrations) Validate() {

	// Ignore Discord

	// AI defaults
	if i.AI.Provider == `` {
		i.AI.Provider.Set(`anthropic`)
	}
	if i.AI.AnthropicModel == `` {
		i.AI.AnthropicModel.Set(`claude-sonnet-4-20250514`)
	}
	if i.AI.OllamaUrl == `` {
		i.AI.OllamaUrl.Set(`http://localhost:11434`)
	}
	if i.AI.OllamaModel == `` {
		i.AI.OllamaModel.Set(`llama3.2`)
	}
	if i.AI.MaxTokens == 0 {
		i.AI.MaxTokens.Set(`150`)
	}
	if i.AI.MemorySize == 0 {
		i.AI.MemorySize.Set(`5`)
	}
	if i.AI.RateLimit == 0 {
		i.AI.RateLimit.Set(`20`)
	}
	if i.AI.RateWindow == 0 {
		i.AI.RateWindow.Set(`600`)
	}
	if i.AI.TimeoutSecs == 0 {
		i.AI.TimeoutSecs.Set(`10`)
	}
}

func GetIntegrationsConfig() Integrations {
	configDataLock.RLock()
	defer configDataLock.RUnlock()

	if !configData.validated {
		configData.Validate()
	}
	return configData.Integrations
}
