import { daysBetween, localDay } from './streak.ts';

/** The day of the final exam, a calendar date. */
export const FINAL_EXAM_DATE = '2026-11-30';

/** Whole calendar days from today (the local day in `timeZone`) to the final. 0 on the day and after. */
export function daysUntilFinal(now: string, timeZone: string): number {
  return Math.max(0, daysBetween(localDay(now, timeZone), FINAL_EXAM_DATE));
}
