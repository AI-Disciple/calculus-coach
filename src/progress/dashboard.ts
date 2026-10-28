import type { CourseCatalog, CourseNodeRef } from './course.ts';
import { MISTAKE_TYPES, attemptSucceeded, type Attempt, type MistakeType, type Progress } from './progress.ts';

export type Mastery = 'not-started' | 'in-progress' | 'done';

export type MasteryReport = {
  nodes: { nodeId: string; lecture: number; mastery: Mastery }[];
};

export type MistakeRef = {
  exerciseId: string;
  at: string;
  nodeId?: string;
  lecture?: number;
};

export type Dashboard = {
  byType: { mistakeType: MistakeType; count: number; exercises: MistakeRef[] }[];
  byNode: { nodeId: string; lecture: number; count: number; exercises: MistakeRef[] }[];
  byLecture: { lecture: number; count: number; exercises: MistakeRef[] }[];
  overTime: { date: string; count: number; exercises: MistakeRef[] }[];
};

type LocatedMistake = MistakeRef & { mistakeType: MistakeType };

/**
 * Not started: no section marked and no attempt saved on the node.
 * In progress: a section marked or an attempt saved.
 * Done: every section marked and the latest attempt on every Core (basic tier) exercise succeeded. Extra and Exam
 * level exercises do not hold a node back, and a node without Core exercises needs only its sections. A node
 * listed in `doneNodes` stays Done.
 */
export function masteryFromProgress(progress: Progress, course: CourseCatalog): MasteryReport {
  const nodes = course.lectures.flatMap((lecture) =>
    lecture.nodes.map((node) => ({
      nodeId: node.id,
      lecture: lecture.number,
      mastery: masteryOf(node, progress),
    })),
  );
  return { nodes };
}

function masteryOf(node: CourseNodeRef, progress: Progress): Mastery {
  if (progress.doneNodes?.includes(node.id)) return 'done';
  return currentState(node, progress);
}

function currentState(node: CourseNodeRef, progress: Progress): Mastery {
  const sectionIds = node.sectionIds ?? [];
  const marked = new Set(progress.sectionsDone?.[node.id] ?? []);
  const core = node.exercises.filter((exercise) => exercise.tier === 'basic');
  const owned = new Set(node.exercises.map((exercise) => exercise.id));
  const latest = new Map<string, Attempt>();
  let attempted = false;
  for (const attempt of progress.attempts) {
    if (!owned.has(attempt.exerciseId)) continue;
    attempted = true;
    const previous = latest.get(attempt.exerciseId);
    if (!previous || attempt.at >= previous.at) latest.set(attempt.exerciseId, attempt);
  }
  const coreRight = core.every((exercise) => {
    const attempt = latest.get(exercise.id);
    return attempt !== undefined && attemptSucceeded(attempt);
  });
  const sectionsRead = sectionIds.every((id) => marked.has(id));
  if (sectionsRead && coreRight && sectionIds.length + core.length > 0) return 'done';
  if (attempted || marked.size > 0) return 'in-progress';
  return 'not-started';
}

/** Adds every node that is Done now to `doneNodes`, so it stays Done. Returns the same object when nothing is new. */
export function withDoneNodes(progress: Progress, course: CourseCatalog): Progress {
  const known = new Set(progress.doneNodes ?? []);
  const fresh = course.lectures
    .flatMap((lecture) => lecture.nodes)
    .filter((node) => !known.has(node.id) && currentState(node, progress) === 'done')
    .map((node) => node.id);
  return fresh.length === 0 ? progress : { ...progress, doneNodes: [...(progress.doneNodes ?? []), ...fresh] };
}

/** One wrong step, or one whole exercise marked wrong or partly right, is one mistake. A right attempt adds none. */
export function dashboardFromProgress(progress: Progress, course: CourseCatalog): Dashboard {
  const place = placeIndex(course);
  const mistakes: LocatedMistake[] = [];
  for (const attempt of progress.attempts) {
    const where = place.get(attempt.exerciseId);
    for (const mistakeType of mistakeTypes(attempt)) {
      mistakes.push({
        mistakeType,
        exerciseId: attempt.exerciseId,
        at: attempt.at,
        ...(where ? { nodeId: where.nodeId, lecture: where.lecture } : {}),
      });
    }
  }

  const byType = MISTAKE_TYPES.flatMap((mistakeType) => {
    const exercises = mistakes.filter((mistake) => mistake.mistakeType === mistakeType).map(refOf);
    return exercises.length === 0 ? [] : [{ mistakeType, count: exercises.length, exercises }];
  });

  const byNode = course.lectures.flatMap((lecture) =>
    lecture.nodes.flatMap((node) => {
      const exercises = mistakes.filter((mistake) => mistake.nodeId === node.id).map(refOf);
      return exercises.length === 0 ? [] : [{ nodeId: node.id, lecture: lecture.number, count: exercises.length, exercises }];
    }),
  );

  const byLecture = course.lectures.flatMap((lecture) => {
    const exercises = mistakes.filter((mistake) => mistake.lecture === lecture.number).map(refOf);
    return exercises.length === 0 ? [] : [{ lecture: lecture.number, count: exercises.length, exercises }];
  });

  const dates = [...new Set(mistakes.map((mistake) => utcDay(mistake.at)))].sort();
  const overTime = dates.map((date) => {
    const exercises = mistakes.filter((mistake) => utcDay(mistake.at) === date).map(refOf);
    return { date, count: exercises.length, exercises };
  });

  return { byType, byNode, byLecture, overTime };
}

export function mistakeTypes(attempt: Attempt): MistakeType[] {
  if ('steps' in attempt) {
    return attempt.steps.flatMap((step) => (step.result === 'wrong' && step.mistakeType ? [step.mistakeType] : []));
  }
  return attempt.result !== 'right' && attempt.mistakeType ? [attempt.mistakeType] : [];
}

function refOf(mistake: LocatedMistake): MistakeRef {
  return {
    exerciseId: mistake.exerciseId,
    at: mistake.at,
    ...(mistake.nodeId ? { nodeId: mistake.nodeId, lecture: mistake.lecture } : {}),
  };
}

function utcDay(iso: string): string {
  const date = new Date(iso);
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${date.getUTCFullYear()}-${month}-${day}`;
}

function placeIndex(course: CourseCatalog): Map<string, { nodeId: string; lecture: number }> {
  const place = new Map<string, { nodeId: string; lecture: number }>();
  for (const lecture of course.lectures) {
    for (const node of lecture.nodes) {
      for (const exercise of node.exercises) place.set(exercise.id, { nodeId: node.id, lecture: lecture.number });
    }
  }
  return place;
}
