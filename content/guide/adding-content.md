# Adding new content

Follow these steps each time new course material arrives: notes or board photos from a lecture, a new exercise sheet, a past paper or the graded midterm. The same text is the agent instructions in the repository (`AGENTS.md` points here) and the "Adding new content" page in the app.

Large files are read by subagents. The handout, exercise sheets, past papers, lecture notes and board photos never go into the main agent's context. Hand each file to a subagent with a vision-capable model and ask it for a compact report written to a scratch folder outside the project. The main agent works from the reports.

## 1. Drop the files

Source files stay wherever you keep them and are never copied into the project.

- Keep lecture notes, board photos, sheets, past papers and the graded midterm in any folder you like. `sources.local.json` records each path.

Then register each new file once:

1. Add an entry to `content/sources.yaml` with a stable identifier, a title, a kind and its page numbering. Use `lecture-notes-6` for lecture 6 notes and `lecture-6-board-1` for board photos, following the existing entries.
2. Add the identifier and the file's path to `sources.local.example.json` and to your own `sources.local.json`.
3. Before registering a past paper, check whether it is a byte-identical copy of one already registered (`Get-FileHash`). A duplicate is listed in `source-inventory.md` and gets no second entry.

The step is done when `npm run content` reports no unknown source and the new source opens from a topic in the app.

## 2. Transcribe

Give each new file to a subagent with a vision-capable model. For a handwritten PDF it renders every page to an image with PyMuPDF (Python 3.13 has it installed), splits tall pages into strips and reads them. For a board photo it crops the photo into tiles when the writing is small. Ask it to return, for each page or photo, every item in order as `page | kind | short label`, where kind is definition, theorem, method, formula, example, exercise, remark or figure. Ask it also for the notation used, every formula that looks wrong as written, with its correct form, and anything it could not read.

The step is done when every page of the file has its items listed and every illegible passage is named.

## 3. Compare against the existing topics

For each transcribed item, find the topic that teaches it: search `content/nodes/` and the coverage view. Sort the items into three groups.

- Items a topic already covers. Check that the topic's formal statement uses the professor's wording and notation. Add the new source to the topic's `sources` and to the formal statement's `source` where the wording now comes from the lecture.
- Items that extend a topic: a new example, a new condition, a different method. Add them to that topic as blocks.
- Items no topic covers. Add a topic to the lecture (see `docs/content-format.md`), with its prerequisites, sources, exam weight and `status: draft`.

Lectures 6 to 8 were placed before those lectures took place. When the lecture teaches a topic's material in a different lecture or order, move the topic file to the right `lecture-N` folder and change `lecture` and `order`. Keep its `id`, because progress is keyed by it. Then remove the sentence about provisional placement from the topic's `examWeightNote`.

A formula that is wrong in the notes is taught in its correct form, with a trap that shows the wrong version failing. Topic text never mentions whose notes had the slip. The slip is recorded in `source-inventory.md` and in the change log entry.

The step is done when every transcribed item sits in one of the three groups and each group's edits are made.

New exercises go into their topic file and nowhere else. The Exercise bank page at `/exercises` lists every exercise of every topic, so it needs no separate entry.

## 4. Apply the notation and the writing rules

- Notation follows the professor's notes first: df/dx, f_x and f'. Show the curly-d form wherever a source uses it, and name the equivalence once per topic in its `notation` field.
- All text follows `docs/writing-style.md`: no em dashes, no forced lists of three, no "not X but Y" polish, no filler, full sentences with one claim per clause.
- Every exercise has a provenance label and a verification record, as `docs/content-format.md` describes. Where the verified value disagrees with an official key, keep the exercise, state the discrepancy and show the verified value.

## 4a. Preview the sections

The topic page shows a topic one section at a time. Print the sections of each topic you added or changed:

```powershell
npm run sections -- l6-critical-points
npm run sections -- 6
```

The argument is a topic id or a lecture number. Each section lists its blocks and its "Your turn". If the automatic grouping puts a block in the wrong place, add `::: section` blocks with a `title` to that topic, starting with the first block. Add them only where the grouping is wrong, because they replace the automatic Learn grouping for that topic. `docs/content-format.md` describes the rules and the markers.

## 5. Update the coverage map

Add every transcribed item to `content/coverage.yaml` under its source, with an `id` that is unique within the source, a short `label`, the `page` when the source has pages, and either the `nodes` that teach it or `excluded` with a reason in a full sentence. A source with no items of its own (an answer key, a duplicate edition) goes under `skipped` with a reason. The content check fails on an item with neither topics nor a reason, on a topic that does not exist and on a registered source missing from the map.

The coverage view in the app shows the result by source and by topic. Check there that no topic you touched is left without items.

## 6. Mark the change in the log

Add an entry at the top of `content/changes.yaml`:

```yaml
- date: "2026-10-15"
  title: Lecture 6 notes
  text: |
    Added the lecture 6 notes. The second derivative test now uses the professor's wording, and the D = 0 topic has two new examples.
  nodes: [l6-second-derivative-test, l6-degenerate-case]
```

`text` says what was added or changed in full sentences. `nodes` lists every topic whose file changed. The "What changed" page shows the entries newest first.

## 7. Re-run verification and the check

```powershell
npm run content
npm run check
```

`npm run content` loads all content, runs every verification record through SymPy and lints the text. It lists the exercises marked not machine-checkable, which a person or a second agent then reviews. `npm run check` adds the typechecker, the unit tests and the browser smoke tests. The update is finished when both pass.

## Folding in the graded midterm

When you have the graded midterm copy:

1. Register it as a source (step 1) and transcribe it (step 2), including the marks per question and the examiner's comments.
2. Compare it with the official key, `midterm-2026-key`, question by question, and list where points were lost with the mistake type from the fixed list in `CONTEXT.md`.
3. Map each lost point to the lecture 1 to 3 topic that teaches the skill. Raise that topic's depth: add guided examples, traps for the exact slip and exercises at the basic and standard tiers.
4. Record the findings in `source-inventory.md` section 6 (weak spots), map the paper's questions in the coverage map, and add a change log entry that names the topics you deepened.

The graded copy tunes depth and emphasis only. It never locks, reorders or hides a topic.
