import { readFile } from 'node:fs/promises';
import { expect, test } from '@playwright/test';

test('mark a wrong step and find the exercise in the review queue', async ({ page }) => {
  const reset = await page.request.post('/api/progress', { data: { attempts: [], reviews: [] } });
  expect(reset.ok()).toBeTruthy();

  await page.goto('/node/l6-hessian-test-sample');
  const exercise = page.locator('.block-exercise').filter({ hasText: 'Find and classify the critical point' });
  await exercise.getByRole('button', { name: 'Reveal solution' }).click();

  const steps = exercise.locator('.mark-step');
  await expect(steps).toHaveCount(4);
  await steps.nth(0).getByRole('button', { name: 'Wrong', exact: true }).click();
  await steps.nth(0).getByLabel('Mistake type').selectOption({ label: 'Sign or arithmetic slip' });
  await steps.nth(0).getByLabel('Note').fill('Dropped a minus.');
  for (const index of [1, 2, 3]) {
    await steps.nth(index).getByRole('button', { name: 'Right', exact: true }).click();
  }
  await exercise.getByRole('button', { name: 'Save attempt' }).click();
  await expect(exercise.getByText('Step 1 was wrong. Sign or arithmetic slip. Dropped a minus.')).toBeVisible();

  // The sidebar also lists a lecture called "Review of functions, limits and derivatives", and the link now carries the due count.
  await page.getByRole('navigation', { name: 'Course' }).getByRole('link', { name: /^Review(, \d+ due)?$/ }).click();
  await expect(page.getByRole('heading', { name: 'Review' })).toBeVisible();
  await expect(page.getByText('1 item is due.')).toBeVisible();
  await expect(page.getByText('Find and classify the critical point')).toBeVisible();

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export progress' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('progress.json');
  const exported = await readFile(await download.path());
  expect(exported.toString('utf8')).toContain('l6-hessian-test-sample.basic-bowl');

  await page.locator('input[type="file"]').setInputFiles({
    name: 'empty.json',
    mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify({ attempts: [], reviews: [] })),
  });
  await expect(page.getByText('Progress imported.')).toBeVisible();
  await expect(page.getByText('Nothing is due.')).toBeVisible();
  await expect(page.getByText('Find and classify the critical point')).toHaveCount(0);

  await page.locator('input[type="file"]').setInputFiles({
    name: 'progress.json',
    mimeType: 'application/json',
    buffer: exported,
  });
  await expect(page.getByText('Find and classify the critical point')).toBeVisible();
  await expect(page.getByText('1 item is due.')).toBeVisible();

  await page.getByRole('button', { name: 'Postpone' }).click();
  await expect(page.getByText('Nothing is due.')).toBeVisible();
  await expect(page.getByText('Find and classify the critical point')).toHaveCount(0);
});

test('a short drill and a concept question join the review queue', async ({ page }) => {
  const reset = await page.request.post('/api/progress', { data: { attempts: [], reviews: [] } });
  expect(reset.ok()).toBeTruthy();

  await page.goto('/node/l1-derivative');
  const drill = page.locator('[id="exercise-l1-derivative.derivative-of-square"]');
  await drill.getByRole('button', { name: 'Reveal solution' }).click();
  await drill.getByRole('button', { name: 'Partly right', exact: true }).click();
  await drill.getByLabel('Mistake type').selectOption({ label: 'Wrong formula or rule' });
  await drill.getByRole('button', { name: 'Save attempt' }).click();
  await expect(drill.getByText('Partly right. Wrong formula or rule.')).toBeVisible();

  await page.goto('/node/l6-hessian-test-sample');
  const question = page.locator('.block-concept-question').first();
  await question.locator('.option').filter({ hasText: 'A local minimum' }).click();
  await expect(question.locator('.option-wrong')).toHaveCount(1);

  await page.goto('/review');
  await expect(page.getByText('2 items are due.')).toBeVisible();
  await expect(page.getByText('Use the definition to compute')).toBeVisible();

  const reviewDrill = page.locator('.block-exercise');
  await reviewDrill.getByRole('button', { name: 'Reveal solution' }).click();
  await reviewDrill.getByRole('button', { name: 'Right', exact: true }).click();
  await reviewDrill.getByRole('button', { name: 'Save attempt' }).click();
  await expect(page.getByText('At a critical point')).toBeVisible();
  await expect(page.getByText('1 item is due.')).toBeVisible();
});
