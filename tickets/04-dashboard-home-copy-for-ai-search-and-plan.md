# 04: Error dashboard, home page, copy for AI, search and my plan

**What to build:** the student sees his mistakes by type, node, lecture and over time, and can click through to the exercises behind each number. The home page shows lectures 1 to 8 with mastery badges, a "continue where I left off" entry, the number of due review items and quick links to mocks, the formula sheet, the dashboard and the review queue. Every exercise has a "copy for AI" button. A search finds nodes, formulas and exercises, including by exercise number. A separate, optional "my plan" page shows his own target dates against what is done.

**Blocked by:** 03

**Status:** ready-for-agent

**Suggested model:** Claude Sonnet 5.5 high. Composer 2.5 fast is fine for the plan page and search plumbing.

**Read first:** `spec.md` (stories 1 to 12, 54, 58, 59, 76 to 79; self-marking section; my plan section).

## Acceptance criteria

- [ ] Dashboard aggregates mistakes by type, by node, by lecture and over time, each linking to the exercises behind it.
- [ ] Mastery badge per node (not started, in progress, solid), derived from recent standard-tier and exam-tier attempts and open review items. It is display only and never an access rule.
- [ ] Home page: lectures 1 to 8 in order with their nodes and badges, continue where I left off, due count, quick links (mock and formula-sheet links may point at placeholder pages until ticket 05 lands).
- [ ] Copy for AI produces plain text with LaTeX preserved: statement, official solution, steps marked wrong with their mistake types, a clearly marked placeholder for the student's own working, and an instruction asking the AI to explain the mistake using the course's notation. The instruction text is proposed to the student in chat before it is final (his writing rules apply).
- [ ] Search across node titles, formal statements, sheet items and exercises. Typing an exercise number such as 14.7.3 or "sheet 2 exercise 7" finds it.
- [ ] My plan: one optional JSON file, separate from progress and git-ignored, holding target dates per lecture or node. The page shows planned versus done. When the file is missing, the page shows an empty explanatory state and the rest of the app runs normally. The plan never affects order, recommendations, badges or the review queue.
- [ ] Seam 2 tests cover dashboard aggregates, derived mastery, and the plan being optional and isolated.
- [ ] Smoke tests added: a mistake marked on a node appears in the dashboard; copy for AI puts the expected text on the clipboard.
