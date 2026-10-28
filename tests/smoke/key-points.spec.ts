import { expect, test } from '@playwright/test';

// No visible node has a `key-points` or `tip` block yet, so this uses a hidden fixture node,
// content/nodes/lecture-4/visuals-one-variable-stand-in.md. Its file writes the Key points block first,
// before the five visuals, and the tip right after the first visual. The node has one Learn section
// and no "Your turn" (see `npx tsx scripts/print-sections.ts`, which lists visible nodes only).
const NODE = '/node/visuals-one-variable-stand-in?section=learn-1';

test('a Learn section shows its Key points box last and a tip beside the text', async ({ page }) => {
  await page.goto(NODE);
  const section = page.locator('section.node-section');
  await expect(section.locator('h2')).toHaveText('One-variable visuals (stand-in)');

  const keyPoints = section.locator('.block-key-points');
  await expect(keyPoints).toHaveCount(1);
  await expect(keyPoints).toBeVisible();
  await expect(keyPoints.locator('.block-label-text')).toHaveText('Key points');
  await expect(section.getByRole('region', { name: 'Key points' })).toBeVisible();
  await expect(keyPoints.locator('ul > li')).toHaveCount(2);
  await expect(keyPoints.locator('.katex').first()).toBeVisible();

  // Written first in the file, shown last: no other block follows it, and "Your turn", when the section has one, comes after it.
  const placement = await section.locator('.node-section-body').evaluate((body) => {
    const box = body.querySelector('.block-key-points');
    if (!box) return null;
    const blocks = [...body.querySelectorAll('.block')].filter((block) => !block.closest('.your-turn'));
    const yourTurn = body.querySelector('.your-turn');
    return {
      last: blocks.at(-1) === box,
      beforeYourTurn: !yourTurn || !!(box.compareDocumentPosition(yourTurn) & Node.DOCUMENT_POSITION_FOLLOWING),
      blocksBefore: blocks.indexOf(box),
    };
  });
  expect(placement).toMatchObject({ last: true, beforeYourTurn: true });
  // The section holds other blocks, so "last" is not true by default.
  expect(placement?.blocksBefore).toBeGreaterThan(0);

  const tip = section.locator('.block-tip');
  await expect(tip).toBeVisible();
  await expect(tip.locator('.block-label-text')).toHaveText('Tip');
});
