---
id: l7-general-regions
lecture: 7
order: 2
title: Double integrals over general regions
prerequisites: [l7-double-integrals-rectangles]
sources:
  - source: handout
    section: "15.1"
    page: 390
  - source: handout
    section: "15.1"
    page: 393
  - source: sheet-3
    page: 1
  - source: final-2024
    page: 1
  - source: final-2025
    page: 1
  - source: retake-2023
    page: 1
examWeight: high
examWeightNote: |
  Double integrals carry 32.5% of the two recent finals. The formal wording is the handout's and stays provisional until the lecture 7 notes arrive, and placement in this lecture is provisional until the lecture has taken place.
status: reviewed
notation: |
  On a region that is not a rectangle, the inner limit is a function of the outer variable. \(dA\) still names the area element. \(dy\,dx\) and \(dx\,dy\) are the two orders.
---

::: formal-statement
kind: method
title: Integral over a region by slices
source:
  source: handout
  section: "15.1"
  page: 390
text: |
  To integrate over a region, slice the solid and add the slices:

  1. Hold the **outer variable** fixed and integrate in the **inner variable** between the curves that bound that slice. Those inner endpoints are functions of the outer variable.
  2. The outer integral adds the slice areas.

  For the region \(0 \le x \le 1\), \(0 \le y \le x^2\), the slices are perpendicular to the \(x\)-axis, as in a loaf of bread. The slice at a fixed \(x\) has thickness \(\Delta x\), and \(y\) runs from \(0\) to \(x^2\). The area of its face is
  \[
  G(x) = \int_0^{x^2} f(x,y)\, dy,
  \]
  with \(x\) held constant. The slice has volume \(G(x)\,\Delta x\). Adding the slices and passing to the limit gives
  \[
  \iint_D f(x,y)\, dA = \int_0^1 \int_0^{x^2} f(x,y)\, dy\, dx.
  \]
:::

::: plain-explanation
text: |
  Picture the solid under the surface as a loaf. One cut, perpendicular to the \(x\)-axis, makes a thin slab at a fixed \(x\), of thickness \(\Delta x\). On the base \(0 \le x \le 1\), \(0 \le y \le x^2\), that slab meets the base in the segment from \(y = 0\) up to the parabola \(y = x^2\). The inner integral adds the height \(f(x,y)\) along the segment and returns the area of the face. The volume of the slab is that area times \(\Delta x\). The outer integral adds the slabs from \(x = 0\) to \(x = 1\).

  The upper end \(x^2\) changes with \(x\). A slice near \(x = 0\) is short, and the slice at \(x = 1\) reaches \(y = 1\).
:::

::: tip
text: |
  If the formula for the upper boundary changes at a point, split the outer interval there and write one iterated integral on each piece.
:::

::: worked-example
title: Volume over the parabolic region
problem: |
  Find the volume under the surface \(z = x + 2y^2\) above the region \(0 \le x \le 1\), \(0 \le y \le x^2\).
solution: |
  The base \(D\) is the set \(0 \le x \le 1\), \(0 \le y \le x^2\), and the height is \(x + 2y^2\). Slices perpendicular to the \(x\)-axis give the volume
  \[
  V = \int_0^1 \int_0^{x^2} \bigl(x + 2y^2\bigr)\, dy\, dx.
  \]

  Hold \(x\) constant. The inner antiderivative is \(xy + \frac{2}{3} y^3\). At the ends \(y = x^2\) and \(y = 0\) the face area is
  \[
  G(x) = x\cdot x^2 + \frac{2}{3} x^6 = x^3 + \frac{2}{3} x^6.
  \]

  The outer integral of \(G\) is
  \[
  \begin{aligned}
  V&=\int_0^1 \left(x^3 + \frac{2}{3} x^6\right)\, dx,\\
  &=\left[\frac{x^4}{4} + \frac{2}{21} x^7\right]_0^1,\\
  &=\frac{1}{4} + \frac{2}{21} = \frac{29}{84}.
  \end{aligned}
  \]

  The volume is \(\frac{29}{84}\).
:::

::: guided-example
title: Area under the line y = 1 - x
problem: |
  Find the area of the region in the first quadrant under the line \(y = 1 - x\). The integrand is \(1\). Work each step before you reveal the next.
steps:
  - |
    The line \(y = 1 - x\) meets the axes at \((1, 0)\) and \((0, 1)\). In the first quadrant the region is

    - \(0 \le x \le 1\),
    - \(0 \le y \le 1 - x\).
  - |
    The area is the integral of the constant function \(1\),
    \[
    \int_0^1 \int_0^{1-x} 1\, dy\, dx.
    \]
  - |
    With \(x\) held constant, the inner integral equals the length of the vertical slice, which is \(1 - x\).
  - |
    The outer integral is
    \[
    \begin{aligned}
    &\int_0^1 (1 - x)\, dx\\
    &=\left[x - \frac{x^2}{2}\right]_0^1\\
    &=1 - \frac{1}{2} = \frac{1}{2}.
    \end{aligned}
    \]
  - |
    The area of the region is \(\frac{1}{2}\).
:::

::: visual
kind: region
caption: |
  The shaded set is the triangle in the first quadrant bounded by the line \(x + y = 1\). With intercept \(1\) the line meets the axes at \((1, 0)\) and \((0, 1)\). The region-order control switches between \(dy\,dx\) and \(dx\,dy\), and the readout states the limits for the chosen order.
params:
  preset: triangle
  order: dy-dx
  intercept: 1
:::

::: concept-question
id: l7-general-regions.q-0fa6469a
question: |
  Which iterated integral has an inner limit that depends on the outer variable?
options:
  - text: |
      \(\displaystyle\int_0^1\int_0^2 (x + y)\, dy\, dx\)
  - text: |
      \(\displaystyle\int_0^1\int_0^{x^2} \bigl(x + 2y^2\bigr)\, dy\, dx\)
    correct: true
  - text: |
      \(\displaystyle\int_0^1\int_0^1 1\, dy\, dx\)
  - text: |
      \(\displaystyle\int_1^2\int_0^2 xy\, dx\, dy\)
explanation: |
  In the parabolic integral, \(y\) runs from \(0\) to \(x^2\), and \(x^2\) depends on the outer variable \(x\). In the other three integrals every limit is a constant, so each base is a rectangle.
:::

::: concept-question
id: l7-general-regions.q-42d691a5
question: |
  On the region \(0 \le x \le 1\), \(0 \le y \le x^2\), the inner integral \(\int_0^{x^2} f(x,y)\, dy\) is taken at a fixed \(x\). What does it equal?
options:
  - text: |
      The volume under the surface.
  - text: |
      The area of the slice at that \(x\).
    correct: true
  - text: |
      The length of the interval in \(x\).
  - text: |
      The single height \(f(x, x^2)\).
explanation: |
  With \(x\) held constant, the inner integral adds the height \(f\) along the segment from \(y = 0\) to \(y = x^2\). That sum is the area of one slice. The outer integral adds those areas.
:::

::: concept-question
id: l7-general-regions.q-cde5b0e5
question: |
  The region is \(x + y \le 1\) in the first quadrant, and the order is \(dy\,dx\). Which limits describe it?
options:
  - text: |
      \(x\) from \(0\) to \(1\), and \(y\) from \(0\) to \(1\).
  - text: |
      \(x\) from \(0\) to \(1\), and \(y\) from \(0\) to \(1 - x\).
    correct: true
  - text: |
      \(x\) from \(0\) to \(1\), and \(y\) from \(0\) to \(x\).
  - text: |
      \(y\) from \(0\) to \(1\), and \(x\) from \(0\) to \(y\).
explanation: |
  The variable \(x\) runs from \(0\) to \(1\). At a fixed \(x\), \(y\) starts at \(0\) and stops on the line \(y = 1 - x\). The limits \(y\) from \(0\) to \(1\) and \(x\) from \(0\) to \(1\) describe the square \([0,1]\times[0,1]\).
:::

::: trap
text: |
  The region \(x + y \le 1\) in the first quadrant is the triangle with vertices \((0,0)\), \((1,0)\) and \((0,1)\). Integrating \(y\) from \(0\) to \(1\) and \(x\) from \(0\) to \(1\) uses the square \([0,1]\times[0,1]\). For the integrand \(1\),
  \[
  \begin{aligned}
  \int_0^1\int_0^1 1\, dy\, dx &= 1,\\
  \int_0^1\int_0^{1-x} 1\, dy\, dx &= \frac{1}{2}.
  \end{aligned}
  \]
  These values are different. The point \((1,1)\) lies in the square, and \(1 + 1 > 1\), so that point lies outside the triangle.
:::

::: key-points
text: |
  - Hold the outer variable fixed and integrate the inner variable between the curves that bound the slice. The inner limits are functions of the outer variable, and the outer integral adds the slice areas.
  - For \(0 \le x \le 1\), \(0 \le y \le x^2\), the order \(dy\,dx\) gives \(\iint_D f(x,y)\, dA = \int_0^1 \int_0^{x^2} f(x,y)\, dy\, dx\). The inner integral is the area of the face of the slice at a fixed \(x\).
  - If the formula for the upper boundary changes at a point, split the outer interval there and write one iterated integral on each piece.
  - The usual slip integrates \(y\) from \(0\) to \(1\) and \(x\) from \(0\) to \(1\) over the triangle \(x + y \le 1\). Those limits describe the square \([0,1]\times[0,1]\). The triangle needs \(y\) from \(0\) to \(1 - x\), and for the integrand \(1\) the square gives \(1\) while the triangle gives \(\frac{1}{2}\).
:::

::: exercise
id: l7-general-regions.handout-15.1.3
number: "15.1.3 (sheet 3 exercise 1.3)"
tier: basic
topics: [double-integrals]
statement: |
  Compute
  \[
  \int_1^2 \int_0^y xy\, dx\, dy.
  \]
solution: |
  The inner integral treats \(y\) as constant. Its value is
  \[
  \int_0^y xy\, dx = y\left[\frac{x^2}{2}\right]_0^y = \frac{y^3}{2}.
  \]
  The outer integral is
  \[
  \int_1^2 \frac{y^3}{2}\, dy = \left[\frac{y^4}{8}\right]_1^2 = \frac{16}{8} - \frac{1}{8} = \frac{15}{8}.
  \]
  The value of the integral is \(\frac{15}{8}\).
provenance: handout-answer
steps:
  - The inner integral in \(x\), with \(y\) constant, equals \(y^3/2\).
  - The outer integral equals \(15/8\).
verification:
  checks:
    - expr: integrate(x*y, (x, 0, y), (y, 1, 2))
      expected: "Rational(15, 8)"
:::

::: exercise
id: l7-general-regions.handout-15.1.4
number: "15.1.4 (sheet 3 exercise 1.4)"
tier: basic
topics: [double-integrals]
statement: |
  Compute
  \[
  \int_0^1 \int_{y^2/2}^{\sqrt{y}} 1\, dx\, dy.
  \]
solution: |
  The inner integral of \(1\) runs from \(x = y^2/2\) to \(x = \sqrt{y}\), so its value is the length \(\sqrt{y} - y^2/2\). The outer integral is
  \[
  \begin{aligned}
  &\int_0^1 \left(y^{1/2} - \frac{y^2}{2}\right)\, dy\\
  &=\left[\frac{2}{3} y^{3/2} - \frac{y^3}{6}\right]_0^1\\
  &=\frac{2}{3} - \frac{1}{6} = \frac{1}{2}.
  \end{aligned}
  \]
  The value of the integral is \(\frac{1}{2}\).
provenance: handout-answer
steps:
  - The inner integral equals \(\sqrt{y} - y^2/2\).
  - The outer integral equals \(1/2\).
verification:
  checks:
    - expr: integrate(1, (x, y**2/2, sqrt(y)), (y, 0, 1))
      expected: "Rational(1, 2)"
:::

::: exercise
id: l7-general-regions.handout-15.1.5
number: "15.1.5 (sheet 3 exercise 1.5)"
tier: basic
topics: [double-integrals]
statement: |
  Compute
  \[
  \int_1^2 \int_1^x \frac{x^2}{y^2}\, dy\, dx.
  \]
solution: |
  Hold \(x\) constant. The inner integral is
  \[
  \begin{aligned}
  &\int_1^x x^2 y^{-2}\, dy\\
  &=x^2\left[-\frac{1}{y}\right]_1^x\\
  &=x^2\left(1 - \frac{1}{x}\right) = x^2 - x.
  \end{aligned}
  \]
  The outer integral is
  \[
  \begin{aligned}
  &\int_1^2 \bigl(x^2 - x\bigr)\, dx\\
  &=\left[\frac{x^3}{3} - \frac{x^2}{2}\right]_1^2\\
  &=\left(\frac{8}{3} - 2\right) - \left(\frac{1}{3} - \frac{1}{2}\right)\\
  &=\frac{2}{3} + \frac{1}{6} = \frac{5}{6}.
  \end{aligned}
  \]
  The value of the integral is \(\frac{5}{6}\).
provenance: handout-answer
steps:
  - The inner integral equals \(x^2 - x\).
  - The outer integral equals \(5/6\).
verification:
  checks:
    - expr: integrate(x**2/y**2, (y, 1, x), (x, 1, 2))
      expected: "Rational(5, 6)"
:::

::: exercise
id: l7-general-regions.handout-15.1.6
number: "15.1.6 (sheet 3 exercise 1.8)"
tier: standard
topics: [double-integrals]
statement: |
  Compute
  \[
  \int_0^1 \int_0^{x^2} \frac{y}{e^x}\, dy\, dx.
  \]
solution: |
  The integrand is \(y e^{-x}\). Hold \(x\) constant. The inner integral is
  \[
  \int_0^{x^2} y e^{-x}\, dy = e^{-x}\left[\frac{y^2}{2}\right]_0^{x^2} = \frac{1}{2} x^4 e^{-x}.
  \]
  The outer integral is \(\frac{1}{2} A_4\), where \(A_n = \int_0^1 x^n e^{-x}\, dx\).

  Integration by parts gives \(A_n = -e^{-1} + n A_{n-1}\), and \(A_0 = \int_0^1 e^{-x}\, dx = 1 - e^{-1}\). Then
  \[
  \begin{aligned}
  A_1 &= 1 - 2e^{-1},\\
  A_2 &= 2 - 5e^{-1},\\
  A_3 &= 6 - 16e^{-1},\\
  A_4 &= 24 - 65e^{-1}.
  \end{aligned}
  \]
  Therefore \(\frac{1}{2} A_4 = 12 - \frac{65}{2e}\). The value of the integral is \(12 - \frac{65}{2e}\).
provenance: handout-answer
steps:
  - The inner integral equals \(\frac{1}{2} x^4 e^{-x}\).
  - The reduction of \(A_4 = \int_0^1 x^4 e^{-x}\, dx\) equals \(24 - 65e^{-1}\).
  - The value of the integral is \(12 - 65/(2e)\).
verification:
  checks:
    - expr: integrate(y/exp(x), (y, 0, x**2), (x, 0, 1))
      expected: "12 - 65/(2*exp(1))"
:::

::: exercise
id: l7-general-regions.handout-15.1.7
number: "15.1.7 (sheet 3 exercise 1.7)"
tier: standard
topics: [double-integrals]
statement: |
  Compute
  \[
  \int_0^{\sqrt{\pi/2}} \int_0^{x^2} x\cos y\, dy\, dx.
  \]
  The substitution \(u = x^2\) fits the outer integral.
solution: |
  Hold \(x\) constant. The inner integral is
  \[
  \int_0^{x^2} x\cos y\, dy = x\bigl[\sin y\bigr]_0^{x^2} = x\sin(x^2).
  \]
  For the outer integral set \(u = x^2\), so \(du = 2x\, dx\). The limit \(x = 0\) sends \(u\) to \(0\), and the limit \(x = \sqrt{\pi/2}\) sends \(u\) to \(\pi/2\). Then
  \[
  \begin{aligned}
  &\int_0^{\sqrt{\pi/2}} x\sin(x^2)\, dx\\
  &=\frac{1}{2}\int_0^{\pi/2} \sin u\, du\\
  &=\frac{1}{2}\bigl[-\cos u\bigr]_0^{\pi/2} = \frac{1}{2}.
  \end{aligned}
  \]
  The value of the integral is \(\frac{1}{2}\).
provenance: handout-answer
steps:
  - The inner integral equals \(x\sin(x^2)\).
  - The substitution \(u = x^2\) runs from \(0\) to \(\pi/2\).
  - The value of the integral is \(1/2\).
verification:
  checks:
    - expr: integrate(x*cos(y), (y, 0, x**2), (x, 0, sqrt(pi/2)))
      expected: "Rational(1, 2)"
:::

::: exercise
id: l7-general-regions.handout-15.1.12
number: "15.1.12 (sheet 3 exercise 1.11)"
tier: standard
topics: [double-integrals]
statement: |
  Compute
  \[
  \int_0^1 \int_0^y \frac{2}{\sqrt{1 - x^2}}\, dx\, dy.
  \]
solution: |
  The inner antiderivative of \(2(1 - x^2)^{-1/2}\) is \(2\arcsin x\). From \(x = 0\) to \(x = y\) it equals \(2\arcsin y\).

  For the outer integral, set \(u = \arcsin y\) and \(dv = 2\, dy\), so \(du = (1 - y^2)^{-1/2}\, dy\) and \(v = 2y\). Then
  \[
  \begin{aligned}
  &\int_0^1 2\arcsin y\, dy\\
  &=\bigl[2y\arcsin y\bigr]_0^1\\
  &\qquad - \int_0^1 \frac{2y}{\sqrt{1 - y^2}}\, dy\\
  &=\pi - \int_0^1 \frac{2y}{\sqrt{1 - y^2}}\, dy.
  \end{aligned}
  \]
  Set \(w = 1 - y^2\), so \(dw = -2y\, dy\). The limit \(y = 0\) sends \(w\) to \(1\), and \(y = 1\) sends \(w\) to \(0\). The remaining integral equals
  \[
  \begin{aligned}
  &\int_1^0 w^{-1/2}(-dw)\\
  &=\int_0^1 w^{-1/2}\, dw\\
  &=\bigl[2w^{1/2}\bigr]_0^1 = 2.
  \end{aligned}
  \]
  The value of the integral is \(\pi - 2\).
provenance: handout-answer
steps:
  - The inner integral equals \(2\arcsin y\).
  - Integration by parts leaves \(\pi\) minus \(\int_0^1 2y(1-y^2)^{-1/2}\, dy\).
  - That integral equals \(2\), so the value is \(\pi - 2\).
verification:
  checks:
    - expr: integrate(2/sqrt(1-x**2), (x, 0, y), (y, 0, 1))
      expected: "pi - 2"
:::

::: exercise
id: l7-general-regions.handout-15.1.14
number: "15.1.14"
tier: standard
topics: [double-integrals]
statement: |
  Compute
  \[
  \int_{-1}^1 \int_0^{1 - x^2} \bigl(x^2 - \sqrt{y}\bigr)\, dy\, dx.
  \]
solution: |
  The integrand is \(x^2 - \sqrt{y}\). Hold \(x\) constant. The inner antiderivative is \(x^2 y - \frac{2}{3} y^{3/2}\), so from \(y = 0\) to \(y = 1 - x^2\) the inner integral equals
  \[
  x^2(1 - x^2) - \frac{2}{3}(1 - x^2)^{3/2}.
  \]

  The first term has outer integral
  \[
  \begin{aligned}
  &\int_{-1}^1 \bigl(x^2 - x^4\bigr)\, dx\\
  &=2\int_0^1 \bigl(x^2 - x^4\bigr)\, dx\\
  &=2\left(\frac{1}{3} - \frac{1}{5}\right) = \frac{4}{15}.
  \end{aligned}
  \]

  For the second term, set \(x = \sin\theta\), so \(dx = \cos\theta\, d\theta\) and \(\theta\) runs from \(-\pi/2\) to \(\pi/2\). Then \((1 - x^2)^{3/2}\, dx = \cos^4\theta\, d\theta\), and
  \[
  \cos^4\theta = \frac{3}{8} + \frac{1}{2}\cos 2\theta + \frac{1}{8}\cos 4\theta.
  \]
  The cosine terms integrate to \(0\) on \([-\pi/2, \pi/2]\), so
  \[
  \int_{-1}^1 (1 - x^2)^{3/2}\, dx = \int_{-\pi/2}^{\pi/2} \frac{3}{8}\, d\theta = \frac{3\pi}{8}.
  \]
  Multiplying by \(\frac{2}{3}\) gives \(\frac{\pi}{4}\). The value of the integral is \(\frac{4}{15} - \frac{\pi}{4}\).
provenance: handout-answer
steps:
  - The inner integral equals \(x^2(1-x^2) - \frac{2}{3}(1-x^2)^{3/2}\).
  - The integral of \(x^2 - x^4\) on \([-1,1]\) equals \(4/15\).
  - The integral of \((1-x^2)^{3/2}\) on \([-1,1]\) equals \(3\pi/8\), and the value is \(4/15 - \pi/4\).
verification:
  checks:
    - expr: integrate(x**2 - sqrt(y), (y, 0, 1-x**2), (x, -1, 1))
      expected: "Rational(4, 15) - pi/4"
:::

::: exercise
id: l7-general-regions.sheet-1.14
number: "sheet 3 exercise 1.14"
tier: standard
topics: [double-integrals]
statement: |
  Compute
  \[
  \int_{-1}^1 \int_0^{1 - x^2} \bigl(x - \sqrt{y}\bigr)\, dy\, dx.
  \]
solution: |
  Hold \(x\) constant. The inner antiderivative of \(x - \sqrt{y}\) is \(xy - \frac{2}{3} y^{3/2}\). From \(y = 0\) to \(y = 1 - x^2\) the inner integral equals
  \[
  x(1 - x^2) - \frac{2}{3}(1 - x^2)^{3/2}.
  \]

  Let \(p(x) = x - x^3\). Then \(p(-x) = -p(x)\), and the interval \([-1, 1]\) is symmetric about \(0\), so \(\int_{-1}^1 p(x)\, dx = 0\).

  The remaining integral is \(-\frac{2}{3}\int_{-1}^1 (1 - x^2)^{3/2}\, dx\). Set \(x = \sin\theta\), so \(dx = \cos\theta\, d\theta\) and \(\theta\) runs from \(-\pi/2\) to \(\pi/2\). Then \((1 - x^2)^{3/2}\, dx = \cos^4\theta\, d\theta\), and
  \[
  \cos^4\theta = \frac{3}{8} + \frac{1}{2}\cos 2\theta + \frac{1}{8}\cos 4\theta.
  \]
  The cosine terms integrate to \(0\) on \([-\pi/2, \pi/2]\), so the integral of \((1 - x^2)^{3/2}\) equals \(\frac{3\pi}{8}\). Multiplying by \(\frac{2}{3}\) gives \(\frac{\pi}{4}\), and the remaining integral is the negative of that quantity. The value of the integral is \(-\frac{\pi}{4}\).
provenance: written-for-site
steps:
  - The inner integral equals \(x(1-x^2) - \frac{2}{3}(1-x^2)^{3/2}\).
  - The integral of the odd function \(x - x^3\) on \([-1,1]\) equals \(0\).
  - The remaining term equals \(-\pi/4\).
verification:
  checks:
    - expr: integrate(x - sqrt(y), (y, 0, 1-x**2), (x, -1, 1))
      expected: "-pi/4"
:::

::: exercise
id: l7-general-regions.handout-15.1.15
number: "15.1.15 (sheet 3 exercise 1.15)"
tier: standard
topics: [double-integrals]
statement: |
  Compute
  \[
  \int_0^{\sqrt{2}/2} \int_{-\sqrt{1 - 2x^2}}^{\sqrt{1 - 2x^2}} x\, dy\, dx.
  \]
solution: |
  Hold \(x\) constant. The variable \(y\) runs from \(-\sqrt{1 - 2x^2}\) to \(\sqrt{1 - 2x^2}\), a length \(2\sqrt{1 - 2x^2}\). The inner integral of \(x\) equals \(2x\sqrt{1 - 2x^2}\).

  Set \(u = 1 - 2x^2\), so \(du = -4x\, dx\) and \(2x\, dx = -\frac{1}{2}\, du\). The limit \(x = 0\) sends \(u\) to \(1\), and the upper limit \(x = \sqrt{2}/2\) sends \(u\) to \(0\). The outer integral is
  \[
  \begin{aligned}
  &\int_1^0 \sqrt{u}\left(-\frac{1}{2}\right)\, du\\
  &=\frac{1}{2}\int_0^1 u^{1/2}\, du\\
  &=\frac{1}{2}\cdot\frac{2}{3} = \frac{1}{3}.
  \end{aligned}
  \]
  The value of the integral is \(\frac{1}{3}\).
provenance: handout-answer
steps:
  - The inner integral equals \(2x\sqrt{1-2x^2}\).
  - The substitution \(u = 1 - 2x^2\) runs from \(1\) to \(0\), and the upper \(x\) limit is \(\sqrt{2}/2\).
  - The value of the integral is \(1/3\).
verification:
  checks:
    - expr: integrate(x, (y, -sqrt(1-2*x**2), sqrt(1-2*x**2)), (x, 0, sqrt(2)/2))
      expected: "Rational(1, 3)"
:::

::: exercise
id: l7-general-regions.handout-15.1.16
number: "15.1.16 (sheet 3 exercise 3.2)"
tier: standard
topics: [double-integrals]
statement: |
  Evaluate \(\iint_D x^2\, dA\), where \(D\) is the region in the first quadrant bounded by the hyperbola \(xy = 16\) and the lines \(y = x\), \(y = 0\), and \(x = 8\).
solution: |
  In the first quadrant the line \(y = x\) and the hyperbola \(xy = 16\) meet where \(x^2 = 16\), so the meeting point is \((4, 4)\). The boundaries are:

  - From \(x = 0\) to \(x = 4\), the upper boundary is \(y = x\) and the lower boundary is \(y = 0\).
  - From \(x = 4\) to \(x = 8\), the upper boundary is \(y = 16/x\) and the lower boundary is \(y = 0\).

  The first piece is
  \[
  \begin{aligned}
  &\int_0^4 \int_0^x x^2\, dy\, dx\\
  &=\int_0^4 x^3\, dx = \left[\frac{x^4}{4}\right]_0^4 = 64.
  \end{aligned}
  \]
  The second piece is
  \[
  \begin{aligned}
  &\int_4^8 \int_0^{16/x} x^2\, dy\, dx\\
  &=\int_4^8 16x\, dx\\
  &=\bigl[8x^2\bigr]_4^8 = 8\cdot 64 - 8\cdot 16 = 384.
  \end{aligned}
  \]
  The sum of the pieces is \(64 + 384 = 448\). The value of the integral is \(448\).
provenance: handout-answer
steps:
  - The curves \(y = x\) and \(xy = 16\) meet at \(x = 4\).
  - The piece \(0 \le x \le 4\), \(0 \le y \le x\) equals \(64\).
  - The piece \(4 \le x \le 8\), \(0 \le y \le 16/x\) equals \(384\), and the sum is \(448\).
verification:
  checks:
    - expr: integrate(x**2, (y, 0, x), (x, 0, 4)) + integrate(x**2, (y, 0, 16/x), (x, 4, 8))
      expected: "448"
:::

::: exercise
id: l7-general-regions.retake-2023-q5
tier: exam
topics: [double-integrals]
examBlock: double-integrals
pastExam:
  year: 2023
  paper: Retake
  question: "5"
  points: 3
statement: |
  Compute the integral of \((x + y) e^{x - y}\) on the domain \(D\) in the first quadrant bounded by \(x + y = 2\).

  The hint is \(\cosh t = \frac{e^{t} + e^{-t}}{2}\) and \(\sinh t = \frac{e^{t} - e^{-t}}{2}\), together with \(\cosh' t = \sinh t\) and \(\sinh' t = \cosh t\).
solution: |
  The domain \(D\) is the triangle \(0 \le x \le 2\), \(0 \le y \le 2 - x\). The integral is
  \[
  I = \int_0^2 \int_0^{2-x} (x + y) e^{x-y}\, dy\, dx.
  \]

  Hold \(x\) constant. The inner antiderivative is \(-(x + y + 1) e^{x-y}\). Differentiating in \(y\) by the product rule returns \((x + y + 1) e^{x-y} - e^{x-y}\), which equals \((x + y) e^{x-y}\).

  At \(y = 2 - x\) the antiderivative equals \(-3 e^{2x - 2}\). At \(y = 0\) it equals \(-(x + 1) e^{x}\). The inner integral is
  \[
  H(x) = (x + 1) e^{x} - 3 e^{2x - 2}.
  \]

  The derivative of \(x e^{x}\) is \((x + 1) e^{x}\), so
  \[
  \int_0^2 (x + 1) e^{x}\, dx = \bigl[x e^{x}\bigr]_0^2 = 2e^{2}.
  \]
  The second term is
  \[
  \int_0^2 3 e^{2x-2}\, dx = \frac{3}{2}\bigl(e^{2} - e^{-2}\bigr) = 3\sinh 2.
  \]
  Thus \(I = 2e^{2} - 3\sinh 2\). From the hint, \(\cosh 2 + \sinh 2 = e^{2}\), so \(2e^{2} = 2\cosh 2 + 2\sinh 2\). Therefore
  \[
  \begin{aligned}
  &I=2\cosh 2 + 2\sinh 2 - 3\sinh 2\\
  &=2\cosh 2 - \sinh 2.
  \end{aligned}
  \]
  The value of the integral is \(2\cosh 2 - \sinh 2\).
provenance: written-for-site
steps:
  - The triangle is described by \(0 \le x \le 2\) and \(0 \le y \le 2 - x\).
  - The inner antiderivative in \(y\) is evaluated at the limits.
  - The outer integral equals \(2\cosh 2 - \sinh 2\).
verification:
  checks:
    - expr: integrate((x+y)*exp(x-y), (y, 0, 2-x), (x, 0, 2))
      expected: "2*cosh(2) - sinh(2)"
:::

::: exercise
id: l7-general-regions.final-2024-q4b
tier: exam
topics: [double-integrals]
examBlock: double-integrals
pastExam:
  year: 2024
  paper: Final
  question: "4b"
  points: 2
statement: |
  Compute the integral

  b) of \( \sqrt{x + y} \) in the first quadrant and bounded by \( x + y = 1 \).
solution: |
  The bounded region is the triangle
  \[
  \begin{aligned}
  D=\{(x,y):\,&0\leq x\leq1,\\
  &0\leq y\leq1-x\}.
  \end{aligned}
  \]
  Therefore,
  \[
  \begin{aligned}
  I\\
  &=\int_0^1\int_0^{1-x}\sqrt{x+y}\,dy\,dx\\
  &=\frac{2}{3}\int_0^1\left(1-x^{3/2}\right)\,dx\\
  &=\frac{2}{3}\left(1-\frac{2}{5}\right)\\
  &=\frac{2}{5}.
  \end{aligned}
  \]

  The value of the integral over the triangular region is \( \frac{2}{5} \).
provenance: written-for-site
steps:
  - The solution describes the triangular region and gives valid limits.
  - The solution evaluates the iterated integral and states its value.
verification:
  checks:
    - expr: integrate(sqrt(x+y), (y, 0, 1-x), (x, 0, 1))
      expected: "Rational(2,5)"
:::

::: exercise
id: l7-general-regions.final-2025-q4b
tier: exam
topics: [double-integrals]
examBlock: double-integrals
pastExam:
  year: 2025
  paper: Final
  question: "4b"
  points: 1
statement: |
  Compute the integral

  b) of \( x \) in the first quadrant and bounded by \( x + y = 1 \).
solution: |
  The bounded region is the triangle
  \[
  \begin{aligned}
  D=\{(x,y):\,&0\leq x\leq1,\\
  &0\leq y\leq1-x\}.
  \end{aligned}
  \]
  Thus,
  \[
  \begin{aligned}
  I\\
  &=\int_0^1\int_0^{1-x}x\,dy\,dx\\
  &=\int_0^1x(1-x)\,dx\\
  &=\frac12-\frac13=\frac16.
  \end{aligned}
  \]

  The value of the integral over the triangular region is \( \frac16 \).
provenance: written-for-site
steps:
  - The solution describes the triangular region and gives valid limits.
  - The solution evaluates the iterated integral and states its value.
verification:
  checks:
    - expr: integrate(x, (y, 0, 1-x), (x, 0, 1))
      expected: "Rational(1,6)"
:::

::: going-deeper
title: Why the outer limits are constants
text: |
  In \(\int_a^b \int_{g(x)}^{h(x)} f\, dy\, dx\), the inner integral is computed first, with \(x\) held fixed, and its result is a function of \(x\) alone. The outer integral then runs over \(x\) from \(a\) to \(b\). If the outer limits also depended on \(x\), the integral would contain its own variable of integration, which has no meaning. The inner limits may depend on the outer variable, and the outer limits are numbers.
:::

::: sheet-item
id: l7-general-regions.sheet-inner-limit
category: recognition
text: |
  When the inner limit is a function of the outer variable, the slice length changes with that variable. For \(0 \le x \le 1\) and \(0 \le y \le x^2\), the order \(dy\,dx\) has inner limits \(y = 0\) and \(y = x^2\).
:::

::: sheet-item
id: l7-general-regions.sheet-triangle-limits
category: recognition
text: |
  On the first-quadrant triangle \(x + y \le 1\), the order \(dy\,dx\) runs \(x\) from \(0\) to \(1\) and \(y\) from \(0\) to \(1 - x\). The upper limit \(1 - x\) depends on the outer variable \(x\). The constant limits \(y\) from \(0\) to \(1\) and \(x\) from \(0\) to \(1\) describe the unit square. The integral of \(1\) over the square equals \(1\), and the integral of \(1\) over the triangle equals \(\frac{1}{2}\).
:::

::: exercise
id: l7-general-regions.ex-parabolic-base
tier: standard
topics: [double-integrals, average-value]
statement: |
  Let \(D\) be the region \(0 \le x \le 1\), \(0 \le y \le x^2\), and let \(z = x + 2y^2\).

  a. Find the volume under the surface above \(D\), in the order \(dy\,dx\).

  b. Find the average height of the surface over \(D\).

  c. Reverse the order of integration and evaluate the volume again.
solution: |
  a. Hold \(x\) constant. The inner integral is
  \[
  \begin{aligned}
  &\int_0^{x^2} (x + 2y^2)\, dy\\
  &=\Bigl[xy + \tfrac{2}{3}y^3\Bigr]_0^{x^2}\\
  &=x^3 + \tfrac{2}{3}x^6.
  \end{aligned}
  \]
  The outer integral is
  \[
  \begin{aligned}
  &\int_0^1 \Bigl(x^3 + \tfrac{2}{3}x^6\Bigr)\, dx\\
  &=\tfrac{1}{4} + \tfrac{2}{21}\\
  &=\tfrac{21}{84} + \tfrac{8}{84} = \tfrac{29}{84}.
  \end{aligned}
  \]
  The volume is \(\tfrac{29}{84}\).

  b. The area of \(D\) is an ordinary integral, \(\int_0^1 x^2\, dx = \tfrac{1}{3}\). The average height is the volume divided by the area:
  \[
  \frac{29/84}{1/3} = \frac{29}{28}.
  \]

  c. The largest value of \(y\) on \(D\) is \(1\). For a fixed \(y\) between \(0\) and \(1\), the curve \(y = x^2\) is the curve \(x = \sqrt{y}\), and the slice runs from that curve to the line \(x = 1\). The reversed integral is
  \[
  \int_0^1 \int_{\sqrt{y}}^1 (x + 2y^2)\, dx\, dy.
  \]
  The inner integral is
  \[
  \Bigl[\tfrac{x^2}{2} + 2y^2 x\Bigr]_{\sqrt{y}}^1 = \tfrac{1}{2} + 2y^2 - \tfrac{y}{2} - 2y^{5/2}.
  \]
  The outer integral is
  \[
  \begin{aligned}
  &\Bigl[\tfrac{y}{2} + \tfrac{2}{3}y^3 - \tfrac{y^2}{4} - \tfrac{4}{7}y^{7/2}\Bigr]_0^1\\
  &=\tfrac{1}{2} + \tfrac{2}{3} - \tfrac{1}{4} - \tfrac{4}{7}\\
  &=\tfrac{29}{84}.
  \end{aligned}
  \]
  Both orders give \(\tfrac{29}{84}\).
provenance: written-for-site
steps:
  - The volume in the order dy dx equals 29/84.
  - The area of D is 1/3 and the average height is 29/28.
  - The reversed limits are y from 0 to 1 and x from sqrt(y) to 1.
  - The reversed integral also equals 29/84.
verification:
  checks:
    - expr: integrate(x + 2*y**2, (y, 0, x**2))
      expected: "x**3 + Rational(2, 3)*x**6"
    - expr: integrate(x + 2*y**2, (y, 0, x**2), (x, 0, 1))
      expected: "Rational(29, 84)"
    - expr: integrate(1, (y, 0, x**2), (x, 0, 1))
      expected: "Rational(1, 3)"
    - expr: integrate(x + 2*y**2, (y, 0, x**2), (x, 0, 1))/integrate(1, (y, 0, x**2), (x, 0, 1))
      expected: "Rational(29, 28)"
    - expr: integrate(x + 2*y**2, (x, sqrt(y), 1))
      expected: "Rational(1, 2) + 2*y**2 - y/2 - 2*y**Rational(5, 2)"
    - expr: integrate(x + 2*y**2, (x, sqrt(y), 1), (y, 0, 1))
      expected: "Rational(29, 84)"
:::
