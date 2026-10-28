import { expect, test } from '@playwright/test';

test('substitution exercises reveal a solution and can be marked', async ({ page }) => {
  // The 38 exercises sit in the two Learn sections (one basic each) and Practise (the other 36).
  await page.goto('/node/l3-substitution?section=practise');
  await expect(page.locator('h1', { hasText: 'Substitution' })).toBeVisible();
  // The level tabs keep every panel mounted, so all 36 exercises are in the page and one panel shows.
  await expect(page.locator('.level-panel .block-exercise')).toHaveCount(36);
  await expect(page.getByRole('button', { name: 'Reveal solution' }).first()).toBeVisible();
  // That exercise sits in a tab that may not be open, so a deep link to it opens its tab.
  const target = page.locator('.level-panel .block-exercise').filter({ hasText: 'Exercise Mock midterm, Ex. 6.3' });
  const targetId = await target.getAttribute('id');
  expect(targetId).toBeTruthy();
  await page.goto(`/node/l3-substitution?section=practise#${targetId}`);
  await expect(page.getByText('Exercise Mock midterm, Ex. 6.3')).toBeVisible();

  const first = page.locator('.block').filter({ hasText: 'Exercise Mock midterm, Ex. 6.3' });
  await first.getByRole('button', { name: 'Reveal solution' }).click();
  await expect(first.getByText('Written for this site')).toBeVisible();
  const rights = first.getByRole('button', { name: 'Right', exact: true });
  const stepCount = await rights.count();
  expect(stepCount).toBeGreaterThan(0);
  for (let index = 0; index < stepCount; index += 1) await rights.nth(index).click();
  await first.getByRole('button', { name: 'Save attempt' }).click();
  await expect(first.getByText('Attempt saved')).toBeVisible();
});

test('the change log and coverage list the integral bank', async ({ page }) => {
  await page.goto('/changes');
  await expect(page.getByText('Integral exercise bank')).toBeVisible();
  await page.goto('/coverage');
  await expect(page.getByRole('heading', { name: 'Integrals revision page' })).toBeVisible();
  await expect(page.getByText('m6-1:')).toBeVisible();
});
