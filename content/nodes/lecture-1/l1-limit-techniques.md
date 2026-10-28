---
id: l1-limit-techniques
lecture: 1
order: 6
title: Limits at infinity, growth and indeterminate forms
prerequisites: [l1-limits, l1-exp-log]
sources:
  - { source: handout, section: "4.3", page: 77 }
  - { source: handout, section: "4.10", page: 97 }
  - { source: lecture-notes-1, page: 2 }
  - { source: lecture-notes-2, page: 2 }
  - { source: sheet-0, page: 1 }
  - { source: midterm-app }
examWeight: medium
status: reviewed
notation: |
  The arrow \(x \to a\) means that \(x\) approaches \(a\) from both sides. The arrow \(x \to a^{+}\) means that \(x\) approaches \(a\) through values greater than \(a\), and \(x \to a^{-}\) means that \(x\) approaches \(a\) through values less than \(a\). The arrow \(x \to +\infty\) means that \(x\) grows through positive values without a bound. When a sheet writes \(x \to \infty\) for an expression defined for large positive \(x\), that is this same limit.
---

::: section
title: Growth limits
:::

::: formal-statement
kind: theorem
title: Two growth limits
source:
  source: lecture-notes-1
  page: 2
text: |
  \[
  \lim_{x \to 0^{+}} x \ln x = 0, \qquad \lim_{x \to +\infty} x^{r} e^{-x} = 0.
  \]
:::

::: plain-explanation
text: |
  The two limits say:

  - As \(x\) approaches \(0\) through positive values, the product \(x \ln x\) tends to \(0\).
  - As \(x\) grows through positive values, the product \(x^{r} e^{-x}\) tends to \(0\).

  Both values are computed below:

  - The value of the **logarithm limit** is computed under the assumption that the limit exists and is a real number. The substitution there is \(x = t^{2}\).
  - The value of the second limit is computed for a fixed \(r > 0\), which is the case asked on the sheet. The substitution there is \(t = e^{-x}\).
:::

::: visual
kind: limit
caption: |
  Zoom in at 0 and watch \(x \ln x\) dip below the axis and come back to 0.
params:
  f: "x*ln(x)"
  a: 0
:::

::: plain-explanation
text: |
  The two growth limits give quotients that tend to \(0\) for large positive inputs.

  ### From the logarithm limit to a quotient

  Start from \(\lim_{x \to 0^{+}} x \ln x = 0\), obtained under the assumption that the limit exists. Put \(x = 1/u\). As \(x \to 0^{+}\), the variable \(u\) tends to \(+\infty\). Let
  \[
  w(u) = \frac{1}{u} \ln \frac{1}{u}.
  \]
  Then \(w(u)\) is the original product in the variable \(x\), so \(w(u) \to 0\). The logarithm law gives
  \[
  w(u) = -\frac{\ln u}{u}.
  \]
  Let
  \[
  q(u) = \frac{\ln u}{u}.
  \]
  Then \(w(u) = -q(u)\), so \(q(u) \to 0\).

  ### Adding the power r

  Now fix \(r > 0\) and put \(v = u^{r}\). As \(u \to +\infty\), the variable \(v\) tends to \(+\infty\). Let \(q_{r}(u) = \frac{\ln u}{u^{r}}\). Then
  \[
  q_{r}(u) = \frac{1}{r} \cdot \frac{\ln v}{v}.
  \]
  The quotient \(\frac{\ln v}{v}\) tends to \(0\), and the constant \(\frac{1}{r}\) is positive, so \(q_{r}(u)\) tends to \(\frac{1}{r} \cdot 0 = 0\).

  ### The exponential quotient

  From \(\lim_{x \to +\infty} x^{r} e^{-x} = 0\), the quotient \(\frac{x^{r}}{e^{x}}\) tends to \(0\).
:::

::: guided-example
title: The substitution x = t squared
problem: |
  Assume \(\lim_{x \to 0^{+}} x \ln x\) exists. Use \(x = t^{2}\) to find the limit. Work each step on paper before you open it.
steps:
  - |
    Call the limit \(L\). The assumption is that \(L\) is a real number.
  - |
    Substitute \(x = t^{2}\) with \(t > 0\). As \(x \to 0^{+}\), the variable \(t\) tends to \(0^{+}\). The limit in the new variable is still \(L\), because \(t^{2} \ln(t^{2})\) is the original product.
  - |
    Apply \(\ln(t^{2}) = 2 \ln t\). Then
    \[
    \begin{aligned}
    t^{2} \ln(t^{2}) &= t^{2} \cdot 2 \ln t\\
    &= 2t \cdot (t \ln t).
    \end{aligned}
    \]
    The second factor is the original expression with the name \(t\).
  - |
    The factor \(2t\) has limit \(2 \cdot 0 = 0\). The factor \(t \ln t\) has limit \(L\), by the assumption, with the variable renamed. Both limits exist as real numbers, so the product has a limit, and that limit is the product of the limits.
  - |
    Therefore
    \[
    \begin{aligned}
    L &= \lim_{t \to 0^{+}} t^{2} \ln(t^{2})\\
    &= \lim_{t \to 0^{+}} 2t \, (t \ln t)\\
    &= 2 \cdot 0 \cdot L = 0.
    \end{aligned}
    \]
    The limit equals \(0\).
:::

::: worked-example
title: A power times an exponential
problem: |
  For a fixed \(r > 0\), evaluate \(\lim_{x \to +\infty} x^{r} e^{-x}\). Use \(t = e^{-x}\).
solution: |
  Fix \(r > 0\), and write \(g(x) = x^{r} e^{-x}\).

  ### The substitution t = e^(-x)

  Set \(t = e^{-x}\). As \(x \to +\infty\), this \(t\) tends to \(0^{+}\). Solving for the original variable gives \(x = -\ln t\), and the exponential factor is \(e^{-x} = t\). Therefore
  \[
  g(x) = (-\ln t)^{r} \cdot t = t (-\ln t)^{r}.
  \]
  The two sides are equal for each pair \((x, t)\). The limit of \(g(x)\) as \(x \to +\infty\) equals the limit of \(t(-\ln t)^{r}\) as \(t \to 0^{+}\).

  ### The substitution s = t^(1/r)

  Set \(s = t^{1/r}\). Then \(s > 0\), and \(s \to 0^{+}\) as \(t \to 0^{+}\). Also \(t = s^{r}\), so
  \[
  \begin{aligned}
  -\ln t&=-\ln(s^{r})\\
  &=-r \ln s\\
  &=r(-\ln s).
  \end{aligned}
  \]
  Substitute that identity:
  \[
  \begin{aligned}
  t(-\ln t)^{r}&=s^{r} \bigl(r(-\ln s)\bigr)^{r}\\
  &=r^{r} \bigl(s(-\ln s)\bigr)^{r}\\
  &=r^{r} (-s \ln s)^{r}.
  \end{aligned}
  \]
  Let \(u(s) = -s \ln s\). For \(0 < s < 1\), the logarithm \(\ln s\) is negative, so \(u(s)\) is positive.

  ### The limit

  The substitution \(x = t^{2}\) gives \(\lim_{s \to 0^{+}} s \ln s = 0\), under the assumption that this limit exists. Therefore \(\lim_{s \to 0^{+}} u(s) = 0\). For \(r > 0\), the map \(z \mapsto z^{r}\) is continuous at \(0\), with value \(0\). Hence \(u(s)^{r} \to 0\).

  The number \(r^{r}\) is positive and finite. The product \(r^{r} \, u(s)^{r}\) tends to \(r^{r} \cdot 0 = 0\). Therefore \(\lim_{x \to +\infty} x^{r} e^{-x} = 0\).
:::

::: trap
text: |
  The limit of a product is the product of the limits when both limits exist as real numbers. A slogan that skips those limits can name the wrong value.

  ### Three products that equal 1

  - Take \(p(x) = x \cdot \frac{1}{x}\) for \(x > 0\). The first factor tends to \(0\). The second factor tends to \(+\infty\). The product equals \(1\) for every \(x > 0\), so \(\lim_{x \to 0^{+}} p(x) = 1\). The slogan that \(0\) times infinity is zero answers \(0\) for \(p\). The limit is \(1\).
  - Take \(q(x) = \ln x \cdot \frac{1}{\ln x}\) for \(0 < x < 1\). Here \(\ln x \to -\infty\). The product equals \(1\) for every such \(x\), so the limit is \(1\). The slogan that \(\ln x\) goes to \(-\infty\), so the product is zero, answers \(0\). The limit is \(1\).
  - Take \(e^{-x} \cdot e^{x}\). The factor \(e^{-x}\) tends to \(0\). The product equals \(1\) for every \(x\), so the limit is \(1\). Answering \(0\) because \(e^{-x}\) tends to \(0\) gives the value \(0\). The limit is \(1\).

  ### What gives the right value

  - For \(\lim_{x \to 0^{+}} x \ln x\), assume the limit is a real number \(L\). The substitution \(x = t^{2}\) gives \(L = 2 \cdot 0 \cdot L\), so \(L = 0\).
  - For \(\lim_{x \to +\infty} x^{r} e^{-x}\) with \(r > 0\), the substitution \(t = e^{-x}\) reduces the expression to a power of \(s \ln s\), and that power tends to \(0\).
:::

::: key-points
text: |
  - \(\lim_{x \to 0^{+}} x \ln x = 0\). The argument assumes that the limit is a real number \(L\), and the substitution \(x = t^{2}\) then gives \(L = 2 \cdot 0 \cdot L = 0\).
  - \(\lim_{x \to +\infty} x^{r} e^{-x} = 0\) for every fixed \(r > 0\). The substitution is \(t = e^{-x}\).
  - The product law needs both limits to exist as real numbers. The slogan that \(0\) times infinity is zero fails for \(x \cdot \frac{1}{x}\), whose limit as \(x \to 0^{+}\) is \(1\).
:::

::: concept-question
id: l1-limit-techniques.q-beecd86c
question: |
  Using the substitution \(x = t^{2}\), find \(\lim_{x \to 0^{+}} x\ln x\).
options:
  - text: |
      \(0\)
    correct: true
  - text: |
      \(-\infty\)
  - text: |
      \(-1\)
  - text: |
      Does not exist.
explanation: |
  Assume the limit exists and equals a real number \(L\). With \(x = t^{2}\) and \(t \to 0^{+}\), the expression is
  \[
  t^{2}\ln(t^{2}) = 2t(t\ln t).
  \]
  The factor \(2t\) tends to \(0\) and the factor \(t\ln t\) tends to \(L\), so
  \[
  L = 2 \cdot 0 \cdot L = 0.
  \]
:::

::: concept-question
id: l1-limit-techniques.q-3b143052
question: |
  For \(r > 0\), evaluate \(\lim_{x \to +\infty} x^{r} e^{-x}\).
options:
  - text: |
      \(0\)
    correct: true
  - text: |
      \(+\infty\)
  - text: |
      \(1\)
  - text: |
      Depends on \(r\).
explanation: |
  The exponential \(e^{x}\) outgrows every power \(x^{r}\), so \(\frac{x^{r}}{e^{x}} \to 0\) for every fixed \(r > 0\).
:::

::: concept-question
id: l1-limit-techniques.q-e916e988
question: |
  Evaluate \(\lim_{x \to 0^{+}} \frac{x - 1}{\ln x}\).
options:
  - text: |
      \(0\)
    correct: true
  - text: |
      \(1\)
  - text: |
      \(-\infty\)
  - text: |
      \(+\infty\)
explanation: |
  The numerator tends to \(-1\) while \(\ln x \to -\infty\), so the quotient tends to \(0\).
:::

::: concept-question
id: l1-limit-techniques.q-57ddd117
question: |
  Evaluate \(\lim_{x \to +\infty} \frac{\ln x}{x^{0.01}}\).
options:
  - text: |
      \(0\)
    correct: true
  - text: |
      \(+\infty\)
  - text: |
      \(1\)
  - text: |
      \(100\)
explanation: |
  For every fixed \(r > 0\), \(\frac{\ln x}{x^{r}} \to 0\) as \(x \to +\infty\), because a positive power outgrows the logarithm however small the exponent is. Here \(r = 0.01\), so the limit is \(0\). The small exponent only delays the point at which the power overtakes \(\ln x\).
:::

::: section
title: Standard limits at zero and the squeeze theorem
:::

::: formal-statement
kind: theorem
title: A standard sine limit
source:
  source: handout
  section: "4.3"
  page: "78-79"
text: |
  \[
  \lim_{x \to 0} \frac{\sin x}{x} = 1.
  \]
:::

::: plain-explanation
text: |
  For a constant \(k\), rewrite
  \[
  \frac{\sin(kx)}{x} = k \cdot \frac{\sin(kx)}{kx}.
  \]
  Let \(u = kx\). As \(x \to 0\), the variable \(u\) tends to \(0\), so \(\frac{\sin u}{u}\) tends to \(1\). The product tends to \(k \cdot 1 = k\).

  The tangent form uses the same limit. For \(x \neq 0\),
  \[
  \frac{\tan x}{x} = \frac{\sin x}{x} \cdot \frac{1}{\cos x}.
  \]
  The first factor tends to \(1\). The second factor tends to \(1\), because \(\cos x \to 1\). The product tends to \(1\).
:::

::: formal-statement
kind: theorem
title: A cosine companion
source:
  source: handout
  section: "4.3"
  page: "79-80"
text: |
  \[
  \lim_{x \to 0} \frac{\cos x - 1}{x} = 0.
  \]
:::

::: plain-explanation
text: |
  Let \(c(x) = \frac{\cos x - 1}{x}\) for \(x \neq 0\). Multiply the numerator and the denominator by \(\cos x + 1\). The new numerator is
  \[
  \cos^{2} x - 1 = -\sin^{2} x.
  \]
  Therefore
  \[
  c(x) = -\frac{\sin x}{x} \cdot \frac{\sin x}{\cos x + 1}.
  \]
  - Let \(A(x) = \frac{\sin x}{x}\). Then \(A(x) \to 1\) as \(x \to 0\).
  - Let \(B(x) = \frac{\sin x}{\cos x + 1}\). The numerator \(\sin x\) tends to \(0\), and the denominator \(\cos x + 1\) tends to \(2\), so \(B(x) \to 0\).

  The product \(-A(x) B(x)\) tends to \(-(1)(0) = 0\). So \(c(x) \to 0\).
:::

::: formal-statement
kind: theorem
title: Squeeze theorem
source:
  source: handout
  section: "4.3"
  page: 77
text: |
  Suppose that

  - \(g(x) \le f(x) \le h(x)\) for all \(x\) close to \(a\) but not equal to \(a\), and
  - \(\lim_{x \to a} g(x) = L = \lim_{x \to a} h(x)\).

  Then
  \[
  \lim_{x \to a} f(x) = L.
  \]
:::

::: plain-explanation
text: |
  The lower function and the upper function have the same limit \(L\). The function sitting between them has limit \(L\) as well.

  ### The product x sin(1/x)

  For the product \(x \sin(1/x)\):

  1. Bound the sine first. Sine takes values in \([-1, 1]\), so \(\bigl|\sin(1/x)\bigr| \le 1\) for every \(x \neq 0\).
  2. The absolute value of the product is then at most \(|x|\). In two-sided form,
     \[
     -|x| \le x \sin(1/x) \le |x|.
     \]

  Both \(-|x|\) and \(|x|\) tend to \(0\) as \(x \to 0\), so the squeeze theorem forces the product to tend to \(0\).

  The same pattern gives \(\lim_{x \to 0} x^{2} \sin(\pi/x) = 0\). The inequality is
  \[
  -x^{2} \le x^{2} \sin(\pi/x) \le x^{2},
  \]
  and both bounding functions tend to \(0\).
:::

::: visual
kind: limit
caption: |
  The curve \(x \sin(1/x)\) swings faster and faster near 0, but it stays between \(-|x|\) and \(|x|\). Zoom in and watch it get squeezed to 0.
params:
  f: "x*sin(1/x)"
  a: 0
:::

::: worked-example
title: Squeezing a product
problem: |
  Evaluate \(\lim_{x \to 0} x \sin(1/x)\).
solution: |
  Let \(f(x) = x \sin(1/x)\) for \(x \neq 0\). Sine takes values in \([-1, 1]\), so \(\bigl|\sin(1/x)\bigr| \le 1\) for every such \(x\). Multiply by the positive number \(|x|\). The absolute value of the product satisfies
  \[
  \bigl|f(x)\bigr| \le |x|.
  \]
  That is the two-sided bound
  \[
  -|x| \le f(x) \le |x|.
  \]
  Let \(g(x) = -|x|\) and \(h(x) = |x|\). Then \(g(x) \to 0\) as \(x \to 0\), and \(h(x) \to 0\) as \(x \to 0\). The squeeze theorem forces \(f(x) \to 0\). The limit is \(0\).
:::

::: trap
text: |
  As \(x \to 0\), the values of \(\sin(1/x)\) keep cycling through the interval \([-1, 1]\), so \(\sin(1/x)\) has no limit at \(0\). The product \(x \sin(1/x)\) has limit \(0\), because its absolute value is at most \(|x|\) and the squeeze theorem applies. The claim that \(\sin(1/x)\) has no limit, so the product has no limit, gives no value. The squeeze theorem gives the value \(0\).
:::

::: key-points
text: |
  - \(\lim_{x \to 0} \frac{\sin x}{x} = 1\), so \(\lim_{x \to 0} \frac{\sin(kx)}{x} = k\) for a constant \(k\), and \(\lim_{x \to 0} \frac{\cos x - 1}{x} = 0\).
  - The squeeze theorem needs \(g(x) \le f(x) \le h(x)\) near \(a\), and the same limit \(L\) for \(g\) and \(h\). Then \(f\) tends to \(L\).
  - The function \(\sin(1/x)\) has no limit at \(0\), but \(x \sin(1/x)\) has limit \(0\), because its absolute value is at most \(|x|\).
:::

::: going-deeper
title: Areas behind sin x / x
text: |
  The limit \(\lim_{x \to 0} \frac{\sin x}{x} = 1\) is proved by comparing areas on the unit circle. For a small positive angle \(x\), a right triangle lies inside the circular sector, and the sector lies inside a larger triangle of height \(\tan x\). Comparing those areas produces
  \[
  \cos x \le \frac{\sin x}{x} \le \frac{1}{\cos x}.
  \]
  As \(x \to 0\), the lower function \(\cos x\) tends to \(1\), and the upper function \(\frac{1}{\cos x}\) tends to \(1\). The squeeze theorem forces \(\frac{\sin x}{x}\) to tend to \(1\).

  The quotient \(\frac{\sin x}{x}\) takes the same value at \(-x\) as at \(x\). The two-sided limit follows from the inequality on the positive side.
:::

::: concept-question
id: l1-limit-techniques.q-964df528
question: |
  Evaluate \(\lim_{x \to 1} \frac{x - 1}{\ln x}\).
options:
  - text: |
      \(1\)
    correct: true
  - text: |
      \(0\)
  - text: |
      \(+\infty\)
  - text: |
      Does not exist.
explanation: |
  Both parts vanish at \(x = 1\). Putting \(x = 1 + u\), \(\ln(1 + u)\) is asymptotic to \(u\) for small \(u\), so the ratio tends to \(1\).
:::

::: concept-question
id: l1-limit-techniques.q-b7cc2189
question: |
  Evaluate \(\lim_{x \to 0^{+}} \frac{\sqrt{x}}{\tan x}\).
options:
  - text: |
      \(+\infty\)
    correct: true
  - text: |
      \(0\)
  - text: |
      \(1\)
  - text: |
      \(\frac{1}{2}\)
explanation: |
  Near \(0\), \(\frac{\tan x}{x} \to 1\), so the quotient behaves like \(\frac{\sqrt{x}}{x} = \frac{1}{\sqrt{x}}\), which tends to \(+\infty\). The right-hand limit is the one that makes sense, because \(\sqrt{x}\) needs \(x \ge 0\).
:::

::: exercise
id: l1-limit-techniques.sin-over-x
tier: basic
topics: [standard-limits]
statement: |
  Evaluate \(\lim_{x \to 0} \frac{\sin(3x)}{x}\).
solution: |
  Rewrite the quotient as
  \[
  \frac{\sin(3x)}{x} = 3 \cdot \frac{\sin(3x)}{3x}.
  \]
  Let \(u = 3x\). As \(x \to 0\), the variable \(u\) tends to \(0\), so \(\frac{\sin u}{u}\) tends to \(1\). The product tends to \(3 \cdot 1 = 3\). The limit is \(3\).
provenance: written-for-site
steps:
  - Rewrite the quotient as \(3\) times \(\sin(3x)/(3x)\).
  - The standard sine limit gives \(1\), so the product equals \(3\).
verification:
  checks:
    - expr: "limit(sin(3*x)/x, x, 0)"
      expected: "3"
:::

::: section
title: Limits at infinity
:::

::: plain-explanation
text: |
  Take
  \[
  \frac{\sqrt{x + 1} + \sqrt{x - 1}}{x}\quad\text{as } x \to +\infty.
  \]

  1. Factor \(x\) out of each square root. The numerator becomes \(\sqrt{x}\) times a sum of square roots of expressions in \(1/x\).
  2. Dividing by \(x\) leaves \(\frac{1}{\sqrt{x}}\) times that sum.

  The first factor has an algebraic limit. The second factor has a limit by continuity of the square root.
:::

::: visual
kind: limit
caption: |
  Follow the graph to large \(x\). It comes down to the axis, which shows the limit \(0\).
params:
  f: "(sqrt(x+1)+sqrt(x-1))/x"
  a: 0
  approach: plus-infinity
:::

::: worked-example
title: Factoring x out of the square roots
problem: |
  Evaluate \(\lim_{x \to \infty} \frac{\sqrt{x + 1} + \sqrt{x - 1}}{x}\).
solution: |
  Let \(q(x) = \frac{\sqrt{x + 1} + \sqrt{x - 1}}{x}\) for \(x > 1\). The arrow \(x \to \infty\) on this expression is the limit through large positive \(x\), because the square roots are defined for \(x \ge 1\).

  Factor \(x\) out of each square root. Then
  \[
  \begin{aligned}
  \sqrt{x + 1}&=\sqrt{x \bigl(1 + \frac{1}{x}\bigr)}=\sqrt{x} \, \sqrt{1 + \frac{1}{x}},\\
  \sqrt{x - 1}&=\sqrt{x} \, \sqrt{1 - \frac{1}{x}}.
  \end{aligned}
  \]
  The numerator equals \(\sqrt{x} \Bigl(\sqrt{1 + \frac{1}{x}} + \sqrt{1 - \frac{1}{x}}\Bigr)\). Divide by \(x\):
  \[
  q(x) = \frac{1}{\sqrt{x}} \left(\sqrt{1 + \frac{1}{x}} + \sqrt{1 - \frac{1}{x}}\right).
  \]
  - Let \(A(x) = \frac{1}{\sqrt{x}}\). Then \(A(x) \to 0\) as \(x \to +\infty\).
  - Let \(B(x) = \sqrt{1 + \frac{1}{x}} + \sqrt{1 - \frac{1}{x}}\). Continuity of the square root gives \(B(x) \to \sqrt{1} + \sqrt{1} = 2\).

  The product \(A(x) B(x)\) tends to \(0 \cdot 2 = 0\). Therefore \(q(x) \to 0\).
:::

::: key-points
text: |
  - To find \(\lim_{x \to \infty} \frac{\sqrt{x + 1} + \sqrt{x - 1}}{x}\), factor \(x\) out of each square root. The quotient becomes \(\frac{1}{\sqrt{x}}\) times a factor that tends to \(2\), so the limit is \(0\).
  - The arrow \(x \to \infty\) on this expression is the limit through large positive \(x\), because the square roots are defined for \(x \ge 1\).
:::

::: going-deeper
title: Infinite limits and limits at infinity
text: |
  If \(f\) is a function, we say that \(\lim_{x \to a} f(x) = \infty\) if for every \(N > 0\) there is a \(\delta > 0\) such that whenever \(|x - a| < \delta\), \(f(x) > N\). This extends in the obvious ways to \(\lim_{x \to a} f(x) = -\infty\), to \(\lim_{x \to a^{-}} f(x) = \pm\infty\), and to \(\lim_{x \to a^{+}} f(x) = \pm\infty\).

  If \(f\) is a function, we say that \(\lim_{x \to \infty} f(x) = L\) if for every \(\varepsilon > 0\) there is an \(N > 0\) so that whenever \(x > N\), \(|f(x) - L| < \varepsilon\). The same clause defines \(\lim_{x \to -\infty} f(x) = L\), and it defines \(\lim_{x \to \pm\infty} f(x) = \pm\infty\).
:::

::: concept-question
id: l1-limit-techniques.q-1b6de50c
question: |
  Evaluate \(\lim_{x \to \infty} \frac{\sqrt{x + 1} + \sqrt{x - 1}}{x}\).
options:
  - text: |
      \(0\)
    correct: true
  - text: |
      \(1\)
  - text: |
      \(2\)
  - text: |
      \(+\infty\)
explanation: |
  The numerator grows like \(2\sqrt{x}\) while the denominator grows like \(x\), so the quotient behaves like \(\frac{2}{\sqrt{x}}\) and tends to \(0\).
:::

::: concept-question
id: l1-limit-techniques.q-914d151e
question: |
  Evaluate \(\lim_{x \to \infty} e^{1/x}\).
options:
  - text: |
      \(1\)
    correct: true
  - text: |
      \(0\)
  - text: |
      \(+\infty\)
  - text: |
      \(e\)
explanation: |
  \(\frac{1}{x} \to 0\) and the exponential is continuous, so the limit is \(e^{0} = 1\).
:::

::: exercise
id: l1-limit-techniques.sheet-0-3-7
number: "sheet 0 exercise 3.7"
tier: standard
topics: [limits-at-infinity]
statement: |
  Does \(\lim_{x \to \infty} \frac{\sqrt{x + 1} + \sqrt{x - 1}}{x}\) exist? If it does, find its value. Say where the formula is continuous.
solution: |
  Let \(q(x) = \frac{\sqrt{x + 1} + \sqrt{x - 1}}{x}\) for \(x > 1\). The limit \(x \to \infty\) is taken through large positive \(x\).

  Factor \(x\) out of each square root. Then
  \[
  \begin{aligned}
  \sqrt{x + 1}&=\sqrt{x} \, \sqrt{1 + \frac{1}{x}},\\
  \sqrt{x - 1}&=\sqrt{x} \, \sqrt{1 - \frac{1}{x}}.
  \end{aligned}
  \]
  Dividing the numerator by \(x\) gives
  \[
  q(x) = \frac{1}{\sqrt{x}} \left(\sqrt{1 + \frac{1}{x}} + \sqrt{1 - \frac{1}{x}}\right).
  \]
  - Let \(A(x) = \frac{1}{\sqrt{x}}\). Then \(A(x) \to 0\) as \(x \to +\infty\).
  - Let \(B(x) = \sqrt{1 + \frac{1}{x}} + \sqrt{1 - \frac{1}{x}}\). Then \(B(x) \to 2\).

  The product \(A(x) B(x)\) tends to \(0 \cdot 2 = 0\). The limit exists and equals \(0\).

  For each \(x > 1\) the formula is a quotient of continuous functions and the denominator is not \(0\), so \(q\) is continuous at each such \(x\).
provenance: written-for-site
steps:
  - Factor \(x\) out of each square root and divide by \(x\).
  - The first factor tends to \(0\) and the second factor tends to \(2\), so the product tends to \(0\).
  - The formula is continuous for every \(x > 1\).
verification:
  checks:
    - expr: "limit((sqrt(x+1)+sqrt(x-1))/x, x, oo)"
      expected: "0"
:::

::: exercise
id: l1-limit-techniques.sheet-0-3-6
number: "sheet 0 exercise 3.6"
tier: exam
topics: [squeeze]
statement: |
  Does \(\lim_{x \to 0} x \sin(1/x)\) exist? If it does, find its value. Say where \(x \sin(1/x)\) is continuous.
solution: |
  Let \(f(x) = x \sin(1/x)\) for \(x \neq 0\). Sine takes values in \([-1, 1]\), so \(\bigl|\sin(1/x)\bigr| \le 1\). The absolute value of the product satisfies \(\bigl|f(x)\bigr| \le |x|\), which is the bound
  \[
  -|x| \le f(x) \le |x|.
  \]
  Both \(-|x|\) and \(|x|\) tend to \(0\) as \(x \to 0\). The squeeze theorem forces \(f(x) \to 0\). The limit exists and equals \(0\).

  The formula is a product of continuous functions at each \(x \neq 0\), so it is continuous there. It has no value at \(0\). The function that equals \(f(x)\) for \(x \neq 0\) and equals \(0\) at \(0\) is continuous at \(0\), because the limit equals that value.
provenance: written-for-site
steps:
  - Bound \(\bigl|\sin(1/x)\bigr|\) by \(1\), so the absolute value of the product is at most \(|x|\).
  - Squeeze between \(-|x|\) and \(|x|\) to get the limit \(0\).
  - The formula is continuous for \(x \neq 0\), and the value \(0\) at \(x = 0\) matches the limit.
verification:
  checks:
    - expr: "limit(x*sin(1/x), x, 0)"
      expected: "0"
:::

::: exercise
id: l1-limit-techniques.sheet-0-3-8
number: "sheet 0 exercise 3.8"
tier: exam
topics: [growth]
statement: |
  Assume \(\lim_{x \to 0^{+}} x \ln x\) exists. Use the substitution \(x = t^{2}\) to find the limit. Say where \(x \ln x\) is continuous.
solution: |
  Assume the limit exists, and call its value \(L\). Then \(L\) is a real number. Substitute \(x = t^{2}\) with \(t > 0\). As \(x \to 0^{+}\), the variable \(t\) tends to \(0^{+}\). The logarithm law \(\ln(t^{2}) = 2 \ln t\) gives
  \[
  t^{2} \ln(t^{2}) = 2t \cdot (t \ln t).
  \]
  The factor \(2t\) has limit \(2 \cdot 0 = 0\). The factor \(t \ln t\) has limit \(L\), because it is the original product with the variable renamed. Both limits exist, so
  \[
  L = \lim_{t \to 0^{+}} 2t \, (t \ln t) = 2 \cdot 0 \cdot L = 0.
  \]
  The limit equals \(0\).

  On \((0, \infty)\) the formula \(x \ln x\) is a product of continuous functions, so it is continuous at each such \(x\). It is undefined at \(0\).
provenance: written-for-site
steps:
  - Assume the limit is a real number \(L\), and substitute \(x = t^{2}\).
  - Regroup the product as \(2t\) times \(t \ln t\).
  - The first factor tends to \(0\) and the second tends to \(L\), so \(L = 0\).
verification:
  checks:
    - expr: "limit(x*log(x), x, 0, dir='+')"
      expected: "0"
:::

::: exercise
id: l1-limit-techniques.sheet-0-3-9
number: "sheet 0 exercise 3.9"
tier: exam
topics: [growth]
statement: |
  Let \(r > 0\). Does \(\lim_{x \to +\infty} x^{r} e^{-x}\) exist? If it does, find its value. Use the hint \(t = e^{-x}\). Say where the formula is continuous for \(x > 0\).
solution: |
  Fix \(r > 0\), and write \(g(x) = x^{r} e^{-x}\). Set \(t = e^{-x}\). As \(x \to +\infty\), this \(t\) tends to \(0^{+}\), and \(x = -\ln t\). Then
  \[
  g(x) = t(-\ln t)^{r}.
  \]
  The limit of \(g\) equals the limit of that expression as \(t \to 0^{+}\).

  Set \(s = t^{1/r}\), so \(t = s^{r}\) and \(s \to 0^{+}\). Then \(-\ln t = r(-\ln s)\), and
  \[
  t(-\ln t)^{r} = r^{r} (-s \ln s)^{r}.
  \]
  Let \(u(s) = -s \ln s\). For \(0 < s < 1\), this \(u(s)\) is positive. From the square substitution, \(\lim_{s \to 0^{+}} s \ln s = 0\) when that limit exists, so \(u(s) \to 0\). The power \(u(s)^{r}\) tends to \(0\), because \(z \mapsto z^{r}\) is continuous at \(0\) for \(r > 0\). The number \(r^{r}\) is positive and finite, so \(r^{r} \, u(s)^{r}\) tends to \(0\). The limit of \(g\) exists and equals \(0\).

  For each fixed \(r > 0\), the formula \(x^{r} e^{-x}\) is continuous at each \(x > 0\).
provenance: written-for-site
steps:
  - Substitute \(t = e^{-x}\), so the expression becomes \(t(-\ln t)^{r}\) as \(t \to 0^{+}\).
  - Set \(s = t^{1/r}\) and rewrite the expression as \(r^{r}(-s \ln s)^{r}\).
  - Use \(\lim_{s \to 0^{+}} s \ln s = 0\) to conclude that the power tends to \(0\).
verification:
  checks:
    - expr: "limit(x**r * exp(-x), x, oo)"
      expected: "0"
    - expr: "limit(t*(-log(t))**r, t, 0, dir='+')"
      expected: "0"
:::

::: sheet-item
id: l1-limit-techniques.sheet-sin-over-x
category: formula
text: |
  - \(\lim_{x \to 0} \frac{\sin x}{x} = 1\).
  - For a constant \(k\), \(\lim_{x \to 0} \frac{\sin(kx)}{x} = k\).
:::

::: sheet-item
id: l1-limit-techniques.sheet-growth
category: formula
text: |
  - \(\lim_{x \to 0^{+}} x \ln x = 0\), assuming the limit exists, by the substitution \(x = t^{2}\).
  - For \(r > 0\), \(\lim_{x \to +\infty} x^{r} e^{-x} = 0\), by the substitution \(t = e^{-x}\).
:::

::: sheet-item
id: l1-limit-techniques.sheet-invalid-product
category: trap
text: |
  "\(0\) times infinity is zero" is not a limit computation. The product \(x \cdot (1/x)\) tends to \(1\) as \(x \to 0^{+}\). For \(x \ln x\) as \(x \to 0^{+}\), assume a real limit \(L\) and substitute \(x = t^{2}\), which forces \(L = 0\).
:::

::: exercise
id: l1-limit-techniques.ex-log-quotient-at-one
tier: exam
topics: [limits, derivative-definition, logarithms]
statement: |
  (a) Evaluate \(\lim_{x\to 1}\dfrac{x-1}{\ln x}\).

  (b) Use (a) to evaluate \(\lim_{x\to 1}\dfrac{x^{2}-1}{\ln x}\).
solution: |
  (a) Both \(x-1\) and \(\ln x\) tend to \(0\) as \(x\to 1\), so the quotient law does not apply to the fraction. Put \(x=1+u\), so \(u\to 0\) as \(x\to 1\) and \(u\neq 0\) near the limit. Then
  \[
  \frac{\ln x}{x-1}=\frac{\ln(1+u)}{u}=\frac{\ln(1+u)-\ln 1}{u}.
  \]
  The right side is the difference quotient of \(\ln\) at \(1\). Its limit as \(u\to 0\) is the derivative of \(\ln\) at \(1\), which is \(\frac{1}{1}=1\). The limit of \(\frac{\ln x}{x-1}\) is \(1\), which is not \(0\). Therefore the quotient law applies to the reciprocal, and
  \[
  \lim_{x\to 1}\frac{x-1}{\ln x}=\frac{1}{1}=1.
  \]

  (b) For \(x\neq 1\) near \(1\), factor \(x^{2}-1=(x-1)(x+1)\). Then
  \[
  \frac{x^{2}-1}{\ln x}=(x+1)\cdot\frac{x-1}{\ln x}.
  \]
  The factor \(x+1\) tends to \(2\), and the factor \(\frac{x-1}{\ln x}\) tends to \(1\) by (a). Both limits are real numbers, so the product tends to \(2\cdot 1=2\).
provenance: written-for-site
steps:
  - Substitute \(x=1+u\) and recognise \(\frac{\ln(1+u)-\ln 1}{u}\) as a difference quotient of \(\ln\) at \(1\).
  - Conclude that \(\frac{\ln x}{x-1}\to 1\), so \(\frac{x-1}{\ln x}\to 1\).
  - Factor \(x^{2}-1=(x-1)(x+1)\) and apply the product law to get \(2\).
verification:
  checks:
    - expr: limit((x - 1)/log(x), x, 1)
      expected: "1"
    - expr: limit(log(1 + u)/u, u, 0)
      expected: "1"
    - expr: limit((x**2 - 1)/log(x), x, 1)
      expected: "2"
:::

::: exercise
id: l1-limit-techniques.ex-root-limits-at-infinity
tier: standard
topics: [limits-at-infinity]
statement: |
  Evaluate each limit, taking \(x\to+\infty\).

  (a) \(\lim_{x\to+\infty}\dfrac{\sqrt{x+1}+\sqrt{x-1}}{\sqrt{x}}\)

  (b) \(\lim_{x\to+\infty}\left(\sqrt{x^{2}+x}-x\right)\)
solution: |
  (a) For \(x>1\), factor \(x\) out of each radicand:
  \[
  \begin{aligned}
  \sqrt{x+1}&=\sqrt{x}\,\sqrt{1+\frac{1}{x}},\\
  \sqrt{x-1}&=\sqrt{x}\,\sqrt{1-\frac{1}{x}}.
  \end{aligned}
  \]
  The factor \(\sqrt{x}\) cancels against the denominator:
  \[
  \begin{aligned}
  \frac{\sqrt{x+1}+\sqrt{x-1}}{\sqrt{x}}&=\sqrt{1+\frac{1}{x}}\\
  &\quad+\sqrt{1-\frac{1}{x}}.
  \end{aligned}
  \]
  As \(x\to+\infty\), \(\frac{1}{x}\to 0\). The square root is continuous at \(1\), so the limit is \(\sqrt{1}+\sqrt{1}=2\).

  (b) Both terms tend to \(+\infty\), so the difference has no value from the limit laws. Multiply and divide by the conjugate \(\sqrt{x^{2}+x}+x\), which is positive for \(x>0\). The numerator becomes \((x^{2}+x)-x^{2}=x\), so
  \[
  \sqrt{x^{2}+x}-x=\frac{x}{\sqrt{x^{2}+x}+x}.
  \]
  Divide the numerator and the denominator by \(x\). For \(x>0\), \(\frac{\sqrt{x^{2}+x}}{x}=\sqrt{1+\frac{1}{x}}\), so
  \[
  \frac{x}{\sqrt{x^{2}+x}+x}=\frac{1}{\sqrt{1+\frac{1}{x}}+1}.
  \]
  As \(x\to+\infty\), the denominator tends to \(\sqrt{1}+1=2\). The limit is \(\frac{1}{2}\).
provenance: written-for-site
steps:
  - In (a), factor \(\sqrt{x}\) out of the numerator and cancel it.
  - In (a), use continuity of the square root to get \(2\).
  - In (b), multiply by the conjugate to get \(\frac{x}{\sqrt{x^{2}+x}+x}\).
  - In (b), divide by \(x\) and take the limit \(\frac{1}{2}\).
verification:
  checks:
    - expr: limit((sqrt(x + 1) + sqrt(x - 1))/sqrt(x), x, oo)
      expected: "2"
    - expr: limit(sqrt(x**2 + x) - x, x, oo)
      expected: "1/2"
    - expr: simplify((sqrt(x**2 + x) - x)*(sqrt(x**2 + x) + x))
      expected: x
:::

::: exercise
id: l1-limit-techniques.ex-growth-variants
tier: exam
topics: [growth, squeeze]
statement: |
  Evaluate each limit. You may use \(\lim_{x\to 0^{+}}x\ln x=0\) and \(\lim_{x\to+\infty}x^{r}e^{-x}=0\) for \(r>0\).

  (a) \(\lim_{x\to 0^{+}}x^{2}\ln x\)

  (b) \(\lim_{x\to+\infty}x^{3}e^{-2x}\)

  (c) \(\lim_{x\to 0}x\cos\dfrac{1}{x^{2}}\)
solution: |
  (a) Write
  \[
  x^{2}\ln x=x\cdot(x\ln x).
  \]
  The factor \(x\) tends to \(0\) and the factor \(x\ln x\) tends to \(0\). Both limits are real numbers, so the product tends to \(0\cdot 0=0\).

  (b) Put \(t=2x\). As \(x\to+\infty\), \(t\to+\infty\). Then \(x=\frac{t}{2}\) and
  \[
  x^{3}e^{-2x}=\frac{t^{3}}{8}e^{-t}=\frac{1}{8}\,t^{3}e^{-t}.
  \]
  The limit \(\lim_{t\to+\infty}t^{3}e^{-t}\) is \(0\), by the given limit with \(r=3\). The constant factor \(\frac{1}{8}\) keeps the limit at \(0\).

  (c) The cosine has no limit at \(0\), so the product law does not apply. Instead use \(\bigl|\cos\frac{1}{x^{2}}\bigr|\leq 1\) for \(x\neq 0\). It follows that
  \[
  -|x|\leq x\cos\frac{1}{x^{2}}\leq |x|.
  \]
  Both bounds tend to \(0\) as \(x\to 0\), so the squeeze theorem gives the limit \(0\).
provenance: written-for-site
steps:
  - In (a), split \(x^{2}\ln x\) as \(x\) times \(x\ln x\).
  - In (b), substitute \(t=2x\) and use the limit with \(r=3\).
  - In (c), bound the cosine by \(1\) and squeeze between \(-|x|\) and \(|x|\).
verification:
  checks:
    - expr: limit(x**2*log(x), x, 0, dir='+')
      expected: "0"
    - expr: limit(x**3*exp(-2*x), x, oo)
      expected: "0"
    - expr: limit(x*cos(1/x**2), x, 0)
      expected: "0"
:::

::: exercise
id: l1-limit-techniques.ex-standard-limits
tier: standard
topics: [standard-limits]
statement: |
  Evaluate each limit.

  (a) \(\lim_{x\to 0}\dfrac{\tan(2x)}{\sin(5x)}\)

  (b) \(\lim_{x\to 0}\dfrac{1-\cos x}{x^{2}}\)
solution: |
  (a) For \(x\neq 0\) near \(0\), write \(\tan(2x)=\frac{\sin(2x)}{\cos(2x)}\) and split the quotient:
  \[
  \begin{aligned}
  \frac{\tan(2x)}{\sin(5x)}&=\frac{\sin(2x)}{2x}\cdot\frac{5x}{\sin(5x)}\\
  &\quad\cdot\frac{2}{5}\cdot\frac{1}{\cos(2x)}.
  \end{aligned}
  \]

  - The first factor tends to \(1\).
  - The second factor is the reciprocal of \(\frac{\sin(5x)}{5x}\), so it tends to \(1\).
  - The last factor \(\frac{1}{\cos(2x)}\) tends to \(1\).

  All limits are real numbers, so the product tends to \(\frac{2}{5}\).

  (b) Multiply the numerator and the denominator by \(1+\cos x\). The numerator becomes \(1-\cos^{2}x=\sin^{2}x\), so
  \[
  \frac{1-\cos x}{x^{2}}=\left(\frac{\sin x}{x}\right)^{2}\cdot\frac{1}{1+\cos x}.
  \]
  - The first factor tends to \(1^{2}=1\).
  - The second factor tends to \(\frac{1}{1+1}=\frac{1}{2}\).

  The limit is \(\frac{1}{2}\).
provenance: written-for-site
steps:
  - In (a), rewrite with the factors \(\frac{\sin(2x)}{2x}\) and \(\frac{5x}{\sin(5x)}\) and the constant \(\frac{2}{5}\).
  - In (b), multiply by \(1+\cos x\) to reach \(\sin^{2}x\).
verification:
  checks:
    - expr: limit(tan(2*x)/sin(5*x), x, 0)
      expected: 2/5
    - expr: limit((1 - cos(x))/x**2, x, 0)
      expected: 1/2
:::
