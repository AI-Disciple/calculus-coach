import { expect, test, type Page } from '@playwright/test';

async function importProgress(page: Page, data: { attempts?: unknown[] } = {}) {
  const response = await page.request.post('/api/progress', { data: { attempts: data.attempts ?? [], reviews: [] } });
  expect(response.ok()).toBeTruthy();
}

test('attempts sit behind a closed summary, open after a save and show one mark per step', async ({ page }) => {
  const exerciseId = 'l7-average-value.final-2022-q6';
  await importProgress(page, {
    attempts: [
      {
        id: 'topic-layout-earlier',
        at: new Date(Date.now() - 3_600_000).toISOString(),
        exerciseId,
        tier: 'exam',
        result: 'right',
      },
    ],
  });
  await page.goto(`/node/l7-average-value#exercise-${exerciseId}`);
  const exercise = page.locator(`[id="exercise-${exerciseId}"]`);
  const history = exercise.locator('details.history');
  await expect(history.locator('summary')).toHaveText('1 attempt');
  await expect(history).not.toHaveAttribute('open', '');
  await expect(history.locator('.attempt-list')).toBeHidden();

  await exercise.getByRole('button', { name: 'Reveal solution' }).click();
  const steps = exercise.locator('.mark-step');
  const count = await steps.count();
  expect(count).toBeGreaterThan(1);
  for (let index = 0; index < count; index++) {
    await steps.nth(index).getByRole('button', { name: 'Right', exact: true }).click();
  }
  await exercise.getByRole('button', { name: 'Save attempt' }).click();

  await expect(history.locator('summary')).toHaveText('2 attempts');
  await expect(history).toHaveAttribute('open', '');
  // The old attempt has one mark, and the new one has one per step.
  await expect(history.locator('.result-mark')).toHaveCount(1 + count);
});

async function axisRanges(page: Page, index: number) {
  return page.evaluate((i) => {
    const graph = document.querySelectorAll('.visual-figure .js-plotly-plot')[i] as unknown as {
      _fullLayout: { xaxis: { range: number[] }; yaxis: { range: number[] } };
    };
    return { x: [...graph._fullLayout.xaxis.range], y: [...graph._fullLayout.yaxis.range] };
  }, index);
}

async function checkZoomButtons(page: Page, url: string, index: number) {
  await page.goto(url);
  const figure = page.locator('.visual-figure').nth(index);
  await expect(figure.locator('.js-plotly-plot')).toBeVisible({ timeout: 30_000 });
  await figure.scrollIntoViewIfNeeded();
  const start = await axisRanges(page, index);

  await figure.getByRole('button', { name: 'Zoom in' }).click();
  await expect.poll(async () => (await axisRanges(page, index)).x[1] - (await axisRanges(page, index)).x[0]).toBeLessThan(
    start.x[1] - start.x[0] - 1e-6,
  );
  const zoomed = await axisRanges(page, index);
  expect(zoomed.y[1] - zoomed.y[0]).toBeLessThan(start.y[1] - start.y[0]);

  await figure.getByRole('button', { name: 'Reset view' }).click();
  await expect
    .poll(async () => {
      const now = await axisRanges(page, index);
      return Math.abs(now.x[0] - start.x[0]) + Math.abs(now.x[1] - start.x[1]) < 0.05;
    })
    .toBe(true);
}

test('the zoom buttons work on a one-variable figure', async ({ page }) => {
  test.setTimeout(90_000);
  await checkZoomButtons(page, '/node/visuals-one-variable-stand-in', 0);
});

test('the zoom buttons work on a flat several-variable figure', async ({ page }) => {
  test.setTimeout(90_000);
  // The second figure of the stand-in is the gradient plot.
  await checkZoomButtons(page, '/node/visuals-stand-in', 1);
});

test('the section rail wraps and shows no scroll bar at 375 and 1280 px', async ({ page }) => {
  for (const width of [375, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/node/l4-quadrics');
    const rail = page.locator('.section-rail ol');
    await expect(rail).toBeVisible();
    const sizes = await rail.evaluate((element) => ({ scroll: element.scrollWidth, client: element.clientWidth }));
    expect(sizes.scroll).toBeLessThanOrEqual(sizes.client);
    const page_ = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(page_).toBeLessThanOrEqual(0);
    // Every step is on screen horizontally.
    const links = page.locator('.section-rail a');
    const total = await links.count();
    for (let index = 0; index < total; index++) {
      const box = await links.nth(index).boundingBox();
      expect(box!.x + box!.width).toBeLessThanOrEqual(width + 1);
    }
  }
});
