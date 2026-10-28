# 33: Progress page and moments for finishing things

**What to build:** Rename the error dashboard to Progress and show wins next to mistakes. Add a visible moment when something is finished: an attempt saved, a node turning solid, a review session cleared, a mock scored.

**Blocked by:** 29, 31

**Status:** done

**Suggested model:** Claude Sonnet 5.5 xhigh. Write the trend, "beaten" and streak rules test-first with the `tdd` skill (the streak's one skipped day and time zones are easy to get wrong). Use the `apple-design` skill for the moments when something is finished.

**Read first:** `src/ui/DashboardPage.tsx`, `src/progress/dashboard.ts`, `src/ui/marking.tsx`, `src/ui/ReviewPage.tsx`, `src/ui/MockSessionPage.tsx`, `spec.md` stories on the error tracker, review queue and mocks.

## Background

The only progress screen is a list of mistakes called "Error dashboard". Saving an attempt or rating a card shows a grey line of text. Clearing the queue ends on "Nothing is due." A mock ends on "12 out of 20" with no comparison.

## Acceptance criteria

- [ ] "Error dashboard" becomes **Progress** in the header, on Home and in the page title. The old route redirects.
- [ ] Progress shows wins first (nodes solid, exercises right by tier, mock bests), then **Patterns to fix**.
- [ ] Each of the seven mistake types shows its trend over the last two weeks against the two weeks before. A type that drops to zero across at least five recent attempts is shown as beaten.
- [ ] Saving an attempt that turns a node solid animates the badge from In progress to Solid and names what it adds to the exam-readiness meter (ticket 31).
- [ ] Clearing the review queue shows a finish screen: how many items were reviewed, a daily streak that allows one skipped day without breaking, and the days left to the final on 30 November 2026.
- [ ] A mock result shows each block's change against the previous attempt at the same paper or format, and marks a personal best.
- [ ] Completion feedback is sized to the event: a small tick for one step, a larger moment for a solid node or a cleared queue. No sounds by default.
- [ ] No leaderboards and no points for basic-tier exercises. Nothing is gated by streaks or scores.
- [ ] Dashboard and progress tests are updated, and `npm run check` passes.
