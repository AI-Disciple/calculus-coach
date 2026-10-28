import { expect, test, type Page } from '@playwright/test';

// l6-critical-points has two Learn sections, then Practise and For the sheet
// (see `npm run sections -- l6-critical-points`).
const NODE = '/node/l6-critical-points';
const NODE_ID = 'l6-critical-points';

const rail = (page: Page) => page.getByRole('navigation', { name: 'Sections' });
const sectionNav = (page: Page) => page.getByRole('navigation', { name: 'Section navigation' });
const next = (page: Page) => sectionNav(page).getByRole('button', { name: /^Next: / });
const finish = (page: Page) => sectionNav(page).getByRole('link', { name: /Topic done/ });
const step = (page: Page, name: RegExp) => rail(page).getByRole('link', { name });

async function resetProgress(page: Page) {
  const reset = await page.request.post('/api/progress', { data: { attempts: [], reviews: [] } });
  expect(reset.ok()).toBeTruthy();
}

async function savedMarks(page: Page): Promise<string[]> {
  const response = await page.request.get('/api/progress');
  const progress = (await response.json()) as { sectionsDone?: Record<string, string[]> };
  return progress.sectionsDone?.[NODE_ID] ?? [];
}

test('the rail, Back, the arrow keys and a deep link mark nothing', async ({ page }) => {
  await resetProgress(page);
  await page.goto(NODE);
  await expect(page.getByRole('heading', { level: 1, name: /Critical points/ })).toBeVisible();

  await rail(page).getByRole('link', { name: 'For the sheet' }).click();
  await expect(page).toHaveURL(/section=sheet/);
  await step(page, /^Practise/).click();
  await expect(page).toHaveURL(/section=practise/);
  await sectionNav(page).getByRole('button', { name: /^Back/ }).click();
  await expect(page).toHaveURL(/section=learn-2/);
  await expect(page.locator('section.node-section h2')).toHaveText('A local extremum is a critical point');
  expect(await savedMarks(page)).toEqual([]);

  await page.goto(`${NODE}?section=learn-2`);
  await expect(page.locator('section.node-section h2')).toBeVisible();
  await page.keyboard.press('ArrowLeft');
  await expect(page).toHaveURL(/section=learn-1/);
  await expect(page.locator('section.node-section h2')).toHaveText('Critical point');
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('section.node-section h2')).toHaveText('A local extremum is a critical point');

  await expect(rail(page).locator('.rail-step-done')).toHaveCount(0);
  expect(await savedMarks(page)).toEqual([]);

  await page.goto(`${NODE}?section=practise`);
  await expect(page).toHaveURL(/section=practise/);
  await expect(rail(page).locator('.rail-step-done')).toHaveCount(0);
  expect(await savedMarks(page)).toEqual([]);
});

test('Next marks the section it leaves, and a reload keeps the mark', async ({ page }) => {
  await resetProgress(page);
  await page.goto(NODE);
  await expect(step(page, /^Learn Critical point/)).toHaveAccessibleName('Learn Critical point');

  await next(page).click();
  await expect(page).toHaveURL(/section=learn-2/);
  await expect(step(page, /^Learn Critical point/)).toHaveAccessibleName(/^Learn Critical point[ ]*, done$/);
  await expect(step(page, /^Learn A local extremum/)).not.toHaveAccessibleName(/, done$/);
  await expect.poll(() => savedMarks(page)).toEqual(['learn-1']);

  // Jumping over a section by the rail marks neither the one left nor the one skipped.
  await rail(page).getByRole('link', { name: 'For the sheet' }).click();
  await expect(page).toHaveURL(/section=sheet/);
  await expect(step(page, /^Learn A local extremum/)).not.toHaveAccessibleName(/, done$/);
  expect(await savedMarks(page)).toEqual(['learn-1']);

  await page.reload();
  await expect(step(page, /^Learn Critical point/)).toHaveAccessibleName(/^Learn Critical point[ ]*, done$/);
  await expect(rail(page).locator('.rail-step-done')).toHaveCount(1);
});

test('Practise is marked when Next leaves it, not when Next steps through its tier tabs', async ({ page }) => {
  await resetProgress(page);
  await page.goto(`${NODE}?section=practise`);
  while ((await next(page).textContent()) !== 'Next: For the sheet') {
    await next(page).click();
    await expect(page).toHaveURL(/section=practise/);
    expect(await savedMarks(page)).toEqual([]);
  }
  await next(page).click();
  await expect(page).toHaveURL(/section=sheet/);
  await expect.poll(() => savedMarks(page)).toEqual(['practise']);
});

test('the finish button marks the last section', async ({ page }) => {
  await resetProgress(page);
  await page.goto(`${NODE}?section=sheet`);
  await expect(next(page)).toHaveCount(0);
  expect(await savedMarks(page)).toEqual([]);

  await finish(page).click();
  await expect(page).toHaveURL(/\/node\//);
  await expect(page).not.toHaveURL(/l6-critical-points/);
  await expect.poll(() => savedMarks(page)).toEqual(['sheet']);

  await page.goto(`${NODE}?section=sheet`);
  await expect(step(page, /^For the sheet/)).toHaveAccessibleName(/^For the sheet[ ]*, done$/);
});

test('section marks an older version kept in this browser move into the progress file once', async ({ page }) => {
  await resetProgress(page);
  await page.addInitScript(() => {
    if (!window.localStorage.getItem('migration-probe')) {
      window.localStorage.setItem('migration-probe', '1');
      window.localStorage.setItem('node-sections-done:l6-critical-points', JSON.stringify(['learn-1', 'practise']));
    }
  });
  await page.goto(NODE);
  await expect.poll(() => savedMarks(page)).toEqual(['learn-1', 'practise']);
  await expect(page.locator('.rail-step-done')).toHaveCount(2);
  expect(await page.evaluate(() => window.localStorage.getItem('node-sections-done:l6-critical-points'))).toBeNull();

  // Marking again writes to the progress file, not to the browser.
  await page.goto(`${NODE}?section=learn-2`);
  await next(page).click();
  await expect.poll(() => savedMarks(page)).toEqual(['learn-1', 'practise', 'learn-2']);
  expect(await page.evaluate(() => window.localStorage.getItem('node-sections-done:l6-critical-points'))).toBeNull();
});
