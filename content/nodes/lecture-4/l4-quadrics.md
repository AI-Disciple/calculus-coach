---
id: l4-quadrics
lecture: 4
order: 7
title: Quadric surfaces
prerequisites: [l4-graphs-planes]
sources:
  - { source: lecture-4-board-1 }
  - { source: lecture-4-board-3 }
  - { source: lecture-4-notebook }
  - { source: lecture-notes-4, page: 1 }
  - { source: sheet-2, page: 1 }
  - { source: midterm-2021, page: 1 }
  - { source: midterm-2022, page: 1 }
  - { source: final-2021, page: 1 }
examWeight: medium
examWeightNote: Recognising the surfaces is needed for the level-set and volume blocks.
notation: |
  \(Oz\) is the vertical axis through the origin.
taught: lecture
status: reviewed
---

::: section
title: Quadrics and the paraboloid
:::

::: formal-statement
kind: definition
title: Quadric
source: { source: lecture-4-notebook }
text: |
  A **quadric** is a surface defined by a second-order polynomial.
:::

::: plain-explanation
text: |
  A second-order polynomial has degree two. The quadric is the set of points where that polynomial equals zero.
:::

::: formal-statement
kind: definition
title: Paraboloid
source: { source: lecture-4-notebook }
text: |
  The **paraboloid** is the graph
  \[
  z = x^{2} + y^{2}.
  \]
:::

::: plain-explanation
text: |
  The height equals \(x^{2} + y^{2}\). That sum equals \(0\) at the origin. At every other pair \((x, y)\), the sum is positive. The axis is \(Oz\).
:::

::: visual
kind: quadric
caption: |
  The level curve \(z = 1\) of the elliptic paraboloid is a circle.
params:
  surface: paraboloid
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 1
:::

::: key-points
text: |
  - A quadric is a surface defined by a second-order polynomial, so it is the set of points where a polynomial of degree two equals zero.
  - The paraboloid is the graph \(z = x^{2} + y^{2}\). Its height is \(0\) at the origin and positive at every other pair \((x, y)\), and its axis is \(Oz\).
:::

::: concept-question
id: l4-quadrics.q-5ceb4a95
question: |
  Which equation is the paraboloid?
options:
  - text: |
      The equation \(z = x^{2} + y^{2}\) is the paraboloid.
    correct: true
  - text: |
      The equation \(z = x^{2} - y^{2}\) is a hyperbolic paraboloid.
  - text: |
      The equation \(z = \pm\sqrt{x^{2} + y^{2}}\) is a cone.
  - text: |
      The equation \(x^{2} + y^{2} + z^{2} = 1\) is the whole sphere.
explanation: |
  The paraboloid is the graph \(z = x^{2} + y^{2}\). The graph \(z = x^{2} - y^{2}\) is a hyperbolic paraboloid. The equation \(z = \pm\sqrt{x^{2} + y^{2}}\) is a cone. The equation \(x^{2} + y^{2} + z^{2} = 1\) is the whole sphere.
:::

::: section
title: Sphere and cone
:::

::: formal-statement
kind: definition
title: Sphere
source: { source: lecture-4-notebook }
text: |
  The sphere is given by the two graphs
  \[
  z = \pm\sqrt{1 - x^{2} - y^{2}}.
  \]
  - The positive sign is the upper hemisphere.
  - The negative sign is the lower hemisphere.

  The implicit equation
  \[
  x^{2} + y^{2} + z^{2} = 1
  \]
  is the whole sphere.
:::

::: plain-explanation
text: |
  A graph \(z = f(x, y)\) has one height at each pair \((x, y)\).

  - The positive root assigns the upper height.
  - The negative root assigns the lower height.

  The equation \(x^{2} + y^{2} + z^{2} = 1\) holds for both heights. That equation is the whole sphere.
:::

::: visual
kind: quadric
caption: |
  The level curve \(z = 0\) of the sphere is a circle of radius 1.
params:
  surface: sphere
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 0
:::

::: formal-statement
kind: definition
title: Cone
source: { source: lecture-4-notebook }
text: |
  The cone is the graph
  \[
  z = \pm\sqrt{x^{2} + y^{2}}.
  \]
:::

::: plain-explanation
text: |
  - The positive sign is the upper **nappe**.
  - The negative sign is the lower nappe.

  The two nappes meet at the origin. The axis is \(Oz\). Both signs square to the equation
  \[
  z^{2} = x^{2} + y^{2}.
  \]
:::

::: visual
kind: quadric
caption: |
  The level curve \(z = 1\) of the cone is a circle.
params:
  surface: cone
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 1
:::

::: key-points
text: |
  - The graph \(z = \sqrt{1 - x^{2} - y^{2}}\) is the upper hemisphere and the graph \(z = -\sqrt{1 - x^{2} - y^{2}}\) is the lower hemisphere. The equation \(x^{2} + y^{2} + z^{2} = 1\) is the whole sphere.
  - The cone \(z = \pm\sqrt{x^{2} + y^{2}}\) has axis \(Oz\). The positive sign is the upper nappe, the negative sign is the lower nappe, and the two nappes meet at the origin. Both signs square to \(z^{2} = x^{2} + y^{2}\).
:::

::: concept-question
id: l4-quadrics.q-77ab285a
question: |
  Which equation is the whole sphere?
options:
  - text: |
      The equation \(x^{2} + y^{2} + z^{2} = 1\) is the whole sphere.
    correct: true
  - text: |
      The graph \(z = \sqrt{1 - x^{2} - y^{2}}\) is the upper hemisphere.
  - text: |
      The graph \(z = -\sqrt{1 - x^{2} - y^{2}}\) is the lower hemisphere.
  - text: |
      The equation \(z = \pm\sqrt{x^{2} + y^{2}}\) is a cone.
explanation: |
  The equation \(x^{2} + y^{2} + z^{2} = 1\) is the whole sphere. The graph \(z = \sqrt{1 - x^{2} - y^{2}}\) is the upper hemisphere. The graph \(z = -\sqrt{1 - x^{2} - y^{2}}\) is the lower hemisphere. The equation \(z = \pm\sqrt{x^{2} + y^{2}}\) is a cone.
:::

::: section
title: Hyperboloid of two sheets
:::

::: formal-statement
kind: definition
title: Hyperboloid of two sheets
source: { source: lecture-4-board-3 }
text: |
  The hyperboloid of two sheets has equation
  \[
  z^{2} = x^{2} + y^{2} + 1.
  \]
  Solving for \(z\) gives
  \[
  z = \pm\sqrt{x^{2} + y^{2} + 1}.
  \]
  An equivalent form is
  \[
  z^{2} - x^{2} - y^{2} = 1.
  \]
  When \(x = 0\) and \(y = 0\), the **vertices** are \(z = 1\) and \(z = -1\).
:::

::: plain-explanation
text: |
  The radicand \(x^{2} + y^{2} + 1\) is at least \(1\). The square root is defined for every real pair \((x, y)\).

  - The sign \(+\) gives the upper sheet.
  - The sign \(-\) gives the lower sheet.

  At \(x = 0\) and \(y = 0\), the right side \(x^{2} + y^{2} + 1\) equals \(1\). The equation becomes \(z^{2} = 1\). The heights \(z = 1\) and \(z = -1\) are the vertices.

  Subtracting \(x^{2} + y^{2}\) from both sides of \(z^{2} = x^{2} + y^{2} + 1\) gives
  \[
  z^{2} - x^{2} - y^{2} = 1.
  \]
:::

::: visual
kind: quadric
caption: |
  The level curve \(z = 0\) misses the hyperboloid of two sheets.
params:
  surface: hyperboloid-two
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 0
:::

::: guided-example
title: Name the two-sheet surface
problem: |
  Name the surface given by \(z^{2} = 1 + x^{2} + y^{2}\). Rewrite the equation as
  \[
  z^{2} - x^{2} - y^{2} = 1.
  \]
steps:
  - |
    The given equation is \(z^{2} = 1 + x^{2} + y^{2}\).
  - |
    Subtracting \(x^{2} + y^{2}\) from both sides removes that sum from the right side.
  - |
    The left side is \(z^{2} - x^{2} - y^{2}\). The right side is \(1\).
  - |
    The equation \(z^{2} - x^{2} - y^{2} = 1\) is a hyperboloid of two sheets.
:::

::: key-points
text: |
  - The hyperboloid of two sheets is \(z^{2} = x^{2} + y^{2} + 1\), which is equivalent to \(z^{2} - x^{2} - y^{2} = 1\). Solving for \(z\) gives \(z = \pm\sqrt{x^{2} + y^{2} + 1}\), with the sign \(+\) for the upper sheet and the sign \(-\) for the lower sheet.
  - The radicand \(x^{2} + y^{2} + 1\) is at least \(1\), so the square root is defined for every real pair \((x, y)\). At \(x = 0\) and \(y = 0\), the vertices are \(z = 1\) and \(z = -1\).
:::

::: concept-question
id: l4-quadrics.q-0c89a168
question: |
  Which equation is a hyperboloid of two sheets?
options:
  - text: |
      The equations \(z^{2} = 1 + x^{2} + y^{2}\) and \(z^{2} - x^{2} - y^{2} = 1\) describe a hyperboloid of two sheets.
    correct: true
  - text: |
      The equations \(z^{2} = x^{2} + y^{2} - 1\) and \(x^{2} + y^{2} - z^{2} = 1\) describe a hyperboloid of one sheet.
  - text: |
      The equation \(z = x^{2} - y^{2}\) is a hyperbolic paraboloid.
  - text: |
      The equation \(z = \pm\sqrt{x^{2} + y^{2}}\) is a cone.
explanation: |
  The equation \(z^{2} = 1 + x^{2} + y^{2}\) rewrites as \(z^{2} - x^{2} - y^{2} = 1\). That surface is a hyperboloid of two sheets. The equation \(x^{2} + y^{2} - z^{2} = 1\) is a hyperboloid of one sheet. The graph \(z = x^{2} - y^{2}\) is a hyperbolic paraboloid. The equation \(z = \pm\sqrt{x^{2} + y^{2}}\) is a cone.
:::

::: section
title: Hyperboloid of one sheet
:::

::: formal-statement
kind: definition
title: Hyperboloid of one sheet
source: { source: lecture-4-board-3 }
text: |
  The hyperboloid of one sheet has equation
  \[
  z^{2} = x^{2} + y^{2} - 1.
  \]
  An equivalent form is
  \[
  x^{2} + y^{2} - z^{2} = 1.
  \]
  Real points satisfy \(x^{2} + y^{2} \ge 1\). The **waist** \(z = 0\) is the circle \(x^{2} + y^{2} = 1\).
:::

::: plain-explanation
text: |
  The square \(z^{2}\) is at least \(0\). On the surface it equals \(x^{2} + y^{2} - 1\). Real points therefore satisfy \(x^{2} + y^{2} \ge 1\).

  At height \(z = 0\) the equation becomes \(x^{2} + y^{2} = 1\). That circle is the waist.

  Adding \(1\) to both sides of \(z^{2} = x^{2} + y^{2} - 1\) produces \(z^{2} + 1 = x^{2} + y^{2}\). Subtracting \(z^{2}\) from both sides produces \(x^{2} + y^{2} - z^{2} = 1\).
:::

::: visual
kind: quadric
caption: |
  The level curve \(z = 0\) is the waist circle of the hyperboloid of one sheet.
params:
  surface: hyperboloid-one
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 0
:::

::: trap
text: |
  The equation of the hyperboloid of one sheet is \(z^{2} = x^{2} + y^{2} - 1\). Real points satisfy \(x^{2} + y^{2} \ge 1\), because \(z^{2}\) is at least \(0\). The chain \(0 \le z^{2} = x^{2} + y^{2} - 1\) places \(\le\) and \(=\) in one formula.

  At \(x = 0\) and \(y = 0\), the right side \(x^{2} + y^{2} - 1\) equals \(-1\). The equation then requires
  \[
  z^{2} = -1.
  \]
  No real number has square \(-1\). The origin is not on the surface.
:::

::: worked-example
title: Waist and the origin
problem: |
  The surface \(z^{2} = x^{2} + y^{2} - 1\) is a hyperboloid of one sheet. Find the waist at height \(z = 0\). Decide whether the origin lies on the surface.
solution: |
  The waist is the cut at height \(z = 0\). Substitute \(z = 0\) into \(z^{2} = x^{2} + y^{2} - 1\). The left side equals \(0\), so the equation becomes
  \[
  \begin{aligned}
  0&=x^{2}+y^{2}-1,\\
  x^{2}+y^{2}&=1.
  \end{aligned}
  \]
  The waist is the circle \(x^{2} + y^{2} = 1\) in the plane \(z = 0\).

  The origin is the point \((0, 0, 0)\).
  \[
  \begin{aligned}
  \text{left side}&=z^{2}=0,\\
  \text{right side}&=x^{2}+y^{2}-1=-1.
  \end{aligned}
  \]
  The two sides differ. The point \((0, 0, 0)\) is not on the surface.
:::

::: going-deeper
title: One sheet, cone and two sheets from one family
text: |
  Fix the left side \(x^{2} + y^{2} - z^{2}\) and let it equal a constant \(k\).

  - For \(k > 0\) the surface is a hyperboloid of one sheet, since every horizontal plane meets it in a circle of radius \(\sqrt{k + z^{2}}\).
  - For \(k = 0\) it is the cone \(z^{2} = x^{2} + y^{2}\).
  - For \(k < 0\) it is a hyperboloid of two sheets, and the plane \(z = c\) meets it only when \(c^{2} \ge -k\).

  Passing from \(k > 0\) to \(k < 0\) through the cone is the way to see why the sign of the constant, and not the shape of the left side, separates the two hyperboloids. With \(k = 1\) the circle at height \(z = 0\) has radius 1. With \(k = -1\) the plane \(z = 0\) misses the surface, and the two sheets start at \(z = \pm 1\).
:::

::: key-points
text: |
  - The hyperboloid of one sheet is \(z^{2} = x^{2} + y^{2} - 1\), which is equivalent to \(x^{2} + y^{2} - z^{2} = 1\).
  - Real points satisfy \(x^{2} + y^{2} \ge 1\), because \(z^{2}\) is at least \(0\). The waist \(z = 0\) is the circle \(x^{2} + y^{2} = 1\).
  - The usual slip puts the origin on the surface. At \(x = 0\) and \(y = 0\) the equation requires \(z^{2} = -1\). No real number has square \(-1\), so the origin \((0, 0, 0)\) is not on the surface.
:::

::: concept-question
id: l4-quadrics.q-fe862df3
question: |
  The hyperboloid of one sheet is \(z^{2} = x^{2} + y^{2} - 1\). Which condition describes its real points?
options:
  - text: |
      Real points satisfy \(x^{2} + y^{2} \ge 1\).
    correct: true
  - text: |
      Real points satisfy \(x^{2} + y^{2} \le 1\).
  - text: |
      The origin \((0, 0, 0)\) lies on the surface.
  - text: |
      Every pair \((x, y)\) gives a real height \(z\).
explanation: |
  The square \(z^{2}\) is at least \(0\). On the surface it equals \(x^{2} + y^{2} - 1\). Real points therefore satisfy \(x^{2} + y^{2} \ge 1\). At height \(z = 0\) the equation becomes \(x^{2} + y^{2} = 1\). That circle is the waist. At the origin the right side equals \(-1\). The point \((0, 0, 0)\) is not on the surface. A pair with \(x^{2} + y^{2} < 1\) makes \(x^{2} + y^{2} - 1\) negative. That pair gives no real \(z\). A pair with \(x^{2} + y^{2} > 1\) gives a real height.
:::

::: exercise
id: l4-quadrics.basic-waist
tier: basic
topics:
  - quadrics
statement: |
  The hyperboloid of one sheet is \(z^{2} = x^{2} + y^{2} - 1\). Give the equation of its waist at \(z = 0\). The hyperboloid of two sheets is \(z^{2} = x^{2} + y^{2} + 1\). Give \(z\) when \(x = 0\) and \(y = 0\).
solution: |
  On the one-sheet surface, substitute \(z = 0\) into \(z^{2} = x^{2} + y^{2} - 1\). The left side equals \(0\). The equation becomes \(x^{2} + y^{2} = 1\). The waist is the circle \(x^{2} + y^{2} = 1\) in the plane \(z = 0\).
  On the two-sheet surface, substitute \(x = 0\) and \(y = 0\) into \(z^{2} = x^{2} + y^{2} + 1\). The right side equals \(1\). The equation becomes \(z^{2} = 1\). The heights are \(z = 1\) and \(z = -1\).
provenance: written-for-site
steps:
  - The waist is the circle \(x^{2} + y^{2} = 1\) in the plane \(z = 0\).
  - When \(x = 0\) and \(y = 0\) on \(z^{2} = x^{2} + y^{2} + 1\), the heights are \(z = 1\) and \(z = -1\).
verification:
  checks:
    - expr: "expand((x**2 + y**2 - z**2 - 1).subs(z, 0) - (x**2 + y**2 - 1))"
      expected: "0"
    - expr: "expand((x**2 + y**2 + 1).subs({x: 0, y: 0}))"
      expected: "1"
    - expr: "((1)**2 - 1, ((-1)**2) - 1)"
      expected: "(0, 0)"
:::

::: section
title: Hyperbolic paraboloid
:::

::: formal-statement
kind: definition
title: Hyperbolic paraboloid
source: { source: lecture-4-notebook }
text: |
  The **hyperbolic paraboloid** is the graph
  \[
  z = x^{2} - y^{2}.
  \]
:::

::: plain-explanation
text: |
  The height equals \(x^{2} - y^{2}\).

  - Along \(y = 0\) the height is \(x^{2}\).
  - Along \(x = 0\) the height is \(-y^{2}\).
  - At the origin the height is \(0\).
:::

::: visual
kind: quadric
caption: |
  The level curve \(z = 0\) of the hyperbolic paraboloid is a pair of lines.
params:
  surface: hyperbolic-paraboloid
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 0
:::

::: key-points
text: |
  - The hyperbolic paraboloid is the graph \(z = x^{2} - y^{2}\).
  - Along \(y = 0\) the height is \(x^{2}\), along \(x = 0\) the height is \(-y^{2}\), and at the origin the height is \(0\).
:::

::: concept-question
id: l4-quadrics.q-b9188f10
question: |
  Which equation is the hyperbolic paraboloid?
options:
  - text: |
      The equation \(z = x^{2} - y^{2}\) is the hyperbolic paraboloid.
    correct: true
  - text: |
      The equation \(z = x^{2} + y^{2}\) is a paraboloid.
  - text: |
      The equation \(z^{2} = x^{2} + y^{2} - 1\) is a hyperboloid of one sheet.
  - text: |
      The equation \(z^{2} = x^{2} + y^{2} + 1\) is a hyperboloid of two sheets.
explanation: |
  The hyperbolic paraboloid is the graph \(z = x^{2} - y^{2}\). The graph \(z = x^{2} + y^{2}\) is a paraboloid. The equation \(z^{2} = x^{2} + y^{2} - 1\) is a hyperboloid of one sheet. The equation \(z^{2} = x^{2} + y^{2} + 1\) is a hyperboloid of two sheets.
:::

::: sheet-item
id: l4-quadrics.sheet-01
category: recognition
text: |
  The graph \(z = x^{2} + y^{2}\) is a paraboloid.
:::

::: sheet-item
id: l4-quadrics.sheet-02
category: recognition
text: |
  The equation \(x^{2} + y^{2} + z^{2} = 1\) is the whole sphere. The graph \(z = \sqrt{1 - x^{2} - y^{2}}\) is the upper hemisphere. The graph \(z = -\sqrt{1 - x^{2} - y^{2}}\) is the lower hemisphere.
:::

::: sheet-item
id: l4-quadrics.sheet-03
category: recognition
text: |
  The equation \(z = \pm\sqrt{x^{2} + y^{2}}\) is a cone with axis \(Oz\). The same surface is \(z^{2} = x^{2} + y^{2}\).
:::

::: sheet-item
id: l4-quadrics.sheet-04
category: recognition
text: |
  The equation \(z^{2} = 1 + x^{2} + y^{2}\) is a hyperboloid of two sheets. An equivalent form is \(z^{2} - x^{2} - y^{2} = 1\).
:::

::: sheet-item
id: l4-quadrics.sheet-05
category: recognition
text: |
  The equation \(z^{2} = x^{2} + y^{2} - 1\) is a hyperboloid of one sheet. An equivalent form is \(x^{2} + y^{2} - z^{2} = 1\).
:::

::: sheet-item
id: l4-quadrics.sheet-06
category: recognition
text: |
  The graph \(z = x^{2} - y^{2}\) is a hyperbolic paraboloid.
:::

::: sheet-item
id: l4-quadrics.sheet-07
category: recognition
text: |
  On \(z^{2} = x^{2} + y^{2} - 1\), real points satisfy \(x^{2} + y^{2} \ge 1\), because \(z^{2}\) is at least \(0\).
:::

::: exercise
id: l4-quadrics.midterm-2021-ex2.3
number: "2.3"
statement: |
  Sketch the 3D graph of \(\mathcal{C}\) given by \(z^2 = x^2 + y^2\).
tier: exam
topics:
  - quadrics
  - cone
solution: |
  The surface is a right circular cone with axis \(Oz\) and vertex at the origin. Both nappes are present, opening at 45 degrees from the axis. Horizontal cuts are circles, and the vertical cut \(x = 0\) is the X from part 1.
provenance: written-for-site
steps:
  - Name the double cone along Oz with vertex at the origin.
  - Sketch both nappes.
verification:
  checkable: false
  reason: The answer is a 3D sketch of the cone.
pastExam:
  year: 2021
  paper: Midterm
  question: "2.3"
  points: 1
:::

::: exercise
id: l4-quadrics.midterm-2022-ex6iii
statement: |
  Let \(f(x,y)=\sqrt{x^2+y^2}\). What is the name of the surface corresponding to this function?
tier: exam
topics:
  - quadrics
pastExam:
  year: 2022
  paper: Midterm
  question: 6iii
  points: 0.5
solution: |
  The graph \(z=\sqrt{x^2+y^2}\) is the upper nappe of a right circular cone with apex at the origin. The official key names it the upper cone.
provenance: official-key
steps:
  - Name of the surface.
verification:
  checkable: false
  reason: The asked output is the name of a surface.
:::

::: exercise
id: l4-quadrics.sheet-2-ex2.1
number: "2.1"
tier: standard
topics: [quadrics, level-sets]
statement: |
  Sketch the surface and its level sets.
  \[
  z = x^2 + y^2.
  \]
solution: |
  The surface is an elliptic paraboloid with vertex at the origin, opening upwards along the \(z\)-axis. A sketch is that bowl. The level curve \(z = k\) is:

  - the circle \(x^2 + y^2 = k\), of radius \(\sqrt{k}\), when \(k \ge 0\);
  - empty when \(k < 0\).
provenance: written-for-site
verification:
  checks:
    - expr: "expand((sqrt(k))**2 - k)"
      expected: "0"
:::

::: exercise
id: l4-quadrics.sheet-2-ex2.2
number: "2.2"
tier: standard
topics: [quadrics, level-sets]
statement: |
  Sketch the surface and its level sets.
  \[
  x^2 + y^2 + z^2 = 1.
  \]
solution: |
  The surface is a sphere of radius 1 centred at the origin. A sketch is that sphere. The level curve \(z = k\) is:

  - for \(k\) in \([-1, 1]\), the circle \(x^2 + y^2 = 1 - k^2\), of radius \(\sqrt{1 - k^2}\); at \(k = \pm 1\) the circle is a single point;
  - empty when \(|k| > 1\).
provenance: written-for-site
verification:
  checks:
    - expr: "expand((sqrt(1 - k**2))**2 - (1 - k**2))"
      expected: "0"
:::

::: exercise
id: l4-quadrics.sheet-2-ex2.3
number: "2.3"
tier: standard
topics: [quadrics, level-sets]
statement: |
  Sketch the surface and its level sets.
  \[
  z^2 = 1 + x^2 + y^2.
  \]
solution: |
  The surface is a hyperboloid of two sheets with axis \(Oz\). A sketch has one sheet above \(z = 1\) and one sheet below \(z = -1\). The level curve \(z = k\) exists when \(|k| \ge 1\), and it is the circle \(x^2 + y^2 = k^2 - 1\), of radius \(\sqrt{k^2 - 1}\). The level curve is empty when \(|k| < 1\).
provenance: written-for-site
verification:
  checks:
    - expr: "expand((k**2 - 1 - x**2 - y**2) - (k**2 - (1 + x**2 + y**2)))"
      expected: "0"
:::

::: exercise
id: l4-quadrics.sheet-2-ex2.4
number: "2.4"
tier: standard
topics: [quadrics, level-sets]
statement: |
  Sketch the surface and its level sets.
  \[
  z^2 = -1 + x^2 + y^2.
  \]
solution: |
  The surface is a hyperboloid of one sheet with axis \(Oz\). Real points satisfy \(x^2 + y^2 \ge 1\). A sketch is a tube pinched at a waist. The waist \(z = 0\) is the circle \(x^2 + y^2 = 1\). For a height \(k\), the level curve \(z = k\) is the circle \(x^2 + y^2 = 1 + k^2\).
provenance: written-for-site
verification:
  checks:
    - expr: "expand((x**2 + y**2 - z**2 - 1).subs(z, 0) - (x**2 + y**2 - 1))"
      expected: "0"
:::

::: exercise
id: l4-quadrics.sheet-2-ex2.5
number: "2.5"
tier: standard
topics: [quadrics, level-sets]
statement: |
  Sketch the surface and its level sets.
  \[
  z = x^2 - y^2.
  \]
solution: |
  The surface is a hyperbolic paraboloid with vertex at the origin. A sketch rises along the \(x\)-axis and falls along the \(y\)-axis. The level curve \(z = 0\) is the pair of lines \(y = x\) and \(y = -x\), since
  \[
  x^2 - y^2 = (x - y)(x + y).
  \]
  For \(k \ne 0\) the level curve \(z = k\) is the hyperbola \(x^2 - y^2 = k\).
provenance: written-for-site
verification:
  checks:
    - expr: "expand((x - y)*(x + y) - (x**2 - y**2))"
      expected: "0"
:::

::: exercise
id: l4-quadrics.final-2021-q7-1
tier: exam
topics: [quadric-surfaces, cones]
pastExam:
  year: 2021
  paper: Final
  question: "7.1"
  points: 1
statement: |
  Let \(S\) be the part of the surface \((z - 1)^2 = x^2 + y^2\) on which \(z \in [0, 1]\). Let \(a > 0\) and
  \[
  \begin{aligned}
  x(t)&=(1 - at)\cos t,\\
  y(t)&=(1 - at)\sin t.
  \end{aligned}
  \]
  for \(t \in [0, 1/a]\). Give \(z(t)\) so that the curve of points \((x(t), y(t), z(t))\) lies on \(S\). Sketch \(S\) and the curve.
solution: |
  On this part of the surface, \(z \le 1\), so \(z - 1 \le 0\). The formula with that sign is
  \[ z = 1 - \sqrt{x^2 + y^2}. \]

  Along the curve,
  \[ x(t)^2 + y(t)^2 = (1 - at)^2. \]
  For \(t \in [0, 1/a]\) and \(a > 0\), the factor \(1 - at\) is nonnegative, so \(\sqrt{x^2 + y^2} = 1 - at\). Therefore
  \[ z(t) = 1 - (1 - at) = at. \]

  The surface is a cone with vertex \((0, 0, 1)\) and base the unit circle in the plane \(z = 0\). The curve starts at \((1, 0, 0)\) when \(t = 0\) and ends at \((0, 0, 1)\) when \(t = 1/a\), climbing that cone.
provenance: official-key
steps:
  - On \(z \in [0, 1]\) the surface is \(z = 1 - \sqrt{x^2 + y^2}\).
  - Along the curve, \(\sqrt{x^2 + y^2} = 1 - at\).
  - Hence \(z(t) = at\). The sketch is the cone from the base point \((1, 0, 0)\) up to the vertex \((0, 0, 1)\).
verification:
  checks:
    - expr: 'simplify(((1 - a*t)*cos(t))**2 + ((1 - a*t)*sin(t))**2 - (1 - a*t)**2)'
      expected: 0
    - expr: 'simplify((a*t - 1)**2 - (1 - a*t)**2)'
      expected: 0
    - expr: '1 - (1 - a*t) - a*t'
      expected: 0
    - expr: '(0 - 1)**2 - ((1 - 0)*cos(0))**2 - ((1 - 0)*sin(0))**2'
      expected: 0
    - expr: '(1 - 1)**2 - ((1 - a*(1/a))*cos(1/a))**2 - ((1 - a*(1/a))*sin(1/a))**2'
      expected: 0
:::

::: exercise
id: l4-quadrics.ex-hyperboloid-family
tier: exam
topics: [quadrics, cross-sections]
statement: |
  For a number \(k\), let \(S_k\) be the surface
  \[
  x^{2} + y^{2} - z^{2} = k.
  \]
  Treat the cases \(k = 1\), \(k = 0\) and \(k = -1\).

  1. Name the surface \(S_k\) in each case.
  2. For which heights \(c\) does the plane \(z = c\) meet \(S_k\), and what is the cut?
  3. Give the cut of \(S_k\) by the plane \(y = 0\).
solution: |
  **Horizontal cuts.** Substituting \(z = c\) gives
  \[
  x^{2} + y^{2} = k + c^{2}.
  \]

  - For \(k = 1\), the right side is \(1 + c^{2} \ge 1\). Every \(c\) works, and the cut is a circle of radius \(\sqrt{1 + c^{2}}\). The surface is a hyperboloid of one sheet, with the waist \(x^{2} + y^{2} = 1\) at \(c = 0\).
  - For \(k = 0\), the right side is \(c^{2}\). Every \(c\) works. The cut is a circle of radius \(\lvert c\rvert\), and a single point for \(c = 0\). The surface is the cone \(z^{2} = x^{2} + y^{2}\).
  - For \(k = -1\), the right side is \(c^{2} - 1\), which is nonnegative only for \(\lvert c\rvert \ge 1\). The cut is a circle of radius \(\sqrt{c^{2} - 1}\), and the single point \((0, 0, \pm 1)\) for \(c = \pm 1\). For \(\lvert c\rvert < 1\) the plane misses the surface. The surface is a hyperboloid of two sheets, one above \(z = 1\) and one below \(z = -1\).

  **The cut by \(y = 0\).** Substituting \(y = 0\) gives, in the plane \(y = 0\),
  \[
  x^{2} - z^{2} = k.
  \]

  - For \(k = 1\), the equation \(x^{2} - z^{2} = 1\) is a hyperbola that opens along the \(x\)-direction, with asymptotes \(z = \pm x\).
  - For \(k = 0\), the equation \(x^{2} - z^{2} = (x - z)(x + z) = 0\) is the pair of lines \(z = x\) and \(z = -x\).
  - For \(k = -1\), the equation \(z^{2} - x^{2} = 1\) is a hyperbola that opens along the \(z\)-direction, with the same asymptotes \(z = \pm x\).
provenance: written-for-site
steps:
  - |
    Horizontal cuts \(x^{2} + y^{2} = k + c^{2}\), with the allowed heights for each \(k\).
  - |
    Names: hyperboloid of one sheet, cone, hyperboloid of two sheets.
  - |
    Cuts by \(y = 0\): \(x^{2} - z^{2} = k\), a hyperbola, a pair of lines, a hyperbola.
verification:
  checks:
    - expr: "(x**2 + y**2 - z**2 - 1).subs(z, c) - (x**2 + y**2 - (1 + c**2))"
      expected: "0"
    - expr: "(x**2 + y**2 - z**2).subs(z, c) - (x**2 + y**2 - c**2)"
      expected: "0"
    - expr: "(x**2 + y**2 - z**2 + 1).subs(z, c) - (x**2 + y**2 - (c**2 - 1))"
      expected: "0"
    - expr: "(x**2 + y**2 - z**2 - 1).subs(y, 0) - (x**2 - z**2 - 1)"
      expected: "0"
    - expr: "(x**2 + y**2 - z**2).subs(y, 0) - (x - z)*(x + z)"
      expected: "0"
    - expr: "(x**2 + y**2 - z**2 + 1).subs(y, 0) + (z**2 - x**2 - 1)"
      expected: "0"
:::
