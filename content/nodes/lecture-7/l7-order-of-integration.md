---
id: l7-order-of-integration
lecture: 7
order: 3
title: Changing the order of integration
prerequisites: [l7-general-regions]
sources:
  - source: handout
    section: "15.1"
    page: 392
  - source: sheet-3
    page: 1
  - { source: lecture-notes-7, page: 3 }
examWeight: medium
examWeightNote: |
  On the finals, changing the order appears as splitting a shadow into two regions. It is never its own exam question. The formal wording is the handout's. Lecture 7 covered this topic.
taught: lecture
status: reviewed
notation: |
  Reversing the order rewrites the same region with the other variable on the outside. The integrand is unchanged. \(dA\) does not record an order.
---

::: section
title: Choosing the order
:::

::: formal-statement
kind: method
title: Choosing the order
source:
  source: handout
  section: "15.1"
  page: 392
text: |
  Consider both orders before going far with a calculation. One order can be very difficult or impossible, and the other can be much easier.
:::

::: plain-explanation
text: |
  You describe the region twice, once with each variable on the outside, and you integrate the same function. If the formula for the **inner limit** changes along the outer interval, that order is two integrals, one on each piece.
:::

::: tip
text: |
  If the inner integral has no elementary antiderivative, the other description may turn it into a substitution you can finish.
:::

::: worked-example
title: The easy order under a cylinder
problem: |
  Find the volume under \(z = \sqrt{1 - x^2}\) and above the triangle bounded by \(y = x\), \(x = 1\) and \(y = 0\).
solution: |
  The triangle has vertices \((0, 0)\), \((1, 0)\) and \((1, 1)\). The two descriptions are
  \[
  \begin{aligned}
  &\int_0^1 \int_0^x \sqrt{1 - x^2}\, dy\, dx,\\
  &\int_0^1 \int_y^1 \sqrt{1 - x^2}\, dx\, dy.
  \end{aligned}
  \]
  The order \(dx\, dy\) asks for an antiderivative of \(\sqrt{1 - x^2}\) in \(x\), and that takes a trigonometric substitution. The order \(dy\, dx\) keeps \(\sqrt{1 - x^2}\) constant in \(y\), so the inner integral is multiplication by the length \(x\).

  ### Computing the volume

  \[
  \int_0^1 \int_0^x \sqrt{1 - x^2}\, dy\, dx = \int_0^1 x\sqrt{1 - x^2}\, dx.
  \]
  Substitute \(u = 1 - x^2\). Then \(du = -2x\, dx\), so \(x\, dx = -\frac{1}{2}\, du\), and
  \[
  \begin{aligned}
  &\int x\sqrt{1 - x^2}\, dx\\
  &= -\frac{1}{2}\int \sqrt{u}\, du\\
  &= -\frac{1}{2}\cdot\frac{2}{3}u^{3/2}\\
  &= -\frac{1}{3}(1 - x^2)^{3/2}.
  \end{aligned}
  \]
  The definite integral is
  \[
  \Biggl[-\frac{1}{3}(1 - x^2)^{3/2}\Biggr]_0^1 = 0 - \Biggl(-\frac{1}{3}\Biggr) = \frac{1}{3}.
  \]
  The volume is \(\frac{1}{3}\).
:::

::: trap
text: |
  The antiderivative of \(x\sqrt{1 - x^2}\) is \(-\frac{1}{3}(1 - x^2)^{3/2}\). Dropping the minus sign and evaluating \(\frac{1}{3}(1 - x^2)^{3/2}\) from 0 to 1 gives \(-\frac{1}{3}\). The volume under \(z = \sqrt{1 - x^2}\) on the triangle bounded by \(y = x\), \(x = 1\) and \(y = 0\) is \(\frac{1}{3}\), so the minus sign stays in the antiderivative.
:::

::: going-deeper
title: An integral that only works in one order
text: |
  The integral \(\int_0^1 \int_x^1 e^{y^2}\, dy\, dx\) has no elementary inner antiderivative. The region is \(0 \le x \le y \le 1\). Taking \(x\) on the inside gives
  \[
  \int_0^1 \int_0^y e^{y^2}\, dx\, dy = \int_0^1 y\, e^{y^2}\, dy = \frac{e - 1}{2}.
  \]
  Reversing the order turns an impossible integral into a substitution.
:::

::: key-points
text: |
  - Describe the region once with \(x\) on the outside and once with \(y\) on the outside, and integrate the same function. Consider both orders before going far with a calculation, because one order can be very difficult or impossible and the other can be much easier.
  - If the formula for the inner limit changes along the outer interval, that order is two integrals, one on each piece. If the inner integral has no elementary antiderivative, the other order may turn it into a substitution you can finish.
  - The usual slip drops the minus sign from \(-\frac{1}{3}(1 - x^2)^{3/2}\), the antiderivative of \(x\sqrt{1 - x^2}\), and gets \(-\frac{1}{3}\) for the volume under \(z = \sqrt{1 - x^2}\) on the triangle bounded by \(y = x\), \(x = 1\) and \(y = 0\). The minus sign comes from \(du = -2x\, dx\) and stays, and the volume is \(\frac{1}{3}\).
:::

::: concept-question
id: l7-order-of-integration.q-26aeec4a
question: |
  The inner integral in \(x\) is \(\int \sin(x^2)\, dx\). What is a useful next step?
options:
  - text: Look for a trigonometric substitution that produces an antiderivative of \(\sin(x^2)\).
  - text: Reverse the order and keep the same integrand.
    correct: true
  - text: Replace the integrand by 0, because a sine integrates to zero on an interval symmetric about 0.
explanation: |
  \(\sin(x^2)\) has no elementary antiderivative in \(x\). On the region \(0 \le y \le 1\), \(y^2 \le x \le 1\), the order \(dy\, dx\) has inner integral \(\int_0^{\sqrt{x}} y\sin(x^2)\, dy = \frac{x}{2}\sin(x^2)\). The substitution \(u = x^2\) finishes that integral, and the value is \(\frac{1 - \cos 1}{4}\). Here \(x\) runs from \(y^2\) to 1 and \(y\) runs from 0 to 1, so \(x\) stays positive.
:::

::: section
title: Reversing the order
:::

::: visual
kind: region
caption: |
  With \(x\) on the outside this region is two pieces, one on each side of the peak. With \(y\) on the outside it is one piece.
params:
  preset: split
  order: dy-dx
:::

::: visual
kind: region
caption: |
  The exam shadow is the triangle \(x + y = 1\) in the first quadrant, cut by the disk \(x^2 + y^2 = 1 - x - y\). That cut splits the shadow into two integrals in one order.
params:
  preset: exam-shadow
  order: dy-dx
:::

::: worked-example
title: Reversing a parabolic region
problem: |
  Evaluate \(\int_0^1 \int_0^{x^2} (x + 2y^2)\, dy\, dx\), and evaluate the same integral with the order reversed.
solution: |
  The region is \(0 \le x \le 1\) and \(0 \le y \le x^2\). With \(y\) on the outside, \(y\) runs from 0 to 1, and for each such \(y\) the horizontal slice runs from the parabola \(x = \sqrt{y}\) to the line \(x = 1\).

  ### Original order

  In the original order the inner integral treats \(x\) as constant:
  \[
  \begin{aligned}
  &\int_0^{x^2} (x + 2y^2)\, dy\\
  &= \Biggl[xy + \frac{2}{3}y^3\Biggr]_0^{x^2}\\
  &= x^3 + \frac{2}{3}x^6.
  \end{aligned}
  \]
  Then
  \[
  \begin{aligned}
  &\int_0^1 \Biggl(x^3 + \frac{2}{3}x^6\Biggr)\, dx\\
  &= \Biggl[\frac{x^4}{4} + \frac{2}{21}x^7\Biggr]_0^1\\
  &= \frac{1}{4} + \frac{2}{21}\\
  &= \frac{29}{84}.
  \end{aligned}
  \]

  ### Reversed order

  The reversed integral is
  \[
  \int_0^1 \int_{\sqrt{y}}^1 (x + 2y^2)\, dx\, dy.
  \]
  The inner integral treats \(y\) as constant:
  \[
  \Biggl[\frac{x^2}{2} + 2y^2 x\Biggr]_{\sqrt{y}}^1 = \frac{1}{2} + 2y^2 - \frac{y}{2} - 2y^{5/2}.
  \]
  The outer integral is
  \[
  \begin{aligned}
  &\Biggl[\frac{y}{2} + \frac{2}{3}y^3 - \frac{y^2}{4} - \frac{4}{7}y^{7/2}\Biggr]_0^1\\
  &= \frac{1}{2} + \frac{2}{3} - \frac{1}{4} - \frac{4}{7}\\
  &= \frac{29}{84}.
  \end{aligned}
  \]
  Both orders equal \(\frac{29}{84}\). The integrand was \(x + 2y^2\) in each of them.
:::

::: guided-example
title: Reverse a triangular integral
problem: |
  Evaluate \(\int_0^1 \int_0^{1 - x} (x + 2y)\, dy\, dx\) by reversing the order. Try each step on paper before you show it.
steps:
  - |
    The region is \(0 \le x \le 1\) and \(0 \le y \le 1 - x\). It is the triangle with vertices \((0, 0)\), \((1, 0)\) and \((0, 1)\).
  - |
    With \(y\) on the outside, \(y\) runs from 0 to 1. For a fixed \(y\), \(x\) runs from 0 to \(1 - y\).
  - |
    The reversed integral is \(\int_0^1 \int_0^{1 - y} (x + 2y)\, dx\, dy\).
  - |
    The inner integral is \(\bigl[\frac{x^2}{2} + 2yx\bigr]_0^{1 - y} = \frac{(1 - y)^2}{2} + 2y(1 - y) = \frac{1}{2} + y - \frac{3}{2}y^2\).
  - |
    The outer integral is \(\bigl[\frac{y}{2} + \frac{y^2}{2} - \frac{1}{2}y^3\bigr]_0^1 = \frac{1}{2}\). The original order equals \(\frac{1}{2}\) as well.
:::

::: trap
text: |
  The shadow above \(y = 0\), under \(y = x\) for \(0 \le x \le 1\) and under \(y = 2 - x\) for \(1 \le x \le 2\), has area 1. One integral \(\int_0^2 \int_0^x 1\, dy\, dx\) equals 2. For \(x > 1\) the limit \(y = x\) climbs past the line \(y = 2 - x\), so that single pair of limits contains area outside the shadow. The order \(dy\, dx\) needs two integrals, split at \(x = 1\).
:::

::: trap
text: |
  The integral \(\int_0^1 \int_0^x 2y\, dy\, dx\) equals \(\frac{1}{3}\). Reversing the outer bounds and keeping an inner integral from 0 to the outer variable produces \(\int_0^1 \int_0^y 2y\, dx\, dy = \int_0^1 2y^2\, dy = \frac{2}{3}\). Those inner limits still describe the old vertical slices. With \(y\) on the outside, \(x\) runs from \(y\) to 1, and \(\int_0^1 \int_y^1 2y\, dx\, dy = \frac{1}{3}\).
:::

::: key-points
text: |
  - Reversing the order rewrites the same region with the other variable on the outside, and the integrand is unchanged. Both orders give the same value, as in the example where both equal \(\frac{29}{84}\) for \(x + 2y^2\) on \(0 \le x \le 1\), \(0 \le y \le x^2\).
  - The new inner limits are read from the region as functions of the new outer variable. For \(0 \le x \le 1\) and \(0 \le y \le x^2\), \(y\) runs from 0 to 1 and \(x\) runs from \(\sqrt{y}\) to 1.
  - The usual slip keeps the old inner limits and turns \(\int_0^1 \int_0^x 2y\, dy\, dx = \frac{1}{3}\) into \(\int_0^1 \int_0^y 2y\, dx\, dy = \frac{2}{3}\). Those limits still describe the old vertical slices. With \(y\) on the outside, \(x\) runs from \(y\) to 1, and the integral equals \(\frac{1}{3}\).
  - A second slip uses one pair of limits for a shadow that is two pieces in that order. The shadow under \(y = x\) on \([0, 1]\) and under \(y = 2 - x\) on \([1, 2]\) has area 1, but \(\int_0^2 \int_0^x 1\, dy\, dx\) equals 2. The order \(dy\, dx\) needs two integrals split at \(x = 1\), and with \(y\) on the outside the shadow is one piece.
:::

::: concept-question
id: l7-order-of-integration.q-9930270f
question: |
  The region is \(0 \le x \le 1\), \(0 \le y \le x^2\). Which description has \(y\) on the outside?
options:
  - text: \(y\) runs from 0 to 1, and \(x\) runs from 0 to \(\sqrt{y}\).
  - text: \(y\) runs from 0 to 1, and \(x\) runs from \(\sqrt{y}\) to 1.
    correct: true
  - text: \(y\) runs from 0 to 1, and \(x\) runs from 0 to \(y^2\).
  - text: \(x\) runs from 0 to 1, and \(y\) runs from 0 to \(x^2\).
explanation: |
  On this region the largest value of \(y\) is 1. For \(x \ge 0\), the parabola \(y = x^2\) is the same curve as \(x = \sqrt{y}\). A horizontal slice at height \(y\) starts on that curve and ends on the line \(x = 1\). The description with \(x\) running from 0 to 1 and \(y\) from 0 to \(x^2\) still has \(x\) on the outside.
:::

::: exercise
id: l7-order-of-integration.ex-basic
tier: basic
topics: [double-integrals]
statement: |
  Reverse the order and evaluate \(\int_0^1 \int_0^y x\, dx\, dy\).
solution: |
  The region is \(0 \le y \le 1\) and \(0 \le x \le y\). With \(x\) on the outside, \(x\) runs from 0 to 1 and \(y\) runs from \(x\) to 1.
  \[
  \begin{aligned}
  &\int_0^1 \int_x^1 x\, dy\, dx\\
  &= \int_0^1 x(1 - x)\, dx\\
  &= \Biggl[\frac{x^2}{2} - \frac{x^3}{3}\Biggr]_0^1\\
  &= \frac{1}{6}.
  \end{aligned}
  \]
  The original order is \(\int_0^1 \frac{y^2}{2}\, dy = \frac{1}{6}\). Both orders equal \(\frac{1}{6}\).
provenance: written-for-site
steps:
  - |
    The region is redrawn with \(x\) from 0 to 1 and \(y\) from \(x\) to 1.
  - |
    The reversed integral is evaluated.
  - |
    The original order is evaluated, and both equal \(\frac{1}{6}\).
verification:
  checks:
    - expr: 'integrate(x, (x, 0, y), (y, 0, 1))'
      expected: 'Rational(1, 6)'
    - expr: 'integrate(x, (y, x, 1), (x, 0, 1))'
      expected: 'Rational(1, 6)'
:::

::: exercise
id: l7-order-of-integration.ex-15.1.9
number: "15.1.9 (sheet 3 exercise 1.9)"
tier: standard
topics: [double-integrals]
statement: |
  Compute \(\int_0^1 \int_{\sqrt{y}}^1 \sqrt{x^3 + 1}\, dx\, dy\).
solution: |
  An antiderivative of \(\sqrt{x^3 + 1}\) in \(x\) is not elementary. The region is \(0 \le y \le 1\) and \(\sqrt{y} \le x \le 1\), so \(0 \le x \le 1\) and \(0 \le y \le x^2\).
  \[
  \begin{aligned}
  &\int_0^1 \int_0^{x^2} \sqrt{x^3 + 1}\, dy\, dx\\
  &= \int_0^1 x^2\sqrt{x^3 + 1}\, dx.
  \end{aligned}
  \]
  Substitute \(u = x^3 + 1\), so \(du = 3x^2\, dx\). The limits change from \(x = 0\) to \(x = 1\) into \(u = 1\) to \(u = 2\).
  \[
  \begin{aligned}
  &\frac{1}{3}\int_1^2 u^{1/2}\, du\\
  &= \frac{2}{9}\bigl[u^{3/2}\bigr]_1^2\\
  &= \frac{2}{9}\bigl(2^{3/2} - 1\bigr)\\
  &= \frac{2}{9}(2\sqrt{2} - 1).
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - |
    The region is rewritten as \(0 \le x \le 1\), \(0 \le y \le x^2\).
  - |
    The inner integral in \(y\) produces \(x^2\sqrt{x^3 + 1}\).
  - |
    The substitution \(u = x^3 + 1\) gives \(\frac{2}{9}(2\sqrt{2} - 1)\).
verification:
  checks:
    - expr: 'integrate(sqrt(x**3 + 1), (y, 0, x**2), (x, 0, 1))'
      expected: '(2/9)*2**Rational(3, 2) - Rational(2, 9)'
    - expr: '(2/9)*2**Rational(3, 2) - Rational(2, 9)'
      expected: '(2/9)*(2*sqrt(2) - 1)'
:::

::: exercise
id: l7-order-of-integration.ex-15.1.10
number: "15.1.10 (sheet 3 exercise 1.10)"
tier: standard
topics: [double-integrals]
statement: |
  Compute \(\int_0^1 \int_{y^2}^1 y\sin(x^2)\, dx\, dy\).
solution: |
  An antiderivative of \(\sin(x^2)\) in \(x\) is not elementary. The region is \(0 \le y \le 1\) and \(y^2 \le x \le 1\), so \(0 \le x \le 1\) and \(0 \le y \le \sqrt{x}\).
  \[
  \begin{aligned}
  &\int_0^1 \int_0^{\sqrt{x}} y\sin(x^2)\, dy\, dx\\
  &= \int_0^1 \frac{x}{2}\sin(x^2)\, dx.
  \end{aligned}
  \]
  Substitute \(u = x^2\), so \(du = 2x\, dx\) and the limits run from 0 to 1.
  \[
  \begin{aligned}
  &\frac{1}{4}\int_0^1 \sin u\, du\\
  &= \frac{1}{4}\bigl[-\cos u\bigr]_0^1\\
  &= \frac{1 - \cos 1}{4}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - |
    The region is rewritten as \(0 \le x \le 1\), \(0 \le y \le \sqrt{x}\).
  - |
    The inner integral in \(y\) produces \(\frac{x}{2}\sin(x^2)\).
  - |
    The substitution \(u = x^2\) gives \(\frac{1 - \cos 1}{4}\).
verification:
  checks:
    - expr: 'integrate(y*sin(x**2), (y, 0, sqrt(x)), (x, 0, 1))'
      expected: '(1 - cos(1))/4'
:::

::: exercise
id: l7-order-of-integration.ex-15.1.11
number: "15.1.11 (sheet 3 exercise 1.12)"
tier: standard
topics: [double-integrals]
statement: |
  Compute \(\int_0^1 \int_{x^2}^1 x\sqrt{1 + y^2}\, dy\, dx\).
solution: |
  The region is \(0 \le x \le 1\) and \(x^2 \le y \le 1\), so \(0 \le y \le 1\) and \(0 \le x \le \sqrt{y}\).
  \[
  \begin{aligned}
  &\int_0^1 \int_0^{\sqrt{y}} x\sqrt{1 + y^2}\, dx\, dy\\
  &= \int_0^1 \frac{y}{2}\sqrt{1 + y^2}\, dy.
  \end{aligned}
  \]
  Substitute \(u = 1 + y^2\), so \(du = 2y\, dy\). The limits change from \(y = 0\) to \(y = 1\) into \(u = 1\) to \(u = 2\).
  \[
  \frac{1}{4}\int_1^2 u^{1/2}\, du = \frac{1}{6}\bigl[u^{3/2}\bigr]_1^2 = \frac{2\sqrt{2} - 1}{6}.
  \]
  The original order equals the same value.
provenance: handout-answer
steps:
  - |
    The region is rewritten as \(0 \le y \le 1\), \(0 \le x \le \sqrt{y}\).
  - |
    The inner integral in \(x\) produces \(\frac{y}{2}\sqrt{1 + y^2}\).
  - |
    The substitution \(u = 1 + y^2\) gives \(\frac{2\sqrt{2} - 1}{6}\).
verification:
  checks:
    - expr: 'integrate(x*sqrt(1 + y**2), (x, 0, sqrt(y)), (y, 0, 1))'
      expected: '(2*sqrt(2) - 1)/6'
    - expr: 'integrate(x*sqrt(1 + y**2), (y, x**2, 1), (x, 0, 1))'
      expected: '(2*sqrt(2) - 1)/6'
:::

::: exercise
id: l7-order-of-integration.ex-15.1.13
number: "15.1.13 (sheet 3 exercise 1.13)"
tier: standard
topics: [double-integrals]
statement: |
  Compute \(\int_0^1 \int_{3y}^3 e^{x^2}\, dx\, dy\).
solution: |
  An antiderivative of \(e^{x^2}\) in \(x\) is not elementary. The region is \(0 \le y \le 1\) and \(3y \le x \le 3\), so \(0 \le x \le 3\) and \(0 \le y \le x/3\).
  \[
  \int_0^3 \int_0^{x/3} e^{x^2}\, dy\, dx = \int_0^3 \frac{x}{3}e^{x^2}\, dx.
  \]
  Substitute \(u = x^2\), so \(du = 2x\, dx\). The limits change from \(x = 0\) to \(x = 3\) into \(u = 0\) to \(u = 9\).
  \[
  \frac{1}{6}\int_0^9 e^u\, du = \frac{e^9 - 1}{6}.
  \]
provenance: handout-answer
steps:
  - |
    The region is rewritten as \(0 \le x \le 3\), \(0 \le y \le x/3\).
  - |
    The inner integral in \(y\) produces \(\frac{x}{3}e^{x^2}\).
  - |
    The substitution \(u = x^2\) gives \(\frac{e^9 - 1}{6}\).
verification:
  checks:
    - expr: 'integrate(exp(x**2), (y, 0, x/3), (x, 0, 3))'
      expected: '(exp(9) - 1)/6'
:::

::: exercise
id: l7-order-of-integration.ex-15.1.32
number: "15.1.32"
tier: standard
topics: [double-integrals]
statement: |
  Reverse the order of integration in each integral. The integrand \(f(x, y)\) is a general function.
  \[
  \begin{aligned}
  &\text{(a)}\ \int_0^9 \int_0^{\sqrt{9 - y}} f(x, y)\, dx\, dy,\\
  &\text{(b)}\ \int_1^2 \int_0^{\ln x} f(x, y)\, dy\, dx,\\
  &\text{(c)}\ \int_0^1 \int_{\arcsin y}^{\pi/2} f(x, y)\, dx\, dy,\\
  &\text{(d)}\ \int_0^1 \int_{4x}^4 f(x, y)\, dy\, dx,\\
  &\text{(e)}\ \int_0^3 \int_0^{\sqrt{9 - y^2}} f(x, y)\, dx\, dy.
  \end{aligned}
  \]
solution: |
  (a) Here \(y\) runs from 0 to 9 and \(x\) runs from 0 to \(\sqrt{9 - y}\). Then \(x\) runs from 0 to 3, and for each such \(x\) the slice in \(y\) runs from 0 to \(9 - x^2\).
  \[
  \int_0^3 \int_0^{9 - x^2} f(x, y)\, dy\, dx.
  \]
  With \(f = 1\), both orders equal 18.

  (b) Here \(x\) runs from 1 to 2 and \(y\) runs from 0 to \(\ln x\). Then \(y\) runs from 0 to \(\ln 2\), and for each such \(y\) the slice in \(x\) runs from \(e^y\) to 2.
  \[
  \int_0^{\ln 2} \int_{e^y}^2 f(x, y)\, dx\, dy.
  \]
  With \(f = 1\), both orders equal \(2\ln 2 - 1\).

  (c) Here \(y\) runs from 0 to 1 and \(x\) runs from \(\arcsin y\) to \(\pi/2\). Then \(x\) runs from 0 to \(\pi/2\), and for each such \(x\) the slice in \(y\) runs from 0 to \(\sin x\).
  \[
  \int_0^{\pi/2} \int_0^{\sin x} f(x, y)\, dy\, dx.
  \]
  With \(f = 1\), both orders equal 1.

  (d) Here \(x\) runs from 0 to 1 and \(y\) runs from \(4x\) to 4. Then \(y\) runs from 0 to 4, and for each such \(y\) the slice in \(x\) runs from 0 to \(y/4\).
  \[
  \int_0^4 \int_0^{y/4} f(x, y)\, dx\, dy.
  \]
  With \(f = 1\), both orders equal 2.

  (e) The region is the quarter disk \(x \ge 0\), \(y \ge 0\), \(x^2 + y^2 \le 9\). With \(x\) on the outside, \(x\) runs from 0 to 3 and \(y\) runs from 0 to \(\sqrt{9 - x^2}\).
  \[
  \int_0^3 \int_0^{\sqrt{9 - x^2}} f(x, y)\, dy\, dx.
  \]
  With \(f = 1\), both orders equal \(\frac{9\pi}{4}\).
provenance: written-for-site
steps:
  - |
    Each region is described with the other variable on the outside.
  - |
    The integrand \(f\) is left unchanged.
  - |
    With \(f = 1\), the two orders agree: 18, \(2\ln 2 - 1\), 1, 2 and \(\frac{9\pi}{4}\).
verification:
  checks:
    - expr: 'integrate(1, (x, 0, sqrt(9 - y)), (y, 0, 9)) - integrate(1, (y, 0, 9 - x**2), (x, 0, 3))'
      expected: '0'
    - expr: 'integrate(1, (y, 0, 9 - x**2), (x, 0, 3))'
      expected: '18'
    - expr: 'integrate(1, (y, 0, log(x)), (x, 1, 2)) - integrate(1, (x, exp(y), 2), (y, 0, log(2)))'
      expected: '0'
    - expr: 'integrate(1, (x, exp(y), 2), (y, 0, log(2)))'
      expected: '2*log(2) - 1'
    - expr: 'integrate(1, (x, asin(y), pi/2), (y, 0, 1)) - integrate(1, (y, 0, sin(x)), (x, 0, pi/2))'
      expected: '0'
    - expr: 'integrate(1, (y, 0, sin(x)), (x, 0, pi/2))'
      expected: '1'
    - expr: 'integrate(1, (y, 4*x, 4), (x, 0, 1)) - integrate(1, (x, 0, y/4), (y, 0, 4))'
      expected: '0'
    - expr: 'integrate(1, (x, 0, y/4), (y, 0, 4))'
      expected: '2'
    - expr: 'integrate(1, (x, 0, sqrt(9 - y**2)), (y, 0, 3)) - integrate(1, (y, 0, sqrt(9 - x**2)), (x, 0, 3))'
      expected: '0'
    - expr: 'integrate(1, (y, 0, sqrt(9 - x**2)), (x, 0, 3))'
      expected: '9*pi/4'
:::

::: exercise
id: l7-order-of-integration.ex-split-shadow
tier: exam
topics: [double-integrals]
examBlock: double-integrals
statement: |
  The shadow \(D\) lies above \(y = 0\). Its upper boundary is \(y = x\) on \(0 \le x \le 1\) and \(y = 2 - x\) on \(1 \le x \le 2\). Compute \(\iint_D (x + y)\, dA\).
solution: |
  With \(x\) on the outside the upper boundary changes at \(x = 1\), so the integral splits into two.
  \[
  \begin{aligned}
  &\int_0^1 \int_0^x (x + y)\, dy\, dx\\
  &\quad+ \int_1^2 \int_0^{2 - x} (x + y)\, dy\, dx.
  \end{aligned}
  \]
  The first inner integral equals \(\frac{3}{2}x^2\), and the second inner integral equals \(2 - \frac{1}{2}x^2\). Then
  \[
  \begin{aligned}
  &\int_0^1 \frac{3}{2}x^2\, dx = \frac{1}{2},\\
  &\int_1^2 \bigl(2 - \frac{1}{2}x^2\bigr)\, dx = \frac{5}{6}.
  \end{aligned}
  \]
  The sum is \(\frac{1}{2} + \frac{5}{6} = \frac{4}{3}\).

  With \(y\) on the outside the shadow is one piece: \(y\) runs from 0 to 1 and \(x\) runs from \(y\) to \(2 - y\).
  \[
  \begin{aligned}
  &\int_0^1 \int_y^{2 - y} (x + y)\, dx\, dy\\
  &= \int_0^1 (2 - 2y^2)\, dy\\
  &= \frac{4}{3}.
  \end{aligned}
  \]
  Both orders equal \(\frac{4}{3}\).
provenance: written-for-site
steps:
  - |
    The order \(dy\, dx\) is written as two integrals, split at \(x = 1\).
  - |
    The order \(dx\, dy\) is written as one integral, with \(x\) from \(y\) to \(2 - y\).
  - |
    Both orders equal \(\frac{4}{3}\).
verification:
  checks:
    - expr: 'integrate(x + y, (y, 0, x), (x, 0, 1)) + integrate(x + y, (y, 0, 2 - x), (x, 1, 2))'
      expected: 'Rational(4, 3)'
    - expr: 'integrate(x + y, (x, y, 2 - y), (y, 0, 1))'
      expected: 'Rational(4, 3)'
    - expr: 'integrate(1, (y, 0, x), (x, 0, 1)) + integrate(1, (y, 0, 2 - x), (x, 1, 2))'
      expected: '1'
    - expr: 'integrate(1, (x, y, 2 - y), (y, 0, 1))'
      expected: '1'
:::

::: sheet-item
id: l7-order-of-integration.sheet-other-order
category: recognition
text: |
  When the inner integral has no elementary antiderivative, try the other order. The integrand stays the same.
:::

::: sheet-item
id: l7-order-of-integration.sheet-inner-limits
category: trap
text: |
  After the other variable moves to the outside, the inner limits are new. They are read from the region as functions of that outer variable.
:::

::: sheet-item
id: l7-order-of-integration.sheet-split
category: trap
text: |
  If a shadow is two pieces in one order, one integral in that order drops part of the shadow or adds area outside it. Split at the corner where the boundary formula changes.
:::

::: exercise
id: l7-order-of-integration.ex-easy-order-cylinder
tier: standard
topics: [double-integrals]
statement: |
  Find the volume under \(z = \sqrt{1 - x^2}\) and above the triangle bounded by \(y = x\), \(x = 1\) and \(y = 0\). Write the volume as an iterated integral in each order and say which order you compute and why.
solution: |
  The triangle has vertices \((0, 0)\), \((1, 0)\) and \((1, 1)\). The two orders are
  \[
  \begin{aligned}
  &\int_0^1 \int_0^x \sqrt{1 - x^2}\, dy\, dx,\\
  &\int_0^1 \int_y^1 \sqrt{1 - x^2}\, dx\, dy.
  \end{aligned}
  \]
  The second order needs an antiderivative of \(\sqrt{1 - x^2}\) in \(x\), which takes a trigonometric substitution. In the first order the integrand does not depend on \(y\), so the inner integral is multiplication by the length \(x\) of the slice. Compute the first order.

  The integral is \(\int_0^1 x\sqrt{1 - x^2}\, dx\). Set \(u = 1 - x^2\), so \(du = -2x\, dx\) and \(x\, dx = -\tfrac{1}{2}\, du\). An antiderivative is \(-\tfrac{1}{3}(1 - x^2)^{3/2}\), and
  \[
  \Bigl[-\tfrac{1}{3}(1 - x^2)^{3/2}\Bigr]_0^1 = 0 - \Bigl(-\tfrac{1}{3}\Bigr) = \tfrac{1}{3}.
  \]
  The volume is \(\tfrac{1}{3}\).
provenance: written-for-site
steps:
  - Both orders are written, and the order dy dx is chosen because the integrand does not depend on y.
  - The inner integral equals x sqrt(1 - x^2).
  - The substitution u = 1 - x^2 gives the volume 1/3.
verification:
  checks:
    - expr: integrate(sqrt(1 - x**2), (y, 0, x))
      expected: "x*sqrt(1 - x**2)"
    - expr: integrate(sqrt(1 - x**2), (y, 0, x), (x, 0, 1))
      expected: "Rational(1, 3)"
    - expr: integrate(sqrt(1 - x**2), (x, y, 1), (y, 0, 1))
      expected: "Rational(1, 3)"
:::
