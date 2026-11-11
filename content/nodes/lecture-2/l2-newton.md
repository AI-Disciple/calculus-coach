---
id: l2-newton
lecture: 2
order: 9
title: "Newton's method"
prerequisites: [l1-derivative-rules]
sources:
  - { source: handout, section: "6.3", page: 139 }
  - { source: handout, section: "6.3", page: 141 }
  - { source: lecture-notes-2, page: 2 }
  - { source: midterm-app }
  - { source: midterm-mock-1, page: 1 }
  - { source: midterm-2022, page: 1 }
  - { source: midterm-2025, page: 1 }
  - { source: midterm-2026-key, page: 1 }
examWeight: high
examWeightNote: Newton for a root is on every recent midterm, 2 to 3 points.
status: reviewed
notation: |
  The lecture indexes the iterates by \(k\). The handout indexes the same step by \(i\).
---

::: section
title: Newton's iteration
:::

::: formal-statement
kind: method
title: Newton's iteration
source: { source: lecture-notes-2, page: 2 }
text: |
  If \(f'(x_k) \neq 0\), then
  \[
  x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}.
  \]
:::

::: plain-explanation
text: |
  The next iterate is the point where the tangent at \(x_k\) meets the axis. For an \(n\)-th root of a number \(a\), apply the method to \(f(x) = x^n - a\).
:::

::: tip
text: |
  Keep every iterate as an exact fraction, and round only after the error is known.
:::

::: visual
kind: newton
caption: |
  Newton's method for \(x^2 - 3\), starting at \(x_0 = 2\). Each tangent meets the axis at the next iterate. Move the starting point and the number of steps.
params:
  f: "x^2-3"
  x0: 2
  n: 4
:::

::: worked-example
title: Square root of 3
problem: |
  Approximate \(\sqrt{3}\) by Newton's method, starting at \(x_0 = 2\).
solution: |
  The positive square root of 3 is the positive root of \(f(x) = x^2 - 3\). The derivative is \(f'(x) = 2x\).

  At \(x_0 = 2\),
  \[
  \begin{aligned}
  f(2)&=1,\\
  f'(2)&=4,\\
  \text{tangent: }y&=4x - 7.
  \end{aligned}
  \]
  The tangent meets the axis at \(x_1 = 7/4\).

  The closed form of this step is \(x_{k+1} = (x_k^2 + 3)/(2x_k)\). From \(x_1 = 7/4\),
  \[
  x_2 = \frac{(7/4)^2 + 3}{2 \cdot (7/4)} = \frac{97}{56}.
  \]

  \[
  \begin{aligned}
  f(97/56)&=1/3136,\\
  f(433/250)&=-11/62500.
  \end{aligned}
  \]
  The first value is positive and the second is negative. For \(x > 0\) the derivative \(f'\) is positive, so \(\sqrt{3}\) lies between \(433/250 = 1.732\) and \(97/56\). The length of that interval is \(1/7000\).

  The next three-decimal cutoff is \(1.732 + 1/2000 = 1.7325\), and
  \[
  \frac{1}{2000} - \frac{1}{7000} = \frac{1}{2800},
  \]
  so the interval ends before that cutoff. Every number in it rounds to \(1.732\). Thus \(x_2\) has located \(\sqrt{3}\) to three decimal places.
:::

::: guided-example
title: Cube root of 9
problem: |
  Approximate the cube root of 9 to two decimal places by Newton's method, starting at \(x_0 = 2\).
steps:
  - |
    The cube root of 9 is a root of \(f(x) = x^3 - 9\). The derivative is \(f'(x) = 3x^2\), so
    \[
    x_{k+1} = x_k - \frac{x_k^3 - 9}{3x_k^2}.
    \]
  - |
    At \(x_0 = 2\),
    \[
    \begin{aligned}
    f(2)&=-1,\\
    f'(2)&=12,\\
    x_1&=2 - (-1)/12 = 25/12.
    \end{aligned}
    \]
  - |
    The cubes satisfy \(2^3 = 8 < 9\) and \((21/10)^3 = 9261/1000 > 9\). The root lies in \((2,\ 21/10)\), so it is within \(1/10\) of the start \(2\).
  - |
    \[
    \begin{aligned}
    f(52/25)&=-17/15625,\\
    f(25/12)&=73/1728.
    \end{aligned}
    \]
    The first value is negative and the second is positive. The root lies between \(52/25 = 2.08\) and \(25/12\). Their difference equals \(1/300\). Since \(3 \cdot (1/300) = 1/100\), the iterate \(25/12\) is within \(0.01\) of the root.
  - |
    The cutoff \(417/200 = 2.085\) satisfies \(417/200 - 25/12 = 1/600\), so \(25/12\) lies below \(2.085\). Every number from \(2.08\) to \(25/12\) rounds to \(2.08\) at two decimal places. The cube root of 9 to two decimal places is \(2.08\).
:::

::: trap
text: |
  The Newton step divides by \(f'(x_k)\). When \(f'(x_k) = 0\), the tangent is horizontal and does not meet the axis, so the next iterate is undefined. For \(f(x) = x^2 - 1\) at \(x_0 = 0\), the derivative \(f'(0)\) equals \(0\), and the formula asks for a division by zero.
:::

::: key-points
text: |
  - If \(f'(x_k) \neq 0\), then \(x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}\). The next iterate is the point where the tangent at \(x_k\) meets the axis.
  - For an \(n\)-th root of a number \(a\), apply the method to \(f(x) = x^n - a\).
  - The usual slip runs the step at a point with \(f'(x_k) = 0\). For \(f(x) = x^2 - 1\) at \(x_0 = 0\) the formula asks for a division by zero. The tangent is horizontal and does not meet the axis, so the next iterate is undefined.
:::

::: going-deeper
title: A root of tan x = 2x
text: |
  The equation \(\tan x = 2x\) is \(f(x) = \tan x - 2x = 0\), with \(f'(x) = \sec^2 x - 2\). **Newton's step** is
  \[
  x_{i+1} = x_i - \frac{\tan x_i - 2x_i}{\sec^2 x_i - 2}.
  \]
  From \(x_0 = 1\), stop at the sign change \(f(1.165) < 0 < f(1.166)\). The tighter value \(f(1.1655) < 0\) puts the root in \((1.1655,\ 1.166)\), so to three decimal places the root is \(1.166\).
:::

::: concept-question
id: l2-newton.q-348eaecd
question: |
  To approximate the \(n\)-th root of \(a\) by Newton's method, which function should you apply it to?
options:
  - text: |
      \(f(x) = x^{n} - a\)
    correct: true
  - text: |
      \(f(x) = x^{1/n} - a\)
  - text: |
      \(f(x) = a^{n} - x\)
  - text: |
      \(f(x) = n \cdot x - a\)
explanation: |
  The \(n\)-th root of \(a\) is a root of \(f(x) = x^{n} - a\).
:::

::: concept-question
id: l2-newton.q-ea73c158
question: |
  Write the Newton iteration for a function \(f\).
options:
  - text: |
      \(x_{k+1} = x_{k} - \frac{f(x_{k})}{f'(x_{k})}\)
    correct: true
  - text: |
      \(x_{k+1} = x_{k} + \frac{f(x_{k})}{f'(x_{k})}\)
  - text: |
      \(x_{k+1} = x_{k} - \frac{f'(x_{k})}{f(x_{k})}\)
  - text: |
      \(x_{k+1} = \frac{f(x_{k})}{f'(x_{k})}\)
explanation: |
  The tangent at \(x_{k}\) is \(y = f(x_{k}) + f'(x_{k})(x - x_{k})\). It hits the axis when \(x = x_{k} - \frac{f(x_{k})}{f'(x_{k})}\).
:::

::: concept-question
id: l2-newton.q-78020ae6
question: |
  Newton's method is used to approximate the fifth root of \(2\), starting at \(x_{0} = 1\). Compute \(x_{1}\).
options:
  - text: |
      \(\frac{6}{5}\)
    correct: true
  - text: |
      \(\frac{5}{6}\)
  - text: |
      \(2\)
  - text: |
      \(\frac{9}{5}\)
explanation: |
  With \(f(x) = x^{5} - 2\), the values are \(f(1) = -1\) and \(f'(1) = 5\), so \(x_{1} = 1 - \frac{-1}{5} = \frac{6}{5}\).
:::

::: concept-question
id: l2-newton.q-e66520f9
question: |
  Newton's method is used to approximate the eleventh root of \(5\), starting at \(x_{0} = 1\). Compute \(x_{1}\).
options:
  - text: |
      \(\frac{15}{11}\)
    correct: true
  - text: |
      \(\frac{11}{15}\)
  - text: |
      \(\frac{5}{11}\)
  - text: |
      \(\frac{16}{11}\)
explanation: |
  With \(f(x) = x^{11} - 5\), the values are \(f(1) = -4\) and \(f'(1) = 11\), so \(x_{1} = 1 - \frac{-4}{11} = \frac{15}{11}\).
:::

::: concept-question
id: l2-newton.q-7003383f
question: |
  For \(f(x) = x^{3} + x - 1\) starting at \(x_{0} = 1\), compute \(x_{1}\) and \(x_{2}\).
options:
  - text: |
      \(x_{1} = \frac{3}{4}\) and \(x_{2} = \frac{59}{86} \approx 0.686\)
    correct: true
  - text: |
      \(x_{1} = \frac{3}{4}\) and \(x_{2} = \frac{3}{4} - \frac{5}{43} \approx 0.634\)
  - text: |
      \(x_{1} = \frac{1}{2}\) and \(x_{2} = \frac{2}{3}\)
  - text: |
      \(x_{1} = \frac{4}{3}\) and \(x_{2} = 1.1\)
explanation: |
  The derivative is \(f'(x) = 3x^{2} + 1\). Then \(f(1) = 1\) and \(f'(1) = 4\), so
  \[
  x_{1} = 1 - \frac{1}{4} = \frac{3}{4}.
  \]
  Next, \(f(\frac{3}{4}) = \frac{11}{64}\) and \(f'(\frac{3}{4}) = \frac{43}{16}\), so
  \[
  x_{2} = \frac{3}{4} - \frac{11}{64} \cdot \frac{16}{43} = \frac{59}{86}.
  \]
:::

::: concept-question
id: l2-newton.q-7b1c5537
question: |
  Newton's method is applied to \(f\) and the current iterate sits at a point where \(f'(x_{k}) = 0\). What happens?
options:
  - text: |
      The step is undefined. The tangent is horizontal and never meets the axis.
    correct: true
  - text: |
      It converges twice as fast
  - text: |
      It jumps straight to the root
  - text: |
      Nothing special; the formula still works
explanation: |
  The Newton step divides by \(f'(x_{k})\). When \(f'(x_{k}) = 0\) the tangent is horizontal, so it does not meet the axis and the step is undefined.
:::

::: exercise
id: l2-newton.basic-cbrt-5
tier: basic
topics:
  - newton
statement: |
  Take one Newton step toward the cube root of \(5\), starting at \(x_0 = 2\). Give \(x_1\) as an exact fraction.
solution: |
  The cube root of \(5\) is a root of \(f(x) = x^3 - 5\). The derivative is \(f'(x) = 3x^2\).

  At \(x_0 = 2\),
  \[
  \begin{aligned}
  f(2)&=3,\\
  f'(2)&=12,\\
  x_1&=2 - \frac{3}{12} = \frac{7}{4}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - Function \(f(x) = x^3 - 5\).
  - Values \(f(2) = 3\) and \(f'(2) = 12\).
  - Iterate \(x_1 = 7/4\).
verification:
  checks:
    - expr: 2**3 - 5
      expected: "3"
    - expr: 3*2**2
      expected: "12"
    - expr: 2 - (2**3 - 5)/(3*2**2)
      expected: Rational(7, 4)
:::

::: section
title: Quadratic error bound
:::

::: formal-statement
kind: theorem
title: Quadratic error bound
source: { source: lecture-notes-2, page: 2 }
text: |
  Choose \(x_0\) close enough to a root \(x_*\). If \(f'(x_k) \neq 0\) at each step, then \(\lim_{k \to \infty} x_k = x_*\), and
  \[
  |x_{k+1} - x_*| \le C \, |x_k - x_*|^2
  \]
  for some constant \(C\).
:::

::: plain-explanation
text: |
  Squaring a small error shrinks it. The constant \(C\) is left unnamed. Section 6.3 of the handout, on page 141, gives no constant \(C\) and no quadratic bound. It stops when some decimals settle, and it checks a sign change of \(f\).
:::

::: trap
text: |
  An answer that stops at a raw iterate, with no error sentence, can miss the precision that was asked for. For the cube root of 2, take \(f(x) = x^3 - 2\) and \(x_0 = 1\). The first iterate is \(x_1 = 4/3\). Rounding \(4/3\) to two decimal places gives \(1.33\).

  The values
  \[
  \begin{aligned}
  f(6/5)&=-34/125,\\
  f(13/10)&=197/1000
  \end{aligned}
  \]
  have opposite signs, so the root lies in \((6/5,\ 13/10)\). The distance from \(4/3\) to \(13/10\) equals \(1/30\), and \(1/30 - 1/100 = 7/300\), so that distance is greater than \(1/100\). The iterate \(4/3\) has not reached two decimal places.
:::

::: key-points
text: |
  - If \(x_0\) is close enough to a root \(x_*\) and \(f'(x_k) \neq 0\) at each step, then \(\lim_{k \to \infty} x_k = x_*\) and \(|x_{k+1} - x_*| \le C \, |x_k - x_*|^2\) for some constant \(C\).
  - The usual slip stops at a raw iterate with no error sentence. For the cube root of 2 from \(x_0 = 1\), the iterate \(x_1 = 4/3\) rounds to \(1.33\), yet the root lies in \((6/5,\ 13/10)\) and \(4/3\) has not reached two decimal places. An error sentence shows that the precision that was asked for is reached.
:::

::: concept-question
id: l2-newton.q-297c1577
question: |
  Newton's method is used to approximate the fifth root of \(7\) from \(x_{0} = 1.5\). Roughly how accurate is the third iterate \(x_{3}\)?
options:
  - text: |
      About \(10^{-12}\)
    correct: true
  - text: |
      About \(10^{-2}\)
  - text: |
      About \(10^{-4}\)
  - text: |
      It has not converged yet
explanation: |
  The iterates run \(1.5\), then about \(1.47654\), then about \(1.475774\), then about \(1.4757731616\). The true value is \(7^{1/5} \approx 1.4757731616\). The error after three steps is about \(10^{-12}\).
:::

::: sheet-item
id: l2-newton.sheet-iteration
category: formula
text: |
  If \(f'(x_k) \neq 0\), then \(x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}\).
:::

::: sheet-item
id: l2-newton.sheet-nth-root
category: formula
text: |
  The \(n\)-th root of \(a\) is a root of \(f(x) = x^n - a\).
:::

::: sheet-item
id: l2-newton.sheet-error
category: trap
text: |
  Stop with an error sentence. A raw iterate can still be coarser than the precision that was asked for.
:::

::: exercise
id: l2-newton.standard-sqrt-5
tier: standard
topics:
  - newton
statement: |
  Approximate \(\sqrt{5}\) by two Newton steps, starting at \(x_0 = 2\). Give an error sentence and stop at two decimal places.
solution: |
  The positive square root of \(5\) is the positive root of \(f(x) = x^2 - 5\). The derivative is \(f'(x) = 2x\), so
  \[
  x_{k+1} = x_k - \frac{x_k^2 - 5}{2x_k}.
  \]

  At \(x_0 = 2\),
  \[
  \begin{aligned}
  f(2)&=-1,\\
  f'(2)&=4,\\
  x_1&=2 - (-1)/4 = 9/4.
  \end{aligned}
  \]

  At \(x_1 = 9/4\),
  \[
  \begin{aligned}
  f(9/4)&=1/16,\\
  f'(9/4)&=9/2,\\
  x_2&=\frac{9}{4} - \frac{1/16}{9/2}\\
  &=\frac{9}{4} - \frac{1}{72}\\
  &=\frac{161}{72}.
  \end{aligned}
  \]

  The values
  \[
  \begin{aligned}
  f(161/72)&=1/5184,\\
  f(447/200)&=-191/40000
  \end{aligned}
  \]
  The first value is positive and the second is negative. The root lies between \(447/200 = 2.235\) and \(161/72\). Their difference is \(1/900\). Subtracting that gap from \(1/200\) leaves \(7/1800\), so the gap is under \(1/200\). The upper rounding cutoff \(449/200 = 2.245\) satisfies \(449/200 - 161/72 = 2/225\), so \(161/72\) lies below \(2.245\). Every number in the interval rounds to \(2.24\) at two decimal places. Thus \(x_2\) gives \(\sqrt{5}\) to two decimal places as \(2.24\).
provenance: written-for-site
steps:
  - Function \(f(x) = x^2 - 5\) and the iterate \(x_1 = 9/4\).
  - Second iterate \(x_2 = 161/72\).
  - Sign change on \((447/200,\ 161/72)\) and the two-decimal value \(2.24\).
verification:
  checks:
    - expr: 2**2 - 5
      expected: "-1"
    - expr: 2*2
      expected: "4"
    - expr: 2 - (2**2 - 5)/(2*2)
      expected: Rational(9, 4)
    - expr: Rational(9, 4)**2 - 5
      expected: Rational(1, 16)
    - expr: 2*Rational(9, 4)
      expected: Rational(9, 2)
    - expr: Rational(9, 4) - (Rational(1, 16))/(Rational(9, 2))
      expected: Rational(161, 72)
    - expr: Rational(9, 4) - Rational(1, 72)
      expected: Rational(161, 72)
    - expr: Rational(161, 72)**2 - 5
      expected: Rational(1, 5184)
    - expr: Rational(447, 200)**2 - 5
      expected: Rational(-191, 40000)
    - expr: Rational(447, 200) - Rational(2235, 1000)
      expected: "0"
    - expr: Rational(161, 72) - Rational(447, 200)
      expected: Rational(1, 900)
    - expr: Rational(1, 200) - Rational(1, 900)
      expected: Rational(7, 1800)
    - expr: Rational(449, 200) - Rational(2245, 1000)
      expected: "0"
    - expr: Rational(449, 200) - Rational(161, 72)
      expected: Rational(2, 225)
:::

::: exercise
id: l2-newton.midterm-mock-1-ex3
statement: |
  Approximate the fifth root of \(7\), using \(x_0=1.5\) as a first guess. Use Newton's method to find the third iterate \(x_3\) as your approximation. How close is it to the exact number?
solution: |
  Apply Newton to \(g(x)=x^5-7\). Then
  \[
  \begin{aligned}
  g'(x)&=5x^4,\\
  x_{n+1}&=\frac{4x_n^5+7}{5x_n^4}.
  \end{aligned}
  \]
  Starting from \(x_0=\frac{3}{2}\), the iterates are
  \[
  \begin{aligned}
  x_1&=\frac{598}{405},\\
  x_2&=\frac{382163853763747}{258958257152400},\\
  x_3&=\frac{4x_2^5+7}{5x_2^4}.
  \end{aligned}
  \]
  The third iterate is the Newton step from \(x_2\). Numerically
  \[
  \begin{aligned}
  x_3&\approx 1.475773161595425,\\
  7^{1/5}&\approx 1.475773161594552.
  \end{aligned}
  \]
  The error is about \(8.7\times 10^{-13}\). The official key writes "Already done" and gives no value.
steps:
  - Newton recurrence for \(x^5-7=0\).
  - Iterates \(x_1\), \(x_2\), \(x_3\).
  - Error about \(8.7\times 10^{-13}\).
verification:
  checks:
    - expr: (4*(Rational(3,2))**5 + 7)/(5*(Rational(3,2))**4)
      expected: Rational(598, 405)
    - expr: (4*(Rational(598,405))**5 + 7)/(5*(Rational(598,405))**4)
      expected: Rational(382163853763747, 258958257152400)
    - expr: (4*(Rational(382163853763747, 258958257152400))**5 + 7)/(5*(Rational(382163853763747, 258958257152400))**4)
      expected: Rational(10189615947695566236873932358673992665516782088437291748706331846914943507, 6904594969514013793459822099390967902411905333916000897704897908456680500)
tier: exam
topics:
  - midterm
provenance: official-key
pastExam:
  year: 2023
  paper: Midterm mock
  question: "3"
  points: 3
:::

::: exercise
id: l2-newton.midterm-2022-ex3
statement: |
  Compute approximately the second Newton's algorithm iterate \(x_2\) of the fifth root of \(2\), starting with \(x_0=1\). Plot a zoom of the function which you defined for Newton's algorithm about the root and indicate Newton's iterates. How close approximately is \(x_2\) to the root?

  Hint: for \(x>0\) small use \((1+x)^4=1+4x+6x^2+4x^3+x^4\) and \((1+x)^5=1+5x+10x^2+10x^3+5x^4+x^5\).
tier: exam
topics:
  - newton
pastExam:
  year: 2022
  paper: Midterm
  question: "3"
  points: 2
solution: |
  Take \(f(x)=x^5-2\), so \(f'(x)=5x^4\). This derivative is nonnegative, and \(f\) is increasing. Also \(f(1)=-1<0\) and \(f(2)>0\). Newton's iteration is \(x_{n+1}=x_n-f(x_n)/f'(x_n)\), starting at \(x_0=1\). Then
  \[
  \begin{aligned}
  x_1&=1-\frac{f(1)}{f'(1)}\\
  &=1-\frac{-1}{5}\\
  &=1+\frac15=\frac65.
  \end{aligned}
  \]
  The next iterate is
  \[ x_2=\frac65-\frac{f(6/5)}{f'(6/5)}. \]
  The hint with \(x=\frac15\) gives
  \[
  \begin{aligned}
  \Bigl(1+\frac15\Bigr)^5&=1+1+\frac{10}{25}+\frac{10}{125}\\
  &\quad+\frac{5}{625}+\frac{1}{3125},\\
  \Bigl(1+\frac15\Bigr)^4&=1+\frac45+\frac{6}{25}+\frac{4}{125}+\frac{1}{625}.
  \end{aligned}
  \]
  Truncating as on the official key, \(f(6/5)\approx\frac{10}{25}+\frac{10}{125}\approx 0.4+0.1=0.5\) and \(f'(6/5)\approx 5\bigl(1+\frac45+\frac{6}{25}\bigr)\approx 10\). Hence
  \[ x_2\approx\frac65-\frac{1/2}{10}=1.15. \]
  The exact second iterate is \(x_2=18677/16200\).

  The sketch is the graph of \(y=x^5-2\) near the positive root, with the tangent at \(x_0=1\) meeting the axis at \(x_1=6/5\), and the next tangent meeting the axis at \(x_2\).

  The exact gap is \(\lvert 18677/16200-2^{1/5}\rvert\), about \(4.20\times 10^{-3}\).
provenance: official-key
steps:
  - Function \(f(x)=x^5-2\) and first iterate \(x_1=6/5\).
  - Binomial expansions at \(x=1/5\), then the approximate value of \(x_2\).
  - Sketch of the graph and the Newton tangents.
  - Distance from \(x_2\) to \(2^{1/5}\).
verification:
  checks:
    - expr: 1 - (1**5-2)/(5*1**4)
      expected: Rational(6, 5)
    - expr: Rational(6,5) - ((Rational(6,5)**5-2)/(5*Rational(6,5)**4))
      expected: Rational(18677, 16200)
discrepancy: |
  The official key estimates \(\lvert x_2-2^{1/5}\rvert\sim 10^{-3}\). The verified gap from the exact iterate \(18677/16200\) to \(2^{1/5}\) is about \(4.20\times 10^{-3}\).
:::

::: exercise
id: l2-newton.midterm-2025-ex2
number: "2"
statement: |
  Approximate the eleventh root of 5 to two decimal places using Newton’s algorithm, starting with \(x_0=1\).
tier: exam
solution: |
  Apply Newton to \(g(x)=x^{11}-5\), so \(g'(x)=11x^{10}\) and
  \[
  x_{k+1}=x_k-\frac{x_k^{11}-5}{11x_k^{10}}.
  \]
  From \(x_0=1\),
  \[
  x_1=1-\frac{1-5}{11}=1+\frac{4}{11}=\frac{15}{11}.
  \]
  The positive eleventh root of 5 is \(5^{1/11}\). To two decimal places this is \(1.16\).
provenance: official-key
steps:
  - Newton setup on \(x^{11}-5\) from \(x_0=1\).
  - The iterate \(x_1=15/11\).
  - Two-decimal value \(1.16\).
verification:
  checks:
    - expr: 1 - (1**11 - 5)/(11*1**10)
      expected: Rational(15, 11)
    - expr: floor(5**Rational(1, 11)*100 + Rational(1, 2))
      expected: "116"
discrepancy: |
  The official key gives \(x_n\sim 1{,}27\) from \(|x_2-x_n|<1/16<10^{-1}\), and writes “in fact \(x_n=1{,}15\)”. The verified value to two decimal places is \(1.16\). The bound is false: \(|x_2-5^{1/11}|\simeq 0.103\), which is larger than \(1/16\).
topics:
  - midterm
pastExam:
  year: 2025
  paper: Midterm
  question: "2"
  points: 3
:::

::: exercise
id: l2-newton.midterm-2026-ex2
number: "2"
statement: |
  Approximate the third root of 9 to two decimal place using Newton algorithm and starting with \(x_0=2\).
tier: exam
topics:
  - newton
pastExam:
  year: 2026
  paper: Midterm
  question: "2"
  points: 3
solution: |
  Newton's method for \(x^3-9=0\) gives
  \[ x_{n+1} = x_n - \frac{x_n^3-9}{3x_n^2}. \]
  With \(x_0=2\),
  \[ x_1 = 2-\frac{8-9}{12} = \frac{25}{12} \approx 2.0833. \]
  The cubes \(2^3 = 8\) and \((21/10)^3 = 9261/1000\) satisfy \(8 < 9 < (21/10)^3\), so the root lies in \((2,\ 21/10)\).

  The value \(f(52/25)\) equals \(-17/15625\) and \(f(25/12)\) equals \(73/1728\), so the root lies between \(52/25 = 2.08\) and \(25/12\). Their difference is \(1/300\), which is less than \(1/100\). The cutoff \(417/200 = 2.085\) lies above \(25/12\), so every number from \(2.08\) to \(25/12\) rounds to \(2.08\). The cube root of 9 to two decimal places is \(2.08\).
provenance: official-key
steps:
  - Newton recurrence \(x_{n+1}=x_n-(x_n^3-9)/(3x_n^2)\).
  - The iterate \(x_1=25/12\).
  - The root lies between \(2.08\) and \(25/12\), so two decimal places gives \(2.08\).
verification:
  checks:
    - expr: 2 - (2**3 - 9)/(3*2**2)
      expected: Rational(25, 12)
    - expr: (Rational(21, 10))**3 - 9
      expected: Rational(261, 1000)
    - expr: (Rational(52, 25))**3 - 9
      expected: Rational(-17, 15625)
    - expr: (Rational(25, 12))**3 - 9
      expected: Rational(73, 1728)
    - expr: Rational(25, 12) - Rational(52, 25)
      expected: Rational(1, 300)
:::

::: exercise
id: l2-newton.midterm-predicted-a-ex2
number: "2"
statement: |
  Approximate the cube root of 10 to two decimal places using Newton's algorithm, starting with \(x_0 = 2\).
tier: exam
topics:
  - newton
solution: |
  Take \(f(x) = x^3 - 10\), so \(f'(x) = 3x^2\) and
  \[
  x_{k+1} = x_k - \frac{x_k^3 - 10}{3x_k^2}.
  \]
  From \(x_0 = 2\),
  \[
  x_1 = 2 - \frac{8 - 10}{12} = \frac{13}{6}.
  \]
  The next iterate is \(x_2 = \dfrac{3277}{1521}\). One further step gives a value already stable at two decimal places. Rounding \(x_2 \approx 2.1545\) to two decimal places yields 2.15.
provenance: written-for-site
steps:
  - Write the Newton recurrence for x^3 - 10.
  - Compute x1 = 13/6.
  - Compute a further iterate and report 2.15.
verification:
  checks:
    - expr: 2 - (2**3 - 10)/(3*2**2) - Rational(13, 6)
      expected: "0"
    - expr: Rational(13, 6) - ((Rational(13, 6))**3 - 10)/(3*(Rational(13, 6))**2) - Rational(3277, 1521)
      expected: "0"
:::

::: exercise
id: l2-newton.ex-newton-error-sentence
tier: exam
topics: [newton]
statement: |
  Approximate the real root of \(x^{3} - 2x - 5 = 0\) near \(2\) to two decimal places by Newton's method, starting at \(x_0 = 2\). Give an error sentence that justifies the precision.
solution: |
  Take \(f(x) = x^{3} - 2x - 5\), so \(f'(x) = 3x^{2} - 2\) and
  \[
  x_{k+1} = x_k - \frac{x_k^{3} - 2x_k - 5}{3x_k^{2} - 2}.
  \]
  At \(x_0 = 2\), the value \(f(2)\) equals \(-1\) and the derivative \(f'(2)\) equals \(10\), so \(x_1 = 2 + \frac{1}{10} = \frac{21}{10}\).

  At \(x_1 = \frac{21}{10}\), the value \(f\bigl(\frac{21}{10}\bigr)\) equals \(\frac{61}{1000}\) and the derivative equals \(\frac{1123}{100}\). Then
  \[
  \begin{aligned}
  x_2&=\frac{21}{10} - \frac{61}{1000}\cdot\frac{100}{1123}\\
  &=\frac{21}{10} - \frac{61}{11230}\\
  &=\frac{11761}{5615} \approx 2.0946.
  \end{aligned}
  \]

  **Error sentence.** The value \(f(2.09) = -\frac{50671}{1000000}\) is negative, and \(f(2.095) = \frac{40059}{8000000}\) is positive. The function \(f\) is continuous, so a root lies in \((2.09, 2.095)\). Every number in this interval rounds to \(2.09\) at two decimal places, and \(x_2 \approx 2.0946\) lies in it. The root is \(2.09\) to two decimal places.

  The first iterate \(x_1 = 2.1\) is above \(2.095\), so it has not reached two decimal places.
provenance: written-for-site
steps:
  - Recurrence \(x_{k+1} = x_k - (x_k^{3} - 2x_k - 5)/(3x_k^{2} - 2)\), with \(x_1 = 21/10\).
  - Second iterate \(x_2 = 11761/5615\).
  - Sign change on \((2.09, 2.095)\), so the root is \(2.09\) to two decimal places.
verification:
  checks:
    - expr: 2 - (2**3 - 2*2 - 5)/(3*2**2 - 2)
      expected: Rational(21, 10)
    - expr: Rational(21, 10)**3 - 2*Rational(21, 10) - 5
      expected: Rational(61, 1000)
    - expr: 3*Rational(21, 10)**2 - 2
      expected: Rational(1123, 100)
    - expr: Rational(21, 10) - (Rational(21, 10)**3 - 2*Rational(21, 10) - 5)/(3*Rational(21, 10)**2 - 2)
      expected: Rational(11761, 5615)
    - expr: Rational(209, 100)**3 - 2*Rational(209, 100) - 5
      expected: -Rational(50671, 1000000)
    - expr: Rational(419, 200)**3 - 2*Rational(419, 200) - 5
      expected: Rational(40059, 8000000)
    - expr: sign(Rational(419, 200) - Rational(11761, 5615))
      expected: "1"
    - expr: sign(Rational(11761, 5615) - Rational(209, 100))
      expected: "1"
:::

::: exercise
id: l2-newton.ex-newton-quadratic-convergence
tier: exam
topics: [newton]
statement: |
  Apply Newton's method to \(f(x) = x^{2} - 2\) with \(x_0 = 1\).

  (a) Find \(x_1\), \(x_2\) and \(x_3\) as exact fractions.

  (b) Show that \(x_{k+1} - \sqrt{2} = \dfrac{(x_k - \sqrt{2})^{2}}{2x_k}\).

  (c) Let \(e_k = x_k - \sqrt{2}\). Use (b) to find \(e_{k+1}/e_k^{2}\) in terms of \(x_k\), and use it to explain the number of correct decimals of \(x_1\), \(x_2\) and \(x_3\).
solution: |
  (a) Here \(x_{k+1} = x_k - \frac{x_k^{2} - 2}{2x_k} = \frac{x_k^{2} + 2}{2x_k}\). Then
  \[
  \begin{aligned}
  x_1&=\frac{1 + 2}{2} = \frac{3}{2},\\
  x_2&=\frac{\frac{9}{4} + 2}{3} = \frac{17}{12},\\
  x_3&=\frac{\frac{289}{144} + 2}{\frac{17}{6}} = \frac{577}{408}.
  \end{aligned}
  \]

  (b) Start from \(x_{k+1} - \sqrt{2} = \frac{x_k^{2} + 2}{2x_k} - \sqrt{2}\). Put everything over \(2x_k\):
  \[
  \begin{aligned}
  x_{k+1} - \sqrt{2}&=\frac{x_k^{2} - 2\sqrt{2}\,x_k + 2}{2x_k}\\
  &=\frac{(x_k - \sqrt{2})^{2}}{2x_k}.
  \end{aligned}
  \]

  (c) By (b), \(e_{k+1} = \frac{e_k^{2}}{2x_k}\), so \(\frac{e_{k+1}}{e_k^{2}} = \frac{1}{2x_k}\). As \(x_k \to \sqrt{2}\), this ratio tends to \(\frac{1}{2\sqrt{2}} \approx 0.354\). The errors are
  \[
  \begin{aligned}
  e_1&\approx 0.0858,\\
  e_2&\approx 0.00245,\\
  e_3&\approx 2.1 \times 10^{-6}.
  \end{aligned}
  \]
  The ratios are \(\frac{1}{3}\) for \(k = 1\) and \(\frac{6}{17}\) for \(k = 2\), as the formula predicts.

  Each error is about one third of the square of the previous one. So when \(e_k\) has \(m\) zeros after the decimal point, \(e_{k+1}\) has about \(2m\). The errors \(e_1\), \(e_2\) and \(e_3\) have about one, two and five zeros after the decimal point, so the number of correct decimals roughly doubles at each step.
provenance: written-for-site
steps:
  - Iterates \(3/2\), \(17/12\), \(577/408\).
  - Identity \(x_{k+1} - \sqrt{2} = (x_k - \sqrt{2})^{2}/(2x_k)\).
  - Ratio \(e_{k+1}/e_k^{2} = 1/(2x_k)\), so the number of correct decimals doubles.
verification:
  checks:
    - expr: 1 - (1**2 - 2)/(2*1)
      expected: Rational(3, 2)
    - expr: Rational(3, 2) - (Rational(3, 2)**2 - 2)/(2*Rational(3, 2))
      expected: Rational(17, 12)
    - expr: Rational(17, 12) - (Rational(17, 12)**2 - 2)/(2*Rational(17, 12))
      expected: Rational(577, 408)
    - expr: (x**2 + 2)/(2*x) - sqrt(2) - (x - sqrt(2))**2/(2*x)
      expected: "0"
    - expr: radsimp((Rational(17, 12) - sqrt(2))/(Rational(3, 2) - sqrt(2))**2)
      expected: Rational(1, 3)
    - expr: radsimp((Rational(577, 408) - sqrt(2))/(Rational(17, 12) - sqrt(2))**2)
      expected: Rational(6, 17)
    - expr: floor(10**4*(Rational(17, 12) - sqrt(2)))
      expected: "24"
    - expr: floor(10**6*(Rational(577, 408) - sqrt(2)))
      expected: "2"
:::

::: exercise
id: l2-newton.handout-6-3-3
number: "6.3.3"
tier: standard
topics:
  - newton
statement: |
  The function \(f(x) = x^3 - 3x^2 - 3x + 6\) has a root between \(3\) and \(4\), because \(f(3) = -3\) and \(f(4) = 10\). Approximate the root to two decimal places.
solution: |
  The derivative is \(f'(x) = 3x^2 - 6x - 3\), and the Newton step is
  \[
  x_{k+1} = x_k - \frac{x_k^3 - 3x_k^2 - 3x_k + 6}{3x_k^2 - 6x_k - 3}.
  \]
  The derivative can be written \(f'(x) = 3\bigl((x - 1)^2 - 2\bigr)\). It increases for \(x > 1\) and equals \(6\) at \(x = 3\), so \(f' > 0\) on \([3, 4]\). Then \(f\) is strictly increasing on \([3, 4]\), and the sign change from \(f(3) = -3\) to \(f(4) = 10\) gives exactly one root there.

  Start at the midpoint \(x_0 = \frac{7}{2}\). The values are
  \[
  \begin{aligned}
  f\bigl(\tfrac{7}{2}\bigr)&=\frac{13}{8},\\
  f'\bigl(\tfrac{7}{2}\bigr)&=\frac{51}{4},\\
  x_1&=\frac{7}{2} - \frac{13/8}{51/4}\\
  &=\frac{7}{2} - \frac{13}{102}\\
  &=\frac{172}{51}.
  \end{aligned}
  \]

  At \(x_1 = \frac{172}{51} \approx 3.372549\), the values are \(f(x_1) \approx 0.119758\) and \(f'(x_1) \approx 10.886967\). Therefore
  \[
  x_2 = x_1 - \frac{f(x_1)}{f'(x_1)} \approx 3.372549 - 0.011000 = 3.361549.
  \]

  To see that \(x_2\) gives two decimal places, locate the root with two function values:
  \[
  \begin{aligned}
  f(3.355)&=-0.069111125,\\
  f(3.365)&=0.037977125.
  \end{aligned}
  \]
  The first value is negative and the second is positive, so the root lies in \((3.355,\ 3.365)\). Every number in this interval rounds to \(3.36\) at two decimal places. The iterate \(x_2 \approx 3.3615\) lies in it as well.

  The root, to two decimal places, is \(3.36\).
provenance: handout-answer
steps:
  - The derivative \(f'(x) = 3x^2 - 6x - 3\) is positive on \([3, 4]\), so there is exactly one root there.
  - From \(x_0 = \frac{7}{2}\), \(x_1 = \frac{172}{51}\) and \(x_2 \approx 3.361549\).
  - The sign change of \(f\) on \((3.355,\ 3.365)\) gives the value \(3.36\).
verification:
  checks:
    - expr: '(x**3 - 3*x**2 - 3*x + 6).subs(x, 3)'
      expected: '-3'
    - expr: '(x**3 - 3*x**2 - 3*x + 6).subs(x, 4)'
      expected: '10'
    - expr: '(x**3 - 3*x**2 - 3*x + 6).subs(x, Rational(7, 2))'
      expected: '13/8'
    - expr: '(3*x**2 - 6*x - 3).subs(x, Rational(7, 2))'
      expected: '51/4'
    - expr: '(x - (x**3 - 3*x**2 - 3*x + 6)/(3*x**2 - 6*x - 3)).subs(x, Rational(7, 2))'
      expected: '172/51'
    - expr: 'floor(10**6*(x - (x**3 - 3*x**2 - 3*x + 6)/(3*x**2 - 6*x - 3)).subs(x, Rational(172, 51)))'
      expected: '3361548'
    - expr: '(x**3 - 3*x**2 - 3*x + 6).subs(x, Rational(671, 200))'
      expected: 'Rational(-69111125, 10**9)'
    - expr: '(x**3 - 3*x**2 - 3*x + 6).subs(x, Rational(673, 200))'
      expected: 'Rational(37977125, 10**9)'
    - expr: 'floor(100*nsolve(x**3 - 3*x**2 - 3*x + 6, x, 3.5) + Rational(1, 2))'
      expected: '336'
:::


::: exercise
id: l2-newton.handout-6-3-4
number: "6.3.4"
tier: standard
topics:
  - newton
statement: |
  A rectangular piece of cardboard of dimensions \(8 \times 17\) is used to make an open-top box by cutting out a small square of side \(x\) from each corner and bending up the sides. If \(x = 2\), then the volume of the box is \(2 \cdot 4 \cdot 13 = 104\). Use Newton's method to find a value of \(x\) for which the box has volume \(100\), accurate to \(3\) significant figures.
solution: |
  After the cut, the box has height \(x\) and a base of \(8 - 2x\) by \(17 - 2x\), with \(0 < x < 4\). The volume is
  \[
  V(x) = x(8 - 2x)(17 - 2x) = 4x^3 - 50x^2 + 136x.
  \]
  Check: \(V(2) = 32 - 200 + 272 = 104\). The volume \(100\) is a root of
  \[
  f(x) = 4x^3 - 50x^2 + 136x - 100,
  \]
  with \(f'(x) = 12x^2 - 100x + 136\) and the Newton step \(x_{k+1} = x_k - \frac{f(x_k)}{f'(x_k)}\).

  **Where the roots are.** The values \(V(1) = 90\), \(V(1.5) = 105\), \(V(2) = 104\) and \(V(3) = 66\) show that \(f\) is negative at \(1\), positive at \(1.5\) and \(2\), and negative at \(3\). So \(f\) has a root in \((1,\ 1.5)\) and another in \((2,\ 3)\). Start at \(x_0 = 1\) for the first and at \(x_0 = 2\) for the second.

  **The smaller root, from \(x_0 = 1\).**
  \[
  \begin{aligned}
  f(1)&=-10,\\
  f'(1)&=48,\\
  x_1&=1 + \frac{10}{48} = \frac{29}{24}.
  \end{aligned}
  \]
  At \(x_1\), \(f\bigl(\frac{29}{24}\bigr) = -\frac{5575}{3456}\) and \(f'\bigl(\frac{29}{24}\bigr) = \frac{523}{16}\), so
  \[
  x_2 = \frac{29}{24} + \frac{5575/3456}{523/16} = \frac{71039}{56484} \approx 1.257684.
  \]
  The values
  \[
  \begin{aligned}
  f(1.255)&=-0.1646245,\\
  f(1.265)&=0.1258885
  \end{aligned}
  \]
  have opposite signs, so the root lies in \((1.255,\ 1.265)\). Every number there rounds to \(1.26\) at three significant figures.

  **The larger root, from \(x_0 = 2\).**
  \[
  \begin{aligned}
  f(2)&=4,\\
  f'(2)&=-16,\\
  x_1&=2 + \frac{4}{16} = \frac{9}{4}.
  \end{aligned}
  \]
  At \(x_1\), \(f\bigl(\frac{9}{4}\bigr) = -\frac{25}{16}\) and \(f'\bigl(\frac{9}{4}\bigr) = -\frac{113}{4}\), so
  \[
  x_2 = \frac{9}{4} - \frac{25}{452} = \frac{248}{113} \approx 2.194690.
  \]
  The values
  \[
  \begin{aligned}
  f(2.185)&=0.1754765,\\
  f(2.195)&=-0.0789905
  \end{aligned}
  \]
  have opposite signs, so the root lies in \((2.185,\ 2.195)\). Every number there rounds to \(2.19\) at three significant figures.

  The cubic \(f\) has a third root, but the three roots add up to \(\frac{50}{4} = 12.5\), so the third is about \(9.05\). It is larger than \(4\) and gives no box.

  The box has volume \(100\) for \(x \approx 1.26\) and for \(x \approx 2.19\).
provenance: handout-answer
steps:
  - The volume is \(V(x) = 4x^3 - 50x^2 + 136x\), and the equation is \(f(x) = V(x) - 100 = 0\) with \(0 < x < 4\).
  - From \(x_0 = 1\), \(x_1 = \frac{29}{24}\) and \(x_2 \approx 1.257684\), and a sign change on \((1.255,\ 1.265)\) gives \(1.26\).
  - From \(x_0 = 2\), \(x_1 = \frac{9}{4}\) and \(x_2 \approx 2.194690\), and a sign change on \((2.185,\ 2.195)\) gives \(2.19\).
verification:
  checks:
    - expr: 'expand(x*(8 - 2*x)*(17 - 2*x) - 100)'
      expected: '4*x**3 - 50*x**2 + 136*x - 100'
    - expr: '(x*(8 - 2*x)*(17 - 2*x)).subs(x, 2)'
      expected: '104'
    - expr: '(x - (4*x**3 - 50*x**2 + 136*x - 100)/(12*x**2 - 100*x + 136)).subs(x, 1)'
      expected: '29/24'
    - expr: '(x - (4*x**3 - 50*x**2 + 136*x - 100)/(12*x**2 - 100*x + 136)).subs(x, Rational(29, 24))'
      expected: '71039/56484'
    - expr: '(x - (4*x**3 - 50*x**2 + 136*x - 100)/(12*x**2 - 100*x + 136)).subs(x, 2)'
      expected: '9/4'
    - expr: '(x - (4*x**3 - 50*x**2 + 136*x - 100)/(12*x**2 - 100*x + 136)).subs(x, Rational(9, 4))'
      expected: '248/113'
    - expr: '(4*x**3 - 50*x**2 + 136*x - 100).subs(x, Rational(251, 200))'
      expected: 'Rational(-1646245, 10**7)'
    - expr: '(4*x**3 - 50*x**2 + 136*x - 100).subs(x, Rational(253, 200))'
      expected: 'Rational(1258885, 10**7)'
    - expr: '(4*x**3 - 50*x**2 + 136*x - 100).subs(x, Rational(437, 200))'
      expected: 'Rational(1754765, 10**7)'
    - expr: '(4*x**3 - 50*x**2 + 136*x - 100).subs(x, Rational(439, 200))'
      expected: 'Rational(-789905, 10**7)'
    - expr: 'floor(100*nsolve(4*x**3 - 50*x**2 + 136*x - 100, x, 1) + Rational(1, 2))'
      expected: '126'
    - expr: 'floor(100*nsolve(4*x**3 - 50*x**2 + 136*x - 100, x, 2) + Rational(1, 2))'
      expected: '219'
    - expr: 'floor(nsolve(4*x**3 - 50*x**2 + 136*x - 100, x, 9))'
      expected: '9'
:::
