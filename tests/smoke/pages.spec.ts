import { expect, test } from '@playwright/test';

test('coverage, changes and adding-content pages', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Coverage' }).click();
  await expect(page.getByRole('heading', { name: 'Coverage', level: 1 })).toBeVisible();

  const handoutGroup = page.getByRole('heading', { name: 'Handout', level: 2 });
  await expect(handoutGroup).toBeVisible();

  const handoutSection = page.locator('section.coverage-group').filter({ has: handoutGroup });
  await expect(handoutSection.getByRole('link').first()).toBeVisible();

  await page.getByRole('tab', { name: 'By topic' }).click();
  const nodeHeading = page.locator('.coverage-node-section h2').first();
  await expect(nodeHeading.getByRole('link')).toBeVisible();
  await expect(page.locator('.coverage-node-items li').first()).toBeVisible();

  await page.getByRole('link', { name: 'What changed' }).click();
  await expect(page.getByRole('heading', { name: 'What changed', level: 1 })).toBeVisible();
  await expect(page.locator('.change-entry').first()).toBeVisible();

  await page.getByRole('link', { name: 'Adding new content' }).click();
  await expect(page.getByRole('heading', { name: 'Adding new content', level: 1 })).toBeVisible();
});
