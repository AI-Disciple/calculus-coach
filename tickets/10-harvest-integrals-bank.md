# 10: Harvest the integrals exercise bank

**What to build:** The 140 exercises of the existing integrals revision page are normalised into the app's exercise model, re-verified with SymPy, tiered, tagged and attached to the lecture 3 node stubs, so that integration practice exists before the lecture 3 content is written. The old page's numeric answer grader is not reused.

**Blocked by:** 06

**Status:** ready-for-agent

**Suggested model:** GPT 5.6 Sol high or Claude Opus 5.5 medium (re-verification, catching wrong answers). Extract the data with a script, not by reading the HTML into context. If the HTML must be inspected, use a subagent running Cursor Grok 4.6 xhigh that reports back compactly.

**Read first:** `spec.md` (exercise, solution and verification model; content writing rules), `source-inventory.md` section 7 (the integrals page exposes its `BANK` and `CATS` data to Node; quality caveat: its claims of re-derivation were never checked).

## Acceptance criteria

- [ ] All 140 exercises are imported with statement, solution and hints rewritten into the exercise record. Cleanup of wording follows the writing rules; mathematics is unchanged unless verification shows it is wrong.
- [ ] Each exercise is attached to the right lecture 3 node (substitution, parts, trigonometric techniques, partial fractions, improper integrals, area, densities and so on) and given a tier (basic, standard, exam level).
- [ ] Provenance label is "written for this site" unless the exercise traces to an official source, in which case it carries that source.
- [ ] Every checkable result has a verification record and passes SymPy. Wrong answers in the bank are corrected, and the correction is noted in the what-changed log (not in node prose).
- [ ] Duplicates and near-duplicates are merged.
- [ ] The coverage map and what-changed log are updated. `check` passes.
