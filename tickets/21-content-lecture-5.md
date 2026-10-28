# 21: Content for lecture 5: differentiability in several variables

**What to build:** The lecture 5 nodes are complete: limits and continuity in R^n (two-path test; epsilon-delta only as going-deeper), partial derivatives, higher-order derivatives and Clairaut, the tangent plane (graph and implicit surface), the directional derivative and the gradient, steepest ascent and descent, the gradient normal to level sets, the chain rule (along a path, two parameters, implicit), and the Hessian.

**Blocked by:** 03, 05, 06, 07, 12, 13

**Status:** ready-for-agent

**Suggested model:** Claude Opus 5.5 medium, GPT 5.6 Sol high or Claude Fable 5.1 thinking high. Cards may be drafted by a Claude Sonnet 5.5 subagent and checked by the main agent. The lecture 5 notes are handwritten, so reading goes to vision-capable subagents running Cursor Grok 4.6 xhigh. All PDF reading goes to such subagents, never the main context.

**Sources to use:** lecture 5 notes (limits via norms, partials as limits, tangent plane Z = f + (x - x0) f_x + (y - y0) f_y, directional derivative df(x, y; u) = a f_x + b f_y, gradient as a column vector, chain rule h'(t) = gradient f(M(t)) dot M'(t), Clairaut, Hessian H_f with determinant D), handout 14.2 to 14.6 (Definition 14.3.4 in epsilon form, the chain-rule proof, heat and wave equations are going-deeper), the assigned practice set 14.5 (items 17 and 21 have no printed answer), exercise sheet 2 exercises 3 to 6 (partials and domain, tangent planes with cone planes through the origin, directional derivative and steepest ascent, chain rule along four paths), tangent-plane and chain-rule questions from the finals in tickets 12 and 13. See `source-inventory.md`.

**Specific points:** limits in R^n and the definition of differentiability are tagged low exam weight. Tangent plane and chain rule are final blocks 1 and 2, so their exam tiers mirror those questions. The mock steepest-descent answer drops a minus sign; the exercise is handled in ticket 13, and the node's trap on the sign of steepest descent states the rule correctly. The Hessian node here introduces H_f and D; the classification test lives in lecture 6. Use the tangent-plane and gradient viewers from ticket 07; they are part of this ticket's acceptance.

## How to write the content

- Take content, notation, statements and examples from the course sources listed above. `sample-node.md` shows the target feel only. Its wording is not a template.
- Apply the "Content writing rules" in `spec.md` and the style rules (no em dashes, no forced lists of three, no "not X but Y" polish, no filler).
- Where a source has a wrong formula, teach the correct form with a trap that shows the wrong version failing. Never mention whose notes had the slip.
- Notation follows the lecture notes first (df/dx, d_x f, f_x) and names the curly-d equivalent once per node where the handout uses it.

## Acceptance criteria

- [ ] Every lecture 5 node has formal statements in the course's wording with their source, plain explanations, a notation note, and source links.
- [ ] One fully worked example per method and at least one guided example per node.
- [ ] Three to five concept or trap questions per node.
- [ ] A three-tier exercise ladder per node. Handout set 14.5 and sheet 2 exercises 3 to 6 are present with solutions, labelled per the provenance rules (handout answers get a worked solution). Every checkable result passes SymPy.
- [ ] The tangent-plane and gradient nodes embed their viewers.
- [ ] About ten cards per node, and sheet items flagged.
- [ ] Nodes that are complete are marked reviewed. Thinner ones stay draft.
- [ ] The coverage map and what-changed log are updated. `check` passes.
