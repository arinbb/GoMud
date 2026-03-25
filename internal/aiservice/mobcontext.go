package aiservice

import (
	"fmt"
	"os"
	"path/filepath"
	"sync"

	"github.com/GoMudEngine/GoMud/internal/configs"
	"github.com/GoMudEngine/GoMud/internal/mudlog"
	"gopkg.in/yaml.v2"
)

// MobAIContext holds the AI personality for a mob
type MobAIContext struct {
	SystemPrompt  string `yaml:"systemprompt"`
	Knowledge     string `yaml:"knowledge"`
	Style         string `yaml:"style"`
	MaxResponseLen int   `yaml:"maxresponselen"`
}

var (
	contextCache sync.Map // map[int]*MobAIContext keyed by mobId
)

// LoadMobAIContext loads the AI context for a mob from its zone's ai/ directory
func LoadMobAIContext(mobId int, zone string) *MobAIContext {
	// Check cache first
	if cached, ok := contextCache.Load(mobId); ok {
		if cached == nil {
			return nil // Cached negative result
		}
		return cached.(*MobAIContext)
	}

	// Try to find the AI context file
	dataPath := string(configs.GetConfig().FilePaths.DataFiles)
	aiDir := filepath.Join(dataPath, "ai", zone)

	// Look for any file matching the mob ID
	pattern := filepath.Join(aiDir, fmt.Sprintf("%d-*.yaml", mobId))
	matches, err := filepath.Glob(pattern)
	if err != nil || len(matches) == 0 {
		// Cache negative result so we don't keep looking
		contextCache.Store(mobId, nil)
		return nil
	}

	// Load the first match
	data, err := os.ReadFile(matches[0])
	if err != nil {
		mudlog.Error("aiservice", "error", fmt.Sprintf("reading AI context %s: %v", matches[0], err))
		contextCache.Store(mobId, nil)
		return nil
	}

	var ctx MobAIContext
	if err := yaml.Unmarshal(data, &ctx); err != nil {
		mudlog.Error("aiservice", "error", fmt.Sprintf("parsing AI context %s: %v", matches[0], err))
		contextCache.Store(mobId, nil)
		return nil
	}

	if ctx.MaxResponseLen <= 0 {
		ctx.MaxResponseLen = 200
	}

	contextCache.Store(mobId, &ctx)
	mudlog.Info("aiservice", "loaded AI context", fmt.Sprintf("mob %d from %s", mobId, matches[0]))
	return &ctx
}

// HasAIContext returns true if the mob has an AI personality defined
func HasAIContext(mobId int, zone string) bool {
	return LoadMobAIContext(mobId, zone) != nil
}

// ClearCache clears the context cache (for reloading)
func ClearCache() {
	contextCache = sync.Map{}
}
