---
id: l3-fundamental-theorem
lecture: 3
order: 5
title: Antiderivatives and the fundamental theorem
prerequisites: [l3-riemann-sums, l1-derivative-rules]
sources:
  - { source: handout, section: "7.2", page: 153 }
  - { source: handout, section: "7.3", page: 160 }
  - { source: lecture-notes-3, page: 3 }
  - { source: midterm-app }
  - { source: midterm-mock-1, page: 1 }
  - { source: midterm-2024, page: 1 }
  - { source: midterm-2026-key, page: 4 }
  - { source: handout, page: 165 }
  - { source: handout, section: "7.1" }
examWeight: high
examWeightNote: Every midterm has a set of five to seven integrals.
notation: |
  An antiderivative is written \(\int f\), meaning a function, with \((\int f)' = f\). A definite integral keeps \(dx\). \(F'\) and \(\frac{d}{dx} F\) name the same derivative.
status: reviewed
---

::: section
title: Antiderivative
:::

::: formal-statement
kind: definition
title: Antiderivative
source: { source: lecture-notes-3, page: 3 }
text: |
  Let \(f\) be continuous. The symbol \(\int f\) means an **antiderivative** of \(f\), a function whose derivative is \(f\):
  \[
  (\int f)' = f.
  \]
  For \(x > 0\), \(\ln x\) is an antiderivative of \(\frac{1}{x}\).
:::

::: plain-explanation
text: |
  The integral sign in \(\int f\) names a **function**. The same sign in \(\int_a^b f(x)\,dx\) names a **number**.
:::

::: formal-statement
kind: definition
title: Antiderivative of 1/x
source: { source: handout, page: 165 }
text: |
  An antiderivative of \(\frac{1}{x}\) is \(\ln|x|\), on any interval that does not contain \(0\). On \((0, \infty)\), \(\ln|x| = \ln x\).
:::

::: formal-statement
kind: theorem
title: Derivative of an integral
source: { source: handout, section: "7.2", page: 156 }
text: |
  If \(f\) is continuous and \(G(x) = \int_a^x f(t)\,dt\), then \(G'(x) = f(x)\).
:::

::: trap
text: |
  An antiderivative of \(\frac{1}{x}\), on an interval that does not contain \(0\), is \(\ln|x|\). Therefore
  \[
  \begin{aligned}
  &\int_{-2}^{-1} \frac{1}{x}\,dx\\
  &=\bigl[\ln|x|\bigr]_{-2}^{-1}\\
  &=\ln 1 - \ln 2 = -\ln 2.
  \end{aligned}
  \]
  The integral equals \(-\ln 2\).

  The expression \(\ln x\) is not defined at the endpoints \(-2\) and \(-1\) in the reals, so it cannot be evaluated there. The absolute value is what makes the evaluation a real number.
:::

::: going-deeper
title: Differentiating under the limit
text: |
  This note is optional. The value \(G(x)\) is defined by a limit of Riemann sums on the interval from \(a\) to \(x\). Differentiating under that limit with respect to the upper bound \(x\) gives \(G'(x) = f(x)\).
:::

::: key-points
text: |
  - The symbol \(\int f\) names an antiderivative of a continuous \(f\), a function with \((\int f)' = f\). The symbol \(\int_a^b f(x)\,dx\) names a number.
  - If \(f\) is continuous and \(G(x) = \int_a^x f(t)\,dt\), then \(G'(x) = f(x)\).
  - An antiderivative of \(\frac{1}{x}\) is \(\ln|x|\) on any interval that does not contain \(0\).
  - The usual slip uses \(\ln x\) as the antiderivative of \(\frac{1}{x}\) on \([-2, -1]\). It is not defined there, and the antiderivative is \(\ln|x|\), which gives \(\int_{-2}^{-1} \frac{1}{x}\,dx = -\ln 2\).
:::

::: concept-question
id: l3-fundamental-theorem.q-a23cb311
question: |
  Give the antiderivative of \(f(x) = x^{2}\) that vanishes at \(x = 0\).
options:
  - text: |
      \(\frac{x^{3}}{3}\)
    correct: true
  - text: |
      \(\frac{x^{3}}{3} + 1\)
  - text: |
      \(3x^{3}\)
  - text: |
      \(x^{3}\)
explanation: |
  The general antiderivative is \(\frac{x^{3}}{3} + C\). The condition \(F(0) = 0\) forces \(C = 0\).
:::

::: concept-question
id: l3-fundamental-theorem.q-085270f7
question: |
  Does \(f(x) = \frac{1}{x}\) have an antiderivative vanishing at \(x = 0\)?
options:
  - text: |
      No. \(\ln|x|\) is not defined at 0, and \(\frac{1}{x}\) is not integrable there.
    correct: true
  - text: |
      Yes: \(\ln|x|\)
  - text: |
      Yes: \(\ln|x| + 1\)
  - text: |
      Yes: \(-\frac{1}{x^{2}}\)
explanation: |
  The point \(x = 0\) lies outside the domain of \(\frac{1}{x}\). On each side of 0 an antiderivative has the form \(\ln|x| + C\), and this has no finite value at 0.
:::

::: concept-question
id: l3-fundamental-theorem.q-d50c61ab
question: |
  Give the antiderivative of \(f(x) = (x + 3)^{1/3}\) that vanishes at \(x = 0\).
options:
  - text: |
      \(\frac{3}{4}\bigl[(x + 3)^{4/3} - 3^{4/3}\bigr]\)
    correct: true
  - text: |
      \(\frac{3}{4}(x + 3)^{4/3}\)
  - text: |
      \((x + 3)^{4/3}\)
  - text: |
      \(\frac{4}{3}\bigl[(x + 3)^{4/3} - 3^{4/3}\bigr]\)
explanation: |
  An antiderivative is \(\frac{3}{4}(x + 3)^{4/3} + C\). The condition \(F(0) = 0\) forces \(C = -\frac{3}{4} \cdot 3^{4/3}\).
:::

::: concept-question
id: l3-fundamental-theorem.q-ac5ba4e5
question: |
  Give the antiderivative of \(f(x) = \tan(x)\) that vanishes at \(x = 0\).
options:
  - text: |
      \(-\ln|\cos(x)|\)
    correct: true
  - text: |
      \(\ln|\cos(x)|\)
  - text: |
      \(\ln|\sin(x)|\)
  - text: |
      \(\frac{1}{\cos(x)} - 1\)
explanation: |
  \(\int \tan x \, dx = -\ln|\cos x| + C\). At \(x = 0\) this equals \(-\ln 1 = 0\), so \(C = 0\).
:::

::: exercise
id: l3-fundamental-theorem.s15-1
tier: basic
topics: [antiderivatives, fundamental-theorem]
number: "Integral bank, Ex. 15.1"
statement: |
  Find the antiderivative of \(f(x)=x^2\) that vanishes at \(x=0\).
solution: |
  The general antiderivative is \(\frac{x^3}{3}+C\), and \(C\) is chosen so that \(F(0)=0\).

  \(F(0)=\frac{0}{3}+C=0\) forces \(C=0\), so \(F(x)=\frac{x^3}{3}\).

  The same function is the integral from the base point: \(F(x)=\int_0^x t^2\,dt=\frac{x^3}{3}\).
provenance: written-for-site
verification:
  checks:
    - expr: diff(x**3/3, x) - x**2
      expected: "0"
    - expr: (x**3/3).subs(x, 0)
      expected: "0"
:::

::: section
title: Evaluation
:::

::: formal-statement
kind: theorem
title: Evaluation
source: { source: lecture-notes-3, page: 3 }
text: |
  If \(f\) is continuous on \([a, b]\) and \(F' = f\), then
  \[
  \int_a^b f(x)\,dx = F(b) - F(a).
  \]
:::

::: plain-explanation
text: |
  Let \(C\) be a constant. The derivative of \(F + C\) is \(f\), so \(F + C\) is another antiderivative. The difference of its endpoint values is
  \[
  \bigl(F(b) + C\bigr) - \bigl(F(a) + C\bigr).
  \]
  The constant \(C\) cancels, and the difference equals \(F(b) - F(a)\).
:::

::: worked-example
title: Integral of sine
problem: |
  Compute \(\int_{-1}^{1} \sin x\,dx\).
solution: |
  An antiderivative of \(\sin x\) is \(-\cos x\). Evaluating it from \(-1\) to \(1\) gives
  \[
  \begin{aligned}
  &\int_{-1}^{1} \sin x\,dx\\
  &=\bigl[-\cos x\bigr]_{-1}^{1}\\
  &=-\cos 1 - \bigl(-\cos(-1)\bigr)\\
  &=-\cos 1 + \cos(-1).
  \end{aligned}
  \]
  Cosine is even, so \(\cos(-1) = \cos 1\). The sum \(-\cos 1 + \cos 1\) equals \(0\). The integral equals \(0\).
:::

::: guided-example
title: A linear antiderivative
problem: |
  Compute \(\int_0^1 (2x + 1)\,dx\) by an antiderivative.
steps:
  - |
    An antiderivative of \(2x + 1\) is \(x^2 + x\).
  - |
    At \(1\) the antiderivative equals \(2\).
  - |
    At \(0\) the antiderivative equals \(0\).
  - |
    The difference \(2 - 0\) equals \(2\). The integral equals \(2\).
:::

::: trap
text: |
  An antiderivative of \(\sin x\) is \(-\cos x\). Therefore
  \[
  \begin{aligned}
  &\int_0^{\pi} \sin x\,dx\\
  &=\bigl[-\cos x\bigr]_0^{\pi}\\
  &=-\cos\pi - (-\cos 0)\\
  &=-(-1) - (-1)\\
  &=1 + 1 = 2.
  \end{aligned}
  \]
  The integral equals \(2\).

  Taking the antiderivative to be \(\cos x\) produces \(\cos\pi - \cos 0 = -1 - 1 = -2\). That value is negative, and \(\sin x\) is nonnegative on \([0, \pi]\), so \(-2\) cannot be the integral.
:::

::: key-points
text: |
  - If \(f\) is continuous on \([a, b]\) and \(F' = f\), then \(\int_a^b f(x)\,dx = F(b) - F(a)\).
  - Any antiderivative works, because \(F + C\) gives the same difference.
  - The usual slip takes \(\cos x\) as an antiderivative of \(\sin x\) and gets \(\int_0^{\pi} \sin x\,dx = -2\). An antiderivative of \(\sin x\) is \(-\cos x\), and the integral equals \(2\).
:::

::: concept-question
id: l3-fundamental-theorem.q-222c480a
question: |
  Compute \(\int_{1}^{2} \bigl(t^{5} + t^{4} - \frac{t^{2}}{2} + 1\bigr)\, dt\).
options:
  - text: |
      \(\frac{248}{15}\)
    correct: true
  - text: |
      \(\frac{247}{15}\)
  - text: |
      \(\frac{124}{15}\)
  - text: |
      \(\frac{83}{5}\)
explanation: |
  The antiderivative is \(\frac{t^{6}}{6} + \frac{t^{5}}{5} - \frac{t^{3}}{6} + t\). Evaluating from 1 to 2 gives \(\frac{248}{15}\).
:::

::: concept-question
id: l3-fundamental-theorem.q-0545265e
question: |
  Compute \(\int_{1}^{2} \frac{t^{2} + 1}{t}\, dt\).
options:
  - text: |
      \(\frac{3}{2} + \ln 2\)
    correct: true
  - text: |
      \(\frac{3}{2} - \ln 2\)
  - text: |
      \(\frac{3}{2}\)
  - text: |
      \(\ln 2\)
explanation: |
  Dividing through by \(t\) gives \(t + \frac{1}{t}\). The antiderivative \(\frac{t^{2}}{2} + \ln t\) evaluates from 1 to 2 as \(\frac{3}{2} + \ln 2\).
:::

::: concept-question
id: l3-fundamental-theorem.q-dbe17ef7
question: |
  Compute \(\int_{-\infty}^{\infty} \frac{1}{1 + x^{2}}\, dx\).
options:
  - text: |
      \(\pi\)
    correct: true
  - text: |
      \(\frac{\pi}{2}\)
  - text: |
      \(2\pi\)
  - text: |
      Divergent
explanation: |
  The antiderivative is \(\arctan x\). Then \(\lim_{b \to \infty} \arctan b = \frac{\pi}{2}\) and \(\lim_{a \to -\infty} \arctan a = -\frac{\pi}{2}\), so the integral equals \(\pi\).
:::

::: concept-question
id: l3-fundamental-theorem.q-99b02d5f
question: |
  Compute \(\int_{0}^{1} \frac{1}{\sqrt{1 - x^{2}}}\, dx\).
options:
  - text: |
      \(\frac{\pi}{2}\)
    correct: true
  - text: |
      \(\pi\)
  - text: |
      \(1\)
  - text: |
      Divergent
explanation: |
  The antiderivative is \(\arcsin x\). Then \(\arcsin 1 - \arcsin 0 = \frac{\pi}{2}\).
:::

::: exercise
id: l3-fundamental-theorem.basic-linear
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_0^2 (3x^2 + 1)\,dx\) by an antiderivative.
solution: |
  An antiderivative of \(3x^2 + 1\) is \(x^3 + x\). At \(2\) this equals \(8 + 2 = 10\). At \(0\) it equals \(0\).

  \[
  \begin{aligned}
  &\int_0^2 (3x^2 + 1)\,dx\\
  &=\bigl[x^3 + x\bigr]_0^2\\
  &=10 - 0 = 10.
  \end{aligned}
  \]
  The integral equals \(10\).
provenance: written-for-site
steps:
  - An antiderivative is \(x^3 + x\).
  - The value at \(2\) is \(10\), and the value at \(0\) is \(0\).
  - The integral equals \(10\).
verification:
  checks:
    - expr: integrate(3*x**2 + 1, (x, 0, 2))
      expected: "10"
:::

::: section
title: Linearity, additivity and reversal
:::

::: formal-statement
kind: theorem
title: Linearity, additivity and reversal
source: { source: handout, section: "7.3", page: 163 }
text: |
  Let \(f\) and \(g\) be continuous on an interval containing the limits \(a\), \(b\), and \(c\).

  - \(\int_a^b \bigl(f(x) + g(x)\bigr)\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx\).
  - For a constant \(c\), \(\int_a^b c\, f(x)\,dx = c \int_a^b f(x)\,dx\).
  - For a number \(c\), \(\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx\).
  - \(\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx\).
:::

::: worked-example
title: Net change and total distance
problem: |
  A particle has velocity \(v(t) = -t^2 + 5t\). Find the net change in position from \(t = 0\) to \(t = 6\), and the total distance on that interval.
solution: |
  An antiderivative of \(v\) is
  \[
  V(t) = -\frac{t^3}{3} + \frac{5t^2}{2}.
  \]
  The net change is \(\int_0^6 v(t)\,dt\). It equals \(V(6) - V(0)\). Here \(V(0) = 0\), and
  \[
  \begin{aligned}
  &V(6)\\
  &=-\frac{6^3}{3} + \frac{5 \cdot 6^2}{2}\\
  &=-\frac{216}{3} + \frac{180}{2}\\
  &=-72 + 90 = 18.
  \end{aligned}
  \]
  The net change equals \(18\).

  ### Total distance

  The velocity factors as \(v(t) = t(5-t)\). It equals \(0\) at \(t = 5\).

  - On \([0, 5]\) the velocity is nonnegative.
  - On \([5, 6]\) the velocity is nonpositive.

  The integral from \(0\) to \(5\) equals \(V(5) - V(0)\). Then
  \[
  \begin{aligned}
  &V(5)\\
  &=-\frac{125}{3} + \frac{125}{2}\\
  &=125\left(-\frac{1}{3} + \frac{1}{2}\right)\\
  &=125 \cdot \frac{1}{6} = \frac{125}{6}.
  \end{aligned}
  \]
  So \(\int_0^5 v(t)\,dt = \frac{125}{6}\).

  The integral from \(5\) to \(6\) equals \(V(6) - V(5)\):
  \[
  18 - \frac{125}{6} = \frac{108}{6} - \frac{125}{6} = -\frac{17}{6}.
  \]
  The two pieces add to the net change: \(\frac{125}{6} - \frac{17}{6} = \frac{108}{6} = 18\).

  The total distance adds the length of each piece. The second piece contributes \(\frac{17}{6}\). The distance equals
  \[
  \frac{125}{6} + \frac{17}{6} = \frac{142}{6} = \frac{71}{3}.
  \]
:::

::: key-points
text: |
  - For continuous \(f\) and \(g\), the integral \(\int_a^b\) of a sum is the sum of the integrals, and a constant factor \(c\) comes out of the integral.
  - Additivity: \(\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx\).
  - Reversal: \(\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx\).
:::

::: concept-question
id: l3-fundamental-theorem.q-9463bc9e
question: |
  Compute \(\int_{-1}^{1} t(t^{2} + 1)^{1/3}\, dt\).
options:
  - text: |
      \(0\), by odd symmetry
    correct: true
  - text: |
      \(\frac{3}{4} \cdot 2^{4/3}\)
  - text: |
      \(2 \cdot (2^{4/3} - 1) \cdot \frac{3}{8}\)
  - text: |
      Divergent
explanation: |
  The integrand \(t(t^{2} + 1)^{1/3}\) is odd, and the interval is symmetric about 0, so the integral is \(0\).
:::

::: concept-question
id: l3-fundamental-theorem.q-801620c5
question: |
  Let \(f\) be continuous on \([0,3]\), with \(\int_0^3 f(x)\,dx = 5\) and \(\int_0^1 f(x)\,dx = 2\). What is \(\int_3^1 f(x)\,dx\)?
options:
  - text: |
      \(-3\)
    correct: true
  - text: |
      \(3\)
  - text: |
      \(7\)
  - text: |
      \(-7\)
explanation: |
  Additivity gives \(\int_1^3 f(x)\,dx = \int_0^3 f(x)\,dx - \int_0^1 f(x)\,dx = 5 - 2 = 3\). Reversing the limits changes the sign, so \(\int_3^1 f(x)\,dx = -\int_1^3 f(x)\,dx = -3\). The value \(3\) keeps the limits in the wrong order. The values \(7\) and \(-7\) add the two integrals where the second must be subtracted.
:::

::: exercise
id: l3-fundamental-theorem.h1
tier: basic
topics: [antiderivatives, symmetry]
statement: |
  Compute \(\int_{-2}^{2} (x^5-3x^3+x)\,dx\).
solution: |
  Check the parity of the integrand and the symmetry of the interval.

  The integrand \(x^5-3x^3+x\) is a sum of odd powers of \(x\), so it is odd. The interval \([-2,2]\) is symmetric about \(0\).

  The integral of a continuous odd function over a symmetric interval equals \(0\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x**5 - 3*x**3 + x, (x, -2, 2))
      expected: "0"
:::

::: sheet-item
id: l3-fundamental-theorem.sheet-evaluation
category: formula
text: |
  If \(f\) is continuous on \([a, b]\) and \(F' = f\), evaluate \(\int_a^b f(x)\,dx\) as \(F(b) - F(a)\). A constant added to \(F\) cancels.
:::

::: sheet-item
id: l3-fundamental-theorem.sheet-power
category: formula
text: |
  For \(n \neq -1\), an antiderivative of \(x^n\) is \(\frac{x^{n+1}}{n+1}\).
:::

::: sheet-item
id: l3-fundamental-theorem.sheet-log-abs
category: formula
text: |
  On any interval that does not contain \(0\), \(\int \frac{1}{x} = \ln|x|\).
:::

::: exercise
id: l3-fundamental-theorem.m6-1
tier: basic
topics: [antiderivatives, fundamental-theorem]
number: "Mock midterm, Ex. 6.1"
statement: |
  Compute \(\int_1^2 \left(t^5+t^4-\frac{t^2}{2}+1\right)\,dt\).
solution: |
  The integrand is a polynomial, so integrate term by term and evaluate \(F(2)-F(1)\).

  An antiderivative is \(F(t)=\frac{t^6}{6}+\frac{t^5}{5}-\frac{t^3}{6}+t\).

  \(F(2)=\frac{64}{6}+\frac{32}{5}-\frac{8}{6}+2=\frac{28}{3}+\frac{32}{5}+2\), and \(F(1)=\frac{1}{6}+\frac{1}{5}-\frac{1}{6}+1=\frac{6}{5}\).

  \(F(2)-F(1)=\frac{28}{3}+\frac{26}{5}+2=\frac{140+78+30}{15}=\frac{248}{15}\).

  The antiderivative of \(\frac{t^2}{2}\) is \(\frac{t^3}{6}\). The line \(\frac{t^3}{3}\) drops the factor \(\frac{1}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(t**5 + t**4 - t**2/2 + 1, (t, 1, 2))
      expected: "248/15"
:::

::: exercise
id: l3-fundamental-theorem.s15-2
tier: standard
topics: [antiderivatives, fundamental-theorem]
number: "Integral bank, Ex. 15.2"
statement: |
  Find the antiderivative of \(f(x)=\frac{1}{x}\) that vanishes at \(x=0\).
solution: |
  The answer depends on where \(\frac{1}{x}\) is defined, and on the limit of \(\ln|x|\) as \(x\to 0\).

  There is no such antiderivative. The domain of \(f(x)=\frac{1}{x}\) is \((-\infty,0)\cup(0,\infty)\), so \(x=0\) lies outside the domain.

  On \((0,\infty)\) every antiderivative has the form \(\ln x+C_1\). On \((-\infty,0)\) every antiderivative has the form \(\ln(-x)+C_2\).

  As \(x\to 0\), both \(\ln x\) and \(\ln(-x)\) tend to \(-\infty\). No choice of \(C_1\) and \(C_2\) produces a value \(F(0)=0\).

  The same obstruction shows up in the integral from the base point. \(\int_0^1 \frac{1}{t}\,dt\) diverges.

  On \((0,\infty)\), the antiderivative that vanishes at \(x=1\) is \(\ln x\).
provenance: written-for-site
steps:
  - The domain of \(1/x\) is \((-\infty,0)\cup(0,\infty)\).
  - On each side, \(\ln|x|\) tends to \(-\infty\) as \(x\to 0\).
  - The improper integral from \(0\) diverges, so no antiderivative vanishes there.
verification:
  checkable: false
  reason: No antiderivative of 1/x vanishes at 0, and the improper integral from 0 diverges, so there is no finite value to compare.
:::

::: exercise
id: l3-fundamental-theorem.s15-3
tier: standard
topics: [antiderivatives, fundamental-theorem]
number: "Integral bank, Ex. 15.3"
statement: |
  Find the antiderivative of \(g(x)=(x+3)^{1/3}\) that vanishes at \(x=0\).
solution: |
  For a linear composite, \(\int (x+b)^n\,dx=\frac{(x+b)^{n+1}}{n+1}\), and the constant is then fixed by the value at \(0\).

  With \(n=\frac{1}{3}\), \(\int (x+3)^{1/3}\,dx=\frac{(x+3)^{4/3}}{4/3}+C=\frac{3}{4}(x+3)^{4/3}+C\).

  The condition \(G(0)=0\) means \(\frac{3}{4}\,3^{4/3}+C=0\), so \(C=-\frac{3}{4}\,3^{4/3}\).

  \[G(x)=\frac{3}{4}\left[(x+3)^{4/3}-3^{4/3}\right].\]

  The antiderivative vanishing at \(0\) subtracts \(\frac{3}{4}\,3^{4/3}\). The line \(\frac{3}{4}(x+3)^{4/3}\) leaves \(G(0)=\frac{3}{4}\,3^{4/3}\).
provenance: written-for-site
steps:
  - An antiderivative is \(\frac{3}{4}(x+3)^{4/3}+C\).
  - \(G(0)=0\) forces \(C=-\frac{3}{4}\,3^{4/3}\).
verification:
  checks:
    - expr: diff((3/4)*((x+3)**(Rational(4,3)) - 3**(Rational(4,3))), x) - (x+3)**(Rational(1,3))
      expected: "0"
    - expr: ((3/4)*((x+3)**(Rational(4,3)) - 3**(Rational(4,3)))).subs(x, 0)
      expected: "0"
:::

::: exercise
id: l3-fundamental-theorem.s15-4
tier: standard
topics: [antiderivatives, fundamental-theorem]
number: "Integral bank, Ex. 15.4"
statement: |
  Find the antiderivative of \(f(x)=\tan x\) that vanishes at \(x=0\), on \(\left(-\frac{\pi}{2},\frac{\pi}{2}\right)\).
solution: |
  Write \(\tan x=\frac{\sin x}{\cos x}=-\frac{(\cos x)'}{\cos x}\), which is the pattern \(-\frac{u'}{u}\).

  Set \(u=\cos x\). Then \(\int \tan x\,dx=-\ln|\cos x|+C\).

  On \(\left(-\frac{\pi}{2},\frac{\pi}{2}\right)\), \(\cos x>0\), so \(-\ln|\cos x|=-\ln(\cos x)\). The antiderivatives are \(-\ln(\cos x)+C\).

  \(-\ln(\cos 0)=-\ln 1=0\), so \(C=0\) and \(F(x)=-\ln(\cos x)\).
provenance: written-for-site
steps:
  - Write \(\tan x\) as \(-\frac{(\cos x)'}{\cos x}\).
  - On the given interval the antiderivatives are \(-\ln(\cos x)+C\).
  - The condition \(F(0)=0\) forces \(C=0\).
verification:
  checks:
    - expr: diff(-log(cos(x)), x) - tan(x)
      expected: "0"
    - expr: (-log(cos(x))).subs(x, 0)
      expected: "0"
:::

::: exercise
id: l3-fundamental-theorem.s19
tier: exam
topics: [fundamental-theorem, parameters]
number: "Integral bank, Ex. 19"
statement: |
  Let \(f(x)=\int_0^\infty \sin(t)\,e^{-tx}\,dt\). For which \(x\) is \(f(x)\) well defined? Compute \(f(x)\) there.
solution: |
  Compare \(|\sin t\, e^{-tx}|\) with \(e^{-tx}\) to locate the domain, then integrate by parts twice and solve for the integral.

  - If \(x>0\), then \(|\sin t\, e^{-tx}|\le e^{-tx}\) and \(\int_0^\infty e^{-tx}\,dt=\frac{1}{x}\) converges, so \(f(x)\) converges absolutely.
  - If \(x=0\), then \(\int_0^R \sin t\,dt=1-\cos R\). The quantity \(1-\cos R\) keeps oscillating as \(R\to\infty\), so the integral diverges.
  - If \(x<0\), then \(e^{-tx}\) grows as \(t\to\infty\). The integrand oscillates with growing amplitude, so the integral diverges.

  Thus \(f\) is defined on \((0,\infty)\).

  For the value, take \(x>0\) and set \(I=\int_0^\infty \sin t\, e^{-xt}\,dt\) and \(J=\int_0^\infty \cos t\, e^{-xt}\,dt\). Integrate by parts with \(v'=e^{-xt}\) and \(v=-\frac{1}{x}e^{-xt}\).

  The boundary term of \(I\) vanishes at both ends, and
  \[I=\left[-\frac{1}{x}\sin t\, e^{-xt}\right]_0^\infty+\frac{1}{x}J=\frac{1}{x}J.\]

  The boundary term of \(J\) equals \(\frac{1}{x}\), and
  \[J=\left[-\frac{1}{x}\cos t\, e^{-xt}\right]_0^\infty-\frac{1}{x}I=\frac{1}{x}-\frac{1}{x}I.\]

  Hence \(I=\frac{1}{x^2}-\frac{1}{x^2}I\), so \(I\left(1+\frac{1}{x^2}\right)=\frac{1}{x^2}\). Therefore
  \[f(x)=\frac{1}{1+x^2}\quad(x>0).\]

  A second computation writes \(\sin t\, e^{-xt}\) as the imaginary part of \(e^{(i-x)t}\). For \(x>0\),
  \[\int_0^\infty e^{(i-x)t}\,dt=\frac{1}{x-i},\]
  and \(\operatorname{Im}\frac{1}{x-i}=\operatorname{Im}\frac{x+i}{x^2+1}=\frac{1}{1+x^2}\).
provenance: written-for-site
steps:
  - For \(x>0\) the integral converges absolutely by comparison with \(e^{-tx}\).
  - For \(x\le 0\) the integral diverges.
  - Two integrations by parts give \(I=\frac{1}{x}J\) and \(J=\frac{1}{x}-\frac{1}{x}I\).
  - Solving yields \(f(x)=\frac{1}{1+x^2}\) for \(x>0\).
verification:
  checks:
    - expr: integrate(sin(t)*exp(-t*x), (t, 0, oo)).subs(x, 3)
      expected: "1/10"
    - expr: integrate(sin(t)*exp(-t*x), (t, 0, oo)).args[0][0]
      expected: "1/(1+x**2)"
:::

::: exercise
id: l3-fundamental-theorem.b1
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_0^2 (3x^2-4x+1)\,dx\).
solution: |
  An antiderivative is \(x^3-2x^2+x\).

  \[\left[x^3-2x^2+x\right]_0^2=8-8+2=2.\]

  The integral equals \(2\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(3*x**2 - 4*x + 1, (x, 0, 2))
      expected: "2"
:::

::: exercise
id: l3-fundamental-theorem.b2
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_1^4 \left(\sqrt{x}+\frac{1}{\sqrt{x}}\right)\,dx\).
solution: |
  Write the integrand as the powers \(x^{1/2}+x^{-1/2}\).

  An antiderivative is \(\frac{2}{3}x^{3/2}+2x^{1/2}\).

  \[
  \begin{aligned}
  &\left[\frac{2}{3}x^{3/2}+2x^{1/2}\right]_1^4\\
  &=\left(\frac{16}{3}+4\right)-\left(\frac{2}{3}+2\right)\\
  &=\frac{14}{3}+2=\frac{20}{3}.
  \end{aligned}
  \]

  The integral equals \(\frac{20}{3}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(sqrt(x) + 1/sqrt(x), (x, 1, 4))
      expected: "20/3"
:::

::: exercise
id: l3-fundamental-theorem.b3
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_1^e \left(x+\frac{1}{x}\right)\,dx\).
solution: |
  The term \(\frac{1}{x}\) has antiderivative \(\ln|x|\). On \([1,e]\), \(x>0\).

  An antiderivative is \(\frac{x^2}{2}+\ln x\).

  \[\left[\frac{x^2}{2}+\ln x\right]_1^e=\frac{e^2}{2}+1-\frac{1}{2}=\frac{e^2+1}{2}.\]

  The integral equals \(\frac{e^2+1}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x + 1/x, (x, 1, exp(1)))
      expected: "(exp(1)**2 + 1)/2"
:::

::: exercise
id: l3-fundamental-theorem.b4
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_0^\pi (\sin x+\cos x)\,dx\).
solution: |
  An antiderivative of \(\sin x\) is \(-\cos x\), and an antiderivative of \(\cos x\) is \(\sin x\).

  \[
  \begin{aligned}
  &\left[-\cos x+\sin x\right]_0^\pi\\
  &=(1+0)-(-1+0)=2.
  \end{aligned}
  \]

  The integral equals \(2\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(sin(x) + cos(x), (x, 0, pi))
      expected: "2"
:::

::: exercise
id: l3-fundamental-theorem.b5
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_0^1 e^{2x}\,dx\).
solution: |
  The rule \(\int e^{ax}\,dx=\frac{e^{ax}}{a}\) with \(a=2\) gives the antiderivative \(\frac{1}{2}e^{2x}\).

  \[\left[\frac{1}{2}e^{2x}\right]_0^1=\frac{e^2-1}{2}.\]

  The integral equals \(\frac{e^2-1}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(exp(2*x), (x, 0, 1))
      expected: "(exp(2) - 1)/2"
:::

::: exercise
id: l3-fundamental-theorem.b6
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Find an antiderivative of \(f(x)=x^4-\frac{3}{x^2}+2\) on \((0,\infty)\).
solution: |
  Rewrite the middle term as \(-3x^{-2}\). Its antiderivative is \(-3\cdot\frac{x^{-1}}{-1}=\frac{3}{x}\).

  An antiderivative on \((0,\infty)\) is \(\frac{x^5}{5}+\frac{3}{x}+2x\).
provenance: written-for-site
verification:
  checks:
    - expr: diff(x**5/5 + 3/x + 2*x, x) - (x**4 - 3/x**2 + 2)
      expected: "0"
:::

::: exercise
id: l3-fundamental-theorem.b7
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Find an antiderivative of \(f(x)=\frac{1}{2x+1}\) on \(\left(-\frac{1}{2},\infty\right)\).
solution: |
  A linear composite integrates by \(\int f(ax+b)\,dx=\frac{1}{a}F(ax+b)\).

  On \(\left(-\frac{1}{2},\infty\right)\), the quantity \(2x+1\) is positive, and an antiderivative is \(\frac{1}{2}\ln(2x+1)\).

  The antiderivative of \(\frac{1}{2x+1}\) is \(\frac{1}{2}\ln(2x+1)\). The line \(\ln(2x+1)\) drops the factor \(\frac{1}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: diff(log(2*x+1)/2, x) - 1/(2*x+1)
      expected: "0"
:::

::: exercise
id: l3-fundamental-theorem.b8
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_0^1 \frac{1}{(1+x)^2}\,dx\).
solution: |
  The integrand is \((1+x)^{-2}\), whose antiderivative is \(-(1+x)^{-1}\).

  \[\left[-\frac{1}{1+x}\right]_0^1=-\frac{1}{2}+1=\frac{1}{2}.\]

  The integral equals \(\frac{1}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(1/(1+x)**2, (x, 0, 1))
      expected: "1/2"
:::

::: exercise
id: l3-fundamental-theorem.b9
tier: standard
topics: [antiderivatives, fundamental-theorem]
statement: |
  Find the antiderivative of \(f(x)=\cos(3x)+e^{-x}\) that vanishes at \(0\).
solution: |
  The general antiderivative is \(\frac{\sin 3x}{3}-e^{-x}+C\). The constant is fixed by the value at \(0\).

  \(F(0)=-1+C=0\), so \(C=1\).

  \[F(x)=\frac{\sin 3x}{3}-e^{-x}+1.\]
provenance: written-for-site
steps:
  - A general antiderivative is \(\frac{\sin 3x}{3}-e^{-x}+C\).
  - The condition \(F(0)=0\) forces \(C=1\).
verification:
  checks:
    - expr: diff(sin(3*x)/3 - exp(-x) + 1, x) - (cos(3*x) + exp(-x))
      expected: "0"
    - expr: (sin(3*x)/3 - exp(-x) + 1).subs(x, 0)
      expected: "0"
:::

::: exercise
id: l3-fundamental-theorem.b10
tier: basic
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_0^{\pi/4} \frac{1}{\cos^2 x}\,dx\).
solution: |
  The derivative of \(\tan x\) is \(\frac{1}{\cos^2 x}\).

  \[\left[\tan x\right]_0^{\pi/4}=1-0=1.\]

  The integral equals \(1\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(1/cos(x)**2, (x, 0, pi/4))
      expected: "1"
:::

::: exercise
id: l3-fundamental-theorem.b11
tier: standard
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_1^8 \frac{1}{\sqrt[3]{x}}\,dx\).
solution: |
  Write the integrand as \(x^{-1/3}\). Then \(\int x^{-1/3}\,dx=\frac{x^{2/3}}{2/3}=\frac{3}{2}x^{2/3}\).

  Since \(8^{2/3}=4\),
  \[\left[\frac{3}{2}x^{2/3}\right]_1^8=\frac{3}{2}(4-1)=\frac{9}{2}.\]

  The integral equals \(\frac{9}{2}\).
provenance: written-for-site
steps:
  - An antiderivative of \(x^{-1/3}\) is \(\frac{3}{2}x^{2/3}\).
  - Evaluating from \(1\) to \(8\) gives \(\frac{9}{2}\).
verification:
  checks:
    - expr: integrate(x**(-Rational(1,3)), (x, 1, 8))
      expected: "9/2"
:::

::: exercise
id: l3-fundamental-theorem.b12
tier: standard
topics: [antiderivatives, fundamental-theorem]
statement: |
  Compute \(\int_0^1 2^x\,dx\).
solution: |
  Rewrite the integrand as an exponential, \(2^x=e^{x\ln 2}\).

  An antiderivative is \(\frac{2^x}{\ln 2}\).

  \[\left[\frac{2^x}{\ln 2}\right]_0^1=\frac{2-1}{\ln 2}=\frac{1}{\ln 2}.\]

  The integral equals \(\frac{1}{\ln 2}\).
provenance: written-for-site
steps:
  - Rewrite \(2^x\) as \(e^{x\ln 2}\).
  - An antiderivative is \(\frac{2^x}{\ln 2}\).
  - The definite integral equals \(\frac{1}{\ln 2}\).
verification:
  checks:
    - expr: integrate(2**x, (x, 0, 1))
      expected: "1/log(2)"
:::

::: exercise
id: l3-fundamental-theorem.semicircle
tier: standard
topics: [fundamental-theorem]
statement: |
  Compute \(\int_{-1}^{1} \sqrt{1-t^2}\,dt\) without finding an antiderivative.
solution: |
  The graph of \(y=\sqrt{1-t^2}\) satisfies \(t^2+y^2=1\) and \(y\ge 0\), so it is the upper half of the unit circle. For \(-1\le t\le 1\) the integrand is nonnegative, so the integral is the area between this graph and the \(t\)-axis. That region is a half disc of radius \(1\), with area \(\frac{1}{2}\pi\cdot 1^2\).

  \[
  \int_{-1}^{1} \sqrt{1-t^2}\,dt=\frac{\pi}{2}.
  \]

  The integrand is at most \(1\) on an interval of length \(2\), so the value lies between \(0\) and \(2\). The number \(\frac{\pi}{2}\approx 1.57\) fits.
provenance: written-for-site
steps:
  - The graph is the upper half of the unit circle, and the integrand is nonnegative.
  - The integral is the area of a half disc of radius \(1\).
  - The value is \(\frac{\pi}{2}\).
verification:
  checks:
    - expr: integrate(sqrt(1 - t**2), (t, -1, 1))
      expected: "pi/2"
:::

::: exercise
id: l3-fundamental-theorem.h2
tier: basic
topics: [antiderivatives, symmetry]
statement: |
  Compute \(\int_{-\pi}^{\pi} x^2\sin x\,dx\).
solution: |
  An even factor times an odd factor is odd.

  The factor \(x^2\) is even and the factor \(\sin x\) is odd, so \(x^2\sin x\) is odd. The interval \([-\pi,\pi]\) is symmetric about \(0\).

  The integral equals \(0\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x**2*sin(x), (x, -pi, pi))
      expected: "0"
:::

::: exercise
id: l3-fundamental-theorem.h3
tier: basic
topics: [antiderivatives, symmetry]
statement: |
  Compute \(\int_{-1}^{2} |x|\,dx\).
solution: |
  Split at \(0\), where \(x\) changes sign.

  - On \([-1,0]\), \(|x|=-x\).
  - On \([0,2]\), \(|x|=x\).

  \(\int_{-1}^{0}(-x)\,dx=\left[-\frac{x^2}{2}\right]_{-1}^{0}=\frac{1}{2}\), and \(\int_0^2 x\,dx=\left[\frac{x^2}{2}\right]_0^2=2\).

  The sum is \(\frac{5}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(Abs(x), (x, -1, 2))
      expected: "5/2"
:::

::: exercise
id: l3-fundamental-theorem.h4
tier: basic
topics: [antiderivatives, symmetry]
statement: |
  Compute \(\int_0^3 |x-1|\,dx\).
solution: |
  Split at \(x=1\), where the expression inside the absolute value changes sign.

  - On \([0,1]\), \(|x-1|=1-x\).
  - On \([1,3]\), \(|x-1|=x-1\).

  \(\int_0^1(1-x)\,dx=\left[x-\frac{x^2}{2}\right]_0^1=\frac{1}{2}\), and \(\int_1^3(x-1)\,dx=\left[\frac{x^2}{2}-x\right]_1^3=2\).

  The sum is \(\frac{5}{2}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(Abs(x-1), (x, 0, 3))
      expected: "5/2"
:::

::: exercise
id: l3-fundamental-theorem.h5
tier: standard
topics: [antiderivatives, symmetry]
statement: |
  Compute \(\int_{-1}^{1} \left(x^3\cos x+x^2\right)\,dx\).
solution: |
  Split the integrand into an odd part and an even part.

  The product \(x^3\cos x\) is odd, because \(x^3\) is odd and \(\cos x\) is even. Its integral on \([-1,1]\) equals \(0\).

  The term \(x^2\) is even, so \(\int_{-1}^{1} x^2\,dx=2\int_0^1 x^2\,dx=2\cdot\frac{1}{3}=\frac{2}{3}\).

  The whole integral equals \(\frac{2}{3}\).
provenance: written-for-site
steps:
  - The term \(x^3\cos x\) is odd, so its integral on \([-1,1]\) is \(0\).
  - The term \(x^2\) is even, and twice the integral from \(0\) to \(1\) equals \(\frac{2}{3}\).
verification:
  checks:
    - expr: integrate(x**3*cos(x) + x**2, (x, -1, 1))
      expected: "2/3"
:::

::: exercise
id: l3-fundamental-theorem.h6
tier: standard
topics: [antiderivatives, symmetry]
statement: |
  Compute \(\int_0^{2\pi} |\sin x|\,dx\).
solution: |
  The factor \(\sin x\) is negative on \((\pi,2\pi)\), so split the absolute value there.

  - On \([0,\pi]\), \(|\sin x|=\sin x\).
  - On \([\pi,2\pi]\), \(|\sin x|=-\sin x\).

  \(\int_0^\pi \sin x\,dx=\left[-\cos x\right]_0^\pi=2\), and \(\int_\pi^{2\pi}(-\sin x)\,dx=\left[\cos x\right]_\pi^{2\pi}=2\).

  The sum is \(4\).

  \(\int_0^{2\pi}\sin x\,dx=0\). That value is the signed area. The integral of \(|\sin x|\) equals \(4\).
provenance: written-for-site
steps:
  - Split at \(\pi\), where \(\sin x\) changes sign.
  - Each piece equals \(2\).
  - The integral of \(|\sin x|\) equals \(4\).
verification:
  checks:
    - expr: integrate(Abs(sin(x)), (x, 0, 2*pi))
      expected: "4"
:::

::: exercise
id: l3-fundamental-theorem.h7
tier: basic
topics: [antiderivatives, symmetry]
statement: |
  Let \(f(x)=x^2\) on \([0,1]\) and \(f(x)=2-x\) on \([1,2]\). Compute \(\int_0^2 f(x)\,dx\).
solution: |
  Split the integral at the breakpoint \(x=1\).

  \(\int_0^1 x^2\,dx=\frac{1}{3}\), and \(\int_1^2(2-x)\,dx=\left[2x-\frac{x^2}{2}\right]_1^2=\frac{1}{2}\).

  The sum is \(\frac{1}{3}+\frac{1}{2}=\frac{5}{6}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x**2, (x, 0, 1)) + integrate(2 - x, (x, 1, 2))
      expected: "5/6"
:::

::: exercise
id: l3-fundamental-theorem.h8
tier: standard
topics: [antiderivatives, symmetry]
statement: |
  Compute \(\int_0^{10\pi} \sin^2 x\,dx\).
solution: |
  The integrand \(\sin^2 x\) has period \(\pi\), and one period integrates to \(\frac{\pi}{2}\).

  The interval \([0,10\pi]\) contains \(10\) such periods. Each contributes \(\frac{\pi}{2}\), so the integral equals \(10\cdot\frac{\pi}{2}=5\pi\).

  The identity \(\sin^2 x=\frac{1-\cos 2x}{2}\) gives the same value. An antiderivative is \(\frac{x}{2}-\frac{\sin 2x}{4}\), and
  \[\left[\frac{x}{2}-\frac{\sin 2x}{4}\right]_0^{10\pi}=5\pi.\]
provenance: written-for-site
steps:
  - The integrand \(\sin^2 x\) has period \(\pi\), and one period integrates to \(\frac{\pi}{2}\).
  - Ten periods give \(5\pi\).
verification:
  checks:
    - expr: integrate(sin(x)**2, (x, 0, 10*pi))
      expected: "5*pi"
:::

::: exercise
id: l3-fundamental-theorem.h9
tier: standard
topics: [antiderivatives, symmetry]
statement: |
  Compute \(\int_{-1}^{1} e^{|x|}\,dx\).
solution: |
  The integrand \(e^{|x|}\) is even, and the interval is symmetric about \(0\).

  On \([0,1]\), \(|x|=x\), so
  \[
  \begin{aligned}
  &\int_{-1}^{1} e^{|x|}\,dx\\
  &=2\int_0^1 e^x\,dx\\
  &=2\left[e^x\right]_0^1=2(e-1).
  \end{aligned}
  \]

  The integral equals \(2(e-1)\).
provenance: written-for-site
steps:
  - The integrand is even, so the integral is twice the integral from \(0\) to \(1\).
  - That half equals \(e-1\), and the full integral equals \(2(e-1)\).
verification:
  checks:
    - expr: integrate(exp(Abs(x)), (x, -1, 1))
      expected: "2*(exp(1)-1)"
:::

::: exercise
id: l3-fundamental-theorem.l1
tier: basic
topics: [fundamental-theorem, parameters]
statement: |
  Let \(F(x)=\int_0^x e^{-t^2}\,dt\). Compute \(F'(1)\).
solution: |
  The fundamental theorem reads \(F'\) off the integrand.

  \(F'(x)=e^{-x^2}\), so \(F'(1)=e^{-1}\).

  The function \(e^{-t^2}\) has no elementary antiderivative.
provenance: written-for-site
verification:
  checks:
    - expr: diff(integrate(exp(-t**2), (t, 0, x)), x).subs(x, 1)
      expected: "exp(-1)"
:::

::: exercise
id: l3-fundamental-theorem.l2
tier: standard
topics: [fundamental-theorem, parameters]
statement: |
  Let \(G(x)=\int_1^{x^2} \ln t\,dt\). Compute \(G'(e)\).
solution: |
  Differentiate a variable upper limit by the chain rule: \(\frac{d}{dx}\int_a^{u(x)} f(t)\,dt=f(u(x))\,u'(x)\).

  Let \(u(x)=x^2\). For \(x\neq 0\), \(G'(x)=\ln(x^2)\cdot 2x\).

  For \(x>0\), \(\ln(x^2)=2\ln x\), so \(G'(x)=4x\ln x\).

  Therefore \(G'(e)=4e\ln e=4e\).
provenance: written-for-site
steps:
  - The chain rule gives \(G'(x)=\ln(x^2)\cdot 2x\).
  - For \(x>0\) this equals \(4x\ln x\).
  - At \(x=e\) the derivative equals \(4e\).
verification:
  checks:
    - expr: diff(integrate(log(t), (t, 1, x**2)), x).subs(x, exp(1))
      expected: "4*exp(1)"
:::

::: exercise
id: l3-fundamental-theorem.l3
tier: standard
topics: [fundamental-theorem, parameters]
statement: |
  Let \(H(x)=\int_x^{2x} \frac{1}{t}\,dt\) for \(x>0\). Compute \(H'(5)\).
solution: |
  With \(f(t)=\frac{1}{t}\), the two limits contribute \(H'(x)=f(2x)\cdot 2-f(x)\).

  For \(x>0\), \(H'(x)=\frac{2}{2x}-\frac{1}{x}=0\).

  The integral itself is constant on \((0,\infty)\): \(H(x)=\ln(2x)-\ln x=\ln 2\). A constant has derivative \(0\), so \(H'(5)=0\).
provenance: written-for-site
steps:
  - Differentiating the limits gives \(H'(x)=\frac{2}{2x}-\frac{1}{x}\).
  - That difference is \(0\), and directly \(H(x)=\ln 2\).
verification:
  checks:
    - expr: diff(integrate(1/t, (t, x, 2*x)), x).subs(x, 5)
      expected: "0"
    - expr: integrate(1/t, (t, x, 2*x))
      expected: "log(2)"
:::

::: exercise
id: l3-fundamental-theorem.l4
tier: exam
topics: [fundamental-theorem, parameters]
statement: |
  For \(x>0\), compute \(g(x)=\int_0^\infty \cos(t)\,e^{-xt}\,dt\).
solution: |
  Integrate by parts twice, using the sine integral \(I=\int_0^\infty \sin(t)\,e^{-xt}\,dt=\frac{1}{1+x^2}\) for \(x>0\).

  Let \(J=\int_0^\infty \cos(t)\,e^{-xt}\,dt\). Integrate by parts with \(u=\cos t\) and \(v=-\frac{1}{x}e^{-xt}\). The boundary term equals \(\frac{1}{x}\), and the remaining integral is \(-\frac{1}{x}I\), so \(J=\frac{1}{x}-\frac{1}{x}I\).

  \[
  \begin{aligned}
  &J\\
  &=\frac{1}{x}\left(1-\frac{1}{1+x^2}\right)\\
  &=\frac{1}{x}\cdot\frac{x^2}{1+x^2}=\frac{x}{1+x^2}.
  \end{aligned}
  \]

  For \(x>0\), \(g(x)=\frac{x}{1+x^2}\).
provenance: written-for-site
steps:
  - For \(x>0\), integration by parts gives \(J=\frac{1}{x}-\frac{1}{x}I\) with \(I=\frac{1}{1+x^2}\).
  - Algebra yields \(J=\frac{x}{1+x^2}\).
verification:
  checks:
    - expr: integrate(cos(t)*exp(-x*t), (t, 0, oo)).subs(x, 3)
      expected: "3/10"
    - expr: integrate(cos(t)*exp(-x*t), (t, 0, oo)).args[0][0]
      expected: "x/(1+x**2)"
:::

::: exercise
id: l3-fundamental-theorem.l5
tier: basic
topics: [fundamental-theorem, parameters]
statement: |
  For \(x>0\), compute \(\int_0^\infty e^{-xt}\,dt\) as a function of \(x\). What happens for \(x\le 0\)?
solution: |
  Treat \(x\) as a constant and integrate in \(t\).

  - For \(x>0\), \(\int_0^R e^{-xt}\,dt=\frac{1-e^{-xR}}{x}\), and the limit as \(R\to\infty\) is \(\frac{1}{x}\).
  - For \(x=0\), \(\int_0^R 1\,dt=R\), which tends to \(\infty\).
  - For \(x<0\), \(e^{-xt}\) tends to \(\infty\) as \(t\to\infty\), so the integral diverges.

  The integral is defined on \((0,\infty)\), where it equals \(\frac{1}{x}\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(exp(-x*t), (t, 0, oo)).subs(x, 3)
      expected: "1/3"
    - expr: integrate(exp(-x*t), (t, 0, oo)).args[0][0]
      expected: "1/x"
:::

::: exercise
id: l3-fundamental-theorem.midterm-mock-1-ex6.1
statement: |
  Compute \(\displaystyle\int_1^2\bigl(t^5+t^4-\tfrac{t^2}{2}+1\bigr)\,dt\).
solution: |
  An antiderivative is \(\frac{t^6}{6}+\frac{t^5}{5}-\frac{t^3}{6}+t\). Evaluating from \(1\) to \(2\) gives \(\frac{248}{15}\).
steps:
  - Antiderivative \(\frac{t^6}{6}+\frac{t^5}{5}-\frac{t^3}{6}+t\).
  - Value \(\frac{248}{15}\).
verification:
  checks:
    - expr: integrate(t**5 + t**4 - t**2/2 + 1, (t, 1, 2))
      expected: Rational(248, 15)
discrepancy: |
  The official key omits the summand \(+1\) and gives \(\frac{28}{3}+\frac{31}{5}\). The verified value of the printed integral is \(\frac{248}{15}\).
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "6.1"
  points: 1
:::

::: exercise
id: l3-fundamental-theorem.midterm-2024-ex4.1
statement: |
  Compute
  \[ \int_1^2 \frac{t^2 + 1}{t}\, dt. \]
tier: exam
topics:
  - fundamental-theorem
pastExam:
  year: 2024
  paper: Midterm
  question: "4.1"
  points: 1
solution: |
  Dividing gives \((t^2 + 1)/t = t + 1/t\). An antiderivative is \(t^2/2 + \log t\). Evaluating from \(1\) to \(2\) produces
  \[ \bigl(2 + \log 2\bigr) - \tfrac{1}{2} = \tfrac{3}{2} + \log 2. \]
provenance: written-for-site
steps:
  - Split the integrand as \(t + 1/t\).
  - Evaluate \(3/2 + \log 2\).
verification:
  checks:
    - expr: integrate((t**2+1)/t, (t, 1, 2))
      expected: Rational(3,2) + log(2)
:::

::: exercise
id: l3-fundamental-theorem.midterm-2024-ex4.7
statement: |
  Compute
  \[ \int_{-1}^{1} \frac{4x - 1}{2x^2 - x + 1}\, dx. \]
tier: exam
topics:
  - fundamental-theorem
pastExam:
  year: 2024
  paper: Midterm
  question: "4.7"
  points: 1
solution: |
  The derivative of the denominator is \(4x - 1\), which is exactly the numerator. The discriminant of \(2x^2 - x + 1\) is \(1 - 8 = -7 < 0\), so the denominator never vanishes. The integral is
  \[
  \begin{aligned}
  &\bigl[\log|2x^2 - x + 1|\bigr]_{-1}^{1}\\
  &=\log 2 - \log 4 = -\log 2.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Numerator is the derivative of the denominator.
  - Value \(-\log 2\).
verification:
  checks:
    - expr: integrate((4*x-1)/(2*x**2 - x + 1), (x, -1, 1))
      expected: -log(2)
    - expr: diff(2*x**2 - x + 1, x) - (4*x-1)
      expected: 0
:::

::: exercise
id: l3-fundamental-theorem.midterm-2026-ex5.1
number: "5.1"
statement: |
  Compute
  \[ \int_0^1 \bigl(t^2+\sqrt{t}-1\bigr)\,dt. \]
tier: exam
topics:
  - integrals
pastExam:
  year: 2026
  paper: Midterm
  question: "5.1"
  points: 1
solution: |
  \[
  \begin{aligned}
  &\int_0^1\bigl(t^2+\sqrt{t}-1\bigr)\,dt\\
  &=\Bigl[\frac{t^3}{3}+\frac{2}{3}t^{3/2}-t\Bigr]_0^1\\
  &=\frac13+\frac23-1=0.
  \end{aligned}
  \]
provenance: official-key
steps:
  - Antiderivative and evaluation at the endpoints, value \(0\).
verification:
  checks:
    - expr: integrate(t**2 + sqrt(t) - 1, (t, 0, 1))
      expected: 0
:::

::: exercise
id: l3-fundamental-theorem.midterm-predicted-b-ex4.1
number: "4.1"
statement: |
  Compute \(\displaystyle\int_1^2 \frac{x^2 - 1}{x}\, dx\).
tier: exam
topics:
  - fundamental-theorem
solution: |
  Split the integrand as \(x - \dfrac{1}{x}\). Then
  \[
  \begin{aligned}
  &\int_1^2 \Bigl(x - \frac{1}{x}\Bigr) dx\\
  &=\Bigl[\frac{x^2}{2} - \ln x\Bigr]_1^2\\
  &=\bigl(2 - \ln 2\bigr) - \frac12 = \frac{3}{2} - \ln 2.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Rewrite as x - 1/x and evaluate.
verification:
  checks:
    - expr: integrate((x**2 - 1)/x, (x, 1, 2))
      expected: Rational(3, 2) - log(2)
:::

::: exercise
id: l3-fundamental-theorem.ex-net-distance-cubic
tier: standard
topics: [antiderivatives, fundamental-theorem]
statement: |
  A particle moves on a line with velocity \(v(t)=t^2-4t+3\) for \(0\le t\le 4\), and its position at \(t=0\) is \(0\).

  - (a) Find the net change in position from \(t=0\) to \(t=4\).
  - (b) Find the total distance travelled from \(t=0\) to \(t=4\).
  - (c) At which times in \([0,4]\) is the particle at its starting point?
solution: |
  An antiderivative of \(v\) is \(V(t)=\frac{t^3}{3}-2t^2+3t\), and \(V(0)=0\), so the position is \(x(t)=V(t)\).

  (a) The net change is \(\int_0^4 v(t)\,dt=V(4)-V(0)\). Here \(V(4)=\frac{64}{3}-32+12=\frac{4}{3}\), so the net change is \(\frac{4}{3}\).

  (b) The velocity factors as \(v(t)=(t-1)(t-3)\). It is positive on \([0,1)\), negative on \((1,3)\) and positive on \((3,4]\). The total distance adds the integral of \(|v|\) over the three pieces. The values of \(V\) at the break points are
  \[
  \begin{aligned}
  V(1)&=\frac{1}{3}-2+3=\frac{4}{3}\\
  V(3)&=9-18+9=0.
  \end{aligned}
  \]
  The three pieces contribute
  \[
  \begin{aligned}
  V(1)-V(0)&=\frac{4}{3}\\
  -\bigl(V(3)-V(1)\bigr)&=\frac{4}{3}\\
  V(4)-V(3)&=\frac{4}{3}.
  \end{aligned}
  \]
  The total distance is \(\frac{4}{3}+\frac{4}{3}+\frac{4}{3}=4\). It differs from the net change \(\frac{4}{3}\), because the particle moves backwards on \((1,3)\).

  (c) The particle is at the starting point when \(x(t)=0\). Now \(x(t)=\frac{t}{3}\,(t^2-6t+9)=\frac{t(t-3)^2}{3}\), which vanishes at \(t=0\) and \(t=3\). On \([0,4]\) the particle is at its starting point at \(t=0\) and at \(t=3\).
provenance: written-for-site
steps:
  - An antiderivative is \(V(t)=\frac{t^3}{3}-2t^2+3t\), and the net change is \(V(4)-V(0)=\frac{4}{3}\).
  - Split at the roots \(t=1\) and \(t=3\) of the velocity, and integrate \(|v|\) on each piece.
  - The total distance is \(4\).
  - The position is \(\frac{t(t-3)^2}{3}\), which is \(0\) at \(t=0\) and \(t=3\).
verification:
  checks:
    - expr: integrate(t**2 - 4*t + 3, (t, 0, 4))
      expected: "4/3"
    - expr: integrate(Abs(t**2 - 4*t + 3), (t, 0, 4))
      expected: "4"
    - expr: expand(t*(t - 3)**2/3 - (t**3/3 - 2*t**2 + 3*t))
      expected: "0"
:::

::: exercise
id: l3-fundamental-theorem.handout-7-1-1
number: "7.1.1"
tier: basic
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  An object moves in a straight line with speed \(v(t) = 2t + 2\). At \(t = 1\) it is at position \(5\). Find its position at \(t = 2\).
solution: |
  The position \(s(t)\) is an antiderivative of the speed, so \(s'(t) = 2t + 2\). Then
  \[
  s(t) = t^2 + 2t + C.
  \]
  The condition \(s(1) = 5\) fixes the constant:
  \[
  1 + 2 + C = 5, \qquad C = 2.
  \]
  So \(s(t) = t^2 + 2t + 2\), and
  \[
  s(2) = 4 + 4 + 2 = 10.
  \]
  The position at \(t = 2\) is \(10\).
provenance: handout-answer
steps:
  - The position is an antiderivative of the speed, \(s(t) = t^2 + 2t + C\).
  - The condition \(s(1) = 5\) gives \(C = 2\).
  - The position at \(t = 2\) is \(10\).
verification:
  checks:
    - expr: diff(t**2 + 2*t + 2, t)
      expected: "2*t + 2"
    - expr: (t**2 + 2*t + 2).subs(t, 1)
      expected: "5"
    - expr: (t**2 + 2*t + 2).subs(t, 2)
      expected: "10"
    - expr: 5 + integrate(2*t + 2, (t, 1, 2))
      expected: "10"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-1-2
number: "7.1.2"
tier: standard
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  An object moves in a straight line with speed \(v(t) = t^2 + 2\). At \(t = 0\) it is at position \(5\). Find its position at \(t = 2\).
solution: |
  The position is an antiderivative of the speed:
  \[
  s(t) = \frac{t^3}{3} + 2t + C.
  \]
  The condition \(s(0) = 5\) gives \(C = 5\). Then
  \[
  \begin{aligned}
  s(2)&=\frac{8}{3} + 4 + 5\\
  &=\frac{8}{3} + \frac{27}{3} = \frac{35}{3}.
  \end{aligned}
  \]
  The position at \(t = 2\) is \(\frac{35}{3}\).
provenance: handout-answer
steps:
  - The position is \(s(t) = \frac{t^3}{3} + 2t + C\).
  - The condition \(s(0) = 5\) gives \(C = 5\).
  - The position at \(t = 2\) is \(\frac{35}{3}\).
verification:
  checks:
    - expr: diff(t**3/3 + 2*t + 5, t)
      expected: "t**2 + 2"
    - expr: (t**3/3 + 2*t + 5).subs(t, 0)
      expected: "5"
    - expr: (t**3/3 + 2*t + 5).subs(t, 2)
      expected: "35/3"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-1
number: "7.2.1"
tier: basic
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Find the antiderivatives of \(8\sqrt{x}\).
solution: |
  Write \(8\sqrt{x} = 8x^{1/2}\), defined for \(x \ge 0\). An antiderivative of \(x^{1/2}\) is \(\frac{x^{3/2}}{3/2} = \frac{2}{3}x^{3/2}\). Therefore
  \[
  \int 8x^{1/2}\,dx = 8 \cdot \frac{2}{3}x^{3/2} = \frac{16}{3}x^{3/2}.
  \]
  Every antiderivative differs from this one by a constant. The antiderivatives are
  \[
  \frac{16}{3}x^{3/2} + C.
  \]
provenance: handout-answer
steps:
  - Rewrite \(8\sqrt{x}\) as \(8x^{1/2}\).
  - An antiderivative of \(x^{1/2}\) is \(\frac{2}{3}x^{3/2}\).
  - The antiderivatives are \(\frac{16}{3}x^{3/2} + C\).
verification:
  checks:
    - expr: diff(Rational(16, 3)*x**Rational(3, 2), x)
      expected: "8*sqrt(x)"
    - expr: diff(2*x**Rational(3, 2)/3, x)
      expected: "sqrt(x)"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-5
number: "7.2.5"
tier: basic
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Find the antiderivatives of \(\frac{7}{s}\), that is, of \(7s^{-1}\).
solution: |
  The power rule \(\int s^n\,ds = \frac{s^{n+1}}{n+1}\) fails for \(n = -1\), because the denominator is \(0\). An antiderivative of \(\frac{1}{s}\) is \(\ln|s|\), on any interval that does not contain \(0\). Therefore
  \[
  \int \frac{7}{s}\,ds = 7\ln|s| + C.
  \]
  For \(s > 0\) the absolute value can be dropped, and the antiderivatives are \(7\ln s + C\). For \(s < 0\) the antiderivatives are \(7\ln(-s) + C\).
provenance: handout-answer
steps:
  - The power rule does not apply to \(s^{-1}\).
  - An antiderivative of \(\frac{1}{s}\) is \(\ln|s|\) on an interval that avoids \(0\).
  - The antiderivatives are \(7\ln|s| + C\), which equals \(7\ln s + C\) for \(s > 0\).
verification:
  checks:
    - expr: diff(7*log(s), s)
      expected: "7/s"
    - expr: diff(7*log(-s), s)
      expected: "7/s"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-6
number: "7.2.6"
tier: standard
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Find the antiderivatives of \((5x + 1)^2\).
solution: |
  The inner function \(5x + 1\) is linear with slope \(5\). The derivative of \((5x + 1)^3\) is \(3(5x + 1)^2 \cdot 5 = 15(5x + 1)^2\). So the factor \(\frac{1}{15}\) is needed:
  \[
  \frac{d}{dx}\,\frac{(5x + 1)^3}{15} = (5x + 1)^2.
  \]
  The antiderivatives are
  \[
  \frac{(5x + 1)^3}{15} + C.
  \]
  Expanding first gives the same family. The expansion is \(25x^2 + 10x + 1\), with antiderivative \(\frac{25x^3}{3} + 5x^2 + x\). That equals \(\frac{(5x+1)^3}{15} - \frac{1}{15}\), which differs from the first form by a constant.
provenance: handout-answer
steps:
  - The derivative of \((5x + 1)^3\) is \(15(5x + 1)^2\).
  - Divide by \(15\) to get an antiderivative \(\frac{(5x+1)^3}{15}\).
  - The antiderivatives are \(\frac{(5x + 1)^3}{15} + C\).
verification:
  checks:
    - expr: diff((5*x + 1)**3/15, x)
      expected: "(5*x + 1)**2"
    - expr: expand((5*x + 1)**2)
      expected: "25*x**2 + 10*x + 1"
    - expr: expand((5*x + 1)**3/15 - 1/Integer(15) - (25*x**3/3 + 5*x**2 + x))
      expected: "0"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-9
number: "7.2.9"
tier: standard
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Find the antiderivatives of \(\frac{2}{x\sqrt{x}}\).
solution: |
  For \(x > 0\), \(x\sqrt{x} = x^{3/2}\), so the integrand is \(2x^{-3/2}\). The power rule with exponent \(-\frac{3}{2}\) gives
  \[
  \begin{aligned}
  \int 2x^{-3/2}\,dx&=2 \cdot \frac{x^{-1/2}}{-1/2}\\
  &=-4x^{-1/2}.
  \end{aligned}
  \]
  The antiderivatives, on \((0, \infty)\), are
  \[
  -\frac{4}{\sqrt{x}} + C.
  \]
provenance: handout-answer
steps:
  - Rewrite the integrand as \(2x^{-3/2}\).
  - The power rule gives \(\frac{2x^{-1/2}}{-1/2} = -4x^{-1/2}\).
  - The antiderivatives are \(-\frac{4}{\sqrt{x}} + C\).
verification:
  checks:
    - expr: diff(-4/sqrt(x), x)
      expected: "2/(x*sqrt(x))"
    - expr: simplify(2/(x*sqrt(x)) - 2*x**Rational(-3, 2))
      expected: "0"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-10
number: "7.2.10"
tier: standard
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Find the antiderivatives of \(|2t - 4|\). Treat \(t < 2\) and \(t \ge 2\) separately, and choose the constants so that the antiderivative is continuous.
solution: |
  The expression \(2t - 4\) changes sign at \(t = 2\).

  - For \(t < 2\), \(|2t - 4| = 4 - 2t\), with antiderivative \(4t - t^2 + C_1\).
  - For \(t \ge 2\), \(|2t - 4| = 2t - 4\), with antiderivative \(t^2 - 4t + C_2\).

  An antiderivative is differentiable, so it is continuous at \(t = 2\). The two formulas must agree there:
  \[
  \begin{aligned}
  4 \cdot 2 - 2^2 + C_1&=2^2 - 4 \cdot 2 + C_2\\
  4 + C_1&=-4 + C_2.
  \end{aligned}
  \]
  So \(C_2 = C_1 + 8\). Write \(C = C_1\). The antiderivatives are
  \[
  F(t) =
  \begin{cases}
  4t - t^2 + C, & t < 2,\\
  t^2 - 4t + 8 + C, & t \ge 2.
  \end{cases}
  \]
  Both pieces have derivative \(0\) at \(t = 2\), which equals \(|2 \cdot 2 - 4|\), so \(F\) is differentiable there.
provenance: handout-answer
steps:
  - Split at \(t = 2\), where \(2t - 4\) changes sign.
  - Integrate each piece, \(4t - t^2 + C_1\) and \(t^2 - 4t + C_2\).
  - Continuity at \(t = 2\) gives \(C_2 = C_1 + 8\).
verification:
  checks:
    - expr: diff(4*t - t**2, t)
      expected: "4 - 2*t"
    - expr: diff(t**2 - 4*t + 8, t)
      expected: "2*t - 4"
    - expr: (4*t - t**2).subs(t, 2) - (t**2 - 4*t + 8).subs(t, 2)
      expected: "0"
    - expr: ((t**2 - 4*t + 8) - (4*t - t**2)).subs(t, 4) + (4*t - t**2).subs(t, 4) - (4*t - t**2).subs(t, 0)
      expected: "8"
    - expr: integrate(Abs(2*t - 4), (t, 0, 4))
      expected: "8"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-11
number: "7.2.11"
tier: basic
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Compute \(\displaystyle\int_1^4 (t^2 + 3t)\,dt\).
solution: |
  An antiderivative of \(t^2 + 3t\) is \(\frac{t^3}{3} + \frac{3t^2}{2}\). Evaluating from \(1\) to \(4\) gives
  \[
  \begin{aligned}
  &\int_1^4 (t^2 + 3t)\,dt\\
  &=\left[\frac{t^3}{3} + \frac{3t^2}{2}\right]_1^4\\
  &=\left(\frac{64}{3} + 24\right) - \left(\frac{1}{3} + \frac{3}{2}\right)\\
  &=21 + \frac{45}{2} = \frac{87}{2}.
  \end{aligned}
  \]
  The integral equals \(\frac{87}{2}\).
provenance: handout-answer
steps:
  - An antiderivative is \(\frac{t^3}{3} + \frac{3t^2}{2}\).
  - The value at \(4\) is \(\frac{64}{3} + 24\), and the value at \(1\) is \(\frac{1}{3} + \frac{3}{2}\).
  - The integral equals \(\frac{87}{2}\).
verification:
  checks:
    - expr: integrate(t**2 + 3*t, (t, 1, 4))
      expected: "87/2"
    - expr: diff(t**3/3 + 3*t**2/2, t)
      expected: "t**2 + 3*t"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-13
number: "7.2.13"
tier: basic
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Compute \(\displaystyle\int_1^{10} \frac{1}{x}\,dx\).
solution: |
  On \([1, 10]\) the variable \(x\) is positive, and an antiderivative of \(\frac{1}{x}\) is \(\ln x\). Then
  \[
  \int_1^{10} \frac{1}{x}\,dx = \bigl[\ln x\bigr]_1^{10} = \ln 10 - \ln 1 = \ln 10.
  \]
  The integral equals \(\ln 10\), approximately \(2.303\).
provenance: handout-answer
steps:
  - An antiderivative of \(\frac{1}{x}\) on \([1, 10]\) is \(\ln x\).
  - The integral equals \(\ln 10 - \ln 1\).
  - The value is \(\ln 10\).
verification:
  checks:
    - expr: integrate(1/x, (x, 1, 10))
      expected: "log(10)"
    - expr: diff(log(x), x)
      expected: "1/x"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-14
number: "7.2.14"
tier: basic
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Compute \(\displaystyle\int_0^5 e^x\,dx\).
solution: |
  The function \(e^x\) is its own derivative, so it is its own antiderivative. Then
  \[
  \int_0^5 e^x\,dx = \bigl[e^x\bigr]_0^5 = e^5 - e^0 = e^5 - 1.
  \]
  The integral equals \(e^5 - 1\), approximately \(147.4\).
provenance: handout-answer
steps:
  - An antiderivative of \(e^x\) is \(e^x\).
  - The integral equals \(e^5 - e^0\).
  - The value is \(e^5 - 1\).
verification:
  checks:
    - expr: integrate(exp(x), (x, 0, 5))
      expected: "exp(5) - 1"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-16
number: "7.2.16"
tier: basic
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Compute \(\displaystyle\int_1^2 x^5\,dx\).
solution: |
  An antiderivative of \(x^5\) is \(\frac{x^6}{6}\). Then
  \[
  \begin{aligned}
  \int_1^2 x^5\,dx&=\left[\frac{x^6}{6}\right]_1^2\\
  &=\frac{2^6}{6} - \frac{1}{6}\\
  &=\frac{63}{6} = \frac{21}{2}.
  \end{aligned}
  \]
  The integral equals \(\frac{21}{2}\).
provenance: handout-answer
steps:
  - An antiderivative of \(x^5\) is \(\frac{x^6}{6}\).
  - The integral equals \(\frac{2^6}{6} - \frac{1}{6}\).
  - The value is \(\frac{21}{2}\).
verification:
  checks:
    - expr: integrate(x**5, (x, 1, 2))
      expected: "21/2"
    - expr: Rational(2**6, 6) - Rational(1, 6)
      expected: "21/2"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-17
number: "7.2.17"
tier: basic
topics:
  - fundamental-theorem
  - parameters
statement: |
  Find the derivative of \(G(x) = \displaystyle\int_1^x (t^2 - 3t)\,dt\).
solution: |
  The integrand \(t^2 - 3t\) is continuous, and the lower limit is the constant \(1\). By the fundamental theorem, \(G'(x)\) is the integrand evaluated at the upper limit:
  \[
  G'(x) = x^2 - 3x.
  \]
  As a check, an antiderivative of \(t^2 - 3t\) is \(\frac{t^3}{3} - \frac{3t^2}{2}\), so
  \[
  G(x) = \frac{x^3}{3} - \frac{3x^2}{2} - \left(\frac{1}{3} - \frac{3}{2}\right).
  \]
  The constant has derivative \(0\), and the derivative of the rest is \(x^2 - 3x\).
provenance: handout-answer
steps:
  - The integrand is continuous and the upper limit is \(x\).
  - The fundamental theorem gives \(G'(x) = x^2 - 3x\).
verification:
  checks:
    - expr: diff(integrate(t**2 - 3*t, (t, 1, x)), x)
      expected: "x**2 - 3*x"
    - expr: diff(Integral(t**2 - 3*t, (t, 1, x)), x)
      expected: "x**2 - 3*x"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-18
number: "7.2.18"
tier: standard
topics:
  - fundamental-theorem
  - parameters
statement: |
  Find the derivative of \(G(x) = \displaystyle\int_1^{x^2} (t^2 - 3t)\,dt\).
solution: |
  Let \(H(u) = \int_1^u (t^2 - 3t)\,dt\). By the fundamental theorem, \(H'(u) = u^2 - 3u\). Then \(G(x) = H(x^2)\), and the chain rule gives
  \[
  \begin{aligned}
  G'(x)&=H'(x^2) \cdot 2x\\
  &=\bigl((x^2)^2 - 3x^2\bigr) \cdot 2x\\
  &=2x(x^4 - 3x^2).
  \end{aligned}
  \]
  The derivative is \(2x(x^4 - 3x^2) = 2x^5 - 6x^3\).
provenance: handout-answer
steps:
  - Write \(G(x) = H(x^2)\) with \(H(u) = \int_1^u (t^2 - 3t)\,dt\).
  - The fundamental theorem gives \(H'(u) = u^2 - 3u\).
  - The chain rule gives \(G'(x) = 2x(x^4 - 3x^2)\).
verification:
  checks:
    - expr: diff(integrate(t**2 - 3*t, (t, 1, x**2)), x)
      expected: "2*x*(x**4 - 3*x**2)"
    - expr: diff(Integral(t**2 - 3*t, (t, 1, x**2)), x)
      expected: "2*x**5 - 6*x**3"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-2-20
number: "7.2.20"
tier: standard
topics:
  - fundamental-theorem
  - parameters
statement: |
  Find the derivative of \(G(x) = \displaystyle\int_1^{x^2} e^{t^2}\,dt\).
solution: |
  The function \(e^{t^2}\) has no elementary antiderivative, so \(G\) cannot be computed in closed form. The fundamental theorem still gives the derivative.

  Let \(H(u) = \int_1^u e^{t^2}\,dt\). Then \(H'(u) = e^{u^2}\), and \(G(x) = H(x^2)\). The chain rule gives
  \[
  \begin{aligned}
  G'(x)&=H'(x^2) \cdot 2x\\
  &=e^{(x^2)^2} \cdot 2x\\
  &=2x\,e^{x^4}.
  \end{aligned}
  \]
  The derivative is \(2x\,e^{x^4}\).
provenance: handout-answer
steps:
  - Write \(G(x) = H(x^2)\) with \(H(u) = \int_1^u e^{t^2}\,dt\).
  - The fundamental theorem gives \(H'(u) = e^{u^2}\).
  - The chain rule gives \(G'(x) = 2x\,e^{x^4}\).
verification:
  checks:
    - expr: diff(Integral(exp(t**2), (t, 1, x**2)), x)
      expected: "2*x*exp(x**4)"
    - expr: exp(u**2).subs(u, x**2)*diff(x**2, x)
      expected: "2*x*exp(x**4)"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-3-1
number: "7.3.1"
tier: standard
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  An object moves with velocity \(v(t) = -9.8t + 20\) m/s. Describe the motion between \(t = 0\) and \(t = 5\), and find the total distance travelled and the net distance travelled.
solution: |
  Write \(v(t) = -\frac{49}{5}t + 20\). The velocity is \(0\) at
  \[
  t = \frac{20}{49/5} = \frac{100}{49} \approx 2.04.
  \]

  ### Description of the motion

  - On \([0, \frac{100}{49}]\) the velocity is positive, so the object moves forward and rises.
  - On \([\frac{100}{49}, 5]\) the velocity is negative, so the object moves backward and falls.

  The position is \(s(t) = -4.9t^2 + 20t + k\), where \(k = s(0)\) is the starting position.

  ### Net distance

  The net distance is the change of position:
  \[
  \begin{aligned}
  s(5) - s(0)&=-4.9 \cdot 25 + 100\\
  &=-122.5 + 100 = -\frac{45}{2}.
  \end{aligned}
  \]
  At \(t = 5\) the object is \(\frac{45}{2} = 22.5\) m below its starting point.

  ### Total distance

  The turning point is at \(t = \frac{100}{49}\). The position change up to there is
  \[
  \begin{aligned}
  &s\left(\tfrac{100}{49}\right) - s(0)\\
  &=-\frac{49}{10}\cdot\frac{10000}{2401} + \frac{2000}{49}\\
  &=-\frac{1000}{49} + \frac{2000}{49} = \frac{1000}{49}.
  \end{aligned}
  \]
  The position change from the turning point to \(t = 5\) is
  \[
  -\frac{45}{2} - \frac{1000}{49} = -\frac{2205 + 2000}{98} = -\frac{4205}{98}.
  \]
  The total distance adds the lengths of the two pieces:
  \[
  \frac{1000}{49} + \frac{4205}{98} = \frac{2000 + 4205}{98} = \frac{6205}{98}.
  \]
  The total distance is \(\frac{6205}{98} \approx 63.3\) m, and the net distance is \(-\frac{45}{2}\) m.
provenance: handout-answer
steps:
  - The velocity vanishes at \(t = \frac{100}{49}\), positive before and negative after.
  - The net distance is \(\int_0^5 v(t)\,dt = -\frac{45}{2}\).
  - The distance up to the turning point is \(\frac{1000}{49}\), and the distance back is \(\frac{4205}{98}\).
  - The total distance is \(\frac{6205}{98}\).
verification:
  checks:
    - expr: solve(-Rational(49, 5)*t + 20, t)
      expected: "[Rational(100, 49)]"
    - expr: integrate(-Rational(49, 5)*t + 20, (t, 0, 5))
      expected: "-45/2"
    - expr: integrate(-Rational(49, 5)*t + 20, (t, 0, Rational(100, 49)))
      expected: "1000/49"
    - expr: integrate(-Rational(49, 5)*t + 20, (t, Rational(100, 49), 5))
      expected: "-4205/98"
    - expr: integrate(-Rational(49, 5)*t + 20, (t, 0, Rational(100, 49))) - integrate(-Rational(49, 5)*t + 20, (t, Rational(100, 49), 5))
      expected: "6205/98"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-3-2
number: "7.3.2"
tier: basic
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  An object moves with velocity \(v(t) = \sin t\). Set up and evaluate a single definite integral for the net distance travelled between \(t = 0\) and \(t = 2\pi\).
solution: |
  The net distance is the change of position, which is the integral of the velocity over the whole interval:
  \[
  \int_0^{2\pi} \sin t\,dt.
  \]
  An antiderivative of \(\sin t\) is \(-\cos t\), so
  \[
  \begin{aligned}
  \int_0^{2\pi} \sin t\,dt&=\bigl[-\cos t\bigr]_0^{2\pi}\\
  &=-\cos 2\pi + \cos 0\\
  &=-1 + 1 = 0.
  \end{aligned}
  \]
  The net distance is \(0\). The object ends at its starting point. The total distance is larger, because the velocity is negative on \((\pi, 2\pi)\). Splitting there gives \(2 + 2 = 4\).
provenance: handout-answer
steps:
  - The net distance is the single integral \(\int_0^{2\pi} \sin t\,dt\).
  - An antiderivative is \(-\cos t\).
  - The integral equals \(-1 + 1 = 0\).
verification:
  checks:
    - expr: integrate(sin(t), (t, 0, 2*pi))
      expected: "0"
    - expr: integrate(sin(t), (t, 0, pi)) - integrate(sin(t), (t, pi, 2*pi))
      expected: "4"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-3-3
number: "7.3.3"
tier: standard
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  An object moves with velocity \(v(t) = 1 + 2\sin t\) m/s. Find the net distance travelled between \(t = 0\) and \(t = 2\pi\), and the total distance travelled over the same period.
solution: |
  An antiderivative of \(v\) is \(V(t) = t - 2\cos t\).

  ### Net distance

  \[
  \begin{aligned}
  \int_0^{2\pi} v(t)\,dt&=V(2\pi) - V(0)\\
  &=(2\pi - 2) - (0 - 2) = 2\pi.
  \end{aligned}
  \]
  The net distance is \(2\pi\) m.

  ### Sign of the velocity

  The velocity vanishes when \(\sin t = -\frac{1}{2}\). On \([0, 2\pi]\) this happens at \(t = \frac{7\pi}{6}\) and \(t = \frac{11\pi}{6}\).

  - On \([0, \frac{7\pi}{6}]\) and on \([\frac{11\pi}{6}, 2\pi]\) the velocity is nonnegative.
  - On \([\frac{7\pi}{6}, \frac{11\pi}{6}]\) the velocity is nonpositive.

  ### Total distance

  The integral over the middle piece is
  \[
  \begin{aligned}
  &V\left(\tfrac{11\pi}{6}\right) - V\left(\tfrac{7\pi}{6}\right)\\
  &=\frac{4\pi}{6} - 2\cos\tfrac{11\pi}{6} + 2\cos\tfrac{7\pi}{6}\\
  &=\frac{2\pi}{3} - \sqrt{3} - \sqrt{3} = \frac{2\pi}{3} - 2\sqrt{3}.
  \end{aligned}
  \]
  This number is negative. The total distance equals the net distance minus twice the negative piece:
  \[
  \begin{aligned}
  2\pi - 2\left(\frac{2\pi}{3} - 2\sqrt{3}\right)&=2\pi - \frac{4\pi}{3} + 4\sqrt{3}\\
  &=\frac{2\pi}{3} + 4\sqrt{3}.
  \end{aligned}
  \]
  The total distance is \(\frac{2\pi}{3} + 4\sqrt{3} \approx 9.02\) m.
provenance: handout-answer
steps:
  - An antiderivative of \(v\) is \(t - 2\cos t\), and the net distance is \(2\pi\).
  - The velocity is negative exactly on \((\frac{7\pi}{6}, \frac{11\pi}{6})\).
  - The integral over that piece is \(\frac{2\pi}{3} - 2\sqrt{3}\).
  - The total distance is \(2\pi - 2\left(\frac{2\pi}{3} - 2\sqrt{3}\right) = \frac{2\pi}{3} + 4\sqrt{3}\).
verification:
  checks:
    - expr: integrate(1 + 2*sin(t), (t, 0, 2*pi))
      expected: "2*pi"
    - expr: (1 + 2*sin(t)).subs(t, 7*pi/6)
      expected: "0"
    - expr: (1 + 2*sin(t)).subs(t, 11*pi/6)
      expected: "0"
    - expr: integrate(1 + 2*sin(t), (t, 7*pi/6, 11*pi/6))
      expected: "2*pi/3 - 2*sqrt(3)"
    - expr: 2*pi - 2*integrate(1 + 2*sin(t), (t, 7*pi/6, 11*pi/6))
      expected: "2*pi/3 + 4*sqrt(3)"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-3-4
number: "7.3.4"
tier: standard
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Let \(f(x) = (x + 2)(x + 1)(x - 1)(x - 2)\) on \([-2, 2]\). Find the total area between the curve and the x-axis, with all area counted as positive.
solution: |
  Group the factors as \((x + 2)(x - 2) = x^2 - 4\) and \((x + 1)(x - 1) = x^2 - 1\). Then
  \[
  f(x) = (x^2 - 4)(x^2 - 1) = x^4 - 5x^2 + 4.
  \]
  The function is even, and its roots are \(\pm 1\) and \(\pm 2\). By symmetry the total area is twice the area on \([0, 2]\).

  - On \((0, 1)\) both factors \(x^2 - 4\) and \(x^2 - 1\) are negative, so \(f > 0\).
  - On \((1, 2)\) the factor \(x^2 - 4\) is negative and \(x^2 - 1\) is positive, so \(f < 0\).

  An antiderivative of \(f\) is \(F(x) = \frac{x^5}{5} - \frac{5x^3}{3} + 4x\). Its values are
  \[
  \begin{aligned}
  F(0)&=0,\\
  F(1)&=\frac{1}{5} - \frac{5}{3} + 4 = \frac{38}{15},\\
  F(2)&=\frac{32}{5} - \frac{40}{3} + 8 = \frac{16}{15}.
  \end{aligned}
  \]
  The area on \([0, 1]\) is \(F(1) - F(0) = \frac{38}{15}\). The signed integral on \([1, 2]\) is \(F(2) - F(1) = -\frac{22}{15}\), so the area there is \(\frac{22}{15}\). The total area is
  \[
  2\left(\frac{38}{15} + \frac{22}{15}\right) = 2 \cdot 4 = 8.
  \]
  The total area is \(8\).
provenance: handout-answer
steps:
  - Expand \(f(x) = x^4 - 5x^2 + 4\). It is even with roots \(\pm 1\) and \(\pm 2\).
  - The function is positive on \((0, 1)\) and negative on \((1, 2)\).
  - Use \(F(x) = \frac{x^5}{5} - \frac{5x^3}{3} + 4x\) on each piece.
  - The total area is \(2\left(\frac{38}{15} + \frac{22}{15}\right) = 8\).
verification:
  checks:
    - expr: expand((x + 2)*(x + 1)*(x - 1)*(x - 2))
      expected: "x**4 - 5*x**2 + 4"
    - expr: integrate(x**4 - 5*x**2 + 4, (x, 0, 1))
      expected: "38/15"
    - expr: integrate(x**4 - 5*x**2 + 4, (x, 1, 2))
      expected: "-22/15"
    - expr: 2*(integrate(x**4 - 5*x**2 + 4, (x, 0, 1)) - integrate(x**4 - 5*x**2 + 4, (x, 1, 2)))
      expected: "8"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-3-5
number: "7.3.5"
tier: standard
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Let \(f(x) = x^2 - 3x + 2\) on \([0, 4]\). Find the total area between the curve and the x-axis, with all area counted as positive.
solution: |
  The function factors as \(f(x) = (x - 1)(x - 2)\). Its roots are \(1\) and \(2\), so the interval splits into three pieces.

  - On \([0, 1]\), \(f \ge 0\).
  - On \([1, 2]\), \(f \le 0\).
  - On \([2, 4]\), \(f \ge 0\).

  An antiderivative of \(f\) is \(F(x) = \frac{x^3}{3} - \frac{3x^2}{2} + 2x\). Its values are
  \[
  \begin{aligned}
  F(0)&=0,\\
  F(1)&=\frac{1}{3} - \frac{3}{2} + 2 = \frac{5}{6},\\
  F(2)&=\frac{8}{3} - 6 + 4 = \frac{2}{3},\\
  F(4)&=\frac{64}{3} - 24 + 8 = \frac{16}{3}.
  \end{aligned}
  \]
  The three areas are
  \[
  \begin{aligned}
  F(1) - F(0)&=\frac{5}{6},\\
  -\bigl(F(2) - F(1)\bigr)&=\frac{5}{6} - \frac{4}{6} = \frac{1}{6},\\
  F(4) - F(2)&=\frac{16}{3} - \frac{2}{3} = \frac{14}{3}.
  \end{aligned}
  \]
  The total area is
  \[
  \frac{5}{6} + \frac{1}{6} + \frac{14}{3} = 1 + \frac{14}{3} = \frac{17}{3}.
  \]
  The total area is \(\frac{17}{3}\). The signed integral \(F(4) - F(0) = \frac{16}{3}\) is smaller, because the middle piece counts negatively.
provenance: handout-answer
steps:
  - Factor \(f(x) = (x - 1)(x - 2)\) and split \([0, 4]\) at \(1\) and \(2\).
  - The function is nonnegative on \([0, 1]\) and \([2, 4]\), and nonpositive on \([1, 2]\).
  - The three areas are \(\frac{5}{6}\), \(\frac{1}{6}\) and \(\frac{14}{3}\).
  - The total area is \(\frac{17}{3}\).
verification:
  checks:
    - expr: factor(x**2 - 3*x + 2)
      expected: "(x - 1)*(x - 2)"
    - expr: integrate(x**2 - 3*x + 2, (x, 0, 1))
      expected: "5/6"
    - expr: integrate(x**2 - 3*x + 2, (x, 1, 2))
      expected: "-1/6"
    - expr: integrate(x**2 - 3*x + 2, (x, 2, 4))
      expected: "14/3"
    - expr: integrate(Abs(x**2 - 3*x + 2), (x, 0, 4))
      expected: "17/3"
:::


::: exercise
id: l3-fundamental-theorem.handout-7-3-6
number: "7.3.6"
tier: standard
topics:
  - antiderivatives
  - fundamental-theorem
statement: |
  Evaluate the three integrals
  \[
  A = \int_0^3 (-x^2 + 9)\,dx, \qquad B = \int_0^4 (-x^2 + 9)\,dx, \qquad C = \int_4^3 (-x^2 + 9)\,dx,
  \]
  where \(C\) has lower limit \(4\) and upper limit \(3\). Verify that \(A = B + C\).
solution: |
  An antiderivative of \(-x^2 + 9\) is \(F(x) = -\frac{x^3}{3} + 9x\). Its values are
  \[
  \begin{aligned}
  F(0)&=0,\\
  F(3)&=-9 + 27 = 18,\\
  F(4)&=-\frac{64}{3} + 36 = \frac{44}{3}.
  \end{aligned}
  \]
  The three integrals are
  \[
  \begin{aligned}
  A&=F(3) - F(0) = 18,\\
  B&=F(4) - F(0) = \frac{44}{3},\\
  C&=F(3) - F(4) = 18 - \frac{44}{3} = \frac{10}{3}.
  \end{aligned}
  \]
  The integral \(C\) runs from \(4\) down to \(3\). It equals \(-\int_3^4 (-x^2 + 9)\,dx\). The integrand is negative on \((3, 4]\), so the integral from \(3\) to \(4\) is negative and \(C\) is positive.

  The sum is
  \[
  B + C = \frac{44}{3} + \frac{10}{3} = \frac{54}{3} = 18 = A.
  \]
  This is additivity: the integral from \(0\) to \(4\) followed by the integral back from \(4\) to \(3\) equals the integral from \(0\) to \(3\).
provenance: handout-answer
steps:
  - An antiderivative is \(F(x) = -\frac{x^3}{3} + 9x\).
  - The integrals are \(A = 18\), \(B = \frac{44}{3}\) and \(C = F(3) - F(4) = \frac{10}{3}\).
  - The sum \(B + C = 18\) equals \(A\).
verification:
  checks:
    - expr: integrate(-x**2 + 9, (x, 0, 3))
      expected: "18"
    - expr: integrate(-x**2 + 9, (x, 0, 4))
      expected: "44/3"
    - expr: integrate(-x**2 + 9, (x, 4, 3))
      expected: "10/3"
    - expr: integrate(-x**2 + 9, (x, 0, 4)) + integrate(-x**2 + 9, (x, 4, 3)) - integrate(-x**2 + 9, (x, 0, 3))
      expected: "0"
:::
