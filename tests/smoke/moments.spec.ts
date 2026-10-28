import { expect, test, type Page } from '@playwright/test';

/** Every section of l1-derivative. With all of them marked, the one Core exercise decides whether the node is Done. */
const SECTIONS = { 'l1-derivative': ['learn-1', 'learn-2', 'practise', 'sheet'] };
const CORE = 'l1-derivative.derivative-of-square';

async function importProgress(
  page: Page,
  data: { attempts?: unknown[]; reviews?: unknown[]; sectionsDone?: Record<string, string[]> } = {},
) {
  const response = await page.request.post('/api/progress', {
    data: {
      attempts: data.attempts ?? [],
      reviews: data.reviews ?? [],
      ...(data.sectionsDone ? { sectionsDone: data.sectionsDone } : {}),
    },
  });
  expect(response.ok()).toBeTruthy();
}

async function markRight(page: Page, exerciseId: string) {
  const exercise = page.locator(`[id="exercise-${exerciseId}"]`);
  await exercise.getByRole('button', { name: 'Reveal solution' }).click();
  await exercise.getByRole('button', { name: 'Right', exact: true }).click();
  await exercise.getByRole('button', { name: 'Save attempt' }).click();
  return exercise;
}

test('saving an attempt shows the saved note with a tick', async ({ page }) => {
  await importProgress(page);
  await page.goto(`/node/l1-derivative#exercise-${CORE}`);
  const exercise = await markRight(page, CORE);
  await expect(exercise.locator('.saved-note')).toContainText('Attempt saved.');
  await expect(exercise.locator('.saved-note .tick')).toBeVisible();
});

test('a node turning done changes the badge and shows the toast', async ({ page }) => {
  await importProgress(page, { sectionsDone: SECTIONS });
  await page.goto(`/node/l1-derivative#exercise-${CORE}`);
  const badge = page.locator('.node-tags .mastery-badge');
  await expect(badge).toHaveText('In progress');

  await markRight(page, CORE);

  await expect(badge).toHaveText('Done');
  const toast = page.getByRole('status').filter({ hasText: 'is done' });
  await expect(toast).toBeVisible();
  await expect(toast).toContainText('Every section is read and every Core exercise is marked right.');
  await expect(toast).not.toContainText('exam exercise');

  await toast.getByRole('button', { name: 'Dismiss' }).click();
  await expect(toast).toHaveCount(0);
});

test('a right Core exercise alone does not make a node done while sections are unmarked', async ({ page }) => {
  await importProgress(page);
  await page.goto(`/node/l1-derivative#exercise-${CORE}`);
  await markRight(page, CORE);
  await expect(page.locator('.node-tags .mastery-badge')).toHaveText('In progress');
  await expect(page.getByRole('status').filter({ hasText: 'is done' })).toHaveCount(0);
});

test('clearing the queue shows the finish screen', async ({ page }) => {
  await importProgress(page);
  // Two wrong first picks queue both questions. The smoke server's first interval is 0 days, so they are due at once.
  await page.goto('/node/l6-hessian-test-sample');
  const questions = page.locator('.block-concept-question');
  await questions.nth(0).locator('.option').filter({ hasText: 'A local minimum' }).click();
  await questions.nth(1).locator('.option').filter({ hasText: 'The point is a saddle point.' }).click();
  await expect.poll(async () => ((await (await page.request.get('/api/progress')).json()) as { reviews: unknown[] }).reviews.length).toBe(2);

  await page.goto('/review');
  const count = page.locator('.review-count');
  await expect(count).toHaveText('2 items are due.');
  const due = page.locator('.block-concept-question');
  const answerRight = async () => {
    const saddle = (await due.textContent())?.includes('At a critical point');
    await due.locator('.option').filter({ hasText: saddle ? 'A saddle point' : 'Nothing yet.' }).click();
    await page.getByRole('button', { name: 'Next', exact: true }).click();
  };
  await answerRight();
  // The next question shows up only after the queue has loaded again.
  await expect(count).toHaveText('1 item is due.');
  await answerRight();

  await expect(page.getByRole('heading', { name: 'Queue cleared' })).toBeFocused();
  await expect(page.getByText('You reviewed 2 items.')).toBeVisible();
  await expect(page.getByText('Daily streak: 1 day.')).toBeVisible();
  await expect(page.getByText(/until the final on 30 November 2026|The final is today/)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Back to Home' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Open Lectures' })).toBeVisible();
});

async function playMock(page: Page, wrongText?: string) {
  await page.goto('/mocks');
  await page.getByRole('link', { name: 'Final 6 December 2024' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('button', { name: 'Finish and mark' }).click();
  const items = page.locator('.mock-rubric-item');
  const count = await items.count();
  if (wrongText) {
    const wrong = items.filter({ hasText: wrongText });
    await wrong.getByRole('button', { name: 'Wrong', exact: true }).click();
    await wrong.getByLabel('Mistake type').selectOption({ label: 'Wrong formula or rule' });
  }
  for (let index = 0; index < count; index++) {
    const item = items.nth(index);
    if ((await item.getByRole('button', { name: 'Wrong', exact: true }).getAttribute('aria-pressed')) === 'true') continue;
    await item.getByRole('button', { name: 'Right', exact: true }).click();
  }
  await page.getByRole('button', { name: 'Save result' }).click();
}

test('a better second mock shows a personal best and the change by block', async ({ page }) => {
  await importProgress(page);

  await playMock(page, 'The z-level sets are stated');
  await expect(page.locator('.mock-score')).toHaveText('19 out of 20');
  await expect(page.getByText('This is your first attempt. Later attempts compare against it.')).toBeVisible();
  await expect(page.getByText('Personal best')).toHaveCount(0);
  await expect(page.locator('.mock-block-changes li').first()).toContainText('new');

  await playMock(page);
  await expect(page.locator('.mock-score')).toHaveText('20 out of 20');
  await expect(page.getByText('Personal best')).toBeVisible();
  await expect(page.getByText('Up 1 point on your last attempt at this paper.')).toBeVisible();
  await expect(page.locator('.mock-block-changes .mock-change-up')).toHaveCount(1);
  await expect(page.locator('.mock-block-changes .mock-change-up')).toContainText('up 1');
  await expect(page.getByRole('link', { name: 'Review queue' })).toBeVisible();
});
