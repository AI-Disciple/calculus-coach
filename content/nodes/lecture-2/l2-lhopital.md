---
id: l2-lhopital
lecture: 2
order: 3
title: "L'Hopital's rule"
prerequisites: [l1-limit-techniques, l1-derivative-rules]
sources:
  - { source: handout, section: "4.10", page: 98 }
  - { source: lecture-notes-2, page: 2 }
  - { source: midterm-app }
  - { source: midterm-2022, page: 1 }
examWeight: medium
status: reviewed
notation: |
  \(f'\) and \(\frac{d}{dx}\) are the same derivative.
---

::: section
title: L'Hopital's rule at a point
:::

::: formal-statement
kind: theorem
title: L'Hopital's rule at a point
source:
  source: lecture-notes-2
  page: 2
text: |
  If

  - \(f\) and \(g\) are differentiable at \(a\),
  - \(\lim_{x \to a} f(x) = 0 = \lim_{x \to a} g(x)\), and
  - \(g'(a)\) is not \(0\),

  then
  \[
  \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}.
  \]
:::

::: plain-explanation
text: |
  Both functions tend to \(0\), so the quotient is a **\(0/0\) form** at the point \(a\). The statement asks that \(f\) and \(g\) be differentiable at that point, and that \(g'(a)\) be different from \(0\). The conclusion is the limit of the ratio of the derivatives. Compute that limit. Its value is \(\lim_{x \to a} f(x)/g(x)\).
:::

::: visual
kind: limit
caption: |
  Zoom in towards \(x = 0\) on the graph of \(\frac{\sin x}{x}\) and read the table of values: they approach \(1\).
params:
  f: "sin(x)/x"
  a: 0
  approach: point
:::

::: worked-example
title: Sine over x
problem: |
  Evaluate \(\lim_{x \to 0} \frac{\sin x}{x}\).
solution: |
  Let \(f(x) = \sin x\) and \(g(x) = x\). Both are differentiable at \(0\). The limit of \(f\) at \(0\) is \(0\), and the limit of \(g\) at \(0\) is \(0\).

  The derivative of \(g\) and its value at \(0\) are
  \[
  \begin{aligned}
  g'(x)&=1,\\
  g'(0)&=1.
  \end{aligned}
  \]
  So the hypothesis \(g'(a)\) is not \(0\) holds.

  The derivative of \(f\) and the ratio of the derivatives are
  \[
  \begin{aligned}
  f'(x)&=\cos x,\\
  \frac{f'(x)}{g'(x)}&=\frac{\cos x}{1}.
  \end{aligned}
  \]
  Its limit at \(0\) equals \(\cos 0\), which is \(1\). Therefore
  \[
  \lim_{x \to 0} \frac{\sin x}{x} = 1.
  \]
:::

::: key-points
text: |
  - If \(f\) and \(g\) are differentiable at \(a\), both limits at \(a\) equal \(0\), and \(g'(a)\) is not \(0\), then \(\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}\).
  - For \(\lim_{x \to 0} \frac{\sin x}{x}\), the derivative of \(g(x) = x\) is \(1\), so the hypothesis holds and the limit is \(\cos 0 = 1\).
:::

::: concept-question
id: l2-lhopital.q-f7b3ba53
question: |
  For \(\lim_{x \to 0} \frac{\sin x}{x}\), which claim is correct?
options:
  - text: |
      The form is \(0/0\), the derivative of \(x\) at \(0\) equals \(1\), and the limit equals \(1\).
    correct: true
  - text: |
      The form is \(\infty/\infty\), and the limit equals \(0\).
  - text: |
      The derivative of \(x\) at \(0\) equals \(0\), so the point statement does not apply.
  - text: |
      The limit of the ratio of derivatives equals \(0\).
explanation: |
  Let \(f(x) = \sin x\) and \(g(x) = x\). Then \(g'(x) = 1\), so \(g'(0) = 1\). The ratio of derivatives is \(\frac{\cos x}{1}\), and its limit at \(0\) is
  \[
  \cos 0 = 1.
  \]
  The original limit equals \(1\).
:::

::: exercise
id: l2-lhopital.handout-4-10-1
number: "4.10.1"
tier: basic
topics:
  - limits
  - lhopital
statement: |
  Compute \(\lim_{x \to 0} \frac{\cos x - 1}{\sin x}\).
solution: |
  Let \(f(x) = \cos x - 1\) and \(g(x) = \sin x\). Both are differentiable at \(0\). The value \(f(0)\) equals \(0\), and the value \(g(0)\) equals \(0\), so the form is \(0/0\).

  The derivative of \(g\) gives
  \[
  \begin{aligned}
  g'(x)&=\cos x,\\
  g'(0)&=\cos 0 = 1.
  \end{aligned}
  \]
  The hypothesis \(g'(a)\) is not \(0\) holds, and the point statement applies.

  The derivative of \(f\) is \(f'(x) = -\sin x\). The ratio of the derivatives is \(\frac{-\sin x}{\cos x}\). At \(0\), the numerator and the denominator are
  \[
  \begin{aligned}
  -\sin 0&=0,\\
  \cos 0&=1,
  \end{aligned}
  \]
  so the quotient equals \(0\). Therefore
  \[
  \lim_{x \to 0} \frac{\cos x - 1}{\sin x} = 0.
  \]
provenance: handout-answer
steps:
  - The form \(0/0\), with \(g'(0) = 1\).
  - The ratio of derivatives \(-\sin x / \cos x\).
  - The limit equals \(0\).
verification:
  checks:
    - expr: limit((cos(x) - 1)/sin(x), x, 0)
      expected: "0"
    - expr: diff(sin(x), x).subs(x, 0)
      expected: "1"
    - expr: limit(-sin(x)/cos(x), x, 0)
      expected: "0"
:::

::: section
title: L'Hopital's rule for \(0/0\) and \(\infty/\infty\)
:::

::: formal-statement
kind: theorem
title: "L'Hopital's rule (Theorem 4.10.5)"
source:
  source: handout
  section: "4.10"
  page: 98
text: |
  For sufficiently nice functions \(f\) and \(g\), suppose that one of the following holds:

  - \(\lim_{x \to a} f(x) = 0 = \lim_{x \to a} g(x)\),
  - each of \(\lim_{x \to a} f(x)\) and \(\lim_{x \to a} g(x)\) is \(+\infty\) or \(-\infty\). Mixed signs are allowed.

  If \(\lim_{x \to a} \frac{f'(x)}{g'(x)}\) exists, then
  \[
  \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}.
  \]
  The same conclusion holds in two further cases:

  - when \(x \to a\) is replaced by \(x \to +\infty\),
  - when \(x \to a\) is replaced by \(x \to -\infty\).
:::

::: plain-explanation
text: |
  The **indeterminate forms** in this statement are \(0/0\) and \(\infty/\infty\). An infinite numerator and an infinite denominator may have opposite signs. Use the rule when the limit of \(f'/g'\) exists. That limit is the value of \(\lim f/g\).

  The statement above is for a finite limit of \(x\). The same rule applies as \(x\) tends to \(+\infty\). It also applies as \(x\) tends to \(-\infty\).

  Sufficiently nice means that \(f'\) and \(g'\) exist on the side from which \(x\) approaches its limit, so the ratio of derivatives can be formed.
:::

::: visual
kind: limit
caption: |
  Look at the graph of \(\frac{2x^2 - 3x + 7}{x^2 + 47x + 1}\) far out to the right and read the table of values: they approach \(2\).
params:
  f: "(2x^2 - 3x + 7)/(x^2 + 47x + 1)"
  a: 0
  approach: plus-infinity
:::

::: worked-example
title: Infinity over infinity
problem: |
  Evaluate \(\lim_{x \to \infty} \frac{2x^2 - 3x + 7}{x^2 + 47x + 1}\).
solution: |
  Let \(f(x) = 2x^2 - 3x + 7\) and \(g(x) = x^2 + 47x + 1\). As \(x \to \infty\), both \(f(x)\) and \(g(x)\) tend to \(\infty\), so the quotient is an \(\infty/\infty\) form.

  The derivatives are
  \[
  \begin{aligned}
  f'(x)&=4x - 3,\\
  g'(x)&=2x + 47.
  \end{aligned}
  \]
  As \(x \to \infty\), both tend to \(\infty\), so \(\frac{f'(x)}{g'(x)}\) is again an \(\infty/\infty\) form. A second differentiation gives the constants
  \[
  \begin{aligned}
  f''(x)&=4,\\
  g''(x)&=2.
  \end{aligned}
  \]
  Their ratio is \(\frac{4}{2} = 2\). The limit of \(\frac{f'(x)}{g'(x)}\) exists and equals \(2\), so
  \[
  \lim_{x \to \infty} \frac{2x^2 - 3x + 7}{x^2 + 47x + 1} = 2.
  \]

  Dividing the original numerator and denominator by \(x^2\) gives the same value. For \(x \neq 0\),
  \[
  \frac{2x^2 - 3x + 7}{x^2 + 47x + 1} = \frac{2 - \frac{3}{x} + \frac{7}{x^2}}{1 + \frac{47}{x} + \frac{1}{x^2}}.
  \]
  As \(x \to \infty\), the terms \(\frac{3}{x}\), \(\frac{7}{x^2}\), \(\frac{47}{x}\) and \(\frac{1}{x^2}\) all tend to \(0\). The numerator tends to \(2\), and the denominator tends to \(1\). The quotient tends to \(\frac{2}{1} = 2\).
:::

::: guided-example
title: A product rewritten as a quotient
problem: |
  Evaluate \(\lim_{x \to 0^+} x \ln x\).
steps:
  - |
    As \(x \to 0^+\), the factor \(x\) tends to \(0\) and \(\ln x\) tends to \(-\infty\). Rewrite the product as a quotient:
    \[
    x \ln x = \frac{\ln x}{x^{-1}}.
    \]
  - |
    As \(x \to 0^+\), \(\ln x\) tends to \(-\infty\) and \(x^{-1}\) tends to \(+\infty\). The quotient is a \(-\infty/\infty\) form. Mixed signs are allowed.
  - |
    The derivative of \(\ln x\) is \(\frac{1}{x}\). The derivative of \(x^{-1}\) is \(-x^{-2}\). Their ratio simplifies as
    \[
    \begin{aligned}
    \frac{1/x}{-x^{-2}}&=\frac{1}{x} \cdot (-x^2)\\
    &=-x.
    \end{aligned}
    \]
  - |
    \(\lim_{x \to 0^+} (-x) = 0\). This limit exists, so \(\lim_{x \to 0^+} x \ln x = 0\).
:::

::: trap
text: |
  L'Hopital's rule applies to the forms \(0/0\) and \(\infty/\infty\). Take \(\lim_{x \to 0} \frac{3x^2 + x + 2}{x - 4}\). At \(x = 0\) the numerator equals \(2\) and the denominator equals \(-4\), so the quotient equals
  \[
  \frac{2}{-4} = -\frac{1}{2}.
  \]
  The numerator and the denominator are polynomials, and the denominator at \(0\) is different from \(0\), so the limit equals \(-\frac{1}{2}\).

  Differentiating the numerator and the denominator as if the rule applied produces
  \[
  \lim_{x \to 0} \frac{6x + 1}{1} = 1.
  \]
  The value \(1\) is wrong.
:::

::: trap
text: |
  Take \(\lim_{x \to 0} \frac{1 - \cos x}{x^2}\). Let \(f(x) = 1 - \cos x\) and \(g(x) = x^2\). Then \(f(0) = 0\) and \(g(0) = 0\), so the form is \(0/0\). The derivative of \(g\) gives
  \[
  \begin{aligned}
  g'(x)&=2x,\\
  g'(0)&=0.
  \end{aligned}
  \]
  The point statement requires \(g'(a)\) to be different from \(0\). That hypothesis fails, and the point statement does not apply.

  The ratio of the derivatives is \(\frac{\sin x}{2x}\), which is still a \(0/0\) form at \(0\). Let \(p(x) = \sin x\) and \(q(x) = 2x\). Then
  \[
  \begin{aligned}
  q'(x)&=2,\\
  q'(0)&=2.
  \end{aligned}
  \]
  The point statement applies to \(p/q\). The new ratio of derivatives is \(\frac{\cos x}{2}\). The cosine is continuous at \(0\), and \(\cos 0 = 1\), so
  \[
  \lim_{x \to 0} \frac{\cos x}{2} = \frac{1}{2}.
  \]
  The same arithmetic is
  \[
  \frac{\sin x}{2x} = \frac{1}{2} \cdot \frac{\sin x}{x}.
  \]
  The second factor tends to \(1\), so \(\lim_{x \to 0} \frac{\sin x}{2x} = \frac{1}{2}\). That limit exists. The handout statement therefore gives
  \[
  \lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}.
  \]
:::

::: key-points
text: |
  - L'Hopital's rule covers the forms \(0/0\) and \(\pm\infty/\pm\infty\), with mixed signs allowed, and \(x \to a\), \(x \to +\infty\) and \(x \to -\infty\).
  - If \(\lim \frac{f'(x)}{g'(x)}\) exists, then \(\lim \frac{f(x)}{g(x)}\) equals it. When \(f'/g'\) is again a \(0/0\) or \(\infty/\infty\) form, differentiate again.
  - The usual slip differentiates the numerator and the denominator of \(\frac{3x^2 + x + 2}{x - 4}\) at \(0\) and gets \(1\). The quotient is not a \(0/0\) or \(\infty/\infty\) form, and its limit is \(-\frac{1}{2}\).
  - The point statement needs \(g'(a) \neq 0\), which fails for \(\frac{1 - \cos x}{x^2}\) at \(0\). The rule for \(0/0\) forms still applies and gives the limit \(\frac{1}{2}\).
:::

::: going-deeper
title: Optional practice
text: |
  Handout exercises 4.10.1 to 4.10.50 are optional practice on limits of these kinds. Definition 4.10.3 writes \(\lim_{x \to a} f(x) = \infty\) in epsilon-delta language. That wording is optional, and it is too deep for this course.
:::

::: concept-question
id: l2-lhopital.q-d9199fcd
question: |
  As \(x \to \infty\), one differentiation of \(\frac{2x^2 - 3x + 7}{x^2 + 47x + 1}\) leaves \(\frac{4x - 3}{2x + 47}\). What is the original limit?
options:
  - text: |
      The new quotient is still an \(\infty/\infty\) form. A second differentiation gives \(\frac{4}{2}\), so the limit is \(2\).
    correct: true
  - text: |
      The new quotient tends to \(0\), so the original limit is \(0\).
  - text: |
      The rule stops after one differentiation, and the limit does not exist.
  - text: |
      The original limit equals \(4\).
explanation: |
  The second derivatives are the constants \(4\) and \(2\). Their ratio is \(\frac{4}{2} = 2\). The limit of \(\frac{4x - 3}{2x + 47}\) exists and equals \(2\), so the original limit equals \(2\).
:::

::: concept-question
id: l2-lhopital.q-47fcc6b0
question: |
  As \(x \to 0^+\), which claim about \(\frac{\ln x}{x^{-1}}\) is correct?
options:
  - text: |
      The form is \(-\infty/\infty\). Mixed signs are allowed, and the limit equals \(0\).
    correct: true
  - text: |
      The form is \(0/0\), and the limit equals \(1\).
  - text: |
      The infinities have opposite signs, so L'Hopital's rule does not apply.
  - text: |
      The form is \(-\infty/\infty\), and the limit equals \(-\infty\).
explanation: |
  As \(x \to 0^+\), \(\ln x\) tends to \(-\infty\) and \(x^{-1}\) tends to \(+\infty\). The ratio of derivatives is \(\frac{1/x}{-x^{-2}} = -x\), and \(\lim_{x \to 0^+} (-x) = 0\).
:::

::: concept-question
id: l2-lhopital.q-f80e55ee
question: |
  Take \(\lim_{x \to 1} \frac{x^2 + 2}{x + 2}\). Which claim is correct?
options:
  - text: |
      The rule does not apply, and the limit is \(1\).
    correct: true
  - text: |
      Differentiating gives \(\frac{2x}{1}\), so the limit is \(2\).
  - text: |
      The form is indeterminate, so the limit does not exist.
explanation: |
  At \(x = 1\) the numerator and the denominator both equal \(3\), so the form is neither \(0/0\) nor \(\infty/\infty\). The quotient is continuous there, so the limit is \(\frac{3}{3} = 1\). The rule needs a \(0/0\) or \(\infty/\infty\) form. Differentiating anyway gives the wrong value \(2\).
:::

::: concept-question
id: l2-lhopital.q-adb95a6a
question: |
  For \(\lim_{x \to 0} \frac{x^2}{1 - \cos x}\), which claim is correct?
options:
  - text: |
      The point statement does not apply, but the limit exists and equals \(2\).
    correct: true
  - text: |
      The point statement applies, and the limit is \(0\).
  - text: |
      The point statement does not apply, so the limit does not exist.
  - text: |
      The limit is \(1\), as for \(\frac{\sin x}{x}\).
explanation: |
  Both \(x^2\) and \(1 - \cos x\) tend to \(0\), so the form is \(0/0\). The derivative of \(1 - \cos x\) is \(\sin x\), which is \(0\) at \(0\), so the point statement does not apply. The rule for \(0/0\) forms still does: \(\frac{2x}{\sin x}\) is again \(0/0\), and the next ratio is \(\frac{2}{\cos x}\), which tends to \(2\). The original limit equals \(2\).
:::

::: exercise
id: l2-lhopital.handout-4-10-3
number: "4.10.3"
tier: standard
topics:
  - limits
  - lhopital
statement: |
  Compute \(\lim_{x \to \infty} \left( \sqrt{x^2 + x} - \sqrt{x^2 - x} \right)\).
solution: |
  Each square root tends to infinity, so the difference is an \(\infty - \infty\) form. L'Hopital's rule applies to a quotient in the form \(0/0\) or \(\infty/\infty\). Rationalise the difference so that it becomes a quotient.

  For \(x > 0\),
  \[
  \begin{aligned}
  \sqrt{x^2 + x} - \sqrt{x^2 - x}\\
  &= \frac{(x^2 + x) - (x^2 - x)}{\sqrt{x^2 + x} + \sqrt{x^2 - x}}\\
  &= \frac{2x}{\sqrt{x^2 + x} + \sqrt{x^2 - x}}.
  \end{aligned}
  \]
  Divide the numerator and the denominator by \(x\). Since \(x > 0\), \(\sqrt{x^2} = x\), and
  \[
  \begin{aligned}
  \frac{2x}{\sqrt{x^2 + x} + \sqrt{x^2 - x}}\\
  &= \frac{2}{\sqrt{1 + \frac{1}{x}} + \sqrt{1 - \frac{1}{x}}}.
  \end{aligned}
  \]
  As \(x \to \infty\), the first expression under a square root tends to \(1\), and the second expression under a square root tends to \(1\). The denominator tends to \(1 + 1 = 2\). The quotient tends to \(\frac{2}{2} = 1\). Therefore
  \[
  \lim_{x \to \infty} \left( \sqrt{x^2 + x} - \sqrt{x^2 - x} \right) = 1.
  \]

  Applying L'Hopital's rule to the difference before this algebra is a messier calculation. The rationalised quotient already tends to \(1\).
provenance: handout-answer
steps:
  - Rationalise the \(\infty - \infty\) difference.
  - Divide the numerator and the denominator by \(x\).
  - The limit equals \(1\).
verification:
  checks:
    - expr: limit(sqrt(x**2 + x) - sqrt(x**2 - x), x, oo)
      expected: "1"
    - expr: simplify((sqrt(x**2 + x) - sqrt(x**2 - x))*(sqrt(x**2 + x) + sqrt(x**2 - x)) - 2*x)
      expected: "0"
    - expr: limit(2/(sqrt(1 + 1/x) + sqrt(1 - 1/x)), x, oo)
      expected: "1"
:::

::: sheet-item
id: l2-lhopital.sheet-zero-over-zero
category: formula
text: |
  If \(f\) and \(g\) are differentiable at \(a\), both tend to \(0\), and \(g'(a)\) is not \(0\), then \(\lim_{x \to a} f/g = \lim_{x \to a} f'/g'\).
:::

::: sheet-item
id: l2-lhopital.sheet-infinity-over-infinity
category: formula
text: |
  For sufficiently nice \(f\) and \(g\), if both limits are \(0\), or each limit is infinite, possibly with opposite signs, and \(\lim f'/g'\) exists, then \(\lim f/g\) equals that limit. The same holds as \(x \to +\infty\) and as \(x \to -\infty\).
:::

::: sheet-item
id: l2-lhopital.sheet-g-prime-at-a
category: trap
text: |
  If \(g'(a) = 0\), the point statement does not apply, even when the form is \(0/0\). The ratio \(f'/g'\) may still be a \(0/0\) form.
:::

::: exercise
id: l2-lhopital.midterm-2022-ex2iii
statement: |
  Let \(f(x)=\frac{x-1}{\ln(x)}\). Evaluate \(\lim_{x\to 0^+} f(x)\), \(\lim_{x\to 1} f(x)\) and \(\lim_{x\to 0^+} f'(x)\).
tier: exam
topics:
  - limits
  - lhopital
pastExam:
  year: 2022
  paper: Midterm
  question: 2iii
  points: 1
solution: |
  As \(x\to 0^+\), the numerator tends to \(-1\) and \(\ln x\to-\infty\), so \(f(x)\to 0\). On \((0,1)\) the numerator and the logarithm are both negative, so the limit is \(0\) from above.

  As \(x\to 1\), the quotient is of the form \(0/0\). Writing \(x=1+u\) gives \(f(1+u)=u/\ln(1+u)=1\big/\bigl(\ln(1+u)/u\bigr)\). The inner limit is the derivative of \(\ln(1+u)\) at \(u=0\), which equals \(1\). Hence \(\lim_{x\to 1}f(x)=1\).

  Near \(0^+\), the numerator of \(f'\) is dominated by \(1/x\), so \(f'(x)\sim 1/\bigl(x(\ln x)^2\bigr)\). That quantity tends to \(+\infty\). Thus \(\lim_{x\to 0^+}f'(x)=+\infty\).
provenance: official-key
steps:
  - Limit of \(f\) at \(0^+\).
  - Limit of \(f\) at \(1\).
  - Limit of \(f'\) at \(0^+\).
verification:
  checks:
    - expr: limit((x-1)/log(x), x, 0, dir='+')
      expected: "0"
    - expr: limit((x-1)/log(x), x, 1)
      expected: "1"
    - expr: limit(1/diff((x-1)/log(x), x), x, 0, dir='+')
      expected: "0"
    - expr: limit(x*log(x)**2 * diff((x-1)/log(x), x), x, 0, dir='+')
      expected: "1"
:::

::: exercise
id: l2-lhopital.ex-lhopital-product-forms
tier: standard
topics: [limits, lhopital]
statement: |
  (a) Compute \(\lim_{x \to 0^+} x \ln x\).

  (b) Use (a) to compute \(\lim_{x \to 0^+} x^{x}\).
solution: |
  (a) As \(x \to 0^+\), the factor \(x\) tends to \(0\) and \(\ln x\) tends to \(-\infty\), so the product is not a quotient yet. Write
  \[
  x \ln x = \frac{\ln x}{x^{-1}}.
  \]
  As \(x \to 0^+\), the numerator tends to \(-\infty\) and the denominator tends to \(+\infty\). This is a \(-\infty/\infty\) form, and mixed signs are allowed. The derivative of \(\ln x\) is \(\frac{1}{x}\), and the derivative of \(x^{-1}\) is \(-x^{-2}\). Their ratio is
  \[
  \frac{1/x}{-x^{-2}} = -x,
  \]
  and \(\lim_{x \to 0^+} (-x) = 0\). This limit exists, so \(\lim_{x \to 0^+} x \ln x = 0\).

  (b) For \(x > 0\), \(x^{x} = e^{x \ln x}\). By (a) the exponent tends to \(0\) as \(x \to 0^+\), and the exponential function is continuous at \(0\). Therefore
  \[
  \lim_{x \to 0^+} x^{x} = e^{0} = 1.
  \]
provenance: written-for-site
steps:
  - Rewrite \(x \ln x\) as \(\ln x / x^{-1}\), a \(-\infty/\infty\) form.
  - The ratio of derivatives is \(-x\), so the limit in (a) is \(0\).
  - Write \(x^{x} = e^{x \ln x}\) and use continuity of the exponential, so the limit in (b) is \(1\).
verification:
  checks:
    - expr: limit(x*log(x), x, 0, dir='+')
      expected: "0"
    - expr: simplify(diff(log(x), x)/diff(x**-1, x))
      expected: -x
    - expr: limit(x**x, x, 0, dir='+')
      expected: "1"
:::

::: exercise
id: l2-lhopital.ex-lhopital-point-statement
tier: standard
topics: [limits, lhopital]
statement: |
  Compute each limit. For each one, check whether the point statement of L'Hopital's rule applies, that is, whether the numerator and the denominator both tend to \(0\) and the derivative of the denominator at the point is not \(0\). If it does not apply, say what you use instead.

  (a) \(\lim_{x \to 0} \dfrac{\sin x}{x}\)

  (b) \(\lim_{x \to 0} \dfrac{e^{x} - 1}{\sin 2x}\)

  (c) \(\lim_{x \to 0} \dfrac{x - \sin x}{x^{3}}\)
solution: |
  (a) Let \(f(x) = \sin x\) and \(g(x) = x\). Both tend to \(0\), and \(g'(0) = 1\), which is not \(0\). The point statement applies. The ratio of derivatives is \(\frac{\cos x}{1}\), which tends to \(\cos 0 = 1\). So the limit is \(1\).

  (b) Let \(f(x) = e^{x} - 1\) and \(g(x) = \sin 2x\). Both tend to \(0\). The derivative is \(g'(x) = 2\cos 2x\), so \(g'(0) = 2\), which is not \(0\). The point statement applies. The ratio of derivatives is \(\frac{e^{x}}{2\cos 2x}\), which tends to \(\frac{1}{2}\). So the limit is \(\frac{1}{2}\).

  (c) Let \(f(x) = x - \sin x\) and \(g(x) = x^{3}\). Both tend to \(0\), but \(g'(x) = 3x^{2}\), so \(g'(0) = 0\). The point statement does not apply. The form is still \(0/0\), so use the rule for \(0/0\) forms:

  1. The ratio of derivatives is \(\frac{1 - \cos x}{3x^{2}}\), again a \(0/0\) form.
  2. A second ratio of derivatives is \(\frac{\sin x}{6x}\), again \(0/0\).
  3. A third is \(\frac{\cos x}{6}\). This last ratio tends to \(\frac{1}{6}\).

  So each earlier limit exists and equals \(\frac{1}{6}\). Therefore
  \[
  \lim_{x \to 0} \frac{x - \sin x}{x^{3}} = \frac{1}{6}.
  \]
  A check with Taylor expansions:
  \[
  \begin{aligned}
  \sin x&=x - \frac{x^{3}}{6} + \cdots,\\
  x - \sin x&=\frac{x^{3}}{6} + \cdots,
  \end{aligned}
  \]
  and the quotient tends to \(\frac{1}{6}\).
provenance: written-for-site
steps:
  - 'Part (a): \(g''(0) = 1\), ratio \(\cos x\), limit \(1\).'
  - 'Part (b): \(g''(0) = 2\), ratio \(e^{x}/(2\cos 2x)\), limit \(1/2\).'
  - 'Part (c): \(g''(0) = 0\), so use the \(0/0\) rule three times, limit \(1/6\).'
verification:
  checks:
    - expr: limit(sin(x)/x, x, 0)
      expected: "1"
    - expr: diff(sin(2*x), x).subs(x, 0)
      expected: "2"
    - expr: limit(exp(x)/(2*cos(2*x)), x, 0)
      expected: 1/2
    - expr: limit((exp(x) - 1)/sin(2*x), x, 0)
      expected: 1/2
    - expr: diff(x**3, x).subs(x, 0)
      expected: "0"
    - expr: limit((1 - cos(x))/(3*x**2), x, 0)
      expected: 1/6
    - expr: limit(sin(x)/(6*x), x, 0)
      expected: 1/6
    - expr: limit((x - sin(x))/x**3, x, 0)
      expected: 1/6
:::

::: exercise
id: l2-lhopital.ex-lhopital-infinity-two-ways
tier: standard
topics: [limits, lhopital]
statement: |
  (a) Compute \(\lim_{x \to \infty} \dfrac{2x^{2} - 3x + 7}{x^{2} + 47x + 1}\) with L'Hopital's rule.

  (b) Compute the same limit by dividing the numerator and the denominator by \(x^{2}\).

  (c) Compute \(\lim_{x \to \infty} \dfrac{x^{2}}{e^{x}}\). Say why the method of (b) is not available here.
solution: |
  (a) Both the numerator and the denominator tend to \(\infty\), so the form is \(\infty/\infty\). The derivatives are \(4x - 3\) and \(2x + 47\), again an \(\infty/\infty\) form. The second derivatives are the constants \(4\) and \(2\), with ratio \(\frac{4}{2} = 2\). This limit exists, so each earlier limit exists and equals \(2\).

  (b) For \(x \neq 0\),
  \[
  \frac{2x^{2} - 3x + 7}{x^{2} + 47x + 1} = \frac{2 - \frac{3}{x} + \frac{7}{x^{2}}}{1 + \frac{47}{x} + \frac{1}{x^{2}}}.
  \]
  As \(x \to \infty\), the terms with \(x\) in a denominator tend to \(0\). The numerator tends to \(2\) and the denominator tends to \(1\), so the quotient tends to \(2\). The value agrees with (a).

  (c) Both \(x^{2}\) and \(e^{x}\) tend to \(\infty\), so the form is \(\infty/\infty\). The ratio of derivatives is \(\frac{2x}{e^{x}}\), again \(\infty/\infty\). The next ratio is \(\frac{2}{e^{x}}\), which tends to \(0\). So
  \[
  \lim_{x \to \infty} \frac{x^{2}}{e^{x}} = 0.
  \]

  Dividing by the highest power does not work here, because \(e^{x}\) is not a power of \(x\). No power of \(x\) cancels it, so the quotient stays an \(\infty/\infty\) form after the division.
provenance: written-for-site
steps:
  - 'Part (a): two differentiations leave the constant ratio \(4/2 = 2\).'
  - 'Part (b): divide by \(x^{2}\), the limit is \(2/1 = 2\).'
  - 'Part (c): two differentiations give \(2/e^{x} \to 0\), and the division by a power of \(x\) has no analogue.'
verification:
  checks:
    - expr: diff(2*x**2 - 3*x + 7, x, 2)/diff(x**2 + 47*x + 1, x, 2)
      expected: "2"
    - expr: limit((2*x**2 - 3*x + 7)/(x**2 + 47*x + 1), x, oo)
      expected: "2"
    - expr: limit((2 - 3/x + 7/x**2)/(1 + 47/x + 1/x**2), x, oo)
      expected: "2"
    - expr: limit(2/exp(x), x, oo)
      expected: "0"
    - expr: limit(x**2/exp(x), x, oo)
      expected: "0"
:::
