# 18: Content for lecture 3, part 1: real powers, Taylor and integration basics

**What to build:** These lecture 3 nodes are complete at full depth: real powers, Taylor polynomials (including composition such as ln(cos x)), Riemann sums, antiderivatives and the fundamental theorem, substitution, and integration by parts.

**Blocked by:** 03, 05, 06, 09, 10, 14

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. All reading of PDFs and images goes to subagents running Cursor Grok 4.6 xhigh that report back compactly.

**Sources to use:** lecture 3 notes (x^a = e^(a ln x), Taylor with a "small" remainder and the worked sqrt(1 + y) expansion then y = x^2, Riemann sum definition, FTC with example, integration by parts, substitution with int_0^1 sqrt(1 - y^2) via y = sin x), Exo1 (Taylor order 2), handout 7.1 to 7.3 and 8.1 to 8.7 as relevant, the integral questions from the midterms imported in ticket 14 (for example t ln^2 t by parts and x = sinh t giving argsinh 1). See `source-inventory.md`.

**Specific points:** the sqrt(1 - y^2) example has value pi/4, because the antiderivative of cos(2x)/2 is sin(2x)/4; teach the correct value with a trap, never mentioning a slip. Taylor composition substitutes u = cos x - 1 into ln(1 + u). Traps on the antiderivative of ln x and on sign slips. Midterm integral sets name the method, so exercises name it at the basic and standard tiers. Use the Taylor and Riemann viewers from ticket 09. The harvested integrals from ticket 10 are part of the ladders.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only. Its wording is not a template.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong formula, teach the correct form with a trap that shows the wrong version failing. Never mention whose notes had the slip.
- Notation follows the lecture notes first and names the curly-d equivalent once per node where a source uses it.

## Acceptance criteria

- [ ] Every node in scope has formal statements in the course's wording with their source, plain explanations, a notation note where relevant, and source links.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node, covering the specific points above.
- [ ] A three-tier exercise ladder per node, with the exam tier mirroring the midterm integral set. Every exercise has a solution with a provenance label. Every checkable result passes SymPy.
- [ ] About ten cards per node, and sheet items flagged.
- [ ] Too-deep material sits in going-deeper blocks. Nothing important from the sources is dropped.
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
