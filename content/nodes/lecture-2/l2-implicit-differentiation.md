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

::: exercise
id: l2-implicit-differentiation.handout-4-8-3
number: "4.8.3"
tier: standard
topics:
  - implicit-differentiation
statement: |
  Find a formula for the derivative \(y'\) at the point \((x, y)\) of the curve \(x^{3} + xy^{2} = y^{3} + yx^{2}\).
solution: |
  Differentiate both sides with respect to \(x\). The product rule handles \(xy^{2}\) and \(yx^{2}\), and the chain rule handles every power of \(y\):
  \[
  \begin{aligned}
  \frac{d}{dx}(x^{3}) &= 3x^{2},\\
  \frac{d}{dx}(xy^{2}) &= y^{2} + 2xy\,y',\\
  \frac{d}{dx}(y^{3}) &= 3y^{2}y',\\
  \frac{d}{dx}(yx^{2}) &= y'x^{2} + 2xy.
  \end{aligned}
  \]
  Equating the two sides gives
  \[
  3x^{2} + y^{2} + 2xy\,y' = 3y^{2}y' + x^{2}y' + 2xy.
  \]
  Collect the terms that contain \(y'\) on the left and the others on the right:
  \[
  y'\,(2xy - 3y^{2} - x^{2}) = 2xy - 3x^{2} - y^{2}.
  \]
  When \(2xy - 3y^{2} - x^{2} \neq 0\),
  \[
  y' = \frac{2xy - 3x^{2} - y^{2}}{2xy - 3y^{2} - x^{2}}.
  \]

  As a check, the point \((1, 1)\) lies on the curve, because both sides equal \(2\) there. The formula gives \(y' = \frac{2 - 3 - 1}{2 - 3 - 1} = 1\). This is the slope of the line \(y = x\), which lies on the curve, because substituting \(y = x\) turns both sides into \(2x^{3}\).
provenance: handout-answer
steps:
  - |
    Differentiating gives \(3x^{2} + y^{2} + 2xy\,y' = 3y^{2}y' + x^{2}y' + 2xy\).
  - |
    Collecting the terms in \(y'\) gives \(y'(2xy - 3y^{2} - x^{2}) = 2xy - 3x^{2} - y^{2}\).
  - |
    When the bracket is non-zero, \(y' = \frac{2xy - 3x^{2} - y^{2}}{2xy - 3y^{2} - x^{2}}\).
verification:
  checks:
    - expr: -diff(x**3 + x*y**2 - y**3 - y*x**2, x)/diff(x**3 + x*y**2 - y**3 - y*x**2, y)
      expected: (2*x*y - 3*x**2 - y**2)/(2*x*y - 3*y**2 - x**2)
    - expr: '(x**3 + x*y**2 - y**3 - y*x**2).subs({x: 1, y: 1})'
      expected: "0"
    - expr: '((2*x*y - 3*x**2 - y**2)/(2*x*y - 3*y**2 - x**2)).subs({x: 1, y: 1})'
      expected: "1"
    - expr: (x**3 + x*y**2 - y**3 - y*x**2).subs(y, x)
      expected: "0"
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-4
number: "4.8.4"
tier: basic
topics:
  - implicit-differentiation
statement: |
  Find a formula for the derivative \(y'\) at the point \((x, y)\) of the curve \(4\cos x\,\sin y = 1\).
solution: |
  Differentiate both sides with respect to \(x\). The product rule applies to \(\cos x\,\sin y\), the derivative of \(\cos x\) is \(-\sin x\), and the chain rule gives \(\cos y\,y'\) for \(\sin y\). The right side has derivative \(0\), so
  \[
  -4\sin x\,\sin y + 4\cos x\,\cos y\,y' = 0.
  \]
  Move the first term to the right and divide by \(4\cos x\,\cos y\). When \(\cos x\,\cos y \neq 0\),
  \[
  y' = \frac{\sin x\,\sin y}{\cos x\,\cos y} = \tan x\,\tan y.
  \]

  As a check, the point \(\left(\frac{\pi}{3}, \frac{\pi}{6}\right)\) lies on the curve, because \(4 \cdot \frac{1}{2} \cdot \frac{1}{2} = 1\). The formula gives \(y' = \sqrt{3} \cdot \frac{1}{\sqrt{3}} = 1\). On the branch \(y = \arcsin\frac{1}{4\cos x}\) the explicit derivative at \(x = \frac{\pi}{3}\) is also \(1\).
provenance: handout-answer
steps:
  - |
    Differentiating gives \(-4\sin x\,\sin y + 4\cos x\,\cos y\,y' = 0\).
  - |
    When \(\cos x\,\cos y \neq 0\), \(y' = \frac{\sin x\,\sin y}{\cos x\,\cos y}\).
verification:
  checks:
    - expr: -diff(4*cos(x)*sin(y) - 1, x)/diff(4*cos(x)*sin(y) - 1, y)
      expected: sin(x)*sin(y)/(cos(x)*cos(y))
    - expr: '(4*cos(x)*sin(y)).subs({x: pi/3, y: pi/6})'
      expected: "1"
    - expr: '(sin(x)*sin(y)/(cos(x)*cos(y))).subs({x: pi/3, y: pi/6})'
      expected: "1"
    - expr: diff(asin(1/(4*cos(x))), x).subs(x, pi/3)
      expected: "1"
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-5
number: "4.8.5"
tier: basic
topics:
  - implicit-differentiation
statement: |
  Find a formula for the derivative \(y'\) at the point \((x, y)\) of the curve \(\sqrt{x} + \sqrt{y} = 9\).
solution: |
  The roots need \(x \geq 0\) and \(y \geq 0\), and the derivatives below need \(x > 0\) and \(y > 0\). Differentiate both sides with respect to \(x\). The chain rule gives \(\frac{1}{2\sqrt{y}}y'\) for \(\sqrt{y}\), so
  \[
  \frac{1}{2\sqrt{x}} + \frac{1}{2\sqrt{y}}\,y' = 0.
  \]
  Solving for \(y'\) gives
  \[
  y' = -\frac{\sqrt{y}}{\sqrt{x}}.
  \]

  The curve is also the graph of \(y = (9 - \sqrt{x})^{2}\) for \(0 < x < 81\). Its derivative is
  \[
  y' = -\frac{9 - \sqrt{x}}{\sqrt{x}},
  \]
  and on the curve \(9 - \sqrt{x} = \sqrt{y}\), so the two formulas agree. For example, \((16, 25)\) lies on the curve, and the slope there is \(-\frac{5}{4}\).
provenance: handout-answer
steps:
  - |
    Differentiating gives \(\frac{1}{2\sqrt{x}} + \frac{1}{2\sqrt{y}}\,y' = 0\).
  - |
    Solving gives \(y' = -\frac{\sqrt{y}}{\sqrt{x}}\) for \(x, y > 0\).
verification:
  checks:
    - expr: -diff(sqrt(x) + sqrt(y) - 9, x)/diff(sqrt(x) + sqrt(y) - 9, y)
      expected: -sqrt(y)/sqrt(x)
    - expr: diff((9 - sqrt(x))**2, x)
      expected: -(9 - sqrt(x))/sqrt(x)
    - expr: '(sqrt(x) + sqrt(y)).subs({x: 16, y: 25})'
      expected: "9"
    - expr: '(-sqrt(y)/sqrt(x)).subs({x: 16, y: 25})'
      expected: -Rational(5, 4)
    - expr: diff((9 - sqrt(x))**2, x).subs(x, 16)
      expected: -Rational(5, 4)
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-6
number: "4.8.6"
tier: standard
topics:
  - implicit-differentiation
statement: |
  Find a formula for the derivative \(y'\) at the point \((x, y)\) of the curve \(\tan\left(\dfrac{x}{y}\right) = x + y\).
solution: |
  Differentiate both sides with respect to \(x\). The chain rule on the tangent gives \(\sec^{2}\left(\frac{x}{y}\right)\) times the derivative of \(\frac{x}{y}\), and the quotient rule gives
  \[
  \frac{d}{dx}\left(\frac{x}{y}\right) = \frac{y - x\,y'}{y^{2}}.
  \]
  The right side has derivative \(1 + y'\), so
  \[
  \sec^{2}\left(\frac{x}{y}\right)\frac{y - x\,y'}{y^{2}} = 1 + y'.
  \]
  Multiply by \(y^{2}\), and write \(s = \sec^{2}\left(\frac{x}{y}\right)\):
  \[
  s\,y - s\,x\,y' = y^{2} + y^{2}y'.
  \]
  Collect the terms in \(y'\):
  \[
  s\,y - y^{2} = y'\,(y^{2} + s\,x).
  \]
  When \(y \neq 0\) and \(y^{2} + s\,x \neq 0\),
  \[
  y' = \frac{y\sec^{2}\left(\frac{x}{y}\right) - y^{2}}{x\sec^{2}\left(\frac{x}{y}\right) + y^{2}}.
  \]
provenance: handout-answer
steps:
  - |
    The chain and quotient rules give \(\sec^{2}\left(\frac{x}{y}\right)\frac{y - x\,y'}{y^{2}} = 1 + y'\).
  - |
    Clearing \(y^{2}\) and collecting the terms in \(y'\) gives \(s\,y - y^{2} = y'\,(y^{2} + s\,x)\), with \(s = \sec^{2}\left(\frac{x}{y}\right)\).
  - |
    Solving gives \(y' = \frac{y\,s - y^{2}}{x\,s + y^{2}}\).
verification:
  checks:
    - expr: -diff(tan(x/y) - x - y, x)/diff(tan(x/y) - x - y, y)
      expected: (y/cos(x/y)**2 - y**2)/(x/cos(x/y)**2 + y**2)
    - expr: '(tan(x/y) - x - y).subs({x: pi/(4 + pi), y: 4/(4 + pi)})'
      expected: "0"
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-7
number: "4.8.7"
tier: standard
topics:
  - implicit-differentiation
statement: |
  Find a formula for the derivative \(y'\) at the point \((x, y)\) of the curve \(\sin(x + y) = xy\).
solution: |
  Differentiate both sides with respect to \(x\). The chain rule gives \(\cos(x + y)(1 + y')\) on the left, and the product rule gives \(y + x\,y'\) on the right:
  \[
  \cos(x + y) + \cos(x + y)\,y' = y + x\,y'.
  \]
  Collect the terms in \(y'\):
  \[
  y'\,\bigl(\cos(x + y) - x\bigr) = y - \cos(x + y).
  \]
  When \(\cos(x + y) \neq x\),
  \[
  y' = \frac{y - \cos(x + y)}{\cos(x + y) - x}.
  \]

  As a check, the point \((0, 0)\) lies on the curve, and the formula gives \(y' = \frac{0 - 1}{1 - 0} = -1\). Near the origin \(\sin(x + y) \approx x + y\) and \(xy\) is of second order, so the curve behaves like \(x + y = 0\), which has slope \(-1\).
provenance: handout-answer
steps:
  - |
    Differentiating gives \(\cos(x + y)(1 + y') = y + x\,y'\).
  - |
    Collecting the terms in \(y'\) gives \(y'(\cos(x + y) - x) = y - \cos(x + y)\).
  - |
    When \(\cos(x + y) \neq x\), \(y' = \frac{y - \cos(x + y)}{\cos(x + y) - x}\).
verification:
  checks:
    - expr: -diff(sin(x + y) - x*y, x)/diff(sin(x + y) - x*y, y)
      expected: (y - cos(x + y))/(cos(x + y) - x)
    - expr: '(sin(x + y) - x*y).subs({x: 0, y: 0})'
      expected: "0"
    - expr: '((y - cos(x + y))/(cos(x + y) - x)).subs({x: 0, y: 0})'
      expected: "-1"
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-9
number: "4.8.9"
tier: standard
topics:
  - implicit-differentiation
statement: |
  A hyperbola passing through \((8, 6)\) consists of all points whose distance from the origin is a constant more than its distance from the point \((5, 2)\). Find the slope of the tangent line to the hyperbola at \((8, 6)\).
solution: |
  **The equation.** The distance from \((8, 6)\) to the origin is \(\sqrt{64 + 36} = 10\), and the distance from \((8, 6)\) to \((5, 2)\) is \(\sqrt{9 + 16} = 5\). The constant is \(10 - 5 = 5\), so the hyperbola is
  \[
  \sqrt{x^{2} + y^{2}} = \sqrt{(x - 5)^{2} + (y - 2)^{2}} + 5.
  \]

  **Differentiation.** Differentiate both sides with respect to \(x\). The chain rule on each root gives
  \[
  \frac{x + y\,y'}{\sqrt{x^{2} + y^{2}}} = \frac{(x - 5) + (y - 2)\,y'}{\sqrt{(x - 5)^{2} + (y - 2)^{2}}}.
  \]

  **At \((8, 6)\).** The two roots equal \(10\) and \(5\), so
  \[
  \begin{aligned}
  \frac{8 + 6y'}{10} &= \frac{3 + 4y'}{5},\\
  8 + 6y' &= 6 + 8y',\\
  2 &= 2y'.
  \end{aligned}
  \]
  The slope of the tangent line at \((8, 6)\) is \(y' = 1\).
provenance: handout-answer
steps:
  - |
    The constant is \(10 - 5 = 5\), so the curve is \(\sqrt{x^{2} + y^{2}} - \sqrt{(x - 5)^{2} + (y - 2)^{2}} = 5\).
  - |
    Differentiating gives \(\frac{x + y\,y'}{\sqrt{x^{2} + y^{2}}} = \frac{(x - 5) + (y - 2)\,y'}{\sqrt{(x - 5)^{2} + (y - 2)^{2}}}\).
  - |
    At \((8, 6)\) this reads \(\frac{8 + 6y'}{10} = \frac{3 + 4y'}{5}\), so \(y' = 1\).
verification:
  checks:
    - expr: sqrt(8**2 + 6**2) - sqrt((8 - 5)**2 + (6 - 2)**2)
      expected: "5"
    - expr: '(sqrt(x**2 + y**2) - sqrt((x - 5)**2 + (y - 2)**2) - 5).subs({x: 8, y: 6})'
      expected: "0"
    - expr: '(-diff(sqrt(x**2 + y**2) - sqrt((x - 5)**2 + (y - 2)**2) - 5, x)/diff(sqrt(x**2 + y**2) - sqrt((x - 5)**2 + (y - 2)**2) - 5, y)).subs({x: 8, y: 6})'
      expected: "1"
    - expr: solve((8 + 6*y)/10 - (3 + 4*y)/5, y)
      expected: "[1]"
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-10
number: "4.8.10"
tier: standard
topics:
  - implicit-differentiation
statement: |
  The points \((x, y)\) whose distance to \((x_{1}, y_{1})\) plus distance to \((x_{2}, y_{2})\) equals the constant \(2a\) form an ellipse with the implicit equation
  \[
  \sqrt{(x - x_{1})^{2} + (y - y_{1})^{2}} + \sqrt{(x - x_{2})^{2} + (y - y_{2})^{2}} = 2a.
  \]
  Compute \(y'\), the slope of the ellipse at \((x, y)\), by implicit differentiation.
solution: |
  Write \(d_{1} = \sqrt{(x - x_{1})^{2} + (y - y_{1})^{2}}\) and \(d_{2} = \sqrt{(x - x_{2})^{2} + (y - y_{2})^{2}}\). The chain rule gives
  \[
  \begin{aligned}
  \frac{d}{dx}\,d_{1} &= \frac{(x - x_{1}) + (y - y_{1})\,y'}{d_{1}},\\
  \frac{d}{dx}\,d_{2} &= \frac{(x - x_{2}) + (y - y_{2})\,y'}{d_{2}}.
  \end{aligned}
  \]
  The right side \(2a\) is constant, so
  \[
  \frac{(x - x_{1}) + (y - y_{1})\,y'}{d_{1}} + \frac{(x - x_{2}) + (y - y_{2})\,y'}{d_{2}} = 0.
  \]
  Collect the terms in \(y'\):
  \[
  y'\left(\frac{y - y_{1}}{d_{1}} + \frac{y - y_{2}}{d_{2}}\right) = -\left(\frac{x - x_{1}}{d_{1}} + \frac{x - x_{2}}{d_{2}}\right).
  \]
  When the bracket on the left is non-zero,
  \[
  y' = -\,\frac{\dfrac{x - x_{1}}{d_{1}} + \dfrac{x - x_{2}}{d_{2}}}{\dfrac{y - y_{1}}{d_{1}} + \dfrac{y - y_{2}}{d_{2}}}.
  \]

  As a check, take the foci \((-3, 0)\) and \((3, 0)\) and \(2a = 10\), which gives the ellipse \(\frac{x^{2}}{25} + \frac{y^{2}}{16} = 1\). At \(\left(3, \frac{16}{5}\right)\) the distances are \(d_{1} = \frac{34}{5}\) and \(d_{2} = \frac{16}{5}\), and the formula gives
  \[
  y' = -\frac{\frac{15}{17} + 0}{\frac{8}{17} + 1} = -\frac{3}{5}.
  \]
  Implicit differentiation of \(\frac{x^{2}}{25} + \frac{y^{2}}{16} = 1\) gives \(y' = -\frac{16x}{25y} = -\frac{3}{5}\) at the same point.
provenance: written-for-site
steps:
  - |
    Write \(d_{1}\) and \(d_{2}\) for the two distances and differentiate each by the chain rule.
  - |
    The differentiated equation is \(\frac{(x - x_{1}) + (y - y_{1})y'}{d_{1}} + \frac{(x - x_{2}) + (y - y_{2})y'}{d_{2}} = 0\).
  - |
    Solving gives \(y' = -\frac{(x - x_{1})/d_{1} + (x - x_{2})/d_{2}}{(y - y_{1})/d_{1} + (y - y_{2})/d_{2}}\).
verification:
  checks:
    - expr: -diff(sqrt((x - x1)**2 + (y - y1)**2) + sqrt((x - x2)**2 + (y - y2)**2) - 2*a, x)/diff(sqrt((x - x1)**2 + (y - y1)**2) + sqrt((x - x2)**2 + (y - y2)**2) - 2*a, y)
      expected: -((x - x1)/sqrt((x - x1)**2 + (y - y1)**2) + (x - x2)/sqrt((x - x2)**2 + (y - y2)**2))/((y - y1)/sqrt((x - x1)**2 + (y - y1)**2) + (y - y2)/sqrt((x - x2)**2 + (y - y2)**2))
    - expr: '(sqrt((x + 3)**2 + y**2) + sqrt((x - 3)**2 + y**2)).subs({x: 3, y: Rational(16, 5)})'
      expected: "10"
    - expr: '(-((x - x1)/sqrt((x - x1)**2 + (y - y1)**2) + (x - x2)/sqrt((x - x2)**2 + (y - y2)**2))/((y - y1)/sqrt((x - x1)**2 + (y - y1)**2) + (y - y2)/sqrt((x - x2)**2 + (y - y2)**2))).subs({x1: -3, y1: 0, x2: 3, y2: 0, x: 3, y: Rational(16, 5)})'
      expected: -Rational(3, 5)
    - expr: '(-16*x/(25*y)).subs({x: 3, y: Rational(16, 5)})'
      expected: -Rational(3, 5)
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-11
number: "4.8.11"
tier: basic
topics:
  - implicit-differentiation
statement: |
  If \(y = \log_{a} x\), then \(a^{y} = x\). Use implicit differentiation to find \(y'\).
solution: |
  Here \(a > 0\), \(a \neq 1\) and \(x > 0\). Differentiate both sides of \(a^{y} = x\) with respect to \(x\). Since \(a^{y} = e^{y \ln a}\), the chain rule gives \(a^{y}\ln a\cdot y'\) on the left, and the right side has derivative \(1\):
  \[
  a^{y}\,\ln a\;y' = 1.
  \]
  Then \(y' = \frac{1}{a^{y}\ln a}\). The equation says \(a^{y} = x\), so
  \[
  y' = \frac{1}{x\ln a}.
  \]
provenance: written-for-site
steps:
  - |
    Differentiating \(a^{y} = x\) gives \(a^{y}\ln a\;y' = 1\).
  - |
    Substituting \(a^{y} = x\) gives \(y' = \frac{1}{x\ln a}\).
verification:
  checks:
    - expr: -diff(a**y - x, x)/diff(a**y - x, y)
      expected: 1/(a**y*log(a))
    - expr: (1/(a**y*log(a))).subs(y, log(x)/log(a))
      expected: 1/(x*log(a))
    - expr: diff(log(x)/log(a), x)
      expected: 1/(x*log(a))
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-12
number: "4.8.12"
tier: standard
topics:
  - implicit-differentiation
statement: |
  The graph of the equation \(x^{2} - xy + y^{2} = 9\) is an ellipse. Find the lines tangent to this curve at the two points where it intersects the \(x\)-axis. Show that these lines are parallel.
solution: |
  **The slope formula.** Differentiate both sides with respect to \(x\). The product rule gives \(y + x\,y'\) for \(xy\), so
  \[
  2x - y - x\,y' + 2y\,y' = 0.
  \]
  Collect the terms in \(y'\): \(y'(2y - x) = y - 2x\). When \(2y \neq x\),
  \[
  y' = \frac{y - 2x}{2y - x}.
  \]

  **The points.** On the \(x\)-axis \(y = 0\), so \(x^{2} = 9\). The points are \((3, 0)\) and \((-3, 0)\). At both of them \(2y - x = \mp 3\) is non-zero, so the formula applies.

  **The slopes.**
  \[
  \begin{aligned}
  \text{at } (3, 0):\quad y' &= \frac{0 - 6}{0 - 3} = 2,\\
  \text{at } (-3, 0):\quad y' &= \frac{0 + 6}{0 + 3} = 2.
  \end{aligned}
  \]

  **The tangent lines.**
  \[
  \begin{aligned}
  \text{at } (3, 0):\quad y &= 2(x - 3) = 2x - 6,\\
  \text{at } (-3, 0):\quad y &= 2(x + 3) = 2x + 6.
  \end{aligned}
  \]
  Both lines have slope \(2\), and their intercepts differ, so they are two distinct parallel lines. The tangent lines are \(y = 2x \pm 6\).
provenance: handout-answer
steps:
  - |
    Differentiating gives \(y' = \frac{y - 2x}{2y - x}\) when \(2y \neq x\).
  - |
    The points on the \(x\)-axis are \((3, 0)\) and \((-3, 0)\).
  - |
    Both slopes equal \(2\), which gives the tangent lines \(y = 2x - 6\) and \(y = 2x + 6\).
verification:
  checks:
    - expr: -diff(x**2 - x*y + y**2 - 9, x)/diff(x**2 - x*y + y**2 - 9, y)
      expected: (y - 2*x)/(2*y - x)
    - expr: solveset(x**2 - 9, x)
      expected: FiniteSet(-3, 3)
    - expr: '((y - 2*x)/(2*y - x)).subs({x: 3, y: 0})'
      expected: "2"
    - expr: '((y - 2*x)/(2*y - x)).subs({x: -3, y: 0})'
      expected: "2"
    - expr: (2*(x - 3)).subs(x, 0)
      expected: "-6"
    - expr: (2*(x + 3)).subs(x, 0)
      expected: "6"
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-14
number: "4.8.14"
tier: standard
topics:
  - implicit-differentiation
statement: |
  Find the points on the ellipse \(x^{2} - xy + y^{2} = 9\) where the slope of the tangent is horizontal and where it is vertical.
solution: |
  **The slope formula.** Differentiating the equation gives, as for any point of the curve,
  \[
  y' = \frac{y - 2x}{2y - x}.
  \]

  **Horizontal tangents.** The slope is \(0\) when the numerator vanishes and the denominator does not: \(y = 2x\). Substituting into the equation gives
  \[
  x^{2} - 2x^{2} + 4x^{2} = 3x^{2} = 9,
  \]
  so \(x = \pm\sqrt{3}\) and \(y = 2x = \pm 2\sqrt{3}\). At these points \(2y - x = 3x \neq 0\). The horizontal tangents are at \(\left(\sqrt{3}, 2\sqrt{3}\right)\) and \(\left(-\sqrt{3}, -2\sqrt{3}\right)\).

  **Vertical tangents.** The tangent is vertical when the denominator vanishes and the numerator does not: \(x = 2y\). Substituting gives
  \[
  4y^{2} - 2y^{2} + y^{2} = 3y^{2} = 9,
  \]
  so \(y = \pm\sqrt{3}\) and \(x = 2y = \pm 2\sqrt{3}\). At these points \(y - 2x = -3y \neq 0\). The vertical tangents are at \(\left(2\sqrt{3}, \sqrt{3}\right)\) and \(\left(-2\sqrt{3}, -\sqrt{3}\right)\).

  The ellipse has horizontal tangents at \(\left(\pm\sqrt{3}, \pm 2\sqrt{3}\right)\) and vertical tangents at \(\left(\pm 2\sqrt{3}, \pm\sqrt{3}\right)\), with matching signs.
provenance: handout-answer
steps:
  - |
    The slope is \(y' = \frac{y - 2x}{2y - x}\).
  - |
    Horizontal: \(y = 2x\) gives \(3x^{2} = 9\), so the points are \(\left(\sqrt{3}, 2\sqrt{3}\right)\) and \(\left(-\sqrt{3}, -2\sqrt{3}\right)\).
  - |
    Vertical: \(x = 2y\) gives \(3y^{2} = 9\), so the points are \(\left(2\sqrt{3}, \sqrt{3}\right)\) and \(\left(-2\sqrt{3}, -\sqrt{3}\right)\).
verification:
  checks:
    - expr: -diff(x**2 - x*y + y**2 - 9, x)/diff(x**2 - x*y + y**2 - 9, y)
      expected: (y - 2*x)/(2*y - x)
    - expr: (x**2 - x*y + y**2).subs(y, 2*x)
      expected: 3*x**2
    - expr: solveset(3*x**2 - 9, x)
      expected: FiniteSet(-sqrt(3), sqrt(3))
    - expr: '(x**2 - x*y + y**2).subs({x: sqrt(3), y: 2*sqrt(3)})'
      expected: "9"
    - expr: '(x**2 - x*y + y**2).subs({x: -sqrt(3), y: -2*sqrt(3)})'
      expected: "9"
    - expr: '(2*y - x).subs({x: sqrt(3), y: 2*sqrt(3)})'
      expected: 3*sqrt(3)
    - expr: (x**2 - x*y + y**2).subs(x, 2*y)
      expected: 3*y**2
    - expr: '(x**2 - x*y + y**2).subs({x: 2*sqrt(3), y: sqrt(3)})'
      expected: "9"
    - expr: '(x**2 - x*y + y**2).subs({x: -2*sqrt(3), y: -sqrt(3)})'
      expected: "9"
    - expr: '(y - 2*x).subs({x: 2*sqrt(3), y: sqrt(3)})'
      expected: -3*sqrt(3)
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-15
number: "4.8.15"
tier: standard
topics:
  - implicit-differentiation
statement: |
  Find an equation for the tangent line to \(x^{4} = y^{2} + x^{2}\) at \(\left(2, \sqrt{12}\right)\). (This curve is the kampyle of Eudoxus.)
solution: |
  The point lies on the curve, because \(2^{4} = 16\) and \(\left(\sqrt{12}\right)^{2} + 2^{2} = 12 + 4 = 16\).

  Differentiate both sides with respect to \(x\). The chain rule gives \(2y\,y'\) for \(y^{2}\), so
  \[
  4x^{3} = 2y\,y' + 2x.
  \]
  Solving for \(y'\) gives, when \(y \neq 0\),
  \[
  y' = \frac{4x^{3} - 2x}{2y} = \frac{2x^{3} - x}{y}.
  \]
  At \(\left(2, 2\sqrt{3}\right)\), where \(\sqrt{12} = 2\sqrt{3}\),
  \[
  y' = \frac{16 - 2}{2\sqrt{3}} = \frac{7}{\sqrt{3}}.
  \]

  The tangent line through \(\left(2, 2\sqrt{3}\right)\) with this slope is
  \[
  \begin{aligned}
  y - 2\sqrt{3} &= \frac{7}{\sqrt{3}}(x - 2),\\
  y &= \frac{7x}{\sqrt{3}} - \frac{14}{\sqrt{3}} + \frac{6}{\sqrt{3}}\\
  &= \frac{7x}{\sqrt{3}} - \frac{8}{\sqrt{3}}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - |
    The point lies on the curve, since \(16 = 12 + 4\).
  - |
    Differentiating gives \(4x^{3} = 2y\,y' + 2x\), so \(y' = \frac{2x^{3} - x}{y}\).
  - |
    At \(\left(2, \sqrt{12}\right)\) the slope is \(\frac{7}{\sqrt{3}}\), and the tangent line is \(y = \frac{7x}{\sqrt{3}} - \frac{8}{\sqrt{3}}\).
verification:
  checks:
    - expr: '(x**4 - y**2 - x**2).subs({x: 2, y: sqrt(12)})'
      expected: "0"
    - expr: -diff(x**4 - y**2 - x**2, x)/diff(x**4 - y**2 - x**2, y)
      expected: (2*x**3 - x)/y
    - expr: '((2*x**3 - x)/y).subs({x: 2, y: sqrt(12)})'
      expected: 7/sqrt(3)
    - expr: 2*sqrt(3) + 7/sqrt(3)*(x - 2)
      expected: 7*x/sqrt(3) - 8/sqrt(3)
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-16
number: "4.8.16"
tier: standard
topics:
  - implicit-differentiation
statement: |
  Find an equation for the tangent line to \(x^{2/3} + y^{2/3} = a^{2/3}\) at a point \((x_{1}, y_{1})\) on the curve, with \(x_{1} \neq 0\) and \(y_{1} \neq 0\). (This curve is an astroid.)
solution: |
  In this exercise \(t^{1/3}\) denotes the real cube root, which exists for negative \(t\) as well. Differentiate both sides with respect to \(x\). The right side is constant, and the chain rule gives \(\frac{2}{3}y^{-1/3}y'\) for \(y^{2/3}\):
  \[
  \frac{2}{3}x^{-1/3} + \frac{2}{3}y^{-1/3}\,y' = 0.
  \]
  Solving for \(y'\) gives, when \(x \neq 0\) and \(y \neq 0\),
  \[
  y' = -\frac{x^{-1/3}}{y^{-1/3}} = -\frac{y^{1/3}}{x^{1/3}}.
  \]
  At \((x_{1}, y_{1})\) the slope is \(-\frac{y_{1}^{1/3}}{x_{1}^{1/3}}\). The tangent line is \(y - y_{1} = -\frac{y_{1}^{1/3}}{x_{1}^{1/3}}(x - x_{1})\), that is
  \[
  y = \frac{-y_{1}^{1/3}\,x + y_{1}^{1/3}\,x_{1} + x_{1}^{1/3}\,y_{1}}{x_{1}^{1/3}}.
  \]

  For example, on \(x^{2/3} + y^{2/3} = 4\) the point \(\left(1, 3\sqrt{3}\right)\) has slope \(-\frac{(3\sqrt{3})^{1/3}}{1} = -\sqrt{3}\).
provenance: handout-answer
steps:
  - |
    Differentiating gives \(\frac{2}{3}x^{-1/3} + \frac{2}{3}y^{-1/3}\,y' = 0\).
  - |
    Solving gives \(y' = -\frac{y^{1/3}}{x^{1/3}}\).
  - |
    The tangent line at \((x_{1}, y_{1})\) is \(y - y_{1} = -\frac{y_{1}^{1/3}}{x_{1}^{1/3}}(x - x_{1})\).
verification:
  checks:
    - expr: -diff(x**Rational(2, 3) + y**Rational(2, 3) - a**Rational(2, 3), x)/diff(x**Rational(2, 3) + y**Rational(2, 3) - a**Rational(2, 3), y)
      expected: -y**Rational(1, 3)/x**Rational(1, 3)
    - expr: (y1 - y1**Rational(1, 3)/x1**Rational(1, 3)*(x - x1)) - (-y1**Rational(1, 3)*x + y1**Rational(1, 3)*x1 + x1**Rational(1, 3)*y1)/x1**Rational(1, 3)
      expected: "0"
    - expr: (y1 - y1**Rational(1, 3)/x1**Rational(1, 3)*(x - x1)).subs(x, x1)
      expected: y1
    - expr: '(x**Rational(2, 3) + y**Rational(2, 3)).subs({x: 1, y: 3*sqrt(3)})'
      expected: "4"
    - expr: '(-y**Rational(1, 3)/x**Rational(1, 3)).subs({x: 1, y: 3*sqrt(3)})'
      expected: -sqrt(3)
:::


::: exercise
id: l2-implicit-differentiation.handout-4-8-17
number: "4.8.17"
tier: exam
topics:
  - implicit-differentiation
statement: |
  Find an equation for the tangent line to \((x^{2} + y^{2})^{2} = x^{2} - y^{2}\) at a point \((x_{1}, y_{1})\) on the curve, when \(y_{1} \neq 0\). (This curve is a lemniscate.)
solution: |
  Differentiate both sides with respect to \(x\). The chain rule on the square gives \(2(x^{2} + y^{2})\) times the derivative of \(x^{2} + y^{2}\), which is \(2x + 2y\,y'\):
  \[
  2(x^{2} + y^{2})(2x + 2y\,y') = 2x - 2y\,y'.
  \]
  Divide by \(2\) and expand the left side:
  \[
  2x(x^{2} + y^{2}) + 2y(x^{2} + y^{2})\,y' = x - y\,y'.
  \]
  Collect the terms in \(y'\):
  \[
  y'\,\bigl(2y(x^{2} + y^{2}) + y\bigr) = x - 2x(x^{2} + y^{2}).
  \]
  The bracket equals \(y\,(1 + 2x^{2} + 2y^{2})\), and \(1 + 2x^{2} + 2y^{2} > 0\). For \(y \neq 0\),
  \[
  y' = \frac{x\,(1 - 2x^{2} - 2y^{2})}{y\,(1 + 2x^{2} + 2y^{2})}.
  \]

  The slope at \((x_{1}, y_{1})\) is
  \[
  m = \frac{x_{1}\,(1 - 2x_{1}^{2} - 2y_{1}^{2})}{y_{1}\,(1 + 2x_{1}^{2} + 2y_{1}^{2})},
  \]
  and the tangent line is
  \[
  y - y_{1} = \frac{x_{1}\,(1 - 2x_{1}^{2} - 2y_{1}^{2})}{y_{1}\,(1 + 2x_{1}^{2} + 2y_{1}^{2})}\,(x - x_{1}).
  \]

  As a check, solve the curve for \(y\) on the upper branch. The equation is quadratic in \(y^{2}\), and
  \[
  y^{2} = \frac{-(2x^{2} + 1) + \sqrt{8x^{2} + 1}}{2}.
  \]
  At \(x = \frac{1}{2}\), the derivative of \(y = \sqrt{y^{2}}\) taken from this formula agrees with \(m\), about \(0.227\).
provenance: handout-answer
discrepancy: |
  The handout prints the slope as \(\frac{2x_{1}^{3} + 2x_{1}y_{1}^{2} - x_{1}}{2y_{1}^{3} + 2y_{1}x_{1}^{2} + y_{1}}\). The verified slope is \(\frac{x_{1}(1 - 2x_{1}^{2} - 2y_{1}^{2})}{y_{1}(1 + 2x_{1}^{2} + 2y_{1}^{2})}\), which is the negative of the printed fraction.
steps:
  - |
    Differentiating gives \(2(x^{2} + y^{2})(2x + 2y\,y') = 2x - 2y\,y'\).
  - |
    Collecting the terms in \(y'\) gives \(y'\,y\,(1 + 2x^{2} + 2y^{2}) = x\,(1 - 2x^{2} - 2y^{2})\).
  - |
    For \(y_{1} \neq 0\) the slope at \((x_{1}, y_{1})\) is \(m = \frac{x_{1}(1 - 2x_{1}^{2} - 2y_{1}^{2})}{y_{1}(1 + 2x_{1}^{2} + 2y_{1}^{2})}\).
  - |
    The tangent line is \(y - y_{1} = m\,(x - x_{1})\).
verification:
  checks:
    - expr: -diff((x**2 + y**2)**2 - x**2 + y**2, x)/diff((x**2 + y**2)**2 - x**2 + y**2, y)
      expected: x*(1 - 2*x**2 - 2*y**2)/(y*(1 + 2*x**2 + 2*y**2))
    - expr: (x1*(1 - 2*x1**2 - 2*y1**2)/(y1*(1 + 2*x1**2 + 2*y1**2)) + (2*x1**3 + 2*x1*y1**2 - x1)/(2*y1**3 + 2*y1*x1**2 + y1))
      expected: "0"
    - expr: (y1 + x1*(1 - 2*x1**2 - 2*y1**2)/(y1*(1 + 2*x1**2 + 2*y1**2))*(x - x1)).subs(x, x1)
      expected: y1
    - expr: ((x**2 + y**2)**2 - x**2 + y**2).subs(y**2, (-(2*x**2 + 1) + sqrt(8*x**2 + 1))/2).expand()
      expected: "0"
    - expr: 'floor(10**8*Abs(diff(sqrt((-(2*x**2 + 1) + sqrt(8*x**2 + 1))/2), x).subs(x, Rational(1, 2)) - (x*(1 - 2*x**2 - 2*y**2)/(y*(1 + 2*x**2 + 2*y**2))).subs({x: Rational(1, 2), y: sqrt((-(2*x**2 + 1) + sqrt(8*x**2 + 1))/2).subs(x, Rational(1, 2))})))'
      expected: "0"
:::
