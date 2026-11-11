---
id: l1-derivative-rules
lecture: 1
order: 9
title: Derivative table and rules
prerequisites: [l1-derivative, l1-trigonometry, l1-exp-log]
sources:
  - { source: handout, section: "3.1", page: 57 }
  - { source: handout, section: "3.2", page: 60 }
  - { source: handout, section: "3.3", page: 62 }
  - { source: handout, section: "3.4", page: 64 }
  - { source: handout, section: "3.5", page: 67 }
  - { source: handout, section: "4.2", page: 76 }
  - { source: handout, section: "4.4", page: 80 }
  - { source: handout, section: "4.5", page: 81 }
  - { source: handout, section: "4.7", page: 84 }
  - { source: lecture-notes-1, page: 3 }
  - { source: class-1-corrections, page: 1 }
  - { source: class-1-corrections, page: 2 }
  - { source: sheet-1, page: 1 }
  - { source: midterm-app }
examWeight: high
examWeightNote: Every sketch, Newton and optimisation question on the midterm needs a derivative.
status: reviewed
notation: |
  The lecture notes write \(f'\), \(\dot f\) and \(\frac{df}{dx}\) for the same derivative. The handout writes \(\frac{d}{dx}\) and uses \(\Delta x\) for an increment in \(x\). The mark \(\partial\) is the curly-d mark some texts use for the same derivative in one variable. This course writes \(\frac{df}{dx}\).
---

::: section
title: Power rule, constants and sums
:::

::: formal-statement
kind: theorem
title: Power rule
source: { source: handout, section: "3.1", page: 57 }
text: |
  If \(n\) is a positive integer and \(f(x) = x^n\), then
  \[ f'(x) = n x^{n-1}. \]
:::

::: plain-explanation
text: |
  Differentiating \(x^n\) **multiplies by the exponent** and then lowers that exponent by 1. The cases:

  - For \(n \geq 2\) the formula \(n x^{n-1}\) is defined at every real \(x\).
  - For \(n = 1\) the derivative of \(x\) is the constant 1.
  - If \(n\) is a negative integer, the same formula holds for \(x \neq 0\). The derivative of \(x^{-3}\) is \(-3x^{-4}\).
:::

::: worked-example
title: Positive integer power
problem: |
  Differentiate \(f(x) = x^5\).
solution: |
  The exponent 5 is a positive integer. The power rule multiplies by 5 and lowers the exponent to 4. Therefore
  \[ f'(x) = 5x^4. \]
:::

::: formal-statement
kind: theorem
title: Constant functions
source: { source: handout, section: "3.1", page: 59 }
text: |
  The derivative of any constant function is zero.
:::

::: plain-explanation
text: |
  The graph of a constant function is a horizontal line. The slope of that line is 0 at every point, and that slope is \(f'(x)\).
:::

::: formal-statement
kind: theorem
title: Sum and constant multiple
source: { source: handout, section: "3.2", page: 60 }
text: |
  \[ (cf(x))' = c f'(x), \]
  \[ (f(x) + g(x))' = f'(x) + g'(x). \]
:::

::: plain-explanation
text: |
  A **constant multiplier** stays in front of the derivative. Take \(5x^2\). The constant 5 stays, and the power rule replaces \(x^2\) by \(2x\). The derivative is \(10x\).

  A **sum** is differentiated **term by term**. The derivative of the sum is the sum of the derivatives.
:::

::: worked-example
title: Sum of powers
problem: |
  Differentiate \(f(x) = x^5 + x^3\).
solution: |
  The sum rule writes \(f'(x)\) as \((x^5)' + (x^3)'\). The power rule gives
  \[
  \begin{aligned}
  (x^5)'&= 5x^4,\\
  (x^3)'&= 3x^2.
  \end{aligned}
  \]
  Therefore \(f'(x) = 5x^4 + 3x^2\).
:::

::: key-points
text: |
  - For a positive integer \(n\), \(\frac{d}{dx} x^n = n x^{n-1}\). The same formula holds for negative integers when \(x \neq 0\).
  - The derivative of a constant function is 0.
  - A constant factor stays in front, and a sum is differentiated term by term: \((cf)' = c f'\) and \((f + g)' = f' + g'\).
:::

::: concept-question
id: l1-derivative-rules.q-8298f64f
question: |
  Find \(a\) so that \(f(x) = x^{2} + ax - 3\) has a horizontal tangent at \(x = 4\).
options:
  - text: |
      \(a = -8\)
    correct: true
  - text: |
      \(a = 8\)
  - text: |
      \(a = -4\)
  - text: |
      \(a = 0\)
explanation: |
  A horizontal tangent means \(f'(4) = 0\). Here
  \[
  \begin{aligned}
  f'(x)&= 2x + a,\\
  f'(4)&= 8 + a = 0,
  \end{aligned}
  \]
  so \(a = -8\).
:::

::: exercise
id: l1-derivative-rules.sheet-1-3-1
number: "sheet 1 exercise 3.1"
tier: basic
topics: [power-rule, sum-rule]
statement: |
  Find the derivative of \(f(x) = x^5 + x^3\).
solution: |
  The sum rule writes \(f'(x)\) as \((x^5)' + (x^3)'\). The power rule gives
  \[
  \begin{aligned}
  (x^5)'&= 5x^4,\\
  (x^3)'&= 3x^2.
  \end{aligned}
  \]
  Therefore \(f'(x) = 5x^4 + 3x^2\).
provenance: written-for-site
verification:
  checks:
    - expr: "diff(x**5 + x**3, x)"
      expected: "5*x**4 + 3*x**2"
:::

::: section
title: Product and chain rules
:::

::: formal-statement
kind: theorem
title: Product rule
source: { source: handout, section: "3.3", page: 63 }
text: |
  \[
  \begin{aligned}
  (f(x) \cdot g(x))'&= f'(x) \cdot g(x)\\
  &\quad + f(x) \cdot g'(x).
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  Each term differentiates one factor and leaves the other factor unchanged. The derivative is the sum of those two terms. With \(u\) and \(v\), the same rule is
  \[ (uv)' = u'v + uv'. \]
:::

::: formal-statement
kind: theorem
title: Chain rule
source: { source: handout, section: "3.5", page: 68 }
text: |
  \[ \bigl(f(g(x))\bigr)' = f'(g(x)) \cdot g'(x). \]
  In Leibniz notation,
  \[ \frac{df}{dx} = \frac{df}{dg} \frac{dg}{dx}. \]
:::

::: plain-explanation
text: |
  To apply the chain rule:

  1. Evaluate the **outer derivative** at the **inner function**.
  2. Multiply that value by the derivative of the inner function.

  The inner function stays inside the outer derivative. The symbol \(\frac{dg}{dx}\) is one name for \(g'(x)\).
:::

::: worked-example
title: A product
problem: |
  Differentiate \(f(x) = x \sin x\).
solution: |
  Set \(u(x) = x\) and \(v(x) = \sin x\). Then \(u'(x) = 1\) and \(v'(x) = \cos x\). The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'(x) v(x) + u(x) v'(x)\\
  &= \sin x + x \cos x.
  \end{aligned}
  \]
:::

::: worked-example
title: Chain rule on a cosine
problem: |
  Differentiate \(f(t) = \cos(t^2)\).
solution: |
  The outer function is cosine and the inner function is \(t^2\). The derivative of cosine is \(-\sin\), and that derivative is evaluated at \(t^2\). The derivative of the inner function is \(2t\). Therefore
  \[
  \begin{aligned}
  f'(t)&= -\sin(t^2) \cdot 2t\\
  &= -2t \sin(t^2).
  \end{aligned}
  \]
:::

::: trap
text: |
  The product rule is \((fg)' = f'g + fg'\). Take \(f(x) = x\) and \(g(x) = x\). Their product is \(x^2\). The power rule gives \((x^2)'\), the product rule gives \(f'g + fg'\), and the product of the separate derivatives is \(f'g'\):
  \[
  \begin{aligned}
  (x^2)'&= 2x,\\
  f'g + fg'&= x + x = 2x,\\
  f'g'&= 1.
  \end{aligned}
  \]
  The constant 1 and the function \(2x\) disagree. Therefore \(f'g'\) is the wrong formula for \((fg)'\).
:::

::: key-points
text: |
  - The product rule is \((fg)' = f'g + fg'\). The usual slip is \(f'g'\), which already fails for \(x \cdot x\).
  - The chain rule is \(\bigl(f(g(x))\bigr)' = f'(g(x)) \cdot g'(x)\). The outer derivative is evaluated at the inner function, and the inner derivative is the last factor.
:::

::: concept-question
id: l1-derivative-rules.q-af84e37e
question: |
  Differentiate \(f(t) = \cos(t^{2})\).
options:
  - text: |
      \(-2t \sin(t^{2})\)
    correct: true
  - text: |
      \(-\sin(t^{2})\)
  - text: |
      \(-2t \sin(2t)\)
  - text: |
      \(2t \sin(t^{2})\)
explanation: |
  The outer derivative is \(-\sin(t^{2})\) and the inner derivative is \(2t\), so \(f'(t) = -2t\sin(t^{2})\). The inner function remains \(t^{2}\) inside the sine.
:::

::: concept-question
id: l1-derivative-rules.q-6f651f50
question: |
  Differentiate \(f(x) = \sqrt{x^{2} + 1}\).
options:
  - text: |
      \(\frac{x}{\sqrt{x^{2} + 1}}\)
    correct: true
  - text: |
      \(\frac{1}{2\sqrt{x^{2} + 1}}\)
  - text: |
      \(\frac{2x}{\sqrt{x^{2} + 1}}\)
  - text: |
      \(x\sqrt{x^{2} + 1}\)
explanation: |
  With \(u = x^{2} + 1\), the derivative of \(\sqrt{u}\) is
  \[
  \begin{aligned}
  \frac{u'}{2\sqrt{u}}&= \frac{2x}{2\sqrt{x^{2} + 1}}\\
  &= \frac{x}{\sqrt{x^{2} + 1}}.
  \end{aligned}
  \]
:::

::: concept-question
id: l1-derivative-rules.q-f4123736
question: |
  For \(f(x) = \sqrt{1 - x^{2}}\), what are \(\lim_{x \to -1^{+}} f'(x)\) and \(\lim_{x \to 1^{-}} f'(x)\)?
options:
  - text: |
      \(+\infty\) and \(-\infty\)
    correct: true
  - text: |
      \(-\infty\) and \(+\infty\)
  - text: |
      \(0\) and \(0\)
  - text: |
      Both \(+\infty\)
explanation: |
  The derivative is
  \[ f'(x) = -\frac{x}{\sqrt{1 - x^{2}}}. \]

  - As \(x \to -1^{+}\), the numerator tends to \(1\) and the denominator tends to \(0^{+}\), so \(f' \to +\infty\).
  - As \(x \to 1^{-}\), the numerator tends to \(-1\) and \(f' \to -\infty\).
:::

::: section
title: Reciprocal and quotient rules
:::

::: formal-statement
kind: theorem
title: Reciprocal rule
source: { source: handout, section: "3.4", page: 65 }
text: |
  If \(u(x) \neq 0\), then
  \[ \left(\frac{1}{u(x)}\right)' = \frac{-u'(x)}{u(x)^2}. \]
:::

::: plain-explanation
text: |
  The derivative of \(x^{-1}\) is \(-x^{-2}\). The **reciprocal** \(\frac{1}{u}\) is the outer function \(x \mapsto x^{-1}\) composed with \(u\). The chain rule multiplies \(-u^{-2}\) by \(u'\). That product is
  \[ -\frac{u'}{u^2}. \]
:::

::: formal-statement
kind: theorem
title: Quotient rule
source: { source: handout, section: "3.4", page: 65 }
text: |
  If \(g(x) \neq 0\), then
  \[ \frac{d}{dx}\left(\frac{f(x)}{g(x)}\right) = \frac{g(x) \cdot f'(x) - f(x) \cdot g'(x)}{(g(x))^2}. \]
:::

::: plain-explanation
text: |
  With numerator \(u\) and denominator \(v\), the same rule is
  \[ \left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}, \]
  wherever \(v \neq 0\).

  ### Where the rule comes from

  One derivation:

  1. Write \(\frac{u}{v} = u \cdot v^{-1}\).
  2. The product rule gives \(\frac{u'}{v} + u \left(v^{-1}\right)'\).
  3. The reciprocal rule replaces \(\left(v^{-1}\right)'\) by \(-\frac{v'}{v^2}\).
  4. The common denominator is \(v^2\), and the numerator is \(u'v - uv'\).
:::

::: tip
text: |
  Swapping the two products in the numerator changes the sign of the derivative.
:::

::: worked-example
title: Quotient for tangent
problem: |
  Differentiate \(f(x) = \frac{\sin x}{\cos x}\).
solution: |
  Set \(u(x) = \sin x\) and \(v(x) = \cos x\). Then \(u'(x) = \cos x\) and \(v'(x) = -\sin x\). The numerator of the quotient rule is
  \[
  \begin{aligned}
  u'v - uv'&= \cos x \cdot \cos x - \sin x \cdot (-\sin x)\\
  &= \cos^2 x + \sin^2 x\\
  &= 1.
  \end{aligned}
  \]
  The denominator is \(\cos^2 x\). Therefore
  \[ f'(x) = \frac{1}{\cos^2 x}, \]
  wherever \(\cos x \neq 0\). This is the derivative of \(\tan x\). It equals \(\sec^2 x\).
:::

::: guided-example
title: A linear quotient
problem: |
  Differentiate \(g(t) = \frac{2t - 1}{t + 2}\).
steps:
  - |
    Let \(u(t) = 2t - 1\) and \(v(t) = t + 2\). The quotient rule says \(g'(t) = \frac{u'v - uv'}{v^2}\) wherever \(v(t) \neq 0\).
  - |
    The derivatives are \(u'(t) = 2\) and \(v'(t) = 1\).
  - |
    The numerator is
    \[
    \begin{aligned}
    u'v - uv'&= 2(t + 2) - (2t - 1) \cdot 1\\
    &= 2t + 4 - 2t + 1\\
    &= 5.
    \end{aligned}
    \]
  - |
    For \(t \neq -2\), the derivative is
    \[ g'(t) = \frac{5}{(t + 2)^2}. \]
:::

::: trap
text: |
  The reciprocal rule is
  \[ \left(\frac{1}{u}\right)' = \frac{-u'}{u^2}. \]
  The version with \(-u\) in the numerator drops the derivative of \(u\). Take \(u(x) = x\), so \(\frac{1}{u} = \frac{1}{x}\) and \(u'(x) = 1\).

  - The dropped-prime version gives \(\frac{-x}{x^2} = -\frac{1}{x}\).
  - The reciprocal rule gives \(\frac{-1}{x^2}\).
  - The power rule on \(x^{-1}\) also gives \(-x^{-2} = -\frac{1}{x^2}\).

  The reciprocal rule and the power rule agree on \(-\frac{1}{x^2}\). The result \(-\frac{1}{x}\) disagrees with that value.

  Take \(u(x) = x^2\), so \(\frac{1}{u} = \frac{1}{x^2}\) and \(u'(x) = 2x\).

  - The dropped-prime version gives \(\frac{-x^2}{(x^2)^2} = -\frac{1}{x^2}\).
  - The reciprocal rule gives \(\frac{-2x}{x^4} = -\frac{2}{x^3}\).
  - The power rule on \(x^{-2}\) gives \(-2x^{-3} = -\frac{2}{x^3}\).

  The reciprocal rule and the power rule agree on \(-\frac{2}{x^3}\). The result \(-\frac{1}{x^2}\) disagrees with that value.
:::

::: key-points
text: |
  - The reciprocal rule is \(\left(\frac{1}{u}\right)' = \frac{-u'}{u^2}\) wherever \(u \neq 0\). The usual slip drops \(u'\) and writes \(-u\) in the numerator.
  - The quotient rule is \(\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}\) wherever \(v \neq 0\). The order of the two products in the numerator matters.
:::

::: concept-question
id: l1-derivative-rules.q-d8c507b8
question: |
  Differentiate \(f(x) = x^{2} - \frac{1}{x}\).
options:
  - text: |
      \(2x + \frac{1}{x^{2}}\)
    correct: true
  - text: |
      \(2x - \frac{1}{x^{2}}\)
  - text: |
      \(2x + \ln x\)
  - text: |
      \(2x + \frac{1}{x}\)
explanation: |
  Write \(f(x) = x^{2} - x^{-1}\). Then
  \[ f'(x) = 2x + x^{-2} = 2x + \frac{1}{x^{2}}. \]
:::

::: concept-question
id: l1-derivative-rules.q-ace4e3fa
question: |
  Differentiate \(g(t) = \frac{2t - 1}{t + 2}\).
options:
  - text: |
      \(\frac{5}{(t + 2)^{2}}\)
    correct: true
  - text: |
      \(\frac{3}{(t + 2)^{2}}\)
  - text: |
      \(\frac{2}{(t + 2)^{2}}\)
  - text: |
      \(-\frac{5}{(t + 2)^{2}}\)
explanation: |
  The quotient rule gives
  \[
  \begin{aligned}
  g'(t)&= \frac{2(t + 2) - (2t - 1)}{(t + 2)^{2}}\\
  &= \frac{2t + 4 - 2t + 1}{(t + 2)^{2}}\\
  &= \frac{5}{(t + 2)^{2}}.
  \end{aligned}
  \]
:::

::: exercise
id: l1-derivative-rules.sheet-1-3-3
number: "sheet 1 exercise 3.3"
tier: basic
topics: [power-rule]
statement: |
  Find the derivative of \(f(x) = x^2 - \frac{1}{x}\).
solution: |
  For \(x \neq 0\), write \(f(x) = x^2 - x^{-1}\). The power rule gives
  \[ f'(x) = 2x - (-1) x^{-2} = 2x + x^{-2}. \]
  The same derivative is \(2x + \frac{1}{x^2}\).
provenance: written-for-site
verification:
  checks:
    - expr: "diff(x**2 - 1/x, x)"
      expected: "2*x + x**(-2)"
:::

::: section
title: Trigonometric and exponential derivatives
:::

::: formal-statement
kind: theorem
title: Derivative of sine
source: { source: handout, section: "4.4", page: 80 }
text: |
  \[ \frac{d}{dx} \sin x = \cos x. \]
:::

::: plain-explanation
text: |
  The definition writes
  \[ \frac{d}{dx} \sin x = \lim_{\Delta x \to 0} \frac{\sin(x + \Delta x) - \sin x}{\Delta x}. \]
  The angle-addition formula writes the quotient as
  \[ \sin x \cdot \frac{\cos \Delta x - 1}{\Delta x} + \cos x \cdot \frac{\sin \Delta x}{\Delta x}. \]
  Each term has a limit:

  - The fraction \(\frac{\cos \Delta x - 1}{\Delta x}\) tends to 0, so the first term tends to 0.
  - The fraction \(\frac{\sin \Delta x}{\Delta x}\) tends to 1, so the second term tends to \(\cos x\).

  The derivative is \(\cos x\).
:::

::: formal-statement
kind: theorem
title: Further trigonometric derivatives
source: { source: handout, section: "4.5", page: 81 }
text: |
  \[
  \begin{aligned}
  \frac{d}{dx} \cos x&= -\sin x,\\
  \frac{d}{dx} \tan x&= \sec^2 x = \frac{1}{\cos^2 x},\\
  \frac{d}{dx} \sec x&= \sec x \tan x.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  The identity
  \[ \cos x = \sin\left(x + \frac{\pi}{2}\right) \]
  writes cosine as a shifted sine. The chain rule gives
  \[ \frac{d}{dx} \cos x = \cos\left(x + \frac{\pi}{2}\right). \]
  That cosine equals \(-\sin x\).

  ### Tangent, secant and the others

  - The worked example gives \(\frac{d}{dx} \tan x = \frac{1}{\cos^2 x}\). The same derivative equals \(1 + \tan^2 x\).
  - For \(\sec x = \frac{1}{\cos x}\), the reciprocal rule gives \(\frac{\sin x}{\cos^2 x} = \sec x \tan x\).
  - The quotient rule on \(\cot x = \frac{\cos x}{\sin x}\) gives \(-\frac{1}{\sin^2 x}\).
  - The reciprocal rule on \(\csc x = \frac{1}{\sin x}\) gives \(-\csc x \cot x\).
:::

::: formal-statement
kind: theorem
title: Derivative of the exponential
source: { source: handout, section: "4.7", page: 85 }
text: |
  \[ \frac{d}{dx} e^x = e^x. \]
  The same function is written \(\exp x\) when the exponent is a longer expression.
:::

::: plain-explanation
text: |
  The exponential is its own derivative. For a longer exponent, write \(\exp\) and then apply the chain rule. The derivative of \(\exp(u(x))\) is
  \[ \exp(u(x)) \cdot u'(x). \]
:::

::: key-points
text: |
  - \(\frac{d}{dx} \sin x = \cos x\), \(\frac{d}{dx} \cos x = -\sin x\) and \(\frac{d}{dx} \tan x = \frac{1}{\cos^2 x}\).
  - \(\frac{d}{dx} e^x = e^x\). For an exponent \(u(x)\), the chain rule gives \(\exp(u(x)) \cdot u'(x)\).
:::

::: concept-question
id: l1-derivative-rules.q-f48c7611
question: |
  Differentiate \(f(x) = \tan x\).
options:
  - text: |
      \(\frac{1}{\cos^{2} x}\)
    correct: true
  - text: |
      \(\frac{1}{\sin^{2} x}\)
  - text: |
      \(-\frac{1}{\cos^{2} x}\)
  - text: |
      \(\frac{\sin x}{\cos^{2} x}\)
explanation: |
  The quotient rule on \(\frac{\sin x}{\cos x}\) gives
  \[ \frac{\cos^{2} x + \sin^{2} x}{\cos^{2} x} = \frac{1}{\cos^{2} x}. \]
:::

::: concept-question
id: l1-derivative-rules.q-871713c1
question: |
  Differentiate \(\sinh x = \frac{e^{x} - e^{-x}}{2}\).
options:
  - text: |
      \(\cosh x = \frac{e^{x} + e^{-x}}{2}\)
    correct: true
  - text: |
      \(\sinh x\) itself
  - text: |
      \(-\cosh x\)
  - text: |
      \(\frac{e^{x} - e^{-x}}{2}\)
explanation: |
  Differentiating term by term,
  \[
  \begin{aligned}
  \frac{d}{dx} e^{x}&= e^{x},\\
  \frac{d}{dx}(-e^{-x})&= e^{-x},
  \end{aligned}
  \]
  so the derivative is \(\frac{e^{x} + e^{-x}}{2} = \cosh x\).
:::

::: exercise
id: l1-derivative-rules.sheet-1-3-4-tan
number: "sheet 1 exercise 3.4 (tan)"
tier: basic
topics: [quotient-rule, derivative-table]
statement: |
  Find the derivative of \(f(x) = \tan x\).
solution: |
  Write \(\tan x = \frac{\sin x}{\cos x}\). Set \(u(x) = \sin x\) and \(v(x) = \cos x\), so \(u'(x) = \cos x\) and \(v'(x) = -\sin x\). The numerator of the quotient rule is
  \[
  \begin{aligned}
  &\cos x \cdot \cos x\\
  &\quad - \sin x \cdot (-\sin x)\\
  &= \cos^2 x + \sin^2 x\\
  &= 1.
  \end{aligned}
  \]
  The denominator is \(\cos^2 x\). Therefore
  \[ f'(x) = \frac{1}{\cos^2 x}, \]
  wherever \(\cos x \neq 0\).
provenance: written-for-site
verification:
  checks:
    - expr: "diff(tan(x), x)"
      expected: "1/cos(x)**2"
:::

::: section
title: Logarithms, other bases and real powers
:::

::: formal-statement
kind: theorem
title: Derivative of the logarithm
source: { source: handout, section: "4.7", page: "86-87" }
text: |
  For \(x > 0\),
  \[ \frac{d}{dx} \ln x = \frac{1}{x}. \]
  For \(x \neq 0\),
  \[ \frac{d}{dx} \ln |x| = \frac{1}{x}. \]
:::

::: plain-explanation
text: |
  On the positive reals the slope of \(\ln x\) is the reciprocal of \(x\). If \(u(x) > 0\), the chain rule gives
  \[ \frac{d}{dx} \ln(u(x)) = \frac{u'(x)}{u(x)}. \]
:::

::: formal-statement
kind: theorem
title: Other bases
source: { source: handout, section: "4.7", page: 88 }
text: |
  If \(a > 0\) and \(a \neq 1\), then for every real \(x\),
  \[ \frac{d}{dx} a^x = (\ln a) \, a^x, \]
  and for \(x > 0\),
  \[ \frac{d}{dx} \log_a x = \frac{1}{x \ln a}. \]
:::

::: plain-explanation
text: |
  - For \(a^x\): write \(a^x = e^{x \ln a}\). The chain rule multiplies \(e^{x \ln a}\) by the constant \(\ln a\).
  - For \(\log_a x\): the **change-of-base formula** writes \(\log_a x = \frac{\ln x}{\ln a}\), and the logarithm rule then divides by \(x \ln a\).
:::

::: formal-statement
kind: theorem
title: Real powers
source: { source: handout, section: "4.7", page: 89 }
text: |
  If \(p\) is real, \(x > 0\) and \(f(x) = x^p\), then
  \[ f'(x) = p x^{p-1}. \]
:::

::: plain-explanation
text: |
  For \(x > 0\):

  1. Write \(x^p = e^{p \ln x}\).
  2. Differentiate that exponential with the chain rule. The factor \(e^{p \ln x}\) stays, and the inner derivative contributes \(\frac{p}{x}\).

  The product is \(p x^{p-1}\). The derivative is the function \(f'\). The original function is still \(f(x) = x^p\).

  ### Example: the square root

  For \(f(x) = \sqrt{x} = x^{1/2}\) and \(x > 0\), the formula gives
  \[ f'(x) = \frac{1}{2} x^{-1/2} = \frac{1}{2\sqrt{x}}. \]
:::

::: tip
text: |
  When \(u(x) > 0\),
  \[ \frac{d}{dx} \sqrt{u(x)} = \frac{u'(x)}{2\sqrt{u(x)}}. \]
:::

::: trap
text: |
  For \(x > 0\) and real \(p\), the derivative of \(f(x) = x^p\) is
  \[ f'(x) = p x^{p-1}. \]
  Take \(p = \frac{1}{2}\), so \(f(x) = \sqrt{x}\). Then \(f(4) = 2\). The expression \(p x^{p-1}\) at \(x = 4\) equals
  \[ \frac{1}{2} \cdot 4^{-1/2} = \frac{1}{4}. \]
  That value is \(f'(4)\). The equation \(f(x) = p x^{p-1}\) would give \(f(4) = \frac{1}{4}\). The value of \(f(4)\) is 2, so that equation names the wrong function.
:::

::: going-deeper
title: Optional chain-rule drill
text: |
  Handout section 3.5, exercises 1 to 40, is a mixed drill on powers, products, quotients, the chain rule, and tangent lines. The drill is optional. The course practice on this node is the sheet 1 derivatives.
:::

::: key-points
text: |
  - For \(x > 0\), \(\frac{d}{dx} \ln x = \frac{1}{x}\). If \(u(x) > 0\), \(\frac{d}{dx} \ln(u(x)) = \frac{u'(x)}{u(x)}\).
  - For \(a > 0\) and \(a \neq 1\), \(\frac{d}{dx} a^x = (\ln a) \, a^x\) and \(\frac{d}{dx} \log_a x = \frac{1}{x \ln a}\).
  - For real \(p\) and \(x > 0\), \(\frac{d}{dx} x^p = p x^{p-1}\). The usual slip writes \(f(x) = p x^{p-1}\) and mixes up \(f\) with \(f'\).
:::

::: concept-question
id: l1-derivative-rules.q-89726dff
question: |
  Differentiate \(f(x) = \ln(\sin x)\).
options:
  - text: |
      \(\frac{\cos x}{\sin x}\)
    correct: true
  - text: |
      \(\frac{1}{\sin x}\)
  - text: |
      \(\frac{\sin x}{\cos x}\)
  - text: |
      \(-\frac{\cos x}{\sin x}\)
explanation: |
  The chain rule gives
  \[ \frac{1}{\sin x} \cdot \cos x = \frac{\cos x}{\sin x}. \]
:::

::: concept-question
id: l1-derivative-rules.q-97be243a
question: |
  Differentiate \(f(x) = \frac{2}{\sqrt{2x + 1}}\).
options:
  - text: |
      \(-\frac{2}{(2x + 1)^{3/2}}\)
    correct: true
  - text: |
      \(-\frac{1}{(2x + 1)^{3/2}}\)
  - text: |
      \(\frac{2}{(2x + 1)^{3/2}}\)
  - text: |
      \(-\frac{4}{(2x + 1)^{3/2}}\)
explanation: |
  Write \(f(x) = 2(2x + 1)^{-1/2}\). Differentiating gives
  \[
  \begin{aligned}
  &2 \cdot \left(-\frac{1}{2}\right)(2x + 1)^{-3/2} \cdot 2\\
  &= -2(2x + 1)^{-3/2}.
  \end{aligned}
  \]
:::

::: exercise
id: l1-derivative-rules.sheet-1-3-2
number: "sheet 1 exercise 3.2"
tier: standard
topics: [chain-rule]
statement: |
  Find the derivative of \(f(t) = \cos(t^2)\).
solution: |
  The outer function is cosine and the inner function is \(t^2\). The derivative of cosine, evaluated at \(t^2\), is \(-\sin(t^2)\). The inner derivative is \(2t\). Therefore
  \[ f'(t) = -2t \sin(t^2). \]
provenance: written-for-site
verification:
  checks:
    - expr: "diff(cos(t**2), t)"
      expected: "-2*t*sin(t**2)"
:::

::: exercise
id: l1-derivative-rules.sheet-1-3-4
number: "sheet 1 exercise 3.4"
tier: standard
topics: [chain-rule, power-rule]
statement: |
  Find the derivative of \(f(x) = \sqrt{x^2 + 1}\).
solution: |
  Write \(f(x) = (x^2 + 1)^{1/2}\). The outer exponent is \(\frac{1}{2}\) and the inner derivative is \(2x\). Then
  \[ f'(x) = \frac{1}{2} (x^2 + 1)^{-1/2} \cdot 2x = \frac{x}{\sqrt{x^2 + 1}}. \]
  The expression under the square root is at least 1, so the derivative is defined for every real \(x\).
provenance: written-for-site
verification:
  checks:
    - expr: "diff(sqrt(x**2 + 1), x)"
      expected: "x/sqrt(x**2 + 1)"
:::

::: exercise
id: l1-derivative-rules.sheet-1-3-5
number: "sheet 1 exercise 3.5"
tier: standard
topics: [chain-rule]
statement: |
  Find the derivative of \(f(x) = \ln(\sin x)\).
solution: |
  The logarithm is defined when \(\sin x > 0\). The outer function is \(\ln\) and the inner function is \(\sin x\). The chain rule gives
  \[ f'(x) = \frac{1}{\sin x} \cdot \cos x = \frac{\cos x}{\sin x} = \cot x. \]
provenance: written-for-site
verification:
  checks:
    - expr: "diff(log(sin(x)), x)"
      expected: "cot(x)"
:::

::: exercise
id: l1-derivative-rules.sheet-1-3-6
number: "sheet 1 exercise 3.6"
tier: standard
topics: [chain-rule, power-rule]
statement: |
  Find the derivative of \(f(x) = \frac{2}{\sqrt{2x + 1}}\).
solution: |
  The expression is defined for \(2x + 1 > 0\). Write \(f(x) = 2(2x + 1)^{-1/2}\). The outer exponent is \(-\frac{1}{2}\) and the inner derivative is 2. Then
  \[
  \begin{aligned}
  f'(x)&= 2 \cdot \left(-\frac{1}{2}\right) (2x + 1)^{-3/2} \cdot 2\\
  &= -2(2x + 1)^{-3/2}.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: "diff(2/sqrt(2*x + 1), x)"
      expected: "-2*(2*x + 1)**(-3/2)"
:::

::: exercise
id: l1-derivative-rules.sheet-1-3-7
number: "sheet 1 exercise 3.7"
tier: standard
topics: [quotient-rule]
statement: |
  Find the derivative of \(g(t) = \frac{2t - 1}{t + 2}\).
solution: |
  Set \(u(t) = 2t - 1\) and \(v(t) = t + 2\). Then \(u'(t) = 2\) and \(v'(t) = 1\). The numerator of the quotient rule is
  \[ 2(t + 2) - (2t - 1) = 5. \]
  The denominator is \((t + 2)^2\). For \(t \neq -2\),
  \[ g'(t) = \frac{5}{(t + 2)^2}. \]
provenance: written-for-site
verification:
  checks:
    - expr: "diff((2*t - 1)/(t + 2), t)"
      expected: "5/(t + 2)**2"
:::

::: exercise
id: l1-derivative-rules.exam-chain-quotient
tier: exam
topics: [chain-rule, quotient-rule]
statement: |
  Differentiate \(f(x) = \frac{\cos(x^2)}{x}\).
solution: |
  The function is defined for \(x \neq 0\). Set \(u(x) = \cos(x^2)\) and \(v(x) = x\). The chain rule gives
  \[
  \begin{aligned}
  u'(x)&= -\sin(x^2) \cdot 2x = -2x \sin(x^2),\\
  v'(x)&= 1.
  \end{aligned}
  \]
  The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'(x) \, v(x) - u(x) \, v'(x)}{v(x)^2}\\
  &= \frac{-2x \sin(x^2) \cdot x - \cos(x^2)}{x^2}\\
  &= \frac{-2x^2 \sin(x^2) - \cos(x^2)}{x^2}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The chain rule on \(\cos(x^2)\) includes the factor \(2x\).
  - The quotient rule uses the denominator \(x\).
  - The numerator is \(-2x^2 \sin(x^2) - \cos(x^2)\).
verification:
  checks:
    - expr: "diff(cos(x**2)/x, x)"
      expected: "(-2*x**2*sin(x**2) - cos(x**2))/x**2"
:::

::: sheet-item
id: l1-derivative-rules.sheet-power
category: formula
text: |
  If \(n\) is a positive integer, then
  \[ \frac{d}{dx} x^n = n x^{n-1}. \]
  The derivative of a constant function is 0.
:::

::: sheet-item
id: l1-derivative-rules.sheet-real-power
category: formula
text: |
  If \(p\) is real and \(x > 0\), the derivative of \(f(x) = x^p\) is
  \[ f'(x) = p x^{p-1}. \]
:::

::: sheet-item
id: l1-derivative-rules.sheet-real-power-prime
category: trap
text: |
  The derivative of \(f(x) = x^p\) is
  \[ f'(x) = p x^{p-1}, \]
  for \(x > 0\). The equation \(f(x) = p x^{p-1}\) names \(f\). For \(p = \frac{1}{2}\), \(f(4) = 2\) and \(f'(4) = \frac{1}{4}\).
:::

::: sheet-item
id: l1-derivative-rules.sheet-sum
category: formula
text: |
  The derivative of a sum is the sum of the derivatives. A constant factor stays in front.
  \[
  \begin{aligned}
  (f + g)'&= f' + g',\\
  (cf)'&= c f'.
  \end{aligned}
  \]
:::

::: sheet-item
id: l1-derivative-rules.sheet-product
category: formula
text: |
  The product rule is
  \[ (fg)' = f'g + fg'. \]
:::

::: sheet-item
id: l1-derivative-rules.sheet-chain
category: formula
text: |
  The chain rule is
  \[ \bigl(f(g(x))\bigr)' = f'(g(x)) \, g'(x). \]
  In Leibniz notation the same rule is
  \[ \frac{df}{dx} = \frac{df}{dg} \frac{dg}{dx}. \]
:::

::: sheet-item
id: l1-derivative-rules.sheet-reciprocal
category: trap
text: |
  The reciprocal rule is
  \[ \left(\frac{1}{u}\right)' = \frac{-u'}{u^2}. \]
  With \(u(x) = x\), the numerator \(-u\) produces \(\frac{-x}{x^2} = -\frac{1}{x}\). The derivative of \(\frac{1}{x}\) is \(-\frac{1}{x^2}\).
:::

::: sheet-item
id: l1-derivative-rules.sheet-quotient
category: formula
text: |
  If \(g(x) \neq 0\), then
  \[ \frac{d}{dx} \frac{f(x)}{g(x)} = \frac{g(x) f'(x) - f(x) g'(x)}{g(x)^2}. \]
  With numerator \(u\) and denominator \(v\), the numerator of the derivative is \(u'v - uv'\).
:::

::: sheet-item
id: l1-derivative-rules.sheet-trig
category: formula
text: |
  The derivatives are
  \[
  \begin{aligned}
  \frac{d}{dx} \sin x&= \cos x,\\
  \frac{d}{dx} \cos x&= -\sin x,\\
  \frac{d}{dx} \tan x&= \frac{1}{\cos^2 x},\\
  \frac{d}{dx} \sec x&= \sec x \tan x.
  \end{aligned}
  \]
:::

::: sheet-item
id: l1-derivative-rules.sheet-exp-ln
category: formula
text: |
  \[ \frac{d}{dx} e^x = e^x. \]

  - For \(x > 0\), \(\frac{d}{dx} \ln x = \frac{1}{x}\).
  - For \(x \neq 0\), \(\frac{d}{dx} \ln |x| = \frac{1}{x}\).
  - If \(u(x) > 0\), then \(\frac{d}{dx} \ln(u(x)) = \frac{u'(x)}{u(x)}\).
:::

::: exercise
id: l1-derivative-rules.ex-derivative-mixed-rules
tier: standard
topics: [product-rule, chain-rule, quotient-rule]
statement: |
  Differentiate each function.

  (a) \(f(x)=x^{2}e^{-x}\)

  (b) \(g(x)=\sqrt{1+e^{2x}}\)

  (c) \(h(x)=\ln\bigl(\cos(x^{2})\bigr)\)

  (d) \(k(x)=\dfrac{\ln(x^{2}+1)}{x}\)
solution: |
  (a) The product rule with \(u=x^{2}\) and \(v=e^{-x}\) gives \(u'=2x\) and \(v'=-e^{-x}\), so
  \[
  f'(x)=2xe^{-x}-x^{2}e^{-x}=x(2-x)e^{-x}.
  \]

  (b) With \(w=1+e^{2x}\), the derivative of \(\sqrt{w}\) is \(\frac{w'}{2\sqrt{w}}\). The inner derivative is \(w'=2e^{2x}\), so
  \[
  g'(x)=\frac{2e^{2x}}{2\sqrt{1+e^{2x}}}=\frac{e^{2x}}{\sqrt{1+e^{2x}}}.
  \]

  (c) The outer function is \(\ln\), the middle function is \(\cos\) and the inner function is \(x^{2}\). The chain rule gives
  \[
  \begin{aligned}
  h'(x)&=\frac{1}{\cos(x^{2})}\cdot\bigl(-\sin(x^{2})\bigr)\cdot 2x\\
  &=-2x\tan(x^{2}),
  \end{aligned}
  \]
  wherever \(\cos(x^{2})>0\).

  (d) The quotient rule with \(u=\ln(x^{2}+1)\) and \(v=x\) uses \(u'=\frac{2x}{x^{2}+1}\) and \(v'=1\):
  \[
  \begin{aligned}
  k'(x)&=\frac{\frac{2x}{x^{2}+1}\cdot x-\ln(x^{2}+1)}{x^{2}}\\
  &=\frac{\frac{2x^{2}}{x^{2}+1}-\ln(x^{2}+1)}{x^{2}},
  \end{aligned}
  \]
  for \(x\neq 0\).
provenance: written-for-site
steps:
  - The product rule gives \(x(2-x)e^{-x}\) in (a).
  - The chain rule with a root gives \(\frac{e^{2x}}{\sqrt{1+e^{2x}}}\) in (b).
  - The chain of three functions gives \(-2x\tan(x^{2})\) in (c).
  - The quotient rule gives the stated result in (d).
verification:
  checks:
    - expr: diff(x**2*exp(-x), x)
      expected: x*(2 - x)*exp(-x)
    - expr: diff(sqrt(1 + exp(2*x)), x)
      expected: exp(2*x)/sqrt(1 + exp(2*x))
    - expr: diff(log(cos(x**2)), x)
      expected: -2*x*tan(x**2)
    - expr: diff(log(x**2 + 1)/x, x)
      expected: (2*x**2/(x**2 + 1) - log(x**2 + 1))/x**2
:::

::: exercise
id: l1-derivative-rules.ex-tan-sec-cot-derivatives
tier: standard
topics: [quotient-rule, derivative-table, tangent-line]
statement: |
  (a) Use the reciprocal rule to find the derivative of \(\sec x=\frac{1}{\cos x}\).

  (b) Use the quotient rule to find the derivative of \(\cot x=\frac{\cos x}{\sin x}\).

  (c) Find the tangent line to the graph of \(y=\tan x\) at \(x=\frac{\pi}{4}\).

  (d) Show that every tangent line to the graph of \(y=\tan x\) has slope at least \(1\).
solution: |
  (a) The reciprocal rule with \(u=\cos x\) and \(u'=-\sin x\) gives
  \[
  \frac{d}{dx}\frac{1}{\cos x}=\frac{-u'}{u^{2}}=\frac{\sin x}{\cos^{2}x}=\sec x\tan x,
  \]
  wherever \(\cos x\neq 0\).

  (b) The quotient rule with \(u=\cos x\) and \(v=\sin x\) gives
  \[
  \begin{aligned}
  &\frac{d}{dx}\frac{\cos x}{\sin x}\\
  &=\frac{u'v-uv'}{v^{2}}\\
  &=\frac{-\sin x\cdot\sin x-\cos x\cdot\cos x}{\sin^{2}x}\\
  &=-\frac{1}{\sin^{2}x},
  \end{aligned}
  \]
  wherever \(\sin x\neq 0\).

  (c) The derivative of \(\tan x\) is \(\frac{1}{\cos^{2}x}\). At \(x=\frac{\pi}{4}\), \(\cos^{2}\frac{\pi}{4}=\frac{1}{2}\), so the slope is \(2\). The value is \(\tan\frac{\pi}{4}=1\). The tangent line is
  \[
  \begin{aligned}
  y&=1+2\bigl(x-\frac{\pi}{4}\bigr)\\
  &=2x+1-\frac{\pi}{2}.
  \end{aligned}
  \]

  (d) The slope at \(x\) is
  \[
  \frac{1}{\cos^{2}x}.
  \]
  Since \(0<\cos^{2}x\leq 1\) wherever \(\tan x\) is defined, the reciprocal is at least \(1\). The graph of \(\tan x\) has no horizontal tangent and no tangent flatter than slope \(1\).
provenance: written-for-site
steps:
  - The reciprocal rule gives \(\sec x\tan x\) in (a).
  - The quotient rule gives \(-\frac{1}{\sin^{2}x}\) in (b).
  - The slope at \(\frac{\pi}{4}\) is \(2\), so the tangent is \(y=2x+1-\frac{\pi}{2}\) in (c).
  - In (d), \(\cos^{2}x\leq 1\) gives slope \(\frac{1}{\cos^{2}x}\geq 1\).
verification:
  checks:
    - expr: diff(1/cos(x), x)
      expected: sin(x)/cos(x)**2
    - expr: diff(cos(x)/sin(x), x)
      expected: -1/sin(x)**2
    - expr: diff(tan(x), x).subs(x, pi/4)
      expected: "2"
    - expr: 1 + 2*(x - pi/4)
      expected: 2*x + 1 - pi/2
:::

::: exercise
id: l1-derivative-rules.handout-3-1-3
number: "3.1.3"
tier: basic
topics:
  - power-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{1}{x^5}\).
solution: |
  The function is defined for \(x \neq 0\). Write it as a negative power, \(f(x) = x^{-5}\). The power rule holds for negative integers, so
  \[
  \begin{aligned}
  f'(x)&= -5x^{-6}\\
  &= -\frac{5}{x^6}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Rewrite \(\frac{1}{x^5}\) as \(x^{-5}\).
  - Multiply by the exponent \(-5\) and lower the exponent to \(-6\).
verification:
  checks:
    - expr: 'diff(1/x**5, x)'
      expected: "-5*x**(-6)"
    - expr: 'diff(x**(-5), x) - diff(1/x**5, x)'
      expected: "0"
:::


::: exercise
id: l1-derivative-rules.handout-3-1-4
number: "3.1.4"
tier: basic
topics:
  - power-rule
statement: |
  Find the derivative of \(f(x) = x^{\pi}\) for \(x > 0\).
solution: |
  The base is the variable and the exponent \(\pi\) is a constant. The real power rule applies for \(x > 0\):
  \[ f'(x) = \pi x^{\pi - 1}. \]
  The exponent drops by 1, so it becomes \(\pi - 1\). The factor \(\pi\) in front is a constant.
provenance: handout-answer
steps:
  - The exponent \(\pi\) is a constant and the base is \(x\), so the real power rule applies.
  - The derivative is \(\pi x^{\pi - 1}\).
verification:
  checks:
    - expr: 'diff(x**pi, x)'
      expected: "pi*x**(pi - 1)"
:::


::: exercise
id: l1-derivative-rules.handout-3-1-6
number: "3.1.6"
tier: basic
topics:
  - power-rule
statement: |
  Find the derivative of \(f(x) = x^{-9/7}\) for \(x > 0\).
solution: |
  The exponent is the real number \(-\frac{9}{7}\). The real power rule gives
  \[ f'(x) = -\frac{9}{7} x^{-9/7 - 1}. \]
  The new exponent is
  \[ -\frac{9}{7} - 1 = -\frac{16}{7}. \]
  Therefore
  \[ f'(x) = -\frac{9}{7} x^{-16/7}. \]
provenance: handout-answer
steps:
  - Multiply by the exponent \(-\frac{9}{7}\).
  - Lower the exponent by 1 to get \(-\frac{16}{7}\).
verification:
  checks:
    - expr: 'diff(x**Rational(-9, 7), x)'
      expected: "-Rational(9, 7)*x**Rational(-16, 7)"
    - expr: 'Rational(-9, 7) - 1'
      expected: "Rational(-16, 7)"
:::


::: exercise
id: l1-derivative-rules.handout-3-2-1
number: "3.2.1"
tier: basic
topics:
  - sum-rule
  - power-rule
statement: |
  Find the derivative of \(f(x) = 5x^3 + 12x^2 - 15\).
solution: |
  The sum rule and the constant-multiple rule differentiate the function term by term. The power rule gives
  \[
  \begin{aligned}
  (5x^3)'&= 5 \cdot 3x^2 = 15x^2,\\
  (12x^2)'&= 12 \cdot 2x = 24x,\\
  (-15)'&= 0.
  \end{aligned}
  \]
  Therefore
  \[ f'(x) = 15x^2 + 24x. \]
provenance: handout-answer
steps:
  - Differentiate each term separately.
  - The constant \(-15\) has derivative 0.
verification:
  checks:
    - expr: 'diff(5*x**3 + 12*x**2 - 15, x)'
      expected: "15*x**2 + 24*x"
    - expr: 'diff(12*x**2, x)'
      expected: "24*x"
:::


::: exercise
id: l1-derivative-rules.handout-3-2-2
number: "3.2.2"
tier: basic
topics:
  - sum-rule
  - power-rule
statement: |
  Find the derivative of \(f(x) = -4x^5 + 3x^2 - \dfrac{5}{x^2}\).
solution: |
  The function is defined for \(x \neq 0\). Write the last term as a negative power, \(\frac{5}{x^2} = 5x^{-2}\). The power rule gives
  \[
  \begin{aligned}
  (-4x^5)'&= -20x^4,\\
  (3x^2)'&= 6x,\\
  (-5x^{-2})'&= 10x^{-3}.
  \end{aligned}
  \]
  Therefore, for \(x \neq 0\),
  \[ f'(x) = -20x^4 + 6x + \frac{10}{x^3}. \]
provenance: handout-answer
steps:
  - Rewrite \(\frac{5}{x^2}\) as \(5x^{-2}\).
  - Differentiate term by term with the power rule.
verification:
  checks:
    - expr: 'diff(-4*x**5 + 3*x**2 - 5/x**2, x)'
      expected: "-20*x**4 + 6*x + 10/x**3"
    - expr: 'diff(-5/x**2, x)'
      expected: "10/x**3"
:::


::: exercise
id: l1-derivative-rules.handout-3-2-5
number: "3.2.5"
tier: basic
topics:
  - product-rule
  - sum-rule
statement: |
  Find the derivative of \(f(x) = (x + 1)(x^2 + 2x - 3)\). Expand first, or use the product rule.
solution: |
  Expanding the product gives
  \[
  \begin{aligned}
  f(x)&= x^3 + 2x^2 - 3x + x^2 + 2x - 3\\
  &= x^3 + 3x^2 - x - 3.
  \end{aligned}
  \]
  The power rule and the sum rule give
  \[ f'(x) = 3x^2 + 6x - 1. \]

  The product rule gives the same result. With \(u(x) = x + 1\) and \(v(x) = x^2 + 2x - 3\), the derivatives are \(u'(x) = 1\) and \(v'(x) = 2x + 2\). Then
  \[
  \begin{aligned}
  f'(x)&= u'v + uv'\\
  &= (x^2 + 2x - 3) + (x + 1)(2x + 2)\\
  &= 3x^2 + 6x - 1.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Expand the product into a cubic polynomial.
  - Differentiate the cubic term by term.
  - Check with the product rule.
verification:
  checks:
    - expr: 'expand((x + 1)*(x**2 + 2*x - 3))'
      expected: "x**3 + 3*x**2 - x - 3"
    - expr: 'diff((x + 1)*(x**2 + 2*x - 3), x)'
      expected: "3*x**2 + 6*x - 1"
    - expr: '1*(x**2 + 2*x - 3) + (x + 1)*(2*x + 2)'
      expected: "3*x**2 + 6*x - 1"
:::


::: exercise
id: l1-derivative-rules.handout-3-2-6
number: "3.2.6"
tier: standard
topics:
  - sum-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \sqrt{625 - x^2} + 3x^3 + 12\). You may use that \(\frac{d}{dx} \sqrt{625 - x^2} = -\frac{x}{\sqrt{625 - x^2}}\).
solution: |
  The function is defined for \(-25 \leq x \leq 25\), and the derivative below exists for \(-25 < x < 25\).

  The sum rule differentiates the three terms separately. The root term has derivative
  \[ \frac{d}{dx} \sqrt{625 - x^2} = \frac{-2x}{2\sqrt{625 - x^2}} = -\frac{x}{\sqrt{625 - x^2}}. \]
  The power rule gives \((3x^3)' = 9x^2\), and the constant 12 has derivative 0. Therefore
  \[ f'(x) = 9x^2 - \frac{x}{\sqrt{625 - x^2}}. \]
provenance: handout-answer
steps:
  - The root term has derivative \(-\frac{x}{\sqrt{625 - x^2}}\) by the chain rule.
  - The cubic term gives \(9x^2\) and the constant gives 0.
verification:
  checks:
    - expr: 'diff(sqrt(625 - x**2) + 3*x**3 + 12, x)'
      expected: "9*x**2 - x/sqrt(625 - x**2)"
    - expr: 'diff(sqrt(625 - x**2), x)'
      expected: "-x/sqrt(625 - x**2)"
:::


::: exercise
id: l1-derivative-rules.handout-3-2-7
number: "3.2.7"
tier: standard
topics:
  - tangent-line
  - power-rule
statement: |
  Find an equation for the tangent line to \(f(x) = \dfrac{x^3}{4} - \dfrac{1}{x}\) at \(x = -2\). Here \(\frac{x^3}{4}\) means \(\frac{1}{4} x^3\).
solution: |
  The tangent line at \(x = a\) is \(y = f(a) + f'(a)(x - a)\). Here \(a = -2\).

  The value of the function is
  \[
  \begin{aligned}
  f(-2)&= \frac{-8}{4} - \frac{1}{-2}\\
  &= -2 + \frac{1}{2} = -\frac{3}{2}.
  \end{aligned}
  \]
  Write \(f(x) = \frac{1}{4}x^3 - x^{-1}\). The power rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{3}{4}x^2 + x^{-2},\\
  f'(-2)&= 3 + \frac{1}{4} = \frac{13}{4}.
  \end{aligned}
  \]
  The tangent line is
  \[
  \begin{aligned}
  y&= -\frac{3}{2} + \frac{13}{4}(x + 2)\\
  &= \frac{13}{4}x + 5.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The value at \(x = -2\) is \(-\frac{3}{2}\).
  - The slope \(f'(-2)\) is \(\frac{13}{4}\).
  - The tangent line is \(y = \frac{13}{4}x + 5\).
verification:
  checks:
    - expr: '(x**3/4 - 1/x).subs(x, -2)'
      expected: "-Rational(3, 2)"
    - expr: 'diff(x**3/4 - 1/x, x).subs(x, -2)'
      expected: "Rational(13, 4)"
    - expr: '(x**3/4 - 1/x).subs(x, -2) + diff(x**3/4 - 1/x, x).subs(x, -2)*(x + 2)'
      expected: "13*x/4 + 5"
:::


::: exercise
id: l1-derivative-rules.handout-3-2-8
number: "3.2.8"
tier: basic
topics:
  - tangent-line
  - power-rule
statement: |
  Find an equation for the tangent line to \(f(x) = 3x^2 - \pi^3\) at \(x = 4\).
solution: |
  The number \(\pi^3\) is a constant, so its derivative is 0. The value and the slope at \(x = 4\) are
  \[
  \begin{aligned}
  f(4)&= 48 - \pi^3,\\
  f'(x)&= 6x,\\
  f'(4)&= 24.
  \end{aligned}
  \]
  The tangent line is
  \[
  \begin{aligned}
  y&= 48 - \pi^3 + 24(x - 4)\\
  &= 24x - 48 - \pi^3.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The constant \(\pi^3\) has derivative 0, so \(f'(x) = 6x\).
  - The slope at \(x = 4\) is 24 and the value is \(48 - \pi^3\).
verification:
  checks:
    - expr: 'diff(3*x**2 - pi**3, x).subs(x, 4)'
      expected: "24"
    - expr: '(3*x**2 - pi**3).subs(x, 4) + diff(3*x**2 - pi**3, x).subs(x, 4)*(x - 4)'
      expected: "24*x - 48 - pi**3"
:::


::: exercise
id: l1-derivative-rules.handout-3-2-9
number: "3.2.9"
tier: basic
topics:
  - sum-rule
  - power-rule
statement: |
  The position of an object at time \(t\) is \(f(t) = -\dfrac{49t^2}{10} + 5t + 10\). Find a function giving the speed of the object at time \(t\). The acceleration is the rate at which the speed changes, that is, the derivative of the speed function. Find the acceleration at time \(t\).
solution: |
  The speed is the derivative of the position. The power rule gives
  \[
  \begin{aligned}
  v(t)&= f'(t)\\
  &= -\frac{49}{10} \cdot 2t + 5\\
  &= -\frac{49}{5}t + 5.
  \end{aligned}
  \]
  The acceleration is the derivative of the speed:
  \[ v'(t) = -\frac{49}{5}. \]
  The acceleration is the constant \(-\frac{49}{5}\) at every time \(t\).
provenance: handout-answer
steps:
  - The speed is \(f'(t)\).
  - The acceleration is the derivative of the speed.
verification:
  checks:
    - expr: 'diff(-49*t**2/10 + 5*t + 10, t)'
      expected: "-49*t/5 + 5"
    - expr: 'diff(diff(-49*t**2/10 + 5*t + 10, t), t)'
      expected: "-Rational(49, 5)"
:::


::: exercise
id: l1-derivative-rules.handout-3-2-11
number: "3.2.11"
tier: standard
topics:
  - sum-rule
  - power-rule
statement: |
  The general polynomial \(P\) of degree \(n\) has the form
  \[ P(x) = \sum_{k=0}^{n} a_k x^k = a_0 + a_1 x + \dots + a_n x^n. \]
  What is the derivative of \(P\) with respect to \(x\)?
solution: |
  The sum rule differentiates the polynomial term by term, and the constant multiple \(a_k\) stays in front. The power rule gives
  \[ \frac{d}{dx}\bigl(a_k x^k\bigr) = k a_k x^{k-1} \quad (k \geq 1). \]
  The term \(a_0\) is constant, so its derivative is 0. Therefore the sum starts at \(k = 1\):
  \[ P'(x) = \sum_{k=1}^{n} k a_k x^{k-1} = a_1 + 2a_2 x + \dots + n a_n x^{n-1}. \]
provenance: handout-answer
steps:
  - Differentiate \(a_k x^k\) with the power rule to get \(k a_k x^{k-1}\).
  - The constant term \(a_0\) drops out, so the sum starts at \(k = 1\).
verification:
  checks:
    - expr: 'diff(a0 + a1*x + a2*x**2 + a3*x**3 + a4*x**4, x)'
      expected: "a1 + 2*a2*x + 3*a3*x**2 + 4*a4*x**3"
    - expr: 'diff(Sum(c**k*x**k, (k, 0, 5)).doit(), x)'
      expected: "Sum(k*c**k*x**(k - 1), (k, 1, 5)).doit()"
:::


::: exercise
id: l1-derivative-rules.handout-3-2-12
number: "3.2.12"
tier: standard
topics:
  - tangent-line
  - power-rule
statement: |
  Find a cubic polynomial whose graph has horizontal tangents at the points \((-2, 5)\) and \((2, 3)\).
solution: |
  Write the cubic as \(P(x) = ax^3 + bx^2 + cx + d\). Its derivative is
  \[ P'(x) = 3ax^2 + 2bx + c. \]
  A horizontal tangent at \(x = \pm 2\) means \(P'(\pm 2) = 0\). The graph passes through the two given points, so \(P(-2) = 5\) and \(P(2) = 3\). These are four linear conditions:
  \[
  \begin{aligned}
  12a - 4b + c&= 0,\\
  12a + 4b + c&= 0,\\
  -8a + 4b - 2c + d&= 5,\\
  8a + 4b + 2c + d&= 3.
  \end{aligned}
  \]
  Subtracting the first equation from the second gives \(8b = 0\), so \(b = 0\). Then the first equation gives \(c = -12a\). The last two equations become
  \[
  \begin{aligned}
  16a + d&= 5,\\
  -16a + d&= 3.
  \end{aligned}
  \]
  Subtracting gives \(32a = 2\), so \(a = \frac{1}{16}\). Then \(d = 4\) and \(c = -\frac{3}{4}\). The polynomial is
  \[ P(x) = \frac{x^3}{16} - \frac{3x}{4} + 4. \]
provenance: handout-answer
steps:
  - Write \(P(x) = ax^3 + bx^2 + cx + d\) and \(P'(x) = 3ax^2 + 2bx + c\).
  - Impose \(P'(-2) = 0\), \(P'(2) = 0\), \(P(-2) = 5\) and \(P(2) = 3\).
  - Solve the four linear equations.
verification:
  checks:
    - expr: 'diff(x**3/16 - 3*x/4 + 4, x).subs(x, 2)'
      expected: "0"
    - expr: 'diff(x**3/16 - 3*x/4 + 4, x).subs(x, -2)'
      expected: "0"
    - expr: '(x**3/16 - 3*x/4 + 4).subs(x, -2)'
      expected: "5"
    - expr: '(x**3/16 - 3*x/4 + 4).subs(x, 2)'
      expected: "3"
    - expr: 'linsolve([12*a - 4*b + c, 12*a + 4*b + c, -8*a + 4*b - 2*c + d - 5, 8*a + 4*b + 2*c + d - 3], (a, b, c, d))'
      expected: "{(Rational(1, 16), 0, -Rational(3, 4), 4)}"
:::


::: exercise
id: l1-derivative-rules.handout-3-3-1
number: "3.3.1"
tier: basic
topics:
  - product-rule
statement: |
  Find the derivative of \(f(x) = x^3(x^3 - 5x + 10)\) using the product rule.
solution: |
  Set \(u(x) = x^3\) and \(v(x) = x^3 - 5x + 10\). Then \(u'(x) = 3x^2\) and \(v'(x) = 3x^2 - 5\). The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'v + uv'\\
  &= 3x^2(x^3 - 5x + 10) + x^3(3x^2 - 5).
  \end{aligned}
  \]
  Expanding both terms gives
  \[
  \begin{aligned}
  f'(x)&= 3x^5 - 15x^3 + 30x^2\\
  &\quad + 3x^5 - 5x^3\\
  &= 6x^5 - 20x^3 + 30x^2.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Name the two factors \(u = x^3\) and \(v = x^3 - 5x + 10\) and differentiate each.
  - Form \(u'v + uv'\).
verification:
  checks:
    - expr: 'diff(x**3*(x**3 - 5*x + 10), x)'
      expected: "3*x**2*(x**3 - 5*x + 10) + x**3*(3*x**2 - 5)"
    - expr: 'diff(x**3*(x**3 - 5*x + 10), x)'
      expected: "6*x**5 - 20*x**3 + 30*x**2"
:::


::: exercise
id: l1-derivative-rules.handout-3-3-3
number: "3.3.3"
tier: standard
topics:
  - product-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \sqrt{x}\,\sqrt{625 - x^2}\) using the product rule.
solution: |
  The function is defined for \(0 \leq x \leq 25\), and the derivative below exists for \(0 < x < 25\).

  Set \(u(x) = \sqrt{x}\) and \(v(x) = \sqrt{625 - x^2}\). The derivatives are
  \[
  \begin{aligned}
  u'(x)&= \frac{1}{2\sqrt{x}},\\
  v'(x)&= \frac{-2x}{2\sqrt{625 - x^2}} = -\frac{x}{\sqrt{625 - x^2}}.
  \end{aligned}
  \]
  The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'v + uv'\\
  &= \frac{\sqrt{625 - x^2}}{2\sqrt{x}} - \frac{x\sqrt{x}}{\sqrt{625 - x^2}}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The derivative of \(\sqrt{x}\) is \(\frac{1}{2\sqrt{x}}\).
  - The derivative of \(\sqrt{625 - x^2}\) is \(-\frac{x}{\sqrt{625 - x^2}}\) by the chain rule.
  - Combine with \(u'v + uv'\).
verification:
  checks:
    - expr: 'diff(sqrt(x)*sqrt(625 - x**2), x)'
      expected: "sqrt(625 - x**2)/(2*sqrt(x)) - x*sqrt(x)/sqrt(625 - x**2)"
    - expr: 'diff(sqrt(625 - x**2), x)'
      expected: "-x/sqrt(625 - x**2)"
:::


::: exercise
id: l1-derivative-rules.handout-3-3-5
number: "3.3.5"
tier: basic
topics:
  - product-rule
  - tangent-line
statement: |
  Use the product rule to compute the derivative of \(f(x) = (2x - 3)^2\). Find an equation of the tangent line to the curve at \(x = 2\).
solution: |
  Write \(f(x) = (2x - 3)(2x - 3)\) and set \(u(x) = v(x) = 2x - 3\). Then \(u'(x) = v'(x) = 2\), and the product rule gives
  \[
  \begin{aligned}
  f'(x)&= 2(2x - 3) + (2x - 3) \cdot 2\\
  &= 4(2x - 3).
  \end{aligned}
  \]
  At \(x = 2\) the value and the slope are
  \[
  \begin{aligned}
  f(2)&= 1^2 = 1,\\
  f'(2)&= 4 \cdot 1 = 4.
  \end{aligned}
  \]
  The tangent line is
  \[
  \begin{aligned}
  y&= 1 + 4(x - 2)\\
  &= 4x - 7.
  \end{aligned}
  \]
  Expanding \(f(x) = 4x^2 - 12x + 9\) gives \(f'(x) = 8x - 12 = 4(2x - 3)\), which agrees.
provenance: handout-answer
steps:
  - Apply the product rule to \((2x - 3)(2x - 3)\).
  - Evaluate \(f(2) = 1\) and \(f'(2) = 4\).
  - The tangent line is \(y = 4x - 7\).
verification:
  checks:
    - expr: 'diff((2*x - 3)**2, x)'
      expected: "4*(2*x - 3)"
    - expr: 'diff((2*x - 3)**2, x).subs(x, 2)'
      expected: "4"
    - expr: 'expand((2*x - 3)**2)'
      expected: "4*x**2 - 12*x + 9"
    - expr: '((2*x - 3)**2).subs(x, 2) + diff((2*x - 3)**2, x).subs(x, 2)*(x - 2)'
      expected: "4*x - 7"
:::


::: exercise
id: l1-derivative-rules.handout-3-4-1
number: "3.4.1"
tier: basic
topics:
  - quotient-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{x^3}{x^3 - 5x + 10}\) using the quotient rule.
solution: |
  The derivative exists wherever the denominator \(x^3 - 5x + 10\) is nonzero. Set \(u(x) = x^3\) and \(v(x) = x^3 - 5x + 10\). Then \(u'(x) = 3x^2\) and \(v'(x) = 3x^2 - 5\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'v - uv'}{v^2}\\
  &= \frac{3x^2(x^3 - 5x + 10) - x^3(3x^2 - 5)}{(x^3 - 5x + 10)^2}.
  \end{aligned}
  \]
  Splitting the fraction gives the form
  \[ f'(x) = \frac{3x^2}{x^3 - 5x + 10} - \frac{x^3(3x^2 - 5)}{(x^3 - 5x + 10)^2}. \]
  The numerator simplifies to
  \[
  \begin{aligned}
  &3x^5 - 15x^3 + 30x^2 - 3x^5 + 5x^3\\
  &= 30x^2 - 10x^3,
  \end{aligned}
  \]
  so
  \[ f'(x) = \frac{10x^2(3 - x)}{(x^3 - 5x + 10)^2}. \]
provenance: handout-answer
steps:
  - Name \(u = x^3\) and \(v = x^3 - 5x + 10\) and differentiate each.
  - Form \(\frac{u'v - uv'}{v^2}\).
  - Simplify the numerator.
verification:
  checks:
    - expr: 'diff(x**3/(x**3 - 5*x + 10), x)'
      expected: "3*x**2/(x**3 - 5*x + 10) - x**3*(3*x**2 - 5)/(x**3 - 5*x + 10)**2"
    - expr: 'diff(x**3/(x**3 - 5*x + 10), x)'
      expected: "10*x**2*(3 - x)/(x**3 - 5*x + 10)**2"
:::


::: exercise
id: l1-derivative-rules.handout-3-4-3
number: "3.4.3"
tier: standard
topics:
  - quotient-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{\sqrt{x}}{\sqrt{625 - x^2}}\) using the quotient rule.
solution: |
  The function is defined for \(0 \leq x < 25\), and the derivative below exists for \(0 < x < 25\).

  Set \(u(x) = \sqrt{x}\) and \(v(x) = \sqrt{625 - x^2}\). Then
  \[
  \begin{aligned}
  u'(x)&= \frac{1}{2\sqrt{x}},\\
  v'(x)&= -\frac{x}{\sqrt{625 - x^2}},\\
  v(x)^2&= 625 - x^2.
  \end{aligned}
  \]
  The numerator of the quotient rule is
  \[
  \begin{aligned}
  u'v - uv'&= \frac{\sqrt{625 - x^2}}{2\sqrt{x}}\\
  &\quad + \frac{x\sqrt{x}}{\sqrt{625 - x^2}}.
  \end{aligned}
  \]
  The denominator is \(v^2 = 625 - x^2\). Dividing each term of the numerator by \(625 - x^2\) gives
  \[ f'(x) = \frac{1}{2\sqrt{x}\,\sqrt{625 - x^2}} + \frac{x^{3/2}}{(625 - x^2)^{3/2}}. \]
provenance: handout-answer
steps:
  - Differentiate the numerator and the denominator separately.
  - Form \(\frac{u'v - uv'}{v^2}\) with \(v^2 = 625 - x^2\).
  - Divide each term of the numerator by \(625 - x^2\).
verification:
  checks:
    - expr: 'diff(sqrt(x)/sqrt(625 - x**2), x)'
      expected: "1/(2*sqrt(x)*sqrt(625 - x**2)) + x**Rational(3, 2)/(625 - x**2)**Rational(3, 2)"
    - expr: 'diff(sqrt(625 - x**2), x)'
      expected: "-x/sqrt(625 - x**2)"
:::


::: exercise
id: l1-derivative-rules.handout-3-4-4
number: "3.4.4"
tier: standard
topics:
  - quotient-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{\sqrt{625 - x^2}}{x^{20}}\) using the quotient rule.
solution: |
  The function is defined for \(0 < |x| \leq 25\), and the derivative below exists for \(0 < |x| < 25\).

  Set \(u(x) = \sqrt{625 - x^2}\) and \(v(x) = x^{20}\). Then
  \[
  \begin{aligned}
  u'(x)&= -\frac{x}{\sqrt{625 - x^2}},\\
  v'(x)&= 20x^{19}.
  \end{aligned}
  \]
  The numerator of the quotient rule is
  \[
  \begin{aligned}
  u'v - uv'&= -\frac{x^{21}}{\sqrt{625 - x^2}}\\
  &\quad - 20x^{19}\sqrt{625 - x^2}.
  \end{aligned}
  \]
  The denominator is \(v^2 = x^{40}\). Dividing each term of the numerator by \(x^{40}\) gives
  \[ f'(x) = -\frac{1}{x^{19}\sqrt{625 - x^2}} - \frac{20\sqrt{625 - x^2}}{x^{21}}. \]
provenance: handout-answer
steps:
  - The numerator derivative comes from the chain rule.
  - Form \(\frac{u'v - uv'}{v^2}\) with \(v^2 = x^{40}\).
  - Divide each term by \(x^{40}\).
verification:
  checks:
    - expr: 'diff(sqrt(625 - x**2)/x**20, x)'
      expected: "-1/(x**19*sqrt(625 - x**2)) - 20*sqrt(625 - x**2)/x**21"
:::


::: exercise
id: l1-derivative-rules.handout-3-4-5
number: "3.4.5"
tier: standard
topics:
  - quotient-rule
  - tangent-line
statement: |
  Find an equation for the tangent line to \(f(x) = \dfrac{x^2 - 4}{5 - x}\) at \(x = 3\).
solution: |
  Set \(u(x) = x^2 - 4\) and \(v(x) = 5 - x\), so \(u'(x) = 2x\) and \(v'(x) = -1\). The function is defined for \(x \neq 5\). The quotient rule gives
  \[ f'(x) = \frac{2x(5 - x) + (x^2 - 4)}{(5 - x)^2}. \]
  At \(x = 3\) the value and the slope are
  \[
  \begin{aligned}
  f(3)&= \frac{5}{2},\\
  f'(3)&= \frac{6 \cdot 2 + 5}{4} = \frac{17}{4}.
  \end{aligned}
  \]
  The tangent line is
  \[
  \begin{aligned}
  y&= \frac{5}{2} + \frac{17}{4}(x - 3)\\
  &= \frac{17}{4}x - \frac{41}{4}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Apply the quotient rule with \(u = x^2 - 4\) and \(v = 5 - x\).
  - Evaluate \(f(3) = \frac{5}{2}\) and \(f'(3) = \frac{17}{4}\).
  - The tangent line is \(y = \frac{17}{4}x - \frac{41}{4}\).
verification:
  checks:
    - expr: '((x**2 - 4)/(5 - x)).subs(x, 3)'
      expected: "Rational(5, 2)"
    - expr: 'diff((x**2 - 4)/(5 - x), x).subs(x, 3)'
      expected: "Rational(17, 4)"
    - expr: '((x**2 - 4)/(5 - x)).subs(x, 3) + diff((x**2 - 4)/(5 - x), x).subs(x, 3)*(x - 3)'
      expected: "17*x/4 - Rational(41, 4)"
:::


::: exercise
id: l1-derivative-rules.handout-3-4-6
number: "3.4.6"
tier: standard
topics:
  - quotient-rule
  - tangent-line
statement: |
  Find an equation for the tangent line to \(f(x) = \dfrac{x - 2}{x^3 + 4x - 1}\) at \(x = 1\).
solution: |
  Set \(u(x) = x - 2\) and \(v(x) = x^3 + 4x - 1\), so \(u'(x) = 1\) and \(v'(x) = 3x^2 + 4\). The quotient rule gives
  \[ f'(x) = \frac{(x^3 + 4x - 1) - (x - 2)(3x^2 + 4)}{(x^3 + 4x - 1)^2}. \]
  At \(x = 1\) we have \(u = -1\), \(v = 4\), \(u' = 1\) and \(v' = 7\). The value and the slope are
  \[
  \begin{aligned}
  f(1)&= -\frac{1}{4},\\
  f'(1)&= \frac{1 \cdot 4 - (-1) \cdot 7}{16} = \frac{11}{16}.
  \end{aligned}
  \]
  The tangent line is
  \[
  \begin{aligned}
  y&= -\frac{1}{4} + \frac{11}{16}(x - 1)\\
  &= \frac{11}{16}x - \frac{15}{16}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Apply the quotient rule with \(u = x - 2\) and \(v = x^3 + 4x - 1\).
  - Evaluate \(f(1) = -\frac{1}{4}\) and \(f'(1) = \frac{11}{16}\).
  - The tangent line is \(y = \frac{11}{16}x - \frac{15}{16}\).
verification:
  checks:
    - expr: '((x - 2)/(x**3 + 4*x - 1)).subs(x, 1)'
      expected: "-Rational(1, 4)"
    - expr: 'diff((x - 2)/(x**3 + 4*x - 1), x).subs(x, 1)'
      expected: "Rational(11, 16)"
    - expr: '((x - 2)/(x**3 + 4*x - 1)).subs(x, 1) + diff((x - 2)/(x**3 + 4*x - 1), x).subs(x, 1)*(x - 1)'
      expected: "11*x/16 - Rational(15, 16)"
:::


::: exercise
id: l1-derivative-rules.handout-3-4-8
number: "3.4.8"
tier: standard
topics:
  - quotient-rule
  - tangent-line
statement: |
  The curve \(y = \dfrac{1}{1 + x^2}\) is called a witch of Agnesi. Find the tangent line to the curve at \(x = 5\).
solution: |
  The denominator \(1 + x^2\) is positive, so the function is defined for every real \(x\). The reciprocal rule with \(u(x) = 1 + x^2\) and \(u'(x) = 2x\) gives
  \[ y' = \frac{-2x}{(1 + x^2)^2}. \]
  At \(x = 5\) the value and the slope are
  \[
  \begin{aligned}
  y(5)&= \frac{1}{26},\\
  y'(5)&= \frac{-10}{26^2} = -\frac{5}{338}.
  \end{aligned}
  \]
  The tangent line is
  \[
  \begin{aligned}
  y&= \frac{1}{26} - \frac{5}{338}(x - 5)\\
  &= \frac{19}{169} - \frac{5}{338}x.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Differentiate with the reciprocal rule.
  - Evaluate the value \(\frac{1}{26}\) and the slope \(-\frac{5}{338}\) at \(x = 5\).
  - The tangent line is \(y = \frac{19}{169} - \frac{5}{338}x\).
verification:
  checks:
    - expr: 'diff(1/(1 + x**2), x)'
      expected: "-2*x/(1 + x**2)**2"
    - expr: 'diff(1/(1 + x**2), x).subs(x, 5)'
      expected: "-Rational(5, 338)"
    - expr: '(1/(1 + x**2)).subs(x, 5) + diff(1/(1 + x**2), x).subs(x, 5)*(x - 5)'
      expected: "Rational(19, 169) - 5*x/338"
:::


::: exercise
id: l1-derivative-rules.handout-3-4-9
number: "3.4.9"
tier: standard
topics:
  - quotient-rule
statement: |
  Suppose \(f'(4) = 5\), \(g'(4) = 12\), \(f(4)g(4) = 2\) and \(g(4) = 6\). Compute \(f(4)\) and \(\dfrac{d}{dx}\dfrac{f}{g}\) at \(x = 4\).
solution: |
  The product condition gives the value of \(f\) at 4:
  \[ f(4) = \frac{f(4)g(4)}{g(4)} = \frac{2}{6} = \frac{1}{3}. \]
  The quotient rule at \(x = 4\) gives
  \[
  \begin{aligned}
  \frac{d}{dx}\frac{f}{g}\bigg|_{x=4}&= \frac{f'(4)g(4) - f(4)g'(4)}{g(4)^2}\\
  &= \frac{5 \cdot 6 - \frac{1}{3} \cdot 12}{36}\\
  &= \frac{26}{36} = \frac{13}{18}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Divide \(f(4)g(4) = 2\) by \(g(4) = 6\) to get \(f(4) = \frac{1}{3}\).
  - Insert the four numbers into the quotient rule.
verification:
  checks:
    - expr: 'Rational(2, 6)'
      expected: "Rational(1, 3)"
    - expr: '(5*6 - Rational(1, 3)*12)/6**2'
      expected: "Rational(13, 18)"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-3
number: "3.5.3"
tier: basic
topics:
  - chain-rule
statement: |
  Find the derivative of \(f(x) = (x^2 + 1)^3\).
solution: |
  The outer function is \(w \mapsto w^3\) and the inner function is \(x^2 + 1\). The outer derivative \(3w^2\) is evaluated at the inner function, and the inner derivative is \(2x\). Therefore
  \[
  \begin{aligned}
  f'(x)&= 3(x^2 + 1)^2 \cdot 2x\\
  &= 6x(x^2 + 1)^2.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The outer derivative is \(3(x^2 + 1)^2\).
  - Multiply by the inner derivative \(2x\).
verification:
  checks:
    - expr: 'diff((x**2 + 1)**3, x)'
      expected: "6*x*(x**2 + 1)**2"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-4
number: "3.5.4"
tier: standard
topics:
  - product-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = x\sqrt{169 - x^2}\).
solution: |
  The function is defined for \(-13 \leq x \leq 13\), and the derivative below exists for \(-13 < x < 13\).

  Set \(u(x) = x\) and \(v(x) = \sqrt{169 - x^2}\). Then \(u'(x) = 1\), and the chain rule gives
  \[ v'(x) = \frac{-2x}{2\sqrt{169 - x^2}} = -\frac{x}{\sqrt{169 - x^2}}. \]
  The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'v + uv'\\
  &= \sqrt{169 - x^2} - \frac{x^2}{\sqrt{169 - x^2}}.
  \end{aligned}
  \]
  Over the common denominator, this equals \(\dfrac{169 - 2x^2}{\sqrt{169 - x^2}}\).
provenance: handout-answer
steps:
  - Differentiate the root with the chain rule.
  - Combine with the product rule \(u'v + uv'\).
verification:
  checks:
    - expr: 'diff(x*sqrt(169 - x**2), x)'
      expected: "sqrt(169 - x**2) - x**2/sqrt(169 - x**2)"
    - expr: 'diff(x*sqrt(169 - x**2), x)'
      expected: "(169 - 2*x**2)/sqrt(169 - x**2)"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-5
number: "3.5.5"
tier: standard
topics:
  - product-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = (x^2 - 4x + 5)\sqrt{25 - x^2}\).
solution: |
  The function is defined for \(-5 \leq x \leq 5\), and the derivative below exists for \(-5 < x < 5\).

  Set \(u(x) = x^2 - 4x + 5\) and \(v(x) = \sqrt{25 - x^2}\). Then \(u'(x) = 2x - 4\), and the chain rule gives
  \[ v'(x) = -\frac{x}{\sqrt{25 - x^2}}. \]
  The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'v + uv'\\
  &= (2x - 4)\sqrt{25 - x^2}\\
  &\quad - \frac{(x^2 - 4x + 5)\,x}{\sqrt{25 - x^2}}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Differentiate the quadratic factor and the root factor separately.
  - Combine with the product rule \(u'v + uv'\).
verification:
  checks:
    - expr: 'diff((x**2 - 4*x + 5)*sqrt(25 - x**2), x)'
      expected: "(2*x - 4)*sqrt(25 - x**2) - (x**2 - 4*x + 5)*x/sqrt(25 - x**2)"
    - expr: 'diff(sqrt(25 - x**2), x)'
      expected: "-x/sqrt(25 - x**2)"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-8
number: "3.5.8"
tier: standard
topics:
  - chain-rule
  - power-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{1}{\sqrt{5 - \sqrt{x}}}\).
solution: |
  The function is defined for \(0 \leq x < 25\), and the derivative below exists for \(0 < x < 25\).

  Write \(f(x) = \bigl(5 - \sqrt{x}\bigr)^{-1/2}\). The outer exponent is \(-\frac{1}{2}\). The inner function is \(5 - \sqrt{x}\), with derivative \(-\frac{1}{2\sqrt{x}}\). The chain rule gives
  \[
  \begin{aligned}
  f'(x)&= -\frac{1}{2}\bigl(5 - \sqrt{x}\bigr)^{-3/2} \cdot \left(-\frac{1}{2\sqrt{x}}\right)\\
  &= \frac{1}{4\sqrt{x}\,\bigl(5 - \sqrt{x}\bigr)^{3/2}}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Rewrite the function as \((5 - \sqrt{x})^{-1/2}\).
  - The inner derivative is \(-\frac{1}{2\sqrt{x}}\).
  - Multiply the outer derivative by the inner derivative.
verification:
  checks:
    - expr: 'diff(1/sqrt(5 - sqrt(x)), x)'
      expected: "1/(4*sqrt(x)*(5 - sqrt(x))**Rational(3, 2))"
    - expr: 'diff(5 - sqrt(x), x)'
      expected: "-1/(2*sqrt(x))"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-10
number: "3.5.10"
tier: standard
topics:
  - quotient-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{x^2 + x + 1}{1 - x}\).
solution: |
  The function is defined for \(x \neq 1\). Set \(u(x) = x^2 + x + 1\) and \(v(x) = 1 - x\). Then \(u'(x) = 2x + 1\) and \(v'(x) = -1\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{(2x + 1)(1 - x) + (x^2 + x + 1)}{(1 - x)^2}\\
  &= \frac{2x + 1}{1 - x} + \frac{x^2 + x + 1}{(1 - x)^2}.
  \end{aligned}
  \]
  Expanding the numerator gives
  \[ (2x + 1)(1 - x) + (x^2 + x + 1) = -x^2 + 2x + 2, \]
  so
  \[ f'(x) = \frac{-x^2 + 2x + 2}{(1 - x)^2}. \]
provenance: handout-answer
steps:
  - Apply the quotient rule with \(u = x^2 + x + 1\) and \(v = 1 - x\).
  - Split the fraction or expand the numerator.
verification:
  checks:
    - expr: 'diff((x**2 + x + 1)/(1 - x), x)'
      expected: "(2*x + 1)/(1 - x) + (x**2 + x + 1)/(1 - x)**2"
    - expr: 'diff((x**2 + x + 1)/(1 - x), x)'
      expected: "(-x**2 + 2*x + 2)/(1 - x)**2"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-11
number: "3.5.11"
tier: standard
topics:
  - quotient-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{\sqrt{25 - x^2}}{x}\).
solution: |
  The function is defined for \(0 < |x| \leq 5\), and the derivative below exists for \(0 < |x| < 5\).

  Set \(u(x) = \sqrt{25 - x^2}\) and \(v(x) = x\). Then \(u'(x) = -\frac{x}{\sqrt{25 - x^2}}\) and \(v'(x) = 1\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'v - uv'}{v^2}\\
  &= \frac{-\dfrac{x^2}{\sqrt{25 - x^2}} - \sqrt{25 - x^2}}{x^2}\\
  &= -\frac{1}{\sqrt{25 - x^2}} - \frac{\sqrt{25 - x^2}}{x^2}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Differentiate the root with the chain rule.
  - Form \(\frac{u'v - uv'}{v^2}\) and divide each term by \(x^2\).
verification:
  checks:
    - expr: 'diff(sqrt(25 - x**2)/x, x)'
      expected: "-1/sqrt(25 - x**2) - sqrt(25 - x**2)/x**2"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-12
number: "3.5.12"
tier: standard
topics:
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \sqrt{\dfrac{169}{x} - x}\).
solution: |
  The function is defined where \(\frac{169}{x} - x \geq 0\), which holds for \(x \leq -13\) and for \(0 < x \leq 13\). The derivative exists where the expression under the root is positive.

  Set \(w(x) = \frac{169}{x} - x = 169x^{-1} - x\). The power rule gives
  \[ w'(x) = -\frac{169}{x^2} - 1. \]
  The root rule \(\frac{d}{dx}\sqrt{w} = \frac{w'}{2\sqrt{w}}\) gives
  \[ f'(x) = \frac{1}{2}\,\frac{-\dfrac{169}{x^2} - 1}{\sqrt{\dfrac{169}{x} - x}}. \]
provenance: handout-answer
steps:
  - Write the inner function as \(169x^{-1} - x\) and differentiate it.
  - Apply \(\frac{d}{dx}\sqrt{w} = \frac{w'}{2\sqrt{w}}\).
verification:
  checks:
    - expr: 'diff(sqrt(169/x - x), x)'
      expected: "Rational(1, 2)*(-169/x**2 - 1)/sqrt(169/x - x)"
    - expr: 'diff(169/x - x, x)'
      expected: "-169/x**2 - 1"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-14
number: "3.5.14"
tier: standard
topics:
  - chain-rule
  - power-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{100}{(100 - x^2)^{3/2}}\).
solution: |
  The function is defined for \(-10 < x < 10\). Write \(f(x) = 100\,(100 - x^2)^{-3/2}\). The outer exponent is \(-\frac{3}{2}\) and the inner derivative is \(-2x\). The chain rule gives
  \[
  \begin{aligned}
  f'(x)&= 100 \cdot \left(-\frac{3}{2}\right)(100 - x^2)^{-5/2} \cdot (-2x)\\
  &= \frac{300x}{(100 - x^2)^{5/2}}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Rewrite the function as \(100(100 - x^2)^{-3/2}\).
  - Multiply by the exponent, lower it to \(-\frac{5}{2}\), and multiply by the inner derivative \(-2x\).
verification:
  checks:
    - expr: 'diff(100/(100 - x**2)**Rational(3, 2), x)'
      expected: "300*x/(100 - x**2)**Rational(5, 2)"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-16
number: "3.5.16"
tier: standard
topics:
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \sqrt{(x^2 + 1)^2 + \sqrt{1 + (x^2 + 1)^2}}\).
solution: |
  Write \(a = x^2 + 1\), so \(a' = 2x\) and \(a > 0\). Then
  \[ f(x) = \sqrt{w(x)}, \qquad w = a^2 + \sqrt{1 + a^2}. \]
  The expression under the outer root is positive, so \(f\) is defined for every real \(x\) and differentiable everywhere.

  The derivative of \(a^2\) is \(2aa' = 4x(x^2 + 1)\). The derivative of the inner root is
  \[
  \begin{aligned}
  \frac{d}{dx}\sqrt{1 + a^2}&= \frac{2aa'}{2\sqrt{1 + a^2}}\\
  &= \frac{4x^3 + 4x}{2\sqrt{1 + (x^2 + 1)^2}}.
  \end{aligned}
  \]
  Adding the two terms gives
  \[ w'(x) = 4x(x^2 + 1) + \frac{4x^3 + 4x}{2\sqrt{1 + (x^2 + 1)^2}}. \]
  The outer root gives \(f' = \frac{w'}{2\sqrt{w}}\), so
  \[
  \begin{aligned}
  f'(x)&= \frac{N(x)}{D(x)},\
  N(x)&= 4x(x^2 + 1) + \frac{4x^3 + 4x}{2\sqrt{1 + (x^2 + 1)^2}},\
  D(x)&= 2\sqrt{(x^2 + 1)^2 + \sqrt{1 + (x^2 + 1)^2}}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Set \(a = x^2 + 1\) and differentiate \(w = a^2 + \sqrt{1 + a^2}\).
  - Apply \(\frac{d}{dx}\sqrt{w} = \frac{w'}{2\sqrt{w}}\) to the outer root.
verification:
  checks:
    - expr: 'diff(sqrt((x**2 + 1)**2 + sqrt(1 + (x**2 + 1)**2)), x)'
      expected: "(4*x*(x**2 + 1) + (4*x**3 + 4*x)/(2*sqrt(1 + (x**2 + 1)**2)))/(2*sqrt((x**2 + 1)**2 + sqrt(1 + (x**2 + 1)**2)))"
    - expr: 'diff((x**2 + 1)**2 + sqrt(1 + (x**2 + 1)**2), x)'
      expected: "4*x*(x**2 + 1) + (4*x**3 + 4*x)/(2*sqrt(1 + (x**2 + 1)**2))"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-21
number: "3.5.21"
tier: basic
topics:
  - chain-rule
  - power-rule
statement: |
  Find the derivative of \(f(x) = (1 - 4x^3)^{-2}\).
solution: |
  The function is defined where \(1 - 4x^3 \neq 0\). The outer exponent is \(-2\) and the inner derivative is \(-12x^2\). The chain rule gives
  \[
  \begin{aligned}
  f'(x)&= -2(1 - 4x^3)^{-3} \cdot (-12x^2)\\
  &= 24x^2(1 - 4x^3)^{-3}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The outer derivative is \(-2(1 - 4x^3)^{-3}\).
  - Multiply by the inner derivative \(-12x^2\).
verification:
  checks:
    - expr: 'diff((1 - 4*x**3)**(-2), x)'
      expected: "24*x**2*(1 - 4*x**3)**(-3)"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-24
number: "3.5.24"
tier: standard
topics:
  - chain-rule
  - quotient-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{1}{1 + \frac{1}{x}}\).
solution: |
  The function is defined for \(x \neq 0\) and \(x \neq -1\). Set \(v(x) = 1 + x^{-1}\), so \(v'(x) = -\frac{1}{x^2}\). The reciprocal rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{-v'}{v^2}\\
  &= \frac{1}{x^2}\cdot\frac{x^2}{(x + 1)^2}\\
  &= \frac{1}{(x + 1)^2}.
  \end{aligned}
  \]
  Here \(v = \frac{x + 1}{x}\), so \(v^2 = \frac{(x + 1)^2}{x^2}\).

  Rewriting the function confirms the result. Multiplying numerator and denominator by \(x\) gives \(f(x) = \frac{x}{x + 1}\), and the quotient rule gives
  \[ f'(x) = \frac{(x + 1) - x}{(x + 1)^2} = \frac{1}{(x + 1)^2}. \]
provenance: handout-answer
steps:
  - Apply the reciprocal rule with \(v = 1 + x^{-1}\).
  - Simplify \(v^2 = \frac{(x + 1)^2}{x^2}\).
  - Confirm with \(f(x) = \frac{x}{x + 1}\) and the quotient rule.
verification:
  checks:
    - expr: 'diff(1/(1 + 1/x), x)'
      expected: "1/(x + 1)**2"
    - expr: 'simplify(1/(1 + 1/x) - x/(x + 1))'
      expected: "0"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-27
number: "3.5.27"
tier: standard
topics:
  - product-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = (3x^2 + 1)(2x - 4)^3\).
solution: |
  Set \(u(x) = 3x^2 + 1\) and \(v(x) = (2x - 4)^3\). Then \(u'(x) = 6x\), and the chain rule gives
  \[ v'(x) = 3(2x - 4)^2 \cdot 2 = 6(2x - 4)^2. \]
  The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'v + uv'\\
  &= 6x(2x - 4)^3 + 6(3x^2 + 1)(2x - 4)^2.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Differentiate the cube with the chain rule to get \(6(2x - 4)^2\).
  - Combine with the product rule \(u'v + uv'\).
verification:
  checks:
    - expr: 'diff((3*x**2 + 1)*(2*x - 4)**3, x)'
      expected: "6*x*(2*x - 4)**3 + 6*(3*x**2 + 1)*(2*x - 4)**2"
    - expr: 'diff((2*x - 4)**3, x)'
      expected: "6*(2*x - 4)**2"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-28
number: "3.5.28"
tier: basic
topics:
  - quotient-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{x + 1}{x - 1}\).
solution: |
  The function is defined for \(x \neq 1\). Set \(u(x) = x + 1\) and \(v(x) = x - 1\), so \(u'(x) = v'(x) = 1\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'v - uv'}{v^2}\\
  &= \frac{(x - 1) - (x + 1)}{(x - 1)^2}\\
  &= -\frac{2}{(x - 1)^2}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Both derivatives equal 1.
  - The numerator \(u'v - uv'\) simplifies to \(-2\).
verification:
  checks:
    - expr: 'diff((x + 1)/(x - 1), x)'
      expected: "-2/(x - 1)**2"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-30
number: "3.5.30"
tier: standard
topics:
  - quotient-rule
  - product-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{(x - 1)(x - 2)}{x - 3}\).
solution: |
  The function is defined for \(x \neq 3\). Expanding the numerator gives \(u(x) = (x - 1)(x - 2) = x^2 - 3x + 2\), so \(u'(x) = 2x - 3\). The denominator is \(v(x) = x - 3\) with \(v'(x) = 1\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{(2x - 3)(x - 3) - (x^2 - 3x + 2)}{(x - 3)^2}\\
  &= \frac{2x^2 - 9x + 9 - x^2 + 3x - 2}{(x - 3)^2}\\
  &= \frac{x^2 - 6x + 7}{(x - 3)^2}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Expand the numerator and differentiate it.
  - Form \(\frac{u'v - uv'}{v^2}\) and simplify.
verification:
  checks:
    - expr: 'diff((x - 1)*(x - 2)/(x - 3), x)'
      expected: "(x**2 - 6*x + 7)/(x - 3)**2"
    - expr: 'expand((2*x - 3)*(x - 3) - (x**2 - 3*x + 2))'
      expected: "x**2 - 6*x + 7"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-31
number: "3.5.31"
tier: standard
topics:
  - quotient-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{2x^{-1} - x^{-2}}{3x^{-1} - 4x^{-2}}\).
solution: |
  The function is defined for \(x \neq 0\) and \(x \neq \frac{4}{3}\). Multiplying numerator and denominator by \(x^2\) simplifies the function:
  \[ f(x) = \frac{2x - 1}{3x - 4}. \]
  Set \(u(x) = 2x - 1\) and \(v(x) = 3x - 4\), so \(u'(x) = 2\) and \(v'(x) = 3\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{2(3x - 4) - 3(2x - 1)}{(3x - 4)^2}\\
  &= \frac{-5}{(3x - 4)^2}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Multiply numerator and denominator by \(x^2\) to get \(\frac{2x - 1}{3x - 4}\).
  - Apply the quotient rule to the simplified fraction.
verification:
  checks:
    - expr: 'diff((2/x - 1/x**2)/(3/x - 4/x**2), x)'
      expected: "-5/(3*x - 4)**2"
    - expr: 'simplify((2/x - 1/x**2)/(3/x - 4/x**2) - (2*x - 1)/(3*x - 4))'
      expected: "0"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-32
number: "3.5.32"
tier: standard
topics:
  - product-rule
statement: |
  Find the derivative of \(f(x) = 3(x^2 + 1)(2x^2 - 1)(2x + 3)\).
solution: |
  Combine the first two factors and the constant. Expanding gives
  \[
  \begin{aligned}
  3(x^2 + 1)(2x^2 - 1)&= 3(2x^4 + x^2 - 1)\\
  &= 6x^4 + 3x^2 - 3.
  \end{aligned}
  \]
  Set \(u(x) = 6x^4 + 3x^2 - 3\) and \(v(x) = 2x + 3\). Then \(u'(x) = 24x^3 + 6x\) and \(v'(x) = 2\). The product rule gives
  \[
  \begin{aligned}
  f'(x)&= (24x^3 + 6x)(2x + 3)\\
  &\quad + 2(6x^4 + 3x^2 - 3)\\
  &= 48x^4 + 72x^3 + 12x^2 + 18x\\
  &\quad + 12x^4 + 6x^2 - 6\\
  &= 60x^4 + 72x^3 + 18x^2 + 18x - 6.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Expand the first two factors with the constant 3 into one polynomial.
  - Apply the product rule to that polynomial and \(2x + 3\).
  - Expand and collect terms.
verification:
  checks:
    - expr: 'diff(3*(x**2 + 1)*(2*x**2 - 1)*(2*x + 3), x)'
      expected: "60*x**4 + 72*x**3 + 18*x**2 + 18*x - 6"
    - expr: 'expand(3*(x**2 + 1)*(2*x**2 - 1))'
      expected: "6*x**4 + 3*x**2 - 3"
:::


::: exercise
id: l1-derivative-rules.handout-3-5-34
number: "3.5.34"
tier: standard
topics:
  - chain-rule
  - power-rule
statement: |
  Find the derivative of \(f(x) = \Bigl((2x + 1)^{-1} + 3\Bigr)^{-1}\).
solution: |
  The function is defined where \(2x + 1 \neq 0\) and \((2x + 1)^{-1} + 3 \neq 0\), that is, for \(x \neq -\frac{1}{2}\) and \(x \neq -\frac{2}{3}\).

  Set \(w(x) = (2x + 1)^{-1} + 3\), so \(f = w^{-1}\). The inner function has derivative
  \[ w'(x) = -2(2x + 1)^{-2}. \]
  The outer derivative of \(w^{-1}\) is \(-w^{-2}\), so
  \[ f'(x) = 2(2x + 1)^{-2}\,w^{-2}. \]
  Combine the terms of \(w\) over a common denominator:
  \[ w = \frac{1 + 3(2x + 1)}{2x + 1} = \frac{2(3x + 2)}{2x + 1}. \]
  Then \(w^2 = \dfrac{4(3x + 2)^2}{(2x + 1)^2}\), and
  \[
  \begin{aligned}
  f'(x)&= \frac{2}{(2x + 1)^2}\cdot\frac{(2x + 1)^2}{4(3x + 2)^2}\\
  &= \frac{1}{2(3x + 2)^2}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Set \(w = (2x + 1)^{-1} + 3\) and differentiate it.
  - Apply the chain rule to \(w^{-1}\).
  - Write \(w\) over a common denominator and simplify.
verification:
  checks:
    - expr: 'diff(((2*x + 1)**(-1) + 3)**(-1), x)'
      expected: "1/(2*(2 + 3*x)**2)"
    - expr: 'diff((2*x + 1)**(-1) + 3, x)'
      expected: "-2*(2*x + 1)**(-2)"
    - expr: 'simplify(((2*x + 1)**(-1) + 3)**(-1) - (2*x + 1)/(6*x + 4))'
      expected: "0"
:::

::: exercise
id: l1-derivative-rules.handout-3-5-35
number: "3.5.35"
tier: standard
topics:
  - product-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = (2x + 1)^3 (x^2 + 1)^2\).
solution: |
  Set \(u(x) = (2x + 1)^3\) and \(v(x) = (x^2 + 1)^2\). Each factor needs the chain rule:
  \[
  \begin{aligned}
  u'(x)&= 3(2x + 1)^2 \cdot 2 = 6(2x + 1)^2,\\
  v'(x)&= 2(x^2 + 1) \cdot 2x = 4x(x^2 + 1).
  \end{aligned}
  \]
  The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'(x) \, v(x) + u(x) \, v'(x)\\
  &= 6(2x + 1)^2 (x^2 + 1)^2 + 4x(2x + 1)^3 (x^2 + 1).
  \end{aligned}
  \]
  Both terms contain the factor \(2(2x + 1)^2 (x^2 + 1)\). Taking it out leaves
  \[
  \begin{aligned}
  f'(x)&= 2(2x + 1)^2 (x^2 + 1)\bigl(3(x^2 + 1) + 2x(2x + 1)\bigr)\\
  &= 2(2x + 1)^2 (x^2 + 1)(7x^2 + 2x + 3).
  \end{aligned}
  \]
  Expanding this product gives the polynomial
  \[ f'(x) = 56x^6 + 72x^5 + 110x^4 + 100x^3 + 60x^2 + 28x + 6. \]
provenance: handout-answer
steps:
  - The chain rule gives \(u'(x) = 6(2x + 1)^2\) and \(v'(x) = 4x(x^2 + 1)\).
  - The product rule adds the two terms \(u'v\) and \(uv'\).
  - The factored form is \(2(2x + 1)^2 (x^2 + 1)(7x^2 + 2x + 3)\).
verification:
  checks:
    - expr: 'diff((2*x + 1)**3, x)'
      expected: '6*(2*x + 1)**2'
    - expr: 'diff((x**2 + 1)**2, x)'
      expected: '4*x*(x**2 + 1)'
    - expr: 'diff((2*x + 1)**3*(x**2 + 1)**2, x)'
      expected: '2*(2*x + 1)**2*(x**2 + 1)*(7*x**2 + 2*x + 3)'
    - expr: 'diff((2*x + 1)**3*(x**2 + 1)**2, x)'
      expected: '56*x**6 + 72*x**5 + 110*x**4 + 100*x**3 + 60*x**2 + 28*x + 6'
:::


::: exercise
id: l1-derivative-rules.handout-3-5-36
number: "3.5.36"
tier: exam
topics:
  - quotient-rule
  - chain-rule
  - tangent-line
statement: |
  Find an equation for the tangent line to \(f(x) = \dfrac{(x - 2)^{1/3}}{(x^3 + 4x - 1)^2}\) at \(x = 1\). Use the real cube root, so that \((x - 2)^{1/3} = -1\) at \(x = 1\).
solution: |
  Set \(u(x) = (x - 2)^{1/3}\) and \(w(x) = (x^3 + 4x - 1)^2\). The tangent line at \(x = 1\) is \(y = f(1) + f'(1)(x - 1)\), so the task needs \(f(1)\) and \(f'(1)\).

  The values of the two functions at \(x = 1\) are \(u(1) = (-1)^{1/3} = -1\) and \(w(1) = 4^2 = 16\). Hence
  \[ f(1) = \frac{-1}{16}. \]

  The chain rule gives the derivatives:
  \[
  \begin{aligned}
  u'(x)&= \tfrac{1}{3}(x - 2)^{-2/3},\\
  w'(x)&= 2(x^3 + 4x - 1)(3x^2 + 4).
  \end{aligned}
  \]
  The real cube root of \(-1\) is \(-1\), so \((-1)^{-2/3} = 1\) and \(u'(1) = \tfrac{1}{3}\). The other derivative at \(x = 1\) is \(w'(1) = 2 \cdot 4 \cdot 7 = 56\).

  The quotient rule gives
  \[
  \begin{aligned}
  f'(1)&= \frac{u'(1) \, w(1) - u(1) \, w'(1)}{w(1)^2}\\
  &= \frac{\tfrac{1}{3} \cdot 16 + 56}{256}\\
  &= \frac{184/3}{256} = \frac{23}{96}.
  \end{aligned}
  \]
  The tangent line is therefore
  \[
  \begin{aligned}
  y&= -\frac{1}{16} + \frac{23}{96}(x - 1)\\
  &= \frac{23x}{96} - \frac{29}{96}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The values are \(u(1) = -1\) and \(w(1) = 16\), so \(f(1) = -\frac{1}{16}\).
  - The derivatives at 1 are \(u'(1) = \frac{1}{3}\) and \(w'(1) = 56\).
  - The quotient rule gives the slope \(f'(1) = \frac{23}{96}\).
  - The tangent line is \(y = \frac{23x}{96} - \frac{29}{96}\).
verification:
  checks:
    - expr: '(-(2 - x)**Rational(1, 3)/(x**3 + 4*x - 1)**2).subs(x, 1)'
      expected: '-Rational(1, 16)'
    - expr: 'diff(-(2 - x)**Rational(1, 3), x).subs(x, 1)'
      expected: 'Rational(1, 3)'
    - expr: 'diff((x**3 + 4*x - 1)**2, x).subs(x, 1)'
      expected: '56'
    - expr: 'diff(-(2 - x)**Rational(1, 3)/(x**3 + 4*x - 1)**2, x).subs(x, 1)'
      expected: 'Rational(23, 96)'
    - expr: '-Rational(1, 16) + Rational(23, 96)*(x - 1)'
      expected: '23*x/96 - Rational(29, 96)'
:::


::: exercise
id: l1-derivative-rules.handout-3-5-37
number: "3.5.37"
tier: basic
topics:
  - power-rule
  - tangent-line
statement: |
  Find an equation for the tangent line to \(y = 9x^{-2}\) at the point \((3, 1)\).
solution: |
  The point lies on the curve, because \(9 \cdot 3^{-2} = 1\). The power rule gives the slope function
  \[ y'(x) = 9 \cdot (-2) x^{-3} = -18x^{-3}. \]
  At \(x = 3\) the slope is
  \[ y'(3) = -\frac{18}{27} = -\frac{2}{3}. \]
  The tangent line through \((3, 1)\) with slope \(-\frac{2}{3}\) is
  \[
  \begin{aligned}
  y&= 1 - \frac{2}{3}(x - 3)\\
  &= 3 - \frac{2x}{3}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The point \((3, 1)\) lies on the curve, since \(9 \cdot 3^{-2} = 1\).
  - The slope is \(y'(3) = -\frac{2}{3}\).
  - The tangent line is \(y = 3 - \frac{2x}{3}\).
verification:
  checks:
    - expr: '(9*x**(-2)).subs(x, 3)'
      expected: '1'
    - expr: 'diff(9*x**(-2), x).subs(x, 3)'
      expected: '-Rational(2, 3)'
    - expr: '1 - Rational(2, 3)*(x - 3)'
      expected: '3 - 2*x/3'
:::


::: exercise
id: l1-derivative-rules.handout-4-4-1
number: "4.4.1"
tier: standard
topics:
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \sin^2(\sqrt{x})\).
solution: |
  The function is defined for \(x \geq 0\) and differentiable for \(x > 0\). It has three layers: the square, the sine and the square root. Write \(f(x) = \bigl(\sin(\sqrt{x})\bigr)^2\). The chain rule works from the outside in:
  \[
  \begin{aligned}
  f'(x)&= 2\sin(\sqrt{x}) \cdot \frac{d}{dx} \sin(\sqrt{x})\\
  &= 2\sin(\sqrt{x}) \cdot \cos(\sqrt{x}) \cdot \frac{d}{dx} \sqrt{x}\\
  &= 2\sin(\sqrt{x}) \cos(\sqrt{x}) \cdot \frac{1}{2\sqrt{x}}.
  \end{aligned}
  \]
  The factors 2 cancel, so for \(x > 0\)
  \[ f'(x) = \frac{\sin(\sqrt{x}) \cos(\sqrt{x})}{\sqrt{x}}. \]
provenance: handout-answer
steps:
  - The outer layer gives \(2\sin(\sqrt{x})\) times the derivative of \(\sin(\sqrt{x})\).
  - The middle layer gives \(\cos(\sqrt{x})\) times the derivative of \(\sqrt{x}\).
  - The inner layer contributes \(\frac{1}{2\sqrt{x}}\).
verification:
  checks:
    - expr: 'diff(sin(sqrt(x)), x)'
      expected: 'cos(sqrt(x))/(2*sqrt(x))'
    - expr: 'diff(sin(sqrt(x))**2, x)'
      expected: 'sin(sqrt(x))*cos(sqrt(x))/sqrt(x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-4-2
number: "4.4.2"
tier: basic
topics:
  - product-rule
statement: |
  Find the derivative of \(f(x) = \sqrt{x} \, \sin x\).
solution: |
  The function is differentiable for \(x > 0\). Set \(u(x) = \sqrt{x}\) and \(v(x) = \sin x\). Then
  \[
  \begin{aligned}
  u'(x)&= \frac{1}{2\sqrt{x}},\\
  v'(x)&= \cos x.
  \end{aligned}
  \]
  The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'(x) \, v(x) + u(x) \, v'(x)\\
  &= \frac{\sin x}{2\sqrt{x}} + \sqrt{x} \cos x.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The derivatives are \(u'(x) = \frac{1}{2\sqrt{x}}\) and \(v'(x) = \cos x\).
  - The product rule gives \(\frac{\sin x}{2\sqrt{x}} + \sqrt{x} \cos x\).
verification:
  checks:
    - expr: 'diff(sqrt(x), x)'
      expected: '1/(2*sqrt(x))'
    - expr: 'diff(sqrt(x)*sin(x), x)'
      expected: 'sin(x)/(2*sqrt(x)) + sqrt(x)*cos(x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-4-4
number: "4.4.4"
tier: standard
topics:
  - quotient-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{x^2 + x}{\sin x}\).
solution: |
  The function is defined where \(\sin x \neq 0\). Set \(u(x) = x^2 + x\) and \(v(x) = \sin x\). Then \(u'(x) = 2x + 1\) and \(v'(x) = \cos x\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'(x) \, v(x) - u(x) \, v'(x)}{v(x)^2}\\
  &= \frac{(2x + 1)\sin x - (x^2 + x)\cos x}{\sin^2 x}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The derivatives are \(u'(x) = 2x + 1\) and \(v'(x) = \cos x\).
  - The numerator of the quotient rule is \((2x + 1)\sin x - (x^2 + x)\cos x\).
  - The denominator is \(\sin^2 x\).
verification:
  checks:
    - expr: 'diff(x**2 + x, x)'
      expected: '2*x + 1'
    - expr: 'diff((x**2 + x)/sin(x), x)'
      expected: '((2*x + 1)*sin(x) - (x**2 + x)*cos(x))/sin(x)**2'
:::


::: exercise
id: l1-derivative-rules.handout-4-4-5
number: "4.4.5"
tier: standard
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \sqrt{1 - \sin^2 x}\).
solution: |
  The function is differentiable where \(1 - \sin^2 x > 0\), that is, where \(\cos x \neq 0\). For \(u(x) = 1 - \sin^2 x\), the rule for a square root gives \(\frac{d}{dx}\sqrt{u(x)} = \frac{u'(x)}{2\sqrt{u(x)}}\). The inner derivative is
  \[ u'(x) = -2\sin x \cos x. \]
  Therefore
  \[
  \begin{aligned}
  f'(x)&= \frac{-2\sin x \cos x}{2\sqrt{1 - \sin^2 x}}\\
  &= -\frac{\sin x \cos x}{\sqrt{1 - \sin^2 x}}.
  \end{aligned}
  \]
  The identity \(1 - \sin^2 x = \cos^2 x\) shows that \(f(x) = |\cos x|\). The derivative has two cases:

  - If \(\cos x > 0\), then \(\sqrt{1 - \sin^2 x} = \cos x\) and \(f'(x) = -\sin x\).
  - If \(\cos x < 0\), then \(\sqrt{1 - \sin^2 x} = -\cos x\) and \(f'(x) = \sin x\).

  At \(x = \frac{\pi}{3}\) the first case gives \(f'(x) = -\frac{\sqrt{3}}{2}\). At \(x = \frac{2\pi}{3}\) the second case gives \(f'(x) = \frac{\sqrt{3}}{2}\).
provenance: handout-answer
steps:
  - The inner derivative is \(-2\sin x \cos x\).
  - The square-root rule gives \(-\frac{\sin x \cos x}{\sqrt{1 - \sin^2 x}}\).
  - The function equals \(|\cos x|\), so the derivative is \(-\sin x\) where \(\cos x > 0\) and \(\sin x\) where \(\cos x < 0\).
verification:
  checks:
    - expr: 'diff(1 - sin(x)**2, x)'
      expected: '-2*sin(x)*cos(x)'
    - expr: 'diff(sqrt(1 - sin(x)**2), x)'
      expected: '-sin(x)*cos(x)/sqrt(1 - sin(x)**2)'
    - expr: 'diff(sqrt(1 - sin(x)**2), x).subs(x, pi/3)'
      expected: '-sqrt(3)/2'
    - expr: 'diff(sqrt(1 - sin(x)**2), x).subs(x, 2*pi/3)'
      expected: 'sqrt(3)/2'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-1
number: "4.5.1"
tier: basic
topics:
  - product-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \sin x \cos x\).
solution: |
  Set \(u(x) = \sin x\) and \(v(x) = \cos x\). Then \(u'(x) = \cos x\) and \(v'(x) = -\sin x\). The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'(x) \, v(x) + u(x) \, v'(x)\\
  &= \cos x \cdot \cos x + \sin x \cdot (-\sin x)\\
  &= \cos^2 x - \sin^2 x.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The derivatives are \(u'(x) = \cos x\) and \(v'(x) = -\sin x\).
  - The product rule gives \(\cos^2 x - \sin^2 x\).
verification:
  checks:
    - expr: 'diff(sin(x)*cos(x), x)'
      expected: 'cos(x)**2 - sin(x)**2'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-2
number: "4.5.2"
tier: basic
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \sin(\cos x)\).
solution: |
  The outer function is sine and the inner function is \(\cos x\). The derivative of sine, evaluated at \(\cos x\), is \(\cos(\cos x)\). The inner derivative is \(-\sin x\). The chain rule gives
  \[
  \begin{aligned}
  f'(x)&= \cos(\cos x) \cdot (-\sin x)\\
  &= -\sin x \, \cos(\cos x).
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The outer derivative is \(\cos(\cos x)\).
  - The inner derivative is \(-\sin x\).
verification:
  checks:
    - expr: 'diff(sin(cos(x)), x)'
      expected: '-sin(x)*cos(cos(x))'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-3
number: "4.5.3"
tier: standard
topics:
  - product-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \sqrt{x} \, \tan x\).
solution: |
  The function is differentiable for \(x > 0\) with \(\cos x \neq 0\). Set \(u(x) = \sqrt{x}\) and \(v(x) = \tan x\). Then \(u'(x) = \frac{1}{2\sqrt{x}}\) and \(v'(x) = \sec^2 x\). The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'(x) \, v(x) + u(x) \, v'(x)\\
  &= \frac{\tan x}{2\sqrt{x}} + \sqrt{x} \sec^2 x.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The derivatives are \(u'(x) = \frac{1}{2\sqrt{x}}\) and \(v'(x) = \sec^2 x\).
  - The product rule gives \(\frac{\tan x}{2\sqrt{x}} + \sqrt{x} \sec^2 x\).
verification:
  checks:
    - expr: 'diff(tan(x), x)'
      expected: 'sec(x)**2'
    - expr: 'diff(sqrt(x)*tan(x), x)'
      expected: 'tan(x)/(2*sqrt(x)) + sqrt(x)*sec(x)**2'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-4
number: "4.5.4"
tier: standard
topics:
  - quotient-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \dfrac{\tan x}{1 + \sin x}\).
solution: |
  The function is defined where \(\cos x \neq 0\). Set \(u(x) = \tan x\) and \(v(x) = 1 + \sin x\). Then \(u'(x) = \sec^2 x\) and \(v'(x) = \cos x\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'(x) \, v(x) - u(x) \, v'(x)}{v(x)^2}\\
  &= \frac{\sec^2 x \, (1 + \sin x) - \tan x \cos x}{(1 + \sin x)^2}.
  \end{aligned}
  \]
  Since \(\tan x \cos x = \sin x\), the numerator also equals \(\sec^2 x \, (1 + \sin x) - \sin x\).
provenance: handout-answer
steps:
  - The derivatives are \(u'(x) = \sec^2 x\) and \(v'(x) = \cos x\).
  - The numerator is \(\sec^2 x \, (1 + \sin x) - \tan x \cos x\).
  - The denominator is \((1 + \sin x)^2\).
verification:
  checks:
    - expr: 'diff(tan(x)/(1 + sin(x)), x)'
      expected: '(sec(x)**2*(1 + sin(x)) - tan(x)*cos(x))/(1 + sin(x))**2'
    - expr: 'tan(x)*cos(x)'
      expected: 'sin(x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-7
number: "4.5.7"
tier: standard
topics:
  - product-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = x^3 \sin(23x^2)\).
solution: |
  Set \(u(x) = x^3\) and \(v(x) = \sin(23x^2)\). The derivative of \(u\) is \(u'(x) = 3x^2\). The sine needs the chain rule. Its inner function is \(23x^2\), with derivative \(46x\). Therefore
  \[ v'(x) = \cos(23x^2) \cdot 46x. \]
  The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'(x) \, v(x) + u(x) \, v'(x)\\
  &= 3x^2 \sin(23x^2) + x^3 \cdot 46x \cos(23x^2)\\
  &= 3x^2 \sin(23x^2) + 46x^4 \cos(23x^2).
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The chain rule gives \(v'(x) = 46x \cos(23x^2)\).
  - The product rule gives \(3x^2 \sin(23x^2) + 46x^4 \cos(23x^2)\).
verification:
  checks:
    - expr: 'diff(sin(23*x**2), x)'
      expected: '46*x*cos(23*x**2)'
    - expr: 'diff(x**3*sin(23*x**2), x)'
      expected: '3*x**2*sin(23*x**2) + 46*x**4*cos(23*x**2)'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-8
number: "4.5.8"
tier: basic
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \sin^2 x + \cos^2 x\).
solution: |
  The sum rule differentiates each term. The chain rule on each square gives
  \[
  \begin{aligned}
  \frac{d}{dx} \sin^2 x&= 2\sin x \cos x,\\
  \frac{d}{dx} \cos^2 x&= 2\cos x \cdot (-\sin x).
  \end{aligned}
  \]
  The two terms cancel:
  \[ f'(x) = 2\sin x \cos x - 2\sin x \cos x = 0. \]
  This agrees with the identity \(\sin^2 x + \cos^2 x = 1\). The function is constant, so its derivative is 0.
provenance: handout-answer
steps:
  - The chain rule gives \(2\sin x \cos x\) for the first square and \(-2\sin x \cos x\) for the second.
  - The sum is 0, the derivative of the constant function 1.
verification:
  checks:
    - expr: 'diff(sin(x)**2, x)'
      expected: '2*sin(x)*cos(x)'
    - expr: 'diff(cos(x)**2, x)'
      expected: '-2*sin(x)*cos(x)'
    - expr: 'diff(sin(x)**2 + cos(x)**2, x)'
      expected: '0'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-9
number: "4.5.9"
tier: standard
topics:
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \sin(\cos(6x))\).
solution: |
  The function has three layers: sine, cosine and the linear function \(6x\). The chain rule works from the outside in:
  \[
  \begin{aligned}
  f'(x)&= \cos(\cos(6x)) \cdot \frac{d}{dx} \cos(6x)\\
  &= \cos(\cos(6x)) \cdot \bigl(-\sin(6x)\bigr) \cdot 6\\
  &= -6\sin(6x) \cos(\cos(6x)).
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The outer layer gives \(\cos(\cos(6x))\).
  - The middle layer gives \(-\sin(6x)\).
  - The inner layer gives the factor 6.
verification:
  checks:
    - expr: 'diff(cos(6*x), x)'
      expected: '-6*sin(6*x)'
    - expr: 'diff(sin(cos(6*x)), x)'
      expected: '-6*cos(cos(6*x))*sin(6*x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-10
number: "4.5.10"
tier: standard
topics:
  - quotient-rule
  - derivative-table
statement: |
  Compute \(\dfrac{d}{d\theta} \dfrac{\sec\theta}{1 + \sec\theta}\).
solution: |
  The function is defined where \(\cos\theta \neq 0\) and \(\cos\theta \neq -1\). Set \(u(\theta) = \sec\theta\) and \(v(\theta) = 1 + \sec\theta\). Both have the derivative \(\sec\theta \tan\theta\). The numerator of the quotient rule is
  \[
  \begin{aligned}
  u'v - uv'&= \sec\theta \tan\theta \, (1 + \sec\theta) - \sec\theta \cdot \sec\theta \tan\theta\\
  &= \sec\theta \tan\theta.
  \end{aligned}
  \]
  Therefore
  \[ \frac{d}{d\theta} \frac{\sec\theta}{1 + \sec\theta} = \frac{\sec\theta \tan\theta}{(1 + \sec\theta)^2}. \]
  To simplify, multiply the numerator and the denominator by \(\cos^2\theta\). The numerator becomes \(\frac{1}{\cos\theta} \cdot \frac{\sin\theta}{\cos\theta} \cdot \cos^2\theta = \sin\theta\). The denominator becomes \((\cos\theta + 1)^2\). Hence
  \[ \frac{d}{d\theta} \frac{\sec\theta}{1 + \sec\theta} = \frac{\sin\theta}{(\cos\theta + 1)^2}. \]
provenance: handout-answer
steps:
  - Both \(u\) and \(v\) have the derivative \(\sec\theta \tan\theta\).
  - The numerator of the quotient rule collapses to \(\sec\theta \tan\theta\).
  - Multiplying by \(\cos^2\theta\) gives \(\frac{\sin\theta}{(\cos\theta + 1)^2}\).
verification:
  checks:
    - expr: 'diff(sec(theta)/(1 + sec(theta)), theta)'
      expected: 'sec(theta)*tan(theta)/(1 + sec(theta))**2'
    - expr: 'diff(sec(theta)/(1 + sec(theta)), theta)'
      expected: 'sin(theta)/(cos(theta) + 1)**2'
    - expr: 'sec(theta)*tan(theta)*(1 + sec(theta)) - sec(theta)*sec(theta)*tan(theta)'
      expected: 'sec(theta)*tan(theta)'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-12
number: "4.5.12"
tier: exam
topics:
  - quotient-rule
  - product-rule
  - chain-rule
statement: |
  Compute \(\dfrac{d}{dt} \dfrac{t^3 \sin(3t)}{\cos(2t)}\).
solution: |
  The function is defined where \(\cos(2t) \neq 0\). Set \(u(t) = t^3 \sin(3t)\) and \(v(t) = \cos(2t)\).

  The numerator \(u\) is a product. The product rule, with the chain rule on the sine, gives
  \[
  \begin{aligned}
  u'(t)&= 3t^2 \sin(3t) + t^3 \cdot 3\cos(3t)\\
  &= 3t^2 \bigl(\sin(3t) + t\cos(3t)\bigr).
  \end{aligned}
  \]
  The chain rule on the cosine gives
  \[ v'(t) = -2\sin(2t). \]
  The quotient rule gives
  \[
  \begin{aligned}
  \frac{d}{dt} \frac{u}{v}&= \frac{u'v - uv'}{v^2}\\
  &= \frac{3t^2 \bigl(\sin(3t) + t\cos(3t)\bigr)\cos(2t) + 2t^3 \sin(3t) \sin(2t)}{\cos^2(2t)}.
  \end{aligned}
  \]
  Splitting the fraction gives
  \[
  \frac{d}{dt} \frac{u}{v} = \frac{3t^2 \bigl(\sin(3t) + t\cos(3t)\bigr)}{\cos(2t)} + \frac{2t^3 \sin(3t) \sin(2t)}{\cos^2(2t)}.
  \]
provenance: handout-answer
steps:
  - The product rule and the chain rule give \(u'(t) = 3t^2(\sin(3t) + t\cos(3t))\).
  - The chain rule gives \(v'(t) = -2\sin(2t)\).
  - The quotient rule combines them over \(\cos^2(2t)\).
verification:
  checks:
    - expr: 'diff(t**3*sin(3*t), t)'
      expected: '3*t**2*(sin(3*t) + t*cos(3*t))'
    - expr: 'diff(cos(2*t), t)'
      expected: '-2*sin(2*t)'
    - expr: 'diff(t**3*sin(3*t)/cos(2*t), t)'
      expected: '3*t**2*(sin(3*t) + t*cos(3*t))/cos(2*t) + 2*t**3*sin(3*t)*sin(2*t)/cos(2*t)**2'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-13
number: "4.5.13"
tier: standard
topics:
  - chain-rule
  - tangent-line
statement: |
  Find all points on the graph of \(f(x) = \sin^2 x\) at which the tangent line is horizontal.
solution: |
  A horizontal tangent means \(f'(x) = 0\). The chain rule gives
  \[
  f'(x) = 2\sin x \cos x = \sin(2x).
  \]
  The sine vanishes exactly at integer multiples of \(\pi\). Hence \(\sin(2x) = 0\) holds when \(2x = n\pi\), that is, when
  \[ x = \frac{n\pi}{2}, \quad n \text{ an integer}. \]
  The function value at these points depends on the parity of \(n\):

  - If \(n\) is even, \(x = k\pi\) and \(f(x) = \sin^2(k\pi) = 0\).
  - If \(n\) is odd, \(x = \frac{\pi}{2} + k\pi\) and \(f(x) = 1\).

  The points are \((k\pi, 0)\) and \(\bigl(\frac{\pi}{2} + k\pi, 1\bigr)\) for integers \(k\). The \(x\)-coordinates are \(x = \frac{n\pi}{2}\) for every integer \(n\).
provenance: handout-answer
steps:
  - The derivative is \(f'(x) = 2\sin x \cos x = \sin(2x)\).
  - The equation \(\sin(2x) = 0\) gives \(x = \frac{n\pi}{2}\).
  - The function value is 0 at even \(n\) and 1 at odd \(n\).
verification:
  checks:
    - expr: 'diff(sin(x)**2, x)'
      expected: 'sin(2*x)'
    - expr: 'solveset(diff(sin(x)**2, x), x, Interval(0, pi))'
      expected: 'FiniteSet(0, pi/2, pi)'
    - expr: '(sin(0)**2, sin(pi/2)**2, sin(pi)**2)'
      expected: '(0, 1, 0)'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-14
number: "4.5.14"
tier: standard
topics:
  - chain-rule
  - tangent-line
statement: |
  Find all points on the graph of \(f(x) = 2\sin x - \sin^2 x\) at which the tangent line is horizontal.
solution: |
  A horizontal tangent means \(f'(x) = 0\). The chain rule on the square gives
  \[
  \begin{aligned}
  f'(x)&= 2\cos x - 2\sin x \cos x\\
  &= 2\cos x \, (1 - \sin x).
  \end{aligned}
  \]
  A product is zero when one factor is zero:

  - If \(\cos x = 0\), then \(x = \frac{\pi}{2} + n\pi\).
  - If \(\sin x = 1\), then \(x = \frac{\pi}{2} + 2n\pi\). These values already have \(\cos x = 0\), so they add nothing new.

  The solutions are \(x = \frac{\pi}{2} + n\pi\) for every integer \(n\). The function values alternate:

  - At \(x = \frac{\pi}{2} + 2k\pi\), \(\sin x = 1\) and \(f(x) = 2 - 1 = 1\).
  - At \(x = \frac{3\pi}{2} + 2k\pi\), \(\sin x = -1\) and \(f(x) = -2 - 1 = -3\).

  The points are \(\bigl(\frac{\pi}{2} + 2k\pi, 1\bigr)\) and \(\bigl(\frac{3\pi}{2} + 2k\pi, -3\bigr)\) for integers \(k\).
provenance: handout-answer
steps:
  - The derivative factors as \(f'(x) = 2\cos x \, (1 - \sin x)\).
  - The zeros of \(1 - \sin x\) are also zeros of \(\cos x\), so the solutions are \(x = \frac{\pi}{2} + n\pi\).
  - The function values are 1 at \(\frac{\pi}{2} + 2k\pi\) and \(-3\) at \(\frac{3\pi}{2} + 2k\pi\).
verification:
  checks:
    - expr: 'diff(2*sin(x) - sin(x)**2, x)'
      expected: '2*cos(x)*(1 - sin(x))'
    - expr: 'solveset(diff(2*sin(x) - sin(x)**2, x), x, Interval(0, 2*pi))'
      expected: 'FiniteSet(pi/2, 3*pi/2)'
    - expr: '((2*sin(x) - sin(x)**2).subs(x, pi/2), (2*sin(x) - sin(x)**2).subs(x, 3*pi/2))'
      expected: '(1, -3)'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-15
number: "4.5.15"
tier: standard
topics:
  - chain-rule
  - tangent-line
statement: |
  Find an equation for the tangent line to \(f(x) = \sin^2 x\) at \(x = \frac{\pi}{3}\).
solution: |
  The tangent line is \(y = f\bigl(\frac{\pi}{3}\bigr) + f'\bigl(\frac{\pi}{3}\bigr)\bigl(x - \frac{\pi}{3}\bigr)\). The value of the function is
  \[ f\left(\frac{\pi}{3}\right) = \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{3}{4}. \]
  The chain rule gives \(f'(x) = 2\sin x \cos x\). Therefore
  \[
  \begin{aligned}
  f'\left(\frac{\pi}{3}\right)&= 2 \cdot \frac{\sqrt{3}}{2} \cdot \frac{1}{2}\\
  &= \frac{\sqrt{3}}{2}.
  \end{aligned}
  \]
  The tangent line is
  \[
  \begin{aligned}
  y&= \frac{3}{4} + \frac{\sqrt{3}}{2}\left(x - \frac{\pi}{3}\right)\\
  &= \frac{\sqrt{3}}{2} x + \frac{3}{4} - \frac{\sqrt{3}\,\pi}{6}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The point of tangency has \(y = \frac{3}{4}\).
  - The slope is \(f'\bigl(\frac{\pi}{3}\bigr) = \frac{\sqrt{3}}{2}\).
  - The tangent line is \(y = \frac{\sqrt{3}}{2} x + \frac{3}{4} - \frac{\sqrt{3}\pi}{6}\).
verification:
  checks:
    - expr: 'sin(pi/3)**2'
      expected: 'Rational(3, 4)'
    - expr: 'diff(sin(x)**2, x).subs(x, pi/3)'
      expected: 'sqrt(3)/2'
    - expr: 'Rational(3, 4) + sqrt(3)/2*(x - pi/3)'
      expected: 'sqrt(3)*x/2 + Rational(3, 4) - sqrt(3)*pi/6'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-16
number: "4.5.16"
tier: standard
topics:
  - chain-rule
  - derivative-table
  - tangent-line
statement: |
  Find an equation for the tangent line to \(f(x) = \sec^2 x\) at \(x = \frac{\pi}{3}\).
solution: |
  The value of the function is \(f\bigl(\frac{\pi}{3}\bigr) = \sec^2 \frac{\pi}{3} = 2^2 = 4\), because \(\cos \frac{\pi}{3} = \frac{1}{2}\).

  The function is the square of \(\sec x\). The chain rule and the derivative of the secant give
  \[
  \begin{aligned}
  f'(x)&= 2\sec x \cdot \sec x \tan x\\
  &= 2\sec^2 x \tan x.
  \end{aligned}
  \]
  At \(x = \frac{\pi}{3}\) the secant is 2 and the tangent is \(\sqrt{3}\). The slope is
  \[ f'\left(\frac{\pi}{3}\right) = 2 \cdot 4 \cdot \sqrt{3} = 8\sqrt{3}. \]
  The tangent line is
  \[
  \begin{aligned}
  y&= 4 + 8\sqrt{3}\left(x - \frac{\pi}{3}\right)\\
  &= 8\sqrt{3}\, x + 4 - \frac{8\sqrt{3}\,\pi}{3}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The point of tangency has \(y = 4\).
  - The chain rule gives \(f'(x) = 2\sec^2 x \tan x\), so the slope is \(8\sqrt{3}\).
  - The tangent line is \(y = 8\sqrt{3}\, x + 4 - \frac{8\sqrt{3}\pi}{3}\).
verification:
  checks:
    - expr: 'sec(pi/3)**2'
      expected: '4'
    - expr: 'diff(sec(x)**2, x)'
      expected: '2*sec(x)**2*tan(x)'
    - expr: 'diff(sec(x)**2, x).subs(x, pi/3)'
      expected: '8*sqrt(3)'
    - expr: '4 + 8*sqrt(3)*(x - pi/3)'
      expected: '8*sqrt(3)*x + 4 - 8*sqrt(3)*pi/3'
:::


::: exercise
id: l1-derivative-rules.handout-4-5-18
number: "4.5.18"
tier: standard
topics:
  - derivative-table
  - tangent-line
statement: |
  Find the points on the curve \(y = x + 2\cos x\) that have a horizontal tangent line.
solution: |
  A horizontal tangent means \(y'(x) = 0\). The derivative is
  \[ y'(x) = 1 - 2\sin x. \]
  The equation \(1 - 2\sin x = 0\) is \(\sin x = \frac{1}{2}\). On one period the solutions are \(x = \frac{\pi}{6}\) and \(x = \frac{5\pi}{6}\). Adding multiples of \(2\pi\) gives all solutions:
  \[ x = \frac{\pi}{6} + 2n\pi \quad \text{or} \quad x = \frac{5\pi}{6} + 2n\pi, \quad n \text{ an integer}. \]
  The \(y\)-coordinates use \(\cos \frac{\pi}{6} = \frac{\sqrt{3}}{2}\) and \(\cos \frac{5\pi}{6} = -\frac{\sqrt{3}}{2}\), and adding \(2n\pi\) does not change a cosine:

  - At \(x = \frac{\pi}{6} + 2n\pi\), \(y = \frac{\pi}{6} + 2n\pi + \sqrt{3}\).
  - At \(x = \frac{5\pi}{6} + 2n\pi\), \(y = \frac{5\pi}{6} + 2n\pi - \sqrt{3}\).
provenance: handout-answer
steps:
  - The derivative is \(y'(x) = 1 - 2\sin x\).
  - The equation \(\sin x = \frac{1}{2}\) gives \(x = \frac{\pi}{6} + 2n\pi\) and \(x = \frac{5\pi}{6} + 2n\pi\).
  - The \(y\)-coordinates are \(\frac{\pi}{6} + 2n\pi + \sqrt{3}\) and \(\frac{5\pi}{6} + 2n\pi - \sqrt{3}\).
verification:
  checks:
    - expr: 'diff(x + 2*cos(x), x)'
      expected: '1 - 2*sin(x)'
    - expr: 'solveset(1 - 2*sin(x), x, Interval(0, 2*pi))'
      expected: 'FiniteSet(pi/6, 5*pi/6)'
    - expr: '((x + 2*cos(x)).subs(x, pi/6), (x + 2*cos(x)).subs(x, 5*pi/6))'
      expected: '(pi/6 + sqrt(3), 5*pi/6 - sqrt(3))'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-1
number: "4.7.1"
tier: standard
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = 3^{(x^2)}\).
solution: |
  The outer function is the exponential with base 3, whose derivative is \((\ln 3) \, 3^u\). The inner function is \(u(x) = x^2\), with derivative \(2x\). The chain rule gives
  \[
  \begin{aligned}
  f'(x)&= (\ln 3) \, 3^{(x^2)} \cdot 2x\\
  &= 2\ln(3) \, x \, 3^{(x^2)}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The base-3 exponential has the derivative \((\ln 3) \, 3^u\).
  - The inner derivative is \(2x\).
verification:
  checks:
    - expr: 'diff(3**x, x)'
      expected: 'log(3)*3**x'
    - expr: 'diff(3**(x**2), x)'
      expected: '2*log(3)*x*3**(x**2)'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-2
number: "4.7.2"
tier: standard
topics:
  - quotient-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \dfrac{\sin x}{e^x}\).
solution: |
  Set \(u(x) = \sin x\) and \(v(x) = e^x\). Then \(u'(x) = \cos x\) and \(v'(x) = e^x\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'(x) \, v(x) - u(x) \, v'(x)}{v(x)^2}\\
  &= \frac{e^x \cos x - e^x \sin x}{e^{2x}}\\
  &= \frac{\cos x - \sin x}{e^x}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The derivatives are \(u'(x) = \cos x\) and \(v'(x) = e^x\).
  - The numerator is \(e^x(\cos x - \sin x)\) and the denominator is \(e^{2x}\).
verification:
  checks:
    - expr: 'diff(sin(x)/exp(x), x)'
      expected: '(cos(x) - sin(x))/exp(x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-3
number: "4.7.3"
tier: basic
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = (e^x)^2\).
solution: |
  The exponent law gives \((e^x)^2 = e^{2x}\). The outer function is the exponential and the inner function is \(2x\), with derivative 2. The chain rule gives
  \[ f'(x) = e^{2x} \cdot 2 = 2e^{2x}. \]
  The product rule on \(e^x \cdot e^x\) gives the same result:
  \[ f'(x) = e^x \cdot e^x + e^x \cdot e^x = 2e^{2x}. \]
provenance: handout-answer
steps:
  - The function equals \(e^{2x}\).
  - The chain rule gives the factor 2 from the inner function \(2x\).
verification:
  checks:
    - expr: 'diff((exp(x))**2, x)'
      expected: '2*exp(2*x)'
    - expr: 'diff(exp(2*x), x)'
      expected: '2*exp(2*x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-4
number: "4.7.4"
tier: basic
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \sin(e^x)\).
solution: |
  The outer function is sine and the inner function is \(e^x\). The derivative of sine, evaluated at \(e^x\), is \(\cos(e^x)\). The inner derivative is \(e^x\). The chain rule gives
  \[ f'(x) = e^x \cos(e^x). \]
provenance: handout-answer
steps:
  - The outer derivative is \(\cos(e^x)\).
  - The inner derivative is \(e^x\).
verification:
  checks:
    - expr: 'diff(sin(exp(x)), x)'
      expected: 'exp(x)*cos(exp(x))'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-6
number: "4.7.6"
tier: standard
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = x^{\sin x}\) for \(x > 0\).
solution: |
  The base and the exponent both contain \(x\), so neither the power rule nor the exponential rule applies directly. For \(x > 0\), write
  \[ f(x) = e^{\sin x \cdot \ln x}. \]
  The outer function is the exponential and the inner function is \(g(x) = \sin x \cdot \ln x\). The product rule gives
  \[ g'(x) = \cos x \cdot \ln x + \sin x \cdot \frac{1}{x}. \]
  The chain rule multiplies \(e^{g(x)}\) by \(g'(x)\):
  \[
  \begin{aligned}
  f'(x)&= e^{\sin x \cdot \ln x} \, g'(x)\\
  &= x^{\sin x}\left(\cos x \ln x + \frac{\sin x}{x}\right).
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - For \(x > 0\), \(x^{\sin x} = e^{\sin x \ln x}\).
  - The product rule gives \(g'(x) = \cos x \ln x + \frac{\sin x}{x}\).
  - The chain rule multiplies \(g'(x)\) by \(x^{\sin x}\).
verification:
  checks:
    - expr: 'diff(sin(x)*log(x), x)'
      expected: 'cos(x)*log(x) + sin(x)/x'
    - expr: 'diff(exp(sin(x)*log(x)), x)'
      expected: 'exp(sin(x)*log(x))*(cos(x)*log(x) + sin(x)/x)'
    - expr: 'diff(x**sin(x), x)'
      expected: 'x**sin(x)*(cos(x)*log(x) + sin(x)/x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-7
number: "4.7.7"
tier: basic
topics:
  - product-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = x^3 e^x\).
solution: |
  Set \(u(x) = x^3\) and \(v(x) = e^x\). Then \(u'(x) = 3x^2\) and \(v'(x) = e^x\). The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'(x) \, v(x) + u(x) \, v'(x)\\
  &= 3x^2 e^x + x^3 e^x\\
  &= x^2 (3 + x) e^x.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The derivatives are \(u'(x) = 3x^2\) and \(v'(x) = e^x\).
  - The product rule gives \(3x^2 e^x + x^3 e^x\).
verification:
  checks:
    - expr: 'diff(x**3*exp(x), x)'
      expected: '3*x**2*exp(x) + x**3*exp(x)'
    - expr: 'diff(x**3*exp(x), x)'
      expected: 'x**2*(3 + x)*exp(x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-8
number: "4.7.8"
tier: basic
topics:
  - sum-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = x + 2^x\).
solution: |
  The sum rule differentiates each term. The power rule gives \((x)' = 1\). The rule for other bases gives \((2^x)' = (\ln 2) \, 2^x\). Therefore
  \[ f'(x) = 1 + 2^x \ln 2. \]
provenance: handout-answer
steps:
  - The derivative of \(x\) is 1.
  - The derivative of \(2^x\) is \((\ln 2) \, 2^x\).
verification:
  checks:
    - expr: 'diff(2**x, x)'
      expected: 'log(2)*2**x'
    - expr: 'diff(x + 2**x, x)'
      expected: '1 + 2**x*log(2)'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-10
number: "4.7.10"
tier: standard
topics:
  - quotient-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{e^{4x}}{x}\).
solution: |
  The function is defined for \(x \neq 0\). Set \(u(x) = e^{4x}\) and \(v(x) = x\). The chain rule gives \(u'(x) = 4e^{4x}\), and \(v'(x) = 1\). The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'(x) \, v(x) - u(x) \, v'(x)}{v(x)^2}\\
  &= \frac{4x e^{4x} - e^{4x}}{x^2}\\
  &= \frac{e^{4x}(4x - 1)}{x^2}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The chain rule gives \(u'(x) = 4e^{4x}\).
  - The numerator of the quotient rule is \(4x e^{4x} - e^{4x}\).
verification:
  checks:
    - expr: 'diff(exp(4*x), x)'
      expected: '4*exp(4*x)'
    - expr: 'diff(exp(4*x)/x, x)'
      expected: 'exp(4*x)*(4*x - 1)/x**2'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-11
number: "4.7.11"
tier: basic
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \ln(x^3 + 3x)\).
solution: |
  The logarithm is defined where \(x^3 + 3x = x(x^2 + 3) > 0\), that is, for \(x > 0\). For \(u(x) = x^3 + 3x\) the logarithm rule gives \(\frac{d}{dx} \ln(u(x)) = \frac{u'(x)}{u(x)}\). The inner derivative is \(u'(x) = 3x^2 + 3\). Therefore
  \[ f'(x) = \frac{3x^2 + 3}{x^3 + 3x}. \]
provenance: handout-answer
steps:
  - The inner function is \(u(x) = x^3 + 3x\), with \(u'(x) = 3x^2 + 3\).
  - The logarithm rule gives \(\frac{u'(x)}{u(x)}\).
verification:
  checks:
    - expr: 'diff(x**3 + 3*x, x)'
      expected: '3*x**2 + 3'
    - expr: 'diff(log(x**3 + 3*x), x)'
      expected: '(3*x**2 + 3)/(x**3 + 3*x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-13
number: "4.7.13"
tier: standard
topics:
  - quotient-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{\sqrt{\ln(x^2)}}{x}\).
solution: |
  The square root needs \(\ln(x^2) > 0\), that is, \(x^2 > 1\). The function is differentiable for \(|x| > 1\).

  Set \(L(x) = \ln(x^2)\), \(u(x) = \sqrt{L(x)}\) and \(v(x) = x\). The logarithm rule gives
  \[ L'(x) = \frac{2x}{x^2} = \frac{2}{x}. \]
  The square-root rule gives
  \[ u'(x) = \frac{L'(x)}{2\sqrt{L(x)}} = \frac{1}{x\sqrt{L(x)}}. \]
  The quotient rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'(x) \, v(x) - u(x) \, v'(x)}{v(x)^2}\\
  &= \frac{\frac{1}{\sqrt{L}} - \sqrt{L}}{x^2}\\
  &= \frac{1 - L}{x^2 \sqrt{L}}.
  \end{aligned}
  \]
  Replacing \(L\) by \(\ln(x^2)\) gives
  \[ f'(x) = \frac{1 - \ln(x^2)}{x^2 \sqrt{\ln(x^2)}}. \]
provenance: handout-answer
steps:
  - The domain is \(|x| > 1\), where \(\ln(x^2) > 0\).
  - The inner derivative is \(\frac{d}{dx}\ln(x^2) = \frac{2}{x}\), so \(u'(x) = \frac{1}{x\sqrt{\ln(x^2)}}\).
  - The quotient rule gives the numerator \(\frac{1}{\sqrt{L}} - \sqrt{L}\) over \(x^2\).
verification:
  checks:
    - expr: 'diff(log(x**2), x)'
      expected: '2/x'
    - expr: 'diff(sqrt(log(x**2)), x)'
      expected: '1/(x*sqrt(log(x**2)))'
    - expr: 'diff(sqrt(log(x**2))/x, x)'
      expected: '(1 - log(x**2))/(x**2*sqrt(log(x**2)))'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-14
number: "4.7.14"
tier: standard
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \ln(\sec x + \tan x)\).
solution: |
  The inner function is \(u(x) = \sec x + \tan x\). Its derivative uses the derivatives of the secant and the tangent:
  \[
  \begin{aligned}
  u'(x)&= \sec x \tan x + \sec^2 x\\
  &= \sec x \, (\tan x + \sec x).
  \end{aligned}
  \]
  The logarithm rule gives
  \[
  \begin{aligned}
  f'(x)&= \frac{u'(x)}{u(x)}\\
  &= \frac{\sec x \, (\tan x + \sec x)}{\sec x + \tan x}\\
  &= \sec x.
  \end{aligned}
  \]
  The logarithm is defined where \(u(x) > 0\), and the cancellation is valid there.
provenance: handout-answer
steps:
  - The inner derivative factors as \(u'(x) = \sec x \, (\sec x + \tan x)\).
  - The factor \(\sec x + \tan x\) cancels against the denominator \(u(x)\).
verification:
  checks:
    - expr: 'diff(sec(x) + tan(x), x)'
      expected: 'sec(x)*(sec(x) + tan(x))'
    - expr: 'diff(log(sec(x) + tan(x)), x)'
      expected: 'sec(x)'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-16
number: "4.7.16"
tier: basic
topics:
  - product-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = x \ln x\) for \(x > 0\).
solution: |
  Set \(u(x) = x\) and \(v(x) = \ln x\). Then \(u'(x) = 1\) and \(v'(x) = \frac{1}{x}\). The product rule gives
  \[
  \begin{aligned}
  f'(x)&= u'(x) \, v(x) + u(x) \, v'(x)\\
  &= \ln x + x \cdot \frac{1}{x}\\
  &= \ln x + 1.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The derivatives are \(u'(x) = 1\) and \(v'(x) = \frac{1}{x}\).
  - The product rule gives \(\ln x + 1\).
verification:
  checks:
    - expr: 'diff(x*log(x), x)'
      expected: 'log(x) + 1'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-17
number: "4.7.17"
tier: standard
topics:
  - chain-rule
  - derivative-table
statement: |
  Find the derivative of \(f(x) = \ln(\ln(3x))\).
solution: |
  The outer logarithm needs \(\ln(3x) > 0\), that is, \(x > \frac{1}{3}\). Set \(u(x) = \ln(3x)\). The logarithm rule applied twice gives
  \[
  \begin{aligned}
  u'(x)&= \frac{3}{3x} = \frac{1}{x},\\
  f'(x)&= \frac{u'(x)}{u(x)} = \frac{1}{x \ln(3x)}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The domain is \(x > \frac{1}{3}\).
  - The inner derivative is \(\frac{d}{dx}\ln(3x) = \frac{1}{x}\).
  - The outer logarithm rule divides it by \(\ln(3x)\).
verification:
  checks:
    - expr: 'diff(log(3*x), x)'
      expected: '1/x'
    - expr: 'diff(log(log(3*x)), x)'
      expected: '1/(x*log(3*x))'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-18
number: "4.7.18"
tier: standard
topics:
  - quotient-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{1 + \ln(3x^2)}{1 + \ln(4x)}\) for \(x > 0\).
solution: |
  The denominator vanishes when \(\ln(4x) = -1\), that is, at \(x = \frac{1}{4e}\). The function is differentiable for \(x > 0\) with \(x \neq \frac{1}{4e}\).

  Set \(u(x) = 1 + \ln(3x^2)\) and \(v(x) = 1 + \ln(4x)\). The logarithm rule gives
  \[
  \begin{aligned}
  u'(x)&= \frac{6x}{3x^2} = \frac{2}{x},\\
  v'(x)&= \frac{4}{4x} = \frac{1}{x}.
  \end{aligned}
  \]
  The numerator of the quotient rule is
  \[
  \begin{aligned}
  u'v - uv'&= \frac{2}{x}\bigl(1 + \ln(4x)\bigr) - \frac{1}{x}\bigl(1 + \ln(3x^2)\bigr)\\
  &= \frac{1}{x}\bigl(1 + 2\ln(4x) - \ln(3x^2)\bigr).
  \end{aligned}
  \]
  The logarithm laws give \(2\ln(4x) = \ln(16x^2)\), so
  \[ 2\ln(4x) - \ln(3x^2) = \ln\frac{16x^2}{3x^2} = \ln\frac{16}{3}. \]
  The variable cancels from the logarithm. Therefore
  \[ f'(x) = \frac{1 + \ln\frac{16}{3}}{x\bigl(1 + \ln(4x)\bigr)^2}. \]
provenance: written-for-site
steps:
  - The logarithm rule gives \(u'(x) = \frac{2}{x}\) and \(v'(x) = \frac{1}{x}\).
  - The numerator is \(\frac{1}{x}\bigl(1 + 2\ln(4x) - \ln(3x^2)\bigr)\).
  - The logarithm laws reduce the numerator to \(\frac{1}{x}\bigl(1 + \ln\frac{16}{3}\bigr)\).
verification:
  checks:
    - expr: 'diff(log(3*x**2), x)'
      expected: '2/x'
    - expr: 'diff(log(4*x), x)'
      expected: '1/x'
    - expr: 'diff((1 + log(3) + 2*log(x))/(1 + log(4) + log(x)), x)'
      expected: '(1 + log(Rational(16, 3)))/(x*(1 + log(4) + log(x))**2)'
    - expr: 'diff((1 + log(3*x**2))/(1 + log(4*x)), x).subs(x, 1)'
      expected: '(1 + log(Rational(16, 3)))/(1 + log(4))**2'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-19
number: "4.7.19"
tier: exam
topics:
  - product-rule
  - quotient-rule
  - chain-rule
statement: |
  Find the derivative of \(f(x) = \dfrac{x^8 (x - 23)^{1/2}}{27 x^6 (4x - 6)^8}\).
solution: |
  The square root needs \(x \geq 23\). The function is differentiable for \(x > 23\). On this range \(x \neq 0\), so \(\frac{x^8}{x^6} = x^2\) and
  \[ f(x) = \frac{1}{27} \, x^2 (x - 23)^{1/2} (4x - 6)^{-8}. \]
  Set \(u(x) = x^2 (x - 23)^{1/2}\) and \(w(x) = (4x - 6)^{-8}\). The product rule on \(u\) gives
  \[
  \begin{aligned}
  u'(x)&= 2x(x - 23)^{1/2} + \frac{x^2}{2\sqrt{x - 23}}\\
  &= \frac{4x(x - 23) + x^2}{2\sqrt{x - 23}}\\
  &= \frac{x(5x - 92)}{2\sqrt{x - 23}}.
  \end{aligned}
  \]
  The chain rule on \(w\) gives
  \[ w'(x) = -8(4x - 6)^{-9} \cdot 4 = -32(4x - 6)^{-9}. \]
  The product rule on \(\frac{1}{27} u w\) gives
  \[
  \begin{aligned}
  f'(x)&= \frac{1}{27}\bigl(u'w + uw'\bigr)\\
  &= \frac{1}{27}\left(\frac{x(5x - 92)}{2\sqrt{x - 23}\,(4x - 6)^8} - \frac{32x^2 \sqrt{x - 23}}{(4x - 6)^9}\right).
  \end{aligned}
  \]
  The common denominator is \(2\sqrt{x - 23}\,(4x - 6)^9\). The numerator of the combined fraction is
  \[
  \begin{aligned}
  &x(5x - 92)(4x - 6) - 64x^2 (x - 23)\\
  &\quad = x\bigl(20x^2 - 398x + 552 - 64x^2 + 1472x\bigr)\\
  &\quad = x\bigl(-44x^2 + 1074x + 552\bigr)\\
  &\quad = -2x\bigl(22x^2 - 537x - 276\bigr).
  \end{aligned}
  \]
  Cancelling the factor 2 against the denominator gives
  \[ f'(x) = \frac{-x\bigl(22x^2 - 537x - 276\bigr)}{27\sqrt{x - 23}\,(4x - 6)^9}. \]
provenance: written-for-site
steps:
  - Simplifying \(\frac{x^8}{x^6} = x^2\) leaves \(f(x) = \frac{1}{27} x^2 (x - 23)^{1/2} (4x - 6)^{-8}\).
  - The product rule gives \(u'(x) = \frac{x(5x - 92)}{2\sqrt{x - 23}}\) and the chain rule gives \(w'(x) = -32(4x - 6)^{-9}\).
  - The combined numerator is \(-2x(22x^2 - 537x - 276)\) over \(2\sqrt{x - 23}\,(4x - 6)^9\).
verification:
  checks:
    - expr: 'diff(x**2*sqrt(x - 23), x)'
      expected: 'x*(5*x - 92)/(2*sqrt(x - 23))'
    - expr: 'diff((4*x - 6)**(-8), x)'
      expected: '-32*(4*x - 6)**(-9)'
    - expr: 'x*(5*x - 92)*(4*x - 6) - 64*x**2*(x - 23)'
      expected: '-2*x*(22*x**2 - 537*x - 276)'
    - expr: 'diff(x**8*sqrt(x - 23)/(27*x**6*(4*x - 6)**8), x)'
      expected: '-x*(22*x**2 - 537*x - 276)/(27*sqrt(x - 23)*(4*x - 6)**9)'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-20
number: "4.7.20"
tier: standard
topics:
  - derivative-table
  - tangent-line
statement: |
  Find the value of \(a\) so that the tangent line to \(y = \ln x\) at \(x = a\) is a line through the origin. Sketch the resulting situation.
solution: |
  The point of tangency is \((a, \ln a)\) with \(a > 0\). The slope there is \(\frac{d}{dx}\ln x = \frac{1}{a}\). The tangent line is
  \[ y = \ln a + \frac{1}{a}(x - a). \]
  It passes through the origin when \(x = 0\), \(y = 0\) satisfy this equation:
  \[
  \begin{aligned}
  0&= \ln a + \frac{1}{a}(0 - a)\\
  &= \ln a - 1.
  \end{aligned}
  \]
  Hence \(\ln a = 1\), so \(a = e\). The slope is \(\frac{1}{e}\) and the tangent line is
  \[ y = \frac{x}{e}. \]

  The sketch has these features:

  - The graph of \(\ln x\) rises through \((1, 0)\) and bends downward, because \(\frac{d^2}{dx^2}\ln x = -\frac{1}{x^2} < 0\).
  - The line \(y = \frac{x}{e}\) passes through the origin and touches the graph at \((e, 1)\), with slope \(\frac{1}{e}\).
  - The graph bends downward, so it stays below the line everywhere else. The line and the graph meet only at \((e, 1)\).
provenance: handout-answer
steps:
  - The tangent line at \(x = a\) is \(y = \ln a + \frac{1}{a}(x - a)\).
  - Requiring that it pass through \((0, 0)\) gives \(\ln a = 1\), so \(a = e\).
  - The tangent line \(y = \frac{x}{e}\) touches the graph at \((e, 1)\) and lies above it elsewhere.
verification:
  checks:
    - expr: 'solve(log(a) - 1, a)[0]'
      expected: 'exp(1)'
    - expr: '(log(exp(1)) + (x - exp(1))/exp(1))'
      expected: 'x/exp(1)'
    - expr: '(diff(x/exp(1) - log(x), x).subs(x, exp(1)), diff(x/exp(1) - log(x), x, 2).subs(x, exp(1)))'
      expected: '(0, exp(-2))'
:::


::: exercise
id: l1-derivative-rules.handout-4-7-21
number: "4.7.21"
tier: standard
topics:
  - chain-rule
  - derivative-table
statement: |
  If \(f(x) = \ln(x^3 + 2)\), compute \(f'\bigl(e^{1/3}\bigr)\).
solution: |
  The function is defined where \(x^3 + 2 > 0\). For \(u(x) = x^3 + 2\) the logarithm rule gives
  \[ f'(x) = \frac{u'(x)}{u(x)} = \frac{3x^2}{x^3 + 2}. \]
  At \(x = e^{1/3}\) the powers are \(x^3 = e\) and \(x^2 = e^{2/3}\). Therefore
  \[ f'\bigl(e^{1/3}\bigr) = \frac{3e^{2/3}}{e + 2}. \]
provenance: written-for-site
steps:
  - The derivative is \(f'(x) = \frac{3x^2}{x^3 + 2}\).
  - At \(x = e^{1/3}\), \(x^3 = e\) and \(x^2 = e^{2/3}\).
  - The value is \(\frac{3e^{2/3}}{e + 2}\).
verification:
  checks:
    - expr: 'diff(log(x**3 + 2), x)'
      expected: '3*x**2/(x**3 + 2)'
    - expr: 'diff(log(x**3 + 2), x).subs(x, exp(Rational(1, 3)))'
      expected: '3*exp(Rational(2, 3))/(exp(1) + 2)'
:::
