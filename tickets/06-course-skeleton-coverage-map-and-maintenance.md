# 06: Course skeleton, coverage map and content-maintenance instructions

**What to build:** Every node of lectures 1 to 8 exists as a draft stub with its title, order, prerequisites, sources and exam-weight tag, so the whole course is navigable before content is written. A coverage map lists every kept handout section, every lecture-note item, every exercise-sheet exercise and every past-exam question template, each mapped to a node or marked excluded with a reason, and a coverage view shows it. The app has a "what changed" log and a visible "adding new content" page, and the repository has the same instructions for agents.

**Blocked by:** 02

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium (judgment on how the course splits into nodes). Delegate all reading of large files (the handout PDF, sheets, past papers, board photos) to subagents running Cursor Grok 4.6 xhigh (Cursor Grok 4.5 high fast is fine for small lookups) that report back compactly. Never read those files in the main context.

**Read first:** `spec.md` (course map, depth and weighting, content maintenance, stories 15, 21, 22, 82, 88 to 92), `source-inventory.md` in full. Use the `writing-for-agents` skill for the instructions.

## Acceptance criteria

- [ ] Node stubs for lectures 1 to 8 follow the spec's course map. Split topics into nodes that are each teachable on one page. Lecture 4 starts with the supporting space geometry. Lectures 6 to 8 placement is marked provisional. Excluded chapters get no nodes.
- [ ] Each stub has prerequisites by node reference, source references into the registry from ticket 02 (handout sections with correct PDF pages, lecture notes, board photos, sheets), an exam-weight tag from the spec's weighting (low exam weight for limits and continuity in R^n and the definition of differentiability), and status draft. Optional nodes (probability with multiple integrals) are marked optional.
- [ ] The stand-in sample node no longer appears as a real course node. It may remain as a hidden fixture for tests.
- [ ] Coverage map covers: every kept handout section (chapters 1 to 8, 9.1, 9.8, 10.1, 10.4, 12, 14, 15 with 15.4 excluded with a reason), every lecture-note item for lectures 1 to 5 and the lecture 4 boards, every exercise in sheet 2, sheet 3, Exo0, Exo1 and the functions-and-graphs booklet sections, the handout's assigned practice sets, and every past-exam question template. Each item maps to one or more nodes or is excluded with a reason.
- [ ] The content check fails on unmapped items, on mappings to unknown nodes, and on nodes with missing prerequisites references.
- [ ] Coverage view in the app shows the map by source and by node.
- [ ] What-changed log: a content file of entries (date, what was added or changed, nodes touched) rendered as a page. This ticket adds the first entry.
- [ ] Repository agent instructions and an in-app page with the same content cover: where to drop new files, how to transcribe handwritten notes and board photos (vision-capable subagents), how to compare against existing nodes, how to apply notation and the writing rules, how to mark changes in the log, how to update the coverage map, how to re-run verification and the check, how to fold in the graded midterm, and the rule that large files are read by subagents.
- [ ] Each unique past paper is referenced once (duplicates listed in the source inventory).
