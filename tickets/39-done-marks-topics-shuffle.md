# 39: Done marks, topic status, shuffled options and "Topic" everywhere

**What to build:** A section counts as done only when you press Next at its bottom, and the marks are saved with the rest of the progress. A topic moves from Not started to In progress to Done by clear rules. Concept question options are shuffled. The app says "topic" wherever it said "node".

**Blocked by:** nothing. Build on the branch `prototype-layout`, which holds the prototype from the 2026-10-15 review session with the student.

**Blocks:** 40 and 41 (all three edit `src/ui/NodePage.tsx`, so they run one after the other).

**Status:** done

**Suggested model:** Claude Opus 5.5 medium.

**Read first:** `CONTEXT.md`, `docs/writing-style.md`, `src/ui/NodePage.tsx` (`markDone`, `readDone`, `writeDone`, the section-change layout effect, the finish button), `src/progress/dashboard.ts` (`Mastery` and the rule that decides it), `src/progress/progress.ts`, `server/progress-file.ts`, `src/ui/blocks.tsx` (`ConceptQuestion`), `src/ui/conceptQuestion.ts`.

## Background

the student noticed four problems while studying with the app:

- Leaving a section by any route ticks it. Clicking Recall on the rail ticks the section you came from.
- The last section is never ticked, because you leave the topic, not the section.
- The ticks live in `localStorage` only (`node-sections-done:<id>`), so they are lost in another browser.
- The "In progress" badge measures exercises only. Reading every section never moves it, so a fully read topic looks unfinished.

The right answer of a concept question is the first option in 220 of 277 questions. The options are never shuffled, so the position gives the answer away.

"Node" is a graph word that tells the student nothing. the student chose "Topic" with a number, for example "4.2 Dot product and cross product".

## Already done in the prototype (check, do not rebuild)

- Worked example is shown as **Example**. Guided example is shown as **Try it yourself**, with "Work out each step before you reveal it." under its title.
- The "About this node" box is replaced:
  - a closed **Sources** list with every source of the topic, grouped by kind;
  - no "Reviewed" badge;
  - a draft note under the title;
  - Notation at the start of Learn section 1;
  - the exam-weight note on hover over its badge;
  - a small "Do first:" line for the prerequisites.
- The topic page title carries the topic number, and the end of a topic says "Topic done · next topic".

## Acceptance criteria

### Done marks
- [x] Only Next at the bottom of a section marks that section done. On the last section, the finish button ("Topic done · next topic", or "Back to lecture N" on the last topic) marks it done.
- [x] The rail, Back, the arrow keys and a deep link mark nothing.
- [x] In Practise, Next first steps through the tier tabs (already built). Practise is marked done when Next leaves the section.
- [x] The marks are saved in `progress.json` through the server API, next to the attempts. A mark survives a reload and another browser.
- [x] Marks found in `localStorage` are moved over once. After that `localStorage` is no longer used for them.

### Topic status
- [x] **Not started:** no section marked and no attempt saved.
- [x] **In progress:** at least one section marked done, or one attempt saved.
- [x] **Done:** every section marked done, and the latest attempt on every Core (basic tier) exercise succeeded. Extra and Exam level exercises do not hold a topic back. A topic without Core exercises needs only its sections.
- [x] Once Done, a topic stays Done. A later miss in the review queue does not take it back.
- [x] "Solid" becomes "Done" everywhere it shows: sidebar, lecture page, Home, Progress, readiness and the moment shown when a topic is finished. The badge reads "Done".
- [x] Readiness numbers that counted solid topics count done topics. Check that the Home and Progress sentences still read correctly.

### Shuffled options
- [x] The options of a concept question are shuffled each time it is shown. Feedback, the streak and the explanation still work.
- [x] The explanation in `content/nodes/lecture-7/l7-order-of-integration.md` (around line 205) that says "The last option" names the option by its content. No other explanation refers to a position (checked on 2026-10-15).

### "Topic" in visible text
- [x] Every user-visible "node" says "topic": sidebar ("0 of 9 topics done"), lecture page, Home, search, Progress, Review, Coverage, What changed, the adding-content guide page and error texts.
- [x] Code, IDs, URLs (`/node/...`), file names and the content format keep "node".
- [x] `CONTEXT.md`: Node gains the line "Shown in the app as Topic". Mastery Solid becomes Done. Worked example and guided example note their shown names.

### Checks
- [x] Unit tests: the mastery rule (each state, Core-only, stays Done), the shuffle (keeps every option, the right one stays right), and the move from `localStorage`.
- [x] Smoke tests: the rail does not mark, Next does, the finish button marks the last section, a reload keeps the marks, and the sidebar shows "topics done".
- [x] `npm run check` passes. While working, run only the checks that cover the change (`npx tsc --noEmit`, `npx vitest run <files>`, `npx playwright test <specs>`), and the full check once before the commit.

## Out of scope

- Removing the Recall section and the cards (ticket 40).
- The layout and the content rewrite (ticket 41).
