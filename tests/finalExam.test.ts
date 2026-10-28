import { describe, expect, it } from 'vitest';
import { FINAL_EXAM_DATE, daysUntilFinal } from '../src/progress/finalExam.ts';

describe('daysUntilFinal', () => {
  it('names the final date', () => {
    expect(FINAL_EXAM_DATE).toBe('2026-11-30');
  });

  it('counts whole calendar days', () => {
    expect(daysUntilFinal('2026-10-13T09:00:00Z', 'UTC')).toBe(48);
    expect(daysUntilFinal('2026-10-13T23:59:00Z', 'UTC')).toBe(48);
  });

  it('is 0 on the day and after', () => {
    expect(daysUntilFinal('2026-11-30T00:00:00Z', 'UTC')).toBe(0);
    expect(daysUntilFinal('2026-11-30T20:00:00Z', 'UTC')).toBe(0);
    expect(daysUntilFinal('2026-12-15T10:00:00Z', 'UTC')).toBe(0);
  });

  it('uses the local day of the zone', () => {
    const instant = '2026-10-12T23:30:00Z';
    expect(daysUntilFinal(instant, 'UTC')).toBe(49);
    expect(daysUntilFinal(instant, 'Europe/Paris')).toBe(48);
    expect(daysUntilFinal('2026-11-29T23:30:00Z', 'Europe/Paris')).toBe(0);
    expect(daysUntilFinal('2026-11-29T23:30:00Z', 'UTC')).toBe(1);
  });

  it('is not shifted by the October clock change', () => {
    expect(daysUntilFinal('2026-10-25T12:00:00Z', 'Europe/Paris')).toBe(36);
  });
});
