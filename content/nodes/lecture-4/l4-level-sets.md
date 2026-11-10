---
id: l4-level-sets
lecture: 4
order: 9
title: Level sets and contour maps
prerequisites: [l4-cross-sections]
sources:
  - { source: handout, section: "14.1", page: 349 }
  - { source: lecture-4-board-4 }
  - { source: lecture-notes-4, page: 2 }
  - { source: sheet-2, page: 1 }
  - { source: final-2024, page: 1 }
  - { source: final-2025, page: 1 }
  - { source: midterm-2021, page: 1 }
  - { source: midterm-2022, page: 1 }
examWeight: medium
examWeightNote: Level sets carry 5% of the two recent finals.
notation: |
  The handout calls \(f(x, y) = k\) a level curve, and a drawing of several level curves a topographic map. The lecture title is level sets (contours).
taught: lecture
status: reviewed
---

::: section
title: Level curves and contour maps
:::

::: formal-statement
kind: definition
title: Level curve
source: { source: handout, section: "14.1", page: 351 }
text: |
  For \(f:\mathbb{R}^{2}\to\mathbb{R}\), the **level curve** of height \(k\) is the set of \((x, y)\) with
  \[
  f(x, y) = k.
  \]
  A drawing of several level curves is a **contour map**.
:::

::: plain-explanation
text: |
  Fix a height \(k\). Collect every point of the plane where \(f\) equals that height. Those points form the level curve, and the curve lies in the \(xy\)-plane. Above each point of the curve, the graph has height \(k\). Draw the curves for several heights on one picture. That picture is a contour map. When the heights are evenly spaced, the curves pack together where the surface is steeper.
:::

::: visual
kind: quadric
caption: |
  A horizontal cut of this paraboloid is a level curve.
params:
  surface: paraboloid
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 1
:::

::: formal-statement
title: Lecture title
source: { source: lecture-4-board-4 }
text: |
  The lecture title is level sets (contours).
:::

::: plain-explanation
text: |
  A contour is one curve of constant height. The lecture studies those curves for a function of two variables, and the sets of constant value for a function of three variables.
:::

::: key-points
text: |
  - The level curve of height \(k\) is the set of \((x, y)\) with \(f(x, y) = k\). It lies in the \(xy\)-plane, and above each of its points the graph has height \(k\).
  - A contour is one curve of constant height, and a contour map is a drawing of several level curves of one function. When the heights are evenly spaced, the curves pack together where the surface is steeper.
:::

::: concept-question
id: l4-level-sets.q-d9d81a9b
question: |
  A contour map uses evenly spaced heights. The labels 200, 220 and 240 appear, and one curve sits between the curves labeled 200 and 220. What is the height difference between consecutive curves?
options:
  - text: |
      The difference is 20, the gap between the labels 200 and 220.
  - text: |
      The difference is 10.
    correct: true
  - text: |
      The difference is 40, the gap between 200 and 240.
  - text: |
      The difference is 240.
explanation: |
  The labels 200 and 220 differ by 20. One curve sits between them, so that gap holds two steps of the map. Even spacing uses the same step from 220 to 240. The consecutive difference is 10.
:::

::: concept-question
id: l4-level-sets.q-8fd273f3
question: |
  On a contour map the heights are evenly spaced. In one region the curves lie much closer together than in a neighbouring region. What does the tight spacing say?
options:
  - text: |
      The surface is steeper in the tight region.
    correct: true
  - text: |
      The surface is flatter in the tight region.
  - text: |
      The heights there are larger.
  - text: |
      The level curves there are empty.
explanation: |
  Evenly spaced heights change by the same amount from one curve to the next. Where those curves pack together, the height changes over a shorter horizontal distance. The surface is steeper there.
:::

::: exercise
id: l4-level-sets.sheet-2-ex1a
number: "1a"
tier: basic
topics: [level-sets]
statement: |
  Shown is the topographic map of a mountain range. The distance between two consecutive points on both axes is 100 m. The printed heights on the closed curves are 200, 220 and 240. What is the height difference between two consecutive levels?
solution: |
  One unlabeled closed contour sits strictly between the curve labeled 200 and the curve labeled 220. The labels differ by 20 m. That gap covers two contour steps. The height difference between consecutive levels is 10 m.
provenance: written-for-site
verification:
  checks:
    - expr: "(220-200)/2"
      expected: "10"
:::

::: section
title: Level curves of \(x^2 + y^2\)
:::

::: formal-statement
title: Level curves of x^2 + y^2
source: { source: handout, section: "14.1", page: 351 }
text: |
  For \(f(x, y) = x^{2} + y^{2}\) and \(k \ge 0\), the level curve of height \(k\) is the circle
  \[
  x^{2} + y^{2} = k.
  \]
:::

::: plain-explanation
text: |
  The value \(x^{2} + y^{2}\) is the square of the distance from \((x, y)\) to the origin. The equation \(x^{2} + y^{2} = k\) fixes that distance at \(\sqrt{k}\) when \(k \ge 0\). The radius of the circle is \(\sqrt{k}\). The circle is centred at the origin.

  - For \(k = 0\) the radius is 0, and the level curve is the origin.
  - For \(k < 0\) the sum of two squares cannot equal \(k\). The level curve is empty.

  A circle with centre \((a, b)\) and radius \(r\) has the equation \((x - a)^{2} + (y - b)^{2} = r^{2}\). Here \(a = b = 0\) and \(r = \sqrt{k}\).

  Curves for different heights \(k \ge 0\) are **concentric**.
:::

::: worked-example
title: Level curves of x^2 + y^2
problem: |
  Let \(f(x, y) = x^{2} + y^{2}\). Describe the level curves of heights \(k = 1\) and \(k = 0\).
solution: |
  The level curve of height \(k\) is the set of \((x, y)\) with \(x^{2} + y^{2} = k\).

  - For height 1 the equation is \(x^{2} + y^{2} = 1\). The radius is \(\sqrt{1}\). This radius equals 1. The level curve is the circle of radius 1 centred at the origin.
  - For height 0 the equation is \(x^{2} + y^{2} = 0\). Both squares are nonnegative. Their sum is 0 only if each square is 0. Both \(x\) and \(y\) equal 0. The level curve is the single point \((0, 0)\).
:::

::: key-points
text: |
  - For \(f(x, y) = x^{2} + y^{2}\) and \(k \ge 0\), the level curve of height \(k\) is the circle \(x^{2} + y^{2} = k\), centred at the origin, of radius \(\sqrt{k}\). Curves for different heights \(k \ge 0\) are concentric.
  - For \(k = 0\) the level curve is the origin. For \(k < 0\) the level curve is empty.
:::

::: concept-question
id: l4-level-sets.q-89f90867
question: |
  Let \(f(x, y) = x^{2} + y^{2}\). Which set is the level curve of height \(k = -1\)?
options:
  - text: |
      The circle \(x^{2} + y^{2} = 1\).
  - text: |
      The origin.
  - text: |
      The empty set.
    correct: true
  - text: |
      The circle of radius \(-1\).
explanation: |
  The level equation is \(x^{2} + y^{2} = -1\). The left side is at least 0. It cannot equal \(-1\). No point lies on the level curve.
:::

::: exercise
id: l4-level-sets.basic-circle
tier: basic
topics:
  - level-sets
statement: |
  Let \(f(x, y) = x^{2} + y^{2} + 1\). Give the equation of the level curve of height \(k = 10\), and give its radius.
solution: |
  The level curve of height 10 is the set of \((x, y)\) with \(x^{2} + y^{2} + 1 = 10\), which is \(x^{2} + y^{2} = 9\). This is a circle centred at the origin. The radius is \(\sqrt{9}\). That value equals 3.
provenance: written-for-site
steps:
  - Write the level equation \(x^{2} + y^{2} = 9\).
  - The radius is \(\sqrt{9} = 3\).
verification:
  checks:
    - expr: 10 - 1
      expected: "9"
    - expr: sqrt(9)
      expected: "3"
:::

::: section
title: Level sets and implicit surfaces
:::

::: formal-statement
kind: definition
title: Level set
source: { source: handout, section: "14.1", page: 352 }
text: |
  For a function of three variables, \(f(x, y, z) = k\) is a **level set**. When that set is a surface, it is a **level surface**. Let
  \[
  T(x, y, z) = e^{-(x^{2}+y^{2}+z^{2})}.
  \]
  For \(0 < k \le 1\), the level set \(T = k\) is the sphere
  \[
  x^{2} + y^{2} + z^{2} = -\ln k.
  \]
:::

::: plain-explanation
text: |
  A function of three variables assigns a number to each point of space. The level set of height \(k\) collects the points where that number equals \(k\). For \(T\), the equation \(T = k\) is
  \[
  e^{-(x^{2}+y^{2}+z^{2})} = k.
  \]

  ### Which heights occur

  An exponential value is positive. A level \(T = k\) requires \(k > 0\). The exponent \(-(x^{2}+y^{2}+z^{2})\) is at most 0. The exponential of a nonpositive number is at most \(e^{0}\). The number \(e^{0}\) equals 1. Therefore
  \[
  T \le 1.
  \]
  Equality holds at the origin, where the exponent is 0.

  ### The sphere for each height

  For \(0 < k \le 1\), the natural logarithm of both sides is
  \[
  -(x^{2}+y^{2}+z^{2}) = \ln k.
  \]
  Multiplying by \(-1\) gives
  \[
  x^{2} + y^{2} + z^{2} = -\ln k.
  \]
  The radius of this sphere is \(\sqrt{-\ln k}\). The sphere is centred at the origin. When \(k = 1\), \(\ln 1 = 0\). The radius is 0. The level set is the origin.
:::

::: formal-statement
kind: method
title: z-level sets of an implicit surface
source: { source: final-2024, page: 1 }
text: |
  To find the \(z\)-level sets of an implicit surface, set \(z = c\) and rearrange. Do not divide by an expression that can equal zero.
:::

::: plain-explanation
text: |
  The number \(c\) is one fixed height. Replace \(z\) by \(c\) in the surface equation. The new equation relates \(x\) and \(y\), with \(c\) held fixed. Rearrangement describes the points of the surface at that height. A factor that can equal zero may vanish at points that still satisfy the equation. Dividing by that factor removes those points.
:::

::: visual
kind: quadric
caption: |
  Keep the cut axis on \(z\) and move the slice. On the surface \(x^2 + y^2 - z^2 = 1\), the curve in the plane \(z = c\) is a circle around the \(z\)-axis, and it is smallest at \(c = 0\).
params:
  surface: hyperboloid-one
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 1
:::

::: trap
text: |
  Substitute \(x = 0\) and \(y = 0\) into
  \[
  z(x^{2} + y^{2}) = x^{2}.
  \]
  The two sides become
  \[
  \begin{aligned}
  \text{left side}&=z \cdot 0 = 0,\\
  \text{right side}&=0.
  \end{aligned}
  \]
  The two sides agree for every \(z\). Every point \((0, 0, z)\) lies on the surface. Division by \(x^{2} + y^{2}\) requires \(x^{2} + y^{2} \neq 0\). Along the line \(x = y = 0\) that requirement fails. The division drops the line.
:::

::: guided-example
title: Horizontal level of an implicit surface
problem: |
  The surface \(x^{2} + y^{2} - z^{2} = 1\) is given by an equation. Find the level set at height \(z = c\).
steps:
  - |
    Set \(z = c\). The equation becomes
    \[
    x^{2} + y^{2} - c^{2} = 1.
    \]
  - |
    Add \(c^{2}\) to both sides. The level set is
    \[
    x^{2} + y^{2} = 1 + c^{2}.
    \]
  - |
    The value \(1 + c^{2}\) is at least 1. The level set is a circle centred at the origin, of radius \(\sqrt{1 + c^{2}}\).
:::

::: going-deeper
title: Level sets that are not smooth curves
text: |
  A level set can be a point, empty, or a curve with a corner.

  - For \(f(x, y) = x^2 + y^2\), the level \(c = 0\) is the single point \((0, 0)\) and the levels \(c < 0\) are empty.
  - For \(f(x, y) = xy\), the level \(c = 0\) is the two coordinate axes, which cross at the origin. At that crossing the gradient \((y, x)\) is the zero vector, so there is no single tangent line.

  Away from points where the gradient vanishes, a level set of a smooth function is a smooth curve.
:::

::: key-points
text: |
  - For a function of three variables, the level set of height \(k\) is the set of points with \(f(x, y, z) = k\). When that set is a surface, it is a level surface.
  - For \(T(x, y, z) = e^{-(x^{2}+y^{2}+z^{2})}\) and \(0 < k \le 1\), the level set \(T = k\) is the sphere \(x^{2} + y^{2} + z^{2} = -\ln k\), centred at the origin. At \(k = 1\) the level set is the origin.
  - To find the \(z\)-level sets of an implicit surface, set \(z = c\) and rearrange. Do not divide by an expression that can equal zero.
  - The usual slip divides \(z(x^{2} + y^{2}) = x^{2}\) by \(x^{2} + y^{2}\). The division drops the line \(x = y = 0\), but every point \((0, 0, z)\) lies on the surface.
:::

::: concept-question
id: l4-level-sets.q-4e3c1fb4
question: |
  Let \(T(x, y, z) = e^{-(x^{2}+y^{2}+z^{2})}\). Which equation is the level set \(T = e^{-1}\)?
options:
  - text: |
      The sphere \(x^{2} + y^{2} + z^{2} = e\).
  - text: |
      The sphere \(x^{2} + y^{2} + z^{2} = 1\).
    correct: true
  - text: |
      The sphere \(x^{2} + y^{2} + z^{2} = -1\).
  - text: |
      The plane \(z = e^{-1}\).
explanation: |
  The level equation is
  \[
  x^{2} + y^{2} + z^{2} = -\ln(e^{-1}).
  \]
  The value \(\ln(e^{-1})\) equals \(-1\). Therefore \(-\ln(e^{-1}) = 1\). The level set is the sphere of radius 1 centred at the origin.
:::

::: sheet-item
id: l4-level-sets.sheet-01
category: formula
text: |
  The level curve of height \(k\) is the set of \((x, y)\) with \(f(x, y) = k\).
:::

::: sheet-item
id: l4-level-sets.sheet-02
category: recognition
text: |
  On a contour map, evenly spaced heights pack together where the surface is steeper.
:::

::: sheet-item
id: l4-level-sets.sheet-03
category: trap
text: |
  On \(z(x^{2} + y^{2}) = x^{2}\), every point \((0, 0, z)\) lies on the surface. Dividing by \(x^{2} + y^{2}\) drops the line \(x = y = 0\).
:::

::: exercise
id: l4-level-sets.final-2024-q1a
tier: exam
topics: [level-sets, implicit-surfaces]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2024
  paper: Final
  question: "1a"
  points: 1
statement: |
  [2 points. 15min] a) Give the \( z \)-level sets of the surface \( z(x^2 + y^2) = x^2 \).
solution: |
  Work with the equation as an implicit surface in \( \mathbb{R}^3 \). For a fixed level \( z=c \), the level equation is
  \[
  (c-1)x^2+cy^2=0.
  \]
  The entire vertical line \( (0,0,z) \) belongs to the surface. Solving for \(z\) as a quotient would omit this line.

  The level sets in the \(xy\)-plane are:

  - For \(c=0\): \(\{(0,y):y\in\mathbb{R}\}\).
  - For \(c=1\): \(\{(x,0):x\in\mathbb{R}\}\).
  - For \(0<c<1\):
    \[
    \left\{(x,y):y=\pm\sqrt{\dfrac{1-c}{c}}\,x\right\}.
    \]
  - For \(c<0\) or \(c>1\): \(\{(0,0)\}\).

  These cases give every \(z\)-level set of the implicit surface.
provenance: written-for-site
steps:
  - The implicit level equation is formed without dividing by \(x^2+y^2\).
  - The cases \(c=0\), \(c=1\), \(0<c<1\), and the remaining values are separated.
  - The vertical line above the origin is retained.
verification:
  checks:
    - expr: c*(0**2 + 0**2) - 0**2
      expected: "0"
    - expr: 0*(0**2 + y**2) - 0**2
      expected: "0"
    - expr: 1*(x**2 + 0**2) - x**2
      expected: "0"
    - expr: simplify(c*(x**2 + ((1-c)/c)*x**2) - x**2)
      expected: "0"
:::

::: exercise
id: l4-level-sets.final-2025-q1a
tier: exam
topics: [level-sets, implicit-surfaces]
examBlock: level-sets-tangent-plane
pastExam:
  year: 2025
  paper: Final
  question: "1a"
  points: 1
statement: |
  [2 points. 15min] a) Give the \( z \)-level sets of the surface \( 2zx = y^2 + x^2 \).
solution: |
  Work with the equation as an implicit surface in \( \mathbb{R}^3 \). For a fixed level \(z=c\), the level equation is
  \[
  x^2-2cx+y^2=0.
  \]
  Completing the square gives
  \[
  (x-c)^2+y^2=c^2.
  \]

  - For \(c\ne0\), the level set is the circle with center \((c,0)\) and radius \(|c|\).
  - For \(c=0\), the circle degenerates to the point \((0,0)\).

  The entire vertical line \((0,0,z)\) belongs to the implicit surface. Solving for \(z\) by dividing by \(2x\) would omit this line. Thus the circles above, including the degenerate circle, are all the \(z\)-level sets.
provenance: written-for-site
steps:
  - The implicit equation is restricted to the level \(z=c\).
  - The level equation is completed to a square.
  - The vertical line above the origin is retained.
verification:
  checks:
    - expr: expand((x-c)**2+y**2-c**2-(x**2+y**2-2*c*x))
      expected: "0"
    - expr: (x**2+y**2-2*c*x).subs({x:0,y:0})
      expected: "0"
    - expr: ((x-c)**2+y**2).subs({x:0,y:0})
      expected: "c**2"
:::

::: exercise
id: l4-level-sets.midterm-2021-ex1a
number: 1a
statement: |
  The printed figure is a topographic map of a mountain range in the first quadrant. The origin \(O\) is at the bottom left. Consecutive ticks on both axes are 100 m. The \(x\)-axis shows six ticks after \(O\). The \(y\)-axis shows five ticks after \(O\). Nested closed curves form one cluster away from the origin. The only printed heights are 200 on a southern contour of the cluster, 220 on a contour that still surrounds both inner lobes, and 240 on the left-hand inner lobe. One unlabeled closed curve lies between the 200 and 220 labels. What is the height difference between two consecutive levels?
tier: exam
topics:
  - level-sets
  - contour-maps
solution: |
  The printed labels 200 and 220 differ by 20. One unlabeled closed curve sits between those two contours, so those 20 m are two consecutive contour steps. Each step is \(20/2 = 10\) m. The same 10 m step fits the printed 240, which sits two contour steps inside the 220 contour on the left lobe.
provenance: written-for-site
steps:
  - The printed 200 and 220 differ by 20 m.
  - One unlabeled contour between them makes two steps, so the consecutive-level difference is 10 m.
verification:
  checks:
    - expr: (220 - 200)/2
      expected: "10"
pastExam:
  year: 2021
  paper: Midterm
  question: 1a
  points: 1
:::

::: exercise
id: l4-level-sets.midterm-2021-ex1b
number: 1b
statement: |
  Using the same map (100 m ticks, printed heights 200, 220, 240 only, two inner lobes), sketch the main features of the 3D graph in \(Oxyz\): the tops with positions and heights, the valleys with positions and heights, and the bottom.
tier: exam
topics:
  - level-sets
  - contour-maps
solution: |
  Consecutive ticks are 100 m, and consecutive contours differ by 10 m from part (a).

  - The left summit sits inside the small unlabeled loop next to the printed 240, near \((350\,\mathrm{m},\, 400\,\mathrm{m})\) on the grid. That inner loop is one 10 m step above 240, so the left top is at height 250 m.
  - The right summit is the innermost of two nested unlabeled loops in the right lobe, near \((480\,\mathrm{m},\, 280\,\mathrm{m})\). Counting 10 m steps inward from the printed 220 gives height 250 m at that inner loop as well.
  - The two lobes pinch along the 220 contour, so the saddle between the summits is at height 220 m, near \((400\,\mathrm{m},\, 320\,\mathrm{m})\).
  - The outermost closed curve of the cluster is one 10 m step below the printed 200, so the bottom of the drawn range is at height 190 m along that outer boundary.

  Grid positions are read from the ticks. They are not printed as coordinates on the figure.
provenance: written-for-site
steps:
  - "Tops: two summits, both at 250 m, left near (350 m, 400 m), right near (480 m, 280 m)."
  - "Valley: the saddle on the 220 m contour between the lobes, near (400 m, 320 m)."
  - "Bottom: the outermost drawn contour, 190 m."
verification:
  checkable: false
  reason: The answer is a sketch of the range from a contour map.
pastExam:
  year: 2021
  paper: Midterm
  question: 1b
  points: 1
:::

::: exercise
id: l4-level-sets.midterm-2021-ex2.2
number: "2.2"
statement: |
  For the surface \(\mathcal{C}\) given by \(z^2 = x^2 + y^2\), give the equation of a generic level set and plot the topographic map.
tier: exam
topics:
  - level-sets
  - cone
examBlock: level-sets-tangent-plane
solution: |
  The level set at height \(c\) is the cut by the plane \(z = c\). It is the circle
  \[
  x^2 + y^2 = c^2,
  \]
  of radius \(|c|\). For \(c = 0\) the set is the origin. The topographic map in \(Oxy\) is the family of concentric circles centred at the origin. Circles of equal radius come from \(z = c\) and \(z = -c\).
provenance: written-for-site
steps:
  - Write x^2 + y^2 = c^2 for the cut z = c.
  - Sketch concentric circles centred at the origin.
verification:
  checks:
    - expr: (c**2 - (x**2 + y**2)) + (x**2 + y**2 - c**2)
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "2.2"
  points: 1
:::

::: exercise
id: l4-level-sets.midterm-2021-ex4.2
number: "4.2"
statement: |
  Deduce the level sets of \(f(x, y) = \dfrac{x^2 - y^2}{x^2 + y^2}\) and sketch them in the 3D coordinate system.
tier: exam
topics:
  - level-sets
examBlock: level-sets-tangent-plane
solution: |
  The equation \(f = c\) is
  \[
  (1 - c)x^2 = (1 + c)y^2,
  \]
  away from the origin where \(f\) is undefined.

  - For \(|c| < 1\) this is a pair of lines through the origin.
  - For \(c = 1\) the level set is the \(x\)-axis minus the origin.
  - For \(c = -1\) it is the \(y\)-axis minus the origin.
  - For \(|c| > 1\) the level set is empty, since \(|f| \le 1\).

  Along each such line the graph sits at constant height \(z = c\), so in space each level set of the graph is a pair of horizontal lines at height \(c\), missing the \(z\)-axis.
provenance: written-for-site
steps:
  - Obtain the lines through the origin for each c in [-1, 1].
  - Sketch those lines in space at height z = c.
verification:
  checkable: false
  reason: The answer is a description and a 3D sketch of the level sets.
pastExam:
  year: 2021
  paper: Midterm
  question: "4.2"
  points: 1
:::

::: exercise
id: l4-level-sets.midterm-2022-ex6i
statement: |
  Let \(f(x,y)=\sqrt{x^2+y^2}\). Give the equation of the \(z\)-level set of this function. Which \(z\) are allowed?
tier: exam
topics:
  - level-sets
examBlock: level-sets-tangent-plane
pastExam:
  year: 2022
  paper: Midterm
  question: 6i
  points: 1
solution: |
  The \(z\)-level set is the set of \((x,y)\) with
  \[
  \sqrt{x^2+y^2}=z.
  \]
  The square root is nonnegative, so only \(z\ge 0\) can occur. Squaring then gives the equation
  \[
  x^2+y^2=z^2,
  \]
  a circle of radius \(z\) centred at the origin (a single point when \(z=0\)).
provenance: official-key
steps:
  - Restriction \(z\ge 0\).
  - Equation \(x^2+y^2=z^2\).
verification:
  checks:
    - expr: simplify((sqrt(x**2+y**2))**2 - (x**2+y**2))
      expected: "0"
    - expr: sqrt(0**2+0**2)
      expected: "0"
:::

::: exercise
id: l4-level-sets.midterm-2022-ex6ii
statement: |
  Let \(f(x,y)=\sqrt{x^2+y^2}\). Plot the \(2\mathrm{D}\) level set for \(z=0\), \(z=1\) and \(z=2\).
tier: exam
topics:
  - level-sets
examBlock: level-sets-tangent-plane
pastExam:
  year: 2022
  paper: Midterm
  question: 6ii
  points: 0.5
solution: |
  - For \(z=0\) the level set is the origin.
  - For \(z=1\) it is the unit circle.
  - For \(z=2\) it is the circle of radius \(2\) centred at the origin.

  The three sets are concentric.
provenance: official-key
steps:
  - Point at the origin for \(z=0\).
  - Circles of radii \(1\) and \(2\).
verification:
  checkable: false
  reason: The asked output is a plot of three level sets.
:::

::: exercise
id: l4-level-sets.sheet-2-ex1b
number: "1b"
tier: standard
topics: [level-sets]
statement: |
  Sketch the main features of the 3D graph of the mountain range in the \(Oxyz\) coordinates: the tops, with positions and heights, the valleys, with positions and heights, and the bottom.
solution: |
  The contour step is 10 m.

  - The north-west top lies inside the unlabeled oval enclosed by the curve labeled 240, near \(x = 310\,\mathrm{m}\) and \(y = 440\,\mathrm{m}\). That oval is the 250 m level, one step above 240 m. The top stands above this oval.
  - The south-east top lies inside the innermost of three closed curves in the eastern lobe of the curve labeled 220, near \(x = 410\,\mathrm{m}\) and \(y = 330\,\mathrm{m}\). The innermost curve is three steps of 10 m above 220 m, so its height is 250 m. The top stands above that curve.
  - The valley is the saddle at the waist of the curve labeled 220, near \(x = 380\,\mathrm{m}\) and \(y = 390\,\mathrm{m}\), at height 220 m.
  - The bottom is the ground outside the curve labeled 200. Its height is below 200 m.
provenance: written-for-site
verification:
  checkable: false
  reason: The answer is a sketch.
:::

::: exercise
id: l4-level-sets.ex-gaussian-level-surfaces
tier: standard
topics: [level-sets]
statement: |
  Let \(T(x, y, z) = e^{-(x^{2}+y^{2}+z^{2})}\).

  1. For which values \(k\) is the level set \(T = k\) not empty?
  2. Describe the level sets \(T = e^{-4}\), \(T = 1\) and \(T = 2\).
  3. Which level surface contains the point \((1, 1, \sqrt{2})\)?
  4. Find the radius of the level set \(T = \tfrac12\).
solution: |
  **Heights that occur.** The exponent \(-(x^{2}+y^{2}+z^{2})\) is at most \(0\), so \(T \le e^{0} = 1\). An exponential is positive, so \(T > 0\). Equality \(T = 1\) holds only at the origin. The level set is not empty exactly for \(0 < k \le 1\).

  **Solving for the level set.** For \(0 < k \le 1\), taking logarithms in \(e^{-(x^{2}+y^{2}+z^{2})} = k\) gives
  \[
  x^{2} + y^{2} + z^{2} = -\ln k,
  \]
  a sphere centred at the origin of radius \(\sqrt{-\ln k}\).

  - For \(k = e^{-4}\), the right side is \(-\ln e^{-4} = 4\). The level set is the sphere \(x^{2} + y^{2} + z^{2} = 4\) of radius \(2\).
  - For \(k = 1\), the right side is \(0\), so the level set is the origin.
  - For \(k = 2\), the value is larger than \(1\), so the level set is empty.

  **The point.** At \((1, 1, \sqrt{2})\) the exponent is \(-(1 + 1 + 2) = -4\), so \(T = e^{-4}\). The point lies on the sphere of radius \(2\) found above.

  **Height \(\tfrac12\).** The radius is \(\sqrt{-\ln\frac12} = \sqrt{\ln 2}\).
provenance: written-for-site
steps:
  - |
    Heights \(0 < k \le 1\).
  - |
    Level sets: sphere of radius \(2\), the origin, and the empty set.
  - |
    The point lies on the level surface \(T = e^{-4}\).
  - |
    Radius \(\sqrt{\ln 2}\).
verification:
  checks:
    - expr: "-log(exp(-4))"
      expected: "4"
    - expr: "exp(-(1**2 + 1**2 + sqrt(2)**2))"
      expected: "exp(-4)"
    - expr: "-log(Rational(1, 2))"
      expected: "log(2)"
    - expr: "exp(-(0**2 + 0**2 + 0**2))"
      expected: "1"
:::

::: exercise
id: l4-level-sets.ex-shifted-circles-contours
tier: standard
topics: [level-sets, contour-maps]
statement: |
  Let \(f(x, y) = x^{2} + y^{2} - 2x + 4y\).

  1. Describe the level curve \(f = k\) for every real \(k\).
  2. Draw the level curves for the heights \(k = -4, -3, \dots, 4\) as a contour map with evenly spaced heights. Compare the distance between the curves for \(k = -4\) and \(k = -3\) with the distance between the curves for \(k = 3\) and \(k = 4\). What does the comparison say about the surface?
solution: |
  **Level curves.** Complete the squares:
  \[
  f(x, y) = (x - 1)^{2} + (y + 2)^{2} - 5.
  \]
  The equation \(f = k\) is
  \[
  (x - 1)^{2} + (y + 2)^{2} = k + 5.
  \]

  - For \(k > -5\) this is the circle with centre \((1, -2)\) and radius \(\sqrt{k + 5}\).
  - For \(k = -5\) it is the single point \((1, -2)\).
  - For \(k < -5\) the left side is nonnegative and the right side is negative, so the level curve is empty.

  **Spacing.** The curves for \(k = -4, \dots, 4\) are concentric circles around \((1, -2)\) with radii \(\sqrt{k + 5} = 1, \sqrt{2}, \dots, 3\). The radii for \(k = -4\) and \(k = -3\) are \(1\) and \(\sqrt{2}\), so the gap is \(\sqrt{2} - 1 \approx 0.41\). The radii for \(k = 3\) and \(k = 4\) are \(\sqrt{8} = 2\sqrt{2}\) and \(3\), so the gap is \(3 - 2\sqrt{2} \approx 0.17\). The outer gap is smaller, since \((\sqrt{2} - 1) - (3 - 2\sqrt{2}) = 3\sqrt{2} - 4 > 0\).

  With evenly spaced heights, curves that lie closer together mean the surface is steeper. The surface \(z = f(x, y)\) is a paraboloid with its lowest point above \((1, -2)\) at height \(-5\), and it gets steeper with the distance from that point.
provenance: written-for-site
steps:
  - |
    Completed square \((x - 1)^{2} + (y + 2)^{2} = k + 5\).
  - |
    Circle for \(k > -5\), a point for \(k = -5\), empty for \(k < -5\).
  - |
    Gaps \(\sqrt{2} - 1\) and \(3 - 2\sqrt{2}\), with the outer gap smaller.
verification:
  checks:
    - expr: "expand((x - 1)**2 + (y + 2)**2 - 5 - (x**2 + y**2 - 2*x + 4*y))"
      expected: "0"
    - expr: "(sqrt(-4 + 5), sqrt(-3 + 5), sqrt(3 + 5), sqrt(4 + 5))"
      expected: "(1, sqrt(2), 2*sqrt(2), 3)"
    - expr: "(sqrt(2) - 1) - (3 - 2*sqrt(2)) - (3*sqrt(2) - 4)"
      expected: "0"
    - expr: "(3*sqrt(2) - 4)**2 - (18 + 16 - 24*sqrt(2))"
      expected: "0"
:::

::: exercise
id: l4-level-sets.ex-implicit-level-sets-xy
tier: exam
topics: [level-sets, implicit-surfaces]
statement: |
  Give the \(z\)-level sets of the surface \(z(x^{2} + y^{2}) = xy\). Treat the cases:

  - \(c = 0\),
  - \(c = \pm\tfrac12\),
  - \(0 < \lvert c\rvert < \tfrac12\),
  - \(\lvert c\rvert > \tfrac12\).

  Which points of the surface lie over the origin?
solution: |
  **The level equation.** Set \(z = c\). The equation becomes
  \[
  c(x^{2} + y^{2}) = xy,
  \]
  that is
  \[
  c x^{2} - xy + c y^{2} = 0.
  \]
  Do not divide by \(x^{2} + y^{2}\), because that factor is \(0\) at the origin.

  **Cases.**

  - For \(c = 0\) the equation is \(xy = 0\). The level set is the two coordinate axes.
  - For \(c = \tfrac12\) the left side is \(\tfrac12(x - y)^{2}\), so the level set is the line \(y = x\).
  - For \(c = -\tfrac12\) the left side is \(-\tfrac12(x + y)^{2}\), so the level set is the line \(y = -x\).
  - For \(\lvert c\rvert > \tfrac12\) put \(x = sy\) with \(y \ne 0\). The equation \(c s^{2} - s + c = 0\) has discriminant \(1 - 4c^{2} < 0\), so it has no real root. If \(y = 0\), the equation gives \(c x^{2} = 0\), so \(x = 0\). The level set is the single point \((0, 0)\).
  - For \(0 < \lvert c\rvert < \tfrac12\) the discriminant \(1 - 4c^{2}\) is positive. The equation \(c s^{2} - s + c = 0\) has the two real roots \(s_{\pm} = \dfrac{1 \pm \sqrt{1 - 4c^{2}}}{2c}\), whose product is \(1\). The level set is the pair of lines \(x = s_{+} y\) and \(x = s_{-} y\) through the origin. The case \(y = 0\) adds only the origin, which lies on both lines.

  **Over the origin.** At \(x = y = 0\) both sides of \(z(x^{2} + y^{2}) = xy\) equal \(0\) for every \(z\). The whole line \((0, 0, z)\) lies on the surface. Solving for \(z = xy/(x^{2} + y^{2})\) would lose this line.
provenance: written-for-site
steps:
  - |
    Level equation \(c x^{2} - xy + c y^{2} = 0\), without dividing by \(x^{2} + y^{2}\).
  - |
    Cases by the discriminant \(1 - 4c^{2}\): axes, single lines, pairs of lines and the origin.
  - |
    The line \((0, 0, z)\) lies on the surface.
verification:
  checks:
    - expr: "expand((c*(x**2 + y**2) - x*y) - (c*x**2 - x*y + c*y**2))"
      expected: "0"
    - expr: "expand((x**2 - 2*x*y + y**2)/2 - (Rational(1, 2)*x**2 - x*y + Rational(1, 2)*y**2))"
      expected: "0"
    - expr: "expand(-(x + y)**2/2 - (-Rational(1, 2)*x**2 - x*y - Rational(1, 2)*y**2))"
      expected: "0"
    - expr: "simplify((c*s**2 - s + c).subs(s, (1 + sqrt(1 - 4*c**2))/(2*c)))"
      expected: "0"
    - expr: "simplify((c*s**2 - s + c).subs(s, (1 - sqrt(1 - 4*c**2))/(2*c)))"
      expected: "0"
    - expr: "simplify(((1 + sqrt(1 - 4*c**2))/(2*c))*((1 - sqrt(1 - 4*c**2))/(2*c)))"
      expected: "1"
    - expr: "(z*(x**2 + y**2) - x*y).subs({x: 0, y: 0})"
      expected: "0"
    - expr: "1 - 4*c**2 - (-4*(c**2) + 1)"
      expected: "0"
:::
