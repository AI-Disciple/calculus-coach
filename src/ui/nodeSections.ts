import type { Block } from '../content/schema.ts';

/**
 * Splits a node's blocks into the sections the node page shows one at a time.
 *
 * The order is one or more Learn sections, then Practise and For the sheet. Each of the last
 * two is left out when it would be empty.
 *
 * Automatic grouping, used when the node has no `section` markers:
 * - A Learn section starts at each formal statement. Blocks before the first statement join the first
 *   section. A visual placed after an exercise or sheet item joins the first section.
 * - Inside a section the blocks are ordered statement, plain version, visual, examples, traps and going
 *   deeper notes, keeping the written order within each kind. A tip stays right after the block written
 *   before it.
 * - Concept questions form the section's "Your turn". Each basic exercise goes to the section whose
 *   statement title contains all the words of one of its topics, or to the first section when none does.
 *   A section takes at most one basic exercise, and matching exercises claim sections before the
 *   unmatched ones fall back. The others go to Practise in their written order.
 * - A section without a concept question or a basic exercise is merged into the next one, and a last
 *   section without one into the one before. A node without any of them keeps its sections as they are.
 *
 * With markers, each marker starts a Learn section that keeps its blocks in the written order. Its "Your
 * turn" is the run of concept questions and basic exercises at its end. A section keeps the first basic
 * exercise written in it, and later ones go to Practise. Standard and exam exercises and sheet
 * items still go to Practise and For the sheet.
 *
 * In both modes a Learn section shows its Key points last, after its other blocks and before its "Your turn".
 */

export type SectionKind = 'learn' | 'practise' | 'sheet';
export type ContentBlock = Exclude<Block, { type: 'section' }>;
type ExerciseBlock = Extract<Block, { type: 'exercise' }>;

export interface NodeSection {
  /** Used in the URL: `learn-1`, `learn-2`, `practise` or `sheet`. */
  id: string;
  kind: SectionKind;
  /** Inline Markdown, since statement titles may carry maths. */
  title: string;
  blocks: ContentBlock[];
  /** The concept questions and basic exercises that close a Learn section. Empty for the other kinds. */
  yourTurn: ContentBlock[];
}

export const SECTION_KIND_LABEL: Record<SectionKind, string> = {
  learn: 'Learn',
  practise: 'Practise',
  sheet: 'For the sheet',
};

const TIER_RANK = { basic: 0, standard: 1, exam: 2 } as const;

const TEACHING_RANK: Partial<Record<ContentBlock['type'], number>> = {
  'formal-statement': 0,
  'plain-explanation': 1,
  visual: 2,
  'worked-example': 3,
  'guided-example': 3,
  trap: 4,
  'going-deeper': 5,
  'key-points': 6,
};

const STATEMENT_KIND = { definition: 'Definition', theorem: 'Theorem', method: 'Method' } as const;

interface LearnGroup {
  title: string;
  teaching: ContentBlock[];
  questions: ContentBlock[];
  basic: ExerciseBlock[];
}

export function nodeSections(blocks: Block[], nodeTitle: string): NodeSection[] {
  const sheetItems = blocks.filter((block) => block.type === 'sheet-item');
  const hasMarkers = blocks.some((block) => block.type === 'section');
  const { learn, practise } = hasMarkers ? markerGroups(blocks, nodeTitle) : automaticGroups(blocks, nodeTitle);

  const sections: NodeSection[] = learn.map((section, index) => ({
    ...section,
    id: `learn-${index + 1}`,
    blocks: keyPointsLast(section.blocks),
  }));
  if (practise.length > 0) {
    const ladder = practise
      .map((exercise, index) => ({ exercise, index }))
      .sort((a, b) => TIER_RANK[a.exercise.tier] - TIER_RANK[b.exercise.tier] || a.index - b.index)
      .map(({ exercise }) => exercise);
    sections.push({ id: 'practise', kind: 'practise', title: 'Practise', blocks: ladder, yourTurn: [] });
  }
  if (sheetItems.length > 0) {
    sections.push({ id: 'sheet', kind: 'sheet', title: 'For the sheet', blocks: sheetItems, yourTurn: [] });
  }
  return sections;
}

/** The section that holds the block with this DOM id (`exercise-<id>` or `sheet-<id>`), if any. */
export function sectionForAnchor(sections: NodeSection[], anchor: string): NodeSection | undefined {
  return sections.find((section) =>
    [...section.blocks, ...section.yourTurn].some(
      (block) =>
        (block.type === 'exercise' && anchor === `exercise-${block.id}`) ||
        (block.type === 'sheet-item' && anchor === `sheet-${block.id}`),
    ),
  );
}

type Grouped = { learn: Omit<NodeSection, 'id'>[]; practise: ExerciseBlock[] };

function automaticGroups(blocks: Block[], nodeTitle: string): Grouped {
  const groups: LearnGroup[] = [];
  const stranded: ContentBlock[] = [];
  const basics: ExerciseBlock[] = [];
  const practise: ExerciseBlock[] = [];
  let pastTeaching = false;

  for (const block of blocks) {
    if (block.type === 'section' || block.type === 'sheet-item') {
      pastTeaching ||= block.type !== 'section';
      continue;
    }
    if (block.type === 'exercise') {
      pastTeaching = true;
      (block.tier === 'basic' ? basics : practise).push(block);
      continue;
    }
    if (block.type === 'visual' && pastTeaching) {
      stranded.push(block);
      continue;
    }
    if (block.type === 'formal-statement' || groups.length === 0) {
      if (block.type === 'formal-statement' && groups.length === 1 && !groups[0].teaching.some(isStatement)) {
        // Blocks before the first statement join its section.
        groups[0].title = statementTitle(block);
      } else {
        groups.push({
          title: block.type === 'formal-statement' ? statementTitle(block) : nodeTitle,
          teaching: [],
          questions: [],
          basic: [],
        });
      }
    }
    const group = groups[groups.length - 1];
    (block.type === 'concept-question' ? group.questions : group.teaching).push(block);
  }

  if (groups.length === 0) return { learn: [], practise: [...basics, ...practise] };
  groups[0].teaching.push(...stranded);

  // Exercises that match a section claim it before the unmatched ones fall back to the first section.
  const unclaimed = new Set<ExerciseBlock>();
  for (const exercise of basics) {
    const group = bestMatch(groups, exercise);
    if (group && group.basic.length === 0) group.basic.push(exercise);
    else unclaimed.add(exercise);
  }
  const extraBasics: ExerciseBlock[] = [];
  for (const exercise of unclaimed) {
    if (!bestMatch(groups, exercise) && groups[0].basic.length === 0) groups[0].basic.push(exercise);
    else extraBasics.push(exercise);
  }

  for (const group of groups) group.teaching = sortTeaching(group.teaching);
  const merged = mergeGroupsWithoutCheck(groups);

  return {
    learn: merged.map((group) => ({
      kind: 'learn',
      title: group.title,
      blocks: group.teaching,
      yourTurn: [...group.questions, ...group.basic],
    })),
    practise: [...extraBasics, ...practise],
  };
}

function markerGroups(blocks: Block[], nodeTitle: string): Grouped {
  const learn: Omit<NodeSection, 'id'>[] = [];
  const practise: ExerciseBlock[] = [];
  for (const block of blocks) {
    if (block.type === 'section') {
      learn.push({ kind: 'learn', title: block.title, blocks: [], yourTurn: [] });
      continue;
    }
    if (block.type === 'sheet-item') continue;
    // The content check rejects blocks before the first marker. This keeps them visible if one slips through.
    if (learn.length === 0) learn.push({ kind: 'learn', title: nodeTitle, blocks: [], yourTurn: [] });
    const section = learn[learn.length - 1];
    const keepsBasic = !section.blocks.some((other) => other.type === 'exercise');
    if (block.type === 'exercise' && (block.tier !== 'basic' || !keepsBasic)) {
      practise.push(block);
      continue;
    }
    section.blocks.push(block);
  }
  for (const section of learn) {
    // Key points written after the "Your turn" questions must not hide them from the run at the end.
    const keyPoints = section.blocks.filter((block) => block.type === 'key-points');
    const rest = section.blocks.filter((block) => block.type !== 'key-points');
    let start = rest.length;
    while (start > 0 && isCheck(rest[start - 1])) start--;
    section.yourTurn = rest.slice(start);
    section.blocks = [...rest.slice(0, start), ...keyPoints];
  }
  return { learn, practise };
}

function isStatement(block: ContentBlock): boolean {
  return block.type === 'formal-statement';
}

function isCheck(block: ContentBlock): boolean {
  return block.type === 'concept-question' || (block.type === 'exercise' && block.tier === 'basic');
}

function statementTitle(block: Extract<Block, { type: 'formal-statement' }>): string {
  return block.title ?? (block.kind ? STATEMENT_KIND[block.kind] : 'Statement');
}

function sortTeaching(blocks: ContentBlock[]): ContentBlock[] {
  // A tip takes the rank of the block written before it, so the sort keeps it right after that block. Key points
  // do not count, since they always move to the end.
  let previousRank = TEACHING_RANK['plain-explanation'] ?? 1;
  return blocks
    .map((block, index) => {
      const rank = block.type === 'tip' ? previousRank : (TEACHING_RANK[block.type] ?? 9);
      if (block.type !== 'key-points') previousRank = rank;
      return { block, index, rank };
    })
    .sort((a, b) => a.rank - b.rank || a.index - b.index)
    .map(({ block }) => block);
}

function keyPointsLast(blocks: ContentBlock[]): ContentBlock[] {
  const keyPoints = blocks.filter((block) => block.type === 'key-points');
  return [...blocks.filter((block) => block.type !== 'key-points'), ...keyPoints];
}

function hasCheck(group: LearnGroup): boolean {
  return group.questions.length > 0 || group.basic.length > 0;
}

function mergeGroupsWithoutCheck(groups: LearnGroup[]): LearnGroup[] {
  if (!groups.some(hasCheck)) return groups;
  const merged: LearnGroup[] = [];
  let pending: LearnGroup | undefined;
  for (const group of groups) {
    const current: LearnGroup = pending
      ? {
          title: pending.title,
          teaching: [...pending.teaching, ...group.teaching],
          questions: group.questions,
          basic: group.basic,
        }
      : group;
    pending = hasCheck(current) ? undefined : current;
    if (!pending) merged.push(current);
  }
  if (pending) {
    const last = merged[merged.length - 1];
    last.teaching = [...last.teaching, ...pending.teaching];
  }
  return merged;
}

/** The group whose statement title holds every word of the most topics of the exercise. */
function bestMatch(groups: LearnGroup[], exercise: ExerciseBlock): LearnGroup | undefined {
  let best: LearnGroup | undefined;
  let bestScore = 0;
  for (const group of groups) {
    const words = new Set(wordsOf(group.title));
    const score = exercise.topics.filter((topic) => {
      const topicWords = wordsOf(topic);
      return topicWords.length > 0 && topicWords.every((word) => words.has(word));
    }).length;
    if (score > bestScore) {
      best = group;
      bestScore = score;
    }
  }
  return best;
}

function wordsOf(text: string): string[] {
  return text
    .replace(/\\\(.*?\\\)/g, ' ')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .map((word) => (word.length > 3 && word.endsWith('s') ? word.slice(0, -1) : word));
}
