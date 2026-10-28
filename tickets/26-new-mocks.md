# 26: Two new mocks in the current final format

**What to build:** Two newly written mock finals in the 2024 and 2025 six-block format, with the same difficulty, hint style, point values and minute budgets, so the student can retest without remembering answers. Each block can also be retested on its own.

**Blocked by:** 12, 20, 21, 22, 23, 24

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium or GPT 5.6 Sol high for writing the papers. Ask a second strong model (Claude Fable 5.1 thinking high, for example) to solve each paper independently before shipping, and resolve any disagreement.

**Read first:** `spec.md` (mocks and checkpoints, final format), `source-inventory.md` section 4 (current format, hints given on the papers, topic frequency), and the imported 2024 and 2025 finals in the app as the reference for style and length.

## Acceptance criteria

- [ ] Two papers, each with six blocks: level sets and tangent plane (2 points, 15 minutes); chain rule along a path (1 point, 7 minutes); two critical-point classifications including a D = 0 case with a hinted section (4 points, 20 minutes); four double integrals with a rectangle, a first-quadrant triangle, a polar disk or sector and a substitution given in the hint (6 to 7 points, about 35 minutes); a worded constrained optimisation with the boundary required (3 to 4 points, about 20 minutes); a solid between two surfaces with a sketch of a coordinate-plane cut (3 points, 20 minutes). Total 120 minutes, 20 points.
- [ ] Functions, regions and contexts differ from the real papers and from each other.
- [ ] Full solutions labelled "written for this site", rubric items per block, every checkable result passing SymPy, and independent re-solving done.
- [ ] Each block's exercises are also attached to their nodes as exam-tier exercises.
- [ ] The what-changed log is updated. `check` passes.
