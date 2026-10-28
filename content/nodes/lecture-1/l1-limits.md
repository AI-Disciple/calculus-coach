---
id: l1-limits
lecture: 1
order: 5
title: Limits and limit laws
prerequisites: [l1-functions]
sources:
  - { source: handout, section: "2.3", page: 38 }
  - { source: lecture-notes-1, page: 2 }
  - { source: sheet-0, page: 1 }
  - { source: midterm-app }
  - { source: midterm-2022, page: 1 }
examWeight: medium
examWeightNote: Limits decide the asymptotes in every midterm sketch.
status: reviewed
notation: |
  A limit is written \(\lim_{x\to x_0}\), read as \(x\) approaches \(x_0\). A one-sided limit is written \(x\to a^-\) or \(x\to a^+\). The optional definition uses \(\epsilon\) and \(\delta\). The derivative chapter writes \(\Delta x\) for the change in \(x\).
---

::: section
title: The limit
:::

::: formal-statement
kind: definition
title: Limit
source: { source: lecture-notes-1, page: 2 }
text: |
  \(f\) has a **limit** \(L\) at \(x_0\) if \(f(x)\) approaches \(L\) when \(x\) approaches \(x_0\).
:::

::: plain-explanation
text: |
  The limit tracks \(f(x)\) for \(x\) near \(x_0\). The function is **continuous** at \(x_0\) if \(L=f(x_0)\). The limit can exist when \(x_0\) is outside the domain, and it can exist when \(f(x_0)\) is a different number.
:::

::: visual
kind: limit
caption: |
  Slide \(a\) and use the zoom. Near \(x = 1\) the graph of \(\frac{x^2+2x-3}{x-1}\) has a hole. Both sides approach 4, but \(f(1)\) is not defined.
params:
  f: "(x^2+2x-3)/(x-1)"
  a: 1
:::

::: key-points
text: |
  - The limit \(L\) of \(f\) at \(x_0\) records what \(f(x)\) approaches when \(x\) approaches \(x_0\).
  - The function is continuous at \(x_0\) if \(L=f(x_0)\).
  - The limit can exist when \(x_0\) is outside the domain, and it can exist when \(f(x_0)\) is a different number.
:::

::: going-deeper
title: Epsilon-delta definition
text: |
  Definition 2.3.2. Suppose \(f\) is a function. We say that \(\lim_{x\to a} f(x)=L\) if for every \(\epsilon>0\) there is a \(\delta>0\) so that whenever \(0<|x-a|<\delta\), \(|f(x)-L|<\epsilon\).

  Proofs from this definition are optional.
:::

::: exercise
id: l1-limits.sheet-0-3-3
number: "sheet 0 exercise 3.3"
statement: |
  Evaluate \(\lim_{x\to\infty}\dfrac{1}{x}\). Say whether \(\dfrac{1}{x}\) is continuous.
tier: basic
topics:
  - limits
solution: |
  As \(x\to +\infty\), the denominator \(x\) grows without bound and the numerator is \(1\), so \(1/x\) approaches \(0\). The limit is \(0\).

  The function \(1/x\) is continuous at every real \(x\neq 0\), and infinity is not a point of the domain.
provenance: written-for-site
steps:
  - As \(x\to +\infty\), \(1/x\) approaches \(0\).
  - The function is continuous at every real \(x\neq 0\), and infinity is not a point of the domain.
verification:
  checks:
    - expr: limit(1/x, x, oo)
      expected: "0"
:::

::: section
title: Limit laws, composition and roots
:::

::: formal-statement
kind: theorem
title: Limit laws
source: { source: handout, section: "2.3", page: 44 }
text: |
  Suppose \(\lim_{x\to a} f(x)=L\) and \(\lim_{x\to a} g(x)=M\), and \(k\) is some constant. Then
  \[
  \begin{aligned}
  \lim_{x\to a} kf(x) &= k\lim_{x\to a} f(x)\\
  &=kL,\\
  \lim_{x\to a}(f(x)+g(x)) &= \lim_{x\to a} f(x)+\lim_{x\to a} g(x)\\
  &=L+M,\\
  \lim_{x\to a}(f(x)-g(x)) &= \lim_{x\to a} f(x)-\lim_{x\to a} g(x)\\
  &=L-M,\\
  \lim_{x\to a}(f(x)g(x)) &= \lim_{x\to a} f(x)\cdot\lim_{x\to a} g(x)\\
  &=LM,\\
  \lim_{x\to a}\frac{f(x)}{g(x)} &= \frac{\lim_{x\to a} f(x)}{\lim_{x\to a} g(x)}\\
  &=\frac{L}{M}\quad\text{if } M \text{ is not } 0.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  The parentheses in \(\lim_{x\to a}(f(x)+g(x))\) put the sum inside the limit. The numbers \(L\) and \(M\) are real. The sum law does not apply to \(+\infty+(-\infty)\).

  Because \(\lim_{x\to a}x=a\), a polynomial limit is the polynomial evaluated at \(a\). For a quotient:

  - The law applies when the limit of the denominator is a real number other than \(0\).
  - When that limit is \(0\), the quotient law does not apply. If a common factor cancels, the limit of what remains may exist.
:::

::: worked-example
title: Cancel a common factor
problem: |
  Evaluate \(\lim_{x\to 1}\dfrac{x^2+2x-3}{x-1}\).
solution: |
  At \(x=1\) the denominator equals \(0\), so the quotient law does not apply to this fraction. The numerator factors as \((x-1)(x+3)\). For every \(x\neq 1\),
  \[
  \frac{x^2+2x-3}{x-1}=x+3.
  \]
  The limit of \(x+3\) as \(x\) approaches \(1\) is \(4\). So
  \[
  \lim_{x\to 1}\frac{x^2+2x-3}{x-1}=4.
  \]
:::

::: formal-statement
kind: theorem
title: Composition
source: { source: handout, section: "2.3", page: 45 }
text: |
  Suppose \(\lim_{x\to a} g(x)=L\) and \(f\) is continuous at \(L\), that is \(\lim_{x\to L} f(x)=f(L)\). Then
  \[
  \lim_{x\to a}\bigl(f(g(x))\bigr)=f\Bigl(\lim_{x\to a} g(x)\Bigr)=f(L).
  \]
:::

::: plain-explanation
text: |
  Continuity of \(f\) at the limit of \(g\) is the hypothesis. The limit of \(f(g(x))\) is then \(f\) of that limit.
:::

::: formal-statement
kind: theorem
title: Limit of a root
source: { source: handout, section: "2.3", page: 45 }
text: |
  Suppose \(n\) is a positive integer. Then
  \[
  \lim_{x\to a}\sqrt[n]{x}=\sqrt[n]{a},
  \]
  provided that \(a\) is positive if \(n\) is even.
:::

::: plain-explanation
text: |
  For an even root the two-sided statement requires a positive limit point, because an even root of a negative number is not real.
:::

::: worked-example
title: A root of a continuous inner function
problem: |
  Evaluate \(\lim_{x\to 0}\sqrt{x+4}\).
solution: |
  The inner function is \(x+4\). Its limit as \(x\to 0\) is \(4\). The root law applies to the square root at \(4\), because \(4>0\), and that limit is \(2\). The square root is continuous at \(4\), so the composition theorem gives \(\lim_{x\to 0}\sqrt{x+4}=2\).
:::

::: trap
text: |
  The sum law applies when both limits are real numbers. The combination \(+\infty+(-\infty)\) is not a real number, so the law gives no value for it.

  ### A pair whose sum tends to a number

  Let \(f(x)=x\) and \(g(x)=1-x\). As \(x\to +\infty\), \(f(x)\) tends to \(+\infty\) and \(g(x)\) tends to \(-\infty\). The sum \(f(x)+g(x)\) equals \(1\), so the limit of the sum is \(1\).

  ### A pair whose sum tends to infinity

  Let \(u(x)=x\) and \(v(x)=-2x\). As \(x\to +\infty\), \(u(x)\) tends to \(+\infty\) and \(v(x)\) tends to \(-\infty\). The sum \(u(x)+v(x)\) equals \(-x\), so the limit of the sum is \(-\infty\).

  ### What the two pairs show

  The two pairs have the same kind of infinite limits. The limits of the sums are \(1\) and \(-\infty\). Writing \(+\infty+(-\infty)\) does not name either result.
:::

::: key-points
text: |
  - The limit laws apply when \(\lim_{x\to a} f(x)=L\) and \(\lim_{x\to a} g(x)=M\) are real numbers. The quotient law also needs \(M\neq 0\).
  - If \(f\) is continuous at \(L=\lim_{x\to a} g(x)\), then \(\lim_{x\to a} f(g(x))=f(L)\). For an even root, \(a\) has to be positive.
  - The sum law gives no value for \(+\infty+(-\infty)\). Compute the limit of the summed formula.
:::

::: concept-question
id: l1-limits.q-67e18a1a
question: |
  Evaluate \(\lim_{x \to 0} x\sin\frac{1}{x}\).
options:
  - text: |
      \(0\)
    correct: true
  - text: |
      \(1\)
  - text: |
      Does not exist.
  - text: |
      \(+\infty\)
explanation: |
  \(\bigl|\sin\frac{1}{x}\bigr| \le 1\), so \(\bigl|x\sin\frac{1}{x}\bigr| \le |x|\). The squeeze theorem forces the limit to \(0\).
:::

::: concept-question
id: l1-limits.q-2c621663
question: |
  As \(x\to+\infty\), \(f(x)\) tends to \(+\infty\) and \(g(x)\) tends to \(-\infty\). What can be said about \(\lim_{x\to+\infty}\bigl(f(x)+g(x)\bigr)\)?
options:
  - text: |
      It depends on the formulas of \(f\) and \(g\).
    correct: true
  - text: |
      It equals \(0\).
  - text: |
      It equals \(+\infty\).
  - text: |
      It never exists.
explanation: |
  The sum law needs real limits \(L\) and \(M\), and \(\pm\infty\) are not real numbers.

  - With \(f(x)=x\) and \(g(x)=1-x\) the sum equals \(1\), so the limit is \(1\).
  - With \(f(x)=x\) and \(g(x)=-2x\) the sum equals \(-x\), so the limit is \(-\infty\).

  Both pairs have the same kind of infinite limits, so the formulas decide. The answer \(0\) assumes that \(+\infty\) and \(-\infty\) cancel, and the answer \(+\infty\) assumes that the sum law adds the two limits. Neither pair gives \(0\) or \(+\infty\), and the first pair has a limit, so the answer that it never exists fails too.
:::

::: section
title: One-sided limits
:::

::: formal-statement
kind: definition
title: One-sided limits
source: { source: handout, section: "2.3", page: 46 }
text: |
  - The **left-hand limit** \(\lim_{x\to a^-} f(x)=L\) means that \(f(x)\) approaches \(L\) when \(x\) approaches \(a\) through values less than \(a\).
  - The **right-hand limit** \(\lim_{x\to a^+} f(x)=L\) means that \(f(x)\) approaches \(L\) when \(x\) approaches \(a\) through values greater than \(a\).
:::

::: plain-explanation
text: |
  The two-sided limit equals \(L\) when the left-hand limit and the right-hand limit both equal \(L\). When those two limits differ, the two-sided limit does not exist.

  - The notation \(x\to +\infty\) means that \(x\) runs through large positive values.
  - A limit of \(+\infty\) means that \(f(x)\) grows without bound through positive values.
  - A limit of \(-\infty\) means that \(f(x)\) grows without bound through negative values.
:::

::: visual
kind: limit
caption: |
  Look at the graph of \(\frac{x}{|x|}\) on both sides of \(0\). The left-hand limit is \(-1\) and the right-hand limit is \(1\).
params:
  f: "x/abs(x)"
  a: 0
:::

::: key-points
text: |
  - The two-sided limit equals \(L\) when the left-hand limit and the right-hand limit both equal \(L\). When they differ, the two-sided limit does not exist.
  - For \(x/|x|\) at \(0\) the one-sided limits are \(-1\) and \(1\), so the two-sided limit does not exist.
:::

::: worked-example
title: Left and right limits
problem: |
  Let \(f(x)=\dfrac{x}{|x|}\). Evaluate the one-sided limits at \(0\), and the two-sided limit.
solution: |
  The expression \(x/|x|\) is defined for \(x\neq 0\).

  - For \(x>0\), one has \(|x|=x\), so \(f(x)=1\). The right-hand limit is \(1\).
  - For \(x<0\), one has \(|x|=-x\), so \(f(x)=-1\). The left-hand limit is \(-1\).

  The one-sided limits are \(-1\) and \(1\). They differ, so \(\lim_{x\to 0} f(x)\) does not exist.
:::

::: guided-example
title: One-sided limits of a reciprocal
problem: |
  Evaluate the left-hand and right-hand limits of \(\dfrac{1}{x-2}\) at \(2\). Try each step on paper before you show it.
steps:
  - |
    The left-hand limit uses values \(x<2\). For those values the denominator \(x-2\) is negative.
  - |
    As \(x\) approaches \(2\) from the left, the denominator approaches \(0\) through negative values, and the numerator is \(1\). The fraction is negative and its size grows without bound, so the left-hand limit is \(-\infty\).
  - |
    The right-hand limit uses values \(x>2\). The denominator is then positive and approaches \(0\), so the right-hand limit is \(+\infty\).
  - |
    The one-sided limits are \(-\infty\) and \(+\infty\). They differ, so the two-sided limit at \(2\) does not exist.
:::

::: going-deeper
title: One-sided limits in epsilon-delta form
text: |
  Definition 2.3.12. Suppose that \(f(x)\) is a function.

  - We say that \(\lim_{x\to a^-} f(x)=L\) if for every \(\epsilon>0\) there is a \(\delta>0\) so that whenever \(0<a-x<\delta\), \(|f(x)-L|<\epsilon\).
  - We say that \(\lim_{x\to a^+} f(x)=L\) if for every \(\epsilon>0\) there is a \(\delta>0\) so that whenever \(0<x-a<\delta\), \(|f(x)-L|<\epsilon\).
:::

::: concept-question
id: l1-limits.q-fb3af4c6
question: |
  Evaluate \(\lim_{x \to 0} \sin\frac{1}{x}\).
options:
  - text: |
      Does not exist.
    correct: true
  - text: |
      \(0\)
  - text: |
      \(1\)
  - text: |
      \(+\infty\)
explanation: |
  As \(x \to 0\), the argument \(\frac{1}{x}\) runs off to infinity and sine keeps cycling through every value in \([-1, 1]\). The values never settle.
:::

::: exercise
id: l1-limits.sheet-0-3-2
number: "sheet 0 exercise 3.2"
statement: |
  Evaluate \(\lim_{x\to 0^+}\dfrac{1}{x}\). Say whether \(\dfrac{1}{x}\) is continuous at \(0\).
tier: standard
topics:
  - limits
solution: |
  As \(x\to 0^+\), \(x\) is positive and approaches \(0\), so \(1/x\) is positive and grows without bound. The limit is \(+\infty\).

  The function \(1/x\) is not continuous at \(0\), since \(0\) is outside the domain.
provenance: written-for-site
steps:
  - The right-hand limit is \(+\infty\).
  - Continuity at \(0\) fails because \(0\) is outside the domain.
verification:
  checks:
    - expr: sign(limit(1/x, x, 0, dir='+'))
      expected: "1"
    - expr: 1/limit(1/x, x, 0, dir='+')
      expected: "0"
:::

::: exercise
id: l1-limits.sheet-0-3-4
number: "sheet 0 exercise 3.4"
statement: |
  Evaluate \(\lim_{x\to\infty} e^{1/x}\). Say whether \(e^{1/x}\) is continuous.
tier: standard
topics:
  - limits
solution: |
  As \(x\to +\infty\), the exponent \(1/x\) approaches \(0\). The exponential is continuous at \(0\), and \(e^0=1\), so the limit is \(1\).

  The function \(e^{1/x}\) is continuous at every real \(x\neq 0\), and infinity is not a point of its domain.
provenance: written-for-site
steps:
  - As \(x\to +\infty\), the exponent \(1/x\) approaches \(0\).
  - Continuity of the exponential at \(0\) gives the limit \(1\).
  - The function \(e^{1/x}\) is continuous at every real \(x\neq 0\).
verification:
  checks:
    - expr: limit(exp(1/x), x, oo)
      expected: "1"
:::

::: exercise
id: l1-limits.cancel-common-factor
tier: standard
topics:
  - limits
statement: |
  Evaluate \(\lim_{x\to 2}\dfrac{x^2-4}{x^2-3x+2}\).
solution: |
  At \(x=2\) the denominator equals \(4-6+2=0\), so the quotient law does not apply to this fraction. The numerator and the denominator factor as
  \[
  \begin{aligned}
  x^2-4&=(x-2)(x+2),\\
  x^2-3x+2&=(x-2)(x-1).
  \end{aligned}
  \]
  For every \(x\neq 2\),
  \[
  \frac{x^2-4}{x^2-3x+2}=\frac{x+2}{x-1}.
  \]
  As \(x\to 2\), the numerator \(x+2\) tends to \(4\) and the denominator \(x-1\) tends to \(1\), which is not \(0\). The quotient law gives the limit \(\frac{4}{1}=4\).
provenance: written-for-site
steps:
  - The denominator is \(0\) at \(x=2\), so the quotient law does not apply directly.
  - Both polynomials factor with the common factor \(x-2\), which cancels for \(x\neq 2\).
  - The remaining quotient \(\frac{x+2}{x-1}\) has limit \(4\).
verification:
  checks:
    - expr: limit((x**2 - 4)/(x**2 - 3*x + 2), x, 2)
      expected: "4"
:::

::: exercise
id: l1-limits.sheet-0-3-1
number: "sheet 0 exercise 3.1"
statement: |
  Evaluate \(\lim_{x\to 0}\sqrt{x}\). Say whether \(\sqrt{x}\) is continuous at \(0\).
tier: exam
topics:
  - limits
solution: |
  For \(x<0\), \(\sqrt{x}\) is not a real number. The right-hand limit is \(0\). In the reals there is no two-sided limit at \(0\), because values \(x<0\) give no real outputs.

  The value \(\sqrt{0}=0\) puts \(0\) in the domain, and the right-hand limit matches that value, so \(\sqrt{x}\) is continuous from the right at \(0\).
provenance: written-for-site
steps:
  - For \(x<0\) the expression is not real, so there is no two-sided real limit.
  - The right-hand limit equals \(0\).
  - Continuity from the right holds because \(\sqrt{0}=0\) matches that limit.
verification:
  checks:
    - expr: limit(sqrt(x), x, 0, dir='+')
      expected: "0"
    - expr: sqrt(0)
      expected: "0"
:::

::: exercise
id: l1-limits.sheet-0-3-5
number: "sheet 0 exercise 3.5"
statement: |
  Evaluate \(\lim_{x\to 0}\sin\dfrac{1}{x}\). Say whether \(\sin\dfrac{1}{x}\) is continuous at \(0\).
tier: exam
topics:
  - limits
solution: |
  Let \(n\) be a positive integer. Along \(x_n=1/(\pi/2+2\pi n)\), one has \(x_n\to 0\) and
  \[
  \sin\frac{1}{x_n}=\sin\Bigl(\frac{\pi}{2}+2\pi n\Bigr)=1.
  \]
  Along \(y_n=1/(3\pi/2+2\pi n)\), one has \(y_n\to 0\) and \(\sin(1/y_n)=-1\).

  Both sequences approach \(0\), and the function values approach \(1\) and \(-1\). The limit does not exist.

  The function \(\sin(1/x)\) is not continuous at \(0\), since \(0\) is outside the domain.
provenance: written-for-site
steps:
  - Along \(1/(\pi/2+2\pi n)\) the sine equals \(1\).
  - Along \(1/(3\pi/2+2\pi n)\) the sine equals \(-1\).
  - The limit does not exist.
  - Continuity at \(0\) fails because \(0\) is outside the domain.
verification:
  checks:
    - expr: limit(sin(1/(1/(pi/2 + 2*pi*symbols('n', integer=True, positive=True)))), symbols('n', integer=True, positive=True), oo)
      expected: "1"
    - expr: limit(sin(1/(1/(3*pi/2 + 2*pi*symbols('n', integer=True, positive=True)))), symbols('n', integer=True, positive=True), oo)
      expected: "-1"
:::

::: exercise
id: l1-limits.midterm-2022-ex1iii
statement: |
  Let \(f(x)=\sqrt{1-x^2}\) and \(f'(x)=-x/\sqrt{1-x^2}\). Evaluate \(\lim_{x\to -1^+} f'(x)\) and \(\lim_{x\to 1^-} f'(x)\).
tier: exam
topics:
  - limits
  - curve-sketching
pastExam:
  year: 2022
  paper: Midterm
  question: 1iii
  points: 1
solution: |
  - As \(x\to -1^+\), the numerator \(-x\) tends to \(1\) and the denominator \(\sqrt{1-x^2}\) tends to \(0^+\), so \(f'(x)\to +\infty\).
  - As \(x\to 1^-\), the numerator tends to \(-1\) and the denominator tends to \(0^+\), so \(f'(x)\to -\infty\).
provenance: official-key
steps:
  - One-sided limit at \(-1\).
  - One-sided limit at \(1\).
verification:
  checks:
    - expr: limit(sqrt(1-x**2)/(-x), x, -1, dir='+')
      expected: "0"
    - expr: sign((-(-Rational(9,10)))/sqrt(1-(-Rational(9,10))**2))
      expected: "1"
    - expr: limit(sqrt(1-x**2)/(-x), x, 1, dir='-')
      expected: "0"
    - expr: sign((-Rational(9,10))/sqrt(1-(Rational(9,10))**2))
      expected: "-1"
:::

::: sheet-item
id: l1-limits.sheet-sum-infinity
category: trap
text: |
  If the limits of \(f\) and \(g\) are real numbers, then \(\lim_{x\to a}(f(x)+g(x))\) equals the sum of those limits. The law is not applicable to \(+\infty+(-\infty)\).
:::

::: sheet-item
id: l1-limits.sheet-quotient
category: formula
text: |
  If \(\lim_{x\to a} f(x)=L\) and \(\lim_{x\to a} g(x)=M\) with \(M\neq 0\), then \(\lim_{x\to a}\dfrac{f(x)}{g(x)}=\dfrac{L}{M}\).
:::

::: exercise
id: l1-limits.ex-algebraic-limits
tier: standard
topics: [limits]
statement: |
  Evaluate each limit.

  (a) \(\lim_{x\to 3}\dfrac{\sqrt{x+1}-2}{x-3}\)

  (b) \(\lim_{x\to 1}\dfrac{x^{3}-1}{x^{2}-1}\)

  (c) \(\lim_{x\to 0}\left(\dfrac{1}{x}-\dfrac{1}{x^{2}+x}\right)\)
solution: |
  (a) Both the numerator and the denominator are \(0\) at \(x=3\). Multiply by the conjugate \(\sqrt{x+1}+2\). The numerator becomes \((x+1)-4=x-3\), so for \(x\neq 3\)
  \[
  \frac{\sqrt{x+1}-2}{x-3}=\frac{1}{\sqrt{x+1}+2}.
  \]
  The root is continuous at \(4\), so the denominator tends to \(\sqrt{4}+2=4\). The limit is \(\frac{1}{4}\).

  (b) Factor
  \[
  \begin{aligned}
  x^{3}-1&=(x-1)(x^{2}+x+1),\\
  x^{2}-1&=(x-1)(x+1).
  \end{aligned}
  \]
  For \(x\neq 1\) the quotient equals \(\frac{x^{2}+x+1}{x+1}\). The limit of the numerator is \(3\) and the limit of the denominator is \(2\), which is not \(0\). The limit is \(\frac{3}{2}\).

  (c) Both terms are unbounded near \(0\), so the sum law does not apply. Use the common denominator \(x(x+1)\), since \(x^{2}+x=x(x+1)\):
  \[
  \frac{1}{x}-\frac{1}{x(x+1)}=\frac{(x+1)-1}{x(x+1)}=\frac{1}{x+1}.
  \]
  This holds for \(x\neq 0\) and \(x\neq -1\). The limit as \(x\to 0\) is \(1\).
provenance: written-for-site
steps:
  - In (a), multiply by the conjugate and cancel \(x-3\).
  - In (b), factor both polynomials and cancel \(x-1\).
  - In (c), combine the fractions and cancel \(x\).
verification:
  checks:
    - expr: limit((sqrt(x + 1) - 2)/(x - 3), x, 3)
      expected: 1/4
    - expr: limit((x**3 - 1)/(x**2 - 1), x, 1)
      expected: 3/2
    - expr: limit(1/x - 1/(x**2 + x), x, 0)
      expected: "1"
:::

::: exercise
id: l1-limits.ex-one-sided-limits
tier: standard
topics: [limits]
statement: |
  (a) Find the left-hand and right-hand limits of \(\dfrac{x^{2}-1}{|x-1|}\) at \(x=1\). Does the two-sided limit exist?

  (b) Find the left-hand and right-hand limits of \(\dfrac{1}{(x-2)^{2}}\) and of \(\dfrac{1}{x-2}\) at \(x=2\). For which of the two does the two-sided limit exist?
solution: |
  (a) For \(x\neq 1\), \(x^{2}-1=(x-1)(x+1)\).

  - For \(x>1\), \(|x-1|=x-1\), so the quotient equals \(x+1\) and the right-hand limit is \(2\).
  - For \(x<1\), \(|x-1|=-(x-1)\), so the quotient equals \(-(x+1)\) and the left-hand limit is \(-2\).

  The one-sided limits differ, so the two-sided limit does not exist.

  (b) The two functions behave as follows.

  - For \(\frac{1}{(x-2)^{2}}\), the denominator is positive on both sides and tends to \(0\). Both one-sided limits are \(+\infty\), and the two-sided limit is \(+\infty\).
  - For \(\frac{1}{x-2}\), the denominator is positive for \(x>2\) and negative for \(x<2\). The right-hand limit is \(+\infty\) and the left-hand limit is \(-\infty\), so the two-sided limit does not exist.

  The two-sided limit exists for \(\frac{1}{(x-2)^{2}}\) only.
provenance: written-for-site
steps:
  - In (a), the quotient equals \(x+1\) on the right and \(-(x+1)\) on the left, so the limits are \(2\) and \(-2\).
  - In (b), the squared denominator gives \(+\infty\) on both sides.
  - In (b), the unsquared denominator gives \(+\infty\) and \(-\infty\).
verification:
  checks:
    - expr: limit((x**2 - 1)/Abs(x - 1), x, 1, dir='+')
      expected: "2"
    - expr: limit((x**2 - 1)/Abs(x - 1), x, 1, dir='-')
      expected: "-2"
    - expr: (1/limit(1/(x - 2)**2, x, 2), sign(limit(1/(x - 2)**2, x, 2)))
      expected: (0, 1)
    - expr: (1/limit(1/(x - 2), x, 2, dir='+'), sign(limit(1/(x - 2), x, 2, dir='+')))
      expected: (0, 1)
    - expr: (1/limit(1/(x - 2), x, 2, dir='-'), sign(limit(1/(x - 2), x, 2, dir='-')))
      expected: (0, -1)
:::
