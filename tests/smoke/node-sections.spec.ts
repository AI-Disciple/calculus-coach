import { readdirSync } from 'node:fs';
import path from 'node:path';
import { expect, test, type Page } from '@playwright/test';

// l6-critical-points has two Learn sections, then Practise and For the sheet
// (see `npm run sections -- l6-critical-points`).
const NODE = '/node/l6-critical-points';
const LEARN_1 = 'Critical point';
const LEARN_2 = 'A local extremum is a critical point';

const rail = (page: Page) => page.getByRole('navigation', { name: 'Sections' });
const sectionNav = (page: Page) => page.getByRole('navigation', { name: 'Section navigation' });
const sectionHeading = (page: Page) => page.locator('section.node-section h2');
const next = (page: Page) => sectionNav(page).getByRole('button', { name: /^Next: / });
const back = (page: Page) => sectionNav(page).getByRole('button', { name: /^Back/ });

async function resetProgress(page: Page) {
  const reset = await page.request.post('/api/progress', { data: { attempts: [], reviews: [] } });
  expect(reset.ok()).toBeTruthy();
}

async function expectSection(page: Page, id: string, heading: string) {
  // A bare node URL is the first section, so it carries no `section` parameter until you move.
  const bare = id === 'learn-1' ? '|^[^?]*$' : '';
  await expect(page).toHaveURL(new RegExp(`[?&]section=${id}(?:&|#|$)${bare}`));
  await expect(sectionHeading(page)).toHaveText(heading);
}

test('Next and Back change the section and the URL', async ({ page }) => {
  await page.goto(NODE);
  await expect(page.getByRole('heading', { level: 1, name: 'Critical points' })).toBeVisible();
  await expect(sectionHeading(page)).toHaveText(LEARN_1);
  await expect(page.locator('section.node-section .eyebrow')).toHaveText('Learn 1 of 2');
  await expect(back(page)).toHaveCount(0);

  await next(page).click();
  await expectSection(page, 'learn-2', LEARN_2);
  await expect(back(page)).toContainText(LEARN_1);
  await expect(next(page)).toHaveText('Next: Practise');

  await next(page).click();
  await expectSection(page, 'practise', 'Practise');
  // In Practise, Next opens each later tier's tab before it leaves the section.
  while ((await next(page).textContent()) !== 'Next: For the sheet') {
    const tier = (await next(page).textContent())!.replace('Next: ', '');
    await next(page).click();
    await expectSection(page, 'practise', 'Practise');
    await expect(page.getByRole('tab', { name: new RegExp(`^${tier}`) })).toHaveAttribute('aria-selected', 'true');
  }
  await next(page).click();
  await expectSection(page, 'sheet', 'For the sheet');

  await back(page).click();
  await expectSection(page, 'practise', 'Practise');
  await back(page).click();
  await expectSection(page, 'learn-2', LEARN_2);
});

test('only the current section is in the page', async ({ page }) => {
  await page.goto(NODE);
  await expect(page.locator('section.node-section')).toHaveCount(1);
  await expect(page.locator('.block-concept-question').first()).toBeVisible();
  await expect(page.locator('.block-sheet-item')).toHaveCount(0);
  await expect(page.locator('.block-exercise').filter({ has: page.locator('[aria-label="Tier: Exam level"]') })).toHaveCount(0);
});

test('the rail lists every section, marks the current one and opens any of them', async ({ page }) => {
  await resetProgress(page);
  await page.goto(NODE);
  const steps = rail(page).getByRole('link');
  await expect(steps).toHaveCount(4);
  await expect(steps.nth(0)).toHaveAccessibleName(`Learn ${LEARN_1}`);
  await expect(steps.nth(1)).toHaveAccessibleName(`Learn ${LEARN_2}`);
  await expect(steps.nth(2)).toHaveAccessibleName('Practise');
  await expect(steps.nth(3)).toHaveAccessibleName('For the sheet');

  await expect(rail(page).locator('[aria-current="step"]')).toHaveCount(1);
  await expect(steps.nth(0)).toHaveAttribute('aria-current', 'step');

  // Nothing is locked: jump straight to the last section, then to one in the middle.
  await steps.nth(3).click();
  await expectSection(page, 'sheet', 'For the sheet');
  await expect(steps.nth(3)).toHaveAttribute('aria-current', 'step');
  await expect(steps.nth(0)).not.toHaveAttribute('aria-current', 'step');
  await expect(page.locator('.block-sheet-item').first()).toBeVisible();

  await steps.nth(2).click();
  await expectSection(page, 'practise', 'Practise');
  await expect(steps.nth(2)).toHaveAttribute('aria-current', 'step');
});

test('the arrow keys move between sections', async ({ page }) => {
  await page.goto(NODE);
  await expectSection(page, 'learn-1', LEARN_1);

  await page.keyboard.press('ArrowRight');
  await expectSection(page, 'learn-2', LEARN_2);
  await page.keyboard.press('ArrowRight');
  await expectSection(page, 'practise', 'Practise');
  await page.keyboard.press('ArrowLeft');
  await expectSection(page, 'learn-2', LEARN_2);
  await page.keyboard.press('ArrowLeft');
  await expectSection(page, 'learn-1', LEARN_1);

  // At either end the arrows stay put.
  await page.keyboard.press('ArrowLeft');
  await expectSection(page, 'learn-1', LEARN_1);
});

test('the arrow keys are left alone inside an input', async ({ page }) => {
  await page.goto('/node/l6-hessian-test-sample');
  const url = page.url();
  await page.evaluate(() => {
    const input = document.createElement('input');
    input.id = 'probe';
    document.querySelector('section.node-section')?.append(input);
    input.focus();
  });
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('section.node-section h2')).toHaveText('Second derivative test in two variables');
  expect(page.url()).toBe(url);
});

test('a reload keeps the section and the browser Back button returns to the previous one', async ({ page }) => {
  await page.goto(NODE);
  await next(page).click();
  await expectSection(page, 'learn-2', LEARN_2);
  await next(page).click();
  await expectSection(page, 'practise', 'Practise');

  await page.reload();
  await expectSection(page, 'practise', 'Practise');
  await expect(rail(page).getByRole('link', { name: 'Practise' })).toHaveAttribute('aria-current', 'step');

  await page.goBack();
  await expectSection(page, 'learn-2', LEARN_2);
  await page.goBack();
  await expectSection(page, 'learn-1', LEARN_1);
  await page.goForward();
  await expectSection(page, 'learn-2', LEARN_2);
});

test('a section opened from a link starts at its own URL', async ({ page }) => {
  await page.goto(`${NODE}?section=sheet`);
  await expectSection(page, 'sheet', 'For the sheet');
  await expect(rail(page).getByRole('link', { name: 'For the sheet' })).toHaveAttribute('aria-current', 'step');
});

test('no topic has a Recall section', async ({ page }) => {
  const nodes = readdirSync('content/nodes', { recursive: true, encoding: 'utf8' })
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.basename(file, '.md'));
  expect(nodes.length).toBeGreaterThan(50);
  await page.goto(`/node/${nodes[0]}`);
  for (const id of nodes) {
    // A client-side move keeps the whole course in one page load.
    await page.evaluate((path) => {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }, `/node/${id}`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(rail(page).getByRole('link').first()).toBeVisible();
    await expect(rail(page).getByRole('link', { name: 'Recall' }), id).toHaveCount(0);
  }
});

test('a deep link to an exercise opens Practise with the exercise in view', async ({ page }) => {
  await page.goto(`${NODE}#exercise-l6-critical-points.final-2022-q5a`);
  await expectSection(page, 'practise', 'Practise');
  await expect(page).toHaveURL(/#exercise-l6-critical-points\.final-2022-q5a$/);

  const exercise = page.locator('[id="exercise-l6-critical-points.final-2022-q5a"]');
  await expect(exercise).toBeVisible();
  await expect(exercise).toBeInViewport({ ratio: 0.1 });
  const top = await exercise.evaluate((element) => element.getBoundingClientRect().top);
  expect(top).toBeGreaterThanOrEqual(0);
  await expect(rail(page).getByRole('link', { name: 'Practise' })).toHaveAttribute('aria-current', 'step');
});

test('a deep link to a sheet item opens For the sheet', async ({ page }) => {
  await page.goto(`${NODE}#sheet-l6-critical-points.sheet-critical`);
  await expectSection(page, 'sheet', 'For the sheet');
  await expect(page.locator('[id="sheet-l6-critical-points.sheet-critical"]')).toBeInViewport();
});

test('a Learn section ends with Your turn', async ({ page }) => {
  await page.goto(NODE);
  const yourTurn = page.locator('.your-turn');
  await expect(yourTurn.getByRole('heading', { level: 3, name: 'Your turn' })).toBeVisible();
  await expect(yourTurn.locator('.block-concept-question').first()).toBeVisible();
  await expect(yourTurn.locator('.block-exercise')).toHaveCount(1);

  // The teaching comes before it.
  const order = await page.evaluate(() => {
    const body = document.querySelector('.node-section-body');
    const turn = document.querySelector('.your-turn');
    const statement = body?.querySelector('.block-formal-statement');
    return !!turn && !!statement && !!(statement.compareDocumentPosition(turn) & Node.DOCUMENT_POSITION_FOLLOWING);
  });
  expect(order).toBe(true);

  await next(page).click();
  await expectSection(page, 'learn-2', LEARN_2);
  await expect(page.locator('.your-turn').getByRole('heading', { level: 3, name: 'Your turn' })).toBeVisible();
  await expect(page.locator('.your-turn .block-concept-question').first()).toBeVisible();
});

test('a concept question in Your turn is answered and then forgotten on leaving the section', async ({ page }) => {
  await page.goto('/node/l6-hessian-test-sample');
  const question = page.locator('.your-turn .block-concept-question').first();
  await question.getByRole('button', { name: 'A saddle point', exact: true }).click();
  await expect(question.locator('.option.option-right')).toHaveCount(1);

  await next(page).click();
  await expectSection(page, 'practise', 'Practise');
  await back(page).click();
  await expectSection(page, 'learn-1', 'Second derivative test in two variables');
  await expect(page.locator('.your-turn .block-concept-question').first().locator('.option.option-right')).toHaveCount(0);
});

test('an exercise shows the tier ladder and the paper cue', async ({ page }) => {
  await page.goto(`${NODE}?section=practise`);
  // The level tabs keep all five exercises mounted; Extra shows first because Core is empty here.
  const exercises = page.locator('.level-panel .block-exercise');
  await expect(exercises).toHaveCount(5);

  const standard = exercises.first();
  const ladder = standard.locator('ol.tier-ladder');
  await expect(ladder).toHaveAttribute('aria-label', 'Tier: Extra');
  await expect(ladder.locator('li')).toHaveText(['Core', 'Extra', 'Exam level']);
  await expect(standard.locator('.paper-cue')).toHaveText(/Work it on paper, then reveal the solution\./);
  await expect(standard.getByRole('button', { name: 'Reveal solution' })).toBeVisible();

  // Core first, exam level last.
  const tiers = await exercises.locator('ol.tier-ladder').evaluateAll((lists) => lists.map((list) => list.getAttribute('aria-label')));
  expect(tiers).toEqual(['Tier: Extra', 'Tier: Extra', 'Tier: Exam level', 'Tier: Exam level', 'Tier: Exam level']);
  await expect(exercises.last().locator('ol.tier-ladder')).toHaveAttribute('aria-label', 'Tier: Exam level');

  // The basic exercise sits in Your turn on the first Learn section, with the same furniture.
  await page.goto(NODE);
  const basic = page.locator('.your-turn .block-exercise');
  await expect(basic.locator('ol.tier-ladder')).toHaveAttribute('aria-label', 'Tier: Core');
  await expect(basic.locator('.paper-cue')).toBeVisible();
});

test('a right attempt puts a check mark on the exercise', async ({ page }) => {
  const reset = await page.request.post('/api/progress', { data: { attempts: [], reviews: [] } });
  expect(reset.ok()).toBeTruthy();

  await page.goto(NODE);
  const exercise = page.locator('.your-turn .block-exercise');
  await expect(exercise.locator('.exercise-done')).toHaveCount(0);
  await exercise.getByRole('button', { name: 'Reveal solution' }).click();
  const rights = exercise.getByRole('button', { name: 'Right', exact: true });
  const steps = await rights.count();
  expect(steps).toBeGreaterThan(0);
  for (let step = 0; step < steps; step += 1) await rights.nth(step).click();
  await exercise.getByRole('button', { name: 'Save attempt' }).click();
  await expect(exercise.locator('.exercise-done')).toHaveAttribute('aria-label', 'Marked right');
});

test('going deeper stays collapsed inside its section', async ({ page }) => {
  await page.goto(`${NODE}?section=learn-2`);
  const deeper = page.locator('details.going-deeper');
  await expect(deeper).toHaveCount(1);
  await expect(deeper).not.toHaveAttribute('open');
  await deeper.locator('summary').click();
  await expect(deeper).toHaveAttribute('open');

  // Leaving and coming back collapses it again.
  await back(page).click();
  await expectSection(page, 'learn-1', LEARN_1);
  await next(page).click();
  await expectSection(page, 'learn-2', LEARN_2);
  await expect(page.locator('details.going-deeper')).not.toHaveAttribute('open');
});

test('the last section offers a finish button that opens the next topic instead of Next', async ({ page }) => {
  await page.goto(`${NODE}?section=sheet`);
  await expect(next(page)).toHaveCount(0);
  const finish = sectionNav(page).locator('a.button-finish');
  await expect(finish).toBeVisible();
  await expect(finish.locator('.finish-label')).toHaveText('Topic done · next topic');
  const href = await finish.getAttribute('href');
  expect(href).toMatch(/^\/node\//);
  await finish.click();
  await expect(page).toHaveURL(new RegExp(`${href}$`));
});

test('with reduced motion the sections still change', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(NODE);
  await expectSection(page, 'learn-1', LEARN_1);

  await next(page).click();
  await expectSection(page, 'learn-2', LEARN_2);
  await expect(page.locator('section.node-section')).toBeVisible();
  await page.keyboard.press('ArrowRight');
  await expectSection(page, 'practise', 'Practise');
  await back(page).click();
  await expectSection(page, 'learn-2', LEARN_2);
  await expect(rail(page).getByRole('link', { name: /^Learn Critical point/ })).toHaveAccessibleName(/, done$/);

  // The page never scrolls sideways while sections change.
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
