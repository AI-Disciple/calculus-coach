import type { PaperResult } from './progress.ts';

export type BlockChange = {
  blockId: string;
  title: string;
  earned: number;
  total: number;
  /** Points against the same block in the previous result, or null when there is no previous block. */
  change: number | null;
};

export type MockComparison = {
  /** What the result is compared with. null when there is nothing to compare with. */
  against: 'paper' | 'format' | null;
  previous?: PaperResult;
  totalChange: number | null;
  blocks: BlockChange[];
  personalBest: boolean;
};

/**
 * Compares a saved result with earlier ones. Earlier results of the same paper come first. Without any, results of
 * papers with the same presentation are used. The previous result is the latest one in that pool, a later entry
 * winning a tie. A first attempt is never a personal best.
 */
export function compareMockResult(
  result: PaperResult,
  all: readonly PaperResult[],
  papers: readonly { id: string; presentation: string }[],
): MockComparison {
  const earlier = all.filter((other) => other.id !== result.id && Date.parse(other.at) <= Date.parse(result.at));
  const samePaper = earlier.filter((other) => other.paperId === result.paperId);
  const presentation = papers.find((paper) => paper.id === result.paperId)?.presentation;
  const sameFormat = earlier.filter(
    (other) => presentation !== undefined && papers.find((paper) => paper.id === other.paperId)?.presentation === presentation,
  );
  const against = samePaper.length > 0 ? 'paper' : sameFormat.length > 0 ? 'format' : null;
  const pool = against === 'paper' ? samePaper : against === 'format' ? sameFormat : [];

  let previous: PaperResult | undefined;
  for (const candidate of pool) {
    if (!previous || Date.parse(candidate.at) >= Date.parse(previous.at)) previous = candidate;
  }

  const share = (item: PaperResult) => item.earned / item.total;
  const previousBlocks = new Map((previous?.blocks ?? []).map((block) => [block.blockId, block]));
  const blocks = (result.blocks ?? []).map((block) => {
    const before = previousBlocks.get(block.blockId);
    return { ...block, change: before ? block.earned - before.earned : null };
  });

  return {
    against,
    ...(previous ? { previous } : {}),
    totalChange: previous ? result.earned - previous.earned : null,
    blocks,
    personalBest: pool.length > 0 && pool.every((item) => share(result) > share(item)),
  };
}
