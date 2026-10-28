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
