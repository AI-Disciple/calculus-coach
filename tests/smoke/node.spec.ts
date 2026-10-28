import { expect, test } from '@playwright/test';

test('open the sample node and reveal a solution', async ({ page }) => {
  await page.goto('/node/l6-hessian-test-sample');
  await expect(page.getByRole('heading', { name: 'The Hessian test (stand-in sample)' })).toBeVisible();
  await expect(page.locator('.node-draft-note').getByText('Draft', { exact: true })).toBeVisible();
  await expect(page.getByText('High exam weight')).toBeVisible();
  // The prerequisites sit on the "Do first" line, and the sources in the closed Sources list.
  await page.locator('.node-sources summary').click();
  await expect(page.getByRole('link', { name: 'The Hessian matrix' })).toBeVisible();

  const handout = page.getByRole('link', { name: 'Handout, section 14.7, page 373' }).first();
  await expect(handout).toHaveAttribute('href', '/api/sources/handout#page=267');

  await page.getByRole('button', { name: 'Show step 1 of 4' }).click();
  await expect(page.getByRole('button', { name: 'Show step 2 of 4' })).toBeVisible();

  await page.getByRole('button', { name: 'A saddle point', exact: true }).click();
  await expect(page.getByText('D is negative, so the point is a saddle point')).toBeVisible();

  await expect(page.locator('.going-deeper')).not.toHaveAttribute('open');

  await page.getByRole('button', { name: 'Reveal solution' }).first().click();
  await expect(page.getByText('Written for this site')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Hide solution' })).toBeVisible();
});

test('a concept question marks a right pick and a wrong pick', async ({ page }) => {
  await page.goto('/node/l6-hessian-test-sample');
  const question = page.locator('.block-concept-question').first();

  await question.getByRole('button', { name: 'A local minimum', exact: true }).click();
  const wrong = question.locator('.option.option-wrong');
  await expect(wrong).toHaveCount(1);
  await expect(wrong).toContainText('A local minimum');
  await expect(wrong.getByText('Wrong answer')).toBeAttached();
  await expect(question.locator('.option.option-reveal')).toContainText('A saddle point');
  await expect(question.locator('.option.option-reveal').getByText('Right answer')).toBeAttached();
  await expect(question.getByText('D is negative, so the point is a saddle point')).toBeVisible();
  await expect(question.getByText('in a row')).toHaveCount(0);

  await question.locator('.option').filter({ hasText: 'A saddle point' }).click();
  const right = question.locator('.option.option-right');
  await expect(right).toHaveCount(1);
  await expect(right.getByText('Right answer')).toBeAttached();
  await expect(question.locator('.option.option-wrong')).toHaveCount(0);
  await expect(question.getByText('in a row')).toHaveCount(0);
});

test('right first picks build a run that a reload clears', async ({ page }) => {
  await page.goto('/node/l6-hessian-test-sample');
  const questions = page.locator('.block-concept-question');
  await questions.nth(0).locator('.option').filter({ hasText: 'A saddle point' }).click();
  await expect(page.getByText('in a row')).toHaveCount(0);
  await questions.nth(1).locator('.option').filter({ hasText: 'Nothing yet' }).click();
  await expect(questions.nth(1).getByText('2 in a row')).toBeVisible();

  await page.reload();
  await questions.nth(0).locator('.option').filter({ hasText: 'A saddle point' }).click();
  await expect(page.getByText('in a row')).toHaveCount(0);
});

test('an exercise that counts toward exam readiness names its exam topic', async ({ page }) => {
  await page.goto('/node/l4-level-sets#exercise-l4-level-sets.final-2024-q1a');
  const tagged = page.locator('[id="exercise-l4-level-sets.final-2024-q1a"]');
  await expect(tagged.locator('.exercise-meta')).toContainText('Exam topic: Level sets and tangent plane');

  // An Exam level exercise without an exam topic counts only toward mastery and has no label.
  const untagged = page.locator('[id="exercise-l4-level-sets.midterm-2021-ex1a"]');
  await expect(untagged.locator('.exercise-meta')).toBeVisible();
  await expect(untagged.getByText(/^Exam topic:/)).toHaveCount(0);
});
