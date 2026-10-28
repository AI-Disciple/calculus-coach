import { expect, test } from '@playwright/test';

test('the exercise bank lists every lecture and opens an exercise in place', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Course' }).getByRole('link', { name: 'Exercise bank', exact: true }).click();
  await expect(page).toHaveURL(/\/exercises$/);
  const main = page.getByRole('main');
  await expect(main.getByRole('heading', { level: 1, name: 'Exercise bank' })).toBeVisible();
  await expect(main.getByRole('heading', { level: 2 })).toHaveCount(8);
  await expect(main.getByRole('status')).toHaveText(/^\d{3,} exercises$/);

  // Topics start closed. Opening one lists its exercises from Core to Exam level.
  await main.getByRole('heading', { level: 2, name: /Lecture 7/ }).scrollIntoViewIfNeeded();
  const topic = main.locator('.bank-node', { hasText: 'Changing the order of integration' });
  await expect(topic.locator('.bank-exercise')).toHaveCount(0);
  await topic.getByText('Changing the order of integration').click();
  const rows = topic.locator('.bank-exercise');
  await expect(rows.first()).toBeVisible();
  expect(await rows.count()).toBeGreaterThan(5);
  await expect(topic.getByRole('link', { name: 'Open the topic' })).toHaveAttribute('href', '/node/l7-order-of-integration');

  // An exercise opens in place with its solution and its marking form.
  await rows.first().getByRole('button').click();
  await expect(rows.first().getByRole('button', { name: 'Reveal solution' })).toBeVisible();
  await rows.first().getByRole('button', { name: 'Reveal solution' }).click();
  await expect(rows.first().getByText('Save')).toBeVisible();
  await expect(rows.first().getByRole('link', { name: 'Open in the topic' })).toHaveAttribute(
    'href',
    /^\/node\/l7-order-of-integration#exercise-/,
  );
});

test('the exercise bank filters by lecture, level and words, and keeps them in the address', async ({ page }) => {
  await page.goto('/exercises');
  const main = page.getByRole('main');
  const count = async () => Number(/^(\d+) /.exec(await main.getByRole('status').innerText())?.[1]);
  const all = await count();

  await main.getByLabel('Lecture', { exact: true }).selectOption('7');
  await expect(page).toHaveURL(/lecture=7/);
  await expect(main.getByRole('heading', { level: 2 })).toHaveCount(1);
  const lecture7 = await count();
  expect(lecture7).toBeLessThan(all);

  await main.getByText('Exam level', { exact: false }).first().click();
  await expect(page).toHaveURL(/level=exam/);
  await expect.poll(count).toBeLessThan(lecture7);

  await main.getByRole('searchbox', { name: 'Search' }).fill('zzzz-no-such-word');
  await expect(main.getByText('No exercise matches these filters.')).toBeVisible();

  await main.getByRole('button', { name: 'Clear filters' }).click();
  await expect(page).toHaveURL(/\/exercises$/);
  await expect.poll(count).toBe(all);
});

test('a filter that leaves few exercises opens their topics, and past exams narrow to papers', async ({ page }) => {
  await page.goto('/exercises?lecture=7&past=1&level=exam&find=region');
  const main = page.getByRole('main');
  await expect(main.locator('.bank-exercise').first()).toBeVisible();
  await expect(main.locator('.bank-origin').first()).toContainText(/question/);
});
