---
id: l3-taylor-composition
lecture: 3
order: 3
title: Composing Taylor expansions and limits
prerequisites: [l3-taylor, l1-limit-techniques]
sources:
  - { source: lecture-notes-3, page: 2 }
  - { source: midterm-app }
  - { source: midterm-mock-1, page: 1 }
  - { source: midterm-2022, page: 1 }
  - { source: midterm-2025, page: 1 }
examWeight: medium
examWeightNote: A Taylor or limit exercise is on some midterms.
notation: |
  Substituting an expansion uses the lecture's \(\delta x\) and the word small. \(f'\) and \(\frac{d}{dx}\) are the same derivative.
status: reviewed
---

::: section
title: Expanding a composition about 0
:::

::: formal-statement
kind: method
title: Expanding a composition about 0
source:
  source: lecture-notes-3
  page: 2
text: |
  To **expand a composition** about \(0\):

  1. Expand the inside function.
  2. Set \(u\) equal to that expansion minus its constant term.
  3. Expand the outside function in \(u\).
  4. Substitute, and drop terms above the order you want.

  For \(\ln(\cos x)\), the substitution is \(u = \cos x - 1\), and
  \[ \ln(\cos x) = \ln(1+u). \]
:::

::: plain-explanation
text: |
  Near \(0\), the value \(\cos x\) is near \(1\). The logarithm is expanded about \(1\). That expansion is \(\ln(1+u)\) with a small \(u\), and the small quantity is \(u = \cos x - 1\).
:::

::: visual
kind: taylor
caption: |
  The function is \(\sqrt{1+x^2}\), expanded about 0 to order 2. Compare the polynomial \(1 + \frac{x^2}{2}\) with the curve near \(0\).
params:
  f: "sqrt(1+x^2)"
  a: 0
  order: 2
  xmin: -2
  xmax: 2
:::

::: worked-example
title: sqrt(1+x^2)
problem: |
  Put the expansion of \(\sqrt{1+y}\) to use for \(f(x) = \sqrt{1+x^2}\).
solution: |
  The expansion in the variable \(y\) is
  \[ \sqrt{1+y} = 1 + \frac{y}{2} - \frac{y^2}{8} + y^2 \cdot \mathrm{small}. \]
  The substitution being made is \(y = x^2\).

  Substituting gives
  \[ f(x) = 1 + \frac{x^2}{2} - \frac{x^4}{8} + x^4 \cdot \mathrm{small}. \]
  The power \(x^4\) has order \(4\). The order-2 polynomial in \(x\) is \(1 + \frac{x^2}{2}\).
:::

::: guided-example
title: Order-2 polynomial of ln(1+x^2)
problem: |
  Find the order-2 polynomial of \(\ln(1+x^2)\) about \(0\).
steps:
  - |
    Set \(u = x^2\).
  - |
    The expansion \(\ln(1+u) = u + \cdots\) begins with \(u\). The next term has order \(u^2\), which is order \(4\) in \(x\).
  - |
    Through order \(2\), \(\ln(1+x^2)\) equals \(x^2\).
:::

::: key-points
text: |
  - To expand a composition about \(0\), expand the inside function, set \(u\) equal to that expansion minus its constant term, expand the outside function in \(u\), substitute, and drop terms above the order you want.
  - For \(\sqrt{1+x^2}\), the substitution is \(y = x^2\), and the order-2 polynomial is \(1 + \frac{x^2}{2}\), because \(x^4\) has order \(4\).
:::

::: concept-question
id: l3-taylor-composition.q-3240abd3
question: |
  Find the Taylor polynomial of order \(2\) for \(f(x) = e^{\sin x}\) about \(0\).
options:
  - text: |
      \(1 + x + \frac{x^{2}}{2}\)
    correct: true
  - text: |
      \(1 + x - \frac{x^{2}}{2}\)
  - text: |
      \(1 + x\)
  - text: |
      \(1 + x + x^{2}\)
explanation: |
  Put \(u = \sin x = x + O(x^{3})\). Then \(e^{u} = 1 + u + \frac{u^{2}}{2} + \cdots = 1 + x + \frac{x^{2}}{2}\) up to order \(2\).
:::

::: concept-question
id: l3-taylor-composition.q-fa566b03
question: |
  Find the Taylor polynomial of order \(2\) for \(f(x) = \ln(1 + x^{2})\) about \(0\).
options:
  - text: |
      \(x^{2}\)
    correct: true
  - text: |
      \(\frac{x^{2}}{2}\)
  - text: |
      \(x - \frac{x^{2}}{2}\)
  - text: |
      \(2x\)
explanation: |
  Put \(u = x^{2}\). Then \(\ln(1 + u) = u + O(u^{2}) = x^{2}\) up to order \(2\).
:::

::: exercise
id: l3-taylor-composition.basic-sqrt-x2
tier: basic
topics: [taylor, composition]
statement: |
  Substitute \(y = x^2\) into the order-2 expansion of \(\sqrt{1+y}\) and give the terms up to order \(2\) in \(x\).
solution: |
  The order-2 expansion is \(\sqrt{1+y} = 1 + \frac{y}{2} - \frac{y^2}{8} + \cdots\). The substitution is \(y = x^2\).

  Substituting gives \(1 + \frac{x^2}{2} - \frac{x^4}{8} + \cdots\). The power \(x^4\) has order \(4\). The terms up to order \(2\) are \(1 + \frac{x^2}{2}\).
provenance: written-for-site
steps:
  - |
    Start from \(1 + \frac{y}{2} - \frac{y^2}{8}\).
  - |
    Substitute \(y = x^2\).
  - |
    Drop the \(x^4\) term. The order-2 polynomial is \(1 + \frac{x^2}{2}\).
verification:
  checks:
    - expr: series(sqrt(1+x**2), x, 0, 3).removeO()
      expected: 1 + x**2/2
:::

::: section
title: \(\ln(\cos x)\) and limits
:::

::: visual
kind: taylor
caption: |
  The function is \(\ln(\cos x)\), expanded about 0. Only even powers appear, and the expansion follows from putting \(u = \cos x - 1\) into \(\ln(1+u)\).
params:
  f: "ln(cos(x))"
  a: 0
  order: 4
  xmin: -1.4
  xmax: 1.4
:::

::: worked-example
title: ln(cos x)
problem: |
  Find the order-2 polynomial of \(\ln(\cos x)\) about \(0\).
solution: |
  The substitution is \(u = \cos x - 1\). Then \(\ln(\cos x) = \ln(1+u)\).

  The cosine expansion gives \(u = -\frac{x^2}{2} + x^2 \cdot \mathrm{small}\). The logarithm begins with \(\ln(1+u) = u + u \cdot \mathrm{small}\).

  The square \(u^2\) starts at order \(4\). An order-2 polynomial stops before order \(4\). The order-2 polynomial of \(\ln(\cos x)\) is \(-\frac{x^2}{2}\).
:::

::: trap
text: |
  ### The correct polynomial

  The order-2 polynomial of \(\ln(\cos x)\) is \(-\frac{x^2}{2}\). At \(x = 0\) this polynomial equals \(0\). The value \(\ln(\cos 0)\) equals \(\ln 1\). That value equals \(0\). Near \(0\), \(\ln(\cos x)\) is near \(0\).

  ### The shift

  That polynomial comes from the substitution \(u = \cos x - 1\) and the expansion of \(\ln(1+u)\). An expansion of \(\ln u\) about \(u = 1\) is the same calculation only when \(u\) is defined as \(\cos x - 1\).

  ### The wrong version

  A calculation that sets \(u = \cos x\) and expands \(\ln u\) as though \(u\) were the small quantity writes the constant term as \(0\). The base \(\cos x\) is near \(1\). The shift \(u = \cos x - 1\) has been left out. The cosine begins \(1 - \frac{x^2}{2}\). Reversing the sign of that quadratic term writes the polynomial \(+\frac{x^2}{2}\).

  ### A check at x = 0.1

  The derivative of \(-\frac{x^2}{2}\) at \(0\) equals \(0\). The derivative of \(+\frac{x^2}{2}\) at \(0\) equals \(0\). Compare the values at \(x = 0.1\). Since \(\cos 0.1 < 1\), the number \(\ln(\cos 0.1)\) is negative. At \(x = 0.1\), the value of \(\frac{x^2}{2}\) equals \(0.005\). The number \(0.005\) is positive.
:::

::: going-deeper
title: Order 4 for ln(cos x)
text: |
  The order-4 polynomial of \(\ln(\cos x)\) about \(0\) is \(-\frac{x^2}{2} - \frac{x^4}{12}\).

  Set \(u = \cos x - 1\). Through order \(4\),
  \[ u = -\frac{x^2}{2} + \frac{x^4}{24}. \]
  The square, through order \(4\), is \(u^2 = \frac{x^4}{4}\).

  Through order \(4\), \(\ln(1+u) = u - \frac{u^2}{2}\). The next term \(u^3\) starts at order \(6\).

  Substitute:
  \[
  \begin{aligned}
  u - \frac{u^2}{2}&= -\frac{x^2}{2} + \frac{x^4}{24} - \frac{1}{2}\cdot\frac{x^4}{4}\\
  &= -\frac{x^2}{2} + \frac{x^4}{24} - \frac{x^4}{8}.
  \end{aligned}
  \]
  The coefficient of \(x^4\) is \(\frac{1}{24} - \frac{1}{8}\). That difference equals \(\frac{1}{24} - \frac{3}{24} = -\frac{1}{12}\).

  Therefore
  \[ \ln(\cos x) = -\frac{x^2}{2} - \frac{x^4}{12} \]
  through order \(4\).
:::

::: key-points
text: |
  - For \(\ln(\cos x)\), the substitution is \(u = \cos x - 1\), and \(\ln(\cos x) = \ln(1+u)\). The order-2 polynomial is \(-\frac{x^2}{2}\), because \(u^2\) starts at order \(4\).
  - The usual slip sets \(u = \cos x\) and expands \(\ln u\) as though \(u\) were small, which leaves out the shift and can write \(+\frac{x^2}{2}\). The small quantity is \(u = \cos x - 1\), and the polynomial is \(-\frac{x^2}{2}\).
:::

::: concept-question
id: l3-taylor-composition.q-c4eeada3
question: |
  Approximate \(\ln(\cos x)\) by a polynomial for \(x\) near \(0\).
options:
  - text: |
      \(-\frac{x^{2}}{2}\)
    correct: true
  - text: |
      \(\frac{x^{2}}{2}\)
  - text: |
      \(-x^{2}\)
  - text: |
      \(1 - \frac{x^{2}}{2}\)
explanation: |
  Put \(u = \cos x - 1\). Near \(0\), \(u = -\frac{x^{2}}{2} + \cdots\). Then \(\ln(\cos x) = \ln(1 + u)\), and \(\ln(1 + u)\) begins with \(u\), so the order-\(2\) polynomial is \(-\frac{x^{2}}{2}\).
:::

::: concept-question
id: l3-taylor-composition.q-53dde67a
question: |
  Evaluate \(\lim_{x \to 1} \frac{\ln x - \frac{x - 1}{x}}{(\ln x)^{2}}\).
options:
  - text: |
      \(\frac{1}{2}\)
    correct: true
  - text: |
      \(1\)
  - text: |
      \(0\)
  - text: |
      \(-\frac{1}{2}\)
explanation: |
  Put \(x = 1 + u\). Then \(\ln x = u - \frac{u^{2}}{2} + \cdots\) and \(\frac{x - 1}{x} = \frac{u}{1 + u} = u - u^{2} + \cdots\). The numerator is \(\frac{u^{2}}{2} + \cdots\) and the denominator is \(u^{2} + \cdots\), so the ratio tends to \(\frac{1}{2}\).
:::

::: concept-question
id: l3-taylor-composition.q-c703e41a
question: |
  Evaluate \(\lim_{x \to 0} \frac{\cos x - 1}{\sin x - \tan x}\).
options:
  - text: |
      There is no two-sided limit: it is \(+\infty\) from the right and \(-\infty\) from the left.
    correct: true
  - text: |
      \(0\)
  - text: |
      \(1\)
  - text: |
      \(-1\)
explanation: |
  The expansions are \(\cos x - 1 = -\frac{x^{2}}{2} + \cdots\) and \(\sin x - \tan x = -\frac{x^{3}}{2} + \cdots\). The ratio behaves like \(\frac{1}{x}\), so it tends to \(+\infty\) from the right and to \(-\infty\) from the left.
:::

::: exercise
id: l3-taylor-composition.standard-ln-cos
tier: standard
topics: [taylor, composition]
statement: |
  By the substitution \(u = \cos x - 1\), find the order-2 polynomial of \(\ln(\cos x)\).
solution: |
  The substitution is \(u = \cos x - 1\). Then \(\ln(\cos x) = \ln(1+u)\).

  The cosine expansion gives \(u = -\frac{x^2}{2} + \cdots\), and the next terms have order \(4\). The expansion \(\ln(1+u) = u + \cdots\) begins with \(u\). The square \(u^2\) has order \(4\).

  The order-2 polynomial is \(-\frac{x^2}{2}\).
provenance: written-for-site
steps:
  - |
    Set \(u = \cos x - 1\).
  - |
    Expand \(\ln(1+u)\) from its linear term, and note that \(u^2\) has order \(4\).
  - |
    The order-2 polynomial is \(-\frac{x^2}{2}\).
verification:
  checks:
    - expr: series(log(cos(x)), x, 0, 3).removeO()
      expected: -x**2/2
:::

::: sheet-item
id: l3-taylor-composition.sheet-u-cos
category: recognition
text: |
  For \(\ln(\cos x)\), the substitution is \(u = \cos x - 1\), and \(\ln(\cos x) = \ln(1+u)\).
:::

::: sheet-item
id: l3-taylor-composition.sheet-ln-cos
category: formula
text: |
  The order-2 polynomial of \(\ln(\cos x)\) about \(0\) is \(-\frac{x^2}{2}\).
:::

::: exercise
id: l3-taylor-composition.midterm-mock-1-ex4.2
statement: |
  Compute the Taylor series to the order \(2\) of \(f(x)=e^{\sin(x)}\) about \(x=0\).
solution: |
  One has \(\sin x=x+O(x^3)\). Then \(e^{\sin x}=e^x e^{O(x^3)}\). Expanding gives \(e^x=1+x+\frac{x^2}{2}+O(x^3)\) and \(e^{O(x^3)}=1+O(x^3)\), so \(e^{\sin x}=1+x+\frac{x^2}{2}+O(x^3)\). The same polynomial follows from \(f(0)=1\), \(f'(0)=1\), and \(f''(0)=1\).
steps:
  - Composition of \(\sin x=x+O(x^3)\) with the exponential.
  - Polynomial \(1+x+\frac{x^2}{2}\).
verification:
  checks:
    - expr: exp(sin(x)).subs(x, 0)
      expected: 1
    - expr: diff(exp(sin(x)), x).subs(x, 0)
      expected: 1
    - expr: diff(exp(sin(x)), x, 2).subs(x, 0)/2
      expected: Rational(1, 2)
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "4.2"
  points: 1
:::

::: exercise
id: l3-taylor-composition.midterm-mock-1-ex4.4
statement: |
  Compute the Taylor series to the order \(2\) of \(f(x)=\ln(1+x^2)\) about \(x=0\).
solution: |
  The expansion \(\ln(1+u)=u-\frac{u^2}{2}+O(u^3)\) with \(u=x^2\) gives \(\ln(1+x^2)=x^2+O(x^4)\). To order \(2\) this is \(x^2+O(x^3)\). The same polynomial follows from \(f(0)=0\), \(f'(0)=0\), and \(f''(0)=2\).
steps:
  - Substitute \(u=x^2\) into \(\ln(1+u)\).
  - Polynomial \(x^2\).
verification:
  checks:
    - expr: log(1+x**2).subs(x, 0)
      expected: 0
    - expr: diff(log(1+x**2), x).subs(x, 0)
      expected: 0
    - expr: diff(log(1+x**2), x, 2).subs(x, 0)/2
      expected: 1
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "4.4"
  points: 1
:::

::: exercise
id: l3-taylor-composition.midterm-2022-ex2iv
statement: |
  Let \(f(x)=\frac{x-1}{\ln(x)}\). Compute \(\lim_{x\to 1} f'(x)\) using the second-order Taylor expansion of \(\ln(1+x)\) and of \(1/(1+x)\) about \(x=0\).
tier: exam
topics:
  - taylor
  - limits
pastExam:
  year: 2022
  paper: Midterm
  question: 2iv
  points: 1
solution: |
  Set \(x=1+u\), so the limit is \(\lim_{u\to 0}f'(1+u)\). Then
  \[ f'(1+u)=\frac{\ln(1+u)-\frac{u}{1+u}}{\bigl(\ln(1+u)\bigr)^2}. \]
  The expansions about \(u=0\) are
  \[
  \begin{aligned}
  \ln(1+u)&=u-u^2/2+O(u^3),\\
  1/(1+u)&=1-u+u^2+O(u^3).
  \end{aligned}
  \]
  The numerator is
  \[
  \begin{aligned}
  &u-\frac{u^2}{2}+O(u^3)\\
  &\quad-u\bigl(1-u+u^2+O(u^3)\bigr)\\
  &=\frac{u^2}{2}+O(u^3).
  \end{aligned}
  \]
  The denominator is \(\bigl(u+O(u^2)\bigr)^2=u^2+O(u^3)\). The quotient is \(\frac12+O(u)\). Therefore \(\lim_{x\to 1}f'(x)=\frac12\).
provenance: official-key
steps:
  - Shift \(x=1+u\).
  - Order-2 expansions of \(\ln(1+u)\) and \(1/(1+u)\).
  - Leading terms of the numerator and the denominator, then the limit \(\frac12\).
verification:
  checks:
    - expr: series(log(1+u), u, 0, 3).removeO()
      expected: u - u**2/2
    - expr: series(1/(1+u), u, 0, 3).removeO()
      expected: 1 - u + u**2
    - expr: limit((log(1+u) - u/(1+u))/log(1+u)**2, u, 0)
      expected: Rational(1, 2)
    - expr: limit(diff((x-1)/log(x), x), x, 1)
      expected: Rational(1, 2)
:::

::: exercise
id: l3-taylor-composition.midterm-2025-ex3
number: "3"
statement: |
  Approximate \(\ln(\cos x)\) by a polynomial function for \(x\) close to zero. Hint: express \(\cos x=1+u\) for some small \(u\), then expand \(\ln(1+u)\) as a polynomial of \(u\).
tier: exam
solution: |
  Write \(\cos x=1+u\) with \(u=\cos x-1\). Then \(u=-x^2/2+O(x^4)\), which is small when \(x\) is small. The expansion \(\ln(1+u)=u+O(u^2)\) and \(u^2=O(x^4)\) give
  \[
  \ln(\cos x)=-\frac{x^2}{2}+O(x^4).
  \]
  The polynomial approximation of order 2 is \(-\dfrac{x^2}{2}\). At order 1 the same expansion is \(0+O(x)\).
provenance: official-key
steps:
  - The substitution \(u=\cos x-1\).
  - The polynomial \(-\frac{x^2}{2}\).
verification:
  checks:
    - expr: series(log(cos(x)), x, 0, 3).removeO()
      expected: -x**2/2
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "3"
  points: 2
:::

::: exercise
id: l3-taylor-composition.midterm-predicted-a-ex3
number: "3"
statement: |
  Approximate \(\ln(1 + \sin x)\) by a polynomial function for \(x\) close to zero, to order 3. Hint: write \(\sin x = u\) and expand \(\ln(1 + u)\).
tier: exam
topics:
  - taylor
  - composition
solution: |
  The expansions \(\sin x = x - \frac{x^3}{6} + O(x^5)\) and \(\ln(1 + u) = u - \frac{u^2}{2} + \frac{u^3}{3} + O(u^4)\) give, with \(u = \sin x\),
  \[
  \begin{aligned}
  u&= x - \frac{x^3}{6} + O(x^4),\\
  u^2&= x^2 + O(x^4),\\
  u^3&= x^3 + O(x^4).
  \end{aligned}
  \]
  Hence
  \[
  \begin{aligned}
  \ln(1 + \sin x)\\
  &=\Bigl(x - \frac{x^3}{6}\Bigr)\\
  &\quad - \frac{x^2}{2} + \frac{x^3}{3} + O(x^4)\\
  &= x - \frac{x^2}{2} + \frac{x^3}{6} + O(x^4).
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Expand ln(1 + u) to order 3.
  - Substitute u = sin x and collect powers through x^3.
verification:
  checks:
    - expr: (x - x**3/6) - x**2/2 + x**3/3 - (x - x**2/2 + x**3/6)
      expected: "0"
    - expr: series(log(1 + sin(x)), x, 0, 4).removeO() - (x - x**2/2 + x**3/6)
      expected: "0"
:::

::: exercise
id: l3-taylor-composition.ex-ln-cos-order-4
tier: exam
topics: [taylor, composition, limits]
statement: |
  (a) Compute
  \[ \lim_{x \to 0} \frac{\ln(\cos x) + \frac{x^2}{2}}{x^4}. \]

  (b) Compute
  \[ \lim_{x \to 0} \frac{\cos x - e^{-x^2/2}}{x^4}. \]
solution: |
  (a) The cosine expansion is \(\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + x^4\cdot\mathrm{small}\). With \(u = \cos x - 1\),
  \[
  \begin{aligned}
  u&= -\frac{x^2}{2} + \frac{x^4}{24}\\
  &\quad + x^4\cdot\mathrm{small},\\
  u^2&= \frac{x^4}{4}\\
  &\quad + x^4\cdot\mathrm{small}.
  \end{aligned}
  \]
  The cube \(u^3\) has order \(6\) and is dropped. The expansion \(\ln(1+u) = u - \frac{u^2}{2} + \cdots\) gives
  \[
  \begin{aligned}
  \ln(\cos x)\\
  &= -\frac{x^2}{2} + \frac{x^4}{24} - \frac{x^4}{8}\\
  &\quad + x^4\cdot\mathrm{small}\\
  &= -\frac{x^2}{2} - \frac{x^4}{12}\\
  &\quad + x^4\cdot\mathrm{small}.
  \end{aligned}
  \]
  The numerator is \(-\frac{x^4}{12} + x^4\cdot\mathrm{small}\), so the limit is \(-\frac{1}{12}\).

  (b) Put \(v = -\frac{x^2}{2}\). The expansion \(e^v = 1 + v + \frac{v^2}{2} + \cdots\) gives
  \[ e^{-x^2/2} = 1 - \frac{x^2}{2} + \frac{x^4}{8} + x^4\cdot\mathrm{small}, \]
  because \(v^2 = \frac{x^4}{4}\) and \(v^3\) has order \(6\). The numerator is
  \[
  \begin{aligned}
  \cos x - e^{-x^2/2}\\
  &= \left(\frac{1}{24} - \frac{1}{8}\right)x^4\\
  &\quad + x^4\cdot\mathrm{small}\\
  &= -\frac{x^4}{12}\\
  &\quad + x^4\cdot\mathrm{small}.
  \end{aligned}
  \]
  The limit is \(-\frac{1}{12}\).
provenance: written-for-site
steps:
  - |
    Expand \(\cos x\) to order \(4\) and set \(u = \cos x - 1\).
  - |
    Keep \(u^2 = \frac{x^4}{4}\) and drop \(u^3\). Then \(\ln(\cos x) = -\frac{x^2}{2} - \frac{x^4}{12}\), and the limit in (a) is \(-\frac{1}{12}\).
  - |
    Expand \(e^{-x^2/2}\) to order \(4\) and subtract from \(\cos x\). The limit in (b) is \(-\frac{1}{12}\).
verification:
  checks:
    - expr: series(log(cos(x)), x, 0, 5).removeO()
      expected: -x**2/2 - x**4/12
    - expr: limit((log(cos(x)) + x**2/2)/x**4, x, 0)
      expected: -1/12
    - expr: series(exp(-x**2/2), x, 0, 5).removeO()
      expected: 1 - x**2/2 + x**4/8
    - expr: limit((cos(x) - exp(-x**2/2))/x**4, x, 0)
      expected: -1/12
:::
