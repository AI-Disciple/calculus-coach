import { expect, test } from '@playwright/test';

test('open the visual stand-in and move the critical-point control', async ({ page }) => {
  test.setTimeout(90_000);
  await page.goto('/node/visuals-stand-in');
  await expect(page.getByRole('heading', { level: 1, name: 'Multivariable visuals (stand-in)' })).toBeVisible();
  await expect(page.locator('.js-plotly-plot').first()).toBeVisible({ timeout: 30_000 });
  await expect(page.getByLabel('x^2 + y^2 + z^2 = 1', { exact: true })).toBeVisible();
  await expect(page.getByText('Showing the level curve z = 0.')).toBeVisible();
  await expect(page.getByText('Z = 2 + 2(x - 1) + 2(y - 1)')).toBeVisible();
  await page.getByRole('slider', { name: 'x0', exact: true }).fill('0');
  await expect(page.getByText('Z = 1 + 2(y - 1)')).toBeVisible();
  await expect(
    page.getByText(
      'The directional derivative is 2. The gradient arrow is the direction of steepest ascent, and it is perpendicular to the level curve. Their dot product is 0.',
    ),
  ).toBeVisible();
  await page.getByRole('slider', { name: 'x', exact: true }).fill('0');
  await expect(
    page.getByText(
      'The directional derivative is 0. The gradient arrow is the direction of steepest ascent, and it is perpendicular to the level curve. Their dot product is 0.',
    ),
  ).toBeVisible();
  await expect(page.getByText('The line is tangent to the circle.')).toBeVisible();
  await expect(
    page.getByText(
      'For f = x^2 + y^2 + kxy, D is 4, with f_xx = 2, f_yy = 2 and f_xy = 0. The second-derivative test gives a local minimum.',
    ),
  ).toBeVisible();

  await page.getByRole('slider', { name: 'k', exact: true }).fill('3');
  await expect(
    page.getByText(
      'For f = x^2 + y^2 + kxy, D is -5, with f_xx = 2, f_yy = 2 and f_xy = 3. The second-derivative test gives a saddle.',
    ),
  ).toBeVisible();

  await page.getByRole('slider', { name: 'Slice', exact: true }).fill('2');
  await expect(page.getByText('The plane for the level curve z = 2 misses the surface.')).toBeVisible();

  await page.getByRole('slider', { name: 'level', exact: true }).fill('0');
  await expect(page.getByText('The line intersects the circle at two points.')).toBeVisible();

  const html = page.locator('html');
  const starting = (await html.getAttribute('data-theme')) === 'dark' ? 'dark' : 'light';
  await page.getByRole('button', { name: starting === 'dark' ? 'Switch to light theme' : 'Switch to dark theme' }).click();
  await expect(html).toHaveAttribute('data-theme', starting === 'dark' ? 'light' : 'dark');
  await expect(page.locator('.js-plotly-plot').first()).toBeVisible();
  await expect(
    page.getByText(
      'For f = x^2 + y^2 + kxy, D is -5, with f_xx = 2, f_yy = 2 and f_xy = 3. The second-derivative test gives a saddle.',
    ),
  ).toBeVisible();
  await expect(page.getByRole('button', { name: 'Reveal solution' })).toHaveCount(0);
});

test('integration visuals respond to bounds, order, and cuts', async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto('/node/visuals-stand-in');
  await expect(page.locator('.js-plotly-plot').first()).toBeVisible({ timeout: 60_000 });

  await expect(page.getByText('x runs from 0 to 1, and y runs from 0 to 1 - x.')).toBeVisible();
  await expect(page.getByText('The area is 1/2.')).toBeVisible();
  await page.getByRole('combobox', { name: 'Region order', exact: true }).selectOption({ label: 'dx dy' });
  await expect(page.getByText('y runs from 0 to 1, and x runs from 0 to 1 - y.')).toBeVisible();
  await page.getByRole('combobox', { name: 'Region', exact: true }).selectOption({ label: 'Two pieces' });
  await expect(page.getByText('This order uses two pieces.')).toBeVisible();

  const polar = page.locator('.visual-block').filter({ has: page.getByRole('combobox', { name: 'Polar shape', exact: true }) });
  await expect(polar.getByText('The area is 2 pi.')).toBeVisible();
  await polar.getByRole('slider', { name: 'outer radius', exact: true }).fill('1');
  await expect(polar.getByText('The area is 2 pi.')).toHaveCount(0);

  await expect(page.getByText('The volume is 5 pi.')).toBeVisible();
  await page.getByRole('slider', { name: 'top z', exact: true }).fill('4');
  await expect(page.getByText('The volume is 4 pi.')).toBeVisible();

  const spherical = page.locator('.visual-block').filter({ has: page.getByRole('slider', { name: 'outer rho', exact: true }) });
  await expect(spherical.getByText('The volume is pi sqrt(2) / 3.')).toBeVisible();
  await spherical.getByRole('slider', { name: 'outer rho', exact: true }).fill('0.5');
  await expect(spherical.getByText('The volume is pi sqrt(2) / 3.')).toHaveCount(0);
  await expect(spherical.getByText('The point rho = 1/2, phi = pi/2, theta = 0 is (x, y, z) = (1/2, 0, 0).')).toBeVisible();

  await expect(page.getByText('The Jacobian determinant is -1/2.')).toBeVisible();
  await page.getByRole('combobox', { name: 'Map', exact: true }).selectOption({ label: 'Shear' });
  await expect(page.getByText('The Jacobian determinant is 2.')).toBeVisible();

  const solid = page.locator('.visual-block').filter({ has: page.getByRole('combobox', { name: 'Solid', exact: true }) });
  await expect(solid.getByText('Its shadow is the disk x^2 + y^2 ≤ 1.')).toBeVisible();
  await solid.getByRole('combobox', { name: 'Solid', exact: true }).selectOption({ label: 'Plane and paraboloid' });
  await expect(solid.getByText('(-1 + sqrt(5))/2')).toBeVisible();
  const cut = solid.getByText(/^The cut by/);
  const before = await cut.innerText();
  await solid.getByRole('combobox', { name: 'Cut plane', exact: true }).selectOption({ label: 'x = 0' });
  await expect(cut).not.toHaveText(before);
});
