---
id: l2-monotonicity-extrema
lecture: 2
order: 5
title: "Sign of f', critical points and extrema"
prerequisites: [l1-derivative-rules]
sources:
  - { source: handout, section: "5.1", page: 107 }
  - { source: handout, section: "5.2", page: 111 }
  - { source: lecture-notes-2, page: 2 }
  - { source: sheet-1, page: 2 }
  - { source: functions-and-graphs, page: 26 }
  - { source: functions-and-graphs, page: 27 }
  - { source: midterm-app }
examWeight: high
examWeightNote: The sketch is worth 6 of the 20 midterm points.
status: reviewed
notation: |
  \(f'\) and \(\frac{d}{dx}\) name the same derivative.
---

::: section
title: Local extrema and critical values
:::

::: formal-statement
kind: definition
title: Local maximum and local minimum
source: { source: handout, section: "5.1", page: 107 }
text: |
  The point \(\bigl(x, f(x)\bigr)\) is a **local maximum** if there is an open interval \((a, b)\) with \(a < x < b\) such that \(f(x) \ge f(z)\) for every \(z\) in \((a, b)\). It is a **local minimum** if \(f(x) \le f(z)\) for every \(z\) in that interval. A **local extremum** is a local maximum or a local minimum.
:::

::: plain-explanation
text: |
  The comparison stays inside some open interval around the point. Values far away can be larger than a local maximum, and smaller than a local minimum.
:::

::: formal-statement
kind: theorem
title: Fermat's theorem
source: { source: handout, section: "5.1", page: 108 }
text: |
  If \(f\) has a local extremum at \(x = a\) and \(f\) is differentiable at \(a\), then
  \[
  f'(a) = 0.
  \]
:::

::: plain-explanation
text: |
  At an interior local maximum or local minimum where the derivative exists, the tangent is horizontal. The symbol \(f'(a)\) is \(\frac{d}{dx}f(x)\) evaluated at \(a\), and that value is \(0\).
:::

::: formal-statement
kind: definition
title: Critical value
source: { source: handout, section: "5.1", page: 108 }
text: |
  A **critical value** of \(f\) is any \(x\) for which

  - \(f'(x) = 0\), or
  - \(f'(x)\) is undefined.

  A critical value need not be an extremum. For \(f(x) = x^{3}\),
  \[
  f'(0) = 0,
  \]
  and \(f'(x) = 3x^{2}\) stays positive on both sides of \(0\), so the sign of \(f'\) does not change.
:::

::: plain-explanation
text: |
  The candidates are the zeros of \(f'\) and the points where \(f'\) fails to exist. The sign of \(f'\) on the two sides then decides a local maximum, a local minimum, or neither.
:::

::: going-deeper
title: How many critical points
text: |
  A polynomial of degree \(n\) has a derivative of degree \(n - 1\), so it has at most \(n - 1\) critical points.
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(x^3\). Switch on the sign of \(f'\) and see that \(f'\) is positive on both sides of \(0\), although \(f'(0) = 0\).
params:
  f: "x^3"
  xmin: -2
  xmax: 2
  layers: [slope-sign]
:::

::: key-points
text: |
  - At a local extremum where \(f\) is differentiable, \(f'(a) = 0\).
  - A critical value is an \(x\) where \(f'(x) = 0\) or \(f'(x)\) is undefined. A critical value need not be an extremum, as \(f(x) = x^{3}\) at \(0\) shows.
:::

::: concept-question
id: l2-monotonicity-extrema.q-ea5379f8
question: |
  What are the critical points of \(f(x) = x^{4} - 4x^{2} + 1\)?
options:
  - text: |
      \(x = 0\) (local maximum, value \(1\)) and \(x = \pm\sqrt{2}\) (minima, value \(-3\)).
    correct: true
  - text: |
      \(x = 0\) only (minimum).
  - text: |
      \(x = \pm 2\) (minima) and \(x = 0\) (maximum).
  - text: |
      \(x = \pm\sqrt{2}\) only.
explanation: |
  The derivative is
  \[
  f' = 4x(x^{2} - 2),
  \]
  so the critical points are \(0\) and \(\pm\sqrt{2}\). The second derivative is
  \[
  f'' = 12x^{2} - 8.
  \]

  - At \(x = 0\), \(f'' = -8 < 0\), a local maximum with value \(1\).
  - At \(x = \pm\sqrt{2}\), \(f'' > 0\), local minima with value \(-3\).
:::

::: section
title: First derivative test
:::

::: formal-statement
kind: theorem
title: First derivative test
source: { source: handout, section: "5.2", page: 111 }
text: |
  Suppose \(f'(a) = 0\) and \(f'\) exists near \(a\).

  - If \(f'\) changes from positive on the left of \(a\) to negative on the right, then \(a\) is a local maximum.
  - If \(f'\) changes from negative on the left to positive on the right, then \(a\) is a local minimum.
  - If \(f'\) has the same sign on both sides, then \(a\) is neither a local maximum nor a local minimum.
:::

::: plain-explanation
text: |
  - A change from positive to negative means the graph rises and then falls, so the point is a local maximum.
  - A change from negative to positive means the graph falls and then rises, so the point is a local minimum.
  - The same sign on both sides means the graph keeps its direction through the point.
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(x^3 - 3x\). Switch on the sign of \(f'\) and the extrema. Then restrict to a closed interval to see the endpoints compete with the critical points.
params:
  f: "x^3-3x"
  xmin: -3
  xmax: 3
  layers: [slope-sign, extrema]
:::

::: worked-example
title: First derivative test for a cubic
problem: |
  Find the local extrema of \(f(x) = x^{3} - x\).
solution: |
  The derivative is
  \[
  f'(x) = 3x^{2} - 1.
  \]
  It vanishes when \(x^{2} = \frac{1}{3}\), so the critical points are \(x = \pm \frac{\sqrt{3}}{3}\). Factor
  \[
  f'(x) = 3\left(x - \frac{\sqrt{3}}{3}\right)\left(x + \frac{\sqrt{3}}{3}\right).
  \]

  - For \(x < -\frac{\sqrt{3}}{3}\), both factors are negative, so \(f'(x) > 0\).
  - Between the two roots, \(f'(x) < 0\).
  - For \(x > \frac{\sqrt{3}}{3}\), \(f'(x) > 0\).

  The sign changes from positive to negative at \(x = -\frac{\sqrt{3}}{3}\), so that point is a local maximum. The value is
  \[
  f\left(-\frac{\sqrt{3}}{3}\right) = \frac{2\sqrt{3}}{9}.
  \]
  The sign changes from negative to positive at \(x = \frac{\sqrt{3}}{3}\), so that point is a local minimum. The value is
  \[
  f\left(\frac{\sqrt{3}}{3}\right) = -\frac{2\sqrt{3}}{9}.
  \]
:::

::: guided-example
title: First derivative test for a quadratic
problem: |
  Use the first derivative test on \(y = x^{2} - x\).
steps:
  - |
    The derivative is \(y' = 2x - 1\), so \(y' = 0\) at \(x = \frac{1}{2}\).
  - |
    - For \(x < \frac{1}{2}\), \(y' < 0\).
    - For \(x > \frac{1}{2}\), \(y' > 0\).

    The sign changes from negative to positive.
  - |
    That change decides a local minimum. The value is
    \[
    y\bigl(\frac{1}{2}\bigr) = \frac{1}{4} - \frac{1}{2} = -\frac{1}{4}.
    \]
:::

::: trap
text: |
  The minimum of \(f(x) = \frac{x^{2}}{x^{2} + 9}\) at \(x = 0\) carries the label inflection. The derivative is
  \[
  f'(x) = \frac{18x}{(x^{2} + 9)^{2}}.
  \]
  The denominator is positive for every real \(x\), so

  - for \(x < 0\), \(f'(x) < 0\),
  - for \(x > 0\), \(f'(x) > 0\).

  The derivative changes from negative to positive. That sign change decides a local minimum, and \(f(0) = 0\). An inflection is a change of concavity. The point \(x = 0\) is an extremum.
:::

::: trap
text: |
  For \(f(x) = x^{3}\),
  \[
  \begin{aligned}
  f'(0)&=0,\\
  f'(x)&=3x^{2},\\
  f'(-1)&=3,\\
  f'(1)&=3.
  \end{aligned}
  \]
  The derivative is positive on both sides of \(0\). The first derivative test gives neither a local maximum nor a local minimum. The values sit on both sides of \(f(0) = 0\):
  \[
  f(-1) = -1, \qquad f(1) = 1.
  \]
:::

::: key-points
text: |
  - If \(f'(a) = 0\) and \(f'\) changes from positive to negative at \(a\), then \(a\) is a local maximum. If \(f'\) changes from negative to positive, then \(a\) is a local minimum.
  - If \(f'\) has the same sign on both sides, then \(a\) is neither.
  - The usual slip calls \(x = 0\) a local extremum of \(f(x) = x^{3}\) because \(f'(0) = 0\). The derivative \(3x^{2}\) is positive on both sides of \(0\), so \(0\) is neither a local maximum nor a local minimum.
:::

::: concept-question
id: l2-monotonicity-extrema.q-d164f7cb
question: |
  For \(f(x) = \frac{x^{2}}{x^{2} + 9}\), what is true at \(x = 0\)?
options:
  - text: |
      Global minimum, \(f(0) = 0\).
    correct: true
  - text: |
      Global maximum, \(f(0) = 1\).
  - text: |
      Inflection point.
  - text: |
      Vertical asymptote.
explanation: |
  The derivative is
  \[
  f' = \frac{18x}{(x^{2} + 9)^{2}},
  \]
  which is negative for \(x < 0\) and positive for \(x > 0\). The function decreases then increases, so \(x = 0\) is a minimum with value \(0\).
:::

::: concept-question
id: l2-monotonicity-extrema.q-336a4e9b
question: |
  What are the local extrema of \(f(x) = x^{3} - 3x^{2} - 9x + 5\)?
options:
  - text: |
      Local maximum at \(x = -1\) (value \(10\)), local minimum at \(x = 3\) (value \(-22\)).
    correct: true
  - text: |
      Local minimum at \(x = -1\) (value \(10\)), local maximum at \(x = 3\) (value \(-22\)).
  - text: |
      Local maximum at \(x = 1\), local minimum at \(x = -3\).
  - text: |
      No local extrema.
explanation: |
  The derivative is
  \[
  f' = 3(x + 1)(x - 3).
  \]
  It is

  - positive on \((-\infty, -1)\),
  - negative on \((-1, 3)\),
  - positive on \((3, \infty)\).

  So \(x = -1\) is a local maximum, with \(f(-1) = 10\), and \(x = 3\) is a local minimum, with \(f(3) = -22\).
:::

::: concept-question
id: l2-monotonicity-extrema.q-6da3647c
question: |
  For \(f(x) = x^{3} - 3x^{2} + 3x\), what is \(x = 1\)?
options:
  - text: |
      Neither a local maximum nor a local minimum.
    correct: true
  - text: |
      A local minimum.
  - text: |
      A local maximum.
  - text: |
      Not a critical point.
explanation: |
  The derivative
  \[
  f'(x) = 3(x - 1)^{2}
  \]
  is zero only at \(x = 1\), so \(1\) is a critical point. It is positive for \(x < 1\) and for \(x > 1\), so \(f'\) does not change sign. It is never negative, but that alone does not make \(1\) a minimum. The first derivative test gives neither a local maximum nor a local minimum. Indeed
  \[
  f(0) = 0 < f(1) = 1 < f(2) = 2.
  \]
:::

::: exercise
id: l2-monotonicity-extrema.basic-5-2-1
number: "5.2.1"
tier: basic
topics: [extrema]
statement: |
  Find all critical points of \(y = x^{2} - x\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  The derivative is
  \[
  y' = 2x - 1,
  \]
  so the only critical point is \(x = \frac{1}{2}\).

  - For \(x < \frac{1}{2}\), \(y' < 0\).
  - For \(x > \frac{1}{2}\), \(y' > 0\).

  The sign changes from negative to positive, so \(x = \frac{1}{2}\) is a local minimum. The value is
  \[
  y\bigl(\frac{1}{2}\bigr) = -\frac{1}{4}.
  \]
provenance: handout-answer
verification:
  checks:
    - expr: diff(x**2 - x, x).subs(x, Rational(1, 2))
      expected: "0"
    - expr: (x**2 - x).subs(x, Rational(1, 2))
      expected: -Rational(1, 4)
    - expr: sign(diff(x**2 - x, x).subs(x, 0))
      expected: "-1"
    - expr: sign(diff(x**2 - x, x).subs(x, 1))
      expected: "1"
:::

::: section
title: Endpoints of the domain
:::

::: formal-statement
kind: method
title: Endpoints of the domain
source: { source: handout, section: "6.1", page: 119 }
text: |
  On a closed end of the domain, compare the **endpoint** value with the values inside the domain. Take \(f(x) = \sqrt{x^{2} - 1}\). The domain is
  \[
  (-\infty, -1] \cup [1, +\infty).
  \]
  Then \(f(\pm 1) = 0\) and \(f(x) \ge 0\) wherever \(f\) is defined, so both endpoints are minima. On the interior,
  \[
  f'(x) = \frac{x}{\sqrt{x^{2} - 1}}.
  \]
  This derivative is never \(0\) there, because the numerator vanishes only at \(x = 0\), which lies outside the domain. As \(x\) approaches \(1\) from the right, and as \(x\) approaches \(-1\) from the left, \(|f'(x)|\) grows without bound. These minima are endpoints.
:::

::: plain-explanation
text: |
  Fermat's theorem uses a derivative at an interior point. Here \(f'\) exists on each open piece of the domain and has no zero, so the interior has no critical point. The height \(0\) at each endpoint is the smallest value of \(f\), and the unbounded derivative matches a vertical tangent there.
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(\sqrt{x^2-1}\). Switch on the domain to see where the graph exists, and look at the height \(0\) at \(x = \pm 1\).
params:
  f: "sqrt(x^2-1)"
  xmin: -3
  xmax: 3
  layers: [domain]
:::

::: key-points
text: |
  - On a closed end of the domain, compare the endpoint value with the values inside the domain.
  - For \(f(x) = \sqrt{x^{2} - 1}\), \(f(\pm 1) = 0\) and \(f \ge 0\), so both endpoints are minima, and \(f'\) has no zero on the interior.
:::

::: concept-question
id: l2-monotonicity-extrema.q-244910ff
question: |
  What is the behaviour of \(f(x) = (1 - x^{2})^{1/4}\) at the endpoints \(x = \pm 1\)?
options:
  - text: |
      \(f = 0\) there, with vertical tangents.
    correct: true
  - text: |
      \(f \to +\infty\) there.
  - text: |
      \(f = 1\) there, with horizontal tangents.
  - text: |
      \(f\) is undefined there.
explanation: |
  At \(x = \pm 1\) the inside vanishes, so \(f = 0\). The derivative is
  \[
  f' = \frac{-x}{2(1 - x^{2})^{3/4}},
  \]
  which blows up as \(x\) approaches \(\pm 1\), so the curve meets the axis vertically.
:::

::: exercise
id: l2-monotonicity-extrema.standard-5-2-3
number: "5.2.3"
tier: standard
topics: [extrema]
statement: |
  Find all critical points of \(y = x^{3} - 9x^{2} + 24x\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  The derivative is
  \[
  y' = 3x^{2} - 18x + 24 = 3(x - 2)(x - 4).
  \]
  The critical points are \(x = 2\) and \(x = 4\).

  - For \(x < 2\), \(y' > 0\).
  - For \(2 < x < 4\), \(y' < 0\).
  - For \(x > 4\), \(y' > 0\).

  - The sign changes from positive to negative at \(x = 2\), a local maximum, with value \(y(2) = 20\).
  - The sign changes from negative to positive at \(x = 4\), a local minimum, with value \(y(4) = 16\).
provenance: handout-answer
verification:
  checks:
    - expr: diff(x**3 - 9*x**2 + 24*x, x).subs(x, 2)
      expected: "0"
    - expr: diff(x**3 - 9*x**2 + 24*x, x).subs(x, 4)
      expected: "0"
    - expr: (x**3 - 9*x**2 + 24*x).subs(x, 2)
      expected: "20"
    - expr: (x**3 - 9*x**2 + 24*x).subs(x, 4)
      expected: "16"
    - expr: sign(diff(x**3 - 9*x**2 + 24*x, x).subs(x, 0))
      expected: "1"
    - expr: sign(diff(x**3 - 9*x**2 + 24*x, x).subs(x, 3))
      expected: "-1"
    - expr: sign(diff(x**3 - 9*x**2 + 24*x, x).subs(x, 5))
      expected: "1"
:::

::: exercise
id: l2-monotonicity-extrema.exam-sqrt-ends
tier: exam
topics: [extrema, endpoints]
statement: |
  Find the extrema of \(f(x) = \sqrt{x^{2} - 1}\).
solution: |
  The domain is
  \[
  (-\infty, -1] \cup [1, +\infty).
  \]
  On the interior the derivative is
  \[
  f'(x) = \frac{x}{\sqrt{x^{2} - 1}}.
  \]
  The equation \(f'(x) = 0\) forces \(x = 0\), and \(x = 0\) is outside the domain, so there is no interior critical point. As \(x\) approaches \(1\) from the right, and as \(x\) approaches \(-1\) from the left, \(|f'(x)|\) grows without bound.

  The endpoint values are
  \[
  f(-1) = 0, \qquad f(1) = 0.
  \]
  Since \(f(x) \ge 0\) on the domain, both endpoints are minima. There is no interior extremum.
provenance: written-for-site
steps:
  - State the domain.
  - Compute \(f'\) on the interior and show that it has no zero in the domain.
  - Show that \(|f'|\) grows without bound at each endpoint from inside the domain.
  - Evaluate \(f(\pm 1)\) and compare with \(f \ge 0\).
  - Conclude that the endpoints are minima and that there is no interior extremum.
verification:
  checks:
    - expr: diff(sqrt(x**2 - 1), x)
      expected: x/sqrt(x**2 - 1)
    - expr: sqrt(x**2 - 1).subs(x, -1)
      expected: "0"
    - expr: sqrt(x**2 - 1).subs(x, 1)
      expected: "0"
    - expr: (x**2 - 1).subs(x, 0)
      expected: "-1"
    - expr: limit(1/Abs(diff(sqrt(x**2 - 1), x)), x, 1, dir='+')
      expected: "0"
    - expr: limit(1/Abs(diff(sqrt(x**2 - 1), x)), x, -1, dir='-')
      expected: "0"
    - expr: diff(sqrt(x**2 - 1), x).subs(x, -2)
      expected: -2/sqrt(3)
    - expr: diff(sqrt(x**2 - 1), x).subs(x, 2)
      expected: 2/sqrt(3)
:::

::: sheet-item
id: l2-monotonicity-extrema.sheet-fermat
category: formula
text: |
  If \(f\) has a local extremum at \(a\) and \(f\) is differentiable at \(a\), then
  \[
  f'(a) = 0.
  \]
:::

::: sheet-item
id: l2-monotonicity-extrema.sheet-sign
category: formula
text: |
  Where \(f'(a) = 0\) and \(f'\) exists nearby:

  - a sign change from positive to negative is a local maximum,
  - a sign change from negative to positive is a local minimum,
  - the same sign on both sides means the point is neither a local maximum nor a local minimum.
:::

::: sheet-item
id: l2-monotonicity-extrema.sheet-endpoints
category: trap
text: |
  On a closed end of the domain, compare the endpoint value. For \(\sqrt{x^{2} - 1}\), \(f(\pm 1) = 0\) and \(f \ge 0\), so both endpoints are minima, and \(f'\) has no zero on the interior.
:::

::: exercise
id: l2-monotonicity-extrema.ex-monotonicity-rational-sketch
tier: standard
topics: [extrema, curve-sketching]
statement: |
  Let \(f(x) = \dfrac{x^{2}}{x^{2} + 9}\).

  (a) Find \(f'\) and the intervals on which \(f\) is increasing and decreasing.

  (b) Find the local and global extrema of \(f\).

  (c) Find \(\lim_{x \to \pm\infty} f(x)\), and decide whether \(f\) has a global maximum.

  (d) State the range of \(f\).
solution: |
  (a) The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&=\frac{2x(x^{2} + 9) - x^{2}\cdot 2x}{(x^{2} + 9)^{2}}\\
  &=\frac{18x}{(x^{2} + 9)^{2}}.
  \end{aligned}
  \]
  The denominator is positive for every real \(x\). So

  - \(f'(x) < 0\) for \(x < 0\),
  - \(f'(x) > 0\) for \(x > 0\).

  The function is decreasing on \((-\infty, 0]\) and increasing on \([0, \infty)\).

  (b) The only critical value is \(x = 0\), where \(f'\) changes from negative to positive, so it is a local minimum, with \(f(0) = 0\). Since \(f(x) \ge 0\) for every \(x\), this is also the global minimum. The point \(x = 0\) is an extremum. An inflection is a change of concavity, so the label inflection does not describe it.

  (c) Write
  \[
  f(x) = 1 - \frac{9}{x^{2} + 9}.
  \]
  The fraction tends to \(0\) as \(x \to \pm\infty\), so \(f(x) \to 1\) in both directions, and \(y = 1\) is a **horizontal asymptote**. For every \(x\), \(\frac{9}{x^{2} + 9} > 0\), so \(f(x) < 1\). The value \(1\) is never taken, and no value close to \(1\) is the largest, so \(f\) has no global maximum.

  (d) The function is continuous, it takes the value \(0\) at \(x = 0\), and it tends to \(1\) without reaching it. By the intermediate value theorem it takes every value in \([0, 1)\), and no value outside it. The range is \([0, 1)\).
provenance: written-for-site
steps:
  - Derivative \(f'(x) = 18x/(x^{2} + 9)^{2}\) and its sign.
  - Global minimum \(0\) at \(x = 0\).
  - Limit \(1\) at both ends, never reached, so no global maximum.
  - Range \([0, 1)\).
verification:
  checks:
    - expr: diff(x**2/(x**2 + 9), x)
      expected: 18*x/(x**2 + 9)**2
    - expr: (x**2/(x**2 + 9)).subs(x, 0)
      expected: "0"
    - expr: x**2/(x**2 + 9) - (1 - 9/(x**2 + 9))
      expected: "0"
    - expr: limit(x**2/(x**2 + 9), x, oo)
      expected: "1"
    - expr: limit(x**2/(x**2 + 9), x, -oo)
      expected: "1"
:::

::: exercise
id: l2-monotonicity-extrema.ex-monotonicity-semicircle-product
tier: exam
topics: [extrema, endpoints]
statement: |
  Let \(g(x) = x\sqrt{1 - x^{2}}\) on its domain.

  (a) State the domain and find \(g'\) on the interior.

  (b) Find the intervals where \(g\) is increasing and decreasing, and the local extrema.

  (c) Describe what \(g'\) does as \(x\) approaches \(\pm 1\) from inside the domain, and find the global maximum and the global minimum of \(g\).
solution: |
  (a) The square root needs \(1 - x^{2} \ge 0\), so the domain is \([-1, 1]\). On \((-1, 1)\), the product rule gives
  \[
  \begin{aligned}
  g'(x)&=\sqrt{1 - x^{2}} - \frac{x^{2}}{\sqrt{1 - x^{2}}}\\
  &=\frac{1 - 2x^{2}}{\sqrt{1 - x^{2}}}.
  \end{aligned}
  \]

  (b) The denominator is positive on \((-1, 1)\), so the sign of \(g'\) is the sign of \(1 - 2x^{2}\). It vanishes at \(x = \pm\frac{\sqrt{2}}{2}\). The derivative is

  - negative on \(\bigl(-1, -\frac{\sqrt{2}}{2}\bigr)\),
  - positive on \(\bigl(-\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\bigr)\),
  - negative on \(\bigl(\frac{\sqrt{2}}{2}, 1\bigr)\).

  So \(g\) is decreasing, then increasing, then decreasing.

  - The sign changes from negative to positive at \(x = -\frac{\sqrt{2}}{2}\), a local minimum with value \(g\bigl(-\frac{\sqrt{2}}{2}\bigr) = -\frac{1}{2}\).
  - The sign changes from positive to negative at \(x = \frac{\sqrt{2}}{2}\), a local maximum with value \(g\bigl(\frac{\sqrt{2}}{2}\bigr) = \frac{1}{2}\).

  (c) As \(x\) approaches \(1\) from the left, or \(-1\) from the right, the numerator \(1 - 2x^{2}\) tends to \(-1\) and the denominator tends to \(0^{+}\). So \(g'\) tends to \(-\infty\) at both ends, and the graph meets the axis with a vertical tangent. The endpoint values are \(g(-1) = g(1) = 0\).

  The closed-interval candidates are the two critical values and the two endpoints, with values \(-\frac{1}{2}\), \(\frac{1}{2}\), \(0\) and \(0\). The global maximum is \(\frac{1}{2}\) at \(x = \frac{\sqrt{2}}{2}\), and the global minimum is \(-\frac{1}{2}\) at \(x = -\frac{\sqrt{2}}{2}\). The endpoints are neither.
provenance: written-for-site
steps:
  - Domain \([-1, 1]\) and \(g'(x) = (1 - 2x^{2})/\sqrt{1 - x^{2}}\).
  - Sign chart with critical values \(\pm\sqrt{2}/2\).
  - Infinite slope at both ends, endpoint values \(0\).
  - Global maximum \(1/2\) and global minimum \(-1/2\).
verification:
  checks:
    - expr: simplify(diff(x*sqrt(1 - x**2), x) - (1 - 2*x**2)/sqrt(1 - x**2))
      expected: "0"
    - expr: (x*sqrt(1 - x**2)).subs(x, sqrt(2)/2)
      expected: 1/2
    - expr: (x*sqrt(1 - x**2)).subs(x, -sqrt(2)/2)
      expected: -1/2
    - expr: (x*sqrt(1 - x**2)).subs(x, 1)
      expected: "0"
    - expr: (x*sqrt(1 - x**2)).subs(x, -1)
      expected: "0"
    - expr: sign(((1 - 2*x**2)/sqrt(1 - x**2)).subs(x, 0))
      expected: "1"
    - expr: sign(((1 - 2*x**2)/sqrt(1 - x**2)).subs(x, Rational(9, 10)))
      expected: "-1"
    - expr: sign(((1 - 2*x**2)/sqrt(1 - x**2)).subs(x, -Rational(9, 10)))
      expected: "-1"
    - expr: limit(1/Abs((1 - 2*x**2)/sqrt(1 - x**2)), x, 1, dir='-')
      expected: "0"
    - expr: limit(1/Abs((1 - 2*x**2)/sqrt(1 - x**2)), x, -1, dir='+')
      expected: "0"
:::

::: exercise
id: l2-monotonicity-extrema.handout-5-1-9
number: "5.1.9"
tier: standard
topics:
  - extrema
statement: |
  Find all local maximum and minimum points \((x, y)\) of
  \[
  f(x) =
  \begin{cases}
  x - 1 & \text{if } x < 2,\\
  x^{2} & \text{if } x \ge 2,
  \end{cases}
  \]
  by comparing function values at test points on either side of each critical value.
solution: |
  Each piece has a derivative that is never zero:

  - for \(x < 2\), \(f'(x) = 1\),
  - for \(x > 2\), \(f'(x) = 2x > 4\).

  The function jumps at \(x = 2\), so \(f'(2)\) does not exist. The only critical value is \(x = 2\).

  Compare \(f(2)\) with values on either side:
  \[
  \begin{aligned}
  f(1.9)&=0.9,\\
  f(2)&=4,\\
  f(2.1)&=4.41.
  \end{aligned}
  \]
  Here \(f(1.9) < f(2) < f(2.1)\). Every value just to the left of \(2\) is below \(1\), and every value just to the right is above \(4\). So \(f(2)\) is neither the largest nor the smallest value near \(2\).

  The function has no local maximum and no local minimum.
provenance: handout-answer
steps:
  - Both pieces have a nonzero derivative, so the only critical value is \(x = 2\), where \(f\) jumps.
  - Test points give \(f(1.9) = 0.9 < f(2) = 4 < f(2.1) = 4.41\).
  - The function has no local extremum.
verification:
  checks:
    - expr: 'diff(x - 1, x)'
      expected: '1'
    - expr: 'diff(x**2, x)'
      expected: '2*x'
    - expr: 'Piecewise((x - 1, x < 2), (x**2, True)).subs(x, Rational(19, 10))'
      expected: 'Rational(9, 10)'
    - expr: 'Piecewise((x - 1, x < 2), (x**2, True)).subs(x, 2)'
      expected: '4'
    - expr: 'Piecewise((x - 1, x < 2), (x**2, True)).subs(x, Rational(21, 10))'
      expected: 'Rational(441, 100)'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-1-10
number: "5.1.10"
tier: standard
topics:
  - extrema
statement: |
  Find all local maximum and minimum points \((x, y)\) of
  \[
  f(x) =
  \begin{cases}
  x - 3 & \text{if } x < 3,\\
  x^{3} & \text{if } 3 \le x \le 5,\\
  \dfrac{1}{x} & \text{if } x > 5,
  \end{cases}
  \]
  by comparing function values at test points on either side of each critical value.
solution: |
  The derivative of each piece is

  - \(f'(x) = 1\) for \(x < 3\),
  - \(f'(x) = 3x^{2}\) for \(3 < x < 5\),
  - \(f'(x) = -\dfrac{1}{x^{2}}\) for \(x > 5\).

  None of these is zero on its piece. The function jumps at \(x = 3\) and at \(x = 5\), so \(f'\) does not exist at those two points. The critical values are \(x = 3\) and \(x = 5\).

  At \(x = 3\):
  \[
  \begin{aligned}
  f(2.9)&=-0.1,\\
  f(3)&=27,\\
  f(3.1)&=29.791.
  \end{aligned}
  \]
  The values increase through \(3\), so \(x = 3\) is neither a maximum nor a minimum.

  At \(x = 5\):
  \[
  \begin{aligned}
  f(4.9)&=117.649,\\
  f(5)&=125,\\
  f(5.1)&=\tfrac{1}{5.1}\approx 0.196.
  \end{aligned}
  \]
  Every value to the left of \(5\) is below \(125\), because \(x^{3}\) is increasing there. Every value to the right is at most \(\tfrac{1}{5}\). So \(f(5)\) is the largest value near \(5\).

  The only local extremum is a local maximum at \((5, 125)\).
provenance: handout-answer
steps:
  - The pieces have derivatives \(1\), \(3x^{2}\) and \(-1/x^{2}\), none zero, so the critical values are the jumps \(x = 3\) and \(x = 5\).
  - At \(x = 3\) the values increase through the jump, so there is no extremum.
  - At \(x = 5\) the values on both sides are below \(f(5) = 125\), so \((5, 125)\) is a local maximum.
verification:
  checks:
    - expr: 'diff(x**3, x)'
      expected: '3*x**2'
    - expr: 'diff(1/x, x)'
      expected: '-1/x**2'
    - expr: 'Piecewise((x - 3, x < 3), (x**3, x <= 5), (1/x, True)).subs(x, Rational(29, 10))'
      expected: '-Rational(1, 10)'
    - expr: 'Piecewise((x - 3, x < 3), (x**3, x <= 5), (1/x, True)).subs(x, 3)'
      expected: '27'
    - expr: 'Piecewise((x - 3, x < 3), (x**3, x <= 5), (1/x, True)).subs(x, Rational(31, 10))'
      expected: 'Rational(29791, 1000)'
    - expr: 'Piecewise((x - 3, x < 3), (x**3, x <= 5), (1/x, True)).subs(x, Rational(49, 10))'
      expected: 'Rational(117649, 1000)'
    - expr: 'Piecewise((x - 3, x < 3), (x**3, x <= 5), (1/x, True)).subs(x, 5)'
      expected: '125'
    - expr: 'Piecewise((x - 3, x < 3), (x**3, x <= 5), (1/x, True)).subs(x, Rational(51, 10))'
      expected: 'Rational(10, 51)'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-1-12
number: "5.1.12"
tier: standard
topics:
  - extrema
statement: |
  Find all local maximum and minimum points \((x, y)\) of
  \[
  f(x) =
  \begin{cases}
  -2 & \text{if } x = 0,\\
  \dfrac{1}{x^{2}} & \text{if } x \ne 0,
  \end{cases}
  \]
  by comparing function values at test points on either side of each critical value.
solution: |
  For \(x \ne 0\) the derivative is
  \[
  f'(x) = -\frac{2}{x^{3}}.
  \]
  This is never zero. At \(x = 0\) the function is not continuous, so \(f'(0)\) does not exist. The only critical value is \(x = 0\).

  Compare \(f(0)\) with values on either side:
  \[
  \begin{aligned}
  f(-0.1)&=100,\\
  f(0)&=-2,\\
  f(0.1)&=100.
  \end{aligned}
  \]
  For every \(x \ne 0\), \(f(x) = \dfrac{1}{x^{2}} > 0 > -2\). So \(f(0) = -2\) is below every other value, and the point is a local minimum.

  The only local extremum is a local minimum at \((0, -2)\).
provenance: handout-answer
steps:
  - For \(x \ne 0\), \(f'(x) = -2/x^{3}\) is never zero, and \(f'(0)\) does not exist, so the only critical value is \(x = 0\).
  - Test points give \(f(-0.1) = 100\), \(f(0) = -2\), \(f(0.1) = 100\).
  - Every value with \(x \ne 0\) is positive, so \((0, -2)\) is a local minimum.
verification:
  checks:
    - expr: 'diff(1/x**2, x)'
      expected: '-2/x**3'
    - expr: 'Piecewise((-2, Eq(x, 0)), (1/x**2, True)).subs(x, -Rational(1, 10))'
      expected: '100'
    - expr: 'Piecewise((-2, Eq(x, 0)), (1/x**2, True)).subs(x, 0)'
      expected: '-2'
    - expr: 'Piecewise((-2, Eq(x, 0)), (1/x**2, True)).subs(x, Rational(1, 10))'
      expected: '100'
    - expr: 'sign(diff(1/x**2, x).subs(x, -1))'
      expected: '1'
    - expr: 'sign(diff(1/x**2, x).subs(x, 1))'
      expected: '-1'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-1-14
number: "5.1.14"
tier: basic
topics:
  - extrema
statement: |
  Explain why the function \(f(x) = \dfrac{1}{x}\) has no local maxima or minima.
solution: |
  The function is defined for \(x \ne 0\), and its derivative there is
  \[
  f'(x) = -\frac{1}{x^{2}}.
  \]
  A local extremum at a point where \(f\) is differentiable needs \(f'(x) = 0\). The equation \(-\dfrac{1}{x^{2}} = 0\) has no solution, because \(\dfrac{1}{x^{2}}\) is positive for every \(x \ne 0\).

  The derivative also exists at every point of the domain. The only place where it fails to exist is \(x = 0\), and \(0\) is not in the domain, so it is not a critical value of \(f\).

  So \(f\) has no critical value. The derivative is negative on \((-\infty, 0)\) and on \((0, \infty)\), so \(f\) is decreasing on each of these intervals and has no local maximum and no local minimum.
provenance: written-for-site
steps:
  - The derivative \(-1/x^{2}\) is never zero.
  - The derivative exists on the whole domain, and \(x = 0\) is not in the domain.
  - So there is no critical value and no local extremum.
verification:
  checks:
    - expr: 'diff(1/x, x)'
      expected: '-1/x**2'
    - expr: 'len(solve(Eq(diff(1/x, x), 0), x))'
      expected: '0'
    - expr: 'sign(diff(1/x, x).subs(x, -3))'
      expected: '-1'
    - expr: 'sign(diff(1/x, x).subs(x, 3))'
      expected: '-1'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-1-16
number: "5.1.16"
tier: standard
topics:
  - extrema
statement: |
  Show that a cubic polynomial can have at most two critical points. Give examples to show that a cubic polynomial can have zero, one, or two critical points.
solution: |
  Write the cubic as
  \[
  p(x) = ax^{3} + bx^{2} + cx + d, \qquad a \ne 0.
  \]
  Its derivative exists for every \(x\), and it is
  \[
  p'(x) = 3ax^{2} + 2bx + c.
  \]
  The critical points are the zeros of \(p'\). This is a quadratic polynomial, since \(3a \ne 0\), and a quadratic has at most two real zeros. So a cubic has at most two critical points.

  The discriminant of \(p'\) is
  \[
  (2b)^{2} - 4(3a)c = 4b^{2} - 12ac,
  \]
  and the number of critical points follows its sign. Three examples with \(a = 1\) show each count.

  - For \(p(x) = x^{3} + x\), \(p'(x) = 3x^{2} + 1\) is always positive, so there is no critical point.
  - For \(p(x) = x^{3}\), \(p'(x) = 3x^{2}\) is zero only at \(x = 0\), so there is one critical point.
  - For \(p(x) = x^{3} - x\), \(p'(x) = 3x^{2} - 1\) is zero at \(x = \pm\dfrac{1}{\sqrt{3}}\), so there are two critical points.
provenance: written-for-site
steps:
  - The derivative of a cubic is a quadratic, and it exists everywhere.
  - A quadratic has at most two real zeros, so there are at most two critical points.
  - The examples \(x^{3} + x\), \(x^{3}\) and \(x^{3} - x\) have zero, one and two critical points.
verification:
  checks:
    - expr: 'diff(a*x**3 + b*x**2 + c*x + d, x)'
      expected: '3*a*x**2 + 2*b*x + c'
    - expr: 'discriminant(3*a*x**2 + 2*b*x + c, x)'
      expected: '4*b**2 - 12*a*c'
    - expr: 'diff(x**3 + x, x)'
      expected: '3*x**2 + 1'
    - expr: 'len(solveset(diff(x**3 + x, x), x, Reals))'
      expected: '0'
    - expr: 'len(solveset(diff(x**3, x), x, Reals))'
      expected: '1'
    - expr: 'len(solveset(diff(x**3 - x, x), x, Reals))'
      expected: '2'
    - expr: 'diff(x**3 - x, x).subs(x, 1/sqrt(3))'
      expected: '0'
    - expr: 'diff(x**3 - x, x).subs(x, -1/sqrt(3))'
      expected: '0'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-1-17
number: "5.1.17"
tier: standard
topics:
  - extrema
statement: |
  Explore the family of functions \(f(x) = x^{3} + cx + 1\), where \(c\) is a constant. How many and what types of local extremes are there? The answer depends on the value of \(c\).
solution: |
  The derivative is
  \[
  f'(x) = 3x^{2} + c,
  \]
  and it exists for every \(x\). The sign of \(c\) decides how many zeros it has.

  **Case \(c > 0\).** Then \(f'(x) \ge c > 0\) for every \(x\). There is no critical point, \(f\) is increasing, and there is no local extremum.

  **Case \(c = 0\).** Then \(f'(x) = 3x^{2}\), which is zero only at \(x = 0\) and is positive on both sides. The point \(x = 0\) is a critical point, and the first derivative test gives neither a maximum nor a minimum. There is no local extremum.

  **Case \(c < 0\).** Put \(r = \sqrt{-c/3} > 0\), so that \(c = -3r^{2}\). Then
  \[
  f'(x) = 3x^{2} - 3r^{2} = 3(x - r)(x + r).
  \]
  The critical points are \(x = -r\) and \(x = r\). The derivative is

  - positive for \(x < -r\),
  - negative for \(-r < x < r\),
  - positive for \(x > r\).

  So \(x = -r\) is a local maximum and \(x = r\) is a local minimum. The values are
  \[
  \begin{aligned}
  f(-r)&=1 + 2r^{3},\\
  f(r)&=1 - 2r^{3}.
  \end{aligned}
  \]

  In summary, there is no local extremum for \(c \ge 0\), and for \(c < 0\) there is one local maximum and one local minimum, at \(x = \mp\sqrt{-c/3}\).
provenance: written-for-site
steps:
  - The derivative \(3x^{2} + c\) decides the cases.
  - For \(c > 0\) it never vanishes, and for \(c = 0\) it vanishes at \(0\) without changing sign. No extremum in either case.
  - For \(c < 0\) the critical points \(x = \pm\sqrt{-c/3}\) give a local maximum at the left one and a local minimum at the right one.
verification:
  checks:
    - expr: 'diff(x**3 + c*x + 1, x)'
      expected: '3*x**2 + c'
    - expr: 'factor(diff(x**3 + c*x + 1, x).subs(c, -3*r**2))'
      expected: '3*(x - r)*(x + r)'
    - expr: '(x**3 + c*x + 1).subs(c, -3*r**2).subs(x, -r)'
      expected: '1 + 2*r**3'
    - expr: '(x**3 + c*x + 1).subs(c, -3*r**2).subs(x, r)'
      expected: '1 - 2*r**3'
    - expr: 'len(solveset(3*x**2 + 1, x, Reals))'
      expected: '0'
    - expr: 'len(solveset(3*x**2, x, Reals))'
      expected: '1'
    - expr: 'len(solveset(3*x**2 - 3, x, Reals))'
      expected: '2'
    - expr: 'sign(diff(x**3 + 0*x + 1, x).subs(x, -1))'
      expected: '1'
    - expr: 'sign(diff(x**3 + 0*x + 1, x).subs(x, 1))'
      expected: '1'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-2
number: "5.2.2"
tier: basic
topics:
  - extrema
statement: |
  Find all critical points of \(y = 2 + 3x - x^{3}\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  The derivative is
  \[
  y' = 3 - 3x^{2} = 3(1 - x)(1 + x).
  \]
  The critical points are \(x = -1\) and \(x = 1\).

  - For \(x < -1\), \(y' < 0\).
  - For \(-1 < x < 1\), \(y' > 0\).
  - For \(x > 1\), \(y' < 0\).

  The sign changes from negative to positive at \(x = -1\), a local minimum with value \(y(-1) = 0\). The sign changes from positive to negative at \(x = 1\), a local maximum with value \(y(1) = 4\).
provenance: handout-answer
steps:
  - The derivative \(3(1 - x)(1 + x)\) has zeros \(x = \pm 1\).
  - The sign of \(y'\) is negative, positive, negative on the three intervals.
  - Local minimum at \(x = -1\) and local maximum at \(x = 1\).
verification:
  checks:
    - expr: 'factor(diff(2 + 3*x - x**3, x))'
      expected: '-3*(x - 1)*(x + 1)'
    - expr: 'diff(2 + 3*x - x**3, x).subs(x, -1)'
      expected: '0'
    - expr: 'diff(2 + 3*x - x**3, x).subs(x, 1)'
      expected: '0'
    - expr: '(2 + 3*x - x**3).subs(x, -1)'
      expected: '0'
    - expr: '(2 + 3*x - x**3).subs(x, 1)'
      expected: '4'
    - expr: 'sign(diff(2 + 3*x - x**3, x).subs(x, -2))'
      expected: '-1'
    - expr: 'sign(diff(2 + 3*x - x**3, x).subs(x, 0))'
      expected: '1'
    - expr: 'sign(diff(2 + 3*x - x**3, x).subs(x, 2))'
      expected: '-1'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-4
number: "5.2.4"
tier: standard
topics:
  - extrema
statement: |
  Find all critical points of \(y = x^{4} - 2x^{2} + 3\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  The derivative is
  \[
  y' = 4x^{3} - 4x = 4x(x - 1)(x + 1).
  \]
  The critical points are \(x = -1\), \(x = 0\) and \(x = 1\). Test one point in each interval:
  \[
  \begin{aligned}
  y'(-2)&=-24,\\
  y'\bigl(-\tfrac{1}{2}\bigr)&=\tfrac{3}{2},\\
  y'\bigl(\tfrac{1}{2}\bigr)&=-\tfrac{3}{2},\\
  y'(2)&=24.
  \end{aligned}
  \]
  So the sign of \(y'\) is negative, positive, negative, positive from left to right.

  - At \(x = -1\) the sign changes from negative to positive, a local minimum with value \(y(-1) = 2\).
  - At \(x = 0\) the sign changes from positive to negative, a local maximum with value \(y(0) = 3\).
  - At \(x = 1\) the sign changes from negative to positive, a local minimum with value \(y(1) = 2\).
provenance: handout-answer
steps:
  - The derivative \(4x(x - 1)(x + 1)\) has zeros \(-1\), \(0\) and \(1\).
  - Sign chart of \(y'\) is negative, positive, negative, positive.
  - Local minima at \(x = \pm 1\) with value \(2\), local maximum at \(x = 0\) with value \(3\).
verification:
  checks:
    - expr: 'factor(diff(x**4 - 2*x**2 + 3, x))'
      expected: '4*x*(x - 1)*(x + 1)'
    - expr: 'diff(x**4 - 2*x**2 + 3, x).subs(x, -2)'
      expected: '-24'
    - expr: 'diff(x**4 - 2*x**2 + 3, x).subs(x, -Rational(1, 2))'
      expected: 'Rational(3, 2)'
    - expr: 'diff(x**4 - 2*x**2 + 3, x).subs(x, Rational(1, 2))'
      expected: '-Rational(3, 2)'
    - expr: 'diff(x**4 - 2*x**2 + 3, x).subs(x, 2)'
      expected: '24'
    - expr: '(x**4 - 2*x**2 + 3).subs(x, 1)'
      expected: '2'
    - expr: '(x**4 - 2*x**2 + 3).subs(x, -1)'
      expected: '2'
    - expr: '(x**4 - 2*x**2 + 3).subs(x, 0)'
      expected: '3'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-5
number: "5.2.5"
tier: standard
topics:
  - extrema
statement: |
  Find all critical points of \(y = 3x^{4} - 4x^{3}\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  The derivative is
  \[
  y' = 12x^{3} - 12x^{2} = 12x^{2}(x - 1).
  \]
  The critical points are \(x = 0\) and \(x = 1\). The factor \(12x^{2}\) is positive for \(x \ne 0\), so the sign of \(y'\) is the sign of \(x - 1\).

  - For \(x < 0\), \(y' < 0\).
  - For \(0 < x < 1\), \(y' < 0\).
  - For \(x > 1\), \(y' > 0\).

  At \(x = 0\) the derivative is negative on both sides, so \(y'\) does not change sign and \(x = 0\) is neither a local maximum nor a local minimum. At \(x = 1\) the sign changes from negative to positive, a local minimum with value \(y(1) = -1\).
provenance: handout-answer
steps:
  - The derivative \(12x^{2}(x - 1)\) has zeros \(0\) and \(1\).
  - It is negative on both sides of \(0\), so \(x = 0\) is neither.
  - The sign changes from negative to positive at \(x = 1\), a local minimum with value \(-1\).
verification:
  checks:
    - expr: 'factor(diff(3*x**4 - 4*x**3, x))'
      expected: '12*x**2*(x - 1)'
    - expr: 'sign(diff(3*x**4 - 4*x**3, x).subs(x, -1))'
      expected: '-1'
    - expr: 'sign(diff(3*x**4 - 4*x**3, x).subs(x, Rational(1, 2)))'
      expected: '-1'
    - expr: 'sign(diff(3*x**4 - 4*x**3, x).subs(x, 2))'
      expected: '1'
    - expr: '(3*x**4 - 4*x**3).subs(x, 1)'
      expected: '-1'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-6
number: "5.2.6"
tier: standard
topics:
  - extrema
statement: |
  Find all critical points of \(y = \dfrac{x^{2} - 1}{x}\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  The function is defined for \(x \ne 0\). Rewrite it as
  \[
  y = x - \frac{1}{x},
  \]
  so the derivative is
  \[
  y' = 1 + \frac{1}{x^{2}}.
  \]
  For every \(x \ne 0\), \(\dfrac{1}{x^{2}} > 0\), so \(y' > 1\). The derivative is never zero. It fails to exist only at \(x = 0\), which is not in the domain.

  So \(y\) has no critical point, and no local maximum or minimum. The function is increasing on \((-\infty, 0)\) and on \((0, \infty)\).
provenance: handout-answer
steps:
  - Rewrite \(y = x - 1/x\) and differentiate to get \(y' = 1 + 1/x^{2}\).
  - The derivative is greater than \(1\) on the whole domain, and \(x = 0\) is not in the domain.
  - There are no critical points.
verification:
  checks:
    - expr: 'diff((x**2 - 1)/x, x)'
      expected: '1 + 1/x**2'
    - expr: '(x**2 - 1)/x - (x - 1/x)'
      expected: '0'
    - expr: 'len(solveset(x**2 + 1, x, Reals))'
      expected: '0'
    - expr: 'sign(diff((x**2 - 1)/x, x).subs(x, -2))'
      expected: '1'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-8
number: "5.2.8"
tier: standard
topics:
  - extrema
statement: |
  Find all critical points of \(y = \cos(2x) - x\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  The derivative is
  \[
  y' = -2\sin(2x) - 1.
  \]
  It is zero when \(\sin(2x) = -\dfrac{1}{2}\). The solutions for \(2x\) are \(-\dfrac{\pi}{6} + 2k\pi\) and \(\dfrac{7\pi}{6} + 2k\pi\), so the critical points are
  \[
  x = -\frac{\pi}{12} + k\pi \qquad\text{and}\qquad x = \frac{7\pi}{12} + k\pi, \qquad k \in \mathbb{Z}.
  \]

  The sign of \(y'\) is the opposite of the sign of \(2\sin(2x) + 1\). In one period of length \(\pi\), starting at \(-\dfrac{\pi}{12}\):

  - on \(\bigl(-\tfrac{5\pi}{12}, -\tfrac{\pi}{12}\bigr)\), \(\sin(2x) < -\tfrac{1}{2}\), so \(y' > 0\),
  - on \(\bigl(-\tfrac{\pi}{12}, \tfrac{7\pi}{12}\bigr)\), \(\sin(2x) > -\tfrac{1}{2}\), so \(y' < 0\).

  A test point confirms this. The values \(y'\bigl(-\tfrac{\pi}{6}\bigr) = \sqrt{3} - 1 > 0\) and \(y'(0) = -1 < 0\) give the signs on the two sides of \(-\dfrac{\pi}{12}\), and \(y'\bigl(\tfrac{2\pi}{3}\bigr) = \sqrt{3} - 1 > 0\) gives the sign to the right of \(\dfrac{7\pi}{12}\).

  - At \(x = -\dfrac{\pi}{12} + k\pi\) the sign changes from positive to negative, a local maximum.
  - At \(x = \dfrac{7\pi}{12} + k\pi\) the sign changes from negative to positive, a local minimum.

  For \(k = 0\) the values are
  \[
  \begin{aligned}
  y\bigl(-\tfrac{\pi}{12}\bigr)&=\tfrac{\sqrt{3}}{2} + \tfrac{\pi}{12},\\
  y\bigl(\tfrac{7\pi}{12}\bigr)&=-\tfrac{\sqrt{3}}{2} - \tfrac{7\pi}{12}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The derivative \(-2\sin(2x) - 1\) vanishes when \(\sin(2x) = -1/2\), at \(x = -\pi/12 + k\pi\) and \(x = 7\pi/12 + k\pi\).
  - The derivative is positive just before \(-\pi/12\) and negative just after, and negative just before \(7\pi/12\) and positive just after.
  - Local maxima at \(x = -\pi/12 + k\pi\) and local minima at \(x = 7\pi/12 + k\pi\).
verification:
  checks:
    - expr: 'diff(cos(2*x) - x, x)'
      expected: '-2*sin(2*x) - 1'
    - expr: 'diff(cos(2*x) - x, x).subs(x, -pi/12)'
      expected: '0'
    - expr: 'diff(cos(2*x) - x, x).subs(x, 7*pi/12)'
      expected: '0'
    - expr: 'diff(cos(2*x) - x, x).subs(x, -pi/12 + pi)'
      expected: '0'
    - expr: 'diff(cos(2*x) - x, x).subs(x, -pi/6)'
      expected: 'sqrt(3) - 1'
    - expr: 'diff(cos(2*x) - x, x).subs(x, 0)'
      expected: '-1'
    - expr: 'diff(cos(2*x) - x, x).subs(x, 2*pi/3)'
      expected: 'sqrt(3) - 1'
    - expr: '(cos(2*x) - x).subs(x, -pi/12)'
      expected: 'sqrt(3)/2 + pi/12'
    - expr: '(cos(2*x) - x).subs(x, 7*pi/12)'
      expected: '-sqrt(3)/2 - 7*pi/12'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-9
number: "5.2.9"
tier: basic
topics:
  - extrema
statement: |
  Find all critical points of \(f(x) = \dfrac{5 - x}{x + 2}\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  The function is defined for \(x \ne -2\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&=\frac{-(x + 2) - (5 - x)}{(x + 2)^{2}}\\
  &=-\frac{7}{(x + 2)^{2}}.
  \end{aligned}
  \]
  This is negative for every \(x \ne -2\), so it is never zero. It fails to exist only at \(x = -2\), which is not in the domain.

  So \(f\) has no critical point, and no local maximum or minimum. The function is decreasing on \((-\infty, -2)\) and on \((-2, \infty)\).
provenance: handout-answer
steps:
  - The quotient rule gives \(f'(x) = -7/(x + 2)^{2}\).
  - The derivative is never zero, and \(x = -2\) is not in the domain.
  - There are no critical points.
verification:
  checks:
    - expr: 'diff((5 - x)/(x + 2), x)'
      expected: '-7/(x + 2)**2'
    - expr: 'sign(diff((5 - x)/(x + 2), x).subs(x, 0))'
      expected: '-1'
    - expr: 'sign(diff((5 - x)/(x + 2), x).subs(x, -3))'
      expected: '-1'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-10
number: "5.2.10"
tier: standard
topics:
  - extrema
statement: |
  Find all critical points of \(f(x) = |x^{2} - 121|\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  Remove the absolute value. Since \(x^{2} - 121 \ge 0\) exactly when \(|x| \ge 11\),
  \[
  f(x) =
  \begin{cases}
  x^{2} - 121 & \text{if } |x| \ge 11,\\
  121 - x^{2} & \text{if } |x| < 11.
  \end{cases}
  \]
  The derivative is \(f'(x) = 2x\) for \(|x| > 11\) and \(f'(x) = -2x\) for \(|x| < 11\). At both \(x = 11\) and \(x = -11\) the slope is \(-22\) just to the left and \(22\) just to the right, so \(f'\) does not exist there.

  The critical points are \(x = 0\), where \(f'(0) = 0\), and \(x = \pm 11\), where \(f'\) does not exist.

  - For \(x < -11\), \(f'(x) = 2x < 0\).
  - For \(-11 < x < 0\), \(f'(x) = -2x > 0\).
  - For \(0 < x < 11\), \(f'(x) = -2x < 0\).
  - For \(x > 11\), \(f'(x) = 2x > 0\).

  At \(x = -11\) the sign changes from negative to positive, a local minimum with value \(f(-11) = 0\). At \(x = 0\) it changes from positive to negative, a local maximum with value \(f(0) = 121\). At \(x = 11\) it changes from negative to positive, a local minimum with value \(f(11) = 0\).
provenance: handout-answer
steps:
  - Split \(f\) into the pieces \(x^{2} - 121\) for \(|x| \ge 11\) and \(121 - x^{2}\) for \(|x| < 11\).
  - The critical points are \(x = 0\) and the corners \(x = \pm 11\), where \(f'\) does not exist.
  - Sign chart of \(f'\) is negative, positive, negative, positive.
  - Local minima at \(x = \pm 11\) with value \(0\), local maximum at \(x = 0\) with value \(121\).
verification:
  checks:
    - expr: 'diff(121 - x**2, x).subs(x, 0)'
      expected: '0'
    - expr: 'Abs(x**2 - 121).subs(x, 0)'
      expected: '121'
    - expr: 'Abs(x**2 - 121).subs(x, 11)'
      expected: '0'
    - expr: 'Abs(x**2 - 121).subs(x, -11)'
      expected: '0'
    - expr: 'diff(x**2 - 121, x).subs(x, 12)'
      expected: '24'
    - expr: 'diff(x**2 - 121, x).subs(x, -12)'
      expected: '-24'
    - expr: 'diff(121 - x**2, x).subs(x, -5)'
      expected: '10'
    - expr: 'diff(121 - x**2, x).subs(x, 5)'
      expected: '-10'
    - expr: 'Abs(x**2 - 121).subs(x, 10)'
      expected: '21'
    - expr: 'Abs(x**2 - 121).subs(x, 12)'
      expected: '23'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-11
number: "5.2.11"
tier: standard
topics:
  - extrema
statement: |
  Find all critical points of \(f(x) = \dfrac{x^{3}}{x + 1}\) and identify each as a local maximum, a local minimum, or neither.
solution: |
  The function is defined for \(x \ne -1\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&=\frac{3x^{2}(x + 1) - x^{3}}{(x + 1)^{2}}\\
  &=\frac{x^{2}(2x + 3)}{(x + 1)^{2}}.
  \end{aligned}
  \]
  The derivative is zero at \(x = 0\) and at \(x = -\dfrac{3}{2}\). It fails to exist only at \(x = -1\), which is not in the domain. The critical points are \(x = -\dfrac{3}{2}\) and \(x = 0\).

  The factors \(x^{2}\) and \((x + 1)^{2}\) are positive for \(x \ne 0, -1\), so the sign of \(f'\) is the sign of \(2x + 3\) away from \(0\).

  - For \(x < -\dfrac{3}{2}\), \(f'(x) < 0\).
  - For \(-\dfrac{3}{2} < x < 0\) with \(x \ne -1\), \(f'(x) > 0\).
  - For \(x > 0\), \(f'(x) > 0\).

  At \(x = -\dfrac{3}{2}\) the test points \(-2\) and \(-\dfrac{5}{4}\) give
  \[
  f'(-2) = -4, \qquad f'\bigl(-\tfrac{5}{4}\bigr) = \tfrac{25}{2}.
  \]
  Both lie in \((-\infty, -1)\), the part of the domain around \(-\dfrac{3}{2}\). The sign changes from negative to positive, so \(x = -\dfrac{3}{2}\) is a local minimum with value \(f\bigl(-\tfrac{3}{2}\bigr) = \tfrac{27}{4}\).

  At \(x = 0\) the test points \(-\dfrac{1}{2}\) and \(1\) give
  \[
  f'\bigl(-\tfrac{1}{2}\bigr) = 2, \qquad f'(1) = \tfrac{5}{4}.
  \]
  Both are positive, so the derivative does not change sign. The point \(x = 0\) is neither a local maximum nor a local minimum.
provenance: handout-answer
steps:
  - The derivative \(x^{2}(2x + 3)/(x + 1)^{2}\) has zeros \(-3/2\) and \(0\), and \(x = -1\) is not in the domain.
  - Its sign is negative for \(x < -3/2\) and positive on both sides of \(0\).
  - Local minimum at \(x = -3/2\) with value \(27/4\), and neither at \(x = 0\).
verification:
  checks:
    - expr: 'diff(x**3/(x + 1), x)'
      expected: 'x**2*(2*x + 3)/(x + 1)**2'
    - expr: 'diff(x**3/(x + 1), x).subs(x, -Rational(3, 2))'
      expected: '0'
    - expr: 'diff(x**3/(x + 1), x).subs(x, 0)'
      expected: '0'
    - expr: 'diff(x**3/(x + 1), x).subs(x, -2)'
      expected: '-4'
    - expr: 'diff(x**3/(x + 1), x).subs(x, -Rational(5, 4))'
      expected: 'Rational(25, 2)'
    - expr: 'diff(x**3/(x + 1), x).subs(x, -Rational(1, 2))'
      expected: '2'
    - expr: 'diff(x**3/(x + 1), x).subs(x, 1)'
      expected: 'Rational(5, 4)'
    - expr: '(x**3/(x + 1)).subs(x, -Rational(3, 2))'
      expected: 'Rational(27, 4)'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-15
number: "5.2.15"
tier: standard
topics:
  - extrema
  - curve-sketching
statement: |
  Let \(f(\theta) = \cos^{2}\theta - 2\sin\theta\). Find the intervals where \(f\) is increasing and the intervals where \(f\) is decreasing in \([0, 2\pi]\). Use this information to classify the critical points of \(f\) as local maxima, local minima, or neither.
solution: |
  The derivative is
  \[
  \begin{aligned}
  f'(\theta)&=-2\cos\theta\sin\theta - 2\cos\theta\\
  &=-2\cos\theta\,(1 + \sin\theta).
  \end{aligned}
  \]
  The factor \(1 + \sin\theta\) is zero only at \(\theta = \dfrac{3\pi}{2}\) and positive elsewhere. The factor \(\cos\theta\) is zero at \(\theta = \dfrac{\pi}{2}\) and \(\theta = \dfrac{3\pi}{2}\). So the critical points in \([0, 2\pi]\) are \(\theta = \dfrac{\pi}{2}\) and \(\theta = \dfrac{3\pi}{2}\).

  Away from \(\dfrac{3\pi}{2}\), the sign of \(f'\) is the sign of \(-\cos\theta\).

  - On \(\bigl[0, \tfrac{\pi}{2}\bigr)\), \(\cos\theta > 0\), so \(f' < 0\).
  - On \(\bigl(\tfrac{\pi}{2}, \tfrac{3\pi}{2}\bigr)\), \(\cos\theta < 0\), so \(f' > 0\).
  - On \(\bigl(\tfrac{3\pi}{2}, 2\pi\bigr]\), \(\cos\theta > 0\), so \(f' < 0\).

  The function is decreasing on \(\bigl[0, \tfrac{\pi}{2}\bigr]\), increasing on \(\bigl[\tfrac{\pi}{2}, \tfrac{3\pi}{2}\bigr]\) and decreasing on \(\bigl[\tfrac{3\pi}{2}, 2\pi\bigr]\).

  - At \(\theta = \dfrac{\pi}{2}\) the sign changes from negative to positive, a local minimum with value \(f\bigl(\tfrac{\pi}{2}\bigr) = -2\).
  - At \(\theta = \dfrac{3\pi}{2}\) the sign changes from positive to negative, a local maximum with value \(f\bigl(\tfrac{3\pi}{2}\bigr) = 2\). The derivative has a double zero from the factor \(1 + \sin\theta\), but the factor \(\cos\theta\) changes sign there, so \(f'\) does too.

  The function has period \(2\pi\), so the pattern repeats. The local minima are at \(\dfrac{\pi}{2} + 2n\pi\) and the local maxima are at \(\dfrac{3\pi}{2} + 2n\pi\), for integer \(n\).
provenance: handout-answer
steps:
  - Factor \(f'(\theta) = -2\cos\theta\,(1 + \sin\theta)\), with critical points \(\pi/2\) and \(3\pi/2\).
  - Sign chart of \(f'\) is negative, positive, negative on the three intervals.
  - Local minimum at \(\pi/2\) with value \(-2\) and local maximum at \(3\pi/2\) with value \(2\), repeated every \(2\pi\).
verification:
  checks:
    - expr: 'diff(cos(t)**2 - 2*sin(t), t) + 2*cos(t)*(1 + sin(t))'
      expected: '0'
    - expr: 'diff(cos(t)**2 - 2*sin(t), t).subs(t, pi/2)'
      expected: '0'
    - expr: 'diff(cos(t)**2 - 2*sin(t), t).subs(t, 3*pi/2)'
      expected: '0'
    - expr: 'sign(diff(cos(t)**2 - 2*sin(t), t).subs(t, pi/4))'
      expected: '-1'
    - expr: 'sign(diff(cos(t)**2 - 2*sin(t), t).subs(t, pi))'
      expected: '1'
    - expr: 'sign(diff(cos(t)**2 - 2*sin(t), t).subs(t, 5*pi/4))'
      expected: '1'
    - expr: 'sign(diff(cos(t)**2 - 2*sin(t), t).subs(t, 7*pi/4))'
      expected: '-1'
    - expr: '(cos(t)**2 - 2*sin(t)).subs(t, pi/2)'
      expected: '-2'
    - expr: '(cos(t)**2 - 2*sin(t)).subs(t, 3*pi/2)'
      expected: '2'
:::


::: exercise
id: l2-monotonicity-extrema.handout-5-2-17
number: "5.2.17"
tier: basic
topics:
  - extrema
statement: |
  Let \(f(x) = ax^{2} + bx + c\) with \(a \ne 0\). Show that \(f\) has exactly one critical point. Give conditions on \(a\) and \(b\) which guarantee that the critical point will be a maximum. It is possible to see this without using calculus at all. Explain.
solution: |
  The derivative is
  \[
  f'(x) = 2ax + b,
  \]
  and it exists for every \(x\). It is zero when \(2ax = -b\). Since \(a \ne 0\), this has exactly one solution,
  \[
  x_{0} = -\frac{b}{2a}.
  \]
  So \(f\) has exactly one critical point.

  Write \(f'(x) = 2a(x - x_{0})\). If \(a < 0\), then \(f'(x) > 0\) for \(x < x_{0}\) and \(f'(x) < 0\) for \(x > x_{0}\). The sign changes from positive to negative, so \(x_{0}\) is a local maximum. If \(a > 0\), the signs are reversed and \(x_{0}\) is a local minimum.

  The condition for a maximum is \(a < 0\). The coefficient \(b\) can have any value.

  Without calculus, complete the square:
  \[
  f(x) = a\left(x + \frac{b}{2a}\right)^{2} + c - \frac{b^{2}}{4a}.
  \]
  The square is zero at \(x_{0}\) and positive elsewhere. If \(a < 0\), the first term is at most \(0\), so \(f(x) \le c - \dfrac{b^{2}}{4a}\) for every \(x\), with equality at \(x_{0}\). The graph is a parabola that opens downward, and its vertex is the maximum.
provenance: written-for-site
steps:
  - The derivative \(2ax + b\) has the single zero \(x = -b/(2a)\).
  - For \(a < 0\) the derivative changes from positive to negative there, so it is a maximum. The value of \(b\) does not matter.
  - Completing the square shows that the parabola opens downward when \(a < 0\), and the vertex is its highest point.
verification:
  checks:
    - expr: 'diff(a*x**2 + b*x + c, x)'
      expected: '2*a*x + b'
    - expr: 'solve(2*a*x + b, x)[0]'
      expected: '-b/(2*a)'
    - expr: 'a*(x + b/(2*a))**2 + c - b**2/(4*a) - (a*x**2 + b*x + c)'
      expected: '0'
    - expr: '(a*x**2 + b*x + c).subs(x, -b/(2*a))'
      expected: 'c - b**2/(4*a)'
    - expr: 'diff(a*x**2 + b*x + c, x, 2)'
      expected: '2*a'
:::
