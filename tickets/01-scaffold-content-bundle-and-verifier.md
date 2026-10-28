# 01: Scaffold, content bundle and SymPy verifier

**What to build:** The app starts with one command and opens on localhost with a calm, minimal look in light and dark themes, rendering mathematics with KaTeX. Node content lives in Markdown files with structured front matter and typed blocks. A loader reads the whole content bundle and a validator checks it. A SymPy verifier runs the verification records of solutions. A single `check` command runs every test the project has. The home page lists lectures 1 to 8 with the nodes found in the bundle, proven on one stub node.

**Blocked by:** None. Can start immediately.

**Status:** ready-for-agent

**Suggested model:** Claude Sonnet 5.5 high (scaffolding and plumbing, test-first). Composer 2.5 fast is fine for the pure setup steps.

**Read first:** `spec.md` (glossary, node and content model, exercise and verification model, testing decisions, technology) in the project folder. Use the `tdd` skill for the content-bundle seam, the `domain-modeling` skill for the glossary file, and `minimalist-ui` or `design-taste-frontend` for the look.

## Acceptance criteria

- [ ] The project folder is a git repository with a sensible ignore file (progress data, plan file, source-link config and build output are never committed).
- [ ] A project glossary file is created from the spec's glossary, so later tickets and agents share the vocabulary (lecture, node, block, formal statement, exercise, tier, step, provenance label, mistake type, review queue, card, sheet item, mock, checkpoint, plan, source, coverage map, draft).
- [ ] React with Vite. One command installs nothing extra and starts both the app and the local server, then opens on localhost. Works in PowerShell on Windows.
- [ ] Light and dark themes with a toggle that persists. Generous space around formulas. KaTeX renders inline and display maths.
- [ ] Node file format defined: front matter with lecture, order within the lecture, title, prerequisites by node reference, sources, exam-weight tag, status (draft or reviewed). Body is a free sequence of typed blocks (at least: formal statement, plain explanation, worked example, guided example, concept question, trap, exercise, card, sheet item, going-deeper, visual). Exercises, cards and sheet items carry identifiers that stay stable across edits.
- [ ] The exercise record supports: statement, tier, topic tags, optional exam-block tag, optional past-exam source (year, paper, question, points), solution, provenance label, optional rubric steps, optional verification record, optional discrepancy note (official key disagrees with the verified value), optional exercise number matching the handout or sheet (for example 14.7.3 or sheet 2 exercise 7).
- [ ] The content-bundle seam (seam 1 in the spec) loads the real content as a whole and fails on: schema errors, unknown prerequisite references, duplicate identifiers, exercises without a provenance label, checkable solutions without a verification record, verification records that fail, and style violations in site text (em dashes at minimum, plus a documented list of banned filler phrases). Tests exercise this seam only, not internal shapes.
- [ ] SymPy is installed for Python 3.13 on this machine and the install step is documented. The verifier runs each verification record (expression and expected value or form) and reports failures with the exercise identifier. Records can be marked as not machine-checkable, and those are listed for a second-pass review.
- [ ] One stub node in lecture 1 passes the check and appears on the home page under lecture 1. Lectures with no nodes still show.
- [ ] `check` runs the content seam and the verifier and exits non-zero on any failure. Later tickets add their tests to the same command.
