import { z } from 'zod';

const markdown = z.string().trim().min(1);
const stableId = z.string().regex(/^[a-z0-9]+(?:[-.][a-z0-9]+)*$/, 'use lowercase letters, digits, "-" or "."');

export const sourceRef = z.strictObject({
  source: z.string().min(1),
  page: z.union([z.number().int(), z.string()]).optional(),
  section: z.string().optional(),
});

export const tiers = ['basic', 'standard', 'exam'] as const;
export const provenanceLabels = ['official-key', 'handout-answer', 'written-for-site'] as const;
export const examBlocks = [
  'level-sets-tangent-plane',
  'chain-rule',
  'critical-points',
  'double-integrals',
  'constrained-optimisation',
  'triple-integrals-volumes',
] as const;
export const sheetCategories = ['formula', 'trap', 'recognition'] as const;

const verificationCheck = z.strictObject({
  expr: z.string().min(1),
  expected: z.union([z.string().min(1), z.number()]).transform(String),
});

export const verification = z.union([
  z.strictObject({ checks: z.array(verificationCheck).min(1) }),
  z.strictObject({ checkable: z.literal(false), reason: markdown }),
]);

const exercise = z.strictObject({
  type: z.literal('exercise'),
  id: stableId,
  number: z.string().optional(),
  statement: markdown,
  tier: z.enum(tiers),
  topics: z.array(z.string().min(1)).min(1),
  examBlock: z.enum(examBlocks).optional(),
  pastExam: z
    .strictObject({
      year: z.number().int(),
      paper: z.string().min(1),
      question: z.string().min(1),
      points: z.number().positive(),
    })
    .optional(),
  solution: markdown,
  provenance: z.enum(provenanceLabels).optional(),
  steps: z.array(markdown).min(1).optional(),
  verification: verification.optional(),
  discrepancy: markdown.optional(),
  outOfScope: z.literal(true).optional(),
});

export const block = z.discriminatedUnion('type', [
  z.strictObject({
    type: z.literal('formal-statement'),
    kind: z.enum(['definition', 'theorem', 'method']).optional(),
    title: z.string().optional(),
    text: markdown,
    source: sourceRef,
  }),
  z.strictObject({ type: z.literal('plain-explanation'), text: markdown }),
  z.strictObject({ type: z.literal('worked-example'), title: z.string().optional(), problem: markdown, solution: markdown }),
  z.strictObject({
    type: z.literal('guided-example'),
    title: z.string().optional(),
    problem: markdown,
    steps: z.array(markdown).min(1),
  }),
  z.strictObject({
    type: z.literal('concept-question'),
    /** Optional. The bundle gives a question without one an identifier made from its node and its text. */
    id: stableId.optional(),
    question: markdown,
    options: z.array(z.strictObject({ text: markdown, correct: z.boolean().optional() })).min(2),
    explanation: markdown,
  }),
  z.strictObject({ type: z.literal('trap'), text: markdown }),
  z.strictObject({ type: z.literal('tip'), text: markdown }),
  z.strictObject({ type: z.literal('key-points'), text: markdown }),
  exercise,
  z.strictObject({ type: z.literal('sheet-item'), id: stableId, category: z.enum(sheetCategories), text: markdown }),
  z.strictObject({ type: z.literal('going-deeper'), title: z.string().min(1), text: markdown }),
  z.strictObject({
    type: z.literal('visual'),
    kind: z.string().min(1),
    caption: z.string().optional(),
    params: z.record(z.string(), z.unknown()).optional(),
  }),
  z.strictObject({ type: z.literal('section'), title: z.string().min(1) }),
]);

export const nodeFrontMatter = z.strictObject({
  id: stableId,
  lecture: z.number().int().min(1).max(8),
  order: z.number().int().min(1),
  title: z.string().min(1),
  prerequisites: z.array(z.string()),
  sources: z.array(sourceRef).default([]),
  examWeight: z.enum(['high', 'medium', 'low', 'not-examined']),
  examWeightNote: z.string().optional(),
  status: z.enum(['draft', 'reviewed']),
  notation: markdown.optional(),
  optional: z.literal(true).optional(),
  hidden: z.literal(true).optional(),
});

export const sourceKinds = [
  'handout',
  'lecture-notes',
  'board-photo',
  'exercise-sheet',
  'past-paper',
  'course-document',
] as const;

const sourceEntry = z.discriminatedUnion('pageNumbering', [
  z.strictObject({
    id: stableId,
    title: z.string().min(1),
    kind: z.enum(sourceKinds),
    pageNumbering: z.literal('printed'),
    url: z.url().optional(),
    printedPages: z
      .array(z.strictObject({ from: z.number().int(), to: z.number().int(), offset: z.number().int() }))
      .min(1),
    sections: z.record(z.string(), z.number().int().positive()).optional(),
  }),
  z.strictObject({
    id: stableId,
    title: z.string().min(1),
    kind: z.enum(sourceKinds),
    pageNumbering: z.enum(['pdf', 'none']),
    url: z.url().optional(),
  }),
]);

export const sourceRegistry = z.array(sourceEntry);

export const lectureList = z
  .array(z.strictObject({ number: z.number().int().min(1).max(8), title: z.string().min(1) }))
  .refine((list) => [...list.map((l) => l.number)].sort((a, b) => a - b).join() === '1,2,3,4,5,6,7,8', {
    message: 'the lectures must be numbered 1 to 8, each once',
  });

export type SourceRef = z.infer<typeof sourceRef>;
export type SourceEntry = z.infer<typeof sourceEntry>;
export type Block = z.infer<typeof block>;
export type BlockType = Block['type'];
export type Exercise = z.infer<typeof exercise>;
export type Verification = z.infer<typeof verification>;
export type NodeFrontMatter = z.infer<typeof nodeFrontMatter>;

const coverageItemSchema = z.strictObject({
  id: z.string().min(1),
  label: z.string().min(1),
  page: z.union([z.number().int(), z.string()]).optional(),
  section: z.string().optional(),
  nodes: z.array(z.string()).optional(),
  excluded: z.string().optional(),
});

const coverageGroupSchema = z.strictObject({
  source: z.string().min(1),
  items: z.array(coverageItemSchema),
});

const coverageSkippedSchema = z.strictObject({
  source: z.string().min(1),
  reason: markdown,
});

export const coverageMapSchema = z.strictObject({
  sources: z.array(coverageGroupSchema),
  skipped: z.array(coverageSkippedSchema),
});

export const changeLogSchema = z.array(
  z.strictObject({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    title: z.string().min(1),
    text: markdown,
    nodes: z.array(z.string()),
  }),
);

export type CoverageItem = z.infer<typeof coverageItemSchema>;
export type CoverageGroup = z.infer<typeof coverageGroupSchema>;
export type CoverageMap = z.infer<typeof coverageMapSchema>;
export type ChangeEntry = z.infer<typeof changeLogSchema>[number];

const paperRubricItem = z.strictObject({
  text: markdown,
  points: z.number().positive(),
  exercise: stableId,
});

const paperBlock = z.strictObject({
  id: stableId,
  title: z.string().min(1),
  points: z.number().positive(),
  minutes: z.number().int().positive(),
  exercises: z.array(stableId).min(1),
  rubric: z.array(paperRubricItem).min(1),
});

export const paperSchema = z.strictObject({
  id: stableId,
  kind: z.enum(['mock', 'checkpoint']),
  standIn: z.literal(true).optional(),
  presentation: z.enum(['current-format', 'as-printed']),
  title: z.string().min(1),
  year: z.number().int(),
  durationMinutes: z.number().int().positive(),
  totalPoints: z.number().positive(),
  allowedMaterial: z.string().min(1),
  source: z.string().min(1),
  blocks: z.array(paperBlock).min(1),
});

export const paperListSchema = z.array(paperSchema);

export type PaperRubricItem = z.infer<typeof paperRubricItem>;
export type PaperBlock = z.infer<typeof paperBlock>;
export type Paper = z.infer<typeof paperSchema>;

export type CourseNode = NodeFrontMatter & { file: string; blocks: Block[] };
export type Lecture = { number: number; title: string; nodes: CourseNode[] };
export type ContentBundle = {
  lectures: Lecture[];
  hiddenNodes: CourseNode[];
  sources: SourceEntry[];
  coverage: CoverageMap;
  changes: ChangeEntry[];
  papers: Paper[];
  addingContent: string;
};
