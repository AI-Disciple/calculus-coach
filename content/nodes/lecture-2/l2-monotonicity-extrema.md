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
