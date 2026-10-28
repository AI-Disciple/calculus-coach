import { courseNodes } from '../content/nodes.ts';
import type { ContentBundle, Exercise } from '../content/schema.ts';
import { TIER_ORDER, type Tier } from './tiers.ts';

export type BankExercise = { exercise: Exercise; nodeId: string; nodeTitle: string; lecture: number };
export type BankNode = { id: string; title: string; lecture: number; exercises: BankExercise[] };
export type BankLecture = { number: number; title: string; nodes: BankNode[] };

/**
 * Every exercise of the course, grouped by lecture and topic in course order, and within a topic from Core to
 * Exam level. Hidden fixture topics are left out. Exercises marked out of scope stay, on the topic that holds them.
 */
export function exerciseBank(bundle: ContentBundle): BankLecture[] {
  const lectures = bundle.lectures.map((lecture) => ({ number: lecture.number, title: lecture.title, nodes: [] as BankNode[] }));
  const byNumber = new Map(lectures.map((lecture) => [lecture.number, lecture]));
  for (const { lecture, node } of courseNodes(bundle)) {
    const bucket = byNumber.get(lecture.number);
    if (!bucket) continue;
    const exercises: BankExercise[] = [];
    for (const block of node.blocks) {
      if (block.type !== 'exercise') continue;
      if (node.hidden && !block.outOfScope) continue;
      exercises.push({ exercise: block, nodeId: node.id, nodeTitle: node.title, lecture: lecture.number });
    }
    if (exercises.length === 0) continue;
    exercises.sort((a, b) => TIER_ORDER.indexOf(a.exercise.tier) - TIER_ORDER.indexOf(b.exercise.tier));
    bucket.nodes.push({ id: node.id, title: node.title, lecture: lecture.number, exercises });
  }
  return lectures;
}

export type BankFilter = {
  /** Only this lecture, or every lecture when undefined. */
  lecture?: number;
  /** Only these levels. An empty set means every level. */
  tiers: ReadonlySet<Tier>;
  /** Words that must all appear in the statement, the number, the paper or the topic title. */
  query: string;
  /** Only exercises taken from a past paper. */
  pastExamOnly: boolean;
  /** Leaves out the exercises whose id is in this set. Undefined keeps everything. */
  hideIds?: ReadonlySet<string>;
};

export const NO_FILTER: BankFilter = { tiers: new Set(), query: '', pastExamOnly: false };

export function isFiltering(filter: BankFilter): boolean {
  return (
    filter.lecture !== undefined ||
    filter.tiers.size > 0 ||
    filter.query.trim().length > 0 ||
    filter.pastExamOnly ||
    filter.hideIds !== undefined
  );
}

export function filterBank(lectures: readonly BankLecture[], filter: BankFilter): BankLecture[] {
  const words = filter.query.toLowerCase().split(/\s+/).filter(Boolean);
  const matches = ({ exercise, nodeTitle }: BankExercise) => {
    if (filter.tiers.size > 0 && !filter.tiers.has(exercise.tier)) return false;
    if (filter.pastExamOnly && !exercise.pastExam) return false;
    if (filter.hideIds?.has(exercise.id)) return false;
    if (words.length === 0) return true;
    const haystack = [exercise.statement, exercise.number, exercise.pastExam?.paper, exercise.pastExam?.year, nodeTitle]
      .filter((part) => part !== undefined)
      .join(' ')
      .toLowerCase();
    return words.every((word) => haystack.includes(word));
  };
  return lectures
    .filter((lecture) => filter.lecture === undefined || lecture.number === filter.lecture)
    .map((lecture) => ({
      ...lecture,
      nodes: lecture.nodes
        .map((node) => ({ ...node, exercises: node.exercises.filter(matches) }))
        .filter((node) => node.exercises.length > 0),
    }))
    .filter((lecture) => lecture.nodes.length > 0);
}

export function countExercises(lectures: readonly BankLecture[]): number {
  return lectures.reduce((sum, lecture) => sum + lecture.nodes.reduce((inner, node) => inner + node.exercises.length, 0), 0);
}

/** The count per level, for the level filter. */
export function countByTier(lectures: readonly BankLecture[]): Record<Tier, number> {
  const counts: Record<Tier, number> = { basic: 0, standard: 0, exam: 0 };
  for (const lecture of lectures) {
    for (const node of lecture.nodes) {
      for (const { exercise } of node.exercises) counts[exercise.tier] += 1;
    }
  }
  return counts;
}

/** Where an exercise comes from, as a short label: its printed number or its past paper. Undefined for a written one. */
export function exerciseOrigin(exercise: Exercise): string | undefined {
  if (exercise.pastExam) {
    const { paper, year, question } = exercise.pastExam;
    return `${paper} ${year}, question ${question}`;
  }
  return exercise.number ? `Exercise ${exercise.number}` : undefined;
}
