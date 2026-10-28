import { mistakeTypes } from './dashboard.ts';
import { MISTAKE_TYPES, type MistakeType, type Progress } from './progress.ts';

export const TREND_WINDOW_DAYS = 14;
/** A type counts as beaten only after this many attempts in the recent window, so a quiet fortnight proves nothing. */
export const BEATEN_MIN_ATTEMPTS = 5;

export type TrendDirection = 'down' | 'up' | 'same';

export type MistakeTrend = {
  mistakeType: MistakeType;
  /** Mistakes of this type in (now - 14 days, now]. */
  recent: number;
  /** Mistakes of this type in (now - 28 days, now - 14 days]. */
  before: number;
  direction: TrendDirection;
  beaten: boolean;
};

const WINDOW_MS = TREND_WINDOW_DAYS * 86_400_000;

/**
 * One entry per mistake type, in MISTAKE_TYPES order. Windows are rolling and attempts after `now` are ignored.
 * A type is beaten when it did not occur in the recent window, the recent window holds at least
 * BEATEN_MIN_ATTEMPTS attempts of any kind, and the type occurred at least once at or before now - 14 days.
 */
export function mistakeTrends(progress: Progress, now: string): MistakeTrend[] {
  const nowMs = Date.parse(now);
  const recentStart = nowMs - WINDOW_MS;
  const beforeStart = nowMs - 2 * WINDOW_MS;
  const counted = progress.attempts
    .map((attempt) => ({ atMs: Date.parse(attempt.at), types: mistakeTypes(attempt) }))
    .filter((attempt) => attempt.atMs <= nowMs);
  const recentAttempts = counted.filter((attempt) => attempt.atMs > recentStart).length;

  return MISTAKE_TYPES.map((mistakeType) => {
    let recent = 0;
    let before = 0;
    let earlier = false;
    for (const attempt of counted) {
      const hits = attempt.types.filter((type) => type === mistakeType).length;
      if (hits === 0) continue;
      if (attempt.atMs > recentStart) recent += hits;
      else {
        earlier = true;
        if (attempt.atMs > beforeStart) before += hits;
      }
    }
    const direction: TrendDirection = recent < before ? 'down' : recent > before ? 'up' : 'same';
    return {
      mistakeType,
      recent,
      before,
      direction,
      beaten: recent === 0 && recentAttempts >= BEATEN_MIN_ATTEMPTS && earlier,
    };
  });
}
