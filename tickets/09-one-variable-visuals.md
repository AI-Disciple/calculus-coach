# 09: One-variable visuals

**What to build:** Visual blocks for the foundation lectures: a curve-sketching builder that layers domain, sign charts, asymptotes, extrema, concavity and inflection onto a graph; limit behaviour near a point and at infinity; Newton iterations with tangent lines; Taylor polynomial overlays of increasing order; and a Riemann sum slider.

**Blocked by:** 07

**Status:** ready-for-agent

**Suggested model:** Claude Sonnet 5.5 xhigh.

**Read first:** `spec.md` (stories 34 and 35; depth and weighting for the foundation weak spots), `source-inventory.md` sections 4 and 6 (midterm template, weak spots such as endpoint extrema, inflection versus extremum, radical domains).

## Acceptance criteria

- [ ] Curve-sketching builder: given a function declared in the node file, toggle layers for domain (including radical domains and unions of intervals), intercepts, vertical, horizontal and oblique asymptotes, holes, sign of f', sign of f'', extrema including endpoints, and inflection points where f'' changes sign.
- [ ] Limit viewer: behaviour from the left and right of a point and at infinity, zoomable.
- [ ] Newton viewer: iterations with tangent lines and the iterate values, starting point adjustable.
- [ ] Taylor viewer: function with Taylor polynomials of chosen order at a chosen point, including a composition such as ln(cos x).
- [ ] Riemann viewer: left, right and midpoint sums with an n slider and the sum value shown against the integral.
- [ ] Each visual is demonstrated on a stand-in or test node and covered by one smoke test.
- [ ] Displayed values are checked against SymPy for at least one configuration per visual.
