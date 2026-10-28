# 37: Sidebar navigation and Home cleanup

**What to build:** A left sidebar replaces the top menu. It lets you jump to any lecture or node in one click and shows progress per lecture. Home opens with a concrete next step and an exam readiness that is easy to read. My plan is removed, and the formula sheet is marked as work in progress.

**Blocked by:** 35 (theme tokens, and both tickets touch `src/ui/styles.css`)

**Status:** done

**Suggested model:** Claude Opus 5.5 medium.

**Read first:** `docs/pylab-review.md` (sections "Curriculum sidebar" and "Our other pages"), `docs/writing-style.md`, `src/ui/App.tsx` (top menu and routes), `src/ui/Home.tsx` (`Today`, `ProgressSection`, `Sections`), `src/ui/LecturesPage.tsx` (progress per lecture with `solidShare`), `src/ui/PlanPage.tsx`, `src/progress/plan.ts`, `server/api.ts`, `server/plan-file.ts`.

## Background

PyLab has an always-visible left sidebar with the whole curriculum. Each module shows its number, its title and "x/y levels completed", and expands to its lessons. Overall progress is pinned at the bottom. You can reach any topic in one click, and progress is always in view.

Here, navigation is a top menu: site name, search, Review with a due count, Progress, My plan and the theme toggle. Lectures and Mocks are only reachable from Home tiles.

the student's verdict on the current pages:
- **Home:** good overall, but a lot at once. "Ready when you are" is a weak opener. Exam readiness belongs at the top but is confusing. One cause: each block's right-hand value ("2 points") is the block's maximum, and it reads as if it had been earned. The section tiles are fine.
- **My plan:** feels outdated, since every date has to be entered by hand. Remove it.
- **Formula sheet:** it produces a 26-page document, which is unusable. It stays in the app but is marked as work in progress until a later decision.
- **Progress:** confusing, but its rework is parked. It keeps its place in navigation for now.

## Acceptance criteria

### Sidebar
- [x] A left sidebar on every page except the print view of the formula sheet. From top to bottom:
  - the site name
  - search
  - **Home**
  - **Review** with its due count
  - **Mocks**
  - **Progress**
  - **Lectures**
- [x] Under Lectures, each lecture shows its number, its title and "x of y nodes solid", using the same numbers as the Lectures page. A lecture expands to its visible nodes in course order, each with its state.
- [x] The current page, lecture and node are highlighted. The lecture of the open node is expanded on load. The expanded lectures are remembered across page loads in this browser.
- [x] The theme toggle sits at the bottom of the sidebar.
- [x] The top menu is removed. Its links all live in the sidebar.
- [x] The sidebar scrolls on its own when the lecture list is longer than the window. The main content keeps its reading width.
- [x] On a narrow window the sidebar collapses behind a menu button. Only this much phone support is needed.
- [x] The sidebar is a `nav` with a label. Expanding uses buttons with `aria-expanded`, and everything works with the keyboard.

### Home
- [x] "Ready when you are" is gone. With nothing started, the headline names the first node concretely (for example "Start with lecture 1: Trigonometry and the unit circle"), with the same main button. The "due" and "continue" cases keep their current logic.
- [x] Exam readiness stays at the top. It shows one total ("12 of 80 exam exercises right") and one plain sentence on what counts as right.
- [x] One row per exam topic, always visible, reads as right out of the exam exercises that exist for that topic ("3 of 12 right"), with a meter and a hint on how many were tried.
- [x] With nothing marked yet, the sentence says how to start.

Changed after review on 2026-10-14: the first version showed points per fixed exam block, with the rows behind a collapsed "By block" toggle and hidden while nothing was marked. the owner found that it hid too much. The final's sections and their weights are also not certain. Readiness now counts right exercises per topic, and the overall figure is the plain count, since the exam exercises come from past papers and their number per topic already follows how often the exam asks it. A points forecast stays with the mocks.
- [x] The section tiles stay, minus My plan. The formula sheet tile says "Work in progress".

### My plan removed
- [x] The `/plan` route, `PlanPage`, its Home tile and its menu link are removed. So are the plan API in `server/api.ts`, `server/plan-file.ts`, `src/progress/plan.ts`, and any target-date code that only the plan used.
- [x] An existing `plan.json` on disk is left in place, neither read nor deleted.
- [x] Tests that covered the plan are removed. No other test loses coverage.

### Formula sheet marked as work in progress
- [x] The formula sheet page opens with a short notice that it is work in progress and that its output is not yet a usable sheet. The builder still works as today.

### Checks
- [x] Smoke tests cover the sidebar: open a lecture, follow a node link, see the due count. They also cover the new Home opener. Existing smoke tests that used the top menu are updated.
- [x] `npm run check` passes.

## Out of scope

- Reworking the Progress page or the formula sheet (parked, see `docs/pylab-review.md`).
- The course map page (parked).
- Node page changes (tickets 35 and 36).
