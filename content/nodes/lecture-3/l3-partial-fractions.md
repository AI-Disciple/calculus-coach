---
id: l3-partial-fractions
lecture: 3
order: 9
title: Rational functions and partial fractions
prerequisites: [l3-substitution]
sources:
  - { source: handout, section: "8.5", page: 180 }
  - { source: handout, section: "8.7", page: 189 }
  - { source: midterm-app }
examWeight: not-examined
examWeightNote: Partial fractions have never been asked on a midterm or a final.
status: reviewed
---

::: section
title: Distinct linear factors
:::

::: formal-statement
kind: method
title: Distinct linear factors
source: { source: handout, section: "8.5", page: 180 }
text: |
  If \(x^{2}+bx+c=(x-r)(x-s)\) with \(r\) different from \(s\), and if \(p(x)\) has degree less than 2, then
  \[
  \frac{p(x)}{(x-r)(x-s)}=\frac{A}{x-r}+\frac{B}{x-s}
  \]
  for constants \(A\) and \(B\). Solve for those constants by reversing
  \[
  \frac{A}{x-r}+\frac{B}{x-s}=\frac{(A+B)x-As-Br}{(x-r)(x-s)}.
  \]
  Each term integrates to a logarithm.
:::

::: plain-explanation
text: |
  A **rational function** is a quotient of polynomials. The fraction is **proper** when the numerator has lower degree than the denominator. If the numerator's degree is at least the denominator's degree, divide first and split the remainder.

  For a proper fraction with denominator \((x-r)(x-s)\):

  1. Cover the factor \(x-r\) and substitute \(x=r\) into what remains. That value is \(A\).
  2. Cover \(x-s\) and substitute \(x=s\) to obtain \(B\).

  The integral of \(\frac{A}{x-r}\) is \(A\ln|x-r|\).
:::

::: worked-example
title: Two distinct linear factors
problem: |
  Find \(\int\frac{x^{3}}{(x-2)(x+3)}\,dx\).
solution: |
  The integrand is \(\frac{x^{3}}{(x-2)(x+3)}\). The denominator \(x^{2}+x-6\) has degree 2, and the numerator has degree 3, so divide first. Expanding gives \((x-1)(x^{2}+x-6)=x^{3}-7x+6\). Subtracting that product from \(x^{3}\) leaves the remainder \(7x-6\), so
  \[
  \begin{aligned}
  &\frac{x^{3}}{(x-2)(x+3)}\\
  &=x-1+\frac{7x-6}{(x-2)(x+3)}.
  \end{aligned}
  \]
  The remainder is proper. Set
  \[
  \frac{7x-6}{(x-2)(x+3)}=\frac{A}{x-2}+\frac{B}{x+3}.
  \]
  Clearing the denominator gives
  \[
  A(x+3)+B(x-2)=7x-6.
  \]

  - The value of \(A\) comes from \(x=2\): \(5A=8\), so \(A=\frac{8}{5}\).
  - The value of \(B\) comes from \(x=-3\): \(-5B=-27\), so \(B=\frac{27}{5}\).

  These constants rebuild the numerator, since \(\frac{8}{5}+\frac{27}{5}=7\) and \(3\cdot\frac{8}{5}-2\cdot\frac{27}{5}=-6\). An antiderivative is
  \[
  \frac{x^{2}}{2}-x+\frac{8}{5}\ln|x-2|+\frac{27}{5}\ln|x+3|+C.
  \]
:::

::: trap
text: |
  A partial-fraction split applies to a **proper fraction**, one whose numerator has lower degree than the denominator. In \(\frac{x^{2}}{x^{2}+1}\) the degrees are equal, so divide first. Writing \(\frac{x^{2}}{x^{2}+1}=\frac{Ax+B}{x^{2}+1}\) requires
  \[
  Ax+B=x^{2}\quad\text{at every }x.
  \]

  - At \(x=0\) this gives \(B=0\).
  - At \(x=1\) this gives \(A=1\).
  - At \(x=2\) the left side then equals 2 and the right side equals 4, so the setup fails.

  Division gives
  \[
  \frac{x^{2}}{x^{2}+1}=1-\frac{1}{x^{2}+1}.
  \]
:::

::: key-points
text: |
  - For a proper fraction with distinct linear factors, \(\frac{p(x)}{(x-r)(x-s)}=\frac{A}{x-r}+\frac{B}{x-s}\), where \(A\) comes from covering \(x-r\) and substituting \(x=r\), and \(B\) from covering \(x-s\) and substituting \(x=s\).
  - The numerator must have lower degree than the denominator. If it does not, divide first and split the remainder.
  - The usual slip writes \(\frac{x^{2}}{x^{2}+1}=\frac{Ax+B}{x^{2}+1}\), which fails. Division gives \(1-\frac{1}{x^{2}+1}\).
  - Each term \(\frac{A}{x-r}\) integrates to \(A\ln|x-r|\).
:::

::: concept-question
id: l3-partial-fractions.q-1bdd654a
question: |
  Compute \(\int_{0}^{1/2} \frac{1}{1 - x^{2}}\, dx\).
options:
  - text: |
      \(\frac{\ln 3}{2}\)
    correct: true
  - text: |
      \(\ln 3\)
  - text: |
      \(\frac{\pi}{6}\)
  - text: |
      \(\frac{\ln 2}{2}\)
explanation: |
  Partial fractions give
  \[
  \frac{1}{1 - x^{2}} = \frac{1}{2}\bigl(\frac{1}{1 - x} + \frac{1}{1 + x}\bigr).
  \]
  The antiderivative is
  \[
  \frac{1}{2}\ln\bigl|\frac{1 + x}{1 - x}\bigr|.
  \]
  It equals \(\frac{\ln 3}{2}\) from 0 to \(\frac{1}{2}\).
:::

::: exercise
id: l3-partial-fractions.f3
tier: basic
topics: [partial-fractions]
statement: |
  Compute \(\int_0^1\frac{2x+3}{x^2+3x+2}\,dx\).
solution: |
  The numerator is the derivative of the denominator.

  \[
  \left[\ln(x^2+3x+2)\right]_0^1=\ln 6-\ln 2=\ln 3.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate((2*x+3)/(x**2+3*x+2), (x, 0, 1))
      expected: "log(3)"
:::

::: section
title: Repeated linear factor
:::

::: formal-statement
kind: method
title: Repeated linear factor
source: { source: handout, section: "8.5", page: 180 }
text: |
  If the denominator is \((ax+b)^{n}\), substitute \(u=ax+b\). Then:

  - The denominator becomes \(u^{n}\).
  - Each \(x\) in the numerator is \(\frac{u-b}{a}\).
  - \(dx=\frac{du}{a}\).

  A proper numerator \(Ax+B\) over the square \((x-r)^{2}\) splits into both powers,
  \[
  \frac{Ax+B}{(x-r)^{2}}=\frac{A}{x-r}+\frac{Ar+B}{(x-r)^{2}}.
  \]
:::

::: plain-explanation
text: |
  Substitute \(u=x-r\). Then:

  1. \(x=u+r\) and \(dx=du\).
  2. The numerator \(Ax+B\) becomes \(Au+(Ar+B)\).
  3. Dividing by \(u^{2}\) leaves \(\frac{A}{u}+\frac{Ar+B}{u^{2}}\).
  4. The power \(-1\) integrates to a logarithm, and the power \(-2\) integrates by the power rule.

  If \((x-r)^{2}\) is one factor among others, the decomposition carries both of those powers, together with a term for each other factor.
:::

::: trap
text: |
  A factor \((x-r)^{2}\) contributes both \(\frac{A}{x-r}\) and \(\frac{B}{(x-r)^{2}}\). For \(\frac{x}{(x-1)^{2}}\), the single-term setup \(\frac{B}{(x-1)^{2}}\) clears to \(x=B\). That equation gives \(B=0\) at \(x=0\) and \(B=2\) at \(x=2\), so no constant \(B\) works. The two-term split holds,
  \[
  \frac{x}{(x-1)^{2}}=\frac{1}{x-1}+\frac{1}{(x-1)^{2}},
  \]
  because \((x-1)+1=x\).
:::

::: key-points
text: |
  - A factor \((x-r)^{2}\) contributes both \(\frac{A}{x-r}\) and \(\frac{B}{(x-r)^{2}}\). Substituting \(u=x-r\) shows this: \(\frac{Ax+B}{(x-r)^{2}}=\frac{A}{x-r}+\frac{Ar+B}{(x-r)^{2}}\).
  - The power \(-1\) integrates to a logarithm, and the power \(-2\) integrates by the power rule.
  - The usual slip writes \(\frac{x}{(x-1)^{2}}\) with the single term \(\frac{B}{(x-1)^{2}}\), which has no solution. The correct split is \(\frac{1}{x-1}+\frac{1}{(x-1)^{2}}\).
:::

::: exercise
id: l3-partial-fractions.ex-8-5-3
number: "8.5.3"
tier: basic
topics: [partial-fractions]
statement: |
  Find \(\int\frac{1}{x^{2}+10x+25}\,dx\).
solution: |
  The denominator is \((x+5)^{2}\). Substitute \(u=x+5\), so \(du=dx\). The integral becomes \(\int u^{-2}\,du\), which equals \(-\frac{1}{u}+C\). An antiderivative is
  \[
  -\frac{1}{x+5}+C.
  \]
provenance: handout-answer
steps:
  - Substitute \(u=x+5\).
  - An antiderivative is \(-\frac{1}{x+5}\).
verification:
  checks:
    - expr: integrate(1/(x**2+10*x+25), x)
      expected: "-1/(x + 5)"
:::

::: section
title: Irreducible quadratic
:::

::: formal-statement
kind: method
title: Irreducible quadratic
source: { source: handout, section: "8.5", page: 180 }
text: |
  If \(x^{2}+bx+c\) has discriminant \(b^{2}-4c<0\), it does not factor into real linear factors. When the numerator has degree at least 2, divide first so the remainder has degree less than 2. Then:

  1. Complete the square.
  2. Split off a multiple of the derivative \(2x+b\), and integrate that piece as a logarithm.
  3. The remaining constant over the completed square integrates to an arctangent.
:::

::: plain-explanation
text: |
  Write the numerator as a multiple of \(2x+b\), plus a constant. The multiple integrates to a logarithm of \(x^{2}+bx+c\). Set
  \[
  a=\sqrt{c-\frac{b^{2}}{4}}.
  \]
  The discriminant is negative, so \(a\) is positive. Then
  \[
  x^{2}+bx+c=\left(x+\frac{b}{2}\right)^{2}+a^{2}.
  \]
  The constant term then has antiderivative
  \[
  \int\frac{dx}{\left(x+\frac{b}{2}\right)^{2}+a^{2}}=\frac{1}{a}\arctan\frac{x+\frac{b}{2}}{a}.
  \]
:::

::: guided-example
title: An irreducible quadratic
problem: |
  Find \(\int\frac{x+1}{x^{2}+4x+8}\,dx\).
steps:
  - |
    The discriminant of \(x^{2}+4x+8\) is \(16-32=-16\), so the quadratic has no real root.
  - |
    The derivative of the denominator is \(2x+4\). Rewrite the numerator as \(x+1=\frac{1}{2}(2x+4)-1\).
  - |
    Complete the square: \(x^{2}+4x+8=(x+2)^{2}+4\).
  - |
    The integral equals
    \[
    \begin{aligned}
    &\frac{1}{2}\int\frac{2x+4}{x^{2}+4x+8}\,dx\\
    &\quad-\int\frac{1}{(x+2)^{2}+4}\,dx.
    \end{aligned}
    \]
  - |
    The first integral is \(\frac{1}{2}\ln|x^{2}+4x+8|\). The second is \(\frac{1}{2}\arctan\frac{x+2}{2}\). An antiderivative is
    \[
    \begin{aligned}
    &\frac{1}{2}\ln|x^{2}+4x+8|\\
    &\quad-\frac{1}{2}\arctan\frac{x+2}{2}+C.
    \end{aligned}
    \]
:::

::: trap
text: |
  Over an irreducible quadratic, write the numerator as a multiple of the derivative of the denominator, plus a constant. The multiple is a logarithm. Suppose the antiderivative of \(\frac{x}{x^{2}+4}\) were \(\frac{1}{2}\arctan\frac{x}{2}\). Its derivative equals \(\frac{1}{x^{2}+4}\). At \(x=0\) the derivative equals \(\frac{1}{4}\) and the integrand equals 0, so the arctangent is the wrong antiderivative. The numerator \(x\) is \(\frac{1}{2}\cdot 2x\), and
  \[
  \int\frac{x}{x^{2}+4}\,dx=\frac{1}{2}\ln(x^{2}+4)+C.
  \]
:::

::: key-points
text: |
  - If \(x^{2}+bx+c\) has discriminant \(b^{2}-4c<0\), write the numerator as a multiple of \(2x+b\) plus a constant. The multiple integrates to a logarithm of \(x^{2}+bx+c\).
  - With \(a=\sqrt{c-\frac{b^{2}}{4}}\), the constant part integrates to \(\frac{1}{a}\arctan\frac{x+\frac{b}{2}}{a}\).
  - The usual slip calls \(\frac{1}{2}\arctan\frac{x}{2}\) the antiderivative of \(\frac{x}{x^{2}+4}\). The numerator is \(\frac{1}{2}\cdot 2x\), and the antiderivative is \(\frac{1}{2}\ln(x^{2}+4)\).
:::

::: exercise
id: l3-partial-fractions.ex-8-5-6
number: "8.5.6"
tier: basic
topics: [partial-fractions]
statement: |
  Find \(\int\frac{1}{x^{2}+10x+29}\,dx\).
solution: |
  The discriminant of \(x^{2}+10x+29\) is \(100-116=-16\), so the quadratic has no real root. Completing the square gives \((x+5)^{2}+4\). With \(u=x+5\) and \(a=2\),
  \[
  \int\frac{dx}{u^{2}+a^{2}}=\frac{1}{a}\arctan\frac{u}{a}.
  \]
  An antiderivative is
  \[
  \frac{1}{2}\arctan\frac{x+5}{2}+C.
  \]
provenance: handout-answer
steps:
  - Complete the square as \((x+5)^{2}+4\).
  - An antiderivative is \(\frac{1}{2}\arctan\frac{x+5}{2}\).
verification:
  checks:
    - expr: integrate(1/(x**2+10*x+29), x)
      expected: "atan(x/2 + Rational(5, 2))/2"
:::

::: exercise
id: l3-partial-fractions.f1
tier: standard
topics: [partial-fractions]
statement: |
  Compute \(\int_2^3\frac{dx}{x^2-1}\).
solution: |
  Decompose
  \[
  \frac{1}{x^2-1}=\frac{1}{2}\left(\frac{1}{x-1}-\frac{1}{x+1}\right).
  \]

  \[
  \begin{aligned}
  &\frac{1}{2}\left[\ln\frac{x-1}{x+1}\right]_2^3\\
  &=\frac{1}{2}\left(\ln\frac{1}{2}-\ln\frac{1}{3}\right)\\
  &=\frac{1}{2}\ln\frac{3}{2}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Decompose \(\frac{1}{x^2-1}\) into two linear factors.
  - An antiderivative is \(\frac{1}{2}\ln\frac{x-1}{x+1}\).
  - Evaluate from \(2\) to \(3\).
verification:
  checks:
    - expr: integrate(1/(x**2-1), (x, 2, 3))
      expected: "log(Rational(3,2))/2"
:::

::: exercise
id: l3-partial-fractions.f2
tier: standard
topics: [partial-fractions]
statement: |
  Compute \(\int_0^1\frac{dx}{x^2+2x+2}\).
solution: |
  The discriminant of \(x^2+2x+2\) is negative. Complete the square: \(x^2+2x+2=(x+1)^2+1\).

  \[
  \begin{aligned}
  &\int_0^1\frac{dx}{(x+1)^2+1}\\
  &=\left[\arctan(x+1)\right]_0^1\\
  &=\arctan 2-\frac{\pi}{4}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Complete the square in the denominator.
  - An antiderivative is \(\arctan(x+1)\).
  - Evaluate from \(0\) to \(1\).
verification:
  checks:
    - expr: integrate(1/(x**2+2*x+2), (x, 0, 1))
      expected: "atan(2)-pi/4"
:::

::: exercise
id: l3-partial-fractions.f4
tier: standard
topics: [partial-fractions]
statement: |
  Compute \(\int_0^1\frac{x}{(x+1)(x+2)}\,dx\).
solution: |
  Decompose
  \[
  \frac{x}{(x+1)(x+2)}=\frac{A}{x+1}+\frac{B}{x+2}.
  \]

  - Covering \(x+1\) and setting \(x=-1\) gives \(A=-1\).
  - Covering \(x+2\) and setting \(x=-2\) gives \(B=2\).

  The numerator \(-(x+2)+2(x+1)\) equals \(x\).

  \[
  \begin{aligned}
  &\int_0^1\left(\frac{-1}{x+1}+\frac{2}{x+2}\right)\,dx\\
  &=\left[-\ln(x+1)+2\ln(x+2)\right]_0^1\\
  &=2\ln 3-3\ln 2\\
  &=\ln\frac{9}{8}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Find \(A=-1\) and \(B=2\).
  - Integrate \(-\frac{1}{x+1}+\frac{2}{x+2}\).
  - Evaluate from \(0\) to \(1\).
verification:
  checks:
    - expr: integrate(x/((x+1)*(x+2)), (x, 0, 1))
      expected: "log(Rational(9,8))"
:::

::: exercise
id: l3-partial-fractions.f5
tier: basic
topics: [partial-fractions]
statement: |
  Compute \(\int_0^1\frac{x^2}{x^2+1}\,dx\).
solution: |
  The numerator and the denominator have the same degree. Divide:
  \[
  \frac{x^2}{x^2+1}=1-\frac{1}{x^2+1}.
  \]

  \[
  \left[x-\arctan x\right]_0^1=1-\frac{\pi}{4}.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x**2/(x**2+1), (x, 0, 1))
      expected: "1 - pi/4"
:::

::: exercise
id: l3-partial-fractions.f6
tier: basic
topics: [partial-fractions]
statement: |
  Compute \(\int_0^1\frac{dx}{x^2+4}\).
solution: |
  Use
  \[
  \int\frac{dx}{x^2+a^2}=\frac{1}{a}\arctan\frac{x}{a}
  \]
  with \(a=2\).

  \[
  \left[\frac{1}{2}\arctan\frac{x}{2}\right]_0^1=\frac{1}{2}\arctan\frac{1}{2}.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(1/(x**2+4), (x, 0, 1))
      expected: "atan(Rational(1,2))/2"
:::

::: exercise
id: l3-partial-fractions.f7
tier: standard
topics: [partial-fractions]
statement: |
  Compute \(\int_2^3\frac{x^3}{x-1}\,dx\).
solution: |
  Divide the polynomials. Expanding gives \((x-1)(x^2+x+1)=x^3-1\), so
  \[
  \frac{x^3}{x-1}=x^2+x+1+\frac{1}{x-1}.
  \]

  An antiderivative is
  \[
  \frac{x^3}{3}+\frac{x^2}{2}+x+\ln(x-1).
  \]

  - At \(3\) it equals \(\frac{33}{2}+\ln 2\).
  - At \(2\) it equals \(\frac{20}{3}\).

  \[
  \frac{33}{2}-\frac{20}{3}+\ln 2=\frac{59}{6}+\ln 2.
  \]
provenance: written-for-site
steps:
  - Divide to obtain \(x^2+x+1+\frac{1}{x-1}\).
  - Evaluate the antiderivative at \(3\) and at \(2\).
  - Subtract to get \(\frac{59}{6}+\ln 2\).
verification:
  checks:
    - expr: integrate(x**3/(x-1), (x, 2, 3))
      expected: "59/6 + log(2)"
:::

::: exercise
id: l3-partial-fractions.f8
tier: exam
topics: [partial-fractions]
statement: |
  Compute \(\int_1^2\frac{dx}{x^2(x+1)}\).
solution: |
  The factor \(x\) is repeated. Write
  \[
  \frac{1}{x^2(x+1)}=\frac{A}{x}+\frac{B}{x^2}+\frac{C}{x+1}.
  \]

  Clearing the denominator gives
  \[
  1=Ax(x+1)+B(x+1)+Cx^2.
  \]

  - Setting \(x=0\) gives \(B=1\).
  - Setting \(x=-1\) gives \(C=1\).
  - The coefficient of \(x^2\) is \(A+C=0\), so \(A=-1\).

  \[
  \begin{aligned}
  &\left[-\ln x-\frac{1}{x}+\ln(x+1)\right]_1^2\\
  &=\left(-\ln 2-\frac{1}{2}+\ln 3\right)-(-1+\ln 2)\\
  &=\frac{1}{2}+\ln\frac{3}{4}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Write the decomposition with a repeated factor \(x\).
  - Find \(A=-1\), \(B=1\) and \(C=1\).
  - Evaluate \(-\ln x-\frac{1}{x}+\ln(x+1)\) from \(1\) to \(2\).
verification:
  checks:
    - expr: integrate(1/(x**2*(x+1)), (x, 1, 2))
      expected: "1/2 + log(Rational(3,4))"
:::

::: exercise
id: l3-partial-fractions.f9
tier: exam
topics: [partial-fractions]
statement: |
  Compute \(\int_0^1\frac{x+3}{x^2+1}\,dx\).
solution: |
  Split the integrand into \(\frac{x}{x^2+1}\) and \(\frac{3}{x^2+1}\).

  \[
  \begin{aligned}
  &\left[\frac{1}{2}\ln(x^2+1)+3\arctan x\right]_0^1\\
  &=\frac{\ln 2}{2}+\frac{3\pi}{4}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Split off \(\frac{x}{x^2+1}\).
  - The remaining term is a multiple of \(\frac{1}{x^2+1}\).
  - Evaluate from \(0\) to \(1\).
verification:
  checks:
    - expr: integrate((x+3)/(x**2+1), (x, 0, 1))
      expected: "log(2)/2 + 3*pi/4"
:::

::: exercise
id: l3-partial-fractions.ex-8-5-1
number: "8.5.1"
tier: basic
topics: [partial-fractions]
statement: |
  Find \(\int\frac{1}{4-x^{2}}\,dx\).
solution: |
  The denominator factors as \((2-x)(x+2)\). Set
  \[
  \frac{1}{4-x^{2}}=\frac{A}{2-x}+\frac{B}{x+2}.
  \]
  Clearing gives
  \[
  A(x+2)+B(2-x)=1.
  \]

  - At \(x=2\), \(4A=1\), so \(A=\frac{1}{4}\).
  - At \(x=-2\), \(4B=1\), so \(B=\frac{1}{4}\).

  The integral of \(\frac{1}{4(2-x)}\) is \(-\frac{1}{4}\ln|2-x|\), and \(|2-x|=|x-2|\). An antiderivative is
  \[
  \frac{1}{4}\ln|x+2|-\frac{1}{4}\ln|x-2|+C.
  \]
provenance: handout-answer
steps:
  - The value of \(A\) is \(\frac{1}{4}\) and the value of \(B\) is \(\frac{1}{4}\).
  - An antiderivative is \(\frac{1}{4}\ln|x+2|-\frac{1}{4}\ln|x-2|\).
verification:
  checks:
    - expr: integrate(1/(4-x**2), x)
      expected: "-log(x - 2)/4 + log(x + 2)/4"
:::

::: exercise
id: l3-partial-fractions.ex-8-5-2
number: "8.5.2"
tier: standard
topics: [partial-fractions]
statement: |
  Find \(\int\frac{x^{4}}{4-x^{2}}\,dx\).
solution: |
  The numerator has degree 4 and the denominator has degree 2, so divide first. The product \((-x^{2}-4)(4-x^{2})\) equals \(x^{4}-16\), so the remainder is 16 and
  \[
  \frac{x^{4}}{4-x^{2}}=-x^{2}-4+\frac{16}{4-x^{2}}.
  \]
  The proper piece splits as
  \[
  \frac{16}{4-x^{2}}=\frac{4}{2-x}+\frac{4}{x+2}.
  \]
  Integrating term by term gives
  \[
  \begin{aligned}
  &-\frac{x^{3}}{3}-4x\\
  &-4\ln|x-2|+4\ln|x+2|+C.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Divide to obtain \(-x^{2}-4+\frac{16}{4-x^{2}}\).
  - Split \(\frac{16}{4-x^{2}}\) into \(\frac{4}{2-x}+\frac{4}{x+2}\).
  - An antiderivative is \(-\frac{x^{3}}{3}-4x-4\ln|x-2|+4\ln|x+2|\).
verification:
  checks:
    - expr: integrate(x**4/(4-x**2), x)
      expected: "-x**3/3 - 4*x - 4*log(x - 2) + 4*log(x + 2)"
:::

::: exercise
id: l3-partial-fractions.ex-8-5-4
number: "8.5.4"
tier: standard
topics: [partial-fractions]
statement: |
  Find \(\int\frac{x^{2}}{4-x^{2}}\,dx\).
solution: |
  The degrees are equal, so divide first. Since \(x^{2}=-(4-x^{2})+4\),
  \[
  \frac{x^{2}}{4-x^{2}}=-1+\frac{4}{4-x^{2}}.
  \]
  The proper piece is
  \[
  \frac{4}{4-x^{2}}=\frac{1}{2-x}+\frac{1}{x+2}.
  \]
  Its integral is \(\ln|x+2|-\ln|x-2|\). An antiderivative is
  \[
  -x+\ln|x+2|-\ln|x-2|+C.
  \]
provenance: handout-answer
steps:
  - Divide to obtain \(-1+\frac{4}{4-x^{2}}\).
  - Split the proper piece into \(\frac{1}{2-x}+\frac{1}{x+2}\).
  - An antiderivative is \(-x+\ln|x+2|-\ln|x-2|\).
verification:
  checks:
    - expr: integrate(x**2/(4-x**2), x)
      expected: "-x - log(x - 2) + log(x + 2)"
:::

::: exercise
id: l3-partial-fractions.ex-8-5-5
number: "8.5.5"
tier: standard
topics: [partial-fractions]
statement: |
  Find \(\int\frac{x^{4}}{4+x^{2}}\,dx\).
solution: |
  The numerator has degree 4, so divide first. The product \((x^{2}-4)(x^{2}+4)\) equals \(x^{4}-16\), so
  \[
  \frac{x^{4}}{x^{2}+4}=x^{2}-4+\frac{16}{x^{2}+4}.
  \]
  The formula
  \[
  \int\frac{dx}{x^{2}+a^{2}}=\frac{1}{a}\arctan\frac{x}{a}
  \]
  with \(a=2\) gives
  \[
  \int\frac{16}{x^{2}+4}\,dx=8\arctan\frac{x}{2}.
  \]
  An antiderivative is
  \[
  \frac{x^{3}}{3}-4x+8\arctan\frac{x}{2}+C.
  \]
provenance: handout-answer
steps:
  - Divide to obtain \(x^{2}-4+\frac{16}{x^{2}+4}\).
  - Integrate the remainder with \(a=2\).
  - An antiderivative is \(\frac{x^{3}}{3}-4x+8\arctan\frac{x}{2}\).
verification:
  checks:
    - expr: integrate(x**4/(4+x**2), x)
      expected: "x**3/3 - 4*x + 8*atan(x/2)"
:::

::: exercise
id: l3-partial-fractions.ex-8-5-7
number: "8.5.7"
tier: standard
topics: [partial-fractions]
statement: |
  Find \(\int\frac{x^{3}}{4+x^{2}}\,dx\).
solution: |
  The numerator has degree 3 and the denominator has degree 2, so divide first. Since \(x^{3}=x(x^{2}+4)-4x\),
  \[
  \frac{x^{3}}{x^{2}+4}=x-\frac{4x}{x^{2}+4}.
  \]
  The derivative of \(x^{2}+4\) is \(2x\), and \(4x=2\cdot 2x\), so the second term integrates to \(2\ln(x^{2}+4)\). An antiderivative is
  \[
  \frac{x^{2}}{2}-2\ln(x^{2}+4)+C.
  \]
provenance: handout-answer
steps:
  - Divide to obtain \(x-\frac{4x}{x^{2}+4}\).
  - The second term integrates to \(2\ln(x^{2}+4)\).
  - An antiderivative is \(\frac{x^{2}}{2}-2\ln(x^{2}+4)\).
verification:
  checks:
    - expr: integrate(x**3/(4+x**2), x)
      expected: "x**2/2 - 2*log(x**2 + 4)"
:::

::: exercise
id: l3-partial-fractions.ex-8-5-8
number: "8.5.8"
tier: standard
topics: [partial-fractions]
statement: |
  Find \(\int\frac{1}{x^{2}+10x+21}\,dx\).
solution: |
  The denominator factors as \((x+3)(x+7)\). Set
  \[
  \frac{1}{(x+3)(x+7)}=\frac{A}{x+3}+\frac{B}{x+7}.
  \]
  Clearing gives
  \[
  A(x+7)+B(x+3)=1.
  \]

  - At \(x=-3\), \(4A=1\), so \(A=\frac{1}{4}\).
  - At \(x=-7\), \(-4B=1\), so \(B=-\frac{1}{4}\).

  An antiderivative is
  \[
  \frac{1}{4}\ln|x+3|-\frac{1}{4}\ln|x+7|+C.
  \]
provenance: handout-answer
steps:
  - The value of \(A\) is \(\frac{1}{4}\) and the value of \(B\) is \(-\frac{1}{4}\).
  - An antiderivative is \(\frac{1}{4}\ln|x+3|-\frac{1}{4}\ln|x+7|\).
verification:
  checks:
    - expr: integrate(1/(x**2+10*x+21), x)
      expected: "log(x + 3)/4 - log(x + 7)/4"
:::

::: exercise
id: l3-partial-fractions.ex-8-5-9
number: "8.5.9"
tier: standard
topics: [partial-fractions]
statement: |
  Find \(\int\frac{1}{2x^{2}-x-3}\,dx\).
solution: |
  The denominator factors as \((2x-3)(x+1)\). Set
  \[
  \frac{1}{(2x-3)(x+1)}=\frac{A}{2x-3}+\frac{B}{x+1}.
  \]
  Clearing gives
  \[
  A(x+1)+B(2x-3)=1.
  \]

  - At \(x=-1\), \(-5B=1\), so \(B=-\frac{1}{5}\).
  - At \(x=\frac{3}{2}\), \(\frac{5}{2}A=1\), so \(A=\frac{2}{5}\).

  The derivative of \(2x-3\) is 2, so
  \[
  \int\frac{2/5}{2x-3}\,dx=\frac{1}{5}\ln|2x-3|.
  \]
  The second term integrates to \(-\frac{1}{5}\ln|x+1|\). An antiderivative is
  \[
  \frac{1}{5}\ln|2x-3|-\frac{1}{5}\ln|x+1|+C.
  \]
provenance: handout-answer
steps:
  - The value of \(A\) is \(\frac{2}{5}\) and the value of \(B\) is \(-\frac{1}{5}\).
  - The chain rule contributes a factor \(\frac{1}{2}\) on the first logarithm.
  - An antiderivative is \(\frac{1}{5}\ln|2x-3|-\frac{1}{5}\ln|x+1|\).
verification:
  checks:
    - expr: integrate(1/(2*x**2-x-3), x)
      expected: "log(x - Rational(3, 2))/5 - log(x + 1)/5"
:::

::: exercise
id: l3-partial-fractions.ex-8-5-10
number: "8.5.10"
tier: basic
topics: [partial-fractions]
statement: |
  Find \(\int\frac{1}{x^{2}+3x}\,dx\).
solution: |
  The denominator factors as \(x(x+3)\). Set
  \[
  \frac{1}{x(x+3)}=\frac{A}{x}+\frac{B}{x+3}.
  \]
  Clearing gives
  \[
  A(x+3)+Bx=1.
  \]

  - At \(x=0\), \(3A=1\), so \(A=\frac{1}{3}\).
  - At \(x=-3\), \(-3B=1\), so \(B=-\frac{1}{3}\).

  An antiderivative is
  \[
  \frac{1}{3}\ln|x|-\frac{1}{3}\ln|x+3|+C.
  \]
provenance: handout-answer
steps:
  - The value of \(A\) is \(\frac{1}{3}\) and the value of \(B\) is \(-\frac{1}{3}\).
  - An antiderivative is \(\frac{1}{3}\ln|x|-\frac{1}{3}\ln|x+3|\).
verification:
  checks:
    - expr: integrate(1/(x**2+3*x), x)
      expected: "log(x)/3 - log(x + 3)/3"
:::

::: exercise
id: l3-partial-fractions.ex-8-7-7
number: "8.7.7"
tier: exam
topics: [partial-fractions]
statement: |
  Find \(\int\frac{1}{t(t^{2}-4)}\,dt\).
solution: |
  The denominator has three distinct linear factors, \(t(t-2)(t+2)\). Set
  \[
  \frac{1}{t(t-2)(t+2)}=\frac{A}{t}+\frac{B}{t-2}+\frac{C}{t+2}.
  \]
  Clearing gives
  \[
  \begin{aligned}
  &A(t-2)(t+2)+Bt(t+2)\\
  &\quad+Ct(t-2)=1.
  \end{aligned}
  \]

  - At \(t=0\), \(-4A=1\), so \(A=-\frac{1}{4}\).
  - At \(t=2\), \(8B=1\), so \(B=\frac{1}{8}\).
  - At \(t=-2\), \(8C=1\), so \(C=\frac{1}{8}\).

  Integrating gives
  \[
  \begin{aligned}
  &-\frac{1}{4}\ln|t|\\
  &+\frac{1}{8}\ln|t-2|+\frac{1}{8}\ln|t+2|+C.
  \end{aligned}
  \]
  The three logarithms combine as
  \[
  \frac{1}{8}\ln\left|\frac{t^{2}-4}{t^{2}}\right|,
  \]
  and \(\frac{t^{2}-4}{t^{2}}=1-\frac{4}{t^{2}}\). An antiderivative is
  \[
  \frac{1}{8}\ln\left|1-\frac{4}{t^{2}}\right|+C.
  \]
provenance: handout-answer
steps:
  - The value of \(A\) is \(-\frac{1}{4}\), the value of \(B\) is \(\frac{1}{8}\), and the value of \(C\) is \(\frac{1}{8}\).
  - Combine the logarithms as \(\frac{1}{8}\ln\left|1-\frac{4}{t^{2}}\right|\).
verification:
  checks:
    - expr: integrate(1/(t*(t**2-4)), t)
      expected: "-log(t)/4 + log(t**2 - 4)/8"
:::

::: exercise
id: l3-partial-fractions.ex-8-7-20
number: "8.7.20"
tier: exam
topics: [partial-fractions]
statement: |
  Find \(\int\frac{1}{t(9+4t^{2})}\,dt\).
solution: |
  The denominator is a linear factor times an irreducible quadratic. Set
  \[
  \frac{1}{t(4t^{2}+9)}=\frac{A}{t}+\frac{Bt+D}{4t^{2}+9}.
  \]
  Clearing gives
  \[
  A(4t^{2}+9)+(Bt+D)t=1.
  \]

  - The constant term gives \(9A=1\), so \(A=\frac{1}{9}\).
  - The coefficient of \(t\) gives \(D=0\).
  - The coefficient of \(t^{2}\) gives \(4A+B=0\), so \(B=-\frac{4}{9}\).

  The second integral uses \(du=8t\,dt\) on \(u=4t^{2}+9\), and \(-\frac{4}{9}\cdot\frac{1}{8}=-\frac{1}{18}\). An antiderivative is
  \[
  \frac{1}{9}\ln|t|-\frac{1}{18}\ln(4t^{2}+9)+C.
  \]
  Now \(\frac{1}{9}\ln|t|=\frac{1}{18}\ln(4t^{2})-\frac{1}{18}\ln 4\). The constant \(\frac{1}{18}\ln 4\) is absorbed in \(C\), so an antiderivative is
  \[
  \frac{1}{18}\ln\frac{4t^{2}}{4t^{2}+9}+C.
  \]
provenance: handout-answer
steps:
  - The value of \(A\) is \(\frac{1}{9}\), the value of \(B\) is \(-\frac{4}{9}\), and the value of \(D\) is 0.
  - The quadratic term integrates to \(-\frac{1}{18}\ln(4t^{2}+9)\).
  - Absorb \(\frac{1}{18}\ln 4\) into \(C\) to reach \(\frac{1}{18}\ln\frac{4t^{2}}{4t^{2}+9}\).
verification:
  checks:
    - expr: integrate(1/(t*(9+4*t**2)), t)
      expected: "log(t)/9 - log(4*t**2 + 9)/18"
:::

::: exercise
id: l3-partial-fractions.ex-8-7-22
number: "8.7.22"
tier: standard
topics: [partial-fractions]
statement: |
  Find \(\int\frac{t}{t^{2}+2t-3}\,dt\).
solution: |
  The denominator factors as \((t+3)(t-1)\). Set
  \[
  \frac{t}{(t+3)(t-1)}=\frac{A}{t+3}+\frac{B}{t-1}.
  \]
  Clearing gives
  \[
  A(t-1)+B(t+3)=t.
  \]

  - At \(t=-3\), \(-4A=-3\), so \(A=\frac{3}{4}\).
  - At \(t=1\), \(4B=1\), so \(B=\frac{1}{4}\).

  These constants rebuild the numerator, since \(\frac{3}{4}(t-1)+\frac{1}{4}(t+3)=t\). An antiderivative is
  \[
  \frac{3}{4}\ln|t+3|+\frac{1}{4}\ln|t-1|+C.
  \]
provenance: handout-answer
steps:
  - The value of \(A\) is \(\frac{3}{4}\) and the value of \(B\) is \(\frac{1}{4}\).
  - An antiderivative is \(\frac{3}{4}\ln|t+3|+\frac{1}{4}\ln|t-1|\).
verification:
  checks:
    - expr: integrate(t/(t**2+2*t-3), t)
      expected: "log(t - 1)/4 + 3*log(t + 3)/4"
:::

::: exercise
id: l3-partial-fractions.ex-8-7-28
number: "8.7.28"
tier: exam
topics: [partial-fractions]
statement: |
  Find \(\int\frac{t+1}{t^{2}+t-1}\,dt\).
solution: |
  The derivative of \(t^{2}+t-1\) is \(2t+1\). Write \(t+1=\frac{1}{2}(2t+1)+\frac{1}{2}\). The integral splits as
  \[
  \frac{1}{2}\ln|t^{2}+t-1|+\frac{1}{2}\int\frac{1}{t^{2}+t-1}\,dt.
  \]
  The discriminant is 5. The roots are
  \[
  \begin{aligned}
  r&=\frac{-1+\sqrt{5}}{2},\\
  w&=\frac{-1-\sqrt{5}}{2},
  \end{aligned}
  \]
  and \(r-w=\sqrt{5}\).

  - Covering \(t-r\) gives the coefficient \(\frac{1}{\sqrt{5}}\) on \(\frac{1}{t-r}\).
  - Covering \(t-w\) gives the coefficient \(-\frac{1}{\sqrt{5}}\) on \(\frac{1}{t-w}\).

  Since \(t^{2}+t-1=(t-r)(t-w)\), the logarithm of the quadratic contributes half of each root logarithm.

  - The coefficient of \(\ln|t-r|\) is \(\frac{1}{2}+\frac{1}{2\sqrt{5}}=\frac{5+\sqrt{5}}{10}\).
  - The coefficient of \(\ln|t-w|\) is \(\frac{1}{2}-\frac{1}{2\sqrt{5}}=\frac{5-\sqrt{5}}{10}\).

  Now
  \[
  \begin{aligned}
  2(t-r)&=2t+1-\sqrt{5},\\
  2(t-w)&=2t+1+\sqrt{5}.
  \end{aligned}
  \]
  Each logarithm of a root equals the logarithm of that linear factor, minus \(\ln 2\). The coefficients sum to 1, so the two replacements change the antiderivative by \(-\ln 2\), which is absorbed in \(C\). An antiderivative is
  \[
  \begin{aligned}
  &\frac{5+\sqrt{5}}{10}\ln|2t+1-\sqrt{5}|\\
  &+\frac{5-\sqrt{5}}{10}\ln|2t+1+\sqrt{5}|+C.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - Split off \(\frac{1}{2}\ln|t^{2}+t-1|\) and leave \(\frac{1}{2}\int\frac{1}{t^{2}+t-1}\,dt\).
  - The coefficient of \(\ln|t-r|\) is \(\frac{5+\sqrt{5}}{10}\) and the coefficient of \(\ln|t-w|\) is \(\frac{5-\sqrt{5}}{10}\).
  - Replace the roots by \(2t+1\pm\sqrt{5}\). The change is the constant \(-\ln 2\).
verification:
  checks:
    - expr: integrate((t+1)/(t**2+t-1), t)
      expected: "(Rational(1, 2) - sqrt(5)/10)*log(t + Rational(1, 2) + sqrt(5)/2) + (sqrt(5)/10 + Rational(1, 2))*log(t - sqrt(5)/2 + Rational(1, 2))"
:::

::: sheet-item
id: l3-partial-fractions.sheet-divide
category: recognition
text: |
  If the numerator's degree is at least the denominator's degree, divide before a partial-fraction split.
:::

::: sheet-item
id: l3-partial-fractions.sheet-distinct
category: formula
text: |
  For a polynomial \(p\) of degree less than 2, with \(r\) different from \(s\),
  \[
  \frac{p(x)}{(x-r)(x-s)}=\frac{A}{x-r}+\frac{B}{x-s},
  \]
  and each term integrates to a logarithm.
:::

::: sheet-item
id: l3-partial-fractions.sheet-repeated
category: trap
text: |
  A factor \((x-r)^{2}\) needs both \(\frac{A}{x-r}\) and \(\frac{B}{(x-r)^{2}}\). A single term for that factor makes the cleared equation fail.
:::

::: sheet-item
id: l3-partial-fractions.sheet-arctan
category: formula
text: |
  For \(a>0\),
  \[
  \int\frac{dx}{x^{2}+a^{2}}=\frac{1}{a}\arctan\frac{x}{a}+C.
  \]
:::

::: exercise
id: l3-partial-fractions.ex-partial-fractions-repeated-and-quadratic
tier: standard
topics: [partial-fractions]
statement: |
  - (a) Compute \(\int_2^3\frac{x^2+1}{(x-1)^2(x+1)}\,dx\).
  - (b) Compute \(\int_0^2\frac{2x+5}{x^2+2x+5}\,dx\).
solution: |
  **(a)** The factor \(x-1\) is repeated, so write
  \[
  \begin{aligned}
  &\frac{x^2+1}{(x-1)^2(x+1)}\\
  &=\frac{A}{x-1}+\frac{B}{(x-1)^2}\\
  &\quad+\frac{C}{x+1}.
  \end{aligned}
  \]
  Clearing the denominator gives
  \[
  \begin{aligned}
  x^2+1&=A(x-1)(x+1)\\
  &\quad+B(x+1)+C(x-1)^2.
  \end{aligned}
  \]

  - At \(x=1\): \(2=2B\), so \(B=1\).
  - At \(x=-1\): \(2=4C\), so \(C=\frac{1}{2}\).
  - The coefficient of \(x^2\): \(1=A+C\), so \(A=\frac{1}{2}\).

  An antiderivative is
  \[
  \frac{1}{2}\ln|x-1|-\frac{1}{x-1}+\frac{1}{2}\ln|x+1|.
  \]

  - At \(x=3\) it equals \(\frac{1}{2}\ln 2-\frac{1}{2}+\frac{1}{2}\ln 4=\frac{3}{2}\ln 2-\frac{1}{2}\).
  - At \(x=2\) it equals \(0-1+\frac{1}{2}\ln 3\).

  The integral equals
  \[
  \begin{aligned}
  &\frac{3}{2}\ln 2-\frac{1}{2}+1-\frac{1}{2}\ln 3\\
  &=\frac{3}{2}\ln 2-\frac{1}{2}\ln 3+\frac{1}{2}.
  \end{aligned}
  \]

  **(b)** The discriminant of \(x^2+2x+5\) is \(4-20=-16<0\), so the quadratic is irreducible. Its derivative is \(2x+2\), and \(2x+5=(2x+2)+3\). Complete the square: \(x^2+2x+5=(x+1)^2+4\). Then
  \[
  \begin{aligned}
  &\int_0^2\frac{2x+5}{x^2+2x+5}\,dx\\
  &=\Bigl[\ln(x^2+2x+5)\Bigr]_0^2\\
  &\quad+3\int_0^2\frac{dx}{(x+1)^2+4}.
  \end{aligned}
  \]

  - The first term equals \(\ln 13-\ln 5\).
  - The second equals \(3\cdot\frac{1}{2}\Bigl[\arctan\frac{x+1}{2}\Bigr]_0^2=\frac{3}{2}\bigl(\arctan\frac{3}{2}-\arctan\frac{1}{2}\bigr)\).

  The integral equals
  \[
  \ln\frac{13}{5}+\frac{3}{2}\left(\arctan\frac{3}{2}-\arctan\frac{1}{2}\right).
  \]
provenance: written-for-site
steps:
  - (a) Set up \(\frac{A}{x-1}+\frac{B}{(x-1)^2}+\frac{C}{x+1}\) and find \(A=\frac{1}{2}\), \(B=1\), \(C=\frac{1}{2}\).
  - (a) The value is \(\frac{3}{2}\ln 2-\frac{1}{2}\ln 3+\frac{1}{2}\).
  - (b) Split \(2x+5=(2x+2)+3\) and complete the square in the denominator.
  - (b) The value is \(\ln\frac{13}{5}+\frac{3}{2}\bigl(\arctan\frac{3}{2}-\arctan\frac{1}{2}\bigr)\).
verification:
  checks:
    - expr: integrate((x**2 + 1)/((x - 1)**2*(x + 1)), (x, 2, 3))
      expected: "3*log(2)/2 - log(3)/2 + 1/2"
    - expr: diff(log(x - 1)/2 - 1/(x - 1) + log(x + 1)/2, x)
      expected: "(x**2 + 1)/((x - 1)**2*(x + 1))"
    - expr: integrate((2*x + 5)/(x**2 + 2*x + 5), (x, 0, 2))
      expected: "log(Rational(13, 5)) + Rational(3, 2)*(atan(Rational(3, 2)) - atan(Rational(1, 2)))"
:::
