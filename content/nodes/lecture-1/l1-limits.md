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
  - { source: handout, section: "4.10" }
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

::: exercise
id: l1-limits.handout-2-3-1
number: "2.3.1"
tier: basic
topics:
  - limits
statement: |
  Compute the limit \(\displaystyle\lim_{x\to 3}\frac{x^{2}+x-12}{x-3}\). If a limit does not exist, explain why.
solution: |
  At \(x=3\) the denominator is \(0\), and the numerator is \(9+3-12=0\). The quotient law does not apply. The numerator factors as
  \[
  x^{2}+x-12=(x-3)(x+4).
  \]
  For every \(x\neq 3\),
  \[
  \frac{x^{2}+x-12}{x-3}=x+4.
  \]
  The limit of \(x+4\) as \(x\) approaches \(3\) is \(7\). So
  \[
  \lim_{x\to 3}\frac{x^{2}+x-12}{x-3}=7.
  \]
provenance: handout-answer
steps:
  - The numerator and the denominator are both \(0\) at \(x=3\).
  - Factor the numerator as \((x-3)(x+4)\) and cancel \(x-3\).
  - The limit of \(x+4\) is \(7\).
verification:
  checks:
    - expr: 'factor(x**2 + x - 12)'
      expected: "(x - 3)*(x + 4)"
    - expr: 'limit((x**2 + x - 12)/(x - 3), x, 3)'
      expected: "7"
:::


::: exercise
id: l1-limits.handout-2-3-4
number: "2.3.4"
tier: standard
topics:
  - limits
statement: |
  Compute \(\displaystyle\lim_{x\to 2}\frac{x^{2}+x-12}{x-2}\). If the limit does not exist, explain why.
solution: |
  At \(x=2\) the denominator is \(0\). The numerator is \(4+2-12=-6\), which is not \(0\). The numerator has no factor \(x-2\), so nothing cancels, and the quotient law does not apply.

  Near \(x=2\) the numerator is close to \(-6\), so it is negative.

  - For \(x>2\), the denominator \(x-2\) is positive and tends to \(0\). The quotient is negative and grows in size without bound, so the right-hand limit is \(-\infty\).
  - For \(x<2\), the denominator is negative and tends to \(0\). The quotient is positive and grows without bound, so the left-hand limit is \(+\infty\).

  The one-sided limits are infinite and have opposite signs, so they differ. The limit does not exist.
provenance: handout-answer
steps:
  - The numerator tends to \(-6\), not \(0\), and the denominator tends to \(0\).
  - The right-hand limit is \(-\infty\) and the left-hand limit is \(+\infty\).
  - The one-sided limits differ, so the limit does not exist.
verification:
  checks:
    - expr: '(x**2 + x - 12).subs(x, 2)'
      expected: "-6"
    - expr: '(1/limit((x**2 + x - 12)/(x - 2), x, 2, dir="+"), sign(limit((x**2 + x - 12)/(x - 2), x, 2, dir="+")))'
      expected: "(0, -1)"
    - expr: '(1/limit((x**2 + x - 12)/(x - 2), x, 2, dir="-"), sign(limit((x**2 + x - 12)/(x - 2), x, 2, dir="-")))'
      expected: "(0, 1)"
:::


::: exercise
id: l1-limits.handout-2-3-5
number: "2.3.5"
tier: standard
topics:
  - limits
statement: |
  Compute \(\displaystyle\lim_{x\to 1}\frac{\sqrt{x+8}-3}{x-1}\).
solution: |
  At \(x=1\) the numerator is \(\sqrt{9}-3=0\) and the denominator is \(0\). Multiply the numerator and the denominator by the conjugate \(\sqrt{x+8}+3\). The numerator becomes
  \[
  (\sqrt{x+8}-3)(\sqrt{x+8}+3)=(x+8)-9=x-1.
  \]
  For every \(x\neq 1\) in the domain,
  \[
  \frac{\sqrt{x+8}-3}{x-1}=\frac{1}{\sqrt{x+8}+3}.
  \]
  The square root is continuous at \(9\), so \(\sqrt{x+8}\) tends to \(\sqrt{9}=3\) as \(x\to 1\). The denominator tends to \(3+3=6\), which is not \(0\). The quotient law gives
  \[
  \lim_{x\to 1}\frac{\sqrt{x+8}-3}{x-1}=\frac{1}{6}.
  \]
provenance: handout-answer
steps:
  - Multiply by the conjugate \(\sqrt{x+8}+3\) so that the numerator becomes \(x-1\).
  - Cancel \(x-1\) to get \(\frac{1}{\sqrt{x+8}+3}\).
  - The denominator tends to \(6\), so the limit is \(\frac{1}{6}\).
verification:
  checks:
    - expr: 'simplify((sqrt(x + 8) - 3)/(x - 1) - 1/(sqrt(x + 8) + 3))'
      expected: "0"
    - expr: 'limit((sqrt(x + 8) - 3)/(x - 1), x, 1)'
      expected: "1/6"
:::


::: exercise
id: l1-limits.handout-2-3-11
number: "2.3.11"
tier: standard
topics:
  - limits
statement: |
  Compute \(\displaystyle\lim_{x\to 0^{+}}\frac{\sqrt{2-x^{2}}}{x}\). If the limit does not exist, explain why.
solution: |
  The numerator is a square root of an inner function that tends to \(2\). The root is continuous at \(2\), so the numerator tends to \(\sqrt{2}\), which is positive.

  The denominator tends to \(0\) through positive values, because \(x>0\). The quotient law does not apply, since the limit of the denominator is \(0\). Nothing cancels, because the numerator does not tend to \(0\).

  For small \(x>0\) the quotient is positive and close to \(\frac{\sqrt{2}}{x}\), which grows without bound. So
  \[
  \lim_{x\to 0^{+}}\frac{\sqrt{2-x^{2}}}{x}=+\infty.
  \]
  The values do not approach a real number, so the limit does not exist as a finite limit.
provenance: handout-answer
steps:
  - The numerator tends to \(\sqrt{2}\), which is not \(0\).
  - The denominator tends to \(0\) through positive values.
  - The quotient grows without bound, so the limit is \(+\infty\) and no finite limit exists.
verification:
  checks:
    - expr: 'limit(sqrt(2 - x**2), x, 0)'
      expected: "sqrt(2)"
    - expr: '(1/limit(sqrt(2 - x**2)/x, x, 0, dir="+"), sign(limit(sqrt(2 - x**2)/x, x, 0, dir="+")))'
      expected: "(0, 1)"
:::


::: exercise
id: l1-limits.handout-2-3-13
number: "2.3.13"
tier: standard
topics:
  - limits
statement: |
  Compute \(\displaystyle\lim_{x\to a}\frac{x^{3}-a^{3}}{x-a}\).
solution: |
  Here \(a\) is a constant. At \(x=a\) the numerator and the denominator are both \(0\). The numerator is a difference of cubes:
  \[
  x^{3}-a^{3}=(x-a)(x^{2}+ax+a^{2}).
  \]
  For every \(x\neq a\),
  \[
  \frac{x^{3}-a^{3}}{x-a}=x^{2}+ax+a^{2}.
  \]
  A polynomial has the limit equal to its value at \(a\):
  \[
  \begin{aligned}
  \lim_{x\to a}\frac{x^{3}-a^{3}}{x-a}&=a^{2}+a\cdot a+a^{2}\\
  &=3a^{2}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Factor \(x^{3}-a^{3}=(x-a)(x^{2}+ax+a^{2})\).
  - Cancel \(x-a\) for \(x\neq a\).
  - Evaluate the polynomial \(x^{2}+ax+a^{2}\) at \(x=a\) to get \(3a^{2}\).
verification:
  checks:
    - expr: 'factor(x**3 - a**3)'
      expected: "(x - a)*(x**2 + a*x + a**2)"
    - expr: 'limit((x**3 - a**3)/(x - a), x, a)'
      expected: "3*a**2"
:::


::: exercise
id: l1-limits.handout-2-3-15
number: "2.3.15"
tier: basic
topics:
  - limits
statement: |
  Compute \(\displaystyle\lim_{x\to 1}f(x)\), where
  \[
  f(x)=\begin{cases}
  x-5 & \text{if } x\neq 1,\\
  7 & \text{if } x=1.
  \end{cases}
  \]
solution: |
  The limit at \(1\) depends only on the values of \(f\) at points \(x\neq 1\) near \(1\). For those points \(f(x)=x-5\). So
  \[
  \lim_{x\to 1}f(x)=\lim_{x\to 1}(x-5)=-4.
  \]
  The value \(f(1)=7\) plays no role in the limit. It differs from the limit, so \(f\) is not continuous at \(1\).
provenance: handout-answer
steps:
  - For \(x\neq 1\) the function equals \(x-5\).
  - The limit of \(x-5\) at \(1\) is \(-4\).
  - The value \(f(1)=7\) does not enter the limit.
verification:
  checks:
    - expr: 'limit(x - 5, x, 1)'
      expected: "-4"
    - expr: 'limit(x - 5, x, 1) - 7'
      expected: "-11"
:::


::: exercise
id: l1-limits.handout-2-3-18
number: "2.3.18"
tier: standard
topics:
  - limits
statement: |
  A function \(f\) has the following graph.

  - For \(x<-2\), \(f(x)=6\), with an open circle at \((-2,6)\). The value \(f(-2)=8\) is a separate filled point.
  - For \(-2<x<0\), \(f\) decreases from an open circle at \((-2,2)\), through the \(x\)-axis near \(x=-1.2\), down to an open circle at \((0,-2)\). At \(x=0\), the value is \(f(0)=-\frac{3}{2}\), a filled point.
  - For \(0<x\le 2\), \(f\) rises steeply from an open circle at \((0,-1)\), passing through about \((1,3)\), to a filled point \((2,7)\).
  - For \(x>2\), \(f\) starts at an open circle at \((2,0)\) and rises steeply to about \(8\) near \(x=3.5\). It stays near \(8\) until \(x=4.5\) and then rises to about \(10\) at \(x=5.3\).

  Find: (a) \(\lim_{x\to 4}f(x)\), (b) \(\lim_{x\to -3}f(x)\), (c) \(\lim_{x\to 0}f(x)\), (d) \(\lim_{x\to 0^{-}}f(x)\), (e) \(\lim_{x\to 0^{+}}f(x)\), (f) \(f(-2)\), (g) \(\lim_{x\to 2^{-}}f(x)\), (h) \(\lim_{x\to -2^{-}}f(x)\), (i) \(\lim_{x\to 0}f(x+1)\), (j) \(f(0)\), (k) \(\lim_{x\to 1^{-}}f(x-4)\), (l) \(\lim_{x\to 0^{+}}f(x-2)\).
solution: |
  A limit reads the graph near the point and ignores the filled value at the point. For a shifted input, name the inner variable and find where it tends.

  - (a) Near \(x=4\) the graph stays near height \(8\). The limit is \(8\).
  - (b) For \(x<-2\) the graph is the horizontal line at height \(6\). The limit is \(6\).
  - (c) The left-hand limit is \(-2\) and the right-hand limit is \(-1\). They differ, so the limit does not exist.
  - (d) Approaching \(0\) from the left, the graph tends to the open circle at height \(-2\). The limit is \(-2\).
  - (e) Approaching \(0\) from the right, the graph tends to the open circle at height \(-1\). The limit is \(-1\).
  - (f) The filled point at \(x=-2\) has height \(8\). The value is \(f(-2)=8\).
  - (g) Approaching \(2\) from the left, the graph rises to the filled point \((2,7)\). The limit is \(7\).
  - (h) Approaching \(-2\) from the left, the graph is the line at height \(6\). The limit is \(6\).
  - (i) Put \(u=x+1\). As \(x\to 0\), \(u\to 1\) from both sides, and the graph passes through about \((1,3)\). The limit is \(3\).
  - (j) The filled point at \(x=0\) has height \(-\frac{3}{2}\). The value is \(f(0)=-\frac{3}{2}\).
  - (k) Put \(u=x-4\). As \(x\to 1^{-}\), \(u\to -3\) from the left. For \(u<-2\) the graph is at height \(6\). The limit is \(6\).
  - (l) Put \(u=x-2\). As \(x\to 0^{+}\), \(u\to -2\) from the right, so \(u>-2\). On \((-2,0)\) the graph starts at the open circle at height \(2\). The limit is \(2\).

  The answers are (a) \(8\), (b) \(6\), (c) does not exist, (d) \(-2\), (e) \(-1\), (f) \(8\), (g) \(7\), (h) \(6\), (i) \(3\), (j) \(-\frac{3}{2}\), (k) \(6\), (l) \(2\).
provenance: handout-answer
steps:
  - Read one-sided limits from the open circles and ignore filled values.
  - For parts (c) the one-sided limits \(-2\) and \(-1\) differ.
  - For a shifted input, find where the inner variable tends and from which side.
verification:
  checks:
    - expr: '(limit(-2*x - 2, x, 0, dir="-"), limit(4*x - 1, x, 0, dir="+"))'
      expected: "(-2, -1)"
    - expr: '(limit(-2*x - 2, x, -2, dir="+"), (4*x - 1).subs(x, 2), (4*x - 1).subs(x, 1))'
      expected: "(2, 7, 3)"
    - expr: '(6, 6, 8, Rational(-3, 2))'
      expected: "(6, 6, 8, -3/2)"
:::


::: exercise
id: l1-limits.handout-4-10-48
number: "4.10.48"
tier: basic
topics:
  - limits
statement: |
  Compute \(\displaystyle\lim_{x\to 2}\frac{x^{3}-6x-2}{x^{3}-4x}\).
solution: |
  Factor the denominator:
  \[
  x^{3}-4x=x(x-2)(x+2).
  \]
  At \(x=2\) the denominator is \(0\). The numerator is \(8-12-2=-6\), which is not \(0\). The numerator has no factor \(x-2\), so nothing cancels, and the quotient law does not apply.

  Near \(x=2\), the factors \(x\) and \(x+2\) are close to \(2\) and \(4\), so they are positive. The sign of the denominator is the sign of \(x-2\). The numerator is close to \(-6\), so it is negative.

  - For \(x>2\), the denominator is positive and tends to \(0\). The quotient is negative and grows in size without bound, so the right-hand limit is \(-\infty\).
  - For \(x<2\), the denominator is negative and tends to \(0\). The quotient is positive and grows without bound, so the left-hand limit is \(+\infty\).

  The one-sided limits differ, so the limit does not exist.
provenance: handout-answer
steps:
  - The numerator tends to \(-6\) and the denominator \(x(x-2)(x+2)\) tends to \(0\).
  - The right-hand limit is \(-\infty\) and the left-hand limit is \(+\infty\).
  - The one-sided limits differ, so the limit does not exist.
verification:
  checks:
    - expr: 'factor(x**3 - 4*x)'
      expected: "x*(x - 2)*(x + 2)"
    - expr: '(x**3 - 6*x - 2).subs(x, 2)'
      expected: "-6"
    - expr: '(1/limit((x**3 - 6*x - 2)/(x**3 - 4*x), x, 2, dir="+"), sign(limit((x**3 - 6*x - 2)/(x**3 - 4*x), x, 2, dir="+")))'
      expected: "(0, -1)"
    - expr: '(1/limit((x**3 - 6*x - 2)/(x**3 - 4*x), x, 2, dir="-"), sign(limit((x**3 - 6*x - 2)/(x**3 - 4*x), x, 2, dir="-")))'
      expected: "(0, 1)"
:::
