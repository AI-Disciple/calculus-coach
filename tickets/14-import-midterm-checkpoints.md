# 14: Import the midterm checkpoints

**What to build:** The real past midterms (2021, 2022, 2024, 2025, 2026 and Midterm Mock 1) are available as optional 90-minute checkpoint tests for lectures 1 to 3, each with its key where one exists. The two predicted papers from the old midterm app are added as extra checkpoints labelled as written for practice. Questions also attach to the lecture 1 to 3 node stubs with their sources.

**Blocked by:** 05, 06

**Status:** done

**Suggested model:** Claude Opus 5.5 medium or GPT 5.6 Sol high. The 2024 paper is a photo and the 2025 key is handwritten. All PDF and HTML reading goes to vision-capable subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Read first:** `spec.md` (mocks and checkpoints; stories 73 to 75), `source-inventory.md` section 4 (midterm duplicates, the midterm template, key errors) and section 7 (the six papers inside the midterm app).

## Acceptance criteria

- [x] Each unique midterm is imported once (the 2022 midterm and its stripped-header copies are one paper).
- [x] The 2026 paper uses its official typeset key. The 2022 paper and Mock 1 use their keys. The 2025 key has three errors: keep the exercises, state each discrepancy in the solution and show the verified value. The 2021 and 2024 papers get solutions written for this site.
- [x] The midterm app's written solutions for Midterm 2025, 2024, 2022 and Mock 1 are used only as raw material and re-verified.
- [x] Sketch questions carry rubric steps in the exam's order and are marked not machine-checkable. Every checkable result passes SymPy.
- [x] Checkpoints are labelled optional and never gate anything.
- [x] The coverage map and what-changed log are updated. `check` passes.
