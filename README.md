# Calculus Coach

A local study app for a university course, Introduction to Analysis and Calculus in Several Dimensions. It turns lecture material into short topic pages with worked examples, traps, concept questions and exercises, then tracks what you got wrong and brings it back on a schedule. Everything runs on your machine. There is no account, no cloud service and no data leaves your computer.

The course vocabulary is in `CONTEXT.md` and the full specification in `spec.md`.

## For an agent installing this app

Run these steps in the repository root and report any that fail.

1. Check `node --version` is 22 or newer. Install Node 22 if not.
2. Run `npm install`.
3. Run `npm start`. It serves the app on <http://localhost:5178/> and opens a browser. In a headless environment set `NO_OPEN=1` first, and set `PORT` if 5178 is taken.
4. Confirm the server answers: `curl http://localhost:5178/` returns the HTML page.

That is enough to use the app. Python, SymPy and Playwright are only needed to run `npm run check` (see below), not to start the app. Do not create `data/`, `sources.local.json` or `review.config.json` by hand unless the user asks. The app creates what it needs, and those files are git-ignored.

## How to use the app

Open <http://localhost:5178/>. The sidebar links every page.

- **Home** shows what to do next, your streak and what is due for review.
- **Lectures** lists the eight lectures. Each lecture holds topics. Open a topic and work through it one screen at a time with Back and Next: Learn (statements, explanations, visuals), Practise (examples, traps, concept questions, exercises) and For the sheet (items you may want on your formula sheet).
- **Exercises** is the exercise bank. Filter by lecture, tier or source and open any exercise.
- **Mark yourself.** Solutions are revealed, never graded for you. Reveal a solution, then mark the exercise right or wrong. Concept questions record your first pick.
- **Review** holds missed exercises and concept questions. They come back after 1, 3, 7 and 16 days, and you can postpone an item by a day. The page can export and import your progress as a JSON file.
- **Formula sheet** builds a one-sheet summary from the items flagged inside topics. Include, exclude, edit and reorder them, then print.
- **Mocks** runs timed mock papers assembled from the exercise bank. A saved result can be compared with earlier ones block by block.
- **Progress** shows mastery per lecture and topic, trends and how ready you are.
- **Search** finds topics, exercises and statements.
- **Coverage** and **Changes** show which course material the topics cover and what changed in the content.
- **Adding new content** explains how to add new lecture notes, sheets or past papers (same text as `content/guide/adding-content.md`).

Your progress is yours alone. A fresh clone starts with empty progress.

## Full setup (once per machine, for development)

1. Install Node 22. Python 3.13 is needed only for `npm run check`.
2. Install the JavaScript dependencies:

   ```powershell
   npm install
   ```

3. Install SymPy for Python 3.13. It is used only by the content check, never by the running app:

   ```powershell
   py -3.13 -m pip install --user -r verifier/requirements.txt
   py -3.13 -c "import sympy; print(sympy.__version__)"
   ```

   The verifier calls `py -3.13` on Windows and `python3.13` elsewhere. Set the `PYTHON` environment variable to the path of another interpreter, for example `$env:PYTHON = "C:\Python313\python.exe"`.

## Start the app

```powershell
npm start
```

This starts one local server on <http://localhost:5178/> that serves the app and its local interface, then opens the browser. Set `PORT` to use another port and `NO_OPEN=1` to skip opening the browser.

## Source links (optional, per machine)

Source references in the app open your own PDFs at the cited page when the machine has a source-link config:

```powershell
Copy-Item sources.local.example.json sources.local.json
```

Then edit the paths in `sources.local.json` if your files live elsewhere. The file maps each identifier in `content/sources.yaml` to a local file. Without it, the app still runs and shows references as plain text. Set `SOURCES_CONFIG` to read the config from another path.

## Progress and accounts

Progress is saved in Supabase, one row per account. Attempts, the first picks of concept questions, the review queue and the formula sheet draft all live in that row. There is no local progress file.

Set up once:

1. Create a project at <https://supabase.com>, then run `supabase/migrations/0001_progress.sql` in its SQL editor. It creates the `progress` table with row level security, so each account only reaches its own row.
2. Sign-in is email and password. In the Supabase dashboard, open Authentication, Sign In / Providers, Email, and turn off "Confirm email", so a new account works right away without any email being sent.
3. Copy `.env.example` to `.env` and fill in the project URL and the anon public key (Project settings, API). The server reads `.env` on start, so `npm start` is all you type. `.env` is git-ignored.

The app offers a sign-in dialog; it works without signing in, but nothing is saved. Every progress request carries the signed-in account's token, and the server holds no service key. The anon key is public by design. Never put the service role key here. Without the two variables the server refuses to start.

Each save names the version it read. If you use two devices and one saves in between, the server reads again and retries, so no save is lost.

Moving old progress over: sign in, then use the review page's import with your old `progress.json`.

Besides attempts and the review queue, the file can hold an optional addition. A saved mock paper result may carry `blocks`, the points earned per exam block, so a later result can be compared block by block. Older files without it still load. Files from the time the course had recall cards may still hold `cardRatings` and card reviews. They are ignored.

A new account starts with empty progress. The review page can export and import progress as a JSON file.

Missed exercises and missed concept questions come back on an expanding interval. The default intervals are 1, 3, 7 and 16 days, and postpone is 1 day. Copy `review.config.example.json` to `review.config.json` to change them. `REVIEW_INTERVALS` (a comma-separated list of day counts) and `REVIEW_POSTPONE_DAYS` override that file for one run. `REVIEW_CONFIG` points at a config file somewhere else.

## Check everything

```powershell
npm run check
```

This runs the typechecker, the test suite, the content check and the browser smoke tests, and exits non-zero on any failure. The content check loads every file in `content/`, validates it, runs each verification record through SymPy, lints the site text and lists the exercises that are waiting for a second-pass review. The smoke tests (`npm run smoke`, in `tests/smoke/`) start the app on port 5199 and drive it in a real browser with Playwright. On Windows they use the installed Microsoft Edge. Elsewhere, run `npx playwright install chromium` once. Later tickets add their tests to the same command.

## Writing content

- Adding new material after a lecture: `content/guide/adding-content.md`, also shown in the app as "Adding new content".
- File format: `docs/content-format.md`.
- Writing rules: `docs/writing-style.md`.

## Never committed

Progress data (`data/`, `progress*.json`), the per-machine source-link config (`sources.local.json`), `review.config.json`, build output and local agent files (`.claude/`, `audit-*.md`) are git-ignored (see `.gitignore`). Source PDFs are never copied into the project, so a fresh clone shows source references as plain text until you add your own `sources.local.json`.

## Sharing your own copy

Before pushing a fork, run `git ls-files` and check that no personal progress, paths or notes are tracked. The tracked example configs (`sources.local.example.json`, `review.config.example.json`) contain placeholders only.
