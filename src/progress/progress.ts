/** Progress records, the review schedule, and the checks on what may be stored. */

export const MISTAKE_TYPES = [
  'sign-or-arithmetic-slip',
  'wrong-formula-or-rule',
  'domain-or-condition-missed',
  'unjustified-reasoning',
  'setup-or-bounds-wrong',
  'misread-question',
  'did-not-know-how-to-start',
] as const;

export type MistakeType = (typeof MISTAKE_TYPES)[number];

export const MISTAKE_LABELS: Record<MistakeType, string> = {
  'sign-or-arithmetic-slip': 'Sign or arithmetic slip',
  'wrong-formula-or-rule': 'Wrong formula or rule',
  'domain-or-condition-missed': 'Domain or condition missed',
  'unjustified-reasoning': 'Unjustified reasoning',
  'setup-or-bounds-wrong': 'Setup or bounds wrong',
  'misread-question': 'Misread question',
  'did-not-know-how-to-start': 'Did not know how to start',
};

export const TIERS = ['basic', 'standard', 'exam'] as const;
export type Tier = (typeof TIERS)[number];

export type StepResult = 'right' | 'wrong' | 'skipped';
export type WholeResult = 'right' | 'partly-right' | 'wrong';

export type StepMark = {
  result: StepResult;
  mistakeType?: MistakeType;
  note?: string;
};

type AttemptBase = {
  id: string;
  at: string;
  exerciseId: string;
  tier: Tier;
};

export type StepAttempt = AttemptBase & { steps: StepMark[] };
export type WholeAttempt = AttemptBase & {
  result: WholeResult;
  mistakeType?: MistakeType;
  note?: string;
};
export type Attempt = StepAttempt | WholeAttempt;

export type AttemptInput =
  | { exerciseId: string; tier: Tier; steps: StepMark[] }
  | { exerciseId: string; tier: Tier; result: WholeResult; mistakeType?: MistakeType; note?: string };

/** `card` only appears in progress files saved while the course had recall cards. Such items are kept and never shown. */
export type ReviewKind = 'exercise' | 'question' | 'card';

export type ReviewItem = {
  id: string;
  kind: ReviewKind;
  intervalIndex: number;
  dueAt: string;
};

export type SheetDraft = {
  excluded: string[];
  order: string[];
  edits: Record<string, string>;
};

export type BlockScore = { blockId: string; title: string; earned: number; total: number };

export type PaperResult = {
  id: string;
  at: string;
  paperId: string;
  earned: number;
  total: number;
  blocks?: BlockScore[];
};

/** The first pick of a concept question in one visit. Later picks of the same visit are not saved. */
export type ConceptPick = { id: string; at: string; questionId: string; right: boolean };

export type Progress = {
  attempts: Attempt[];
  reviews: ReviewItem[];
  sheet?: SheetDraft;
  paperResults?: PaperResult[];
  /** The card rating log of files saved while the course had recall cards. It is kept as it is and never read. */
  cardRatings?: unknown[];
  /** A log of every first pick of a concept question. A wrong pick also puts the question in `reviews`. */
  conceptPicks?: ConceptPick[];
  /** The sections of each node the student has left with Next, by node id. */
  sectionsDone?: Record<string, string[]>;
  /** Nodes that have been Done. A node stays here even if a later miss or a content change would unmake it. */
  doneNodes?: string[];
};

export const EMPTY_PROGRESS: Progress = { attempts: [], reviews: [] };

export const EMPTY_SHEET_DRAFT: SheetDraft = { excluded: [], order: [], edits: {} };

export type IntervalConfig = {
  intervalsDays: number[];
  postponeDays: number;
};

export const DEFAULT_INTERVALS: IntervalConfig = {
  intervalsDays: [1, 3, 7, 16],
  postponeDays: 1,
};

const DAY_MS = 86_400_000;
const ID_PATTERN = /^[a-z0-9]+(?:[-.][a-z0-9]+)*$/;

export function isStableId(value: string): boolean {
  return ID_PATTERN.test(value);
}
const NOTE_LIMIT = 4000;

const STEP_RESULTS = ['right', 'wrong', 'skipped'] as const;
const WHOLE_RESULTS = ['right', 'partly-right', 'wrong'] as const;
const MISTAKE_SET: ReadonlySet<string> = new Set(MISTAKE_TYPES);

export class ProgressError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ProgressError';
    this.status = status;
  }
}

/** Exam-tier exercises and any exercise that has steps are marked step by step. A short drill is one result. */
export function marksByStep(exercise: { tier: string; steps?: readonly unknown[] }): boolean {
  return exercise.tier === 'exam' || (exercise.steps?.length ?? 0) > 0;
}

export function attemptSucceeded(attempt: { steps?: readonly { result: string }[]; result?: string }): boolean {
  if (attempt.steps) return attempt.steps.every((step) => step.result === 'right');
  return attempt.result === 'right';
}

export function isStepAttempt(attempt: Attempt): attempt is StepAttempt {
  return 'steps' in attempt;
}

/** Items whose identifiers are no longer in the course stay stored and are left out of what is shown. */
export function reviewsInCourse<T extends { id: string }>(items: readonly T[], liveIds: ReadonlySet<string>): T[] {
  return items.filter((item) => liveIds.has(item.id));
}

export function dueReviews(reviews: readonly ReviewItem[], now: string): ReviewItem[] {
  const nowMs = Date.parse(now);
  return reviews
    .filter((item) => Date.parse(item.dueAt) <= nowMs)
    .sort((a, b) => Date.parse(a.dueAt) - Date.parse(b.dueAt) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}

/**
 * A miss uses the first interval. A success moves an item already in the queue to the next interval.
 * A fully right exercise or concept question that was never missed stays out of the queue.
 */
export function scheduleAfter(
  existing: ReviewItem | undefined,
  action: { id: string; kind: ReviewKind; success: boolean },
  at: string,
  config: IntervalConfig,
): ReviewItem | null {
  if (action.success && !existing) return null;
  const last = config.intervalsDays.length - 1;
  const intervalIndex = action.success ? Math.min(existing ? existing.intervalIndex + 1 : 1, last) : 0;
  return {
    id: action.id,
    kind: action.kind,
    intervalIndex,
    dueAt: addDays(at, config.intervalsDays[intervalIndex] ?? 0),
  };
}

/** Postpone never brings an item forward. An overdue item is pushed from now. */
export function postponeReview(item: ReviewItem, now: string, config: IntervalConfig): ReviewItem {
  const base = Date.parse(item.dueAt) > Date.parse(now) ? item.dueAt : now;
  return { ...item, dueAt: addDays(base, config.postponeDays) };
}

export function withAttempt(
  progress: Progress,
  attempt: Attempt,
  config: IntervalConfig,
): { progress: Progress; review: ReviewItem | null } {
  const existing = progress.reviews.find((item) => item.id === attempt.exerciseId);
  const review = scheduleAfter(
    existing,
    { id: attempt.exerciseId, kind: 'exercise', success: attemptSucceeded(attempt) },
    attempt.at,
    config,
  );
  return {
    review,
    progress: {
      ...progress,
      attempts: [...progress.attempts, attempt],
      reviews: review ? upsertReview(progress.reviews, review) : progress.reviews,
    },
  };
}

/** A concept question is scheduled like an exercise: a wrong first pick is a miss, a right one moves a queued question on. */
export function withConceptPick(
  progress: Progress,
  entry: ConceptPick,
  config: IntervalConfig,
): { progress: Progress; review: ReviewItem | null } {
  const existing = progress.reviews.find((item) => item.id === entry.questionId);
  const review = scheduleAfter(existing, { id: entry.questionId, kind: 'question', success: entry.right }, entry.at, config);
  return {
    review,
    progress: {
      ...progress,
      conceptPicks: [...(progress.conceptPicks ?? []), entry],
      reviews: review ? upsertReview(progress.reviews, review) : progress.reviews,
    },
  };
}

export function withPostpone(progress: Progress, id: string, now: string, config: IntervalConfig): { progress: Progress; review: ReviewItem } {
  const existing = progress.reviews.find((item) => item.id === id);
  if (!existing) throw new ProgressError('No review item has that identifier.', 404);
  const review = postponeReview(existing, now, config);
  return { review, progress: { ...progress, reviews: upsertReview(progress.reviews, review) } };
}

export function addDays(iso: string, days: number): string {
  return new Date(Date.parse(iso) + days * DAY_MS).toISOString();
}

export function parseDayList(value: string): number[] {
  const message = 'REVIEW_INTERVALS must be a comma-separated list of day counts.';
  if (value.trim() === '') throw new Error(message);
  return value.split(',').map((part) => parseDayCount(part, message));
}

export function parseDayCount(value: string, message = 'REVIEW_POSTPONE_DAYS must be a day count.'): number {
  const trimmed = value.trim();
  if (!/^\d+(?:\.\d+)?$/.test(trimmed)) throw new Error(message);
  return Number(trimmed);
}

export function parseIntervalFile(value: unknown): IntervalConfig {
  const message = 'The review config needs intervalsDays and postponeDays.';
  const record = plainObject(value, message);
  exactKeys(record, ['intervalsDays', 'postponeDays'], message);
  if (!Array.isArray(record.intervalsDays) || record.intervalsDays.length === 0) throw new Error(message);
  const intervalsDays = record.intervalsDays.map((day) => {
    if (typeof day !== 'number' || !Number.isFinite(day) || day < 0) throw new Error(message);
    return day;
  });
  if (typeof record.postponeDays !== 'number' || !Number.isFinite(record.postponeDays) || record.postponeDays < 0) {
    throw new Error(message);
  }
  return { intervalsDays, postponeDays: record.postponeDays };
}

export function assertIntervalConfig(config: IntervalConfig): void {
  const message = 'The review config needs intervalsDays and postponeDays.';
  if (
    config.intervalsDays.length === 0 ||
    config.intervalsDays.some((day) => typeof day !== 'number' || !Number.isFinite(day) || day < 0) ||
    typeof config.postponeDays !== 'number' ||
    !Number.isFinite(config.postponeDays) ||
    config.postponeDays < 0
  ) {
    throw new Error(message);
  }
}

export function parseSheetDraft(value: unknown): SheetDraft {
  const message = 'The sheet draft could not be read.';
  const record = plainObject(value, message);
  exactKeys(record, ['excluded', 'order', 'edits'], message);
  const excluded = parseUniqueIdList(record.excluded, message);
  const order = parseUniqueIdList(record.order, message);
  const edits = parseSheetEdits(record.edits, message);
  return { excluded, order, edits };
}

export function parseProgress(value: unknown): Progress {
  const record = plainObject(value, 'Progress must contain attempts and reviews.');
  exactKeys(
    record,
    ['attempts', 'reviews', 'sheet', 'paperResults', 'cardRatings', 'conceptPicks', 'sectionsDone', 'doneNodes'],
    'Progress must contain attempts and reviews.',
  );
  if (!Array.isArray(record.attempts) || !Array.isArray(record.reviews)) {
    throw new ProgressError('Progress must contain attempts and reviews.', 400);
  }
  const attempts = record.attempts.map(parseStoredAttempt);
  const reviews = record.reviews.map(parseReview);
  const attemptIds = new Set<string>();
  for (const attempt of attempts) {
    if (attemptIds.has(attempt.id)) throw new ProgressError('An attempt is listed twice.', 400);
    attemptIds.add(attempt.id);
  }
  const reviewIds = new Set<string>();
  for (const review of reviews) {
    if (reviewIds.has(review.id)) throw new ProgressError('A review item is listed twice.', 400);
    reviewIds.add(review.id);
  }
  const progress: Progress = { attempts, reviews };
  if (Object.hasOwn(record, 'sheet')) progress.sheet = parseSheetDraft(record.sheet);
  if (Object.hasOwn(record, 'paperResults')) progress.paperResults = parsePaperResults(record.paperResults);
  if (Object.hasOwn(record, 'cardRatings')) progress.cardRatings = parseLegacyCardRatings(record.cardRatings);
  if (Object.hasOwn(record, 'conceptPicks')) progress.conceptPicks = parseConceptPicks(record.conceptPicks);
  if (Object.hasOwn(record, 'sectionsDone')) progress.sectionsDone = parseSectionsDone(record.sectionsDone);
  if (Object.hasOwn(record, 'doneNodes')) progress.doneNodes = parseUniqueIdList(record.doneNodes, 'The list of done topics could not be read.');
  return progress;
}

export function parseAttemptInput(value: unknown): AttemptInput {
  const record = plainObject(value, 'The attempt could not be read.');
  exactKeys(record, ['exerciseId', 'tier', 'steps', 'result', 'mistakeType', 'note'], 'The attempt has a field this version does not use.');
  const exerciseId = parseId(record.exerciseId, 'The exercise identifier is not valid.');
  const tier = parseTier(record.tier);
  const hasSteps = Object.hasOwn(record, 'steps');
  const hasResult = Object.hasOwn(record, 'result');
  if (hasSteps === hasResult) {
    throw new ProgressError('An attempt has to be either step results or one result for the whole exercise.', 400);
  }
  if (hasSteps) {
    if (Object.hasOwn(record, 'result') || Object.hasOwn(record, 'mistakeType') || Object.hasOwn(record, 'note')) {
      throw new ProgressError('An attempt has to be either step results or one result for the whole exercise.', 400);
    }
    return { exerciseId, tier, steps: parseSteps(record.steps) };
  }
  const whole = parseWhole(record);
  return { exerciseId, tier, ...whole };
}

/** The body of a pick request: whether the first pick was right. */
export function parseConceptPickInput(value: unknown): boolean {
  const message = 'Send whether the first pick was right.';
  const record = plainObject(value, message);
  exactKeys(record, ['right'], message);
  if (typeof record.right !== 'boolean') throw new ProgressError(message, 400);
  return record.right;
}

function parseStoredAttempt(value: unknown): Attempt {
  const record = plainObject(value, 'An attempt could not be read.');
  exactKeys(
    record,
    ['id', 'at', 'exerciseId', 'tier', 'steps', 'result', 'mistakeType', 'note'],
    'An attempt has a field this version does not use.',
  );
  const id = parseId(record.id, 'An attempt identifier is not valid.');
  const at = parseTime(record.at, 'An attempt time is not valid.');
  const input = parseAttemptInput({
    exerciseId: record.exerciseId,
    tier: record.tier,
    ...(Object.hasOwn(record, 'steps') ? { steps: record.steps } : {}),
    ...(Object.hasOwn(record, 'result') ? { result: record.result } : {}),
    ...(Object.hasOwn(record, 'mistakeType') ? { mistakeType: record.mistakeType } : {}),
    ...(Object.hasOwn(record, 'note') ? { note: record.note } : {}),
  });
  if ('steps' in input) return { id, at, exerciseId: input.exerciseId, tier: input.tier, steps: input.steps };
  return { id, at, ...input };
}

function parseSteps(value: unknown): StepMark[] {
  if (!Array.isArray(value) || value.length === 0) throw new ProgressError('An attempt needs at least one step.', 400);
  return value.map(parseStep);
}

function parseStep(value: unknown): StepMark {
  const record = plainObject(value, 'A step could not be read.');
  exactKeys(record, ['result', 'mistakeType', 'note'], 'A step has a field this version does not use.');
  if (!isOneOf(record.result, STEP_RESULTS)) throw new ProgressError('A step result has to be right, wrong or skipped.', 400);
  if (record.result === 'wrong') {
    const mistakeType = parseMistake(record.mistakeType, 'A wrong step needs a mistake type.');
    const note = parseNote(record.note, true);
    return note ? { result: 'wrong', mistakeType, note } : { result: 'wrong', mistakeType };
  }
  if (Object.hasOwn(record, 'mistakeType') || Object.hasOwn(record, 'note')) {
    throw new ProgressError('A right or skipped step cannot carry a mistake type or a note.', 400);
  }
  return { result: record.result };
}

function parseWhole(record: Record<string, unknown>): Pick<WholeAttempt, 'result' | 'mistakeType' | 'note'> {
  if (!isOneOf(record.result, WHOLE_RESULTS)) {
    throw new ProgressError('An exercise result has to be right, partly right or wrong.', 400);
  }
  if (record.result === 'right') {
    if (Object.hasOwn(record, 'mistakeType') || Object.hasOwn(record, 'note')) {
      throw new ProgressError('A right exercise cannot carry a mistake type or a note.', 400);
    }
    return { result: 'right' };
  }
  const mistakeType = parseMistake(record.mistakeType, 'A wrong or partly right exercise needs a mistake type.');
  const note = parseNote(record.note, true);
  return note ? { result: record.result, mistakeType, note } : { result: record.result, mistakeType };
}

function parseReview(value: unknown): ReviewItem {
  const record = plainObject(value, 'A review item could not be read.');
  exactKeys(record, ['id', 'kind', 'intervalIndex', 'dueAt'], 'A review item has a field this version does not use.');
  const id = parseId(record.id, 'A review identifier is not valid.');
  if (record.kind !== 'exercise' && record.kind !== 'card' && record.kind !== 'question') throw new ProgressError('A review item could not be read.', 400);
  if (typeof record.intervalIndex !== 'number' || !Number.isInteger(record.intervalIndex) || record.intervalIndex < 0 || record.intervalIndex > 10000) {
    throw new ProgressError('A review item could not be read.', 400);
  }
  const dueAt = parseTime(record.dueAt, 'A review time is not valid.');
  return { id, kind: record.kind, intervalIndex: record.intervalIndex, dueAt };
}

function parseMistake(value: unknown, message: string): MistakeType {
  if (typeof value !== 'string' || !MISTAKE_SET.has(value)) throw new ProgressError(message, 400);
  return value as MistakeType;
}

function parseNote(value: unknown, allowed: boolean): string | undefined {
  if (value === undefined) return undefined;
  if (!allowed) throw new ProgressError('A note belongs on a mistake.', 400);
  if (typeof value !== 'string') throw new ProgressError('A note has to be text.', 400);
  const note = value.trim();
  if (note.length > NOTE_LIMIT) throw new ProgressError('The note is too long.', 400);
  return note.length > 0 ? note : undefined;
}

function parseId(value: unknown, message: string): string {
  if (typeof value !== 'string' || !isStableId(value)) throw new ProgressError(message, 400);
  return value;
}

function parseTier(value: unknown): Tier {
  if (!isOneOf(value, TIERS)) throw new ProgressError('The tier has to be basic, standard or exam.', 400);
  return value;
}

function parseTime(value: unknown, message: string): string {
  if (typeof value !== 'string' || !Number.isFinite(Date.parse(value))) throw new ProgressError(message, 400);
  return value;
}

function plainObject(value: unknown, message: string): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) throw new ProgressError(message, 400);
  return value as Record<string, unknown>;
}

function exactKeys(record: Record<string, unknown>, allowed: readonly string[], message: string) {
  for (const key of Object.keys(record)) {
    if (!allowed.includes(key)) throw new ProgressError(message, 400);
  }
}

function isOneOf<T extends string>(value: unknown, allowed: readonly T[]): value is T {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value);
}

function upsertReview(reviews: readonly ReviewItem[], next: ReviewItem): ReviewItem[] {
  return [...reviews.filter((item) => item.id !== next.id), next];
}

function parseUniqueIdList(value: unknown, message: string): string[] {
  if (!Array.isArray(value)) throw new ProgressError(message, 400);
  const seen = new Set<string>();
  const ids: string[] = [];
  for (const item of value) {
    const id = parseId(item, message);
    if (seen.has(id)) throw new ProgressError(message, 400);
    seen.add(id);
    ids.push(id);
  }
  return ids;
}

function parseSheetEdits(value: unknown, message: string): Record<string, string> {
  const record = plainObject(value, message);
  const edits: Record<string, string> = {};
  for (const key of Object.keys(record)) {
    const id = parseId(key, message);
    if (Object.hasOwn(edits, id)) throw new ProgressError(message, 400);
    const text = record[key];
    if (typeof text !== 'string') throw new ProgressError(message, 400);
    const trimmed = text.trim();
    if (trimmed.length === 0 || trimmed.length > NOTE_LIMIT) throw new ProgressError(message, 400);
    edits[id] = trimmed;
  }
  return edits;
}

function parsePaperResults(value: unknown): PaperResult[] {
  const message = 'A paper result could not be read.';
  if (!Array.isArray(value)) throw new ProgressError(message, 400);
  const results: PaperResult[] = [];
  const ids = new Set<string>();
  for (const item of value) {
    const record = plainObject(item, message);
    exactKeys(record, ['id', 'at', 'paperId', 'earned', 'total', 'blocks'], message);
    const id = parseId(record.id, message);
    if (ids.has(id)) throw new ProgressError(message, 400);
    ids.add(id);
    const at = parseTime(record.at, message);
    const paperId = parseId(record.paperId, message);
    const earned = parseScore(record.earned, message, false);
    const total = parseScore(record.total, message, true);
    if (earned > total + 0.001) throw new ProgressError(message, 400);
    results.push({
      id,
      at,
      paperId,
      earned,
      total,
      ...(Object.hasOwn(record, 'blocks') ? { blocks: parseBlockScores(record.blocks, message) } : {}),
    });
  }
  return results;
}

function parseBlockScores(value: unknown, message: string): BlockScore[] {
  if (!Array.isArray(value)) throw new ProgressError(message, 400);
  const seen = new Set<string>();
  return value.map((item) => {
    const record = plainObject(item, message);
    exactKeys(record, ['blockId', 'title', 'earned', 'total'], message);
    const blockId = parseId(record.blockId, message);
    if (seen.has(blockId)) throw new ProgressError(message, 400);
    seen.add(blockId);
    if (typeof record.title !== 'string' || record.title.length === 0 || record.title.length > 200) {
      throw new ProgressError(message, 400);
    }
    const earned = parseScore(record.earned, message, false);
    const total = parseScore(record.total, message, true);
    if (earned > total + 0.001) throw new ProgressError(message, 400);
    return { blockId, title: record.title, earned, total };
  });
}

function parseSectionsDone(value: unknown): Record<string, string[]> {
  const message = 'The section marks could not be read.';
  const record = plainObject(value, message);
  const marks: Record<string, string[]> = {};
  for (const key of Object.keys(record)) {
    marks[parseId(key, message)] = parseUniqueIdList(record[key], message);
  }
  return marks;
}

export type SectionMarksInput = { nodeId: string; sectionIds: string[] };

export function parseSectionMarksInput(value: unknown): SectionMarksInput {
  const message = 'The section marks could not be read.';
  const record = plainObject(value, message);
  exactKeys(record, ['nodeId', 'sectionIds'], message);
  const sectionIds = parseUniqueIdList(record.sectionIds, message);
  if (sectionIds.length === 0) throw new ProgressError(message, 400);
  return { nodeId: parseId(record.nodeId, message), sectionIds };
}

/** Adds the sections to the node's marks. A section already marked stays as it is. */
export function withSectionsDone(progress: Progress, nodeId: string, sectionIds: readonly string[]): Progress {
  const marks = progress.sectionsDone ?? {};
  const merged = [...new Set([...(marks[nodeId] ?? []), ...sectionIds])];
  return { ...progress, sectionsDone: { ...marks, [nodeId]: merged } };
}

function parseLegacyCardRatings(value: unknown): unknown[] {
  if (!Array.isArray(value)) throw new ProgressError('The card rating log could not be read.', 400);
  return value;
}

function parseConceptPicks(value: unknown): ConceptPick[] {
  const message = 'A concept question pick could not be read.';
  if (!Array.isArray(value)) throw new ProgressError(message, 400);
  const ids = new Set<string>();
  return value.map((item) => {
    const record = plainObject(item, message);
    exactKeys(record, ['id', 'at', 'questionId', 'right'], message);
    const id = parseId(record.id, message);
    if (ids.has(id)) throw new ProgressError(message, 400);
    ids.add(id);
    const at = parseTime(record.at, message);
    const questionId = parseId(record.questionId, message);
    if (typeof record.right !== 'boolean') throw new ProgressError(message, 400);
    return { id, at, questionId, right: record.right };
  });
}

function parseScore(value: unknown, message: string, mustBePositive: boolean): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) throw new ProgressError(message, 400);
  if (value < 0 || (mustBePositive && value <= 0)) throw new ProgressError(message, 400);
  return value;
}

export type PaperResultInput = {
  earned: number;
  total: number;
  attempts: AttemptInput[];
  blocks?: BlockScore[];
};

export function parsePaperResultInput(value: unknown): PaperResultInput {
  const message = 'The paper result could not be read.';
  const record = plainObject(value, message);
  exactKeys(record, ['earned', 'total', 'attempts', 'blocks'], message);
  const earned = parseScore(record.earned, message, false);
  const total = parseScore(record.total, message, true);
  if (earned > total + 0.001) throw new ProgressError(message, 400);
  if (!Array.isArray(record.attempts) || record.attempts.length === 0) throw new ProgressError(message, 400);
  const attempts = record.attempts.map(parseAttemptInput);
  const exerciseIds = new Set<string>();
  for (const attempt of attempts) {
    if (exerciseIds.has(attempt.exerciseId)) throw new ProgressError(message, 400);
    exerciseIds.add(attempt.exerciseId);
  }
  if (Object.hasOwn(record, 'blocks')) return { earned, total, attempts, blocks: parseBlockScores(record.blocks, message) };
  return { earned, total, attempts };
}
