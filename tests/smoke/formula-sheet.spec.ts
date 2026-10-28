import { expect, test } from '@playwright/test';

test('build a formula sheet and open its print view', async ({ page }) => {
  const reset = await page.request.post('/api/progress', { data: { attempts: [], reviews: [] } });
  expect(reset.ok()).toBeTruthy();

  await page.goto('/node/l1-derivative?section=sheet');
  await expect(page.locator('#sheet-l1-derivative\\.sheet-definition')).toBeVisible();
  await expect(page.locator('#sheet-l1-derivative\\.sheet-definition')).toContainText('The derivative at');

  await page.goto('/formula-sheet');
  const main = page.getByRole('main');
  const notice = main.getByRole('note');
  await expect(notice).toBeVisible();
  await expect(notice).toHaveText(
    'Work in progress. What this page prints is not yet a usable formula sheet: it runs to far too many pages.',
  );
  await expect(main.getByRole('heading', { name: 'Lecture 1' })).toBeVisible();
  await expect(main.getByRole('heading', { name: 'Lecture 2' })).toBeVisible();
  await expect(main.getByRole('heading', { name: 'Lecture 6' })).toBeVisible();
  await expect(main.getByText('Formula', { exact: true }).first()).toBeVisible();
  await expect(main.getByText('Trap', { exact: true }).first()).toBeVisible();
  await expect(main.getByText('Recognition rule', { exact: true }).first()).toBeVisible();

  const excluded = page.waitForResponse(
    (response) => response.url().includes('/api/sheet') && response.request().method() === 'POST' && response.ok(),
  );
  await main.getByRole('checkbox', { name: 'Include the inflection trap' }).uncheck();
  await excluded;
  await expect(main.getByText(/This draft (should fit on one sheet|is longer than one sheet)\./)).toBeVisible();

  await main.getByRole('link', { name: 'Print view' }).click();
  await expect(page.getByText("The derivative at")).toBeVisible();
  await expect(page.getByText('does not on its own make')).toHaveCount(0);

  await page.goto('/formula-sheet');
  await expect(main.getByRole('checkbox', { name: 'Include the inflection trap' })).not.toBeChecked();

  await main.getByRole('button', { name: 'Edit the derivative formula' }).click();
  await page.locator('#edit-l1-derivative\\.sheet-definition').fill('Derivative: slope of the tangent.');
  const saved = page.waitForResponse(
    (response) => response.url().includes('/api/sheet') && response.request().method() === 'POST' && response.ok(),
  );
  await main.getByRole('button', { name: 'Save the derivative formula' }).click();
  await saved;
  await page.reload();
  await expect(main.getByText('Derivative: slope of the tangent.')).toBeVisible();
});
