---
id: l4-cross-sections
lecture: 4
order: 8
title: Cross sections
prerequisites: [l4-quadrics]
sources:
  - { source: handout, section: "14.1", page: 349 }
  - { source: lecture-4-board-4 }
  - { source: lecture-4-notebook }
  - { source: lecture-notes-4, page: 1 }
  - { source: sheet-2, page: 2 }
  - { source: midterm-2021, page: 1 }
examWeight: medium
examWeightNote: The volume block always asks for a sketch of a cut by a coordinate plane.
notation: |
  \(Oyz\) is the plane \(x = 0\), also called the \(yz\)-plane. \(Oxz\) is the plane \(y = 0\), also called the \(xz\)-plane. The board writes the function as \(f\). The notebook page writes the same function as \(F\).
taught: lecture
status: reviewed
---

::: section
title: Cuts by coordinate planes
:::

::: formal-statement
kind: definition
title: Cross section by a coordinate plane
source: { source: lecture-4-notebook }
text: |
  A **cross section** of the graph \(z = f(x, y)\) by a coordinate plane is the curve in which that plane meets the graph.
:::

::: plain-explanation
text: |
  The planes \(x = 0\) and \(y = 0\) are vertical. Each passes through the origin. The cross section is the curve where the graph meets the plane.
:::

::: formal-statement
kind: method
title: Cuts by the planes x = 0 and y = 0
source: { source: lecture-4-board-4 }
text: |
  - Taking \(x = 0\) cuts the graph \(z = f(x, y)\) by the vertical plane \(Oyz\). Points on that cut are \((0, y, z)\). The height on the cut is \(z = f(0, y)\).
  - Taking \(y = 0\) cuts the graph by the vertical plane \(Oxz\). Points on that cut are \((x, 0, z)\). The height on the cut is \(z = f(x, 0)\).
:::

::: plain-explanation
text: |
  - On the plane \(x = 0\), the coordinate \(y\) varies. The coordinate \(x\) stays at \(0\). Every point of the cut has the shape \((0, y, z)\). The point lies on the graph. Hence \(z = f(0, y)\).
  - On the plane \(y = 0\), the coordinate \(x\) varies. The coordinate \(y\) stays at \(0\). Every point of the cut has the shape \((x, 0, z)\). The height is \(z = f(x, 0)\).
:::

::: visual
kind: quadric
caption: |
  The cut \(x = 0\) lies in the plane \(Oyz\). The curve in that plane is \(z = y^{2}\) for this paraboloid.
params:
  surface: paraboloid
  a: 1
  b: 1
  c: 1
  axis: x
  slice: 0
:::

::: worked-example
title: Cut by x = 0
problem: |
  Let \(f(x, y) = x^{2} + y^{2}\). Find the cut of the graph \(z = f(x, y)\) by the plane \(x = 0\).
solution: |
  The cutting plane \(x = 0\) is \(Oyz\). Points of the cut have the form \((0, y, z)\). On this plane the height is:
  \[
  \begin{aligned}
  z&=f(0,y)=0^{2}+y^{2},\\
  &=y^{2}.
  \end{aligned}
  \]
  The cut is the parabola \(z = y^{2}\) in \(Oyz\).
:::

::: worked-example
title: Cut by y = 0
problem: |
  Let \(f(x, y) = x^{2} + y^{2}\). Find the cut of the graph \(z = f(x, y)\) by the plane \(y = 0\).
solution: |
  The cutting plane \(y = 0\) is \(Oxz\). Points of the cut have the form \((x, 0, z)\). On this plane the height is:
  \[
  \begin{aligned}
  z&=f(x,0)=x^{2}+0^{2},\\
  &=x^{2}.
  \end{aligned}
  \]
  The cut is the parabola \(z = x^{2}\) in \(Oxz\).
:::

::: trap
text: |
  The plane \(y = 0\) is \(Oxz\). A point of the cut of the graph \(z = f(x, y)\) is \((x, 0, z)\). The height is \(z = f(x, 0)\). The point \((0, x, z)\) has first coordinate \(0\) and second coordinate \(x\). That point lies in the plane \(x = 0\).
:::

::: key-points
text: |
  - The cut of the graph \(z = f(x, y)\) by the plane \(x = 0\) is the curve \(z = f(0, y)\) in \(Oyz\). Its points have the form \((0, y, z)\).
  - The cut by the plane \(y = 0\) is the curve \(z = f(x, 0)\) in \(Oxz\). Its points have the form \((x, 0, z)\).
  - The usual slip writes a point of the cut by \(y = 0\) as \((0, x, z)\). That triple has first coordinate \(0\), so it lies in the plane \(x = 0\). A point of the cut by \(y = 0\) is \((x, 0, z)\), with height \(z = f(x, 0)\).
:::

::: concept-question
id: l4-cross-sections.q-51788d65
question: |
  The graph is \(z = x^{2} + y^{2}\). Which description is the cut by the plane \(x = 0\)?
options:
  - text: |
      The cut is the curve \(z = y^{2}\) in the plane \(Oyz\).
    correct: true
  - text: |
      The cut is the curve \(z = x^{2}\) in the plane \(Oyz\).
  - text: |
      The cut is the curve \(z = y^{2}\) in the plane \(Oxz\).
  - text: |
      The cut is the curve \(z = x^{2}\) in the plane \(Oxz\).
explanation: |
  The plane \(x = 0\) is \(Oyz\). Substituting \(x = 0\) into \(x^{2} + y^{2}\) gives \(y^{2}\). The curve \(z = x^{2}\) is the cut by \(y = 0\). That cut lies in \(Oxz\).
:::

::: exercise
id: l4-cross-sections.ex-basic-x0
tier: basic
topics:
  - cross-sections
statement: |
  Let \(f(x, y) = 2x + y^{2}\). Give the equation of the cut of the graph \(z = f(x, y)\) by the plane \(x = 0\), together with a general point of the cut.
solution: |
  The plane \(x = 0\) is \(Oyz\). Substituting the first input \(0\) into the height gives
  \[
  \begin{aligned}
  z&=f(0,y)=2\cdot 0+y^{2},\\
  &=y^{2}.
  \end{aligned}
  \]
  The cut is the curve \(z = y^{2}\) in \(Oyz\). A general point on the cut is \((0, y, y^{2})\).
provenance: written-for-site
steps:
  - Substitute x = 0 to obtain z = y^2 in Oyz.
  - Write a general point as (0, y, y^2).
verification:
  checks:
    - expr: (z - (2*x + y**2)).subs(x, 0) - (z - y**2)
      expected: "0"
:::

::: section
title: Coordinate traces
:::

::: formal-statement
title: Coordinate traces
source: { source: handout, section: "14.1", page: 350 }
text: |
  - For \(f(x, y) = \sqrt{x} + \sqrt{y}\), the **trace** on \(y = 0\) is the curve \(z = \sqrt{x}\) in the \(xz\)-plane. The trace on \(x = 0\) is the curve \(z = \sqrt{y}\) in the \(yz\)-plane.
  - For \(f(x, y) = x^{2} + y^{2}\), the trace on \(x = 0\) is \(z = y^{2}\) in the \(yz\)-plane. The trace on \(y = 0\) is \(z = x^{2}\) in the \(xz\)-plane.
:::

::: plain-explanation
text: |
  Substitute \(y = 0\) into \(\sqrt{x} + \sqrt{y}\). The second square root is \(0\). The height is \(\sqrt{x}\). This square root is defined for \(x \ge 0\). The curve lies in the plane \(y = 0\). That plane is the \(xz\)-plane. On \(x = 0\), the height is \(\sqrt{y}\), for \(y \ge 0\). That curve lies in the \(yz\)-plane.
:::

::: visual
kind: quadric
caption: |
  For \(f = x^2 + y^2\), the cut axis \(y\) with the slice at \(0\) shows the trace \(z = x^2\) in the \(xz\)-plane.
params:
  surface: paraboloid
  a: 1
  b: 1
  c: 1
  axis: y
  slice: 0
:::

::: guided-example
title: Trace on y = 0
problem: |
  Let \(f(x, y) = \sqrt{x} + \sqrt{y}\). Describe the trace of its graph on the plane \(y = 0\).
steps:
  - |
    The plane \(y = 0\) is \(Oxz\). A point of the trace has the form \((x, 0, z)\).
  - |
    The height is \(z = f(x, 0)\). Substitute \(y = 0\) to get
    \[
    f(x, 0) = \sqrt{x} + \sqrt{0}.
    \]
  - |
    The value \(\sqrt{0}\) is \(0\). Therefore \(z = \sqrt{x}\). The trace is the curve \(z = \sqrt{x}\) in the \(xz\)-plane, for \(x \ge 0\).
:::

::: going-deeper
title: A few cross sections can miss the surface
text: |
  The surface \(z = xy\) meets the plane \(x = 0\) in the line \(z = 0\), and it meets the plane \(y = 0\) in the same line. Those two cuts look like a flat plane. The diagonal cut \(y = x\) gives the parabola \(z = x^2\), which shows the surface bends upward along that direction. Two coordinate cuts are a check. They do not determine the surface.
:::

::: key-points
text: |
  - The trace of the graph \(z = f(x, y)\) on the plane \(y = 0\) comes from substituting \(y = 0\) into \(f\). The height is \(f(x, 0)\), and the curve lies in the \(xz\)-plane.
  - For \(f(x, y) = \sqrt{x} + \sqrt{y}\), the trace on \(y = 0\) is the curve \(z = \sqrt{x}\) in the \(xz\)-plane, for \(x \ge 0\). The trace on \(x = 0\) is the curve \(z = \sqrt{y}\) in the \(yz\)-plane, for \(y \ge 0\).
  - For \(f(x, y) = x^{2} + y^{2}\), the trace on \(x = 0\) is \(z = y^{2}\) in the \(yz\)-plane. The trace on \(y = 0\) is \(z = x^{2}\) in the \(xz\)-plane.
  - Two coordinate cuts are a check. They do not determine the surface.
:::

::: concept-question
id: l4-cross-sections.q-226133cd
question: |
  Let \(f(x, y) = \sqrt{x} + \sqrt{y}\). Which description is the trace on the plane \(y = 0\)?
options:
  - text: |
      The trace is the curve \(z = \sqrt{x}\) in the \(xz\)-plane.
    correct: true
  - text: |
      The trace is the curve \(z = \sqrt{y}\) in the \(xz\)-plane.
  - text: |
      The trace is the curve \(z = \sqrt{x} + \sqrt{y}\) in the \(xy\)-plane.
  - text: |
      The trace is the curve \(z = x\) in the \(xz\)-plane.
explanation: |
  Substitute \(y = 0\) into \(\sqrt{x} + \sqrt{y}\). The second term is \(\sqrt{0} = 0\). The height is \(\sqrt{x}\). The plane \(y = 0\) is the \(xz\)-plane.
:::

::: section
title: Intersection of two graphs
:::

::: formal-statement
kind: definition
title: Intersection of two graphs
source: { source: lecture-4-board-4 }
text: |
  The cross section of \(z = f(x, y)\) by the surface \(z = g(x, y)\) is the set of \((x, y)\) such that \(g(x, y) = f(x, y)\). In space, the curve is the set of points \((x, y, z)\) with \(z = f(x, y)\) and \(f(x, y) = g(x, y)\).
:::

::: plain-explanation
text: |
  Each graph assigns a height to the pair \((x, y)\). The surfaces meet at those pairs where the two heights are equal. The meeting point in space uses that shared number as its \(z\)-coordinate.
:::

::: trap
text: |
  The intersection of the graphs \(z = f(x, y)\) and \(z = g(x, y)\) is the set of points where \(f(x, y) = g(x, y)\). At those points, \(z\) equals that common value. Read the slash in \(f(x, y)/g(x, y) = f(x, y)\) as division. The quotient requires \(g(x, y) \neq 0\). Wherever \(f(x, y) \neq 0\), divide both sides by \(f(x, y)\):
  \[
  \frac{1}{g(x, y)} = 1.
  \]
  Therefore \(g(x, y) = 1\). Forcing \(g = 1\) wherever \(f \neq 0\) is a different condition from equating the two heights.
:::

::: key-points
text: |
  - The graphs \(z = f(x, y)\) and \(z = g(x, y)\) meet at the pairs \((x, y)\) with \(f(x, y) = g(x, y)\). At those pairs, \(z\) equals the common value.
  - In space, the intersection is the set of points \((x, y, z)\) with \(z = f(x, y)\) and \(f(x, y) = g(x, y)\).
  - The usual slip imposes \(f(x, y)/g(x, y) = f(x, y)\), with the slash read as division. Wherever \(f(x, y) \neq 0\), that forces \(g(x, y) = 1\). The intersection condition is \(f(x, y) = g(x, y)\).
:::

::: concept-question
id: l4-cross-sections.q-9719300a
question: |
  Which condition describes the intersection of the graph \(z = f(x, y)\) with the graph \(z = g(x, y)\)?
options:
  - text: |
      \(f(x, y) = g(x, y)\). The coordinate \(z\) equals that common value.
    correct: true
  - text: |
      The condition is \(f(x, y)/g(x, y) = f(x, y)\), with the slash read as division.
  - text: |
      Both heights are zero.
  - text: |
      The third coordinate is \(z = 0\).
explanation: |
  The graphs meet where the two heights are equal. The coordinate \(z\) is that shared height. If the slash is division, divide by \(f(x, y)\) wherever \(f(x, y) \neq 0\). The result is \(g(x, y) = 1\).
:::

::: exercise
id: l4-cross-sections.ex-standard-intersection
tier: standard
topics:
  - cross-sections
statement: |
  Let \(f(x, y) = x^{2} + y^{2}\) and \(g(x, y) = 2x\). Give the equation in \(x\) and \(y\) of the intersection of the graphs \(z = f(x, y)\) and \(z = g(x, y)\). Give \(z\) on that intersection.
solution: |
  The heights agree when \(x^{2} + y^{2} = 2x\). Rewrite the left side by completing the square:
  \[
  x^{2} + y^{2} - 2x = (x - 1)^{2} + y^{2} - 1.
  \]
  The intersection is the set where \((x - 1)^{2} + y^{2} = 1\). On that set, \(z = 2x\). The equation in \(x\) and \(y\) is a circle of radius \(1\) with center \((1, 0)\).
provenance: written-for-site
steps:
  - Equate the heights and complete the square.
  - Record the common height z = 2x.
verification:
  checks:
    - expr: expand((x**2 + y**2 - 2*x) - ((x - 1)**2 + y**2 - 1))
      expected: "0"
    - expr: "(2**2 + 0**2 - 2*2, (2 - 1)**2 + 0**2 - 1)"
      expected: "(0, 0)"
:::

::: sheet-item
id: l4-cross-sections.sheet-x0-oyz
category: recognition
text: |
  The equation \(x = 0\) means the curve \(z = f(0, y)\) in the plane \(Oyz\).
:::

::: sheet-item
id: l4-cross-sections.sheet-y0-oxz
category: formula
text: |
  The equation \(y = 0\) means the curve \(z = f(x, 0)\) in the plane \(Oxz\). A point of the cut is \((x, 0, z)\).
:::

::: sheet-item
id: l4-cross-sections.sheet-y0-point
category: trap
text: |
  A point of the cut by \(y = 0\) is \((x, 0, z)\). The triple \((0, x, z)\) lies in the plane \(x = 0\).
:::

::: exercise
id: l4-cross-sections.midterm-2021-ex2.1
number: "2.1"
statement: |
  Let \(\mathcal{C}\) be the surface \(z^2 = x^2 + y^2\). Give the equation of the cut of \(\mathcal{C}\) by the vertical plane \(x = 0\). Sketch the plot of this cut in the plane of the cut.
tier: exam
topics:
  - cross-sections
  - cone
solution: |
  Substituting \(x = 0\) gives \(z^2 = y^2\) in the plane \(Oyz\). The cut is the pair of lines \(z = y\) and \(z = -y\). In \(Oyz\) the graph is an X through the origin, at 45 degrees to the axes.
provenance: written-for-site
steps:
  - Substitute x = 0 to get z^2 = y^2.
  - Sketch the two lines z = \pm y in Oyz.
verification:
  checks:
    - expr: (z**2 - (0**2 + y**2)) - (z**2 - y**2)
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "2.1"
  points: 1
:::

::: exercise
id: l4-cross-sections.midterm-2021-ex2.4
number: "2.4"
statement: |
  Give the equation of the cut of \(\mathcal{C}\) by the vertical plane \(x = 1\). Sketch the plot of this cut in the plane of the cut. Give the equation of the asymptotes.
tier: exam
topics:
  - cross-sections
  - hyperbola
solution: |
  Substituting \(x = 1\) gives
  \[
  z^2 = 1 + y^2,\quad\text{or}\quad z^2 - y^2 = 1.
  \]
  In the plane \(x = 1\), with coordinates \((y, z)\), this is a hyperbola opening along the \(z\)-direction. The asymptotes are the lines \(z = y\) and \(z = -y\) in that plane.
provenance: written-for-site
steps:
  - Obtain z^2 - y^2 = 1.
  - Sketch the hyperbola in the plane x = 1.
  - Give the asymptotes z = \pm y.
verification:
  checks:
    - expr: (z**2 - (1**2 + y**2)) - (z**2 - y**2 - 1)
      expected: "0"
    - expr: (z - y)*(z + y) - (z**2 - y**2)
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "2.4"
  points: 1
:::

::: exercise
id: l4-cross-sections.midterm-2021-ex2.5
number: "2.5"
statement: |
  Give the equation of the cut of \(\mathcal{C}\) by the inclined plane \(z = y + 1\). Sketch the plot of this cut in the plane \(Oxy\).
tier: exam
topics:
  - cross-sections
  - parabola
solution: |
  Substitute \(z = y + 1\) into \(z^2 = x^2 + y^2\):
  \[
  \begin{aligned}
  (y + 1)^2&=x^2 + y^2,\\
  x^2&=2y + 1.
  \end{aligned}
  \]
  In \(Oxy\) this is the parabola \(y = (x^2 - 1)/2\), opening in the positive \(y\)-direction, with vertex at \((0, -1/2)\). The plane \(z = y + 1\) is parallel to the generating line \(z = y\) of the cone, which matches a parabolic cut.
provenance: written-for-site
steps:
  - Substitute z = y + 1 to get x^2 = 2y + 1.
  - Sketch the parabola in Oxy.
verification:
  checks:
    - expr: expand((y + 1)**2 - (x**2 + y**2) - (1 + 2*y - x**2))
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "2.5"
  points: 1
:::

::: exercise
id: l4-cross-sections.midterm-2021-ex2.6
number: "2.6"
statement: |
  Give the equation of the cut of \(\mathcal{C}\) by the inclined plane \(z = 2y + 1\). Which kind of curve is it? Give the equation of the asymptotes.
tier: exam
topics:
  - cross-sections
  - hyperbola
solution: |
  Substitute \(z = 2y + 1\):
  \[
  \begin{aligned}
  (2y + 1)^2&=x^2 + y^2,\\
  x^2&=3y^2 + 4y + 1.
  \end{aligned}
  \]
  Completing the square gives
  \[
  3\bigl(y + \frac{2}{3}\bigr)^2 - x^2 = \frac{1}{3}.
  \]
  This is a hyperbola in \(Oxy\). The asymptotic pair is \(3\bigl(y + \frac{2}{3}\bigr)^2 - x^2 = 0\), so \(x = \pm\sqrt{3}\bigl(y + \frac{2}{3}\bigr)\), or equivalently \(y = -\frac{2}{3} \pm \frac{x}{\sqrt{3}}\).
provenance: written-for-site
steps:
  - Substitute z = 2y + 1 and complete the square.
  - Name the curve as a hyperbola.
  - Give the asymptotes x = \pm\sqrt{3}(y + 2/3).
verification:
  checks:
    - expr: expand(3*(y + Rational(2, 3))**2 - x**2 - Rational(1, 3) - ((2*y + 1)**2 - (x**2 + y**2)))
      expected: "0"
    - expr: expand((sqrt(3)*(y + Rational(2, 3)) - x)*(sqrt(3)*(y + Rational(2, 3)) + x) - (3*(y + Rational(2, 3))**2 - x**2))
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "2.6"
  points: 1
:::

::: exercise
id: l4-cross-sections.midterm-2021-ex4.1
number: "4.1"
statement: |
  Let \(f(x, y) = \dfrac{x^2 - y^2}{x^2 + y^2}\), and let \(F\) be the graph of \(f\). Let \(\theta\) be a given angle. Give the equation of the cut of \(F\) by the vertical plane \(P_\theta\) defined by \(x = r\cos\theta\) and \(y = r\sin\theta\) with \(r > 0\). How does this cut depend on the coordinate \(r\)? What about the cut with \(P_{-\theta}\)?
tier: exam
topics:
  - cross-sections
solution: |
  On \(P_\theta\),
  \[
  \begin{aligned}
  &f(r\cos\theta,\, r\sin\theta)\\
  &=\frac{r^2(\cos^2\theta - \sin^2\theta)}{r^2},\\
  &=\cos(2\theta).
  \end{aligned}
  \]
  The cut of the graph is the horizontal half-line \(z = \cos(2\theta)\) for \(r > 0\). The height does not depend on \(r\). On \(P_{-\theta}\) the same computation gives \(z = \cos(-2\theta) = \cos(2\theta)\), so that cut is the horizontal half-line at the same height.
provenance: written-for-site
steps:
  - Reduce f to cos(2 theta).
  - State that the cut is independent of r.
  - Obtain the same height on P_{-theta}.
verification:
  checks:
    - expr: ((r*cos(theta))**2 - (r*sin(theta))**2)/((r*cos(theta))**2 + (r*sin(theta))**2) - cos(2*theta)
      expected: "0"
    - expr: ((r*cos(-theta))**2 - (r*sin(-theta))**2)/((r*cos(-theta))**2 + (r*sin(-theta))**2) - cos(2*theta)
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "4.1"
  points: 1
:::

::: exercise
id: l4-cross-sections.ex-traces-and-diagonal-cuts
tier: standard
topics: [cross-sections]
statement: |
  Let \(f(x, y) = \sqrt{x} + \sqrt{y}\) and \(g(x, y) = xy\).

  1. Give the cuts of the graph of \(f\) by the planes \(x = 0\) and \(y = 0\), with the plane each lies in, and the cut by the vertical plane \(y = x\).
  2. Give the same three cuts for the graph of \(g\). What do the cuts by \(x = 0\) and \(y = 0\) tell you about \(g\), and what do they miss?
solution: |
  **The graph of \(f\).**

  - On \(x = 0\), the points have the form \((0, y, z)\) with \(z = f(0, y) = \sqrt{y}\), for \(y \ge 0\). The cut is the curve \(z = \sqrt{y}\) in the plane \(Oyz\).
  - On \(y = 0\), the points have the form \((x, 0, z)\) with \(z = f(x, 0) = \sqrt{x}\), for \(x \ge 0\). The cut is the curve \(z = \sqrt{x}\) in the plane \(Oxz\).
  - On \(y = x\), the points have the form \((t, t, z)\) with \(z = f(t, t) = 2\sqrt{t}\), for \(t \ge 0\). The cut is the curve \(z = 2\sqrt{t}\) over the line \(y = x\) in the \(xy\)-plane.

  **The graph of \(g\).**

  - On \(x = 0\), the height is \(g(0, y) = 0\). The cut is the line \(z = 0\) in \(Oyz\).
  - On \(y = 0\), the height is \(g(x, 0) = 0\), so the cut is the line \(z = 0\) in \(Oxz\).
  - On \(y = x\), the height is \(g(t, t) = t^{2}\), so the cut is the parabola \(z = t^{2}\).
  - On the vertical plane \(y = -x\), the height is \(g(t, -t) = -t^{2}\), a parabola opening downwards.

  **What the cuts say.** The two coordinate cuts of \(g\) are both the line \(z = 0\), the same as for a flat plane \(z = 0\). The diagonal cuts show that the surface rises along \(y = x\) and falls along \(y = -x\). Two coordinate cuts do not determine a surface.
provenance: written-for-site
steps:
  - |
    Cuts of \(f\): \(z = \sqrt{y}\) in \(Oyz\), \(z = \sqrt{x}\) in \(Oxz\), and \(z = 2\sqrt{t}\) over \(y = x\).
  - |
    Cuts of \(g\): the line \(z = 0\) twice, and the parabolas \(z = t^{2}\) and \(z = -t^{2}\) over \(y = \pm x\).
  - |
    Coordinate cuts do not determine the surface.
verification:
  checks:
    - expr: "(sqrt(x) + sqrt(y)).subs(x, 0)"
      expected: "sqrt(y)"
    - expr: "(sqrt(x) + sqrt(y)).subs(y, 0)"
      expected: "sqrt(x)"
    - expr: "(sqrt(x) + sqrt(y)).subs(y, x)"
      expected: "2*sqrt(x)"
    - expr: "(x*y).subs(x, 0)"
      expected: "0"
    - expr: "(x*y).subs(y, 0)"
      expected: "0"
    - expr: "(x*y).subs(y, x)"
      expected: "x**2"
    - expr: "(x*y).subs(y, -x)"
      expected: "-x**2"
:::

::: exercise
id: l4-cross-sections.ex-intersection-division-slip
tier: exam
topics: [cross-sections]
statement: |
  Let \(f(x, y) = x^{2} + y^{2}\) and \(g(x, y) = 2y + 3\).

  1. Give the equation in \(x\) and \(y\) of the intersection of the graphs \(z = f(x, y)\) and \(z = g(x, y)\), and give \(z\) on it. Does the point \((2, 1)\) lie under the intersection?
  2. A student imposes the condition \(f(x, y)/g(x, y) = f(x, y)\) instead. Find the points \((x, y)\) with \(f(x, y) \ne 0\) that satisfy it, and show that this set differs from the one in part 1.
solution: |
  **The intersection.** The graphs meet where the heights agree, so \(x^{2} + y^{2} = 2y + 3\). Completing the square in \(y\) gives
  \[
  x^{2} + (y - 1)^{2} = 4.
  \]
  This is a circle of radius \(2\) with centre \((0, 1)\). On it \(z = 2y + 3\), which runs from \(1\) at \(y = -1\) to \(9\) at \(y = 3\). At \((2, 1)\) we have \(x^{2} + (y - 1)^{2} = 4\), so the point lies on the circle, and \(z = 2\cdot 1 + 3 = 5 = 2^{2} + 1^{2}\).

  **The slip.** Where \(f \ne 0\), multiplying \(f/g = f\) by \(g\) and dividing by \(f\) gives
  \[
  \begin{aligned}
  1&=g,\\
  2y + 3&=1,\\
  y&=-1.
  \end{aligned}
  \]
  The condition needs \(g \ne 0\), and \(g = 1\) satisfies that. The set is the whole line \(y = -1\). Every point of this line has \(f(x, -1) = x^{2} + 1 > 0\), so the assumption \(f \ne 0\) holds along it.

  This line is not the circle of part 1. On the line \(y = -1\) the circle equation reads \(x^{2} + 4 = 4\), so only \(x = 0\) is on the circle. The line and the circle share the single point \((0, -1)\), where \(f = g = 1\). Every other point of the line, such as \((1, -1)\), has \(f = 2\) and \(g = 1\), so the heights differ and the graphs do not meet there. The condition \(f/g = f\) is not the condition \(f = g\).
provenance: written-for-site
steps:
  - |
    Circle \(x^{2} + (y - 1)^{2} = 4\), with \(z = 2y + 3\).
  - |
    The point \((2, 1)\) lies on the circle, with \(z = 5\).
  - |
    The slip gives the line \(y = -1\), which meets the circle only at \((0, -1)\).
verification:
  checks:
    - expr: "expand((x**2 + y**2 - (2*y + 3)) - (x**2 + (y - 1)**2 - 4))"
      expected: "0"
    - expr: "(2**2 + 1**2, 2*1 + 3)"
      expected: "(5, 5)"
    - expr: "2**2 + (1 - 1)**2"
      expected: "4"
    - expr: "(2*y + 3).subs(y, -1)"
      expected: "1"
    - expr: "(1**2 + (-1)**2, 2*(-1) + 3)"
      expected: "(2, 1)"
    - expr: "(2*(-1) + 3, 2*3 + 3)"
      expected: "(1, 9)"
:::
