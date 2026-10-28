---
id: l4-graphs-planes
lecture: 4
order: 6
title: Graphs of functions of two variables and planes
prerequisites: [l4-functions-several-variables, l4-lines-planes]
sources:
  - { source: handout, section: "14.1", page: 349 }
  - { source: lecture-notes-5, page: 1 }
  - { source: lecture-4-board-1 }
  - { source: lecture-4-board-2 }
  - { source: lecture-4-notebook }
examWeight: low
notation: |
  The frame for a graph has \(z\) up, \(y\) to the right, and \(x\) down-left. A plane that is a graph is \(z = ax + by + C\), with capital \(C\).
status: reviewed
---

::: section
title: Graph of a function and the paraboloid
:::

::: formal-statement
kind: definition
title: Graph
source: { source: lecture-4-board-1 }
text: |
  The **graph** of \(f\) in \(xyz\) coordinates is the set of \((x,y,z)\) with
  \[
  z = f(x,y).
  \]
:::

::: plain-explanation
text: |
  Place the input \((x,y)\) in the \(xy\)-plane, and mark the point at height \(f(x,y)\). The marked points form a surface in \(xyz\) coordinates.
:::

::: formal-statement
kind: definition
title: Circular paraboloid
source: { source: lecture-4-board-1 }
text: |
  The graph of \(f(x,y) = x^{2} + y^{2}\) is a **circular paraboloid** opening along the vertical \(z\)-axis. In the frame:

  - \(z\) points up,
  - \(y\) points right,
  - \(x\) points down-left.
:::

::: plain-explanation
text: |
  Check three points:

  - At \((0,0)\) the height is \(0\), so the surface meets the origin.
  - At \((1,0)\) the height is \(1\).
  - At \((0,1)\) the height is \(1\).

  The formula \(x^{2} + y^{2}\) is positive at every other point, so the bowl opens along the upward \(z\)-axis.
:::

::: visual
kind: quadric
caption: |
  The surface is the graph of \(z = x^{2} + y^{2}\), and moving the slice up from \(0\) shows the horizontal plane meeting it in a circle at each height above \(0\).
params:
  surface: paraboloid
  a: 1
  b: 1
  axis: z
  slice: 1
:::

::: worked-example
title: Identify the paraboloid
problem: |
  For \(f(x,y) = x^{2} + y^{2}\), compute \(f(0,0)\) and \(f(1,2)\). Identify the graph, the axis it opens along, and the direction of each coordinate axis.
solution: |
  The height at \((0,0)\) is \(f(0,0)\), and the height at \((1,2)\) is \(f(1,2)\).
  \[
  \begin{aligned}
  f(0,0)&=0,\\
  f(1,2)&=1^{2}+2^{2}=5.
  \end{aligned}
  \]
  So \(f(1,2) = 5\), and the point \((1,2,5)\) lies on the graph.

  The surface rises from height \(0\) at the origin to height \(5\) at \((1,2)\). It is a circular paraboloid opening along the vertical \(z\)-axis. In the frame:

  - \(z\) points up,
  - \(y\) points right,
  - \(x\) points down-left.
:::

::: trap
text: |
  The graph of \(f(x,y) = x^{2} + y^{2}\) opens along the vertical \(z\)-axis, with \(y\) to the right and \(x\) down-left. A bowl that opens along \(x\) has equation
  \[
  x = y^{2} + z^{2}.
  \]
  The point \((1,1,0)\) satisfies that equation, because \(1 = 1^{2} + 0^{2}\). The height of \(f\) at \((1,1)\) is \(1^{2} + 1^{2} = 2\), so \((1,1,0)\) does not lie on the graph of \(f\). The two equations describe different surfaces.
:::

::: key-points
text: |
  - The graph of \(f\) in \(xyz\) coordinates is the set of \((x,y,z)\) with \(z = f(x,y)\).
  - The graph of \(f(x,y) = x^{2} + y^{2}\) is a circular paraboloid opening along the vertical \(z\)-axis. In the frame, \(z\) points up, \(y\) points right, and \(x\) points down-left.
  - The usual slip takes the bowl \(x = y^{2} + z^{2}\), which opens along \(x\), for the graph of \(f\). The point \((1,1,0)\) lies on that bowl, but the height of \(f\) at \((1,1)\) is \(2\), so \((1,1,0)\) is not on the graph of \(f\).
:::

::: concept-question
id: l4-graphs-planes.q-0ce311df
question: |
  Which frame matches the graph of \(z = x^{2} + y^{2}\)?
options:
  - text: \(z\) points up, \(y\) points right, and \(x\) points down-left.
    correct: true
  - text: \(x\) points up, \(y\) points right, and \(z\) points down-left.
  - text: \(z\) points up, \(x\) points right, and \(y\) points down-left.
  - text: \(y\) points up, \(z\) points right, and \(x\) points down-left.
explanation: |
  The paraboloid opens along the vertical axis, and that axis is \(z\). So \(z\) points up, \(y\) points right, and \(x\) points down-left. A frame with \(x\) vertical describes a bowl opening along \(x\).
:::

::: exercise
id: l4-graphs-planes.ex-paraboloid-basic
tier: basic
topics: [graph, paraboloid]
statement: |
  Let \(f(x,y) = x^{2} + y^{2}\). Compute \(f(1,2)\) and \(f(0,0)\). Does the point \((1,1,0)\) lie on the graph? Identify the surface, the axis it opens along, and the direction of each coordinate axis.
solution: |
  \[
  \begin{aligned}
  f(1,2)&=1^{2}+2^{2}=5,\\
  f(0,0)&=0,\\
  f(1,1)&=1^{2}+1^{2}=2.
  \end{aligned}
  \]
  So \(f(1,2) = 5\), and the point \((1,2,5)\) lies on the graph. The graph meets the origin, because \(f(0,0) = 0\). The point on the graph above \((1,1)\) is \((1,1,2)\). The point \((1,1,0)\) has height \(0\), so it does not lie on the graph.

  The graph is a circular paraboloid opening along the vertical \(z\)-axis. The frame has \(z\) up, \(y\) to the right, and \(x\) down-left.
provenance: written-for-site
steps:
  - Value \(f(1,2) = 5\).
  - Value \(f(0,0) = 0\).
  - Height at \((1,1)\) equal to \(2\), so \((1,1,0)\) is off the graph.
  - Surface named, opening along \(z\), with the frame stated.
verification:
  checks:
    - expr: '(x**2 + y**2).subs({x: 1, y: 2})'
      expected: "5"
    - expr: '(x**2 + y**2).subs({x: 0, y: 0})'
      expected: "0"
    - expr: '(x**2 + y**2).subs({x: 1, y: 1})'
      expected: "2"
:::

::: section
title: Planes as graphs
:::

::: formal-statement
kind: definition
title: The plane (x,y)
source: { source: lecture-4-board-2 }
text: |
  The equation \(z = f(x,y) = 0\) has graph the **plane** \((x,y)\).
:::

::: plain-explanation
text: |
  Every input is sent to height \(0\). The graph is the set of points \((x,y,0)\). That set is the \(xy\)-plane. It is called the plane \((x,y)\).
:::

::: formal-statement
kind: definition
title: Equation of a plane
source: { source: lecture-4-board-2 }
text: |
  A plane that is a graph has equation
  \[
  z = f(x,y) = ax + by + C.
  \]
  When \(C > 0\), the number \(C\) is the intercept on the positive \(z\)-axis.
:::

::: plain-explanation
text: |
  The coefficients \(a\) and \(b\) are lowercase. The constant term is capital \(C\). Substituting \((x,y) = (0,0)\) gives height \(C\). When that height is positive, the point \((0,0,C)\) lies on the positive \(z\)-axis.
:::

::: worked-example
title: Write a plane from a, b and C
problem: |
  Write the plane \(z = ax + by + C\) for \(a = 1\), \(b = 2\) and \(C = 4\). Find the height on the \(z\)-axis, and the height at \((1,1)\).
solution: |
  Substitute \(a = 1\), \(b = 2\) and \(C = 4\) into \(z = ax + by + C\). The equation is
  \[
  z = x + 2y + 4.
  \]
  The height at \((0,0)\) is \(4\). Since \(4 > 0\), the plane meets the positive \(z\)-axis at height \(4\).
  The height at \((1,1)\) is \(1 + 2 + 4\). That height equals \(7\).
:::

::: guided-example
title: Build a plane
problem: |
  Write \(z = ax + by + C\) for \(a = 3\), \(b = -2\) and \(C = 1\). Find the intercept on the \(z\)-axis and the height at \((2,1)\).
steps:
  - |
    Substitute the coefficients. The equation is \(z = 3x - 2y + 1\).
  - |
    At \((0,0)\) the height is \(1\).
  - |
    Since \(1 > 0\), the intercept lies on the positive \(z\)-axis, at the point \((0,0,1)\).
  - |
    At \((2,1)\) the height is \(3 \cdot 2 - 2 \cdot 1 + 1\). That height equals \(5\).
:::

::: trap
text: |
  In \(z = ax + by + C\), the height at \((0,0)\) is \(C\). When \(C > 0\), that height is the intercept on the positive \(z\)-axis. Reading \(C\) as the intercept on the \(x\)-axis fails for \(z = 2x + y + 3\). The height at \((0,0)\) is \(3\). Points of the \(x\)-axis satisfy \(y = 0\) and \(z = 0\), so
  \[
  \begin{aligned}
  0&=2x+3,\\
  x&=-\frac{3}{2}.
  \end{aligned}
  \]
  The number \(-\frac{3}{2}\) is not \(C\).
:::

::: going-deeper
title: Planes that are not graphs
text: |
  A plane
  \[
  ax + by + cz = d
  \]
  is the graph of a function \(z = f(x, y)\) only when \(c \neq 0\). Then
  \[
  z = \frac{d - ax - by}{c}.
  \]
  The plane \(x = 1\) has \(c = 0\). It is vertical, and every point \((x, y)\) with \(x = 1\) lies above many heights \(z\), while points with \(x \neq 1\) have none. A function gives one height per point, so this plane is not a graph.
:::

::: key-points
text: |
  - The equation \(z = f(x,y) = 0\) has graph the \(xy\)-plane, called the plane \((x,y)\).
  - A plane that is a graph has equation \(z = f(x,y) = ax + by + C\), with lowercase \(a\) and \(b\) and capital \(C\).
  - The height at \((0,0)\) is \(C\). When \(C > 0\), the number \(C\) is the intercept on the positive \(z\)-axis.
  - The usual slip reads \(C\) as the intercept on the \(x\)-axis. For \(z = 2x + y + 3\), the \(x\)-axis meets the plane at \(x = -\frac{3}{2}\), and \(C = 3\) is the height at \((0,0)\).
:::

::: concept-question
id: l4-graphs-planes.q-60aea26b
question: |
  What is the graph of \(z = f(x,y) = 0\)?
options:
  - text: The plane \((x,y)\).
    correct: true
  - text: The plane \(z = 1\).
  - text: The plane \(z = x\).
  - text: The plane \(z = x + y\).
explanation: |
  Every input has height \(0\), so the graph is the set of points \((x,y,0)\). That set is the plane \((x,y)\). The other options fail:

  - \(z = 1\) has height \(1\) at the origin.
  - \(z = x\) has height \(1\) at \((1,0)\).
  - \(z = x + y\) has height \(1\) at \((1,0)\).
:::

::: concept-question
id: l4-graphs-planes.q-4462c88d
question: |
  In the plane \(z = ax + by + C\) with \(C > 0\), what is \(C\)?
options:
  - text: The intercept on the positive \(z\)-axis.
    correct: true
  - text: The coefficient of \(x\).
  - text: The coefficient of \(y\).
  - text: The height at \((1,1)\).
explanation: |
  Substituting \((0,0)\) gives height \(C\). The point \((0,0,C)\) lies on the positive \(z\)-axis because \(C > 0\). The coefficient of \(x\) is \(a\). The coefficient of \(y\) is \(b\). The height at \((1,1)\) is \(a + b + C\).
:::

::: exercise
id: l4-graphs-planes.ex-plane-standard
tier: standard
topics: [planes]
statement: |
  Write the plane \(z = ax + by + C\) with \(a = 2\), \(b = -1\) and \(C = 3\). Find the height where the plane meets the \(z\)-axis, and the height at \((1,4)\).
solution: |
  Substitute the coefficients into \(z = ax + by + C\). The equation is
  \[
  z = 2x - y + 3.
  \]
  The height at \((0,0)\) is \(2 \cdot 0 - 0 + 3\). That height equals \(3\). Since \(3 > 0\), the plane meets the positive \(z\)-axis at height \(3\).
  The height at \((1,4)\) is \(2 \cdot 1 - 4 + 3\). That height equals \(1\).
provenance: written-for-site
steps:
  - Equation \(z = 2x - y + 3\).
  - Height at \((0,0)\) equal to \(3\), on the positive \(z\)-axis.
  - Height at \((1,4)\) equal to \(1\).
verification:
  checks:
    - expr: '(2*x - y + 3).subs({x: 0, y: 0})'
      expected: "3"
    - expr: '(2*x - y + 3).subs({x: 1, y: 4})'
      expected: "1"
:::

::: exercise
id: l4-graphs-planes.ex-plane-exam
tier: exam
topics: [planes]
statement: |
  A plane has the form \(z = ax + by + C\) with \(b = -1\). The points \((0,0,3)\) and \((1,2,6)\) lie on it. Find \(a\) and \(C\), write the equation, and give the height on the \(z\)-axis.
solution: |
  The height at \((0,0)\) is \(C\). The point \((0,0,3)\) lies on the plane, so \(C = 3\).
  At \((1,2)\) the height is \(6\) and \(b = -1\), so
  \[
  \begin{aligned}
  6&=a \cdot 1+(-1) \cdot 2+3,\\
  a&=6-(-1) \cdot 2-3=5.
  \end{aligned}
  \]
  The equation is
  \[
  z = 5x - y + 3.
  \]
  The height on the \(z\)-axis is \(3\). Since \(3 > 0\), that intercept lies on the positive \(z\)-axis.
provenance: written-for-site
steps:
  - Constant \(C = 3\) from the point \((0,0,3)\).
  - Coefficient \(a = 5\) from the point \((1,2,6)\) and \(b = -1\).
  - Equation \(z = 5x - y + 3\).
  - Height on the \(z\)-axis equal to \(3\).
verification:
  checks:
    - expr: '(5*x - y + 3).subs({x: 0, y: 0})'
      expected: "3"
    - expr: '(5*x - y + 3).subs({x: 1, y: 2})'
      expected: "6"
    - expr: '6 - (-1)*2 - 3'
      expected: "5"
:::

::: sheet-item
id: l4-graphs-planes.sheet-graph
category: formula
text: |
  The graph of \(f\) in \(xyz\) coordinates is the set of \((x,y,z)\) with
  \[
  z = f(x,y).
  \]
:::

::: sheet-item
id: l4-graphs-planes.sheet-plane
category: formula
text: |
  A plane that is a graph is
  \[
  z = ax + by + C.
  \]
  When \(C > 0\), \(C\) is the intercept on the positive \(z\)-axis.
:::

::: sheet-item
id: l4-graphs-planes.sheet-paraboloid
category: recognition
text: |
  The graph of \(z = x^{2} + y^{2}\) is a circular paraboloid opening along the vertical \(z\)-axis, with \(y\) to the right and \(x\) down-left.
:::

::: exercise
id: l4-graphs-planes.ex-plane-from-three-points
tier: standard
topics: [planes]
statement: |
  A plane \(z = ax + by + C\) contains the points \((1, 1, 4)\), \((2, 1, 6)\) and \((1, 3, 2)\).

  1. Find \(a\), \(b\) and \(C\), and write the equation.
  2. Where does the plane meet the \(z\)-axis?
  3. The plane meets the plane \((x,y)\), given by \(z = 0\), in a line. Give its equation, and the points where it meets the \(x\)-axis and the \(y\)-axis.
solution: |
  **The coefficients.** The first two points have the same \(y\)-coordinate \(1\), so subtracting their equations gives
  \[
  \begin{aligned}
  6-4&=a(2-1),\\
  a&=2.
  \end{aligned}
  \]
  The first and third points have the same \(x\)-coordinate \(1\), so subtracting gives
  \[
  \begin{aligned}
  2-4&=b(3-1),\\
  b&=-1.
  \end{aligned}
  \]
  The first point gives
  \[
  \begin{aligned}
  4&=2\cdot 1-1\cdot 1+C,\\
  C&=3.
  \end{aligned}
  \]
  The plane is \(z = 2x - y + 3\). Check with the second point: \(2\cdot 2 - 1 + 3 = 6\). Check with the third point: \(2\cdot 1 - 3 + 3 = 2\).

  **The \(z\)-axis.** At \((0,0)\) the height is \(C = 3\). Since \(3 > 0\), the plane meets the positive \(z\)-axis at \((0, 0, 3)\).

  **The plane \((x,y)\).** Setting \(z = 0\) gives \(2x - y + 3 = 0\), the line \(y = 2x + 3\) in the plane \(z = 0\). On the \(x\)-axis \(y = 0\), so
  \[
  \begin{aligned}
  0&=2x+3,\\
  x&=-\frac{3}{2}.
  \end{aligned}
  \]
  The point is \(\left(-\frac32, 0, 0\right)\). On the \(y\)-axis \(x = 0\), so \(y = 3\). The point is \((0, 3, 0)\).
provenance: written-for-site
steps:
  - |
    Coefficients \(a = 2\), \(b = -1\) and \(C = 3\).
  - |
    The plane meets the positive \(z\)-axis at \((0, 0, 3)\).
  - |
    The line \(y = 2x + 3\) in the plane \(z = 0\), meeting the axes at \(\left(-\frac32, 0, 0\right)\) and \((0, 3, 0)\).
verification:
  checks:
    - expr: "(2*1 - 1 + 3, 2*2 - 1 + 3, 2*1 - 3 + 3)"
      expected: "(4, 6, 2)"
    - expr: "((6 - 4)/(2 - 1), (2 - 4)/(3 - 1))"
      expected: "(2, -1)"
    - expr: "4 - 2*1 - (-1)*1"
      expected: "3"
    - expr: "(2*0 - 0 + 3, 2*(-Rational(3, 2)) + 3, 2*0 - 3 + 3)"
      expected: "(3, 0, 0)"
:::
