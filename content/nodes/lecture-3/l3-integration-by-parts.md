---
id: l3-integration-by-parts
lecture: 3
order: 7
title: Integration by parts
prerequisites: [l3-fundamental-theorem]
sources:
  - { source: handout, section: "8.4", page: 176 }
  - { source: lecture-notes-3, page: 3 }
  - { source: midterm-app }
  - { source: midterm-mock-1, page: 1 }
  - { source: midterm-2022, page: 1 }
  - { source: midterm-2024, page: 1 }
  - { source: midterm-2025, page: 1 }
  - { source: midterm-2026-key, page: 4 }
examWeight: high
examWeightNote: Every midterm has a set of five to seven integrals.
notation: |
  The lecture writes \(\int f g'\) and \([fg]_a^b\). The handout writes \(\int u\,dv = uv - \int v\,du\). \(f'\) and \(\frac{d}{dx}\) are the same derivative.
status: reviewed
---

::: section
title: Integration by parts
:::

::: formal-statement
kind: method
title: Integration by parts
source:
  source: lecture-notes-3
  page: 3
text: |
  From \((fg)' = f'g + fg'\),
  \[
  \begin{aligned}
  &\int_a^b f(x)\,g'(x)\,dx\\
  &=\bigl[f g\bigr]_a^b - \int_a^b f'(x)\,g(x)\,dx.
  \end{aligned}
  \]
  Both integrals carry the limits \(a\) and \(b\).
:::

::: plain-explanation
text: |
  Choose \(u\) as the factor that becomes simpler when differentiated, and choose \(dv\) as the factor you can integrate. Two common cases:

  - For a product of a polynomial and \(\ln\), \(u\) is the logarithm.
  - For a product of a polynomial and \(\sin\), or of a polynomial and an exponential, \(u\) is the polynomial.
:::

::: key-points
text: |
  - Integration by parts turns \(\int_a^b f g'\,dx\) into \(\bigl[fg\bigr]_a^b - \int_a^b f'g\,dx\), and both integrals carry the limits \(a\) and \(b\).
  - Choose \(u\) as the factor that becomes simpler when differentiated and \(dv\) as the factor you can integrate.
  - With a polynomial and \(\ln\), \(u\) is the logarithm. With a polynomial and \(\sin\) or an exponential, \(u\) is the polynomial.
:::

::: guided-example
title: A polynomial times an exponential
problem: |
  Compute \(\int_0^1 x e^x\,dx\) by parts.
steps:
  - |
    Set \(u = x\) and \(dv = e^x\,dx\). Then \(du = dx\) and \(v = e^x\).
  - |
    The **boundary term** is \(\bigl[x e^x\bigr]_0^1\). Its value is \(e\).
  - |
    Subtract \(\int_0^1 e^x\,dx\). That integral equals \(e - 1\).
  - |
    The value of \(\int_0^1 x e^x\,dx\) is \(e - (e - 1) = 1\).
:::

::: concept-question
id: l3-integration-by-parts.q-b75125d4
question: |
  Compute \(\int_{0}^{1} t(1 + t)^{1/3}\, dt\).
options:
  - text: |
      \(\frac{9}{28} + \frac{3 \cdot 2^{1/3}}{14}\)
    correct: true
  - text: |
      \(\frac{3 \cdot 2^{1/3}}{14}\)
  - text: |
      \(\frac{9}{28}\)
  - text: |
      \(\frac{3}{4} \cdot 2^{4/3} - \frac{3}{7}\)
explanation: |
  Take \(u = t\) and \(dv = (1 + t)^{1/3}\, dt\), so \(v = \frac{3}{4}(1 + t)^{4/3}\). The integral simplifies as follows.

  \[
  \begin{aligned}
  &\int_{0}^{1} t(1 + t)^{1/3}\, dt\\
  &=\bigl[\frac{3}{4} t (1 + t)^{4/3}\bigr]_{0}^{1}\\
  &\quad - \frac{3}{4}\int_{0}^{1} (1 + t)^{4/3}\, dt\\
  &=\frac{9}{28} + \frac{3 \cdot 2^{1/3}}{14}.
  \end{aligned}
  \]
:::

::: concept-question
id: l3-integration-by-parts.q-62ffe9da
question: |
  Compute \(\int_{0}^{1} t^{2} \sin t\, dt\).
options:
  - text: |
      \(2\sin 1 + \cos 1 - 2\)
    correct: true
  - text: |
      \(2\sin 1 - \cos 1\)
  - text: |
      \(\sin 1 - 2\cos 1\)
  - text: |
      \(2 - 2\cos 1\)
explanation: |
  Integrating by parts twice gives the antiderivative
  \[
  -t^{2}\cos t + 2t\sin t + 2\cos t.
  \]
  Evaluating from 0 to 1 produces
  \[
  2\sin 1 + \cos 1 - 2.
  \]
:::

::: exercise
id: l3-integration-by-parts.d2
tier: basic
topics: [integration-by-parts]
statement: |
  Compute \(\int_0^{\pi} x\sin x\,dx\).
solution: |
  Take \(u=x\) and \(v'=\sin x\), so \(v=-\cos x\).

  \[
  \left[-x\cos x\right]_0^{\pi}+\int_0^{\pi}\cos x\,dx=\pi.
  \]

  The boundary term at \(\pi\) is \(\pi\), and the boundary term at \(0\) is \(0\). The cosine integral equals \(0\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x*sin(x), (x, 0, pi))
      expected: "pi"
:::

::: section
title: Indefinite form and logarithms
:::

::: formal-statement
kind: method
title: Indefinite form
source:
  source: handout
  section: "8.4"
  page: 177
text: |
  The indefinite formula is
  \[
  \int u\,dv = uv - \int v\,du.
  \]
:::

::: worked-example
title: A polynomial times a logarithm
problem: |
  Find \(\int x \ln x\,dx\).
solution: |
  Set \(u = \ln x\). Set \(dv = x\,dx\). Then \(du = \frac{1}{x}\,dx\) and \(v = \frac{x^2}{2}\).

  \[
  \begin{aligned}
  uv - \int v\,du &= \frac{x^2}{2}\ln x - \int \frac{x^2}{2}\cdot\frac{1}{x}\,dx\\
  &= \frac{x^2}{2}\ln x - \int \frac{x}{2}\,dx\\
  &= \frac{x^2}{2}\ln x - \frac{x^2}{4} + C.
  \end{aligned}
  \]
:::

::: worked-example
title: The logarithm alone
problem: |
  Find \(\int \ln x\,dx\).
solution: |
  Write \(\int \ln x\,dx = \int \ln x \cdot 1\,dx\). Set \(u = \ln x\) and \(dv = dx\). Then \(du = \frac{1}{x}\,dx\) and \(v = x\).

  \[
  \begin{aligned}
  &x\ln x - \int x\cdot\frac{1}{x}\,dx\\
  &= x\ln x - \int 1\,dx\\
  &= x\ln x - x + C.
  \end{aligned}
  \]
:::

::: trap
text: |
  An antiderivative of \(\ln x\) is \(x\ln x - x\). Compare the derivatives of \(x\ln x - x\) and \(x\ln x + x\):
  \[
  \begin{aligned}
  (x\ln x - x)' &= \ln x + 1 - 1\\
  &= \ln x,\\
  (x\ln x + x)' &= \ln x + 1 + 1\\
  &= \ln x + 2.
  \end{aligned}
  \]
  The second derivative fails to equal \(\ln x\).
:::

::: trap
text: |
  An antiderivative of \(-\ln x\) is \(-x\ln x + x\). Compare the derivatives of \(-x\ln x + x\) and \(-x\ln x - x\):
  \[
  \begin{aligned}
  (-x\ln x + x)' &= -\ln x - 1 + 1\\
  &= -\ln x,\\
  (-x\ln x - x)' &= -\ln x - 1 - 1\\
  &= -\ln x - 2.
  \end{aligned}
  \]
  The second derivative fails to equal \(-\ln x\).
:::

::: key-points
text: |
  - The indefinite form is \(\int u\,dv = uv - \int v\,du\).
  - For \(\int \ln x\,dx\), write \(\ln x\cdot 1\) with \(u=\ln x\) and \(dv=dx\). The result is \(x\ln x - x + C\).
  - The usual slip gives \(x\ln x + x\) as an antiderivative of \(\ln x\). Its derivative is \(\ln x + 2\), so the correct antiderivative is \(x\ln x - x\), with derivative \(\ln x\).
:::

::: going-deeper
title: When parts returns the integral
text: |
  When integration by parts returns the original integral, **solve for that integral**. For \(\int e^x \sin x\,dx\), the antiderivative is
  \[
  \frac{e^x(\sin x - \cos x)}{2} + C.
  \]
:::

::: concept-question
id: l3-integration-by-parts.q-eaeb9dac
question: |
  Compute \(\int_{0}^{1} \arctan t\, dt\) by parts.
options:
  - text: |
      \(\frac{\pi}{4} - \frac{\ln 2}{2}\)
    correct: true
  - text: |
      \(\frac{\pi}{4} + \frac{\ln 2}{2}\)
  - text: |
      \(\frac{\pi}{4} - \ln 2\)
  - text: |
      \(\frac{\ln 2}{2}\)
explanation: |
  Take \(u = \arctan t\) and \(dv = dt\). The integral equals
  \[
  \begin{aligned}
  \int_{0}^{1} \arctan t\, dt \\
  &= \bigl[t \arctan t\bigr]_{0}^{1}\\
  &\quad - \int_{0}^{1} \frac{t}{1 + t^{2}}\, dt\\
  &= \frac{\pi}{4} - \frac{\ln 2}{2}.
  \end{aligned}
  \]
:::

::: exercise
id: l3-integration-by-parts.basic-x-ln
tier: basic
topics: [integration-by-parts]
statement: |
  By parts, find \(\int x \ln x\,dx\).
solution: |
  Set \(u = \ln x\) and \(dv = x\,dx\). Then \(du = \frac{1}{x}\,dx\) and \(v = \frac{x^2}{2}\).

  \[
  \begin{aligned}
  \int x \ln x\,dx &= \frac{x^2}{2}\ln x - \int \frac{x}{2}\,dx\\
  &= \frac{x^2}{2}\ln x - \frac{x^2}{4} + C.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - |
    Set \(u = \ln x\) and \(dv = x\,dx\).
  - |
    Then \(du = \frac{1}{x}\,dx\) and \(v = \frac{x^2}{2}\).
  - |
    Subtract \(\int \frac{x}{2}\,dx\). An antiderivative is \(\frac{x^2}{2}\ln x - \frac{x^2}{4}\).
verification:
  checks:
    - expr: diff(x**2*log(x)/2 - x**2/4, x)
      expected: log(x)*x
:::

::: exercise
id: l3-integration-by-parts.standard-ln
tier: standard
topics: [integration-by-parts]
statement: |
  By parts, find \(\int \ln x\,dx\).
solution: |
  Write \(\int \ln x\,dx = \int \ln x \cdot 1\,dx\). Set \(u = \ln x\) and \(dv = dx\). Then \(v = x\) and \(du = \frac{1}{x}\,dx\).

  \[
  \begin{aligned}
  \int \ln x\,dx &= x\ln x - \int 1\,dx\\
  &= x\ln x - x + C.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - |
    Write the integrand as \(\ln x \cdot 1\), with \(u = \ln x\) and \(dv = dx\).
  - |
    Then \(v = x\) and \(du = \frac{1}{x}\,dx\).
  - |
    The antiderivative is \(x\ln x - x\).
verification:
  checks:
    - expr: diff(x*log(x) - x, x)
      expected: log(x)
:::

::: sheet-item
id: l3-integration-by-parts.sheet-definite
category: formula
text: |
  \[
  \begin{aligned}
  &\int_a^b f(x)\,g'(x)\,dx\\
  &= \bigl[fg\bigr]_a^b - \int_a^b f'(x)\,g(x)\,dx.
  \end{aligned}
  \]
  Both integrals carry the limits.
:::

::: sheet-item
id: l3-integration-by-parts.sheet-ln
category: formula
text: |
  \(\int \ln x\,dx = x\ln x - x + C\).
:::

::: sheet-item
id: l3-integration-by-parts.sheet-log-factor
category: recognition
text: |
  In a product with a logarithm, the factor to differentiate is the logarithm.
:::

::: exercise
id: l3-integration-by-parts.m6-2
tier: standard
topics: [integration-by-parts]
number: "Mock midterm, Ex. 6.2"
statement: |
  Compute \(\int_0^1 t(1+t)^{1/3}\,dt\) by integrating by parts.
solution: |
  Differentiate the factor \(t\). Take \(u=t\) and \(v'=(1+t)^{1/3}\), so \(v=\frac{3}{4}(1+t)^{4/3}\).

  \[
  \begin{aligned}
  &\int_0^1 t(1+t)^{1/3}\,dt\\
  &=\left[\frac{3}{4}t(1+t)^{4/3}\right]_0^1\\
  &\quad-\frac{3}{4}\int_0^1(1+t)^{4/3}\,dt.
  \end{aligned}
  \]

  The boundary term equals \(\frac{3}{4}\cdot 2^{4/3}\). The remaining integral equals \(\frac{9}{28}\left(2^{7/3}-1\right)\).

  The value is \(\frac{3}{4}\cdot 2^{4/3}-\frac{9}{28}\left(2^{7/3}-1\right)\). Since \(2^{4/3}=2\cdot 2^{1/3}\) and \(2^{7/3}=4\cdot 2^{1/3}\), this equals
  \[
  \begin{aligned}
  &2^{1/3}\left(\frac{3}{2}-\frac{9}{7}\right)+\frac{9}{28}\\
  &=\frac{3}{14}\,2^{1/3}+\frac{9}{28}.
  \end{aligned}
  \]

  The same value is \(\frac{3}{28}\left(2^{4/3}+3\right)\). The substitution \(u=1+t\) rewrites the integral as
  \[
  \left[\frac{3}{7}u^{7/3}-\frac{3}{4}u^{4/3}\right]_1^2.
  \]
  The term at \(2\) is \(\frac{3}{14}\,2^{1/3}\), and subtracting the term at \(1\) adds \(\frac{9}{28}\).
provenance: written-for-site
steps:
  - Take \(u=t\) and \(v'=(1+t)^{1/3}\).
  - The boundary term is \(\frac{3}{4}\cdot 2^{4/3}\).
  - Subtract \(\frac{9}{28}\left(2^{7/3}-1\right)\).
  - Simplify to \(\frac{3}{14}\,2^{1/3}+\frac{9}{28}\).
verification:
  checks:
    - expr: integrate(t*(1+t)**(Rational(1,3)), (t, 0, 1))
      expected: "3*2**(Rational(1,3))/14 + 9/28"
:::

::: exercise
id: l3-integration-by-parts.d1
tier: basic
topics: [integration-by-parts]
statement: |
  Compute \(\int_0^1 xe^x\,dx\).
solution: |
  Take \(u=x\) and \(v'=e^x\).

  \[
  \left[xe^x\right]_0^1-\int_0^1 e^x\,dx=e-(e-1)=1.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x*exp(x), (x, 0, 1))
      expected: "1"
:::

::: exercise
id: l3-integration-by-parts.d3
tier: basic
topics: [integration-by-parts]
statement: |
  Compute \(\int_1^e \ln x\,dx\).
solution: |
  Write \(\ln x\) as \(1\cdot\ln x\). Take \(u=\ln x\) and \(v'=1\).

  \[
  \left[x\ln x\right]_1^e-\int_1^e 1\,dx=e-(e-1)=1.
  \]

  An antiderivative of \(\ln x\) is \(x\ln x-x\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(log(x), (x, 1, exp(1)))
      expected: "1"
:::

::: exercise
id: l3-integration-by-parts.d4
tier: standard
topics: [integration-by-parts]
statement: |
  Compute \(\int_1^e x\ln x\,dx\).
solution: |
  Differentiate \(\ln x\) and integrate \(x\).

  \[
  \begin{aligned}
  &\left[\frac{x^2}{2}\ln x\right]_1^e-\int_1^e \frac{x}{2}\,dx\\
  &=\frac{e^2}{2}-\left[\frac{x^2}{4}\right]_1^e\\
  &=\frac{e^2}{2}-\frac{e^2-1}{4}\\
  &=\frac{e^2+1}{4}.
  \end{aligned}
  \]

  The boundary term at \(x=1\) is \(0\).
provenance: written-for-site
steps:
  - Differentiate \(\ln x\) and integrate \(x\).
  - The boundary term at \(e\) is \(\frac{e^2}{2}\).
  - Subtract \(\frac{e^2-1}{4}\).
verification:
  checks:
    - expr: integrate(x*log(x), (x, 1, exp(1)))
      expected: "(exp(2)+1)/4"
:::

::: exercise
id: l3-integration-by-parts.d5
tier: standard
topics: [integration-by-parts]
statement: |
  Compute \(\int_0^1 x^2 e^x\,dx\).
solution: |
  Integrate by parts twice.

  1. Take \(u=x^2\) and \(v'=e^x\). Then \(\int x^2 e^x\,dx=x^2 e^x-2\int x e^x\,dx\).
  2. For the new integral, take \(u=x\) and \(v'=e^x\). Then \(\int x e^x\,dx=(x-1)e^x\), and \(x^2 e^x-2(x-1)e^x=(x^2-2x+2)e^x\).

  \[
  \left[(x^2-2x+2)e^x\right]_0^1=e-2.
  \]
provenance: written-for-site
steps:
  - Integrate by parts with \(u=x^2\).
  - Integrate \(xe^x\) by parts.
  - Evaluate \((x^2-2x+2)e^x\) from \(0\) to \(1\).
verification:
  checks:
    - expr: integrate(x**2*exp(x), (x, 0, 1))
      expected: "exp(1)-2"
:::

::: exercise
id: l3-integration-by-parts.d6
tier: standard
topics: [integration-by-parts]
statement: |
  Compute \(\int_0^1 \arctan x\,dx\).
solution: |
  Take \(u=\arctan x\) and \(v'=1\). The remaining integrand is a quotient of a derivative and its inside function.

  \[
  \begin{aligned}
  &\left[x\arctan x\right]_0^1-\int_0^1\frac{x}{1+x^2}\,dx\\
  &=\frac{\pi}{4}-\left[\frac{1}{2}\ln(1+x^2)\right]_0^1\\
  &=\frac{\pi}{4}-\frac{\ln 2}{2}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Take \(u=\arctan x\) and \(v'=1\).
  - The boundary term is \(\frac{\pi}{4}\).
  - Subtract \(\frac{1}{2}\ln 2\).
verification:
  checks:
    - expr: integrate(atan(x), (x, 0, 1))
      expected: "pi/4 - log(2)/2"
:::

::: exercise
id: l3-integration-by-parts.d7
tier: exam
topics: [integration-by-parts]
statement: |
  Compute \(\int_0^{\pi/2} e^x\cos x\,dx\).
solution: |
  Let \(I=\int_0^{\pi/2} e^x\cos x\,dx\). Integrate by parts twice, and integrate \(e^x\) both times.

  With \(u=\cos x\) and \(v'=e^x\),
  \[
  \begin{aligned}
  I&=\left[e^x\cos x\right]_0^{\pi/2}+\int_0^{\pi/2} e^x\sin x\,dx\\
  &=-1+\int_0^{\pi/2} e^x\sin x\,dx.
  \end{aligned}
  \]

  With \(u=\sin x\) and \(v'=e^x\),
  \[
  \begin{aligned}
  &\int_0^{\pi/2} e^x\sin x\,dx\\
  &=\left[e^x\sin x\right]_0^{\pi/2}-I\\
  &=e^{\pi/2}-I.
  \end{aligned}
  \]

  Hence \(I=-1+e^{\pi/2}-I\), so \(I=\dfrac{e^{\pi/2}-1}{2}\).

  Both steps integrate \(e^x\). Differentiating \(e^x\) on the second step returns the identity \(I=I\).
provenance: written-for-site
steps:
  - Set \(I\) and integrate by parts with \(u=\cos x\).
  - The first boundary term is \(-1\).
  - Integrate the sine integral by parts, still with \(v'=e^x\).
  - Solve \(I=-1+e^{\pi/2}-I\).
verification:
  checks:
    - expr: integrate(exp(x)*cos(x), (x, 0, pi/2))
      expected: "(exp(pi/2)-1)/2"
:::

::: exercise
id: l3-integration-by-parts.d8
tier: standard
topics: [integration-by-parts]
statement: |
  Compute \(\int_1^e (\ln x)^2\,dx\).
solution: |
  Take \(u=(\ln x)^2\) and \(v'=1\). The remaining integral is a multiple of \(\int\ln x\,dx\).

  \[
  \begin{aligned}
  &\left[x(\ln x)^2\right]_1^e-2\int_1^e\ln x\,dx\\
  &=e-2\int_1^e\ln x\,dx.
  \end{aligned}
  \]

  An antiderivative of \(\ln x\) is \(x\ln x-x\), and \(\left[x\ln x-x\right]_1^e=1\). The value is \(e-2\).
provenance: written-for-site
steps:
  - Take \(u=(\ln x)^2\) and \(v'=1\).
  - The boundary term is \(e\).
  - Subtract twice \(\int_1^e\ln x\,dx\), which equals \(1\).
verification:
  checks:
    - expr: integrate(log(x)**2, (x, 1, exp(1)))
      expected: "exp(1)-2"
:::

::: exercise
id: l3-integration-by-parts.d9
tier: basic
topics: [integration-by-parts]
statement: |
  Find an antiderivative of \(x\cos x\).
solution: |
  Take \(u=x\) and \(v'=\cos x\).

  \[
  \begin{aligned}
  \int x\cos x\,dx&=x\sin x-\int\sin x\,dx\\
  &=x\sin x+\cos x+C.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: diff(x*sin(x)+cos(x), x) - x*cos(x)
      expected: "0"
:::

::: exercise
id: l3-integration-by-parts.d10
tier: standard
topics: [integration-by-parts, improper-integrals]
statement: |
  Compute \(\int_0^1 \arcsin x\,dx\).
solution: |
  Take \(u=\arcsin x\) and \(v'=1\).

  \[
  \begin{aligned}
  &\left[x\arcsin x\right]_0^1\\
  &\quad-\int_0^1\frac{x}{\sqrt{1-x^2}}\,dx\\
  &=\frac{\pi}{2}-\int_0^1\frac{x}{\sqrt{1-x^2}}\,dx.
  \end{aligned}
  \]

  The remaining integral is improper at \(x=1\). An antiderivative is \(-\sqrt{1-x^2}\), and it extends continuously to \(x=1\), so the integral converges. Its value on \([0,1]\) is \(1\).

  The original integral equals \(\frac{\pi}{2}-1\).
provenance: written-for-site
steps:
  - Take \(u=\arcsin x\) and \(v'=1\).
  - The boundary term is \(\frac{\pi}{2}\).
  - The remaining integral equals \(1\).
verification:
  checks:
    - expr: integrate(asin(x), (x, 0, 1))
      expected: "pi/2 - 1"
:::

::: exercise
id: l3-integration-by-parts.d11
tier: exam
topics: [integration-by-parts]
statement: |
  Compute \(\int_0^{\pi} e^x\sin x\,dx\).
solution: |
  Integrate by parts twice, and integrate \(e^x\) both times. An antiderivative is \(\frac{e^x(\sin x-\cos x)}{2}\).

  Differentiating that function gives
  \[
  \begin{aligned}
  &\frac{e^x(\sin x-\cos x)+e^x(\cos x+\sin x)}{2}\\
  &=e^x\sin x.
  \end{aligned}
  \]

  \[
  \begin{aligned}
  &\left[\frac{e^x(\sin x-\cos x)}{2}\right]_0^{\pi}\\
  &=\frac{e^{\pi}}{2}-\left(-\frac{1}{2}\right)\\
  &=\frac{e^{\pi}+1}{2}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Integrate by parts twice, keeping \(v'=e^x\).
  - Check that \(\frac{e^x(\sin x-\cos x)}{2}\) differentiates to \(e^x\sin x\).
  - Evaluate from \(0\) to \(\pi\).
verification:
  checks:
    - expr: integrate(exp(x)*sin(x), (x, 0, pi))
      expected: "(exp(pi)+1)/2"
:::

::: exercise
id: l3-integration-by-parts.d12
tier: exam
topics: [integration-by-parts]
statement: |
  Compute \(\int_0^1 x^3 e^{x^2}\,dx\).
solution: |
  Write \(x^3 e^{x^2}=x^2\cdot xe^{x^2}\). Take \(u=x^2\) and \(v'=xe^{x^2}\), so \(v=\frac{1}{2}e^{x^2}\).

  \[
  \begin{aligned}
  &\left[\frac{x^2}{2}e^{x^2}\right]_0^1\\
  &\quad-\int_0^1 xe^{x^2}\,dx\\
  &=\frac{e}{2}-\left[\frac{1}{2}e^{x^2}\right]_0^1\\
  &=\frac{e}{2}-\frac{e-1}{2}\\
  &=\frac{1}{2}.
  \end{aligned}
  \]

  The substitution \(u=x^2\) gives \(\frac{1}{2}\int_0^1 ue^u\,du\). That integral equals \(\left[(u-1)e^u\right]_0^1=1\), so the value is again \(\frac{1}{2}\).
provenance: written-for-site
steps:
  - Take \(u=x^2\) and \(v'=xe^{x^2}\).
  - The boundary term is \(\frac{e}{2}\).
  - Subtract \(\frac{e-1}{2}\).
verification:
  checks:
    - expr: integrate(x**3*exp(x**2), (x, 0, 1))
      expected: "1/2"
:::

::: exercise
id: l3-integration-by-parts.midterm-mock-1-ex6.2
statement: |
  Compute \(\displaystyle\int_0^1 t(1+1)^{1/3}\,dt\), integrating by parts. The printed integrand is \(t(1+1)^{1/3}\). The official key evaluates \(\int_0^1 t(1+t)^{1/3}\,dt\) by parts.
solution: |
  The printed factor \(1+1\) would make the integrand a constant multiple of \(t\), and parts would be unnecessary. The official key takes the integrand to be \(t(1+t)^{1/3}\). Set \(u=t\) and \(dv=(1+t)^{1/3}\,dt\). Then \(du=dt\) and \(v=\frac{3}{4}(1+t)^{4/3}\). The boundary term is \(\frac{3}{4}\cdot 2^{4/3}\). The remaining integral and the value are
  \[
  \begin{aligned}
  \frac{3}{4}\int_0^1(1+t)^{4/3}\,dt\\
  &=\frac{9}{28}(2^{7/3}-1),\\
  \text{value}&=\frac{3}{4}\cdot 2^{4/3}\\
  &\quad -\frac{9}{28}(2^{7/3}-1)\\
  &=\frac{3}{28}(3+2^{4/3}).
  \end{aligned}
  \]
steps:
  - Parts with \(u=t\) and \(dv=(1+t)^{1/3}\,dt\).
  - Value \(\frac{3}{28}(3+2^{4/3})\).
verification:
  checks:
    - expr: integrate(t*(1+t)**Rational(1,3), (t, 0, 1))
      expected: Rational(3, 28)*(3 + 2**Rational(4, 3))
discrepancy: |
  The official key gives \(\frac{3}{4}(2^{4/3}-2^{7/3}+1)\). The verified value is \(\frac{3}{28}(3+2^{4/3})\).
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "6.2"
  points: 1
:::

::: exercise
id: l3-integration-by-parts.midterm-2022-ex4i
statement: |
  Let \(\varepsilon>0\). Compute \(\int_{\varepsilon}^{1}\frac{\ln(x)}{\sqrt{x}}\,dx\) by integrating by parts. What happens when \(\varepsilon\) goes to zero?
tier: exam
topics:
  - integration-by-parts
  - improper-integrals
pastExam:
  year: 2022
  paper: Midterm
  question: 4i
  points: 2
solution: |
  Set \(u=\ln x\) and \(dv=x^{-1/2}\,dx\), so \(du=dx/x\) and \(v=2\sqrt{x}\). Then
  \[
  \begin{aligned}
  &\int_{\varepsilon}^{1}\frac{\ln x}{\sqrt{x}}\,dx\\
  &=\bigl[2\sqrt{x}\ln x\bigr]_{\varepsilon}^{1}-\int_{\varepsilon}^{1}2\sqrt{x}\cdot\frac{1}{x}\,dx\\
  &=\bigl[2\sqrt{x}\ln x\bigr]_{\varepsilon}^{1}-4\bigl[\sqrt{x}\bigr]_{\varepsilon}^{1}.
  \end{aligned}
  \]
  The boundary term at \(1\) is \(0\), and the remaining evaluation is
  \[
  -2\sqrt{\varepsilon}\ln\varepsilon-4+4\sqrt{\varepsilon}.
  \]
  As \(\varepsilon\to 0^+\), one has \(\sqrt{\varepsilon}\ln\varepsilon\to 0\) and \(\sqrt{\varepsilon}\to 0\), so the integral tends to \(-4\).
provenance: official-key
steps:
  - Integration by parts.
  - Evaluated antiderivative on \([\varepsilon,1]\).
  - Limit \(-4\) as \(\varepsilon\to 0\).
verification:
  checks:
    - expr: simplify(diff(2*sqrt(x)*log(x)-4*sqrt(x), x) - log(x)/sqrt(x))
      expected: "0"
    - expr: simplify((2*sqrt(x)*log(x)-4*sqrt(x)).subs(x,1) - (2*sqrt(x)*log(x)-4*sqrt(x)).subs(x, eps) - (-2*sqrt(eps)*log(eps)-4+4*sqrt(eps)))
      expected: "0"
    - expr: limit(sqrt(eps)*log(eps), eps, 0, dir='+')
      expected: "0"
    - expr: limit(-4 - 2*sqrt(eps)*log(eps) + 4*sqrt(eps), eps, 0, dir='+')
      expected: "-4"
:::

::: exercise
id: l3-integration-by-parts.midterm-2024-ex4.3
statement: |
  Compute
  \[ \int_0^1 t^2 \sin(t)\, dt. \]
tier: exam
topics:
  - integration-by-parts
pastExam:
  year: 2024
  paper: Midterm
  question: "4.3"
  points: 1
solution: |
  Integrating by parts twice, peeling a power off \(t^2\) each time, gives the antiderivative
  \[
  \begin{aligned}
  \int t^2 \sin t\, dt \\
  &= -t^2 \cos t\\
  &\quad + 2\int t \cos t\, dt\\
  &= -t^2 \cos t\\
  &\quad + 2t \sin t + 2\cos t.
  \end{aligned}
  \]
  Equivalently, \(2t\sin t + (2 - t^2)\cos t\). Evaluating from \(0\) to \(1\) produces
  \[
  \begin{aligned}
  &\bigl(2\sin 1 + \cos 1\bigr) - 2\\
  &= 2\sin 1 + \cos 1 - 2.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Integration by parts twice.
  - Value \(2\sin 1 + \cos 1 - 2\).
verification:
  checks:
    - expr: integrate(t**2*sin(t), (t, 0, 1))
      expected: 2*sin(1) + cos(1) - 2
:::

::: exercise
id: l3-integration-by-parts.midterm-2025-ex5.2
number: "5.2"
statement: |
  Compute \(\displaystyle\int_0^1\arctan(t)\,dt\) integrating by parts with \(f'=1\).
tier: exam
solution: |
  Take \(f'=1\) and \(g=\arctan t\). Then
  \[
  \begin{aligned}
  \int_0^1\arctan t\,dt\\
  &=\bigl[t\arctan t\bigr]_0^1\\
  &\quad-\int_0^1\frac{t}{1+t^2}\,dt\\
  &=\arctan 1\\
  &\quad -\frac12\bigl[\ln(1+t^2)\bigr]_0^1\\
  &=\frac{\pi}{4}-\frac12\ln 2.
  \end{aligned}
  \]
provenance: official-key
steps:
  - Integration by parts with \(f'=1\).
  - The value \(\pi/4-\frac12\ln 2\).
verification:
  checks:
    - expr: integrate(atan(t), (t, 0, 1))
      expected: pi/4 - log(2)/2
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "5.2"
  points: 1
:::

::: exercise
id: l3-integration-by-parts.midterm-2025-ex5.5
number: "5.5"
statement: |
  Give a good approximation of \(f(x)=\displaystyle\int_{\pi/2}^{x}\frac{\cos t}{t}\,dt\) for large \(x\) by integrating by parts twice. How fast is this function decaying?
tier: exam
solution: |
  Integrate by parts with factor \(1/t\) and \(\cos t\):
  \[
  \begin{aligned}
  f(x)&=\Bigl[\frac{\sin t}{t}\Bigr]_{\pi/2}^{x}\\
  &\quad+\int_{\pi/2}^{x}\frac{\sin t}{t^2}\,dt\\
  &=\frac{\sin x}{x}-\frac{2}{\pi}\\
  &\quad+\int_{\pi/2}^{x}\frac{\sin t}{t^2}\,dt.
  \end{aligned}
  \]
  A second integration by parts on the remaining integral gives
  \[
  \begin{aligned}
  f(x)&=-\frac{2}{\pi}+\frac{\sin x}{x}-\frac{\cos x}{x^2}\\
  &\quad-\int_{\pi/2}^{x}\frac{2\cos t}{t^3}\,dt.
  \end{aligned}
  \]
  As \(x\to\infty\) the leftover integral tends to a finite constant, and \(\cos x/x^2=O(1/x^2)\). Hence
  \[
  \begin{aligned}
  f(x)&=L+\frac{\sin x}{x}+O\Bigl(\frac{1}{x^2}\Bigr),\\
  L&=\int_{\pi/2}^{\infty}\frac{\cos t}{t}\,dt\\
  &=-\mathrm{Ci}\Bigl(\frac{\pi}{2}\Bigr).
  \end{aligned}
  \]
  The function tends to \(L\). The gap \(f(x)-L\) decays like \(1/x\).
provenance: official-key
steps:
  - First integration by parts.
  - Second integration by parts.
  - Decay like \(1/x\) toward \(-\mathrm{Ci}(\pi/2)\).
verification:
  checks:
    - expr: sin(x)/x - 2/pi - cos(x)/x**2 - integrate(2*cos(t)/t**3, (t, pi/2, x))
      expected: integrate(cos(t)/t, (t, pi/2, x))
    - expr: integrate(cos(t)/t, (t, pi/2, oo)) + Ci(pi/2)
      expected: "0"
discrepancy: |
  The official key gives \(f(x)=-2/\pi+\sin(x)/x+o(1/x)\). The verified form is \(L+\sin(x)/x+O(1/x^2)\) with \(L=-\mathrm{Ci}(\pi/2)\). The leftover integral \(\int_{\pi/2}^{x}2\cos(t)/t^3\,dt\) tends to a nonzero constant, so the remainder \(o(1/x)\) is false.
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "5.5"
  points: 1
:::

::: exercise
id: l3-integration-by-parts.midterm-2026-ex5.2
number: "5.2"
statement: |
  Compute
  \[ \int_0^1 t(\ln t)^2\,dt \]
  integrating by parts.
tier: exam
topics:
  - integration-by-parts
pastExam:
  year: 2026
  paper: Midterm
  question: "5.2"
  points: 1
solution: |
  Integrating by parts with \(u=(\ln t)^2\) and \(dv=t\,dt\) gives
  \[ \int_0^1 t(\ln t)^2\,dt = \Bigl[\frac{t^2}{2}(\ln t)^2\Bigr]_0^1 - \int_0^1 t\ln t\,dt. \]
  The boundary term vanishes at both ends, using \(\lim_{t\to 0^+} t^2(\ln t)^2=0\). A second integration by parts yields
  \[ \int t\ln t\,dt = \frac{t^2}{2}\ln t-\frac{t^2}{4}, \]
  so
  \[ \int_0^1 t(\ln t)^2\,dt = -\Bigl[\frac{t^2}{2}\ln t-\frac{t^2}{4}\Bigr]_0^1 = \frac14, \]
  using \(\lim_{t\to 0^+} t^2\ln t=0\).
provenance: official-key
steps:
  - First integration by parts, reducing to \(\int t\ln t\,dt\).
  - Second integration by parts and evaluation, value \(1/4\).
verification:
  checks:
    - expr: integrate(t * log(t)**2, (t, 0, 1))
      expected: Rational(1, 4)
:::

::: exercise
id: l3-integration-by-parts.midterm-predicted-a-ex5.1
number: "5.1"
statement: |
  Compute \(\displaystyle\int_0^1 x\, e^{x}\, dx\), integrating by parts.
tier: exam
topics:
  - integration-by-parts
solution: |
  Set \(u = x\) and \(dv = e^{x}\, dx\), so \(du = dx\) and \(v = e^{x}\). Then
  \[
  \begin{aligned}
  \int_0^1 x e^{x}\, dx &= \bigl[x e^{x}\bigr]_0^1 - \int_0^1 e^{x}\, dx\\
  &= e - (e - 1)\\
  &= 1.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Integrate by parts with u = x.
  - Evaluate to 1.
verification:
  checks:
    - expr: integrate(x*exp(x), (x, 0, 1))
      expected: "1"
:::

::: exercise
id: l3-integration-by-parts.midterm-predicted-b-ex4.3
number: "4.3"
statement: |
  Compute \(\displaystyle\int_0^{\pi} x\sin x\, dx\).
tier: exam
topics:
  - integration-by-parts
solution: |
  Set \(u = x\) and \(dv = \sin x\, dx\), so \(du = dx\) and \(v = -\cos x\). Then
  \[
  \begin{aligned}
  &\bigl[-x\cos x\bigr]_0^{\pi} + \int_0^{\pi} \cos x\, dx\\
  &= \pi + \bigl[\sin x\bigr]_0^{\pi}\\
  &= \pi.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Integrate by parts with u = x.
  - Evaluate to \pi.
verification:
  checks:
    - expr: integrate(x*sin(x), (x, 0, pi))
      expected: pi
:::

::: exercise
id: l3-integration-by-parts.ex-ibp-log-powers
tier: exam
topics: [integration-by-parts, improper-integrals]
statement: |
  - (a) Compute \(\int_1^e x^2(\ln x)^2\,dx\).
  - (b) Compute \(\int_0^1 x^2(\ln x)^2\,dx\).
solution: |
  Find one antiderivative and use it for both parts. Integrate by parts with \(u=(\ln x)^2\) and \(v'=x^2\), so \(v=\frac{x^3}{3}\) and \(u'=\frac{2\ln x}{x}\):
  \[
  \begin{aligned}
  \int x^2(\ln x)^2\,dx&=\frac{x^3}{3}(\ln x)^2\\
  &\quad-\frac{2}{3}\int x^2\ln x\,dx.
  \end{aligned}
  \]
  A second round with \(u=\ln x\) and \(v'=x^2\) gives
  \[
  \begin{aligned}
  \int x^2\ln x\,dx&=\frac{x^3}{3}\ln x-\frac{1}{3}\int x^2\,dx\\
  &=\frac{x^3}{3}\ln x-\frac{x^3}{9}.
  \end{aligned}
  \]
  Hence an antiderivative is
  \[
  F(x)=\frac{x^3}{3}(\ln x)^2-\frac{2x^3}{9}\ln x+\frac{2x^3}{27}.
  \]

  (a) At \(x=e\), \(\ln e=1\) and \(F(e)=\frac{e^3}{3}-\frac{2e^3}{9}+\frac{2e^3}{27}=\frac{5e^3}{27}\). At \(x=1\), \(\ln 1=0\) and \(F(1)=\frac{2}{27}\). The integral equals \(\frac{5e^3-2}{27}\).

  (b) The integrand is bounded near \(0\) (it tends to \(0\)), but the formula for \(F\) contains \(\ln x\), so take the limit of \(F\) at \(0\) from the right. Each term of \(F\) has the form \(x^3(\ln x)^k\) with \(k\) equal to \(0\), \(1\) or \(2\), and \(x^3(\ln x)^k\to 0\) as \(x\to 0^+\), because a power beats a logarithm. So \(F(0^+)=0\) and
  \[
  \int_0^1 x^2(\ln x)^2\,dx=F(1)-F(0^+)=\frac{2}{27}.
  \]
provenance: written-for-site
steps:
  - Two rounds of parts give the antiderivative \(\frac{x^3}{3}(\ln x)^2-\frac{2x^3}{9}\ln x+\frac{2x^3}{27}\).
  - (a) \(F(e)-F(1)=\frac{5e^3-2}{27}\).
  - (b) \(F(0^+)=0\), so the integral equals \(\frac{2}{27}\).
verification:
  checks:
    - expr: diff(x**3*log(x)**2/3 - 2*x**3*log(x)/9 + 2*x**3/27, x)
      expected: "x**2*log(x)**2"
    - expr: integrate(x**2*log(x)**2, (x, 1, exp(1)))
      expected: "(5*exp(3) - 2)/27"
    - expr: integrate(x**2*log(x)**2, (x, 0, 1))
      expected: "2/27"
:::

::: exercise
id: l3-integration-by-parts.ex-ibp-unit-trick
tier: standard
topics: [integration-by-parts]
statement: |
  - (a) Compute \(\int_0^1 \ln(1+x^2)\,dx\).
  - (b) Compute \(\int_0^1 x\arctan x\,dx\).
solution: |
  (a) Take \(u=\ln(1+x^2)\) and \(v'=1\), so \(u'=\frac{2x}{1+x^2}\) and \(v=x\):
  \[
  \begin{aligned}
  \int_0^1\ln(1+x^2)\,dx&=\bigl[x\ln(1+x^2)\bigr]_0^1\\
  &\quad-\int_0^1\frac{2x^2}{1+x^2}\,dx\\
  &=\ln 2-\int_0^1\frac{2x^2}{1+x^2}\,dx.
  \end{aligned}
  \]
  The numerator and the denominator have the same degree, so divide: \(\frac{x^2}{1+x^2}=1-\frac{1}{1+x^2}\). Then
  \[
  \begin{aligned}
  \int_0^1\frac{2x^2}{1+x^2}\,dx&=2\Bigl[x-\arctan x\Bigr]_0^1\\
  &=2\Bigl(1-\frac{\pi}{4}\Bigr)\\
  &=2-\frac{\pi}{2}.
  \end{aligned}
  \]
  The integral equals \(\ln 2-\left(2-\frac{\pi}{2}\right)=\ln 2-2+\frac{\pi}{2}\).

  (b) Take \(u=\arctan x\) and \(v'=x\), so \(u'=\frac{1}{1+x^2}\) and \(v=\frac{x^2}{2}\):
  \[
  \begin{aligned}
  \int_0^1x\arctan x\,dx\\
  &=\Bigl[\frac{x^2}{2}\arctan x\Bigr]_0^1\\
  &\quad-\frac{1}{2}\int_0^1\frac{x^2}{1+x^2}\,dx\\
  &=\frac{\pi}{8}\\
  &\quad -\frac{1}{2}\Bigl[x-\arctan x\Bigr]_0^1.
  \end{aligned}
  \]
  The bracket equals \(1-\frac{\pi}{4}\). The integral equals \(\frac{\pi}{8}-\frac{1}{2}+\frac{\pi}{8}=\frac{\pi}{4}-\frac{1}{2}\).
provenance: written-for-site
steps:
  - (a) Parts with \(u=\ln(1+x^2)\) and \(v'=1\), then divide \(\frac{x^2}{1+x^2}=1-\frac{1}{1+x^2}\).
  - (a) The value is \(\ln 2-2+\frac{\pi}{2}\).
  - (b) Parts with \(u=\arctan x\) and \(v'=x\), then the same division.
  - (b) The value is \(\frac{\pi}{4}-\frac{1}{2}\).
verification:
  checks:
    - expr: integrate(log(1 + x**2), (x, 0, 1))
      expected: "log(2) - 2 + pi/2"
    - expr: integrate(x*atan(x), (x, 0, 1))
      expected: "pi/4 - 1/2"
:::

::: exercise
id: l3-integration-by-parts.handout-8-4-2
number: "8.4.2"
tier: standard
topics:
  - integration-by-parts
statement: |
  Find the antiderivative of \(x^2\cos x\,dx\).
solution: |
  Integrate by parts twice. The formula is \(\int u\,v'\,dx = u\,v - \int u'\,v\,dx\).

  First take \(u = x^2\) and \(v' = \cos x\), so \(u' = 2x\) and \(v = \sin x\).
  \[
  \int x^2\cos x\,dx = x^2\sin x - \int 2x\sin x\,dx.
  \]
  Differentiating the polynomial factor lowers its degree, so a second step is enough. Now take \(u = x\) and \(v' = \sin x\), so \(u' = 1\) and \(v = -\cos x\).
  \[
  \begin{aligned}
  \int x\sin x\,dx &= -x\cos x + \int \cos x\,dx\\
  &= -x\cos x + \sin x + C.
  \end{aligned}
  \]
  Substituting this into the first formula gives
  \[
  \begin{aligned}
  \int x^2\cos x\,dx &= x^2\sin x - 2\bigl(-x\cos x + \sin x\bigr) + C\\
  &= x^2\sin x + 2x\cos x - 2\sin x + C.
  \end{aligned}
  \]
  The antiderivative is \(x^2\sin x + 2x\cos x - 2\sin x + C\).
provenance: handout-answer
steps:
  - First step, \(u = x^2\) and \(v' = \cos x\). The result is \(x^2\sin x - \int 2x\sin x\,dx\).
  - Second step, \(u = x\) and \(v' = \sin x\). The result is \(\int x\sin x\,dx = -x\cos x + \sin x\).
  - Combine. The antiderivative is \(x^2\sin x + 2x\cos x - 2\sin x + C\).
verification:
  checks:
    - expr: diff(x**2*sin(x) + 2*x*cos(x) - 2*sin(x), x)
      expected: "x**2*cos(x)"
    - expr: diff(-x*cos(x) + sin(x), x)
      expected: "x*sin(x)"
:::


::: exercise
id: l3-integration-by-parts.handout-8-4-5
number: "8.4.5"
tier: standard
topics:
  - integration-by-parts
statement: |
  Find the antiderivative of \(\sin^2 x\,dx\) by integrating by parts. Then compare with the result of the double-angle identity.
solution: |
  Write \(\sin^2 x = \sin x\cdot\sin x\) and take \(u = \sin x\), \(v' = \sin x\). Then \(u' = \cos x\) and \(v = -\cos x\).
  \[
  \int \sin^2 x\,dx = -\sin x\cos x + \int \cos^2 x\,dx.
  \]
  The Pythagorean identity gives \(\cos^2 x = 1 - \sin^2 x\), so
  \[
  \int \sin^2 x\,dx = -\sin x\cos x + x - \int \sin^2 x\,dx.
  \]
  The unknown integral appears on both sides. Collecting it on the left gives
  \[
  2\int \sin^2 x\,dx = x - \sin x\cos x + C,
  \]
  and therefore
  \[
  \int \sin^2 x\,dx = \frac{x}{2} - \frac{\sin x\cos x}{2} + C.
  \]
  The identity \(\sin^2 x = \frac{1 - \cos 2x}{2}\) gives \(\frac{x}{2} - \frac{\sin 2x}{4} + C\). Since \(\sin 2x = 2\sin x\cos x\), the two results agree.

  The antiderivative is \(\dfrac{x}{2} - \dfrac{\sin x\cos x}{2} + C = \dfrac{x}{2} - \dfrac{\sin 2x}{4} + C\).
provenance: handout-answer
steps:
  - Take \(u = \sin x\) and \(v' = \sin x\). The result is \(-\sin x\cos x + \int\cos^2 x\,dx\).
  - Replace \(\cos^2 x\) by \(1 - \sin^2 x\). The unknown integral returns with a minus sign.
  - Solve for it. The antiderivative is \(\frac{x}{2} - \frac{\sin x\cos x}{2} + C\).
verification:
  checks:
    - expr: diff(x/2 - sin(x)*cos(x)/2, x)
      expected: "sin(x)**2"
    - expr: x/2 - sin(2*x)/4 - (x/2 - sin(x)*cos(x)/2)
      expected: "0"
:::


::: exercise
id: l3-integration-by-parts.handout-8-4-8
number: "8.4.8"
tier: standard
topics:
  - integration-by-parts
statement: |
  Find the antiderivative of \(x^3\sin x\,dx\).
solution: |
  Each integration by parts lowers the power of \(x\) by one, so three steps are needed. The formula is \(\int u\,v'\,dx = u\,v - \int u'\,v\,dx\).

  Step 1. Take \(u = x^3\) and \(v' = \sin x\), so \(v = -\cos x\).
  \[
  \int x^3\sin x\,dx = -x^3\cos x + 3\int x^2\cos x\,dx.
  \]
  Step 2. Take \(u = x^2\) and \(v' = \cos x\), so \(v = \sin x\).
  \[
  \int x^2\cos x\,dx = x^2\sin x - 2\int x\sin x\,dx.
  \]
  Step 3. Take \(u = x\) and \(v' = \sin x\), so \(v = -\cos x\).
  \[
  \int x\sin x\,dx = -x\cos x + \sin x + C.
  \]
  Substituting back, step 2 gives \(x^2\sin x + 2x\cos x - 2\sin x\) for the middle integral. Then
  \[
  \begin{aligned}
  \int x^3\sin x\,dx &= -x^3\cos x + 3\bigl(x^2\sin x + 2x\cos x - 2\sin x\bigr) + C\\
  &= -x^3\cos x + 3x^2\sin x + 6x\cos x - 6\sin x + C.
  \end{aligned}
  \]
  The antiderivative is \(-x^3\cos x + 3x^2\sin x + 6x\cos x - 6\sin x + C\).
provenance: handout-answer
steps:
  - Step 1 gives \(-x^3\cos x + 3\int x^2\cos x\,dx\).
  - Step 2 gives \(\int x^2\cos x\,dx = x^2\sin x - 2\int x\sin x\,dx\), and step 3 gives \(\int x\sin x\,dx = -x\cos x + \sin x\).
  - Combine. The antiderivative is \(-x^3\cos x + 3x^2\sin x + 6x\cos x - 6\sin x + C\).
verification:
  checks:
    - expr: diff(-x**3*cos(x) + 3*x**2*sin(x) + 6*x*cos(x) - 6*sin(x), x)
      expected: "x**3*sin(x)"
    - expr: diff(x**2*sin(x) + 2*x*cos(x) - 2*sin(x), x)
      expected: "x**2*cos(x)"
:::


::: exercise
id: l3-integration-by-parts.handout-8-4-10
number: "8.4.10"
tier: exam
topics:
  - integration-by-parts
statement: |
  Find the antiderivative of \(x\sin^2 x\,dx\).
solution: |
  First reduce the power of the sine with the identity \(\sin^2 x = \frac{1 - \cos 2x}{2}\). Then
  \[
  \int x\sin^2 x\,dx = \frac{1}{2}\int x\,dx - \frac{1}{2}\int x\cos 2x\,dx.
  \]
  The first integral is \(\frac{x^2}{2}\). For the second, take \(u = x\) and \(v' = \cos 2x\), so \(u' = 1\) and \(v = \frac{\sin 2x}{2}\).
  \[
  \begin{aligned}
  \int x\cos 2x\,dx &= \frac{x\sin 2x}{2} - \int \frac{\sin 2x}{2}\,dx\\
  &= \frac{x\sin 2x}{2} + \frac{\cos 2x}{4} + C.
  \end{aligned}
  \]
  Substituting gives
  \[
  \begin{aligned}
  \int x\sin^2 x\,dx &= \frac{x^2}{4} - \frac{1}{2}\Bigl(\frac{x\sin 2x}{2} + \frac{\cos 2x}{4}\Bigr) + C\\
  &= \frac{x^2}{4} - \frac{x\sin 2x}{4} - \frac{\cos 2x}{8} + C.
  \end{aligned}
  \]
  Use \(\sin 2x = 2\sin x\cos x\) and \(\cos 2x = 2\cos^2 x - 1\). Then \(\frac{x\sin 2x}{4} = \frac{x\sin x\cos x}{2}\) and \(\frac{\cos 2x}{8} = \frac{\cos^2 x}{4} - \frac{1}{8}\). The constant \(\frac{1}{8}\) is absorbed into \(C\), so
  \[
  \int x\sin^2 x\,dx = \frac{x^2}{4} - \frac{\cos^2 x}{4} - \frac{x\sin x\cos x}{2} + C.
  \]
  The antiderivative is \(\dfrac{x^2}{4} - \dfrac{\cos^2 x}{4} - \dfrac{x\sin x\cos x}{2} + C\).
provenance: handout-answer
steps:
  - Reduce the power with \(\sin^2 x = \frac{1-\cos 2x}{2}\).
  - Integrate \(x\cos 2x\) by parts with \(u = x\) and \(v' = \cos 2x\).
  - Combine and rewrite with \(\sin 2x = 2\sin x\cos x\) and \(\cos 2x = 2\cos^2 x - 1\). The constant \(\frac{1}{8}\) joins \(C\).
verification:
  checks:
    - expr: diff(x**2/4 - cos(x)**2/4 - x*sin(x)*cos(x)/2, x)
      expected: "x*sin(x)**2"
    - expr: diff(x**2/4 - x*sin(2*x)/4 - cos(2*x)/8, x)
      expected: "x*sin(x)**2"
    - expr: diff(x*sin(2*x)/2 + cos(2*x)/4, x)
      expected: "x*cos(2*x)"
:::


::: exercise
id: l3-integration-by-parts.handout-8-4-11
number: "8.4.11"
tier: standard
topics:
  - integration-by-parts
statement: |
  Find the antiderivative of \(x\sin x\cos x\,dx\).
solution: |
  The identity \(\sin 2x = 2\sin x\cos x\) gives \(x\sin x\cos x = \frac{x\sin 2x}{2}\). So
  \[
  \int x\sin x\cos x\,dx = \frac{1}{2}\int x\sin 2x\,dx.
  \]
  Take \(u = x\) and \(v' = \sin 2x\), so \(u' = 1\) and \(v = -\frac{\cos 2x}{2}\).
  \[
  \begin{aligned}
  \int x\sin 2x\,dx &= -\frac{x\cos 2x}{2} + \int \frac{\cos 2x}{2}\,dx\\
  &= -\frac{x\cos 2x}{2} + \frac{\sin 2x}{4} + C.
  \end{aligned}
  \]
  Multiplying by \(\frac{1}{2}\) gives
  \[
  \int x\sin x\cos x\,dx = -\frac{x\cos 2x}{4} + \frac{\sin 2x}{8} + C.
  \]
  Now \(\cos 2x = 2\cos^2 x - 1\) and \(\sin 2x = 2\sin x\cos x\), so
  \[
  \begin{aligned}
  -\frac{x\cos 2x}{4} &= -\frac{x\cos^2 x}{2} + \frac{x}{4},\\
  \frac{\sin 2x}{8} &= \frac{\sin x\cos x}{4}.
  \end{aligned}
  \]
  The antiderivative is \(\dfrac{x}{4} - \dfrac{x\cos^2 x}{2} + \dfrac{\sin x\cos x}{4} + C\).
provenance: handout-answer
steps:
  - Rewrite \(x\sin x\cos x = \frac{1}{2}x\sin 2x\).
  - Integrate \(x\sin 2x\) by parts with \(u = x\) and \(v' = \sin 2x\).
  - Convert back with \(\cos 2x = 2\cos^2 x - 1\). The antiderivative is \(\frac{x}{4} - \frac{x\cos^2 x}{2} + \frac{\sin x\cos x}{4} + C\).
verification:
  checks:
    - expr: diff(x/4 - x*cos(x)**2/2 + sin(x)*cos(x)/4, x)
      expected: "x*sin(x)*cos(x)"
    - expr: x/4 - x*cos(x)**2/2 + sin(x)*cos(x)/4 - (-x*cos(2*x)/4 + sin(2*x)/8)
      expected: "0"
:::


::: exercise
id: l3-integration-by-parts.handout-8-4-12
number: "8.4.12"
tier: exam
topics:
  - integration-by-parts
statement: |
  Find the antiderivative of \(\arctan\bigl(\sqrt{x}\bigr)\,dx\) on \((0, \infty)\). Substitute \(u = \sqrt{x}\) first.
solution: |
  Set \(u = \sqrt{x}\). Then \(x = u^2\) and \(dx = 2u\,du\), and \(u > 0\).
  \[
  \int \arctan\bigl(\sqrt{x}\bigr)\,dx = \int 2u\arctan u\,du.
  \]
  Integrate by parts with the arctangent as the factor to differentiate. Take \(f = \arctan u\) and \(g' = 2u\), so \(f' = \frac{1}{1+u^2}\) and \(g = u^2\).
  \[
  \int 2u\arctan u\,du = u^2\arctan u - \int \frac{u^2}{1+u^2}\,du.
  \]
  Write \(\frac{u^2}{1+u^2} = 1 - \frac{1}{1+u^2}\). Then
  \[
  \begin{aligned}
  \int \frac{u^2}{1+u^2}\,du &= u - \arctan u + C,
  \end{aligned}
  \]
  so
  \[
  \begin{aligned}
  \int 2u\arctan u\,du &= u^2\arctan u - u + \arctan u + C\\
  &= (u^2 + 1)\arctan u - u + C.
  \end{aligned}
  \]
  Return to \(x\) with \(u = \sqrt{x}\) and \(u^2 = x\).

  The antiderivative is \((x+1)\arctan\sqrt{x} - \sqrt{x} + C\).
provenance: handout-answer
steps:
  - Set \(u = \sqrt{x}\), so \(dx = 2u\,du\) and the integral is \(\int 2u\arctan u\,du\).
  - By parts with \(f = \arctan u\) and \(g' = 2u\), the result is \(u^2\arctan u - \int\frac{u^2}{1+u^2}\,du\).
  - Use \(\frac{u^2}{1+u^2} = 1 - \frac{1}{1+u^2}\), then return to \(x\). The antiderivative is \((x+1)\arctan\sqrt{x} - \sqrt{x} + C\).
verification:
  checks:
    - expr: diff((x + 1)*atan(sqrt(x)) - sqrt(x), x)
      expected: "atan(sqrt(x))"
    - expr: diff((u**2 + 1)*atan(u) - u, u)
      expected: "2*u*atan(u)"
    - expr: simplify(u**2/(1 + u**2) - (1 - 1/(1 + u**2)))
      expected: "0"
:::


::: exercise
id: l3-integration-by-parts.handout-8-4-13
number: "8.4.13"
tier: exam
topics:
  - integration-by-parts
statement: |
  Find the antiderivative of \(\sin\bigl(\sqrt{x}\bigr)\,dx\) on \((0, \infty)\). Substitute \(u = \sqrt{x}\) first.
solution: |
  Set \(u = \sqrt{x}\). Then \(x = u^2\) and \(dx = 2u\,du\), and \(u > 0\).
  \[
  \int \sin\bigl(\sqrt{x}\bigr)\,dx = \int 2u\sin u\,du.
  \]
  Integrate by parts. Take \(f = 2u\) and \(g' = \sin u\), so \(f' = 2\) and \(g = -\cos u\).
  \[
  \begin{aligned}
  \int 2u\sin u\,du &= -2u\cos u + \int 2\cos u\,du\\
  &= -2u\cos u + 2\sin u + C.
  \end{aligned}
  \]
  Return to \(x\) with \(u = \sqrt{x}\).

  The antiderivative is \(2\sin\sqrt{x} - 2\sqrt{x}\cos\sqrt{x} + C\).
provenance: handout-answer
steps:
  - Set \(u = \sqrt{x}\), so \(dx = 2u\,du\) and the integral is \(\int 2u\sin u\,du\).
  - By parts with \(f = 2u\) and \(g' = \sin u\), the result is \(-2u\cos u + 2\sin u\).
  - Return to \(x\). The antiderivative is \(2\sin\sqrt{x} - 2\sqrt{x}\cos\sqrt{x} + C\).
verification:
  checks:
    - expr: diff(2*sin(sqrt(x)) - 2*sqrt(x)*cos(sqrt(x)), x)
      expected: "sin(sqrt(x))"
    - expr: diff(-2*u*cos(u) + 2*sin(u), u)
      expected: "2*u*sin(u)"
:::
