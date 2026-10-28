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
