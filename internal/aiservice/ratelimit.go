package aiservice

import (
	"sync"
	"time"
)

type bucket struct {
	tokens    int
	lastReset time.Time
}

type RateLimiter struct {
	mu       sync.Mutex
	buckets  map[int]*bucket
	maxCalls int
	window   time.Duration
}

var globalRateLimiter *RateLimiter

func InitRateLimiter(maxCalls int, windowSecs int) {
	if maxCalls <= 0 {
		maxCalls = 20
	}
	if windowSecs <= 0 {
		windowSecs = 600
	}
	globalRateLimiter = &RateLimiter{
		buckets:  make(map[int]*bucket),
		maxCalls: maxCalls,
		window:   time.Duration(windowSecs) * time.Second,
	}
}

// Allow checks if the user has remaining rate limit
func (r *RateLimiter) Allow(userId int) bool {
	r.mu.Lock()
	defer r.mu.Unlock()

	now := time.Now()
	b, ok := r.buckets[userId]
	if !ok {
		b = &bucket{tokens: r.maxCalls, lastReset: now}
		r.buckets[userId] = b
	}

	// Reset window if expired
	if now.Sub(b.lastReset) >= r.window {
		b.tokens = r.maxCalls
		b.lastReset = now
	}

	if b.tokens <= 0 {
		return false
	}

	b.tokens--
	return true
}

// GetRateLimiter returns the global rate limiter
func GetRateLimiter() *RateLimiter {
	return globalRateLimiter
}
