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
