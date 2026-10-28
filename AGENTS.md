# Agent instructions

- Adding or changing course content (new lecture notes, board photos, sheets, past papers, the graded midterm): follow `content/guide/adding-content.md` step by step. The app shows the same file as its "Adding new content" page.
- Large source files (the handout, sheets, past papers, lecture notes, board photos) are read by subagents that report back compactly. They never enter the main context.
- Vocabulary: `CONTEXT.md`. Content file format: `docs/content-format.md`. Writing rules for all site text: `docs/writing-style.md`. Where every source lives and its known errors: `source-inventory.md`.
- `npm run check` must pass before a commit.
