---
id: l8-triple-integrals
lecture: 8
order: 2
title: Triple integrals
prerequisites: [l7-general-regions]
sources:
  - { source: handout, section: "15.5", page: 404 }
  - { source: sheet-3, page: 1 }
examWeight: high
examWeightNote: Triple integrals and volumes carry 15% of the two recent finals. Placement in this lecture is provisional until the lecture has taken place. Handout wording stays provisional until the lecture 8 notes arrive.
status: reviewed
notation: |
  The professor writes a partial derivative as \(\frac{df}{dx}\), \(f_x\) or \(f'\). The handout writes the same derivative as \(\frac{\partial f}{\partial x}\).
---

::: section
title: Triple integral over a box
:::

::: formal-statement
kind: method
title: Triple integral over a box
source: { source: handout, section: "15.5", page: 404 }
text: |
  It will come as no surprise that we can also do **triple integrals**, integrals over a three-dimensional region. The simplest application allows us to compute volumes in an alternate way.

  To approximate a volume in three dimensions, we can divide the three-dimensional region into small rectangular boxes, each \(\Delta x \times \Delta y \times \Delta z\) with volume \(\Delta x\Delta y\Delta z\). Then we add them all up and take the limit, to get an integral:

  \[
  \int_{x_0}^{x_1} \int_{y_0}^{y_1} \int_{z_0}^{z_1} dz\, dy\, dx.
  \]

  If the limits are constant, we are simply computing the volume of a rectangular box.
:::

::: plain-explanation
text: |
  A triple integral adds the values of a function over a solid. The integral above does that in the order \(z\), then \(y\), then \(x\). When every limit is a constant, the solid is a rectangular box, and the integrand 1 returns the product of the three side lengths. That product is the volume.

  When the top of the solid is a surface \(z = g(x, y)\), the limits on \(z\) run from the bottom surface to \(g(x, y)\). The **average** of a function on a solid is its triple integral divided by the volume of the solid.
:::

::: worked-example
title: Volume of a box
problem: |
  Find the volume of the rectangular box with opposite corners \((0,0,0)\) and \((1,2,3)\).
solution: |
  The side lengths are 1, 2 and 3, so the limits are constant. The volume is
  \[
  \int_0^1 \int_0^2 \int_0^3 1\, dz\, dy\, dx.
  \]
  \[
  \begin{aligned}
  &\int_0^3 1\, dz=3,\\
  &\int_0^2 3\, dy=3 \cdot 2=6,\\
  &\int_0^1 6\, dx=6.
  \end{aligned}
  \]
  The volume of the box is 6.
:::

::: trap
text: |
  The average of \(xyz\) on the cube with opposite corners \((0,0,0)\) and \((2,2,2)\) is the triple integral divided by the volume 8. Integrating \(xyz\) in \(z\) from 0 to 2 produces \(2xy\), so the factor in front of the double integral of \(xy\) is \(1/4\). The average equals 1. The factor \(1/16\) produces \(1/4\).
:::

::: key-points
text: |
  - Over a box, \(\int_{x_0}^{x_1}\int_{y_0}^{y_1}\int_{z_0}^{z_1} f\, dz\, dy\, dx\) is evaluated by integrating in \(z\), then in \(y\), then in \(x\).
  - With the integrand 1 and constant limits, the triple integral is the volume of a rectangular box, which is the product of the three side lengths.
  - The average of \(f\) on a solid is its triple integral divided by the volume of the solid.
  - The usual slip averages \(xyz\) on the cube with opposite corners \((0,0,0)\) and \((2,2,2)\) with the factor \(1/16\) in front of the double integral of \(xy\), and gets \(1/4\). The factor is \(1/4\), and the average is 1.
:::

::: concept-question
id: l8-triple-integrals.q-c247ba7a
question: |
  In \(\int_0^1 \int_0^x \int_0^{x+y} f(x,y,z)\, dz\, dy\, dx\), which variable is integrated first?
options:
  - text: \(z\), from 0 to \(x+y\).
    correct: true
  - text: \(y\), from 0 to \(x\).
  - text: \(x\), from 0 to 1.
explanation: |
  The differential \(dz\) is the innermost one, so \(z\) is integrated first. The variable \(y\) is next, and \(x\) is last.
:::

::: concept-question
id: l8-triple-integrals.q-1b009b76
question: |
  In \(\int_1^2 \int_y^{y^2} \int_0^{\ln(y+z)} e^x\, dx\, dz\, dy\), which variable is integrated first?
options:
  - text: \(x\), from 0 to \(\ln(y+z)\).
    correct: true
  - text: \(z\), from \(y\) to \(y^2\).
  - text: \(y\), from 1 to 2.
explanation: |
  The differential \(dx\) is the innermost one, so \(x\) is integrated first. The order \(dx\, dz\, dy\) then integrates \(z\), and \(y\) last.
:::

::: concept-question
id: l8-triple-integrals.q-f3a0b715
question: |
  What does \(\int_0^1 \int_0^2 \int_0^3 1\, dz\, dy\, dx\) compute?
options:
  - text: The volume of the box with opposite corners \((0,0,0)\) and \((1,2,3)\). The value is 6.
    correct: true
  - text: The surface area of that box.
  - text: The average value of the coordinate \(z\) on that box.
explanation: |
  The integrand is the constant 1 and every limit is constant, so the integral is the volume of the rectangular box. The side lengths are 1, 2 and 3, and their product is 6.
:::

::: section
title: Bounds that depend on the other variables
:::

::: guided-example
title: Bounds for a tetrahedron
problem: |
  A tetrahedron has corners \((0,0,0)\), \((0,3,0)\), \((2,3,0)\) and \((2,3,5)\). Set up its volume as an iterated integral \(\int\!\int\!\int 1\, dz\, dy\, dx\) and evaluate it.
steps:
  - |
    The base lies in the plane \(z = 0\). There \(x\) runs from 0 to 2. The edge from \((0,0,0)\) to \((2,3,0)\) is the line \(y = 3x/2\), and the edge along \(y = 3\) runs from \(x = 0\) to \(x = 2\). For each fixed \(x\), \(y\) runs from \(3x/2\) to 3.
  - |
    The lower face is \(z = 0\). The upper face passes through \((0,0,0)\) and \((2,3,5)\), and its height does not depend on \(y\). That plane is \(z = 5x/2\). For each \((x, y)\) in the base, \(z\) runs from 0 to \(5x/2\).
  - |
    The volume integral is
    \[
    \int_0^2 \int_{3x/2}^{3} \int_0^{5x/2} 1\, dz\, dy\, dx.
    \]
    \[
    \begin{aligned}
    &\int_0^{5x/2} 1\, dz=\frac{5x}{2},\\
    &\int_{3x/2}^{3}\frac{5x}{2}\, dy=\frac{5x}{2}\left(3 - \frac{3x}{2}\right)\\
    &\qquad =\frac{15x}{2} - \frac{15x^2}{4}.
    \end{aligned}
    \]
  - |
    The antiderivative in \(x\) is \(\frac{15x^2}{4} - \frac{15x^3}{12}\). At \(x = 2\) it equals \(15 - 10 = 5\). The volume of the tetrahedron is 5.
:::

::: trap
text: |
  On the tetrahedron with corners \((0,0,0)\), \((0,3,0)\), \((2,3,0)\) and \((2,3,5)\), the top is the plane \(z = 5x/2\). The inner limits are functions of \(x\). Constant limits \(z\) from 0 to 5 describe a solid of height 5 over the same base, and that integral equals 15. The limits \(z\) from 0 to \(5x/2\) give the volume 5.
:::

::: key-points
text: |
  - If the top of a solid is the surface \(z = g(x, y)\), the limits on \(z\) run from the bottom surface to \(g(x, y)\). Those limits stay functions of \(x\) and \(y\).
  - For the tetrahedron with corners \((0,0,0)\), \((0,3,0)\), \((2,3,0)\) and \((2,3,5)\), the order \(dz\, dy\, dx\) has \(x\) from 0 to 2, \(y\) from \(3x/2\) to 3 and \(z\) from 0 to \(5x/2\). The volume is 5.
  - The usual slip takes constant limits \(z\) from 0 to 5 for that tetrahedron. They describe a solid of height 5 over the same base, and the integral equals 15. The top is the plane \(z = 5x/2\), so the limits \(z\) from 0 to \(5x/2\) give the volume 5.
:::

::: concept-question
id: l8-triple-integrals.q-ffef14bb
question: |
  The tetrahedron with corners \((0,0,0)\), \((0,3,0)\), \((2,3,0)\) and \((2,3,5)\) has top \(z = 5x/2\). Take \(x\) from 0 to 2 and \(y\) from \(3x/2\) to 3. Which limits on \(z\) give the volume?
options:
  - text: From 0 to \(5x/2\).
    correct: true
  - text: From 0 to 5.
  - text: From 0 to \(5y/3\).
explanation: |
  The top is the plane \(z = 5x/2\), so \(z\) runs from 0 to \(5x/2\). The number 5 is the height at the single corner where \(x = 2\). The integral with upper limit 5 equals 15, and the volume is 5.
:::

::: exercise
id: l8-triple-integrals.15.5.1
number: "15.5.1"
tier: basic
topics: [triple-integrals]
statement: |
  Evaluate \(\displaystyle \int_0^1 \int_0^x \int_0^{x+y} (2x + y - 1)\, dz\, dy\, dx\).
solution: |
  The inner integral of \(2x + y - 1\) from \(z = 0\) to \(z = x + y\) equals \((x + y)(2x + y - 1)\). That product expands to \(2x^2 + 3xy + y^2 - x - y\).

  The integral in \(y\) from 0 to \(x\) equals
  \[
  \begin{aligned}
  &2x^3+\frac{3}{2}x^3+\frac{1}{3}x^3\\
  &\qquad -\frac{3}{2}x^2\\
  &=\frac{x^2(23x-9)}{6}.
  \end{aligned}
  \]
  The integral in \(x\) from 0 to 1 equals \(\frac{23}{24} - \frac{1}{2} = \frac{11}{24}\).

  The value of the integral is \(\dfrac{11}{24}\).
provenance: handout-answer
steps:
  - The inner integral in \(z\) is evaluated first.
  - The integrals in \(y\) and in \(x\) are evaluated on the given limits.
  - The solution states the value \(\dfrac{11}{24}\).
verification:
  checks:
    - expr: integrate(2*x + y - 1, (z, 0, x + y), (y, 0, x), (x, 0, 1))
      expected: "11/24"
:::

::: exercise
id: l8-triple-integrals.15.5.2
number: "15.5.2"
tier: standard
topics: [triple-integrals]
statement: |
  Evaluate \(\displaystyle \int_0^2 \int_{-1}^{x^2} \int_1^y xyz\, dz\, dy\, dx\).
solution: |
  The inner integral of \(xyz\) from \(z = 1\) to \(z = y\) equals \(\dfrac{xy}{2}(y^2 - 1)\). This antiderivative applies when \(y < 1\) as well, with the upper limit below the lower limit.

  The integral in \(y\) from \(-1\) to \(x^2\) equals \(\dfrac{x}{8}(x^8 - 2x^4 + 1)\). The integral in \(x\) from 0 to 2 is
  \[
  \frac{1}{8}\left[\frac{x^{10}}{10} - \frac{x^6}{3} + \frac{x^2}{2}\right]_0^2 = \frac{1}{8} \cdot \frac{1246}{15} = \frac{623}{60}.
  \]

  The value of the integral is \(\dfrac{623}{60}\).
provenance: handout-answer
steps:
  - The inner integral in \(z\) is evaluated first.
  - The integrals in \(y\) and in \(x\) are evaluated on the given limits.
  - The solution states the value \(\dfrac{623}{60}\).
verification:
  checks:
    - expr: integrate(x*y*z, (z, 1, y), (y, -1, x**2), (x, 0, 2))
      expected: "623/60"
:::

::: exercise
id: l8-triple-integrals.15.5.3
number: "15.5.3"
tier: standard
topics: [triple-integrals]
statement: |
  Evaluate \(\displaystyle \int_0^1 \int_0^x \int_0^{\ln y} e^{x+y+z}\, dz\, dy\, dx\).
solution: |
  For \(0 < y < 1\), the upper limit \(\ln y\) is negative, so the inner integral runs from 0 down to \(\ln y\). The antiderivative in \(z\) is \(e^{x+y+z}\), and
  \[
  \int_0^{\ln y} e^{x+y+z}\, dz = (y - 1)e^{x+y}.
  \]
  The resulting function of \(y\) extends continuously to \(y = 0\).

  Integration by parts in \(y\), with the factor \(e^x\) held fixed, gives
  \[
  \int_0^x (y - 1)e^{x+y}\, dy = (x - 2)e^{2x} + 2e^x.
  \]
  A second integration by parts, from \(x = 0\) to \(x = 1\), gives
  \[
  -\frac{3e^2}{4} + 2e - \frac{3}{4}.
  \]

  The value of the integral is \(-\dfrac{3e^2}{4} + 2e - \dfrac{3}{4}\).
provenance: handout-answer
steps:
  - The inner integral in \(z\) is evaluated, including where \(\ln y\) is negative.
  - The integrals in \(y\) and in \(x\) are evaluated.
  - The solution states the value \(-\dfrac{3e^2}{4} + 2e - \dfrac{3}{4}\).
verification:
  checks:
    - expr: integrate(exp(x + y + z), (z, 0, log(y)), (y, 0, x), (x, 0, 1))
      expected: "-3*exp(2)/4 + 2*exp(1) - Rational(3, 4)"
:::

::: exercise
id: l8-triple-integrals.15.5.4
number: "15.5.4"
tier: standard
topics: [triple-integrals]
statement: |
  Evaluate \(\displaystyle \int_0^{\pi/2} \int_0^{\sin\theta} \int_0^{r\cos\theta} r^2\, dz\, dr\, d\theta\).
solution: |
  The inner integral of \(r^2\) from \(z = 0\) to \(z = r\cos\theta\) equals \(r^3\cos\theta\). The integral in \(r\) from 0 to \(\sin\theta\) equals \(\dfrac{1}{4}\cos\theta\,\sin^4\theta\).

  The substitution \(u = \sin\theta\) has \(du = \cos\theta\, d\theta\), and \(u\) runs from 0 to 1 as \(\theta\) runs from 0 to \(\pi/2\). The remaining integral is
  \[
  \frac{1}{4}\int_0^1 u^4\, du = \frac{1}{20}.
  \]

  The value of the integral is \(\dfrac{1}{20}\).
provenance: handout-answer
steps:
  - The integrals in \(z\) and in \(r\) are evaluated.
  - The integral in \(\theta\) is evaluated by the substitution \(u = \sin\theta\).
  - The solution states the value \(\dfrac{1}{20}\).
verification:
  checks:
    - expr: integrate(r**2, (z, 0, r*cos(t)), (r, 0, sin(t)), (t, 0, pi/2))
      expected: "1/20"
:::

::: exercise
id: l8-triple-integrals.15.5.5
number: "15.5.5"
tier: standard
topics: [triple-integrals]
statement: |
  Evaluate \(\displaystyle \int_0^{\pi} \int_0^{\sin\theta} \int_0^{r\sin\theta} r\cos^2\theta\, dz\, dr\, d\theta\).
solution: |
  The inner integral of \(r\cos^2\theta\) from \(z = 0\) to \(z = r\sin\theta\) equals \(r^2\sin\theta\cos^2\theta\). The integral in \(r\) from 0 to \(\sin\theta\) equals \(\dfrac{1}{3}\sin^4\theta\cos^2\theta\).

  The identity \(\cos^2\theta = 1 - \sin^2\theta\) rewrites the integrand as \(\dfrac{1}{3}(\sin^4\theta - \sin^6\theta)\). Over \([0, \pi/2]\):
  \[
  \begin{aligned}
  \int \sin^2\theta\, d\theta&=\frac{\pi}{4},\\
  \int \sin^4\theta\, d\theta&=\frac{3}{4}\cdot\frac{\pi}{4}=\frac{3\pi}{16},\\
  \int \sin^6\theta\, d\theta&=\frac{5}{6}\cdot\frac{3\pi}{16}=\frac{5\pi}{32}.
  \end{aligned}
  \]
  Doubling those values for the interval \([0, \pi]\) gives \(\frac{3\pi}{8}\) and \(\frac{5\pi}{16}\). Their difference, divided by 3, equals \(\dfrac{\pi}{48}\).

  The value of the integral is \(\dfrac{\pi}{48}\).
provenance: handout-answer
steps:
  - The integrals in \(z\) and in \(r\) are evaluated.
  - The integral in \(\theta\) is reduced to integrals of even powers of sine.
  - The solution states the value \(\dfrac{\pi}{48}\).
verification:
  checks:
    - expr: integrate(r*cos(t)**2, (z, 0, r*sin(t)), (r, 0, sin(t)), (t, 0, pi))
      expected: "pi/48"
:::

::: exercise
id: l8-triple-integrals.15.5.6
number: "15.5.6"
tier: standard
topics: [triple-integrals]
statement: |
  Evaluate \(\displaystyle \int_0^1 \int_0^{y^2} \int_0^{x+y} x\, dz\, dx\, dy\).
solution: |
  The order is \(dz\, dx\, dy\), so \(z\) is integrated first and \(x\) is next. The inner integral of \(x\) equals \(x(x + y) = x^2 + xy\). The integral in \(x\) from 0 to \(y^2\) equals
  \[
  \frac{y^6}{3} + \frac{y^5}{2}.
  \]
  The integral in \(y\) from 0 to 1 equals \(\dfrac{1}{21} + \dfrac{1}{12} = \dfrac{11}{84}\).

  The value of the integral is \(\dfrac{11}{84}\).
provenance: handout-answer
steps:
  - The order \(dz\, dx\, dy\) is respected.
  - The three integrals are evaluated.
  - The solution states the value \(\dfrac{11}{84}\).
verification:
  checks:
    - expr: integrate(x, (z, 0, x + y), (x, 0, y**2), (y, 0, 1))
      expected: "11/84"
:::

::: exercise
id: l8-triple-integrals.15.5.7
number: "15.5.7"
tier: standard
topics: [triple-integrals]
statement: |
  Evaluate \(\displaystyle \int_1^2 \int_y^{y^2} \int_0^{\ln(y+z)} e^x\, dx\, dz\, dy\).
solution: |
  The inner integral of \(e^x\) from \(x = 0\) to \(x = \ln(y + z)\) equals \(y + z - 1\). The integral in \(z\) from \(y\) to \(y^2\) equals
  \[
  \frac{1}{2}y^4 + y^3 - \frac{5}{2}y^2 + y.
  \]
  The antiderivative in \(y\) is \(\dfrac{y^5}{10} + \dfrac{y^4}{4} - \dfrac{5y^3}{6} + \dfrac{y^2}{2}\). From 1 to 2 this equals \(\dfrac{38}{15} - \dfrac{1}{60} = \dfrac{151}{60}\).

  The value of the integral is \(\dfrac{151}{60}\).
provenance: handout-answer
steps:
  - The inner integral in \(x\) is evaluated first.
  - The integrals in \(z\) and in \(y\) are evaluated.
  - The solution states the value \(\dfrac{151}{60}\).
verification:
  checks:
    - expr: integrate(exp(x), (x, 0, log(y + z)), (z, y, y**2), (y, 1, 2))
      expected: "151/60"
:::

::: exercise
id: l8-triple-integrals.15.5.8
number: "15.5.8"
tier: standard
topics: [triple-integrals]
statement: |
  Compute \(\displaystyle \int_0^{\pi} \int_0^{\pi/2} \int_0^1 (z\sin x + z\cos y)\, dz\, dy\, dx\).
solution: |
  The integrand is \(z(\sin x + \cos y)\). The inner integral from \(z = 0\) to \(z = 1\) equals \(\dfrac{1}{2}(\sin x + \cos y)\). The integral in \(y\) from 0 to \(\pi/2\) equals \(\dfrac{\pi}{4}\sin x + \dfrac{1}{2}\). The integral in \(x\) from 0 to \(\pi\) equals \(\dfrac{\pi}{2} + \dfrac{\pi}{2} = \pi\).

  The value of the integral is \(\pi\).
provenance: handout-answer
steps:
  - The inner integral in \(z\) is evaluated first.
  - The integrals in \(y\) and in \(x\) are evaluated.
  - The solution states the value \(\pi\).
verification:
  checks:
    - expr: integrate(z*sin(x) + z*cos(y), (z, 0, 1), (y, 0, pi/2), (x, 0, pi))
      expected: "pi"
:::

::: exercise
id: l8-triple-integrals.15.5.3-sheet-2.2
number: "15.5.3; sheet 3 exercise 2.2"
tier: standard
topics: [triple-integrals]
statement: |
  Find the average of \(f(x, y, z) = xyz\) on the cube with opposite corners \((0,0,0)\) and \((2,2,2)\).
solution: |
  The cube has side length 2, so its volume is 8. The average is
  \[
  \frac{1}{8}\int_0^2\int_0^2\int_0^2 xyz\, dz\, dy\, dx.
  \]
  The inner integral equals \(xy \cdot \dfrac{z^2}{2}\) evaluated at 2, which is \(2xy\). Dividing by the volume 8 leaves the factor \(\dfrac{1}{4}\) in front of the double integral of \(xy\):
  \[
  \frac{1}{4}\int_0^2\int_0^2 xy\, dy\, dx.
  \]
  The integral in \(y\) equals \(2x\). Then \(\dfrac{1}{4}\int_0^2 2x\, dx = \dfrac{1}{2}\cdot 2 = 1\).

  The average is 1.
provenance: handout-answer
steps:
  - The volume of the cube is stated as 8.
  - The integral of \(xyz\) in \(z\) is evaluated, and the factor in front of the double integral of \(xy\) is \(\dfrac{1}{4}\).
  - The solution states the average 1.
verification:
  checks:
    - expr: integrate(x*y*z, (z, 0, 2), (y, 0, 2), (x, 0, 2))/8
      expected: "1"
:::

::: exercise
id: l8-triple-integrals.15.5.10
number: "15.5.10"
tier: exam
topics: [triple-integrals]
examBlock: triple-integrals-volumes
statement: |
  Compute \(\displaystyle \iiint (x + y + z)\, dV\) over the region \(x^2 + y^2 + z^2 \le 1\) in the first octant.
solution: |
  The region is the part of the unit ball in \(x \ge 0\), \(y \ge 0\) and \(z \ge 0\). In that order,
  \[
  \begin{aligned}
  &\int_0^1 \int_0^{\sqrt{1-x^2}}\\
  &\quad \int_0^{\sqrt{1-x^2-y^2}} (x + y + z)\, dz\, dy\, dx.
  \end{aligned}
  \]
  The region and the three summands \(x\), \(y\) and \(z\) trade places under a swap of coordinates, so the integral equals three times the integral of \(z\).

  The inner integral of \(z\) equals \(\dfrac{1}{2}(1 - x^2 - y^2)\). The integral in \(y\) from 0 to \(\sqrt{1 - x^2}\) equals \(\dfrac{1}{3}(1 - x^2)^{3/2}\). Three times the remaining integral is
  \[
  \int_0^1 (1 - x^2)^{3/2}\, dx.
  \]
  The substitution \(x = \sin u\), with \(u\) from 0 to \(\pi/2\), uses \(\cos u \ge 0\) on that interval, and the integrand becomes \(\cos^4 u\). Then
  \[
  \cos^4 u = \frac{3}{8} + \frac{1}{2}\cos 2u + \frac{1}{8}\cos 4u,
  \]
  and the integral from 0 to \(\pi/2\) equals \(\dfrac{3}{8}\cdot\dfrac{\pi}{2} = \dfrac{3\pi}{16}\).

  The value of the integral is \(\dfrac{3\pi}{16}\).
provenance: handout-answer
steps:
  - The first-octant part of the unit ball is described with limits.
  - Symmetry reduces the integral to three times the integral of \(z\).
  - The solution states the value \(\dfrac{3\pi}{16}\).
verification:
  checks:
    - expr: 3*integrate((1 - x**2 - y**2)/2, (y, 0, sqrt(1 - x**2)), (x, 0, 1))
      expected: "3*pi/16"
:::

::: exercise
id: l8-triple-integrals.15.5.16
number: "15.5.16"
tier: exam
topics: [triple-integrals]
examBlock: triple-integrals-volumes
statement: |
  Find the region \(E\) for which \(\displaystyle \iiint_E (1 - x^2 - y^2 - z^2)\, dV\) is a maximum.
solution: |
  The integrand \(1 - x^2 - y^2 - z^2\) has three sign cases:

  - positive at every point with \(x^2 + y^2 + z^2 < 1\),
  - zero on the unit sphere,
  - negative at every point with \(x^2 + y^2 + z^2 > 1\).

  The integral increases when a set where the integrand is positive is added, and it decreases when a set where the integrand is negative is added. The closed unit ball
  \[
  E = \{(x, y, z) : x^2 + y^2 + z^2 \le 1\}
  \]
  contains every point where the integrand is positive, together with the sphere where the integrand is zero.

  The volume of this ball equals \(\int_{-1}^{1} \pi(1 - x^2)\, dx\). The antiderivative is \(\pi\left(x - \dfrac{x^3}{3}\right)\), and the definite integral equals \(\dfrac{4\pi}{3}\). On the slice at a fixed \(x\), the cross-section is a disk of area \(\pi(1 - x^2)\), so
  \[
  \iiint_E x^2\, dV = \int_{-1}^{1} \pi x^2(1 - x^2)\, dx.
  \]
  The antiderivative is \(\pi\left(\dfrac{x^3}{3} - \dfrac{x^5}{5}\right)\). From \(-1\) to \(1\) the integral equals \(\dfrac{4\pi}{15}\).
  The integrals of \(y^2\) and of \(z^2\) equal the same number, and the integral of \(x^2 + y^2 + z^2\) equals \(\dfrac{4\pi}{5}\). Therefore
  \[
  \begin{aligned}
  &\iiint_E (1 - x^2 - y^2 - z^2)\, dV\\
  &=\frac{4\pi}{3} - \frac{4\pi}{5}\\
  &=\frac{8\pi}{15}.
  \end{aligned}
  \]

  The closed unit ball maximises the integral, and the value on that ball is \(\dfrac{8\pi}{15}\).
provenance: written-for-site
steps:
  - The solution names the closed unit ball \(x^2 + y^2 + z^2 \le 1\).
  - The solution uses the sign of \(1 - x^2 - y^2 - z^2\) inside the sphere and outside it.
  - The solution evaluates the integral on that ball as \(\dfrac{8\pi}{15}\).
verification:
  checkable: false
  reason: The answer is a described region, not a number.
:::

::: sheet-item
id: l8-triple-integrals.sheet-iterated
category: formula
text: |
  Over a box, \(\int_{x_0}^{x_1}\int_{y_0}^{y_1}\int_{z_0}^{z_1} f\, dz\, dy\, dx\) integrates in \(z\), then in \(y\), then in \(x\).
:::

::: sheet-item
id: l8-triple-integrals.sheet-volume
category: formula
text: |
  The volume of a solid equals the triple integral of the constant function 1 over that solid.
:::

::: sheet-item
id: l8-triple-integrals.sheet-variable-top
category: trap
text: |
  If the top surface is \(z = g(x, y)\), the inner limits run from the bottom surface to \(g(x, y)\). A constant taken from one corner describes a different solid.
:::

::: exercise
id: l8-triple-integrals.ex-tetrahedron-moment
tier: standard
topics: [triple-integrals]
statement: |
  A tetrahedron has corners \((0,0,0)\), \((0,3,0)\), \((2,3,0)\) and \((2,3,5)\). Compute \(\iiint z\, dV\) over the tetrahedron, and find the average value of \(z\) on it.
solution: |
  The base lies in the plane \(z = 0\). For \(x\) from \(0\) to \(2\), \(y\) runs from the line \(y = 3x/2\) up to \(y = 3\). The top face passes through \((0,0,0)\) and \((2,3,5)\), and its height does not depend on \(y\). That plane is \(z = 5x/2\). So \(z\) runs from \(0\) to \(5x/2\).

  The inner integral is \(\int_0^{5x/2} z\, dz = \dfrac{25x^{2}}{8}\). The integral in \(y\) multiplies by the length \(3 - \dfrac{3x}{2}\):
  \[
  \frac{25x^{2}}{8}\left(3 - \frac{3x}{2}\right) = \frac{25}{8}\left(3x^{2} - \frac{3x^{3}}{2}\right).
  \]
  The integral in \(x\) from \(0\) to \(2\) is
  \[
  \frac{25}{8}\left(8 - \frac32\cdot 4\right) = \frac{25}{8}\cdot 2 = \frac{25}{4}.
  \]
  The volume of the tetrahedron is \(5\), because \(\int_0^2 \int_{3x/2}^3 \frac{5x}{2}\, dy\, dx = 5\). The average of \(z\) is \(\dfrac{25/4}{5} = \dfrac54\).

  The integral equals \(\dfrac{25}{4}\), and the average value of \(z\) is \(\dfrac54\).
provenance: written-for-site
steps:
  - The solution gives the limits \(0 \le x \le 2\), \(3x/2 \le y \le 3\), \(0 \le z \le 5x/2\).
  - The solution evaluates the integral of \(z\) and finds \(25/4\).
  - The solution divides by the volume \(5\) to get the average \(5/4\).
verification:
  checks:
    - expr: "integrate(1, (z, 0, 5*x/2), (y, 3*x/2, 3), (x, 0, 2))"
      expected: "5"
    - expr: "integrate(z, (z, 0, 5*x/2), (y, 3*x/2, 3), (x, 0, 2))"
      expected: "25/4"
    - expr: "Rational(25, 4)/5"
      expected: "5/4"
:::
