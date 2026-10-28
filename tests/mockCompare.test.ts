import { describe, expect, it } from 'vitest';
import type { PaperResult } from '../src/progress/progress.ts';
import { compareMockResult } from '../src/progress/mockCompare.ts';

const PAPERS = [
  { id: 'mock-a', presentation: 'exam' },
  { id: 'mock-b', presentation: 'exam' },
  { id: 'mock-c', presentation: 'other' },
];

function result(id: string, paperId: string, earned: number, minute: number, blocks?: PaperResult['blocks']): PaperResult {
  return {
    id,
    paperId,
    earned,
    total: 20,
    at: `2026-03-02T10:${String(minute).padStart(2, '0')}:00.000Z`,
    ...(blocks ? { blocks } : {}),
  };
}

describe('compareMockResult', () => {
  it('has nothing to compare for a first attempt', () => {
    const first = result('r1', 'mock-a', 10, 1);
    expect(compareMockResult(first, [first], PAPERS)).toEqual({
      against: null,
      totalChange: null,
      blocks: [],
      personalBest: false,
    });
  });

  it('compares with the latest earlier result of the same paper', () => {
    const old = result('r1', 'mock-a', 8, 1);
    const mid = result('r2', 'mock-a', 12, 2);
    const other = result('r3', 'mock-b', 3, 3);
    const now = result('r4', 'mock-a', 11, 4);
    const comparison = compareMockResult(now, [old, mid, other, now], PAPERS);
    expect(comparison.against).toBe('paper');
    expect(comparison.previous).toBe(mid);
    expect(comparison.totalChange).toBe(-1);
    expect(comparison.personalBest).toBe(false);
  });

  it('falls back to a paper with the same presentation', () => {
    const sibling = result('r1', 'mock-b', 8, 1);
    const unrelated = result('r2', 'mock-c', 1, 2);
    const now = result('r3', 'mock-a', 9, 3);
    const comparison = compareMockResult(now, [sibling, unrelated, now], PAPERS);
    expect(comparison.against).toBe('format');
    expect(comparison.previous).toBe(sibling);
    expect(comparison.totalChange).toBe(1);
    expect(comparison.personalBest).toBe(true);
  });

  it('has nothing to compare when only other formats exist', () => {
    const unrelated = result('r1', 'mock-c', 1, 1);
    const now = result('r2', 'mock-a', 9, 2);
    const comparison = compareMockResult(now, [unrelated, now], PAPERS);
    expect(comparison).toMatchObject({ against: null, totalChange: null, personalBest: false });
    expect(comparison.previous).toBeUndefined();
  });

  it('ignores results later than this one', () => {
    const now = result('r1', 'mock-a', 9, 1);
    const later = result('r2', 'mock-a', 15, 5);
    expect(compareMockResult(now, [now, later], PAPERS).against).toBeNull();
  });

  it('lets the later entry win a tie on time and counts an equal timestamp as earlier', () => {
    const a = result('r1', 'mock-a', 5, 1);
    const b = result('r2', 'mock-a', 6, 1);
    const now = result('r3', 'mock-a', 7, 1);
    expect(compareMockResult(now, [a, b, now], PAPERS).previous).toBe(b);
  });

  it('is a personal best only when strictly above every earlier share', () => {
    const old = result('r1', 'mock-a', 10, 1);
    const high = result('r2', 'mock-a', 14, 2);
    const equal = result('r3', 'mock-a', 14, 3);
    expect(compareMockResult(equal, [old, high, equal], PAPERS).personalBest).toBe(false);
    const better = result('r4', 'mock-a', 15, 3);
    expect(compareMockResult(better, [old, high, better], PAPERS).personalBest).toBe(true);
    const lower = result('r5', 'mock-a', 12, 3);
    expect(compareMockResult(lower, [old, high, lower], PAPERS).personalBest).toBe(false);
  });

  it('works out block changes against the previous blocks', () => {
    const previous = result('r1', 'mock-a', 8, 1, [
      { blockId: 'chain-rule', title: 'Chain rule', earned: 0.5, total: 1 },
      { blockId: 'critical-points', title: 'Critical points', earned: 3, total: 4 },
    ]);
    const now = result('r2', 'mock-a', 9, 2, [
      { blockId: 'chain-rule', title: 'Chain rule', earned: 1, total: 1 },
      { blockId: 'critical-points', title: 'Critical points', earned: 2, total: 4 },
      { blockId: 'double-integrals', title: 'Double integrals', earned: 3, total: 6.5 },
    ]);
    expect(compareMockResult(now, [previous, now], PAPERS).blocks).toEqual([
      { blockId: 'chain-rule', title: 'Chain rule', earned: 1, total: 1, change: 0.5 },
      { blockId: 'critical-points', title: 'Critical points', earned: 2, total: 4, change: -1 },
      { blockId: 'double-integrals', title: 'Double integrals', earned: 3, total: 6.5, change: null },
    ]);
  });

  it('gives null changes when the previous result has no blocks', () => {
    const previous = result('r1', 'mock-a', 8, 1);
    const now = result('r2', 'mock-a', 9, 2, [{ blockId: 'chain-rule', title: 'Chain rule', earned: 1, total: 1 }]);
    expect(compareMockResult(now, [previous, now], PAPERS).blocks[0]?.change).toBeNull();
  });
});
