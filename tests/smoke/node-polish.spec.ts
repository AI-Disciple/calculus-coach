import { expect, test, type Page } from '@playwright/test';

// l2-monotonicity-extrema: Practise holds 3 Core, 14 Extra and 2 Exam level exercises, and the Learn section
// "First derivative test" has one more Core exercise in its Your turn.
const NODE = '/node/l2-monotonicity-extrema';
const PRACTISE = `${NODE}?section=practise`;
const EXTRA_ID = 'l2-monotonicity-extrema.standard-5-2-3';
const EXAM_ID = 'l2-monotonicity-extrema.exam-sqrt-ends';
const CORE_ID = 'l2-monotonicity-extrema.basic-5-2-1';

const tabs = (page: Page) => page.getByRole('tablist', { name: 'Exercise levels' });
const tab = (page: Page, name: string) => tabs(page).getByRole('tab', { name: new RegExp(`^${name}`) });
const exercise = (page: Page, id: string) => page.locator(`[id="exercise-${id}"]`);

test.describe('level tabs in Practise', () => {
  test('three tabs show their purpose and count, and the counts match', async ({ page }) => {
    await page.goto(PRACTISE);
    await expect(tabs(page).getByRole('tab')).toHaveCount(3);

    const core = tab(page, 'Core');
    const extra = tab(page, 'Extra');
    const exam = tab(page, 'Exam level');
    await expect(core).toContainText('The essentials to master');
    await expect(extra).toContainText('To consolidate');
    await expect(exam).toContainText('At the level of the exam');
    await expect(core).toHaveAccessibleName(/3 exercises$/);
    await expect(extra).toHaveAccessibleName(/14 exercises$/);
    await expect(exam).toHaveAccessibleName(/2 exercises$/);

    await expect(core).toBeEnabled();
    await expect(extra).toBeEnabled();
    await expect(exam).toBeEnabled();
    await expect(page.getByText('Exercises run from basic to exam level.')).toHaveCount(0);
  });

  test('the first tab is selected and clicking another tab swaps the exercises', async ({ page }) => {
    await page.goto(PRACTISE);
    await expect(tab(page, 'Core')).toHaveAttribute('aria-selected', 'true');
    await expect(tab(page, 'Exam level')).toHaveAttribute('aria-selected', 'false');
    await expect(page.getByRole('tabpanel').locator('[id^="exercise-"]')).toHaveCount(3);
    await expect(exercise(page, EXAM_ID)).toBeHidden();
    await expect(page.getByRole('tabpanel')).toHaveCount(1);

    await tab(page, 'Extra').click();
    await expect(exercise(page, EXTRA_ID)).toBeVisible();

    await tab(page, 'Exam level').click();
    await expect(tab(page, 'Exam level')).toHaveAttribute('aria-selected', 'true');
    await expect(tab(page, 'Extra')).toHaveAttribute('aria-selected', 'false');
    await expect(exercise(page, EXAM_ID)).toBeVisible();
    await expect(exercise(page, EXTRA_ID)).toBeHidden();
  });

  test('the arrow keys move between tabs and leave the node section alone', async ({ page }) => {
    await page.goto(PRACTISE);
    await tab(page, 'Extra').click();
    await page.keyboard.press('ArrowRight');
    await expect(tab(page, 'Exam level')).toHaveAttribute('aria-selected', 'true');
    await expect(tab(page, 'Exam level')).toBeFocused();
    await expect(exercise(page, EXAM_ID)).toBeVisible();
    await expect(page).toHaveURL(/[?&]section=practise(?:&|#|$)/);
    await expect(page.locator('section.node-section h2')).toHaveText('Practise');

    await page.keyboard.press('ArrowLeft');
    await expect(tab(page, 'Extra')).toHaveAttribute('aria-selected', 'true');
    await page.keyboard.press('End');
    await expect(tab(page, 'Exam level')).toHaveAttribute('aria-selected', 'true');
    await page.keyboard.press('Home');
    await expect(tab(page, 'Core')).toHaveAttribute('aria-selected', 'true');
    await expect(page).toHaveURL(/[?&]section=practise(?:&|#|$)/);
    await expect(page.locator('section.node-section h2')).toHaveText('Practise');
  });

  test('a deep link to an exam exercise opens the Exam level tab', async ({ page }) => {
    await page.goto(`${PRACTISE}#exercise-${EXAM_ID}`);
    await expect(tab(page, 'Exam level')).toHaveAttribute('aria-selected', 'true');
    await expect(tab(page, 'Extra')).toHaveAttribute('aria-selected', 'false');
    await expect(exercise(page, EXAM_ID)).toBeVisible();
    await expect(exercise(page, EXTRA_ID)).toBeHidden();
  });

  test('a revealed solution stays revealed after switching tabs away and back', async ({ page }) => {
    await page.goto(PRACTISE);
    await tab(page, 'Extra').click();
    const extra = exercise(page, EXTRA_ID);
    await extra.getByRole('button', { name: 'Reveal solution' }).click();
    await expect(extra.getByRole('button', { name: 'Hide solution' })).toBeVisible();

    await tab(page, 'Exam level').click();
    await expect(extra).toBeHidden();
    await tab(page, 'Extra').click();
    await expect(extra).toBeVisible();
    await expect(extra.getByRole('button', { name: 'Hide solution' })).toBeVisible();
  });

  test('the Core exercise in Your turn is not in the tabs', async ({ page }) => {
    await page.goto(`${NODE}?section=learn-2`);
    await expect(page.locator('.your-turn').locator(`[id="exercise-${CORE_ID}"]`)).toBeVisible();
    await expect(tabs(page)).toHaveCount(0);

    await page.goto(PRACTISE);
    await expect(page.locator(`[id="exercise-${CORE_ID}"]`)).toHaveCount(0);
  });

  test('an exercise tier ladder reads Core, Extra, Exam level', async ({ page }) => {
    await page.goto(PRACTISE);
    await tab(page, 'Extra').click();
    const ladder = exercise(page, EXTRA_ID).locator('ol.tier-ladder');
    await expect(ladder).toHaveAttribute('aria-label', 'Tier: Extra');
    await expect(ladder.locator('li')).toHaveText(['Core', 'Extra', 'Exam level']);

    await tab(page, 'Exam level').click();
    await expect(exercise(page, EXAM_ID).locator('ol.tier-ladder')).toHaveAttribute('aria-label', 'Tier: Exam level');

    await page.goto(`${NODE}?section=learn-2`);
    await expect(exercise(page, CORE_ID).locator('ol.tier-ladder')).toHaveAttribute('aria-label', 'Tier: Core');
  });
});

test.describe('Topic header', () => {
  test('shows the topic number, the tags, the facts and a closed Sources list', async ({ page }) => {
    await page.goto(NODE);
    await expect(page.locator('h1 .topic-number')).toHaveText(/^2\.\d+$/);
    const sources = page.locator('details.node-sources');
    await expect(sources).not.toHaveAttribute('open');
    await expect(sources.locator('summary')).toHaveText('Sources');
    await expect(page.getByText('Reviewed', { exact: true })).toHaveCount(0);

    await expect(page.locator('.node-tags .badge', { hasText: /exam weight$/ })).toBeVisible();
    const facts = page.locator('.node-facts .node-fact');
    await expect(facts).toHaveCount(2);
    await expect(facts.first()).toHaveText(/^about \d+ min$/);
    await expect(facts.last()).toHaveText('21 exercises');
  });

  test('names the prerequisites on one line and opens the sources in place', async ({ page }) => {
    await page.goto(NODE);
    await expect(page.locator('.node-builds-on')).toContainText('Do first:');
    await expect(page.locator('.node-builds-on a').first()).toBeVisible();

    const url = page.url();
    await page.locator('details.node-sources summary').click();
    await expect(page.locator('details.node-sources')).toHaveAttribute('open');
    expect(page.url()).toBe(url);
    await expect(page.locator('.node-sources-body dd').first()).toBeVisible();
  });

  test('a draft topic says so under the title', async ({ page }) => {
    await page.goto('/node/l6-hessian-test-sample');
    await expect(page.locator('.node-draft-note .badge-status-draft')).toHaveText('Draft');
    await expect(page.getByText('Reviewed', { exact: true })).toHaveCount(0);
  });
});

test('the node page has a breadcrumb with a link to its lecture', async ({ page }) => {
  await page.goto(NODE);
  const crumb = page.getByRole('navigation', { name: 'Breadcrumb' });
  const link = crumb.getByRole('link', { name: 'Lecture 2' });
  await expect(link).toHaveAttribute('href', '/lecture/2');
  await expect(crumb.locator('.breadcrumb-title')).not.toBeEmpty();
  await link.click();
  await expect(page).toHaveURL(/\/lecture\/2$/);
});

test.describe('finishing a topic', () => {
  const finish = (page: Page) =>
    page.getByRole('navigation', { name: 'Section navigation' }).locator('a.button-finish');

  test('the last section finishes the topic and opens the next one', async ({ page }) => {
    // l1-exp-log is order 2 in lecture 1, before l1-functions.
    await page.goto('/node/l1-exp-log');
    await expect(finish(page)).toHaveCount(0);
    await page.goto('/node/l1-exp-log?section=practise');
    await expect(finish(page)).toHaveCount(0);

    await page.goto('/node/l1-exp-log?section=sheet');
    await expect(finish(page)).toHaveAttribute('href', '/node/l1-functions');
    await expect(finish(page).locator('.finish-label')).toHaveText('Topic done · next topic');
    await expect(finish(page).locator('.finish-title')).toHaveText('Functions, domain and range');

    await finish(page).click();
    await expect(page).toHaveURL(/\/node\/l1-functions$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Functions, domain and range' })).toBeVisible();
  });

  test('the last topic of the course finishes back at its lecture', async ({ page }) => {
    // l8-probability is the last topic of lecture 8. The hidden topic outside the course has no next topic either.
    await page.goto('/node/l8-probability?section=sheet');
    await expect(finish(page)).toHaveAttribute('href', '/lecture/8');
    await expect(finish(page).locator('.finish-title')).toHaveText('Back to lecture 8');
  });
});
