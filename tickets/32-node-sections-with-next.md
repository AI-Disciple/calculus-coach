# 32: Nodes as sections with Next, and exercises woven into the teaching

**What to build:** A node is shown one section at a time with Back and Next, as on online-course sites, with a progress rail you can jump from. Practice sits right after the teaching it tests and is clearly set apart from the reading.

**Blocked by:** 29, 30

**Status:** done

**Suggested model:** Claude Opus 5.5 medium (the hardest ticket: the grouping rules, section state in the URL, deep links, and many smoke tests to rework). Use the `apple-design` skill for the slide between sections. Once grouping is in, a Claude Sonnet 5.5 high subagent per lecture can review each node's automatic sections and add markers only where the grouping is wrong.

**Read first:** `src/ui/NodePage.tsx`, `src/ui/blocks.tsx`, `docs/content-format.md`, `CONTEXT.md` (node, block, exercise, tier), `spec.md` stories 2 and 20 (nothing locked, flexible node shape).

## Background

A node is one scroll of about 9,000px. "Critical points" has 33 blocks: three concept questions, two traps, five exercises in a row, ten stacked cards, and the 3D visual as the last block. It feels daunting, and the switch from reading to exercises comes without warning.

## Decision (2026-10-12)

Sections are grouped automatically, and content markers can override the grouping node by node.

- **Automatic grouping:** a new section starts at each formal statement and takes its plain version, examples, visual and concept questions. Each basic exercise goes to the section that matches its tags, or after the first section if none matches.
- **Markers:** a new `section` block with a title. Where a node has markers, they replace the automatic grouping for that node. Document the block in `docs/content-format.md` and let the content check validate it.

## Acceptance criteria

- [x] A node is split into sections in this pattern: one or more **Learn** sections (statement, plain version, visual, worked or guided example, then a quick check), then **Practise** (the tier ladder: basic, standard, exam level), then **Recall** (cards, see ticket 34) and **For the sheet** (sheet items).
- [x] Each Learn section ends with a short "Your turn": a concept question or a basic exercise on what was just taught.
- [x] Exercises look different from reading: their own surface (card or panel), a "Work it on paper" cue, the tier shown as a step on the ladder, and a check mark once marked right.
- [x] The visual sits with the statement it explains and is never the last block.
- [x] Back and Next buttons, a progress rail showing all sections with done marks, and the keyboard arrows to move between sections. Any section can be opened directly. Nothing is locked.
- [x] The section changes with a horizontal slide. Next slides left and Back slides right (same path both ways). With reduced motion it cross-fades.
- [x] Deep links keep working: `/node/:id#exercise-<id>` from search and the dashboard opens the section holding that exercise and scrolls to it. The section is reflected in the URL so reload and Back keep your place.
- [x] "Going deeper" blocks stay optional and collapsed inside their section.
- [x] Smoke tests that read the whole node (`node.spec.ts`, `ticket18-nodes.spec.ts`, the visual specs) are updated, and `npm run check` passes.
