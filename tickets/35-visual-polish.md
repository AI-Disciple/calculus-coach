# 35: Visual polish: themes, node page and exercise levels

**What to build:** The app looks calmer and easier to read, without changing how it works. The light and dark themes get softer colours with visible layers. The node page opens with the maths instead of metadata. Each block type gets its own look. Practise shows its exercises behind three level tabs, Core, Extra and Exam level.

**Blocked by:** 34 (its changes are still uncommitted in the working tree, so commit them first)

**Status:** done

**Suggested model:** Claude Opus 5.5 medium with the `apple-design` skill for the typography, spacing and materials sections.

**Read first:** `docs/pylab-review.md` (the review this ticket comes from, especially "Lesson layout", "Theme and colours" and "Side by side"), `docs/writing-style.md`, `src/ui/styles.css` (theme tokens at the top), `src/ui/NodePage.tsx` (header around lines 180–230, the "Next" link around line 313), `src/ui/blocks.tsx` (`TIER`, `TierLadder`, the exercise and statement rendering), `src/ui/nodeSections.ts`.

## Background

We compared the node page with lessons on PyLab, for example lesson 1.1. PyLab is much easier to read, for four reasons:

- **The page opens with the content.** A lesson opens with a breadcrumb, a large title and a meta row ("25 min · 1 exercise × 3 levels"). Our node page opens with two tags, an exam-weight line, a notation box, "Recommended first" and up to seven source links before any maths.
- **Blocks look different from each other.** PyLab uses icon badges, boxed callouts with a coloured edge (💡 tip, ⚠️ warning) and a 🎯 Key points box. Here DEFINITION, THEOREM and PLAIN VERSION are small grey labels over flat text, all with the same weight.
- **The colours are calmer.** PyLab uses a cool slate palette: a light page `#f8fafc` with white or faintly indigo-tinted boxes on top, body text `#334155` and line height 1.75. Its dark theme is deep navy with lighter cards and visible borders. Our light canvas `#fbfbfa` is almost pure white with little layering, so it feels too bright. Our dark canvas `#191918` is a near-black, so it feels almost too dark.
- **Exercise levels have a purpose.** Each PyLab exercise has three clickable level tabs, each with a coloured dot and a one-line purpose. We already tag every exercise basic, standard or exam, but Practise lists them in one column.

Keep the section rail. It works well and is not part of this ticket.

## Acceptance criteria

### Themes
- [x] In the light theme the page background is slightly toned, and cards, statements and panels sit on it in a lighter colour with a thin border. The page no longer reads as plain white.
- [x] In the dark theme the background is lifted from near-black (toward deep navy or a lighter grey), and panels can be told apart from the page.
- [x] The indigo accent stays. Body text in both themes keeps at least WCAG AA contrast against its background, including inside cards and callouts.
- [x] Only token values and the styles that use them change. No component logic changes for this part.

### Node page header
- [x] The header shows the lecture as a breadcrumb, the title, and one meta row: an estimated time ("about 25 min") and the number of exercises.
- [x] The time estimate is computed from the node's blocks by one documented rule, for example reading words at a fixed pace plus a fixed time per exercise, rounded to 5 minutes.
- [x] The exam-weight tag stays visible in the meta row. The reviewed tag, the exam-weight note, the notation, "Recommended first" and the sources move into one collapsed "About this node" line that opens in place. Nothing that is shown today is lost.

### Block identity
- [x] Definitions, theorems and methods are boxed, with an icon and a coloured edge per kind. The title is clearly larger than the body text.
- [x] The plain version reads as the softer companion of its statement. Its pairing with the statement (side by side on wide screens) stays.
- [x] A trap is a ⚠️ callout with its own colour. A worked example and a guided example each get their own box.
- [x] Going-deeper notes stay collapsed and marked optional, styled to match.
- [x] Visual blocks and concept questions look the same as before, apart from the new theme colours.

### Exercise levels
- [x] The tier labels are Core, Extra and Exam level everywhere in the app (today Basic, Standard and Exam level). The values `basic`, `standard` and `exam` in the content stay unchanged.
- [x] Practise shows three tabs: **Core** "The essentials to master", **Extra** "To consolidate", **Exam level**. Each has a coloured dot and a count. A tab without exercises is shown disabled.
- [x] A tab lists only that tier's exercises in their current order. The first tab with exercises opens by default. The tabs work with the keyboard as a tablist.
- [x] Inside an exercise nothing else changes: "Reveal solution", Copy for AI, marking and attempt history work as today.
- [x] The basic exercise in a Learn section's "Your turn" is not moved into the tabs.

### Previous and next
- [x] The last section of a node ends with links to the previous and the next node in course order, showing their titles. At the first or last node of the course the missing side is left out.

### Checks
- [x] Screenshots of one node page (for example `l2-monotonicity-extrema`) in light and dark, before and after, are attached to the commit message or the session.
- [x] Smoke tests cover the level tabs and the "About this node" line. Existing smoke tests are updated, not deleted.
- [x] `npm run check` passes.

## Out of scope

- Key points boxes, tip callouts and any content changes (ticket 36).
- The sidebar, Home, My plan and the formula sheet (ticket 37).
- The phone layout beyond not breaking it.
