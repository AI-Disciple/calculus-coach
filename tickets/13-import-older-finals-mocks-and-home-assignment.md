# 13: Import the older finals, the mocks and the 2022 home assignment

**What to build:** Final 2021, Final 2022, the January 2023 retake, Mock 2022, Mock exam 1 and Mock exam 2 are available as mocks presented as printed (their own structure and duration), and the 2022 home assignment is available as a set of exercises. Their questions attach to the relevant nodes with source tags. Green, potentials, arc length and probability questions are kept but tagged out of current scope.

**Blocked by:** 05, 06

**Status:** done

**Suggested model:** Claude Opus 5.5 medium or GPT 5.6 Sol high. Several files are scans or handwritten keys. All PDF reading and transcription goes to vision-capable subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Read first:** `spec.md` (mocks and checkpoints; known errors in sources), `source-inventory.md` section 4 (unique papers and their duplicates, key errors).

## Acceptance criteria

- [x] Each unique paper is imported once. Byte-identical duplicates are not imported twice. Mock exam 2 is the 2022 final without the probability exercise, so it reuses those exercise records.
- [x] Where a key exists it is used and labelled "official key", with working added where only a final answer is given. Otherwise solutions are "written for this site".
- [x] Known key errors are handled by keeping the exercise, stating the discrepancy in the solution and showing the verified value: the 2022 final average-value line (correct value 2 sin 1 - sin 2), the dropped minus sign in the mock steepest-descent answer. Mock 2022 solutions come from a different edition with changed constants, so they are not used as the key for the questions; solutions are rewritten for the printed constants.
- [x] Out-of-scope questions are kept, tagged out of current scope, and excluded from node attachment.
- [x] The home assignment's guided derivation of the Hessian test, its polynomials, box, families, distance and modelling problems attach to lecture 6 nodes.
- [x] Every checkable result passes SymPy. The coverage map and what-changed log are updated. `check` passes.
