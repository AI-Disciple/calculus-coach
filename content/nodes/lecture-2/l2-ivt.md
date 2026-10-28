---
id: l2-ivt
lecture: 2
order: 10
title: The intermediate value theorem
prerequisites: [l1-continuity]
sources:
  - { source: lecture-notes-2, page: 3 }
  - { source: sheet-1, page: 2 }
  - { source: midterm-app }
examWeight: low
status: reviewed
---

::: formal-statement
kind: theorem
title: Intermediate value theorem
source:
  source: lecture-notes-2
  page: 3
text: |
  If \(f\) is continuous on the closed interval \([a, b]\), then \(f\) takes all the values between \(f(a)\) and \(f(b)\) for \(x \in [a, b]\).
:::

::: plain-explanation
text: |
  ### What the theorem needs

  The function has to be continuous at every point of the closed interval, endpoints included. Every number between the endpoint values is then attained at least once. Between \(f(a)\) and \(f(b)\) means every number from the smaller endpoint value to the larger one.

  ### Finding a root

  If the endpoint values have opposite signs, then \(0\) is one of those numbers, and \(f\) has a root in \((a, b)\). The theorem gives that **existence**. **Uniqueness** takes a further argument. A derivative that stays positive on the interval makes \(f\) strictly increasing, and then the root is unique.
:::

::: visual
kind: curve-sketch
caption: |
  The function is \(x^3 + 3x^2 + x - 2\). Switch on the intercepts and see that the graph crosses the \(x\)-axis between \(0\) and \(1\).
params:
  f: "x^3+3x^2+x-2"
  xmin: -3
  xmax: 2
  layers: [intercepts]
:::

::: worked-example
title: One root on (0, 1)
problem: |
  Let \(f(x) = x^3 + 3x^2 + x - 2\). Explain why \(f\) has a root in \((0, 1)\), why that root is the only one there, and give it to one decimal place.
solution: |
  ### A root exists

  The function \(f\) is a polynomial, so it is continuous on the closed interval \([0, 1]\). The endpoint values are
  \[
  \begin{aligned}
  f(0)&=-2,\\
  f(1)&=1+3+1-2=3.
  \end{aligned}
  \]
  They satisfy \(-2 < 0 < 3\), so \(0\) lies between them. The intermediate value theorem gives a root on \([0, 1]\). Neither endpoint value is \(0\), so a root lies in \((0, 1)\).

  ### The root is unique

  The derivative and the derivative minus \(1\) are
  \[
  \begin{aligned}
  f'(x)&=3x^2+6x+1,\\
  f'(x)-1&=3x(x+2).
  \end{aligned}
  \]
  On \([0, 1]\):

  - the factor \(x\) is nonnegative,
  - the factor \(x + 2\) is positive.

  So \(f'(x) - 1 \ge 0\). Hence \(f'(x) \ge 1 > 0\). The function is strictly increasing on \([0, 1]\), and the root in \((0, 1)\) is unique.

  ### The exact root

  Expanding gives
  \[
  \begin{aligned}
  (x+2)(x^2+x-1)\\
  &=x^3+x^2-x\\
  &\quad+2x^2+2x-2\\
  &=x^3+3x^2+x-2.
  \end{aligned}
  \]
  The quadratic equation \(x^2 + x - 1 = 0\) has roots \(\frac{-1 + \sqrt{5}}{2}\) and \(\frac{-1 - \sqrt{5}}{2}\). The root in \((0, 1)\) is \(\frac{\sqrt{5} - 1}{2}\).

  ### The root to one decimal place

  The value at \(\frac{3}{5}\) is
  \[
  \begin{aligned}
  f\left(\frac{3}{5}\right)&=\frac{27}{125}+\frac{27}{25}+\frac{3}{5}-2\\
  &=\frac{27+135+75-250}{125}\\
  &=-\frac{13}{125}<0.
  \end{aligned}
  \]
  The value at \(\frac{7}{10}\) is
  \[
  \begin{aligned}
  f\left(\frac{7}{10}\right)&=\frac{343}{1000}+\frac{147}{100}+\frac{7}{10}-2\\
  &=\frac{343+1470+700-2000}{1000}\\
  &=\frac{513}{1000}>0.
  \end{aligned}
  \]
  So \(f(0.6) < 0 < f(0.7)\), and the root lies in \((0.6, 0.7)\).

  The exact root is compared with \(\frac{3}{5}\) and \(\frac{13}{20}\):

  - The exact root is greater than \(\frac{3}{5}\). The comparison \(\frac{\sqrt{5} - 1}{2} > \frac{3}{5}\) rearranges to \(\sqrt{5} > \frac{11}{5}\). Both sides are positive, and \(\left(\frac{11}{5}\right)^2 = \frac{121}{25} < \frac{125}{25} = 5\), so the inequality holds.
  - The exact root is less than \(\frac{13}{20}\). The comparison \(\frac{\sqrt{5} - 1}{2} < \frac{13}{20}\) rearranges to \(\sqrt{5} < \frac{23}{10}\). Both sides are positive, and \(\left(\frac{23}{10}\right)^2 = \frac{529}{100} > \frac{500}{100} = 5\), so the inequality holds.

  The root therefore lies strictly between \(0.6\) and \(0.65\), and to one decimal place it is \(0.6\).
:::

::: guided-example
title: A smaller sign change
problem: |
  Let \(f(x) = x^3 + x - 1\). Show that \(f\) has a root in \((0, 1)\), and decide whether uniqueness follows from the derivative.
steps:
  - |
    The function \(f(x) = x^3 + x - 1\) is a polynomial, so it is continuous on the closed interval \([0, 1]\).
  - |
    The endpoint values are \(f(0) = -1\) and \(f(1) = 1 + 1 - 1 = 1\).
  - |
    These values satisfy \(-1 < 0 < 1\). The intermediate value theorem gives a root in \((0, 1)\).
  - |
    The derivative is \(f'(x) = 3x^2 + 1\). The term \(3x^2\) is nonnegative for every real \(x\), so \(f'(x) \ge 1 > 0\).
  - |
    The derivative stays positive, so \(f\) is strictly increasing. Uniqueness follows from the derivative: the root in \((0, 1)\) is the only real root.
:::

::: trap
text: |
  A sign change gives **existence** of a root. **Uniqueness** needs a separate argument. Take \(f(x) = x^3 - x\) on \([-2, 2]\). The endpoint values are \(f(-2) = -6\) and \(f(2) = 6\), so a root exists in \((-2, 2)\). The same function has three roots there, \(-1\), \(0\) and \(1\). The derivative \(f'(x) = 3x^2 - 1\) changes sign on \([-2, 2]\), so it does not stay positive.
:::

::: trap
text: |
  Values of the same sign do not let the theorem fire. If \(f(a)\) and \(f(b)\) are both positive, or both negative, then \(0\) does not lie between them. Two examples:

  - For \(f(x) = x^2 + 1\) on \([-1, 1]\) the endpoint values are \(f(-1) = f(1) = 2\), and there is no root.
  - For \(g(x) = x^2 - 1\) on \([-2, 2]\) the endpoint values are \(g(-2) = g(2) = 3\), and there are roots at \(-1\) and \(1\).

  Same signs at the endpoints leave both possibilities open.
:::

::: key-points
text: |
  - If \(f\) is continuous on the closed interval \([a, b]\), then \(f\) takes all the values between \(f(a)\) and \(f(b)\).
  - If \(f(a)\) and \(f(b)\) have opposite signs, then \(0\) lies between them and \(f\) has a root in \((a, b)\). If they have the same sign, the theorem does not apply to \(0\).
  - The usual slip reads a sign change as exactly one root. A sign change gives at least one root. For \(f(x) = x^3 - x\) on \([-2, 2]\) the endpoint values are \(-6\) and \(6\), and there are three roots.
:::

::: concept-question
id: l2-ivt.q-99c343fd
question: |
  Why does \(f(x) = x^{3} + 3x^{2} + x - 2\) have exactly one root between \(0\) and \(1\)?
options:
  - text: |
      \(f(0) = -2 < 0 < 3 = f(1)\) so a root exists, and \(f' = 3x^{2} + 6x + 1 > 0\) on \([0,1]\) so it is unique
    correct: true
  - text: |
      Because it is a cubic and every cubic has one real root
  - text: |
      Because \(f(0)\) and \(f(1)\) are both negative
  - text: |
      It actually has three roots there
explanation: |
  The values are \(f(0) = -2\) and \(f(1) = 3\), so the intermediate value theorem gives a root in \((0,1)\). The derivative \(f'(x) = 3x^{2} + 6x + 1\) is positive on \([0,1]\), so \(f\) is strictly increasing and that root is unique.
:::

::: concept-question
id: l2-ivt.q-9cfdbb90
question: |
  \(f\) is continuous on \([0, 1]\), with \(f(0) = 2\) and \(f(1) = 5\). What follows about a root in \((0, 1)\)?
options:
  - text: |
      The intermediate value theorem gives a root in \((0, 1)\).
  - text: |
      The value \(0\) does not lie between \(2\) and \(5\), so the theorem does not apply to it.
    correct: true
  - text: |
      There is no root in \((0, 1)\), because both endpoint values are positive.
  - text: |
      There is a root in \((0, 1)\) whenever \(f\) is a polynomial.
explanation: |
  Both endpoint values are positive, so \(0\) is not between them and the theorem does not give a root. Positive endpoints still leave a root possible. On \([-2, 2]\), the function \(x^2 - 1\) has endpoint values \(3\) and \(3\), and it has roots at \(-1\) and \(1\).
:::

::: concept-question
id: l2-ivt.q-3bc95244
question: |
  \(f\) is continuous on \([-2, 2]\), with \(f(-2) = -6\) and \(f(2) = 6\). Which conclusion follows?
options:
  - text: |
      There is at least one root in \((-2, 2)\).
    correct: true
  - text: |
      There is exactly one root in \((-2, 2)\).
  - text: |
      There is a root at each endpoint.
  - text: |
      The derivative stays positive on \([-2, 2]\).
explanation: |
  The endpoint values have opposite signs, so the intermediate value theorem gives at least one root in \((-2, 2)\). For \(f(x) = x^3 - x\) the endpoint values are \(f(-2) = -6\) and \(f(2) = 6\), and the roots in the interval are \(-1\), \(0\) and \(1\). A sign change gives existence. The count needs a separate argument.
:::

::: concept-question
id: l2-ivt.q-e81c421e
question: |
  The function \(f(x) = 1/x\) satisfies \(f(-1) = -1\) and \(f(1) = 1\). Does the intermediate value theorem give a root in \((-1, 1)\)?
options:
  - text: |
      Yes. The endpoint values have opposite signs.
  - text: |
      The theorem does not apply, because \(f\) is not continuous on the closed interval \([-1, 1]\).
    correct: true
  - text: |
      Yes. The root is \(x = 0\).
  - text: |
      Yes. Continuity on \([-1, 0)\) and on \((0, 1]\) is enough.
explanation: |
  The theorem needs continuity on the whole closed interval. Here \(0\) is not in the domain, so \(f\) is not continuous on \([-1, 1]\). The function \(1/x\) never takes the value \(0\).
:::

::: concept-question
id: l2-ivt.q-9ae76db4
question: |
  \(f\) is continuous on \([0, 2]\), with \(f(0) = 1\) and \(f(2) = 4\). Which value must \(f\) take somewhere on \([0, 2]\)?
options:
  - text: |
      \(3\)
    correct: true
  - text: |
      \(0\)
  - text: |
      \(5\)
  - text: |
      Every real number.
explanation: |
  The number \(3\) lies between \(f(0) = 1\) and \(f(2) = 4\), so some point of \([0, 2]\) has \(f\) equal to \(3\). The numbers \(0\) and \(5\) do not lie between the endpoint values.
:::

::: going-deeper
title: Three real roots
text: |
  The factorisation
  \[
  f(x) = (x + 2)(x^2 + x - 1)
  \]
  gives three real roots, \(-2\), \(\frac{-1 + \sqrt{5}}{2}\) and \(\frac{-1 - \sqrt{5}}{2}\). The root in \((0, 1)\) is \(\frac{-1 + \sqrt{5}}{2}\), which is the same number as \(\frac{\sqrt{5} - 1}{2}\). The other two roots lie outside \([0, 1]\). The lower bound \(f'(x) \ge 1\) was proved on \([0, 1]\), so uniqueness was claimed only on that interval.
:::

::: exercise
id: l2-ivt.basic-sign-change
tier: basic
topics: [intermediate-value-theorem]
statement: |
  Show that \(f(x) = x^2 - 2\) has a root in \((1, 2)\).
solution: |
  The function \(f\) is a polynomial, so it is continuous on the closed interval \([1, 2]\). The endpoint values are
  \[
  \begin{aligned}
  f(1)&=1-2=-1,\\
  f(2)&=4-2=2.
  \end{aligned}
  \]
  They satisfy \(-1 < 0 < 2\), so \(0\) lies between them. The intermediate value theorem gives a root on \([1, 2]\). Neither endpoint value is \(0\), so a root lies in \((1, 2)\).
provenance: written-for-site
steps:
  - |
    Continuity of \(x^2 - 2\) on \([1, 2]\).
  - |
    Endpoint values \(f(1) = -1\) and \(f(2) = 2\).
  - |
    A root in \((1, 2)\).
verification:
  checks:
    - expr: '(x**2 - 2).subs(x, 1)'
      expected: -1
    - expr: '(x**2 - 2).subs(x, 2)'
      expected: 2
:::

::: exercise
id: l2-ivt.standard-unique
tier: standard
topics: [intermediate-value-theorem]
statement: |
  Show that \(f(x) = x^3 + 2x - 1\) has a root in \((0, 1)\), and that this root is the only one there.
solution: |
  The function \(f\) is a polynomial, so it is continuous on the closed interval \([0, 1]\). The endpoint values are
  \[
  \begin{aligned}
  f(0)&=-1,\\
  f(1)&=1+2-1=2.
  \end{aligned}
  \]
  They satisfy \(-1 < 0 < 2\), so the intermediate value theorem gives a root in \((0, 1)\).

  The derivative is
  \[
  f'(x)=3x^2+2.
  \]
  The term \(3x^2\) is nonnegative for every real \(x\), so \(f'(x) \ge 2 > 0\). On \([0, 1]\) the derivative stays positive, \(f\) is strictly increasing, and the root in \((0, 1)\) is unique.
provenance: written-for-site
steps:
  - |
    Endpoint values \(f(0) = -1\) and \(f(1) = 2\).
  - |
    A root in \((0, 1)\) from the intermediate value theorem.
  - |
    The derivative \(f'(x) = 3x^2 + 2\) is at least \(2\) on \([0, 1]\).
  - |
    The root in \((0, 1)\) is unique.
verification:
  checks:
    - expr: '(x**3 + 2*x - 1).subs(x, 0)'
      expected: -1
    - expr: '(x**3 + 2*x - 1).subs(x, 1)'
      expected: 2
    - expr: 'minimum(diff(x**3 + 2*x - 1, x), x, Interval(0, 1))'
      expected: 2
:::

::: exercise
id: l2-ivt.exam-exercice-6
number: "6"
tier: exam
topics: [intermediate-value-theorem]
statement: |
  Explain why the function \(f(x) = x^3 + 3x^2 + x - 2\) has a root between \(0\) and \(1\). Is there only one? Compute it to one decimal place.
solution: |
  The function \(f\) is a polynomial, so it is continuous on the closed interval \([0, 1]\). The endpoint values are
  \[
  \begin{aligned}
  f(0)&=-2,\\
  f(1)&=1+3+1-2=3.
  \end{aligned}
  \]
  These satisfy \(-2 < 0 < 3\), so the intermediate value theorem gives a root on \([0, 1]\). Neither endpoint is a root, so a root lies in \((0, 1)\).

  The derivative and the derivative minus \(1\) are
  \[
  \begin{aligned}
  f'(x)&=3x^2+6x+1,\\
  f'(x)-1&=3x(x+2).
  \end{aligned}
  \]
  On \([0, 1]\) that product is nonnegative, so \(f'(x) \ge 1 > 0\). The function is strictly increasing on \([0, 1]\), and there is only one root in \((0, 1)\).

  Expanding gives
  \[
  \begin{aligned}
  (x+2)(x^2+x-1)\\
  &=x^3+x^2-x\\
  &\quad+2x^2+2x-2\\
  &=x^3+3x^2+x-2.
  \end{aligned}
  \]
  The roots of \(x^2 + x - 1 = 0\) are \(\frac{-1 + \sqrt{5}}{2}\) and \(\frac{-1 - \sqrt{5}}{2}\). The root in \((0, 1)\) is \(\frac{\sqrt{5} - 1}{2}\).

  The value at \(\frac{3}{5}\) is
  \[
  \begin{aligned}
  f\left(\frac{3}{5}\right)&=\frac{27+135+75-250}{125}\\
  &=-\frac{13}{125}<0,
  \end{aligned}
  \]
  and the value at \(\frac{7}{10}\) is
  \[
  \begin{aligned}
  f\left(\frac{7}{10}\right)&=\frac{343+1470+700-2000}{1000}\\
  &=\frac{513}{1000}>0.
  \end{aligned}
  \]
  So \(f(0.6) < 0 < f(0.7)\), and the root lies in \((0.6, 0.7)\).

  The exact root is compared with \(\frac{3}{5}\) and \(\frac{13}{20}\):

  - The exact root is greater than \(\frac{3}{5}\), since that comparison rearranges to \(\sqrt{5} > \frac{11}{5}\) and \(\left(\frac{11}{5}\right)^2 = \frac{121}{25} < 5\).
  - It is less than \(\frac{13}{20}\), since that comparison rearranges to \(\sqrt{5} < \frac{23}{10}\) and \(\left(\frac{23}{10}\right)^2 = \frac{529}{100} > 5\).

  The root lies strictly between \(0.6\) and \(0.65\), so to one decimal place it is \(0.6\).
provenance: written-for-site
steps:
  - |
    Values \(f(0) = -2\) and \(f(1) = 3\), and a root in \((0, 1)\).
  - |
    The derivative is at least \(1\) on \([0, 1]\), so the root there is unique.
  - |
    The sign check \(f(0.6) < 0 < f(0.7)\), and the root to one decimal place is \(0.6\).
verification:
  checks:
    - expr: '(x**3 + 3*x**2 + x - 2).subs(x, 0)'
      expected: -2
    - expr: '(x**3 + 3*x**2 + x - 2).subs(x, 1)'
      expected: 3
    - expr: 'minimum(diff(x**3 + 3*x**2 + x - 2, x), x, Interval(0, 1))'
      expected: 1
    - expr: '(x**3 + 3*x**2 + x - 2).subs(x, Rational(3, 5))'
      expected: Rational(-13, 125)
    - expr: '(x**3 + 3*x**2 + x - 2).subs(x, Rational(7, 10))'
      expected: Rational(513, 1000)
    - expr: '(x**3 + 3*x**2 + x - 2).subs(x, (sqrt(5) - 1)/2)'
      expected: 0
:::

::: sheet-item
id: l2-ivt.sheet-ivt
category: recognition
text: |
  If \(f\) is continuous on the closed interval \([a, b]\), then \(f\) takes every value between \(f(a)\) and \(f(b)\). Opposite signs at the endpoints give a root in \((a, b)\). Uniqueness needs a separate argument.
:::

::: exercise
id: l2-ivt.ex-ivt-three-roots
tier: standard
topics: [intermediate-value-theorem]
statement: |
  Let \(f(x) = x^{3} - 3x + 1\).

  - (a) Show that \(f\) has exactly three real roots, and give an interval of length \(1\) that contains each of them.
  - (b) Use the derivative to show that the root in \((0, 1)\) is the only root of \(f\) in \((0, 1)\).
solution: |
  (a) The function \(f\) is a polynomial, so it is continuous on every closed interval. The values are
  \[
  \begin{aligned}
  f(-2)&=-1,\\
  f(-1)&=3,\\
  f(0)&=1,\\
  f(1)&=-1,\\
  f(2)&=3.
  \end{aligned}
  \]

  - Since \(f(-2) < 0 < f(-1)\), the intermediate value theorem gives a root in \((-2, -1)\).
  - Since \(f(0) > 0 > f(1)\), it gives a root in \((0, 1)\).
  - Since \(f(1) < 0 < f(2)\), it gives a root in \((1, 2)\).

  These three intervals do not overlap, so the roots are different. A polynomial of degree \(3\) has at most \(3\) real roots, so there are exactly three real roots, one in each interval.

  (b) The derivative is
  \[
  f'(x)=3x^{2}-3=3(x-1)(x+1).
  \]
  For \(0 < x < 1\):

  - the factor \(x - 1\) is negative,
  - the factor \(x + 1\) is positive.

  So \(f'(x) < 0\). The function is strictly decreasing on \([0, 1]\), so it takes the value \(0\) at most once there. The root in \((0, 1)\) is the only one in that interval.
provenance: written-for-site
steps:
  - The values at \(-2, -1, 0, 1, 2\) are \(-1, 3, 1, -1, 3\).
  - The intermediate value theorem gives a root in each of \((-2, -1)\), \((0, 1)\) and \((1, 2)\).
  - A cubic has at most three real roots, so these are all of them.
  - The derivative is negative on \((0, 1)\), so the root there is unique.
verification:
  checks:
    - expr: (x**3 - 3*x + 1).subs(x, -2)
      expected: "-1"
    - expr: (x**3 - 3*x + 1).subs(x, -1)
      expected: "3"
    - expr: (x**3 - 3*x + 1).subs(x, 0)
      expected: "1"
    - expr: (x**3 - 3*x + 1).subs(x, 1)
      expected: "-1"
    - expr: (x**3 - 3*x + 1).subs(x, 2)
      expected: "3"
    - expr: len(real_roots(x**3 - 3*x + 1))
      expected: "3"
    - expr: factor(diff(x**3 - 3*x + 1, x))
      expected: 3*(x - 1)*(x + 1)
    - expr: sign(diff(x**3 - 3*x + 1, x).subs(x, Rational(1, 2)))
      expected: "-1"
:::
