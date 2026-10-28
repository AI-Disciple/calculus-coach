# 30: Right and wrong feedback on concept questions

**What to build:** When an option in a concept question is chosen, the app shows at once whether it was right, marks the right option, and then shows the explanation.

**Blocked by:** 29 (for the accent color and motion tokens; the logic itself can land first)

**Status:** ready-for-agent

**Suggested model:** Claude Sonnet 5.5 high (small and well-defined), test-first with the `tdd` skill.

**Read first:** `src/ui/blocks.tsx` (`ConceptQuestion`), `src/content/schema.ts` (the `correct` flag on options), `spec.md` story 35 (visuals explain and never grade).

## Background

Content marks 277 options as `correct`, but `ConceptQuestion` never reads the flag. Choosing a wrong option shows the explanation and nothing else. This is self-check feedback on a multiple-choice question, not grading of paper work, so it fits the spec.

## Acceptance criteria

- [ ] On press, the chosen option turns green if it is right or red if it is wrong, and the right option is marked as well. Color is never the only signal: each option also gets an icon and text for screen readers.
- [ ] A wrong pick can be retried. The explanation shows after the first pick, and the first pick counts as the result.
- [ ] A short motion: a soft settle when right and a small sideways shake when wrong. With reduced motion only the color changes.
- [ ] Each node tracks a run of right first picks ("3 in a row") for the current visit. Nothing is saved to the progress file and nothing is locked.
- [ ] A question whose content has no `correct` option keeps today's behaviour, and the content check warns about it.
- [ ] A smoke test covers a right pick and a wrong pick.
