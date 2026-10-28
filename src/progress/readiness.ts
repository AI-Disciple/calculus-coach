import type { CourseCatalog, CourseExerciseRef, ExamBlockId } from './course.ts';
import type { Mastery } from './dashboard.ts';
import { isStepAttempt, type Attempt, type PaperResult, type Progress } from './progress.ts';

/**
 * The exam readiness shown on Home. It counts, per exam topic, how many of the exam exercises that exist for the topic
 * you got right. It is read from your own marking and never grades or gates anything, and it makes no prediction of
 * points.
 *
 * The six topics are the exam blocks of the final format in spec.md. Their ids, order and titles live here. An exam
 * exercise is an exercise with `examBlock`, so the exercise bank decides how many exercises a topic has.
 */
export const EXAM_BLOCKS: readonly { id: ExamBlockId; title: string }[] = [
  { id: 'level-sets-tangent-plane', title: 'Level sets and tangent plane' },
  { id: 'chain-rule', title: 'Chain rule along a path' },
  { id: 'critical-points', title: 'Critical points' },
  { id: 'double-integrals', title: 'Double integrals' },
  { id: 'constrained-optimisation', title: 'Constrained optimisation' },
  { id: 'triple-integrals-volumes', title: 'Triple integrals and volumes' },
];

/** The title of an exam topic, as Home and the exercise label show it. */
export function examTopicTitle(id: ExamBlockId): string {
  return EXAM_BLOCKS.find((block) => block.id === id)?.title ?? id;
}

export type TopicReadiness = {
  block: ExamBlockId;
  title: string;
  /** Exam exercises in the topic. */
  exercises: number;
  /** Of those, how many have at least one attempt. */
  attempted: number;
  /** Of those, how many are right: the latest attempt was fully right. */
  right: number;
  /** Of those, how many are partly right: the latest attempt was partly right. Never overlaps `right`. */
  partly: number;
};

export type ExamReadiness = {
  /** One entry per topic, in the order of EXAM_BLOCKS. */
  topics: TopicReadiness[];
  /** The sums of the topics' counts. */
  exercises: number;
  attempted: number;
  right: number;
  partly: number;
};

/**
 * Counts per exam topic from the latest attempt on each exam exercise (an exercise with `examBlock`). The latest
 * attempt of an exercise is the one with the greatest `at`, and a later entry wins a tie.
 *
 * An exercise is right when its latest attempt is fully right: a whole attempt marked right, or a step attempt with
 * every step right. It is partly right when its latest attempt is a whole attempt marked partly right, or a step
 * attempt with some but not all steps right. Any other attempted exercise is wrong and counts only as attempted.
 * An exercise without an attempt is not attempted. Attempts on exercises outside the catalog or on exercises without
 * `examBlock` are ignored, and so are exercises in hidden nodes. A topic with no exam exercises has all counts at 0.
 */
export function examReadiness(progress: Progress, course: CourseCatalog): ExamReadiness {
  const latest = latestAttempts(progress.attempts);
  const exercises = examExercises(course);
  const topics = EXAM_BLOCKS.map((block) => topicReadiness(block, exercises, latest));
  return {
    topics,
    exercises: sum(topics.map((topic) => topic.exercises)),
    attempted: sum(topics.map((topic) => topic.attempted)),
    right: sum(topics.map((topic) => topic.right)),
    partly: sum(topics.map((topic) => topic.partly)),
  };
}

/** The first topic whose right count is higher in `after` than in `before`, or undefined when no count went up. */
export function topicGainedRight(before: ExamReadiness, after: ExamReadiness): TopicReadiness | undefined {
  return after.topics.find((topic) => {
    const earlier = before.topics.find((entry) => entry.block === topic.block);
    return topic.right > (earlier?.right ?? 0);
  });
}

/** A right count for display: "4 of 12 exam exercises right", "1 of 1 exam exercise right". */
export function formatExamRight(counts: { right: number; exercises: number }): string {
  return `${counts.right} of ${counts.exercises} exam ${counts.exercises === 1 ? 'exercise' : 'exercises'} right`;
}

/** How many of the given nodes are done. A node missing from `mastery` counts as not started. */
export function doneShare(
  nodeIds: readonly string[],
  mastery: ReadonlyMap<string, Mastery>,
): { done: number; total: number } {
  const done = nodeIds.filter((id) => mastery.get(id) === 'done').length;
  return { done, total: nodeIds.length };
}

/** A done share for display: "1 of 5 nodes done", "0 of 1 node done". */
export function formatDoneShare(share: { done: number; total: number }): string {
  return `${share.done} of ${share.total} ${share.total === 1 ? 'topic' : 'topics'} done`;
}

/**
 * The mock with the highest earned share among the saved paper results, or null when no mock has a result.
 * Only papers of kind 'mock' count (checkpoints do not), and a result for a paper that is not listed is ignored.
 * A tie on the share goes to the later result.
 */
export function bestMock(
  progress: Progress,
  papers: readonly { id: string; kind: 'mock' | 'checkpoint' }[],
): { paperId: string; earned: number; total: number } | null {
  const mocks = new Set(papers.filter((paper) => paper.kind === 'mock').map((paper) => paper.id));
  let best: PaperResult | undefined;
  for (const result of progress.paperResults ?? []) {
    if (mocks.has(result.paperId) && (!best || beats(result, best))) best = result;
  }
  return best ? { paperId: best.paperId, earned: best.earned, total: best.total } : null;
}

/** Points rounded to the nearest half for display: 2.5, 3, 0.5. Never "3.0". */
export function formatPoints(points: number): string {
  return String(Math.round(points * 2) / 2);
}

/** The exam-tagged exercises of the visible nodes. Hidden nodes stay out of the counts. */
function examExercises(course: CourseCatalog): CourseExerciseRef[] {
  return course.lectures.flatMap((lecture) =>
    lecture.nodes
      .filter((node) => !node.hidden)
      .flatMap((node) => node.exercises.filter((exercise) => exercise.examBlock !== undefined)),
  );
}

/** The latest attempt per exercise: the greatest `at`, and a later entry wins a tie. */
function latestAttempts(attempts: readonly Attempt[]): Map<string, Attempt> {
  const latest = new Map<string, Attempt>();
  for (const attempt of attempts) {
    const previous = latest.get(attempt.exerciseId);
    if (!previous || Date.parse(attempt.at) >= Date.parse(previous.at)) latest.set(attempt.exerciseId, attempt);
  }
  return latest;
}

function topicReadiness(
  block: { id: ExamBlockId; title: string },
  exercises: readonly CourseExerciseRef[],
  latest: ReadonlyMap<string, Attempt>,
): TopicReadiness {
  const inTopic = exercises.filter((exercise) => exercise.examBlock === block.id);
  let attempted = 0;
  let right = 0;
  let partly = 0;
  for (const exercise of inTopic) {
    const attempt = latest.get(exercise.id);
    if (!attempt) continue;
    attempted += 1;
    const state = stateOf(attempt);
    if (state === 'right') right += 1;
    if (state === 'partly') partly += 1;
  }
  return { block: block.id, title: block.title, exercises: inTopic.length, attempted, right, partly };
}

/** How one latest attempt counts: right when fully right, partly when only partly right, otherwise wrong. */
function stateOf(attempt: Attempt): 'right' | 'partly' | 'wrong' {
  if (isStepAttempt(attempt)) {
    const rightSteps = attempt.steps.filter((step) => step.result === 'right').length;
    if (rightSteps === attempt.steps.length) return 'right';
    return rightSteps > 0 ? 'partly' : 'wrong';
  }
  if (attempt.result === 'right') return 'right';
  return attempt.result === 'partly-right' ? 'partly' : 'wrong';
}

/** True when `candidate` has a higher share than `current`, or the same share at a time not earlier than it. */
function beats(candidate: PaperResult, current: PaperResult): boolean {
  const candidateShare = candidate.earned / candidate.total;
  const currentShare = current.earned / current.total;
  if (candidateShare !== currentShare) return candidateShare > currentShare;
  return Date.parse(candidate.at) >= Date.parse(current.at);
}

function sum(values: readonly number[]): number {
  return values.reduce((total, value) => total + value, 0);
}
