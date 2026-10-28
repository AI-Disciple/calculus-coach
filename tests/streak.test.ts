import { describe, expect, it } from 'vitest';
import { activityTimestamps, dailyStreak, localDay } from '../src/progress/streak.ts';
import type { Progress } from '../src/progress/progress.ts';

describe('activityTimestamps', () => {
  it('collects attempts, paper results and concept question picks, and ignores card ratings of older files', () => {
    const progress: Progress = {
      attempts: [{ id: 'a1', at: '2026-10-01T10:00:00.000Z', exerciseId: 'x.one', tier: 'basic', result: 'right' }],
      reviews: [],
      paperResults: [{ id: 'p1', at: '2026-10-02T10:00:00.000Z', paperId: 'm', earned: 1, total: 2 }],
      conceptPicks: [{ id: 'q1', at: '2026-10-03T10:00:00.000Z', questionId: 'n.question', right: true }],
      cardRatings: [{ id: 'c1', at: '2026-10-04T10:00:00.000Z', cardId: 'n.card', rating: 'got-it' }],
    };
    expect(activityTimestamps(progress)).toEqual([
      '2026-10-01T10:00:00.000Z',
      '2026-10-02T10:00:00.000Z',
      '2026-10-03T10:00:00.000Z',
    ]);
    expect(activityTimestamps({ attempts: [], reviews: [] })).toEqual([]);
  });
});

describe('localDay', () => {
  it('gives the calendar day in each zone for one instant', () => {
    const instant = '2026-10-12T23:30:00Z';
    expect(localDay(instant, 'Europe/London')).toBe('2026-10-13');
    expect(localDay(instant, 'Europe/Paris')).toBe('2026-10-13');
    expect(localDay(instant, 'Asia/Tokyo')).toBe('2026-10-13');
    expect(localDay(instant, 'UTC')).toBe('2026-10-12');
  });

  it('keeps a late evening in New York on its own day', () => {
    expect(localDay('2026-10-13T02:30:00Z', 'America/New_York')).toBe('2026-10-12');
    expect(localDay('2026-10-13T05:30:00Z', 'America/New_York')).toBe('2026-10-13');
  });
});

const TZ = 'UTC';
const noon = (day: string) => `${day}T12:00:00Z`;

describe('dailyStreak', () => {
  it('is zero without activity', () => {
    expect(dailyStreak([], noon('2026-10-13'), TZ)).toEqual({ days: 0, activeToday: false });
  });

  it('counts consecutive days including today', () => {
    const stamps = [noon('2026-10-11'), noon('2026-10-12'), noon('2026-10-13')];
    expect(dailyStreak(stamps, noon('2026-10-13'), TZ)).toEqual({ days: 3, activeToday: true });
  });

  it('counts a day with many entries once', () => {
    const stamps = ['2026-10-13T01:00:00Z', '2026-10-13T02:00:00Z', '2026-10-13T03:00:00Z'];
    expect(dailyStreak(stamps, noon('2026-10-13'), TZ)).toEqual({ days: 1, activeToday: true });
  });

  it('stays alive when today is empty but yesterday is active', () => {
    const stamps = [noon('2026-10-11'), noon('2026-10-12')];
    expect(dailyStreak(stamps, noon('2026-10-13'), TZ)).toEqual({ days: 2, activeToday: false });
  });

  it('survives one skipped day without counting it', () => {
    const stamps = [noon('2026-10-10'), noon('2026-10-12'), noon('2026-10-13')];
    expect(dailyStreak(stamps, noon('2026-10-13'), TZ)).toEqual({ days: 3, activeToday: true });
  });

  it('stays alive with one skipped day before an empty today', () => {
    expect(dailyStreak([noon('2026-10-11')], noon('2026-10-13'), TZ)).toEqual({ days: 1, activeToday: false });
  });

  it('breaks on two skipped days', () => {
    const stamps = [noon('2026-10-09'), noon('2026-10-12'), noon('2026-10-13')];
    expect(dailyStreak(stamps, noon('2026-10-13'), TZ)).toEqual({ days: 2, activeToday: true });
  });

  it('is dead when the latest active day is three days back', () => {
    expect(dailyStreak([noon('2026-10-10')], noon('2026-10-13'), TZ)).toEqual({ days: 0, activeToday: false });
  });

  it('ignores timestamps after now', () => {
    const stamps = [noon('2026-10-12'), noon('2026-10-14')];
    expect(dailyStreak(stamps, noon('2026-10-13'), TZ)).toEqual({ days: 1, activeToday: false });
  });

  it('uses the local day of the zone', () => {
    const stamps = ['2026-10-12T23:30:00Z'];
    const now = '2026-10-13T08:00:00Z';
    expect(dailyStreak(stamps, now, 'Europe/London')).toEqual({ days: 1, activeToday: true });
    expect(dailyStreak(stamps, now, 'Europe/Paris')).toEqual({ days: 1, activeToday: true });
    expect(dailyStreak(stamps, now, 'UTC')).toEqual({ days: 1, activeToday: false });
  });

  it('is not shifted by the Paris clock change on 25 October', () => {
    const stamps = [
      '2026-10-23T10:00:00Z',
      '2026-10-24T10:00:00Z',
      '2026-10-25T10:00:00Z',
      '2026-10-26T10:00:00Z',
      '2026-10-27T10:00:00Z',
    ];
    expect(dailyStreak(stamps, '2026-10-27T12:00:00Z', 'Europe/Paris')).toEqual({ days: 5, activeToday: true });
    expect(localDay('2026-10-24T22:30:00Z', 'Europe/Paris')).toBe('2026-10-25');
    expect(localDay('2026-10-25T23:30:00Z', 'Europe/Paris')).toBe('2026-10-26');
  });
});
