# 38: Exam topic label on the exercises that count

**What to build:** Every exercise with `examBlock` carries a small label that names its exam topic. Home's start sentence points at the label.

**Blocked by:** 37 (exam readiness as counts per topic)

**Status:** done

**Suggested model:** Claude Opus 5.5 medium.

**Read first:** `docs/writing-style.md`, `src/progress/readiness.ts` (`EXAM_BLOCKS`, `examReadiness`), `src/ui/blocks.tsx` (`ExerciseView`, the `exercise-meta` row), `src/ui/Home.tsx` (`ProgressSection`, `READINESS_SENTENCE`, `topicRows`), `src/progress/course.ts` (`CourseExerciseRef`).

## Background

Home's exam readiness counts, per exam topic, the exercises with `examBlock` that you got right. The node page shows no sign of which exercises those are. The "Exam level" tab is not the same set: it also holds about 28 untagged exercises (midterm topics and old final layouts), and two tagged exercises sit in the Standard tab. So the student cannot tell which marks move the counts. Home works around it with the sentence "Mark an exam exercise on a node from lecture 4 on, and these counts start to move."

## Acceptance criteria

### Label
- [x] Every exercise with `examBlock` shows a label in its meta row that names the topic, for example "Exam topic: Critical points". The topic title comes from `EXAM_BLOCKS`, so Home and the label always use the same words.
- [x] The label shows wherever an exercise is shown with its meta row: node pages (Practise, every tier tab) and the Review page.
- [x] Exercises without `examBlock` show no label, including the untagged ones in the Exam level tab.
- [x] The label is plain text in the badge style, readable in both themes, and not a link.

### Home sentence
- [x] The sentence shown while nothing is marked points at the label, for example "Only exercises with an exam topic label count here. Mark one on a node from lecture 4 on, and these counts start to move."

### Checks
- [x] Smoke tests: a tagged exercise shows its label, an untagged Exam level exercise does not.
- [x] `npm run check` passes.

## Out of scope

- Which exercises carry `examBlock`. The 2026-10-14 audit decided that, and the borderline exercises stay untagged.
- Moving exercises between tiers, or changing what the Exam level tab holds.
- A page that lists one topic's exam exercises, with links from the Home rows. the owner decided on 2026-10-14 to leave it out for now.
- Mock sessions, which show exam questions in their own layout.
