# 05: Formula-sheet builder and mock and checkpoint engine

**What to build:** Sheet items flagged in nodes collect into a formula-sheet builder where the student includes, excludes, edits and reorders them by lecture and topic, sees a rough size indicator and prints a clean draft to copy by hand. A mock engine runs timed papers: the six-block final format with its minute budgets, papers presented as printed with their own structure, and 90-minute midterm checkpoints. After a mock he self-marks each block with rubric items, sees his total out of 20, and the results feed the error tracker and the review queue. Everything is optional and gates nothing.

**Blocked by:** 03

**Status:** done

**Suggested model:** Claude Sonnet 5.5 high.

**Read first:** `spec.md` (formula sheet; mocks and checkpoints; stories 64 to 75).

## Acceptance criteria

- [x] Sheet items carry a category (formula, trap, recognition rule) and render in their node.
- [x] Builder lists all sheet items by lecture and topic. Include, exclude, edit and reorder are saved through the progress interface. A rough size indicator estimates whether the draft fits one sheet. A print view gives a clean layout.
- [x] Mock and checkpoint content format defined: paper metadata (source, year, duration, total points, allowed material), blocks with point values, minute budgets, exercises and per-block rubric items. A paper can be marked as current format or presented as printed. Exercises inside papers use the same exercise record, so they can also be attached to nodes without duplication.
- [x] Mock page: start, a timer with the per-block budgets visible, the paper, then per-block self-marking with rubric items and mistake types, then a total out of 20 (or the paper's own total).
- [x] Mock and checkpoint results are recorded as attempts and feed the dashboard and the review queue.
- [x] Checkpoints are listed separately from mocks and labelled optional.
- [x] One small stand-in paper proves the flow and is marked stand-in so the import tickets replace it.
- [x] The content check validates papers (blocks sum to the total, every exercise has a provenance label).
- [x] Smoke tests added: build a formula sheet and open its print view; start and finish a mock with self-marking.
