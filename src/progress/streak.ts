import type { Progress } from './progress.ts';

/** Every moment the student did something: an attempt, a paper result or a concept question pick. */
export function activityTimestamps(progress: Progress): string[] {
  return [
    ...progress.attempts.map((attempt) => attempt.at),
    ...(progress.paperResults ?? []).map((result) => result.at),
    ...(progress.conceptPicks ?? []).map((entry) => entry.at),
  ];
}

/** The calendar day 'YYYY-MM-DD' of an instant in an IANA time zone. */
export function localDay(iso: string, timeZone: string): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(iso));
}

/** Whole days between two 'YYYY-MM-DD' strings. Works on dates only, so a clock change cannot shift a day. */
export function daysBetween(from: string, to: string): number {
  return Math.round((dayNumber(to) - dayNumber(from)) / 86_400_000);
}

function dayNumber(day: string): number {
  const [year, month, date] = day.split('-').map(Number);
  return Date.UTC(year!, month! - 1, date!);
}

/**
 * Days are local days in `timeZone`. One empty day between two active days does not break the streak, two in a row do.
 * Today being empty is never a skipped day. The streak is alive when the latest active day is today, yesterday or
 * the day before yesterday. `days` counts active days only.
 */
export function dailyStreak(
  timestamps: readonly string[],
  now: string,
  timeZone: string,
): { days: number; activeToday: boolean } {
  const nowMs = Date.parse(now);
  const today = localDay(now, timeZone);
  const active = [
    ...new Set(timestamps.filter((stamp) => Date.parse(stamp) <= nowMs).map((stamp) => localDay(stamp, timeZone))),
  ].sort();
  const activeToday = active.at(-1) === today;
  const latest = active.at(-1);
  if (latest === undefined || daysBetween(latest, today) > 2) return { days: 0, activeToday };
  let days = 1;
  for (let i = active.length - 1; i > 0; i -= 1) {
    // A gap of 2 means one empty day between, a gap of 3 or more means two or more.
    if (daysBetween(active[i - 1]!, active[i]!) > 2) break;
    days += 1;
  }
  return { days, activeToday };
}
