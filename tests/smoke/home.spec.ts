import { expect, test, type Locator, type Page } from '@playwright/test';

const START_HEADLINE = 'Start with lecture 1: Trigonometry and the unit circle';
const START_SENTENCE = 'Only exercises with an exam topic label count here. Mark one on a topic from lecture 4 on, and these counts start to move.';
const RULE_SENTENCE = 'An exercise counts as right when your latest attempt at it was fully right.';
const TOPICS = [
  'Level sets and tangent plane',
  'Chain rule along a path',
  'Critical points',
  'Double integrals',
  'Constrained optimisation',
  'Triple integrals and volumes',
];

async function importProgress(page: Page, progress: object = { attempts: [], reviews: [] }) {
  const response = await page.request.post('/api/progress', { data: progress });
  expect(response.ok()).toBeTruthy();
}

/** The number of exam exercises each topic row counts, read from its "n of m right" value. */
async function exerciseCounts(rows: Locator): Promise<number[]> {
  const values = await rows.locator('.meter-value').allInnerTexts();
  return values.map((value) => Number(/ of (\d+) right$/.exec(value)?.[1]));
}

test('a fresh Home invites the first step and shows every exam count at zero', async ({ page }) => {
  await importProgress(page);

  await page.goto('/');
  const main = page.getByRole('main');
  const today = main.getByRole('region', { name: 'Today', exact: true });
  const progress = main.getByRole('region', { name: 'Progress', exact: true });
  const sections = main.getByRole('region', { name: 'Sections', exact: true });

  await expect(today.getByText(START_HEADLINE, { exact: true })).toBeVisible();
  await expect(main.getByText('Ready when you are')).toHaveCount(0);
  await expect(today.getByRole('link', { name: /^Start with / })).toBeVisible();
  await expect(main.getByText('Nothing is due today')).toHaveCount(0);
  await expect(main.locator('.button-main')).toHaveCount(1);
  await expect(main.getByRole('heading', { name: 'Lecture 1', exact: true })).toHaveCount(0);

  await expect(progress.getByRole('heading', { name: 'Exam readiness' })).toBeVisible();
  await expect(progress.getByText(START_SENTENCE, { exact: true })).toBeVisible();
  await expect(progress.getByText(RULE_SENTENCE)).toHaveCount(0);

  // The total counts every exam exercise. The six topic rows are always open and add up to it.
  const total = progress.locator('.readiness-total');
  await expect(total).toHaveText(/^0 of [1-9]\d* exam exercises right$/);
  await expect(progress.locator('details')).toHaveCount(0);
  await expect(progress.getByText('By block', { exact: true })).toHaveCount(0);
  const rows = progress.getByRole('listitem');
  await expect(rows).toHaveCount(TOPICS.length);
  for (const [index, title] of TOPICS.entries()) {
    const row = rows.nth(index);
    await expect(row.locator('.meter-title')).toHaveText(title);
    await expect(row.locator('.meter-value')).toHaveText(/^0 of [1-9]\d* right$/);
    await expect(row.locator('.meter-hint')).toHaveText('Not tried yet');
    await expect(row.getByRole('meter', { name: title })).toHaveAttribute('aria-valuenow', '0');
  }
  const counts = await exerciseCounts(rows);
  expect(counts.reduce((sum, count) => sum + count, 0)).toBe(Number((await total.innerText()).split(' ')[2]));

  await expect(progress.getByRole('meter')).toHaveCount(TOPICS.length + 1);
  await expect(progress.getByRole('meter', { name: 'Foundations, lectures 1 to 3' })).toBeVisible();
  await expect(progress.getByText('Foundations (lectures 1 to 3)')).toBeVisible();
  await expect(progress.getByText('The final does not examine lectures 1 to 3 directly.')).toBeVisible();
  // Zeros belong to the exam counts. Today and the section tiles show none.
  await expect(today.getByText(/\b0 of\b/)).toHaveCount(0);
  await expect(sections.getByText(/\b0 of\b/)).toHaveCount(0);

  await expect(sections.getByRole('link')).toHaveCount(6);
  await expect(sections.getByRole('link', { name: /^Exercise bank/ })).toContainText(/\d+ exercises by lecture and topic/);
  await expect(sections.getByRole('link', { name: /^Lectures/ })).toContainText(/\d+ lectures, \d+ topics/);
  await expect(sections.getByRole('link', { name: /^Review/ })).toContainText('Nothing due');
  await expect(sections.getByRole('link', { name: /^Mocks/ })).toContainText(/\d+ papers? to try/);
  await expect(sections.getByRole('link', { name: /^Progress/ })).toContainText('Fills in as you practise');
  await expect(sections.getByRole('link', { name: /^Formula sheet/ })).toContainText('Work in progress');
  await expect(sections.getByRole('link', { name: /^My plan/ })).toHaveCount(0);
});

test('home sections and search stay usable on a fresh progress file', async ({ page }) => {
  await importProgress(page);

  await page.goto('/');
  const sections = page.getByRole('main').getByRole('region', { name: 'Sections', exact: true });
  const firstStep = page.getByRole('main').getByRole('link', { name: /^Start with / });
  const firstStepName = await firstStep.innerText();

  await sections.getByRole('link', { name: /^Lectures/ }).click();
  await expect(page.getByRole('heading', { name: 'Lectures', level: 1 })).toBeVisible();
  await expect(page).toHaveURL(/\/lectures$/);

  await page.goto('/');
  await sections.getByRole('link', { name: /^Mocks/ }).click();
  await expect(page.getByRole('heading', { name: 'Mocks', level: 1 })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Final 6 December 2024' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Final 12 December 2025' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Checkpoints' })).toBeVisible();

  await page.goto('/');
  await sections.getByRole('link', { name: /^Formula sheet/ }).click();
  await expect(page.getByRole('heading', { name: 'Formula sheet', level: 1 })).toBeVisible();

  await page.goto('/');
  await sections.getByRole('link', { name: /^Progress/ }).click();
  await expect(page).toHaveURL(/\/progress$/);

  await page.getByRole('search').getByLabel('Search').fill('14.7.14');
  await page.getByRole('search').getByRole('button', { name: 'Search' }).click();
  await page.locator('a[href*="l6-hessian-test-sample"]').filter({ hasText: 'Exercise 14.7.14' }).click();
  await expect(page).toHaveURL(/\/node\/l6-hessian-test-sample#exercise-l6-hessian-test-sample\.handout-14-7-14/);

  await page.goto('/search?q=Second%20derivative%20test%20in%20two%20variables');
  await expect(page.getByRole('link', { name: 'Second derivative test in two variables' })).toBeVisible();

  await page.getByRole('search').getByLabel('Search').fill('test silent');
  await page.getByRole('search').getByRole('button', { name: 'Search' }).click();
  await expect(page.getByText('Sheet item', { exact: true })).toBeVisible();

  // After all these visits Home still shows the same first step.
  await page.goto('/');
  await expect(page.getByRole('main').getByText(START_HEADLINE, { exact: true })).toBeVisible();
  await expect(page.getByRole('main').getByRole('link', { name: /^Start with / })).toHaveText(firstStepName);
  await expect(page.getByRole('main').getByRole('meter')).toHaveCount(TOPICS.length + 1);
});

test('Continue with follows the latest attempt, and Home keeps rendering its progress', async ({ page }) => {
  await importProgress(page);

  await page.goto('/node/l1-derivative');
  const drill = page.locator('[id="exercise-l1-derivative.derivative-of-square"]');
  await drill.getByRole('button', { name: 'Reveal solution' }).click();
  await drill.getByRole('button', { name: 'Right', exact: true }).click();
  await drill.getByRole('button', { name: 'Save attempt' }).click();
  await expect(drill.getByText('Attempt saved.')).toBeVisible();

  await page.goto('/');
  const main = page.getByRole('main');
  const today = main.getByRole('region', { name: 'Today', exact: true });
  await expect(today.getByText('Nothing is due today')).toBeVisible();
  const continueLink = today.getByRole('link', { name: 'Continue with The derivative and the tangent line' });
  await expect(continueLink).toBeVisible();
  await expect(continueLink).toHaveClass(/button-main/);
  await expect(main.locator('.button-main')).toHaveCount(1);
  // The attempt is not an exam exercise, so the readiness still shows how to start, with every topic untried.
  const progress = main.getByRole('region', { name: 'Progress', exact: true });
  await expect(progress.getByText(START_SENTENCE, { exact: true })).toBeVisible();
  await expect(progress.locator('.readiness-total')).toHaveText(/^0 of \d+ exam exercises right$/);
  await expect(progress.getByText('Not tried yet', { exact: true })).toHaveCount(TOPICS.length);
  await expect(progress.getByRole('meter')).toHaveCount(TOPICS.length + 1);
  await expect(main.getByRole('region', { name: 'Sections', exact: true }).getByRole('link', { name: /^Lectures/ })).toBeVisible();

  await continueLink.click();
  await expect(page).toHaveURL(/\/node\/l1-derivative$/);
});

test('exam exercises you got right fill the topic counts, and a mock result fills the tile', async ({ page }) => {
  const at = new Date().toISOString();
  const attempt = (id: string, exerciseId: string, result: string) => ({
    id,
    at,
    exerciseId,
    tier: 'exam',
    result,
    ...(result === 'right' ? {} : { mistakeType: 'misread-question' }),
  });
  await importProgress(page, {
    attempts: [
      attempt('home-exam-1', 'l7-average-value.final-2022-q6', 'right'),
      attempt('home-exam-2', 'l7-double-integrals-rectangles.final-2024-q4a', 'partly-right'),
      attempt('home-exam-3', 'l5-chain-rule-path.final-2024-q2', 'wrong'),
    ],
    reviews: [],
    paperResults: [{ id: 'home-mock-1', at, paperId: 'final-2024', earned: 11, total: 20 }],
  });

  await page.goto('/');
  const main = page.getByRole('main');
  const progress = main.getByRole('region', { name: 'Progress', exact: true });

  // Only the fully right exercise counts towards the total. The partly right and the wrong one count as tried.
  await expect(progress.locator('.readiness-total')).toHaveText(/^1 of [1-9]\d* exam exercises right$/);
  await expect(progress.getByText(RULE_SENTENCE, { exact: true })).toBeVisible();
  await expect(progress.getByText(START_SENTENCE)).toHaveCount(0);
  await expect(progress.getByRole('meter')).toHaveCount(TOPICS.length + 1);

  const doubleIntegrals = progress.getByRole('listitem').filter({ hasText: 'Double integrals' });
  await expect(doubleIntegrals.locator('.meter-value')).toHaveText(/^1 of [1-9]\d* right$/);
  await expect(doubleIntegrals.locator('.meter-hint')).toHaveText('2 tried, 1 partly right');
  const meter = doubleIntegrals.getByRole('meter', { name: 'Double integrals' });
  await expect(meter).toHaveAttribute('aria-valuenow', '1');
  await expect(meter).toHaveAttribute('aria-valuetext', /^1 of \d+ right$/);

  const chainRule = progress.getByRole('listitem').filter({ hasText: 'Chain rule along a path' });
  await expect(chainRule.locator('.meter-value')).toHaveText(/^0 of [1-9]\d* right$/);
  await expect(chainRule.locator('.meter-hint')).toHaveText('1 tried');

  const untried = progress.getByRole('listitem').filter({ hasText: 'Critical points' });
  await expect(untried.locator('.meter-hint')).toHaveText('Not tried yet');

  const sections = main.getByRole('region', { name: 'Sections', exact: true });
  await expect(sections.getByRole('link', { name: /^Mocks/ })).toContainText('Best mock 11 of 20');
});

test('when the progress cannot be read, Home says the counts are unavailable and shows no total or rows', async ({ page }) => {
  await page.route('**/api/progress', (route) =>
    route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ error: 'Progress failed.' }) }),
  );

  await page.goto('/');
  const progress = page.getByRole('main').getByRole('region', { name: 'Progress', exact: true });

  await expect(progress.getByText('The counts are unavailable right now.', { exact: true })).toBeVisible();
  await expect(progress.getByRole('heading', { name: 'Exam readiness' })).toBeVisible();
  await expect(progress.locator('.readiness-total')).toHaveText('');
  await expect(progress.getByRole('listitem')).toHaveCount(0);
  await expect(progress.getByRole('meter')).toHaveCount(1);
});
