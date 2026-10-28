---
id: l2-implicit-differentiation
lecture: 2
order: 2
title: Implicit differentiation
prerequisites: [l1-derivative-rules]
sources:
  - { source: handout, section: "4.8", page: 89 }
examWeight: low
status: reviewed
notation: |
  \(f'\), \(y'\) and \(\frac{d}{dx}\) all name the derivative: \(y' = \frac{dy}{dx}\) and \(f'(x) = \frac{d}{dx} f(x)\).
---

::: formal-statement
kind: method
title: Implicit differentiation
source:
  source: handout
  section: "4.8"
  page: 89
text: |
  An equation involving \(x\) and \(y\) can define \(y\) as a function of \(x\). Differentiate both sides with respect to \(x\). Every occurrence of \(y\) is differentiated by the **chain rule**, so
  \[ \frac{d}{dx}(y^2) = 2 y y'. \]
  Collect the terms that contain \(y'\), and solve for \(y'\).

  - The argument assumes that \(y'\) exists.
  - Evaluating the slope at a point requires both coordinates of that point.
:::

::: plain-explanation
text: |
  Treat \(y\) as a function of \(x\):

  1. A power of \(y\) is differentiated by the chain rule, so a square contributes both \(2y\) and the factor \(y'\).
  2. Terms that contain only \(x\) are differentiated as functions of \(x\).
  3. Gather every term that contains \(y'\) and solve.

  When the formula for \(y'\) still contains \(y\), a numerical slope needs a point \((x, y)\) on the curve.
:::

::: worked-example
title: Example 4.8.1
problem: |
  Find the slope of \(x^2 + y^2 = 4\) at the point \((1, -\sqrt{3})\).
solution: |
  The point lies on the circle, because \(1^2 + (-\sqrt{3})^2 = 1 + 3 = 4\).

  Differentiate both sides with respect to \(x\). The chain rule handles the term in \(y\), and the right side is constant:
  \[
  \begin{aligned}
  \frac{d}{dx}(x^2) &= 2x,\\
  \frac{d}{dx}(y^2) &= 2 y y',\\
  \frac{d}{dx}(4) &= 0.
  \end{aligned}
  \]
  Thus \(2x + 2 y y' = 0\). When \(y \neq 0\),
  \[ y' = -\frac{x}{y}. \]
  The slope at \((1, -\sqrt{3})\) is
  \[ y' = -\frac{1}{-\sqrt{3}} = \frac{1}{\sqrt{3}}. \]

  The same point lies on the lower semicircle \(L(x) = -\sqrt{4 - x^2}\), because \(L(1) = -\sqrt{3}\). Differentiating that explicit formula gives
  \[
  \begin{aligned}
  L'(x) &= -\frac{1}{2}(4 - x^2)^{-1/2} \cdot (-2x)\\
  &= \frac{x}{\sqrt{4 - x^2}}.
  \end{aligned}
  \]
  The value \(L'(1)\) is \(\frac{1}{\sqrt{3}}\). The implicit slope and the derivative of the lower semicircle agree.
:::

::: guided-example
title: Example 4.8.2
problem: |
  The equation \(y x^2 + e^y = x\) defines \(y\) as a function of \(x\). Find \(y'\). Try each step before you reveal it.
steps:
  - |
    Differentiate \(y x^2\) by the product rule, and differentiate \(e^y\) by the chain rule. The right side has derivative \(1\).
  - |
    The differentiated equation is
    \[ y' x^2 + 2 x y + e^y y' = 1. \]
  - |
    Collect the terms that contain \(y'\):
    \[ y'(x^2 + e^y) = 1 - 2 x y. \]
  - |
    When \(x^2 + e^y \neq 0\),
    \[ y' = \frac{1 - 2 x y}{x^2 + e^y}. \]
:::

::: trap
text: |
  The chain rule gives \(\frac{d}{dx}(y^2) = 2 y y'\). The wrong version drops the factor \(y'\) and writes \(\frac{d}{dx}(y^2) = 2y\).

  On the circle \(x^2 + y^2 = 4\), that wrong differentiation produces
  \[ 2x + 2y = 0. \]
  The point \((1, -\sqrt{3})\) lies on the circle, because \(1^2 + (-\sqrt{3})^2 = 4\). Substituting it into \(2x + 2y\) gives \(2 - 2\sqrt{3}\). If \(2 - 2\sqrt{3} = 0\), then \(\sqrt{3} = 1\), and squaring both sides would give \(3 = 1\). The wrong equation fails at \((1, -\sqrt{3})\).

  With the factor \(y'\) kept, the differentiated equation is \(2x + 2 y y' = 0\). At this point \(y' = \frac{1}{\sqrt{3}}\), and
  \[ 2(1) + 2(-\sqrt{3}) \cdot \frac{1}{\sqrt{3}} = 0. \]
:::

::: key-points
text: |
  - Differentiate both sides of the equation with respect to \(x\), apply the chain rule to every occurrence of \(y\), collect the terms that contain \(y'\), and solve for \(y'\).
  - The argument assumes that \(y'\) exists. A numerical slope needs both coordinates of a point on the curve, because the formula for \(y'\) may still contain \(y\).
  - The usual slip writes \(\frac{d}{dx}(y^2) = 2y\). The chain rule gives \(\frac{d}{dx}(y^2) = 2 y y'\).
:::

::: concept-question
id: l2-implicit-differentiation.q-7d38bac7
question: |
  The circle \(x^2 + y^2 = 4\) passes through \((1, \sqrt{3})\) and \((1, -\sqrt{3})\). What are the slopes at those points, in that order?
options:
  - text: |
      \(-\frac{1}{\sqrt{3}}\) and \(\frac{1}{\sqrt{3}}\).
    correct: true
  - text: |
      \(\frac{1}{\sqrt{3}}\) and \(-\frac{1}{\sqrt{3}}\).
  - text: |
      \(\frac{1}{\sqrt{3}}\) at both points.
  - text: |
      \(0\) at both points.
explanation: |
  On this circle,
  \[ y' = -\frac{x}{y} \]
  wherever \(y \neq 0\). At \((1, \sqrt{3})\) the slope is \(-\frac{1}{\sqrt{3}}\). At \((1, -\sqrt{3})\) the slope is \(\frac{1}{\sqrt{3}}\). The two points share an \(x\)-coordinate and have different slopes, so both coordinates are required.
:::

::: concept-question
id: l2-implicit-differentiation.q-754cb9b6
question: |
  What does implicit differentiation assume about \(y\)?
options:
  - text: |
      \(y\) has a derivative with respect to \(x\).
    correct: true
  - text: |
      An explicit formula for \(y\) is already known.
  - text: |
      \(y'\) is a constant.
  - text: |
      The curve is a circle.
explanation: |
  The chain rule treats \(y\) as a function of \(x\), so the argument assumes that \(y'\) exists. The input to the method is an equation relating \(x\) and \(y\).
:::

::: concept-question
id: l2-implicit-differentiation.q-adff4df6
question: |
  In the equation \(y x^2 + e^y = x\), what is the derivative of \(e^y\) with respect to \(x\)?
options:
  - text: |
      \(e^y y'\).
    correct: true
  - text: |
      \(e^y\).
  - text: |
      \(y e^{y - 1}\).
  - text: |
      \(e^{y'}\).
explanation: |
  The exponential is composed with \(y\). Its derivative with respect to \(y\) is \(e^y\), and the chain rule multiplies by \(y'\). The derivative with respect to \(x\) is \(e^y y'\).
:::

::: exercise
id: l2-implicit-differentiation.ex-4-8-1
number: "4.8.1"
tier: basic
topics: [implicit-differentiation]
statement: |
  Find a formula for \(y'\) if \(y^2 = 1 + x^2\).
solution: |
  Differentiate both sides with respect to \(x\). The chain rule gives \(2 y y'\) on the left and \(2x\) on the right, so \(2 y y' = 2x\). When \(y \neq 0\),
  \[ y' = \frac{x}{y}. \]

  - The **positive branch** is \(y = \sqrt{1 + x^2}\). Its derivative is \(\frac{x}{\sqrt{1 + x^2}}\), which equals \(\frac{x}{y}\).
  - The **negative branch** is \(y = -\sqrt{1 + x^2}\). Its derivative is \(-\frac{x}{\sqrt{1 + x^2}}\). For this branch, \(\frac{x}{y}\) equals that same derivative.

  Both branches satisfy \(y' = \frac{x}{y}\).
provenance: handout-answer
steps:
  - Differentiating gives \(2 y y' = 2x\).
  - When \(y \neq 0\), the slope is \(y' = \frac{x}{y}\).
verification:
  checks:
    - expr: '-diff(y**2 - 1 - x**2, x)/diff(y**2 - 1 - x**2, y)'
      expected: 'x/y'
    - expr: 'diff(sqrt(1 + x**2), x)'
      expected: 'x/sqrt(1 + x**2)'
    - expr: '(x/y).subs(y, -sqrt(1 + x**2))'
      expected: 'diff(-sqrt(1 + x**2), x)'
:::

::: exercise
id: l2-implicit-differentiation.ex-4-8-2
number: "4.8.2"
tier: standard
topics: [implicit-differentiation]
statement: |
  Find a formula for \(y'\) if \(x^2 + xy + y^2 = 7\).
solution: |
  Differentiate both sides with respect to \(x\). The product \(xy\) contributes \(y + x y'\), so
  \[ 2x + y + x y' + 2 y y' = 0. \]
  The terms that contain \(y'\) factor as \(y'(x + 2y)\). Moving the remaining terms gives
  \[ y'(x + 2y) = -2x - y. \]
  When \(x + 2y \neq 0\),
  \[ y' = -\frac{2x + y}{x + 2y}. \]

  The point \((0, \sqrt{7})\) lies on the curve, because \(0 + 0 + (\sqrt{7})^2 = 7\). The slope at that point is \(-\frac{\sqrt{7}}{2\sqrt{7}} = -\frac{1}{2}\).
provenance: handout-answer
steps:
  - Differentiating gives \(2x + y + x y' + 2 y y' = 0\).
  - Solving for the slope gives \(y' = -\frac{2x + y}{x + 2y}\) when \(x + 2y \neq 0\).
verification:
  checks:
    - expr: '-diff(x**2 + x*y + y**2 - 7, x)/diff(x**2 + x*y + y**2 - 7, y)'
      expected: '-(2*x + y)/(x + 2*y)'
    - expr: '(x**2 + x*y + y**2).subs({x: 0, y: sqrt(7)})'
      expected: '7'
    - expr: '(-(2*x + y)/(x + 2*y)).subs({x: 0, y: sqrt(7)})'
      expected: '-Rational(1, 2)'
:::

::: exercise
id: l2-implicit-differentiation.ex-4-8-8
number: "4.8.8"
tier: exam
topics: [implicit-differentiation]
statement: |
  Find a formula for \(y'\) if \(\frac{1}{x} + \frac{1}{y} = 7\).
solution: |
  Differentiate both sides with respect to \(x\). The derivative of \(x^{-1}\) is \(-x^{-2}\), and the chain rule gives the derivative of \(y^{-1}\) as \(-y^{-2} y'\). So
  \[ -x^{-2} - y^{-2} y' = 0. \]
  Then \(y^{-2} y' = -x^{-2}\). When \(x \neq 0\) and \(y \neq 0\),
  \[ y' = -\frac{y^2}{x^2}. \]

  Solving the original equation for \(y\) gives \(y = \frac{x}{7x - 1}\) when \(7x \neq 1\). The derivative of this explicit formula is \(-\frac{1}{(7x - 1)^2}\). Substituting \(y = \frac{x}{7x - 1}\) into \(-\frac{y^2}{x^2}\) gives the same value.
provenance: handout-answer
steps:
  - Differentiating gives \(-x^{-2} - y^{-2} y' = 0\).
  - Solving for the slope gives \(y' = -\frac{y^2}{x^2}\).
verification:
  checks:
    - expr: '-diff(1/x + 1/y - 7, x)/diff(1/x + 1/y - 7, y)'
      expected: '-y**2/x**2'
    - expr: '(-y**2/x**2).subs(y, x/(7*x - 1))'
      expected: 'diff(x/(7*x - 1), x)'
:::

::: sheet-item
id: l2-implicit-differentiation.sheet-chain-factor
category: formula
text: |
  When \(y\) depends on \(x\), the chain rule gives \(\frac{d}{dx}(y^2) = 2 y y'\).
:::

::: sheet-item
id: l2-implicit-differentiation.sheet-circle
category: formula
text: |
  On the circle \(x^2 + y^2 = r^2\), with \(y \neq 0\), the slope is \(y' = -\frac{x}{y}\).
:::

::: sheet-item
id: l2-implicit-differentiation.sheet-missing-prime
category: trap
text: |
  Dropping \(y'\) from \(\frac{d}{dx}(y^2)\) is wrong. On \(x^2 + y^2 = 4\) at \((1, -\sqrt{3})\), the wrong equation \(2x + 2y = 0\) gives \(2 - 2\sqrt{3}\). If that were \(0\), then \(\sqrt{3} = 1\), and squaring would give \(3 = 1\).
:::

::: going-deeper
title: Orthogonal trajectories
text: |
  Two curves are orthogonal when, at each intersection point, the angle between their tangent lines is \(\pi/2\). Where both slopes exist and both tangent lines have finite slope, the product of the slopes is \(-1\).

  - **Exercise 4.8.18.** Show that \(x^2 - y^2 = 5\) is orthogonal to \(4x^2 + 9y^2 = 72\). Find the intersection points, and show that the product of the derivatives at each of them is \(-1\).
  - **Exercise 4.8.19.** Show that \(x^2 + y^2 = r^2\) is orthogonal to \(y = mx\). The circles centered at the origin and the lines through the origin are orthogonal trajectories of each other. When \(m = 0\), the circles fail to be differentiable where they cross the x-axis. Explain why those circles are orthogonal to the x-axis. The vertical line through the origin needs a separate argument.
  - **Exercise 4.8.20.** Suppose \(k \neq 0\) and \(c \neq 0\). Show that \(y^2 - x^2 = k\) is orthogonal to \(yx = c\). When \(k = 0\) and \(c = 0\), the curves \(y^2 - x^2 = 0\) and \(yx = 0\) meet at the origin. Are those two curves orthogonal?
  - **Exercise 4.8.21.** Suppose \(m \neq 0\). Show that the family of lines \(y = mx + b\), with \(b\) any real number, is orthogonal to the family \(y = -\frac{x}{m} + c\), with \(c\) any real number.
:::

::: exercise
id: l2-implicit-differentiation.ex-implicit-second-derivative
tier: exam
topics: [implicit-differentiation]
statement: |
  The equation \(y x^{2} + e^{y} = x + 1\) defines \(y\) as a function of \(x\) near the point \((0, 0)\).

  - (a) Check that \((0, 0)\) lies on the curve, and find a formula for \(y'\).
  - (b) Find the tangent line at \((0, 0)\).
  - (c) Find \(y''(0)\), and say whether the curve lies above or below its tangent line near \((0, 0)\).
solution: |
  (a) At \((0, 0)\) the left side is \(0 + e^{0} = 1\) and the right side is \(0 + 1 = 1\), so the point lies on the curve.

  Differentiate both sides with respect to \(x\). The product rule gives \(y' x^{2} + 2xy\) for the first term, the chain rule gives \(e^{y} y'\) for the second, and the right side has derivative \(1\). So
  \[ y' x^{2} + 2xy + e^{y} y' = 1. \]
  Collect the terms with \(y'\): \(y'(x^{2} + e^{y}) = 1 - 2xy\). The factor \(x^{2} + e^{y}\) is positive for every \(x\) and \(y\), so
  \[ y' = \frac{1 - 2xy}{x^{2} + e^{y}}. \]

  (b) At \((0, 0)\), \(y' = \frac{1 - 0}{0 + 1} = 1\). The tangent line is \(y = x\).

  (c) Differentiate the equation \(y' x^{2} + 2xy + e^{y} y' = 1\) once more with respect to \(x\). The terms give
  \[
  \begin{aligned}
  \frac{d}{dx}\bigl(y' x^{2}\bigr) &= y'' x^{2} + 2x y',\\
  \frac{d}{dx}\bigl(2xy\bigr) &= 2y + 2x y',\\
  \frac{d}{dx}\bigl(e^{y} y'\bigr) &= e^{y} (y')^{2} + e^{y} y'',
  \end{aligned}
  \]
  and the right side gives \(0\), so
  \[ y'' x^{2} + 4x y' + 2y + e^{y} (y')^{2} + e^{y} y'' = 0. \]
  At \((0, 0)\), with \(y' = 1\), this becomes
  \[ 0 + 0 + 0 + 1 + y'' = 0, \]
  so \(y''(0) = -1\).

  Since \(y''(0) < 0\), the curve is concave down near \((0, 0)\), so it lies below its tangent line \(y = x\) near that point.
provenance: written-for-site
steps:
  - The point is on the curve, and \(y' = \frac{1 - 2xy}{x^{2} + e^{y}}\).
  - At the point \(y' = 1\), so the tangent line is \(y = x\).
  - Differentiating again and substituting gives \(y''(0) = -1\).
  - Since \(y''(0) < 0\), the curve lies below its tangent line near the point.
verification:
  checks:
    - expr: '(y*x**2 + exp(y) - x - 1).subs({x: 0, y: 0})'
      expected: "0"
    - expr: -diff(y*x**2 + exp(y) - x - 1, x)/diff(y*x**2 + exp(y) - x - 1, y)
      expected: (1 - 2*x*y)/(x**2 + exp(y))
    - expr: '((1 - 2*x*y)/(x**2 + exp(y))).subs({x: 0, y: 0})'
      expected: "1"
    - expr: '(diff((1 - 2*x*y)/(x**2 + exp(y)), x) + diff((1 - 2*x*y)/(x**2 + exp(y)), y)*(1 - 2*x*y)/(x**2 + exp(y))).subs({x: 0, y: 0})'
      expected: "-1"
:::

::: exercise
id: l2-implicit-differentiation.ex-implicit-no-horizontal-tangent
tier: exam
topics: [implicit-differentiation]
statement: |
  Consider the curve \(x^{2} + 3xy + y^{2} = 5\).

  - (a) Find a formula for \(y'\).
  - (b) Find the two points of the curve with \(x = 1\), and the slope of the curve at each of them.
  - (c) Show that the curve has no horizontal tangent, and that \(3x + 2y \neq 0\) at every point of the curve.
solution: |
  (a) Differentiate both sides with respect to \(x\). The product \(3xy\) contributes \(3y + 3x y'\), so
  \[ 2x + 3y + 3x y' + 2y y' = 0. \]
  Then \(y'(3x + 2y) = -(2x + 3y)\), and when \(3x + 2y \neq 0\),
  \[ y' = -\frac{2x + 3y}{3x + 2y}. \]

  (b) Put \(x = 1\) in the equation: \(1 + 3y + y^{2} = 5\), so
  \[ y^{2} + 3y - 4 = (y + 4)(y - 1) = 0. \]
  The points are \((1, 1)\) and \((1, -4)\).

  The slopes are
  \[
  \begin{aligned}
  \text{at } (1, 1):\quad y' &= -\frac{2 + 3}{3 + 2}\\
  &= -1,\\
  \text{at } (1, -4):\quad y' &= -\frac{2 - 12}{3 - 8}\\
  &= -\frac{-10}{-5} = -2.
  \end{aligned}
  \]
  The two points share the \(x\)-coordinate and have different slopes, so both coordinates are needed.

  (c) A horizontal tangent needs \(y' = 0\), that is \(2x + 3y = 0\), so \(y = -\frac{2}{3}x\). Substituting into the curve gives
  \[ x^{2} + 3x\left(-\frac{2}{3}x\right) + \frac{4}{9}x^{2} = -\frac{5}{9}x^{2} = 5. \]
  The left side is at most \(0\) and the right side is \(5\), so there is no solution, and the curve has no horizontal tangent.

  If \(3x + 2y = 0\), then \(y = -\frac{3}{2}x\), and substituting gives
  \[ x^{2} + 3x\left(-\frac{3}{2}x\right) + \frac{9}{4}x^{2} = -\frac{5}{4}x^{2} = 5, \]
  which again has no solution. So \(3x + 2y \neq 0\) at every point of the curve, and the formula for \(y'\) holds everywhere on it.
provenance: written-for-site
steps:
  - Differentiating gives \(2x + 3y + 3x y' + 2y y' = 0\), so \(y' = -\frac{2x + 3y}{3x + 2y}\).
  - The points with \(x = 1\) are \((1, 1)\) and \((1, -4)\), with slopes \(-1\) and \(-2\).
  - The condition \(2x + 3y = 0\) gives \(-\frac{5}{9}x^{2} = 5\), which has no solution, so there is no horizontal tangent.
  - The condition \(3x + 2y = 0\) gives \(-\frac{5}{4}x^{2} = 5\), which has no solution, so the denominator never vanishes.
verification:
  checks:
    - expr: -diff(x**2 + 3*x*y + y**2 - 5, x)/diff(x**2 + 3*x*y + y**2 - 5, y)
      expected: -(2*x + 3*y)/(3*x + 2*y)
    - expr: '(x**2 + 3*x*y + y**2 - 5).subs({x: 1, y: 1})'
      expected: "0"
    - expr: '(x**2 + 3*x*y + y**2 - 5).subs({x: 1, y: -4})'
      expected: "0"
    - expr: '(-(2*x + 3*y)/(3*x + 2*y)).subs({x: 1, y: 1})'
      expected: "-1"
    - expr: '(-(2*x + 3*y)/(3*x + 2*y)).subs({x: 1, y: -4})'
      expected: "-2"
    - expr: (x**2 + 3*x*y + y**2).subs(y, -2*x/3)
      expected: -5*x**2/9
    - expr: (x**2 + 3*x*y + y**2).subs(y, -3*x/2)
      expected: -5*x**2/4
    - expr: factor(y**2 + 3*y - 4)
      expected: (y + 4)*(y - 1)
:::
