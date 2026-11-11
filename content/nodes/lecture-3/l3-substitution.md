---
id: l3-substitution
lecture: 3
order: 6
title: Substitution
prerequisites: [l3-fundamental-theorem]
sources:
  - { source: handout, section: "8.1", page: 166 }
  - { source: lecture-notes-3, page: 4 }
  - { source: midterm-app }
  - { source: midterm-mock-1, page: 1 }
  - { source: midterm-2022, page: 1 }
  - { source: midterm-2024, page: 1 }
  - { source: midterm-2025, page: 1 }
  - { source: midterm-2026-key, page: 4 }
examWeight: high
examWeightNote: Every midterm has a set of five to seven integrals.
notation: |
  The lecture writes the substitution as \(y = \varphi(x)\) and the chain rule as \(\frac{d}{dx} F(\varphi) = F'(\varphi)\,\varphi'\). The handout writes the same rule as \(du = g'(x)\,dx\).
status: reviewed
---

::: section
title: Substitution
:::

::: formal-statement
kind: method
title: Substitution
source:
  source: lecture-notes-3
  page: 4
text: |
  The chain rule is
  \[
  \frac{d}{dx} F(\varphi(x)) = F'(\varphi(x))\,\varphi'(x).
  \]
  If \(F' = f\), then
  \[
  \int_a^b f(\varphi(x))\,\varphi'(x)\,dx = \int_{\varphi(a)}^{\varphi(b)} f(y)\,dy.
  \]
:::

::: plain-explanation
text: |
  Choose \(u\) to be an **inside function** whose derivative is sitting in the integrand, up to a constant factor. After the substitution, no \(x\) remains. The new limits are the values of \(u\) at the old endpoints.
:::

::: worked-example
title: Quarter circle
problem: |
  Compute \(\int_0^1 \sqrt{1-y^2}\,dy\) by the substitution \(y = \sin x\).
solution: |
  The graph of \(\sqrt{1-y^2}\) for \(y\) from \(0\) to \(1\) is a quarter circle of radius \(1\).

  - The limit \(y = 0\) gives \(x = 0\).
  - The limit \(y = 1\) gives \(x = \frac{\pi}{2}\).
  - The differential is \(dy = \cos x\,dx\).

  The integral becomes
  \[
  \begin{aligned}
  &\int_0^{\pi/2} \sqrt{1-\sin^2 x}\,\cos x\,dx\\
  &= \int_0^{\pi/2} \sqrt{\cos^2 x}\,\cos x\,dx.
  \end{aligned}
  \]
  On \([0, \pi/2]\), \(\cos x \ge 0\), so \(\sqrt{\cos^2 x} = \cos x\). The product with the remaining factor \(\cos x\) is the integrand \(\cos^2 x\).

  The identity \(\cos 2x = 2\cos^2 x - 1\) gives
  \[
  \cos^2 x = \frac{1+\cos 2x}{2}.
  \]
  The integral is
  \[
  \int_0^{\pi/2} \frac{1+\cos 2x}{2}\,dx = \Bigl[\frac{x}{2} + \frac{\sin 2x}{4}\Bigr]_0^{\pi/2}.
  \]
  The antiderivative of \(\frac{\cos 2x}{2}\) is \(\frac{\sin 2x}{4}\), because the chain rule divides by the derivative of \(2x\), which is \(2\).

  Let \(G(x) = \frac{x}{2} + \frac{\sin 2x}{4}\). At \(\frac{\pi}{2}\), the term \(\frac{x}{2}\) equals \(\frac{\pi}{4}\) and \(\sin \pi = 0\), so \(G\bigl(\frac{\pi}{2}\bigr) = \frac{\pi}{4}\). At \(0\), both terms are \(0\), so \(G(0) = 0\). The value is \(\frac{\pi}{4}\).
:::

::: guided-example
title: Sine of a square
problem: |
  Compute \(\int_2^4 x\sin(x^2)\,dx\) by the substitution \(u = x^2\).
steps:
  - |
    Set \(u = x^2\). Then \(du = 2x\,dx\).
  - |
    The limit \(x = 2\) gives \(u = 4\). The limit \(x = 4\) gives \(u = 16\).
  - |
    The factor \(x\,dx\) equals \(\frac{1}{2}\,du\), so the integral is \(\frac{1}{2}\int_4^{16} \sin u\,du\).
  - |
    An antiderivative of \(\sin u\) is \(-\cos u\). Then \(\frac{1}{2}\bigl[-\cos u\bigr]_4^{16} = -\frac{1}{2}\cos 16 + \frac{1}{2}\cos 4\).
:::

::: trap
text: |
  The antiderivative of \(\frac{1+\cos 2x}{2}\) is \(G(x) = \frac{x}{2} + \frac{\sin 2x}{4}\). The function \(H(x) = \frac{x}{2} + \frac{\sin 2x}{2}\) has derivative \(\frac{1}{2} + \cos 2x\). The integrand equals \(\frac{1}{2} + \frac{\cos 2x}{2}\). The derivative of \(H\) fails to equal that integrand.

  - On \([0, \pi/2]\), \(\sin 2x\) equals \(0\) at both endpoints, so \(G\bigl(\frac{\pi}{2}\bigr) - G(0) = \frac{\pi}{4}\) and \(H\bigl(\frac{\pi}{2}\bigr) - H(0) = \frac{\pi}{4}\). That definite integral hides the mistake.
  - On \([0, \pi/4]\), \(G\) evaluates to \(\frac{\pi}{8} + \frac{1}{4}\), and \(H\) evaluates to \(\frac{\pi}{8} + \frac{1}{2}\).

  The quarter-circle integral uses \([0, \pi/2]\) and equals \(\frac{\pi}{4}\).
:::

::: going-deeper
title: Square root of a square
text: |
  \(\sqrt{\cos^2 x}\) equals \(|\cos x|\). Where cosine is negative, the factor \(\cos x\) from \(dy\) multiplies \(|\cos x|\) and the product is \(-\cos^2 x\), while the worked example stays on \([0, \pi/2]\), where cosine is nonnegative.
:::

::: key-points
text: |
  - If \(F' = f\), then \(\int_a^b f(\varphi(x))\,\varphi'(x)\,dx = \int_{\varphi(a)}^{\varphi(b)} f(y)\,dy\).
  - Choose \(u\) to be an inside function whose derivative is sitting in the integrand, up to a constant factor. No \(x\) remains, and the new limits are the values of \(u\) at the old endpoints.
  - The usual slip takes \(\frac{x}{2} + \frac{\sin 2x}{2}\) as an antiderivative of \(\frac{1+\cos 2x}{2}\). Its derivative is \(\frac{1}{2} + \cos 2x\), and the antiderivative is \(\frac{x}{2} + \frac{\sin 2x}{4}\).
:::

::: concept-question
id: l3-substitution.q-103d2152
question: |
  Compute \(\int_{1}^{4} \frac{1 - \sqrt{t}}{\sqrt{t}}\, dt\) using \(x = \sqrt{t}\).
options:
  - text: |
      \(-1\)
    correct: true
  - text: |
      \(1\)
  - text: |
      \(3\)
  - text: |
      \(-3\)
explanation: |
  With \(x = \sqrt{t}\), one has \(dt = 2x\, dx\) and the limits run from 1 to 2. The integral becomes
  \[
  \int_{1}^{2} 2(1 - x)\, dx = -1.
  \]
:::

::: concept-question
id: l3-substitution.q-08c4eba6
question: |
  Compute \(\int_{0}^{\pi} \frac{\sin t}{1 + \cos^{2} t}\, dt\) using \(x = \cos t\).
options:
  - text: |
      \(\frac{\pi}{2}\)
    correct: true
  - text: |
      \(\pi\)
  - text: |
      \(0\)
  - text: |
      \(\frac{\pi}{4}\)
explanation: |
  With \(x = \cos t\), one has \(dx = -\sin t\, dt\), and the limits run from 1 to \(-1\). Reversing the limits removes the minus sign, and the integral is
  \[
  \int_{-1}^{1} \frac{1}{1 + x^{2}}\, dx = \frac{\pi}{2}.
  \]
:::

::: concept-question
id: l3-substitution.q-ef190053
question: |
  Compute \(\int_{0}^{\infty} \sqrt{t}\, \exp(-\sqrt{t})\, dt\) using \(s = \sqrt{t}\).
options:
  - text: |
      \(4\)
    correct: true
  - text: |
      \(2\)
  - text: |
      \(1\)
  - text: |
      Divergent
explanation: |
  With \(s = \sqrt{t}\), one has \(dt = 2s\, ds\), and the integral becomes
  \[
  2\int_{0}^{\infty} s^{2} \exp(-s)\, ds.
  \]
  Integrating by parts twice yields 4.
:::

::: concept-question
id: l3-substitution.q-9059d08a
question: |
  What is \(\int_0^{\pi} \sqrt{1-\sin^2 x}\,dx\)?
options:
  - text: |
      \(2\)
    correct: true
  - text: |
      \(0\)
  - text: |
      \(1\)
  - text: |
      \(\frac{\pi}{2}\)
explanation: |
  Since \(1-\sin^2 x = \cos^2 x\), the integrand is \(\sqrt{\cos^2 x} = |\cos x|\).

  - On \([0, \pi/2]\) this equals \(\cos x\), and the integral there is \(1\).
  - On \([\pi/2, \pi]\) cosine is negative, so \(|\cos x| = -\cos x\), and the integral there is also \(1\).

  The total is \(2\). Writing \(\sqrt{\cos^2 x} = \cos x\) on all of \([0, \pi]\) gives \(\int_0^{\pi}\cos x\,dx = 0\). That value cannot be right, because \(|\cos x|\) is nonnegative and positive on most of the interval.
:::

::: exercise
id: l3-substitution.basic-linear-sub
tier: basic
topics: [substitution]
statement: |
  By substitution, compute \(\int_0^2 2x\sqrt{1+x^2}\,dx\).
solution: |
  Set \(u = 1 + x^2\). Then \(du = 2x\,dx\).

  - The limit \(x = 0\) gives \(u = 1\).
  - The limit \(x = 2\) gives \(u = 5\).

  \[
  \begin{aligned}
  &\int_0^2 2x\sqrt{1+x^2}\,dx\\
  &= \int_1^5 \sqrt{u}\,du\\
  &= \Bigl[\frac{2}{3}u^{3/2}\Bigr]_1^5\\
  &= \frac{2}{3}\bigl(5^{3/2} - 1\bigr).
  \end{aligned}
  \]
  The value is \(\frac{2}{3}\bigl(5^{3/2} - 1\bigr)\).
provenance: written-for-site
steps:
  - |
    Set \(u = 1 + x^2\), so \(du = 2x\,dx\).
  - |
    Change the limits from \(x = 0\) and \(x = 2\) to \(u = 1\) and \(u = 5\).
  - |
    Integrate \(\sqrt{u}\). The value is \(\frac{2}{3}\bigl(5^{3/2} - 1\bigr)\).
verification:
  checks:
    - expr: integrate(2*x*sqrt(1 + x**2), (x, 0, 2))
      expected: "(2/3)*(5**Rational(3, 2) - 1)"
:::

::: section
title: Indefinite substitution
:::

::: formal-statement
kind: method
title: Indefinite substitution
source:
  source: handout
  section: "8.1"
  page: 167
text: |
  Set \(u = g(x)\) and \(du = g'(x)\,dx\). Then
  \[
  \int f(g(x))\,g'(x)\,dx = \int f(u)\,du.
  \]
  On a definite integral the limits change with \(u\).
:::

::: trap
text: |
  By the substitution \(u = \cos t\), \(\int \tan t\,dt = -\ln|\cos t| + C\). The derivative of \(\ln|\cos t|\) equals \(-\tan t\), hence \(\ln|\cos t|\) is an antiderivative of \(-\tan t\). That derivative fails to equal \(\tan t\).
:::

::: key-points
text: |
  - With \(u = g(x)\) and \(du = g'(x)\,dx\), \(\int f(g(x))\,g'(x)\,dx = \int f(u)\,du\). On a definite integral the limits change with \(u\).
  - The usual slip calls \(\ln|\cos t|\) an antiderivative of \(\tan t\). Its derivative is \(-\tan t\), and the substitution \(u = \cos t\) gives \(\int \tan t\,dt = -\ln|\cos t| + C\).
:::

::: concept-question
id: l3-substitution.q-fc35a9d3
question: |
  Compute \(\int_{0}^{1} \tan t\, dt\) using \(y = \cos t\).
options:
  - text: |
      \(-\ln(\cos 1)\)
    correct: true
  - text: |
      \(\ln(\cos 1)\)
  - text: |
      \(\ln(\sin 1)\)
  - text: |
      \(\frac{1}{\cos 1} - 1\)
explanation: |
  With \(y = \cos t\), one has \(dy = -\sin t\, dt\), so the antiderivative is \(-\ln|\cos t|\). From 0 to 1 this equals \(-\ln(\cos 1)\).
:::

::: concept-question
id: l3-substitution.q-f54de01e
question: |
  Compute \(\int_{0}^{\pi/4} \tan x\, dx\).
options:
  - text: |
      \(\frac{\ln 2}{2}\)
    correct: true
  - text: |
      \(\ln 2\)
  - text: |
      \(-\frac{\ln 2}{2}\)
  - text: |
      \(\frac{\pi}{4}\)
explanation: |
  The substitution \(u = \cos x\) gives the antiderivative \(-\ln|\cos x|\). Evaluating from 0 to \(\frac{\pi}{4}\) produces \(-\ln\bigl(\frac{\sqrt{2}}{2}\bigr) = \frac{\ln 2}{2}\).
:::

::: concept-question
id: l3-substitution.q-3e218857
question: |
  Compute \(\int_{-1}^{1} \frac{4x - 1}{2x^{2} - x + 1}\, dx\).
options:
  - text: |
      \(-\ln 2\)
    correct: true
  - text: |
      \(\ln 2\)
  - text: |
      \(0\)
  - text: |
      \(\frac{\pi}{2}\)
explanation: |
  The numerator is the derivative of the denominator, so the antiderivative is \(\ln|2x^{2} - x + 1|\). Evaluating from \(-1\) to 1 gives \(\ln 2 - \ln 4 = -\ln 2\).
:::

::: exercise
id: l3-substitution.r1
tier: basic
topics: [substitution]
statement: |
  Find an antiderivative of \(\frac{2x}{x^2+1}\).
solution: |
  The numerator is the derivative of the denominator. Set \(u=x^2+1\), so \(u'=2x\) and the integrand is \(\frac{u'}{u}\).

  \[
  \int\frac{2x}{x^2+1}\,dx=\ln|x^2+1|+C.
  \]

  Here \(x^2+1>0\), so an antiderivative is \(\ln(x^2+1)\).
provenance: written-for-site
verification:
  checks:
    - expr: diff(log(x**2 + 1), x) - 2*x/(x**2 + 1)
      expected: "0"
:::

::: exercise
id: l3-substitution.standard-quarter
tier: standard
topics: [substitution]
statement: |
  By the substitution \(y = \sin x\), compute \(\int_0^1 \sqrt{1-y^2}\,dy\).
solution: |
  - The limit \(y = 0\) gives \(x = 0\).
  - The limit \(y = 1\) gives \(x = \frac{\pi}{2}\).

  Then \(dy = \cos x\,dx\), and \(1 - \sin^2 x = \cos^2 x\).

  On \([0, \pi/2]\), \(\cos x \ge 0\), so \(\sqrt{\cos^2 x} = \cos x\). The integrand becomes \(\cos^2 x\).

  Write \(\cos^2 x = \frac{1+\cos 2x}{2}\). The antiderivative of \(\frac{\cos 2x}{2}\) is \(\frac{\sin 2x}{4}\). The antiderivative \(\frac{x}{2} + \frac{\sin 2x}{4}\) equals \(\frac{\pi}{4}\) at \(\frac{\pi}{2}\) and equals \(0\) at \(0\). The value is \(\frac{\pi}{4}\).
provenance: written-for-site
steps:
  - |
    Substitute \(y = \sin x\). The limits become \(0\) and \(\frac{\pi}{2}\).
  - |
    On \([0, \pi/2]\), \(\sqrt{\cos^2 x} = \cos x\), so the integrand is \(\cos^2 x\).
  - |
    Write \(\cos^2 x = \frac{1+\cos 2x}{2}\) and evaluate. The value is \(\frac{\pi}{4}\).
verification:
  checks:
    - expr: integrate(sqrt(1 - y**2), (y, 0, 1))
      expected: pi/4
:::

::: sheet-item
id: l3-substitution.sheet-formula
category: formula
text: |
  \(\int_a^b f(\varphi(x))\,\varphi'(x)\,dx = \int_{\varphi(a)}^{\varphi(b)} f(y)\,dy\).
:::

::: sheet-item
id: l3-substitution.sheet-cos-square
category: formula
text: |
  \(\cos^2 x = \frac{1+\cos 2x}{2}\).
:::

::: sheet-item
id: l3-substitution.sheet-spot-derivative
category: recognition
text: |
  A derivative sitting in the integrand, up to a constant factor, suggests the substitution \(u\) equal to that inside function.
:::

::: exercise
id: l3-substitution.m6-3
tier: standard
topics: [substitution]
number: "Mock midterm, Ex. 6.3"
statement: |
  Compute \(\int_0^1 \tan(t)\,dt\) using the substitution \(y=\cos t\).
solution: |
  Write \(\tan t=\frac{\sin t}{\cos t}\) and substitute \(y=\cos t\). Then \(dy=-\sin t\,dt\).

  - The limit \(t=0\) becomes \(y=1\).
  - The limit \(t=1\) becomes \(y=\cos 1\).

  \[
  \begin{aligned}
  &\int_0^1\frac{\sin t}{\cos t}\,dt\\
  &=\int_1^{\cos 1}\frac{-1}{y}\,dy\\
  &=\int_{\cos 1}^{1}\frac{1}{y}\,dy\\
  &=\ln 1-\ln(\cos 1)\\
  &=-\ln(\cos 1).
  \end{aligned}
  \]

  On \([0,1]\) one has \(\cos t>0\), because \(1<\frac{\pi}{2}\), so \(\frac{1}{y}\) is continuous from \(\cos 1\) to \(1\). The same substitution gives \(\int\tan t\,dt=-\ln|\cos t|+C\).
provenance: written-for-site
steps:
  - Write \(\tan t\) as \(\frac{\sin t}{\cos t}\) and set \(y=\cos t\).
  - Change the limits to \(y=1\) and \(y=\cos 1\).
  - Reverse the limits to cancel the minus in \(dy\).
  - The value is \(-\ln(\cos 1)\).
verification:
  checks:
    - expr: integrate(tan(t), (t, 0, 1))
      expected: "-log(cos(1))"
:::

::: exercise
id: l3-substitution.s18-1
tier: basic
topics: [substitution]
number: "Integral bank, Ex. 18.1"
statement: |
  Compute \(\int_1^4\frac{1-\sqrt{t}}{\sqrt{t}}\,dt\) letting \(x=\sqrt{t}\).
solution: |
  Substitute \(x=\sqrt{t}\), so \(t=x^2\) and \(dt=2x\,dx\).

  - The limit \(t=1\) becomes \(x=1\).
  - The limit \(t=4\) becomes \(x=2\).

  \[
  \begin{aligned}
  &\int_1^4\frac{1-\sqrt{t}}{\sqrt{t}}\,dt\\
  &=\int_1^2\frac{1-x}{x}\cdot 2x\,dx\\
  &=\int_1^2 2(1-x)\,dx\\
  &=\bigl[2x-x^2\bigr]_1^2\\
  &=(4-4)-(2-1)\\
  &=-1.
  \end{aligned}
  \]

  Rewriting the integrand as \(t^{-1/2}-1\) gives the antiderivative \(2\sqrt{t}-t\), and the same value \(-1\). The integrand is at most \(0\) on \([1,4]\), so the integral is negative.
provenance: written-for-site
verification:
  checks:
    - expr: integrate((1 - sqrt(t))/sqrt(t), (t, 1, 4))
      expected: "-1"
:::

::: exercise
id: l3-substitution.s18-2
tier: standard
topics: [substitution]
number: "Integral bank, Ex. 18.2"
statement: |
  Compute \(\int_0^{\pi}\frac{\sin t}{1+\cos^2 t}\,dt\) letting \(x=\cos t\).
solution: |
  Substitute \(x=\cos t\), so \(dx=-\sin t\,dt\).

  - The limit \(t=0\) becomes \(x=1\).
  - The limit \(t=\pi\) becomes \(x=-1\).

  \[
  \begin{aligned}
  &\int_0^{\pi}\frac{\sin t}{1+\cos^2 t}\,dt\\
  &=\int_1^{-1}\frac{-1}{1+x^2}\,dx\\
  &=\int_{-1}^{1}\frac{1}{1+x^2}\,dx\\
  &=\arctan 1-\arctan(-1)\\
  &=\frac{\pi}{4}+\frac{\pi}{4}\\
  &=\frac{\pi}{2}.
  \end{aligned}
  \]

  The integral equals \(\int_{-1}^{1}\frac{1}{1+x^2}\,dx\). The line \(\int_1^{-1}\frac{1}{1+x^2}\,dx\) drops the minus sign in \(dx=-\sin t\,dt\).
provenance: written-for-site
steps:
  - Set \(x=\cos t\), so \(dx=-\sin t\,dt\).
  - Change the limits from \(0\) and \(\pi\) to \(1\) and \(-1\).
  - Reverse the limits together with the minus sign.
  - Evaluate \(\arctan 1-\arctan(-1)\).
verification:
  checks:
    - expr: integrate(sin(t)/(1 + cos(t)**2), (t, 0, pi))
      expected: "pi/2"
:::

::: exercise
id: l3-substitution.r2
tier: basic
topics: [substitution]
statement: |
  Compute \(\int_0^1 x e^{x^2}\,dx\).
solution: |
  The factor \(x\) is half the derivative of \(x^2\), so the integrand matches \(\frac{1}{2}u'e^u\) with \(u=x^2\).

  \[
  \begin{aligned}
  &\int_0^1 x e^{x^2}\,dx\\
  &=\frac{1}{2}\int_0^1 2x\,e^{x^2}\,dx\\
  &=\frac{1}{2}\bigl[e^{x^2}\bigr]_0^1\\
  &=\frac{e-1}{2}.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x*exp(x**2), (x, 0, 1))
      expected: "(exp(1) - 1)/2"
:::

::: exercise
id: l3-substitution.r3
tier: basic
topics: [substitution]
statement: |
  Find an antiderivative of \(\cos x\,\sin^4 x\).
solution: |
  The integrand matches \(u'u^4\) with \(u=\sin x\) and \(u'=\cos x\).

  \[
  \int\cos x\,\sin^4 x\,dx=\frac{\sin^5 x}{5}+C.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: diff(sin(x)**5/5, x) - cos(x)*sin(x)**4
      expected: "0"
:::

::: exercise
id: l3-substitution.r4
tier: basic
topics: [substitution]
statement: |
  Compute \(\int_1^e\frac{\ln x}{x}\,dx\).
solution: |
  The factor \(\frac{1}{x}\) is the derivative of \(\ln x\), so the integrand matches \(u'u\) with \(u=\ln x\).

  \[
  \begin{aligned}
  &\int_1^e\frac{\ln x}{x}\,dx\\
  &=\left[\frac{1}{2}(\ln x)^2\right]_1^e\\
  &=\frac{1}{2}(1)^2-\frac{1}{2}(0)^2\\
  &=\frac{1}{2}.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(log(x)/x, (x, 1, E))
      expected: "1/2"
:::

::: exercise
id: l3-substitution.r5
tier: basic
topics: [substitution]
statement: |
  Find an antiderivative of \(\frac{x^2}{x^3+1}\) on \((-1,\infty)\).
solution: |
  The derivative of \(x^3+1\) is \(3x^2\), so the constant in front of the logarithm is \(\frac{1}{3}\).

  \[
  \begin{aligned}
  &\int\frac{x^2}{x^3+1}\,dx\\
  &=\frac{1}{3}\int\frac{3x^2}{x^3+1}\,dx\\
  &=\frac{1}{3}\ln|x^3+1|+C.
  \end{aligned}
  \]

  On \((-1,\infty)\) one has \(x^3+1>0\), so an antiderivative is \(\frac{1}{3}\ln(x^3+1)\). The line \(\ln(x^3+1)\) drops the factor \(\frac{1}{3}\).
provenance: written-for-site
verification:
  checks:
    - expr: diff(log(x**3 + 1)/3, x) - x**2/(x**3 + 1)
      expected: "0"
:::

::: exercise
id: l3-substitution.r6
tier: basic
topics: [substitution]
statement: |
  Compute \(\int_0^1\frac{x}{\sqrt{1+x^2}}\,dx\).
solution: |
  Set \(u=1+x^2\). Then \(\frac{x}{\sqrt{1+x^2}}=\frac{u'}{2\sqrt{u}}\), which is the derivative of \(\sqrt{u}\).

  \[
  \begin{aligned}
  &\int_0^1\frac{x}{\sqrt{1+x^2}}\,dx\\
  &=\left[\sqrt{1+x^2}\right]_0^1\\
  &=\sqrt{2}-1.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x/sqrt(1 + x**2), (x, 0, 1))
      expected: "sqrt(2) - 1"
:::

::: exercise
id: l3-substitution.r7
tier: standard
topics: [substitution]
statement: |
  Find an antiderivative of \(\frac{e^x}{1+e^{2x}}\).
solution: |
  Write \(e^{2x}=(e^x)^2\) and set \(u=e^x\). Then \(u'=e^x\), and the integrand is \(\frac{u'}{1+u^2}\).

  \[
  \int\frac{e^x}{1+e^{2x}}\,dx=\arctan(e^x)+C.
  \]
provenance: written-for-site
steps:
  - Set \(u=e^x\), so the integrand is \(\frac{u'}{1+u^2}\).
  - The antiderivative is \(\arctan(e^x)+C\).
verification:
  checks:
    - expr: diff(atan(exp(x)), x) - exp(x)/(1 + exp(2*x))
      expected: "0"
:::

::: exercise
id: l3-substitution.r8
tier: standard
topics: [substitution]
statement: |
  Find an antiderivative of \(\frac{1}{x\ln x}\) on \((1,\infty)\).
solution: |
  Set \(u=\ln x\). On \((1,\infty)\) one has \(u>0\) and \(u'=\frac{1}{x}\), so the integrand is \(\frac{u'}{u}\).

  \[
  \int\frac{1}{x\ln x}\,dx=\ln(\ln x)+C.
  \]
provenance: written-for-site
steps:
  - Set \(u=\ln x\) on \((1,\infty)\).
  - Integrate \(\frac{u'}{u}\) to get \(\ln(\ln x)+C\).
verification:
  checks:
    - expr: diff(log(log(x)), x) - 1/(x*log(x))
      expected: "0"
:::

::: exercise
id: l3-substitution.r9
tier: standard
topics: [substitution]
statement: |
  Compute \(\int_0^{\pi/4}\frac{\tan x}{\cos^2 x}\,dx\).
solution: |
  The factor \(\frac{1}{\cos^2 x}\) is the derivative of \(\tan x\), so the integrand matches \(u'u\) with \(u=\tan x\).

  \[
  \begin{aligned}
  &\int_0^{\pi/4}\frac{\tan x}{\cos^2 x}\,dx\\
  &=\left[\frac{1}{2}\tan^2 x\right]_0^{\pi/4}\\
  &=\frac{1}{2}(1)^2-\frac{1}{2}(0)^2\\
  &=\frac{1}{2}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Recognise \(\frac{1}{\cos^2 x}\) as the derivative of \(\tan x\).
  - Evaluate \(\frac{1}{2}\tan^2 x\) from \(0\) to \(\frac{\pi}{4}\).
verification:
  checks:
    - expr: integrate(tan(x)/cos(x)**2, (x, 0, pi/4))
      expected: "1/2"
:::

::: exercise
id: l3-substitution.r10
tier: standard
topics: [substitution]
statement: |
  Compute \(\int_0^1 x^2(1+x^3)^4\,dx\).
solution: |
  Set \(u=1+x^3\), so \(u'=3x^2\). Leave \((1+x^3)^4\) as a power of \(u\).

  \[
  \begin{aligned}
  &\int_0^1 x^2(1+x^3)^4\,dx\\
  &=\frac{1}{3}\int_0^1 3x^2(1+x^3)^4\,dx\\
  &=\frac{1}{3}\left[\frac{(1+x^3)^5}{5}\right]_0^1\\
  &=\frac{1}{15}(32-1)\\
  &=\frac{31}{15}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Set \(u=1+x^3\), so \(du=3x^2\,dx\).
  - Integrate \(\frac{1}{15}(1+x^3)^5\) from \(0\) to \(1\).
  - The value is \(\frac{31}{15}\).
verification:
  checks:
    - expr: integrate(x**2*(1 + x**3)**4, (x, 0, 1))
      expected: "31/15"
:::

::: exercise
id: l3-substitution.r11
tier: standard
topics: [substitution]
statement: |
  Compute \(\int_0^{\pi/2}\sin x\,e^{\cos x}\,dx\).
solution: |
  The derivative of \(\cos x\) is \(-\sin x\), so \(\sin x\,e^{\cos x}\) is the derivative of \(-e^{\cos x}\).

  \[
  \begin{aligned}
  &\int_0^{\pi/2}\sin x\,e^{\cos x}\,dx\\
  &=\left[-e^{\cos x}\right]_0^{\pi/2}\\
  &=-e^{0}+e^{1}\\
  &=e-1.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Differentiate \(-e^{\cos x}\) to recover \(\sin x\,e^{\cos x}\).
  - Evaluate \(-e^{\cos x}\) from \(0\) to \(\frac{\pi}{2}\).
verification:
  checks:
    - expr: integrate(sin(x)*exp(cos(x)), (x, 0, pi/2))
      expected: "exp(1) - 1"
:::

::: exercise
id: l3-substitution.c1
tier: standard
topics: [substitution]
statement: |
  Compute \(\int_0^1 x(1-x)^4\,dx\).
solution: |
  Set \(u=1-x\). Then \(x=1-u\) and \(du=-dx\).

  - The limit \(x=0\) becomes \(u=1\).
  - The limit \(x=1\) becomes \(u=0\).

  \[
  \begin{aligned}
  &\int_0^1 x(1-x)^4\,dx\\
  &=\int_1^0(1-u)u^4(-1)\,du\\
  &=\int_1^0-(u^4-u^5)\,du\\
  &=\int_0^1(u^4-u^5)\,du\\
  &=\frac{1}{5}-\frac{1}{6}\\
  &=\frac{1}{30}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Set \(u=1-x\), so \(x=1-u\) and \(du=-dx\).
  - Change the limits from \(0,1\) to \(1,0\).
  - Integrate \(u^4-u^5\) from \(0\) to \(1\).
verification:
  checks:
    - expr: integrate(x*(1 - x)**4, (x, 0, 1))
      expected: "1/30"
:::

::: exercise
id: l3-substitution.c2
tier: standard
topics: [substitution]
statement: |
  Compute \(\int_0^3 x\sqrt{x+1}\,dx\).
solution: |
  Set \(u=x+1\), so \(x=u-1\) and \(dx=du\). The limits change from \(x=0,3\) to \(u=1,4\).

  \[
  \begin{aligned}
  &\int_0^3 x\sqrt{x+1}\,dx\\
  &=\int_1^4(u-1)u^{1/2}\,du\\
  &=\left[\frac{2}{5}u^{5/2}-\frac{2}{3}u^{3/2}\right]_1^4.
  \end{aligned}
  \]

  The evaluation is
  \[
  \begin{aligned}
  &\bigl(\frac{64}{5}-\frac{16}{3}\bigr)-\bigl(\frac{2}{5}-\frac{2}{3}\bigr)\\
  &=\frac{112}{15}+\frac{4}{15}\\
  &=\frac{116}{15}.
  \end{aligned}
  \]
  The substitution \(u=\sqrt{x+1}\) gives \(x=u^2-1\) and \(dx=2u\,du\), and the same value.
provenance: written-for-site
steps:
  - Set \(u=x+1\), so \(x=u-1\), with limits \(1\) and \(4\).
  - Integrate \(u^{3/2}-u^{1/2}\).
  - Evaluate \(\frac{2}{5}u^{5/2}-\frac{2}{3}u^{3/2}\) from \(1\) to \(4\).
verification:
  checks:
    - expr: integrate(x*sqrt(x + 1), (x, 0, 3))
      expected: "116/15"
:::

::: exercise
id: l3-substitution.c3
tier: basic
topics: [substitution]
statement: |
  Compute \(\int_1^4\frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx\).
solution: |
  Set \(u=\sqrt{x}\), so \(du=\frac{1}{2\sqrt{x}}\,dx\). The limits change from \(x=1,4\) to \(u=1,2\), and \(\frac{1}{\sqrt{x}}\,dx=2\,du\).

  \[
  \int_1^4\frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx=\int_1^2 2e^u\,du=2(e^2-e).
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(exp(sqrt(x))/sqrt(x), (x, 1, 4))
      expected: "2*(exp(2) - exp(1))"
:::

::: exercise
id: l3-substitution.c4
tier: standard
topics: [substitution]
statement: |
  Compute \(\int_0^{\pi/2}\frac{\cos x}{1+\sin^2 x}\,dx\).
solution: |
  Set \(u=\sin x\). Then \(du=\cos x\,dx\), and the limits run from \(0\) to \(1\).

  \[
  \begin{aligned}
  &\int_0^{\pi/2}\frac{\cos x}{1+\sin^2 x}\,dx\\
  &=\int_0^1\frac{1}{1+u^2}\,du\\
  &=\arctan 1-\arctan 0\\
  &=\frac{\pi}{4}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Set \(u=\sin x\), with limits \(0\) and \(1\).
  - Integrate \(\frac{1}{1+u^2}\) to get \(\arctan 1\).
verification:
  checks:
    - expr: integrate(cos(x)/(1 + sin(x)**2), (x, 0, pi/2))
      expected: "pi/4"
:::

::: exercise
id: l3-substitution.c5
tier: basic
topics: [substitution]
statement: |
  Compute \(\int_1^e\frac{(1+\ln x)^2}{x}\,dx\).
solution: |
  Set \(u=1+\ln x\), so \(du=\frac{1}{x}\,dx\).

  - The limit \(x=1\) becomes \(u=1\).
  - The limit \(x=e\) becomes \(u=2\).

  \[
  \begin{aligned}
  &\int_1^e\frac{(1+\ln x)^2}{x}\,dx\\
  &=\int_1^2 u^2\,du\\
  &=\frac{8-1}{3}\\
  &=\frac{7}{3}.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate((1 + log(x))**2/x, (x, 1, E))
      expected: "7/3"
:::

::: exercise
id: l3-substitution.c6
tier: basic
topics: [substitution]
statement: |
  Compute \(\int_0^{\ln 2}\frac{e^x}{1+e^x}\,dx\).
solution: |
  The integrand is \(\frac{u'}{u}\) with \(u=1+e^x\).

  \[
  \begin{aligned}
  &\int_0^{\ln 2}\frac{e^x}{1+e^x}\,dx\\
  &=\bigl[\ln(1+e^x)\bigr]_0^{\ln 2}\\
  &=\ln(1+2)-\ln(1+1)\\
  &=\ln 3-\ln 2\\
  &=\ln\frac{3}{2}.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(exp(x)/(1 + exp(x)), (x, 0, log(2)))
      expected: "log(3/2)"
:::

::: exercise
id: l3-substitution.c7
tier: standard
topics: [substitution]
statement: |
  Compute \(\int_0^1\frac{1}{1+\sqrt{x}}\,dx\).
solution: |
  Set \(u=\sqrt{x}\), so \(x=u^2\) and \(dx=2u\,du\). The limits stay \(0\) and \(1\). Then \(\frac{u}{1+u}=1-\frac{1}{1+u}\).

  \[
  \begin{aligned}
  &\int_0^1\frac{1}{1+\sqrt{x}}\,dx\\
  &=\int_0^1\frac{2u}{1+u}\,du\\
  &=2\int_0^1\left(1-\frac{1}{1+u}\right)\,du\\
  &=2\bigl(1-\ln 2\bigr)\\
  &=2-2\ln 2.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Set \(u=\sqrt{x}\), so \(dx=2u\,du\).
  - Rewrite \(\frac{2u}{1+u}\) as \(2\left(1-\frac{1}{1+u}\right)\).
  - Evaluate from \(0\) to \(1\).
verification:
  checks:
    - expr: integrate(1/(1 + sqrt(x)), (x, 0, 1))
      expected: "2 - 2*log(2)"
:::

::: exercise
id: l3-substitution.c8
tier: standard
topics: [substitution]
statement: |
  Compute \(\int_2^3\frac{x}{(x-1)^2}\,dx\).
solution: |
  Set \(u=x-1\), so \(x=u+1\) and \(dx=du\). The limits change from \(x=2,3\) to \(u=1,2\). Split \(\frac{u+1}{u^2}=\frac{1}{u}+\frac{1}{u^2}\).

  \[
  \begin{aligned}
  &\int_2^3\frac{x}{(x-1)^2}\,dx\\
  &=\int_1^2\frac{u+1}{u^2}\,du\\
  &=\left[\ln u-\frac{1}{u}\right]_1^2\\
  &=\left(\ln 2-\frac{1}{2}\right)-(0-1)\\
  &=\ln 2+\frac{1}{2}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Set \(u=x-1\), with limits \(1\) and \(2\).
  - Split the integrand into \(\frac{1}{u}+\frac{1}{u^2}\).
  - Evaluate \(\ln u-\frac{1}{u}\) from \(1\) to \(2\).
verification:
  checks:
    - expr: integrate(x/(x - 1)**2, (x, 2, 3))
      expected: "log(2) + 1/2"
:::

::: exercise
id: l3-substitution.c9
tier: standard
topics: [substitution]
statement: |
  Compute \(\int_0^{\ln 3}\frac{1}{e^x+e^{-x}}\,dx\).
solution: |
  Multiply the numerator and the denominator by \(e^x\), then set \(u=e^x\).

  \[
  \frac{1}{e^x+e^{-x}}=\frac{e^x}{e^{2x}+1}.
  \]

  Then \(du=e^x\,dx\).

  - The limit \(x=0\) becomes \(u=1\).
  - The limit \(x=\ln 3\) becomes \(u=3\).

  \[
  \begin{aligned}
  &\int_0^{\ln 3}\frac{1}{e^x+e^{-x}}\,dx\\
  &=\int_1^3\frac{1}{1+u^2}\,du\\
  &=\arctan 3-\arctan 1\\
  &=\arctan 3-\frac{\pi}{4}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Rewrite the integrand as \(\frac{e^x}{e^{2x}+1}\).
  - Set \(u=e^x\), with limits \(1\) and \(3\).
  - Evaluate \(\arctan u\) from \(1\) to \(3\).
verification:
  checks:
    - expr: diff(atan(exp(x)), x) - 1/(exp(x) + exp(-x))
      expected: "0"
    - expr: atan(exp(log(3))) - atan(exp(0))
      expected: "atan(3) - pi/4"
:::

::: exercise
id: l3-substitution.c10
tier: exam
topics: [substitution]
statement: |
  Compute \(\int_0^1\frac{\sqrt{x}}{1+x}\,dx\).
solution: |
  Set \(u=\sqrt{x}\), so \(x=u^2\) and \(dx=2u\,du\). The limits stay \(0\) and \(1\). Write \(\frac{u^2}{1+u^2}=1-\frac{1}{1+u^2}\).

  \[
  \begin{aligned}
  &\int_0^1\frac{\sqrt{x}}{1+x}\,dx\\
  &=\int_0^1\frac{2u^2}{1+u^2}\,du\\
  &=2\int_0^1\left(1-\frac{1}{1+u^2}\right)\,du\\
  &=2\left(1-\frac{\pi}{4}\right)\\
  &=2-\frac{\pi}{2}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Set \(u=\sqrt{x}\), so \(dx=2u\,du\).
  - Rewrite \(\frac{2u^2}{1+u^2}\) as \(2\left(1-\frac{1}{1+u^2}\right)\).
  - Evaluate from \(0\) to \(1\) to get \(2-\frac{\pi}{2}\).
verification:
  checks:
    - expr: integrate(sqrt(x)/(1 + x), (x, 0, 1))
      expected: "2 - pi/2"
:::

::: exercise
id: l3-substitution.midterm-mock-1-ex6.3
statement: |
  Compute \(\displaystyle\int_0^1\tan(t)\,dt\) using the substitution \(y=\cos(t)\).
solution: |
  The substitution \(y=\cos t\) gives \(dy=-\sin t\,dt\). The limits change from \(t=0\) to \(t=1\) into \(y=1\) to \(y=\cos 1\). The integral becomes \(-\int_1^{\cos 1}\frac{dy}{y}=\int_{\cos 1}^1\frac{dy}{y}=-\ln(\cos 1)\).
steps:
  - Substitute \(y=\cos t\).
  - Value \(-\ln(\cos 1)\).
verification:
  checks:
    - expr: integrate(tan(t), (t, 0, 1))
      expected: -log(cos(1))
    - expr: integrate(-1/y, (y, 1, cos(1)))
      expected: -log(cos(1))
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "6.3"
  points: 1
:::

::: exercise
id: l3-substitution.midterm-2022-ex4ii
statement: |
  Compute \(\int_{0}^{\pi/4}\tan(x)\,dx\) using the substitution \(y=\cos(x)\).
tier: exam
topics:
  - substitution
pastExam:
  year: 2022
  paper: Midterm
  question: 4ii
  points: 1
solution: |
  With \(y=\cos x\) one has \(dy=-\sin x\,dx\), so \(\tan x\,dx=-dy/y\).

  - At \(x=0\), \(y=1\).
  - At \(x=\pi/4\), \(y=1/\sqrt{2}\).

  The integral is
  \[
  \begin{aligned}
  &\int_{1}^{1/\sqrt{2}}\Bigl(-\frac{1}{y}\Bigr)\,dy\\
  &=\bigl[\ln y\bigr]_{1/\sqrt{2}}^{1}\\
  &=-\ln\bigl(2^{-1/2}\bigr)\\
  &=\frac12\ln 2.
  \end{aligned}
  \]
provenance: official-key
steps:
  - Substitution \(y=\cos x\) and the new limits.
  - Evaluation \(\frac12\ln 2\).
verification:
  checks:
    - expr: integrate(tan(x), (x, 0, pi/4))
      expected: log(2)/2
    - expr: integrate(-1/y, (y, 1, sqrt(2)/2))
      expected: log(2)/2
:::

::: exercise
id: l3-substitution.midterm-2024-ex4.2
statement: |
  Compute, letting \(s = t^2\),
  \[ \int_{-1}^{1} (t^2 + 1)^{1/3} t\, dt. \]
tier: exam
topics:
  - substitution
pastExam:
  year: 2024
  paper: Midterm
  question: "4.2"
  points: 1
solution: |
  The integrand is odd and continuous on a symmetric interval, so the integral is \(0\).

  The substitution \(s = t^2\) is two-to-one on \([-1, 1]\), so the interval is split at \(0\). Then \(ds = 2t\, dt\).

  - From \(-1\) to \(0\), \(s\) runs from \(1\) to \(0\).
  - From \(0\) to \(1\), \(s\) runs from \(0\) to \(1\).

  The two halves
  \[ \int_1^0 \tfrac{1}{2}(s+1)^{1/3}\, ds + \int_0^1 \tfrac{1}{2}(s+1)^{1/3}\, ds \]
  cancel, and the value is again \(0\).
provenance: written-for-site
steps:
  - Odd integrand on a symmetric interval, or the substitution split at \(0\).
  - Value \(0\).
verification:
  checks:
    - expr: integrate((t**2+1)**Rational(1,3)*t, (t, -1, 1))
      expected: 0
    - expr: integrate((s+1)**Rational(1,3)/2, (s, 1, 0)) + integrate((s+1)**Rational(1,3)/2, (s, 0, 1))
      expected: 0
:::

::: exercise
id: l3-substitution.midterm-2024-ex4.5
statement: |
  Compute, letting \(t = (1 + \sin(x))/2\),
  \[ \int_0^1 \frac{1}{\sqrt{t(1-t)}}\, dt. \]
tier: exam
topics:
  - substitution
pastExam:
  year: 2024
  paper: Midterm
  question: "4.5"
  points: 1
solution: |
  The integrand is improper at \(t = 0\) and at \(t = 1\). With \(t = (1 + \sin x)/2\) one has \(dt = (\cos x)/2\, dx\) and
  \[
  \begin{aligned}
  t(1-t) &= \frac{1+\sin x}{2} \cdot \frac{1-\sin x}{2}\\
  &= \frac{\cos^2 x}{4},
  \end{aligned}
  \]
  so \(\sqrt{t(1-t)} = |\cos x|/2\). The limits \(t = 0\) and \(t = 1\) become \(\sin x = -1\) and \(\sin x = 1\). Taking \(x\) from \(-\pi/2\) to \(\pi/2\) keeps \(\cos x \ge 0\), and the integrand collapses to \(dx\). The integral is
  \[ \int_{-\pi/2}^{\pi/2} 1\, dx = \pi. \]
provenance: written-for-site
steps:
  - Substitution \(t = (1 + \sin x)/2\) with \(x\) from \(-\pi/2\) to \(\pi/2\).
  - Value \(\pi\).
verification:
  checks:
    - expr: integrate(1/sqrt(t*(1-t)), (t, 0, 1))
      expected: pi
    - expr: trigsimp(4*((1+sin(x))/2)*(1-(1+sin(x))/2) - cos(x)**2)
      expected: 0
    - expr: integrate(1, (x, -pi/2, pi/2))
      expected: pi
:::

::: exercise
id: l3-substitution.midterm-2024-ex4.6
statement: |
  Compute, letting \(s = \sqrt{t}\),
  \[ \int_0^{\infty} \sqrt{t}\, e^{-\sqrt{t}}\, dt. \]
tier: exam
topics:
  - substitution
  - improper-integrals
pastExam:
  year: 2024
  paper: Midterm
  question: "4.6"
  points: 1
solution: |
  Set \(s = \sqrt{t}\), so \(t = s^2\) and \(dt = 2s\, ds\). The limits \(t = 0\) and \(t \to +\infty\) become \(s = 0\) and \(s \to +\infty\). The integral is
  \[
  \begin{aligned}
  &\int_0^{\infty} s\, e^{-s} \cdot 2s\, ds\\
  &= 2\int_0^{\infty} s^2 e^{-s}\, ds\\
  &= 2 \cdot 2!\\
  &= 4.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Substitution \(s = \sqrt{t}\), \(dt = 2s\, ds\).
  - Value \(4\).
verification:
  checks:
    - expr: integrate(sqrt(t)*exp(-sqrt(t)), (t, 0, oo))
      expected: 4
    - expr: integrate(2*s**2*exp(-s), (s, 0, oo))
      expected: 4
:::

::: exercise
id: l3-substitution.midterm-2025-ex5.4
number: "5.4"
statement: |
  Compute \(\displaystyle\int_0^1\frac{1}{x\ln x}\,dx\) letting \(t=\ln x\).
tier: exam
solution: |
  The integrand is undefined at both endpoints of \([0,1]\). Take \(0<\alpha<\beta<1\) and \(t=\ln x\), so \(dt=dx/x\). Then
  \[
  \int_{\alpha}^{\beta}\frac{1}{x\ln x}\,dx=\int_{\ln\alpha}^{\ln\beta}\frac{dt}{t}=\ln\Bigl|\frac{\ln\beta}{\ln\alpha}\Bigr|.
  \]
  As \(\alpha\to 0^+\) and \(\beta\to 1^-\) this tends to \(-\infty\). The integral does not exist. An antiderivative on \((0,1)\) is \(\ln(-\ln x)\).
provenance: official-key
steps:
  - The substitution \(t=\ln x\).
  - Divergence of the improper integral on \((0,1)\).
verification:
  checks:
    - expr: diff(log(-log(x)), x) - 1/(x*log(x))
      expected: "0"
    - expr: limit(1/log(-log(a)), a, 0, dir='+')
      expected: "0"
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "5.4"
  points: 1
:::

::: exercise
id: l3-substitution.midterm-2026-ex5.4
number: "5.4"
statement: |
  Compute
  \[ \int_0^1 \frac{1}{\sqrt{1+x^2}}\,dx \]
  letting \(x=\sinh t\). Hint: \(\cosh^2 t-\sinh^2 t=1\) and recall \(\sinh t=(e^t-e^{-t})/2\), \(\cosh t=(e^t+e^{-t})/2\).
tier: exam
topics:
  - substitution
pastExam:
  year: 2026
  paper: Midterm
  question: "5.4"
  points: 1
solution: |
  The substitution \(x=\sinh t\) sends \(x=0\) to \(t=0\) and \(x=1\) to \(t=\operatorname{argsinh}(1)\), with \(dx=\cosh t\,dt\). Then \(\sqrt{1+\sinh^2 t}=\cosh t\) for \(t\ge 0\), so
  \[
  \begin{aligned}
  &\int_0^1\frac{dx}{\sqrt{1+x^2}}\\
  &= \int_0^{\operatorname{argsinh}(1)}\frac{\cosh t}{\cosh t}\,dt\\
  &= \operatorname{argsinh}(1)\\
  &=\ln(1+\sqrt{2}).
  \end{aligned}
  \]
  To see the logarithm, set \(\sinh t=1\) and \(u=e^t\). Then \(u-1/u=2\), so \(u^2-2u-1=0\). The positive root is \(u=1+\sqrt{2}\), hence \(t=\ln(1+\sqrt{2})\).
provenance: official-key
steps:
  - Substitution \(x=\sinh t\) reducing the integral to \(\operatorname{argsinh}(1)\).
  - The identity \(\operatorname{argsinh}(1)=\ln(1+\sqrt{2})\).
verification:
  checks:
    - expr: integrate(1/sqrt(1 + x**2), (x, 0, 1))
      expected: asinh(1)
    - expr: asinh(1)
      expected: log(1 + sqrt(2))
:::

::: exercise
id: l3-substitution.midterm-2026-ex5.5
number: "5.5"
statement: |
  Compute
  \[ \int_0^{\pi/2} \cos x\sin x\,dx \]
  letting \(t=\sin x\).
tier: exam
topics:
  - substitution
pastExam:
  year: 2026
  paper: Midterm
  question: "5.5"
  points: 1
solution: |
  With \(t=\sin x\) one has \(dt=\cos x\,dx\), and \(t\) runs from \(0\) to \(1\). Thus
  \[
  \begin{aligned}
  &\int_0^{\pi/2}\cos x\sin x\,dx\\
  &= \int_0^1 t\,dt\\
  &= \Bigl[\frac{t^2}{2}\Bigr]_0^1\\
  &= \frac12.
  \end{aligned}
  \]
provenance: official-key
steps:
  - Substitution \(t=\sin x\) and evaluation, value \(1/2\).
verification:
  checks:
    - expr: integrate(cos(x)*sin(x), (x, 0, pi/2))
      expected: Rational(1, 2)
    - expr: integrate(t, (t, 0, 1))
      expected: Rational(1, 2)
:::

::: exercise
id: l3-substitution.midterm-predicted-a-ex5.3
number: "5.3"
statement: |
  Compute \(\displaystyle\int_1^{e} \frac{\ln x}{x}\, dx\), letting \(u = \ln x\).
tier: exam
topics:
  - substitution
solution: |
  With \(u = \ln x\) one has \(du = dx/x\). The limits change from \(x = 1\) to \(x = e\) into \(u = 0\) to \(u = 1\). The integral is \(\int_0^1 u\, du = \frac12\).
provenance: written-for-site
steps:
  - Substitute u = ln x and change limits.
  - Evaluate to 1/2.
verification:
  checks:
    - expr: integrate(log(x)/x, (x, 1, E))
      expected: 1/2
:::

::: exercise
id: l3-substitution.midterm-predicted-b-ex4.2
number: "4.2"
statement: |
  Compute \(\displaystyle\int_0^1 \frac{x}{1 + x^2}\, dx\).
tier: exam
topics:
  - substitution
solution: |
  The substitution \(u = 1 + x^2\) gives \(du = 2x\, dx\). The integral is \(\dfrac12 \bigl[\ln(1 + x^2)\bigr]_0^1 = \dfrac{\ln 2}{2}\).
provenance: written-for-site
steps:
  - Recognize the derivative of the denominator.
  - Evaluate to (ln 2)/2.
verification:
  checks:
    - expr: integrate(x/(1 + x**2), (x, 0, 1))
      expected: log(2)/2
:::

::: exercise
id: l3-substitution.midterm-predicted-b-ex4.4
number: "4.4"
statement: |
  Compute \(\displaystyle\int_0^1 x^2\sqrt{1 + x^3}\, dx\).
tier: exam
topics:
  - substitution
solution: |
  Set \(u = 1 + x^3\), so \(du = 3x^2\, dx\). The limits change from 0 and 1 into 1 and 2. The integral is
  \[
  \begin{aligned}
  &\frac13 \int_1^2 u^{1/2}\, du\\
  &= \frac29 \bigl[u^{3/2}\bigr]_1^2\\
  &= \frac29\bigl(2\sqrt{2} - 1\bigr).
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Substitute u = 1 + x^3.
  - Evaluate to (2/9)(2\sqrt{2} - 1).
verification:
  checks:
    - expr: integrate(x**2*sqrt(1 + x**3), (x, 0, 1))
      expected: Rational(2, 9)*(2*sqrt(2) - 1)
:::

::: exercise
id: l3-substitution.midterm-predicted-b-ex4.7
number: "4.7"
statement: |
  Compute \(\displaystyle\int_{-1}^{1} \frac{2x + 3}{x^2 + 3x + 4}\, dx\).
tier: exam
topics:
  - substitution
solution: |
  The numerator is the derivative of the denominator. The discriminant of \(x^2 + 3x + 4\) is \(9 - 16 < 0\), so the quadratic has no real root and the integrand is continuous on \([-1, 1]\). The integral is
  \[
  \begin{aligned}
  &\bigl[\ln(x^2 + 3x + 4)\bigr]_{-1}^{1}\\
  &= \ln 8 - \ln 2\\
  &= \ln 4\\
  &= 2\ln 2.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Match the numerator to the derivative of the denominator.
  - Evaluate to 2 ln 2.
verification:
  checks:
    - expr: integrate((2*x + 3)/(x**2 + 3*x + 4), (x, -1, 1))
      expected: 2*log(2)
:::

::: exercise
id: l3-substitution.handout-8-1-1
number: "8.1.1"
tier: basic
topics:
  - substitution
statement: |
  Find the antiderivative of \((1-t)^9\,dt\).
solution: |
  The inside function is \(u = 1 - t\). Its derivative is \(u' = -1\), so \(du = -dt\) and \(dt = -du\).

  \[
  \begin{aligned}
  \int (1-t)^9\,dt &= -\int u^9\,du\\
  &= -\frac{u^{10}}{10} + C\\
  &= -\frac{(1-t)^{10}}{10} + C.
  \end{aligned}
  \]
  The derivative of \(-\frac{(1-t)^{10}}{10}\) is \(-\frac{10(1-t)^9\cdot(-1)}{10} = (1-t)^9\), which confirms the sign.

  The antiderivative is \(-\dfrac{(1-t)^{10}}{10} + C\).
provenance: handout-answer
steps:
  - Set \(u = 1 - t\), so \(dt = -du\).
  - Integrate \(-u^9\) to get \(-u^{10}/10\).
  - Return to \(t\). The antiderivative is \(-(1-t)^{10}/10 + C\).
verification:
  checks:
    - expr: diff(-(1 - t)**10/10, t)
      expected: "(1 - t)**9"
    - expr: integrate((1 - t)**9, (t, 0, 1))
      expected: "Rational(1, 10)"
:::


::: exercise
id: l3-substitution.handout-8-1-2
number: "8.1.2"
tier: standard
topics:
  - substitution
statement: |
  Find the antiderivative of \((x^2+1)^2\,dx\). Compare expanding the square with substituting \(u = x^2 + 1\).
solution: |
  The substitution \(u = x^2 + 1\) needs the factor \(du = 2x\,dx\) in the integrand. The integrand has no factor \(x\), so the substitution does not remove \(x\): it leaves \(x = \sqrt{u-1}\) and the integral \(\int \frac{u^2}{2\sqrt{u-1}}\,du\), which is harder than the original.

  Expanding works directly. The square is
  \[
  (x^2+1)^2 = x^4 + 2x^2 + 1.
  \]
  Each term is a power of \(x\), so
  \[
  \begin{aligned}
  \int (x^2+1)^2\,dx &= \int (x^4 + 2x^2 + 1)\,dx\\
  &= \frac{x^5}{5} + \frac{2x^3}{3} + x + C.
  \end{aligned}
  \]
  The antiderivative is \(\dfrac{x^5}{5} + \dfrac{2x^3}{3} + x + C\).
provenance: handout-answer
steps:
  - A substitution needs the derivative of the inside function as a factor. Here the factor \(2x\) is missing.
  - Expand \((x^2+1)^2 = x^4 + 2x^2 + 1\).
  - Integrate term by term. The antiderivative is \(x^5/5 + 2x^3/3 + x + C\).
verification:
  checks:
    - expr: expand((x**2 + 1)**2)
      expected: "x**4 + 2*x**2 + 1"
    - expr: diff(x**5/5 + 2*x**3/3 + x, x)
      expected: "(x**2 + 1)**2"
:::


::: exercise
id: l3-substitution.handout-8-1-3
number: "8.1.3"
tier: basic
topics:
  - substitution
statement: |
  Find the antiderivative of \(x\,(x^2+1)^{100}\,dx\).
solution: |
  The derivative of \(x^2 + 1\) is \(2x\), and the integrand contains the factor \(x\). Set \(u = x^2 + 1\). Then \(du = 2x\,dx\), so \(x\,dx = \frac{1}{2}\,du\).

  \[
  \begin{aligned}
  \int x\,(x^2+1)^{100}\,dx &= \frac{1}{2}\int u^{100}\,du\\
  &= \frac{1}{2}\cdot\frac{u^{101}}{101} + C\\
  &= \frac{(x^2+1)^{101}}{202} + C.
  \end{aligned}
  \]
  The antiderivative is \(\dfrac{(x^2+1)^{101}}{202} + C\).
provenance: handout-answer
steps:
  - Set \(u = x^2 + 1\), so \(x\,dx = \frac{1}{2}\,du\).
  - Integrate \(\frac{1}{2}u^{100}\) to get \(u^{101}/202\).
  - Return to \(x\). The antiderivative is \((x^2+1)^{101}/202 + C\).
verification:
  checks:
    - expr: diff((x**2 + 1)**101/202, x)
      expected: "x*(x**2 + 1)**100"
:::


::: exercise
id: l3-substitution.handout-8-1-4
number: "8.1.4"
tier: standard
topics:
  - substitution
statement: |
  Find the antiderivative of \(\dfrac{1}{\sqrt[3]{1-5t}}\,dt = (1-5t)^{-1/3}\,dt\) on the interval \(t < \frac{1}{5}\).
solution: |
  On \(t < \frac{1}{5}\) the inside function \(u = 1 - 5t\) is positive. Its derivative is \(-5\), so \(du = -5\,dt\) and \(dt = -\frac{1}{5}\,du\).

  \[
  \begin{aligned}
  \int (1-5t)^{-1/3}\,dt &= -\frac{1}{5}\int u^{-1/3}\,du\\
  &= -\frac{1}{5}\cdot\frac{u^{2/3}}{2/3} + C\\
  &= -\frac{3}{10}\,(1-5t)^{2/3} + C.
  \end{aligned}
  \]
  The derivative check is
  \[
  \frac{d}{dt}\Bigl(-\frac{3}{10}(1-5t)^{2/3}\Bigr) = -\frac{3}{10}\cdot\frac{2}{3}(1-5t)^{-1/3}\cdot(-5) = (1-5t)^{-1/3}.
  \]
  The antiderivative is \(-\dfrac{3}{10}(1-5t)^{2/3} + C\).
provenance: handout-answer
steps:
  - Set \(u = 1 - 5t\), so \(dt = -\frac{1}{5}\,du\).
  - Integrate \(-\frac{1}{5}u^{-1/3}\) to get \(-\frac{3}{10}u^{2/3}\).
  - Return to \(t\). The antiderivative is \(-\frac{3}{10}(1-5t)^{2/3} + C\).
verification:
  checks:
    - expr: diff(-Rational(3, 10)*(1 - 5*t)**Rational(2, 3), t)
      expected: "(1 - 5*t)**Rational(-1, 3)"
:::


::: exercise
id: l3-substitution.handout-8-1-6
number: "8.1.6"
tier: basic
topics:
  - substitution
statement: |
  Find the antiderivative of \(x\sqrt{100 - x^2}\,dx\) on \((-10, 10)\).
solution: |
  The derivative of \(100 - x^2\) is \(-2x\), and the integrand contains the factor \(x\). Set \(u = 100 - x^2\). Then \(du = -2x\,dx\), so \(x\,dx = -\frac{1}{2}\,du\). On \((-10, 10)\) one has \(u > 0\).

  \[
  \begin{aligned}
  \int x\sqrt{100 - x^2}\,dx &= -\frac{1}{2}\int u^{1/2}\,du\\
  &= -\frac{1}{2}\cdot\frac{2}{3}\,u^{3/2} + C\\
  &= -\frac{(100 - x^2)^{3/2}}{3} + C.
  \end{aligned}
  \]
  The antiderivative is \(-\dfrac{(100 - x^2)^{3/2}}{3} + C\).
provenance: handout-answer
steps:
  - Set \(u = 100 - x^2\), so \(x\,dx = -\frac{1}{2}\,du\).
  - Integrate \(-\frac{1}{2}u^{1/2}\) to get \(-\frac{1}{3}u^{3/2}\).
  - Return to \(x\). The antiderivative is \(-(100-x^2)^{3/2}/3 + C\).
verification:
  checks:
    - expr: diff(-(100 - x**2)**Rational(3, 2)/3, x)
      expected: "x*sqrt(100 - x**2)"
:::


::: exercise
id: l3-substitution.handout-8-1-7
number: "8.1.7"
tier: standard
topics:
  - substitution
statement: |
  Find the antiderivative of \(\dfrac{x^2}{\sqrt{1 - x^3}}\,dx\) on \((-\infty, 1)\).
solution: |
  The derivative of \(1 - x^3\) is \(-3x^2\), and the numerator is \(x^2\). Set \(u = 1 - x^3\). Then \(du = -3x^2\,dx\), so \(x^2\,dx = -\frac{1}{3}\,du\). On \((-\infty, 1)\) one has \(u > 0\).

  \[
  \begin{aligned}
  \int \frac{x^2}{\sqrt{1 - x^3}}\,dx &= -\frac{1}{3}\int u^{-1/2}\,du\\
  &= -\frac{1}{3}\cdot 2u^{1/2} + C\\
  &= -\frac{2}{3}\sqrt{1 - x^3} + C.
  \end{aligned}
  \]
  The antiderivative is \(-\dfrac{2}{3}\sqrt{1 - x^3} + C\).
provenance: handout-answer
steps:
  - Set \(u = 1 - x^3\), so \(x^2\,dx = -\frac{1}{3}\,du\).
  - Integrate \(-\frac{1}{3}u^{-1/2}\) to get \(-\frac{2}{3}u^{1/2}\).
  - Return to \(x\). The antiderivative is \(-\frac{2}{3}\sqrt{1-x^3} + C\).
verification:
  checks:
    - expr: diff(-2*sqrt(1 - x**3)/3, x)
      expected: "x**2/sqrt(1 - x**3)"
:::


::: exercise
id: l3-substitution.handout-8-1-8
number: "8.1.8"
tier: standard
topics:
  - substitution
statement: |
  Find the antiderivative of \(\cos(\pi t)\,\cos\bigl(\sin(\pi t)\bigr)\,dt\).
solution: |
  The inside function of the outer cosine is \(u = \sin(\pi t)\). By the chain rule its derivative is \(\pi\cos(\pi t)\), so \(du = \pi\cos(\pi t)\,dt\) and \(\cos(\pi t)\,dt = \frac{1}{\pi}\,du\).

  \[
  \begin{aligned}
  \int \cos(\pi t)\cos\bigl(\sin(\pi t)\bigr)\,dt &= \frac{1}{\pi}\int \cos u\,du\\
  &= \frac{\sin u}{\pi} + C\\
  &= \frac{\sin\bigl(\sin(\pi t)\bigr)}{\pi} + C.
  \end{aligned}
  \]
  The antiderivative is \(\dfrac{\sin(\sin(\pi t))}{\pi} + C\).
provenance: handout-answer
steps:
  - Set \(u = \sin(\pi t)\), so \(\cos(\pi t)\,dt = \frac{1}{\pi}\,du\).
  - Integrate \(\frac{1}{\pi}\cos u\) to get \(\frac{1}{\pi}\sin u\).
  - Return to \(t\). The antiderivative is \(\sin(\sin(\pi t))/\pi + C\).
verification:
  checks:
    - expr: diff(sin(sin(pi*t))/pi, t)
      expected: "cos(pi*t)*cos(sin(pi*t))"
:::


::: exercise
id: l3-substitution.handout-8-1-9
number: "8.1.9"
tier: standard
topics:
  - substitution
statement: |
  Find the antiderivative of \(\dfrac{\sin x}{\cos^3 x}\,dx\) on an interval where \(\cos x \ne 0\).
solution: |
  The derivative of \(\cos x\) is \(-\sin x\). Set \(u = \cos x\). Then \(du = -\sin x\,dx\), so \(\sin x\,dx = -du\), and the integrand becomes a power of \(u\) with \(u \ne 0\).

  \[
  \begin{aligned}
  \int \frac{\sin x}{\cos^3 x}\,dx &= -\int u^{-3}\,du\\
  &= -\frac{u^{-2}}{-2} + C\\
  &= \frac{1}{2\cos^2 x} + C.
  \end{aligned}
  \]
  Since \(\frac{1}{\cos^2 x} = \sec^2 x\), the same antiderivative reads \(\frac{1}{2}\sec^2 x + C\).
provenance: handout-answer
steps:
  - Set \(u = \cos x\), so \(\sin x\,dx = -du\).
  - Integrate \(-u^{-3}\) to get \(\frac{1}{2}u^{-2}\).
  - Return to \(x\). The antiderivative is \(\frac{1}{2\cos^2 x} + C\).
verification:
  checks:
    - expr: diff(1/(2*cos(x)**2), x)
      expected: "sin(x)/cos(x)**3"
:::


::: exercise
id: l3-substitution.handout-8-1-11
number: "8.1.11"
tier: standard
topics:
  - substitution
statement: |
  Evaluate \(\displaystyle\int_0^{\pi} \sin^5(3x)\cos(3x)\,dx\).
solution: |
  The derivative of \(\sin 3x\) is \(3\cos 3x\). Set \(u = \sin 3x\). Then \(du = 3\cos 3x\,dx\), so \(\cos 3x\,dx = \frac{1}{3}\,du\).

  - The limit \(x = 0\) gives \(u = \sin 0 = 0\).
  - The limit \(x = \pi\) gives \(u = \sin 3\pi = 0\).

  Both new limits are \(0\), so
  \[
  \int_0^{\pi} \sin^5(3x)\cos(3x)\,dx = \frac{1}{3}\int_0^{0} u^5\,du = 0.
  \]
  The value is \(0\).
provenance: handout-answer
steps:
  - Set \(u = \sin 3x\), so \(\cos 3x\,dx = \frac{1}{3}\,du\).
  - The limits \(x = 0\) and \(x = \pi\) both give \(u = 0\).
  - An integral from \(0\) to \(0\) is \(0\).
verification:
  checks:
    - expr: integrate(sin(3*x)**5*cos(3*x), (x, 0, pi))
      expected: "0"
    - expr: (sin(3*pi), sin(0))
      expected: "(0, 0)"
:::


::: exercise
id: l3-substitution.handout-8-1-12
number: "8.1.12"
tier: standard
topics:
  - substitution
statement: |
  Find the antiderivative of \(\sec^2 x\,\tan x\,dx\) on an interval where \(\cos x \ne 0\).
solution: |
  The derivative of \(\tan x\) is \(\sec^2 x\). Set \(u = \tan x\). Then \(du = \sec^2 x\,dx\).

  \[
  \begin{aligned}
  \int \sec^2 x\,\tan x\,dx &= \int u\,du\\
  &= \frac{u^2}{2} + C\\
  &= \frac{\tan^2 x}{2} + C.
  \end{aligned}
  \]
  The choice \(u = \sec x\) also works, because the derivative of \(\sec x\) is \(\sec x\tan x\) and the integrand equals \(\sec x\cdot(\sec x\tan x)\). It gives \(\frac{\sec^2 x}{2} + C\). Since \(\sec^2 x = 1 + \tan^2 x\), the two results differ by the constant \(\frac{1}{2}\), which the constant \(C\) absorbs.

  The antiderivative is \(\dfrac{\tan^2 x}{2} + C\).
provenance: handout-answer
steps:
  - Set \(u = \tan x\), so \(du = \sec^2 x\,dx\).
  - Integrate \(u\) to get \(u^2/2\).
  - Return to \(x\). The antiderivative is \(\tan^2 x/2 + C\).
verification:
  checks:
    - expr: diff(tan(x)**2/2, x)
      expected: "sec(x)**2*tan(x)"
    - expr: diff(sec(x)**2/2, x)
      expected: "sec(x)**2*tan(x)"
    - expr: sec(x)**2/2 - tan(x)**2/2
      expected: "Rational(1, 2)"
:::


::: exercise
id: l3-substitution.handout-8-1-13
number: "8.1.13"
tier: standard
topics:
  - substitution
statement: |
  Evaluate \(\displaystyle\int_0^{\sqrt{\pi}/2} x\,\sec^2(x^2)\,\tan(x^2)\,dx\).
solution: |
  The derivative of \(x^2\) is \(2x\), and the integrand contains the factor \(x\). Set \(u = x^2\). Then \(du = 2x\,dx\), so \(x\,dx = \frac{1}{2}\,du\).

  - The limit \(x = 0\) gives \(u = 0\).
  - The limit \(x = \frac{\sqrt{\pi}}{2}\) gives \(u = \frac{\pi}{4}\).

  The integral becomes
  \[
  \frac{1}{2}\int_0^{\pi/4} \sec^2 u\,\tan u\,du.
  \]
  The derivative of \(\tan u\) is \(\sec^2 u\), so \(\frac{\tan^2 u}{2}\) is an antiderivative of \(\sec^2 u\tan u\). At \(u = \frac{\pi}{4}\), \(\tan u = 1\). At \(u = 0\), \(\tan u = 0\).

  \[
  \begin{aligned}
  \frac{1}{2}\int_0^{\pi/4} \sec^2 u\,\tan u\,du &= \frac{1}{2}\Bigl[\frac{\tan^2 u}{2}\Bigr]_0^{\pi/4}\\
  &= \frac{1}{2}\Bigl(\frac{1}{2} - 0\Bigr)\\
  &= \frac{1}{4}.
  \end{aligned}
  \]
  The value is \(\dfrac{1}{4}\).
provenance: handout-answer
steps:
  - Set \(u = x^2\), so \(x\,dx = \frac{1}{2}\,du\), and the limits become \(0\) and \(\pi/4\).
  - An antiderivative of \(\sec^2 u\tan u\) is \(\tan^2 u/2\).
  - Evaluate \(\frac{1}{2}\cdot\frac{1}{2}\). The value is \(1/4\).
verification:
  checks:
    - expr: integrate(x*sec(x**2)**2*tan(x**2), (x, 0, sqrt(pi)/2))
      expected: "Rational(1, 4)"
    - expr: (sqrt(pi)/2)**2
      expected: "pi/4"
    - expr: integrate(sec(u)**2*tan(u), (u, 0, pi/4))/2
      expected: "Rational(1, 4)"
:::


::: exercise
id: l3-substitution.handout-8-1-14
number: "8.1.14"
tier: standard
topics:
  - substitution
statement: |
  Find the antiderivative of \(\dfrac{\sin(\tan x)}{\cos^2 x}\,dx\) on an interval where \(\cos x \ne 0\).
solution: |
  The derivative of \(\tan x\) is \(\frac{1}{\cos^2 x}\). The factor \(\frac{1}{\cos^2 x}\,dx\) is therefore the differential of \(\tan x\). Set \(u = \tan x\). Then \(du = \frac{dx}{\cos^2 x}\).

  \[
  \begin{aligned}
  \int \frac{\sin(\tan x)}{\cos^2 x}\,dx &= \int \sin u\,du\\
  &= -\cos u + C\\
  &= -\cos(\tan x) + C.
  \end{aligned}
  \]
  The antiderivative is \(-\cos(\tan x) + C\).
provenance: handout-answer
steps:
  - Set \(u = \tan x\), so \(du = dx/\cos^2 x\).
  - Integrate \(\sin u\) to get \(-\cos u\).
  - Return to \(x\). The antiderivative is \(-\cos(\tan x) + C\).
verification:
  checks:
    - expr: diff(-cos(tan(x)), x)
      expected: "sin(tan(x))/cos(x)**2"
    - expr: diff(tan(x), x)
      expected: "1/cos(x)**2"
:::


::: exercise
id: l3-substitution.handout-8-1-15
number: "8.1.15"
tier: basic
topics:
  - substitution
statement: |
  Evaluate \(\displaystyle\int_3^4 \frac{1}{(3x-7)^2}\,dx\).
solution: |
  On \([3, 4]\) the quantity \(3x - 7\) lies between \(2\) and \(5\), so the integrand is continuous. Set \(u = 3x - 7\). Then \(du = 3\,dx\), so \(dx = \frac{1}{3}\,du\).

  - The limit \(x = 3\) gives \(u = 2\).
  - The limit \(x = 4\) gives \(u = 5\).

  \[
  \begin{aligned}
  \int_3^4 \frac{dx}{(3x-7)^2} &= \frac{1}{3}\int_2^5 u^{-2}\,du\\
  &= \frac{1}{3}\Bigl[-\frac{1}{u}\Bigr]_2^5\\
  &= \frac{1}{3}\Bigl(-\frac{1}{5} + \frac{1}{2}\Bigr)\\
  &= \frac{1}{3}\cdot\frac{3}{10} = \frac{1}{10}.
  \end{aligned}
  \]
  The value is \(\dfrac{1}{10}\).
provenance: handout-answer
steps:
  - Set \(u = 3x - 7\), so \(dx = \frac{1}{3}\,du\), and the limits become \(2\) and \(5\).
  - An antiderivative of \(u^{-2}\) is \(-1/u\).
  - Evaluate \(\frac{1}{3}\bigl(\frac{1}{2} - \frac{1}{5}\bigr)\). The value is \(1/10\).
verification:
  checks:
    - expr: integrate(1/(3*x - 7)**2, (x, 3, 4))
      expected: "Rational(1, 10)"
    - expr: integrate(u**(-2), (u, 2, 5))/3
      expected: "Rational(1, 10)"
:::


::: exercise
id: l3-substitution.handout-8-1-17
number: "8.1.17"
tier: standard
topics:
  - substitution
statement: |
  Find the antiderivative of \(\dfrac{6x}{(x^2-7)^{1/9}}\,dx\) on the interval \(x > \sqrt{7}\).
solution: |
  The derivative of \(x^2 - 7\) is \(2x\), and the numerator is \(6x = 3\cdot 2x\). Set \(u = x^2 - 7\). Then \(du = 2x\,dx\), so \(6x\,dx = 3\,du\). On \(x > \sqrt{7}\) one has \(u > 0\).

  \[
  \begin{aligned}
  \int \frac{6x}{(x^2-7)^{1/9}}\,dx &= 3\int u^{-1/9}\,du\\
  &= 3\cdot\frac{u^{8/9}}{8/9} + C\\
  &= \frac{27}{8}\,(x^2-7)^{8/9} + C.
  \end{aligned}
  \]
  The antiderivative is \(\dfrac{27}{8}(x^2-7)^{8/9} + C\).
provenance: handout-answer
steps:
  - Set \(u = x^2 - 7\), so \(6x\,dx = 3\,du\).
  - Integrate \(3u^{-1/9}\) to get \(\frac{27}{8}u^{8/9}\).
  - Return to \(x\). The antiderivative is \(\frac{27}{8}(x^2-7)^{8/9} + C\).
verification:
  checks:
    - expr: diff(Rational(27, 8)*(x**2 - 7)**Rational(8, 9), x)
      expected: "6*x*(x**2 - 7)**Rational(-1, 9)"
:::


::: exercise
id: l3-substitution.handout-8-1-18
number: "8.1.18"
tier: exam
topics:
  - substitution
statement: |
  Evaluate \(\displaystyle\int_{-1}^{1} (2x^3 - 1)\,(x^4 - 2x)^6\,dx\).
solution: |
  The derivative of \(x^4 - 2x\) is \(4x^3 - 2 = 2(2x^3 - 1)\). The factor \(2x^3 - 1\) is therefore half of that derivative. Set \(u = x^4 - 2x\). Then \(du = 2(2x^3-1)\,dx\), so \((2x^3-1)\,dx = \frac{1}{2}\,du\).

  - The limit \(x = -1\) gives \(u = 1 + 2 = 3\).
  - The limit \(x = 1\) gives \(u = 1 - 2 = -1\).

  The new lower limit is larger than the new upper limit. The formula for the change of limits still applies.
  \[
  \begin{aligned}
  \int_{-1}^{1} (2x^3-1)(x^4-2x)^6\,dx &= \frac{1}{2}\int_{3}^{-1} u^6\,du\\
  &= \frac{1}{2}\Bigl[\frac{u^7}{7}\Bigr]_3^{-1}\\
  &= \frac{1}{14}\bigl((-1)^7 - 3^7\bigr)\\
  &= -\frac{1 + 2187}{14}\\
  &= -\frac{2188}{14} = -\frac{1094}{7}.
  \end{aligned}
  \]
  The value is \(-\dfrac{3^7 + 1}{14} = -\dfrac{1094}{7}\).
provenance: handout-answer
steps:
  - The derivative of \(x^4 - 2x\) is \(2(2x^3 - 1)\). Set \(u = x^4 - 2x\), so \((2x^3-1)\,dx = \frac{1}{2}\,du\).
  - The limits \(x = -1\) and \(x = 1\) give \(u = 3\) and \(u = -1\), in that order.
  - Evaluate \(\frac{1}{2}\bigl[u^7/7\bigr]_3^{-1} = -\frac{3^7+1}{14}\).
verification:
  checks:
    - expr: integrate((2*x**3 - 1)*(x**4 - 2*x)**6, (x, -1, 1))
      expected: "-Rational(1094, 7)"
    - expr: diff(x**4 - 2*x, x) - 2*(2*x**3 - 1)
      expected: "0"
    - expr: (x**4 - 2*x).subs(x, -1)
      expected: "3"
    - expr: (x**4 - 2*x).subs(x, 1)
      expected: "-1"
    - expr: integrate(u**6, (u, 3, -1))/2
      expected: "-Rational(1094, 7)"
:::


::: exercise
id: l3-substitution.handout-8-1-19
number: "8.1.19"
tier: basic
topics:
  - substitution
statement: |
  Evaluate \(\displaystyle\int_{-1}^{1} \sin^7 x\,dx\).
solution: |
  The integrand \(f(x) = \sin^7 x\) is odd: \(f(-x) = (\sin(-x))^7 = -\sin^7 x = -f(x)\). Split the interval at \(0\) and substitute \(u = -x\) on the left half. Then \(dx = -du\), and the limits \(x = -1\) and \(x = 0\) become \(u = 1\) and \(u = 0\).

  \[
  \begin{aligned}
  \int_{-1}^{0} f(x)\,dx &= \int_{1}^{0} f(-u)\,(-du)\\
  &= \int_{0}^{1} f(-u)\,du\\
  &= -\int_{0}^{1} f(u)\,du.
  \end{aligned}
  \]
  The left half is the negative of the right half, so
  \[
  \int_{-1}^{1} \sin^7 x\,dx = -\int_0^1 \sin^7 u\,du + \int_0^1 \sin^7 x\,dx = 0.
  \]
  No antiderivative is needed. The value is \(0\).
provenance: handout-answer
steps:
  - The integrand \(\sin^7 x\) is odd.
  - The substitution \(u = -x\) turns the integral over \([-1, 0]\) into the negative of the integral over \([0, 1]\).
  - The two halves cancel. The value is \(0\).
verification:
  checks:
    - expr: integrate(sin(x)**7, (x, -1, 1))
      expected: "0"
    - expr: sin(-x)**7 + sin(x)**7
      expected: "0"
:::


::: exercise
id: l3-substitution.handout-8-1-20
number: "8.1.20"
tier: standard
topics:
  - substitution
statement: |
  Let \(f\) be a differentiable function. Find the antiderivative of \(f(x)\,f'(x)\,dx\).
solution: |
  The factor \(f'(x)\,dx\) is the differential of \(f\). Set \(u = f(x)\). Then \(du = f'(x)\,dx\).

  \[
  \begin{aligned}
  \int f(x)\,f'(x)\,dx &= \int u\,du\\
  &= \frac{u^2}{2} + C\\
  &= \frac{f(x)^2}{2} + C.
  \end{aligned}
  \]
  The product rule gives the same check: \(\frac{d}{dx}\bigl(f(x)^2\bigr) = 2f(x)f'(x)\), so \(\frac{d}{dx}\frac{f(x)^2}{2} = f(x)f'(x)\).

  The antiderivative is \(\dfrac{f(x)^2}{2} + C\).
provenance: handout-answer
steps:
  - Set \(u = f(x)\), so \(du = f'(x)\,dx\).
  - Integrate \(u\) to get \(u^2/2\).
  - Return to \(x\). The antiderivative is \(f(x)^2/2 + C\).
verification:
  checks:
    - expr: diff(f(x)**2/2, x) - f(x)*diff(f(x), x)
      expected: "0"
    - expr: diff((sin(x) + x**2)**2/2, x) - (sin(x) + x**2)*diff(sin(x) + x**2, x)
      expected: "0"
:::
