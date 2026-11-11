---
id: l1-functions
lecture: 1
order: 3
title: Functions, domain and range
prerequisites: []
sources:
  - { source: handout, section: "1.1", page: 16 }
  - { source: handout, section: "1.1", page: 18 }
  - { source: handout, section: "1.2", page: 21 }
  - { source: handout, section: "1.3", page: 22 }
  - { source: handout, section: "1.3", page: 23 }
  - { source: handout, section: "1.3", page: 27 }
  - { source: sheet-1, page: 1 }
  - { source: functions-and-graphs, page: 4 }
  - { source: functions-and-graphs, page: 5 }
  - { source: functions-and-graphs, page: 9 }
  - { source: functions-and-graphs, page: 11 }
examWeight: medium
examWeightNote: Every midterm sketch starts with the domain.
status: reviewed
notation: |
  \(y=f(x)\) means the rule \(f\) assigns the output \(y\) to the input \(x\). The handout calls \(x\) the independent variable and \(y\) the dependent variable. \(f:X\to Y\) means each \(x\) in the set \(X\) is assigned one \(y\) in \(Y\). \((g\circ f)(x)\) means \(g(f(x))\).
---

::: section
title: Lines, circles and what a function is
:::

::: formal-statement
kind: definition
title: Slope and equations of a line
source: { source: handout, section: "1.1", page: 16 }
text: |
  The **slope** of the line through \(A(x_1,y_1)\) and \(B(x_2,y_2)\) is
  \[
  m = \frac{\Delta y}{\Delta x} = \frac{y_2-y_1}{x_2-x_1},
  \]
  with \(\Delta x = x_2-x_1\) and \(\Delta y = y_2-y_1\).

  - The **slope-intercept form** is \(y = mx + b\), and \(b\) is the \(y\)-intercept.
  - The **point-slope form** is \(y-y_1 = m(x-x_1)\).

  The **two-point form** is
  \[
  \frac{y-y_1}{x-x_1} = \frac{y_2-y_1}{x_2-x_1}.
  \]
:::

::: plain-explanation
text: |
  The slope is the change in \(y\) divided by the change in \(x\) between two points on the line. Point-slope form builds the equation from that slope and one point. Two-point form uses the two points directly. Either equation rearranges into \(y=mx+b\), and \(b\) is the height of the line where it meets the \(y\)-axis.
:::

::: formal-statement
kind: definition
title: Intercepts, horizontal lines and vertical lines
source: { source: handout, section: "1.1", page: 18 }
text: |
  The **\(x\)-intercept** of \(y=mx+b\) is
  \[
  x=-b/m.
  \]

  - A **horizontal line** has slope \(m=0\) and equation \(y=b\).
  - A **vertical line** has equation \(x=a\). Sometimes one says that a vertical line has an "infinite" slope.
:::

::: plain-explanation
text: |
  The \(y\)-intercept is the \(y\)-value at \(x=0\), which is \(b\). The \(x\)-intercept is the \(x\)-value at \(y=0\). Setting \(mx+b=0\) and dividing by \(m\) gives \(x=-b/m\), so that formula needs \(m\neq 0\).

  - A horizontal line \(y=b\) meets the \(y\)-axis at \(b\). When \(b\neq 0\) it does not meet the \(x\)-axis, and the division in \(x=-b/m\) cannot be done.
  - On a vertical line \(x=a\), the run \(\Delta x\) between two points is \(0\), so the slope formula divides by zero and returns no real slope.
:::

::: worked-example
title: The line through (2, 1) and (3, 3)
problem: |
  Find an equation of the line through \(A(2,1)\) and \(B(3,3)\). Find the \(x\)-intercept and the \(y\)-intercept.
solution: |
  The slope is the change in \(y\) divided by the change in \(x\):
  \[
  m = \frac{3-1}{3-2} = 2.
  \]
  The two-point form then says
  \[
  \frac{y-1}{x-2} = 2.
  \]
  Multiplying through by \(x-2\) gives the first line. The right side is \(2x-4\), and adding \(1\) gives the second line:
  \[
  \begin{aligned}
  y-1 &= 2(x-2) = 2x-4,\\
  y &= 2x-3.
  \end{aligned}
  \]

  In slope-intercept form the slope is \(m=2\) and the constant term is \(b=-3\). The \(y\)-intercept is \(b\), so the \(y\)-intercept is \(-3\). The \(x\)-intercept is
  \[
  x=-b/m = -(-3)/2 = 3/2.
  \]

  The line is \(y=2x-3\). It meets the \(x\)-axis at \(3/2\) and the \(y\)-axis at \(-3\).
:::

::: trap
text: |
  On the line \(y=2x-3\), the slope is \(m=2\) and the constant term is \(b=-3\). The \(y\)-intercept is \(b\), so the \(y\)-intercept is \(-3\). The \(x\)-intercept formula \(x=-b/m\) gives
  \[
  x=-(-3)/2=3/2.
  \]

  The number \(3/2\) is the \(x\)-intercept. Calling \(3/2\) the \(y\)-intercept fails. That name would mark the point \((0, 3/2)\). Substituting \(x=0\) into the line gives
  \[
  y=2\cdot 0-3=-3,
  \]
  so the line meets the \(y\)-axis at \((0,-3)\). It meets the \(x\)-axis at \(\bigl(3/2, 0\bigr)\), because \(2\cdot(3/2)-3=0\).
:::

::: visual
kind: curve-sketch
caption: |
  The line is \(y=2x-3\). Switch on the intercepts and read the \(x\)-intercept \(3/2\) and the \(y\)-intercept \(-3\).
params:
  f: "2x-3"
  xmin: -2
  xmax: 4
  layers: [intercepts]
:::

::: formal-statement
kind: definition
title: Distance
source: { source: handout, section: "1.2", page: 21 }
text: |
  The **distance** between \((x_1,y_1)\) and \((x_2,y_2)\) is
  \[
  \sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
  \]
  The distance from \((x,y)\) to the origin is
  \[
  \sqrt{x^2+y^2}.
  \]
:::

::: plain-explanation
text: |
  The distance is the straight-line length between the two points. It is the square root of the sum of the squared horizontal run and the squared vertical rise. From a point to the origin, the run is \(x\) and the rise is \(y\).
:::

::: formal-statement
kind: definition
title: Circles
source: { source: handout, section: "1.2", page: 21 }
text: |
  The **circle** of radius \(r\) centered at the origin has equation
  \[
  x^2+y^2=r^2.
  \]
  The **unit circle** is \(x^2+y^2=1\). The circle of radius \(r\) centered at \(C(h,k)\) has equation
  \[
  (x-h)^2+(y-k)^2=r^2.
  \]
:::

::: plain-explanation
text: |
  A circle is the set of points at a fixed distance from the center. For the origin, set \(\sqrt{x^2+y^2}=r\) and square both sides. That produces
  \[
  x^2+y^2=r^2.
  \]

  For a center \((h,k)\), the distance from \((x,y)\) to the center is \(\sqrt{(x-h)^2+(y-k)^2}\). Set that distance equal to \(r\) and square both sides. That produces
  \[
  (x-h)^2+(y-k)^2=r^2.
  \]
:::

::: worked-example
title: Completing the square
problem: |
  Graph \(x^2-2x+y^2+4y-11=0\).
solution: |
  Complete the square in \(x\). The expression \(x^2-2x\) equals
  \[
  (x-1)^2-1,
  \]
  because \((x-1)^2=x^2-2x+1\).

  Complete the square in \(y\). The expression \(y^2+4y\) equals
  \[
  (y+2)^2-4,
  \]
  because \((y+2)^2=y^2+4y+4\).

  Substitute those into the equation:
  \[
  (x-1)^2-1+(y+2)^2-4-11=0.
  \]
  Move the constants across:
  \[
  (x-1)^2+(y+2)^2 = 1+4+11 = 16.
  \]
  This matches \((x-h)^2+(y-k)^2=r^2\) with
  \[
  h=1,\qquad k=-2,\qquad r^2=16.
  \]
  The radius is \(4\), because \(4^2=16\). The center is \((1,-2)\).

  The graph is the circle of radius \(4\) centered at \((1,-2)\).
:::

::: formal-statement
kind: definition
title: Function
source: { source: handout, section: "1.3", page: 22 }
text: |
  A **function** \(y=f(x)\) is a rule for determining \(y\) when we're given a value of \(x\). Given a value of \(x\), a function must give at most one value of \(y\). Thus, vertical lines are not functions. Any line \(y=mx+b\) is called a **linear function**.
:::

::: plain-explanation
text: |
  The rule takes a value of \(x\) and returns a value of \(y\). It returns one \(y\) at most. A vertical line \(x=a\) pairs that single \(x\) with every \(y\), so it is not a function. A line \(y=mx+b\) returns one \(y\) for each \(x\), and that line is a linear function.
:::

::: key-points
text: |
  - The slope of a line is \(m=\Delta y/\Delta x\), and \(y=mx+b\) has \(y\)-intercept \(b\) and \(x\)-intercept \(x=-b/m\) when \(m\neq 0\).
  - A circle of radius \(r\) centered at \((h,k)\) is \((x-h)^2+(y-k)^2=r^2\). Completing the square finds \(h\), \(k\) and \(r\).
  - A function gives at most one \(y\) for each \(x\), so a vertical line is not a function.
  - The usual slip calls \(3/2\) the \(y\)-intercept of \(y=2x-3\). It is the \(x\)-intercept, and the \(y\)-intercept is \(-3\).
:::

::: concept-question
id: l1-functions.q-f6148a69
question: |
  A line has the equation \(y=4x-2\). What are its intercepts?
options:
  - text: The \(x\)-intercept is \(\frac{1}{2}\) and the \(y\)-intercept is \(-2\).
    correct: true
  - text: The \(x\)-intercept is \(-2\) and the \(y\)-intercept is \(\frac{1}{2}\).
  - text: The \(x\)-intercept is \(-\frac{1}{2}\) and the \(y\)-intercept is \(-2\).
  - text: The \(x\)-intercept is \(\frac{1}{2}\) and the \(y\)-intercept is \(4\).
explanation: |
  The \(y\)-intercept is the height at \(x=0\), which is \(b=-2\). The \(x\)-intercept solves \(4x-2=0\), so
  \[
  x=-b/m=\frac{1}{2}.
  \]
  The slope \(4\) is not an intercept, and the number \(\frac{1}{2}\) belongs to the \(x\)-axis.
:::

::: exercise
id: l1-functions.sheet-1-1-1
number: "Sheet 1, 1.1"
tier: basic
topics: [functions, domain, graphs]
statement: |
  Give the domain of \(x\mapsto x^n\) for \(n=2\) and for \(n=3\), and sketch both graphs.
solution: |
  - The expression \(x^2\) is defined for every real \(x\). The domain of \(x\mapsto x^2\) is every real number.
  - The expression \(x^3\) is defined for every real \(x\). The domain of \(x\mapsto x^3\) is every real number.

  The graph of \(y=x^2\) is a parabola with its vertex at the origin, opening upward. It is symmetric about the \(y\)-axis, because \((-x)^2=x^2\). The values are at least \(0\), and \(y=0\) only at \(x=0\). The range of \(x\mapsto x^2\) is every real \(y\geq 0\).

  The graph of \(y=x^3\) passes through \((-1,-1)\), \((0,0)\) and \((1,1)\). For \(x<0\) the values are negative, and for \(x>0\) the values are positive. The range of \(x\mapsto x^3\) is every real \(y\).
provenance: written-for-site
steps:
  - The domain of each power is stated in a full sentence.
  - The parabola and the cubic are described, including the range of each.
verification:
  checkable: false
  reason: The answer includes a sketch of each graph, which SymPy cannot compare.
:::

::: section
title: The vertical line test, domain and natural domain
:::

::: formal-statement
kind: definition
title: Function from a set to a set
source: { source: functions-and-graphs, page: 4 }
text: |
  A **function** \(f\) from a set of elements \(X\) to a set of elements \(Y\) is a rule that assigns to each element \(x\) in \(X\) exactly one element \(y\) in \(Y\).
:::

::: plain-explanation
text: |
  The set \(X\) contains the allowed inputs:

  - Each \(x\) in \(X\) gets one \(y\) in \(Y\).
  - An \(x\) outside \(X\) gets no \(y\).
  - A second \(y\) for the same \(x\) is ruled out.

  Two sets show the difference:

  - The set \(F=\{(1,5),(3,3),(2,3),(4,2)\}\) gives each \(x\) one \(y\), so \(F\) is a function. The pairs \((2,3)\) and \((3,3)\) share a \(y\)-value, and sharing a \(y\)-value is allowed.
  - The set \(G=\{(1,5),(4,2),(2,3),(3,3),(1,6)\}\) gives \(x=1\) both \(y=5\) and \(y=6\), so \(G\) is not a function.
:::

::: formal-statement
kind: definition
title: Vertical line test
source: { source: functions-and-graphs, page: 5 }
text: |
  The **Vertical Line Test** states that if it is not possible to draw a vertical line through a graph so that it cuts the graph in more than one point, then the graph is a function.
:::

::: plain-explanation
text: |
  Sweep a vertical line across the graph:

  - If some position of that line meets the graph twice, that \(x\) has two \(y\)-values, and the graph is not a function.
  - If every vertical line meets the graph at most once, the graph is a function.
:::

::: worked-example
title: The circle and the upper semicircle
problem: |
  Decide whether \(x^2+y^2=r^2\), with \(r>0\), defines \(y\) as a function of \(x\). Decide the same question for the upper semicircle.
solution: |
  **Full circle.** The circle of radius \(r\) centered at the origin has equation \(x^2+y^2=r^2\). For a fixed \(x\) with \(-r<x<r\), the equation has two solutions for \(y\), namely
  \[
  y=\sqrt{r^2-x^2},\qquad y=-\sqrt{r^2-x^2}.
  \]
  That input has two outputs, so the full circle is not a function. The vertical line \(x=0\) meets the circle at \((0,r)\) and at \((0,-r)\).

  On the circle \((x-1)^2+(y+2)^2=16\), the line \(x=1\) forces \((y+2)^2=16\), so \(y=2\) or \(y=-6\). Those are the points \((1,2)\) and \((1,-6)\), and that circle is not a function either.

  **Upper semicircle.** It keeps the nonnegative root,
  \[
  y=f(x)=\sqrt{r^2-x^2}.
  \]
  Each \(x\) in \([-r,r]\) gives one \(y\). The domain is \([-r,r]\). The upper semicircle is a function. The lower semicircle \(y=-\sqrt{r^2-x^2}\) likewise gives one \(y\) for each \(x\) in \([-r,r]\), so it is a function as well.
:::

::: formal-statement
kind: definition
title: Domain
source: { source: handout, section: "1.3", page: 23 }
text: |
  The interval of \(x\)-values at which we're allowed to evaluate the function is called the **domain** of the function.
:::

::: plain-explanation
text: |
  The domain is the set of inputs the rule accepts. Two calculations are undefined in the reals, and either one excludes an \(x\):

  - Division by zero is undefined.
  - The square root of a negative number is undefined.
:::

::: formal-statement
kind: definition
title: Domain and natural domain
source: { source: functions-and-graphs, page: 5 }
text: |
  For a function \(f:X\to Y\) the **domain** of \(f\) is the set \(X\).

  If only the rule \(y=f(x)\) is given, then the domain is taken to be the set of all real \(x\) for which the function is defined. For example, \(y=\sqrt{x}\) has domain all real \(x\geq 0\). This is sometimes referred to as the **natural domain** of the function.
:::

::: plain-explanation
text: |
  When a formula is the only information, the natural domain is every real \(x\) for which that formula is defined. For \(y=\sqrt{x}\) the natural domain is all real \(x\geq 0\), written \([0,\infty)\). For \(y=1/x\) the natural domain is every real \(x\) except \(0\).

  That set can be a single interval, as it is for the square root. It can also be a union of intervals.
:::

::: guided-example
title: Domain of 1 over a square root
problem: |
  Find the domain of \(y=1/\sqrt{4x-x^2}\).
steps:
  - |
    Name the two conditions:

    - The root condition says the input of the square root is at least zero.
    - The denominator condition says the square root itself is not zero.
  - |
    The input of the square root is \(4x-x^2\), so the root condition is
    \[
    4x-x^2\geq 0.
    \]
    The denominator \(\sqrt{4x-x^2}\) is zero when \(4x-x^2=0\). Keeping both conditions means the stricter inequality
    \[
    4x-x^2>0.
    \]
  - |
    Factor
    \[
    4x-x^2=x(4-x).
    \]
    The product \(x(4-x)\) is positive in two cases:

    - Both factors can be positive.
    - Both factors can be negative.
  - |
    Both factors positive means \(x>0\) and \(4-x>0\) at the same time. The second inequality is \(x<4\). The intersection of \(x>0\) and \(x<4\) is the interval
    \[
    0<x<4.
    \]
  - |
    Both factors negative means \(x<0\) and \(4-x<0\) at the same time. The second inequality is \(x>4\). No real number is less than \(0\) and greater than \(4\), so this case is empty.
  - |
    The domain is
    \[
    (0,4).
    \]
    At the endpoints \(x=0\) and \(x=4\) the radicand is \(0\), so the denominator is \(0\), and both endpoints are excluded.
:::

::: trap
text: |
  The domain of \(y=\sqrt{x^2-1}\) is the set of real \(x\) with \(x^2-1\geq 0\). Factor
  \[
  x^2-1=(x-1)(x+1).
  \]

  - Both factors nonnegative means \(x-1\geq 0\) and \(x+1\geq 0\) at the same time, so \(x\geq 1\).
  - Both factors nonpositive means \(x-1\leq 0\) and \(x+1\leq 0\) at the same time, so \(x\leq -1\).

  The condition holds when \(x\leq -1\) or when \(x\geq 1\). The domain is the **union**
  \[
  (-\infty,-1]\cup[1,\infty).
  \]
  At \(x=\pm 1\) the radicand is \(0\), and \(\sqrt{0}=0\) is defined, so both endpoints belong to the domain.

  The intersection of the rays \(x\leq -1\) and \(x\geq 1\) is empty. Writing \(\cap\) between those two rays drops every point. The number \(x=2\) satisfies \(2^2-1=3\geq 0\), so \(x=2\) is in the domain. The intersection of the rays does not contain \(x=2\).
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(1/\sqrt{4x-x^2}\). Switch on the domain and see that it is the interval \((0,4)\).
params:
  f: "1/sqrt(4x-x^2)"
  xmin: -2
  xmax: 6
  layers: [domain]
:::

::: key-points
text: |
  - A function from \(X\) to \(Y\) assigns to each \(x\) in \(X\) exactly one \(y\) in \(Y\). A graph is a function when no vertical line cuts it more than once.
  - The natural domain of a formula is every real \(x\) for which it is defined. Division by zero and the square root of a negative number exclude an \(x\).
  - The usual slip writes the intersection of the two rays, which is empty. The domain of \(\sqrt{x^2-1}\) is their union \((-\infty,-1]\cup[1,\infty)\).
:::

::: concept-question
id: l1-functions.q-2eb5fb04
question: |
  What is the natural domain of \(y=1/\sqrt{x}\)?
options:
  - text: '\([0,\infty)\)'
  - text: '\((0,\infty)\)'
    correct: true
  - text: Every real \(x\) except \(0\).
  - text: Every real \(x\).
explanation: |
  - The root condition is \(x\geq 0\).
  - The denominator condition is \(\sqrt{x}\neq 0\), so \(x\neq 0\).

  The domain is \((0,\infty)\). At \(x=0\) the denominator is \(0\). For \(x<0\) the square root is undefined.
:::

::: concept-question
id: l1-functions.q-bf23d43b
question: |
  What is the natural domain of \(y=\sqrt{x^{2}-4}\)?
options:
  - text: '\((-\infty,-2]\cup[2,\infty)\)'
    correct: true
  - text: '\([-2,2]\)'
  - text: The empty set.
  - text: '\([2,\infty)\)'
explanation: |
  The square root needs \(x^{2}-4\geq 0\), which is \((x-2)(x+2)\geq 0\).

  - Both factors are nonnegative when \(x\geq 2\).
  - Both are nonpositive when \(x\leq -2\).

  The condition holds in either case, so the domain is the union of the two rays. The domain collects the points of both rays, so it is not empty even though the rays do not overlap. At \(x=\pm 2\) the radicand is \(0\) and the root is defined, so both endpoints belong. At \(x=0\) the radicand is \(-4\), which rules out \([-2,2]\).
:::

::: exercise
id: l1-functions.sheet-1-1-2
number: "Sheet 1, 1.2"
tier: basic
topics: [functions, domain, graphs]
statement: |
  Give the domain of \(f(x)=1/x\) and sketch its graph.
solution: |
  Division by zero is undefined at \(x=0\). The domain of \(f(x)=1/x\) is every real \(x\) except \(0\).

  - For \(x>0\) the values are positive, so that branch lies in the first quadrant.
  - For \(x<0\) the values are negative, so that branch lies in the third quadrant.

  The line \(x=0\) is a vertical asymptote:

  - As \(x\) approaches \(0\) from the right, \(y\) becomes large and positive.
  - As \(x\) approaches \(0\) from the left, \(y\) becomes large and negative.
  - As \(|x|\) grows, \(y\) approaches \(0\).

  The range is every real \(y\) except \(0\), because each such \(y\) equals \(1/x\) at \(x=1/y\).
provenance: written-for-site
steps:
  - The domain is stated in a full sentence, with \(x=0\) excluded.
  - The two branches and the vertical asymptote \(x=0\) are described.
verification:
  checkable: false
  reason: The answer includes a sketch of the graph, which SymPy cannot compare.
:::

::: section
title: Range, restricted domains and composition
:::

::: formal-statement
kind: definition
title: Range
source: { source: functions-and-graphs, page: 5 }
text: |
  For a function \(f:X\to Y\) the **range** of \(f\) is the set of \(y\)-values such that \(y=f(x)\) for some \(x\) in \(X\). For \(y=\sqrt{x}\), the range is all real \(y\geq 0\).
:::

::: plain-explanation
text: |
  The range collects the outputs that actually occur. The domain collects the inputs. For \(y=\sqrt{x}\), the square-root symbol denotes the nonnegative root, so every output satisfies \(y\geq 0\).
:::

::: worked-example
title: Domain and range of the square root
problem: |
  Find the domain and the range of \(y=\sqrt{x}\).
solution: |
  **Domain.** The square root of a negative number is undefined in the reals, so every allowed \(x\) satisfies \(x\geq 0\). The value \(x=0\) is allowed, because \(\sqrt{0}=0\). The domain is \([0,\infty)\). The same set is \(\{x\in\mathbb{R}\mid x\geq 0\}\), and it is the natural domain, all real \(x\geq 0\).

  **Range.** Every output of \(\sqrt{x}\) satisfies \(y\geq 0\). Every number \(y\geq 0\) occurs, because \(x=y^2\) gives \(\sqrt{y^2}=y\). The range is all real \(y\geq 0\).
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(\sqrt{x}\). Switch on the domain to see the inputs \(x\geq 0\). Every point of the graph has \(y\geq 0\), which is the range.
params:
  f: "sqrt(x)"
  xmin: -1
  xmax: 9
  layers: [domain]
:::

::: formal-statement
kind: definition
title: Restricting the domain
source: { source: functions-and-graphs, page: 9 }
text: |
  A rule \(y=f(x)\) may be given together with a domain of definition that is not the natural domain. For \(y=x^2\) with \(0\leq x\leq 2\), the natural domain has been **restricted** to the subinterval \(0\leq x\leq 2\). The range is then
  \[
  0\leq y\leq 4.
  \]
:::

::: plain-explanation
text: |
  The formula \(y=x^2\) has natural domain every real \(x\), and on that domain the outputs are all \(y\geq 0\). The extra sentence \(0\leq x\leq 2\) keeps a subinterval. On that subinterval the smallest value is \(0^2=0\) and the largest value is \(2^2=4\), so the range is \(0\leq y\leq 4\).

  A story problem may restrict the domain further. A box of volume
  \[
  V=x(a-2x)(b-2x),
  \]
  with \(a\) and \(b\) positive, has domain
  \[
  \bigl(0,\min(a,b)/2\bigr).
  \]
  On this domain:

  - \(x>0\),
  - \(a-2x>0\) together with \(b-2x>0\).
:::

::: formal-statement
kind: method
title: Composition
source: { source: handout, section: "1.3", page: 27 }
text: |
  \[
  (g\circ f)(x) = g(f(x)).
  \]
:::

::: plain-explanation
text: |
  To compute \((g\circ f)(x)\):

  1. Evaluate the **inner function** \(f\) at \(x\).
  2. Evaluate \(g\) at that output.

  The other order is \((f\circ g)(x)=f(g(x))\), which evaluates \(g\) first. The worked example takes \(L(x)=2x+1\) and \(M(x)=x^2-x\) and computes both orders.
:::

::: worked-example
title: L of M and M of L
problem: |
  Given \(L(x)=2x+1\) and \(M(x)=x^2-x\), find \(L(M(x))\) and \(M(L(x))\).
solution: |
  The inner value \(M(x)\) is \(x^2-x\). Apply \(L\) to that value:
  \[
  \begin{aligned}
  L(M(x)) &= 2(x^2-x)+1\\
  &= 2x^2-2x+1.
  \end{aligned}
  \]
  The inner value \(L(x)\) is \(2x+1\). Apply \(M\) to that value:
  \[
  M(L(x)) = (2x+1)^2-(2x+1).
  \]
  Expand the square: \((2x+1)^2=4x^2+4x+1\). Subtract \(2x+1\):
  \[
  4x^2+4x+1-2x-1 = 4x^2+2x.
  \]
  So \(M(L(x))=4x^2+2x\).

  The two results are \(2x^2-2x+1\) and \(4x^2+2x\). They differ. At \(x=0\), \(L(M(0))=L(0)=1\) and \(M(L(0))=M(1)=0\).
:::

::: key-points
text: |
  - The range of \(f:X\to Y\) is the set of \(y\) with \(y=f(x)\) for some \(x\) in \(X\). For \(y=\sqrt{x}\) it is all real \(y\geq 0\).
  - Restricting the domain changes the range. For \(y=x^2\) with \(0\leq x\leq 2\), the range is \(0\leq y\leq 4\).
  - \((g\circ f)(x)=g(f(x))\) evaluates the inner function \(f\) first.
  - The order matters: \(g\circ f\) and \(f\circ g\) usually differ. For \(L(x)=2x+1\) and \(M(x)=x^2-x\), \(L(M(x))=2x^2-2x+1\) and \(M(L(x))=4x^2+2x\).
:::

::: concept-question
id: l1-functions.q-d497db04
question: |
  The rule \(y=x^2\) is given on the domain \(0\leq x\leq 2\). What is the range?
options:
  - text: Every real \(y\).
  - text: Every real \(y\geq 0\).
  - text: '\(0\leq y\leq 4\).'
    correct: true
  - text: '\(0\leq y\leq 2\).'
explanation: |
  On \(0\leq x\leq 2\), the smallest value of \(x^2\) is \(0^2=0\) and the largest value is \(2^2=4\). The range is \(0\leq y\leq 4\). On the natural domain of \(x^2\), the range is every \(y\geq 0\). The stated domain stops at \(2\), and \(x^2\) reaches \(4\) there.
:::

::: exercise
id: l1-functions.sheet-1-1-4
number: "Sheet 1, 1.4"
tier: basic
topics: [functions, domain, graphs]
statement: |
  Give the domain of \(f(x)=\sqrt{x}\) and sketch its graph.
solution: |
  The square root of a negative number is undefined in the reals, and \(\sqrt{0}=0\) is defined. The domain of \(f(x)=\sqrt{x}\) is \([0,\infty)\).

  The graph starts at the origin and stays in \(y\geq 0\). It passes through \((1,1)\) and \((4,2)\). The range is every real \(y\geq 0\).
provenance: written-for-site
steps:
  - The domain is stated in a full sentence as \([0,\infty)\).
  - The graph is described, including the range.
verification:
  checkable: false
  reason: The answer includes a sketch of the graph, which SymPy cannot compare.
:::

::: exercise
id: l1-functions.sheet-1-1-6
number: "Sheet 1, 1.6"
tier: standard
topics: [functions, domain, graphs]
statement: |
  Give the domain of \(f(x)=\tan x\) and sketch its graph.
solution: |
  The tangent is undefined where \(\cos x=0\). Those inputs are the odd multiples of \(\pi/2\), written
  \[
  x=(2n+1)\pi/2
  \]
  for an integer \(n\). The domain of \(\tan x\) is every real \(x\) except the odd multiples of \(\pi/2\).

  Each excluded \(x\) is a vertical asymptote. On the interval \(\bigl(-\pi/2,\pi/2\bigr)\), \(\tan 0=0\).

  - As \(x\) approaches \(-\pi/2\) from the right, \(\tan x\) becomes large and negative.
  - As \(x\) approaches \(\pi/2\) from the left, \(\tan x\) becomes large and positive.

  The same picture appears on every open interval between consecutive odd multiples of \(\pi/2\).
provenance: written-for-site
steps:
  - The domain is stated in a full sentence, excluding the odd multiples of \(\pi/2\).
  - One branch between consecutive asymptotes is described, and the repeat every \(\pi\) is named.
verification:
  checkable: false
  reason: The answer includes a sketch of the graph, which SymPy cannot compare.
:::

::: exercise
id: l1-functions.sheet-1-1-8
number: "Sheet 1, 1.8"
tier: standard
topics: [functions, domain, graphs]
statement: |
  Give the domain of \(f(x)=1/(1-x^2)\) and sketch its graph.
solution: |
  The denominator \(1-x^2\) is zero when \(x^2=1\), so \(x=-1\) or \(x=1\). The domain of \(f(x)=1/(1-x^2)\) is every real \(x\) except \(x=-1\) and \(x=1\).

  Replacing \(x\) by \(-x\) leaves the formula unchanged, because \((-x)^2=x^2\). The graph is symmetric about the \(y\)-axis. The lines \(x=-1\) and \(x=1\) are vertical asymptotes.

  On \((-1,1)\) the denominator is positive. It is largest at \(x=0\), where it equals \(1\), so the smallest value on this interval is \(f(0)=1\). As \(x\) approaches either end from inside, the denominator approaches \(0\) through positive values and \(f\) becomes large and positive.

  On \((1,\infty)\) the denominator is negative. As \(x\) approaches \(1\) from the right, \(f\) becomes large and negative. As \(x\) grows, \(f\) approaches \(0\) through negative values. The branch on \((-\infty,-1)\) is the mirror image of that right-hand branch.
provenance: written-for-site
steps:
  - The domain is stated in a full sentence, with \(x=-1\) and \(x=1\) excluded.
  - The sign on each piece, the value \(f(0)=1\), and the vertical asymptotes are described.
verification:
  checkable: false
  reason: The answer includes a sketch of the graph, which SymPy cannot compare.
:::

::: exercise
id: l1-functions.booklet-compose
number: "1.4.11"
tier: exam
topics: [functions, composition]
statement: |
  Given \(L(x)=2x+1\) and \(M(x)=x^2-x\), find \(L(M(x))\) and \(M(L(x))\).
solution: |
  The inner value \(M(x)\) is \(x^2-x\). Apply \(L\):
  \[
  \begin{aligned}
  L(M(x)) &= 2(x^2-x)+1\\
  &= 2x^2-2x+1.
  \end{aligned}
  \]
  The inner value \(L(x)\) is \(2x+1\). Apply \(M\):
  \[
  M(L(x)) = (2x+1)^2-(2x+1).
  \]
  Expand the square to \(4x^2+4x+1\), then subtract \(2x+1\). The result is \(4x^2+2x\), so \(M(L(x))=4x^2+2x\).

  The two polynomials are \(2x^2-2x+1\) and \(4x^2+2x\). Their difference is \(-2x^2-4x+1\), which is not the zero polynomial, so \(L(M(x))\) and \(M(L(x))\) differ. At \(x=0\), \(L(M(0))=1\) and \(M(L(0))=0\).
provenance: written-for-site
steps:
  - \(L(M(x))\) is computed by substituting \(x^2-x\) into \(L\).
  - \(M(L(x))\) is computed by substituting \(2x+1\) into \(M\), then expanding.
  - The two expanded polynomials are compared.
verification:
  checks:
    - expr: expand(2*(x**2 - x) + 1)
      expected: 2*x**2 - 2*x + 1
    - expr: expand((2*x + 1)**2 - (2*x + 1))
      expected: 4*x**2 + 2*x
    - expr: expand((2*(x**2 - x) + 1) - ((2*x + 1)**2 - (2*x + 1)))
      expected: -2*x**2 - 4*x + 1
:::

::: sheet-item
id: l1-functions.sheet-natural-domain
category: recognition
text: |
  When a formula is given with no domain, the natural domain is every real \(x\) for which the formula is defined. Exclude an \(x\) that would divide by zero or take a square root of a negative number. For \(y=\sqrt{x}\) the natural domain is \([0,\infty)\).
:::

::: sheet-item
id: l1-functions.sheet-intercepts
category: trap
text: |
  On \(y=mx+b\), the \(y\)-intercept is \(b\) and the \(x\)-intercept is \(x=-b/m\) when \(m\neq 0\). On \(y=2x-3\), the \(x\)-intercept is \(3/2\) and the \(y\)-intercept is \(-3\). Calling \(3/2\) the \(y\)-intercept fails, because the line meets the \(y\)-axis at \(-3\).
:::

::: sheet-item
id: l1-functions.sheet-union
category: trap
text: |
  For \(\sqrt{x^2-1}\), the condition \(x^2-1\geq 0\) holds when \(x\leq -1\) or when \(x\geq 1\). The domain is the union \((-\infty,-1]\cup[1,\infty)\). The intersection of those two rays is empty, so writing \(\cap\) drops every point.
:::

::: sheet-item
id: l1-functions.sheet-composition
category: formula
text: |
  \((g\circ f)(x)=g(f(x))\). Evaluate the inner function first. For \(L(x)=2x+1\) and \(M(x)=x^2-x\), \(L(M(x))=2x^2-2x+1\) and \(M(L(x))=4x^2+2x\).
:::

::: exercise
id: l1-functions.ex-composition-domains
tier: standard
topics: [functions, composition, domain]
statement: |
  Let \(f(x)=\sqrt{x}\) and \(g(x)=x^{2}-4\).

  (a) Find a formula for \(f\circ g\) and give its natural domain.

  (b) Find a formula for \(g\circ f\) and give its natural domain.

  (c) Are \(f\circ g\) and \(g\circ f\) the same function? Give a value of \(x\) that shows the answer.
solution: |
  (a) By definition \((f\circ g)(x)=f(g(x))=\sqrt{x^{2}-4}\). The square root needs \(x^{2}-4\geq 0\), which is \((x-2)(x+2)\geq 0\).

  - Both factors are nonnegative for \(x\geq 2\).
  - Both factors are nonpositive for \(x\leq -2\).

  The natural domain is the union
  \[
  (-\infty,-2]\cup[2,\infty).
  \]

  (b) By definition \((g\circ f)(x)=g(\sqrt{x})=(\sqrt{x})^{2}-4\). For \(x\geq 0\) this equals \(x-4\). The inner function \(f\) is defined only for \(x\geq 0\), so the natural domain of \(g\circ f\) is \([0,\infty)\). The formula \(x-4\) alone would also accept negative \(x\), and \(g\circ f\) does not.

  (c) The two functions differ. At \(x=0\), \((g\circ f)(0)=-4\), while \((f\circ g)(0)=\sqrt{-4}\) is not defined in the reals. Their domains are different as well.
provenance: written-for-site
steps:
  - \(f\circ g\) is \(\sqrt{x^{2}-4}\) with domain \((-\infty,-2]\cup[2,\infty)\).
  - \(g\circ f\) is \(x-4\) with domain \([0,\infty)\), because \(f\) needs \(x\geq 0\).
  - A value such as \(x=0\) shows that the two functions differ.
verification:
  checks:
    - expr: (sqrt(x))**2 - 4
      expected: x - 4
    - expr: solveset(x**2 - 4 >= 0, x, Interval(-oo, oo))
      expected: Union(Interval(-oo, -2), Interval(2, oo))
    - expr: solveset(x >= 0, x, Interval(-oo, oo))
      expected: Interval(0, oo)
:::

::: exercise
id: l1-functions.ex-circle-branches
tier: standard
topics: [functions, graphs, domain]
statement: |
  Consider the curve \(x^{2}+y^{2}-6x+2y+6=0\).

  (a) Find its center and its radius.

  (b) Does the curve define \(y\) as a function of \(x\)? Explain with a vertical line.

  (c) Write the lower semicircle as \(y=f(x)\), and give the domain and the range of \(f\).
solution: |
  (a) Complete the square in each variable:
  \[
  \begin{aligned}
  x^{2}-6x&=(x-3)^{2}-9,\\
  y^{2}+2y&=(y+1)^{2}-1.
  \end{aligned}
  \]
  The equation becomes
  \[
  (x-3)^{2}-9+(y+1)^{2}-1+6=0,
  \]
  so
  \[
  (x-3)^{2}+(y+1)^{2}=4.
  \]
  The center is \((3,-1)\) and the radius is \(2\).

  (b) The vertical line \(x=3\) meets the curve where \((y+1)^{2}=4\), so \(y=1\) or \(y=-3\). One input has two outputs, so the curve is not a function of \(x\).

  (c) Solving \((y+1)^{2}=4-(x-3)^{2}\) gives \(y=-1\pm\sqrt{4-(x-3)^{2}}\). The lower semicircle takes the minus sign:
  \[
  f(x)=-1-\sqrt{4-(x-3)^{2}}.
  \]
  The root needs \((x-3)^{2}\leq 4\), so the domain is \([1,5]\). The root takes every value from \(0\) to \(2\), so \(f\) takes every value from \(-1-2=-3\) to \(-1-0=-1\). The range is \([-3,-1]\).
provenance: written-for-site
steps:
  - Completing the square gives center \((3,-1)\) and radius \(2\).
  - The line \(x=3\) meets the curve twice, so the curve is not a function.
  - The lower semicircle is \(f(x)=-1-\sqrt{4-(x-3)^{2}}\), with domain \([1,5]\) and range \([-3,-1]\).
verification:
  checks:
    - expr: expand((x - 3)**2 + (y + 1)**2 - 4)
      expected: x**2 + y**2 - 6*x + 2*y + 6
    - expr: (-1 - sqrt(4 - (3 - 3)**2), -1 - sqrt(4 - (1 - 3)**2), -1 - sqrt(4 - (5 - 3)**2))
      expected: (-3, -1, -1)
    - expr: solveset((x - 3)**2 <= 4, x, Interval(-oo, oo))
      expected: Interval(1, 5)
:::

::: exercise
id: l1-functions.ex-natural-domains
tier: standard
topics: [functions, domain]
statement: |
  Find the natural domain of each function.

  (a) \(f(x)=\sqrt{x^{2}-5x+6}\)

  (b) \(g(x)=\dfrac{1}{\sqrt{6-x-x^{2}}}\)

  (c) \(h(x)=\ln\bigl(x^{2}-x-2\bigr)\)
solution: |
  (a) The root needs \(x^{2}-5x+6\geq 0\), which is \((x-2)(x-3)\geq 0\).

  - Both factors are nonpositive for \(x\leq 2\).
  - Both factors are nonnegative for \(x\geq 3\).

  At \(x=2\) and \(x=3\) the radicand is \(0\) and the root is defined. The domain is \((-\infty,2]\cup[3,\infty)\).

  (b) The root is in the denominator, so the radicand has to be strictly positive: \(6-x-x^{2}>0\). This is \(x^{2}+x-6<0\), which is \((x+3)(x-2)<0\). The factors have opposite signs exactly for \(-3<x<2\). At the endpoints the denominator would be \(0\). The domain is \((-3,2)\).

  (c) The logarithm needs a positive argument: \(x^{2}-x-2>0\), which is \((x-2)(x+1)>0\).

  - Both factors are positive for \(x>2\).
  - Both factors are negative for \(x<-1\).

  The endpoints give the argument \(0\), where \(\ln\) is undefined. The domain is \((-\infty,-1)\cup(2,\infty)\).
provenance: written-for-site
steps:
  - In (a), solve \((x-2)(x-3)\geq 0\) and keep the endpoints.
  - In (b), solve \((x+3)(x-2)<0\) and drop the endpoints.
  - In (c), solve \((x-2)(x+1)>0\) and drop the endpoints.
verification:
  checks:
    - expr: solveset(x**2 - 5*x + 6 >= 0, x, Interval(-oo, oo))
      expected: Union(Interval(-oo, 2), Interval(3, oo))
    - expr: solveset(6 - x - x**2 > 0, x, Interval(-oo, oo))
      expected: Interval.open(-3, 2)
    - expr: solveset(x**2 - x - 2 > 0, x, Interval(-oo, oo))
      expected: Union(Interval.open(-oo, -1), Interval.open(2, oo))
:::

::: exercise
id: l1-functions.handout-1-1-1
number: "1.1.1"
tier: basic
topics:
  - lines
statement: |
  Find the equation of the line through \((1,1)\) and \((-5,-3)\) in the form \(y=mx+b\).
solution: |
  The slope is the change in \(y\) divided by the change in \(x\):
  \[
  m=\frac{-3-1}{-5-1}=\frac{-4}{-6}=\frac{2}{3}.
  \]
  Point-slope form at \((1,1)\) gives the equation, and rearranging puts it in slope-intercept form:
  \[
  \begin{aligned}
  y-1 &= \tfrac{2}{3}(x-1),\\
  y &= \tfrac{2}{3}x-\tfrac{2}{3}+1\\
  &= \tfrac{2}{3}x+\tfrac{1}{3}.
  \end{aligned}
  \]
  At \(x=-5\) the line gives \(-\tfrac{10}{3}+\tfrac{1}{3}=-3\), so it passes through the second point as well.

  The line is
  \[
  y=\frac{2}{3}x+\frac{1}{3}.
  \]
provenance: handout-answer
steps:
  - The slope is \(2/3\).
  - Point-slope form at \((1,1)\) gives \(y=\tfrac{2}{3}x+\tfrac{1}{3}\).
  - The second point lies on the line.
verification:
  checks:
    - expr: Rational(-3 - 1, -5 - 1)
      expected: "2/3"
    - expr: linsolve([m + b - 1, -5*m + b + 3], m, b)
      expected: "FiniteSet((Rational(2, 3), Rational(1, 3)))"
    - expr: (Rational(2, 3)*(-5) + Rational(1, 3), Rational(2, 3)*1 + Rational(1, 3))
      expected: "(-3, 1)"
:::


::: exercise
id: l1-functions.handout-1-1-2
number: "1.1.2"
tier: basic
topics:
  - lines
statement: |
  Find the equation of the line through \((-1,2)\) with slope \(-2\) in the form \(y=mx+b\).
solution: |
  Point-slope form with the point \((-1,2)\) and slope \(-2\) reads
  \[
  y-2=-2\bigl(x-(-1)\bigr)=-2(x+1).
  \]
  Rearranging gives
  \[
  \begin{aligned}
  y &= -2x-2+2\\
  &= -2x.
  \end{aligned}
  \]
  The constant term is \(b=0\), so the line passes through the origin. At \(x=-1\) it gives \(y=2\), as required.

  The line is
  \[
  y=-2x.
  \]
provenance: handout-answer
steps:
  - Point-slope form at \((-1,2)\) with slope \(-2\).
  - The constants cancel, so \(b=0\).
verification:
  checks:
    - expr: expand(2 + (-2)*(x - (-1)))
      expected: "-2*x"
    - expr: (-2*x).subs(x, -1)
      expected: "2"
:::


::: exercise
id: l1-functions.handout-1-1-4
number: "1.1.4"
tier: basic
topics:
  - lines
  - graphs
statement: |
  Change the equation \(y-2x=2\) to the form \(y=mx+b\), graph the line, and find the \(y\)-intercept and the \(x\)-intercept.
solution: |
  Adding \(2x\) to both sides gives
  \[
  y=2x+2.
  \]
  The slope is \(m=2\) and the constant term is \(b=2\).

  - The \(y\)-intercept is \(b=2\).
  - The \(x\)-intercept is \(x=-b/m=-2/2=-1\).

  The graph is a straight line that rises from left to right. It passes through \((0,2)\) and \((-1,0)\), and also through \((1,4)\). Each step of \(1\) to the right raises the line by \(2\).

  The \(y\)-intercept is \(2\) and the \(x\)-intercept is \(-1\).
provenance: handout-answer
steps:
  - The equation becomes \(y=2x+2\).
  - The intercepts are \(2\) and \(-1\).
  - The graph is described by two points and the slope.
verification:
  checks:
    - expr: solve(Eq(y - 2*x, 2), y)
      expected: "[2*x + 2]"
    - expr: ((2*x + 2).subs(x, 0), solve(2*x + 2, x))
      expected: "(2, [-1])"
:::


::: exercise
id: l1-functions.handout-1-1-7
number: "1.1.7"
tier: basic
topics:
  - lines
  - graphs
statement: |
  Change the equation \(3=2y\) to the form \(y=mx+b\), graph the line, and find the \(y\)-intercept and the \(x\)-intercept.
solution: |
  Dividing both sides by \(2\) gives
  \[
  y=\frac{3}{2}.
  \]
  This is a horizontal line, with slope \(m=0\) and constant term \(b=3/2\).

  - The \(y\)-intercept is \(3/2\).
  - The line never has \(y=0\), because \(y\) equals \(3/2\) at every point. The line does not meet the \(x\)-axis, so there is no \(x\)-intercept. The formula \(x=-b/m\) cannot be used, because \(m=0\).

  The graph is the horizontal line through \((0,3/2)\), parallel to the \(x\)-axis.

  The \(y\)-intercept is \(3/2\), and there is no \(x\)-intercept.
provenance: handout-answer
steps:
  - The equation becomes \(y=3/2\), a horizontal line.
  - The \(y\)-intercept is \(3/2\).
  - There is no \(x\)-intercept, because the slope is \(0\) and \(y\) is never \(0\).
verification:
  checks:
    - expr: solve(Eq(3, 2*y), y)
      expected: "[3/2]"
    - expr: solve(Rational(3, 2), x)
      expected: "[]"
:::


::: exercise
id: l1-functions.handout-1-1-8
number: "1.1.8"
tier: standard
topics:
  - lines
  - graphs
statement: |
  Change the equation \(2x+3y+6=0\) to the form \(y=mx+b\), graph the line, and find the \(y\)-intercept and the \(x\)-intercept.
solution: |
  Move \(2x+6\) to the right side and divide by \(3\):
  \[
  \begin{aligned}
  3y &= -2x-6,\\
  y &= -\tfrac{2}{3}x-2.
  \end{aligned}
  \]
  The slope is \(m=-2/3\) and the constant term is \(b=-2\).

  - The \(y\)-intercept is \(b=-2\).
  - The \(x\)-intercept is \(x=-b/m=-\dfrac{-2}{-2/3}=-3\).

  The line falls from left to right. It passes through \((0,-2)\) and \((-3,0)\). Each step of \(3\) to the right lowers the line by \(2\), so it also passes through \((3,-4)\).

  The \(y\)-intercept is \(-2\) and the \(x\)-intercept is \(-3\).
provenance: handout-answer
steps:
  - The equation becomes \(y=-\tfrac{2}{3}x-2\).
  - The intercepts are \(-2\) and \(-3\).
  - The line falls with slope \(-2/3\).
verification:
  checks:
    - expr: solve(Eq(2*x + 3*y + 6, 0), y)
      expected: "[-2*x/3 - 2]"
    - expr: ((-Rational(2, 3)*x - 2).subs(x, 0), solve(-Rational(2, 3)*x - 2, x))
      expected: "(-2, [-3])"
:::


::: exercise
id: l1-functions.handout-1-1-9
number: "1.1.9"
tier: basic
topics:
  - lines
statement: |
  Determine whether the lines \(3x+6y=7\) and \(2x+4y=5\) are parallel.
solution: |
  Solve each equation for \(y\):
  \[
  \begin{aligned}
  3x+6y=7 &\implies y=-\tfrac{1}{2}x+\tfrac{7}{6},\\
  2x+4y=5 &\implies y=-\tfrac{1}{2}x+\tfrac{5}{4}.
  \end{aligned}
  \]
  Both lines have slope \(-1/2\). Their constant terms \(7/6\) and \(5/4\) differ, so the lines are different and never meet.

  Yes, the lines are parallel.
provenance: handout-answer
steps:
  - Both equations are solved for \(y\).
  - Both slopes equal \(-1/2\).
  - The constant terms differ, so the lines are parallel and distinct.
verification:
  checks:
    - expr: solve(Eq(3*x + 6*y, 7), y)
      expected: "[-x/2 + 7/6]"
    - expr: solve(Eq(2*x + 4*y, 5), y)
      expected: "[-x/2 + 5/4]"
    - expr: Rational(7, 6) - Rational(5, 4)
      expected: "-1/12"
:::


::: exercise
id: l1-functions.handout-1-1-10
number: "1.1.10"
tier: standard
topics:
  - lines
statement: |
  Suppose a triangle in the \(x,y\)-plane has vertices \((-1,0)\), \((1,0)\) and \((0,2)\). Find the equations of the three lines that lie along the sides of the triangle in \(y=mx+b\) form.
solution: |
  Each side joins two vertices.

  - The side from \((-1,0)\) to \((1,0)\) has slope \(0\) and lies on the \(x\)-axis. Its line is \(y=0\).
  - The side from \((-1,0)\) to \((0,2)\) has slope \(m=\dfrac{2-0}{0-(-1)}=2\). The point \((0,2)\) is on the \(y\)-axis, so \(b=2\) and the line is \(y=2x+2\).
  - The side from \((1,0)\) to \((0,2)\) has slope \(m=\dfrac{2-0}{0-1}=-2\). The point \((0,2)\) gives \(b=2\), so the line is \(y=-2x+2\).

  The three lines are
  \[
  y=0,\qquad y=2x+2,\qquad y=-2x+2.
  \]
provenance: handout-answer
steps:
  - The bottom side lies on \(y=0\).
  - The left side has slope \(2\) and the right side has slope \(-2\).
  - Both slanted sides have \(y\)-intercept \(2\).
verification:
  checks:
    - expr: (Rational(2 - 0, 0 - (-1)), Rational(2 - 0, 0 - 1))
      expected: "(2, -2)"
    - expr: ((2*x + 2).subs(x, -1), (2*x + 2).subs(x, 0))
      expected: "(0, 2)"
    - expr: ((-2*x + 2).subs(x, 1), (-2*x + 2).subs(x, 0))
      expected: "(0, 2)"
:::


::: exercise
id: l1-functions.handout-1-1-11
number: "1.1.11"
tier: standard
topics:
  - lines
  - modelling
statement: |
  Suppose that you are driving to Seattle at constant speed. After you have been traveling for an hour you pass a sign saying it is \(130\) miles to Seattle, and after driving another \(20\) minutes you pass a sign saying it is \(105\) miles to Seattle. Using the horizontal axis for the time \(t\) and the vertical axis for the distance \(y\) from your starting point, graph and find the equation \(y=mt+b\) for your distance from your starting point. How long does the trip to Seattle take?
solution: |
  Measure \(t\) in hours from the start of the trip. Between the two signs, \(20\) minutes is \(1/3\) of an hour, and the distance to Seattle drops from \(130\) to \(105\) miles. The car covers \(25\) miles in \(1/3\) hour, so the slope is the speed
  \[
  m=\frac{25}{1/3}=75 \text{ miles per hour}.
  \]
  At \(t=0\) the car is at the starting point, so \(y=0\) there and \(b=0\). The equation is
  \[
  y=75t.
  \]
  The graph is a straight line through the origin with slope \(75\). It passes through \((1,75)\), where the first sign stands, and through \((4/3,100)\), where the second sign stands.

  At \(t=1\) the car is \(75\) miles from the start and \(130\) miles from Seattle, so the whole trip is
  \[
  75+130=205 \text{ miles}.
  \]
  The trip ends when \(y=205\):
  \[
  75t=205 \implies t=\frac{41}{15}\text{ hours}.
  \]
  In minutes this is \(\tfrac{41}{15}\cdot 60=164\).

  The distance is \(y=75t\) with \(t\) in hours, and the trip takes \(164\) minutes, which is \(2\) hours and \(44\) minutes.
provenance: handout-answer
steps:
  - The speed is \(25\) miles in \(1/3\) hour, which is \(75\) miles per hour.
  - The line passes through the origin, so \(y=75t\).
  - The total distance is \(75+130=205\) miles.
  - The trip takes \(205/75\) hours, which is \(164\) minutes.
verification:
  checks:
    - expr: Rational(130 - 105)/Rational(1, 3)
      expected: "75"
    - expr: solve(Eq(75*t, 75 + 130), t)
      expected: "[41/15]"
    - expr: Rational(41, 15)*60
      expected: "164"
:::


::: exercise
id: l1-functions.handout-1-1-12
number: "1.1.12"
tier: standard
topics:
  - lines
  - graphs
statement: |
  Let \(x\) stand for temperature in degrees Celsius, and let \(y\) stand for temperature in degrees Fahrenheit. A temperature of \(0\) C corresponds to \(32\) F, and a temperature of \(100\) C corresponds to \(212\) F. Find the equation of the line that relates temperature Fahrenheit \(y\) to temperature Celsius \(x\) in the form \(y=mx+b\). Graph the line, and find the point at which this line intersects \(y=x\). What is the practical meaning of this point?
solution: |
  The line passes through \((0,32)\) and \((100,212)\). The slope is
  \[
  m=\frac{212-32}{100-0}=\frac{180}{100}=\frac{9}{5}.
  \]
  The point \((0,32)\) lies on the \(y\)-axis, so \(b=32\) and
  \[
  y=\frac{9}{5}x+32.
  \]
  The graph is a line through \((0,32)\) and \((100,212)\) that rises more steeply than \(y=x\), which has slope \(1\).

  To find the intersection with \(y=x\), set \(y=x\) in the equation of the line:
  \[
  \begin{aligned}
  x &= \tfrac{9}{5}x+32,\\
  -\tfrac{4}{5}x &= 32,\\
  x &= -40.
  \end{aligned}
  \]
  Then \(y=x=-40\), so the lines meet at \((-40,-40)\). They meet only once, because their slopes differ.

  At this point the Celsius and Fahrenheit readings are equal. A temperature of \(-40\) degrees is the same on both scales.

  The line is \(y=\tfrac{9}{5}x+32\), and it meets \(y=x\) at \((-40,-40)\).
provenance: handout-answer
steps:
  - The slope is \(180/100=9/5\), and the \(y\)-intercept is \(32\).
  - Setting \(y=x\) gives \(x=-40\).
  - At \(-40\) degrees both scales show the same number.
verification:
  checks:
    - expr: Rational(212 - 32, 100 - 0)
      expected: "9/5"
    - expr: solve(Eq(x, Rational(9, 5)*x + 32), x)
      expected: "[-40]"
    - expr: (Rational(9, 5)*100 + 32, Rational(9, 5)*(-40) + 32)
      expected: "(212, -40)"
:::


::: exercise
id: l1-functions.handout-1-1-13
number: "1.1.13"
tier: standard
topics:
  - lines
  - modelling
statement: |
  A car rental firm has the following charges for a certain type of car: \(25\) dollars per day with \(100\) free miles included, \(0.15\) dollars per mile for more than \(100\) miles. Suppose you want to rent a car for one day, and you know you'll use it for more than \(100\) miles. What is the equation relating the cost \(y\) to the number of miles \(x\) that you drive the car?
solution: |
  For \(x>100\) the cost is the daily charge of \(25\) plus \(0.15\) for each mile beyond the first \(100\). The number of miles beyond \(100\) is \(x-100\), so
  \[
  \begin{aligned}
  y &= 25+0.15(x-100)\\
  &= 25+0.15x-15\\
  &= 0.15x+10.
  \end{aligned}
  \]
  The slope \(0.15\) is the price per mile. At \(x=100\) the formula gives \(0.15\cdot 100+10=25\), the same as the daily charge, so the cost has no jump at \(100\) miles.

  The cost in dollars is
  \[
  y=0.15x+10 \qquad (x>100).
  \]
provenance: handout-answer
steps:
  - The cost is \(25\) plus \(0.15\) per mile beyond \(100\).
  - Expanding gives \(y=0.15x+10\).
  - At \(x=100\) the formula returns \(25\).
verification:
  checks:
    - expr: expand(25 + Rational(15, 100)*(x - 100))
      expected: "3*x/20 + 10"
    - expr: (Rational(15, 100)*100 + 10)
      expected: "25"
:::


::: exercise
id: l1-functions.handout-1-1-14
number: "1.1.14"
tier: standard
topics:
  - lines
  - graphs
  - modelling
statement: |
  A photocopy store advertises the following prices: \(5\) cents per copy for the first \(20\) copies, \(4\) cents per copy for the 21st through 100th copy, and \(3\) cents per copy after the \(100\)th copy. Let \(x\) be the number of copies, and let \(y\) be the total cost of photocopying.

  (a) Graph the cost as \(x\) goes from \(0\) to \(200\) copies.

  (b) Find the equation in the form \(y=mx+b\) that tells you the cost of making \(x\) copies when \(x\) is more than \(100\).
solution: |
  Take the cost in dollars. A price of \(5\) cents is \(0.05\) dollars, and so on.

  (a) The cost is piecewise linear, with a new slope at each price change.

  - For \(0\leq x\leq 20\) the cost is \(y=0.05x\). At \(x=20\) it is \(1\).
  - For \(20\leq x\leq 100\) the cost is the first \(1\) dollar plus \(0.04\) for each copy beyond the twentieth:
    \[
    y=1+0.04(x-20)=0.04x+0.2.
    \]
    At \(x=100\) it is \(4.2\).
  - For \(100\leq x\leq 200\) the cost is \(4.2\) plus \(0.03\) for each copy beyond the hundredth:
    \[
    y=4.2+0.03(x-100)=0.03x+1.2.
    \]
    At \(x=200\) it is \(7.2\).

  The graph is one connected broken line through \((0,0)\), \((20,1)\), \((100,4.2)\) and \((200,7.2)\). Its slopes \(0.05\), \(0.04\) and \(0.03\) get smaller, so the line bends toward the horizontal.

  (b) For more than \(100\) copies the cost is the third formula,
  \[
  y=0.03x+1.2.
  \]
  The cost in dollars is \(y=0.03x+1.2\), and \(200\) copies cost \(7.2\) dollars.
provenance: handout-answer
steps:
  - The cost of the first \(20\) copies is \(1\) dollar.
  - The cost of \(100\) copies is \(4.2\) dollars.
  - For \(x>100\) the cost is \(0.03x+1.2\).
verification:
  checks:
    - expr: (20*Rational(5, 100), 20*Rational(5, 100) + 80*Rational(4, 100))
      expected: "(1, 21/5)"
    - expr: expand(Rational(21, 5) + Rational(3, 100)*(x - 100))
      expected: "3*x/100 + 6/5"
    - expr: (Rational(3, 100)*200 + Rational(6, 5), Rational(3, 100)*100 + Rational(6, 5))
      expected: "(36/5, 21/5)"
:::


::: exercise
id: l1-functions.handout-1-1-15
number: "1.1.15"
tier: standard
topics:
  - lines
  - graphs
  - modelling
statement: |
  In the Kingdom of Xyg the tax system works as follows. Someone who earns less than \(100\) gold coins per month pays no tax. Someone who earns between \(100\) and \(1000\) gold coins pays tax equal to \(10\%\) of the amount over \(100\) gold coins that he or she earns. Someone who earns over \(1000\) gold coins must hand over to the King all of the money earned over \(1000\) in addition to the tax on the first \(1000\).

  (a) Draw a graph of the tax paid \(y\) versus the money earned \(x\), and give formulas for \(y\) in terms of \(x\) in each of the regions \(0\leq x\leq 100\), \(100\leq x\leq 1000\), and \(x\geq 1000\).

  (b) Suppose that the King of Xyg decides to use the second of these line segments (for \(100\leq x\leq 1000\)) for \(x\leq 100\) as well. Explain in practical terms what the King is doing, and what the meaning is of the \(y\)-intercept.
solution: |
  (a) There are three regions.

  - For \(0\leq x\leq 100\) there is no tax, so \(y=0\).
  - For \(100\leq x\leq 1000\) the tax is \(10\%\) of the amount over \(100\):
  \[
  y=0.1(x-100)=\frac{x}{10}-10.
  \]
  At \(x=1000\) the tax is \(90\).
  - For \(x\geq 1000\) the person pays the tax on the first \(1000\), which is \(90\), plus all of the amount over \(1000\):
  \[
  y=90+(x-1000)=x-910.
  \]

  The graph is continuous. It lies along the \(x\)-axis up to \((100,0)\), rises with slope \(0.1\) to \((1000,90)\), and then rises with slope \(1\).

  (b) With the second formula for \(x\leq 100\), the tax is \(y=\tfrac{x}{10}-10\), which is negative. A negative tax is a payment from the King to the citizen. A person who earns \(x<100\) coins receives \(10-\tfrac{x}{10}\) coins.

  The \(y\)-intercept is \(-10\). A person who earns nothing receives \(10\) gold coins, a guaranteed minimum payment. The payment shrinks by \(0.1\) coin for each coin earned and reaches \(0\) at \(x=100\).

  The formulas are \(y=0\), \(y=\tfrac{x}{10}-10\) and \(y=x-910\) in the three regions.
provenance: handout-answer
steps:
  - The middle formula is \(0.1(x-100)\), with value \(90\) at \(x=1000\).
  - The last formula is \(90+(x-1000)=x-910\).
  - The intercept \(-10\) is a payment from the King to a person with no income.
verification:
  checks:
    - expr: expand(Rational(1, 10)*(x - 100))
      expected: "x/10 - 10"
    - expr: expand(Rational(1, 10)*(1000 - 100) + (x - 1000))
      expected: "x - 910"
    - expr: ((x/10 - 10).subs(x, 100), (x/10 - 10).subs(x, 1000), (x - 910).subs(x, 1000), (x/10 - 10).subs(x, 0))
      expected: "(0, 90, 90, -10)"
:::


::: exercise
id: l1-functions.handout-1-1-17
number: "1.1.17"
tier: standard
topics:
  - lines
  - modelling
statement: |
  Market research tells you that if you set the price of an item at \(1.50\) dollars, you will be able to sell \(5000\) items, and for every \(10\) cents you lower the price below \(1.50\) dollars you will be able to sell another \(1000\) items. Let \(x\) be the number of items you can sell, and let \(P\) be the price of an item.

  (a) Express \(P\) linearly in terms of \(x\), in other words, express \(P\) in the form \(P=mx+b\).

  (b) Express \(x\) linearly in terms of \(P\).
solution: |
  (a) Lowering the price by \(0.10\) dollars raises the number sold by \(1000\). The slope of \(P\) against \(x\) is the change in price per extra item:
  \[
  m=\frac{-0.10}{1000}=-0.0001.
  \]
  The line passes through \((x,P)=(5000,1.5)\). Point-slope form gives
  \[
  \begin{aligned}
  P-1.5 &= -0.0001(x-5000),\\
  P &= -0.0001x+0.5+1.5\\
  &= -0.0001x+2.
  \end{aligned}
  \]

  (b) Solve this equation for \(x\):
  \[
  \begin{aligned}
  0.0001x &= 2-P,\\
  x &= 10000(2-P)\\
  &= -10000P+20000.
  \end{aligned}
  \]
  At \(P=1.5\) this gives \(x=5000\), as required.

  The two forms are \(P=-0.0001x+2\) and \(x=-10000P+20000\).
provenance: handout-answer
steps:
  - The slope of \(P\) against \(x\) is \(-0.10/1000\).
  - Point-slope form at \((5000,1.5)\) gives \(P=-0.0001x+2\).
  - Solving for \(x\) gives \(x=-10000P+20000\).
verification:
  checks:
    - expr: expand(Rational(3, 2) - Rational(1, 10000)*(x - 5000))
      expected: "2 - x/10000"
    - expr: solve(Eq(P, 2 - x/10000), x)
      expected: "[20000 - 10000*P]"
    - expr: (2 - Rational(5000, 10000), 20000 - 10000*Rational(3, 2))
      expected: "(3/2, 5000)"
:::


::: exercise
id: l1-functions.handout-1-1-18
number: "1.1.18"
tier: standard
topics:
  - lines
  - modelling
statement: |
  An instructor gives a \(100\)-point final exam, and decides that a score \(90\) or above will be a grade of \(4.0\), a score of \(40\) or below will be a grade of \(0.0\), and between \(40\) and \(90\) the grading will be linear. Let \(x\) be the exam score, and let \(y\) be the corresponding grade. Find a formula of the form \(y=mx+b\) which applies to scores \(x\) between \(40\) and \(90\).
solution: |
  Between \(40\) and \(90\) the line passes through \((40,0)\) and \((90,4)\). The slope is
  \[
  m=\frac{4-0}{90-40}=\frac{4}{50}=\frac{2}{25}.
  \]
  Point-slope form at \((40,0)\) gives
  \[
  \begin{aligned}
  y &= \tfrac{2}{25}(x-40)\\
  &= \tfrac{2}{25}x-\tfrac{80}{25}\\
  &= \tfrac{2}{25}x-\tfrac{16}{5}.
  \end{aligned}
  \]
  At \(x=90\) the formula gives \(\tfrac{180}{25}-\tfrac{16}{5}=\tfrac{36}{5}-\tfrac{16}{5}=4\), so it joins the grade \(4.0\).

  The formula is
  \[
  y=\frac{2}{25}x-\frac{16}{5} \qquad (40\leq x\leq 90).
  \]
provenance: handout-answer
steps:
  - The line passes through \((40,0)\) and \((90,4)\).
  - The slope is \(4/50=2/25\).
  - Point-slope form gives \(y=\tfrac{2}{25}x-\tfrac{16}{5}\).
verification:
  checks:
    - expr: Rational(4 - 0, 90 - 40)
      expected: "2/25"
    - expr: expand(Rational(2, 25)*(x - 40))
      expected: "2*x/25 - 16/5"
    - expr: ((Rational(2, 25)*x - Rational(16, 5)).subs(x, 40), (Rational(2, 25)*x - Rational(16, 5)).subs(x, 90))
      expected: "(0, 4)"
:::


::: exercise
id: l1-functions.handout-1-2-1
number: "1.2.1"
tier: basic
topics:
  - circles
statement: |
  Find the equation of the circle of radius \(3\) centered at: (a) \((0,0)\), (b) \((5,6)\), (c) \((-5,-6)\), (d) \((0,3)\), (e) \((0,-3)\), (f) \((3,0)\).
solution: |
  The circle of radius \(r\) centered at \((h,k)\) is \((x-h)^2+(y-k)^2=r^2\). Here \(r^2=9\) in every part.

  - (a) \(h=0\), \(k=0\): \(x^2+y^2=9\).
  - (b) \(h=5\), \(k=6\): \((x-5)^2+(y-6)^2=9\).
  - (c) \(h=-5\), \(k=-6\): \((x+5)^2+(y+6)^2=9\).
  - (d) \(h=0\), \(k=3\): \(x^2+(y-3)^2=9\).
  - (e) \(h=0\), \(k=-3\): \(x^2+(y+3)^2=9\).
  - (f) \(h=3\), \(k=0\): \((x-3)^2+y^2=9\).

  A negative coordinate of the center turns the minus sign into a plus sign, as in (c) and (e). A coordinate \(0\) leaves the bare square \(x^2\) or \(y^2\), as in (d) and (f).
provenance: handout-answer
steps:
  - Each equation has the form \((x-h)^2+(y-k)^2=9\).
  - The signs follow the signs of \(h\) and \(k\).
verification:
  checks:
    - expr: '((x**2 + y**2).subs({x: 3, y: 0}), ((x - 5)**2 + (y - 6)**2).subs({x: 8, y: 6}), ((x + 5)**2 + (y + 6)**2).subs({x: -2, y: -6}), (x**2 + (y - 3)**2).subs({x: 3, y: 3}), (x**2 + (y + 3)**2).subs({x: 3, y: -3}), ((x - 3)**2 + y**2).subs({x: 6, y: 0}))'
      expected: "(9, 9, 9, 9, 9, 9)"
:::


::: exercise
id: l1-functions.handout-1-2-2
number: "1.2.2"
tier: standard
topics:
  - lines
  - circles
statement: |
  For each pair of points \(A(x_1,y_1)\) and \(B(x_2,y_2)\) find (i) \(\Delta x\) and \(\Delta y\) in going from \(A\) to \(B\), (ii) the slope of the line joining \(A\) and \(B\), (iii) the equation of the line joining \(A\) and \(B\) in the form \(y=mx+b\), (iv) the distance from \(A\) to \(B\), and (v) an equation of the circle with center at \(A\) that goes through \(B\).

  (a) \(A(2,0)\), \(B(4,3)\); (b) \(A(1,-1)\), \(B(0,2)\); (c) \(A(0,0)\), \(B(-2,-2)\); (d) \(A(-2,3)\), \(B(4,3)\); (e) \(A(-3,-2)\), \(B(0,0)\); (f) \(A(0.01,-0.01)\), \(B(-0.01,0.05)\).
solution: |
  In each part \(\Delta x=x_2-x_1\), \(\Delta y=y_2-y_1\), the slope is \(m=\Delta y/\Delta x\), the distance is \(\sqrt{(\Delta x)^2+(\Delta y)^2}\), and the circle has center \(A\) and radius equal to that distance.

  **(a)** \(\Delta x=4-2=2\) and \(\Delta y=3-0=3\). The slope is \(m=\tfrac{3}{2}\). Point-slope form at \(A\) gives \(y=\tfrac{3}{2}(x-2)=\tfrac{3}{2}x-3\). The distance is \(\sqrt{2^2+3^2}=\sqrt{13}\). The circle is \((x-2)^2+y^2=13\).

  **(b)** \(\Delta x=0-1=-1\) and \(\Delta y=2-(-1)=3\). The slope is \(m=-3\). Point-slope form at \(A\) gives \(y+1=-3(x-1)\), so \(y=-3x+2\). The distance is \(\sqrt{1+9}=\sqrt{10}\). The circle is \((x-1)^2+(y+1)^2=10\).

  **(c)** \(\Delta x=-2\) and \(\Delta y=-2\). The slope is \(m=1\). The line passes through the origin, so \(y=x\). The distance is \(\sqrt{4+4}=\sqrt{8}=2\sqrt{2}\). The circle is \(x^2+y^2=8\).

  **(d)** \(\Delta x=4-(-2)=6\) and \(\Delta y=3-3=0\). The slope is \(m=0\), so the line is horizontal through \(A\): \(y=3\). The distance is \(\sqrt{36+0}=6\). The circle is \((x+2)^2+(y-3)^2=36\).

  **(e)** \(\Delta x=0-(-3)=3\) and \(\Delta y=0-(-2)=2\). The slope is \(m=\tfrac{2}{3}\). The line passes through the origin \(B\), so \(y=\tfrac{2}{3}x\). The distance is \(\sqrt{9+4}=\sqrt{13}\). The circle is \((x+3)^2+(y+2)^2=13\).

  **(f)** \(\Delta x=-0.01-0.01=-0.02\) and \(\Delta y=0.05-(-0.01)=0.06\). The slope is \(m=\tfrac{0.06}{-0.02}=-3\). Point-slope form at \(A\) gives
  \[
  y+0.01=-3(x-0.01),\qquad y=-3x+0.02.
  \]
  The distance is \(\sqrt{0.0004+0.0036}=\sqrt{0.004}=0.02\sqrt{10}\). The circle is \((x-0.01)^2+(y+0.01)^2=0.004\).
provenance: handout-answer
steps:
  - The increments and the slope are computed for each pair.
  - Point-slope form at \(A\) gives the line.
  - The distance \(AB\) is the radius of the circle centered at \(A\).
verification:
  checks:
    - expr: (2, 3, Rational(3, 2), sqrt(13), linsolve([2*m + b - 0, 4*m + b - 3], m, b))
      expected: "(2, 3, Rational(3, 2), sqrt(13), FiniteSet((Rational(3, 2), -3)))"
    - expr: (-1, 3, Rational(3, -1), sqrt(10), linsolve([m + b + 1, 0*m + b - 2], m, b))
      expected: "(-1, 3, -3, sqrt(10), FiniteSet((-3, 2)))"
    - expr: (Rational(-2, -2), sqrt(8), linsolve([0*m + b, -2*m + b + 2], m, b))
      expected: "(1, 2*sqrt(2), FiniteSet((1, 0)))"
    - expr: (4 - (-2), 3 - 3, sqrt(6**2 + 0**2), linsolve([-2*m + b - 3, 4*m + b - 3], m, b))
      expected: "(6, 0, 6, FiniteSet((0, 3)))"
    - expr: (0 - (-3), 0 - (-2), sqrt(13), linsolve([-3*m + b + 2, 0*m + b - 0], m, b))
      expected: "(3, 2, sqrt(13), FiniteSet((Rational(2, 3), 0)))"
    - expr: (Rational(-1, 100) - Rational(1, 100), Rational(5, 100) + Rational(1, 100), sqrt((Rational(-1, 100) - Rational(1, 100))**2 + (Rational(5, 100) + Rational(1, 100))**2), linsolve([Rational(1, 100)*m + b + Rational(1, 100), -Rational(1, 100)*m + b - Rational(5, 100)], m, b))
      expected: "(-Rational(1, 50), Rational(3, 50), sqrt(10)/50, FiniteSet((-3, Rational(1, 50))))"
:::


::: exercise
id: l1-functions.handout-1-2-4
number: "1.2.4"
tier: basic
topics:
  - circles
  - graphs
statement: |
  Graph the circle \(x^2-10x+y^2=24\).
solution: |
  Complete the square in \(x\). The expression \(x^2-10x\) equals
  \[
  (x-5)^2-25,
  \]
  because \((x-5)^2=x^2-10x+25\). There is no linear term in \(y\), so \(y^2\) stays as it is. The equation becomes
  \[
  \begin{aligned}
  (x-5)^2-25+y^2 &= 24,\\
  (x-5)^2+y^2 &= 49.
  \end{aligned}
  \]
  This is \((x-h)^2+(y-k)^2=r^2\) with \(h=5\), \(k=0\) and \(r^2=49\). The center is \((5,0)\) and the radius is \(7\).

  The graph is the circle of radius \(7\) centered at \((5,0)\). Its key points are:

  - The rightmost and leftmost points are \((12,0)\) and \((-2,0)\), which are also the \(x\)-intercepts.
  - The top and bottom points are \((5,7)\) and \((5,-7)\).
  - Setting \(x=0\) gives \(y^2=24\), so the \(y\)-intercepts are \(\pm 2\sqrt{6}\), about \(\pm 4.9\).

  The circle is symmetric about the \(x\)-axis. It is not the graph of a function, because the line \(x=5\) meets it at two points.
provenance: written-for-site
steps:
  - Completing the square gives \((x-5)^2+y^2=49\).
  - The center is \((5,0)\) and the radius is \(7\).
  - The intercepts with the axes are \(x=-2\), \(x=12\) and \(y=\pm 2\sqrt{6}\).
verification:
  checks:
    - expr: expand((x - 5)**2 + y**2 - 49)
      expected: "x**2 - 10*x + y**2 - 24"
    - expr: solveset(Eq(x**2 - 10*x, 24), x)
      expected: "FiniteSet(-2, 12)"
    - expr: solveset(Eq(y**2, 24), y)
      expected: "FiniteSet(-2*sqrt(6), 2*sqrt(6))"
:::


::: exercise
id: l1-functions.handout-1-2-5
number: "1.2.5"
tier: standard
topics:
  - circles
  - graphs
statement: |
  Graph the circle \(x^2-6x+y^2-8y=0\).
solution: |
  Complete the square in each variable:
  \[
  \begin{aligned}
  x^2-6x &= (x-3)^2-9,\\
  y^2-8y &= (y-4)^2-16.
  \end{aligned}
  \]
  Substituting gives
  \[
  \begin{aligned}
  (x-3)^2-9+(y-4)^2-16 &= 0,\\
  (x-3)^2+(y-4)^2 &= 25.
  \end{aligned}
  \]
  The center is \((3,4)\) and the radius is \(5\).

  The origin satisfies the original equation, and its distance to the center is \(\sqrt{9+16}=5\), so the circle passes through the origin. Its key points are:

  - Setting \(y=0\) gives \(x^2-6x=0\), so the \(x\)-intercepts are \(0\) and \(6\).
  - Setting \(x=0\) gives \(y^2-8y=0\), so the \(y\)-intercepts are \(0\) and \(8\).
  - The leftmost and rightmost points are \((-2,4)\) and \((8,4)\). The lowest and highest points are \((3,-1)\) and \((3,9)\).

  The graph is the circle of radius \(5\) centered at \((3,4)\).
provenance: written-for-site
steps:
  - Completing the square in both variables gives \((x-3)^2+(y-4)^2=25\).
  - The circle passes through the origin.
  - The axis intercepts are \(0\), \(6\) and \(0\), \(8\).
verification:
  checks:
    - expr: expand((x - 3)**2 + (y - 4)**2 - 25)
      expected: "x**2 - 6*x + y**2 - 8*y"
    - expr: (solveset(Eq(x**2 - 6*x, 0), x), solveset(Eq(y**2 - 8*y, 0), y))
      expected: "(FiniteSet(0, 6), FiniteSet(0, 8))"
    - expr: sqrt((0 - 3)**2 + (0 - 4)**2)
      expected: "5"
:::


::: exercise
id: l1-functions.handout-1-2-6
number: "1.2.6"
tier: exam
topics:
  - circles
  - lines
statement: |
  Find the standard equation of the circle passing through \((-2,1)\) and tangent to the line \(3x-2y=6\) at the point \((4,3)\). Sketch. (Hint: the line through the center of the circle and the point of tangency is perpendicular to the tangent line.)
solution: |
  The point \((4,3)\) lies on the line, because \(3\cdot 4-2\cdot 3=6\). Solving for \(y\) gives \(y=\tfrac{3}{2}x-3\), so the tangent line has slope \(\tfrac{3}{2}\).

  The line through the center and \((4,3)\) is perpendicular to it, so its slope is \(-\tfrac{2}{3}\). Its equation is
  \[
  \begin{aligned}
  y-3 &= -\tfrac{2}{3}(x-4),\\
  y &= -\tfrac{2}{3}x+\tfrac{17}{3}.
  \end{aligned}
  \]
  The center \((h,k)\) lies on this line, so \(k=-\tfrac{2}{3}h+\tfrac{17}{3}\).

  The center is at the same distance from \((-2,1)\) and from \((4,3)\), because both points are on the circle. Equating the squared distances gives
  \[
  \begin{aligned}
  (h+2)^2+(k-1)^2 &= (h-4)^2+(k-3)^2,\\
  h^2+4h+4+k^2-2k+1 &= h^2-8h+16+k^2-6k+9,\\
  12h+4k &= 20,\\
  3h+k &= 5.
  \end{aligned}
  \]
  Substitute \(k=-\tfrac{2}{3}h+\tfrac{17}{3}\):
  \[
  \begin{aligned}
  3h-\tfrac{2}{3}h+\tfrac{17}{3} &= 5,\\
  \tfrac{7}{3}h &= -\tfrac{2}{3},\\
  h &= -\tfrac{2}{7}.
  \end{aligned}
  \]
  Then \(k=5-3h=5+\tfrac{6}{7}=\tfrac{41}{7}\). The center is \(\bigl(-\tfrac{2}{7},\tfrac{41}{7}\bigr)\).

  The squared radius is the squared distance from the center to \((4,3)\):
  \[
  r^2=\Bigl(4+\tfrac{2}{7}\Bigr)^2+\Bigl(3-\tfrac{41}{7}\Bigr)^2=\frac{900}{49}+\frac{400}{49}=\frac{1300}{49}.
  \]
  The distance to \((-2,1)\) gives the same value, \(\bigl(\tfrac{12}{7}\bigr)^2+\bigl(\tfrac{34}{7}\bigr)^2=\tfrac{144+1156}{49}=\tfrac{1300}{49}\).

  The circle is
  \[
  \Bigl(x+\frac{2}{7}\Bigr)^2+\Bigl(y-\frac{41}{7}\Bigr)^2=\frac{1300}{49}.
  \]
  For the sketch: the center is near \((-0.29,\,5.86)\) and the radius is \(\tfrac{10\sqrt{13}}{7}\approx 5.15\). The circle touches the line \(3x-2y=6\) at \((4,3)\) and lies on the side where \(3x-2y<6\), above the line. It passes through \((-2,1)\) on the left.
provenance: handout-answer
steps:
  - The tangent line has slope \(3/2\), so the radius to \((4,3)\) has slope \(-2/3\).
  - Equal distances to the two given points give \(3h+k=5\).
  - The center is \((-2/7,41/7)\) and \(r^2=1300/49\).
verification:
  checks:
    - expr: linsolve([3*h + k - 5, k + 2*h/3 - 17/3], h, k)
      expected: "FiniteSet((-Rational(2, 7), Rational(41, 7)))"
    - expr: ((4 + Rational(2, 7))**2 + (3 - Rational(41, 7))**2, (-2 + Rational(2, 7))**2 + (1 - Rational(41, 7))**2)
      expected: "(Rational(1300, 49), Rational(1300, 49))"
    - expr: (Abs(3*(-Rational(2, 7)) - 2*Rational(41, 7) - 6)/sqrt(13))**2
      expected: "Rational(1300, 49)"
:::


::: exercise
id: l1-functions.handout-1-3-1
number: "1.3.1"
tier: basic
topics:
  - domain
statement: |
  Find the domain of \(y=f(x)=\sqrt{2x-3}\).
solution: |
  The square root of a negative number is undefined in the reals, and \(\sqrt{0}=0\) is defined. The domain is the set of \(x\) with
  \[
  \begin{aligned}
  2x-3 &\geq 0,\\
  x &\geq \tfrac{3}{2}.
  \end{aligned}
  \]
  The domain is \(\{x\mid x\geq 3/2\}=[3/2,\infty)\).
provenance: handout-answer
steps:
  - The radicand \(2x-3\) must be at least \(0\).
  - Solving the inequality gives \(x\geq 3/2\).
verification:
  checks:
    - expr: solveset(2*x - 3 >= 0, x, Interval(-oo, oo))
      expected: "Interval(Rational(3, 2), oo)"
    - expr: (2*Rational(3, 2) - 3, 2*1 - 3)
      expected: "(0, -1)"
:::


::: exercise
id: l1-functions.handout-1-3-4
number: "1.3.4"
tier: standard
topics:
  - domain
statement: |
  Find the domain of \(y=f(x)=\sqrt{-1/x}\).
solution: |
  Two conditions apply. The fraction \(-1/x\) needs \(x\neq 0\), and the root needs \(-1/x\geq 0\).

  The sign of \(-1/x\) depends on the sign of \(x\):

  - If \(x>0\), then \(1/x>0\), so \(-1/x<0\). The root is undefined.
  - If \(x<0\), then \(1/x<0\), so \(-1/x>0\). The root is defined.

  The value \(-1/x\) is never \(0\), so no endpoint needs a separate check. The domain is \(\{x\mid x<0\}=(-\infty,0)\).
provenance: handout-answer
steps:
  - The fraction needs \(x\neq 0\), and the root needs \(-1/x\geq 0\).
  - A positive \(x\) makes \(-1/x\) negative, and a negative \(x\) makes it positive.
verification:
  checks:
    - expr: solveset(-1/x >= 0, x, Interval(-oo, oo))
      expected: "Interval.open(-oo, 0)"
    - expr: (-1/Rational(-4), -1/Rational(4))
      expected: "(Rational(1, 4), -Rational(1, 4))"
:::


::: exercise
id: l1-functions.handout-1-3-5
number: "1.3.5"
tier: basic
topics:
  - domain
statement: |
  Find the domain of \(y=f(x)=\sqrt[3]{x}\), the cube root of \(x\).
solution: |
  The cube root of a negative number is defined in the reals. For example, \((-2)^3=-8\), so the cube root of \(-8\) is \(-2\). The cube root of \(0\) is \(0\), and the cube root of a positive number is positive.

  Every real \(x\) has a cube root, and there is no division. The domain is every real number, \((-\infty,\infty)\).

  This differs from the square root, whose domain is \([0,\infty)\). An odd root puts no sign condition on \(x\).
provenance: handout-answer
steps:
  - The cube root of a negative number is a negative number.
  - Every real \(x\) is allowed, so the domain is all real numbers.
verification:
  checks:
    - expr: (real_root(-8, 3), real_root(0, 3), real_root(27, 3))
      expected: "(-2, 0, 3)"
    - expr: (real_root(-8, 3))**3
      expected: "-8"
:::


::: exercise
id: l1-functions.handout-1-3-7
number: "1.3.7"
tier: standard
topics:
  - domain
  - circles
statement: |
  Find the domain of \(y=f(x)=\sqrt{r^2-(x-h)^2}\), where \(r\) is a positive constant.
solution: |
  The root needs \(r^2-(x-h)^2\geq 0\), which says \((x-h)^2\leq r^2\). Factor the difference of squares:
  \[
  r^2-(x-h)^2=\bigl(r-(x-h)\bigr)\bigl(r+(x-h)\bigr)=(r+h-x)(r-h+x).
  \]
  The product is nonnegative in two cases.

  - Both factors are nonnegative: \(x\leq h+r\) and \(x\geq h-r\). This gives \(h-r\leq x\leq h+r\).
  - Both factors are nonpositive: \(x\geq h+r\) and \(x\leq h-r\). Since \(r>0\), we have \(h-r<h+r\), so no real \(x\) satisfies both.

  The domain is
  \[
  \{x\mid h-r\leq x\leq h+r\}=[h-r,\,h+r].
  \]
  At the center \(x=h\) the radicand is \(r^2>0\). The graph of \(f\) is the upper semicircle of the circle of radius \(r\) centered at \((h,0)\), and the domain is the interval of \(x\)-values that circle covers.
provenance: handout-answer
steps:
  - The radicand factors as \((r+h-x)(r-h+x)\).
  - The product is nonnegative for \(h-r\leq x\leq h+r\), and the other case is empty.
verification:
  checks:
    - expr: factor(r**2 - (x - h)**2)
      expected: "-(x - h - r)*(x - h + r)"
    - expr: solveset(Eq(r**2 - (x - h)**2, 0), x)
      expected: "FiniteSet(h - r, h + r)"
    - expr: ((r**2 - (x - h)**2).subs(x, h), (r**2 - (x - h)**2).subs(x, h + 2*r))
      expected: "(r**2, -3*r**2)"
:::


::: exercise
id: l1-functions.handout-1-3-8
number: "1.3.8"
tier: standard
topics:
  - domain
statement: |
  Find the domain of \(y=f(x)=\sqrt{1-(1/x)}\).
solution: |
  Two conditions apply. The fraction \(1/x\) needs \(x\neq 0\), and the root needs \(1-\tfrac{1}{x}\geq 0\).

  Write the radicand as one fraction:
  \[
  1-\frac{1}{x}=\frac{x-1}{x}.
  \]
  The quotient is nonnegative when the numerator and the denominator have the same sign, or when the numerator is \(0\).

  - If \(x<0\), then \(x-1<0\) and \(x<0\). The quotient is positive.
  - If \(0<x<1\), then \(x-1<0\) and \(x>0\). The quotient is negative, so these \(x\) are excluded.
  - If \(x=1\), the numerator is \(0\), so the radicand is \(0\) and the root is defined.
  - If \(x>1\), then \(x-1>0\) and \(x>0\). The quotient is positive.

  The domain is
  \[
  \{x\mid x<0 \text{ or } x\geq 1\}=(-\infty,0)\cup[1,\infty).
  \]
provenance: handout-answer
steps:
  - The radicand equals \((x-1)/x\), and \(x\neq 0\).
  - The sign of the quotient is checked on \(x<0\), \(0<x<1\), \(x=1\) and \(x>1\).
verification:
  checks:
    - expr: simplify(1 - 1/x - (x - 1)/x)
      expected: "0"
    - expr: solveset(1 - 1/x >= 0, x, Interval(-oo, oo))
      expected: "Union(Interval.open(-oo, 0), Interval(1, oo))"
    - expr: ((1 - 1/x).subs(x, Rational(1, 2)), (1 - 1/x).subs(x, -1), (1 - 1/x).subs(x, 2))
      expected: "(-1, 2, Rational(1, 2))"
:::


::: exercise
id: l1-functions.handout-1-3-9
number: "1.3.9"
tier: standard
topics:
  - domain
statement: |
  Find the domain of \(y=f(x)=1/\sqrt{1-(3x)^2}\).
solution: |
  The square root is in the denominator. The root needs a radicand that is at least \(0\), and the denominator cannot be \(0\). Both conditions together say that the radicand is strictly positive:
  \[
  1-(3x)^2>0.
  \]
  Factor \(1-9x^2=(1-3x)(1+3x)\). The product is positive in two cases.

  - Both factors are positive: \(x<\tfrac{1}{3}\) and \(x>-\tfrac{1}{3}\). This gives \(-\tfrac{1}{3}<x<\tfrac{1}{3}\).
  - Both factors are negative: \(x>\tfrac{1}{3}\) and \(x<-\tfrac{1}{3}\). No real \(x\) satisfies both.

  At \(x=\pm\tfrac{1}{3}\) the denominator is \(0\), so both endpoints are excluded. The domain is
  \[
  \{x\mid -\tfrac{1}{3}<x<\tfrac{1}{3}\}=\bigl(-\tfrac{1}{3},\tfrac{1}{3}\bigr).
  \]
provenance: handout-answer
steps:
  - The radicand must be strictly positive, because the root is a denominator.
  - The factorisation \((1-3x)(1+3x)>0\) gives \(-1/3<x<1/3\).
verification:
  checks:
    - expr: solveset(1 - (3*x)**2 > 0, x, Interval(-oo, oo))
      expected: "Interval.open(-Rational(1, 3), Rational(1, 3))"
    - expr: expand((1 - 3*x)*(1 + 3*x))
      expected: "1 - 9*x**2"
    - expr: (1 - (3*Rational(1, 3))**2, 1 - (3*Rational(1, 2))**2)
      expected: "(0, -Rational(5, 4))"
:::


::: exercise
id: l1-functions.handout-1-3-10
number: "1.3.10"
tier: standard
topics:
  - domain
statement: |
  Find the domain of \(y=f(x)=\sqrt{x}+\dfrac{1}{x-1}\).
solution: |
  Each term brings its own condition, and the domain keeps the \(x\) that satisfy both.

  - The term \(\sqrt{x}\) needs \(x\geq 0\).
  - The term \(\tfrac{1}{x-1}\) needs \(x-1\neq 0\), so \(x\neq 1\).

  Remove the single point \(x=1\) from the ray \([0,\infty)\). The domain is
  \[
  \{x\mid x\geq 0 \text{ and } x\neq 1\}=[0,1)\cup(1,\infty).
  \]
provenance: handout-answer
steps:
  - The square root requires \(x\geq 0\).
  - The fraction requires \(x\neq 1\).
verification:
  checks:
    - expr: solveset(x >= 0, x, Interval(-oo, oo)) - FiniteSet(1)
      expected: "Union(Interval.Ropen(0, 1), Interval.open(1, oo))"
    - expr: solveset(Eq(x - 1, 0), x)
      expected: "FiniteSet(1)"
:::


::: exercise
id: l1-functions.handout-1-3-12
number: "1.3.12"
tier: standard
topics:
  - domain
statement: |
  Find the domain of \(h(x)=\dfrac{x^2-9}{x-3}\) if \(x\neq 3\), and \(h(x)=6\) if \(x=3\).
solution: |
  The domain contains every \(x\) at which the definition assigns a value.

  - For \(x\neq 3\) the denominator \(x-3\) is not \(0\), so the formula \(\dfrac{x^2-9}{x-3}\) gives a value.
  - For \(x=3\) the second line of the definition assigns the value \(h(3)=6\).

  The formula alone is undefined at \(x=3\), because it divides by \(0\). The definition does not use the formula at \(x=3\), so that point is not excluded. Every real number belongs to the domain.

  For \(x\neq 3\) the numerator factors and the factor \(x-3\) cancels:
  \[
  \frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}=x+3.
  \]
  At \(x=3\) the value is \(6=3+3\), so \(h(x)=x+3\) for every real \(x\).

  The domain is all real numbers.
provenance: handout-answer
steps:
  - The formula is defined for every \(x\neq 3\).
  - The second line of the definition assigns \(h(3)=6\).
  - Every real number is in the domain, and \(h(x)=x+3\) everywhere.
verification:
  checks:
    - expr: solve(Eq(x - 3, 0), x)
      expected: "[3]"
    - expr: cancel((x**2 - 9)/(x - 3))
      expected: "x + 3"
    - expr: (x + 3).subs(x, 3)
      expected: "6"
:::


::: exercise
id: l1-functions.handout-1-3-13
number: "1.3.13"
tier: standard
topics:
  - composition
  - domain
statement: |
  Suppose \(f(x)=3x-9\) and \(g(x)=\sqrt{x}\). What is the domain of the composition \((g\circ f)(x)\)? (Recall \((g\circ f)(x)=g(f(x))\).) What is the domain of \((f\circ g)(x)\)?
solution: |
  **The composition \(g\circ f\).** First evaluate the inner function \(f\), then apply \(g\):
  \[
  (g\circ f)(x)=g(3x-9)=\sqrt{3x-9}.
  \]
  The function \(f\) is defined for every real \(x\). The outer function \(g\) needs its input to be at least \(0\), so
  \[
  \begin{aligned}
  3x-9 &\geq 0,\\
  x &\geq 3.
  \end{aligned}
  \]
  The domain of \(g\circ f\) is \(\{x\mid x\geq 3\}=[3,\infty)\).

  **The composition \(f\circ g\).** Now \(g\) is the inner function:
  \[
  (f\circ g)(x)=f(\sqrt{x})=3\sqrt{x}-9.
  \]
  The inner function \(\sqrt{x}\) needs \(x\geq 0\). The outer function \(f\) accepts every real number, so it adds no condition. The domain of \(f\circ g\) is \(\{x\mid x\geq 0\}=[0,\infty)\).

  The domains are \([3,\infty)\) for \(g\circ f\) and \([0,\infty)\) for \(f\circ g\).
provenance: handout-answer
steps:
  - \((g\circ f)(x)=\sqrt{3x-9}\), which needs \(x\geq 3\).
  - \((f\circ g)(x)=3\sqrt{x}-9\), which needs \(x\geq 0\).
verification:
  checks:
    - expr: solveset(3*x - 9 >= 0, x, Interval(-oo, oo))
      expected: "Interval(3, oo)"
    - expr: solveset(x >= 0, x, Interval(-oo, oo))
      expected: "Interval(0, oo)"
    - expr: (sqrt(3*x - 9), 3*sqrt(x) - 9)
      expected: "(sqrt(3*x - 9), 3*sqrt(x) - 9)"
:::


::: exercise
id: l1-functions.handout-1-3-14
number: "1.3.14"
tier: standard
topics:
  - domain
  - modelling
statement: |
  A farmer wants to build a fence along a river. He has \(500\) feet of fencing and wants to enclose a rectangular pen on three sides (with the river providing the fourth side). If \(x\) is the length of the side perpendicular to the river, determine the area of the pen as a function of \(x\). What is the domain of this function?
solution: |
  Two sides of the pen are perpendicular to the river, each of length \(x\). The third fenced side is parallel to the river. It uses the rest of the fencing, so its length is
  \[
  500-2x.
  \]
  The area is the product of the two side lengths:
  \[
  A(x)=x(500-2x)=500x-2x^2.
  \]
  Both lengths must be nonnegative.

  - The length \(x\) satisfies \(x\geq 0\).
  - The length \(500-2x\) satisfies \(500-2x\geq 0\), so \(x\leq 250\).

  At \(x=0\) and at \(x=250\) the pen has area \(0\). The domain is \(\{x\mid 0\leq x\leq 250\}=[0,250]\).

  The area is \(A(x)=x(500-2x)\) on the domain \([0,250]\).
provenance: handout-answer
steps:
  - The side parallel to the river has length \(500-2x\).
  - The area is \(x(500-2x)\).
  - Both side lengths are nonnegative exactly for \(0\leq x\leq 250\).
verification:
  checks:
    - expr: expand(x*(500 - 2*x))
      expected: "500*x - 2*x**2"
    - expr: solveset(x*(500 - 2*x) >= 0, x, Interval(-oo, oo))
      expected: "Interval(0, 250)"
    - expr: (2*100 + (500 - 2*100), (x*(500 - 2*x)).subs(x, 0), (x*(500 - 2*x)).subs(x, 250))
      expected: "(500, 0, 0)"
:::


::: exercise
id: l1-functions.handout-1-3-15
number: "1.3.15"
tier: standard
topics:
  - domain
  - modelling
statement: |
  A can in the shape of a cylinder is to be made with a total of \(100\) square centimeters of material in the side, top, and bottom; the manufacturer wants the can to hold the maximum possible volume. Write the volume as a function of the radius \(r\) of the can; find the domain of the function.
solution: |
  Let \(h\) be the height of the can. The top and bottom are two discs of area \(\pi r^2\), and the side is a rectangle of width \(2\pi r\) and height \(h\). The material is
  \[
  2\pi r^2+2\pi r h=100.
  \]
  Solve for the height:
  \[
  \begin{aligned}
  2\pi r h &= 100-2\pi r^2,\\
  h &= \frac{50-\pi r^2}{\pi r}.
  \end{aligned}
  \]
  The volume is the area of the base times the height:
  \[
  V=\pi r^2 h=\pi r^2\cdot\frac{50-\pi r^2}{\pi r}=r\,(50-\pi r^2).
  \]
  The radius satisfies \(r>0\), and the height cannot be negative, so \(50-\pi r^2\geq 0\). This gives \(r^2\leq 50/\pi\), so \(r\leq\sqrt{50/\pi}\). At \(r=\sqrt{50/\pi}\) the height is \(0\) and the volume is \(0\), so that endpoint is kept as the limiting case.

  The volume is \(V(r)=r(50-\pi r^2)\) on the domain \(\{r\mid 0<r\leq\sqrt{50/\pi}\}\).
provenance: handout-answer
steps:
  - The material condition is \(2\pi r^2+2\pi rh=100\).
  - The height is \(h=(50-\pi r^2)/(\pi r)\).
  - The volume is \(r(50-\pi r^2)\), for \(0<r\leq\sqrt{50/\pi}\).
verification:
  checks:
    - expr: solve(Eq(2*pi*r**2 + 2*pi*r*h, 100), h)
      expected: "[(50 - pi*r**2)/(pi*r)]"
    - expr: simplify(pi*r**2*((50 - pi*r**2)/(pi*r)))
      expected: "r*(50 - pi*r**2)"
    - expr: (50 - pi*r**2).subs(r, sqrt(50/pi))
      expected: "0"
:::


::: exercise
id: l1-functions.handout-1-3-16
number: "1.3.16"
tier: standard
topics:
  - domain
  - modelling
statement: |
  A can in the shape of a cylinder is to be made to hold a volume of one liter (\(1000\) cubic centimeters). The manufacturer wants to use the least possible material for the can. Write the surface area of the can (total of the top, bottom, and side) as a function of the radius \(r\) of the can; find the domain of the function.
solution: |
  Let \(h\) be the height. The volume condition is
  \[
  \pi r^2 h=1000,
  \]
  so the height is
  \[
  h=\frac{1000}{\pi r^2}.
  \]
  The surface area is two discs plus the side:
  \[
  \begin{aligned}
  A &= 2\pi r^2+2\pi r h\\
  &= 2\pi r^2+2\pi r\cdot\frac{1000}{\pi r^2}\\
  &= 2\pi r^2+\frac{2000}{r}.
  \end{aligned}
  \]
  Every radius \(r>0\) gives a can of volume \(1000\), with the height \(\tfrac{1000}{\pi r^2}\) positive. A radius \(r\leq 0\) has no meaning. The domain is \(\{r\mid r>0\}=(0,\infty)\).

  The area is \(A(r)=2\pi r^2+\dfrac{2000}{r}\) on the domain \((0,\infty)\).
provenance: handout-answer
steps:
  - The volume condition gives \(h=1000/(\pi r^2)\).
  - Substituting into \(2\pi r^2+2\pi rh\) gives \(2\pi r^2+2000/r\).
  - Every \(r>0\) is allowed.
verification:
  checks:
    - expr: solve(Eq(pi*r**2*h, 1000), h)
      expected: "[1000/(pi*r**2)]"
    - expr: simplify(2*pi*r**2 + 2*pi*r*(1000/(pi*r**2)))
      expected: "2*pi*r**2 + 2000/r"
    - expr: simplify(pi*r**2*(1000/(pi*r**2)))
      expected: "1000"
:::


::: exercise
id: l1-functions.sheet-1-4-7
number: "sheet 1 exercise 4.7"
tier: basic
topics:
  - functions
  - domain
  - graphs
statement: |
  Give the domain of \(f(x)=x^2-1\) and sketch its graph.
solution: |
  The expression \(x^2-1\) is defined for every real \(x\). The domain of \(f\) is every real number.

  The graph is the parabola \(y=x^2\) moved down by \(1\). Its key facts are:

  - The vertex is \((0,-1)\), and the parabola opens upward.
  - The \(y\)-intercept is \(f(0)=-1\).
  - The \(x\)-intercepts solve \(x^2-1=(x-1)(x+1)=0\), so they are \(x=-1\) and \(x=1\).
  - The graph is symmetric about the \(y\)-axis, because \((-x)^2-1=x^2-1\).
  - The function decreases for \(x\leq 0\) and increases for \(x\geq 0\). It passes through \((\pm 2,3)\).

  The smallest value is \(f(0)=-1\), and \(x^2\) takes every value from \(0\) upward, so the range is every real \(y\geq -1\).
provenance: written-for-site
steps:
  - The domain is stated in a full sentence as every real number.
  - The vertex, intercepts and symmetry are described, together with the range.
verification:
  checks:
    - expr: solveset(Eq(x**2 - 1, 0), x)
      expected: "FiniteSet(-1, 1)"
    - expr: (x**2 - 1).subs(x, 0)
      expected: "-1"
    - expr: expand((x**2 - 1).subs(x, -x) - (x**2 - 1))
      expected: "0"
    - expr: (solveset(Eq(diff(x**2 - 1, x), 0), x), (x**2 - 1).subs(x, 2), (x**2 - 1).subs(x, -2))
      expected: "(FiniteSet(0), 3, 3)"
:::
