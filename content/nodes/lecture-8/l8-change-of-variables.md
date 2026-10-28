---
id: l8-change-of-variables
lecture: 8
order: 1
title: Change of variables and the Jacobian
prerequisites: [l7-general-regions, l5-partial-derivatives]
sources:
  - { source: handout, section: "15.7", page: 411 }
  - { source: sheet-3, page: 2 }
  - { source: retake-2023, page: 1 }
  - { source: final-2024, page: 1 }
  - { source: final-2025, page: 1 }
  - { source: final-2021, page: 2 }
  - { source: retake-2023, page: 1 }
  - { source: mock-exam-1, page: 1 }
  - { source: mock-2022, page: 2 }
examWeight: high
examWeightNote: Every recent final has a double integral with a named substitution. Placement in this lecture is provisional until the lecture has taken place. Statements taken from the handout stay provisional until the lecture 8 notes arrive.
status: reviewed
notation: |
  The professor writes \(\frac{df}{dx}\) and \(f_x\). The handout writes that same derivative as \(\frac{\partial f}{\partial x}\).
---

::: section
title: The Jacobian factor
:::

::: formal-statement
kind: theorem
title: Change of variables
source: { source: handout, section: "15.7", page: 417 }
text: |
  For \(x = f(u,v)\) and \(y = g(u,v)\), the factor that replaces \(dx\,dy\) is
  \[
  \left|\frac{\partial(x,y)}{\partial(u,v)}\right| = |f_u g_v - g_u f_v|.
  \]
  This is the absolute value of the determinant
  \[
  \begin{vmatrix}
  f_u & g_u \\
  f_v & g_v
  \end{vmatrix}.
  \]

  The change-of-variables theorem is the triple-integral formula. With \(x = f(u,v,w)\), \(y = g(u,v,w)\) and \(z = h(u,v,w)\),
  \[
  \frac{\partial(x,y,z)}{\partial(u,v,w)}
  =
  \begin{vmatrix}
  f_u & g_u & h_u \\
  f_v & g_v & h_v \\
  f_w & g_w & h_w
  \end{vmatrix}.
  \]
  If the region \(S\) in \(uvw\)-space corresponds to the region \(R\) in \(xyz\)-space, then
  \[
  \iiint_R F(x,y,z)\,dV
  =
  \iiint_S F\bigl(f(u,v,w), g(u,v,w), h(u,v,w)\bigr)
  \left|\frac{\partial(x,y,z)}{\partial(u,v,w)}\right|
  \,du\,dv\,dw.
  \]
:::

::: plain-explanation
text: |
  1. Rewrite the integrand in the new coordinates.
  2. Multiply by the absolute value of the **Jacobian**.
  3. Describe the region in those coordinates.

  In two variables that absolute value is \(|f_u g_v - g_u f_v|\). In three variables the symbol \(\partial(x,y,z)/\partial(u,v,w)\) is the signed determinant, and the integral multiplies by its absolute value. For \(x = (u+v)/2\) and \(y = (u-v)/2\), the signed determinant equals \(-\frac12\), so the area factor is \(\frac12\).
:::

::: visual
kind: change-of-variables
caption: |
  The linear map \(x = (u+v)/2\), \(y = (u-v)/2\) sends the square \(0 \leq u \leq 2\), \(0 \leq v \leq 2\) to the square with corners \((0,0)\), \((1,1)\), \((2,0)\) and \((1,-1)\). The determinant equals \(-\frac12\), and the area factor is \(\frac12\).
params:
  map: linear
:::

::: trap
text: |
  The two-variable factor is the absolute value \(|f_u g_v - g_u f_v|\). For \(x = (u+v)/2\) and \(y = (u-v)/2\), the determinant \(f_u g_v - g_u f_v\) equals \(-\dfrac{1}{2}\). The factor in the integral is \(\dfrac{1}{2}\). Dropping the absolute-value bars and multiplying by \(-\dfrac{1}{2}\) reverses the sign of the integral.
:::

::: trap
text: |
  When the Jacobian determinant is negative, the integral still multiplies by the positive absolute value. On the square with corners \((-1,0)\), \((0,1)\), \((1,0)\) and \((0,-1)\), the integral of \(x^{2}+y^{2}\) equals \(\dfrac{2}{3}\). Using the signed determinant \(-\dfrac{1}{2}\) as the factor produces \(-\dfrac{2}{3}\).
:::

::: going-deeper
title: Tangent vectors and the Jacobian
text: |
  A small rectangle in the \(r\theta\)-plane, with sides \(\Delta r\) and \(\Delta\theta\), maps to a patch in the \(xy\)-plane. For small sides that patch is approximately a parallelogram, and the area of a parallelogram is the length of the cross product of its sides.

  Freeze \(\theta\) at \(\theta_0\) and let \(r\) vary. The curve is \(\langle r\cos\theta_0, r\sin\theta_0, 0\rangle\), with tangent \(\langle\cos\theta_0, \sin\theta_0, 0\rangle\). A small step along it is \(\langle\cos\theta_0, \sin\theta_0, 0\rangle\, dr\).

  Freeze \(r\) at \(r_0\) and let \(\theta\) vary. The curve is \(\langle r_0\cos\theta, r_0\sin\theta, 0\rangle\), with tangent \(\langle -r_0\sin\theta, r_0\cos\theta, 0\rangle\). A small step along it is \(\langle -r_0\sin\theta_0, r_0\cos\theta_0, 0\rangle\, d\theta\).

  The cross product of the \(\theta\)-step with the \(r\)-step is \(\langle 0, 0, -r_0\rangle\, d\theta\, dr\). Its length is \(r_0\, dr\, d\theta\). So \(dx\, dy = r\, dr\, d\theta\).

  For a general substitution \(x = f(u,v)\), \(y = g(u,v)\), the same construction uses the tangent vectors \(\langle f_u, g_u, 0\rangle\, du\) and \(\langle f_v, g_v, 0\rangle\, dv\). Their cross product is \(\langle 0, 0, f_u g_v - g_u f_v\rangle\, du\, dv\). The length of that vector is \(|f_u g_v - g_u f_v|\, du\, dv\).
:::

::: key-points
text: |
  - For \(x = f(u,v)\) and \(y = g(u,v)\), the factor that replaces \(dx\,dy\) is the absolute value \(|f_u g_v - g_u f_v|\). The integrand is rewritten in \(u\) and \(v\), and the region is described in those coordinates.
  - In three variables the symbol \(\partial(x,y,z)/\partial(u,v,w)\) is the signed determinant. The integral over \(R\) multiplies by its absolute value and runs over the corresponding region \(S\) in \(uvw\)-space.
  - The usual slip multiplies by the signed determinant. For \(x = (u+v)/2\) and \(y = (u-v)/2\) that determinant is \(-\frac12\), and using it reverses the sign of the integral. The factor is the absolute value \(\frac12\).
:::

::: concept-question
id: l8-change-of-variables.q-f57c44fa
question: |
  For \(x = (u+v)/2\) and \(y = (u-v)/2\), which factor multiplies the integrand?
options:
  - text: |
      \(-\dfrac{1}{2}\)
  - text: |
      \(\dfrac{1}{2}\)
    correct: true
  - text: |
      \(1\)
  - text: |
      \(2\)
explanation: |
  The determinant \(f_u g_v - g_u f_v\) equals \(-\dfrac{1}{2}\). The factor in the integral is the absolute value \(\dfrac{1}{2}\).
:::

::: concept-question
id: l8-change-of-variables.q-ae4673f6
question: |
  A substitution has Jacobian determinant \(-4\). Which factor appears in the integral?
options:
  - text: |
      \(-4\)
  - text: |
      \(16\)
  - text: |
      \(4\)
    correct: true
  - text: |
      \(1\)
explanation: |
  The integral uses the absolute value of the Jacobian determinant. The absolute value of \(-4\) is \(4\).
:::

::: exercise
id: l8-change-of-variables.15-7-9
number: "15.7.9"
tier: basic
topics: [change-of-variables]
statement: |
  Compute the Jacobian for the substitutions
  \[
  \begin{aligned}
  x&= \rho \sin\phi \cos\theta,\\
  y&= \rho \sin\phi \sin\theta,\\
  z&= \rho \cos\phi.
  \end{aligned}
  \]
solution: |
  Order the variables as \(\rho\), \(\phi\), \(\theta\). The Jacobian determinant is
  \[
  \frac{\partial(x,y,z)}{\partial(\rho,\phi,\theta)}
  =
  \begin{vmatrix}
  \sin\phi\cos\theta & \sin\phi\sin\theta & \cos\phi \\
  \rho\cos\phi\cos\theta & \rho\cos\phi\sin\theta & -\rho\sin\phi \\
  -\rho\sin\phi\sin\theta & \rho\sin\phi\cos\theta & 0
  \end{vmatrix}.
  \]
  The bottom entry of the third column is 0. The cofactor of \(\cos\phi\) is \(\rho^{2}\cos\phi\sin\phi\). The cofactor of \(-\rho\sin\phi\) is \(-\rho\sin^{2}\phi\). The determinant is
  \[
  \begin{aligned}
  &\cos\phi \cdot \rho^{2}\cos\phi\sin\phi\\
  &\quad+ (-\rho\sin\phi)\cdot(-\rho\sin^{2}\phi)\\
  &= \rho^{2}\sin\phi\,(\cos^{2}\phi + \sin^{2}\phi)\\
  &= \rho^{2}\sin\phi.
  \end{aligned}
  \]

  The Jacobian determinant equals \(\rho^{2}\sin\phi\).
provenance: written-for-site
steps:
  - The solution writes the matrix of partial derivatives in the order \(\rho\), \(\phi\), \(\theta\).
  - The solution expands the determinant and simplifies it to \(\rho^{2}\sin\phi\).
verification:
  checks:
    - expr: "Matrix([[diff(rho*sin(phi)*cos(t), rho), diff(rho*sin(phi)*sin(t), rho), diff(rho*cos(phi), rho)], [diff(rho*sin(phi)*cos(t), phi), diff(rho*sin(phi)*sin(t), phi), diff(rho*cos(phi), phi)], [diff(rho*sin(phi)*cos(t), t), diff(rho*sin(phi)*sin(t), t), diff(rho*cos(phi), t)]]).det()"
      expected: "rho**2*sin(phi)"
:::

::: section
title: Choosing a substitution
:::

::: worked-example
title: A linear substitution
problem: |
  Compute the integral of \((x+y)e^{x-y}\) over the region \(D\) in the first quadrant bounded by \(x+y = 2\).
solution: |
  The region \(D\) is the triangle \(x \geq 0\), \(y \geq 0\), \(x+y \leq 2\).

  Set \(u = x+y\) and \(v = x-y\). Then
  \[
  \begin{aligned}
  x&= (u+v)/2,\\
  y&= (u-v)/2,\\
  x_u y_v - y_u x_v&= -\frac12.
  \end{aligned}
  \]
  The factor in the integral is the absolute value \(\frac12\).

  The integrand becomes \(u e^{v}\). The inequalities become \(0 \leq u \leq 2\) and \(-u \leq v \leq u\). Therefore
  \[
  \int_0^2 \int_{-u}^{u} u e^{v} \cdot \frac12 \, dv \, du
  = \int_0^2 u \sinh u \, du.
  \]
  The antiderivative of \(u \sinh u\) is \(u \cosh u - \sinh u\). From 0 to 2 this equals \(2\cosh 2 - \sinh 2\), and that quantity equals \(\dfrac{e^{4}+3}{2e^{2}}\).

  The value of the integral over \(D\) is \(\dfrac{e^{4}+3}{2e^{2}}\).
:::

::: guided-example
title: Polar coordinates as a substitution
problem: |
  Evaluate \(\int_{-1}^{1} \int_{0}^{\sqrt{1-x^{2}}} \sqrt{x^{2}+y^{2}}\, dy\, dx\).
steps:
  - |
    The region is the upper half of the unit disk, \(x^{2}+y^{2} \leq 1\) with \(y \geq 0\). The integrand is the distance to the origin.
  - |
    Set \(x = r \cos \theta\) and \(y = r \sin \theta\). For \(r \geq 0\), the integrand \(\sqrt{x^{2}+y^{2}}\) equals \(r\).
  - |
    With \(f(r,\theta) = r\cos\theta\) and \(g(r,\theta) = r\sin\theta\), the combination \(f_r g_{\theta} - g_r f_{\theta}\) equals \(r\). The factor in the integral is the absolute value \(|r|\), which equals \(r\) on this region.
  - |
    The half-disk is the rectangle \(0 \leq \theta \leq \pi\), \(0 \leq r \leq 1\).
  - |
    The integral equals \(\int_0^{\pi} \int_0^{1} r \cdot r \, dr \, d\theta = \dfrac{\pi}{3}\). The value over the upper half-disk is \(\dfrac{\pi}{3}\).
:::

::: key-points
text: |
  - Choose the substitution so that the integrand or the region becomes simpler in the new coordinates. The substitution \(u = x+y\), \(v = x-y\) turns \((x+y)e^{x-y}\) into \(ue^{v}\), and \(x = r\cos\theta\), \(y = r\sin\theta\) turns \(\sqrt{x^{2}+y^{2}}\) into \(r\).
  - For \(u = x+y\) and \(v = x-y\), the determinant \(x_u y_v - y_u x_v\) equals \(-\frac12\), and the factor in the integral is the absolute value \(\frac12\). The triangle \(x \geq 0\), \(y \geq 0\), \(x+y \leq 2\) becomes \(0 \leq u \leq 2\), \(-u \leq v \leq u\).
  - For polar coordinates the determinant equals \(r\), and the factor in the integral is the absolute value \(|r|\), which equals \(r\) for \(r \geq 0\). The upper half of the unit disk becomes the rectangle \(0 \leq \theta \leq \pi\), \(0 \leq r \leq 1\).
:::

::: concept-question
id: l8-change-of-variables.q-7189bc07
question: |
  The region is bounded by \(xy = 1\), \(xy = 4\), \(y = 1\) and \(y = 4\). Which substitution makes those boundaries into constant coordinates?
options:
  - text: |
      \(x = u\), \(y = uv\)
  - text: |
      \(x = \dfrac{u}{v}\), \(y = v\)
    correct: true
  - text: |
      \(x = \dfrac{u+v}{2}\), \(y = \dfrac{u-v}{2}\)
  - text: |
      \(x = r\cos\theta\), \(y = r\sin\theta\)
explanation: |
  With \(x = u/v\) and \(y = v\), the product \(xy\) equals \(u\) and the second coordinate equals \(v\). The region becomes the rectangle \(1 \leq u \leq 4\), \(1 \leq v \leq 4\).
:::

::: concept-question
id: l8-change-of-variables.q-9e109bc2
question: |
  Which substitution sends the first-quadrant region \(9x^{2}+4y^{2} \leq 1\) to the unit quarter-disk?
options:
  - text: |
      \(x = 3u\), \(y = 2v\)
  - text: |
      \(x = u\), \(y = v\)
  - text: |
      \(x = \dfrac{u}{3}\), \(y = \dfrac{v}{2}\)
    correct: true
  - text: |
      \(x = u+v\), \(y = u\)
explanation: |
  Under \(x = u/3\) and \(y = v/2\), the expression \(9x^{2}+4y^{2}\) equals \(u^{2}+v^{2}\). The first-quadrant part of the ellipse is \(u \geq 0\), \(v \geq 0\) and \(u^{2}+v^{2} \leq 1\). The absolute value of the Jacobian is \(\dfrac{1}{6}\).
:::

::: exercise
id: l8-change-of-variables.15-7-2
number: "15.7.2; sheet 3 exercise 4.1"
tier: basic
topics: [double-integrals, change-of-variables]
statement: |
  Evaluate \(\iint xy\, dx\, dy\) over the square with corners \((0,0)\), \((1,1)\), \((2,0)\) and \((1,-1)\) in two ways: directly, and using \(x = (u+v)/2\), \(y = (u-v)/2\).
solution: |
  The square runs over \(0 \leq x \leq 1\), \(-x \leq y \leq x\), and then over \(1 \leq x \leq 2\), \(x-2 \leq y \leq 2-x\). On each vertical slice the interval in \(y\) is symmetric about 0, and \(xy\) is odd in \(y\). Each inner integral is 0, so the double integral equals 0.

  For the second way, \(u = x+y\) and \(v = x-y\). The four corners go to \((0,0)\), \((2,0)\), \((2,2)\) and \((0,2)\), so the new region is \(0 \leq u \leq 2\), \(0 \leq v \leq 2\). The determinant equals \(-\dfrac{1}{2}\), and the factor in the integral is \(\dfrac{1}{2}\). The integrand becomes \(\dfrac{u^{2}-v^{2}}{4}\). The integral of \(\dfrac{u^{2}-v^{2}}{8}\) over that square is 0.

  Both ways give 0.
provenance: handout-answer
steps:
  - The solution describes the square and uses symmetry in the direct integral.
  - The solution applies \(x = (u+v)/2\), \(y = (u-v)/2\), with absolute value \(\frac12\), on the square \(0 \leq u,v \leq 2\).
  - The solution states that both ways equal 0.
verification:
  checks:
    - expr: "integrate(x*y, (y, -x, x), (x, 0, 1)) + integrate(x*y, (y, x-2, 2-x), (x, 1, 2))"
      expected: "0"
    - expr: "integrate((u**2 - v**2)/8, (v, 0, 2), (u, 0, 2))"
      expected: "0"
:::

::: exercise
id: l8-change-of-variables.15-7-1
number: "15.7.1"
tier: standard
topics: [double-integrals, change-of-variables]
statement: |
  Complete the integral of example 15.7.1 by converting to polar coordinates. The region is \(x^{2} - xy + y^{2} \leq 2\), the integrand is \(x^{2} - xy + y^{2}\), and the substitution already in use is
  \[
  \begin{aligned}
  x&= \sqrt{2}\, u - \sqrt{\frac{2}{3}}\, v,\\
  y&= \sqrt{2}\, u + \sqrt{\frac{2}{3}}\, v.
  \end{aligned}
  \]
solution: |
  Under this substitution the integrand \(x^{2} - xy + y^{2}\) becomes \(2u^{2} + 2v^{2}\). The Jacobian determinant equals \(\dfrac{4}{\sqrt{3}}\), so the absolute value is \(\dfrac{4}{\sqrt{3}}\). The region becomes the unit disk \(u^{2} + v^{2} \leq 1\).

  In polar coordinates \(u = r\cos\theta\), \(v = r\sin\theta\), with \(0 \leq r \leq 1\) and \(0 \leq \theta \leq 2\pi\), the polar factor contributes another \(r\). The integrand times both factors is
  \[
  (2r^{2}) \cdot \frac{4}{\sqrt{3}} \cdot r = \frac{8r^{3}}{\sqrt{3}}.
  \]
  Integrating in \(r\) gives \(\dfrac{2}{\sqrt{3}}\), and integrating in \(\theta\) then multiplies by \(2\pi\). The product is \(\dfrac{4\pi}{\sqrt{3}} = \dfrac{4\pi\sqrt{3}}{3}\).

  The value of the integral is \(\dfrac{4\pi\sqrt{3}}{3}\).
provenance: handout-answer
steps:
  - The solution records the new integrand \(2u^{2}+2v^{2}\), the Jacobian factor \(4/\sqrt{3}\) and the unit disk.
  - The solution converts the disk to polar coordinates and includes the factor \(r\).
  - The solution states the value of the integral.
verification:
  checks:
    - expr: "(sqrt(2)*u - sqrt(Rational(2, 3))*v)**2 - (sqrt(2)*u - sqrt(Rational(2, 3))*v)*(sqrt(2)*u + sqrt(Rational(2, 3))*v) + (sqrt(2)*u + sqrt(Rational(2, 3))*v)**2"
      expected: "2*u**2 + 2*v**2"
    - expr: "sqrt(2)*sqrt(Rational(2, 3)) - sqrt(2)*(-sqrt(Rational(2, 3)))"
      expected: "4/sqrt(3)"
    - expr: "integrate((2*r**2)*(4/sqrt(3))*r, (r, 0, 1), (t, 0, 2*pi))"
      expected: "4*pi*sqrt(3)/3"
:::

::: exercise
id: l8-change-of-variables.15-7-3
number: "15.7.3; sheet 3 exercise 4.2"
tier: standard
topics: [double-integrals, change-of-variables]
statement: |
  Evaluate \(\iint (x^{2}+y^{2})\, dx\, dy\) over the square with corners \((-1,0)\), \((0,1)\), \((1,0)\) and \((0,-1)\) in two ways: directly, and using \(x = (u+v)/2\), \(y = (u-v)/2\).
solution: |
  The square is \(|x| + |y| \leq 1\). By symmetry of \(x^{2}+y^{2}\),
  \[
  \begin{aligned}
  &\iint_D (x^{2}+y^{2})\, dA\\
  &= 4 \int_0^1 \int_0^{1-x} (x^{2}+y^{2})\, dy\, dx.
  \end{aligned}
  \]
  The inner integral equals \((1-x)x^{2} + \dfrac{(1-x)^{3}}{3}\). Integrating that from 0 to 1 gives \(\dfrac{1}{6}\), so the direct value is \(4 \cdot \dfrac{1}{6} = \dfrac{2}{3}\).

  The same linear map sends the square to \(-1 \leq u \leq 1\), \(-1 \leq v \leq 1\). The area factor is \(\dfrac{1}{2}\), and \(x^{2}+y^{2}\) becomes \(\dfrac{u^{2}+v^{2}}{2}\). The integral of \(\dfrac{u^{2}+v^{2}}{4}\) over that square equals \(\dfrac{2}{3}\).

  Both ways give \(\dfrac{2}{3}\).
provenance: handout-answer
steps:
  - The solution evaluates the direct integral over \(|x|+|y| \leq 1\) by symmetry.
  - The solution applies the linear map, with area factor \(\frac12\), on the square \(-1 \leq u,v \leq 1\).
  - The solution states that both ways equal \(\frac23\).
verification:
  checks:
    - expr: "4*integrate(x**2+y**2, (y, 0, 1-x), (x, 0, 1))"
      expected: "2/3"
    - expr: "integrate((u**2+v**2)/4, (v, -1, 1), (u, -1, 1))"
      expected: "2/3"
:::

::: exercise
id: l8-change-of-variables.15-7-4
number: "15.7.4"
tier: standard
topics: [double-integrals, change-of-variables]
statement: |
  Evaluate \(\iint (x+y) e^{x-y}\, dx\, dy\) over the triangle with corners \((0,0)\), \((-1,1)\) and \((1,1)\) in two ways: directly, and using \(x = (u+v)/2\), \(y = (u-v)/2\).
solution: |
  The triangle is \(0 \leq y \leq 1\), \(-y \leq x \leq y\). An antiderivative in \(x\) is \((x+y-1)e^{x-y}\). The inner evaluation from \(-y\) to \(y\) equals \(2y - 1 + e^{-2y}\). Then
  \[
  \begin{aligned}
  &\int_0^1 \bigl(2y - 1 + e^{-2y}\bigr)\, dy\\
  &= \frac12 - \frac{1}{2e^{2}}\\
  &= \frac{e^{2}-1}{2e^{2}}.
  \end{aligned}
  \]

  With \(u = x+y\) and \(v = x-y\), the corners go to \((0,0)\), \((0,-2)\) and \((2,0)\). The new region is \(0 \leq u \leq 2\), \(u-2 \leq v \leq 0\). The area factor is \(\dfrac{1}{2}\), and the integrand becomes \(u e^{v}\). Then
  \[
  \begin{aligned}
  &\int_0^2 \int_{u-2}^{0} u e^{v} \cdot \frac12 \, dv \, du\\
  &= \int_0^2 \frac{u}{2}\bigl(1 - e^{u-2}\bigr)\, du\\
  &= \frac{e^{2}-1}{2e^{2}}.
  \end{aligned}
  \]

  Both ways give \(\dfrac{e^{2}-1}{2e^{2}}\).
provenance: handout-answer
steps:
  - The solution evaluates the direct integral on \(0 \leq y \leq 1\), \(-y \leq x \leq y\).
  - The solution applies the linear map, with area factor \(\frac12\), on the triangle in the \(uv\)-plane.
  - The solution states that both ways equal \((e^{2}-1)/(2e^{2})\).
verification:
  checks:
    - expr: "integrate((x+y)*exp(x-y), (x, -y, y), (y, 0, 1))"
      expected: "(exp(2)-1)/(2*exp(2))"
    - expr: "integrate(u*exp(v)/2, (v, u-2, 0), (u, 0, 2))"
      expected: "(exp(2)-1)/(2*exp(2))"
:::

::: exercise
id: l8-change-of-variables.15-7-5
number: "15.7.5; sheet 3 exercise 4.3"
tier: standard
topics: [double-integrals, change-of-variables]
statement: |
  Evaluate \(\iint y(x-y)\, dx\, dy\) over the parallelogram with corners \((0,0)\), \((3,3)\), \((7,3)\) and \((4,0)\) in two ways: directly, and using \(x = u+v\), \(y = u\). Sheet 3 writes the same change as \(u = x-y\) and \(v = y\).
solution: |
  The parallelogram is \(0 \leq y \leq 3\), \(y \leq x \leq y+4\). The inner integral is
  \[
  \begin{aligned}
  &\int_y^{y+4} y(x-y)\, dx\\
  &= y \cdot \frac{(x-y)^{2}}{2} \Big|_{y}^{y+4}\\
  &= 8y.
  \end{aligned}
  \]
  Then \(\int_0^3 8y\, dy = 36\).

  For \(x = u+v\) and \(y = u\), one has \(u = y\) and \(v = x-y\). The determinant equals \(-1\), so the factor is \(1\). The integrand becomes \(uv\), and the image is \(0 \leq u \leq 3\), \(0 \leq v \leq 4\). Then \(\int_0^3 \int_0^4 uv\, dv\, du = 36\).

  The sheet's naming \(u = x-y\), \(v = y\) swaps those letters. Its determinant equals \(1\), so the factor is again \(1\), and the integral is again \(36\).

  Both ways give \(36\).
provenance: handout-answer
steps:
  - The solution evaluates the direct integral on \(0 \leq y \leq 3\), \(y \leq x \leq y+4\).
  - The solution applies \(x = u+v\), \(y = u\), with absolute value \(1\), on the rectangle \(0 \leq u \leq 3\), \(0 \leq v \leq 4\).
  - The solution notes that the sheet's naming swaps the letters and states the common value \(36\).
verification:
  checks:
    - expr: "integrate(y*(x-y), (x, y, y+4), (y, 0, 3))"
      expected: "36"
    - expr: "integrate(u*v, (v, 0, 4), (u, 0, 3))"
      expected: "36"
    - expr: "integrate(u*v, (v, 0, 3), (u, 0, 4))"
      expected: "36"
:::

::: exercise
id: l8-change-of-variables.15-7-6
number: "15.7.6; sheet 3 exercise 4.4"
tier: standard
topics: [double-integrals, change-of-variables]
statement: |
  Evaluate \(\iint \sqrt{x^{2}+y^{2}}\, dx\, dy\) over the triangle with corners \((0,0)\), \((4,4)\) and \((4,0)\) using \(x = u\), \(y = uv\).
solution: |
  The triangle is \(0 \leq x \leq 4\), \(0 \leq y \leq x\). With \(x = u\) and \(y = uv\), this is \(0 \leq u \leq 4\), \(0 \leq v \leq 1\). The Jacobian determinant equals \(u\). On this region \(u \geq 0\), so the factor is \(u\).

  The integrand becomes \(u\sqrt{1+v^{2}}\). Times the factor \(u\), the integral is
  \[
  \begin{aligned}
  &\int_0^1 \sqrt{1+v^{2}}\, dv \int_0^4 u^{2}\, du\\
  &= \frac{64}{3} \int_0^1 \sqrt{1+v^{2}}\, dv.
  \end{aligned}
  \]
  The antiderivative of \(\sqrt{1+v^{2}}\) is \(\dfrac{v}{2}\sqrt{1+v^{2}} + \dfrac{1}{2}\log\bigl(v + \sqrt{1+v^{2}}\bigr)\). From 0 to 1 it equals \(\dfrac{1}{2}\bigl(\sqrt{2} + \log(1+\sqrt{2})\bigr)\). Multiplying by \(\dfrac{64}{3}\) gives
  \[
  \frac{32}{3}\bigl(\sqrt{2} + \log(1+\sqrt{2})\bigr).
  \]

  The value of the integral is \(\dfrac{32}{3}\bigl(\sqrt{2} + \log(1+\sqrt{2})\bigr)\).
provenance: handout-answer
steps:
  - The solution describes the triangle as \(0 \leq x \leq 4\), \(0 \leq y \leq x\), and the image \(0 \leq u \leq 4\), \(0 \leq v \leq 1\).
  - The solution uses the Jacobian factor \(u\) and the integrand \(u\sqrt{1+v^{2}}\).
  - The solution evaluates the separated integrals and states the value.
verification:
  checks:
    - expr: "integrate(u**2*sqrt(1+v**2), (u, 0, 4), (v, 0, 1))"
      expected: "32*(sqrt(2)+log(1+sqrt(2)))/3"
    - expr: "integrate(sqrt(x**2+y**2), (y, 0, x), (x, 0, 4))"
      expected: "32*(sqrt(2)+log(1+sqrt(2)))/3"
:::

::: exercise
id: l8-change-of-variables.15-7-7
number: "15.7.7; sheet 3 exercise 4.5"
tier: standard
topics: [double-integrals, change-of-variables]
statement: |
  Evaluate \(\iint y \sin(xy)\, dx\, dy\) over the region bounded by \(xy = 1\), \(xy = 4\), \(y = 1\) and \(y = 4\) using \(x = u/v\), \(y = v\).
solution: |
  The substitution gives \(u = xy\) and \(v = y\). The region becomes the rectangle \(1 \leq u \leq 4\), \(1 \leq v \leq 4\). The Jacobian determinant equals \(\dfrac{1}{v}\). On this region \(v \geq 1\), so the factor is \(\dfrac{1}{v}\).

  The integrand \(y\sin(xy)\) becomes \(v\sin u\). Times \(\dfrac{1}{v}\), the integrand is \(\sin u\). Then
  \[
  \int_1^4 \int_1^4 \sin u\, du\, dv = 3\bigl(\cos 1 - \cos 4\bigr).
  \]

  The value of the integral is \(3\cos 1 - 3\cos 4\).
provenance: handout-answer
steps:
  - The solution describes the image rectangle \(1 \leq u \leq 4\), \(1 \leq v \leq 4\).
  - The solution uses the Jacobian factor \(1/v\) and simplifies the integrand to \(\sin u\).
  - The solution states the value \(3\cos 1 - 3\cos 4\).
verification:
  checks:
    - expr: "integrate(sin(u), (u, 1, 4), (v, 1, 4))"
      expected: "3*cos(1) - 3*cos(4)"
:::

::: exercise
id: l8-change-of-variables.15-7-8
number: "15.7.8"
tier: standard
topics: [double-integrals, change-of-variables]
statement: |
  Evaluate \(\iint \sin(9x^{2}+4y^{2})\, dA\) over the region in the first quadrant bounded by the ellipse \(9x^{2}+4y^{2} = 1\).
solution: |
  The region is \(9x^{2}+4y^{2} \leq 1\) with \(x \geq 0\) and \(y \geq 0\). Set \(x = u/3\) and \(y = v/2\). Then \(9x^{2}+4y^{2} = u^{2}+v^{2}\), and the Jacobian determinant equals \(\dfrac{1}{6}\). The absolute value is \(\dfrac{1}{6}\). The image is the quarter-disk \(u \geq 0\), \(v \geq 0\), \(u^{2}+v^{2} \leq 1\).

  In polar coordinates \(u = r\cos\theta\), \(v = r\sin\theta\), one has \(0 \leq r \leq 1\) and \(0 \leq \theta \leq \pi/2\). The integral becomes
  \[
  \int_0^{\pi/2} \int_0^1 \sin(r^{2}) \cdot \frac16 \cdot r \, dr \, d\theta.
  \]
  The inner integral equals \(\dfrac{1-\cos 1}{12}\), because \(\int_0^1 \sin(r^{2})\, r\, dr = \dfrac{1-\cos 1}{2}\). Multiplying by the angle \(\dfrac{\pi}{2}\) gives \(\dfrac{\pi(1-\cos 1)}{24}\).

  The value of the integral is \(\dfrac{\pi(1-\cos 1)}{24}\).
provenance: handout-answer
steps:
  - The solution chooses \(x = u/3\), \(y = v/2\) and records the Jacobian factor \(\frac16\) and the quarter-disk.
  - The solution converts to polar coordinates and integrates \(\sin(r^{2})\, r\).
  - The solution states the value \(\pi(1-\cos 1)/24\).
verification:
  checks:
    - expr: "integrate(sin(r**2)*r/6, (r, 0, 1), (t, 0, pi/2))"
      expected: "pi*(1-cos(1))/24"
:::

::: exercise
id: l8-change-of-variables.15-7-10
number: "15.7.10"
tier: standard
topics: [triple-integrals, change-of-variables]
statement: |
  Evaluate \(\iiint_E dV\), where \(E\) is the solid enclosed by the ellipsoid \(\dfrac{x^{2}}{a^{2}} + \dfrac{y^{2}}{b^{2}} + \dfrac{z^{2}}{c^{2}} = 1\), using \(x = au\), \(y = bv\) and \(z = cw\).
solution: |
  The substitution sends the unit ball \(u^{2}+v^{2}+w^{2} \leq 1\) to the ellipsoid. The Jacobian matrix is diagonal, with entries \(a\), \(b\) and \(c\), so the determinant equals \(abc\). The absolute value is \(|abc|\).

  For positive \(a\), \(b\) and \(c\), the factor is \(abc\). The unit ball has volume \(\dfrac{4}{3}\pi\), which is the integral of \(\rho^{2}\sin\phi\) over \(0 \leq \rho \leq 1\), \(0 \leq \phi \leq \pi\) and \(0 \leq \theta \leq 2\pi\). Multiplying by \(abc\) gives the volume of the ellipsoid.

  The volume is \(\dfrac{4}{3}\pi abc\).
provenance: handout-answer
steps:
  - The solution identifies the preimage as the unit ball and the Jacobian determinant as \(abc\).
  - The solution multiplies the volume \(\frac43\pi\) of the unit ball by \(abc\) when \(a\), \(b\) and \(c\) are positive.
  - The solution states the volume \(\frac43\pi abc\).
verification:
  checks:
    - expr: "Matrix([[a, 0, 0], [0, b, 0], [0, 0, c]]).det()"
      expected: "a*b*c"
    - expr: "a*b*c*integrate(rho**2*sin(phi), (rho, 0, 1), (phi, 0, pi), (t, 0, 2*pi))"
      expected: "(4/3)*pi*a*b*c"
:::

::: exercise
id: l8-change-of-variables.retake-2023-q5
tier: exam
topics: [double-integrals, change-of-variables]
examBlock: double-integrals
pastExam:
  year: 2023
  paper: Retake
  question: "5"
  points: 3
statement: |
  Compute the integral of \((x+y)e^{x-y}\) over the domain \(D\) in the first quadrant bounded by \(x+y = 2\).

  Hint: \(\cosh t = (e^{t}+e^{-t})/2\), \(\sinh t = (e^{t}-e^{-t})/2\), \(\cosh' t = \sinh t\) and \(\sinh' t = \cosh t\).
solution: |
  The region \(D\) is the triangle \(x \geq 0\), \(y \geq 0\), \(x+y \leq 2\).

  Set \(u = x+y\) and \(v = x-y\), so \(x = (u+v)/2\) and \(y = (u-v)/2\). The determinant equals \(-\dfrac{1}{2}\). The factor in the integral is \(\dfrac{1}{2}\). The integrand becomes \(u e^{v}\), and the region becomes \(0 \leq u \leq 2\), \(-u \leq v \leq u\).

  The inner integral in \(v\) produces \(u\sinh u\). An antiderivative is \(u\cosh u - \sinh u\), using the hint. From 0 to 2 the value is \(2\cosh 2 - \sinh 2\). Expanding the hyperbolic functions gives
  \[
  2\cosh 2 - \sinh 2 = \frac{e^{4}+3}{2e^{2}}.
  \]

  The value of the integral over \(D\) is \(\dfrac{e^{4}+3}{2e^{2}}\).
provenance: written-for-site
steps:
  - The solution identifies the first-quadrant triangle \(x+y \leq 2\).
  - The solution applies \(u = x+y\), \(v = x-y\), with absolute value \(\frac12\), and describes the image \(0 \leq u \leq 2\), \(|v| \leq u\).
  - The solution integrates \(u\sinh u\) and states the value.
verification:
  checks:
    - expr: "integrate((x+y)*exp(x-y), (y, 0, 2-x), (x, 0, 2))"
      expected: "(exp(4)+3)/(2*exp(2))"
    - expr: "integrate(u*exp(v)/2, (v, -u, u), (u, 0, 2))"
      expected: "(exp(4)+3)/(2*exp(2))"
:::

::: exercise
id: l8-change-of-variables.final-2024-q4d
tier: exam
topics: [double-integrals, change-of-variables]
examBlock: double-integrals
pastExam:
  year: 2024
  paper: Final
  question: "4d"
  points: 2
statement: |
  Compute the integral

  d) of \( 1/x^2 \) in the domain in the first half quadrant \( (0 \leq y \leq x) \) and between the curves \( x^2+4y^2 = 1/3 \) and \( x^2 + 4y^2 = 1 \). Use a first substitution \( x' = x \), \( y' = 2y \) and recall the derivative of \( \tan \).
solution: |
  The region satisfies
  \[
  0\leq y\leq x,\qquad \frac13\leq x^2+4y^2\leq1.
  \]
  Apply the printed substitution \(x'=x\), \(y'=2y\). Its Jacobian gives
  \[
  dx\,dy=\frac12\,dx'\,dy',
  \]
  and the image is the circular sector
  \[
  \frac1{\sqrt3}\leq r\leq1,\qquad
  0\leq\theta\leq\arctan(2),
  \]
  because \(y\leq x\) becomes \(y'\leq2x'\). Using \(x'=r\cos\theta\),
  \[
  \begin{aligned}
  I&=\int_0^{\arctan(2)}\int_{1/\sqrt3}^{1}\frac{1}{2r^2\cos^2\theta}\,r\,dr\,d\theta\\
  &=\frac12\left[\log r\right]_{1/\sqrt3}^{1}\left[\tan\theta\right]_0^{\arctan(2)}\\
  &=\frac12\cdot\frac12\log3\cdot2\\
  &=\frac{\log3}{2}.
  \end{aligned}
  \]

  The value of the integral over the elliptical sector is \( \frac{\log3}{2} \).
provenance: written-for-site
steps:
  - The solution identifies the elliptical annular sector and its boundary inequalities.
  - The solution applies the printed substitution first, gives its Jacobian and converts the image to polar coordinates.
  - The solution uses the tangent antiderivative and states the value of the integral.
verification:
  checks:
    - expr: integrate(1/(2*r*cos(t)**2), (r, 1/sqrt(3), 1), (t, 0, atan(2)))
      expected: "log(3)/2"
:::

::: exercise
id: l8-change-of-variables.final-2025-q4d
tier: exam
topics: [double-integrals, change-of-variables]
examBlock: double-integrals
pastExam:
  year: 2025
  paper: Final
  question: "4d"
  points: 2
statement: |
  Compute the integral

  d) of \( xe^{x^2+y} \) in the domain \( D \) bounded by \( x^2 + y = 1 \) and \( y = 0 \) using the substitution \( u = x^2 + y \) and \( v = y \). (sketch D and its image by substitution).
solution: |
  The region \(D\) is the symmetric parabolic cap
  \[
  -1\leq x\leq1,\qquad 0\leq y\leq1-x^2.
  \]
  Its sketch has the segment from \((-1,0)\) to \((1,0)\) below and the parabola \(y=1-x^2\) above.

  For \(u=x^2+y\) and \(v=y\),
  \[
  \frac{\partial(u,v)}{\partial(x,y)}=2x.
  \]
  The map has two branches, one for each sign of \(x\). Each branch has the same triangular image
  \[
  0\leq v\leq u\leq1,
  \]
  whose sketch has vertices \((0,0)\), \((1,0)\) and \((1,1)\). On the positive branch,
  \[
  xe^{x^2+y}\,dx\,dy=\frac12e^u\,du\,dv,
  \]
  while on the negative branch the sign is reversed. Therefore,
  \[
  \begin{aligned}
  I&=\frac12\int_0^1\int_0^u e^u\,dv\,du\\
  &\quad-\frac12\int_0^1\int_0^u e^u\,dv\,du\\
  &=0.
  \end{aligned}
  \]

  The value of the integral over the full bounded region is \(0\).
provenance: written-for-site
steps:
  - The solution describes the sketch of the symmetric parabolic cap and the triangular image of each branch.
  - The solution computes the Jacobian and accounts for both signs of the original horizontal coordinate.
  - The solution combines the two branch integrals and states the value.
verification:
  checks:
    - expr: integrate(x*exp(x**2+y), (y, 0, 1-x**2), (x, -1, 1))
      expected: "0"
:::

::: sheet-item
id: l8-change-of-variables.sheet-jacobian
category: formula
text: |
  For \(x = f(u,v)\) and \(y = g(u,v)\), the factor is \(\left|\dfrac{\partial(x,y)}{\partial(u,v)}\right| = |f_u g_v - g_u f_v|\). For a triple integral the factor is the absolute value of the determinant \(\dfrac{\partial(x,y,z)}{\partial(u,v,w)}\).
:::

::: sheet-item
id: l8-change-of-variables.sheet-absolute-value
category: trap
text: |
  The factor is an absolute value. The map \(x = (u+v)/2\), \(y = (u-v)/2\) has determinant \(-\dfrac{1}{2}\), so the integral uses \(\dfrac{1}{2}\). Using \(-\dfrac{1}{2}\) as the factor changes the sign of the result. On \(x^{2}+y^{2}\) over the square with corners \((-1,0)\), \((0,1)\), \((1,0)\) and \((0,-1)\), that mistake produces \(-\dfrac{2}{3}\) where the integral equals \(\dfrac{2}{3}\).
:::

::: exercise
id: l8-change-of-variables.mock-exam-1-q4
tier: exam
topics: [double-integrals, change-of-variables]
examBlock: double-integrals
pastExam:
  year: 2022
  paper: Mock exam
  question: "4"
  points: 1
statement: |
  Compute the integral of \( (x + y) e^{x - y} \) on the first-quadrant region \( D \) bounded by \( x + y = 2 \), using \( u = x + y \) and \( v = x - y \).

  Recall \( \cosh t = (e^t + e^{-t})/2 \), \( \sinh t = (e^t - e^{-t})/2 \), \( \cosh' = \sinh \) and \( \sinh' = \cosh \).
solution: |
  The change of variables gives \( x = (u + v)/2 \) and \( y = (u - v)/2 \). The Jacobian determinant of \( (x, y) \) in \( (u, v) \) is \( -1/2 \), so \( dx\,dy = du\,dv/2 \). The triangle becomes \( 0 \le u \le 2 \), \( -u \le v \le u \), and \( (x + y) e^{x - y} = u e^v \).

  \[
  \begin{aligned}
  &\int_0^2\frac{u}{2}\bigl(e^u - e^{-u}\bigr)\,du\\
  &=\int_0^2 u\sinh u\,du\\
  &=2\cosh 2 - \sinh 2.
  \end{aligned}
  \]

  The value of the integral is \( 2\cosh 2 - \sinh 2 \).
provenance: written-for-site
steps:
  - The map \( u = x + y \), \( v = x - y \) has absolute Jacobian \( 1/2 \).
  - The integrand becomes \( u e^v \) on \( 0 \le u \le 2 \), \( -u \le v \le u \).
  - The value is \( 2\cosh 2 - \sinh 2 \).
verification:
  checks:
    - expr: integrate((x + y)*exp(x - y), (y, 0, 2 - x), (x, 0, 2))
      expected: "2*cosh(2) - sinh(2)"
:::

::: exercise
id: l8-change-of-variables.mock-exam-1-q5
tier: exam
topics: [double-integrals, change-of-variables]
examBlock: double-integrals
pastExam:
  year: 2022
  paper: Mock exam
  question: "5"
  points: 1
statement: |
  Let \( a > 0 \) and \( b > 0 \). Compute the integral of

  \[
  \frac{ab}{1 + (x - y)^2}\, e^{-(ax + by)}
  \]

  over \( x > 0 \), \( y > 0 \), using \( u = ax + by \) and \( v = x - y \).
solution: |
  The Jacobian matrix of \( (u, v) \) has determinant \( -(a + b) \), so \( dx\,dy = du\,dv/(a + b) \). Solving for the old coordinates gives \( x = (u + bv)/(a + b) \) and \( y = (u - av)/(a + b) \). The first quadrant is \( u > 0 \) and \( -u/b < v < u/a \).

  The integral becomes

  \[
  \begin{aligned}
  &\frac{ab}{a + b}\\
  &\quad\int_0^\infty e^{-u}\bigl(\arctan(u/a)\\
  &\qquad + \arctan(u/b)\bigr)\,du.
  \end{aligned}
  \]

  The same value, written with \( v \) as the outer variable, is

  \[
  \frac{ab}{a + b}\left(
  \int_0^\infty\frac{e^{-av}}{1 + v^2}\,dv
  +\int_0^\infty\frac{e^{-bv}}{1 + v^2}\,dv
  \right).
  \]

  For \( p > 0 \),

  \[
  \begin{aligned}
  &\int_0^\infty\frac{e^{-pw}}{1 + w^2}\,dw\\
  &=\sin p\,\operatorname{Ci}(p)\\
  &\quad+ \cos p\left(\frac{\pi}{2} - \operatorname{Si}(p)\right).
  \end{aligned}
  \]

  The value of the integral is \( \dfrac{ab}{a + b}\bigl(F(a) + F(b)\bigr) \), where \( F(p) \) is the combination of \( \operatorname{Ci} \) and \( \operatorname{Si} \) above.
provenance: written-for-site
steps:
  - The substitution \( u = ax + by \), \( v = x - y \) has absolute Jacobian \( 1/(a + b) \).
  - The first quadrant becomes \( u > 0 \), \( -u/b < v < u/a \).
  - The value is \( ab/(a + b) \) times \( F(a) + F(b) \).
verification:
  checks:
    - expr: "Matrix([[a, b], [1, -1]]).det()"
      expected: "-(a + b)"
    - expr: "integrate(exp(-Symbol('p', positive=True)*w)/(1 + w**2), (w, 0, oo))"
      expected: "sin(Symbol('p', positive=True))*Ci(Symbol('p', positive=True)) + cos(Symbol('p', positive=True))*(pi/2 - Si(Symbol('p', positive=True)))"
:::

::: exercise
id: l8-change-of-variables.mock-2022-q7
tier: exam
topics: [double-integrals, change-of-variables]
examBlock: double-integrals
pastExam:
  year: 2022
  paper: Mock
  question: "7"
  points: 1
statement: |
  Compute \( \displaystyle\iint_D \frac{y}{x^2 + y^2}\,dx\,dy \) where \( D = \{(x, y) : 0 < x < y < e\} \). The derivative of \( \arctan t \) is \( 1/(1 + t^2) \).
solution: |
  Here \( e \) is the base of the natural logarithm. For each fixed \( y > 0 \),

  \[
  \begin{aligned}
  &\int_0^y \frac{y}{x^2 + y^2}\,dx\\
  &= \arctan(x/y)\Big|_0^y\\
  &= \arctan 1\\
  &= \frac{\pi}{4}.
  \end{aligned}
  \]

  The outer integral is then \( \displaystyle\int_0^e \frac{\pi}{4}\,dy = \frac{\pi e}{4} \). The integrand is unbounded at the origin, and this iterated integral still converges.

  The value of the integral is \( \dfrac{\pi e}{4} \).
provenance: written-for-site
steps:
  - The inner integral in \( x \) equals \( \pi/4 \) for each \( y > 0 \).
  - The outer integral from \( 0 \) to \( e \) equals \( \pi e/4 \).
verification:
  checks:
    - expr: integrate(y/(x**2 + y**2), (x, 0, y), (y, 0, exp(1)))
      expected: "pi*exp(1)/4"
:::

::: exercise
id: l8-change-of-variables.final-2021-q8-3
tier: exam
topics: [volumes, change-of-variables]
examBlock: triple-integrals-volumes
pastExam:
  year: 2021
  paper: Final
  question: "8.3"
  points: 2
statement: |
  Let \( S \) be the surface \( z^2 + x^4 + y^4 = 1 \). Using

  \[
  \varphi(r, \theta) = \bigl(r\sqrt{\cos\theta},\, r\sqrt{\sin\theta}\bigr),
  \]

  express the volume \( V \) enclosed by \( S \) as a product of two integrals.
solution: |
  The upper and lower halves contribute a factor \( 2 \). The integrand is even in \( x \) and in \( y \), so the four quadrants contribute a factor \( 4 \). With \( D_+ = \{x \ge 0,\, y \ge 0,\, x^4 + y^4 \le 1\} \),

  \[
  V = 8\iint_{D_+} \sqrt{1 - x^4 - y^4}\,dx\,dy.
  \]

  On \( \varphi \), one has \( x^4 + y^4 = r^4 \). The Jacobian determinant is

  \[
  \det D\varphi = \frac{r}{2\sqrt{\sin\theta}\,\sqrt{\cos\theta}},
  \]

  for \( 0 \le r \le 1 \) and \( 0 \le \theta \le \pi/2 \). Therefore

  \[
  \begin{aligned}
  V&=4\left(\int_0^1 r\sqrt{1 - r^4}\,dr\right)\\
  &\quad\left(\int_0^{\pi/2}\frac{d\theta}{\sqrt{\sin\theta\cos\theta}}\right).
  \end{aligned}
  \]

  The radial integral equals \( \pi/8 \). The angular integral is the beta value \( \tfrac12 B(1/4, 1/4) = \Gamma(1/4)^2/(2\sqrt{\pi}) \). The enclosed volume is

  \[
  \frac{\sqrt{\pi}}{4}\,\Gamma\left(\frac14\right)^2.
  \]

  The key's angular substitution writes \( d\theta = 2t\,dt/\sqrt{1 - t^2} \) with \( t = \sqrt{\sin\theta} \). The verified differential is \( d\theta = 2t\,dt/\sqrt{1 - t^4} \).
provenance: official-key
steps:
  - The Jacobian of \( \varphi \) is \( r/(2\sqrt{\sin\theta}\sqrt{\cos\theta}) \).
  - The volume is the product with prefactor 4.
  - The verified closed form is \( \sqrt{\pi}\,\Gamma(1/4)^2/4 \).
verification:
  checks:
    - expr: "Matrix([[diff(r*sqrt(cos(theta)), r), diff(r*sqrt(cos(theta)), theta)], [diff(r*sqrt(sin(theta)), r), diff(r*sqrt(sin(theta)), theta)]]).det()"
      expected: "r/(2*sqrt(sin(theta))*sqrt(cos(theta)))"
    - expr: "(r*sqrt(cos(theta)))**4 + (r*sqrt(sin(theta)))**4"
      expected: "r**4"
    - expr: "integrate(sqrt(1 - w**2), (w, 0, 1))/2"
      expected: "pi/8"
    - expr: "beta(Rational(1, 4), Rational(1, 4))/2"
      expected: "gamma(Rational(1, 4))**2/(2*sqrt(pi))"
    - expr: "4*(pi/8)*gamma(Rational(1, 4))**2/(2*sqrt(pi))"
      expected: "gamma(Rational(1, 4))**2*sqrt(pi)/4"
discrepancy: |
  The official key gives \( \pi^2\sqrt{2} \). The verified Jacobian is \( r/(2\sqrt{\sin\theta}\sqrt{\cos\theta}) \), so the product has factor 4. The verified volume is \( \sqrt{\pi}\,\Gamma(1/4)^2/4 \).
:::

::: exercise
id: l8-change-of-variables.ex-ellipsoid-moment
tier: standard
topics: [triple-integrals, change-of-variables]
statement: |
  Let \(E\) be the solid \(\dfrac{x^{2}}{a^{2}} + \dfrac{y^{2}}{b^{2}} + \dfrac{z^{2}}{c^{2}} \leq 1\), with \(a\), \(b\) and \(c\) positive.

  (a) Compute \(\iiint_E z^{2}\, dV\), using \(x = au\), \(y = bv\), \(z = cw\) and then spherical coordinates.

  (b) Find the average value of \(z^{2}\) on \(E\).
solution: |
  (a) The substitution sends the unit ball \(u^{2}+v^{2}+w^{2} \leq 1\) to \(E\). The Jacobian determinant is \(abc\), which is positive, so the factor in the integral is \(abc\). The integrand \(z^{2}\) becomes \(c^{2}w^{2}\), so
  \[
  \begin{aligned}
  &\iiint_E z^{2}\, dV\\
  &= abc^{3} \iiint_{u^{2}+v^{2}+w^{2} \leq 1} w^{2}\, dV_{uvw}.
  \end{aligned}
  \]
  In spherical coordinates \(w = \rho\cos\phi\) and the volume element is \(\rho^{2}\sin\phi\,d\rho\,d\phi\,d\theta\). The integral over the unit ball is
  \[
  \int_0^{2\pi}\int_0^{\pi}\int_0^1 \rho^{4}\cos^{2}\phi\sin\phi\, d\rho\, d\phi\, d\theta.
  \]
  The \(\rho\) integral equals \(\dfrac{1}{5}\). The substitution \(s = \cos\phi\) gives \(\int_0^{\pi}\cos^{2}\phi\sin\phi\, d\phi = \int_{-1}^{1} s^{2}\, ds = \dfrac{2}{3}\). The \(\theta\) integral equals \(2\pi\). The product is \(\dfrac{4\pi}{15}\).

  The value of the integral is \(\dfrac{4\pi}{15}\,abc^{3}\).

  (b) The volume of \(E\) is \(\dfrac{4}{3}\pi abc\), because the unit ball has volume \(\dfrac{4}{3}\pi\) and the factor is \(abc\). The average is
  \[
  \frac{\dfrac{4\pi}{15}\,abc^{3}}{\dfrac{4\pi}{3}\,abc} = \frac{c^{2}}{5}.
  \]

  The average value of \(z^{2}\) on \(E\) is \(\dfrac{c^{2}}{5}\).
provenance: written-for-site
steps:
  - The solution uses the factor \(abc\) and rewrites \(z^{2}\) as \(c^{2}w^{2}\).
  - The solution evaluates the integral of \(w^{2}\) over the unit ball in spherical coordinates as \(4\pi/15\).
  - The solution divides by the volume \(\frac43\pi abc\) and states the average \(c^{2}/5\).
verification:
  checks:
    - expr: "integrate(rho**4*cos(p)**2*sin(p), (rho, 0, 1), (p, 0, pi), (t, 0, 2*pi))"
      expected: "4*pi/15"
    - expr: "a*b*c*integrate(c**2*rho**2*cos(p)**2*rho**2*sin(p), (rho, 0, 1), (p, 0, pi), (t, 0, 2*pi))"
      expected: "4*pi*a*b*c**3/15"
    - expr: "(4*pi*a*b*c**3/15)/(4*pi*a*b*c/3)"
      expected: "c**2/5"
:::

::: exercise
id: l8-change-of-variables.ex-quarter-ellipse-moments
tier: standard
topics: [double-integrals, change-of-variables, polar-coordinates]
statement: |
  Let \(D\) be the part of the ellipse \(9x^{2}+4y^{2} \leq 1\) in the first quadrant, so \(x \geq 0\) and \(y \geq 0\). Compute \(\iint_D x^{2}\, dA\) and \(\iint_D y^{2}\, dA\), using \(x = u/3\), \(y = v/2\) and then polar coordinates in the \(uv\)-plane.
solution: |
  Under \(x = u/3\) and \(y = v/2\), the expression \(9x^{2}+4y^{2}\) equals \(u^{2}+v^{2}\). The region \(D\) becomes the quarter-disk \(u \geq 0\), \(v \geq 0\), \(u^{2}+v^{2} \leq 1\). The Jacobian determinant is \(\dfrac{1}{6}\), which is positive, so the factor in the integral is \(\dfrac{1}{6}\).

  For \(x^{2}\), the integrand becomes \(u^{2}/9\). With \(u = r\cos\theta\), \(v = r\sin\theta\), \(0 \leq r \leq 1\) and \(0 \leq \theta \leq \pi/2\), the integral is
  \[
  \begin{aligned}
  &\int_0^{\pi/2}\int_0^1 \frac{r^{2}\cos^{2}\theta}{9}\cdot\frac{1}{6}\cdot r\, dr\, d\theta\\
  &= \frac{1}{54}\int_0^{1} r^{3}\, dr\int_0^{\pi/2}\cos^{2}\theta\, d\theta\\
  &= \frac{1}{54}\cdot\frac{1}{4}\cdot\frac{\pi}{4}.
  \end{aligned}
  \]
  The value is \(\dfrac{\pi}{864}\).

  For \(y^{2}\), the integrand becomes \(v^{2}/4\), and the same steps give
  \[
  \begin{aligned}
  &\frac{1}{24}\int_0^{1} r^{3}\, dr\int_0^{\pi/2}\sin^{2}\theta\, d\theta\\
  &= \frac{1}{24}\cdot\frac{1}{4}\cdot\frac{\pi}{4}\\
  &= \frac{\pi}{384}.
  \end{aligned}
  \]

  The value of \(\iint_D x^{2}\, dA\) is \(\dfrac{\pi}{864}\), and the value of \(\iint_D y^{2}\, dA\) is \(\dfrac{\pi}{384}\).
provenance: written-for-site
steps:
  - The solution gives the substitution, the quarter-disk and the factor \(\frac16\).
  - The solution converts to polar coordinates and includes the factor \(r\).
  - The solution states \(\pi/864\) for \(x^{2}\) and \(\pi/384\) for \(y^{2}\).
verification:
  checks:
    - expr: "integrate((r*cos(t)/3)**2*r/6, (r, 0, 1), (t, 0, pi/2))"
      expected: "pi/864"
    - expr: "integrate((r*sin(t)/2)**2*r/6, (r, 0, 1), (t, 0, pi/2))"
      expected: "pi/384"
    - expr: "integrate((sin(s)/3)**2*(cos(s)/2)*(cos(s)/3), (s, 0, pi/2))"
      expected: "pi/864"
:::

::: exercise
id: l8-change-of-variables.ex-hyperbola-region
tier: exam
topics: [double-integrals, change-of-variables]
examBlock: double-integrals
statement: |
  Let \(D\) be the region in the first quadrant bounded by the curves \(xy = 1\), \(xy = 4\), \(y = x\) and \(y = 2x\). Use \(u = xy\) and \(v = y/x\) to compute the area of \(D\) and the integral \(\iint_D xy\, dA\).
solution: |
  The boundary curves are \(u = 1\), \(u = 4\), \(v = 1\) and \(v = 2\), so \(D\) becomes the rectangle \(1 \le u \le 4\), \(1 \le v \le 2\). In the first quadrant the inverse is \(x = \sqrt{u/v}\), \(y = \sqrt{uv}\).

  The partial derivatives are \(x_u = \dfrac{1}{2\sqrt{uv}}\), \(x_v = -\dfrac{\sqrt u}{2v^{3/2}}\), \(y_u = \dfrac{\sqrt v}{2\sqrt u}\) and \(y_v = \dfrac{\sqrt u}{2\sqrt v}\). Then
  \[
  x_u y_v - x_v y_u = \frac{1}{4v} + \frac{1}{4v} = \frac{1}{2v}.
  \]
  This is positive for \(v \ge 1\), so the factor in the integral is \(\dfrac{1}{2v}\).

  The area is
  \[
  \int_1^4 \int_1^2 \frac{1}{2v}\, dv\, du = 3\cdot\frac{\ln 2}{2} = \frac{3\ln 2}{2}.
  \]
  The integrand \(xy\) equals \(u\), so
  \[
  \begin{aligned}
  &\iint_D xy\, dA\\
  &= \int_1^4 u\, du \int_1^2 \frac{1}{2v}\, dv\\
  &= \frac{15}{2}\cdot\frac{\ln 2}{2}\\
  &= \frac{15\ln 2}{4}.
  \end{aligned}
  \]

  The area of \(D\) is \(\dfrac{3\ln 2}{2}\), and the integral of \(xy\) is \(\dfrac{15\ln 2}{4}\).
provenance: written-for-site
steps:
  - The solution maps \(D\) to the rectangle \(1 \le u \le 4\), \(1 \le v \le 2\).
  - The solution computes the factor \(1/(2v)\) from the inverse \(x = \sqrt{u/v}\), \(y = \sqrt{uv}\).
  - The solution states the area \(3\ln 2/2\) and the integral \(15\ln 2/4\).
verification:
  checks:
    - expr: "Matrix([[diff(sqrt(u/v), u), diff(sqrt(u/v), v)], [diff(sqrt(u*v), u), diff(sqrt(u*v), v)]]).det().subs({u: 2, v: 3})"
      expected: "1/6"
    - expr: "integrate(1/(2*v), (v, 1, 2), (u, 1, 4))"
      expected: "3*log(2)/2"
    - expr: "integrate(u/(2*v), (v, 1, 2), (u, 1, 4))"
      expected: "15*log(2)/4"
:::

::: exercise
id: l8-change-of-variables.ex-diamond-exponential
tier: standard
topics: [double-integrals, change-of-variables]
statement: |
  Evaluate \(\iint_D e^{x+y}\, dA\), where \(D\) is the square \(|x| + |y| \le 1\), using \(u = x+y\) and \(v = x-y\).
solution: |
  The inverse is \(x = (u+v)/2\) and \(y = (u-v)/2\). The determinant \(x_u y_v - y_u x_v\) equals \(-\frac12\), so the factor in the integral is \(\frac12\).

  The four corners \((\pm 1, 0)\) and \((0, \pm 1)\) go to \((1, 1)\), \((-1, -1)\), \((1, -1)\) and \((-1, 1)\). So \(D\) becomes the square \(-1 \le u \le 1\), \(-1 \le v \le 1\). The integrand \(e^{x+y}\) becomes \(e^{u}\). Then
  \[
  \begin{aligned}
  &\iint_D e^{x+y}\, dA\\
  &= \int_{-1}^{1}\int_{-1}^{1} e^{u}\cdot\frac12\, dv\, du\\
  &= \frac12\cdot 2\,(e - e^{-1})\\
  &= e - e^{-1}.
  \end{aligned}
  \]

  The value of the integral is \(e - e^{-1}\).
provenance: written-for-site
steps:
  - The solution uses \(x = (u+v)/2\), \(y = (u-v)/2\) with factor \(\frac12\).
  - The solution maps the diamond to the square \(-1 \le u, v \le 1\) and rewrites the integrand as \(e^{u}\).
  - The solution states the value \(e - e^{-1}\).
verification:
  checks:
    - expr: "integrate(exp(u)/2, (v, -1, 1), (u, -1, 1))"
      expected: "exp(1) - exp(-1)"
    - expr: "integrate(exp(x + y), (y, x - 1, 1 - x), (x, 0, 1)) + integrate(exp(x + y), (y, -1 - x, 1 + x), (x, -1, 0))"
      expected: "exp(1) - exp(-1)"
:::
