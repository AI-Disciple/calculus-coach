# 31: A calm Home with progress and section buttons

**What to build:** A short Home page that shows progress and offers one clear button per section. The full node list moves one level deeper to a page per lecture.

**Blocked by:** 29

**Status:** done

**Suggested model:** Claude Sonnet 5.5 xhigh (UI work with a demanding look). Use the `apple-design` skill. Write the exam-readiness calculation as a pure function in `src/progress/` test-first with the `tdd` skill, since a wrong meter would mislead.

**Read first:** `src/ui/Home.tsx`, `src/ui/App.tsx`, `src/progress/dashboard.ts` (mastery), `src/content/schema.ts` (`examBlocks`, `examBlock` on exercises), `spec.md` stories 1 to 7 and the final format in Implementation Decisions.

## Background

Home is about 6,000px: eight lectures and all 73 nodes, each with a grey "Not started" badge. It feels overwhelming, and nothing says what matters most or how far along you are. The header also offers "Review" with no due count.

## Acceptance criteria

- [x] Home fits on about one laptop screen and has three parts, in this order:
  1. **Today:** the due count with a main button to start the review, and "Continue with <node>".
  2. **Progress:** an exam-readiness meter with one bar per exam block, each filling toward its point value (for example "Double integrals: 2.5 of 6.5 points"). The fill comes from the latest attempts on exam-tagged exercises of that block. The meter is labelled as an estimate from your own marking and never acts as a grade or a gate. Lectures 1 to 3 get a separate foundations bar, since the final does not examine them directly.
  3. **Sections:** large buttons or tiles for Lectures, Review, Mocks, Progress (the error review, see ticket 33), Formula sheet and My plan, each with one line of status (for example "4 due", "Best mock 11 of 20").
- [x] A Lectures page lists the eight lectures as compact cards, each with its title and a bar for the share of nodes that are solid.
- [x] A page per lecture (`/lecture/:n`) lists its nodes with mastery. "Not started" gets no badge, since no badge already means not started, and only "In progress" and "Solid" show.
- [x] The header shows the due count next to Review.
- [x] No ordering, locking or recommendation depends on the plan file or on dates (spec Out of Scope).
- [x] The empty state (no attempts yet) still reads as an invitation and is not a wall of zeros.
- [x] `tests/smoke/home.spec.ts` is updated, and a smoke test covers a lecture page.
