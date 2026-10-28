# 12: Import the 2024 and 2025 finals

**What to build:** The two finals in the current six-block format are available as timed mocks with per-block rubrics, and each of their questions is also attached to the relevant lecture 4 to 8 node stub with its source (year, paper, question number, points). Neither paper has a key, so solutions are written for this site and verified.

**Blocked by:** 05, 06

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium or GPT 5.6 Sol high (full exam solutions where a sign error would hurt). The 2025 paper is a photo scan with no text layer, so transcription goes to a vision-capable subagent running Cursor Grok 4.6 xhigh that reports the statements back. All PDF reading goes to such subagents, never the main context.

**Read first:** `spec.md` (mocks and checkpoints; exercise model; content writing rules), `source-inventory.md` section 4 (file names, current final format, hints given on the papers).

## Acceptance criteria

- [ ] Both papers are transcribed exactly, including the hints printed on them, with blocks, points and minute budgets as printed.
- [ ] Each question has a full solution in the structure the exam rewards (domain or setup first, justification of each step, conclusion stated), labelled "written for this site", with rubric items per block.
- [ ] Every checkable result has a verification record that passes SymPy. Sketch questions (the solid with its cut) carry a written description of the expected sketch and are marked not machine-checkable.
- [ ] Each question is attached to its node with its past-exam source, without duplicating the exercise record.
- [ ] The stand-in paper from ticket 05 is removed.
- [ ] The coverage map lists every question template of both papers. The what-changed log is updated. `check` passes.
