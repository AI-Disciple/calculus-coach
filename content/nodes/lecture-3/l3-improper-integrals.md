---
id: l3-improper-integrals
lecture: 3
order: 10
title: Improper integrals
prerequisites: [l3-fundamental-theorem, l1-limit-techniques]
sources:
  - { source: lecture-notes-3, page: 4 }
  - { source: midterm-app }
  - { source: midterm-mock-1, page: 1 }
examWeight: medium
examWeightNote: Midterm integral sets often include one improper or divergent item.
status: reviewed
---

::: section
title: Integral to plus infinity
:::

::: formal-statement
kind: definition
title: Integral to plus infinity
source: { source: lecture-notes-3, page: 4 }
text: |
  Suppose the ordinary integral \(\int_a^L f(x)\, dx\) exists for every finite \(L > a\). Then
  \[
  \int_a^{+\infty} f(x)\, dx = \lim_{L \to +\infty} \int_a^L f(x)\, dx.
  \]
  The integral **converges** when this limit is a finite number. Otherwise it **diverges**.
:::

::: plain-explanation
text: |
  An antiderivative is evaluated at finite endpoints. To handle \(+\infty\):

  1. Replace \(+\infty\) by a finite **cutoff** \(L > a\).
  2. The improper integral is the limit of the ordinary integral from \(a\) to \(L\) as \(L\) tends to \(+\infty\).

  It converges when the cutoff value tends to a finite number. In every other case it diverges.
:::

::: worked-example
title: A convergent integral to infinity
problem: |
  Decide whether \(\int_1^{+\infty} \frac{1}{x^2}\, dx\) converges, and compute its value if it does.
solution: |
  The upper limit is \(+\infty\). Replace it by a finite cutoff \(L > 1\). An antiderivative of \(x^{-2}\) is \(-\frac{1}{x}\). The cutoff integral is
  \[
  \begin{aligned}
  I(L)&=\int_1^L x^{-2}\, dx\\
  &=\left[-\frac{1}{x}\right]_1^L\\
  &=1 - \frac{1}{L}.
  \end{aligned}
  \]
  As \(L \to +\infty\), the term \(\frac{1}{L}\) tends to 0, so \(I(L)\) tends to 1. The limit is the finite number 1. The improper integral converges. Its value is 1.
:::

::: worked-example
title: A divergent integral to infinity
problem: |
  Decide whether \(\int_1^{+\infty} \frac{1}{x}\, dx\) converges.
solution: |
  The upper limit is \(+\infty\). Replace it by a finite cutoff \(L > 1\). An antiderivative of \(\frac{1}{x}\) is \(\ln x\). The cutoff integral is
  \[
  \begin{aligned}
  I(L)&=\int_1^L \frac{1}{x}\, dx\\
  &=\left[\ln x\right]_1^L\\
  &=\ln L - \ln 1.
  \end{aligned}
  \]
  The number \(\ln 1\) equals 0, so \(I(L) = \ln L\). As \(L \to +\infty\), \(\ln L\) tends to \(+\infty\). The limit is infinite. The improper integral diverges.
:::

::: going-deeper
title: Power integrals from the cutoff
text: |
  ### Integral to infinity

  For \(p \ne 1\) and \(L > 1\),
  \[
  \int_1^L x^{-p}\, dx = \frac{L^{1 - p} - 1}{1 - p}.
  \]
  The limit as \(L \to +\infty\) depends on \(p\):

  - When \(p > 1\), write \(1 - p = -s\) with \(s > 0\). Then \(L^{1 - p} = L^{-s}\) tends to 0 as \(L \to +\infty\). The cutoff value tends to \(\frac{0 - 1}{1 - p}\), which equals \(\frac{1}{p - 1}\).
  - When \(p < 1\), \(L^{1 - p}\) tends to \(+\infty\), so the numerator \(L^{1 - p} - 1\) tends to \(+\infty\). The denominator \(1 - p\) is positive. The cutoff value tends to \(+\infty\).
  - When \(p = 1\), the cutoff integral is \(\ln L\), which tends to \(+\infty\).

  The integral \(\int_1^{+\infty} x^{-p}\, dx\) converges exactly when \(p > 1\), and its value is then \(\frac{1}{p - 1}\).

  ### Integral at the endpoint 0

  For \(0 < \varepsilon < 1\) and \(p \ne 1\),
  \[
  \int_{\varepsilon}^{1} x^{-p}\, dx = \frac{1 - \varepsilon^{1 - p}}{1 - p}.
  \]
  The limit as \(\varepsilon \to 0^{+}\) depends on \(p\):

  - When \(p < 1\), \(\varepsilon^{1 - p}\) tends to 0 as \(\varepsilon \to 0^{+}\), and the cutoff value tends to \(\frac{1}{1 - p}\).
  - When \(p > 1\), \(\varepsilon^{1 - p}\) tends to \(+\infty\). The numerator \(1 - \varepsilon^{1 - p}\) tends to \(-\infty\), and the denominator \(1 - p\) is negative, so the quotient tends to \(+\infty\).
  - When \(p = 1\), the cutoff integral is \(-\ln \varepsilon\), which tends to \(+\infty\).

  The integral \(\int_0^{1} x^{-p}\, dx\) converges exactly when \(p < 1\), and its value is then \(\frac{1}{1 - p}\).
:::

::: key-points
text: |
  - For \(\int_a^{+\infty} f(x)\, dx\), take \(\lim_{L \to +\infty} \int_a^L f(x)\, dx\), provided the ordinary integral exists for every finite \(L > a\).
  - The integral converges when this limit is a finite number. Otherwise it diverges.
  - \(\int_1^{+\infty} \frac{1}{x^2}\, dx\) converges to 1, and \(\int_1^{+\infty} \frac{1}{x}\, dx\) diverges.
:::

::: concept-question
id: l3-improper-integrals.q-cc584d91
question: |
  Area of the region \(0 < y < \frac{1}{x^{2}}\), \(1 < x < L\). What happens as \(L \to \infty\)?
options:
  - text: |
      \(1 - \frac{1}{L}\), tending to 1
    correct: true
  - text: |
      \(\ln(L)\), tending to \(\infty\)
  - text: |
      \(1 - \frac{1}{L^{2}}\), tending to 1
  - text: |
      \(L - 1\), tending to \(\infty\)
explanation: |
  \[
  \int_{1}^{L} x^{-2}\, dx = 1 - \frac{1}{L}.
  \]
  As \(L \to \infty\) this tends to 1.
:::

::: concept-question
id: l3-improper-integrals.q-ad276344
question: |
  For which \(x\) is \(f(x) = \int_{0}^{\infty} \sin(t)\, e^{-tx}\, dt\) defined, and what is its value?
options:
  - text: |
      \(x > 0\), and \(f(x) = \frac{1}{1 + x^{2}}\)
    correct: true
  - text: |
      \(x \geq 0\), and \(f(x) = \frac{1}{1 + x^{2}}\)
  - text: |
      All \(x\), and \(f(x) = \frac{1}{x}\)
  - text: |
      \(x > 1\), and \(f(x) = \frac{1}{1 - x^{2}}\)
explanation: |
  The factor \(e^{-tx}\) decays as \(t \to \infty\) only for \(x > 0\). At \(x = 0\) the integral \(\int \sin t \, dt\) does not converge. Integrating by parts twice gives \(f(x) = \frac{1}{1 + x^{2}}\).
:::

::: concept-question
id: l3-improper-integrals.q-0e4a8353
question: |
  What does \(f(x) = \int_{\pi/2}^{x} \frac{\cos(t)}{t}\, dt\) do for large \(x\), and how fast?
options:
  - text: |
      It tends to a finite constant \(\approx -0.47\). The deviation \(f(x) - L\) behaves like \(\frac{\sin(x)}{x}\), so the approach decays like \(\frac{1}{x}\).
    correct: true
  - text: |
      It tends to 0, decaying like \(\frac{1}{x}\)
  - text: |
      It tends to 0, decaying like \(\frac{1}{x^{2}}\)
  - text: |
      It grows without bound, like \(\ln(x)\)
explanation: |
  Integration by parts gives
  \[
  f(x) = L + \frac{\sin x}{x} + O(x^{-2}),
  \]
  where \(L = \int_{\pi/2}^{\infty} \frac{\cos t}{t}\, dt\) is finite. The deviation \(f(x) - L\) therefore decays like \(\frac{1}{x}\).
:::

::: exercise
id: l3-improper-integrals.i1
tier: basic
topics: [improper-integrals]
statement: |
  Does \(\int_1^{\infty}\frac{1}{x^3}\,dx\) converge? If it does, compute its value.
solution: |
  The exponent is \(p=3\). The integral \(\int_1^{\infty}x^{-p}\,dx\) converges exactly when \(p>1\).

  \[
  \begin{aligned}
  \int_1^R x^{-3}\,dx&=\left[-\frac{1}{2x^2}\right]_1^R\\
  &=\frac{1}{2}-\frac{1}{2R^2},
  \end{aligned}
  \]
  which tends to \(\frac{1}{2}\) as \(R\to\infty\). The integral converges and equals \(\frac{1}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x**(-3), (x, 1, oo))
      expected: "1/2"
:::

::: section
title: Integral from minus infinity
:::

::: formal-statement
kind: definition
title: Integral from minus infinity
source: { source: lecture-notes-3, page: 4 }
text: |
  Suppose the ordinary integral \(\int_A^b f(x)\, dx\) exists for every finite \(A < b\). Then
  \[
  \int_{-\infty}^{b} f(x)\, dx = \lim_{A \to -\infty} \int_A^b f(x)\, dx.
  \]
  The integral converges when this limit is a finite number. Otherwise it diverges.
:::

::: plain-explanation
text: |
  Replace \(-\infty\) by a finite cutoff \(A < b\), and send \(A\) to \(-\infty\). The integral converges when that limit is a finite number. In every other case it diverges.

  ### Integrals over the whole line

  An integral from \(-\infty\) to \(+\infty\) is split at a finite point \(c\). It converges when both \(\int_{-\infty}^{c} f(x)\, dx\) and \(\int_c^{+\infty} f(x)\, dx\) converge. The value is the sum of those two limits.
:::

::: trap
text: |
  A lower limit of \(-\infty\) is a cutoff sent to \(-\infty\). Replacing \(-\infty\) by \(L\) and then sending \(L\) to \(+\infty\) computes a different limit.

  Take \(\int_{-\infty}^{0} \frac{1}{1 + x^2}\, dx\). An antiderivative is \(\arctan x\).

  ### The wrong cutoff

  Keep \(L\) as the lower limit and send \(L\) to \(+\infty\). The number \(\arctan 0\) equals 0, so the integral from \(L\) to 0 equals \(-\arctan L\). As \(L \to +\infty\), \(\arctan L\) tends to \(\frac{\pi}{2}\), and \(-\arctan L\) tends to \(-\frac{\pi}{2}\). The integrand is positive on \((-\infty, 0)\), so the area under the curve is positive. The value \(-\frac{\pi}{2}\) is negative. A positive area and this negative value disagree.

  ### The right cutoff

  Send a cutoff \(A\) to \(-\infty\). The integral from \(A\) to 0 equals \(-\arctan A\). As \(A \to -\infty\), \(\arctan A\) tends to \(-\frac{\pi}{2}\), and \(-\arctan A\) tends to \(\frac{\pi}{2}\). The limit is the finite number \(\frac{\pi}{2}\). The improper integral converges. Its value is \(\frac{\pi}{2}\).
:::

::: key-points
text: |
  - For \(\int_{-\infty}^{b} f(x)\, dx\), take \(\lim_{A \to -\infty} \int_A^b f(x)\, dx\), provided the ordinary integral exists for every finite \(A < b\).
  - An integral from \(-\infty\) to \(+\infty\) is split at a finite point \(c\). It converges when both \(\int_{-\infty}^{c} f(x)\, dx\) and \(\int_c^{+\infty} f(x)\, dx\) converge, and its value is the sum.
  - The usual slip replaces \(-\infty\) by \(L\) and sends \(L\) to \(+\infty\), which gives \(-\frac{\pi}{2}\) for \(\int_{-\infty}^{0} \frac{1}{1 + x^2}\, dx\). The cutoff goes to \(-\infty\), and the value is \(\frac{\pi}{2}\).
:::

::: exercise
id: l3-improper-integrals.i19
tier: basic
topics: [improper-integrals]
statement: |
  Does \(\int_{-\infty}^{0} e^{x}\, dx\) converge? If it does, compute its value.
solution: |
  The lower limit is \(-\infty\). Replace it by a finite cutoff \(A < 0\), and send \(A\) to \(-\infty\). An antiderivative of \(e^{x}\) is \(e^{x}\). The cutoff integral is
  \[
  \begin{aligned}
  \int_A^{0} e^{x}\, dx&=\left[e^{x}\right]_A^{0}\\
  &=1 - e^{A}.
  \end{aligned}
  \]
  As \(A \to -\infty\), the term \(e^{A}\) tends to 0, so the cutoff value tends to 1. The limit is the finite number 1. The integral converges. Its value is 1.
provenance: written-for-site
steps:
  - Replace \(-\infty\) by a cutoff \(A\) and send \(A\) to \(-\infty\).
  - The cutoff integral equals \(1 - e^{A}\).
  - The limit equals 1, so the integral converges.
verification:
  checks:
    - expr: integrate(exp(x), (x, -oo, 0))
      expected: "1"
:::

::: section
title: Vertical asymptote at an endpoint
:::

::: formal-statement
kind: definition
title: Vertical asymptote at an endpoint
source: { source: lecture-notes-3, page: 4 }
text: |
  Suppose \(f\) is unbounded as \(x\) approaches the endpoint \(a\), and \(\int_{a + \varepsilon}^{b} f(x)\, dx\) exists whenever \(0 < \varepsilon < b - a\). Then
  \[
  \int_a^b f(x)\, dx = \lim_{\varepsilon \to 0^{+}} \int_{a + \varepsilon}^{b} f(x)\, dx.
  \]
  If the unbounded endpoint is \(b\), the cutoff stops short of \(b\):
  \[
  \int_a^b f(x)\, dx = \lim_{\varepsilon \to 0^{+}} \int_a^{b - \varepsilon} f(x)\, dx.
  \]
  In either case the integral converges when the limit is a finite number. Otherwise it diverges.
:::

::: plain-explanation
text: |
  A **vertical asymptote** at an endpoint leaves the integrand unbounded there. The fundamental theorem requires a continuous integrand on the closed interval. That hypothesis fails at the asymptote. Keep the cutoff a distance \(\varepsilon\) away from the asymptote, and let \(\varepsilon\) tend to \(0\) from above. The improper integral converges when those ordinary integrals settle to a finite number.

  ### Unbounded at an interior point

  If \(f\) is unbounded at an interior point \(c\), split the integral at \(c\). Each piece is an endpoint limit of this kind. The original integral converges when both limits are finite. The value is their sum.
:::

::: guided-example
title: A vertical asymptote at the right endpoint
problem: |
  Decide whether \(\int_0^1 \frac{1}{\sqrt{1 - x}}\, dx\) converges, and compute its value if it does.
steps:
  - |
    The integrand is unbounded at the right endpoint \(x = 1\). Replace that endpoint by \(1 - \varepsilon\), with \(0 < \varepsilon < 1\).
  - |
    An antiderivative of \((1 - x)^{-1/2}\) is \(-2\sqrt{1 - x}\).
  - |
    Evaluating \(-2\sqrt{1 - x}\) from 0 to \(1 - \varepsilon\) gives
    \[
    -2\sqrt{\varepsilon} - (-2) = 2 - 2\sqrt{\varepsilon}.
    \]
  - |
    As \(\varepsilon \to 0^{+}\), the term \(2\sqrt{\varepsilon}\) tends to 0, so the cutoff value tends to 2. The limit is the finite number 2. The improper integral converges. Its value is 2.
:::

::: key-points
text: |
  - If \(f\) is unbounded at the endpoint \(a\), then \(\int_a^b f(x)\, dx = \lim_{\varepsilon \to 0^{+}} \int_{a + \varepsilon}^{b} f(x)\, dx\). If it is unbounded at \(b\), the cutoff is \(b - \varepsilon\).
  - The integral converges when the limit is a finite number. Otherwise it diverges.
  - If \(f\) is unbounded at an interior point \(c\), split the integral at \(c\). It converges when both pieces converge, and its value is the sum.
:::

::: concept-question
id: l3-improper-integrals.q-d2b1a175
question: |
  Area between the \(x\)-axis and \(y = -\ln(x)\) for \(0 < x < 1\).
options:
  - text: |
      \(1\)
    correct: true
  - text: |
      \(\frac{1}{2}\)
  - text: |
      \(2\)
  - text: |
      Divergent
explanation: |
  An antiderivative of \(-\ln x\) is \(x - x\ln x\). Its value at \(x = 1\) is 1, and \(\lim_{x \to 0^{+}}(x - x\ln x) = 0\), so the area is 1.
:::

::: concept-question
id: l3-improper-integrals.q-d5d45c8f
question: |
  Compute \(\int_{0}^{1} \frac{\ln(x)}{\sqrt{x}}\, dx\) as the limit of the integral from \(\varepsilon\) to 1.
options:
  - text: |
      \(-4\), so it converges
    correct: true
  - text: |
      Divergent to \(-\infty\)
  - text: |
      \(-2\), so it converges
  - text: |
      \(0\)
explanation: |
  Integration by parts with \(v = 2\sqrt{x}\) produces
  \[
  2\sqrt{x}\ln x - 4\sqrt{x}.
  \]
  Evaluating from \(\varepsilon\) to 1 gives
  \[
  -4 - 2\sqrt{\varepsilon}\ln\varepsilon + 4\sqrt{\varepsilon}.
  \]
  The limit as \(\varepsilon \to 0^{+}\) is \(-4\), since \(\sqrt{\varepsilon}\ln\varepsilon \to 0\).
:::

::: concept-question
id: l3-improper-integrals.q-32055b15
question: |
  Compute \(\int_{0}^{1} \frac{1}{x\ln(x)}\, dx\) by letting \(t = \ln(x)\).
options:
  - text: |
      Divergent
    correct: true
  - text: |
      \(0\)
  - text: |
      \(-1\)
  - text: |
      \(\ln(2)\)
explanation: |
  The substitution \(t = \ln x\) converts the integral into \(\int \frac{dt}{t}\) as \(t\) runs from \(-\infty\) toward 0. That integral diverges.
:::

::: exercise
id: l3-improper-integrals.i3
tier: basic
topics: [improper-integrals]
statement: |
  Does \(\int_0^1\frac{1}{\sqrt{x}}\,dx\) converge? If it does, compute its value.
solution: |
  The exponent is \(p=\frac{1}{2}\). The integral \(\int_0^1 x^{-p}\,dx\) converges exactly when \(p<1\).

  \[
  \int_{\varepsilon}^1 x^{-1/2}\,dx=2-2\sqrt{\varepsilon},
  \]
  which tends to 2 as \(\varepsilon\to 0^+\). The integral converges and equals 2.
provenance: written-for-site
verification:
  checks:
    - expr: integrate(1/sqrt(x), (x, 0, 1))
      expected: "2"
:::

::: sheet-item
id: l3-improper-integrals.sheet-upper
category: formula
text: |
  \[
  \int_a^{+\infty} f(x)\, dx = \lim_{L \to +\infty} \int_a^L f(x)\, dx.
  \]
  The integral converges when this limit is a finite number. Otherwise it diverges.
:::

::: sheet-item
id: l3-improper-integrals.sheet-lower
category: formula
text: |
  \[
  \int_{-\infty}^{b} f(x)\, dx = \lim_{A \to -\infty} \int_A^b f(x)\, dx.
  \]
  The cutoff is sent to \(-\infty\). The integral converges when the limit is a finite number. Otherwise it diverges.
:::

::: sheet-item
id: l3-improper-integrals.sheet-endpoint
category: formula
text: |
  If the integrand is unbounded at the left endpoint \(a\), then
  \[
  \int_a^b f(x)\, dx = \lim_{\varepsilon \to 0^{+}} \int_{a + \varepsilon}^{b} f(x)\, dx.
  \]
  If the unbounded endpoint is \(b\), the upper cutoff is \(b - \varepsilon\). The integral converges when the limit is a finite number.
:::

::: sheet-item
id: l3-improper-integrals.sheet-cutoff-direction
category: trap
text: |
  Replacing \(-\infty\) by \(L\) and sending \(L\) to \(+\infty\) computes a different limit. For
  \[
  \int_{-\infty}^{0} \frac{1}{1 + x^2}\, dx,
  \]
  that limit equals \(-\frac{\pi}{2}\). Sending the cutoff to \(-\infty\) gives \(\frac{\pi}{2}\). The integral converges and equals \(\frac{\pi}{2}\).
:::

::: sheet-item
id: l3-improper-integrals.sheet-split
category: recognition
text: |
  An integral from \(-\infty\) to \(+\infty\), and an integral whose integrand is unbounded at an interior point, are each split at a finite point. The integral converges when both pieces converge. The value is the sum of the two limits.
:::

::: sheet-item
id: l3-improper-integrals.sheet-powers
category: recognition
text: |
  - \(\int_1^{+\infty} x^{-p}\, dx\) converges exactly when \(p > 1\), with value \(\frac{1}{p - 1}\).
  - \(\int_0^{1} x^{-p}\, dx\) converges exactly when \(p < 1\), with value \(\frac{1}{1 - p}\).
  - When \(p = 1\), both integrals diverge.
:::

::: exercise
id: l3-improper-integrals.m6-4
tier: standard
topics: [improper-integrals]
number: "Mock midterm, Ex. 6.4"
statement: |
  Does \(\int_{-\infty}^{\infty}\frac{1}{1+x^2}\,dx\) converge? If it does, compute its value.
solution: |
  An antiderivative is \(\arctan x\). Split at 0, and take each infinite end as its own limit.

  \[
  \int_0^{R}\frac{1}{1+x^2}\,dx=\arctan R,
  \]
  which tends to \(\frac{\pi}{2}\) as \(R\to\infty\). The other half is
  \[
  \begin{aligned}
  &\int_{-R}^{0}\frac{1}{1+x^2}\,dx\\
  &=-\arctan(-R)\\
  &=\arctan R,
  \end{aligned}
  \]
  which also tends to \(\frac{\pi}{2}\). Both halves converge, so the integral converges and equals \(\pi\).

  For \(|x|\ge 1\), \(\frac{1}{1+x^2}\le\frac{1}{x^2}\), and \(\int_1^{\infty}x^{-2}\,dx\) converges. Dividing the integrand by \(\pi\) produces the Cauchy density.
provenance: written-for-site
steps:
  - An antiderivative is \(\arctan x\).
  - Split the integral at 0.
  - Each half tends to \(\frac{\pi}{2}\).
  - The integral converges and equals \(\pi\).
verification:
  checks:
    - expr: integrate(1/(1+x**2), (x, -oo, oo))
      expected: "pi"
:::

::: exercise
id: l3-improper-integrals.s18-4
tier: standard
topics: [improper-integrals]
number: "Integral bank, Ex. 18.4"
statement: |
  Does \(\int_0^1\frac{1}{\sqrt{1-x^2}}\,dx\) converge? If it does, compute its value.
solution: |
  The integral is improper at \(x=1\). An antiderivative is \(\arcsin x\).

  For \(0<c<1\),
  \[
  \int_0^c\frac{1}{\sqrt{1-x^2}}\,dx=\arcsin c.
  \]
  As \(c\to 1^-\), this tends to \(\arcsin 1=\frac{\pi}{2}\). The integral converges and equals \(\frac{\pi}{2}\).

  Near \(x=1\), \(1-x^2=(1-x)(1+x)\), so the integrand behaves like \(\frac{1}{\sqrt{2}}(1-x)^{-1/2}\). The power \(\frac{1}{2}\) is less than 1, so the \(p\)-test at a finite endpoint also predicts convergence.
provenance: written-for-site
steps:
  - The integrand blows up at \(x=1\).
  - An antiderivative is \(\arcsin x\).
  - The limit as the upper bound tends to 1 is \(\frac{\pi}{2}\).
verification:
  checks:
    - expr: integrate(1/sqrt(1-x**2), (x, 0, 1))
      expected: "pi/2"
:::

::: exercise
id: l3-improper-integrals.i2
tier: basic
topics: [improper-integrals]
statement: |
  Does \(\int_1^{\infty}\frac{1}{\sqrt{x}}\,dx\) converge? If it does, compute its value.
solution: |
  The exponent is \(p=\frac{1}{2}\). The integral \(\int_1^{\infty}x^{-p}\,dx\) converges exactly when \(p>1\).

  \[
  \int_1^R x^{-1/2}\,dx=2\sqrt{R}-2,
  \]
  which tends to \(\infty\) as \(R\to\infty\). The integral diverges.
provenance: written-for-site
verification:
  checkable: false
  reason: The result is divergence, and there is no finite value to compare.
:::

::: exercise
id: l3-improper-integrals.i4
tier: basic
topics: [improper-integrals]
statement: |
  Does \(\int_0^1\frac{1}{x^2}\,dx\) converge? If it does, compute its value.
solution: |
  The exponent is \(p=2\). The integral \(\int_0^1 x^{-p}\,dx\) converges exactly when \(p<1\).

  \[
  \int_{\varepsilon}^1 x^{-2}\,dx=\frac{1}{\varepsilon}-1,
  \]
  which tends to \(\infty\) as \(\varepsilon\to 0^+\). The integral diverges.
provenance: written-for-site
verification:
  checkable: false
  reason: The result is divergence, and there is no finite value to compare.
:::

::: exercise
id: l3-improper-integrals.i5
tier: basic
topics: [improper-integrals]
statement: |
  Does \(\int_0^{\infty}e^{-2x}\,dx\) converge? If it does, compute its value.
solution: |
  For \(a>0\), \(\int_0^{\infty}e^{-ax}\,dx=\frac{1}{a}\). Here \(a=2\).

  \[
  \left[-\frac{1}{2}e^{-2x}\right]_0^R=\frac{1}{2}-\frac{1}{2}e^{-2R},
  \]
  which tends to \(\frac{1}{2}\) as \(R\to\infty\). The integral converges and equals \(\frac{1}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(exp(-2*x), (x, 0, oo))
      expected: "1/2"
:::

::: exercise
id: l3-improper-integrals.i6
tier: standard
topics: [improper-integrals, integration-by-parts]
statement: |
  Does \(\int_0^{\infty}xe^{-x}\,dx\) converge? If it does, compute its value.
solution: |
  Integrate by parts with \(u=x\). The boundary term \(Re^{-R}\) tends to 0.

  \[
  \begin{aligned}
  &\int_0^R xe^{-x}\,dx\\
  &=\left[-xe^{-x}\right]_0^R+\int_0^R e^{-x}\,dx\\
  &=-Re^{-R}+1-e^{-R},
  \end{aligned}
  \]
  which tends to 1 as \(R\to\infty\). The integral converges and equals 1.

  For each integer \(n\ge 0\), \(\int_0^{\infty}x^n e^{-x}\,dx=n!\).
provenance: written-for-site
steps:
  - Integrate by parts with \(u=x\).
  - The boundary term \(Re^{-R}\) tends to 0.
  - The integral equals 1.
verification:
  checks:
    - expr: integrate(x*exp(-x), (x, 0, oo))
      expected: "1"
:::

::: exercise
id: l3-improper-integrals.i7
tier: standard
topics: [improper-integrals]
statement: |
  Does \(\int_0^1\ln x\,dx\) converge? If it does, compute its value.
solution: |
  An antiderivative is \(x\ln x-x\). Use the limit \(\varepsilon\ln\varepsilon\to 0\) as \(\varepsilon\to 0^+\).

  \[
  \left[x\ln x-x\right]_{\varepsilon}^1=-1-\varepsilon\ln\varepsilon+\varepsilon,
  \]
  which tends to \(-1\). The integral converges and equals \(-1\).
provenance: written-for-site
steps:
  - An antiderivative is \(x\ln x-x\).
  - The term \(\varepsilon\ln\varepsilon\) tends to 0.
  - The integral equals \(-1\).
verification:
  checks:
    - expr: integrate(log(x), (x, 0, 1))
      expected: "-1"
:::

::: exercise
id: l3-improper-integrals.i8
tier: standard
topics: [improper-integrals]
statement: |
  Does \(\int_{-1}^{1}\frac{1}{x^2}\,dx\) converge? If it does, compute its value.
solution: |
  The integrand is undefined at \(x=0\), an interior point of \([-1,1]\). Split there. The integral \(\int_0^1 x^{-2}\,dx\) diverges, since the exponent \(p=2\) fails the condition \(p<1\) at a finite endpoint. The original integral diverges.

  The fundamental theorem requires the integrand to be continuous on the whole interval \([-1,1]\). The evaluation \(\left[-\frac{1}{x}\right]_{-1}^{1}\) equals \(-2\). The integrand \(\frac{1}{x^2}\) is positive on each side of 0, and \(-2\) is negative.
provenance: written-for-site
steps:
  - The integrand is undefined at 0, so split the integral there.
  - The integral of \(x^{-2}\) from 0 to 1 diverges.
  - The original integral diverges.
verification:
  checkable: false
  reason: The result is divergence, and there is no finite value to compare.
:::

::: exercise
id: l3-improper-integrals.i9
tier: standard
topics: [improper-integrals, substitution]
statement: |
  Does \(\int_2^{\infty}\frac{1}{x(\ln x)^2}\,dx\) converge? If it does, compute its value.
solution: |
  Substitute \(u=\ln x\). Then \(du=\frac{1}{x}\,dx\), and an antiderivative of \(u^{-2}\) is \(-\frac{1}{u}\).

  \[
  \left[-\frac{1}{\ln x}\right]_2^R=\frac{1}{\ln 2}-\frac{1}{\ln R},
  \]
  which tends to \(\frac{1}{\ln 2}\) as \(R\to\infty\). The integral converges and equals \(\frac{1}{\ln 2}\).
provenance: written-for-site
steps:
  - Substitute \(u=\ln x\).
  - An antiderivative is \(-\frac{1}{\ln x}\).
  - The limit equals \(\frac{1}{\ln 2}\).
verification:
  checks:
    - expr: integrate(1/(x*(log(x))**2), (x, 2, oo))
      expected: "1/log(2)"
:::

::: exercise
id: l3-improper-integrals.i10
tier: standard
topics: [improper-integrals, partial-fractions]
statement: |
  Does \(\int_1^{\infty}\frac{1}{x(x+1)}\,dx\) converge? If it does, compute its value.
solution: |
  Decompose \(\frac{1}{x(x+1)}=\frac{1}{x}-\frac{1}{x+1}\), and keep the two logarithms together before letting \(R\to\infty\).

  \[
  \begin{aligned}
  &\int_1^R\left(\frac{1}{x}-\frac{1}{x+1}\right)\,dx\\
  &=\left[\ln\frac{x}{x+1}\right]_1^R\\
  &=\ln\frac{R}{R+1}-\ln\frac{1}{2}.
  \end{aligned}
  \]
  As \(R\to\infty\), \(\ln\frac{R}{R+1}\) tends to 0, so the integral converges and equals \(\ln 2\).

  The combined antiderivative is \(\ln\frac{x}{x+1}\). Writing the integral as \(\int_1^{\infty}\frac{1}{x}\,dx-\int_1^{\infty}\frac{1}{x+1}\,dx\) leaves the indeterminate form \(\infty-\infty\).
provenance: written-for-site
steps:
  - Decompose the integrand as \(\frac{1}{x}-\frac{1}{x+1}\).
  - Combine the logarithms before taking the limit.
  - The value is \(\ln 2\).
verification:
  checks:
    - expr: integrate(1/(x*(x+1)), (x, 1, oo))
      expected: "log(2)"
:::

::: exercise
id: l3-improper-integrals.i11
tier: standard
topics: [improper-integrals]
statement: |
  Does \(\int_{-\infty}^{\infty}x\,dx\) converge? If it does, compute its value.
solution: |
  Look at each half separately. The integral \(\int_0^R x\,dx\) equals \(\frac{R^2}{2}\), which tends to \(\infty\). The right-hand half diverges, so the integral diverges.

  An improper integral over the whole line converges only when both halves converge. The integrals from \(-R\) to \(R\) equal 0 for every finite \(R\). Each half must still converge on its own.
provenance: written-for-site
steps:
  - Check the two halves separately.
  - The integral from 0 to \(R\) of \(x\,dx\) tends to infinity.
  - The integral diverges.
verification:
  checkable: false
  reason: The result is divergence, and there is no finite value to compare.
:::

::: exercise
id: l3-improper-integrals.i12
tier: standard
topics: [improper-integrals]
statement: |
  Determine whether \(\int_1^{\infty}\frac{\sin^2 x}{x^2}\,dx\) converges or diverges. No value is required.
solution: |
  Bound \(\sin^2 x\). For \(x\ge 1\),
  \[
  0\le\frac{\sin^2 x}{x^2}\le\frac{1}{x^2}.
  \]
  The integral \(\int_1^{\infty}\frac{1}{x^2}\,dx\) converges, so this integral converges by comparison.
provenance: written-for-site
steps:
  - Bound the integrand by \(\frac{1}{x^2}\).
  - The comparison integral converges, so this integral converges.
verification:
  checks:
    - expr: integrate(sin(x)**2/x**2, (x, 1, oo))
      expected: "-Si(2) - cos(2)/2 + 1/2 + pi/2"
:::

::: exercise
id: l3-improper-integrals.i13
tier: standard
topics: [improper-integrals]
statement: |
  Determine whether \(\int_1^{\infty}\frac{1+e^{-x}}{x}\,dx\) converges or diverges.
solution: |
  Find a divergent lower bound. For \(x\ge 1\),
  \[
  \frac{1+e^{-x}}{x}\ge\frac{1}{x}\ge 0.
  \]
  The integral \(\int_1^{\infty}\frac{1}{x}\,dx\) diverges, so this integral diverges.
provenance: written-for-site
steps:
  - Bound the integrand below by \(\frac{1}{x}\).
  - The comparison integral diverges, so this integral diverges.
verification:
  checkable: false
  reason: The result is divergence, and there is no finite value to compare.
:::

::: exercise
id: l3-improper-integrals.i14
tier: standard
topics: [improper-integrals]
statement: |
  Determine whether \(\int_1^{\infty}\frac{1}{\sqrt{x^3+1}}\,dx\) converges or diverges.
solution: |
  At infinity, \(\sqrt{x^3+1}\) behaves like \(x^{3/2}\). For \(x\ge 1\), \(\sqrt{x^3+1}\ge x^{3/2}\), so
  \[
  0<\frac{1}{\sqrt{x^3+1}}\le x^{-3/2}.
  \]
  The exponent \(\frac{3}{2}\) is greater than 1, so \(\int_1^{\infty}x^{-3/2}\,dx\) converges. This integral converges by comparison.
provenance: written-for-site
steps:
  - Bound the integrand above by \(x^{-3/2}\).
  - That comparison integral converges, so this integral converges.
verification:
  checks:
    - expr: integrate(1/sqrt(x**3+1), (x, 1, oo))
      expected: "gamma(1/6)*hyper((1/6, 1/2), (7/6,), -1)/(3*gamma(7/6))"
:::

::: exercise
id: l3-improper-integrals.i15
tier: exam
topics: [improper-integrals]
statement: |
  Determine whether \(\int_0^1\frac{1}{\sin x}\,dx\) converges or diverges.
solution: |
  Near 0, \(\sin x\le x\). On \((0,1]\), \(0<\sin x\le x\), so \(\frac{1}{\sin x}\ge\frac{1}{x}\). The integral \(\int_0^1\frac{1}{x}\,dx\) diverges, so this integral diverges.

  The same conclusion follows from \(\frac{1}{\sin x}\sim\frac{1}{x}\) at 0.
provenance: written-for-site
steps:
  - On \((0,1]\), \(\sin x\) is at most \(x\).
  - The integrand is at least \(\frac{1}{x}\).
  - The integral of \(\frac{1}{x}\) from 0 to 1 diverges, so this integral diverges.
verification:
  checkable: false
  reason: The result is divergence, and there is no finite value to compare.
:::

::: exercise
id: l3-improper-integrals.i16
tier: standard
topics: [improper-integrals, integration-by-parts]
statement: |
  Does \(\int_0^{\infty}x^2 e^{-x}\,dx\) converge? If it does, compute its value.
solution: |
  Integrate by parts twice. For each integer \(n\ge 0\), \(\int_0^{\infty}x^n e^{-x}\,dx=n!\), so the case \(n=2\) equals 2.

  Differentiating \(x^2\) gives
  \[
  \begin{aligned}
  &\int_0^R x^2 e^{-x}\,dx\\
  &=\left[-x^2 e^{-x}\right]_0^R+2\int_0^R xe^{-x}\,dx\\
  &=-R^2 e^{-R}+2\int_0^R xe^{-x}\,dx.
  \end{aligned}
  \]
  The boundary term \(R^2 e^{-R}\) tends to 0. The remaining integral tends to 1, because
  \[
  \int_0^R xe^{-x}\,dx=-Re^{-R}+1-e^{-R}.
  \]
  The original integral converges and equals 2.
provenance: written-for-site
steps:
  - Integrate by parts, differentiating \(x^2\).
  - The boundary term \(R^2 e^{-R}\) tends to 0.
  - The remaining integral of \(xe^{-x}\) equals 1, so the value is 2.
verification:
  checks:
    - expr: integrate(x**2*exp(-x), (x, 0, oo))
      expected: "2"
:::

::: exercise
id: l3-improper-integrals.i17
tier: standard
topics: [improper-integrals, substitution]
statement: |
  Does \(\int_2^{\infty}\frac{1}{x\ln x}\,dx\) converge? If it does, compute its value.
solution: |
  An antiderivative is \(\ln(\ln x)\), from the substitution \(u=\ln x\).

  \[
  \left[\ln(\ln x)\right]_2^R=\ln(\ln R)-\ln(\ln 2),
  \]
  which tends to \(\infty\) as \(R\to\infty\). The integral diverges.

  The integral \(\int_2^{\infty}\frac{1}{x(\ln x)^2}\,dx\) converges.
provenance: written-for-site
steps:
  - An antiderivative is \(\ln(\ln x)\).
  - The evaluation from 2 to \(R\) tends to infinity, so the integral diverges.
verification:
  checkable: false
  reason: The result is divergence, and there is no finite value to compare.
:::

::: exercise
id: l3-improper-integrals.both-endpoints
tier: standard
topics: [improper-integrals]
statement: |
  Does \(\int_0^1 \frac{1}{\sqrt{t(1-t)}}\,dt\) converge? If it does, compute its value.
solution: |
  The integrand is unbounded at both endpoints, \(t=0\) and \(t=1\). Split the integral at \(\frac{1}{2}\) and take a limit at each singular end:

  - Near \(0\) the integrand behaves like \(t^{-1/2}\).
  - Near \(1\) it behaves like \((1-t)^{-1/2}\).

  Both powers \(\frac{1}{2}\) are less than \(1\), so both ends converge.

  An antiderivative on \((0,1)\) is \(2\arcsin\sqrt{t}\). Differentiating gives \(2\cdot\frac{1}{\sqrt{1-t}}\cdot\frac{1}{2\sqrt{t}}=\frac{1}{\sqrt{t(1-t)}}\). For \(0<\varepsilon<\frac{1}{2}\),
  \[
  \begin{aligned}
  &\int_{\varepsilon}^{1/2}\frac{dt}{\sqrt{t(1-t)}}\\
  &=2\arcsin\frac{1}{\sqrt{2}}-2\arcsin\sqrt{\varepsilon}\\
  &=\frac{\pi}{2}-2\arcsin\sqrt{\varepsilon},
  \end{aligned}
  \]
  which tends to \(\frac{\pi}{2}\) as \(\varepsilon\to 0^{+}\). On the other half,
  \[
  \int_{1/2}^{1-\varepsilon}\frac{dt}{\sqrt{t(1-t)}}=2\arcsin\sqrt{1-\varepsilon}-\frac{\pi}{2},
  \]
  which tends to \(\pi-\frac{\pi}{2}=\frac{\pi}{2}\) as \(\varepsilon\to 0^{+}\). Both halves converge, so the integral converges and equals \(\pi\).

  The substitution \(t=\frac{1+\sin x}{2}\) gives the same value: the integrand becomes \(1\) on \(-\frac{\pi}{2}\le x\le\frac{\pi}{2}\).
provenance: written-for-site
steps:
  - The integrand is unbounded at both endpoints, so split at \(\frac{1}{2}\).
  - An antiderivative is \(2\arcsin\sqrt{t}\).
  - Each half tends to \(\frac{\pi}{2}\).
  - The integral converges and equals \(\pi\).
verification:
  checks:
    - expr: integrate(1/sqrt(t*(1 - t)), (t, 0, 1))
      expected: "pi"
:::

::: exercise
id: l3-improper-integrals.i18
tier: exam
topics: [improper-integrals, substitution]
statement: |
  Does \(\int_0^{\infty}\frac{1}{\sqrt{x}\,(1+x)}\,dx\) converge? If it does, compute its value.
solution: |
  The integral is improper at 0 and at infinity:

  - Near 0 the integrand behaves like \(x^{-1/2}\). The power \(\frac{1}{2}\) is less than 1, so that end converges.
  - At infinity the integrand behaves like \(x^{-3/2}\). The power \(\frac{3}{2}\) is greater than 1, so that end converges.

  Substitute \(u=\sqrt{x}\), so \(x=u^2\) and \(dx=2u\,du\). For \(u>0\) the integrand simplifies to \(\frac{2}{1+u^2}\):
  \[
  \begin{aligned}
  \int_0^{\infty}\frac{2}{1+u^2}\,du&=2\left[\arctan u\right]_0^{\infty}\\
  &=2\cdot\frac{\pi}{2}\\
  &=\pi.
  \end{aligned}
  \]
  The integral converges and equals \(\pi\).
provenance: written-for-site
steps:
  - The end at 0 behaves like \(x^{-1/2}\) and converges.
  - The end at infinity behaves like \(x^{-3/2}\) and converges.
  - The substitution \(u=\sqrt{x}\) produces \(\frac{2}{1+u^2}\).
  - The integral equals \(\pi\).
verification:
  checks:
    - expr: integrate(1/(sqrt(x)*(1+x)), (x, 0, oo))
      expected: "pi"
:::

::: exercise
id: l3-improper-integrals.midterm-mock-1-ex6.4
statement: |
  Compute \(\displaystyle\int_{-\infty}^{\infty}\frac{dx}{1+x^2}\).
solution: |
  An antiderivative is \(\arctan x\). The two-sided limit is
  \[
  \begin{aligned}
  &\lim_{b\to+\infty}\arctan b-\lim_{a\to-\infty}\arctan a\\
  &=\frac{\pi}{2}-(-\frac{\pi}{2})=\pi.
  \end{aligned}
  \]
steps:
  - Antiderivative \(\arctan x\).
  - Value \(\pi\).
verification:
  checks:
    - expr: integrate(1/(1+x**2), (x, -oo, oo))
      expected: pi
    - expr: atan(oo) - atan(-oo)
      expected: pi
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "6.4"
  points: 1
:::

::: exercise
id: l3-improper-integrals.midterm-predicted-a-ex5.4
number: "5.4"
statement: |
  Compute \(\displaystyle\int_0^{\infty} \frac{dx}{(1 + x)^2}\).
tier: exam
topics:
  - improper-integrals
solution: |
  An antiderivative is \(-\dfrac{1}{1 + x}\). Then
  \[
  \lim_{b \to +\infty} \Bigl[-\frac{1}{1 + b} + 1\Bigr] = 1.
  \]
  The integral converges to 1.
provenance: written-for-site
steps:
  - Write the limit of -1/(1 + x) from 0 to b.
  - Conclude convergence to 1.
verification:
  checks:
    - expr: integrate(1/(1 + x)**2, (x, 0, oo))
      expected: "1"
:::

::: exercise
id: l3-improper-integrals.midterm-predicted-b-ex4.5
number: "4.5"
statement: |
  Compute \(\displaystyle\int_0^{\infty} e^{-2x}\, dx\).
tier: exam
topics:
  - improper-integrals
solution: |
  \[
  \lim_{b \to +\infty} \Bigl[-\frac12 e^{-2x}\Bigr]_0^{b} = \frac12.
  \]
  The integral converges to \(\frac12\).
provenance: written-for-site
steps:
  - Write the limit of the antiderivative.
  - Conclude 1/2.
verification:
  checks:
    - expr: integrate(exp(-2*x), (x, 0, oo))
      expected: 1/2
:::

::: exercise
id: l3-improper-integrals.ex-gamma-recursion
tier: standard
topics: [improper-integrals, integration-by-parts]
statement: |
  For an integer \(n\ge 0\), let \(I_n=\int_0^{\infty}s^n e^{-s}\,ds\).

  - (a) Show that \(I_n=n\,I_{n-1}\) for \(n\ge 1\).
  - (b) Compute \(I_0\) and deduce \(I_4\).
  - (c) Compute \(\int_0^{\infty}s^3e^{-2s}\,ds\).
solution: |
  (a) For \(R>0\) integrate by parts with \(u=s^n\) and \(v'=e^{-s}\), so \(v=-e^{-s}\):
  \[
  \begin{aligned}
  &\int_0^R s^n e^{-s}\,ds\\
  &=\bigl[-s^n e^{-s}\bigr]_0^R+n\int_0^R s^{n-1}e^{-s}\,ds\\
  &=-R^ne^{-R}+n\int_0^R s^{n-1}e^{-s}\,ds.
  \end{aligned}
  \]
  The boundary term at \(0\) is \(0\) because \(n\ge 1\). As \(R\to\infty\), \(R^ne^{-R}\) tends to \(0\), because the exponential grows faster than every power. If \(I_{n-1}\) converges, the right side tends to \(n\,I_{n-1}\), so \(I_n\) converges and \(I_n=n\,I_{n-1}\). Starting from the convergent \(I_0\) of part (b), induction gives convergence for every \(n\).

  (b) The cutoff integral is \(\int_0^R e^{-s}\,ds=1-e^{-R}\), which tends to \(1\). So \(I_0=1\). The recursion gives
  \[
  \begin{aligned}
  I_1&=1,\\
  I_2&=2,\\
  I_3&=6,\\
  I_4&=4\cdot 6=24.
  \end{aligned}
  \]
  In general \(I_n=n!\).

  (c) Substitute \(u=2s\), so \(s=\frac{u}{2}\) and \(ds=\frac{du}{2}\). The limits \(0\) and \(\infty\) stay the same:
  \[
  \begin{aligned}
  &\int_0^{\infty}s^3e^{-2s}\,ds\\
  &=\int_0^{\infty}\frac{u^3}{8}\,e^{-u}\,\frac{du}{2}\\
  &=\frac{1}{16}\,I_3\\
  &=\frac{6}{16}=\frac{3}{8}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Integrate by parts with \(u=s^n\); the boundary term \(R^ne^{-R}\) tends to \(0\), so \(I_n=nI_{n-1}\).
  - \(I_0=1\), hence \(I_4=24\).
  - Substitute \(u=2s\) to get \(\frac{1}{16}I_3=\frac{3}{8}\).
verification:
  checks:
    - expr: integrate(exp(-s), (s, 0, oo))
      expected: "1"
    - expr: integrate(s**4*exp(-s), (s, 0, oo))
      expected: "24"
    - expr: integrate(s**3*exp(-2*s), (s, 0, oo))
      expected: "3/8"
:::

::: exercise
id: l3-improper-integrals.ex-improper-log-compare
tier: exam
topics: [improper-integrals, integration-by-parts]
statement: |
  - (a) Does \(\int_0^1\frac{\ln x}{x^{1/3}}\,dx\) converge? If it does, compute its value.
  - (b) Does \(\int_0^1\frac{1}{x\ln x}\,dx\) converge? Check both endpoints.
solution: |
  (a) The integrand is unbounded at \(0\). Integrate by parts with \(u=\ln x\) and \(v'=x^{-1/3}\), so \(v=\frac{3}{2}x^{2/3}\):
  \[
  \begin{aligned}
  &\int\frac{\ln x}{x^{1/3}}\,dx\\
  &=\frac{3}{2}x^{2/3}\ln x-\frac{3}{2}\int x^{-1/3}\,dx\\
  &=\frac{3}{2}x^{2/3}\ln x-\frac{9}{4}x^{2/3}=:F(x).
  \end{aligned}
  \]
  As \(\varepsilon\to 0^{+}\), \(\varepsilon^{2/3}\ln\varepsilon\to 0\) and \(\varepsilon^{2/3}\to 0\), so \(F(\varepsilon)\to 0\). Also \(F(1)=-\frac{9}{4}\). The integral converges and equals \(-\frac{9}{4}\).

  (b) The integrand \(\frac{1}{x\ln x}\) is unbounded at \(0\) and at \(1\), where \(\ln 1=0\). Split at \(\frac{1}{2}\). On \((0,1)\), \(\ln x<0\), and the substitution \(t=-\ln x\) shows that \(G(x)=\ln(-\ln x)\) is an antiderivative:
  \[
  G'(x)=\frac{1}{-\ln x}\cdot\bigl(-\frac{1}{x}\bigr)=\frac{1}{x\ln x}.
  \]

  - At the left end, \(\int_\varepsilon^{1/2}\frac{dx}{x\ln x}=G(\tfrac{1}{2})-G(\varepsilon)\). As \(\varepsilon\to 0^{+}\), \(-\ln\varepsilon\to+\infty\), so \(G(\varepsilon)\to+\infty\) and the integral tends to \(-\infty\).
  - At the right end, \(\int_{1/2}^{1-\delta}\frac{dx}{x\ln x}=G(1-\delta)-G(\tfrac{1}{2})\). As \(\delta\to 0^{+}\), \(-\ln(1-\delta)\to 0^{+}\), so \(G(1-\delta)\to-\infty\) and the integral tends to \(-\infty\).

  Both halves diverge, so the integral diverges. Each endpoint alone is enough to make it diverge.
provenance: written-for-site
steps:
  - (a) Parts with \(u=\ln x\) give \(F(x)=\frac{3}{2}x^{2/3}\ln x-\frac{9}{4}x^{2/3}\), with \(F(0^{+})=0\).
  - (a) The integral converges to \(-\frac{9}{4}\).
  - (b) An antiderivative on \((0,1)\) is \(\ln(-\ln x)\).
  - (b) It tends to \(+\infty\) at \(0^{+}\) and to \(-\infty\) at \(1^{-}\), so both ends diverge.
verification:
  checks:
    - expr: diff(3*x**Rational(2,3)*log(x)/2 - 9*x**Rational(2,3)/4, x)
      expected: "log(x)/x**Rational(1,3)"
    - expr: limit(3*x**Rational(2,3)*log(x)/2 - 9*x**Rational(2,3)/4, x, 0, dir='+')
      expected: "0"
    - expr: (3*x**Rational(2,3)*log(x)/2 - 9*x**Rational(2,3)/4).subs(x, 1)
      expected: "-9/4"
    - expr: diff(log(-log(x)), x)
      expected: "1/(x*log(x))"
    - expr: limit(1/log(-log(x)), x, 0, dir='+')
      expected: "0"
    - expr: limit(1/log(-log(x)), x, 1, dir='-')
      expected: "0"
:::

::: exercise
id: l3-improper-integrals.ex-improper-rational-lines
tier: standard
topics: [improper-integrals, partial-fractions]
statement: |
  - (a) Does \(\int_{-\infty}^{\infty}\frac{dx}{x^2+2x+5}\) converge? If it does, compute its value.
  - (b) Does \(\int_0^{\infty}\frac{dx}{(x+1)(x+2)}\) converge? If it does, compute its value.
solution: |
  (a) Complete the square: \(x^2+2x+5=(x+1)^2+4\). An antiderivative is \(\frac{1}{2}\arctan\frac{x+1}{2}\). Split at \(0\) and take each infinite end as its own limit. As \(R\to+\infty\), \(\frac{1}{2}\arctan\frac{R+1}{2}\to\frac{\pi}{4}\). As \(R\to-\infty\), \(\frac{1}{2}\arctan\frac{R+1}{2}\to-\frac{\pi}{4}\). Both ends converge, so the integral converges and
  \[
  \int_{-\infty}^{\infty}\frac{dx}{x^2+2x+5}=\frac{\pi}{4}-\left(-\frac{\pi}{4}\right)=\frac{\pi}{2}.
  \]

  (b) Decompose \(\frac{1}{(x+1)(x+2)}=\frac{1}{x+1}-\frac{1}{x+2}\). Keep the two logarithms together before the limit:
  \[
  \begin{aligned}
  &\int_0^R\left(\frac{1}{x+1}-\frac{1}{x+2}\right)dx\\
  &=\left[\ln\frac{x+1}{x+2}\right]_0^R\\
  &=\ln\frac{R+1}{R+2}-\ln\frac{1}{2}.
  \end{aligned}
  \]
  As \(R\to\infty\), \(\frac{R+1}{R+2}\to 1\), so \(\ln\frac{R+1}{R+2}\to 0\). The integral converges and equals \(\ln 2\).
provenance: written-for-site
steps:
  - (a) Complete the square, \(\frac{1}{2}\arctan\frac{x+1}{2}\) has limits \(\pm\frac{\pi}{4}\), so the value is \(\frac{\pi}{2}\).
  - (b) Decompose into \(\frac{1}{x+1}-\frac{1}{x+2}\) and combine the logarithms.
  - (b) The value is \(\ln 2\).
verification:
  checks:
    - expr: diff(atan((x + 1)/2)/2, x)
      expected: "1/(x**2 + 2*x + 5)"
    - expr: limit(atan((x + 1)/2)/2, x, oo) - limit(atan((x + 1)/2)/2, x, -oo)
      expected: "pi/2"
    - expr: limit(log((x + 1)/(x + 2)), x, oo) - log(Rational(1, 2))
      expected: "log(2)"
    - expr: diff(log((x + 1)/(x + 2)), x)
      expected: "1/((x + 1)*(x + 2))"
:::
