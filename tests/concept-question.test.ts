import { describe, expect, it } from 'vitest';
import { hasCorrectOption, nextStreak, optionFeedback, shuffledOrder } from '../src/ui/conceptQuestion.ts';

const options = [{ text: 'a' }, { text: 'b', correct: true }, { text: 'c' }];

describe('concept question feedback', () => {
  it('knows whether a question has a correct option', () => {
    expect(hasCorrectOption(options)).toBe(true);
    expect(hasCorrectOption([{ text: 'a' }, { text: 'b' }])).toBe(false);
  });

  it('shows no feedback before a pick', () => {
    expect(options.map((_, i) => optionFeedback(options, undefined, i))).toEqual([undefined, undefined, undefined]);
  });

  it('marks a right pick as right and nothing else', () => {
    expect(options.map((_, i) => optionFeedback(options, 1, i))).toEqual([undefined, 'right', undefined]);
  });

  it('marks a wrong pick as wrong and reveals the right option', () => {
    expect(options.map((_, i) => optionFeedback(options, 0, i))).toEqual(['wrong', 'reveal', undefined]);
  });

  it('gives no feedback when no option is marked correct', () => {
    const unmarked = [{ text: 'a' }, { text: 'b' }];
    expect(unmarked.map((_, i) => optionFeedback(unmarked, 0, i))).toEqual([undefined, undefined]);
  });

  it('counts a run of right first picks and resets on a wrong one', () => {
    expect(nextStreak(0, true)).toBe(1);
    expect(nextStreak(2, true)).toBe(3);
    expect(nextStreak(3, false)).toBe(0);
  });
});

describe('concept question shuffle', () => {
  function seeded(seed: number): () => number {
    let a = seed;
    return () => {
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  it('keeps every option exactly once', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const order = shuffledOrder(5, seeded(seed));
      expect([...order].sort()).toEqual([0, 1, 2, 3, 4]);
    }
  });

  it('keeps the right option right after shuffling', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const order = shuffledOrder(options.length, seeded(seed));
      const shown = order.map((i) => options[i]!);
      expect(shown.filter((o) => o.correct)).toEqual([{ text: 'b', correct: true }]);
      // Picking the option shown where the right one landed is a right pick, by original index.
      const shownAt = order.indexOf(1);
      expect(order[shownAt]).toBe(1);
      expect(optionFeedback(options, order[shownAt], 1)).toBe('right');
      expect(optionFeedback(options, order[shownAt], 0)).toBeUndefined();
    }
  });

  it('can put the right option anywhere', () => {
    const positions = new Set<number>();
    for (let seed = 1; seed <= 200; seed++) positions.add(shuffledOrder(3, seeded(seed)).indexOf(1));
    expect(positions.size).toBe(3);
  });

  it('is the identity for an extreme random source and handles 0 and 1 options', () => {
    expect(shuffledOrder(0)).toEqual([]);
    expect(shuffledOrder(1)).toEqual([0]);
    expect(shuffledOrder(3, () => 0.999999)).toEqual([0, 1, 2]);
  });
});
