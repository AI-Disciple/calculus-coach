import { afterAll, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync, copyFileSync, readFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { checkContentBundle } from '../src/content/bundle.ts';

const realContent = path.resolve(import.meta.dirname, '../content');
const tempDirs: string[] = [];
afterAll(() => tempDirs.forEach((dir) => rmSync(dir, { recursive: true, force: true })));

const registry = [
  '- id: handout',
  '  title: Handout',
  '  kind: handout',
  '  pageNumbering: printed',
  '  printedPages:',
  '    - { from: 1, to: 195, offset: 0 }',
  '    - { from: 349, to: 418, offset: 106 }',
  '  sections: { "14.7": 267 }',
  '- id: lecture-notes-5',
  '  title: Lecture 5 notes',
  '  kind: lecture-notes',
  '  pageNumbering: pdf',
].join('\n');

function coverageForSources(sourcesYaml: string): string {
  const ids = [...new Set([...sourcesYaml.matchAll(/id:\s*([a-z0-9][a-z0-9.-]*)/g)].map((m) => m[1]))];
  const skipped = ids.map((source) => `  - source: ${source}\n    reason: Fixture only.`).join('\n');
  return `sources: []\nskipped:\n${skipped}\n`;
}

function bundleWith(
  nodes: Record<string, string>,
  sources = registry,
  coverage?: string,
  papers = '[]\n',
): string {
  const cov = coverage ?? coverageForSources(sources);
  const dir = mkdtempSync(path.join(os.tmpdir(), 'content-'));
  tempDirs.push(dir);
  copyFileSync(path.join(realContent, 'lectures.yaml'), path.join(dir, 'lectures.yaml'));
  writeFileSync(path.join(dir, 'sources.yaml'), sources);
  writeFileSync(path.join(dir, 'coverage.yaml'), cov);
  writeFileSync(path.join(dir, 'changes.yaml'), '[]\n');
  writeFileSync(path.join(dir, 'papers.yaml'), papers);
  mkdirSync(path.join(dir, 'guide'));
  writeFileSync(path.join(dir, 'guide/adding-content.md'), 'Fixture guide.\n');
  mkdirSync(path.join(dir, 'style'));
  copyFileSync(path.join(realContent, 'style/banned-phrases.yaml'), path.join(dir, 'style/banned-phrases.yaml'));
  mkdirSync(path.join(dir, 'nodes'));
  for (const [name, text] of Object.entries(nodes)) writeFileSync(path.join(dir, 'nodes', name), text);
  return dir;
}

function node(
  id: string,
  body = '',
  front = '',
  opts?: { omitPrerequisites?: boolean; lecture?: number; order?: number },
): string {
  const prereq =
    opts?.omitPrerequisites || /^\s*prerequisites:/m.test(front) ? '' : 'prerequisites: []\n';
  return [
    '---',
    `id: ${id}`,
    `lecture: ${opts?.lecture ?? 1}`,
    `order: ${opts?.order ?? 1}`,
    `title: Node ${id}`,
    'examWeight: low',
    'status: draft',
    prereq,
    front,
    '---',
    body,
  ].join('\n');
}

const plain = (text: string) => `::: plain-explanation\ntext: ${JSON.stringify(text)}\n:::\n`;

function exercise(id: string, extra: string): string {
  return [
    '::: exercise',
    `id: ${id}`,
    'tier: basic',
    'topics: [limits]',
    'statement: Compute the limit of x squared at 2.',
    'solution: The function is continuous, so the limit is 4.',
    extra,
    ':::',
    '',
  ].join('\n');
}

const verified = 'provenance: written-for-site\nverification:\n  checks:\n    - expr: limit(x**2, x, 2)\n      expected: "4"';

async function problemsOf(
  nodes: Record<string, string>,
  sources?: string,
  coverage?: string,
  verify = true,
  papers?: string,
): Promise<string[]> {
  const report = await checkContentBundle(bundleWith(nodes, sources, coverage, papers), { verify });
  return report.problems.map((p) => `${p.file} ${p.id ?? ''} ${p.message}`);
}

function fixturePaper(
  paperId: string,
  exerciseId: string,
  opts?: { totalPoints?: number; blockPoints?: number; rubricPoints?: number },
): string {
  const total = opts?.totalPoints ?? 1;
  const blockPts = opts?.blockPoints ?? 1;
  const rubricPts = opts?.rubricPoints ?? blockPts;
  return [
    `- id: ${paperId}`,
    '  kind: mock',
    '  presentation: current-format',
    '  title: Fixture paper',
    '  year: 2026',
    '  durationMinutes: 10',
    `  totalPoints: ${total}`,
    '  allowedMaterial: None.',
    '  source: Fixture',
    '  blocks:',
    '    - id: block-one',
    '      title: Block one',
    `      points: ${blockPts}`,
    '      minutes: 10',
    `      exercises: [${exerciseId}]`,
    '      rubric:',
    '        - text: Full credit.',
    `          points: ${rubricPts}`,
    `          exercise: ${exerciseId}`,
    '',
  ].join('\n');
}

describe('a content bundle with mistakes', () => {
  it('reports schema errors with the file and the field', async () => {
    const problems = await problemsOf({ 'a.md': node('a', exercise('a.one', `${verified}\nexamBlock: nowhere`)) });
    expect(problems.join('\n')).toMatch(/nodes\/a\.md a\.one .*examBlock/);
  });

  it('reports a node with no prerequisites field', async () => {
    const problems = await problemsOf({ 'a.md': node('a', plain('Fine.'), '', { omitPrerequisites: true }) });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/a\.md .*prerequisites/);
  });

  it('reports prerequisites that point at no node', async () => {
    const problems = await problemsOf({
      'a.md': node('a', plain('Fine.')),
      'b.md': node('b', plain('Fine.'), 'prerequisites: [a, missing-node]'),
    });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/b\.md .*missing-node/);
  });

  it('reports duplicate node, exercise and sheet item identifiers', async () => {
    const sheetItem = (id: string) => `::: sheet-item\nid: ${id}\ncategory: formula\ntext: Item.\n:::\n`;
    const problems = await problemsOf({
      'a.md': node('a', exercise('shared.ex', verified) + sheetItem('shared.sheet')),
      'b.md': node('a', exercise('shared.ex', verified) + sheetItem('shared.sheet')),
    });
    const text = problems.join('\n');
    expect(text).toMatch(/duplicate.*"a"/);
    expect(text).toMatch(/duplicate.*"shared\.ex"/);
    expect(text).toMatch(/duplicate.*"shared\.sheet"/);
  });

  it('reports an exercise without a provenance label', async () => {
    const withoutLabel = verified.replace('provenance: written-for-site\n', '');
    const problems = await problemsOf({ 'a.md': node('a', exercise('a.one', withoutLabel)) });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/a\.one .*provenance label/);
  });

  it('reports an exercise with no verification record and no not-machine-checkable mark', async () => {
    const problems = await problemsOf({ 'a.md': node('a', exercise('a.one', 'provenance: official-key')) });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/a\.one .*verification record/);
  });

  it('reports em dashes and banned filler phrases in site text', async () => {
    const problems = await problemsOf({
      'a.md': node('a', plain('The slope is positive \u2014 so f increases.')),
      'b.md': node('b', plain('It is worth noting that f is even.')),
    });
    expect(problems).toHaveLength(2);
    expect(problems[0]).toMatch(/a\.md .*em dash/);
    expect(problems[1]).toMatch(/b\.md .*"it is worth noting"/);
  });

  it('lints the app interface text when given its folder', async () => {
    const uiDir = mkdtempSync(path.join(os.tmpdir(), 'ui-'));
    tempDirs.push(uiDir);
    writeFileSync(path.join(uiDir, 'Home.tsx'), 'export const Home = () => <p>Lectures \u2014 all of them</p>;\n');
    const report = await checkContentBundle(bundleWith({ 'a.md': node('a', plain('Fine.')) }), { uiDir });
    expect(report.problems.map((p) => `${p.file} ${p.message}`)).toEqual([
      expect.stringMatching(/Home\.tsx .*em dash/),
    ]);
  });

  it('warns, without failing, about a concept question with no correct option', async () => {
    const question = (marked: boolean) =>
      [
        '::: concept-question',
        'question: Which one?',
        'options:',
        '  - text: One',
        `  - text: Two${marked ? '\n    correct: true' : ''}`,
        'explanation: Because.',
        ':::',
        '',
      ].join('\n');
    const bad = await checkContentBundle(bundleWith({ 'a.md': node('a', question(false)) }), { verify: false });
    expect(bad.problems).toEqual([]);
    expect(bad.warnings.map((w) => `${w.file} ${w.id} ${w.message}`)).toEqual([
      expect.stringMatching(/a\.md a .*no correct option/),
    ]);
    const good = await checkContentBundle(bundleWith({ 'a.md': node('a', question(true)) }), { verify: false });
    expect(good.warnings).toEqual([]);
  });

  it('warns about an exercise that repeats the formulas of an example in its node', async () => {
    const example = [
      '::: worked-example',
      'problem: |',
      String.raw`  Convert \((1, \sqrt{3}, 3)\) with \(r > 0\).`,
      'solution: Done.',
      ':::',
      '',
    ].join('\n');
    const exerciseWith = (point: string) =>
      exercise('a.one', verified).replace(
        'statement: Compute the limit of x squared at 2.',
        String.raw`statement: |
  Convert \(${point}\) with \(r > 0\).`,
      );
    const copy = await checkContentBundle(bundleWith({ 'a.md': node('a', example + exerciseWith(String.raw`(1, \sqrt{3}, 3)`)) }), { verify: false });
    expect(copy.problems).toEqual([]);
    expect(copy.warnings.map((w) => `${w.file} ${w.id} ${w.message}`)).toEqual([
      expect.stringMatching(/a\.md a\.one .*repeats the formulas of the example "untitled"/),
    ]);
    const fresh = await checkContentBundle(bundleWith({ 'a.md': node('a', example + exerciseWith('(2, 2, 5)')) }), { verify: false });
    expect(fresh.warnings).toEqual([]);
  });

  it('reports a verification record that SymPy does not confirm, with the exercise identifier', async () => {
    const wrong = verified.replace('expected: "4"', 'expected: "5"');
    const problems = await problemsOf({ 'a.md': node('a', exercise('a.wrong', wrong) + exercise('a.right', verified)) });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/a\.md a\.wrong .*verification failed.*limit\(x\*\*2, x, 2\).*4.*5/);
  });

  it('accepts records whose expected value is an equivalent form or a tuple', async () => {
    const forms = [
      'provenance: written-for-site',
      'verification:',
      '  checks:',
      '    - expr: diff(sin(x)**2, x)',
      '      expected: sin(2*x)',
      '    - expr: (integrate(x, (x, 0, 2)), sqrt(8))',
      '      expected: (2, 2*sqrt(2))',
    ].join('\n');
    expect(await problemsOf({ 'a.md': node('a', exercise('a.forms', forms)) })).toEqual([]);
  });

  it('reports a verification expression SymPy cannot parse', async () => {
    const broken = verified.replace('limit(x**2, x, 2)', 'limit(x**2, x,');
    const problems = await problemsOf({ 'a.md': node('a', exercise('a.broken', broken)) });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/a\.broken .*verification failed/);
  });

  it('lists exercises marked not machine-checkable for a second-pass review', async () => {
    const sketch = 'provenance: written-for-site\nverification:\n  checkable: false\n  reason: The answer is a sketch.';
    const report = await checkContentBundle(bundleWith({ 'a.md': node('a', exercise('a.sketch', sketch)) }));
    expect(report.problems).toEqual([]);
    expect(report.secondPass).toEqual([{ file: 'nodes/a.md', id: 'a.sketch', reason: 'The answer is a sketch.' }]);
  });

  it('reports a lecture list that does not number the lectures 1 to 8', async () => {
    const dir = bundleWith({ 'a.md': node('a', plain('Fine.')) });
    const lectures = [1, 2, 3, 4, 5, 6, 7, 7].map((n) => `- number: ${n}\n  title: Lecture title`).join('\n');
    writeFileSync(path.join(dir, 'lectures.yaml'), lectures);
    const { problems } = await checkContentBundle(dir, { verify: false });
    expect(problems.map((p) => `${p.file} ${p.message}`).join('\n')).toMatch(/lectures\.yaml .*1 to 8/);
  });

  it('reports a malformed lecture list instead of crashing', async () => {
    const dir = bundleWith({ 'a.md': node('a', plain('Fine.')) });
    writeFileSync(path.join(dir, 'lectures.yaml'), '- number: [1\n');
    const { problems } = await checkContentBundle(dir, { verify: false });
    expect(problems.map((p) => `${p.file} ${p.message}`).join('\n')).toMatch(/lectures\.yaml .*invalid YAML/);
  });

  it('reports an exercise identifier that repeats a node identifier', async () => {
    const problems = await problemsOf({ 'a.md': node('a', exercise('a', verified)) });
    expect(problems.join('\n')).toMatch(/duplicate.*"a"/);
  });

  it('compares sets of expressions by equivalence and rejects identities SymPy cannot prove', async () => {
    const records = [
      'provenance: written-for-site',
      'verification:',
      '  checks:',
      '    - expr: FiniteSet(sin(2*x), 1)',
      '      expected: FiniteSet(1, 2*sin(x)*cos(x))',
    ].join('\n');
    const unproven = 'provenance: written-for-site\nverification:\n  checks:\n    - expr: x + 10**-30\n      expected: x';
    const problems = await problemsOf({ 'a.md': node('a', exercise('a.sets', records) + exercise('a.close', unproven)) });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/a\.close .*verification failed/);
  });

  it('reports source references to entries the source registry does not have', async () => {
    const statement = '::: formal-statement\nsource: { source: lecture-notes-9, page: 2 }\ntext: A statement.\n:::\n';
    const problems = await problemsOf({
      'a.md': node('a', statement, 'sources:\n  - { source: handuot, page: 12 }\n  - { source: lecture-notes-5, page: 1 }'),
    });
    expect(problems).toHaveLength(2);
    expect(problems[0]).toMatch(/a\.md .*unknown source "handuot"/);
    expect(problems[1]).toMatch(/a\.md .*unknown source "lecture-notes-9"/);
  });

  it('reports a printed handout page that falls in none of its page ranges', async () => {
    const problems = await problemsOf({
      'a.md': node('a', plain('Fine.'), 'sources:\n  - { source: handout, page: 250 }\n  - { source: handout, page: 373 }'),
    });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/a\.md .*handout.*page 250/);
  });

  it('reports a handout section the source registry does not list', async () => {
    const problems = await problemsOf({
      'a.md': node('a', plain('Fine.'), 'sources:\n  - { source: handout, section: "14.9" }\n  - { source: handout, section: "14.7" }'),
    });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/a\.md .*handout.*section "14\.9"/);
  });

  it('reports a printed handout page that the selected handout skipped', async () => {
    const sources = readFileSync(path.join(realContent, 'sources.yaml'), 'utf8');
    const problems = await problemsOf({ 'a.md': node('a', plain('Fine.'), 'sources:\n  - { source: handout, page: 260 }') }, sources);
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/handout.*page 260/);
  });

  it('reports a source registry that repeats an identifier', async () => {
    const report = await checkContentBundle(bundleWith({ 'a.md': node('a', plain('Fine.')) }, `${registry}\n${registry}`));
    expect(report.problems.map((p) => `${p.file} ${p.message}`).join('\n')).toMatch(/sources\.yaml .*duplicate.*"handout"/);
  });

  describe('section markers', () => {
    const marker = (title: string) => `::: section\ntitle: ${title}\n:::\n`;
    const sheetItem = (id: string) => `::: sheet-item\nid: ${id}\ncategory: formula\ntext: Item.\n:::\n`;
    const exerciseOf = (id: string, tier: string) => exercise(id, verified).replace('tier: basic', `tier: ${tier}`);

    it('accepts a node whose markers each keep a block in the Learn section', async () => {
      const body = marker('One') + plain('First.') + marker('Two') + exercise('a.one', verified) + exerciseOf('a.two', 'exam');
      expect(await problemsOf({ 'a.md': node('a', body) })).toEqual([]);
    });

    it('reports blocks before the first section marker', async () => {
      const problems = await problemsOf({ 'a.md': node('a', plain('Loose.') + marker('One') + plain('Fine.')) });
      expect(problems).toHaveLength(1);
      expect(problems[0]).toMatch(/a\.md a .*Blocks before the first section marker/);
    });

    it('reports a section whose blocks all leave the Learn section', async () => {
      const body = marker('One') + plain('Fine.') + marker('Only practice') + exerciseOf('a.std', 'standard') + sheetItem('a.sheet') + marker('Empty');
      const problems = await problemsOf({ 'a.md': node('a', body) });
      expect(problems).toHaveLength(2);
      expect(problems[0]).toMatch(/a\.md a .*"Only practice" would be empty/);
      expect(problems[1]).toMatch(/a\.md a .*"Empty" would be empty/);
    });

    it('reports two markers with the same title', async () => {
      const problems = await problemsOf({ 'a.md': node('a', marker('Same') + plain('One.') + marker('Same') + plain('Two.')) });
      expect(problems).toHaveLength(1);
      expect(problems[0]).toMatch(/a\.md a .*share the title "Same"/);
    });

    it('does not check nodes without markers', async () => {
      expect(await problemsOf({ 'a.md': node('a', sheetItem('a.sheet') + exerciseOf('a.std', 'standard')) })).toEqual([]);
    });
  });

  describe('visual parameters of the several-variable kinds', () => {
    const visual = (kind: string, params = '') => `::: visual\nkind: ${kind}\ncaption: A figure.\n${params}:::\n`;
    const visualProblems = async (kind: string, params = '') =>
      (await problemsOf({ 'a.md': node('a', visual(kind, params)) }, undefined, undefined, false)).filter((p) => /visual/.test(p));

    it('reports an unknown visual kind', async () => {
      const problems = await visualProblems('quadrik');
      expect(problems).toHaveLength(1);
      expect(problems[0]).toMatch(/a\.md a .*visual kind "quadrik" is unknown/);
    });

    it('reports an unknown parameter name', async () => {
      const problems = await visualProblems('critical-point-viewer', 'params:\n  family: x^2\n');
      expect(problems).toHaveLength(1);
      expect(problems[0]).toMatch(/visual "critical-point-viewer": unknown parameter "family"/);
    });

    it('reports a choice value outside the allowed set and lists the allowed values', async () => {
      const problems = await visualProblems('region', 'params:\n  order: dz-dx\n');
      expect(problems).toHaveLength(1);
      expect(problems[0]).toMatch(/visual "region": order = "dz-dx" is not one of "dy-dx", "dx-dy"/);
    });

    it('reports a parameter that is not a number', async () => {
      const problems = await visualProblems('gradient', 'params:\n  x: pi\n  y: true\n');
      expect(problems).toHaveLength(2);
      expect(problems[0]).toMatch(/visual "gradient": x = "pi" is not a number/);
      expect(problems[1]).toMatch(/y = true is not a number/);
    });

    it('reports a number outside its range, and every problem in the block', async () => {
      const problems = await visualProblems('quadric', 'params:\n  a: 5\n  axis: w\n');
      expect(problems).toHaveLength(2);
      expect(problems[0]).toMatch(/visual "quadric": a = 5 is outside the range 0\.4 to 3/);
      expect(problems[1]).toMatch(/axis = "w" is not one of/);
    });

    it('accepts valid parameters, including numeric strings', async () => {
      expect(await visualProblems('quadric', 'params:\n  surface: cone\n  a: "0.5"\n  slice: -2\n')).toEqual([]);
      expect(await visualProblems('solid', 'params:\n  preset: plane-paraboloid\n  cut: x\n')).toEqual([]);
    });

    it('does not flag extra parameters on a one-variable kind', async () => {
      expect(await visualProblems('limit', 'params:\n  f: x^2\n  extra: 1\n')).toEqual([]);
    });
  });

  it('accepts a clean fixture node', async () => {
    expect(await problemsOf({ 'a.md': node('a', plain('A clean sentence.') + exercise('a.one', verified)) })).toEqual([]);
  });

  it('places hidden nodes in bundle.hiddenNodes, not in lectures', async () => {
    const report = await checkContentBundle(
      bundleWith({
        'a.md': node('a', plain('Visible.')),
        'h.md': node('hidden-one', plain('Hidden.'), 'hidden: true', { lecture: 2 }),
      }),
      { verify: false },
    );
    expect(report.problems).toEqual([]);
    expect(report.bundle.lectures.flatMap((l) => l.nodes.map((n) => n.id))).toEqual(['a']);
    expect(report.bundle.hiddenNodes.map((n) => n.id)).toEqual(['hidden-one']);
  });

  it('reports a visible node that lists a hidden node as a prerequisite', async () => {
    const problems = await problemsOf({
      'a.md': node('a', plain('Fine.'), 'prerequisites: [hidden-one]'),
      'h.md': node('hidden-one', plain('Hidden.'), 'hidden: true'),
    });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/a\.md .*hidden/);
  });

  it('reports a missing coverage map', async () => {
    const dir = bundleWith({ 'a.md': node('a', plain('Fine.')) });
    const { unlinkSync } = await import('node:fs');
    unlinkSync(path.join(dir, 'coverage.yaml'));
    const { problems } = await checkContentBundle(dir, { verify: false });
    expect(problems.map((p) => `${p.file} ${p.message}`)).toEqual([expect.stringMatching(/coverage\.yaml .*missing coverage map/)]);
  });

  it('reports a missing papers file', async () => {
    const dir = bundleWith({ 'a.md': node('a', plain('Fine.')) });
    const { unlinkSync } = await import('node:fs');
    unlinkSync(path.join(dir, 'papers.yaml'));
    const { problems } = await checkContentBundle(dir, { verify: false });
    expect(problems.map((p) => `${p.file} ${p.message}`)).toEqual([expect.stringMatching(/papers\.yaml .*missing papers/)]);
  });

  it('reports block points that do not sum to the paper total', async () => {
    const problems = await problemsOf(
      { 'a.md': node('a', exercise('a.one', verified)) },
      undefined,
      undefined,
      false,
      fixturePaper('p-one', 'a.one', { totalPoints: 5, blockPoints: 1 }),
    );
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/papers\.yaml p-one .*block points sum to 1.*totalPoints is 5/);
  });

  it('reports rubric points that do not sum to the block total', async () => {
    const problems = await problemsOf(
      { 'a.md': node('a', exercise('a.one', verified)) },
      undefined,
      undefined,
      false,
      fixturePaper('p-one', 'a.one', { totalPoints: 2, blockPoints: 2, rubricPoints: 1 }),
    );
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/papers\.yaml p-one .*block "block-one".*rubric points sum to 1.*block points is 2/);
  });

  it('reports an unknown exercise id on a paper', async () => {
    const problems = await problemsOf(
      { 'a.md': node('a', exercise('a.one', verified)) },
      undefined,
      undefined,
      false,
      fixturePaper('p-one', 'missing.exercise'),
    );
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/papers\.yaml p-one .*unknown exercise "missing\.exercise"/);
  });

  it('reports a paper exercise that has no provenance label', async () => {
    const withoutLabel = verified.replace('provenance: written-for-site\n', '');
    const problems = await problemsOf(
      { 'a.md': node('a', exercise('a.one', withoutLabel)) },
      undefined,
      undefined,
      false,
      fixturePaper('p-one', 'a.one'),
    );
    const paperProblems = problems.filter((p) => p.includes('papers.yaml'));
    expect(paperProblems).toHaveLength(1);
    expect(paperProblems[0]).toMatch(/papers\.yaml p-one .*provenance label/);
    expect(paperProblems[0]).toContain('a.one');
  });

  it('reports an unmapped coverage item and unknown nodes', async () => {
    const coverage = [
      'sources:',
      '  - source: handout',
      '    items:',
      '      - id: "14.5"',
      '        label: Directional derivatives',
      '      - id: "15.4"',
      '        label: Surface area',
      '        nodes: [missing-node]',
      'skipped:',
      '  - source: lecture-notes-5',
      '    reason: Fixture only.',
    ].join('\n');
    const problems = await problemsOf({ 'a.md': node('a', plain('Fine.')) }, registry, coverage, false);
    const text = problems.join('\n');
    expect(text).toMatch(/handout\/14\.5 .*unmapped/);
    expect(text).toMatch(/handout\/15\.4 .*unknown node "missing-node"/);
  });

  it('reports a change log entry that references a hidden node', async () => {
    const dir = bundleWith({
      'a.md': node('a', plain('Fine.')),
      'h.md': node('hidden-one', plain('Hidden.'), 'hidden: true'),
    });
    writeFileSync(
      path.join(dir, 'changes.yaml'),
      '- date: "2026-10-09"\n  title: Sample\n  text: A note.\n  nodes: [hidden-one]\n',
    );
    const { problems } = await checkContentBundle(dir, { verify: false });
    expect(problems).toHaveLength(1);
    expect(`${problems[0].file} ${problems[0].message}`).toMatch(/changes\.yaml .*unknown node "hidden-one"/);
  });

  it('reports a missing adding-content guide', async () => {
    const dir = bundleWith({ 'a.md': node('a', plain('Fine.')) });
    const { unlinkSync } = await import('node:fs');
    unlinkSync(path.join(dir, 'guide/adding-content.md'));
    const { problems } = await checkContentBundle(dir, { verify: false });
    expect(problems.map((p) => p.message)).toEqual([expect.stringMatching(/missing adding-content guide/)]);
  });
});

describe('the real content bundle', () => {
  it(
    'passes every content check, including the style of the app interface text',
    async () => {
      const report = await checkContentBundle(realContent, { uiDir: path.resolve(import.meta.dirname, '../src') });
      expect(report.problems).toEqual([]);
    },
    180_000,
  );

  it('lists lectures 1 to 8 with the derivative node under lecture 1 and the stand-in sample in hiddenNodes', async () => {
    const { bundle } = await checkContentBundle(realContent, { verify: false });
    expect(bundle.lectures.map((l) => l.number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(bundle.lectures.find((l) => l.number === 1)!.nodes.map((n) => n.id)).toContain('l1-derivative');
    expect(bundle.lectures.find((l) => l.number === 6)!.nodes.map((n) => n.id)[0]).toBe('l6-critical-points');
    const sample = bundle.hiddenNodes.find((n) => n.id === 'l6-hessian-test-sample')!;
    expect(sample.status).toBe('draft');
    expect(new Set(sample.blocks.map((b) => b.type))).toEqual(
      new Set([
        'formal-statement',
        'plain-explanation',
        'trap',
        'worked-example',
        'guided-example',
        'concept-question',
        'going-deeper',
        'exercise',
        'sheet-item',
        'visual',
      ]),
    );
    expect(sample.blocks.filter((b) => b.type === 'exercise').map((b) => b.tier).sort()).toEqual(['basic', 'exam', 'exam', 'standard']);
  });

  it('includes the 2024 and 2025 finals as current-format mocks', async () => {
    const { bundle } = await checkContentBundle(realContent, { verify: false });
    for (const id of ['final-2024', 'final-2025']) {
      const paper = bundle.papers.find((p) => p.id === id)!;
      expect(paper.kind).toBe('mock');
      expect(paper.standIn).toBeUndefined();
      expect(paper.presentation).toBe('current-format');
      expect(paper.blocks).toHaveLength(6);
      expect(paper.durationMinutes).toBe(120);
      expect(paper.totalPoints).toBe(20);
      const blockSum = paper.blocks.reduce((sum, b) => sum + b.points, 0);
      expect(blockSum).toBe(paper.totalPoints);
    }
    expect(bundle.papers.find((p) => p.id === 'stand-in-final')).toBeUndefined();
  });

  it('offers the past midterms as optional checkpoints', async () => {
    const { bundle } = await checkContentBundle(realContent, { verify: false });
    const checkpoints = bundle.papers.filter((paper) => paper.kind === 'checkpoint');
    expect(checkpoints.map((paper) => paper.id).sort()).toEqual([
      'midterm-2021',
      'midterm-2022',
      'midterm-2024',
      'midterm-2025',
      'midterm-2026',
      'midterm-mock-1',
      'midterm-predicted-a',
      'midterm-predicted-b',
    ]);
    for (const paper of checkpoints) {
      expect(paper.durationMinutes).toBe(90);
      expect(paper.presentation).toBe('as-printed');
      expect(paper.standIn).toBeUndefined();
    }
    expect(checkpoints.find((paper) => paper.id === 'midterm-2026')!.source).toMatch(/official/i);
    expect(checkpoints.find((paper) => paper.id === 'midterm-predicted-a')!.source).toMatch(/written for practice/i);
    expect(checkpoints.find((paper) => paper.id === 'midterm-predicted-b')!.source).toMatch(/written for practice/i);

    const exercises = bundle.lectures
      .flatMap((lecture) => lecture.nodes)
      .flatMap((node) => node.blocks)
      .filter((block) => block.type === 'exercise')
      .filter((exercise) => exercise.id.includes('midterm-'));
    expect(exercises.every((exercise) => exercise.provenance)).toBe(true);
    expect(exercises.filter((exercise) => exercise.id.includes('midterm-2021')).every((exercise) => exercise.provenance === 'written-for-site')).toBe(true);
    expect(exercises.filter((exercise) => exercise.id.includes('midterm-2024')).every((exercise) => exercise.provenance === 'written-for-site')).toBe(true);
    expect(exercises.filter((exercise) => exercise.id.includes('midterm-2026')).every((exercise) => exercise.provenance === 'official-key')).toBe(true);
    const sketches = exercises.filter((exercise) => exercise.verification && 'checkable' in exercise.verification);
    expect(sketches.length).toBeGreaterThan(0);
    expect(sketches.every((exercise) => (exercise.steps?.length ?? 0) > 0)).toBe(true);
    expect(
      exercises
        .filter((exercise) => exercise.id.includes('midterm-2025') && exercise.discrepancy)
        .map((exercise) => exercise.id)
        .sort(),
    ).toEqual([
      'l2-curve-sketching.midterm-2025-ex1.1',
      'l2-newton.midterm-2025-ex2',
      'l3-area-between-curves.midterm-2025-ex5.3',
      'l3-integration-by-parts.midterm-2025-ex5.5',
    ]);
  });

  it('imports the older finals, the mocks and the home assignment once, as printed', async () => {
    const { bundle } = await checkContentBundle(realContent, { verify: false });
    const byId = new Map(bundle.papers.map((paper) => [paper.id, paper]));
    for (const id of ['final-2021', 'final-2022', 'retake-2023', 'mock-2022', 'mock-exam-1', 'mock-exam-2']) {
      const paper = byId.get(id);
      expect(paper?.kind).toBe('mock');
      expect(paper?.presentation).toBe('as-printed');
      expect(paper?.standIn).toBeUndefined();
    }
    expect(byId.get('final-2021')).toMatchObject({ durationMinutes: 180, totalPoints: 22 });
    expect(byId.get('final-2022')).toMatchObject({ durationMinutes: 180, totalPoints: 18 });
    expect(byId.get('retake-2023')).toMatchObject({ durationMinutes: 120, totalPoints: 20 });
    expect(byId.get('mock-2022')?.totalPoints).toBe(20);

    const nodes = [...bundle.lectures.flatMap((lecture) => lecture.nodes), ...bundle.hiddenNodes];
    const exercises = nodes.flatMap((node) =>
      node.blocks.flatMap((block) => (block.type === 'exercise' ? [{ node, exercise: block }] : [])),
    );
    const exerciseById = new Map(exercises.map(({ exercise }) => [exercise.id, exercise]));

    const idsOn = (paperId: string) => byId.get(paperId)!.blocks.flatMap((block) => block.exercises);
    const final2022Ids = new Set(idsOn('final-2022'));
    for (const id of idsOn('mock-exam-2')) {
      expect(final2022Ids.has(id) || id.includes('mock-exam-2')).toBe(true);
    }
    const probabilityIds = [...final2022Ids].filter((id) => id.includes('q7'));
    expect(probabilityIds.length).toBeGreaterThan(0);
    for (const id of probabilityIds) expect(idsOn('mock-exam-2')).not.toContain(id);
    expect(idsOn('mock-exam-2').some((id) => final2022Ids.has(id))).toBe(true);

    for (const { node, exercise } of exercises) {
      if (exercise.outOfScope) expect(node.hidden).toBe(true);
    }
    expect(exercises.some(({ exercise }) => exercise.outOfScope)).toBe(true);
    for (const lecture of bundle.lectures) {
      for (const node of lecture.nodes) {
        for (const block of node.blocks) {
          if (block.type === 'exercise') expect(block.outOfScope).toBeUndefined();
        }
      }
    }

    const excluded = (source: string, id: string) =>
      bundle.coverage.sources.find((group) => group.source === source)?.items.find((item) => item.id === id);
    expect(excluded('final-2021', 'q4')?.nodes).toBeUndefined();
    expect(excluded('final-2021', 'q4')?.excluded).toBeTruthy();
    expect(excluded('final-2022', 'q7a')?.nodes).toBeUndefined();
    expect(excluded('final-2022', 'q7a')?.excluded).toMatch(/current course/);
    expect(excluded('mock-2022', 'q6.1')?.nodes).toBeUndefined();

    const lecture6Ids = bundle.lectures
      .find((lecture) => lecture.number === 6)!
      .nodes.flatMap((node) => node.blocks.flatMap((block) => (block.type === 'exercise' ? [block.id] : [])));
    expect(lecture6Ids.some((id) => id.startsWith('l6-second-derivative-test.home-2022'))).toBe(true);
    expect(lecture6Ids.some((id) => id.startsWith('l6-degenerate-case.home-2022'))).toBe(true);
    expect(lecture6Ids.some((id) => id.startsWith('l6-parameter-families.home-2022'))).toBe(true);
    expect(lecture6Ids.some((id) => id.startsWith('l6-worded-optimisation.home-2022'))).toBe(true);

    const average = exerciseById.get('l7-average-value.final-2022-q6');
    expect(average?.provenance).toBe('official-key');
    expect(average?.discrepancy).toMatch(/2\\sin 1 - \\sin 2/);
    const steepest = exerciseById.get('l5-steepest-ascent.final-2021-q1');
    expect(steepest?.provenance).toBe('official-key');
    expect(steepest?.discrepancy).toMatch(/mock solutions/);

    for (const id of idsOn('retake-2023')) expect(exerciseById.get(id)?.provenance).toBe('written-for-site');
    for (const id of idsOn('mock-2022')) {
      if (id.includes('mock-2022')) expect(exerciseById.get(id)?.provenance).toBe('written-for-site');
    }
  });
});
