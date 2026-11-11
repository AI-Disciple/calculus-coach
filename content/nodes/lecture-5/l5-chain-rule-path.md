---
id: l5-chain-rule-path
lecture: 5
order: 8
title: The chain rule along a path
prerequisites: [l5-partial-derivatives]
sources:
  - { source: handout, section: "14.4", page: 364 }
  - { source: handout, section: "10.4", page: 250 }
  - { source: lecture-notes-5, page: 3 }
  - { source: sheet-2, page: 2 }
  - { source: final-2024, page: 1 }
  - { source: final-2025, page: 1 }
  - { source: final-2022, page: 3 }
  - { source: mock-exam-2, page: 1 }
  - { source: mock-2022, page: 1 }
examWeight: medium
examWeightNote: The chain rule carries 5% of the two recent finals.
notation: |
  The curly partial \(\frac{\partial f}{\partial x}\) is the same symbol as \(f_x\), \(\frac{df}{dx}\) and \(d_x f\).
taught: lecture
status: reviewed
---

::: section
title: Parametric curves
:::

::: formal-statement
kind: definition
title: Parametric curve
source: { source: lecture-notes-5, page: 3 }
text: |
  A **parametric curve** is a map \(\vec{M}:\mathbb{R}\to\mathbb{R}^n\),
  \[
  t\mapsto\vec{M}(t)=\begin{pmatrix} x_1(t) \\ \vdots \\ x_n(t) \end{pmatrix}.
  \]
:::

::: plain-explanation
text: |
  The parameter \(t\) moves the point \(\vec{M}(t)\).

  - The line \(x=t+1\), \(y=t\) satisfies \(x=y+1\).
  - The parabola \(x=t\), \(y=t^2\) satisfies \(y=x^2\), and \(\vec{M}(1)=(1,1)\).
:::

::: trap
text: |
  The path \(t\mapsto(t,t^2)\) covers the whole parabola \(y=x^2\). Its velocity is \((1,2t)\). The path \(t\mapsto(t^2,t^4)\) has image \(\{(x,x^2):x\ge 0\}\), because the first coordinate \(t^2\) satisfies \(t^2\ge 0\) and the second coordinate equals \((t^2)^2\). Its velocity is \((2t,4t^3)\).

  At \(t=0\) both paths are at the origin. The first velocity is \((1,0)\) and the second velocity is \((0,0)\). At the shared point \((1,1)\), the first path has velocity \((1,2)\) when \(t=1\). The second path has velocity \((2,4)\) when \(t=1\), and velocity \((-2,-4)\) when \(t=-1\).

  Take \(f(x,y)=x\).

  - Along \(t\mapsto(t,t^2)\), \(h(t)=t\) and \(h'(t)=1\).
  - Along \(t\mapsto(t^2,t^4)\), \(h(t)=t^2\) and \(h'(t)=2t\).

  At \(t=1\) those derivatives equal \(1\) and \(2\).
:::

::: key-points
text: |
  - A parametric curve is a map \(\vec{M}:\mathbb{R}\to\mathbb{R}^n\) that sends the parameter \(t\) to the point \(\vec{M}(t)\) with coordinates \(x_1(t),\dots,x_n(t)\). For example, \(x=t\), \(y=t^2\) satisfies \(y=x^2\), and \(\vec{M}(1)=(1,1)\).
  - Two paths can lie on the same parabola \(y=x^2\) and still differ. The path \(t\mapsto(t,t^2)\) covers the whole parabola with velocity \((1,2t)\). The path \(t\mapsto(t^2,t^4)\) has image \(\{(x,x^2):x\ge 0\}\) and velocity \((2t,4t^3)\).
  - The usual slip treats the two paths as the same path because both lie on \(y=x^2\). They are different paths. At \(t=1\) both are at \((1,1)\) with velocities \((1,2)\) and \((2,4)\). For \(f(x,y)=x\), the derivatives of \(h(t)=f(\vec{M}(t))\) at \(t=1\) are \(1\) and \(2\).
:::

::: concept-question
id: l5-chain-rule-path.q-2d64d828
question: |
  For real \(t\), which set is the image of \(t\mapsto(t^2,t^4)\)?
options:
  - text: |
      The points \((x,x^2)\) with \(x\ge 0\).
    correct: true
  - text: |
      Every point of the parabola \(y=x^2\).
  - text: |
      The line \(x=y+1\).
explanation: |
  The first coordinate is \(t^2\), so \(x\ge 0\). The second coordinate is \(t^4=(t^2)^2\), so \(y=x^2\). The path \(t\mapsto(t,t^2)\) also reaches the points of \(y=x^2\) with \(x<0\).
:::

::: concept-question
id: l5-chain-rule-path.q-021d17dd
question: |
  The paths \(\vec{M}_1(t)=(t,t^2)\) and \(\vec{M}_2(t)=(t^2,t^4)\) both pass through \((1,1)\) at \(t=1\). Let \(f(x,y)=y\), \(h_1(t)=f(\vec{M}_1(t))\) and \(h_2(t)=f(\vec{M}_2(t))\). Which statement is correct?
options:
  - text: |
      \(h_1'(1)=2\) and \(h_2'(1)=4\).
    correct: true
  - text: |
      \(h_1'(1)=h_2'(1)=2\), because the paths are at the same point and \(f\) has the same gradient there.
  - text: |
      \(h_1'(1)=1\) and \(h_2'(1)=2\), because the \(x\)-components of the velocities are \(1\) and \(2\).
explanation: |
  The chain rule evaluates the gradient at the position and takes its scalar product with the velocity. At \((1,1)\) the gradient of \(f=y\) is \((0,1)\) for both paths, but the velocities are \((1,2)\) and \((2,4)\). The products are \(2\) and \(4\). Directly, \(h_1=t^2\) and \(h_2=t^4\), with derivatives \(2\) and \(4\) at \(t=1\).
:::

::: section
title: Chain rule along a path
:::

::: formal-statement
kind: theorem
title: Chain rule along a path
source: { source: lecture-notes-5, page: 3 }
text: |
  Let \(f:\mathbb{R}^n\to\mathbb{R}\) be a differentiable function, and let \(\vec{M}:\mathbb{R}\to\mathbb{R}^n\) be a differentiable parametric curve
  \[
  t\mapsto\vec{M}(t)=\begin{pmatrix} x_1(t) \\ \vdots \\ x_n(t) \end{pmatrix}.
  \]
  Then \(h(t)=f(\vec{M}(t))\) is differentiable, and
  \[
  h'(t)=\nabla f(\vec{M}(t))\cdot\frac{d\vec{M}}{dt}(t),
  \]
  where
  \[
  \frac{d\vec{M}}{dt}(t)=\begin{pmatrix} M_1'(t) \\ \vdots \\ M_n'(t) \end{pmatrix}.
  \]
:::

::: plain-explanation
text: |
  The function \(h\) is the value of \(f\) at the moving point \(\vec{M}(t)\). The centre dot is the **scalar product** of the gradient \(\nabla f(\vec{M}(t))\) with the velocity \(\vec{M}'(t)\). The entries \(M_i'(t)\) are the derivatives of the coordinate functions \(x_i(t)\). In the plane, the scalar product is \(f_x x'+f_y y'\).
:::

::: formal-statement
kind: theorem
title: Chain rule in the plane
source: { source: handout, section: "14.4", page: 364 }
text: |
  Suppose \(z=f(x,y)\), with \(f\) differentiable, and with \(x\) and \(y\) differentiable functions of \(t\). When the relevant derivatives exist,
  \[
  \frac{dz}{dt}=\frac{\partial z}{\partial x}\frac{dx}{dt}+\frac{\partial z}{\partial y}\frac{dy}{dt}.
  \]
:::

::: plain-explanation
text: |
  The curly partial \(\frac{\partial z}{\partial x}\) is \(f_x\), and \(\frac{\partial z}{\partial y}\) is \(f_y\). This is the plane case of \(h'(t)=\nabla f(\vec{M}(t))\cdot\vec{M}'(t)\).
:::

::: worked-example
title: Derivative along the parabola
problem: |
  Let \(f(x,y)=x^2+y\) and let \(\vec{M}(t)=(t,t^2)\). Compute \(h'(t)\) for \(h(t)=f(\vec{M}(t))\).
solution: |
  The gradient is the column \(\nabla f=(2x,1)\). The velocity is \(\vec{M}'(t)=(1,2t)\). Their scalar product is
  \[
  2x\cdot 1+1\cdot 2t=2x+2t.
  \]
  On the path the coordinate \(x\) equals \(t\), so \(h'(t)=2t+2t=4t\).

  The composition is
  \[
  h(t)=t^2+t^2=2t^2.
  \]
  The ordinary derivative of \(2t^2\) is \(4t\). The two computations agree. At \(t=1\) the point is \(\vec{M}(1)=(1,1)\) and \(h'(1)=4\).
:::

::: guided-example
title: A product along a line
problem: |
  Let \(f(x,y)=xy^2\) and let \(\vec{M}(t)=(t,2t)\). Compute \(h'(t)\) for \(h(t)=f(\vec{M}(t))\).
steps:
  - |
    The partial derivatives are \(f_x=y^2\) and \(f_y=2xy\). The velocity is \(\vec{M}'(t)=(1,2)\).
  - |
    The chain rule gives \(h'(t)=y^2\cdot 1+(2xy)\cdot 2=y^2+4xy\).
  - |
    On the path, \(x=t\) and \(y=2t\), so
    \[
    \begin{aligned}
    h'(t)&=(2t)^2+4\cdot t\cdot 2t\\
    &=4t^2+8t^2=12t^2.
    \end{aligned}
    \]
  - |
    The composition is \(h(t)=t(2t)^2=4t^3\). Its ordinary derivative is \(12t^2\).
:::

::: trap
text: |
  The chain rule adds the two contributions \(f_x x'\) and \(f_y y'\). Let \(f(x,y)=x^2+y^2\) and let \(\vec{M}(t)=(t,t)\). The gradient is \((2x,2y)\) and the velocity is \((1,1)\), so
  \[
  h'(t)=2t+2t=4t.
  \]
  The single term \(f_x x'\) equals \(2t\). At \(t=1\) the full derivative equals \(4\) and the single term equals \(2\).
:::

::: going-deeper
title: Proof of the chain rule along a path
text: |
  Suppose \(f\) is differentiable at \((x_0,y_0)\). The increment of \(z=f(x,y)\) has the form
  \[
  \begin{aligned}
  \Delta z&=f_x(x_0,y_0)\,\Delta x+f_y(x_0,y_0)\,\Delta y\\
  &\quad+\varepsilon_1\Delta x+\varepsilon_2\Delta y,
  \end{aligned}
  \]
  where \(\varepsilon_1\) and \(\varepsilon_2\) tend to \(0\) as \((x,y)\) tends to \((x_0,y_0)\).

  ### Taking the limit

  Divide by \(\Delta t\). As \(\Delta t\) tends to \(0\), the quotient \(\Delta z/\Delta t\) tends to \(dz/dt\), \(\Delta x/\Delta t\) tends to \(dx/dt\), and \(\Delta y/\Delta t\) tends to \(dy/dt\). The terms that carry \(\varepsilon_1\) and \(\varepsilon_2\) tend to \(0\). The limit is
  \[
  \frac{dz}{dt}=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}.
  \]
:::

::: key-points
text: |
  - Let \(f\) be differentiable and let \(\vec{M}\) be a differentiable parametric curve. Then \(h(t)=f(\vec{M}(t))\) is differentiable, and \(h'(t)=\nabla f(\vec{M}(t))\cdot\vec{M}'(t)\).
  - The gradient is evaluated at the position \(\vec{M}(t)\), and its scalar product with the velocity \(\vec{M}'(t)\) gives \(h'(t)\). In the plane, with \(z=f(x,y)\) and \(x\), \(y\) differentiable functions of \(t\), this reads \(\frac{dz}{dt}=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}\).
  - The usual slip keeps the single term \(f_x x'\). For \(f(x,y)=x^2+y^2\) and \(\vec{M}(t)=(t,t)\), that term equals \(2t\). The chain rule adds both contributions, so \(h'(t)=2t+2t=4t\).
:::

::: concept-question
id: l5-chain-rule-path.q-e012dda6
question: |
  Let \(h(t)=f(\vec{M}(t))\). Which expression equals \(h'(t)\)?
options:
  - text: |
      \(\nabla f(\vec{M}(t))\cdot\vec{M}'(t)\)
    correct: true
  - text: |
      \(\nabla f(\vec{M}(t))\cdot\vec{M}(t)\)
  - text: |
      \(f(\vec{M}'(t))\)
explanation: |
  The chain rule multiplies the gradient at the moving point by the velocity \(\vec{M}'(t)\). The position \(\vec{M}(t)\) is the place where the gradient is evaluated.
:::

::: concept-question
id: l5-chain-rule-path.q-51ff2a21
question: |
  For \(z=f(x,y)\), with \(x\) and \(y\) functions of \(t\), which expression equals \(\frac{dz}{dt}\)?
options:
  - text: |
      \(f_x\frac{dx}{dt}+f_y\frac{dy}{dt}\)
    correct: true
  - text: |
      \(f_x\frac{dx}{dt}\cdot f_y\frac{dy}{dt}\)
  - text: |
      \(f_x+f_y\)
explanation: |
  Each partial is multiplied by the matching speed, and the two products are added. The curly partials \(\frac{\partial z}{\partial x}\) and \(\frac{\partial z}{\partial y}\) are \(f_x\) and \(f_y\).
:::

::: exercise
id: l5-chain-rule-path.sheet-6-1
number: "sheet 2 exercise 6.1"
tier: basic
topics: [chain-rule, paths]
statement: |
  Find \(\frac{df}{dt}\) by the chain rule for
  \[
  f(x,y)=x^2+y^2,\qquad x=t,\quad y=t^2.
  \]
solution: |
  The partial derivatives are \(f_x=2x\) and \(f_y=2y\). The speeds are \(x'=1\) and \(y'=2t\). The chain rule gives
  \[
  \frac{df}{dt}=2x\cdot 1+2y\cdot 2t=2x+4yt.
  \]
  Along the path, \(x=t\) and \(y=t^2\), so
  \[
  \frac{df}{dt}=2t+4t^3.
  \]
  The composition \(t^2+t^4\) has the same derivative.
provenance: written-for-site
steps:
  - The partial derivatives are \(2x\) and \(2y\), and the speeds are \(1\) and \(2t\).
  - Substitution of \(x=t\) and \(y=t^2\) produces \(2t+4t^3\).
verification:
  checks:
    - expr: '(2*x*1 + 2*y*(2*t)).subs({x: t, y: t**2})'
      expected: "2*t + 4*t**3"
    - expr: 'diff(t**2 + (t**2)**2, t)'
      expected: "2*t + 4*t**3"
:::

::: exercise
id: l5-chain-rule-path.final-2024-q2
tier: exam
topics: [chain-rule, paths]
examBlock: chain-rule
pastExam:
  year: 2024
  paper: Final
  question: "2"
  points: 1
statement: |
  [1 point, 7min] We want to go down a mountain whose height at a point \( (x, y) \) is given by \( f(x, y) \) at a fixed rate. So we walk on a path \( (x(t), y(t), z(t)) \) with \( z(t) = f(x(t), y(t)) \). Give the differential equation \( x \) and \( y \) must satisfy so that \( z'(t) = -1 \).
solution: |
  Let \(x(t)\) and \(y(t)\) be differentiable, and let \(z(t)=f(x(t),y(t))\). The chain rule gives
  \[
  \begin{aligned}
  z'(t)&=f_x(x(t),y(t))\,x'(t)\\
  &\quad+f_y(x(t),y(t))\,y'(t).
  \end{aligned}
  \]
  Therefore the velocity must satisfy the differential relation
  \[
  \begin{aligned}
  &f_x(x(t),y(t))\,x'(t)\\
  &\quad+f_y(x(t),y(t))\,y'(t)=-1.
  \end{aligned}
  \]
  Every differentiable path satisfying this relation descends at the required fixed rate.
provenance: written-for-site
steps:
  - The height is differentiated along the path by the chain rule.
  - The resulting derivative is set equal to \(-1\).
verification:
  checks:
    - expr: fx*xdot+fy*((-1-fx*xdot)/fy)
      expected: "-1"
:::

::: exercise
id: l5-chain-rule-path.final-2025-q2
tier: exam
topics: [chain-rule, implicit-curves]
examBlock: chain-rule
pastExam:
  year: 2025
  paper: Final
  question: "2"
  points: 1
statement: |
  [1 point, 7min] Let \( C \) be a curve in the \( x - y \) plane defined by \( x^2 + y^3 = 1 \). Consider the upper surface of the sphere : \( z = \sqrt{1 - x^2 - y^2} \). Compute the slope of \( z(x,y) \) when \( (x,y) \) move along \( C \).
solution: |
  The real domain of the upper sphere satisfies \(x^2+y^2\leq1\). To compute the requested slope, write \(y=y(x)\) at a regular point and differentiate the restricted height \(Z(x)=z(x,y(x))\) with respect to \(x\).

  Differentiating the equation of \(C\) gives
  \[
  \frac{dy}{dx}=-\frac{2x}{3y^2}.
  \]
  At a point where \(y\ne0\) and \(z>0\), the formal derivative is
  \[
  \frac{dZ}{dx}
  =-\frac{x}{z}-\frac{y}{z}\frac{dy}{dx}
  =\frac{x(2-3y)}{3yz}.
  \]

  The two printed equations have no common real curve on which this derivative can be taken. On \(C\), the squared height is
  \[
  \begin{aligned}
  z^2&=1-x^2-y^2\\
  &=y^3-y^2=y^2(y-1).
  \end{aligned}
  \]
  The equation \(x^2=1-y^3\) requires \(y\leq1\). The condition \(z^2\geq0\) then forces \(y=0\) or \(y=1\). The common points are
  \[
  \begin{aligned}
  (x,y,z)&=(1,0,0),\\
  &\quad(-1,0,0),\\
  &\quad(0,1,0).
  \end{aligned}
  \]
  They are isolated points of the common real domain. Therefore the slope of \(z\) along \(C\) is undefined.
provenance: written-for-site
steps:
  - The restricted height \(Z(x)\) and its differentiation variable are stated.
  - The formal chain-rule derivative along \(C\) is computed.
  - The common real domain is checked before a slope is claimed.
verification:
  checks:
    - expr: simplify(1-(1-y**3)-y**2)
      expected: "y**2*(y-1)"
    - expr: solve(2*x+3*y**2*p,p)[0]
      expected: "-2*x/(3*y**2)"
    - expr: simplify(-x/z+(-y/z)*(-2*x/(3*y**2)))
      expected: "x*(2-3*y)/(3*y*z)"
    - expr: Tuple((x**2+y**3-1).subs({x:1,y:0}),(1-x**2-y**2).subs({x:1,y:0}),(x**2+y**3-1).subs({x:-1,y:0}),(1-x**2-y**2).subs({x:-1,y:0}),(x**2+y**3-1).subs({x:0,y:1}),(1-x**2-y**2).subs({x:0,y:1}))
      expected: "Tuple(0,0,0,0,0,0)"
:::

::: exercise
id: l5-chain-rule-path.final-2022-q3a
tier: exam
topics: [chain-rule]
examBlock: chain-rule
pastExam:
  year: 2022
  paper: Final
  question: "3a"
  points: 1
statement: |
  Let \(f(x, y) = x^2 - y^2\) and let \(\vec M(t) = (at, bt)\) be a line in the \(xy\)-plane, with \(a\) and \(b\) real. Let \(\varphi(t) = f(\vec M(t))\). Compute \(\varphi'(t)\) using the chain rule.
solution: |
  The gradient is \(\nabla f = (2x, -2y)\), and \(\vec M'(t) = (a, b)\). The chain rule gives
  \[
  \begin{aligned}
  \varphi'(t) &= \nabla f(\vec M(t)) \cdot \vec M'(t)\\
  &= 2ax - 2by = 2(ax - by),
  \end{aligned}
  \]
  where \(x\) and \(y\) are the coordinates of \(\vec M(t)\).

  Along the path, \(x = at\) and \(y = bt\), so
  \[ \varphi'(t) = 2(a^2 - b^2)t. \]
  Expanding \(\varphi(t) = (at)^2 - (bt)^2 = (a^2 - b^2)t^2\) gives the same derivative.
provenance: official-key
steps:
  - The chain rule writes \(\varphi'(t)\) as \(\nabla f(\vec M(t)) \cdot (a, b)\).
  - That product is \(2(ax - by)\).
  - Along \(\vec M\), the derivative is \(2(a^2 - b^2)t\).
verification:
  checks:
    - expr: '(2*x*a + (-2*y)*b).subs({x: a*t, y: b*t})'
      expected: 2*(a**2 - b**2)*t
    - expr: 'diff((a*t)**2 - (b*t)**2, t)'
      expected: 2*(a**2 - b**2)*t
:::

::: exercise
id: l5-chain-rule-path.mock-exam-2-q3-equal
tier: exam
topics: [chain-rule]
examBlock: chain-rule
pastExam:
  year: 2022
  paper: "Mock exam"
  question: "3.1"
  points: 1
statement: |
  Let \(f(x, y) = x^2 - y^2\) and let \(\vec M(t) = (at, bt)\) with \(a\) and \(b\) real. What can you say about \(f\) along \(\vec M\) when \(a = b\)?
solution: |
  Along the line, \(f(\vec M(t)) = (at)^2 - (bt)^2 = (a^2 - b^2)t^2\). When \(a = b\), this is \(0\) for every \(t\). So \(f\) is identically \(0\) along that line.
provenance: written-for-site
steps:
  - Along \(\vec M\), \(f(\vec M(t)) = (a^2 - b^2)t^2\).
  - When \(a = b\), this expression is \(0\) for every \(t\).
verification:
  checks:
    - expr: '((a*t)**2 - (b*t)**2).subs({b: a})'
      expected: 0
:::

::: exercise
id: l5-chain-rule-path.mock-2022-q2
tier: exam
topics: [chain-rule, implicit-surfaces]
examBlock: chain-rule
pastExam:
  year: 2022
  paper: Mock
  question: "2"
  points: 1
statement: |
  Let \(z^2 + x^4 + y^4 = 1\) be a surface, and let \(x(t) = t^{1/4}\) and \(y(t) = \sqrt{t}\).

  1. Find \(z(t) > 0\) so that \((x(t), y(t), z(t))\) lies on the surface, and give the domain of \(z\).
  2. Compute \(z'(t)\).
solution: |
  On the surface, \(z^2 = 1 - x^4 - y^4\). Substituting the path gives \(x(t)^4 = t\) and \(y(t)^4 = t^2\), so
  \[ z(t)^2 = 1 - t - t^2. \]
  The positive square root is
  \[ z(t) = \sqrt{1 - t - t^2}. \]

  Both \(t^{1/4}\) and \(\sqrt{t}\) are defined for \(t \ge 0\). The radicand is positive when \(t^2 + t - 1 < 0\). The roots of \(t^2 + t - 1 = 0\) are \(\dfrac{-1 \pm \sqrt{5}}{2}\), and the positive root is \(\dfrac{-1 + \sqrt{5}}{2}\). For \(t \ge 0\) the radicand is positive from \(0\) up to that root, and it vanishes at the root. The question asks for \(z(t) > 0\), so the domain is
  \[ 0 \le t < \frac{-1 + \sqrt{5}}{2}. \]

  Differentiating the square root gives
  \[
  \begin{aligned}
  z'(t)&=-\frac{2t + 1}{2\sqrt{1 - t - t^2}}\\
  &=-\frac{2t + 1}{2z(t)}
  \end{aligned}
  \]
  on that interval, including \(z'(0) = -1/2\).

  For \(t > 0\) the chain rule on \(z^2 + x^4 + y^4 = 1\) gives the same formula. There \(x^3 x' = 1/4\) and \(y^3 y' = t/2\), so
  \[
  \begin{aligned}
  z'&=-\frac{2(x^3 x' + y^3 y')}{z}\\
  &=-\frac{2t + 1}{2z}.
  \end{aligned}
  \]
  At \(t = 0\), \(x'(t) = \tfrac{1}{4} t^{-3/4}\) is undefined. Differentiating the square root still gives \(z'(0) = -1/2\).
provenance: written-for-site
steps:
  - \(x^4 + y^4 = t + t^2\), so the positive height is \(z(t) = \sqrt{1 - t - t^2}\).
  - The domain is \(0 \le t < (-1 + \sqrt{5})/2\).
  - \(z'(t) = -(2t + 1)/(2z(t))\).
verification:
  checks:
    - expr: 'simplify((t**Rational(1, 4))**4 + sqrt(t)**4)'
      expected: t + t**2
    - expr: 'simplify(sqrt(1 - t - t**2)**2 + t + t**2)'
      expected: 1
    - expr: 'sqrt(1 - t - t**2).subs(t, 0)'
      expected: 1
    - expr: 'solve(t**2 + t - 1, t)'
      expected: "[-1/2 + sqrt(5)/2, -sqrt(5)/2 - 1/2]"
    - expr: '(1 - t - t**2).subs(t, -Rational(1, 2) + sqrt(5)/2)'
      expected: 0
    - expr: 'diff(sqrt(1 - t - t**2), t)'
      expected: -(2*t + 1)/(2*sqrt(1 - t - t**2))
    - expr: 'diff(sqrt(1 - t - t**2), t).subs(t, 0)'
      expected: -1/2
    - expr: 'simplify(t**Rational(3, 4) * (Rational(1, 4)*t**Rational(-3, 4)))'
      expected: Rational(1, 4)
    - expr: 'simplify((t**Rational(3, 2)) * (Rational(1, 2)*t**Rational(-1, 2)) - t/2)'
      expected: 0
:::

::: exercise
id: l5-chain-rule-path.sheet-6-2
number: "sheet 2 exercise 6.2"
tier: standard
topics: [chain-rule, paths]
statement: |
  Find \(\frac{df}{dt}\) by the chain rule for
  \[
  \begin{aligned}
  f(x,y)&=\sqrt{x^2+y^2},\\
  x&=t,\quad y=t^2.
  \end{aligned}
  \]
solution: |
  Away from the origin, \(f_x=x/\sqrt{x^2+y^2}\) and \(f_y=y/\sqrt{x^2+y^2}\). The chain rule gives
  \[
  \frac{df}{dt}=\frac{x\cdot 1+y\cdot 2t}{\sqrt{x^2+y^2}}.
  \]
  For \(t\neq 0\) the path is away from the origin. Substitution produces
  \[
  \frac{df}{dt}=\frac{t+2t^3}{\sqrt{t^2+t^4}}.
  \]
  The composition \(\sqrt{t^2+t^4}\) has this same derivative.

  - For \(t>0\) the derivative equals \((1+2t^2)/\sqrt{1+t^2}\).
  - For \(t<0\) it equals the negative of that quantity, since the numerator \(t+2t^3\) has the sign of \(t\) and the square root in the denominator is positive.

  At \(t=0\) the path sits at the origin. The two-sided limit of \(|\varepsilon|/\varepsilon\) as \(\varepsilon\) tends to \(0\) does not exist, so \(f_x\) is undefined at the origin. The chain-rule formula above is the derivative for \(t\neq 0\).
provenance: written-for-site
steps:
  - The partial derivatives away from the origin are \(x/r\) and \(y/r\), where \(r=\sqrt{x^2+y^2}\).
  - For \(t\neq 0\) the derivative equals \((t+2t^3)/\sqrt{t^2+t^4}\).
  - At the origin the partial derivative \(f_x\) is undefined.
verification:
  checks:
    - expr: 'simplify( ((x/sqrt(x**2+y**2))*1 + (y/sqrt(x**2+y**2))*(2*t)).subs({x:t, y:t**2}) - (t + 2*t**3)/sqrt(t**2 + t**4) )'
      expected: "0"
    - expr: 'diff(sqrt(t**2 + t**4), t)'
      expected: "(t + 2*t**3)/sqrt(t**2 + t**4)"
    - expr: 'simplify( (diff(sqrt(t**2 + t**4), t))**2 - ((1+2*t**2)/sqrt(1+t**2))**2 )'
      expected: "0"
    - expr: 'diff(sqrt(t**2 + t**4), t).subs(t, 1)'
      expected: "(1+2)/sqrt(2)"
    - expr: 'diff(sqrt(t**2 + t**4), t).subs(t, -1)'
      expected: "-(1+2)/sqrt(2)"
:::

::: exercise
id: l5-chain-rule-path.sheet-6-3
number: "sheet 2 exercise 6.3"
tier: basic
topics: [chain-rule, paths]
statement: |
  Find \(\frac{df}{dt}\) by the chain rule for
  \[
  \begin{aligned}
  f(x,y)&=xy,\\
  x&=1-\sqrt{t},\quad y=1+\sqrt{t}.
  \end{aligned}
  \]
solution: |
  Work with \(t>0\), so the square roots are differentiable. The partial derivatives are \(f_x=y\) and \(f_y=x\). The speeds are \(x'=-1/(2\sqrt{t})\) and \(y'=1/(2\sqrt{t})\). The chain rule gives
  \[
  \begin{aligned}
  \frac{df}{dt}&=y x'+x y'\\
  &=\frac{-(1+\sqrt{t})+(1-\sqrt{t})}{2\sqrt{t}}\\
  &=\frac{-2\sqrt{t}}{2\sqrt{t}}=-1.
  \end{aligned}
  \]
  The composition equals \((1-\sqrt{t})(1+\sqrt{t})=1-t\), and the derivative of \(1-t\) is \(-1\).
provenance: written-for-site
steps:
  - The partial derivatives are \(y\) and \(x\), and the speeds are \(\pm 1/(2\sqrt{t})\).
  - The chain rule simplifies to \(-1\), which matches the derivative of \(1-t\).
verification:
  checks:
    - expr: 'simplify( (1+sqrt(t))*(-1/(2*sqrt(t))) + (1-sqrt(t))*(1/(2*sqrt(t))) )'
      expected: "-1"
    - expr: 'diff((1-sqrt(t))*(1+sqrt(t)), t)'
      expected: "-1"
:::

::: exercise
id: l5-chain-rule-path.sheet-6-4
number: "sheet 2 exercise 6.4"
tier: standard
topics: [chain-rule, paths]
statement: |
  Find \(\frac{df}{dt}\) by the chain rule for
  \[
  f(x,y)=\frac{x}{y},\qquad x=t^{1/3},\quad y=e^t.
  \]
solution: |
  The partial derivatives are \(f_x=1/y\) and \(f_y=-x/y^2\). For \(t\neq 0\) the speed \(x'\) equals \(\frac{1}{3}t^{-2/3}\), and \(y'=e^t\). The chain rule gives
  \[
  \frac{df}{dt}=\frac{1}{y}\cdot\frac{1}{3}t^{-2/3}+\left(-\frac{x}{y^2}\right)e^t.
  \]
  Along the path, \(x=t^{1/3}\) and \(y=e^t\), so
  \[
  \frac{df}{dt}=e^{-t}\left(\frac{1}{3}t^{-2/3}-t^{1/3}\right).
  \]
  The composition \(t^{1/3}e^{-t}\) has this same derivative.
provenance: written-for-site
steps:
  - The partial derivatives are \(1/y\) and \(-x/y^2\).
  - For \(t\neq 0\) the speeds are \(\frac{1}{3}t^{-2/3}\) and \(e^t\).
  - Substitution produces \(e^{-t}\bigl(\frac{1}{3}t^{-2/3}-t^{1/3}\bigr)\).
verification:
  checks:
    - expr: 'simplify( ((1/y)*(Rational(1,3)*t**Rational(-2,3)) + (-x/y**2)*exp(t)).subs({x: t**Rational(1,3), y: exp(t)}) - exp(-t)*(Rational(1,3)*t**Rational(-2,3) - t**Rational(1,3)) )'
      expected: "0"
    - expr: 'diff(t**Rational(1,3)*exp(-t), t)'
      expected: "exp(-t)*(Rational(1,3)*t**Rational(-2,3) - t**Rational(1,3))"
:::

::: exercise
id: l5-chain-rule-path.handout-10-4-3
number: "10.4.3"
tier: basic
topics:
  - paths
statement: |
  What curve is described by \(x=3\cos t\), \(y=2\sin t\)? If \(t\) is read as time, describe how an object moves on the curve.
solution: |
  Divide each coordinate by its factor: \(\frac{x}{3}=\cos t\) and \(\frac{y}{2}=\sin t\). Since \(\cos^2 t+\sin^2 t=1\),
  \[
  \frac{x^2}{9}+\frac{y^2}{4}=1.
  \]
  The curve is an **ellipse** with semi-axes \(3\) along the \(x\)-axis and \(2\) along the \(y\)-axis.

  At \(t=0\) the object is at \((3,0)\). The velocity is \((-3\sin t,\ 2\cos t)\), which equals \((0,2)\) at \(t=0\), so the object moves upward from \((3,0)\). It reaches \((0,2)\) at \(t=\frac{\pi}{2}\), \((-3,0)\) at \(t=\pi\) and \((0,-2)\) at \(t=\frac{3\pi}{2}\).

  The object runs around the ellipse counterclockwise. It returns to \((3,0)\) at \(t=2\pi\), so the period is \(2\pi\).
provenance: written-for-site
steps:
  - Eliminating t gives the ellipse x^2/9 + y^2/4 = 1.
  - The object starts at (3, 0) with velocity (0, 2), so it moves counterclockwise.
  - One full turn takes the time 2 pi.
verification:
  checks:
    - expr: 'simplify((3*cos(t)/3)**2 + (2*sin(t)/2)**2)'
      expected: "1"
    - expr: '(3*cos(0), 2*sin(0))'
      expected: "(3, 0)"
    - expr: '(diff(3*cos(t), t).subs(t, 0), diff(2*sin(t), t).subs(t, 0))'
      expected: "(0, 2)"
    - expr: '(3*cos(pi/2), 2*sin(pi/2))'
      expected: "(0, 2)"
    - expr: '(3*cos(3*pi/2), 2*sin(3*pi/2))'
      expected: "(0, -2)"
:::


::: exercise
id: l5-chain-rule-path.handout-10-4-4
number: "10.4.4"
tier: basic
topics:
  - paths
statement: |
  What curve is described by \(x=3\sin t\), \(y=3\cos t\)? If \(t\) is read as time, describe how an object moves on the curve.
solution: |
  The coordinates satisfy
  \[
  x^2+y^2=9\sin^2 t+9\cos^2 t=9.
  \]
  The curve is the **circle** of radius \(3\) centred at the origin.

  At \(t=0\) the object is at \((0,3)\). The velocity is \((3\cos t,\ -3\sin t)\), which equals \((3,0)\) at \(t=0\), so the object leaves the top of the circle toward the right. It reaches \((3,0)\) at \(t=\frac{\pi}{2}\) and \((0,-3)\) at \(t=\pi\).

  The object runs around the circle clockwise, with period \(2\pi\). The parametrisation \(x=3\cos t\), \(y=3\sin t\) traces the same circle counterclockwise from \((3,0)\).
provenance: written-for-site
steps:
  - Squaring and adding gives x^2 + y^2 = 9.
  - The object starts at (0, 3) with velocity (3, 0), so it moves clockwise.
  - The period is 2 pi.
verification:
  checks:
    - expr: 'simplify((3*sin(t))**2 + (3*cos(t))**2)'
      expected: "9"
    - expr: '(3*sin(0), 3*cos(0))'
      expected: "(0, 3)"
    - expr: '(diff(3*sin(t), t).subs(t, 0), diff(3*cos(t), t).subs(t, 0))'
      expected: "(3, 0)"
    - expr: '(3*sin(pi/2), 3*cos(pi/2))'
      expected: "(3, 0)"
    - expr: '(3*sin(pi), 3*cos(pi))'
      expected: "(0, -3)"
:::


::: exercise
id: l5-chain-rule-path.handout-10-4-5
number: "10.4.5"
tier: standard
topics:
  - paths
statement: |
  Sketch the curve described by \(x=t^3-t\), \(y=t^2\). If \(t\) is read as time, describe how an object moves on the curve.
solution: |
  **Symmetry.** Replacing \(t\) by \(-t\) changes \(x\) to \(-x\) and leaves \(y\) unchanged, so the curve is symmetric about the \(y\)-axis. Since \(y=t^2\ge 0\), the curve lies in the upper half plane.

  **Table of values.**
  \[
  \begin{array}{c|ccccccc}
  t&-2&-1&-\tfrac12&0&\tfrac12&1&2\\\hline
  x&-6&0&\tfrac38&0&-\tfrac38&0&6\\
  y&4&1&\tfrac14&0&\tfrac14&1&4
  \end{array}
  \]

  **Crossing.** The coordinate \(x=t(t-1)(t+1)\) is \(0\) at \(t=-1\), \(0\) and \(1\). The points are \((0,1)\) at \(t=\pm 1\) and \((0,0)\) at \(t=0\). The curve passes through \((0,1)\) twice, so it crosses itself there.

  **Loop.** For \(-1<t<0\) the factors give \(x>0\), and for \(0<t<1\) they give \(x<0\). Between \(t=-1\) and \(t=1\) the curve is a closed loop that starts and ends at \((0,1)\) and touches the origin at \(t=0\). The extreme values of \(x\) occur where \(x'=3t^2-1=0\), that is \(t=\pm\frac{1}{\sqrt 3}\). There \(y=\frac13\) and \(x=\pm\frac{2\sqrt3}{9}\approx\pm 0.385\), with the positive value at \(t=-\frac{1}{\sqrt 3}\).

  **Outside the loop.** For \(t>1\) both \(x\) and \(y\) increase, and for \(t<-1\) the point is on the left with \(y\) increasing as \(t\) decreases. The two ends go up and outward.

  **Motion.** For \(t\to-\infty\) the object comes in from the upper left. It reaches \((0,1)\) at \(t=-1\) with velocity \((2,-2)\), goes down along the right side of the loop, and passes the origin at \(t=0\) with velocity \((-1,0)\). It goes up the left side, passes \((0,1)\) again at \(t=1\) with velocity \((2,2)\), and leaves toward the upper right. The loop is run clockwise.
provenance: written-for-site
steps:
  - The curve is symmetric about the y-axis and lies in y >= 0.
  - x = 0 at t = -1, 0 and 1, so the curve crosses itself at (0, 1) and touches the origin.
  - The loop has extreme x = 2 sqrt(3)/9 and -2 sqrt(3)/9 at y = 1/3.
  - The loop is run clockwise.
verification:
  checks:
    - expr: 'FiniteSet(*solve(t**3 - t, t))'
      expected: "FiniteSet(-1, 0, 1)"
    - expr: '((t**3 - t).subs(t, -1), (t**2).subs(t, -1), (t**3 - t).subs(t, 1), (t**2).subs(t, 1))'
      expected: "(0, 1, 0, 1)"
    - expr: 'FiniteSet(*solve(diff(t**3 - t, t), t))'
      expected: "FiniteSet(-sqrt(3)/3, sqrt(3)/3)"
    - expr: '((t**3 - t).subs(t, -1/sqrt(3)), (t**2).subs(t, -1/sqrt(3)))'
      expected: "(2*sqrt(3)/9, 1/3)"
    - expr: '((t**3 - t).subs(t, Rational(1, 2)), (t**2).subs(t, Rational(1, 2)), (t**3 - t).subs(t, 2), (t**2).subs(t, 2))'
      expected: "(-Rational(3, 8), Rational(1, 4), 6, 4)"
    - expr: '(diff(t**3 - t, t).subs(t, -1), diff(t**2, t).subs(t, -1), diff(t**3 - t, t).subs(t, 0), diff(t**3 - t, t).subs(t, 1), diff(t**2, t).subs(t, 1))'
      expected: "(2, -2, -1, 2, 2)"
:::


::: exercise
id: l5-chain-rule-path.handout-10-4-6
number: "10.4.6"
tier: standard
topics:
  - paths
statement: |
  A wheel of radius \(1\) rolls along the \(x\)-axis without slipping. The point \(P\) lies halfway between the centre of the wheel and the rim, and starts at \((0,\tfrac12)\). As the wheel rolls, \(P\) traces a curve. Find parametric equations for the curve.
solution: |
  Let \(t\) be the angle in radians through which the wheel has turned. The wheel has radius \(1\) and does not slip, so it has rolled the distance \(t\), and its centre is at \((t,1)\).

  At \(t=0\) the point \(P=(0,\tfrac12)\) lies straight below the centre at distance \(\frac12\). The vector from the centre to \(P\) is \((0,-\tfrac12)\). Rolling to the right turns the wheel clockwise, and the vector turns clockwise through the angle \(t\). A clockwise turn by \(t\) sends \((a,b)\) to \((a\cos t+b\sin t,\ -a\sin t+b\cos t)\), so the vector becomes
  \[
  \left(-\tfrac12\sin t,\ -\tfrac12\cos t\right).
  \]
  Adding it to the centre,
  \[
  \begin{aligned}
  x&=t-\tfrac12\sin t,\\
  y&=1-\tfrac12\cos t.
  \end{aligned}
  \]
  A check at special values: \(t=0\) gives \((0,\tfrac12)\), the starting point. At \(t=\pi\) the point is at \((\pi,\tfrac32)\), directly above the centre. At \(t=2\pi\) it is back at height \(\frac12\), at \((2\pi,\tfrac12)\), after one circumference.
provenance: handout-answer
steps:
  - After turning through t, the centre is at (t, 1).
  - The vector from the centre to P turns clockwise from (0, -1/2) to (-sin(t)/2, -cos(t)/2).
  - Adding gives x = t - sin(t)/2 and y = 1 - cos(t)/2.
verification:
  checks:
    - expr: '(0*cos(t) + (-Rational(1, 2))*sin(t), -0*sin(t) + (-Rational(1, 2))*cos(t))'
      expected: "(-sin(t)/2, -cos(t)/2)"
    - expr: '(t + (-sin(t)/2), 1 + (-cos(t)/2))'
      expected: "(t - sin(t)/2, 1 - cos(t)/2)"
    - expr: '((t - sin(t)/2).subs(t, 0), (1 - cos(t)/2).subs(t, 0))'
      expected: "(0, Rational(1, 2))"
    - expr: '((t - sin(t)/2).subs(t, pi), (1 - cos(t)/2).subs(t, pi))'
      expected: "(pi, Rational(3, 2))"
    - expr: '((t - sin(t)/2).subs(t, 2*pi), (1 - cos(t)/2).subs(t, 2*pi))'
      expected: "(2*pi, Rational(1, 2))"
    - expr: 'simplify((t - sin(t)/2 - t)**2 + (1 - cos(t)/2 - 1)**2)'
      expected: "Rational(1, 4)"
:::


::: exercise
id: l5-chain-rule-path.handout-14-4-1
number: "14.4.1"
tier: standard
topics:
  - chain-rule
  - paths
statement: |
  Use the chain rule to compute \(\frac{dz}{dt}\) for
  \[
  z=\sin(x^2+y^2),\qquad x=t^2+3,\quad y=t^3.
  \]
solution: |
  The partial derivatives are \(z_x=2x\cos(x^2+y^2)\) and \(z_y=2y\cos(x^2+y^2)\). The speeds are \(x'=2t\) and \(y'=3t^2\). The chain rule gives
  \[
  \begin{aligned}
  \frac{dz}{dt}&=z_x x'+z_y y'\\
  &=4xt\cos(x^2+y^2)+6yt^2\cos(x^2+y^2).
  \end{aligned}
  \]
  Along the path, \(x^2+y^2=(t^2+3)^2+t^6=t^6+t^4+6t^2+9\), and \(4xt+6yt^2=4t(t^2+3)+6t^5\). So
  \[
  \frac{dz}{dt}=(6t^5+4t^3+12t)\cos(t^6+t^4+6t^2+9).
  \]
  The inner function \(t^6+t^4+6t^2+9\) has derivative \(6t^5+4t^3+12t\), so the one-variable chain rule on the composition gives the same result.
provenance: handout-answer
steps:
  - The partial derivatives are 2x cos(x^2 + y^2) and 2y cos(x^2 + y^2), and the speeds are 2t and 3t^2.
  - The chain rule gives 4xt cos(x^2 + y^2) + 6yt^2 cos(x^2 + y^2).
  - Substituting x and y gives (6t^5 + 4t^3 + 12t) cos(t^6 + t^4 + 6t^2 + 9).
verification:
  checks:
    - expr: '(2*x*cos(x**2 + y**2)*2*t + 2*y*cos(x**2 + y**2)*3*t**2).subs({x: t**2 + 3, y: t**3}) - diff(sin((t**2 + 3)**2 + (t**3)**2), t)'
      expected: "0"
    - expr: 'diff(sin((t**2 + 3)**2 + (t**3)**2), t) - (6*t**5 + 4*t**3 + 12*t)*cos(t**6 + t**4 + 6*t**2 + 9)'
      expected: "0"
:::


::: exercise
id: l5-chain-rule-path.handout-14-4-2
number: "14.4.2"
tier: basic
topics:
  - chain-rule
  - paths
statement: |
  Use the chain rule to compute \(\frac{dz}{dt}\) for
  \[
  z=x^2y,\qquad x=\sin t,\quad y=t^2+1.
  \]
solution: |
  The partial derivatives are \(z_x=2xy\) and \(z_y=x^2\). The speeds are \(x'=\cos t\) and \(y'=2t\). The chain rule gives
  \[
  \frac{dz}{dt}=2xy\cos t+2tx^2.
  \]
  Along the path, \(x=\sin t\) and \(y=t^2+1\), and \(2\sin t\cos t=\sin 2t\), so
  \[
  \frac{dz}{dt}=(t^2+1)\sin 2t+2t\sin^2 t.
  \]
  The composition is \(\sin^2 t\,(t^2+1)\), and the product rule gives the same derivative.
provenance: handout-answer
steps:
  - The partial derivatives are 2xy and x^2, and the speeds are cos t and 2t.
  - The chain rule gives 2xy cos t + 2t x^2.
  - Substituting x and y gives (t^2 + 1) sin 2t + 2t sin^2 t.
verification:
  checks:
    - expr: '(2*x*y*cos(t) + 2*t*x**2).subs({x: sin(t), y: t**2 + 1}) - diff(sin(t)**2*(t**2 + 1), t)'
      expected: "0"
    - expr: 'diff(sin(t)**2*(t**2 + 1), t) - ((t**2 + 1)*sin(2*t) + 2*t*sin(t)**2)'
      expected: "0"
:::

::: sheet-item
id: l5-chain-rule-path.sheet-formula
category: formula
text: |
  If \(h(t)=f(\vec{M}(t))\), then
  \[
  h'(t)=\nabla f(\vec{M}(t))\cdot\vec{M}'(t).
  \]
  In the plane, \(\frac{dz}{dt}=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}\).
:::

::: sheet-item
id: l5-chain-rule-path.sheet-half
category: trap
text: |
  The path \(t\mapsto(t^2,t^4)\) stays in \(x\ge 0\). The path \(t\mapsto(t,t^2)\) covers the whole parabola \(y=x^2\). On the overlap the velocities \((2t,4t^3)\) and \((1,2t)\) differ.
:::
