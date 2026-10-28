---
id: l3-trig-integrals
lecture: 3
order: 8
title: Trigonometric powers and substitutions
prerequisites: [l3-substitution, l1-trigonometry]
sources:
  - { source: handout, section: "8.2", page: 171 }
  - { source: handout, section: "8.3", page: 173 }
  - { source: lecture-notes-3, page: 4 }
  - { source: midterm-app }
  - { source: midterm-2022, page: 1 }
  - { source: midterm-2025, page: 1 }
  - { source: handout, section: "8.7", page: 189 }
examWeight: medium
status: reviewed
---

::: section
title: Odd power of sine
:::

::: formal-statement
kind: method
title: Odd power of sine
source: { source: handout, section: "8.2", page: 171 }
text: |
  When the power of sine is **odd**:

  1. Peel off one factor of \(\sin x\).
  2. Convert the remaining even power by \(\sin^2 x = 1 - \cos^2 x\).
  3. Substitute \(u = \cos x\), so \(du = -\sin x\, dx\).
:::

::: plain-explanation
text: |
  The factor \(\sin x\, dx\) is \(-du\). Every remaining power of sine is a power of \(1 - \cos^2 x\), so the integral is a polynomial in \(u\). An odd power of cosine is handled by the companion substitution \(u = \sin x\).
:::

::: worked-example
title: An odd power of sine
problem: |
  Evaluate \(\int \sin^5 x\, dx\).
solution: |
  The power \(5\) is odd. Write
  \[
  \begin{aligned}
  \sin^5 x &= \sin x\,(\sin^2 x)^2\\
  &= \sin x\,(1 - \cos^2 x)^2.
  \end{aligned}
  \]

  The substitution \(u = \cos x\) has differential \(du = -\sin x\, dx\). The integral becomes
  \[
  \begin{aligned}
  &\int -(1 - u^2)^2\, du\\
  &=\int -(1 - 2u^2 + u^4)\, du\\
  &=-u + \frac{2}{3}u^3 - \frac{1}{5}u^5 + C.
  \end{aligned}
  \]
  Restoring \(u = \cos x\) gives
  \[
  \begin{aligned}
  \int \sin^5 x\, dx&=-\cos x + \frac{2}{3}\cos^3 x\\
  &\quad-\frac{1}{5}\cos^5 x\\
  &\quad + C.
  \end{aligned}
  \]
:::

::: trap
text: |
  An odd power of sine uses \(u = \cos x\). The candidate \(-\frac{\cos^3 x}{3}\) has derivative \(\sin x\cos^2 x\). At \(x = \frac{\pi}{2}\) that derivative equals \(0\), and \(\sin^3 \frac{\pi}{2}\) equals \(1\). The two values differ, so \(-\frac{\cos^3 x}{3}\) is not an antiderivative of \(\sin^3 x\).
:::

::: key-points
text: |
  - For an odd power of \(\sin x\), peel off one \(\sin x\), write the rest with \(\sin^2 x = 1 - \cos^2 x\) and substitute \(u = \cos x\), so \(du = -\sin x\, dx\). An odd power of \(\cos x\) uses \(u = \sin x\).
  - The usual slip integrates \(\sin^3 x\) as \(-\frac{\cos^3 x}{3}\). That function has derivative \(\sin x\cos^2 x\), so it is not an antiderivative of \(\sin^3 x\). The substitution \(u = \cos x\) gives \(-\cos x + \frac{\cos^3 x}{3} + C\).
:::

::: exercise
id: l3-trig-integrals.8.2.8
number: "8.2.8"
tier: basic
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sin x\,(\cos x)^{3/2}\, dx\).
solution: |
  The factor \(\sin x\, dx\) is the differential of cosine, up to a sign. Set \(u = \cos x\), so \(du = -\sin x\, dx\). The integral is
  \[
  \begin{aligned}
  \int -u^{3/2}\, du&=-\frac{2}{5}u^{5/2} + C\\
  &=-\frac{2}{5}(\cos x)^{5/2} + C.
  \end{aligned}
  \]
provenance: handout-answer
verification:
  checks:
    - expr: diff(-2*cos(x)**(Rational(5, 2))/5, x)
      expected: sin(x)*cos(x)**(Rational(3, 2))
:::

::: section
title: Even powers
:::

::: formal-statement
kind: method
title: Even powers
source: { source: handout, section: "8.2", page: 171 }
text: |
  When the power of sine is **even**, write the integrand as a power of \(\sin^2 x\) and use
  \[
  \sin^2 x = \frac{1 - \cos 2x}{2}.
  \]

  - A remaining odd power of \(\cos 2x\) is integrated by peeling off one cosine factor.
  - A remaining even power of \(\cos 2x\) uses \(\cos^2 \theta = \frac{1 + \cos 2\theta}{2}\).
:::

::: plain-explanation
text: |
  The **half-angle identity** replaces \(\sin^2 x\) by a constant plus one cosine of \(2x\). Expanding the power produces constants, single cosines, and powers of \(\cos 2x\):

  - A constant and a single cosine integrate at once.
  - A power of \(\cos 2x\) is reduced by peeling off one cosine or by the cosine half-angle identity.
:::

::: worked-example
title: An even power of sine
problem: |
  Evaluate \(\int \sin^6 x\, dx\).
solution: |
  The power \(6\) is even. Write \(\sin^6 x = (\sin^2 x)^3\) and insert the half-angle identity:
  \[
  \begin{aligned}
  \sin^6 x\\
  &=\left(\frac{1 - \cos 2x}{2}\right)^3\\
  &=\frac{1 - 3\cos 2x + 3\cos^2 2x - \cos^3 2x}{8}.
  \end{aligned}
  \]
  The constant term integrates to \(\frac{x}{8}\). The single-cosine term integrates to \(-\frac{3}{16}\sin 2x\).

  For the square, use \(\cos^2 2x = \frac{1 + \cos 4x}{2}\):
  \[
  \int \frac{3}{8}\cos^2 2x\, dx = \frac{3}{16}\left(x + \frac{\sin 4x}{4}\right).
  \]
  For the cube, write \(\cos^3 2x = \cos 2x\,(1 - \sin^2 2x)\) and set \(w = \sin 2x\), so \(dw = 2\cos 2x\, dx\). Then
  \[
  \begin{aligned}
  &\int -\frac{1}{8}\cos^3 2x\, dx\\
  &=-\frac{1}{16}\left(\sin 2x - \frac{\sin^3 2x}{3}\right).
  \end{aligned}
  \]
  Adding the four antiderivatives gives
  \[
  \begin{aligned}
  &\int \sin^6 x\, dx\\
  &=\frac{x}{8} - \frac{3}{16}\sin 2x\\
  &\quad-\frac{1}{16}\left(\sin 2x - \frac{\sin^3 2x}{3}\right)\\
  &\quad+\frac{3}{16}\left(x + \frac{\sin 4x}{4}\right)\\
  &\quad + C.
  \end{aligned}
  \]
:::

::: formal-statement
kind: method
title: Product of even powers
source: { source: handout, section: "8.2", page: 171 }
text: |
  For a **product of even powers** of sine and cosine, apply both half-angle identities:
  \[
  \begin{aligned}
  \sin^2 x&=\frac{1 - \cos 2x}{2},\\
  \cos^2 x&=\frac{1 + \cos 2x}{2}.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  Multiplying the two right-hand sides produces a polynomial in \(\cos 2x\). Each power of that cosine is then integrated by the even-power method.
:::

::: worked-example
title: A product of even powers
problem: |
  Evaluate \(\int \sin^2 x\cos^2 x\, dx\).
solution: |
  Both powers are even. Insert both half-angle identities:
  \[
  \begin{aligned}
  &\int \sin^2 x\cos^2 x\, dx\\
  &=\int \frac{1 - \cos 2x}{2}\cdot\frac{1 + \cos 2x}{2}\, dx\\
  &=\int \frac{1 - \cos^2 2x}{4}\, dx.
  \end{aligned}
  \]
  The numerator is \(\sin^2 2x\), and \(\sin^2 2x = \frac{1 - \cos 4x}{2}\), so the integrand equals \(\frac{1 - \cos 4x}{8}\). Therefore
  \[
  \begin{aligned}
  &\int \sin^2 x\cos^2 x\, dx\\
  &=\int \frac{1 - \cos 4x}{8}\, dx\\
  &=\frac{x}{8} - \frac{\sin 4x}{32} + C.
  \end{aligned}
  \]
:::

::: trap
text: |
  The half-angle identity is \(\sin^2 x = \frac{1 - \cos 2x}{2}\). The version that drops the factor \(\frac{1}{2}\) is \(1 - \cos 2x\). At \(x = \frac{\pi}{2}\), \(\sin^2 x\) equals \(1\), and \(1 - \cos \pi\) equals \(2\). The two values differ, so the version without the factor \(\frac{1}{2}\) is false.
:::

::: key-points
text: |
  - For an even power of \(\sin x\), write the integrand as a power of \(\sin^2 x = \frac{1 - \cos 2x}{2}\). A remaining even power of \(\cos 2x\) uses \(\cos^2 \theta = \frac{1 + \cos 2\theta}{2}\), and an odd power is integrated by peeling off one cosine.
  - For a product of even powers of sine and cosine, apply both half-angle identities and integrate the resulting powers of \(\cos 2x\).
  - The usual slip drops the factor \(\frac{1}{2}\) and writes \(\sin^2 x = 1 - \cos 2x\). At \(x = \frac{\pi}{2}\) the left side is \(1\) and the right side is \(2\), so the correct identity is \(\sin^2 x = \frac{1 - \cos 2x}{2}\).
:::

::: exercise
id: l3-trig-integrals.e1
tier: basic
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^{\pi}\sin^2 x\,dx\).
solution: |
  Use \(\sin^2 x=\frac{1-\cos 2x}{2}\).

  \[
  \int_0^{\pi}\frac{1-\cos 2x}{2}\,dx=\left[\frac{x}{2}-\frac{\sin 2x}{4}\right]_0^{\pi}=\frac{\pi}{2}.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(sin(x)**2, (x, 0, pi))
      expected: "pi/2"
:::

::: section
title: Square root of \(a^2 - x^2\)
:::

::: formal-statement
kind: method
title: Square root of \(a^2 - x^2\)
source: { source: handout, section: "8.3", page: 173 }
text: |
  - If the integrand contains \(1 - x^2\), try \(x = \sin u\).
  - If it contains \(\sqrt{a^2 - x^2}\) with \(a > 0\), substitute \(x = a\sin u\).

  Then
  \[
  \begin{aligned}
  dx&=a\cos u\, du,\\
  a^2 - x^2&=a^2\cos^2 u,
  \end{aligned}
  \]
  by \(\cos^2 u = 1 - \sin^2 u\).
:::

::: plain-explanation
text: |
  The substitution is the inverse of \(u = \arcsin(x/a)\), so \(u\) lies in \(\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]\). On that interval \(\cos u \ge 0\), and \(\sqrt{a^2 - x^2} = a\cos u\). 
:::

::: tip
text: |
  A constant other than one is scaled out first. For example, \(\sqrt{4 - 9x^2} = 2\sqrt{1 - (3x/2)^2}\).
:::

::: visual
kind: riemann
caption: |
  Midpoint rectangles for \(\sqrt{1 - x^2}\) on \([-1, 1]\). The region is a half disk. Increase \(n\) and the sum approaches \(\frac{\pi}{2}\).
params:
  f: "sqrt(1-x^2)"
  a: -1
  b: 1
  n: 8
  rule: midpoint
:::

::: worked-example
title: Square root of \(1 - x^2\)
problem: |
  Evaluate \(\int \sqrt{1 - x^2}\, dx\).
solution: |
  The radicand is \(1 - x^2\). Substitute \(x = \sin u\), so \(dx = \cos u\, du\) and \(u = \arcsin x\). Then \(\sqrt{1 - \sin^2 u} = \sqrt{\cos^2 u}\). Cosine is non-negative on the range of \(\arcsin\), so the square root equals \(\cos u\), and the integral is \(\int \cos^2 u\, du\).

  The half-angle identity gives
  \[
  \begin{aligned}
  &\int \cos^2 u\, du\\
  &=\int \frac{1 + \cos 2u}{2}\, du\\
  &=\frac{u}{2} + \frac{\sin 2u}{4} + C.
  \end{aligned}
  \]
  The double-angle formula is \(\sin 2u = 2\sin u\cos u = 2x\sqrt{1 - x^2}\). Therefore
  \[
  \begin{aligned}
  \int \sqrt{1 - x^2}\, dx&=\frac{\arcsin x}{2}\\
  &\quad+\frac{x\sqrt{1 - x^2}}{2}\\
  &\quad + C.
  \end{aligned}
  \]
:::

::: guided-example
title: A constant other than one
problem: |
  Evaluate \(\int \sqrt{4 - 9x^2}\, dx\).
steps:
  - |
    Factor the radicand as \(4 - 9x^2 = 4\left(1 - \left(\frac{3x}{2}\right)^2\right)\). The square root is \(2\sqrt{1 - (3x/2)^2}\).
  - |
    Set \(\frac{3x}{2} = \sin u\). Then \(x = \frac{2}{3}\sin u\) and \(dx = \frac{2}{3}\cos u\, du\). The integral becomes \(\frac{4}{3}\int \cos^2 u\, du\).
  - |
    Use \(\cos^2 u = \frac{1 + \cos 2u}{2}\). An antiderivative is \(\frac{2u}{3} + \frac{\sin 2u}{3}\).
  - |
    Write \(\sin 2u = 2\sin u\cos u\), with \(\sin u = \frac{3x}{2}\) and \(\cos u = \frac{1}{2}\sqrt{4 - 9x^2}\). The sine term simplifies to \(\frac{x\sqrt{4 - 9x^2}}{2}\).
  - |
    The antiderivative is \(\frac{2}{3}\arcsin\frac{3x}{2} + \frac{x\sqrt{4 - 9x^2}}{2} + C\).
:::

::: trap
text: |
  The square root of a square is the absolute value: \(\sqrt{\cos^2 u} = |\cos u|\). Replacing the root by \(\cos u\) fails when cosine is negative. At \(u = \frac{2\pi}{3}\), \(\cos u = -\frac{1}{2}\) and \(\sqrt{\cos^2 u} = \frac{1}{2}\).
:::

::: key-points
text: |
  - For \(\sqrt{a^2 - x^2}\) with \(a > 0\), substitute \(x = a\sin u\), so \(dx = a\cos u\, du\) and \(a^2 - x^2 = a^2\cos^2 u\). For \(1 - x^2\), try \(x = \sin u\).
  - Since \(u = \arcsin(x/a)\) lies in \(\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]\), cosine is non-negative there and \(\sqrt{a^2 - x^2} = a\cos u\).
  - The usual slip replaces \(\sqrt{\cos^2 u}\) by \(\cos u\) for every \(u\). The square root of a square is \(|\cos u|\), and at \(u = \frac{2\pi}{3}\) the root is \(\frac{1}{2}\) while \(\cos u = -\frac{1}{2}\).
:::

::: concept-question
id: l3-trig-integrals.q-a6005f6c
question: |
  Compute \(\int_{-1}^{1} \sqrt{1 - t^{2}}\, dt\) using \(t = \sin\theta\).
options:
  - text: |
      \(\frac{\pi}{2}\)
    correct: true
  - text: |
      \(\pi\)
  - text: |
      \(\frac{\pi}{4}\)
  - text: |
      \(2\)
explanation: |
  The substitution \(t = \sin\theta\) turns the integral into \(\int_{-\pi/2}^{\pi/2} \cos^{2}\theta\, d\theta\). Using \(\cos^{2}\theta = \frac{1 + \cos 2\theta}{2}\), the value is \(\frac{\pi}{2}\).
:::

::: concept-question
id: l3-trig-integrals.q-c87600aa
question: |
  Compute \(\int_{1/2}^{1} \sqrt{1 - t^{2}}\, dt\).
options:
  - text: |
      \(\frac{\pi}{6} - \frac{\sqrt{3}}{8}\)
    correct: true
  - text: |
      \(\frac{\pi}{6} + \frac{\sqrt{3}}{8}\)
  - text: |
      \(\frac{\pi}{3} - \frac{\sqrt{3}}{4}\)
  - text: |
      \(\frac{\pi}{12}\)
explanation: |
  The substitution \(t = \sin x\) gives \(\int_{\pi/6}^{\pi/2} \cos^{2} x\, dx = \frac{1}{2}\bigl[x + \frac{\sin 2x}{2}\bigr]_{\pi/6}^{\pi/2}\). That evaluates to \(\frac{\pi}{6} - \frac{\sqrt{3}}{8}\).
:::

::: exercise
id: l3-trig-integrals.g1
tier: basic
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^{1/2}\frac{dx}{\sqrt{1-x^2}}\).
solution: |
  The derivative of \(\arcsin x\) is \(\frac{1}{\sqrt{1-x^2}}\).

  \[
  \arcsin\frac{1}{2}-\arcsin 0=\frac{\pi}{6}.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(1/sqrt(1-x**2), (x, 0, Rational(1,2)))
      expected: "pi/6"
:::

::: section
title: Square roots of \(a^2 + x^2\) and \(x^2 - a^2\)
:::

::: formal-statement
kind: method
title: Square root of \(a^2 + x^2\)
source: { source: handout, section: "8.3", page: 173 }
text: |
  - If the integrand contains \(1 + x^2\), try \(x = \tan u\).
  - If it contains \(\sqrt{a^2 + x^2}\) with \(a > 0\), substitute \(x = a\tan u\).

  Then
  \[
  \begin{aligned}
  dx&=a\sec^2 u\, du,\\
  a^2 + x^2&=a^2\sec^2 u,
  \end{aligned}
  \]
  by \(\sec^2 u = 1 + \tan^2 u\).
:::

::: plain-explanation
text: |
  The substitution is the inverse of \(u = \arctan(x/a)\), so \(u\) lies in \(\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)\). On that interval \(\sec u \ge 0\), and \(\sqrt{a^2 + x^2} = a\sec u\). The square-root integral then needs
  \[
  \begin{aligned}
  \int \sec u\, du&=\ln|\sec u + \tan u| + C,\\
  \int \sec^3 u\, du\\
  &=\frac{\sec u\tan u}{2}\\
  &\quad+\frac{1}{2}\ln|\sec u + \tan u|\\
  &\quad + C.
  \end{aligned}
  \]
:::

::: worked-example
title: Square root of \(1 + x^2\)
problem: |
  Evaluate \(\int \sqrt{1 + x^2}\, dx\).
solution: |
  The radicand is \(1 + x^2\). Substitute \(x = \tan u\), so \(dx = \sec^2 u\, du\) and \(u = \arctan x\). Then \(\sqrt{1 + \tan^2 u} = \sqrt{\sec^2 u}\). Secant is non-negative on the range of \(\arctan\), so the square root equals \(\sec u\), and the integral is \(\int \sec^3 u\, du\).

  That antiderivative is \(\frac{\sec u\tan u}{2} + \frac{1}{2}\ln|\sec u + \tan u| + C\). Here \(\tan u = x\) and \(\sec u = \sqrt{1 + x^2}\), so
  \[
  \begin{aligned}
  \int \sqrt{1 + x^2}\, dx\\
  &=\frac{x\sqrt{1 + x^2}}{2}\\
  &\quad+\frac{1}{2}\ln\left|\sqrt{1 + x^2} + x\right|\\
  &\quad + C.
  \end{aligned}
  \]
:::

::: formal-statement
kind: method
title: Square root of \(x^2 - a^2\)
source: { source: handout, section: "8.3", page: 173 }
text: |
  - If the integrand contains \(x^2 - 1\), try \(x = \sec u\).
  - If it contains \(\sqrt{x^2 - a^2}\) with \(a > 0\), substitute \(x = a\sec u\).

  Then
  \[
  \begin{aligned}
  dx&=a\sec u\tan u\, du,\\
  x^2 - a^2&=a^2\tan^2 u,
  \end{aligned}
  \]
  by \(\tan^2 u = \sec^2 u - 1\).
:::

::: plain-explanation
text: |
  For \(x \ge a\), take \(u\) in \(\left[0, \frac{\pi}{2}\right)\). Tangent is non-negative there, so \(\sqrt{x^2 - a^2} = a\tan u\). The integral splits into a difference of \(\sec^3 u\) and \(\sec u\).
:::

::: worked-example
title: Square root of \(x^2 - 1\)
problem: |
  Evaluate \(\int \sqrt{x^2 - 1}\, dx\).
solution: |
  The radicand is \(x^2 - 1\). For \(x \ge 1\), substitute \(x = \sec u\) with \(u\) in \(\left[0, \frac{\pi}{2}\right)\). Then \(dx = \sec u\tan u\, du\) and \(\sqrt{\sec^2 u - 1} = \tan u\). The integral becomes
  \[
  \begin{aligned}
  &\int \sec u\tan^2 u\, du\\
  &=\int \sec u\,(\sec^2 u - 1)\, du\\
  &=\int (\sec^3 u - \sec u)\, du.
  \end{aligned}
  \]
  The two antiderivatives give
  \[
  \begin{aligned}
  &\frac{\sec u\tan u}{2} + \frac{1}{2}\ln|\sec u + \tan u|\\
  &\quad-\ln|\sec u + \tan u| + C\\
  &=\frac{\sec u\tan u}{2} - \frac{1}{2}\ln|\sec u + \tan u| + C.
  \end{aligned}
  \]
  Here \(\sec u = x\) and \(\tan u = \sqrt{x^2 - 1}\), so
  \[
  \begin{aligned}
  \int \sqrt{x^2 - 1}\, dx\\
  &=\frac{x\sqrt{x^2 - 1}}{2}\\
  &\quad-\frac{1}{2}\ln\left|x + \sqrt{x^2 - 1}\right|\\
  &\quad + C.
  \end{aligned}
  \]
:::

::: key-points
text: |
  - For \(\sqrt{a^2 + x^2}\) with \(a > 0\), substitute \(x = a\tan u\), so \(dx = a\sec^2 u\, du\) and \(a^2 + x^2 = a^2\sec^2 u\). For \(1 + x^2\), try \(x = \tan u\).
  - For \(\sqrt{x^2 - a^2}\) with \(a > 0\), substitute \(x = a\sec u\), so \(dx = a\sec u\tan u\, du\) and \(x^2 - a^2 = a^2\tan^2 u\). For \(x \ge a\), take \(u\) in \(\left[0, \frac{\pi}{2}\right)\), where \(\sqrt{x^2 - a^2} = a\tan u\).
  - These integrals need \(\int \sec u\, du = \ln|\sec u + \tan u| + C\) and \(\int \sec^3 u\, du = \frac{\sec u\tan u}{2} + \frac{1}{2}\ln|\sec u + \tan u| + C\).
:::

::: going-deeper
title: Signs under the square roots
text: |
  - The substitution \(x = \sin u\) is read as \(u = \arcsin x\). That forces \(-\frac{\pi}{2} \le u \le \frac{\pi}{2}\), where \(\cos u \ge 0\). Hence \(\sqrt{\cos^2 u} = \cos u\), and \(\sqrt{1 - x^2}\) contributes a factor \(\cos u\) with the differential.
  - The substitution \(x = \tan u\) is read as \(u = \arctan x\). That forces \(-\frac{\pi}{2} < u < \frac{\pi}{2}\), where \(\cos u > 0\) and \(\sec u > 0\). Hence \(\sqrt{\sec^2 u} = \sec u\).
  - For \(x = \sec u\) and \(x \ge 1\), take \(u\) in \(\left[0, \frac{\pi}{2}\right)\). Tangent is non-negative on that interval, so \(\sqrt{\tan^2 u} = \tan u\).
:::

::: going-deeper
title: Secant and secant cubed
text: |
  To integrate \(\sec u\), multiply and divide by \(\sec u + \tan u\):
  \[
  \int \sec u\, du = \int \frac{\sec^2 u + \sec u\tan u}{\sec u + \tan u}\, du.
  \]
  The numerator is the derivative of the denominator. Set \(w = \sec u + \tan u\). The integral is \(\ln|w| + C\), that is
  \[
  \int \sec u\, du = \ln|\sec u + \tan u| + C.
  \]

  ### Secant cubed

  Split the cube as
  \[
  \begin{aligned}
  \sec^3 u&=\frac{\sec^3 u}{2} + \frac{(\tan^2 u + 1)\sec u}{2}\\
  &=\frac{\sec^3 u + \sec u\tan^2 u}{2} + \frac{\sec u}{2}.
  \end{aligned}
  \]
  The derivative of \(\sec u\tan u\) is \(\sec u\tan^2 u + \sec^3 u\), so
  \[
  \begin{aligned}
  &\int (\sec^3 u + \sec u\tan^2 u)\, du\\
  &=\sec u\tan u.
  \end{aligned}
  \]
  Combining the two pieces gives
  \[
  \begin{aligned}
  \int \sec^3 u\, du\\
  &=\frac{\sec u\tan u}{2}\\
  &\quad+\frac{1}{2}\ln|\sec u + \tan u|\\
  &\quad + C.
  \end{aligned}
  \]
:::

::: exercise
id: l3-trig-integrals.g3
tier: basic
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^3\frac{dx}{9+x^2}\).
solution: |
  An antiderivative is \(\frac{1}{3}\arctan\frac{x}{3}\).

  \[
  \left[\frac{1}{3}\arctan\frac{x}{3}\right]_0^3=\frac{1}{3}\cdot\frac{\pi}{4}=\frac{\pi}{12}.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(1/(9+x**2), (x, 0, 3))
      expected: "pi/12"
:::

::: sheet-item
id: l3-trig-integrals.sheet-half-angles
category: formula
text: |
  \[
  \begin{aligned}
  \sin^2 x&=\frac{1 - \cos 2x}{2},\\
  \cos^2 x&=\frac{1 + \cos 2x}{2}.
  \end{aligned}
  \]
:::

::: sheet-item
id: l3-trig-integrals.sheet-three-subs
category: formula
text: |
  For \(a > 0\):

  - \(\sqrt{a^2 - x^2}\) uses \(x = a\sin u\).
  - \(\sqrt{a^2 + x^2}\) uses \(x = a\tan u\).
  - \(\sqrt{x^2 - a^2}\) uses \(x = a\sec u\).
:::

::: sheet-item
id: l3-trig-integrals.sheet-odd-power
category: recognition
text: |
  An odd power of \(\sin x\) uses \(u = \cos x\). An odd power of \(\cos x\) uses \(u = \sin x\).
:::

::: sheet-item
id: l3-trig-integrals.sheet-arcsin-trap
category: trap
text: |
  \(\int \frac{dx}{\sqrt{1 + x^2}} = \ln\left|x + \sqrt{1 + x^2}\right| + C\). The derivative of \(\arcsin x\) at \(x = \frac{1}{2}\) equals \(\frac{2}{\sqrt{3}}\), and \(\frac{1}{\sqrt{1 + (1/2)^2}}\) equals \(\frac{2}{\sqrt{5}}\).
:::

::: exercise
id: l3-trig-integrals.e2
tier: basic
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^{\pi/2}\cos^2 x\,dx\).
solution: |
  Use \(\cos^2 x=\frac{1+\cos 2x}{2}\).

  \[
  \left[\frac{x}{2}+\frac{\sin 2x}{4}\right]_0^{\pi/2}=\frac{\pi}{4}.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(cos(x)**2, (x, 0, pi/2))
      expected: "pi/4"
:::

::: exercise
id: l3-trig-integrals.e3
tier: standard
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^{\pi/2}\sin^3 x\,dx\).
solution: |
  The power of sine is odd. Write \(\sin^3 x=\sin x(1-\cos^2 x)\) and substitute \(u=\cos x\).

  Then \(du=-\sin x\,dx\). The limits change from \(x=0\) to \(x=\pi/2\) into \(u=1\) to \(u=0\).

  \[
  \begin{aligned}
  &\int_1^0 -(1-u^2)\,du\\
  &=\int_0^1(1-u^2)\,du\\
  &=\left[u-\frac{u^3}{3}\right]_0^1\\
  &=\frac{2}{3}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Write \(\sin^3 x=\sin x(1-\cos^2 x)\).
  - Substitute \(u=\cos x\), with limits from \(1\) to \(0\).
  - Evaluate \(\int_0^1(1-u^2)\,du\).
verification:
  checks:
    - expr: integrate(sin(x)**3, (x, 0, pi/2))
      expected: "2/3"
:::

::: exercise
id: l3-trig-integrals.e4
tier: basic
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^{\pi/2}\sin x\cos x\,dx\).
solution: |
  The integrand is \(u\) times the derivative of \(u\), for \(u=\sin x\).

  \[
  \left[\frac{1}{2}\sin^2 x\right]_0^{\pi/2}=\frac{1}{2}.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(sin(x)*cos(x), (x, 0, pi/2))
      expected: "1/2"
:::

::: exercise
id: l3-trig-integrals.e5
tier: standard
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^{\pi/4}\tan^2 x\,dx\).
solution: |
  Use \(\tan^2 x=\frac{1}{\cos^2 x}-1\).

  \[
  \left[\tan x-x\right]_0^{\pi/4}=1-\frac{\pi}{4}.
  \]
provenance: written-for-site
steps:
  - Write \(\tan^2 x=\frac{1}{\cos^2 x}-1\).
  - An antiderivative is \(\tan x-x\).
  - Evaluate from \(0\) to \(\frac{\pi}{4}\).
verification:
  checks:
    - expr: integrate(tan(x)**2, (x, 0, pi/4))
      expected: "1 - pi/4"
:::

::: exercise
id: l3-trig-integrals.e6
tier: standard
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^{\pi}\sin(2x)\cos x\,dx\).
solution: |
  Use \(\sin 2x=2\sin x\cos x\). The integrand is \(2\sin x\cos^2 x\).

  \[
  \begin{aligned}
  &\int_0^{\pi}2\sin x\cos^2 x\,dx\\
  &=\left[-\frac{2}{3}\cos^3 x\right]_0^{\pi}\\
  &=\frac{2}{3}-\left(-\frac{2}{3}\right)\\
  &=\frac{4}{3}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Replace \(\sin 2x\) by \(2\sin x\cos x\).
  - An antiderivative is \(-\frac{2}{3}\cos^3 x\).
  - Evaluate from \(0\) to \(\pi\).
verification:
  checks:
    - expr: integrate(sin(2*x)*cos(x), (x, 0, pi))
      expected: "4/3"
:::

::: exercise
id: l3-trig-integrals.e7
tier: exam
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^{\pi/2}\sin^2 x\cos^2 x\,dx\).
solution: |
  Write \(\sin x\cos x=\frac{1}{2}\sin 2x\), then linearise \(\sin^2 2x\).

  \[
  \sin^2 x\cos^2 x=\frac{1}{4}\sin^2 2x=\frac{1-\cos 4x}{8}.
  \]

  \[
  \begin{aligned}
  &\int_0^{\pi/2}\frac{1-\cos 4x}{8}\,dx\\
  &=\frac{1}{8}\left[x-\frac{\sin 4x}{4}\right]_0^{\pi/2}\\
  &=\frac{\pi}{16}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Write the integrand as \(\frac{1}{4}\sin^2 2x\).
  - Linearise \(\sin^2 2x\).
  - Evaluate \(\int_0^{\pi/2}\frac{1-\cos 4x}{8}\,dx\).
verification:
  checks:
    - expr: integrate(sin(x)**2*cos(x)**2, (x, 0, pi/2))
      expected: "pi/16"
:::

::: exercise
id: l3-trig-integrals.e8
tier: standard
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^{\pi}\cos^3 x\,dx\).
solution: |
  Write \(\cos^3 x=\cos x(1-\sin^2 x)\). An antiderivative is \(\sin x-\frac{\sin^3 x}{3}\).

  \[
  \left[\sin x-\frac{\sin^3 x}{3}\right]_0^{\pi}=0.
  \]

  The antiderivative equals \(0\) at both endpoints. A single substitution \(u=\sin x\) from \(0\) to \(0\) misses the sign change of \(\cos x\) on \(\left[\frac{\pi}{2},\pi\right]\).

  Replacing \(x\) by \(\pi-x\) sends \(\cos^3 x\) to \(-\cos^3 x\). The integrals on \(\left[0,\frac{\pi}{2}\right]\) and \(\left[\frac{\pi}{2},\pi\right]\) cancel.
provenance: written-for-site
steps:
  - Write \(\cos^3 x=\cos x(1-\sin^2 x)\).
  - An antiderivative is \(\sin x-\frac{\sin^3 x}{3}\).
  - Both endpoints give \(0\).
verification:
  checks:
    - expr: integrate(cos(x)**3, (x, 0, pi))
      expected: "0"
:::

::: exercise
id: l3-trig-integrals.s18-3
tier: standard
topics: [trigonometric-integrals]
number: "Integral bank, Ex. 18.3"
statement: |
  Compute \(\int_{-1}^1\sqrt{1-t^2}\,dt\) by the substitution \(t=\sin\theta\).
solution: |
  Substitute \(t=\sin\theta\). This is a bijection from \(\left[-\frac{\pi}{2},\frac{\pi}{2}\right]\) to \([-1,1]\), and \(dt=\cos\theta\,d\theta\).

  On that interval, \(\sqrt{1-\sin^2\theta}=|\cos\theta|=\cos\theta\).

  \[
  \begin{aligned}
  &\int_{-\pi/2}^{\pi/2}\cos^2\theta\,d\theta\\
  &=\int_{-\pi/2}^{\pi/2}\frac{1+\cos 2\theta}{2}\,d\theta\\
  &=\left[\frac{\theta}{2}+\frac{\sin 2\theta}{4}\right]_{-\pi/2}^{\pi/2}\\
  &=\frac{\pi}{2}.
  \end{aligned}
  \]

  The integrand is the upper semicircle of radius \(1\). The integral is the area of a half disc, which is \(\frac{\pi}{2}\).
provenance: written-for-site
steps:
  - Substitute \(t=\sin\theta\) on \(\left[-\frac{\pi}{2},\frac{\pi}{2}\right]\).
  - Replace the integrand by \(\cos^2\theta\).
  - Linearise and evaluate.
verification:
  checks:
    - expr: integrate(sqrt(1-t**2), (t, -1, 1))
      expected: "pi/2"
:::

::: exercise
id: l3-trig-integrals.g2
tier: standard
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^2\sqrt{4-x^2}\,dx\).
solution: |
  Substitute \(x=2\sin\theta\), with \(\theta\) running from \(0\) to \(\frac{\pi}{2}\). Then \(dx=2\cos\theta\,d\theta\) and \(\sqrt{4-x^2}=2\cos\theta\).

  \[
  \begin{aligned}
  &\int_0^{\pi/2}4\cos^2\theta\,d\theta\\
  &=2\int_0^{\pi/2}(1+\cos 2\theta)\,d\theta\\
  &=2\left[\theta+\frac{\sin 2\theta}{2}\right]_0^{\pi/2}\\
  &=\pi.
  \end{aligned}
  \]

  The graph is a quarter circle of radius \(2\). The integral is the area of a quarter disc, \(\frac{1}{4}\pi\cdot 4=\pi\).
provenance: written-for-site
steps:
  - Substitute \(x=2\sin\theta\) on \(\left[0,\frac{\pi}{2}\right]\).
  - The integral becomes \(4\int_0^{\pi/2}\cos^2\theta\,d\theta\).
  - Linearise and evaluate.
verification:
  checks:
    - expr: integrate(sqrt(4-x**2), (x, 0, 2))
      expected: "pi"
:::

::: exercise
id: l3-trig-integrals.g4
tier: standard
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^1\frac{dx}{\sqrt{4-x^2}}\).
solution: |
  Factor \(\sqrt{4-x^2}=2\sqrt{1-(x/2)^2}\). An antiderivative is \(\arcsin\frac{x}{2}\).

  \[
  \left[\arcsin\frac{x}{2}\right]_0^1=\arcsin\frac{1}{2}=\frac{\pi}{6}.
  \]
provenance: written-for-site
steps:
  - Factor \(\sqrt{4-x^2}=2\sqrt{1-(x/2)^2}\).
  - An antiderivative is \(\arcsin\frac{x}{2}\).
  - Evaluate from \(0\) to \(1\).
verification:
  checks:
    - expr: integrate(1/sqrt(4-x**2), (x, 0, 1))
      expected: "pi/6"
:::

::: exercise
id: l3-trig-integrals.g5
tier: exam
topics: [trigonometric-integrals, improper-integrals]
statement: |
  Compute \(\int_0^1\frac{x^2}{\sqrt{1-x^2}}\,dx\).
solution: |
  The integral is improper at \(x=1\). Near that endpoint the integrand is bounded by a multiple of \((1-x)^{-1/2}\), so the integral converges.

  Substitute \(x=\sin\theta\), with \(\theta\) running from \(0\) to \(\frac{\pi}{2}\). Then \(dx=\cos\theta\,d\theta\) and \(\sqrt{1-x^2}=\cos\theta\) on \(\left[0,\frac{\pi}{2}\right)\). The factors \(\cos\theta\) cancel on that interval, and \(\sin^2\theta\) is continuous on the closed interval.

  \[
  \begin{aligned}
  &\int_0^{\pi/2}\sin^2\theta\,d\theta\\
  &=\int_0^{\pi/2}\frac{1-\cos 2\theta}{2}\,d\theta\\
  &=\left[\frac{\theta}{2}-\frac{\sin 2\theta}{4}\right]_0^{\pi/2}\\
  &=\frac{\pi}{4}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Record that the integral is improper at \(x=1\) and converges.
  - Substitute \(x=\sin\theta\).
  - The integral becomes \(\int_0^{\pi/2}\sin^2\theta\,d\theta\).
  - Linearise and evaluate.
verification:
  checks:
    - expr: integrate(x**2/sqrt(1-x**2), (x, 0, 1))
      expected: "pi/4"
:::

::: exercise
id: l3-trig-integrals.g6
tier: exam
topics: [trigonometric-integrals]
statement: |
  Compute \(\int_0^1\frac{dx}{(1+x^2)^2}\).
solution: |
  Substitute \(x=\tan\theta\), with \(\theta\) running from \(0\) to \(\frac{\pi}{4}\). Then \(dx=(1+\tan^2\theta)\,d\theta\), and the integrand becomes \(\frac{1}{1+\tan^2\theta}=\cos^2\theta\).

  \[
  \begin{aligned}
  &\int_0^{\pi/4}\cos^2\theta\,d\theta\\
  &=\int_0^{\pi/4}\frac{1+\cos 2\theta}{2}\,d\theta\\
  &=\left[\frac{\theta}{2}+\frac{\sin 2\theta}{4}\right]_0^{\pi/4}\\
  &=\frac{\pi}{8}+\frac{1}{4}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Substitute \(x=\tan\theta\) on \(\left[0,\frac{\pi}{4}\right]\).
  - The integrand becomes \(\cos^2\theta\).
  - Linearise and evaluate.
verification:
  checks:
    - expr: integrate(1/(1+x**2)**2, (x, 0, 1))
      expected: "pi/8 + 1/4"
:::

::: exercise
id: l3-trig-integrals.midterm-2022-ex1v
statement: |
  Let \(f(x)=\sqrt{1-x^2}\). Compute \(\int_{-1}^{1} f(x)\,dx\) using substitution with a trigonometric function.
tier: exam
topics:
  - trig-integrals
  - substitution
pastExam:
  year: 2022
  paper: Midterm
  question: 1v
  points: 1
solution: |
  Put \(x=\sin t\), so \(dx=\cos t\,dt\). As \(x\) runs from \(-1\) to \(1\), the value of \(t\) runs from \(-\pi/2\) to \(\pi/2\). On that interval \(\sqrt{1-\sin^2 t}=\cos t\), and the integral becomes
  \[
  \begin{aligned}
  &\int_{-\pi/2}^{\pi/2}\cos^2 t\,dt\\
  &=\int_{-\pi/2}^{\pi/2}\frac{1+\cos 2t}{2}\,dt\\
  &=\frac12\Bigl[t+\frac12\sin 2t\Bigr]_{-\pi/2}^{\pi/2}\\
  &=\frac{\pi}{2}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Substitution \(x=\sin t\).
  - Evaluation of \(\int\cos^2 t\,dt\) on \([-\pi/2,\pi/2]\).
verification:
  checks:
    - expr: integrate(sqrt(1-x**2), (x, -1, 1))
      expected: pi/2
    - expr: integrate(cos(t)**2, (t, -pi/2, pi/2))
      expected: pi/2
:::

::: exercise
id: l3-trig-integrals.midterm-2025-ex5.1
number: "5.1"
statement: |
  Compute \(\displaystyle\int_{1/2}^{1}\sqrt{1-t^2}\,dt\).
tier: exam
solution: |
  Put \(t=\sin\theta\), so \(dt=\cos\theta\,d\theta\). The limits \(t=1/2\) and \(t=1\) become \(\theta=\pi/6\) and \(\theta=\pi/2\). Then \(\sqrt{1-t^2}=\cos\theta\) on this interval, and
  \[
  \begin{aligned}
  &\int_{\pi/6}^{\pi/2}\cos^2\theta\,d\theta\\
  &=\int_{\pi/6}^{\pi/2}\frac{1+\cos 2\theta}{2}\,d\theta\\
  &=\frac12\left[\theta+\frac{\sin 2\theta}{2}\right]_{\pi/6}^{\pi/2}\\
  &=\frac{\pi}{6}-\frac{\sqrt{3}}{8}.
  \end{aligned}
  \]
provenance: official-key
steps:
  - The substitution \(t=\sin\theta\).
  - The value \(\pi/6-\sqrt{3}/8\).
verification:
  checks:
    - expr: integrate(sqrt(1 - t**2), (t, Rational(1, 2), 1))
      expected: pi/6 - sqrt(3)/8
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "5.1"
  points: 1
:::

::: exercise
id: l3-trig-integrals.midterm-predicted-a-ex5.2
number: "5.2"
statement: |
  Compute \(\displaystyle\int_0^{\pi/2} \sin^2 x\, dx\).
tier: exam
topics:
  - trig-integrals
solution: |
  Use \(\sin^2 x = \dfrac{1 - \cos 2x}{2}\). Then
  \[
  \begin{aligned}
  &\int_0^{\pi/2} \sin^2 x\, dx\\
  &=\frac12 \Bigl[x - \frac{\sin 2x}{2}\Bigr]_0^{\pi/2}\\
  &=\frac12 \cdot \frac{\pi}{2}\\
  &=\frac{\pi}{4}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Apply the double-angle identity.
  - Evaluate to \pi/4.
verification:
  checks:
    - expr: integrate(sin(x)**2, (x, 0, pi/2))
      expected: pi/4
:::

::: exercise
id: l3-trig-integrals.midterm-predicted-b-ex4.6
number: "4.6"
statement: |
  Compute \(\displaystyle\int_0^{1/2} \frac{dx}{\sqrt{1 - x^2}}\).
tier: exam
topics:
  - trig-integrals
solution: |
  An antiderivative is \(\arcsin x\). Then \(\arcsin\frac12 - \arcsin 0 = \dfrac{\pi}{6}\).
provenance: written-for-site
steps:
  - Recognize arcsin and evaluate to \pi/6.
verification:
  checks:
    - expr: integrate(1/sqrt(1 - x**2), (x, 0, Rational(1, 2)))
      expected: pi/6
:::

::: exercise
id: l3-trig-integrals.8.2.1
number: "8.2.1"
tier: basic
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sin^2 x\, dx\).
solution: |
  The half-angle identity is \(\sin^2 x = \frac{1 - \cos 2x}{2}\). Integrating term by term gives
  \[
  \int \sin^2 x\, dx = \frac{x}{2} - \frac{\sin 2x}{4} + C.
  \]
provenance: handout-answer
verification:
  checks:
    - expr: diff(x/2 - sin(2*x)/4, x)
      expected: sin(x)**2
:::

::: exercise
id: l3-trig-integrals.8.2.2
number: "8.2.2"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sin^3 x\, dx\).
solution: |
  The power of sine is odd. Write \(\sin^3 x = \sin x\,(1 - \cos^2 x)\). The substitution \(u = \cos x\) has \(du = -\sin x\, dx\), so the integral is
  \[
  \int -(1 - u^2)\, du = -u + \frac{u^3}{3} + C.
  \]
  Restoring \(u = \cos x\) gives \(-\cos x + \frac{\cos^3 x}{3} + C\).
provenance: handout-answer
steps:
  - Write \(\sin^3 x = \sin x\,(1 - \cos^2 x)\).
  - Substitute \(u = \cos x\).
  - The antiderivative is \(-\cos x + \frac{\cos^3 x}{3} + C\).
verification:
  checks:
    - expr: diff(-cos(x) + cos(x)**3/3, x)
      expected: sin(x)**3
:::

::: exercise
id: l3-trig-integrals.8.2.3
number: "8.2.3"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sin^4 x\, dx\).
solution: |
  The power is even. Write \(\sin^4 x = \left(\frac{1 - \cos 2x}{2}\right)^2 = \frac{1 - 2\cos 2x + \cos^2 2x}{4}\). Replace the remaining square by \(\cos^2 2x = \frac{1 + \cos 4x}{2}\):
  \[
  \begin{aligned}
  \sin^4 x&=\frac{1}{4} - \frac{1}{2}\cos 2x + \frac{1 + \cos 4x}{8}\\
  &=\frac{3}{8} - \frac{1}{2}\cos 2x + \frac{1}{8}\cos 4x.
  \end{aligned}
  \]
  Integrating term by term gives
  \[
  \begin{aligned}
  \int \sin^4 x\, dx&=\frac{3x}{8} - \frac{\sin 2x}{4}\\
  &\quad+\frac{\sin 4x}{32}\\
  &\quad + C.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Apply the half-angle identity to \(\sin^2 x\).
  - Reduce \(\cos^2 2x\) by a second half-angle identity.
  - The antiderivative is \(\frac{3x}{8} - \frac{\sin 2x}{4} + \frac{\sin 4x}{32} + C\).
verification:
  checks:
    - expr: diff(3*x/8 - sin(2*x)/4 + sin(4*x)/32, x)
      expected: sin(x)**4
:::

::: exercise
id: l3-trig-integrals.8.2.4
number: "8.2.4"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \cos^2 x\sin^3 x\, dx\).
solution: |
  The power of sine is odd. Write \(\sin^3 x = \sin x\,(1 - \cos^2 x)\), so the integrand is \(\cos^2 x\,(1 - \cos^2 x)\sin x\). The substitution \(u = \cos x\) has \(du = -\sin x\, dx\), and the integral becomes
  \[
  \int -u^2(1 - u^2)\, du = -\frac{u^3}{3} + \frac{u^5}{5} + C.
  \]
  Restoring \(u = \cos x\) gives \(\frac{\cos^5 x}{5} - \frac{\cos^3 x}{3} + C\).
provenance: handout-answer
steps:
  - Peel off one factor of \(\sin x\).
  - Substitute \(u = \cos x\).
  - The antiderivative is \(\frac{\cos^5 x}{5} - \frac{\cos^3 x}{3} + C\).
verification:
  checks:
    - expr: diff(cos(x)**5/5 - cos(x)**3/3, x)
      expected: cos(x)**2*sin(x)**3
:::

::: exercise
id: l3-trig-integrals.8.2.5
number: "8.2.5"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \cos^3 x\, dx\).
solution: |
  The power of cosine is odd. Write \(\cos^3 x = \cos x\,(1 - \sin^2 x)\). The substitution \(u = \sin x\) has \(du = \cos x\, dx\), so the integral is
  \[
  \int (1 - u^2)\, du = u - \frac{u^3}{3} + C.
  \]
  Restoring \(u = \sin x\) gives \(\sin x - \frac{\sin^3 x}{3} + C\).
provenance: handout-answer
steps:
  - Write \(\cos^3 x = \cos x\,(1 - \sin^2 x)\).
  - Substitute \(u = \sin x\).
  - The antiderivative is \(\sin x - \frac{\sin^3 x}{3} + C\).
verification:
  checks:
    - expr: diff(sin(x) - sin(x)**3/3, x)
      expected: cos(x)**3
:::

::: exercise
id: l3-trig-integrals.8.2.6
number: "8.2.6"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sin^2 x\cos^2 x\, dx\).
solution: |
  Both powers are even. The product of the half-angle identities is
  \[
  \begin{aligned}
  \sin^2 x\cos^2 x&=\frac{1 - \cos 2x}{2}\cdot\frac{1 + \cos 2x}{2}\\
  &=\frac{1 - \cos^2 2x}{4}\\
  &=\frac{\sin^2 2x}{4}.
  \end{aligned}
  \]
  Then \(\sin^2 2x = \frac{1 - \cos 4x}{2}\), so the integrand equals \(\frac{1 - \cos 4x}{8}\). Integrating gives
  \[
  \int \sin^2 x\cos^2 x\, dx = \frac{x}{8} - \frac{\sin 4x}{32} + C.
  \]
provenance: handout-answer
steps:
  - Apply both half-angle identities.
  - Linearise \(\sin^2 2x\).
  - The antiderivative is \(\frac{x}{8} - \frac{\sin 4x}{32} + C\).
verification:
  checks:
    - expr: diff(x/8 - sin(4*x)/32, x)
      expected: sin(x)**2*cos(x)**2
:::

::: exercise
id: l3-trig-integrals.8.2.7
number: "8.2.7"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \cos^3 x\sin^2 x\, dx\).
solution: |
  The power of cosine is odd. Write \(\cos^3 x = \cos x\,(1 - \sin^2 x)\), so the integrand is \(\sin^2 x\,(1 - \sin^2 x)\cos x\). The substitution \(u = \sin x\) has \(du = \cos x\, dx\), and the integral is
  \[
  \int u^2(1 - u^2)\, du = \frac{u^3}{3} - \frac{u^5}{5} + C.
  \]
  Restoring \(u = \sin x\) gives \(\frac{\sin^3 x}{3} - \frac{\sin^5 x}{5} + C\).
provenance: handout-answer
steps:
  - Peel off one factor of \(\cos x\).
  - Substitute \(u = \sin x\).
  - The antiderivative is \(\frac{\sin^3 x}{3} - \frac{\sin^5 x}{5} + C\).
verification:
  checks:
    - expr: diff(sin(x)**3/3 - sin(x)**5/5, x)
      expected: cos(x)**3*sin(x)**2
:::

::: exercise
id: l3-trig-integrals.8.2.9
number: "8.2.9"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sec^2 x\csc^2 x\, dx\).
solution: |
  The derivative of \(\tan x - \cot x\) is \(\sec^2 x + \csc^2 x\). That sum equals the integrand, because
  \[
  \begin{aligned}
  \sec^2 x + \csc^2 x&=\frac{\sin^2 x + \cos^2 x}{\sin^2 x\cos^2 x}\\
  &=\frac{1}{\sin^2 x\cos^2 x}\\
  &=\sec^2 x\csc^2 x.
  \end{aligned}
  \]
  An antiderivative is \(\tan x - \cot x + C\).
provenance: handout-answer
steps:
  - Differentiate \(\tan x - \cot x\).
  - Check that \(\sec^2 x + \csc^2 x = \sec^2 x\csc^2 x\).
  - The antiderivative is \(\tan x - \cot x + C\).
verification:
  checks:
    - expr: simplify((diff(tan(x) - cot(x), x) - sec(x)**2*csc(x)**2).rewrite(sin))
      expected: "0"
:::

::: exercise
id: l3-trig-integrals.8.2.10
number: "8.2.10"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \tan^3 x\sec x\, dx\).
solution: |
  Write \(\tan^3 x\sec x = (\sec^2 x - 1)\sec x\tan x\). The substitution \(u = \sec x\) has \(du = \sec x\tan x\, dx\), so the integral is
  \[
  \int (u^2 - 1)\, du = \frac{u^3}{3} - u + C.
  \]
  Restoring \(u = \sec x\) gives \(\frac{\sec^3 x}{3} - \sec x + C\).
provenance: handout-answer
steps:
  - Write \(\tan^2 x = \sec^2 x - 1\).
  - Substitute \(u = \sec x\).
  - The antiderivative is \(\frac{\sec^3 x}{3} - \sec x + C\).
verification:
  checks:
    - expr: diff(sec(x)**3/3 - sec(x), x)
      expected: tan(x)**3*sec(x)
:::

::: exercise
id: l3-trig-integrals.8.3.1
number: "8.3.1"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \csc x\, dx\).
solution: |
  Multiply and divide by \(\csc x + \cot x\):
  \[
  \int \csc x\, dx = \int \frac{\csc^2 x + \csc x\cot x}{\csc x + \cot x}\, dx.
  \]
  The numerator is the opposite of the derivative of the denominator. Set \(w = \csc x + \cot x\). The integral is \(-\ln|w| + C\), that is \(-\ln|\csc x + \cot x| + C\).
provenance: handout-answer
steps:
  - Multiply and divide by \(\csc x + \cot x\).
  - The numerator matches the derivative of the denominator, up to a sign.
  - The antiderivative is \(-\ln|\csc x + \cot x| + C\).
verification:
  checks:
    - expr: simplify(diff(-log(csc(x) + cot(x)), x).rewrite(sin))
      expected: csc(x)
:::

::: exercise
id: l3-trig-integrals.8.3.2
number: "8.3.2"
tier: exam
topics: [trigonometric-integrals]
statement: |
  Find \(\int \csc^3 x\, dx\).
solution: |
  Split the cube by the identity \(\csc^2 x = 1 + \cot^2 x\):
  \[
  \csc^3 x = \frac{\csc^3 x + \csc x\cot^2 x}{2} + \frac{\csc x}{2}.
  \]
  The derivative of \(\csc x\cot x\) is \(-\csc x\cot^2 x - \csc^3 x\), so
  \[
  \begin{aligned}
  &\int (\csc^3 x + \csc x\cot^2 x)\, dx\\
  &=-\csc x\cot x.
  \end{aligned}
  \]
  The remaining piece is \(\frac{1}{2}\int \csc x\, dx = -\frac{1}{2}\ln|\csc x + \cot x|\). Adding these gives
  \[
  \begin{aligned}
  \int \csc^3 x\, dx\\
  &=-\frac{\csc x\cot x}{2}\\
  &\quad-\frac{1}{2}\ln|\csc x + \cot x|\\
  &\quad + C.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Split \(\csc^3 x\) into a derivative term and a multiple of \(\csc x\).
  - Integrate \(\csc x\).
  - The antiderivative is \(-\frac{\csc x\cot x}{2} - \frac{1}{2}\ln|\csc x + \cot x| + C\).
verification:
  checks:
    - expr: simplify(diff(-csc(x)*cot(x)/2 - log(csc(x) + cot(x))/2, x).rewrite(sin))
      expected: csc(x)**3
:::

::: exercise
id: l3-trig-integrals.8.3.3
number: "8.3.3"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sqrt{x^2 - 1}\, dx\).
solution: |
  For \(x \ge 1\), substitute \(x = \sec u\) with \(u\) in \(\left[0, \frac{\pi}{2}\right)\). Then \(dx = \sec u\tan u\, du\) and \(\sqrt{x^2 - 1} = \tan u\). The integral becomes \(\int (\sec^3 u - \sec u)\, du\).

  Using the antiderivatives of \(\sec^3 u\) and \(\sec u\),
  \[
  \frac{\sec u\tan u}{2} - \frac{1}{2}\ln|\sec u + \tan u| + C.
  \]
  Restoring \(\sec u = x\) and \(\tan u = \sqrt{x^2 - 1}\) gives
  \[
  \frac{x\sqrt{x^2 - 1}}{2} - \frac{1}{2}\ln\left|x + \sqrt{x^2 - 1}\right| + C.
  \]
provenance: handout-answer
steps:
  - Substitute \(x = \sec u\).
  - Split the integral into \(\sec^3 u - \sec u\).
  - The antiderivative is \(\frac{x\sqrt{x^2 - 1}}{2} - \frac{1}{2}\ln\left|x + \sqrt{x^2 - 1}\right| + C\).
verification:
  checks:
    - expr: diff(x*sqrt(x**2 - 1)/2 - log(x + sqrt(x**2 - 1))/2, x)
      expected: sqrt(x**2 - 1)
:::

::: exercise
id: l3-trig-integrals.8.3.4
number: "8.3.4"
tier: exam
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sqrt{9 + 4x^2}\, dx\).
solution: |
  Set \(w = 2x\), so \(dx = \frac{1}{2}\, dw\) and the integral is \(\frac{1}{2}\int \sqrt{9 + w^2}\, dw\). Substitute \(w = 3\tan u\). Then \(dw = 3\sec^2 u\, du\) and \(\sqrt{9 + w^2} = 3\sec u\), and the integral in \(w\) is
  \[
  \begin{aligned}
  \int 9\sec^3 u\, du\\
  &=\frac{9}{2}\sec u\tan u\\
  &\quad+\frac{9}{2}\ln|\sec u + \tan u|\\
  &\quad + C.
  \end{aligned}
  \]
  The product \(\sec u\tan u\) equals \(\frac{w\sqrt{9 + w^2}}{9}\), so \(\frac{9}{2}\sec u\tan u = \frac{w\sqrt{9 + w^2}}{2}\). Also \(\sec u + \tan u = \frac{w + \sqrt{9 + w^2}}{3}\), and the constant \(-\frac{9}{2}\ln 3\) is absorbed into \(C\). Therefore
  \[
  \begin{aligned}
  \int \sqrt{9 + w^2}\, dw\\
  &=\frac{w\sqrt{9 + w^2}}{2}\\
  &\quad+\frac{9}{2}\ln\left|w + \sqrt{9 + w^2}\right|\\
  &\quad + C.
  \end{aligned}
  \]
  The factor \(\frac{1}{2}\) and \(w = 2x\) give
  \[
  \begin{aligned}
  \int \sqrt{9 + 4x^2}\, dx\\
  &=\frac{x\sqrt{9 + 4x^2}}{2}\\
  &\quad+\frac{9}{4}\ln\left|2x + \sqrt{9 + 4x^2}\right|\\
  &\quad + C.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Set \(w = 2x\).
  - Substitute \(w = 3\tan u\).
  - The antiderivative is \(\frac{x\sqrt{9 + 4x^2}}{2} + \frac{9}{4}\ln\left|2x + \sqrt{9 + 4x^2}\right| + C\).
verification:
  checks:
    - expr: diff(x*sqrt(9 + 4*x**2)/2 + Rational(9, 4)*log(2*x + sqrt(9 + 4*x**2)), x)
      expected: sqrt(9 + 4*x**2)
:::

::: exercise
id: l3-trig-integrals.8.3.5
number: "8.3.5"
tier: basic
topics: [trigonometric-integrals]
statement: |
  Find \(\int x\sqrt{1 - x^2}\, dx\).
solution: |
  Set \(u = 1 - x^2\), so \(du = -2x\, dx\). The integral is
  \[
  \begin{aligned}
  -\frac{1}{2}\int \sqrt{u}\, du&=-\frac{1}{3}u^{3/2} + C\\
  &=-\frac{(1 - x^2)^{3/2}}{3} + C.
  \end{aligned}
  \]
provenance: handout-answer
verification:
  checks:
    - expr: diff(-(1 - x**2)**(Rational(3, 2))/3, x)
      expected: x*sqrt(1 - x**2)
:::

::: exercise
id: l3-trig-integrals.8.3.6
number: "8.3.6"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int x^2\sqrt{1 - x^2}\, dx\).
solution: |
  Substitute \(x = \sin u\), so \(dx = \cos u\, du\) and \(\sqrt{1 - x^2} = \cos u\) on the range of \(\arcsin\). The integral becomes
  \[
  \begin{aligned}
  &\int \sin^2 u\cos^2 u\, du\\
  &=\int \frac{1 - \cos 4u}{8}\, du\\
  &=\frac{u}{8} - \frac{\sin 4u}{32} + C.
  \end{aligned}
  \]
  Restoring \(u = \arcsin x\) gives \(\frac{\arcsin x}{8} - \frac{\sin(4\arcsin x)}{32} + C\).
provenance: handout-answer
steps:
  - Substitute \(x = \sin u\).
  - Linearise \(\sin^2 u\cos^2 u\).
  - The antiderivative is \(\frac{\arcsin x}{8} - \frac{\sin(4\arcsin x)}{32} + C\).
verification:
  checks:
    - expr: diff(asin(x)/8 - sin(4*asin(x))/32, x)
      expected: x**2*sqrt(1 - x**2)
:::

::: exercise
id: l3-trig-integrals.8.3.7
number: "8.3.7"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \frac{1}{\sqrt{1 + x^2}}\, dx\).
solution: |
  Substitute \(x = \tan u\), so \(dx = \sec^2 u\, du\) and \(\sqrt{1 + x^2} = \sec u\). The integral becomes \(\int \sec u\, du = \ln|\sec u + \tan u| + C\). Restoring \(\tan u = x\) and \(\sec u = \sqrt{1 + x^2}\) gives
  \[
  \ln\left|x + \sqrt{1 + x^2}\right| + C.
  \]
provenance: handout-answer
steps:
  - Substitute \(x = \tan u\).
  - Integrate \(\sec u\).
  - The antiderivative is \(\ln\left|x + \sqrt{1 + x^2}\right| + C\).
verification:
  checks:
    - expr: diff(log(x + sqrt(1 + x**2)), x)
      expected: 1/sqrt(1 + x**2)
:::

::: exercise
id: l3-trig-integrals.8.3.8
number: "8.3.8"
tier: exam
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sqrt{x^2 + 2x}\, dx\).
solution: |
  Complete the square: \(x^2 + 2x = (x + 1)^2 - 1\). Set \(w = x + 1\). The integral is \(\int \sqrt{w^2 - 1}\, dw\). The antiderivative of that square root is
  \[
  \frac{w\sqrt{w^2 - 1}}{2} - \frac{1}{2}\ln\left|w + \sqrt{w^2 - 1}\right| + C.
  \]
  Restoring \(w = x + 1\) gives
  \[
  \begin{aligned}
  &\frac{(x + 1)\sqrt{x^2 + 2x}}{2}\\
  &\quad-\frac{1}{2}\ln\left|x + 1 + \sqrt{x^2 + 2x}\right|\\
  &\quad + C.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Write \(x^2 + 2x = (x + 1)^2 - 1\).
  - Use the antiderivative of \(\sqrt{w^2 - 1}\).
  - The antiderivative is \(\frac{(x + 1)\sqrt{x^2 + 2x}}{2} - \frac{1}{2}\ln\left|x + 1 + \sqrt{x^2 + 2x}\right| + C\).
verification:
  checks:
    - expr: diff((x + 1)*sqrt(x**2 + 2*x)/2 - log(x + 1 + sqrt(x**2 + 2*x))/2, x)
      expected: sqrt(x**2 + 2*x)
:::

::: exercise
id: l3-trig-integrals.8.3.9
number: "8.3.9"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \frac{1}{x^2(1 + x^2)}\, dx\).
solution: |
  Substitute \(x = \tan u\), so \(dx = \sec^2 u\, du\) and \(1 + x^2 = \sec^2 u\). The integral becomes
  \[
  \begin{aligned}
  &\int \frac{1}{\tan^2 u}\, du\\
  &=\int \cot^2 u\, du\\
  &=\int (\csc^2 u - 1)\, du\\
  &=-\cot u - u + C.
  \end{aligned}
  \]
  Restoring \(\cot u = \frac{1}{x}\) and \(u = \arctan x\) gives \(-\arctan x - \frac{1}{x} + C\).
provenance: handout-answer
steps:
  - Substitute \(x = \tan u\).
  - Write \(\cot^2 u = \csc^2 u - 1\).
  - The antiderivative is \(-\arctan x - \frac{1}{x} + C\).
verification:
  checks:
    - expr: diff(-atan(x) - 1/x, x)
      expected: 1/(x**2*(1 + x**2))
:::

::: exercise
id: l3-trig-integrals.8.3.10
number: "8.3.10"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \frac{x^2}{\sqrt{4 - x^2}}\, dx\).
solution: |
  Substitute \(x = 2\sin u\), so \(dx = 2\cos u\, du\) and \(\sqrt{4 - x^2} = 2\cos u\). The integral becomes
  \[
  \begin{aligned}
  &\int 4\sin^2 u\, du\\
  &=\int 2(1 - \cos 2u)\, du\\
  &=2u - \sin 2u + C.
  \end{aligned}
  \]
  Here \(u = \arcsin\frac{x}{2}\) and \(\sin 2u = 2\sin u\cos u = \frac{x\sqrt{4 - x^2}}{2}\). The antiderivative is
  \[
  2\arcsin\frac{x}{2} - \frac{x\sqrt{4 - x^2}}{2} + C.
  \]
provenance: handout-answer
steps:
  - Substitute \(x = 2\sin u\).
  - Linearise \(\sin^2 u\).
  - The antiderivative is \(2\arcsin\frac{x}{2} - \frac{x\sqrt{4 - x^2}}{2} + C\).
verification:
  checks:
    - expr: diff(2*asin(x/2) - x*sqrt(4 - x**2)/2, x)
      expected: x**2/sqrt(4 - x**2)
:::

::: exercise
id: l3-trig-integrals.8.3.11
number: "8.3.11"
tier: exam
topics: [trigonometric-integrals]
statement: |
  Find \(\int \frac{\sqrt{x}}{\sqrt{1 - x}}\, dx\).
solution: |
  Set \(x = \sin^2 \theta\) with \(\theta\) in \(\left[0, \frac{\pi}{2}\right]\), so \(\sqrt{x} = \sin \theta\), \(\sqrt{1 - x} = \cos \theta\), and \(dx = 2\sin \theta\cos \theta\, d\theta\). The factors of \(\cos \theta\) cancel, and the integral becomes
  \[
  \begin{aligned}
  &\int 2\sin^2 \theta\, d\theta\\
  &=\int (1 - \cos 2\theta)\, d\theta\\
  &=\theta - \sin \theta\cos \theta + C.
  \end{aligned}
  \]
  Restoring \(\theta = \arcsin\sqrt{x}\) and \(\sin \theta\cos \theta = \sqrt{x}\sqrt{1 - x}\) gives
  \[
  \arcsin\sqrt{x} - \sqrt{x}\sqrt{1 - x} + C.
  \]
provenance: handout-answer
steps:
  - Set \(x = \sin^2 \theta\).
  - The integral becomes \(\int 2\sin^2 \theta\, d\theta\).
  - The antiderivative is \(\arcsin\sqrt{x} - \sqrt{x}\sqrt{1 - x} + C\).
verification:
  checks:
    - expr: diff(asin(sqrt(x)) - sqrt(x)*sqrt(1 - x), x)
      expected: sqrt(x)/sqrt(1 - x)
:::

::: exercise
id: l3-trig-integrals.8.3.12
number: "8.3.12"
tier: exam
topics: [trigonometric-integrals]
statement: |
  Find \(\int \frac{x^3}{\sqrt{4x^2 - 1}}\, dx\).
solution: |
  Set \(u = 4x^2 - 1\), so \(du = 8x\, dx\) and \(x^2 = \frac{u + 1}{4}\). Then \(x^3\, dx = x^2\cdot x\, dx = \frac{u + 1}{4}\cdot\frac{du}{8}\), and the integral is
  \[
  \begin{aligned}
  &\frac{1}{32}\int (u^{1/2} + u^{-1/2})\, du\\
  &=\frac{1}{32}\left(\frac{2}{3}u^{3/2} + 2u^{1/2}\right) + C.
  \end{aligned}
  \]
  That antiderivative equals \(\frac{1}{16}\sqrt{u}\left(\frac{u}{3} + 1\right)\). With \(u = 4x^2 - 1\), the factor \(\frac{u}{3} + 1\) equals \(\frac{4x^2 + 2}{3}\), so
  \[
  \begin{aligned}
  &\int \frac{x^3}{\sqrt{4x^2 - 1}}\, dx\\
  &=\frac{(2x^2 + 1)\sqrt{4x^2 - 1}}{24} + C.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Set \(u = 4x^2 - 1\).
  - Replace \(x^2\) by \(\frac{u + 1}{4}\).
  - The antiderivative is \(\frac{(2x^2 + 1)\sqrt{4x^2 - 1}}{24} + C\).
verification:
  checks:
    - expr: diff((2*x**2 + 1)*sqrt(4*x**2 - 1)/24, x)
      expected: x**3/sqrt(4*x**2 - 1)
:::

::: exercise
id: l3-trig-integrals.8.7.4
number: "8.7.4"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sin t\cos 2t\, dt\).
solution: |
  Write \(\cos 2t = 1 - 2\sin^2 t\). Then \(\sin t\cos 2t = \sin t - 2\sin^3 t\).

  The power \(3\) is odd. Write \(\sin^3 t = \sin t\,(1 - \cos^2 t)\). The substitution \(u = \cos t\) has differential \(du = -\sin t\, dt\), so
  \[
  \begin{aligned}
  &\int \sin^3 t\, dt\\
  &=\int -(1 - u^2)\, du\\
  &=-u + \frac{u^3}{3} + C\\
  &=-\cos t + \frac{\cos^3 t}{3} + C.
  \end{aligned}
  \]
  Therefore
  \[
  \begin{aligned}
  &\int(\sin t - 2\sin^3 t)\, dt\\
  &=-\cos t - 2\left(-\cos t + \frac{\cos^3 t}{3}\right) + C\\
  &=\cos t - \frac{2}{3}\cos^3 t + C.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Rewrite \(\cos 2t\) as \(1 - 2\sin^2 t\).
  - Integrate \(\sin^3 t\) with \(u = \cos t\).
  - The antiderivative is \(\cos t - \frac{2}{3}\cos^3 t + C\).
verification:
  checks:
    - expr: diff(cos(t) - Rational(2, 3)*cos(t)**3, t)
      expected: sin(t)*cos(2*t)
:::

::: exercise
id: l3-trig-integrals.8.7.8
number: "8.7.8"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \frac{1}{(25 - t^2)^{3/2}}\, dt\).
solution: |
  Substitute \(t = 5\sin u\), so \(dt = 5\cos u\, du\) and \(25 - t^2 = 25\cos^2 u\). On the range of \(\arcsin\), cosine is non-negative, and \((25 - t^2)^{3/2} = 125\cos^3 u\). The integral becomes
  \[
  \begin{aligned}
  &\int \frac{5\cos u}{125\cos^3 u}\, du\\
  &=\frac{1}{25}\int \sec^2 u\, du\\
  &=\frac{1}{25}\tan u + C.
  \end{aligned}
  \]
  Here \(\tan u = \frac{t}{\sqrt{25 - t^2}}\), so the antiderivative is \(\frac{t}{25\sqrt{25 - t^2}} + C\). The same value is \(\frac{1}{25}\tan\left(\arcsin\frac{t}{5}\right) + C\).
provenance: handout-answer
steps:
  - Substitute \(t = 5\sin u\).
  - The integral becomes \(\frac{1}{25}\int \sec^2 u\, du\).
  - The antiderivative is \(\frac{t}{25\sqrt{25 - t^2}} + C\).
verification:
  checks:
    - expr: diff(t/(25*sqrt(25 - t**2)), t)
      expected: 1/(25 - t**2)**(Rational(3, 2))
:::

::: exercise
id: l3-trig-integrals.8.7.12
number: "8.7.12"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \cos^4 t\, dt\).
solution: |
  The power is even. Write \(\cos^4 t = \left(\frac{1 + \cos 2t}{2}\right)^2 = \frac{1 + 2\cos 2t + \cos^2 2t}{4}\). Replace the remaining square by \(\cos^2 2t = \frac{1 + \cos 4t}{2}\):
  \[
  \cos^4 t = \frac{3}{8} + \frac{1}{2}\cos 2t + \frac{1}{8}\cos 4t.
  \]
  Integrating term by term gives
  \[
  \int \cos^4 t\, dt = \frac{3t}{8} + \frac{\sin 2t}{4} + \frac{\sin 4t}{32} + C.
  \]
provenance: handout-answer
steps:
  - Apply the half-angle identity to \(\cos^2 t\).
  - Reduce \(\cos^2 2t\).
  - The antiderivative is \(\frac{3t}{8} + \frac{\sin 2t}{4} + \frac{\sin 4t}{32} + C\).
verification:
  checks:
    - expr: diff(3*t/8 + sin(2*t)/4 + sin(4*t)/32, t)
      expected: cos(t)**4
:::

::: exercise
id: l3-trig-integrals.8.7.14
number: "8.7.14"
tier: exam
topics: [trigonometric-integrals]
statement: |
  Find \(\int \frac{1}{t^2\sqrt{1 + t^2}}\, dt\).
solution: |
  Substitute \(t = \tan u\), so \(dt = \sec^2 u\, du\) and \(\sqrt{1 + t^2} = \sec u\). The integral becomes
  \[
  \int \frac{\sec u}{\tan^2 u}\, du = \int \frac{\cos u}{\sin^2 u}\, du.
  \]
  Set \(w = \sin u\), so \(dw = \cos u\, du\). The integral is \(-\frac{1}{w} + C = -\frac{1}{\sin u} + C\). Since \(\sin u = \frac{t}{\sqrt{1 + t^2}}\),
  \[
  \int \frac{1}{t^2\sqrt{1 + t^2}}\, dt = -\frac{\sqrt{1 + t^2}}{t} + C.
  \]
  The same value is \(-\frac{1}{\sin(\arctan t)} + C\).
provenance: handout-answer
steps:
  - Substitute \(t = \tan u\).
  - Set \(w = \sin u\).
  - The antiderivative is \(-\frac{\sqrt{1 + t^2}}{t} + C\).
verification:
  checks:
    - expr: diff(-sqrt(1 + t**2)/t, t)
      expected: 1/(t**2*sqrt(1 + t**2))
:::

::: exercise
id: l3-trig-integrals.8.7.16
number: "8.7.16"
tier: exam
topics: [trigonometric-integrals]
statement: |
  Find \(\int t^3\sqrt{t^2 + 1}\, dt\).
solution: |
  Substitute \(t = \tan \theta\), with \(\theta\) in \(\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)\). Then \(dt = \sec^2 \theta\, d\theta\) and \(\sqrt{t^2 + 1} = \sec \theta\), so the integral is \(\int \tan^3 \theta\sec^3 \theta\, d\theta = \int \frac{\sin^3 \theta}{\cos^6 \theta}\, d\theta\).

  Write \(\sin^3 \theta = \sin \theta\,(1 - \cos^2 \theta)\) and set \(w = \cos \theta\). Then
  \[
  \int \frac{-(1 - w^2)}{w^6}\, dw = \frac{1}{5w^5} - \frac{1}{3w^3} + C.
  \]
  Restoring \(w = \frac{1}{\sqrt{t^2 + 1}}\) gives
  \[
  \frac{(t^2 + 1)^{5/2}}{5} - \frac{(t^2 + 1)^{3/2}}{3} + C.
  \]
provenance: handout-answer
steps:
  - Substitute \(t = \tan \theta\).
  - Set \(w = \cos \theta\).
  - The antiderivative is \(\frac{(t^2 + 1)^{5/2}}{5} - \frac{(t^2 + 1)^{3/2}}{3} + C\).
verification:
  checks:
    - expr: diff((t**2 + 1)**(Rational(5, 2))/5 - (t**2 + 1)**(Rational(3, 2))/3, t)
      expected: t**3*sqrt(t**2 + 1)
:::

::: exercise
id: l3-trig-integrals.8.7.23
number: "8.7.23"
tier: standard
topics: [trigonometric-integrals]
statement: |
  Find \(\int \sin^3 t\cos^4 t\, dt\).
solution: |
  The power of sine is odd. Write \(\sin^3 t = \sin t\,(1 - \cos^2 t)\), so the integrand is \(\cos^4 t\,(1 - \cos^2 t)\sin t\). The substitution \(u = \cos t\) has \(du = -\sin t\, dt\), and the integral is
  \[
  \int -(u^4 - u^6)\, du = -\frac{u^5}{5} + \frac{u^7}{7} + C.
  \]
  Restoring \(u = \cos t\) gives \(\frac{\cos^7 t}{7} - \frac{\cos^5 t}{5} + C\).
provenance: handout-answer
steps:
  - Peel off one factor of \(\sin t\).
  - Substitute \(u = \cos t\).
  - The antiderivative is \(\frac{\cos^7 t}{7} - \frac{\cos^5 t}{5} + C\).
verification:
  checks:
    - expr: diff(cos(t)**7/7 - cos(t)**5/5, t)
      expected: sin(t)**3*cos(t)**4
:::

::: exercise
id: l3-trig-integrals.ex-sec-and-sqrt-1-plus-x2
tier: standard
topics: [trigonometric-integrals]
statement: |
  Use \(\int \sec u\,du = \ln|\sec u + \tan u| + C\) and \(\int \sec^3 u\,du = \frac{\sec u\tan u}{2} + \frac{1}{2}\ln|\sec u + \tan u| + C\).

  (a) Compute \(\int_0^{\pi/4} \sec u\,du\).

  (b) Compute \(\int_0^{\pi/4} \sec^3 u\,du\).

  (c) Compute \(\int_0^1 \sqrt{1+x^2}\,dx\) by the substitution \(x = \tan u\), and compare with (b).
solution: |
  (a) At \(u = \frac{\pi}{4}\), \(\sec u = \sqrt{2}\) and \(\tan u = 1\). At \(u = 0\), \(\sec u = 1\) and \(\tan u = 0\). So
  \[
  \begin{aligned}
  &\int_0^{\pi/4} \sec u\,du\\
  &=\ln(\sqrt{2} + 1) - \ln 1\\
  &=\ln(1 + \sqrt{2}).
  \end{aligned}
  \]

  (b) The antiderivative at \(\frac{\pi}{4}\) is \(\frac{\sqrt{2}\cdot 1}{2} + \frac{1}{2}\ln(1+\sqrt{2})\). At \(0\) it equals \(0 + \frac{1}{2}\ln 1 = 0\). So
  \[ \int_0^{\pi/4} \sec^3 u\,du = \frac{\sqrt{2}}{2} + \frac{1}{2}\ln(1 + \sqrt{2}). \]

  (c) Set \(x = \tan u\), so \(dx = \sec^2 u\,du\). The limit \(x = 0\) gives \(u = 0\), and \(x = 1\) gives \(u = \frac{\pi}{4}\). On this interval \(\sec u > 0\), so \(\sqrt{1 + \tan^2 u} = \sec u\). The integral becomes
  \[
  \begin{aligned}
  &\int_0^{\pi/4} \sec u\cdot\sec^2 u\,du\\
  &=\int_0^{\pi/4} \sec^3 u\,du\\
  &=\frac{\sqrt{2}}{2} + \frac{1}{2}\ln(1+\sqrt{2}),
  \end{aligned}
  \]
  which is the value in (b).
provenance: written-for-site
steps:
  - |
    Values at the limits: \(\sec\frac{\pi}{4} = \sqrt{2}\), \(\tan\frac{\pi}{4} = 1\).
  - |
    Evaluate the antiderivatives of \(\sec u\) and \(\sec^3 u\).
  - |
    Substitute \(x = \tan u\) to turn \(\sqrt{1+x^2}\,dx\) into \(\sec^3 u\,du\).
verification:
  checks:
    - expr: simplify((diff(log(sec(x) + tan(x)), x) - sec(x)).rewrite(sin))
      expected: 0
    - expr: log(sec(x) + tan(x)).subs(x, pi/4) - log(sec(x) + tan(x)).subs(x, 0)
      expected: log(1 + sqrt(2))
    - expr: simplify((diff(sec(x)*tan(x)/2 + log(sec(x) + tan(x))/2, x) - sec(x)**3).rewrite(sin))
      expected: 0
    - expr: (sec(x)*tan(x)/2 + log(sec(x) + tan(x))/2).subs(x, pi/4)
      expected: sqrt(2)/2 + log(1 + sqrt(2))/2
    - expr: integrate(sqrt(1 + x**2), (x, 0, 1))
      expected: sqrt(2)/2 + log(1 + sqrt(2))/2
:::

::: exercise
id: l3-trig-integrals.ex-sec-substitution-definite
tier: exam
topics: [trigonometric-integrals, substitution]
statement: |
  Compute \(\displaystyle\int_2^4 \frac{\sqrt{x^2 - 4}}{x}\,dx\) by the substitution \(x = 2\sec u\).
solution: |
  Take \(u\) in \(\left[0, \frac{\pi}{2}\right)\), which covers \(x \ge 2\). The limits become:

  - The limit \(x = 2\) gives \(\sec u = 1\), so \(u = 0\).
  - The limit \(x = 4\) gives \(\sec u = 2\), so \(u = \frac{\pi}{3}\).

  Then \(dx = 2\sec u\tan u\,du\) and \(x^2 - 4 = 4\sec^2 u - 4 = 4\tan^2 u\). On \(\left[0, \frac{\pi}{3}\right]\) tangent is nonnegative, so \(\sqrt{x^2 - 4} = 2\tan u\). The integrand becomes
  \[
  \begin{aligned}
  &\frac{2\tan u}{2\sec u}\cdot 2\sec u\tan u\,du\\
  &=2\tan^2 u\,du\\
  &=2(\sec^2 u - 1)\,du.
  \end{aligned}
  \]
  An antiderivative is \(2(\tan u - u)\), so
  \[
  \begin{aligned}
  &\int_2^4 \frac{\sqrt{x^2 - 4}}{x}\,dx\\
  &=2\left[\tan u - u\right]_0^{\pi/3}\\
  &=2\left(\sqrt{3} - \frac{\pi}{3}\right)\\
  &=2\sqrt{3} - \frac{2\pi}{3}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - |
    Set \(x = 2\sec u\) with limits \(u = 0\) and \(u = \frac{\pi}{3}\).
  - |
    On this interval \(\sqrt{x^2 - 4} = 2\tan u\), and the integrand reduces to \(2\tan^2 u = 2(\sec^2 u - 1)\).
  - |
    Evaluate \(2(\tan u - u)\) from \(0\) to \(\frac{\pi}{3}\). The value is \(2\sqrt{3} - \frac{2\pi}{3}\).
verification:
  checks:
    - expr: integrate(sqrt(x**2 - 4)/x, (x, 2, 4))
      expected: 2*sqrt(3) - 2*pi/3
    - expr: integrate(2*tan(u)**2, (u, 0, pi/3))
      expected: 2*sqrt(3) - 2*pi/3
:::
