# 11: Harvest the midterm app questions and cards, and the curve write-ups

**What to build:** The 116 multiple-choice questions and 83 flashcards of the old midterm app, and the 12 curve discussions, 12 drills and write-up order of the curves revision page, are normalised into concept questions, cards and exercises, re-verified, and attached to the lecture 1 to 3 node stubs. The six written papers of the midterm app are left for ticket 14.

**Blocked by:** 03, 06

**Status:** ready-for-agent

**Suggested model:** Claude Sonnet 5.5 xhigh for questions and cards. Use a strong reasoning model (GPT 5.6 Sol high or Claude Opus 5.5 medium) for re-deriving the 12 curve discussions. Extract data with scripts where possible. Any reading of the HTML files goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Read first:** `spec.md` (stories 38, 46, 60 to 63; content writing rules), `source-inventory.md` sections 6 and 7.

## Acceptance criteria

- [ ] Multiple-choice questions become concept or trap questions with an explanation after the answer, attached to the right nodes. Wrong or ambiguous ones are fixed or dropped, with the reason in the what-changed log.
- [ ] Cards are attached to nodes, rewritten into the course's notation, and checked for correctness. Stale exam-date or countdown text is dropped.
- [ ] The 12 curve discussions become exam-tier exercises on the curve-sketching node with rubric steps in the exam's order (domain first, derivative, sign chart, asymptotes, intercepts, inflection if asked, conclusion). Each is re-derived. Checkable parts carry verification records.
- [ ] The eight-step write-up order and the 10-item checklist are kept as content on the curve-sketching node (worked-method or sheet-item blocks), reworded only for typos and grammar.
- [ ] The 12 drills become basic or standard exercises with whole-exercise marking.
- [ ] The coverage map and what-changed log are updated. `check` passes.
