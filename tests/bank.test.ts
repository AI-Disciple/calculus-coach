import { describe, expect, it } from 'vitest';
import type { ContentBundle, Exercise } from '../src/content/schema.ts';
import { countByTier, countExercises, exerciseBank, exerciseOrigin, filterBank, NO_FILTER } from '../src/ui/bank.ts';

const exercise = (id: string, tier: Exercise['tier'], extra: Partial<Exercise> = {}): Exercise => ({
  type: 'exercise',
  id,
  tier,
  topics: ['t'],
  statement: `Statement of ${id}.`,
  solution: 'Solution.',
  ...extra,
});

const node = (id: string, lecture: number, blocks: Exercise[], hidden = false) => ({
  id,
  title: `Title of ${id}`,
  lecture,
  hidden,
  blocks: [{ type: 'plain-explanation', text: 'Text.' }, ...blocks],
});

const a = node('a', 1, [exercise('a.exam', 'exam'), exercise('a.core', 'basic'), exercise('a.extra', 'standard', { number: '2.1' })]);
const b = node('b', 2, [exercise('b.past', 'exam', { pastExam: { year: 2025, paper: 'Final', question: '4a', points: 2 } })]);
const empty = node('empty', 2, []);
const fixture = node('fixture', 2, [exercise('fixture.x', 'basic')], true);
const outside = node('outside', 2, [exercise('outside.old', 'exam', { outOfScope: true }), exercise('outside.plain', 'basic')], true);

const bundle = {
  lectures: [
    { number: 1, title: 'One', nodes: [a] },
    { number: 2, title: 'Two', nodes: [b, empty] },
  ],
  hiddenNodes: [fixture, outside],
} as unknown as ContentBundle;

describe('exerciseBank', () => {
  const bank = exerciseBank(bundle);

  it('groups by lecture and topic and orders each topic from Core to Exam level', () => {
    expect(bank.map((lecture) => lecture.number)).toEqual([1, 2]);
    expect(bank[0]!.nodes.map((n) => n.id)).toEqual(['a']);
    expect(bank[0]!.nodes[0]!.exercises.map((e) => e.exercise.id)).toEqual(['a.core', 'a.extra', 'a.exam']);
  });

  it('leaves out topics without exercises and hidden fixtures, and keeps out-of-scope exercises', () => {
    expect(bank[1]!.nodes.map((n) => n.id)).toEqual(['b', 'outside']);
    expect(bank[1]!.nodes[1]!.exercises.map((e) => e.exercise.id)).toEqual(['outside.old']);
    expect(countExercises(bank)).toBe(5);
    expect(countByTier(bank)).toEqual({ basic: 1, standard: 1, exam: 3 });
  });
});

describe('filterBank', () => {
  const bank = exerciseBank(bundle);
  const ids = (filtered: ReturnType<typeof filterBank>) =>
    filtered.flatMap((lecture) => lecture.nodes.flatMap((n) => n.exercises.map((e) => e.exercise.id)));

  it('keeps everything without a filter', () => {
    expect(ids(filterBank(bank, NO_FILTER))).toHaveLength(5);
  });

  it('filters by lecture and level', () => {
    expect(ids(filterBank(bank, { ...NO_FILTER, lecture: 2 }))).toEqual(['b.past', 'outside.old']);
    expect(ids(filterBank(bank, { ...NO_FILTER, tiers: new Set(['basic', 'standard']) }))).toEqual(['a.core', 'a.extra']);
  });

  it('matches every query word against the statement, number, paper and topic title', () => {
    expect(ids(filterBank(bank, { ...NO_FILTER, query: 'statement a.extra' }))).toEqual(['a.extra']);
    expect(ids(filterBank(bank, { ...NO_FILTER, query: '2.1' }))).toEqual(['a.extra']);
    expect(ids(filterBank(bank, { ...NO_FILTER, query: 'final 2025' }))).toEqual(['b.past']);
    expect(ids(filterBank(bank, { ...NO_FILTER, query: 'title of b' }))).toEqual(['b.past']);
    expect(ids(filterBank(bank, { ...NO_FILTER, query: 'nothing here' }))).toEqual([]);
  });

  it('keeps only past-paper exercises and hides exercises marked right', () => {
    expect(ids(filterBank(bank, { ...NO_FILTER, pastExamOnly: true }))).toEqual(['b.past']);
    expect(ids(filterBank(bank, { ...NO_FILTER, hideIds: new Set(['a.core', 'b.past']) }))).toEqual([
      'a.extra',
      'a.exam',
      'outside.old',
    ]);
  });
});

describe('exerciseOrigin', () => {
  it('names the past paper first, then the printed number', () => {
    expect(exerciseOrigin(exercise('x', 'exam', { pastExam: { year: 2024, paper: 'Final', question: '4b', points: 1 } }))).toBe('Final 2024, question 4b');
    expect(exerciseOrigin(exercise('x', 'standard', { number: '15.1.9' }))).toBe('Exercise 15.1.9');
    expect(exerciseOrigin(exercise('x', 'standard'))).toBeUndefined();
  });
});
