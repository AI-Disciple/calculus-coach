# 28: Final integration and content check

**What to build:** A full pass over the finished first build. Every check is green. Solutions that cannot be machine-checked get a second-pass review. The site text obeys the student's writing rules. The smoke tests cover the whole loop. A fresh copy of the app starts clean for someone else.

**Blocked by:** 01 to 26

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium for the review. Delegate the second-pass review of prose and sketch solutions per lecture to separate strong-model subagents (GPT 5.6 Sol high or Claude Fable 5.1 thinking high), each reporting disagreements back. Use the `unslop` skill or the copywriting rules for the text review.

**Read first:** `spec.md` in full, the what-changed log, the coverage view.

## Acceptance criteria

- [ ] `check` passes: content bundle, SymPy verification, server tests and browser smoke tests.
- [ ] Every solution marked not machine-checkable has been reviewed by a second model, and any errors found are fixed and logged.
- [ ] The coverage map has no unmapped items. Each excluded item has a reason.
- [ ] Every node is reviewed or deliberately left as draft, and the remaining drafts are listed for the student.
- [ ] Site text review: no em dashes, no forced lists of three, no "not X but Y" polish, no filler, no prose mentioning slips in the student's notes. Fixes to his own wording are typo and grammar only. Proposed wording changes are shown to the student in chat rather than landed.
- [ ] Smoke tests cover: opening a node, revealing a solution, ticking steps, the mistake in the dashboard, the item in the review queue, building a formula sheet, starting and finishing a mock, copy for AI.
- [ ] A fresh clone with no progress file, no plan file and no source-link config starts, shows empty progress, an empty plan page and source references as text.
- [ ] The README explains the one-command start, the progress file location setting, the source-link config and the plan file.
