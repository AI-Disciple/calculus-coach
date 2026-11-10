import { promises as fs } from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';
import type { z } from 'zod';
import { runVerifier, type VerificationRequest } from './verifier.ts';
import { locateSource } from './sources.ts';
import { conceptQuestionId } from './questionId.ts';
import { visualParamProblem } from '../visuals/onevar.ts';
import { severalVarParamProblems } from '../visuals/params.ts';
import {
  block,
  changeLogSchema,
  coverageMapSchema,
  lectureList,
  nodeFrontMatter,
  sourceRegistry,
  type Block,
  type ChangeEntry,
  paperListSchema,
  type ContentBundle,
  type CoverageMap,
  type CourseNode,
  type Exercise,
  type Paper,
  type SourceEntry,
  type SourceRef,
} from './schema.ts';

export type Problem = { file: string; id?: string; message: string };

export type Warning = { file: string; id?: string; message: string };

export type SecondPassItem = { file: string; id: string; reason: string };

export type ContentReport = {
  bundle: ContentBundle;
  problems: Problem[];
  /** Things worth fixing that do not fail the check. */
  warnings: Warning[];
  /** Exercises marked not machine-checkable, waiting for a second-pass review by a person. */
  secondPass: SecondPassItem[];
};

export type CheckOptions = {
  /** Folder of app interface source files whose text is held to the same style rules as content. */
  uiDir?: string;
  /** Run verification records through SymPy. The app turns this off when it only needs to display content. */
  verify?: boolean;
};

export async function checkContentBundle(contentDir: string, options: CheckOptions = {}): Promise<ContentReport> {
  const problems: Problem[] = [];
  const lectures = await loadLectures(contentDir, problems);
  const sources = await loadSources(contentDir, problems);
  const nodes = await loadNodes(contentDir, problems);
  checkIdentifiers(nodes, problems);
  checkPrerequisites(nodes, problems);
  checkSourceRefs(nodes, sources, problems);
  checkExerciseRecords(nodes, problems);
  checkVisualParams(nodes, problems);
  checkSectionMarkers(nodes, problems);
  const warnings = [...conceptQuestionWarnings(nodes), ...exerciseCopyWarnings(nodes)];
  await checkStyle(contentDir, options.uiDir, problems);
  if (options.verify ?? true) await checkVerificationRecords(nodes, problems);

  const publishedIds = publishedNodeIds(nodes);
  const coverage = await loadCoverage(contentDir, problems);
  checkCoverage(coverage, sources, publishedIds, problems);
  const changes = await loadChanges(contentDir, problems);
  checkChanges(changes, publishedIds, problems);
  const papers = await loadPapers(contentDir, problems);
  const exerciseById = exerciseIndex(nodes);
  checkPapers(papers, exerciseById, problems);
  const addingContent = await loadAddingContent(contentDir, problems);

  const visible = nodes.filter((n) => !n.hidden);
  const bundle: ContentBundle = {
    lectures: lectures.map((lecture) => ({
      ...lecture,
      nodes: visible.filter((n) => n.lecture === lecture.number).sort((a, b) => a.order - b.order),
    })),
    hiddenNodes: nodes.filter((n) => n.hidden).sort((a, b) => a.id.localeCompare(b.id)),
    sources,
    coverage: coverage ?? { sources: [], skipped: [] },
    changes: changes ? sortChanges(changes) : [],
    papers: papers ?? [],
    addingContent: addingContent ?? '',
  };
  return { bundle, problems, warnings, secondPass: secondPassItems(nodes) };
}

function publishedNodeIds(nodes: CourseNode[]): Set<string> {
  return new Set(nodes.filter((n) => !n.hidden).map((n) => n.id));
}

async function loadCoverage(contentDir: string, problems: Problem[]): Promise<CoverageMap | undefined> {
  const file = 'coverage.yaml';
  const raw = await readText(path.join(contentDir, file));
  if (raw === undefined) {
    problems.push({ file, message: 'missing coverage map' });
    return undefined;
  }
  const parsed = coverageMapSchema.safeParse(parseYamlSafely(file, raw, problems));
  if (!parsed.success) {
    problems.push(...schemaProblems(file, undefined, parsed.error));
    return undefined;
  }
  return parsed.data;
}

function checkCoverage(
  coverage: CoverageMap | undefined,
  sources: SourceEntry[],
  publishedIds: Set<string>,
  problems: Problem[],
) {
  if (!coverage) return;
  const file = 'coverage.yaml';
  const registry = new Map(sources.map((s) => [s.id, s]));
  const appearances = new Map<string, number>();

  const countSource = (source: string) => appearances.set(source, (appearances.get(source) ?? 0) + 1);

  for (const group of coverage.sources) {
    const entry = registry.get(group.source);
    if (!entry) problems.push({ file, message: `unknown source "${group.source}"` });
    else countSource(group.source);

    const seen = new Set<string>();
    for (const item of group.items) {
      const itemId = `${group.source}/${item.id}`;
      if (seen.has(item.id)) problems.push({ file, id: itemId, message: `duplicate coverage item "${item.id}" in source "${group.source}"` });
      seen.add(item.id);

      const hasNodes = item.nodes !== undefined;
      const hasExcluded = item.excluded !== undefined && item.excluded.trim().length > 0;
      if (!hasNodes && !hasExcluded) problems.push({ file, id: itemId, message: 'unmapped coverage item (set nodes or excluded)' });
      else if (hasNodes && hasExcluded) problems.push({ file, id: itemId, message: 'coverage item has both nodes and excluded' });
      else if (hasNodes && item.nodes!.length === 0) problems.push({ file, id: itemId, message: 'coverage item nodes must not be empty' });
      else if (hasNodes) {
        for (const nodeId of item.nodes!) {
          if (!publishedIds.has(nodeId)) problems.push({ file, id: itemId, message: `unknown node "${nodeId}"` });
        }
      }

      if (entry && (item.page !== undefined || item.section !== undefined)) {
        const located = locateSource(entry, { source: group.source, page: item.page, section: item.section });
        if (located.problem) problems.push({ file, id: itemId, message: located.problem });
      }
    }
  }

  for (const { source } of coverage.skipped) {
    if (!registry.has(source)) problems.push({ file, message: `unknown source "${source}"` });
    else countSource(source);
  }

  for (const { id } of sources) {
    const count = appearances.get(id) ?? 0;
    if (count === 0) problems.push({ file, message: `registered source "${id}" is not in the coverage map` });
    else if (count > 1) problems.push({ file, message: `registered source "${id}" appears more than once in the coverage map` });
  }
}

async function loadChanges(contentDir: string, problems: Problem[]): Promise<ChangeEntry[] | undefined> {
  const file = 'changes.yaml';
  const raw = await readText(path.join(contentDir, file));
  if (raw === undefined) {
    problems.push({ file, message: 'missing change log' });
    return undefined;
  }
  const parsed = changeLogSchema.safeParse(parseYamlSafely(file, raw, problems));
  if (!parsed.success) {
    problems.push(...schemaProblems(file, undefined, parsed.error));
    return undefined;
  }
  return parsed.data;
}

function checkChanges(changes: ChangeEntry[] | undefined, publishedIds: Set<string>, problems: Problem[]) {
  if (!changes) return;
  const file = 'changes.yaml';
  for (const entry of changes) {
    for (const nodeId of entry.nodes) {
      if (!publishedIds.has(nodeId)) problems.push({ file, message: `unknown node "${nodeId}"` });
    }
  }
}

function sortChanges(changes: ChangeEntry[]): ChangeEntry[] {
  return [...changes].sort((a, b) => b.date.localeCompare(a.date));
}

async function loadAddingContent(contentDir: string, problems: Problem[]): Promise<string | undefined> {
  const file = 'guide/adding-content.md';
  const raw = await readText(path.join(contentDir, file));
  if (raw === undefined) {
    problems.push({ file, message: 'missing adding-content guide' });
    return undefined;
  }
  return raw;
}

function checkIdentifiers(nodes: CourseNode[], problems: Problem[]) {
  const seen = new Map<string, string>();
  const claim = (id: string, file: string) => {
    const first = seen.get(id);
    if (first) problems.push({ file, id, message: `duplicate identifier "${id}" (first used in ${first})` });
    else seen.set(id, file);
  };
  for (const node of nodes) {
    claim(node.id, node.file);
    for (const b of node.blocks) {
      if (b.type === 'exercise' || b.type === 'sheet-item') claim(b.id, node.file);
      // Questions get an identifier in the bundle, so only an explicit duplicate or a repeated question text lands here.
      if (b.type === 'concept-question' && b.id) claim(b.id, node.file);
    }
  }
}

function checkPrerequisites(nodes: CourseNode[], problems: Problem[]) {
  const known = new Set(nodes.map((n) => n.id));
  const hidden = new Set(nodes.filter((n) => n.hidden).map((n) => n.id));
  for (const node of nodes) {
    for (const prerequisite of node.prerequisites) {
      if (!known.has(prerequisite)) {
        problems.push({ file: node.file, id: node.id, message: `unknown prerequisite "${prerequisite}"` });
      } else if (!node.hidden && hidden.has(prerequisite)) {
        problems.push({ file: node.file, id: node.id, message: `hidden prerequisite "${prerequisite}"` });
      }
    }
  }
}

function checkSourceRefs(nodes: CourseNode[], sources: SourceEntry[], problems: Problem[]) {
  const registry = new Map(sources.map((s) => [s.id, s]));
  for (const node of nodes) {
    const refs: SourceRef[] = [...node.sources, ...node.blocks.flatMap((b) => (b.type === 'formal-statement' ? [b.source] : []))];
    for (const ref of refs) {
      const entry = registry.get(ref.source);
      const problem = entry ? locateSource(entry, ref).problem : `unknown source "${ref.source}"`;
      if (problem) problems.push({ file: node.file, id: node.id, message: problem });
    }
  }
}

function checkExerciseRecords(nodes: CourseNode[], problems: Problem[]) {
  for (const { file, exercise } of exercisesOf(nodes)) {
    if (!exercise.provenance) {
      problems.push({ file, id: exercise.id, message: 'exercise has no provenance label' });
    }
    if (!exercise.verification) {
      problems.push({
        file,
        id: exercise.id,
        message: 'exercise has no verification record (add checks or mark it checkable: false with a reason)',
      });
    }
  }
}

function checkVisualParams(nodes: CourseNode[], problems: Problem[]) {
  for (const node of nodes) {
    for (const b of node.blocks) {
      if (b.type !== 'visual') continue;
      const message = visualParamProblem(b.kind, b.params);
      if (message) problems.push({ file: node.file, id: node.id, message });
      for (const text of severalVarParamProblems(b.kind, b.params)) {
        problems.push({ file: node.file, id: node.id, message: text });
      }
    }
  }
}

/** Blocks that leave a node's Learn sections: sheet items and standard or exam exercises. */
function staysInLearn(b: Block): boolean {
  if (b.type === 'sheet-item') return false;
  return !(b.type === 'exercise' && b.tier !== 'basic');
}

function checkSectionMarkers(nodes: CourseNode[], problems: Problem[]) {
  for (const node of nodes) {
    if (!node.blocks.some((b) => b.type === 'section')) continue;
    const report = (message: string) => problems.push({ file: node.file, id: node.id, message });
    if (node.blocks[0].type !== 'section') {
      report('Blocks before the first section marker. A node with section markers must start with one.');
    }
    const titles = new Set<string>();
    node.blocks.forEach((b, index) => {
      if (b.type !== 'section') return;
      if (titles.has(b.title)) report(`Two section markers share the title "${b.title}". Give each section its own title.`);
      titles.add(b.title);
      const rest = node.blocks.slice(index + 1);
      const end = rest.findIndex((next) => next.type === 'section');
      const own = end === -1 ? rest : rest.slice(0, end);
      if (!own.some(staysInLearn)) {
        report(`The section "${b.title}" would be empty. Sheet items and standard or exam exercises do not count, because they move to Practise and For the sheet.`);
      }
    });
  }
}

function conceptQuestionWarnings(nodes: CourseNode[]): Warning[] {
  return nodes.flatMap((node) =>
    node.blocks.flatMap((b, index) =>
      b.type === 'concept-question' && !b.options.some((option) => option.correct === true)
        ? [{ file: node.file, id: node.id, message: `concept question ${index + 1} has no correct option, so the app cannot mark answers` }]
        : [],
    ),
  );
}

/** The formulas in a text that carry data: a point, a function, a surface. Generic notation without a digit and short conditions such as `r > 0` are skipped. */
function dataFormulas(text: string): Set<string> {
  const spans = [...text.matchAll(/\\\((.+?)\\\)|\\\[([\s\S]+?)\\\]/g)].map((m) => (m[1] ?? m[2]).replace(/\s+/g, ''));
  const isInequality = (s: string) => /<|>|\\le|\\ge|\\lt|\\gt/.test(s) && s.length <= 25;
  return new Set(spans.filter((s) => s.length >= 8 && /\d/.test(s) && !isInequality(s)));
}

/** An exercise that reuses the formulas of a worked or guided example in its node is a copy, not practice. */
function exerciseCopyWarnings(nodes: CourseNode[]): Warning[] {
  const warnings: Warning[] = [];
  for (const node of nodes) {
    const examples = node.blocks.flatMap((b) =>
      b.type === 'worked-example' || b.type === 'guided-example' ? [{ title: b.title ?? 'untitled', data: dataFormulas(b.problem) }] : [],
    );
    for (const b of node.blocks) {
      // Exercises taken from a key or the handout cannot be varied, so only the ones written for the site are held to this.
      if (b.type !== 'exercise' || b.provenance !== 'written-for-site') continue;
      const own = dataFormulas(b.statement);
      if (own.size === 0) continue;
      for (const example of examples) {
        const shared = [...own].filter((s) => example.data.has(s));
        if (shared.length > 0 && shared.length * 2 >= own.size) {
          warnings.push({
            file: node.file,
            id: b.id,
            message: `exercise repeats the formulas of the example "${example.title}" (${shared.join(' ; ')}). Change the numbers, function or surface so it is new practice.`,
          });
          break;
        }
      }
    }
  }
  return warnings;
}

async function checkVerificationRecords(nodes: CourseNode[], problems: Problem[]) {
  const fileOf = new Map<string, string>();
  const requests: VerificationRequest[] = [];
  for (const { file, exercise } of exercisesOf(nodes)) {
    if (exercise.verification && 'checks' in exercise.verification) {
      fileOf.set(exercise.id, file);
      requests.push({ id: exercise.id, checks: exercise.verification.checks });
    }
  }
  let results;
  try {
    results = await runVerifier(requests);
  } catch (error) {
    problems.push({ file: 'verifier/verify.py', message: `could not run the SymPy verifier: ${(error as Error).message}` });
    return;
  }
  for (const result of results.filter((r) => !r.ok)) {
    problems.push({
      file: fileOf.get(result.id) ?? '(unknown)',
      id: result.id,
      message: `verification failed (check ${result.check + 1}): ${result.message}`,
    });
  }
}

function secondPassItems(nodes: CourseNode[]): SecondPassItem[] {
  return exercisesOf(nodes).flatMap(({ file, exercise }) =>
    exercise.verification && 'checkable' in exercise.verification
      ? [{ file, id: exercise.id, reason: exercise.verification.reason }]
      : [],
  );
}

function exercisesOf(nodes: CourseNode[]): { file: string; exercise: Exercise }[] {
  return nodes.flatMap((node) =>
    node.blocks.filter((b): b is Exercise => b.type === 'exercise').map((exercise) => ({ file: node.file, exercise })),
  );
}

function exerciseIndex(nodes: CourseNode[]): Map<string, Exercise> {
  return new Map(exercisesOf(nodes).map(({ exercise }) => [exercise.id, exercise]));
}

async function loadPapers(contentDir: string, problems: Problem[]): Promise<Paper[] | undefined> {
  const file = 'papers.yaml';
  const raw = await readText(path.join(contentDir, file));
  if (raw === undefined) {
    problems.push({ file, message: 'missing papers' });
    return undefined;
  }
  const parsed = paperListSchema.safeParse(parseYamlSafely(file, raw, problems));
  if (!parsed.success) {
    problems.push(...schemaProblems(file, undefined, parsed.error));
    return undefined;
  }
  return parsed.data;
}

function checkPapers(papers: Paper[] | undefined, exerciseById: Map<string, Exercise>, problems: Problem[]) {
  if (!papers) return;
  const file = 'papers.yaml';
  const seen = new Set<string>();
  for (const paper of papers) {
    if (seen.has(paper.id)) problems.push({ file, id: paper.id, message: `duplicate paper identifier "${paper.id}"` });
    seen.add(paper.id);

    const blockSum = paper.blocks.reduce((sum, b) => sum + b.points, 0);
    if (Math.abs(blockSum - paper.totalPoints) > 0.001) {
      problems.push({
        file,
        id: paper.id,
        message: `block points sum to ${blockSum}, but totalPoints is ${paper.totalPoints}`,
      });
    }

    for (const block of paper.blocks) {
      const rubricSum = block.rubric.reduce((sum, item) => sum + item.points, 0);
      if (Math.abs(rubricSum - block.points) > 0.001) {
        problems.push({
          file,
          id: paper.id,
          message: `block "${block.id}" rubric points sum to ${rubricSum}, but block points is ${block.points}`,
        });
      }

      const blockExercises = new Set(block.exercises);
      const referenced = new Set<string>();
      for (const exerciseId of block.exercises) referenced.add(exerciseId);
      for (const item of block.rubric) {
        if (!blockExercises.has(item.exercise)) {
          problems.push({
            file,
            id: paper.id,
            message: `rubric item exercise "${item.exercise}" is not listed in block "${block.id}" exercises`,
          });
        }
        referenced.add(item.exercise);
      }
      for (const exerciseId of referenced) {
        checkPaperExercise(file, paper.id, exerciseId, exerciseById, problems);
      }
    }
  }
}

function checkPaperExercise(
  file: string,
  paperId: string,
  exerciseId: string,
  exerciseById: Map<string, Exercise>,
  problems: Problem[],
) {
  const exercise = exerciseById.get(exerciseId);
  if (!exercise) {
    problems.push({ file, id: paperId, message: `unknown exercise "${exerciseId}"` });
    return;
  }
  if (!exercise.provenance) {
    problems.push({ file, id: paperId, message: `exercise "${exerciseId}" has no provenance label` });
  }
}

const BANNED_PHRASES_FILE = 'style/banned-phrases.yaml';
const EM_DASH = '\u2014';

async function checkStyle(contentDir: string, uiDir: string | undefined, problems: Problem[]) {
  const phrases = await loadBannedPhrases(contentDir, problems);
  const patterns = phrases.map((phrase) => ({
    phrase,
    pattern: new RegExp(`(?<![\\w'])${escapeRegExp(phrase)}(?![\\w'])`, 'i'),
  }));

  const contentFiles = (await listFiles(contentDir))
    .filter((f) => /\.(md|ya?ml)$/.test(f))
    .map((absolute) => ({ absolute, file: toPosix(path.relative(contentDir, absolute)) }))
    .filter(({ file }) => file !== BANNED_PHRASES_FILE);
  const uiFiles = uiDir
    ? (await listFiles(uiDir))
        .filter((f) => /\.(tsx?|css|html)$/.test(f))
        .map((absolute) => ({ absolute, file: `ui/${toPosix(path.relative(uiDir, absolute))}` }))
    : [];

  for (const { absolute, file } of [...contentFiles, ...uiFiles]) {
    const lines = (await fs.readFile(absolute, 'utf8')).split(/\r?\n/);
    lines.forEach((text, index) => {
      const line = index + 1;
      if (text.includes(EM_DASH)) problems.push({ file, message: `line ${line}: em dash in site text` });
      for (const { phrase, pattern } of patterns) {
        if (pattern.test(text)) problems.push({ file, message: `line ${line}: banned filler phrase "${phrase}"` });
      }
    });
  }
}

async function loadBannedPhrases(contentDir: string, problems: Problem[]): Promise<string[]> {
  const raw = await readText(path.join(contentDir, BANNED_PHRASES_FILE));
  const parsed = raw === undefined ? undefined : parseYamlSafely(BANNED_PHRASES_FILE, raw, problems);
  if (!Array.isArray(parsed) || !parsed.every((p) => typeof p === 'string')) {
    problems.push({ file: BANNED_PHRASES_FILE, message: 'missing or malformed list of banned phrases' });
    return [];
  }
  return parsed;
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function loadLectures(contentDir: string, problems: Problem[]) {
  const file = 'lectures.yaml';
  const raw = await readText(path.join(contentDir, file));
  if (raw === undefined) {
    problems.push({ file, message: 'missing lecture list' });
    return [];
  }
  const parsed = lectureList.safeParse(parseYamlSafely(file, raw, problems));
  if (!parsed.success) {
    problems.push(...schemaProblems(file, undefined, parsed.error));
    return [];
  }
  return [...parsed.data].sort((a, b) => a.number - b.number);
}

async function loadSources(contentDir: string, problems: Problem[]): Promise<SourceEntry[]> {
  const file = 'sources.yaml';
  const raw = await readText(path.join(contentDir, file));
  if (raw === undefined) {
    problems.push({ file, message: 'missing source registry' });
    return [];
  }
  const parsed = sourceRegistry.safeParse(parseYamlSafely(file, raw, problems));
  if (!parsed.success) {
    problems.push(...schemaProblems(file, undefined, parsed.error));
    return [];
  }
  const seen = new Set<string>();
  for (const { id } of parsed.data) {
    if (seen.has(id)) problems.push({ file, id, message: `duplicate source identifier "${id}"` });
    seen.add(id);
  }
  return parsed.data;
}

async function loadNodes(contentDir: string, problems: Problem[]): Promise<CourseNode[]> {
  const nodesDir = path.join(contentDir, 'nodes');
  const files = (await listFiles(nodesDir)).filter((f) => f.endsWith('.md'));
  const nodes: CourseNode[] = [];
  for (const absolute of files) {
    const file = toPosix(path.relative(contentDir, absolute));
    const raw = (await fs.readFile(absolute, 'utf8')).replace(/^\uFEFF/, '');
    const node = parseNodeFile(file, raw, problems);
    if (node) nodes.push(node);
  }
  return nodes;
}

const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const BLOCK_OPEN = /^:::\s*([a-z-]+)\s*$/;
const BLOCK_CLOSE = /^:::\s*$/;

function parseNodeFile(file: string, raw: string, problems: Problem[]): CourseNode | undefined {
  const match = FRONT_MATTER.exec(raw);
  if (!match) {
    problems.push({ file, message: 'missing front matter' });
    return undefined;
  }
  const front = nodeFrontMatter.safeParse(parseYamlSafely(file, match[1], problems));
  if (!front.success) {
    problems.push(...schemaProblems(file, undefined, front.error));
    return undefined;
  }
  const bodyStartLine = match[0].split('\n').length;
  const blocks = parseBlocks(file, raw.slice(match[0].length), bodyStartLine, problems);
  return { ...front.data, file, blocks: withQuestionIds(front.data.id, blocks) };
}

function withQuestionIds(nodeId: string, blocks: Block[]): Block[] {
  return blocks.map((b) => (b.type === 'concept-question' && !b.id ? { ...b, id: conceptQuestionId(nodeId, b.question) } : b));
}

function parseBlocks(file: string, body: string, firstLine: number, problems: Problem[]): Block[] {
  const blocks: Block[] = [];
  const lines = body.split(/\r?\n/);
  let open: { type: string; line: number; content: string[] } | undefined;

  lines.forEach((text, index) => {
    const line = firstLine + index;
    if (open) {
      if (BLOCK_CLOSE.test(text)) {
        const data = parseYamlSafely(file, open.content.join('\n'), problems, open.line) ?? {};
        const parsed = block.safeParse({ ...(data as object), type: open.type });
        if (parsed.success) blocks.push(parsed.data);
        else problems.push(...schemaProblems(file, blockLabel(open.type, data), parsed.error, open.line));
        open = undefined;
      } else {
        open.content.push(text);
      }
      return;
    }
    const opening = BLOCK_OPEN.exec(text);
    if (opening) open = { type: opening[1], line, content: [] };
    else if (text.trim() !== '') problems.push({ file, message: `line ${line}: text outside a block` });
  });

  if (open) problems.push({ file, message: `line ${open.line}: block "${open.type}" is never closed` });
  return blocks;
}

function blockLabel(type: string, data: unknown): string {
  const id = (data as { id?: unknown } | null)?.id;
  return typeof id === 'string' ? id : type;
}

function parseYamlSafely(file: string, text: string, problems: Problem[], line?: number): unknown {
  try {
    return parseYaml(text);
  } catch (error) {
    problems.push({ file, message: `${line ? `line ${line}: ` : ''}invalid YAML: ${(error as Error).message}` });
    return undefined;
  }
}

function schemaProblems(file: string, id: string | undefined, error: z.ZodError, line?: number): Problem[] {
  return error.issues.map((issue) => ({
    file,
    id,
    message: `${line ? `line ${line}: ` : ''}schema error at "${issue.path.join('.') || '(root)'}": ${issue.message}`,
  }));
}

async function readText(file: string): Promise<string | undefined> {
  try {
    return await fs.readFile(file, 'utf8');
  } catch {
    return undefined;
  }
}

async function listFiles(dir: string): Promise<string[]> {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const nested = await Promise.all(
    entries.map((e) => (e.isDirectory() ? listFiles(path.join(dir, e.name)) : [path.join(dir, e.name)])),
  );
  return nested.flat().sort();
}

function toPosix(p: string): string {
  return p.split(path.sep).join('/');
}
