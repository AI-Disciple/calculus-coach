import { expect, test } from '@playwright/test';

test('at 375 px an open solution stays inside the column', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/node/l8-change-of-variables?section=practise');
  const exercise = page.locator('.block-exercise').first();
  await exercise.getByRole('button', { name: 'Reveal solution' }).click();
  await expect(exercise.locator('.solution')).toBeVisible();
  const right = await exercise.evaluate((element) => element.getBoundingClientRect().right);
  expect(right).toBeLessThanOrEqual(375);
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
});

test('at 375 px the finish button puts its title under its label', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/node/l4-dot-cross-product?section=sheet');
  const finish = page.locator('.button-finish');
  await expect(finish).toBeVisible();
  const label = await finish.locator('.finish-label').boundingBox();
  const title = await finish.locator('.finish-title').boundingBox();
  expect(title!.y).toBeGreaterThanOrEqual(label!.y + label!.height - 1);
});
