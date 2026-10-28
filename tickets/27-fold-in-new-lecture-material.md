# 27: Fold in new lecture material (repeat per lecture)

**What to build:** After each new lecture (6 on 15 October, 7 on 5 November, 8 on 12 November) or when the graded midterm copy arrives, the new material is transcribed and folded into the app by following the content-maintenance instructions written in ticket 06. The nodes take on the professor's wording and notation, new or changed topics are added, lecture placement is confirmed, and the what-changed log tells the student what is new. Run this ticket once per new batch of material. Do not start until the material exists in the course folders.

**Blocked by:** 06, plus the content ticket for the lecture concerned (22 for lecture 6, 23 for lecture 7, 24 for lecture 8; 15 to 19 for the graded midterm).

**Status:** ready-for-agent once the material exists

**Suggested model:** Claude Opus 5.5 medium for comparing and rewriting nodes. Transcription of handwritten notes, board photos or the graded copy goes to vision-capable subagents running Cursor Grok 4.6 xhigh that report back compactly. Never read those files in the main context.

**Read first:** the in-repository content-maintenance instructions from ticket 06, `spec.md` (content writing rules; known errors in sources), `source-inventory.md`.

## Acceptance criteria

- [ ] The new material is registered as sources and transcribed. Source files are never copied or edited.
- [ ] Each affected node is compared against the new material. Formal statements switch to the professor's wording and notation where they differ, and the provisional marks on wording are removed for that lecture.
- [ ] Topics taught but missing are added, topics placed in the wrong lecture are moved, and nothing already in the app is dropped without a reason in the log.
- [ ] Wrong formulas in the new notes are taught correctly with a trap and recorded in the source inventory, never mentioned in node prose.
- [ ] For the graded midterm: the mistakes are mapped to foundation nodes, and the extra depth they call for is added there (story 93).
- [ ] The coverage map, the what-changed log (listing every node touched) and the verification all pass. `check` passes.
