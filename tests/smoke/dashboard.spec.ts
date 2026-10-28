import { expect, test } from "@playwright/test";

const COPY_TEXT = `Exercise
Find and classify the critical point of \\(f(x, y) = x^2 + 3y^2 - 4x + 6y\\).

Official solution
The partial derivatives are \\(f_x = 2x - 4\\) and \\(f_y = 6y + 6\\). They vanish at \\(x = 2\\) and \\(y = -1\\), so the only critical point is \\((2, -1)\\).

The second derivatives are \\(f_{xx} = 2\\), \\(f_{yy} = 6\\) and \\(f_{xy} = 0\\), so \\(D = 2 \\cdot 6 - 0^2 = 12\\).

\\(D > 0\\) and \\(f_{xx} > 0\\), so \\((2, -1)\\) is a local minimum, with value \\(f(2, -1) = -7\\).

Steps marked wrong
Step 1. Partial derivatives \\(f_x = 2x - 4\\) and \\(f_y = 6y + 6\\).
Mistake type: Sign or arithmetic slip.
Note: Dropped a minus.

My working
[Write your working here.]

Explain where this working goes wrong, using the notation of this course. Keep df/dx, f_x and f' as they are written in the exercise.`;

test("a marked mistake shows on the dashboard and copy for AI puts that exercise on the clipboard", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  const reset = await page.request.post("/api/progress", {
    data: { attempts: [], reviews: [] },
  });
  expect(reset.ok()).toBeTruthy();

  await page.goto("/node/l6-hessian-test-sample");
  const exercise = page
    .locator(".block-exercise")
    .filter({ hasText: "Find and classify the critical point of" });
  await exercise.getByRole("button", { name: "Reveal solution" }).click();
  const steps = exercise.locator(".mark-step");
  await expect(steps).toHaveCount(4);
  await steps
    .nth(0)
    .getByRole("button", { name: "Wrong", exact: true })
    .click();
  await steps
    .nth(0)
    .getByLabel("Mistake type")
    .selectOption({ label: "Sign or arithmetic slip" });
  await steps.nth(0).getByLabel("Note").fill("Dropped a minus.");
  for (const index of [1, 2, 3]) {
    await steps
      .nth(index)
      .getByRole("button", { name: "Right", exact: true })
      .click();
  }
  await exercise.getByRole("button", { name: "Save attempt" }).click();
  await expect(
    exercise.getByText(
      "Step 1 was wrong. Sign or arithmetic slip. Dropped a minus.",
    ),
  ).toBeVisible();

  await exercise.getByRole("button", { name: "Copy for AI" }).click();
  await expect(exercise.getByText("Copied.")).toBeVisible();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied.replaceAll("\r\n", "\n")).toBe(COPY_TEXT);

  await page.goto("/dashboard");
  await expect(page).toHaveURL(/\/progress$/);
  await expect(
    page.getByRole("heading", { name: "Progress", level: 1 }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Patterns to fix" }),
  ).toBeVisible();
  const byType = page.getByRole("region", { name: "By mistake type" });
  await expect(byType).toContainText("Sign or arithmetic slip");
  await expect(byType).toContainText("1");
  await expect(byType).toContainText(
    "Up: 1 in the last two weeks, 0 in the two weeks before",
  );
  await byType
    .getByRole("link", { name: /Find and classify the critical point of/ })
    .click();
  await expect(page).toHaveURL(
    /\/node\/l6-hessian-test-sample#exercise-l6-hessian-test-sample\.basic-bowl/,
  );
});
