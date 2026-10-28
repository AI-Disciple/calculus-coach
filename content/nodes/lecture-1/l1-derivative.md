---
id: l1-derivative
lecture: 1
order: 8
title: The derivative and the tangent line
prerequisites: [l1-limits]
sources:
  - { source: handout, section: "2.1", page: 31 }
  - { source: handout, section: "2.2", page: 36 }
  - { source: handout, section: "2.4", page: 48 }
  - { source: lecture-notes-1, page: 2 }
  - { source: lecture-notes-3, page: 1 }
  - { source: sheet-1, page: 1 }
  - { source: midterm-mock-1, page: 1 }
examWeight: low
status: reviewed
notation: |
  The notes write the derivative as \(f'\) and as \(\dot f\). They also write \(\frac{df}{dx}\). The handout writes a step as \(\Delta x\) and the derivative as \(\frac{dy}{dx}\). The curly-d form some texts use, \(\frac{\partial f}{\partial x}\), is the same derivative.
---

::: section
title: The derivative from the definition
:::

::: formal-statement
kind: definition
title: Differentiable at a point
source:
  source: lecture-notes-1
  page: 2
text: |
  For \(f:\mathbb{R}\to\mathbb{R}\), \(f\) is **differentiable** at \(x_0\) when the following limit exists. These writings are the same quotient.
  \[
  \lim_{x\to x_0}\frac{f(x)-f(x_0)}{x-x_0}
  =
  \lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}
  =
  \lim_{\Delta x\to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}.
  \]
  The **derivative** of \(f\) at \(x_0\) is that limit. It is written \(f'(x_0)\) and \(\dot f(x_0)\). It is also written \(\frac{df}{dx}(x_0)\). This is the steepness of \(f\) at \(x_0\).
:::

::: plain-explanation
text: |
  The fraction is the slope of the line through two points of the graph. As \(h\) shrinks, the second point slides onto the first, and the slope becomes the slope of the tangent line. That **tangent** \(t\) satisfies \(t(x_0)=f(x_0)\) and \(t'(x_0)=f'(x_0)\).
:::

::: formal-statement
kind: definition
title: The derivative function
source:
  source: handout
  section: "2.4"
  page: 48
text: |
  The **derivative** of a function \(f\), denoted \(f'\), is
  \[
  f'(x)=\lim_{\Delta x\to 0}\frac{f(x+\Delta x)-f(x)}{\Delta x}.
  \]
  Where this limit does not exist, \(f\) has no derivative at that input.
:::

::: plain-explanation
text: |
  ### The step and the chord

  \(\Delta x\) is the horizontal step from \(x\) to a nearby point on the graph, and the fraction is the slope of that chord. Write \(\Delta y=f(x+\Delta x)-f(x)\). Then \(\frac{dy}{dx}\) is the limit of \(\frac{\Delta y}{\Delta x}\).

  ### The derivative of a line

  For the line \(f(x)=mx+b\), the difference \(f(x+\Delta x)-f(x)\) equals \(m\Delta x\), so the quotient equals \(m\) whenever \(\Delta x\neq 0\). The derivative is the constant \(m\).
:::

::: worked-example
title: Derivative of \(t^2\)
problem: |
  Use the definition to find the derivative of \(f(t)=t^2\).
solution: |
  The difference quotient at \(t\), with step \(\Delta t\neq 0\), is
  \[
  \begin{aligned}
  \frac{(t+\Delta t)^2-t^2}{\Delta t}\\
  &=\frac{t^2+2t\Delta t+(\Delta t)^2-t^2}{\Delta t}\\
  &=2t+\Delta t.
  \end{aligned}
  \]
  The limit as \(\Delta t\to 0\) equals \(2t\). Therefore \(f'(t)=2t\).
:::

::: guided-example
title: Derivative of \(1/x\)
problem: |
  Use the definition to find the derivative of \(f(x)=1/x\) for \(x\neq 0\).
steps:
  - |
    The difference quotient at \(x\), with step \(\Delta x\neq 0\), is
    \[
    \frac{1}{\Delta x}\left(\frac{1}{x+\Delta x}-\frac{1}{x}\right).
    \]
  - |
    The difference of the fractions, over the common denominator \(x(x+\Delta x)\), equals
    \[
    \frac{-\Delta x}{x(x+\Delta x)}.
    \]
  - |
    Dividing by \(\Delta x\) leaves
    \[
    \frac{-1}{x(x+\Delta x)}.
    \]
  - |
    The limit as \(\Delta x\to 0\) equals \(-\frac{1}{x^2}\). Therefore \(f'(x)=-\frac{1}{x^2}\) for \(x\neq 0\).
:::

::: worked-example
title: Velocity of a falling ball
problem: |
  A ball is dropped from a height of \(100\) m. Its height in metres after \(t\) seconds is \(h(t)=100-4.9t^2\). Find the velocity at \(t=2\).
solution: |
  The height at that instant is \(h(2)=100-4.9\cdot 4=80.4\). With a time step \(\Delta t\neq 0\),
  \[
  \begin{aligned}
  h(2+\Delta t)&=100-4.9(2+\Delta t)^2\\
  &=80.4-19.6\Delta t-4.9(\Delta t)^2.
  \end{aligned}
  \]
  The difference quotient is \(-19.6-4.9\Delta t\). The limit as \(\Delta t\to 0\) equals \(-19.6\). The velocity at \(t=2\) is \(19.6\) m/s downward.
:::

::: trap
text: |
  The function \(|x|\) has no derivative at the corner \(x=0\).

  ### Away from the corner

  - Fix \(a>0\). For a step \(h\) small enough that \(a+h>0\), the difference quotient equals \(\frac{(a+h)-a}{h}=1\), so the derivative equals \(1\).
  - Fix \(a<0\). For a step \(h\) small enough that \(a+h<0\), the quotient equals \(\frac{(-a-h)-(-a)}{h}=-1\), so the derivative equals \(-1\).

  ### At the corner

  At \(0\) the quotient equals

  - \(1\) when \(h>0\),
  - \(-1\) when \(h<0\).

  Those one-sided limits disagree, so \(f'(0)\) does not exist.

  ### The average of the slopes

  The average of the two slopes is \(0\). That value fails as a derivative, since the right-hand limit is \(1\) and the left-hand limit is \(-1\).

  ### A cusp

  The graph of \(x^{2/3}\), using the real cube root so that \(x^{2/3}=(x^{1/3})^2\), has a cusp at \(0\). The difference quotient at \(0\) is \(h^{-1/3}\).

  - From the right it grows through large positive values.
  - From the left it falls through large negative values.

  There is no finite limit, so the derivative at that cusp does not exist.
:::

::: trap
text: |
  The derivative is the **limit** of the difference quotient. For \(f(t)=t^2\) the quotient equals \(2t+\Delta t\). That value still changes with the step \(\Delta t\). The limit as \(\Delta t\to 0\) equals \(2t\), and that limit is \(f'(t)\). An answer of \(2t+\Delta t\) still contains the step.
:::

::: key-points
text: |
  - \(f'(x_0)=\lim_{h\to 0}\frac{f(x_0+h)-f(x_0)}{h}\), when that limit exists. \(f'(x)\) is the same limit with \(\Delta x\) as the step.
  - The limit has to be taken, so an answer such as \(2t+\Delta t\) that still contains the step is not the derivative.
  - Where the one-sided limits of the quotient disagree, as for \(|x|\) at \(0\), or where there is no finite limit, as for \(x^{2/3}\) at \(0\), there is no derivative.
:::

::: concept-question
id: l1-derivative.q-a45f8096
question: |
  Let \(f(x)=|x|\). What is true about \(f'(0)\)?
options:
  - text: It does not exist.
    correct: true
  - text: It equals \(0\).
  - text: It equals \(1\).
  - text: It equals \(-1\).
explanation: |
  At \(0\) the difference quotient is
  \[
  \frac{|h|}{h}.
  \]
  It equals \(1\) from the right and \(-1\) from the left. The two one-sided limits differ, so the limit does not exist and neither does \(f'(0)\).

  - The value \(0\) comes from averaging the slopes \(1\) and \(-1\), but an average is not a limit. It also comes from the thought that the minimum at \(0\) gives a horizontal tangent, but a horizontal tangent needs \(f'(0)\) to exist first.
  - The value \(1\) is the slope of the branch \(y=x\) for \(x\geq 0\), and it ignores the branch \(y=-x\) for \(x<0\), which has slope \(-1\).
:::

::: exercise
id: l1-derivative.derivative-of-square
tier: basic
topics: [derivative-definition]
statement: |
  Use the definition to compute \(f'(3)\) for \(f(x) = x^2\).
solution: |
  The difference quotient is
  \[
  \begin{aligned}
  \frac{(3 + h)^2 - 9}{h} &= \frac{6h + h^2}{h}\\
  &= 6 + h.
  \end{aligned}
  \]
  As \(h \to 0\) it tends to 6, so \(f'(3) = 6\).
provenance: written-for-site
verification:
  checks:
    - expr: limit(((3 + h)**2 - 9) / h, h, 0)
      expected: "6"
:::

::: section
title: The tangent line
:::

::: formal-statement
kind: definition
title: The tangent line
source:
  source: lecture-notes-1
  page: 2
text: |
  The **tangent line** to \(f\) at \(x_0\) is
  \[
  t(x)=f'(x_0)(x-x_0)+f(x_0).
  \]
  It satisfies
  \[
  t(x_0)=f(x_0),\qquad t'(x_0)=f'(x_0).
  \]
  If \(\alpha\) is the angle between this tangent and the \(x\)-axis, then
  \[
  f'(x_0)=\tan(\alpha).
  \]
:::

::: plain-explanation
text: |
  In point-slope form the same line is
  \[
  (y-f(x_0))=f'(x_0)(x-x_0).
  \]
  The slope equals \(\tan(\alpha)\), where \(\alpha\) is the angle the line makes with the \(x\)-axis.
:::

::: worked-example
title: Tangent to \(y=x^2\) at \(x=1\)
problem: |
  Find the tangent line to \(f(x)=x^2\) at \(x=1\).
solution: |
  The value on the graph is \(f(1)=1\). The derivative of \(t^2\) is \(2t\), so with input \(x\) the derivative is \(f'(x)=2x\), and the slope is \(f'(1)=2\). The tangent is
  \[
  t(x)=2(x-1)+1,
  \]
  which simplifies to \(y=2x-1\). This line satisfies
  \[
  t(1)=1=f(1),\qquad t'(1)=2=f'(1).
  \]
:::

::: worked-example
title: Slope on a semicircle
problem: |
  Let \(f(x)=\sqrt{625-x^2}\). Find \(f'(x)\), and find the tangent slope at \(x=7\).
solution: |
  The value at \(x=7\) is \(f(7)=\sqrt{625-49}=\sqrt{576}=24\). The difference quotient is
  \[
  \frac{\sqrt{625-(x+h)^2}-\sqrt{625-x^2}}{h}.
  \]
  Multiply the numerator and the denominator by the **conjugate** \(\sqrt{625-(x+h)^2}+\sqrt{625-x^2}\). The new numerator is
  \[
  \begin{aligned}
  &\bigl(625-(x+h)^2\bigr)-\bigl(625-x^2\bigr)\\
  &=-2xh-h^2.
  \end{aligned}
  \]
  For \(h\neq 0\) the quotient equals
  \[
  \frac{-2x-h}{\sqrt{625-(x+h)^2}+\sqrt{625-x^2}}.
  \]
  The limit as \(h\to 0\) is
  \[
  \frac{-2x}{2\sqrt{625-x^2}}=\frac{-x}{\sqrt{625-x^2}}.
  \]
  So \(f'(x)=\frac{-x}{\sqrt{625-x^2}}\). At \(x=7\) the slope is \(f'(7)=-\frac{7}{24}\). The chord from \(x=7\) to \(x=7.1\) has slope about \(-0.294\). The radius from the origin to \((7,24)\) has slope \(\frac{24}{7}\). The product of that slope with \(f'(7)\) is \(-1\), so on this circle the tangent is perpendicular to the radius.
:::

::: trap
text: |
  A **horizontal tangent** at \(x_0\) means \(f'(x_0)=0\).

  - For \(f(x)=x^2\) the difference quotient at \(0\) is \(\frac{h^2}{h}=h\), and the limit is \(0\), so the tangent line is \(y=0\).
  - For \(g(x)=x^2+3\) the difference quotient at \(0\) is \(\frac{(h^2+3)-3}{h}=h\), and the limit is \(0\), so the tangent line is \(y=3\). The height \(g(0)\) equals \(3\).

  A test that requires the height to be \(0\) rejects \(g\). The tangent at \(0\) is horizontal, and \(g'(0)=0\).
:::

::: trap
text: |
  On a circle centred at the origin, the tangent is perpendicular to the radius. For \(f(x)=\sqrt{625-x^2}\) at \(x=7\), the radius slope is \(\frac{24}{7}\) and the tangent slope is \(-\frac{7}{24}\). Their product is \(-1\).

  For \(f(x)=x^2\) at \(x=1\), the line from the origin to \((1,1)\) has slope \(1\), and the tangent slope is \(2\). The product of those slopes is \(2\). Perpendicular lines have slope product \(-1\). The product \(2\) fails that test.
:::

::: key-points
text: |
  - The tangent to \(f\) at \(x_0\) is \(t(x)=f'(x_0)(x-x_0)+f(x_0)\), with \(t(x_0)=f(x_0)\) and \(t'(x_0)=f'(x_0)\). Its slope is \(f'(x_0)=\tan(\alpha)\).
  - A horizontal tangent means \(f'(x_0)=0\), and the line is \(y=f(x_0)\), not necessarily \(y=0\).
  - On a circle centred at the origin the tangent is perpendicular to the radius. For \(x^2\) at \(x=1\) this fails: the slope product is \(2\), not \(-1\).
:::

::: concept-question
id: l1-derivative.q-7d34b6f9
question: |
  The tangent at \(x_0\) makes an angle \(\alpha=\pi/4\) with the positive \(x\)-axis. What is \(f'(x_0)\)?
options:
  - text: |
      \(1\)
    correct: true
  - text: |
      \(\frac{\pi}{4}\)
  - text: |
      \(\frac{\sqrt{2}}{2}\)
  - text: |
      \(0\)
explanation: |
  The derivative equals \(\tan(\alpha)\). Here \(\alpha=\pi/4\), so
  \[
  f'(x_0)=\tan(\pi/4)=1.
  \]
  The value \(\pi/4\) is the angle, and \(\sqrt{2}/2\) is \(\sin(\pi/4)\).
:::

::: exercise
id: l1-derivative.sheet-1-4-1
number: "sheet 1 exercise 4.1"
tier: standard
topics: [tangent-line, derivative-definition]
statement: |
  Find an equation for the tangent line to the graph of \(f(x)=5-x-3x^2\) at the point \(x=2\). Compute \(f(2)\) and \(f'(2)\) from the definition.
solution: |
  The value is \(f(2)=5-2-3\cdot 4=-9\). Expand
  \[
  \begin{aligned}
  f(2+h)&=5-(2+h)-3(2+h)^2\\
  &=-9-13h-3h^2.
  \end{aligned}
  \]
  For \(h\neq 0\) the difference quotient is
  \[
  \begin{aligned}
  \frac{f(2+h)-f(2)}{h}&=\frac{-13h-3h^2}{h}\\
  &=-13-3h.
  \end{aligned}
  \]
  The limit as \(h\to 0\) equals \(-13\), so \(f'(2)=-13\). The tangent line is
  \[
  y=-9-13(x-2),
  \]
  which simplifies to \(y=-13x+17\). At \(x=2\) this line has value \(-9\) and slope \(-13\).
provenance: written-for-site
verification:
  checks:
    - expr: 5 - 2 - 3*2**2
      expected: "-9"
    - expr: limit(((5 - (2 + h) - 3*(2 + h)**2) - (5 - 2 - 3*2**2))/h, h, 0)
      expected: "-13"
    - expr: -9 + (-13)*(x - 2)
      expected: "-13*x + 17"
:::

::: exercise
id: l1-derivative.sheet-1-4-2
number: "sheet 1 exercise 4.2"
tier: standard
topics: [horizontal-tangent, derivative-definition]
statement: |
  Find a value of \(a\) so that the graph of \(f(x)=x^2+ax-3\) has a horizontal tangent line at \(x=4\). Compute the derivative from the definition.
solution: |
  A horizontal tangent at \(x=4\) means \(f'(4)=0\). The value is \(f(4)=16+4a-3=13+4a\). For \(h\neq 0\),
  \[
  \begin{aligned}
  f(4+h)&=(4+h)^2+a(4+h)-3\\
  &=13+4a+8h+h^2+ah,
  \end{aligned}
  \]
  so the difference quotient is
  \[
  \frac{f(4+h)-f(4)}{h}=8+a+h.
  \]
  The limit as \(h\to 0\) equals \(8+a\). Set \(8+a=0\). Then \(a=-8\). With this value, \(f(4)=-19\), and the tangent line is the horizontal line \(y=-19\).
provenance: written-for-site
verification:
  checks:
    - expr: limit((((4 + h)**2 + a*(4 + h) - 3) - (16 + 4*a - 3))/h, h, 0)
      expected: "a + 8"
    - expr: "solve(a + 8, a)[0]"
      expected: "-8"
    - expr: 16 + 4*(-8) - 3
      expected: "-19"
:::

::: exercise
id: l1-derivative.sheet-1-2
number: "sheet 1 exercise 2"
tier: standard
topics: [derivative-from-graph]
statement: |
  Shown are the graphs of two functions. Sketch the graph of each derivative. Estimate the derivative at regular steps along the interval, and also where the derivative is zero. Indicate any place where the derivative does not exist.

  The left-hand graph is drawn for \(x\) from \(-1\) to \(1\) and \(y\) from \(0\) to \(1.6\). The curve is smooth. It starts near \((-0.9, 0.8)\), reaches a local maximum near \((-0.5, 1.30)\), passes through \((0, 1.00)\), reaches a local minimum near \((0.5, 0.70)\), and ends near \((0.9, 1.20)\).

  The right-hand graph is drawn for \(x\) from \(0\) to \(5\) and \(y\) from \(0\) to \(4\). A straight line runs from \((0,0)\) to a corner at \((2,2)\). The curve then decreases to a local minimum near \((3,1)\), and rises steeply through about \((4, 1.8)\) toward about \((4.7, 3.9)\).
solution: |
  On the left-hand graph the curve is smooth, so the derivative exists on the drawn interval.

  - The derivative is zero near the local maximum at \(x=-0.5\) and near the local minimum at \(x=0.5\).
  - The derivative is positive on the rise to the left of the maximum and on the rise to the right of the minimum.
  - It is negative between the maximum and the minimum.

  On the right-hand graph the line from \((0,0)\) to \((2,2)\) has slope \(1\), so the derivative equals \(1\) to the left of the corner. The right-hand graph has no derivative at the **corner** \(x=2\).

  - After the corner the curve falls until a local minimum near \(x=3\), so the derivative is negative on that piece.
  - There is a horizontal tangent near \(x=3\), and the derivative is zero there.
  - Past that minimum the curve rises. From about \((3, 1)\) to about \((4, 1.8)\) the average slope is about \(0.8\). From there to about \((4.7, 3.9)\) the average slope is about \(3\). The derivative is positive on this piece, and larger on the later part.
provenance: written-for-site
verification:
  checkable: false
  reason: |
    The answer is a sketch.
:::

::: exercise
id: l1-derivative.midterm-mock-1-ex2
statement: |
  Find an equation for the tangent line to the graph of \(f(x)=\sqrt{2-x^2}\) at the point \(x=1\).
solution: |
  The point on the graph is \(f(1)=\sqrt{2-1}=1\). Differentiating gives
  \[
  f'(x)=\frac{-x}{\sqrt{2-x^2}},
  \]
  so \(f'(1)=-1\). The tangent line is
  \[
  y=1-(x-1),
  \]
  which simplifies to \(y=2-x\).
steps:
  - Value \(f(1)=1\) and slope \(f'(1)=-1\).
  - Tangent equation \(y=2-x\).
verification:
  checks:
    - expr: sqrt(2-1**2)
      expected: 1
    - expr: diff(sqrt(2-x**2), x).subs(x, 1)
      expected: -1
    - expr: 1 + (-1)*(x-1)
      expected: 2-x
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "2"
  points: 2
:::

::: sheet-item
id: l1-derivative.sheet-definition
category: formula
text: |
  The derivative at \(x_0\) is
  \[
  f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h},
  \]
  when that limit exists.
:::

::: sheet-item
id: l1-derivative.sheet-tangent
category: formula
text: |
  The tangent at \(x_0\) is
  \[
  t(x)=f'(x_0)(x-x_0)+f(x_0).
  \]
  It satisfies \(t(x_0)=f(x_0)\) and \(t'(x_0)=f'(x_0)\).
:::

::: sheet-item
id: l1-derivative.sheet-angle
category: formula
text: |
  If \(\alpha\) is the angle between the tangent and the \(x\)-axis, then \(f'(x_0)=\tan(\alpha)\).
:::

::: sheet-item
id: l1-derivative.sheet-horizontal
category: formula
text: |
  A horizontal tangent at \(x_0\) means \(f'(x_0)=0\).
:::

::: sheet-item
id: l1-derivative.sheet-corner
category: trap
text: |
  The function \(|x|\) has no derivative at the corner \(x=0\). The difference quotient equals \(1\) from the right and \(-1\) from the left.
:::

::: exercise
id: l1-derivative.ex-reciprocal-definition
tier: standard
topics: [derivative-definition, tangent-line]
statement: |
  Let \(f(x)=\frac{1}{x}\) for \(x\neq 0\).

  (a) Use the definition of the derivative to find \(f'(x)\).

  (b) Find the tangent line to the graph of \(f\) at \(x=2\).

  (c) At which points of the graph is the tangent line parallel to the line \(y=-x\)?
solution: |
  (a) For a step \(h\neq 0\) with \(x+h\neq 0\), the difference quotient is
  \[
  \frac{f(x+h)-f(x)}{h}=\frac{1}{h}\left(\frac{1}{x+h}-\frac{1}{x}\right).
  \]
  The common denominator is \(x(x+h)\), and the difference of the fractions is
  \[
  \frac{x-(x+h)}{x(x+h)}=\frac{-h}{x(x+h)}.
  \]
  Dividing by \(h\) leaves
  \[
  \frac{-1}{x(x+h)}.
  \]
  As \(h\to 0\), the denominator tends to \(x^{2}\), which is not \(0\). The limit is \(f'(x)=-\frac{1}{x^{2}}\) for \(x\neq 0\).

  (b) The value is \(f(2)=\frac{1}{2}\) and the slope is \(f'(2)=-\frac{1}{4}\). The tangent line is
  \[
  y=\frac{1}{2}-\frac{1}{4}(x-2)=1-\frac{x}{4}.
  \]

  (c) The line \(y=-x\) has slope \(-1\). A parallel tangent needs \(f'(x)=-1\), so
  \[
  \begin{aligned}
  -\frac{1}{x^{2}}&=-1,\\
  x^{2}&=1.
  \end{aligned}
  \]
  The solutions are \(x=1\) and \(x=-1\). The points are \((1,1)\) and \((-1,-1)\).
provenance: written-for-site
steps:
  - The difference quotient is simplified to \(\frac{-1}{x(x+h)}\).
  - The limit gives \(f'(x)=-\frac{1}{x^{2}}\).
  - The tangent line at \(x=2\) is \(y=1-\frac{x}{4}\).
  - The equation \(f'(x)=-1\) gives the points \((1,1)\) and \((-1,-1)\).
verification:
  checks:
    - expr: limit((1/(x + h) - 1/x)/h, h, 0)
      expected: -1/x**2
    - expr: simplify((1/(x + h) - 1/x)/h)
      expected: -1/(x*(x + h))
    - expr: Rational(1, 2) + (-Rational(1, 4))*(x - 2)
      expected: 1 - x/4
    - expr: FiniteSet(*solve(-1/x**2 + 1, x))
      expected: FiniteSet(-1, 1)
:::

::: exercise
id: l1-derivative.ex-tangents-through-a-point
tier: exam
topics: [tangent-line]
statement: |
  (a) Find every tangent line to the graph of \(f(x)=x^{2}\) that passes through the point \(P(1,-3)\).

  (b) Find the tangent line to the graph of \(g(x)=\dfrac{1}{x}\) that passes through the point \(Q(3,0)\).
solution: |
  (a) The point \(P\) is not on the graph, because \(f(1)=1\). Let the point of tangency be \((a,a^{2})\). The slope there is \(f'(a)=2a\), so the tangent line is
  \[
  y=a^{2}+2a(x-a)=2ax-a^{2}.
  \]
  The line passes through \(P\) when
  \[
  \begin{aligned}
  -3&=2a-a^{2},\\
  a^{2}-2a-3&=0,\\
  (a-3)(a+1)&=0.
  \end{aligned}
  \]
  So \(a=3\) or \(a=-1\). The tangent lines are

  - \(y=6x-9\) for \(a=3\),
  - \(y=-2x-1\) for \(a=-1\).

  Both give \(-3\) at \(x=1\).

  (b) Let the point of tangency be \(\bigl(a,\frac{1}{a}\bigr)\) with \(a\neq 0\). The slope is \(g'(a)=-\frac{1}{a^{2}}\), so the tangent line is
  \[
  y=\frac{1}{a}-\frac{1}{a^{2}}(x-a).
  \]
  At \(x=3\) the height has to be \(0\). Multiplying by \(a^{2}\) gives the second line:
  \[
  \begin{aligned}
  \frac{1}{a}-\frac{3-a}{a^{2}}&=0,\\
  a-(3-a)&=0,\\
  2a&=3.
  \end{aligned}
  \]
  So \(a=\frac{3}{2}\). The slope is \(-\frac{4}{9}\) and the point of tangency is \(\bigl(\frac{3}{2},\frac{2}{3}\bigr)\). The tangent line is
  \[
  y=\frac{2}{3}-\frac{4}{9}\Bigl(x-\frac{3}{2}\Bigr)=\frac{4}{3}-\frac{4x}{9}.
  \]
  Its height at \(x=3\) is \(\frac{4}{3}-\frac{4}{3}=0\).
provenance: written-for-site
steps:
  - Write the tangent line at a general point \(a\).
  - Force the line through the given point to get an equation for \(a\).
  - In (a), solve \(a^{2}-2a-3=0\) and give both tangent lines.
  - In (b), solve \(2a=3\) and give the tangent line.
verification:
  checks:
    - expr: FiniteSet(*solve(a**2 - 2*a - 3, a))
      expected: FiniteSet(-1, 3)
    - expr: (2*3*1 - 3**2, 2*(-1)*1 - (-1)**2)
      expected: (-3, -3)
    - expr: FiniteSet(*solve(1/a - (3 - a)/a**2, a))
      expected: FiniteSet(Rational(3, 2))
    - expr: Rational(2, 3) - Rational(4, 9)*(x - Rational(3, 2))
      expected: Rational(4, 3) - 4*x/9
:::

::: exercise
id: l1-derivative.ex-sqrt-from-definition
tier: standard
topics: [derivative-definition, tangent-line]
statement: |
  Let \(f(x)=\sqrt{x}\) for \(x\geq 0\).

  (a) Use the definition of the derivative to find \(f'(x)\) for \(x>0\).

  (b) Find the tangent line to the graph of \(f\) at \(x=4\).

  (c) Look at the difference quotient at \(x=0\). Does \(f'(0)\) exist?
solution: |
  (a) For \(x>0\) and a small step \(h\neq 0\), the difference quotient is \(\frac{\sqrt{x+h}-\sqrt{x}}{h}\). Multiply the numerator and the denominator by the conjugate \(\sqrt{x+h}+\sqrt{x}\). The new numerator is \((x+h)-x=h\), so for \(h\neq 0\)
  \[
  \frac{\sqrt{x+h}-\sqrt{x}}{h}=\frac{1}{\sqrt{x+h}+\sqrt{x}}.
  \]
  As \(h\to 0\) the denominator tends to \(2\sqrt{x}\), which is not \(0\). Therefore \(f'(x)=\frac{1}{2\sqrt{x}}\).

  (b) The value is \(f(4)=2\) and the slope is \(f'(4)=\frac{1}{4}\). The tangent line is
  \[
  y=2+\frac{1}{4}(x-4)=\frac{x}{4}+1.
  \]

  (c) At \(x=0\) only \(h>0\) is allowed. The quotient is \(\frac{\sqrt{h}}{h}=\frac{1}{\sqrt{h}}\), which grows without bound as \(h\to 0^{+}\). There is no finite limit, so \(f'(0)\) does not exist. The graph has a vertical tangent at the origin.
provenance: written-for-site
steps:
  - Multiply by the conjugate to get \(\frac{1}{\sqrt{x+h}+\sqrt{x}}\), with limit \(\frac{1}{2\sqrt{x}}\).
  - The tangent at \(x=4\) is \(y=\frac{x}{4}+1\).
  - The quotient at \(0\) is \(\frac{1}{\sqrt{h}}\), so \(f'(0)\) does not exist.
verification:
  checks:
    - expr: simplify((sqrt(x + h) - sqrt(x))/h - 1/(sqrt(x + h) + sqrt(x)))
      expected: "0"
    - expr: limit(1/(sqrt(x + h) + sqrt(x)), h, 0)
      expected: 1/(2*sqrt(x))
    - expr: 2 + Rational(1, 4)*(x - 4)
      expected: x/4 + 1
    - expr: (1/limit(1/sqrt(h), h, 0, dir='+'), sign(limit(1/sqrt(h), h, 0, dir='+')))
      expected: (0, 1)
:::

::: exercise
id: l1-derivative.ex-x-abs-x
tier: exam
topics: [derivative-definition, corner]
statement: |
  (a) Let \(f(x)=x|x|\). Use the definition to decide whether \(f'(0)\) exists, and find it if it does.

  (b) Find \(f'(x)\) for \(x\neq 0\), and write the result with an absolute value.

  (c) Let \(g(x)=|x^{2}-1|\). At which points does \(g\) fail to have a derivative? Compare the one-sided slopes.
solution: |
  (a) The difference quotient at \(0\) is
  \[
  \frac{f(h)-f(0)}{h}=\frac{h|h|}{h}=|h|
  \]
  for \(h\neq 0\). As \(h\to 0\) from either side, \(|h|\to 0\). The limit exists, so \(f'(0)=0\).

  (b)

  - For \(x>0\), \(f(x)=x^{2}\) and \(f'(x)=2x\).
  - For \(x<0\), \(f(x)=-x^{2}\) and \(f'(x)=-2x\).

  In both cases \(f'(x)=2|x|\). The same formula gives \(0\) at \(x=0\), so \(f'(x)=2|x|\) for every real \(x\).

  (c)

  - For \(x^{2}>1\), \(g(x)=x^{2}-1\).
  - For \(x^{2}<1\), \(g(x)=1-x^{2}\).

  Away from \(x=\pm 1\) the function is differentiable.

  - At \(x=1\), the slope from the right is \(2x=2\), and the slope from the left is \(-2x=-2\). They differ, so \(g'(1)\) does not exist.
  - At \(x=-1\), the slope from the left is \(2x=-2\) and the slope from the right is \(-2x=2\), so \(g'(-1)\) does not exist.

  The function \(g\) has no derivative at \(x=1\) and \(x=-1\), and the graph has a corner at each.
provenance: written-for-site
steps:
  - In (a), the quotient simplifies to \(|h|\), so \(f'(0)=0\).
  - In (b), the two branches combine to \(f'(x)=2|x|\).
  - In (c), the one-sided slopes at \(\pm 1\) are \(2\) and \(-2\) in opposite order, so there are corners.
verification:
  checks:
    - expr: limit(h*Abs(h)/h, h, 0)
      expected: "0"
    - expr: (diff(x**2, x), diff(-x**2, x))
      expected: (2*x, -2*x)
    - expr: (diff(x**2 - 1, x).subs(x, 1), diff(1 - x**2, x).subs(x, 1))
      expected: (2, -2)
    - expr: (diff(x**2 - 1, x).subs(x, -1), diff(1 - x**2, x).subs(x, -1))
      expected: (-2, 2)
:::
