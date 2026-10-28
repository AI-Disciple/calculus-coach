import { expect, test, type Page } from '@playwright/test';

/** The sections of l1-derivative and its one Core exercise. With all of them marked and right, the node is Done. */
const DERIVATIVE_SECTIONS = { 'l1-derivative': ['learn-1', 'learn-2', 'practise', 'sheet'] };
const DERIVATIVE_CORE = { id: 'l1-derivative.derivative-of-square', tier: 'basic' } as const;

// Home has tiles named Lectures, Review, Mocks and Progress too, so every query goes through the sidebar.
const courseNav = (page: Page) => page.getByRole('navigation', { name: 'Course' });
const lectureToggle = (page: Page, number: number) =>
  courseNav(page).getByRole('button', { name: `Lecture ${number} topics` });

async function resetProgress(page: Page) {
  const reset = await page.request.post('/api/progress', { data: { attempts: [], reviews: [] } });
  expect(reset.ok()).toBeTruthy();
}

async function seedDerivativeProgress(page: Page) {
  const response = await page.request.post('/api/progress', {
    data: {
      attempts: [
        {
          id: 'sidebar-spec-0',
          at: new Date(Date.now() - 1000).toISOString(),
          exerciseId: DERIVATIVE_CORE.id,
          tier: DERIVATIVE_CORE.tier,
          result: 'right',
        },
      ],
      reviews: [],
      sectionsDone: DERIVATIVE_SECTIONS,
    },
  });
  expect(response.ok()).toBeTruthy();
}

test('the sidebar holds the main pages and the only theme toggle', async ({ page }) => {
  await resetProgress(page);
  await page.goto('/');
  const nav = courseNav(page);

  await expect(nav.getByRole('link', { name: 'Analysis and Calculus' })).toHaveAttribute('href', '/');
  await expect(nav.getByRole('search').getByRole('textbox', { name: 'Search' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Home', exact: true })).toHaveAttribute('aria-current', 'page');
  await expect(nav.getByRole('link', { name: 'Review', exact: true })).toHaveAttribute('href', '/review');
  await expect(nav.getByRole('link', { name: 'Mocks', exact: true })).toHaveAttribute('href', '/mocks');
  await expect(nav.getByRole('link', { name: 'Progress', exact: true })).toHaveAttribute('href', '/progress');
  await expect(nav.getByRole('link', { name: 'Lectures', exact: true })).toHaveAttribute('href', '/lectures');
  await expect(nav.getByRole('link', { name: 'My plan' })).toHaveCount(0);
  await expect(page.getByRole('banner')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Menu' })).toBeHidden();

  await nav.getByRole('link', { name: 'Mocks', exact: true }).click();
  await expect(page).toHaveURL(/\/mocks$/);
  await expect(nav.getByRole('link', { name: 'Mocks', exact: true })).toHaveAttribute('aria-current', 'page');
  await expect(nav.getByRole('link', { name: 'Home', exact: true })).not.toHaveAttribute('aria-current', 'page');

  await nav.getByRole('link', { name: 'Lectures', exact: true }).click();
  await expect(page).toHaveURL(/\/lectures$/);
  await expect(nav.getByRole('link', { name: 'Lectures', exact: true })).toHaveAttribute('aria-current', 'page');

  const toggles = page.getByRole('button', { name: /^Switch to (dark|light) theme$/ });
  await expect(toggles).toHaveCount(1);
  await expect(nav.getByRole('button', { name: /^Switch to (dark|light) theme$/ })).toBeVisible();
  const before = await page.evaluate(() => document.documentElement.dataset.theme);
  await toggles.click();
  const after = await page.evaluate(() => document.documentElement.dataset.theme);
  expect(after).not.toBe(before);
});

test('open a lecture in the sidebar to see its nodes and its share of done nodes', async ({ page }) => {
  await seedDerivativeProgress(page);
  await page.goto('/');
  const nav = courseNav(page);
  const toggle = lectureToggle(page, 1);
  const nodeList = nav.locator('#sidebar-lecture-1');

  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toHaveAttribute('aria-controls', 'sidebar-lecture-1');
  await expect(nodeList).toHaveCount(0);

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(nodeList).toBeVisible();
  const nodeLinks = nodeList.getByRole('link');
  const total = await nodeLinks.count();
  expect(total).toBeGreaterThan(0);
  await expect(nodeLinks.first()).toHaveAttribute('href', /^\/node\/l1-/);

  // The node states are drawn, not written: only the labels of the dots say Done and Not started.
  await expect(nodeList.getByRole('img', { name: 'Done' })).toHaveCount(1);
  await expect(nodeList.getByRole('img', { name: 'Not started' })).toHaveCount(total - 1);
  await expect(nodeList.getByText('Done', { exact: true })).toHaveCount(0);
  await expect(nodeList.getByText('Not started', { exact: true })).toHaveCount(0);
  await expect(
    nodeList.getByRole('link', { name: 'The derivative and the tangent line' }).getByRole('img', { name: 'Done' }),
  ).toBeVisible();

  // The lecture link starts with its number and shows the same share as the Lectures page.
  const lectureLink = nav.getByRole('link', { name: /^Lecture 1\b/ });
  await expect(lectureLink).toHaveAttribute('href', '/lecture/1');
  await expect(lectureLink).toContainText('Review of functions, limits and derivatives');
  const share = (await lectureLink.getByText(/^\d+ of \d+ topics? done$/).textContent()) ?? '';
  expect(share).toBe(`1 of ${total} topics done`);

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(nodeList).toHaveCount(0);

  await nav.getByRole('link', { name: 'Lectures', exact: true }).click();
  await expect(page.getByRole('main').locator('.lecture-card').first().getByText(/topics? done$/)).toHaveText(share);

  await lectureLink.click();
  await expect(page).toHaveURL(/\/lecture\/1$/);
  await expect(lectureLink).toHaveAttribute('aria-current', 'page');
  // A lecture page does not open the list by itself.
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('follow a node link and keep the expanded lectures after a reload', async ({ page }) => {
  await resetProgress(page);
  await page.goto('/');
  const nav = courseNav(page);

  await lectureToggle(page, 1).click();
  const link = nav.locator('#sidebar-lecture-1').getByRole('link', { name: /The derivative and the tangent line/ });
  await link.click();
  await expect(page).toHaveURL(/\/node\/l1-derivative$/);
  await expect(page.getByRole('heading', { name: 'The derivative and the tangent line', level: 1 })).toBeVisible();
  await expect(link).toHaveAttribute('aria-current', 'page');
  await expect(nav.locator('.sidebar-lecture').first()).toHaveClass(/is-current/);
  await expect(nav.locator('.sidebar-lecture').nth(1)).not.toHaveClass(/is-current/);

  // A second lecture the reader opened by hand stays open too.
  await lectureToggle(page, 3).click();
  await expect(lectureToggle(page, 3)).toHaveAttribute('aria-expanded', 'true');

  await page.reload();
  await expect(lectureToggle(page, 1)).toHaveAttribute('aria-expanded', 'true');
  await expect(lectureToggle(page, 3)).toHaveAttribute('aria-expanded', 'true');
  await expect(lectureToggle(page, 2)).toHaveAttribute('aria-expanded', 'false');
  await expect(nav.locator('#sidebar-lecture-1').getByRole('link', { name: /The derivative and the tangent line/ })).toHaveAttribute(
    'aria-current',
    'page',
  );

  // The lecture of the open node is expanded on every load, even after the reader closed it.
  await lectureToggle(page, 1).click();
  await expect(lectureToggle(page, 1)).toHaveAttribute('aria-expanded', 'false');
  await page.reload();
  await expect(lectureToggle(page, 1)).toHaveAttribute('aria-expanded', 'true');
});

test('the lecture of the node opened first is expanded on load', async ({ page }) => {
  await resetProgress(page);
  await page.goto('/node/l6-critical-points');
  const nav = courseNav(page);

  await expect(lectureToggle(page, 6)).toHaveAttribute('aria-expanded', 'true');
  await expect(nav.locator('a[href="/node/l6-critical-points"]')).toHaveAttribute('aria-current', 'page');
  await expect(lectureToggle(page, 1)).toHaveAttribute('aria-expanded', 'false');
  await expect(lectureToggle(page, 2)).toHaveAttribute('aria-expanded', 'false');
});

test('a hidden fixture node never appears in the sidebar', async ({ page }) => {
  await resetProgress(page);
  await page.goto('/node/l6-hessian-test-sample');
  const nav = courseNav(page);

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(lectureToggle(page, 6)).toHaveAttribute('aria-expanded', 'false');
  await lectureToggle(page, 6).click();
  await expect(nav.locator('#sidebar-lecture-6')).toBeVisible();
  await expect(nav.locator('a[href="/node/l6-hessian-test-sample"]')).toHaveCount(0);
  await expect(nav.locator('a[aria-current="page"]')).toHaveCount(0);
});

test('the sidebar shows the due count next to Review', async ({ page }) => {
  await resetProgress(page);
  const nav = courseNav(page);

  await page.goto('/');
  await expect(nav.getByRole('link', { name: 'Review', exact: true })).toBeVisible();
  await expect(nav.locator('.due-pill')).toHaveCount(0);

  await page.goto('/node/l6-hessian-test-sample');
  const exercise = page.locator('.block-exercise').filter({ hasText: 'Find and classify the critical point' });
  await exercise.getByRole('button', { name: 'Reveal solution' }).click();
  const steps = exercise.locator('.mark-step');
  await expect(steps).toHaveCount(4);
  await steps.nth(0).getByRole('button', { name: 'Wrong', exact: true }).click();
  await steps.nth(0).getByLabel('Mistake type').selectOption({ label: 'Sign or arithmetic slip' });
  for (const index of [1, 2, 3]) {
    await steps.nth(index).getByRole('button', { name: 'Right', exact: true }).click();
  }
  await exercise.getByRole('button', { name: 'Save attempt' }).click();
  await expect(exercise.getByText('Step 1 was wrong.')).toBeVisible();

  // Saving tells the sidebar, so the count is fresh before the page changes.
  await expect(nav.getByRole('link', { name: 'Review, 1 due' })).toBeVisible();

  // The count is also read again when the route changes, so the site name link is enough to refresh it.
  await nav.getByRole('link', { name: 'Analysis and Calculus' }).click();
  const review = nav.getByRole('link', { name: 'Review, 1 due' });
  await expect(review).toBeVisible();
  await expect(review.locator('.due-pill')).toHaveText('1');

  const main = page.getByRole('main');
  const today = main.getByRole('region', { name: 'Today', exact: true });
  await expect(today.getByText('1 item is due')).toBeVisible();
  await expect(today.getByRole('link', { name: 'Start review' })).toHaveClass(/button-main/);
  await expect(today.getByRole('link', { name: /^Continue with / })).not.toHaveClass(/button-main/);
  await expect(main.locator('.button-main')).toHaveCount(1);
  await expect(main.getByRole('link', { name: /^Review/ })).toContainText('1 due');

  await today.getByRole('link', { name: 'Start review' }).click();
  await expect(page).toHaveURL(/\/review$/);
  await page.getByRole('button', { name: 'Postpone' }).click();
  await expect(page.getByText('Nothing is due.')).toBeVisible();

  await nav.getByRole('link', { name: 'Analysis and Calculus' }).click();
  await expect(nav.getByRole('link', { name: 'Review', exact: true })).toBeVisible();
  await expect(nav.locator('.due-pill')).toHaveCount(0);
  await expect(main.getByRole('region', { name: 'Today', exact: true }).getByText('Nothing is due today')).toBeVisible();
});

test('on a narrow window the sidebar opens from the Menu button', async ({ page }) => {
  await resetProgress(page);
  await page.setViewportSize({ width: 800, height: 900 });
  await page.goto('/');
  const nav = courseNav(page);
  const menu = page.getByRole('button', { name: 'Menu' });

  await expect(nav).toBeHidden();
  await expect(menu).toBeVisible();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toHaveAttribute('aria-controls', 'site-sidebar');

  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(nav).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Mocks', exact: true })).toBeVisible();

  // Escape closes the panel and the focus goes back to the button.
  await page.keyboard.press('Escape');
  await expect(nav).toBeHidden();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();

  // A link in the panel opens its page and closes the panel.
  await menu.click();
  await nav.getByRole('link', { name: 'Mocks', exact: true }).click();
  await expect(page).toHaveURL(/\/mocks$/);
  await expect(nav).toBeHidden();

  // Back on a wide window the sidebar is there again and the button is gone.
  await page.setViewportSize({ width: 1280, height: 720 });
  await expect(nav).toBeVisible();
  await expect(menu).toBeHidden();
});
