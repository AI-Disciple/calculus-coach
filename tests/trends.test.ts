import { describe, expect, it } from 'vitest';
import { BEATEN_MIN_ATTEMPTS, TREND_WINDOW_DAYS, mistakeTrends } from '../src/progress/trends.ts';
import { MISTAKE_TYPES, type Attempt, type MistakeType, type Progress } from '../src/progress/progress.ts';

const NOW = '2026-10-13T12:00:00.000Z';
const DAY = 86_400_000;

/** An instant `days` whole days before NOW, shifted by `offsetMs`. */
function ago(days: number, offsetMs = 0): string {
  return new Date(Date.parse(NOW) - days * DAY + offsetMs).toISOString();
}

let counter = 0;
function wrong(at: string, mistakeType: MistakeType): Attempt {
  counter += 1;
  return { id: `a${counter}`, at, exerciseId: 'x.one', tier: 'standard', result: 'wrong', mistakeType };
}
function right(at: string): Attempt {
  counter += 1;
  return { id: `a${counter}`, at, exerciseId: 'x.one', tier: 'standard', result: 'right' };
}
function progressOf(attempts: Attempt[]): Progress {
  return { attempts, reviews: [] };
}
function trend(attempts: Attempt[], type: MistakeType) {
  return mistakeTrends(progressOf(attempts), NOW).find((item) => item.mistakeType === type)!;
}

describe('mistake trends', () => {
  it('exports the window and the beaten threshold', () => {
    expect(TREND_WINDOW_DAYS).toBe(14);
    expect(BEATEN_MIN_ATTEMPTS).toBe(5);
  });

  it('always lists all seven types in order', () => {
    const result = mistakeTrends(progressOf([]), NOW);
    expect(result.map((item) => item.mistakeType)).toEqual([...MISTAKE_TYPES]);
    expect(result.every((item) => item.recent === 0 && item.before === 0 && item.direction === 'same' && !item.beaten)).toBe(true);
  });

  it('puts exactly 14 days ago in the earlier window and 14 days less a moment in the recent one', () => {
    const t = 'misread-question';
    expect(trend([wrong(ago(14), t)], t)).toMatchObject({ recent: 0, before: 1 });
    expect(trend([wrong(ago(14, 1), t)], t)).toMatchObject({ recent: 1, before: 0 });
    expect(trend([wrong(NOW, t)], t)).toMatchObject({ recent: 1, before: 0 });
  });

  it('ends the earlier window at 28 days', () => {
    const t = 'misread-question';
    expect(trend([wrong(ago(28), t)], t)).toMatchObject({ recent: 0, before: 0 });
    expect(trend([wrong(ago(28, 1), t)], t)).toMatchObject({ recent: 0, before: 1 });
  });

  it('ignores attempts after now', () => {
    const t = 'misread-question';
    expect(trend([wrong(ago(0, 1), t)], t)).toMatchObject({ recent: 0, before: 0 });
  });

  it('gives the direction from recent against before', () => {
    const t = 'wrong-formula-or-rule';
    expect(trend([wrong(ago(1), t), wrong(ago(20), t), wrong(ago(21), t)], t).direction).toBe('down');
    expect(trend([wrong(ago(1), t), wrong(ago(2), t), wrong(ago(20), t)], t).direction).toBe('up');
    expect(trend([wrong(ago(1), t), wrong(ago(20), t)], t).direction).toBe('same');
  });

  it('counts one mistake per wrong step and ignores right attempts', () => {
    const steps: Attempt = {
      id: 'steps1',
      at: ago(1),
      exerciseId: 'x.two',
      tier: 'exam',
      steps: [
        { result: 'wrong', mistakeType: 'unjustified-reasoning' },
        { result: 'wrong', mistakeType: 'unjustified-reasoning' },
        { result: 'right' },
      ],
    };
    expect(trend([steps, right(ago(1))], 'unjustified-reasoning').recent).toBe(2);
  });

  describe('beaten', () => {
    const t = 'sign-or-arithmetic-slip';
    const earlier = wrong(ago(20), t);
    const recentRights = (n: number) => Array.from({ length: n }, (_, i) => right(ago(1 + i)));

    it('is true with five recent attempts, none of this type, and earlier history', () => {
      expect(trend([earlier, ...recentRights(BEATEN_MIN_ATTEMPTS)], t).beaten).toBe(true);
    });

    it('is false with only four recent attempts', () => {
      expect(trend([earlier, ...recentRights(4)], t).beaten).toBe(false);
    });

    it('is false for a type never made', () => {
      expect(trend(recentRights(8), t).beaten).toBe(false);
    });

    it('is false when the type still occurs recently', () => {
      expect(trend([earlier, wrong(ago(1), t), ...recentRights(5)], t).beaten).toBe(false);
    });

    it('counts a mistake of another type as an attempt', () => {
      const others = Array.from({ length: 5 }, (_, i) => wrong(ago(1 + i), 'misread-question'));
      expect(trend([earlier, ...others], t).beaten).toBe(true);
    });

    it('takes earlier history from exactly 14 days ago, and ignores future attempts', () => {
      expect(trend([wrong(ago(14), t), ...recentRights(5)], t).beaten).toBe(true);
      expect(trend([wrong(ago(14, 1), t), ...recentRights(5)], t).beaten).toBe(false);
      expect(trend([wrong(ago(0, 1), t), ...recentRights(5)], t).beaten).toBe(false);
    });

    it('counts history older than 28 days as earlier history', () => {
      expect(trend([wrong(ago(90), t), ...recentRights(5)], t).beaten).toBe(true);
    });
  });
});
