import { expect, test, type Locator } from '@playwright/test';

async function plotCounts(block: Locator): Promise<{ traces: number; shapes: number }> {
  return block.locator('.js-plotly-plot').first().evaluate((element) => {
    const plot = element as unknown as { data?: unknown[]; layout?: { shapes?: unknown[] } };
    return { traces: plot.data?.length ?? 0, shapes: plot.layout?.shapes?.length ?? 0 };
  });
}

async function xRange(block: Locator): Promise<number[]> {
  return block.locator('.js-plotly-plot').first().evaluate((element) => {
    const plot = element as unknown as { layout?: { xaxis?: { range?: number[] } } };
    return (plot.layout?.xaxis?.range ?? []).map((value) => Number(value.toPrecision(6)));
  });
}

test('one-variable visuals draw and respond to their controls', async ({ page }) => {
  test.setTimeout(150_000);
  await page.goto('/node/visuals-one-variable-stand-in');
  await expect(page.getByRole('heading', { level: 1, name: 'One-variable visuals (stand-in)' })).toBeVisible();
  await expect(page.locator('.js-plotly-plot').first()).toBeVisible({ timeout: 60_000 });
  await expect(page.locator('.js-plotly-plot')).toHaveCount(5, { timeout: 60_000 });

  // Curve sketch: layers, a typed function and a closed interval.
  const sketch = page.locator('.visual-block').filter({ has: page.getByRole('checkbox', { name: 'Domain', exact: true }) });
  await expect(sketch.getByRole('textbox', { name: 'Function', exact: true })).toHaveValue('x^2/(x-1)');
  await expect(sketch.getByText(/^Vertical asymptote x/)).toHaveCount(0);
  const plain = await plotCounts(sketch);
  await sketch.getByRole('checkbox', { name: 'Vertical asymptotes', exact: true }).check();
  await expect(
    sketch.getByText('Vertical asymptote x = 1 (f → -∞ from the left, f → +∞ from the right).', { exact: true }),
  ).toBeVisible();
  await expect.poll(async () => (await plotCounts(sketch)).shapes).toBe(plain.shapes + 1);
  await sketch.getByRole('checkbox', { name: 'Horizontal and oblique asymptotes', exact: true }).check();
  await expect(sketch.getByText('Oblique asymptote y = x + 1 as x → ∞.', { exact: true })).toBeVisible();
  await sketch.getByRole('checkbox', { name: 'Extrema', exact: true }).check();
  await expect(sketch.getByText('Local maximum at x = 0, f(0) = 0.', { exact: true })).toBeVisible();
  await expect(sketch.getByText('Local minimum at x = 2, f(2) = 4.', { exact: true })).toBeVisible();
  await sketch.getByRole('checkbox', { name: "Sign of f''", exact: true }).check();
  await expect(sketch.getByText("f'' > 0 on (1, ∞); f'' < 0 on (-∞, 1).", { exact: true })).toBeVisible();
  await sketch.getByRole('checkbox', { name: 'Extrema', exact: true }).uncheck();
  await expect(sketch.getByText('Local maximum at x = 0, f(0) = 0.', { exact: true })).toHaveCount(0);

  await sketch.getByRole('textbox', { name: 'Function', exact: true }).fill('x^3');
  await sketch.getByRole('checkbox', { name: 'Inflection points', exact: true }).check();
  await expect(sketch.getByText("Inflection point at x = 0, f(0) = 0 (f'' changes sign).", { exact: true })).toBeVisible();
  await sketch.getByRole('textbox', { name: 'Function', exact: true }).fill('x^2/(x-1)');
  await sketch.getByRole('checkbox', { name: 'Extrema', exact: true }).check();
  await sketch.getByRole('checkbox', { name: 'Restrict to a closed interval', exact: true }).check();
  await sketch.getByRole('slider', { name: 'Interval start', exact: true }).fill('2');
  await sketch.getByRole('slider', { name: 'Interval end', exact: true }).fill('4');
  await expect(
    sketch.getByText('On [2, 4]: absolute maximum f(4) = 16/3, absolute minimum f(2) = 4.', { exact: true }),
  ).toBeVisible();

  // A function that cannot be read shows a message and keeps the last good curve.
  await sketch.getByRole('textbox', { name: 'Function', exact: true }).fill('x +');
  await expect(sketch.getByRole('alert')).toBeVisible();
  await expect(sketch.locator('.js-plotly-plot')).toBeVisible();
  await sketch.getByRole('textbox', { name: 'Function', exact: true }).fill('x^2/(x-1)');
  await expect(sketch.getByRole('alert')).toHaveCount(0);

  // Limit: a hole at 0, then behaviour at infinity.
  const limit = page.locator('.visual-block').filter({ has: page.getByRole('combobox', { name: 'Approach', exact: true }) });
  await expect(limit.getByText('f(x) → 1 as x → 0. f(0) is not defined, so the graph has a hole there.', { exact: true })).toBeVisible();
  await expect(limit.getByRole('cell', { name: '0.998334', exact: true }).first()).toBeVisible();
  const before = await plotCounts(limit);
  expect(before.shapes).toBe(1);
  await expect.poll(async () => xRange(limit)).toEqual([-1, 1]);
  await limit.getByRole('slider', { name: 'Zoom', exact: true }).fill('-3');
  await expect.poll(async () => xRange(limit)).toEqual([-0.001, 0.001]);
  await limit.getByRole('slider', { name: 'Point a', exact: true }).fill('1');
  await expect(limit.getByText('f(x) → 0.8415 as x → 1. f(1) = 0.8415, so f is continuous there.', { exact: true })).toBeVisible();
  await limit.getByRole('combobox', { name: 'Approach', exact: true }).selectOption({ label: 'x → ∞' });
  await expect(limit.getByText('f(x) → 0 as x → ∞.', { exact: true })).toBeVisible();
  await expect(limit.getByRole('columnheader', { name: 'f(x)', exact: true })).toBeVisible();
  await expect(limit.getByRole('slider', { name: 'Point a', exact: true })).toHaveCount(0);
  await limit.getByRole('combobox', { name: 'Approach', exact: true }).selectOption({ label: 'x → -∞' });
  await expect(limit.getByText('f(x) → 0 as x → -∞.', { exact: true })).toBeVisible();

  // Newton: the iterates follow the starting point and the number of steps.
  const newton = page.locator('.visual-block').filter({ has: page.getByRole('slider', { name: 'Starting point x0', exact: true }) });
  await expect(newton.getByText('x_4 = 1.414213562, with f(x_4) = 4.51e-12.', { exact: true })).toBeVisible();
  await newton.getByRole('slider', { name: 'Steps n', exact: true }).fill('1');
  await expect(newton.getByText('x_1 = 1.5, with f(x_1) = 2.50e-1.', { exact: true })).toBeVisible();
  await expect(newton.getByRole('cell', { name: '1.5', exact: true }).first()).toBeVisible();
  await newton.getByRole('slider', { name: 'Starting point x0', exact: true }).fill('0');
  await expect(newton.getByText("At x_0 = 0 the tangent is horizontal (f' = 0), so Newton's method cannot continue.", { exact: true })).toBeVisible();

  // Taylor: order, centre and the comparison point.
  const taylor = page.locator('.visual-block').filter({ has: page.getByRole('textbox', { name: 'Centre a', exact: true }) });
  await expect(taylor.getByText('T_4(x) = -x^2/2 - x^4/12', { exact: true })).toBeVisible();
  const flat = await plotCounts(taylor);
  await taylor.getByRole('checkbox', { name: 'Show lower orders', exact: true }).check();
  await expect.poll(async () => (await plotCounts(taylor)).traces).toBe(flat.traces + 4);
  await taylor.getByRole('slider', { name: 'Order n', exact: true }).fill('2');
  await expect(taylor.getByText('T_2(x) = -x^2/2', { exact: true })).toBeVisible();
  await taylor.getByRole('slider', { name: 'Order n', exact: true }).fill('6');
  await expect(taylor.getByText('T_6(x) = -x^2/2 - x^4/12 - x^6/45', { exact: true })).toBeVisible();
  await taylor.getByRole('slider', { name: 'Compare at x', exact: true }).fill('0.7');
  await expect(taylor.getByText(/^At x = 0\.7: f\(x\) = -0\.26809, T_6\(x\) = /)).toBeVisible();
  await taylor.getByRole('textbox', { name: 'Centre a', exact: true }).fill('pi/2');
  await expect(taylor.getByRole('alert')).toHaveText('f is not defined at x = pi/2.');
  await expect(taylor.locator('.js-plotly-plot')).toBeVisible();
  await taylor.getByRole('textbox', { name: 'Centre a', exact: true }).fill('0');
  await expect(taylor.getByRole('alert')).toHaveCount(0);
  await expect(taylor.getByText('T_6(x) = -x^2/2 - x^4/12 - x^6/45', { exact: true })).toBeVisible();

  // Riemann: rule, n and the limits.
  const riemann = page.locator('.visual-block').filter({ has: page.getByRole('combobox', { name: 'Rule', exact: true }) });
  await expect(
    riemann.getByText('The left sum with n = 4 is 7/32 ≈ 0.21875. The integral is 1/3 ≈ 0.33333. The sum is below the integral by 0.1146.', { exact: true }),
  ).toBeVisible();
  await expect(
    riemann.getByText('f is increasing on [a, b], so the left sum is below the integral and the right sum is above it.', { exact: true }),
  ).toBeVisible();
  await riemann.getByRole('combobox', { name: 'Rule', exact: true }).selectOption({ label: 'Right' });
  await expect(
    riemann.getByText('The right sum with n = 4 is 15/32 ≈ 0.46875. The integral is 1/3 ≈ 0.33333. The sum is above the integral by 0.1354.', { exact: true }),
  ).toBeVisible();
  await riemann.getByRole('combobox', { name: 'Rule', exact: true }).selectOption({ label: 'Midpoint' });
  await riemann.getByRole('slider', { name: 'n', exact: true }).fill('150');
  await expect(riemann.getByText(/^The midpoint sum with n = 150 is /)).toBeVisible();
  await riemann.getByRole('slider', { name: 'n', exact: true }).fill('4');
  await expect(
    riemann.getByText('The midpoint sum with n = 4 is 21/64 ≈ 0.32813. The integral is 1/3 ≈ 0.33333. The sum is below the integral by 0.005208.', { exact: true }),
  ).toBeVisible();
  await riemann.getByRole('slider', { name: 'Upper limit b', exact: true }).fill('2');
  await expect(riemann.getByText(/^The midpoint sum with n = 4 is /)).toBeVisible();
  await expect(riemann.getByText('The integral is 8/3 ≈ 2.66667.', { exact: false })).toBeVisible();

  // The figures follow the theme and nothing offers a solution.
  const html = page.locator('html');
  const starting = (await html.getAttribute('data-theme')) === 'dark' ? 'dark' : 'light';
  await page.getByRole('button', { name: starting === 'dark' ? 'Switch to light theme' : 'Switch to dark theme' }).click();
  await expect(html).toHaveAttribute('data-theme', starting === 'dark' ? 'light' : 'dark');
  await expect(page.locator('.js-plotly-plot')).toHaveCount(5);
  await expect(page.getByRole('button', { name: 'Reveal solution' })).toHaveCount(0);
});

// The Learn section that holds each node's figure (see `npm run sections -- <node-id>`).
const NODES_WITH_FIGURE: [string, string][] = [
  ['l1-limits', 'learn-1'],
  ['l1-limit-techniques', 'learn-2'],
  ['l2-curve-sketching', 'learn-1'],
  ['l2-asymptotes', 'learn-2'],
  ['l2-concavity', 'learn-2'],
  ['l2-monotonicity-extrema', 'learn-2'],
  ['l2-newton', 'learn-1'],
  ['l3-taylor', 'learn-2'],
  ['l3-taylor-composition', 'learn-2'],
  ['l3-riemann-sums', 'learn-1'],
];

for (const [id, section] of NODES_WITH_FIGURE) {
  test(`node ${id} shows its one-variable figure`, async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto(`/node/${id}?section=${section}`);
    await expect(page.locator('.visual-block .js-plotly-plot').first()).toBeVisible({ timeout: 60_000 });
    await expect(page.getByRole('alert')).toHaveCount(0);
  });
}
