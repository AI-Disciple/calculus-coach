import type { CourseCatalog } from './course.ts';
import type { MasteryReport } from './dashboard.ts';
import { bestMock } from './readiness.ts';
import { TIERS, attemptSucceeded, type Attempt, type Progress, type Tier } from './progress.ts';

export type Wins = {
  /** Done nodes in course order. */
  doneNodes: { nodeId: string; lecture: number }[];
  /** Visible nodes in the course. */
  totalNodes: number;
  /** Per tier: exercises whose latest attempt succeeded, over all visible exercises of that tier. */
  byTier: Record<Tier, { right: number; total: number }>;
  /** Best share per mock paper that has a result, in `papers` order. */
  mockBests: { paperId: string; earned: number; total: number }[];
};

export function winsFromProgress(
  progress: Progress,
  course: CourseCatalog,
  mastery: MasteryReport,
  papers: readonly { id: string; kind: 'mock' | 'checkpoint' }[],
): Wins {
  const visible = course.lectures.flatMap((lecture) =>
    lecture.nodes.filter((node) => !node.hidden).map((node) => ({ lecture: lecture.number, node })),
  );
  const doneIds = new Set(mastery.nodes.filter((node) => node.mastery === 'done').map((node) => node.nodeId));
  const doneNodes = visible
    .filter((entry) => doneIds.has(entry.node.id))
    .map((entry) => ({ nodeId: entry.node.id, lecture: entry.lecture }));

  const latest = new Map<string, Attempt>();
  for (const attempt of progress.attempts) {
    const previous = latest.get(attempt.exerciseId);
    if (!previous || attempt.at >= previous.at) latest.set(attempt.exerciseId, attempt);
  }
  const byTier = Object.fromEntries(TIERS.map((tier) => [tier, { right: 0, total: 0 }])) as Wins['byTier'];
  for (const { node } of visible) {
    for (const exercise of node.exercises) {
      const tally = byTier[exercise.tier];
      tally.total += 1;
      const attempt = latest.get(exercise.id);
      if (attempt && attemptSucceeded(attempt)) tally.right += 1;
    }
  }

  const mockBests = papers.flatMap((paper) => {
    if (paper.kind !== 'mock') return [];
    const best = bestMock(progress, [paper]);
    return best ? [best] : [];
  });

  return { doneNodes, totalNodes: visible.length, byTier, mockBests };
}
