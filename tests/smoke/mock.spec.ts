import { expect, test } from '@playwright/test';

test('start and finish the 2024 final with self-marking', async ({ page }) => {
  const reset = await page.request.post('/api/progress', { data: { attempts: [], reviews: [] } });
  expect(reset.ok()).toBeTruthy();

  await page.goto('/mocks');
  await expect(page.getByRole('heading', { name: 'Mocks' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Final 6 December 2024' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Final 12 December 2025' })).toBeVisible();
  await expect(page.getByText('Stand-in', { exact: true })).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Checkpoints' })).toBeVisible();
  await expect(page.getByText('Optional. A checkpoint never gates the course.')).toBeVisible();

  await page.getByRole('link', { name: 'Final 6 December 2024' }).click();
  await expect(page.getByText('15 minutes')).toBeVisible();
  await expect(page.getByText('7 minutes')).toBeVisible();
  await expect(page.getByText('38 minutes')).toBeVisible();
  await expect(page.getByText('Current final format')).toBeVisible();

  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByRole('timer', { name: 'Time left' })).toBeVisible();
  await expect(page.getByText('38 minutes')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Wrong', exact: true })).toHaveCount(0);

  await page.getByRole('button', { name: 'Finish and mark' }).click();

  const items = page.locator('.mock-rubric-item');
  const count = await items.count();
  expect(count).toBeGreaterThan(1);

  const levelSets = items.filter({ hasText: 'The z-level sets are stated' });
  await levelSets.getByRole('button', { name: 'Wrong', exact: true }).click();
  await levelSets.getByLabel('Mistake type').selectOption({ label: 'Wrong formula or rule' });

  for (let index = 0; index < count; index++) {
    const item = items.nth(index);
    const wrong = item.getByRole('button', { name: 'Wrong', exact: true });
    if ((await wrong.getAttribute('aria-pressed')) === 'true') continue;
    await item.getByRole('button', { name: 'Right', exact: true }).click();
  }

  await page.getByRole('button', { name: 'Save result' }).click();
  await expect(page.getByText('19 out of 20')).toBeVisible();

  await page.goto('/review');
  await expect(page.getByText('[2 points. 15min] a) Give the')).toBeVisible();

  await page.goto('/progress');
  const byType = page.getByRole('region', { name: 'By mistake type' });
  await expect(byType).toContainText('Wrong formula or rule');
  await expect(byType.getByRole('link', { name: /level sets/ })).toBeVisible();
  await expect(page.getByRole('region', { name: 'By topic' }).getByRole('link', { name: 'Level sets and contour maps' })).toBeVisible();
});

test('an older final tags out-of-scope questions and keeps an in-scope question on its node', async ({ page }) => {
  await page.goto('/mocks');
  await expect(page.getByRole('link', { name: 'Final 10 December 2021' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Mock exam 2', exact: true })).toBeVisible();
  await expect(page.getByText('Stand-in', { exact: true })).toHaveCount(0);

  await page.getByRole('link', { name: 'Final 10 December 2021' }).click();
  await expect(page.getByText('180 minutes')).toBeVisible();
  await expect(page.getByText('As printed')).toBeVisible();
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByText('Out of current scope').first()).toBeVisible();
  await expect(page.getByText(/Find the unit vector in the direction in which/).first()).toBeVisible();

  // The deep link opens the Practise section that holds the exam exercise.
  await page.goto('/node/l5-steepest-ascent#exercise-l5-steepest-ascent.final-2021-q1');
  await expect(page.getByRole('heading', { name: 'Steepest ascent and gradients normal to level sets' })).toBeVisible();
  await expect(page).toHaveURL(/section=practise/);
  await expect(page.locator('#exercise-l5-steepest-ascent\\.final-2021-q1')).toBeVisible();

  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Outside the current course' })).toHaveCount(0);

  await page.goto('/node/outside-current-course');
  await expect(page.getByRole('heading', { name: 'Outside the current course' })).toBeVisible();
  await expect(page.getByText('Out of current scope').first()).toBeVisible();
});

test('a midterm checkpoint is optional and opens as printed', async ({ page }) => {
  await page.goto('/mocks');
  await expect(page.getByText('Optional. A checkpoint never gates the course.')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Midterm 2026' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Predicted paper A, written for practice' })).toBeVisible();

  await page.getByRole('link', { name: 'Midterm 2026' }).click();
  await expect(page.getByRole('heading', { name: 'Midterm 2026' })).toBeVisible();
  await expect(page.getByText('90 minutes')).toBeVisible();
  await expect(page.getByText('Official typeset key, 1 October 2026')).toBeVisible();
  await expect(page.getByText('As printed')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Start' })).toBeVisible();
});
