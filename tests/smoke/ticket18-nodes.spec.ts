import { expect, test } from '@playwright/test';

const nodes = [
  ['l3-real-powers', 'Real powers', 'Low exam weight'],
  ['l3-taylor', 'Taylor polynomials', 'Medium exam weight'],
  ['l3-taylor-composition', 'Composing Taylor expansions and limits', 'Medium exam weight'],
  ['l3-riemann-sums', 'Riemann sums and the definite integral', 'Low exam weight'],
  ['l3-fundamental-theorem', 'Antiderivatives and the fundamental theorem', 'High exam weight'],
  ['l3-substitution', 'Substitution', 'High exam weight'],
  ['l3-integration-by-parts', 'Integration by parts', 'High exam weight'],
] as const;

for (const [id, title, weight] of nodes) {
  test(`lecture 3 node ${id} renders its teaching blocks`, async ({ page }) => {
    await page.goto(`/node/${id}`);
    await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
    // A reviewed topic shows no draft note.
    await expect(page.locator('.node-draft-note')).toHaveCount(0);
    await expect(page.getByText(weight)).toBeVisible();

    // The teaching blocks are spread over the node's Learn sections, so open each one in turn.
    const learnSteps = page.getByRole('navigation', { name: 'Sections' }).getByRole('link', { name: /^Learn / });
    const learnCount = await learnSteps.count();
    expect(learnCount).toBeGreaterThan(0);
    const seen = { statement: 0, example: 0, trap: 0, solution: false, steps: false };
    for (let index = 1; index <= learnCount; index += 1) {
      await page.goto(`/node/${id}?section=learn-${index}`);
      await expect(page.locator('section.node-section')).toBeVisible();
      seen.statement += await page.locator('.block-formal-statement').count();
      seen.example += await page.locator('.block-worked-example').count();
      seen.trap += await page.locator('.block-trap').count();

      const reveal = page.getByRole('button', { name: 'Reveal solution' }).first();
      if (!seen.solution && (await reveal.count()) > 0) {
        await reveal.click();
        await expect(page.getByRole('button', { name: 'Hide solution' }).first()).toBeVisible();
        seen.solution = true;
      }
      const step = page.getByRole('button', { name: /Show step 1/ }).first();
      if (!seen.steps && (await step.count()) > 0) {
        await step.click();
        await expect(page.getByRole('button', { name: /Show step 2/ })).toBeVisible();
        seen.steps = true;
      }
    }
    expect(seen.statement).toBeGreaterThan(0);
    expect(seen.example).toBeGreaterThan(0);
    expect(seen.trap).toBeGreaterThan(0);
    expect(seen.solution).toBe(true);
    expect(seen.steps).toBe(true);
  });
}
