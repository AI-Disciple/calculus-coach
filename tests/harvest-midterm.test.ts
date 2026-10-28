import { describe, expect, it } from 'vitest';
import path from 'node:path';
import { checkContentBundle } from '../src/content/bundle.ts';
import type { Block, ContentBundle, Exercise } from '../src/content/schema.ts';

const realContent = path.resolve(import.meta.dirname, '../content');

const curves: { id: string; statement: string }[] = [
  { id: 'l2-curve-sketching.curve-01', statement: String.raw`\sqrt{1-x^{2}}` },
  { id: 'l2-curve-sketching.curve-02', statement: String.raw`\sqrt{x^{2}-1}` },
  { id: 'l2-curve-sketching.curve-03', statement: String.raw`\sqrt{x^{2}+3x+1}` },
  { id: 'l2-curve-sketching.curve-04', statement: String.raw`\frac{\sqrt{x}+1}{x}` },
  { id: 'l2-curve-sketching.curve-05', statement: String.raw`\frac{x^{2}}{x^{2}+9}` },
  { id: 'l2-curve-sketching.curve-06', statement: String.raw`x-3\sqrt{x}+1` },
  { id: 'l2-curve-sketching.curve-07', statement: String.raw`x^{4}-4x^{2}+1` },
  { id: 'l2-curve-sketching.curve-08', statement: String.raw`x^{3}-3x^{2}-9x+5` },
  { id: 'l2-curve-sketching.curve-09', statement: String.raw`(1-x^{2})^{1/4}` },
  { id: 'l2-curve-sketching.curve-10', statement: String.raw`\tan^{2} x` },
  { id: 'l2-curve-sketching.curve-11', statement: String.raw`x^{1/4}\ln x` },
  { id: 'l2-curve-sketching.curve-12', statement: String.raw`\frac{x-1}{\ln x}` },
];

const drills: { id: string; statement: string }[] = [
  { id: 'l2-curve-sketching.drill-01', statement: String.raw`\frac{\sqrt{x}+1}{x}` },
  { id: 'l2-curve-sketching.drill-02', statement: String.raw`\sqrt{1-x^{2}}` },
  { id: 'l2-curve-sketching.drill-03', statement: String.raw`x-3\sqrt{x}+1` },
  { id: 'l2-curve-sketching.drill-04', statement: String.raw`\frac{x-1}{\ln x}` },
  { id: 'l2-curve-sketching.drill-05', statement: String.raw`\frac{x^{2}}{x^{2}+9}` },
  { id: 'l2-curve-sketching.drill-06', statement: String.raw`\sqrt{x^{2}+3x+1}` },
  { id: 'l2-curve-sketching.drill-07', statement: String.raw`\tan^{2} x` },
  { id: 'l2-curve-sketching.drill-08', statement: String.raw`x^{1/4}\ln x` },
  { id: 'l2-curve-sketching.drill-09', statement: 'f\'\'(c) = 0' },
  { id: 'l2-curve-sketching.drill-10', statement: String.raw`\sqrt{x^{2}+3x+1}` },
  { id: 'l2-curve-sketching.drill-11', statement: String.raw`(1-x^{2})^{1/4}` },
  { id: 'l2-curve-sketching.drill-12', statement: String.raw`\frac{x-1}{\ln x}` },
];

function nodesOf(bundle: ContentBundle) {
  return bundle.lectures.flatMap((lecture) => lecture.nodes);
}

function blocksOf(bundle: ContentBundle, type: Block['type']) {
  return nodesOf(bundle).flatMap((node) =>
    node.blocks.filter((block) => block.type === type).map((block) => ({ node, block })),
  );
}

function exerciseMap(bundle: ContentBundle) {
  const map = new Map<string, Exercise>();
  for (const { block } of blocksOf(bundle, 'exercise')) {
    if (block.type === 'exercise') map.set(block.id, block);
  }
  return map;
}

describe('harvested midterm questions and curve write-ups', () => {
  it('keeps the curve write-up order and the ten-item checklist on the curve-sketching node', async () => {
    const { bundle, problems } = await checkContentBundle(realContent, { verify: false });
    expect(problems, problems.map((problem) => `${problem.file}: ${problem.message}`).join('\n')).toEqual([]);

    const node = nodesOf(bundle).find((item) => item.id === 'l2-curve-sketching');
    expect(node).toBeDefined();
    const method = node?.blocks.find(
      (block) => block.type === 'formal-statement' && block.kind === 'method' && /write-up order/i.test(block.title ?? ''),
    );
    expect(method && method.type === 'formal-statement' ? method.text : '').toMatch(/Domain/);
    expect(method && method.type === 'formal-statement' ? method.text : '').toMatch(/Symmetry or period/);
    expect(method && method.type === 'formal-statement' ? method.text : '').toMatch(/factored/);
    expect(method && method.type === 'formal-statement' ? method.source : undefined).toEqual({
      source: 'curves-revision',
    });

    const checks = node?.blocks.filter(
      (block) => block.type === 'sheet-item' && block.id.startsWith('l2-curve-sketching.check-'),
    );
    expect(checks).toHaveLength(10);
  });

  it('turns the twelve curve discussions into exam exercises with the exam rubric order', async () => {
    const { bundle } = await checkContentBundle(realContent, { verify: false });
    const exercises = exerciseMap(bundle);
    for (const curve of curves) {
      const exercise = exercises.get(curve.id);
      expect(exercise, curve.id).toBeDefined();
      expect(exercise?.statement).toContain(curve.statement);
      expect(exercise?.tier).toBe('exam');
      expect(exercise?.provenance).toBe('written-for-site');
      expect(exercise?.steps?.[0]).toMatch(/^Domain/);
      expect(exercise?.steps?.[1]).toMatch(/^Derivative/);
      expect(exercise?.steps?.[2]).toMatch(/^Sign chart/);
      expect(exercise?.steps?.[3]).toMatch(/^Asymptotes/);
      expect(exercise?.steps?.[4]).toMatch(/^Intercepts/);
      const last = exercise?.steps?.at(-1) ?? '';
      expect(last).toMatch(/^Conclusion/);
      const inflection = exercise?.steps?.findIndex((step) => step.startsWith('Inflection')) ?? -1;
      if (inflection !== -1) {
        expect(inflection).toBe(5);
        expect(exercise?.steps).toHaveLength(7);
      } else {
        expect(exercise?.steps).toHaveLength(6);
      }
      expect(exercise?.verification && 'checks' in exercise.verification).toBe(true);
    }
  });

  it('turns the twelve drills into basic or standard exercises marked as a whole', async () => {
    const { bundle } = await checkContentBundle(realContent, { verify: false });
    const exercises = exerciseMap(bundle);
    for (const drill of drills) {
      const exercise = exercises.get(drill.id);
      expect(exercise, drill.id).toBeDefined();
      expect(exercise?.statement).toContain(drill.statement);
      expect(exercise?.tier === 'basic' || exercise?.tier === 'standard').toBe(true);
      expect(exercise?.provenance).toBe('written-for-site');
      expect(exercise?.verification && 'checks' in exercise.verification).toBe(true);
    }
  });

  it('attaches reworked concept questions to lectures 1 to 3, and logs the level-set questions left out', async () => {
    const { bundle } = await checkContentBundle(realContent, { verify: false });
    const early = bundle.lectures.filter((lecture) => lecture.number <= 3).flatMap((lecture) => lecture.nodes);
    const questions = early.flatMap((node) => node.blocks.filter((block) => block.type === 'concept-question'));
    expect(questions.length).toBeGreaterThanOrEqual(100);
    for (const question of questions) {
      if (question.type !== 'concept-question') continue;
      const correct = question.options.filter((option) => option.correct === true);
      expect(correct).toHaveLength(1);
      expect(question.explanation.length).toBeGreaterThan(0);
    }

    const logged = bundle.changes.some((entry) => /level set/i.test(entry.text) && /lecture 4/i.test(entry.text));
    expect(logged).toBe(true);
    const harvested = bundle.coverage.sources.find((group) => group.source === 'midterm-app');
    expect(harvested?.items.some((item) => item.excluded && /lecture 4/i.test(item.excluded))).toBe(true);
    expect(bundle.coverage.sources.some((group) => group.source === 'curves-revision')).toBe(true);
    expect(bundle.sources.some((source) => source.id === 'midterm-app')).toBe(true);
    expect(bundle.sources.some((source) => source.id === 'curves-revision')).toBe(true);
  });
});
