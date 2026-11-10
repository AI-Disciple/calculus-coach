---
id: l5-differentiability
lecture: 5
order: 4
title: Differentiability
prerequisites: [l5-partial-derivatives, l5-limits-continuity]
sources:
  - { source: handout, section: "14.3", page: 361 }
  - { source: handout, section: "14.3", page: 362 }
  - { source: handout, section: "14.3", page: 363 }
examWeight: low
examWeightNote: Never examined on the finals.
taught: lecture
status: reviewed
notation: |
  \(f_x\), \(\frac{df}{dx}\), \(d_x f\) and \(\frac{\partial f}{\partial x}\) are the same symbol, the partial derivative of \(f\) in \(x\). The symbols \(f_y\), \(\frac{df}{dy}\), \(d_y f\) and \(\frac{\partial f}{\partial y}\) are the same symbol for the partial derivative in \(y\).
---

::: section
title: Differentiability at a point
:::

::: formal-statement
kind: definition
title: Differentiability at a point
source:
  source: handout
  section: "14.3"
  page: 362
text: |
  The function \(f\) is **differentiable** at \((x_0, y_0)\) when the increment of \(f\) equals the **tangent-plane increment** plus a remainder that goes to \(0\) faster than the **step**. Write \(\Delta x=x-x_0\), \(\Delta y=y-y_0\) and \(\Delta z=f(x, y)-f(x_0, y_0)\). Then
  \[
  \Delta z=f_x(x_0, y_0)\,\Delta x+f_y(x_0, y_0)\,\Delta y+r,
  \]
  where the remainder \(r\) equals \(\Delta x\) times one coefficient plus \(\Delta y\) times another, and both coefficients approach \(0\) as \((x, y)\) approaches \((x_0, y_0)\). The step is the distance \(\sqrt{(\Delta x)^2+(\Delta y)^2}\).
:::

::: plain-explanation
text: |
  The increment \(\Delta z\) is the change in height on the surface. The tangent-plane increment is the change in height on the plane:
  \[
  f_x(x_0, y_0)\,\Delta x+f_y(x_0, y_0)\,\Delta y.
  \]
  Those two changes differ by the remainder \(r\). The surface and the plane both contain the point \((x_0, y_0, f(x_0, y_0))\), so both heights approach \(f(x_0, y_0)\). Differentiability asks for the two coefficients in \(r\) to approach \(0\). The quotient of \(r\) by the step then approaches \(0\), so \(r\) goes to \(0\) faster than the step.
:::

::: visual
kind: tangent-plane
caption: |
  The surface is \(z = x^2 + y^2\), the function of the first worked example. The point starts at \((1, 2)\). Move it and see the tangent plane touch the surface at the marked point.
params:
  x0: 1
  y0: 2
:::

::: worked-example
title: Remainder for \(x^2+y^2\)
problem: |
  Show that \(f(x, y)=x^2+y^2\) is differentiable at \((1, 2)\), and find the remainder.
solution: |
  The value of \(f\) at \((1, 2)\) is \(5\). The partials are \(f_x=2x\) and \(f_y=2y\), so
  \[
  \begin{aligned}
  f_x(1, 2)&=2,\\
  f_y(1, 2)&=4.
  \end{aligned}
  \]
  The increment of \(f\) is \(\Delta z=x^2+y^2-5\). The tangent-plane increment is \(2(x-1)+4(y-2)\). The remainder is
  \[
  \begin{aligned}
  r&=x^2+y^2-5-2(x-1)-4(y-2),\\
  &=(x-1)^2+(y-2)^2.
  \end{aligned}
  \]
  Let \(s=\sqrt{(x-1)^2+(y-2)^2}\) be the step. Then
  \[
  \begin{aligned}
  r&=s^2,\\
  \frac{r}{s}&=s\quad\text{whenever } s\neq 0.
  \end{aligned}
  \]
  As \((x, y)\) approaches \((1, 2)\), this quotient approaches \(0\). The remainder goes to \(0\) faster than the step. In coefficient form, \(r=(x-1)\Delta x+(y-2)\Delta y\), and both coefficients approach \(0\). Thus \(f\) is differentiable at \((1, 2)\). The continuity theorem applies as well, because \(f\), \(f_x=2x\) and \(f_y=2y\) are continuous at \((1, 2)\).
:::

::: guided-example
title: Remainder for a product
problem: |
  Show that \(f(x, y)=xy\) is differentiable at \((1, 1)\) by finding the remainder and its two coefficients.
steps:
  - The value \(f(1, 1)\) is \(1\). The partial \(f_x\) equals \(y\), so \(f_x(1, 1)=1\). The partial \(f_y\) equals \(x\), so \(f_y(1, 1)=1\).
  - The increment is \(\Delta z=xy-1\). The tangent-plane increment is \((x-1)+(y-1)\).
  - |
    The remainder is
    \[
    \begin{aligned}
    r&=xy-1-(x-1)-(y-1),\\
    &=(x-1)(y-1).
    \end{aligned}
    \]
  - |
    Write
    \[
    r=(y-1)\Delta x+0\cdot\Delta y.
    \]
    The coefficient of \(\Delta x\) is \(y-1\), and the coefficient of \(\Delta y\) is \(0\). Both approach \(0\) as \((x, y)\) approaches \((1, 1)\), so \(f\) is differentiable at \((1, 1)\).
:::

::: trap
text: |
  The quotient of the remainder by the step has to approach \(0\). For \(f(x, y)=x\) at the origin, the partials are \(f_x=1\) and \(f_y=0\), and the tangent-plane increment is \(x\), so the remainder in the definition is \(0\). Replacing those slopes by \(0\) produces the **candidate remainder** \(r=x\). This \(r\) approaches \(0\). Along the \(x\)-axis the quotient of \(r\) by the distance is

  - \(1\) on the positive side,
  - \(-1\) on the negative side,

  so the quotient does not approach \(0\).
:::

::: going-deeper
title: The epsilon form of the remainder
text: |
  Definition 14.3.4 writes the two coefficients as \(\epsilon_1\) and \(\epsilon_2\). Let \(\Delta x=x-x_0\), \(\Delta y=y-y_0\) and \(\Delta z=f(x, y)-f(x_0, y_0)\). The function is differentiable at \((x_0, y_0)\) if
  \[
  \begin{aligned}
  \Delta z&=f_x(x_0, y_0)\,\Delta x\\
  &\quad+f_y(x_0, y_0)\,\Delta y\\
  &\quad+\epsilon_1\Delta x+\epsilon_2\Delta y,
  \end{aligned}
  \]
  and both \(\epsilon_1\) and \(\epsilon_2\) approach \(0\) as \((x, y)\) approaches \((x_0, y_0)\). The height on the surface is then
  \[
  \begin{aligned}
  f(x, y)&=f(x_0, y_0)\\
  &\quad+f_x(x_0, y_0)(x-x_0)\\
  &\quad+f_y(x_0, y_0)(y-y_0)\\
  &\quad+\epsilon_1\Delta x+\epsilon_2\Delta y.
  \end{aligned}
  \]
  The first three terms on the right are the height of the tangent plane. Fixing \(y=y_0\) makes \(\Delta y=0\), and the difference quotient in \(x\) equals \(f_x(x_0, y_0)+\epsilon_1\). As \(\Delta x\) approaches \(0\), this quotient approaches the partial derivative in \(x\). The same calculation with \(x\) fixed recovers the partial derivative in \(y\).
:::

::: key-points
text: |
  - The function \(f\) is differentiable at \((x_0, y_0)\) when \(\Delta z=f_x(x_0, y_0)\,\Delta x+f_y(x_0, y_0)\,\Delta y+r\), with \(\Delta x=x-x_0\), \(\Delta y=y-y_0\) and \(\Delta z=f(x, y)-f(x_0, y_0)\). The remainder \(r\) equals \(\Delta x\) times one coefficient plus \(\Delta y\) times another, and both coefficients approach \(0\) as \((x, y)\) approaches \((x_0, y_0)\).
  - The quotient of \(r\) by the step \(\sqrt{(\Delta x)^2+(\Delta y)^2}\) then approaches \(0\), so \(r\) goes to \(0\) faster than the step.
  - The usual slip accepts a candidate remainder because it approaches \(0\). The quotient of the remainder by the step has to approach \(0\). For \(f(x, y)=x\) at the origin, replacing the slopes by \(0\) gives the candidate \(r=x\), which approaches \(0\). Along the \(x\)-axis its quotient by the distance equals \(1\) or \(-1\), so it does not approach \(0\).
:::

::: concept-question
id: l5-differentiability.q-380ea4d4
question: |
  For \(f(x, y)=x^2+y^2\) at \((1, 2)\), the remainder is \((x-1)^2+(y-2)^2\). The quotient of this remainder by the step equals what, off the point?
options:
  - text: |
      The step itself, and that quotient approaches \(0\) as \((x, y)\) approaches \((1, 2)\).
    correct: true
  - text: |
      The constant \(1\).
  - text: |
      The partial \(f_x(1, 2)\), which equals \(2\).
explanation: |
  Let \(s\) be the step. The remainder equals \(s^2\), so
  \[
  \frac{r}{s}=\frac{s^2}{s}=s\quad\text{wherever } s\neq 0.
  \]
  As \((x, y)\) approaches \((1, 2)\), the step \(s\) approaches \(0\).
:::

::: exercise
id: l5-differentiability.remainder-linear
tier: basic
topics:
  - differentiability
statement: |
  Find the remainder \(r(x, y)\) for \(f(x, y)=x^2+3y\) at \((0, 0)\), after the tangent-plane increment is subtracted from the increment of \(f\).
solution: |
  The value \(f(0, 0)\) is \(0\). The partial \(f_x\) equals \(2x\), so \(f_x(0, 0)=0\). The partial \(f_y\) equals \(3\), so \(f_y(0, 0)=3\). The increment of \(f\) is \(x^2+3y\). The tangent-plane increment is \(3y\). The remainder is
  \[
  r(x, y)=x^2.
  \]
provenance: written-for-site
steps:
  - Read off \(f_x(0, 0)=0\) and \(f_y(0, 0)=3\).
  - Subtract the tangent-plane increment \(3y\) from \(x^2+3y\).
verification:
  checks:
    - expr: (x**2 + 3*y) - (3*y) - x**2
      expected: "0"
    - expr: diff(x**2 + 3*y, x).subs(x, 0)
      expected: "0"
    - expr: diff(x**2 + 3*y, y)
      expected: "3"
:::

::: section
title: Continuous partials
:::

::: formal-statement
kind: theorem
title: Continuous partials
source:
  source: handout
  section: "14.3"
  page: 363
text: |
  If \(f(x, y)\) and its partial derivatives are continuous at a point \((x_0, y_0)\), then \(f\) is differentiable there.
:::

::: plain-explanation
text: |
  The theorem has a hypothesis and a conclusion:

  - Hypothesis: \(f\) and its partial derivatives are continuous at the point.
  - Conclusion: \(f\) is differentiable there.

  A polynomial and its partial derivatives are continuous at every point, so a polynomial is differentiable at every point.
:::

::: trap
text: |
  Differentiability at a point asks for a remainder that goes to \(0\) faster than the step. That condition is what makes the plane tangent. Define \(f(0, 0)=0\), and for other points
  \[
  f(x, y)=\frac{xy^2}{x^2+y^4}.
  \]
  Along each axis the function is \(0\), so \(f_x(0, 0)=0\) and \(f_y(0, 0)=0\). Along \(x=y^2\) the height is \(\frac{1}{2}\). The increment stays \(\frac{1}{2}\) and does not approach \(0\), so the origin has no tangent plane.
:::

::: key-points
text: |
  - If \(f\), \(f_x\) and \(f_y\) are continuous at \((x_0, y_0)\), then \(f\) is differentiable there.
  - A polynomial and its partial derivatives are continuous at every point, so a polynomial is differentiable at every point.
  - The usual slip takes the existence of both partials as enough for a tangent plane. The condition that makes the plane tangent is a remainder that goes to \(0\) faster than the step. For \(f(x, y)=\frac{xy^2}{x^2+y^4}\) with \(f(0, 0)=0\), both partials are \(0\) at the origin, but the height along \(x=y^2\) stays \(\frac{1}{2}\), so the origin has no tangent plane.
:::

::: concept-question
id: l5-differentiability.q-f94ff47e
question: |
  The function \(f(x, y)=x^2+y^2\) and the partials \(f_x=2x\), \(f_y=2y\) are continuous at \((1, 2)\). What follows?
options:
  - text: |
      \(f\) is differentiable at \((1, 2)\).
    correct: true
  - text: |
      Both partials have to equal \(0\).
  - text: |
      The remainder equals the step.
explanation: |
  If \(f\) and its partial derivatives are continuous at a point, then \(f\) is differentiable there. Here \(f_x(1, 2)=2\) and \(f_y(1, 2)=4\). The function and both partials are continuous at \((1, 2)\).
:::

::: concept-question
id: l5-differentiability.q-1604f7a5
question: |
  Define \(f(0,0)=0\) and \(f(x,y)=\frac{xy^2}{x^2+y^4}\) otherwise. Both partials equal \(0\) at the origin. What follows about differentiability at the origin?
options:
  - text: |
      \(f\) is not differentiable at the origin.
    correct: true
  - text: |
      \(f\) is differentiable at the origin, because both partials exist.
  - text: |
      \(f\) is differentiable at the origin, because \(f\) equals \(0\) along both axes.
  - text: |
      \(f\) is not differentiable at the origin, because \(f_x(0,0)\) does not exist.
explanation: |
  Each partial only sees one axis, and along each axis \(f=0\), so \(f_x(0,0)=f_y(0,0)=0\). Along \(x=y^2\) the value is
  \[
  f(y^2,y)=\frac{y^4}{y^4+y^4}=\frac{1}{2}.
  \]
  The value stays \(\frac{1}{2}\) as \(y\to 0\) and does not approach \(f(0,0)=0\), so \(f\) is not continuous at the origin. A differentiable function is continuous, so \(f\) is not differentiable there.
:::

::: exercise
id: l5-differentiability.remainder-product
tier: standard
topics:
  - differentiability
statement: |
  Find the remainder \(r(x, y)\) for \(f(x, y)=xy^2\) at \((1, 1)\).
solution: |
  The value \(f(1, 1)\) is \(1\). The partials are \(f_x=y^2\) and \(f_y=2xy\), so \(f_x(1, 1)=1\) and \(f_y(1, 1)=2\). The increment of \(f\) is \(xy^2-1\). The tangent-plane increment is \((x-1)+2(y-1)\). The remainder is
  \[
  \begin{aligned}
  r(x, y)&=xy^2-1-(x-1)-2(y-1),\\
  &=(y-1)^2+2(x-1)(y-1)+(x-1)(y-1)^2.
  \end{aligned}
  \]
  The form \(r=\bigl(2(y-1)+(y-1)^2\bigr)\Delta x+(y-1)\,\Delta y\) has coefficients \(2(y-1)+(y-1)^2\) and \(y-1\), and both approach \(0\) as \((x, y)\) approaches \((1, 1)\).
provenance: written-for-site
steps:
  - Evaluate \(f\), \(f_x\) and \(f_y\) at \((1, 1)\).
  - Subtract \((x-1)+2(y-1)\) from \(xy^2-1\).
verification:
  checks:
    - expr: (x*y**2 - 1) - ((x - 1) + 2*(y - 1)) - ((y - 1)**2 + 2*(x - 1)*(y - 1) + (x - 1)*(y - 1)**2)
      expected: "0"
    - expr: (x*y**2 - 1) - ((x - 1) + 2*(y - 1)) - ((2*(y - 1) + (y - 1)**2)*(x - 1) + (y - 1)*(y - 1))
      expected: "0"
    - expr: diff(x*y**2, x).subs(x, 1).subs(y, 1)
      expected: "1"
    - expr: diff(x*y**2, y).subs(x, 1).subs(y, 1)
      expected: "2"
:::

::: exercise
id: l5-differentiability.implies-continuous
tier: exam
topics:
  - differentiability
  - continuity
statement: |
  Prove that if \(f\) is differentiable at \((x_0, y_0)\), then \(f\) is continuous at \((x_0, y_0)\).
solution: |
  Differentiability gives
  \[
  \begin{aligned}
  \Delta z&=f_x(x_0, y_0)\,\Delta x\\
  &\quad+f_y(x_0, y_0)\,\Delta y+r,
  \end{aligned}
  \]
  where \(\Delta z=f(x, y)-f(x_0, y_0)\) and the quotient of \(r\) by the step \(s=\sqrt{(\Delta x)^2+(\Delta y)^2}\) approaches \(0\). As \((x, y)\) approaches \((x_0, y_0)\), the step \(s\) approaches \(0\). The product of that quotient with \(s\) is \(r\), so \(r\) approaches \(0\). Each of \(\Delta x\) and \(\Delta y\) approaches \(0\), and the partials at the point are fixed numbers, so the tangent-plane increment approaches \(0\). Therefore \(\Delta z\) approaches \(0\). The values \(f(x, y)\) approach \(f(x_0, y_0)\). The limit of \(f\) at \((x_0, y_0)\) equals \(f(x_0, y_0)\), so \(f\) is continuous there.
provenance: written-for-site
steps:
  - Write the increment as the tangent-plane increment plus a fast remainder.
  - Show that both pieces approach \(0\), hence \(\Delta z\) approaches \(0\).
verification:
  checkable: false
  reason: The answer is a proof that differentiability implies continuity.
:::

::: sheet-item
id: l5-differentiability.sheet-definition
category: formula
text: |
  The function \(f\) is differentiable at \((x_0, y_0)\) when
  \[
  \Delta z=f_x(x_0, y_0)\Delta x+f_y(x_0, y_0)\Delta y+r
  \]
  and \(r\) goes to \(0\) faster than the step \(\sqrt{(\Delta x)^2+(\Delta y)^2}\), with \(\Delta z=f(x, y)-f(x_0, y_0)\).
:::

::: sheet-item
id: l5-differentiability.sheet-partials
category: trap
text: |
  Both partials can exist where there is still no tangent plane. For \(\frac{xy^2}{x^2+y^4}\) with value \(0\) at the origin, both partials are \(0\), and the height along \(x=y^2\) stays \(\frac{1}{2}\).
:::

::: exercise
id: l5-differentiability.ex-remainder-x2y
tier: standard
topics: [differentiability]
statement: |
  Let \(f(x,y)=x^2y\) and \((x_0,y_0)=(1,1)\). Write \(\Delta x=x-1\) and \(\Delta y=y-1\).
  a) Find the tangent-plane increment and the remainder \(r\).

  b) Write \(r\) as \(\Delta x\) times one coefficient plus \(\Delta y\) times another, and show that both coefficients approach \(0\) as \((x,y)\to(1,1)\).

  c) Let \(s=\sqrt{(\Delta x)^2+(\Delta y)^2}\). Show that \(r/s\to 0\), and conclude that \(f\) is differentiable at \((1,1)\).
solution: |
  a) The value \(f(1,1)=1\). The partials are \(f_x=2xy\) and \(f_y=x^2\), so \(f_x(1,1)=2\) and \(f_y(1,1)=1\). The tangent-plane increment is \(2\Delta x+\Delta y\). The increment of \(f\) is \(x^2y-1\), and
  \[
  r=x^2y-1-2\Delta x-\Delta y.
  \]
  Substitute \(x=1+\Delta x\) and \(y=1+\Delta y\):
  \[
  \begin{aligned}
  x^2y&=(1+\Delta x)^2(1+\Delta y)\\
  &=1+2\Delta x+(\Delta x)^2+\Delta y\\
  &\quad+2\Delta x\Delta y+(\Delta x)^2\Delta y.
  \end{aligned}
  \]
  Therefore
  \[
  r=(\Delta x)^2+2\,\Delta x\,\Delta y+(\Delta x)^2\,\Delta y.
  \]

  b) Every term of \(r\) contains \(\Delta x\), so
  \[
  \begin{aligned}
  r&=\Delta x\cdot\bigl(\Delta x+2\Delta y+\Delta x\Delta y\bigr)\\
  &\quad+\Delta y\cdot 0.
  \end{aligned}
  \]
  The coefficients are:

  - of \(\Delta x\): \(\Delta x+2\Delta y+\Delta x\Delta y\),
  - of \(\Delta y\): \(0\).

  As \((x,y)\to(1,1)\), both \(\Delta x\) and \(\Delta y\) approach \(0\), so both coefficients approach \(0\).

  c) Since \(|\Delta x|\le s\), the bound
  \[
  \begin{aligned}
  \frac{|r|}{s}&\le\frac{|\Delta x|}{s}\\
  &\quad\cdot\bigl|\Delta x+2\Delta y+\Delta x\Delta y\bigr|\\
  &\le\bigl|\Delta x+2\Delta y+\Delta x\Delta y\bigr|.
  \end{aligned}
  \]
  holds for \(s\neq 0\). The right side approaches \(0\), so \(r/s\to 0\). The remainder goes to \(0\) faster than the step, and \(f\) is differentiable at \((1,1)\). The continuity theorem gives the same conclusion, because \(f\), \(f_x=2xy\) and \(f_y=x^2\) are polynomials.
provenance: written-for-site
steps:
  - The tangent-plane increment is 2 Delta x + Delta y, and the remainder is (Delta x)^2 + 2 Delta x Delta y + (Delta x)^2 Delta y.
  - The coefficient of Delta x is Delta x + 2 Delta y + Delta x Delta y and the coefficient of Delta y is 0, so both approach 0.
  - The bound |r|/s <= |coefficient| shows r/s approaches 0, so f is differentiable.
verification:
  checks:
    - expr: '(diff(x**2*y,x), diff(x**2*y,y))'
      expected: "(2*x*y, x**2)"
    - expr: '(diff(x**2*y,x).subs({x:1,y:1}), diff(x**2*y,y).subs({x:1,y:1}), (x**2*y).subs({x:1,y:1}))'
      expected: "(2,1,1)"
    - expr: 'expand(x**2*y - 1 - 2*(x-1) - (y-1))'
      expected: "expand((x-1)**2 + 2*(x-1)*(y-1) + (x-1)**2*(y-1))"
    - expr: 'expand(x**2*y - 1 - 2*(x-1) - (y-1) - (x-1)*((x-1)+2*(y-1)+(x-1)*(y-1)))'
      expected: "0"
:::
