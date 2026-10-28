import { expect, test, type Page } from '@playwright/test';

/** The sections of l1-derivative and its one Core exercise. With all of them marked and right, the node is Done. */
const DERIVATIVE_SECTIONS = { 'l1-derivative': ['learn-1', 'learn-2', 'practise', 'sheet'] };
const DERIVATIVE_CORE = { id: 'l1-derivative.derivative-of-square', tier: 'basic' } as const;
const ONE_ATTEMPT = { id: 'l1-derivative.sheet-1-2', tier: 'standard' } as const;

async function importProgress(
  page: Page,
  exercises: readonly { id: string; tier: string }[] = [],
  sectionsDone?: Record<string, string[]>,
) {
  const response = await page.request.post('/api/progress', {
    data: {
      attempts: exercises.map((exercise, index) => ({
        id: `lecture-spec-${index}`,
        at: new Date(Date.now() - (exercises.length - index) * 1000).toISOString(),
        exerciseId: exercise.id,
        tier: exercise.tier,
        result: 'right',
      })),
      reviews: [],
      ...(sectionsDone ? { sectionsDone } : {}),
    },
  });
  expect(response.ok()).toBeTruthy();
}

test('the lectures page shows eight cards with a bar for done nodes', async ({ page }) => {
  await importProgress(page);

  await page.goto('/lectures');
  await expect(page.getByRole('heading', { name: 'Lectures', level: 1 })).toBeVisible();
  // The sidebar lists the lectures too, so the links and the share lines are counted in the main region.
  const main = page.getByRole('main');
  const cards = page.locator('.lecture-card');
  await expect(cards).toHaveCount(8);
  for (const number of [1, 2, 3, 4, 5, 6, 7, 8]) {
    const link = main.getByRole('link', { name: new RegExp(`^Lecture ${number}\\b`) });
    await expect(link).toHaveAttribute('href', `/lecture/${number}`);
  }
  await expect(main.getByRole('link', { name: /^Lecture 1\b/ })).toContainText('Review of functions, limits and derivatives');
  await expect(page.getByRole('meter')).toHaveCount(8);
  await expect(main.getByText(/^\d+ of \d+ topics done$/)).toHaveCount(8);

  const first = cards.nth(0);
  await expect(first.getByRole('meter')).toHaveAttribute('aria-valuenow', '0');

  await importProgress(page, [DERIVATIVE_CORE], DERIVATIVE_SECTIONS);
  await page.reload();
  await expect(first.getByText(/^1 of \d+ topics done$/)).toBeVisible();
  await expect(first.getByRole('meter')).not.toHaveAttribute('aria-valuenow', '0');

  await main.getByRole('link', { name: /^Lecture 3\b/ }).click();
  await expect(page).toHaveURL(/\/lecture\/3$/);
  await expect(page.getByRole('heading', { name: 'Lecture 3', level: 1 })).toBeVisible();
});

test('a lecture page lists its nodes, hides Not started and shows progress badges', async ({ page }) => {
  await importProgress(page);

  await page.goto('/lecture/1');
  await expect(page.getByRole('heading', { name: 'Lecture 1', level: 1 })).toBeVisible();
  await expect(page.getByRole('main').getByText('Review of functions, limits and derivatives')).toBeVisible();
  const nodes = page.locator('.node-list li');
  expect(await nodes.count()).toBeGreaterThan(0);
  const derivative = nodes.filter({ hasText: 'The derivative and the tangent line' });
  await expect(derivative).toHaveCount(1);
  await expect(page.getByText('Not started')).toHaveCount(0);
  await expect(page.locator('.badge-mastery-in-progress, .badge-mastery-done')).toHaveCount(0);

  await importProgress(page, [ONE_ATTEMPT]);
  await page.reload();
  await expect(derivative.getByText('In progress', { exact: true })).toBeVisible();
  await expect(page.getByText('Done', { exact: true })).toHaveCount(0);
  await expect(page.getByText('Not started')).toHaveCount(0);

  await importProgress(page, [DERIVATIVE_CORE], DERIVATIVE_SECTIONS);
  await page.reload();
  await expect(derivative.getByText('Done', { exact: true })).toBeVisible();
  await expect(derivative.getByText('In progress', { exact: true })).toHaveCount(0);

  await derivative.getByRole('link', { name: 'The derivative and the tangent line' }).click();
  await expect(page).toHaveURL(/\/node\/l1-derivative$/);
  await expect(page.getByRole('heading', { name: 'The derivative and the tangent line', level: 1 })).toBeVisible();

  // The node leads back to its lecture, and the lecture leads back to the list of lectures.
  await page.getByRole('main').getByRole('link', { name: 'Lecture 1', exact: true }).click();
  await expect(page).toHaveURL(/\/lecture\/1$/);
  await page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: 'Lectures' }).click();
  await expect(page).toHaveURL(/\/lectures$/);
});

test('a lecture page links to the previous and the next lecture', async ({ page }) => {
  await page.goto('/lecture/1');
  const pager = page.getByRole('navigation', { name: 'Other lectures' });
  await expect(pager.getByRole('link', { name: /Previous lecture/ })).toHaveCount(0);
  await pager.getByRole('link', { name: /Next lecture/ }).click();
  await expect(page).toHaveURL(/\/lecture\/2$/);
  await expect(page.getByRole('heading', { name: 'Lecture 2', level: 1 })).toBeVisible();

  await pager.getByRole('link', { name: /Previous lecture/ }).click();
  await expect(page).toHaveURL(/\/lecture\/1$/);

  await page.goto('/lecture/8');
  await expect(pager.getByRole('link', { name: /Next lecture/ })).toHaveCount(0);
  await expect(pager.getByRole('link', { name: /Previous lecture/ })).toContainText('Lecture 7');
});

test('an unknown lecture shows the not found notice', async ({ page }) => {
  for (const route of ['/lecture/99', '/lecture/0', '/lecture/two', '/lecture/1x']) {
    await page.goto(route);
    await expect(page.getByText('Page not found.')).toBeVisible();
    await expect(page.getByRole('main').getByRole('link', { name: 'Home' })).toBeVisible();
  }
});
