---
id: l6-global-extrema
lecture: 6
order: 5
title: Global extrema on a closed region
prerequisites: [l6-critical-points]
sources:
  - { source: handout, section: "14.7", page: 373 }
  - { source: handout, section: "14.7", page: 376 }
  - { source: handout, section: "14.7", page: 377 }
  - { source: sheet-2, page: 2 }
  - { source: sheet-2, page: 3 }
  - { source: home-assignment-2022, page: 2 }
  - { source: lecture-notes-6, page: 3 }
examWeight: high
examWeightNote: Constrained or worded optimisation carries 17.5% of the two recent finals.
taught: lecture
status: reviewed
notation: |
  \(f_x\), \(H_f\) and \(D\) are the course names. \(f_x\) and \(\partial f/\partial x\) are the same partial. On a boundary edge the restriction of \(f\) is an ordinary function of one variable.
---

::: section
title: Extreme value theorem
:::

::: formal-statement
kind: theorem
title: Extreme value theorem
source:
  source: handout
  section: "14.7"
  page: 376
text: |
  If \(f(x, y)\) is continuous on a closed and bounded set in the plane, then \(f\) attains an **absolute maximum value** and an **absolute minimum value** on that set. Each of these values is attained at a critical point in the interior or at a point of the boundary.
:::

::: plain-explanation
text: |
  Two conditions on the set matter:

  - **Closed** means the boundary is included.
  - **Bounded** means the set lies inside some large disk.

  On a set of that kind, a continuous function reaches its highest value and its lowest value. Those points can sit in the interior, where both partials vanish, or on the boundary.
:::

::: going-deeper
title: Why the region must be closed and bounded
text: |
  The extreme value theorem needs both conditions. The function \(f(x, y) = x\) on the open square \((0, 1) \times (0, 1)\) is continuous and bounded but never reaches \(0\) or \(1\), because the edges are missing. The same function on the closed but unbounded half plane \(x \ge 0\) has no maximum, because \(x\) grows without limit. Closed and bounded together force the extreme values to be attained.
:::

::: key-points
text: |
  - A continuous \(f(x, y)\) on a closed and bounded set in the plane attains an absolute maximum value and an absolute minimum value. Each is attained at a critical point in the interior, where both partials vanish, or at a point of the boundary.
  - Closed means the boundary is included, and bounded means the set lies inside some large disk. The theorem needs both conditions.
:::

::: concept-question
id: l6-global-extrema.q-495d228e
question: |
  \(f\) is continuous on a closed and bounded set in the plane. What follows?
options:
  - text: \(f\) attains an absolute maximum and an absolute minimum on that set.
    correct: true
  - text: \(f\) attains them only if an interior critical point exists.
  - text: The absolute maximum sits at a critical point of the gradient, and the boundary can be skipped.
  - text: \(f\) may stay without a maximum, because the set is two-dimensional.
explanation: |
  The extreme value theorem gives both an absolute maximum and an absolute minimum. They occur at an interior critical point or on the boundary, so a region with no interior critical point still has them, on the boundary.
:::

::: concept-question
id: l6-global-extrema.q-edaffec9
question: |
  For which set does the extreme value theorem guarantee an absolute maximum for every continuous \(f(x, y)\)?
options:
  - text: The open disk \(x^2 + y^2 < 1\).
  - text: The half plane \(y \ge 0\).
  - text: The closed disk \(x^2 + y^2 \le 1\).
    correct: true
  - text: The half-open square \(0 \le x < 1\), \(0 \le y \le 1\).
explanation: |
  The theorem needs a closed and bounded set. The examples fail as follows:
  - The function \(f = x\) has no maximum on the open disk or on the half-open square, because the value \(1\) is never reached.
  - The function \(f = y\) has no maximum on the half plane, because it grows without limit.

  The closed disk is closed and bounded.
:::

::: section
title: Candidates on a closed region
:::

::: formal-statement
kind: method
title: Candidates on a closed region
source:
  source: handout
  section: "14.7"
  page: 376
text: |
  The method has these steps:

  1. List the critical points of \(f\) that lie in the interior, and evaluate \(f\) there.
  2. On each boundary curve, restrict \(f\) to one variable. Find the critical points of that restriction which lie on the piece, and evaluate \(f\) at those points and at the corners.

  The largest of these values is the absolute maximum. The smallest is the absolute minimum.
:::

::: plain-explanation
text: |
  An **interior candidate** is a point where
  \[
  f_x = 0 \quad\text{and}\quad f_y = 0.
  \]
  On an edge you have a function of one variable, so its largest and smallest values sit where its derivative is zero or at an endpoint of the edge. Those endpoints are the corners of the region. The absolute comparison is by the values themselves.
:::

::: tip
text: |
  A corner belongs to two edges, and it is enough to evaluate \(f\) there once.
:::

::: tip
text: |
  Suppose \(f\) is a polynomial of degree two with a single critical point \(x^*\) that is a maximum, so \(D > 0\) and \(f_{xx} < 0\), and \(x^*\) lies outside the region. Then \(f\) has no interior critical point, and its absolute maximum is on the boundary, usually on the side nearest to \(x^*\). Treat this as a guide for where to look first. Still compare the corners and the other sides.
:::

::: worked-example
title: A square with an interior minimum
problem: |
  Find the absolute maximum and minimum of \(f(x, y) = x^2 + y^2 - 4x - 2y\) on the square \(0 \le x \le 3\), \(0 \le y \le 3\).
solution: |
  **Interior point.** The partial derivatives are
  \[
  \begin{aligned}
  f_x&=2x-4,\\
  f_y&=2y-2.
  \end{aligned}
  \]
  They vanish at \(x = 2\) and \(y = 1\). The point \((2, 1)\) lies in the interior of the square. Its value is \(f(2, 1) = -5\).

  **Edge \(y = 0\).** On \(y = 0\), with \(0 \le x \le 3\), the restriction is \(g(x) = x^2 - 4x\).
  \[
  \begin{aligned}
  g'(x)&=2x-4,\\
  &\quad\text{which vanishes at } x=2,\\
  g(2)&=-4,\\
  g(0)&=0, \qquad g(3)=-3.
  \end{aligned}
  \]

  **Edge \(y = 3\).** On \(y = 3\), with \(0 \le x \le 3\), the restriction is \(p(x) = x^2 - 4x + 3\).
  \[
  \begin{aligned}
  p'(x)&=2x-4,\\
  &\quad\text{which vanishes at } x=2,\\
  p(2)&=-1,\\
  p(0)&=3, \qquad p(3)=0.
  \end{aligned}
  \]

  **Edge \(x = 0\).** On \(x = 0\), with \(0 \le y \le 3\), the restriction is \(q(y) = y^2 - 2y\).
  \[
  \begin{aligned}
  q'(y)&=2y-2,\\
  &\quad\text{which vanishes at } y=1,\\
  q(1)&=-1,\\
  q(0)&=0, \qquad q(3)=3.
  \end{aligned}
  \]

  **Edge \(x = 3\).** On \(x = 3\), with \(0 \le y \le 3\), the restriction is \(r(y) = y^2 - 2y - 3\).
  \[
  \begin{aligned}
  r'(y)&=2y-2,\\
  &\quad\text{which vanishes at } y=1,\\
  r(1)&=-4,\\
  r(0)&=-3, \qquad r(3)=0.
  \end{aligned}
  \]

  Among the candidate values, the largest is \(3\) and the smallest is \(-5\). The absolute maximum is \(3\) at \((0, 3)\). The absolute minimum is \(-5\) at \((2, 1)\).
:::

::: guided-example
title: A triangle with no interior critical point
problem: |
  Find the absolute maximum and minimum of \(f(x, y) = x^2 + y\) on the triangle with vertices \((0, 0)\), \((1, 0)\) and \((1, 1)\). The triangle is \(0 \le x \le 1\), \(0 \le y \le x\). Try each step on paper before you show it.
steps:
  - |
    The partial derivatives are
    \[
    \begin{aligned}
    f_x&=2x,\\
    f_y&=1.
    \end{aligned}
    \]
    The partial \(f_y\) equals \(1\) at every point, so the triangle has no interior critical point.
  - |
    On \(y = 0\), with \(0 \le x \le 1\), one has
    \[
    f(x, 0)=x^2.
    \]
    The values run from \(0\) at \(x = 0\) to \(1\) at \(x = 1\).
  - |
    On \(x = 1\), with \(0 \le y \le 1\), one has
    \[
    f(1, y)=1+y.
    \]
    The derivative in \(y\) is \(1\), so the extreme values of this edge are the corners: \(1\) at \(y = 0\) and \(2\) at \(y = 1\).
  - |
    On \(y = x\), with \(0 \le x \le 1\), one has
    \[
    f(x, x)=x^2+x.
    \]
    The derivative \(2x + 1\) is positive on the segment, so the values run from \(0\) at \(x = 0\) to \(2\) at \(x = 1\).
  - |
    The absolute minimum is \(0\) at \((0, 0)\). The absolute maximum is \(2\) at \((1, 1)\).
:::

::: trap
text: |
  A region can have an absolute maximum and an absolute minimum with no critical point inside it. Take \(f(x, y) = x\) on the triangle with vertices \((0, 0)\), \((1, 0)\) and \((0, 1)\), so \(x \ge 0\), \(y \ge 0\) and \(x + y \le 1\). The partials are
  \[
  \begin{aligned}
  f_x&=1,\\
  f_y&=0.
  \end{aligned}
  \]
  So \(f_x\) never vanishes and the triangle has no critical point. The corner values are
  \[
  \begin{aligned}
  f(0, 0)&=0,\\
  f(1, 0)&=1,\\
  f(0, 1)&=0.
  \end{aligned}
  \]
  The absolute maximum is \(1\) at \((1, 0)\). The absolute minimum is \(0\), attained at every point of the edge \(x = 0\).
:::

::: trap
text: |
  An edge can hold its largest and smallest values at the corners when the derivative along the edge never vanishes. On the segment \(x = 1\), \(0 \le y \le 1\), the restriction \(f(1, y) = 1 + y\) has derivative \(1\). The larger value is \(2\) at \(y = 1\). The smaller value is \(1\) at \(y = 0\). Both are corners.
:::

::: key-points
text: |
  - To find the absolute maximum and minimum of a continuous \(f\) on a closed and bounded region, evaluate \(f\) at the interior critical points, at the critical points of its restriction to each edge that lie on that edge, and at every corner. The largest value is the absolute maximum, and the smallest is the absolute minimum.
  - A critical point of \(f\) that lies outside the region is dropped from the list. A corner shared by two edges is evaluated once.
  - The usual slip reads an empty list of interior critical points as "no extreme values". The region still has an absolute maximum and an absolute minimum, and they lie on the boundary, as for \(f(x, y) = x\) on the triangle with vertices \((0, 0)\), \((1, 0)\) and \((0, 1)\).
  - Another slip leaves an edge without candidates when the derivative along it never vanishes. Its largest and smallest values then sit at its endpoints, which are corners of the region.
:::

::: concept-question
id: l6-global-extrema.q-d9fe3e0b
question: |
  The restriction of \(f\) to an edge has a derivative that never vanishes. Where are the largest and smallest values of \(f\) on that edge?
options:
  - text: The edge has none.
  - text: At the endpoints of the edge.
    correct: true
  - text: At the midpoint of the edge.
  - text: At an interior critical point of \(f\).
explanation: |
  A continuous function on a closed segment attains its maximum and its minimum. If the derivative never vanishes, those points are the endpoints. For a side of a polygon, the endpoints are corners of the region.
:::

::: concept-question
id: l6-global-extrema.q-f129f91e
question: |
  The only critical point of \(f(x, y) = x^2 + y^2\) is the origin. On the square \(1 \le x \le 2\), \(1 \le y \le 2\), where do the absolute extrema lie?
options:
  - text: There are none, because the critical point lies outside the square.
  - text: On the boundary of the square.
    correct: true
  - text: At the origin, which is kept even though it lies outside the square.
  - text: At the centre of the square, by the second derivative test.
explanation: |
  The origin lies outside the square, so it is dropped from the list. The square is closed and bounded, and \(f\) is continuous, so the absolute maximum and the absolute minimum exist. Both lie on the boundary. The minimum is \(2\) at \((1, 1)\) and the maximum is \(8\) at \((2, 2)\).
:::

::: exercise
id: l6-global-extrema.basic-linear-triangle
tier: basic
topics: [global-extrema]
statement: |
  Find the absolute maximum and minimum of \(f(x, y) = x + 2y\) on the triangle with vertices \((0, 0)\), \((3, 0)\) and \((0, 3)\). The triangle is \(x \ge 0\), \(y \ge 0\) and \(x + y \le 3\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=1,\\
  f_y&=2.
  \end{aligned}
  \]
  Neither vanishes, so the triangle has no critical point. The absolute extrema lie on the boundary.

  The corner values are
  \[
  \begin{aligned}
  f(0, 0)&=0,\\
  f(3, 0)&=3,\\
  f(0, 3)&=6.
  \end{aligned}
  \]

  The three edges give these restrictions:
  - On \(y = 0\), with \(0 \le x \le 3\), one has \(f(x, 0) = x\), which runs from \(0\) to \(3\).
  - On \(x = 0\), with \(0 \le y \le 3\), one has \(f(0, y) = 2y\), which runs from \(0\) to \(6\).
  - On \(x + y = 3\), with \(0 \le x \le 3\), one has \(f(x, 3 - x) = 6 - x\), which runs from \(6\) at \(x = 0\) to \(3\) at \(x = 3\).

  The absolute maximum is \(6\) at \((0, 3)\). The absolute minimum is \(0\) at \((0, 0)\).
provenance: written-for-site
steps:
  - The gradient \((1, 2)\) never vanishes, so there is no interior critical point.
  - The three edges, including the corners.
  - The absolute maximum is \(6\) at \((0, 3)\), and the absolute minimum is \(0\) at \((0, 0)\).
verification:
  checks:
    - expr: 'solve([diff(x + 2*y, x), diff(x + 2*y, y)], [x, y])'
      expected: '[]'
    - expr: 'Tuple((x + 2*y).subs({x: 0, y: 0}), (x + 2*y).subs({x: 3, y: 0}), (x + 2*y).subs({x: 0, y: 3}))'
      expected: 'Tuple(0, 3, 6)'
    - expr: '(x + 2*(3 - x)) - (6 - x)'
      expected: '0'
:::

::: sheet-item
id: l6-global-extrema.sheet-candidates
category: formula
text: |
  On a closed bounded region, evaluate \(f\) at:

  1. the interior critical points,
  2. the critical points of \(f\) on each boundary piece,
  3. every corner.

  The largest value is the absolute maximum. The smallest is the absolute minimum.
:::

::: sheet-item
id: l6-global-extrema.sheet-corners
category: trap
text: |
  A corner stays on the candidate list when the derivative along the edge never vanishes. The largest value of that edge can sit at the corner.
:::

::: sheet-item
id: l6-global-extrema.sheet-evt
category: recognition
text: |
  A continuous function on a closed and bounded set in the plane attains an absolute maximum and an absolute minimum. Look in the interior and on the boundary, including the corners.
:::

::: exercise
id: l6-global-extrema.standard-product-triangle
tier: standard
topics: [global-extrema]
statement: |
  Find the absolute maximum and minimum of \(f(x, y) = xy\) on the triangle with vertices \((0, 0)\), \((2, 0)\) and \((0, 2)\). The triangle is \(x \ge 0\), \(y \ge 0\) and \(x + y \le 2\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=y,\\
  f_y&=x.
  \end{aligned}
  \]
  They vanish together only at \((0, 0)\), which is a corner, so the interior has no critical point.

  On the two axial edges, \(f = 0\):
  - \(y = 0\), with \(0 \le x \le 2\), so \(f(x, 0) = 0\).
  - \(x = 0\), with \(0 \le y \le 2\), so \(f(0, y) = 0\).

  On \(x + y = 2\), with \(0 \le x \le 2\), the restriction is \(h(x) = x(2 - x)\).
  \[
  \begin{aligned}
  h(x)&=2x-x^2,\\
  h'(x)&=2-2x,\\
  &\quad\text{which vanishes at } x=1,\\
  h(1)&=1,\\
  &\quad\text{at the point } (1, 1),\\
  h(0)&=0, \qquad h(2)=0.
  \end{aligned}
  \]

  The absolute maximum is \(1\) at \((1, 1)\). The absolute minimum is \(0\), attained at every point of the edges \(y = 0\) and \(x = 0\).
provenance: written-for-site
steps:
  - The only critical point is the corner \((0, 0)\).
  - \(f = 0\) on the two axial edges.
  - On \(x + y = 2\), the critical value is \(1\) at \((1, 1)\).
  - The absolute maximum is \(1\), and the absolute minimum is \(0\).
verification:
  checks:
    - expr: 'Tuple(diff(x*y, x).subs({x: 0, y: 0}), diff(x*y, y).subs({x: 0, y: 0}))'
      expected: 'Tuple(0, 0)'
    - expr: '(x*y).subs(y, 0)'
      expected: '0'
    - expr: '(x*y).subs(x, 0)'
      expected: '0'
    - expr: '(x*(2 - x)).subs(x, 1)'
      expected: '1'
    - expr: 'diff(x*(2 - x), x).subs(x, 1)'
      expected: '0'
    - expr: 'Tuple((x*(2 - x)).subs(x, 0), (x*(2 - x)).subs(x, 2))'
      expected: 'Tuple(0, 0)'
:::

::: exercise
id: l6-global-extrema.handout-14-7-7
number: "14.7.7"
tier: exam
topics: [global-extrema]
examBlock: constrained-optimisation
statement: |
  Find the absolute maximum and minimum of \(f(x, y) = x^2 + 3y - 3xy\) on the region bounded by \(y = x\), \(y = 0\) and \(x = 2\). The region is \(0 \le x \le 2\) and \(0 \le y \le x\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=2x-3y,\\
  f_y&=3-3x.
  \end{aligned}
  \]
  From \(f_y = 0\), one has \(x = 1\), and then \(f_x = 0\) gives \(y = 2/3\). The point \((1, 2/3)\) lies in the interior, because \(0 < 2/3 < 1 < 2\).

  The second derivatives are
  \[
  \begin{aligned}
  f_{xx}&=2,\\
  f_{yy}&=0,\\
  f_{xy}&=-3.
  \end{aligned}
  \]
  So \(D = -9 < 0\). The interior point is a saddle point. Its value is still a candidate: \(f(1, 2/3) = 1\).

  On \(y = 0\), with \(0 \le x \le 2\), one has \(f(x, 0) = x^2\). The values run from \(0\) at \((0, 0)\) to \(4\) at \((2, 0)\).

  On \(y = x\), with \(0 \le x \le 2\), the restriction is \(h(x) = -2x^2 + 3x\).
  \[
  \begin{aligned}
  h'(x)&=-4x+3,\\
  &\quad\text{which vanishes at } x=3/4,\\
  h(3/4)&=9/8,\\
  &\quad\text{at the point } (3/4, 3/4),\\
  h(0)&=0, \qquad h(2)=-2.
  \end{aligned}
  \]

  On \(x = 2\), with \(0 \le y \le 2\), the restriction is \(f(2, y) = 4 - 3y\). The derivative in \(y\) is \(-3\), so the extreme values of this edge are the corners: \(f(2, 0) = 4\) and \(f(2, 2) = -2\).

  The candidate values are \(1\), \(0\), \(4\), \(9/8\) and \(-2\). The absolute maximum is \(4\) at \((2, 0)\). The absolute minimum is \(-2\) at \((2, 2)\).
provenance: handout-answer
steps:
  - The interior critical point \((1, 2/3)\) is a saddle, with value \(1\).
  - On \(y = 0\), the values run from \(0\) to \(4\).
  - On \(y = x\), the critical value is \(9/8\), and the endpoints are \(0\) and \(-2\).
  - On \(x = 2\), the values run from \(4\) to \(-2\), at the corners.
  - The absolute maximum is \(4\) at \((2, 0)\), and the absolute minimum is \(-2\) at \((2, 2)\).
verification:
  checks:
    - expr: 'Tuple(diff(x**2 + 3*y - 3*x*y, x).subs({x: 1, y: Rational(2, 3)}), diff(x**2 + 3*y - 3*x*y, y).subs({x: 1, y: Rational(2, 3)}))'
      expected: 'Tuple(0, 0)'
    - expr: '(diff(x**2 + 3*y - 3*x*y, x, 2)*diff(x**2 + 3*y - 3*x*y, y, 2) - diff(x**2 + 3*y - 3*x*y, x, y)**2)'
      expected: '-9'
    - expr: '(x**2 + 3*y - 3*x*y).subs({x: 1, y: Rational(2, 3)})'
      expected: '1'
    - expr: 'Tuple((x**2 + 3*y - 3*x*y).subs({x: 2, y: 0}), (x**2 + 3*y - 3*x*y).subs({x: 2, y: 2}), (x**2 + 3*y - 3*x*y).subs({x: 0, y: 0}))'
      expected: 'Tuple(4, -2, 0)'
    - expr: '(x**2 + 3*y - 3*x*y).subs(y, x) - (-2*x**2 + 3*x)'
      expected: '0'
    - expr: 'diff(-2*x**2 + 3*x, x).subs(x, Rational(3, 4))'
      expected: '0'
    - expr: '(x**2 + 3*y - 3*x*y).subs({x: Rational(3, 4), y: Rational(3, 4)})'
      expected: 'Rational(9, 8)'
    - expr: '(x**2 + 3*y - 3*x*y).subs(x, 2) - (4 - 3*y)'
      expected: '0'
:::

::: exercise
id: l6-global-extrema.home-2022-q9-2
number: "Home assignment 2022, exercise 9.2"
tier: exam
topics: [global-extrema, worded-optimisation]
examBlock: constrained-optimisation
statement: |
  A profit-maximizing firm wants to maximize \(P = p\left(\sqrt{k} + w^{3/4}\right) - ak - bw\), where \(a > 0\), \(b > 0\) and \(p > 0\) are known. Capital and work are positive and capped: \(0 < k \le K_{\max}\) and \(0 < w \le W_{\max}\), with \(K_{\max} > 0\) and \(W_{\max} > 0\).

  Compute the maximum of \(P\), according to where \(K_{\max}\) and \(W_{\max}\) sit relative to \(a\), \(b\) and \(p\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  P_k&=\frac{p}{2\sqrt{k}}-a,\\
  P_w&=\frac{3p}{4}\, w^{-1/4}-b,\\
  P_{kw}&=0.
  \end{aligned}
  \]
  They vanish together at the single point
  \[ k_\ast = \frac{p^2}{4a^2}, \qquad w_\ast = \left(\frac{3p}{4b}\right)^4. \]
  The signs of the partials are:
  - \(P_k\) is positive for \(0 < k < k_\ast\) and negative for \(k > k_\ast\).
  - \(P_w\) is positive for \(0 < w < w_\ast\) and negative for \(w > w_\ast\).

  The sign of each partial depends on that variable alone. On \(0 < k \le K_{\max}\) the best capital is \(k_\ast\) when \(K_{\max} \ge k_\ast\), and it is \(K_{\max}\) when \(K_{\max} < k_\ast\). The best work is chosen the same way from \(w_\ast\) and \(W_{\max}\).

  Both caps above the critical point, including equality: if \(K_{\max} \ge k_\ast\) and \(W_{\max} \ge w_\ast\), the maximum is at \((k_\ast, w_\ast)\), and
  \[ P = \frac{p^2}{4a} + \frac{27 p^4}{256 b^3}. \]

  Only \(k\) capped: if \(K_{\max} < k_\ast\) and \(W_{\max} \ge w_\ast\), the maximum is at \((K_{\max}, w_\ast)\), and
  \[ P = p\sqrt{K_{\max}} - a K_{\max} + \frac{27 p^4}{256 b^3}. \]

  Only \(w\) capped: if \(K_{\max} \ge k_\ast\) and \(W_{\max} < w_\ast\), the maximum is at \((k_\ast, W_{\max})\), and
  \[ P = \frac{p^2}{4a} + p\, W_{\max}^{3/4} - b W_{\max}. \]

  Both capped: if \(K_{\max} < k_\ast\) and \(W_{\max} < w_\ast\), the maximum is at \((K_{\max}, W_{\max})\), and
  \[
  \begin{aligned}
  P&=p\left(\sqrt{K_{\max}}+W_{\max}^{3/4}\right)\\
  &\quad -aK_{\max}-bW_{\max}.
  \end{aligned}
  \]
provenance: official-key
steps:
  - The unconstrained critical point \(k_\ast = p^2/(4a^2)\), \(w_\ast = (3p/(4b))^4\).
  - Sign of \(P_k\) below and above \(k_\ast\), and sign of \(P_w\) below and above \(w_\ast\).
  - 'Both caps at least the critical values: the point \((k_\ast, w_\ast)\).'
  - 'Only \(k\) capped: the point \((K_{\max}, w_\ast)\). Only \(w\) capped: the point \((k_\ast, W_{\max})\).'
  - 'Both capped: the point \((K_{\max}, W_{\max})\), with \(P\) evaluated at the point of each region.'
verification:
  checks:
    - expr: "diff(diff(p*(sqrt(k) + w**Rational(3,4)) - a*k - b*w, k), w)"
      expected: 0
    - expr: "diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, k).subs({k: Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)**2), w: (3*Symbol('p', positive=True)/(4*Symbol('b', positive=True)))**4})"
      expected: 0
    - expr: "diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, w).subs({k: Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)**2), w: (3*Symbol('p', positive=True)/(4*Symbol('b', positive=True)))**4})"
      expected: 0
    - expr: "diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, k).subs(k, Symbol('p', positive=True)**2/(16*Symbol('a', positive=True)**2))"
      expected: "Symbol('a', positive=True)"
    - expr: "diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, k).subs(k, Symbol('p', positive=True)**2/Symbol('a', positive=True)**2)"
      expected: "-Symbol('a', positive=True)/2"
    - expr: "diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, w).subs(w, (3*Symbol('p', positive=True)/(4*Symbol('b', positive=True)))**4/16)"
      expected: "Symbol('b', positive=True)"
    - expr: "diff(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w, w).subs(w, 16*(3*Symbol('p', positive=True)/(4*Symbol('b', positive=True)))**4)"
      expected: "-Symbol('b', positive=True)/2"
    - expr: "(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w).subs({k: Symbol('Kmax', positive=True), w: (3*Symbol('p', positive=True)/(4*Symbol('b', positive=True)))**4})"
      expected: "Symbol('p', positive=True)*sqrt(Symbol('Kmax', positive=True)) - Symbol('a', positive=True)*Symbol('Kmax', positive=True) + 27*Symbol('p', positive=True)**4/(256*Symbol('b', positive=True)**3)"
    - expr: "(Symbol('p', positive=True)*(sqrt(k) + w**Rational(3,4)) - Symbol('a', positive=True)*k - Symbol('b', positive=True)*w).subs({k: Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)**2), w: Symbol('Wmax', positive=True)})"
      expected: "Symbol('p', positive=True)**2/(4*Symbol('a', positive=True)) + Symbol('p', positive=True)*Symbol('Wmax', positive=True)**Rational(3,4) - Symbol('b', positive=True)*Symbol('Wmax', positive=True)"
:::

::: exercise
id: l6-global-extrema.ex-rectangle-interior-saddle
tier: standard
topics: [global-extrema]
statement: |
  Find the absolute maximum and minimum of \(f(x, y) = x^2 - 2x - y^2\) on the rectangle \(0 \le x \le 3\), \(-1 \le y \le 2\).
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  f_x&=2x-2,\\
  f_y&=-2y.
  \end{aligned}
  \]
  They vanish at \((1, 0)\), which lies in the interior of the rectangle. The second derivatives are
  \[
  \begin{aligned}
  f_{xx}&=2,\\
  f_{yy}&=-2,\\
  f_{xy}&=0.
  \end{aligned}
  \]
  So \(D = -4 < 0\) and the point is a saddle. Its value \(f(1, 0) = -1\) is still a candidate.

  The edges give these values:
  - On \(x = 0\), with \(-1 \le y \le 2\), the restriction is \(-y^2\). Its derivative vanishes at \(y = 0\), with value \(0\). The endpoints give \(f(0, -1) = -1\) and \(f(0, 2) = -4\).
  - On \(x = 3\), the restriction is \(3 - y^2\). The critical value is \(f(3, 0) = 3\), and the endpoints give \(f(3, -1) = 2\) and \(f(3, 2) = -1\).
  - On \(y = -1\), with \(0 \le x \le 3\), the restriction is \(x^2 - 2x - 1\). Its derivative vanishes at \(x = 1\), with value \(f(1, -1) = -2\). The endpoints are the corners \((0, -1)\) and \((3, -1)\), already found.
  - On \(y = 2\), the restriction is \(x^2 - 2x - 4\). Its derivative vanishes at \(x = 1\), with value \(f(1, 2) = -5\). The endpoints are the corners \((0, 2)\) and \((3, 2)\), already found.

  The candidate values are \(-1\), \(0\), \(-1\), \(-4\), \(3\), \(2\), \(-1\), \(-2\) and \(-5\). The absolute maximum is \(3\) at \((3, 0)\). The absolute minimum is \(-5\) at \((1, 2)\). The interior saddle value \(-1\) is neither.
provenance: written-for-site
steps:
  - The interior critical point \((1, 0)\) is a saddle with value \(-1\), kept as a candidate.
  - The edges \(x = 0\) and \(x = 3\) give the critical values \(0\) and \(3\) and the corner values.
  - The edges \(y = -1\) and \(y = 2\) give the critical values \(-2\) and \(-5\).
  - The absolute maximum is \(3\) at \((3, 0)\), and the absolute minimum is \(-5\) at \((1, 2)\).
verification:
  checks:
    - expr: 'Tuple(diff(x**2-2*x-y**2, x), diff(x**2-2*x-y**2, y))'
      expected: 'Tuple(2*x-2, -2*y)'
    - expr: 'diff(x**2-2*x-y**2, x, 2)*diff(x**2-2*x-y**2, y, 2) - diff(x**2-2*x-y**2, x, y)**2'
      expected: '-4'
    - expr: '(x**2-2*x-y**2).subs({x: 1, y: 0})'
      expected: '-1'
    - expr: 'Tuple((x**2-2*x-y**2).subs({x: 0, y: 0}), (x**2-2*x-y**2).subs({x: 0, y: -1}), (x**2-2*x-y**2).subs({x: 0, y: 2}))'
      expected: 'Tuple(0, -1, -4)'
    - expr: 'Tuple((x**2-2*x-y**2).subs({x: 3, y: 0}), (x**2-2*x-y**2).subs({x: 3, y: -1}), (x**2-2*x-y**2).subs({x: 3, y: 2}))'
      expected: 'Tuple(3, 2, -1)'
    - expr: 'Tuple((x**2-2*x-y**2).subs({x: 1, y: -1}), (x**2-2*x-y**2).subs({x: 1, y: 2}))'
      expected: 'Tuple(-2, -5)'
:::

::: exercise
id: l6-global-extrema.quadratic-critical-point-outside
tier: standard
topics: [global-extrema]
statement: |
  Let \(f(x, y) = 48x + 96y - x^2 - 2xy - 9y^2\).
  - a) Find the critical point of \(f\) and decide whether it is a maximum.
  - b) Find the absolute maximum of \(f\) on the rectangle \(0 \le x \le 10\), \(0 \le y \le 10\).
solution: |
  a) The partial derivatives are
  \[
  egin{aligned}
  f_x&=48-2x-2y,\
  f_y&=96-2x-18y.
  \end{aligned}
  \]
  The first equation gives \(y = 24 - x\). Putting this in the second gives
  \[
  egin{aligned}
  96-2x-18(24-x)&=0,\
  16x-336&=0,
  \end{aligned}
  \]
  so \(x = 21\) and \(y = 3\). The second derivatives are \(f_{xx} = -2\), \(f_{yy} = -18\) and \(f_{xy} = -2\), so \(D = 36 - 4 = 32 > 0\). With \(f_{xx} < 0\) the point \((21, 3)\) is a local maximum, and \(f(21, 3) = 648\).

  b) The point \((21, 3)\) lies outside the rectangle, so there is no interior critical point and the maximum is on the boundary. The nearest side is \(x = 10\). The four sides give these restrictions:
  - On \(x = 10\), \(f(10, y) = 380 + 76y - 9y^2\). Its derivative vanishes at \(y = 38/9\), which lies in \([0, 10]\), and the value there is \(4864/9\).
  - On \(y = 10\), \(f(x, 10) = 60 + 28x - x^2\). The derivative vanishes at \(x = 14\), outside \([0, 10]\), so the values are at the corners: \(60\) at \(x = 0\) and \(240\) at \(x = 10\).
  - On \(x = 0\), \(f(0, y) = 96y - 9y^2\). The derivative vanishes at \(y = 16/3\), and the value there is \(256\).
  - On \(y = 0\), \(f(x, 0) = 48x - x^2\). The derivative vanishes at \(x = 24\), outside \([0, 10]\), so the values run from \(0\) to \(380\).

  The largest value is \(4864/9 pprox 540.4\), at \((10, 38/9)\).
provenance: written-for-site
steps:
  - The critical point is \((21, 3)\), with \(D = 32\) and \(f_{xx} = -2\), so it is a maximum.
  - It lies outside the rectangle, so the maximum is on the boundary.
  - The best value on each side is \(4864/9\) on \(x = 10\), \(240\) on \(y = 10\), \(256\) on \(x = 0\) and \(380\) on \(y = 0\).
  - The absolute maximum is \(4864/9\) at \((10, 38/9)\).
verification:
  checks:
    - expr: 'Tuple(diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, x).subs({x: 21, y: 3}), diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, y).subs({x: 21, y: 3}))'
      expected: 'Tuple(0, 0)'
    - expr: '(48*x + 96*y - x**2 - 2*x*y - 9*y**2).subs({x: 21, y: 3})'
      expected: '648'
    - expr: 'diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, x, 2)*diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, y, 2) - diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, x, y)**2'
      expected: '32'
    - expr: '(48*x + 96*y - x**2 - 2*x*y - 9*y**2).subs({x: 10, y: Rational(38, 9)})'
      expected: '4864/9'
    - expr: 'solve(diff(48*x + 96*y - x**2 - 2*x*y - 9*y**2, y).subs(x, 10), y)'
      expected: '[38/9]'
    - expr: 'Tuple((48*x + 96*y - x**2 - 2*x*y - 9*y**2).subs({x: 10, y: 10}), (48*x + 96*y - x**2 - 2*x*y - 9*y**2).subs({x: 0, y: Rational(16, 3)}), (48*x + 96*y - x**2 - 2*x*y - 9*y**2).subs({x: 10, y: 0}))'
      expected: 'Tuple(240, 256, 380)'
:::
