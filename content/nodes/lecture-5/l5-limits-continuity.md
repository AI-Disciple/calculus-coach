---
id: l5-limits-continuity
lecture: 5
order: 1
title: Limits and continuity in several variables
prerequisites: [l4-functions-several-variables, l1-limits]
sources:
  - { source: handout, section: "14.2", page: 353 }
  - { source: handout, section: "14.2", page: 356 }
  - { source: lecture-notes-5, page: 1 }
  - { source: midterm-2021, page: 1 }
examWeight: low
examWeightNote: Never examined on the finals.
taught: lecture
status: reviewed
notation: |
  \(f_x\), \(\frac{df}{dx}\), \(d_x f\) and \(\frac{\partial f}{\partial x}\) are the same symbol, the partial derivative of \(f\) in \(x\). The limit in this node uses the distance \(\|x-x_0\|\). On the handout that distance is the square root \(\sqrt{(x-a)^2+(y-b)^2}\).
---

::: section
title: Limit in several variables
:::

::: formal-statement
kind: definition
title: Limit in several variables
source:
  source: lecture-notes-5
  page: 1
text: |
  A function \(f:\mathbb{R}^n\to\mathbb{R}\) has a **limit** at a point
  \[
  x_0=\begin{pmatrix}x_{01}\\ \vdots\\ x_{0n}\end{pmatrix}
  \]
  when there is a number \(\ell\in\mathbb{R}\) such that \(\|x-x_0\|\) going to \(0\) forces \(|f(x)-\ell|\) to go to \(0\).
:::

::: plain-explanation
text: |
  The **norm** \(\|x-x_0\|\) is the distance from \(x\) to \(x_0\). The limit asks the heights \(f(x)\) to gather at one number \(\ell\) whenever that distance shrinks. In the \((x_1,x_2)\)-plane the point \(x\) may travel along a straight path or along a path that bends, and every such path has to send \(f(x)\) to the same \(\ell\).
:::

::: trap
text: |
  A limit looks at heights near the point. The formula may be undefined at the point itself, and the limit can still exist. The expression \(\frac{x^2+y^2}{x^2+y^2}\) equals \(1\) at every point except the origin, so its limit at the origin is \(1\). The claim that an undefined formula has no limit fails on this function.
:::

::: going-deeper
title: Epsilon-delta form of the limit
text: |
  Definition 14.2.2 says that \(\lim_{(x, y)\to(a, b)} f(x, y)=L\) when, for every \(\epsilon>0\), there is a \(\delta>0\) such that
  \[
  0<\sqrt{(x-a)^2+(y-b)^2}<\delta
  \]
  implies \(|f(x, y)-L|<\epsilon\). The square root is the distance from \((x, y)\) to \((a, b)\). The lecture writes this distance as a norm and writes the limit value as \(\ell\).
:::

::: key-points
text: |
  - A function \(f:\mathbb{R}^n\to\mathbb{R}\) has limit \(\ell\) at \(x_0\) when \(\|x-x_0\|\) going to \(0\) forces \(|f(x)-\ell|\) to go to \(0\).
  - The point \(x\) may travel along a straight path or along a path that bends, and every such path has to send \(f(x)\) to the same \(\ell\).
  - The usual slip claims that a formula which is undefined at \(x_0\) has no limit there. The expression \(\frac{x^2+y^2}{x^2+y^2}\) is undefined at the origin, and its limit at the origin is \(1\).
:::

::: concept-question
id: l5-limits-continuity.q-a3068bf5
question: |
  The handout writes a limit test with \(0<\sqrt{(x-a)^2+(y-b)^2}<\delta\). What does the square root measure?
options:
  - text: |
      The distance from \((x, y)\) to \((a, b)\).
    correct: true
  - text: |
      The partial derivative \(\frac{\partial f}{\partial x}\).
  - text: |
      The limit value \(L\).
explanation: |
  The square root is the distance from \((x, y)\) to \((a, b)\). In the lecture that distance is the norm \(\|(x, y)-(a, b)\|\).
:::

::: concept-question
id: l5-limits-continuity.q-b46f3d7a
question: |
  The function \(f\) is given by the formula \(\frac{x^2+y^2}{x^2+y^2}\) at every point except the origin, where the formula is undefined and \(f\) has no value. Which statement is true?
options:
  - text: |
      The limit of \(f\) at the origin is \(1\), and \(f\) is not continuous at the origin.
    correct: true
  - text: |
      The limit of \(f\) at the origin does not exist, because the formula is undefined there.
  - text: |
      The limit of \(f\) at the origin is \(1\), and \(f\) is continuous at the origin.
  - text: |
      The limit of \(f\) at the origin is \(0\), because the formula gives \(\frac{0}{0}\) there.
explanation: |
  A limit looks only at the points near the origin. Off the origin \(f\) equals \(1\), so the limit is \(1\). Continuity needs the limit to equal the value \(f(0, 0)\), and \(f\) has no value at the origin, so \(f\) is not continuous there. Assigning \(f(0, 0)=1\) would make it continuous.
:::

::: section
title: Continuity
:::

::: formal-statement
kind: definition
title: Continuity
source:
  source: lecture-notes-5
  page: 1
text: |
  If \(f\) has limit \(\ell\) at \(x_0\) and \(\ell=f(x_0)\), then \(f\) is **continuous** at \(x_0\).
:::

::: plain-explanation
text: |
  Draw the graph over the \((x_1, x_2)\)-plane. Continuity means each nearby point of the graph sits near the height \(f(x_0)\).
:::

::: formal-statement
kind: theorem
title: Polynomials and rational functions
source:
  source: handout
  section: "14.2"
  page: 356
text: |
  A **polynomial** in two variables is a sum of terms \(a x^m y^n\), where \(a\) is a real number and \(m\) and \(n\) are non-negative integers. A **rational function** is a quotient of polynomials. Continuity holds as follows:

  - Polynomials are continuous everywhere.
  - Rational functions are continuous everywhere they are defined.
:::

::: plain-explanation
text: |
  Substitute the coordinates of the point. The substitution gives the limit in two cases:

  - for a polynomial, at every point,
  - for a rational function, at every point where the denominator is not \(0\).
:::

::: key-points
text: |
  - A function \(f\) with limit \(\ell\) at \(x_0\) is continuous at \(x_0\) when \(\ell=f(x_0)\).
  - Polynomials are continuous everywhere. Rational functions are continuous everywhere they are defined.
  - Substituting the coordinates of the point gives the limit of a polynomial at every point, and the limit of a rational function at every point where the denominator is not \(0\).
:::

::: concept-question
id: l5-limits-continuity.q-ea29cbf3
question: |
  The function \(f\) has limit \(\ell\) at \(x_0\). When is \(f\) continuous at \(x_0\)?
options:
  - text: |
      When \(\ell=f(x_0)\).
    correct: true
  - text: |
      When \(\ell=0\).
  - text: |
      When both partial derivatives exist at \(x_0\).
explanation: |
  Continuity holds when the limit value equals the value of the function at the point, that is when \(\ell=f(x_0)\).
:::

::: exercise
id: l5-limits-continuity.polynomial-value
tier: basic
topics:
  - limits
  - continuity
statement: |
  Compute \(\displaystyle\lim_{(x, y)\to(1, 2)}(x^2+xy)\).
solution: |
  The expression \(x^2+xy\) is a polynomial, so it is continuous at \((1, 2)\). The value at that point is \(1^2+1\cdot 2=3\). The limit equals \(3\).
provenance: written-for-site
steps:
  - The expression is a polynomial, hence continuous at \((1, 2)\).
  - Substitute to obtain the value \(3\).
verification:
  checks:
    - expr: 1**2 + 1*2
      expected: "3"
:::

::: section
title: The two-path test
:::

::: formal-statement
kind: method
title: Two-path test
source:
  source: handout
  section: "14.2"
  page: 353
text: |
  Suppose two paths approach \(x_0\) and the limits of \(f\) along those paths are different numbers. Then \(f\) has no limit at \(x_0\).
:::

::: plain-explanation
text: |
  1. Restrict \(f\) to one path and compute that one-variable limit.
  2. Do the same on a second path.
  3. If the two numbers differ, the paths do not share a limit \(\ell\).
:::

::: tip
text: |
  Straight lines through the point can share one limit, and a parabola can give another value. The parabola has to be checked too.
:::

::: worked-example
title: No limit along the ridge
problem: |
  Consider
  \[
  f(x, y)=\frac{xy^2}{x^2+y^4}.
  \]
  Show that \(\lim_{(x, y)\to(0, 0)} f(x, y)\) does not exist.
solution: |
  **Axes.** On the axes, away from the origin, the function equals \(0\). If \(x=0\) and \(y\neq 0\), the numerator is \(0\), so \(f(0, y)=0\). If \(y=0\) and \(x\neq 0\), then \(f(x, 0)=0\). The limit along either axis is \(0\).
  **Lines.** Along the line \(y=mx\), for \(x\neq 0\),
  \[
  \begin{aligned}
  f(x, mx)&=\frac{m^2 x^3}{x^2+m^4 x^4}\\
  &=\frac{m^2 x}{1+m^4 x^2}.
  \end{aligned}
  \]
  As \(x\) approaches \(0\), the quotient approaches \(0\). Along every line through the origin, the limit is \(0\).

  **Parabola.** Along the parabola \(x=y^2\),
  \[
  \begin{aligned}
  f(y^2, y)&=\frac{y^2\cdot y^2}{y^4+y^4}\\
  &=\frac{y^4}{2y^4}\\
  &=\frac{1}{2}.
  \end{aligned}
  \]
  The height on this path is the constant \(\frac{1}{2}\), so the limit along the parabola is \(\frac{1}{2}\). The graph has a ridge of that height above \(x=y^2\). The line limits equal \(0\) and the parabola limit equals \(\frac{1}{2}\). There is no limit at \((0, 0)\).
:::

::: guided-example
title: Two lines that disagree
problem: |
  Decide whether \(\displaystyle\lim_{(x, y)\to(0, 0)}\frac{xy}{x^2+y^2}\) exists.
steps:
  - Along the path \(y=0\), with \(x\neq 0\), the expression equals \(0\). The limit along the \(x\)-axis is \(0\).
  - Along the path \(y=x\), with \(x\neq 0\), the expression equals \(\frac{x^2}{2x^2}=\frac{1}{2}\). The limit along this line is \(\frac{1}{2}\).
  - The two limits are \(0\) and \(\frac{1}{2}\). They differ, so the limit at the origin does not exist.
:::

::: trap
text: |
  Every path has to produce the same limit. Two paths that agree leave other paths open. For \(f(x, y)=\frac{xy^2}{x^2+y^4}\), the paths \(x=0\) and \(y=0\) both give the limit \(0\). The path \(x=y^2\) gives the limit \(\frac{1}{2}\). The limit at the origin does not exist.
:::

::: key-points
text: |
  - Suppose two paths approach \(x_0\) and the limits of \(f\) along those paths are different numbers. Then \(f\) has no limit at \(x_0\).
  - Each path limit is a one-variable limit of \(f\) restricted to that path.
  - The usual slip takes two paths with the same limit as proof that the limit exists. Two paths that agree leave other paths open. For \(f(x, y)=\frac{xy^2}{x^2+y^4}\), the paths \(x=0\) and \(y=0\) both give the limit \(0\), and the path \(x=y^2\) gives the limit \(\frac{1}{2}\). The limit at the origin does not exist.
:::

::: concept-question
id: l5-limits-continuity.q-5e1e136c
question: |
  Along every line \(y=mx\), the limit of \(\frac{xy^2}{x^2+y^4}\) at the origin is \(0\). What follows?
options:
  - text: |
      The limit at the origin does not exist. Along \(x=y^2\) the function equals \(\frac{1}{2}\).
    correct: true
  - text: |
      The limit at the origin equals \(0\).
  - text: |
      Defining \(f(0, 0)=0\) makes \(f\) continuous at the origin.
explanation: |
  Agreement on every straight line leaves the parabola \(x=y^2\) unchecked. On that path the function equals the constant \(\frac{1}{2}\). The path limits differ, so there is no limit at the origin. Continuity at the origin requires a limit equal to the value assigned there.
:::

::: exercise
id: l5-limits-continuity.lines-versus-parabola
tier: standard
topics:
  - limits
statement: |
  Show that
  \[
  \lim_{(x, y)\to(0, 0)}\frac{2x^2 y}{x^4+y^2}
  \]
  does not exist.
solution: |
  Along the \(y\)-axis, \(x=0\) and \(y\neq 0\), the expression equals \(0\), so that limit is \(0\). Along the line \(y=mx\), for \(x\neq 0\),
  \[
  \begin{aligned}
  \frac{2x^2(mx)}{x^4+(mx)^2}&=\frac{2mx^3}{x^4+m^2 x^2}\\
  &=\frac{2mx}{x^2+m^2}.
  \end{aligned}
  \]
  As \(x\) approaches \(0\), the quotient approaches \(0\). Along every line through the origin, the limit is \(0\).
  Along the parabola \(y=x^2\),
  \[
  \begin{aligned}
  \frac{2x^2\cdot x^2}{x^4+(x^2)^2}&=\frac{2x^4}{2x^4}\\
  &=1
  \end{aligned}
  \]
  for \(x\neq 0\). The limit along this parabola is \(1\). The line limits equal \(0\) and the parabola limit equals \(1\), so the limit at the origin does not exist.
provenance: written-for-site
steps:
  - The limit along each line through the origin is \(0\).
  - The limit along \(y=x^2\) is \(1\).
  - The path limits differ, so the limit does not exist.
verification:
  checks:
    - expr: (2*x**2*(x**2))/(x**4+(x**2)**2) - 1
      expected: "0"
    - expr: (2*x**2*(m*x))/(x**4+(m*x)**2) - (2*m*x)/(x**2+m**2)
      expected: "0"
    - expr: limit((2*m*x)/(x**2+m**2), x, 0)
      expected: "0"
    - expr: (2*(0)**2*y)/(0 + y**2)
      expected: "0"
:::

::: exercise
id: l5-limits-continuity.midterm-2021-ex4.3
number: "4.3"
statement: |
  Is \(f(x, y) = \dfrac{x^2 - y^2}{x^2 + y^2}\) continuous at \((0, 0)\)? Explain.
tier: exam
topics:
  - limits
  - continuity
solution: |
  The formula is undefined at \((0, 0)\). Along the ray at angle \(\theta\), the function is constantly \(\cos(2\theta)\). On the axes this value is:

  - \(1\) along the \(x\)-axis,
  - \(-1\) along the \(y\)-axis.

  Those two limits disagree, so \(\lim_{(x, y)\to(0, 0)} f(x, y)\) does not exist. A function whose limit at a point fails to exist is not continuous there, even after assigning any value at the origin.
provenance: written-for-site
steps:
  - Note that f is undefined at (0, 0).
  - Compare the limits 1 along y = 0 and -1 along x = 0.
  - Conclude that f is not continuous at (0, 0).
verification:
  checkable: false
  reason: The answer is a prose argument about continuity at the origin.
pastExam:
  year: 2021
  paper: Midterm
  question: "4.3"
  points: 1
:::

::: exercise
id: l5-limits-continuity.midterm-2021-ex5.4
number: "5.4"
statement: |
  Compute \(\displaystyle\lim_{(x, y)\to(\ln(1.5),\, \ln 2)} g(x, y)\).
tier: exam
topics:
  - limits
  - probability-densities
solution: |
  The point \(\bigl(\ln\frac{3}{2},\, \ln 2\bigr)\) lies in the open first quadrant, where \(g(x, y) = e^{-x-y}\) is continuous. The limit equals the value
  \[
  \begin{aligned}
  &g\bigl(\ln\tfrac{3}{2},\, \ln 2\bigr)\\
  &=e^{-\ln(3/2)}e^{-\ln 2}\\
  &=\frac{2}{3}\cdot\frac{1}{2}\\
  &=\frac{1}{3}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Evaluate e^{-x-y} at (ln(3/2), ln 2).
verification:
  checks:
    - expr: exp(-log(Rational(3, 2)))*exp(-log(2)) - Rational(1, 3)
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "5.4"
  points: 1
:::

::: sheet-item
id: l5-limits-continuity.sheet-limit
category: formula
text: |
  The function \(f\) has limit \(\ell\) at \(x_0\) when \(\|x-x_0\|\) going to \(0\) forces \(|f(x)-\ell|\) to go to \(0\). It is continuous at \(x_0\) when \(\ell=f(x_0)\).
:::

::: sheet-item
id: l5-limits-continuity.sheet-two-paths
category: recognition
text: |
  Two paths with different limits mean there is no limit. For \(\frac{xy^2}{x^2+y^4}\), every line \(y=mx\) gives \(0\) and the parabola \(x=y^2\) gives \(\frac{1}{2}\).
:::

::: exercise
id: l5-limits-continuity.ex-cubic-curve-limit
tier: standard
topics: [limits, continuity]
statement: |
  Let
  \[
  \begin{aligned}
  g(x, y)&=\frac{x^3 y}{x^6 + y^2},\\
  &\text{for } (x, y) \neq (0, 0).
  \end{aligned}
  \]
  a) Find the limit of \(g\) at the origin along each line \(y = mx\) with \(m \neq 0\), and along the two axes.
  b) Find the limit of \(g\) at the origin along each curve \(y = cx^3\).
  c) Does \(\lim_{(x, y)\to(0, 0)} g(x, y)\) exist? Can \(g(0, 0)\) be defined so that \(g\) is continuous at the origin?
solution: |
  a) On the \(x\)-axis, \(y = 0\), the numerator is \(0\) and \(g(x, 0) = 0\) for \(x \neq 0\). On the \(y\)-axis, \(x = 0\), the numerator is \(0\) and \(g(0, y) = 0\) for \(y \neq 0\). Both limits are \(0\).

  Along the line \(y = mx\),
  \[
  \begin{aligned}
  g(x, mx)&=\frac{m x^4}{x^6 + m^2 x^2}\\
  &=\frac{m x^2}{x^4 + m^2}\qquad (x \neq 0).
  \end{aligned}
  \]
  As \(x\) approaches \(0\), the quotient approaches \(0\). Along every line through the origin the limit is \(0\).

  b) Along the curve \(y = cx^3\),
  \[
  \begin{aligned}
  g(x, cx^3)&=\frac{c x^6}{x^6 + c^2 x^6}\\
  &=\frac{c}{1 + c^2}\qquad (x \neq 0).
  \end{aligned}
  \]
  The function is constant on this curve, so the limit is \(\frac{c}{1 + c^2}\). For \(c = 1\) the limit is \(\frac{1}{2}\).

  c) The limit along the lines is \(0\) and the limit along the curve \(y = x^3\) is \(\frac{1}{2}\). The path limits differ, so the limit at the origin does not exist. Continuity at the origin would need a limit equal to \(g(0, 0)\). No limit exists, so \(g\) is not continuous at the origin for any choice of \(g(0, 0)\).
provenance: written-for-site
steps:
  - The limit along both axes and along every line y = mx is 0.
  - The limit along y = c x^3 is c/(1 + c^2), which equals 1/2 for c = 1.
  - The path limits differ, so there is no limit and no choice of g(0, 0) gives continuity.
verification:
  checks:
    - expr: 'simplify(x**3*(m*x)/(x**6 + (m*x)**2) - m*x**2/(x**4 + m**2))'
      expected: "0"
    - expr: 'limit(m*x**2/(x**4 + m**2), x, 0)'
      expected: "0"
    - expr: 'simplify(x**3*(c*x**3)/(x**6 + (c*x**3)**2) - c/(1 + c**2))'
      expected: "0"
    - expr: '(c/(1 + c**2)).subs(c, 1)'
      expected: "1/2"
:::
