/**
 * Production-ready in-memory sliding window rate limiter
 * Protects against brute-force, scraping, and endpoint flooding.
 * Compatible with edge & node runtimes. In multi-instance deployments,
 * can be backed by Redis / Upstash with identical interface.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const trackers = new Map<string, RateLimitRecord>();

// Automatically cleanup stale records every 5 minutes to prevent memory leak
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of trackers.entries()) {
      // Retain only timestamps from the last 1 hour max
      record.timestamps = record.timestamps.filter((ts) => now - ts < 3600000);
      if (record.timestamps.length === 0) {
        trackers.delete(key);
      }
    }
  }, 300000);
}

export interface RateLimitOptions {
  limit: number;       // Maximum allowed requests in window
  windowMs: number;    // Window duration in milliseconds
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetInSeconds: number;
}

/**
 * Check if an identifier (e.g. IP + route) is within the rate limit.
 */
export function checkRateLimit(
  identifier: string,
  options: RateLimitOptions
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - options.windowMs;

  const record = trackers.get(identifier) || { timestamps: [] };

  // Filter out timestamps outside the active window
  const activeTimestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (activeTimestamps.length >= options.limit) {
    const oldest = activeTimestamps[0];
    const resetInSeconds = Math.ceil((oldest + options.windowMs - now) / 1000);

    return {
      success: false,
      limit: options.limit,
      remaining: 0,
      resetInSeconds: Math.max(1, resetInSeconds),
    };
  }

  // Record this attempt
  activeTimestamps.push(now);
  trackers.set(identifier, { timestamps: activeTimestamps });

  return {
    success: true,
    limit: options.limit,
    remaining: options.limit - activeTimestamps.length,
    resetInSeconds: Math.ceil(options.windowMs / 1000),
  };
}

/**
 * Reset rate limit tracker (useful for unit tests)
 */
export function clearRateLimits() {
  trackers.clear();
}
