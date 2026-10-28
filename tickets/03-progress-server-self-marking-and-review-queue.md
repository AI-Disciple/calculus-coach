# 03: Progress server, self-marking, review queue and flashcards

**What to build:** the student reveals a solution, ticks each step right or wrong (or marks a short drill as right, partly right or wrong), gives each wrong step a mistake type and an optional note, and the attempt is saved to a JSON file on disk through the local server. Missed exercises then come back in a single review queue on an expanding-interval schedule, together with due flashcards that he rates again or got it. Items can be postponed. Each exercise shows its attempt history.

**Blocked by:** 02

**Status:** ready-for-agent

**Suggested model:** Claude Sonnet 5.5 high, test-first with the `tdd` skill.

**Read first:** `spec.md` (self-marking, error tracker and review queue; progress storage and local server; testing decisions seam 2; stories 50 to 57, 60 to 62, 83 to 87).

## Acceptance criteria

- [ ] The local server exposes a progress interface. Progress is one JSON file whose location is configurable (for example a synced folder). Writes are atomic, so a crash mid-write cannot corrupt the file. Fresh installs start with empty progress.
- [ ] Export and import of progress work from the app.
- [ ] An attempt records timestamp, exercise, tier, per-step results (right, wrong, skipped) or a whole-exercise result (right, partly right, wrong), a mistake type per wrong step from the fixed list in the spec, and an optional note.
- [ ] Multi-step and exam-tier exercises use per-step marking. Short drills use whole-exercise marking.
- [ ] Each exercise shows its attempt history.
- [ ] Review queue: a missed exercise enters the queue after a short first interval, the interval grows on success and resets on a miss. Interval values are configuration. Any item can be postponed. A review page works through due items.
- [ ] Card blocks render on the node. Cards enter the same queue and are rated again or got it with the same mechanism.
- [ ] Progress survives content edits because it is keyed by stable identifiers. Progress for an identifier that no longer exists is kept and ignored, not deleted.
- [ ] Seam 2 tests drive the server through its public interface against a temporary data folder: recording attempts with step results and mistake types, due items, interval growth, reset on a miss, postpone, card ratings, atomic writes, export and import, clean first start.
- [ ] Smoke test added: open a node, reveal a solution, tick steps with a mistake type, see the item in the review queue.
