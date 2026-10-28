import { expect, test, type Page } from '@playwright/test';

type SavedProgress = { reviews: { kind: string }[]; conceptPicks?: { right: boolean }[] };

async function reset(page: Page) {
  const response = await page.request.post('/api/progress', { data: { attempts: [], reviews: [] } });
  expect(response.ok()).toBeTruthy();
}

async function saved(page: Page): Promise<SavedProgress> {
  return (await page.request.get('/api/progress')).json();
}

test('a right first pick is saved and does not join the review queue', async ({ page }) => {
  await reset(page);
  await page.goto('/node/l6-hessian-test-sample');
  const question = page.locator('.block-concept-question').first();
  await question.locator('.option').filter({ hasText: 'A saddle point' }).click();
  await expect.poll(async () => (await saved(page)).conceptPicks).toEqual([expect.objectContaining({ right: true })]);
  expect((await saved(page)).reviews).toEqual([]);
});

test('a wrong first pick puts the question in Review, where it is answered', async ({ page }) => {
  await reset(page);
  await page.goto('/node/l6-hessian-test-sample');
  const question = page.locator('.block-concept-question').first();
  await question.locator('.option').filter({ hasText: 'A local minimum' }).click();
  // A second pick in the same visit is not a first pick, so it is not saved.
  await question.locator('.option').filter({ hasText: 'A saddle point' }).click();
  await expect.poll(async () => (await saved(page)).reviews.map((item) => item.kind)).toEqual(['question']);
  expect((await saved(page)).conceptPicks).toEqual([expect.objectContaining({ right: false })]);

  // The review intervals of the smoke server start at 0 days, so the question is due at once.
  const nav = page.getByRole('navigation', { name: 'Course' });
  await expect(nav.getByRole('link', { name: 'Review, 1 due' })).toBeVisible();
  await nav.getByRole('link', { name: 'Review, 1 due' }).click();
  await expect(page.getByText('1 item is due.')).toBeVisible();
  const due = page.locator('.block-concept-question');
  await expect(due).toContainText('At a critical point');
  await expect(due.getByRole('link', { name: 'The Hessian test (stand-in sample)' })).toBeVisible();

  // A wrong pick in review resets the schedule, so the question comes back at once.
  await due.locator('.option').filter({ hasText: 'A local minimum' }).click();
  await expect(due.getByText('D is negative, so the point is a saddle point')).toBeVisible();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.getByText('1 item is due.')).toBeVisible();
  await expect(due.locator('.option-wrong')).toHaveCount(0);

  // A right pick moves it to the next interval, three days out, and clears the queue.
  await due.locator('.option').filter({ hasText: 'A saddle point' }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Queue cleared' })).toBeVisible();
  await expect(page.getByText('You reviewed 2 items.')).toBeVisible();
  expect((await saved(page)).conceptPicks).toHaveLength(3);
});
