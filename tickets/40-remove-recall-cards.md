# 40: Remove the recall cards, keep what is useful in them

**What to build:**
- The 741 recall cards leave the course. Subagents sort them in stacks, and every card that teaches something the topic does not already test becomes a concept question or an exercise.
- The Recall section, the card deck and the card scheduling are removed.
- The review queue holds missed exercises and concept questions answered wrong at the first pick.

**Blocked by:** 39 (it edits `NodePage.tsx` and the progress file format, and it shuffles concept question options, so a new question can put its right answer anywhere).

**Blocks:** 41 (its text rollout rewrites every content file, so the new questions from this ticket must already be in them).

**Status:** done

**Suggested model:** Claude Opus 5.5 medium for the main chat. Sonnet for the sorting and writing subagents.

**Read first:** `AGENTS.md`, `CONTEXT.md` (Card, Deck, Review queue, Concept question), `docs/content-format.md` (card, concept-question, exercise, the "Your turn" rule), `docs/writing-style.md`, `content/guide/adding-content.md` (verification records), `src/ui/ReviewPage.tsx`, `src/progress/progress.ts`. Do not read the content files into the main context. Subagents read them.

## Background

2026-10-15: flashcard recall does not suit a maths course. The cards mostly repeat a formula or a sentence from the topic just read. What helps is doing exercises, plus a few concept questions to lock in the theory. There is also a handwritten formula sheet in the exam, so repeating formulas from memory matters less.

| Lecture | Cards | Concept questions today |
| --- | --- | --- |
| 1 | 96 | 33 |
| 2 | 130 | 66 |
| 3 | 133 | 54 |
| 4 | 90 | 32 |
| 5 | 100 | 30 |
| 6 | 72 | 20 |
| 7 | 60 | 17 |
| 8 | 60 | 25 |

## How to run it

The main chat makes the decisions and reviews. It does not write content or large code itself. Subagents do the reading and the writing, and they report back compactly. This keeps the large files out of the main context.

1. **Backup.** Tag the commit this ticket starts from as `cards-backup`. The old card code and the card content are recovered from that tag only. There is no archive file.
2. **Stacks.** Make one stack per lecture. Split lectures 2, 3 and 5 into two stacks by topic, so a stack holds at most about 70 cards. That gives 11 stacks.
3. **Sorting subagents** (read only, may run in parallel). One per stack. For each card it reads the card and its topic's existing concept questions and exercises, then gives one verdict:
   - **concept question:** the card tests a condition, a trap or a distinction that no concept question or exercise of the topic covers yet. The subagent drafts the question in the content format: question, three or four options with one right one, plausible wrong options, and an explanation.
   - **exercise:** the card asks for a computation the topic's exercises do not cover. The subagent drafts the statement, the tier, a solution and a verification record.
   - **discard:** the card only asks to repeat a formula or a sentence, or it duplicates something the topic already tests.

   Each verdict carries a one-line reason. The subagent writes its report to a file in the scratchpad (card ID, verdict, reason, draft) and returns only the counts and the report's path.
4. **Review.** The main chat reads the reports and checks every keep. Is it really new? Is the maths right? Does it follow `docs/writing-style.md`? It drops or fixes drafts, and it spot-checks some discards. Expect most cards to be discarded. Extra material is not the aim. A topic should gain only what it lacks. Record the final counts per lecture in this ticket.
5. **Writing subagents** (one per lecture, each with its own files). They insert the approved concept questions into the "Your turn" of the section they belong to, and the approved exercises into the right tier. They delete every `::: card` block of the lecture. Then they run `npx tsx scripts/check-content.ts` and the verifier for the new exercises, and report back. The main chat reviews each diff.
6. **Code subagent** for the removal and the review queue (see the criteria). The main chat reviews the diff and runs the checks.

## Result of the sorting

| Lecture | Cards | Concept questions added | Exercises added | Discarded |
| --- | --- | --- | --- | --- |
| 1 | 96 | 7 | 2 | 87 |
| 2 | 130 | 8 | 2 | 120 |
| 3 | 133 | 2 | 2 | 129 |
| 4 | 90 | 1 | 0 | 89 |
| 5 | 100 | 5 | 0 | 95 |
| 6 | 72 | 5 | 0 | 67 |
| 7 | 60 | 2 | 0 | 58 |
| 8 | 60 | 1 | 0 | 59 |
| Total | 741 | 31 | 6 | 704 |

## Acceptance criteria

### Content
- [ ] Every card has a verdict in a report, and the counts per lecture are recorded here.
- [ ] Approved concept questions and exercises are in their topics and follow the content format and the writing style. New exercises carry a verification record, or are marked not machine-checkable with a reason.
- [ ] No `::: card` block is left in `content/`.

### Removal
- [ ] The `card` block type is gone from the schema, the bundle, the content check and `docs/content-format.md`.
- [ ] The Recall section kind is gone (`nodeSections.ts`, the rail, the section icon). A topic's sections are Learn, Practise and For the sheet.
- [ ] `CardDeck.tsx`, `cardSwipe.ts`, `cardDeck.css`, the card scheduling and the card tests and smoke specs are deleted. Nothing else imports them.
- [ ] Old card reviews in `progress.json` stay in the file and are ignored. Loading an old file works.

### Review queue
- [ ] A concept question's first pick is saved in `progress.json` (question ID, time, right or wrong).
- [ ] A concept question answered wrong at the first pick joins the review queue on the same spaced schedule as a missed exercise. Answering it right in review moves it on the schedule, just as a right exercise attempt does.
- [ ] The Review page shows due concept questions next to due exercises. The sidebar's due count includes them.
- [ ] Review page texts no longer mention cards.

### Docs
- [ ] `CONTEXT.md`: Card and Deck are removed. Section kinds are Learn, Practise and For the sheet. The review queue holds missed exercises and missed concept questions.
- [ ] `content/guide/adding-content.md` no longer asks for cards.

### Checks
- [ ] Unit tests for the first-pick record and the queue. Smoke tests: a wrong first pick puts the question in Review, and no topic shows a Recall section.
- [ ] `npm run check` passes. While working, run only the checks that cover the change, and the full check once before each commit.

## Out of scope

- The layout and the text rewrite (ticket 41). New questions follow the writing rules already in `docs/writing-style.md`. Ticket 41 adds the list and display rules later.
