---
id: l6-parameter-families
lecture: 6
order: 4
title: Families of functions with a parameter
prerequisites: [l6-second-derivative-test]
sources:
  - { source: handout, section: "14.7", page: 373 }
  - { source: handout, section: "14.7", page: 378 }
  - { source: sheet-2, page: 2 }
  - { source: home-assignment-2022, page: 2 }
  - { source: lecture-notes-6, page: 2 }
examWeight: medium
taught: lecture
status: reviewed
notation: |
  \(f_x\), \(H_f\) and \(D\) are the course names. \(f_x\) and \(\partial f/\partial x\) are the same partial. In a family such as \(f = x^2 + y^2 + kxy\), the number \(k\) stays constant while the partials are computed.
---

::: formal-statement
kind: method
title: A parameter in the second derivative test
source:
  source: handout
  section: "14.7"
  page: 378
text: |
  To classify a family \(f(x, y)\) that depends on a constant \(k\), follow these steps.

  1. Differentiate with \(k\) held fixed. Compute the critical points and the **discriminant** \(D = \det H_f = f_{xx} f_{yy} - (f_{xy})^2\) as expressions in \(k\).
  2. Split into ranges of \(k\). The splits sit where \(D = 0\), and where the two equations \(f_x = 0\) and \(f_y = 0\) become dependent.
  3. Classify the critical points in each range by these cases:

  - When \(D > 0\), the sign of \(f_{xx}\) distinguishes a local minimum from a local maximum.
  - When \(D < 0\), the critical point is a saddle point.
  - When \(D = 0\), the test says nothing, and a rewritten formula for \(f\), or a section, decides the point.
:::

::: plain-explanation
text: |
  \(k\) is a number you choose, then leave alone, while \(x\) and \(y\) are the variables. Changing \(k\) can move the critical points, and it can change the sign of \(D\). The values of \(k\) where \(D\) is zero are the boundary between one kind of point and another. On that boundary the test is silent, so you rewrite \(f\) or read a section.
:::

::: key-points
text: |
  - To classify a family with a constant \(k\), differentiate with \(k\) held fixed. Compute the critical points and \(D = f_{xx} f_{yy} - (f_{xy})^2\) as expressions in \(k\).
  - The ranges of \(k\) are split where \(D = 0\) and where the equations \(f_x = 0\) and \(f_y = 0\) become dependent.
  - When \(D > 0\), the sign of \(f_{xx}\) distinguishes a local minimum from a local maximum. When \(D < 0\), the critical point is a saddle point.
  - When \(D = 0\), the test says nothing, and a rewritten formula for \(f\), or a section, decides the point.
:::

::: formal-statement
kind: theorem
title: The family \(x^2 + y^2 + kxy\)
source:
  source: handout
  section: "14.7"
  page: 378
text: |
  For \(f(x, y) = x^2 + y^2 + kxy\), the second derivatives are
  \[
  \begin{aligned}
  f_{xx}&=2,\\
  f_{yy}&=2,\\
  f_{xy}&=k,\\
  D&=4-k^2.
  \end{aligned}
  \]

  When \(k^2 \neq 4\), the only critical point is the origin.

  - If \(|k| < 2\), then \(D > 0\) and \(f_{xx} > 0\), so the origin is a local minimum.
  - If \(|k| > 2\), then \(D < 0\), so the origin is a saddle point.

  - When \(k = 2\), \(D = 0\) and \(f = (x + y)^2\). The critical set is the line \(y = -x\), and every point of that line is a minimum.
  - When \(k = -2\), \(D = 0\) and \(f = (x - y)^2\). The critical set is the line \(y = x\), and every point of that line is a minimum.
:::

::: plain-explanation
text: |
  The shape depends on the range of \(k\):

  - For \(|k| < 2\), the surface is a bowl with its bottom at the origin.
  - For \(|k| > 2\), the origin is a saddle. That range is \(k > 2\) together with \(k < -2\).

  At \(k = 2\) and at \(k = -2\) the graph is a parabolic cylinder. \(D = 0\) along the flat line, and the square formula for \(f\) shows that the line is a minimum.
:::

::: visual
kind: critical-point-viewer
caption: |
  The family is \(f = x^2 + y^2 + kxy\). The label comes from \(D\) and \(f_{xx}\).
params:
  k: 0
:::

::: worked-example
title: A simpler family, \(x^2 + k y^2\)
problem: |
  Let \(f(x, y) = x^2 + k y^2\). Find and classify the critical points, and describe how they change with \(k\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=2x,\\
  f_y&=2ky.
  \end{aligned}
  \]
  The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 2k\) and \(f_{xy} = 0\), so \(D = 4k\).

  If \(k \neq 0\), then \(f_y = 0\) forces \(y = 0\), and \(f_x = 0\) forces \(x = 0\). The only critical point is the origin.

  - If \(k > 0\), then \(D > 0\) and \(f_{xx} > 0\), so the origin is a local minimum.
  - If \(k < 0\), then \(D < 0\), so the origin is a saddle point.

  If \(k = 0\), then \(f(x, y) = x^2\) and \(f_y = 0\) for every \(y\). The critical set is the line \(x = 0\). Here \(D = 0\), so the test says nothing. Since \(f = x^2 \ge 0\) and \(f = 0\) on that line, every point of the line is a minimum.
:::

::: guided-example
title: A parameter that can remove the critical point
problem: |
  Let \(f(x, y) = x^2 + k y^2 + 2y\). Find the critical points in terms of \(k\), and classify them. Try each step on paper before you show it.
steps:
  - |
    The partial derivatives are
    \[
    \begin{aligned}
    f_x&=2x,\\
    f_y&=2ky+2.
    \end{aligned}
    \]
    The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 2k\) and \(f_{xy} = 0\), so \(D = 4k\).
  - |
    From \(f_x = 0\), one has \(x = 0\). If \(k \neq 0\), then \(f_y = 0\) gives \(y = -1/k\). The critical point is \((0, -1/k)\).
  - |
    If \(k > 0\), then \(D > 0\) and \(f_{xx} > 0\), so \((0, -1/k)\) is a local minimum. If \(k < 0\), then \(D < 0\), so the point is a saddle point.
  - |
    If \(k = 0\), then \(f_y = 2\). The equation \(f_y = 0\) has no solution, so \(f\) has no critical point.
:::

::: trap
text: |
  For \(f = x^2 + y^2 + kxy\) at \(k = 2\), \(f_{xx} = 2 > 0\) and \(D = 0\). The positive \(f_{xx}\) leaves the origin undecided. Here
  \[
  f_x=f_y=2(x+y),
  \]
  so the whole line \(y = -x\) is critical. The formula \(f = (x + y)^2\) is zero on that line and positive at every other point, so the line is a line of minima.
:::

::: trap
text: |
  \(D = 4 - k^2\) is negative in these cases:

  - \(k > 2\).
  - \(k < -2\).

  At \(k = -3\),
  \[
  D=4-9=-5<0,
  \]
  and \(f_{xx} = 2\). The origin is a saddle point, the same kind of point as for \(k = 3\).
:::

::: key-points
text: |
  - For \(f = x^2 + y^2 + kxy\), \(f_{xx} = 2\), \(f_{yy} = 2\) and \(f_{xy} = k\), so \(D = 4 - k^2\).
  - When \(k^2 \neq 4\), the only critical point is the origin. If \(|k| < 2\), then \(D > 0\) and \(f_{xx} > 0\), so it is a local minimum. If \(|k| > 2\), then \(D < 0\), so it is a saddle point, and this range is \(k > 2\) together with \(k < -2\).
  - At \(k = 2\), \(D = 0\) and \(f = (x + y)^2\). The critical set is the line \(y = -x\), and every point of that line is a minimum. At \(k = -2\), \(D = 0\) and \(f = (x - y)^2\). The critical set is the line \(y = x\), and every point of that line is a minimum.
  - The usual slip uses \(f_{xx} = 2 > 0\) at \(k = 2\) to call the origin a local minimum. With \(D = 0\), the positive \(f_{xx}\) leaves the origin undecided. The formula \(f = (x + y)^2\) is zero on the line \(y = -x\) and positive at every other point, so that whole line is a line of minima.
:::

::: concept-question
id: l6-parameter-families.q-466b1b1f
question: |
  For \(f = x^2 + y^2 + kxy\), for which \(k\) is the origin a local minimum?
options:
  - text: For every real \(k\).
  - text: For \(k > 0\).
  - text: For \(|k| < 2\).
    correct: true
  - text: For \(k > 2\).
explanation: |
  \(D = 4 - k^2\) and \(f_{xx} = 2\). The conditions \(D > 0\) and \(f_{xx} > 0\) hold together precisely when \(|k| < 2\).
:::

::: concept-question
id: l6-parameter-families.q-1672f681
question: |
  For \(f = x^2 + y^2 + kxy\) with \(k = 2\), what is the critical set?
options:
  - text: The origin alone.
  - text: The line \(y = -x\).
    correct: true
  - text: The line \(y = x\).
  - text: The unit circle.
explanation: |
  At \(k = 2\), both partials equal \(2(x + y)\). They vanish on the line \(y = -x\). On that line \(f = (x + y)^2 = 0\), and \(f \ge 0\) everywhere, so the line is a line of minima.
:::

::: concept-question
id: l6-parameter-families.q-2bec6acf
question: |
  For \(f = x^2 + y^2 + kxy\) at \(k = -3\), \(D = -5\) and \(f_{xx} = 2\). What is the origin?
options:
  - text: A local minimum, because \(f_{xx} > 0\).
  - text: A saddle point.
    correct: true
  - text: A point where the test says nothing.
  - text: A line of minima.
explanation: |
  \(D = -5 < 0\), so the origin is a saddle point. The positive \(f_{xx}\) is used only after \(D > 0\). At \(k = -3\) the only critical point is still the origin, because \(k^2 \neq 4\).
:::

::: sheet-item
id: l6-parameter-families.sheet-family
category: formula
text: |
  For \(f = x^2 + y^2 + kxy\), one has \(D = 4 - k^2\) and \(f_{xx} = 2\). The origin is:

  - a local minimum when \(|k| < 2\),
  - a saddle point when \(|k| > 2\).

  At \(k = \pm 2\), \(D = 0\) and the critical set is a line of minima.
:::

::: sheet-item
id: l6-parameter-families.sheet-line
category: recognition
text: |
  When \(f_x = 0\) and \(f_y = 0\) become the same equation, the critical set is a line. Rewrite \(f\) before classifying it.
:::

::: sheet-item
id: l6-parameter-families.sheet-boundary
category: trap
text: |
  At a value of \(k\) where \(D = 0\), a positive \(f_{xx}\) leaves the point undecided. Rewrite \(f\), or read a section.
:::

::: exercise
id: l6-parameter-families.basic-k-one
tier: basic
topics: [critical-points, second-derivative-test]
statement: |
  Find and classify the critical points of \(f(x, y) = x^2 + 3y^2 + 2xy\).
solution: |
  The partial derivatives are \(f_x = 2x + 2y\) and \(f_y = 2x + 6y\). The second minus the first, and three times the first minus the second, give
  \[
  \begin{aligned}
  f_y-f_x&=4y,\\
  3f_x-f_y&=4x.
  \end{aligned}
  \]
  Both vanish only at \(x = 0\) and \(y = 0\), so the only critical point is the origin.

  The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 6\) and \(f_{xy} = 2\), so \(D = 12 - 4 = 8\). Here \(D > 0\) and \(f_{xx} > 0\), so the origin is a local minimum. Its value is \(f(0, 0) = 0\).
provenance: written-for-site
steps:
  - The partials \(f_x = 2x + 2y\) and \(f_y = 2x + 6y\) vanish only at the origin.
  - \(D = 8 > 0\) and \(f_{xx} = 2 > 0\), so the origin is a local minimum.
verification:
  checks:
    - expr: '2*(2*x + y) - (x + 2*y) - 3*x'
      expected: '0'
    - expr: '2*(x + 2*y) - (2*x + y) - 3*y'
      expected: '0'
    - expr: 'Tuple(diff(x**2 + y**2 + x*y, x).subs({x: 0, y: 0}), diff(x**2 + y**2 + x*y, y).subs({x: 0, y: 0}))'
      expected: 'Tuple(0, 0)'
    - expr: '(diff(x**2 + y**2 + x*y, x, 2)*diff(x**2 + y**2 + x*y, y, 2) - diff(x**2 + y**2 + x*y, x, y)**2) - 3'
      expected: '0'
    - expr: 'diff(x**2 + y**2 + x*y, x, 2)'
      expected: '2'
    - expr: '(x**2 + y**2 + x*y).subs({x: 0, y: 0})'
      expected: '0'
:::

::: exercise
id: l6-parameter-families.standard-four-y
tier: standard
topics: [critical-points, second-derivative-test]
statement: |
  Let \(f(x, y) = x^2 + 4y^2 + kxy\). Find and classify the critical points, and describe how they change with \(k\).
solution: |
  The partial derivatives are \(f_x = 2x + ky\) and \(f_y = kx + 8y\). The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 8\) and \(f_{xy} = k\), so \(D = 16 - k^2\).

  Eliminating gives \((16 - k^2)y = 2f_y - k f_x\). When \(k^2 \neq 16\), one has \(y = 0\), and then \(f_x = 2x\), so \(x = 0\). The only critical point is the origin. If \(|k| < 4\), then \(D > 0\) and \(f_{xx} > 0\), so the origin is a local minimum. If \(|k| > 4\), then \(D < 0\), so the origin is a saddle point.

  If \(k = 4\), then \(D = 0\) and the test says nothing. Here \(f_x = 2(x + 2y)\) and \(f_y = 4(x + 2y)\), so the critical set is the line \(x = -2y\). Also \(f = (x + 2y)^2\). This is zero on the line and positive at every other point, so the line is a line of minima.

  If \(k = -4\), then again \(D = 0\). Here \(f = (x - 2y)^2\), and the gradient vanishes on the line \(x = 2y\). That line is a line of minima.
provenance: written-for-site
steps:
  - Partials and \(D = 16 - k^2\).
  - For \(|k| \neq 4\), the only critical point is the origin, a minimum when \(|k| < 4\) and a saddle when \(|k| > 4\).
  - For \(k = 4\), the line \(x = -2y\) of minima. For \(k = -4\), the line \(x = 2y\) of minima.
verification:
  checks:
    - expr: '(diff(x**2 + 4*y**2 + k*x*y, x, 2)*diff(x**2 + 4*y**2 + k*x*y, y, 2) - diff(x**2 + 4*y**2 + k*x*y, x, y)**2) - (16 - k**2)'
      expected: '0'
    - expr: 'diff(x**2 + 4*y**2 + k*x*y, x, 2)'
      expected: '2'
    - expr: '2*(k*x + 8*y) - k*(2*x + k*y) - (16 - k**2)*y'
      expected: '0'
    - expr: 'Tuple(diff(x**2 + 4*y**2 + 4*x*y, x).subs(x, -2*y), diff(x**2 + 4*y**2 + 4*x*y, y).subs(x, -2*y))'
      expected: 'Tuple(0, 0)'
    - expr: 'factor(x**2 + 4*y**2 + 4*x*y) - (x + 2*y)**2'
      expected: '0'
    - expr: 'factor(x**2 + 4*y**2 - 4*x*y) - (x - 2*y)**2'
      expected: '0'
    - expr: 'Tuple(diff(x**2 + 4*y**2 - 4*x*y, x).subs(x, 2*y), diff(x**2 + 4*y**2 - 4*x*y, y).subs(x, 2*y))'
      expected: 'Tuple(0, 0)'
    - expr: '(16 - k**2).subs(k, 5)'
      expected: '-9'
    - expr: '(16 - k**2).subs(k, 0)'
      expected: '16'
:::

::: exercise
id: l6-parameter-families.home-2022-q5
number: "14.7.15 (sheet 2 exercise 8; home assignment 2022, exercise 5)"
tier: exam
topics: [critical-points, second-derivative-test]
examBlock: critical-points
statement: |
  Let \(f(x, y) = x^2 + y^2 + kxy\). Find and classify the critical points, and discuss how they change as \(k\) varies.
solution: |
  The partial derivatives are \(f_x = 2x + ky\) and \(f_y = kx + 2y\). The second derivatives are \(f_{xx} = 2\), \(f_{yy} = 2\) and \(f_{xy} = k\), so \(D = 4 - k^2\).

  Eliminating between the two partials gives
  \[
  \begin{aligned}
  (4 - k^2)x&=0,\\
  (4 - k^2)y&=0.
  \end{aligned}
  \]
  When \(k^2 \neq 4\), the only critical point is the origin.

  - If \(|k| < 2\), then \(D > 0\) and \(f_{xx} > 0\), so the origin is a local minimum.
  - If \(|k| > 2\), then \(D < 0\), so the origin is a saddle point.

  If \(k = 2\), then \(D = 0\) and the test says nothing. Here \(f_x = f_y = 2(x + y)\) and \(f = (x + y)^2\). The critical set is the line \(y = -x\). Since \(f \ge 0\) and \(f = 0\) on that line, it is a line of minima.

  If \(k = -2\), then again \(D = 0\). Here \(f = (x - y)^2\), and the gradient vanishes on the line \(y = x\). That line is a line of minima.
provenance: official-key
steps:
  - Partial derivatives and \(D = 4 - k^2\).
  - For \(|k| \neq 2\), the only critical point is the origin, a minimum when \(|k| < 2\) and a saddle when \(|k| > 2\).
  - For \(k = 2\), the line \(y = -x\) of minima. For \(k = -2\), the line \(y = x\) of minima.
verification:
  checks:
    - expr: '(diff(x**2 + y**2 + k*x*y, x, 2)*diff(x**2 + y**2 + k*x*y, y, 2) - diff(x**2 + y**2 + k*x*y, x, y)**2) - (4 - k**2)'
      expected: 0
    - expr: 'diff(x**2 + y**2 + k*x*y, x, 2)'
      expected: 2
    - expr: '2*(2*x + k*y) - k*(k*x + 2*y) - (4 - k**2)*x'
      expected: 0
    - expr: '2*(k*x + 2*y) - k*(2*x + k*y) - (4 - k**2)*y'
      expected: 0
    - expr: 'factor(x**2 + y**2 + 2*x*y) - (x + y)**2'
      expected: 0
    - expr: 'diff(x**2 + y**2 + 2*x*y, x) - 2*(x + y)'
      expected: 0
    - expr: 'diff(x**2 + y**2 + 2*x*y, y) - 2*(x + y)'
      expected: 0
    - expr: 'factor(x**2 + y**2 - 2*x*y) - (x - y)**2'
      expected: 0
    - expr: 'diff(x**2 + y**2 - 2*x*y, x) - 2*(x - y)'
      expected: 0
    - expr: 'diff(x**2 + y**2 - 2*x*y, y) + 2*(x - y)'
      expected: 0
:::

::: exercise
id: l6-parameter-families.ex-cubic-family-parameter
tier: exam
topics: [critical-points, second-derivative-test, degenerate-case]
statement: |
  Let \(f(x, y) = x^3 + y^3 + kxy\), where \(k\) is a real constant. Find the critical points of \(f\) and give their kind, for every value of \(k\).
solution: |
  The partial derivatives are \(f_x = 3x^2 + ky\) and \(f_y = 3y^2 + kx\).

  Subtracting gives
  \[
  \begin{aligned}
  f_x-f_y&=3(x^2-y^2)-k(x-y),\\
  &=(x-y)\bigl(3(x+y)-k\bigr).
  \end{aligned}
  \]
  A critical point has \(f_x = f_y\), so \(x = y\) or \(x + y = k/3\).

  If \(x = y\), then \(f_x = 3x^2 + kx = x(3x + k) = 0\), so \(x = 0\) or \(x = -k/3\). The points are \((0, 0)\) and \((-k/3, -k/3)\).

  If \(x + y = k/3\), substitute \(y = k/3 - x\) into \(f_x = 0\). This gives \(3x^2 - kx + k^2/3 = 0\), whose discriminant is \(k^2 - 4k^2 = -3k^2\). A real solution needs \(k = 0\), and then \(x = 0\), \(y = 0\) again.

  So the critical points are \((0, 0)\) and \((-k/3, -k/3)\). They are the same point when \(k = 0\).

  The second derivatives are
  \[
  \begin{aligned}
  f_{xx}&=6x,\quad f_{yy}=6y,\quad f_{xy}=k,\\
  D&=36xy-k^2.
  \end{aligned}
  \]

  At \((0, 0)\), \(D = -k^2\). For \(k \neq 0\), \(D < 0\) and the origin is a saddle point.

  At \((-k/3, -k/3)\) with \(k \neq 0\),
  \[
  \begin{aligned}
  D&=4k^2-k^2=3k^2>0,\\
  f_{xx}&=-2k.
  \end{aligned}
  \]

  - If \(k > 0\), then \(f_{xx} < 0\) and the point is a local maximum, with value \(k^3/27\).
  - If \(k < 0\), then \(f_{xx} > 0\) and the point is a local minimum.

  For \(k = 0\), \(f = x^3 + y^3\) and the only critical point is the origin, with \(D = 0\). Along \(y = 0\), \(f(x, 0) = x^3\), which is positive for \(x > 0\) and negative for \(x < 0\), while \(f(0, 0) = 0\). The origin is neither a local minimum nor a local maximum.
provenance: written-for-site
steps:
  - Factor \(f_x - f_y = (x - y)(3(x + y) - k)\) and solve both cases.
  - The critical points \((0, 0)\) and \((-k/3, -k/3)\), with no others for any \(k\).
  - \(D = -k^2\) at the origin, a saddle for \(k \neq 0\).
  - \(D = 3k^2\) and \(f_{xx} = -2k\) at the other point, a maximum for \(k > 0\) and a minimum for \(k < 0\).
  - The case \(k = 0\), settled by the section \(y = 0\).
verification:
  checks:
    - expr: 'diff(x**3+y**3+k*x*y, x) - diff(x**3+y**3+k*x*y, y) - (x-y)*(3*(x+y)-k)'
      expected: '0'
    - expr: 'discriminant(3*x**2-k*x+k**2/3, x)'
      expected: '-3*k**2'
    - expr: 'Tuple(diff(x**3+y**3+k*x*y, x).subs({x: -k/3, y: -k/3}), diff(x**3+y**3+k*x*y, y).subs({x: -k/3, y: -k/3}))'
      expected: 'Tuple(0, 0)'
    - expr: '(diff(x**3+y**3+k*x*y, x, 2)*diff(x**3+y**3+k*x*y, y, 2) - diff(x**3+y**3+k*x*y, x, y)**2).subs({x: 0, y: 0})'
      expected: '-k**2'
    - expr: '(diff(x**3+y**3+k*x*y, x, 2)*diff(x**3+y**3+k*x*y, y, 2) - diff(x**3+y**3+k*x*y, x, y)**2).subs({x: -k/3, y: -k/3})'
      expected: '3*k**2'
    - expr: 'diff(x**3+y**3+k*x*y, x, 2).subs({x: -k/3, y: -k/3})'
      expected: '-2*k'
    - expr: '(x**3+y**3+k*x*y).subs({x: -k/3, y: -k/3})'
      expected: 'k**3/27'
:::

::: exercise
id: l6-parameter-families.ex-cubic-bifurcation-family
tier: standard
topics: [critical-points, second-derivative-test, degenerate-case]
statement: |
  Let \(f(x, y) = x^3 - 3kx + y^2\), where \(k\) is a real constant. For every real \(k\), find the critical points of \(f\) and give their kind.
solution: |
  The partial derivatives are \(f_x = 3x^2 - 3k\) and \(f_y = 2y\). The second derivatives are \(f_{xx} = 6x\), \(f_{yy} = 2\) and \(f_{xy} = 0\), so \(D = 12x\).

  If \(k < 0\), then \(f_x = 3(x^2 - k) > 0\) for every \(x\), so there is no critical point.

  If \(k > 0\), then \(f_y = 0\) gives \(y = 0\) and \(f_x = 0\) gives \(x = \pm\sqrt{k}\). The critical points are \((\sqrt{k}, 0)\) and \((-\sqrt{k}, 0)\).

  At \((\sqrt{k}, 0)\), \(D = 12\sqrt{k} > 0\) and \(f_{xx} = 6\sqrt{k} > 0\), so the point is a local minimum, with value \(f = -2k^{3/2}\).

  At \((-\sqrt{k}, 0)\), \(D = -12\sqrt{k} < 0\), so the point is a saddle point.

  If \(k = 0\), then \(f = x^3 + y^2\), and the only critical point is the origin, with \(D = 0\). Along \(y = 0\), \(f(x, 0) = x^3\), which is positive for \(x > 0\) and negative for \(x < 0\), while \(f(0, 0) = 0\). The origin is neither a local minimum nor a local maximum.

  As \(k\) increases through \(0\), the two critical points appear together at the origin and then separate along the \(x\)-axis.
provenance: written-for-site
steps:
  - Partials \(3x^2 - 3k\) and \(2y\), and \(D = 12x\).
  - No critical point for \(k < 0\).
  - For \(k > 0\), the local minimum \((\sqrt{k}, 0)\) and the saddle point \((-\sqrt{k}, 0)\).
  - For \(k = 0\), the origin is settled by the section \(y = 0\).
verification:
  checks:
    - expr: 'Tuple(diff(x**3-3*k*x+y**2, x), diff(x**3-3*k*x+y**2, y))'
      expected: 'Tuple(3*x**2-3*k, 2*y)'
    - expr: 'diff(x**3-3*k*x+y**2, x, 2)*diff(x**3-3*k*x+y**2, y, 2) - diff(x**3-3*k*x+y**2, x, y)**2'
      expected: '12*x'
    - expr: '(x**3-3*k*x+y**2).subs({x: sqrt(k), y: 0})'
      expected: '-2*k**Rational(3, 2)'
    - expr: '(x**3-3*k*x+y**2).subs({k: 0, y: 0})'
      expected: 'x**3'
:::
