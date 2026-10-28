# 25: Sheet 2 modelling problems with scaffolded solutions

**What to build:** The long modelling problems of exercise sheet 2 (exercises 12 to 19: golf-ball profit, Cobb-Douglas watches, the lactating mammal model, the box of volume 1/2 and the box in x^4 + y^4 + z^2 <= 1, aircraft fuel, portfolio, three numbers summing to 27, xyz = 1 closest to the origin, aircraft design with nested optimisation, cycling time trial) are present on the lecture 6 nodes as exam-tier exercises with scaffolded solutions that the student can reveal stage by stage.

**Blocked by:** 22

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium or GPT 5.6 Sol high (long modelling with many places for errors). All PDF reading goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Read first:** `spec.md` (story 49; exercise and verification model; content writing rules), `source-inventory.md` section 3. Check which of these overlap the home assignment and the finals already imported in ticket 13 and reuse those records instead of duplicating.

## Acceptance criteria

- [ ] Every sheet 2 exercise from 12 to 19 is present once, with its full statement, attached to the right lecture 6 node, tier exam level, provenance "written for this site" unless a key exists.
- [ ] Each solution is scaffolded: modelling the quantity, setting up the constraint or domain, finding candidates, checking the boundary, concluding in a full sentence. Each stage is a rubric step for self-marking.
- [ ] Every checkable result passes SymPy.
- [ ] The coverage map and what-changed log are updated. `check` passes.
