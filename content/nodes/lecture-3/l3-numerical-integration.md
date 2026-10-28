---
id: l3-numerical-integration
lecture: 3
order: 13
title: Numerical integration
prerequisites: [l3-riemann-sums]
sources:
  - { source: handout, section: "8.6", page: 184 }
examWeight: low
examWeightNote: The trapezoid rule and Simpson's rule are in the course. The error bounds are optional.
status: reviewed
---

::: section
title: Trapezoid rule
:::

::: formal-statement
kind: method
title: Trapezoid rule
source: { source: handout, section: "8.6", page: 185 }
text: |
  Divide \([a,b]\) into \(n\) subintervals of equal length \(\Delta x\). The trapezoid on \([x_i,x_{i+1}]\) has area
  \[
  \frac{f(x_i)+f(x_{i+1})}{2}\Delta x.
  \]
  The sum of these areas is
  \[
  \begin{aligned}
  &\left(\frac{f(x_0)}{2}+f(x_1)+f(x_2)+\cdots\right.\\
  &\quad\left.+f(x_{n-1})+\frac{f(x_n)}{2}\right)\Delta x.
  \end{aligned}
  \]
  This is the **trapezoid rule**.
:::

::: plain-explanation
text: |
  A Riemann sum builds the integral from rectangles. The trapezoid rule uses the same cut of \([a,b]\) into \(n\) subintervals of length \(\Delta x=(b-a)/n\), and on each subinterval it follows the chord between the two endpoint heights. The area of one trapezoid is the average of those heights times \(\Delta x\).

  - Each interior sample belongs to two trapezoids, so the separate halves combine into **weight** \(1\).
  - Each endpoint belongs to one trapezoid, so it keeps weight \(\frac{1}{2}\).
:::

::: worked-example
title: Six trapezoids for \(e^{-x^2}\)
problem: |
  The integrand \(e^{-x^2}\) has no elementary antiderivative. Approximate \(\int_0^1 e^{-x^2}\,dx\) by the trapezoid rule with six subintervals.
solution: |
  Let \(f(x)=e^{-x^2}\). The interval is \([0,1]\) and \(n=6\), so the width is \(\Delta x=\frac{1}{6}\). The nodes are \(0,\frac{1}{6},\frac{2}{6},\frac{3}{6},\frac{4}{6},\frac{5}{6},1\). The trapezoid approximation is
  \[
  \begin{aligned}
  &\left(\frac{f(0)}{2}+f\left(\frac{1}{6}\right)+f\left(\frac{2}{6}\right)\right.\\
  &\quad+f\left(\frac{3}{6}\right)+f\left(\frac{4}{6}\right)+f\left(\frac{5}{6}\right)\\
  &\quad\left.+\frac{f(1)}{2}\right)\frac{1}{6}.
  \end{aligned}
  \]
  The value of this sum is approximately \(0.74512\).
:::

::: key-points
text: |
  - The trapezoid rule with \(n\) subintervals of width \(\Delta x=(b-a)/n\) is \(\left(\frac{f(x_0)}{2}+f(x_1)+\cdots+f(x_{n-1})+\frac{f(x_n)}{2}\right)\Delta x\).
  - The weights are \(\frac{1}{2},1,1,\ldots,1,\frac{1}{2}\): each endpoint belongs to one trapezoid and keeps weight \(\frac{1}{2}\), each interior sample belongs to two and gets weight \(1\).
:::

::: concept-question
id: l3-numerical-integration.q-6f945fe5
question: |
  In the trapezoid rule, what are the weights on \(f(x_0),f(x_1),\ldots,f(x_n)\)?
options:
  - text: |
      \(\frac{1}{2},1,1,\ldots,1,\frac{1}{2}\)
    correct: true
  - text: |
      \(1,1,1,\ldots,1\)
  - text: |
      \(1,2,2,\ldots,2,1\)
  - text: |
      \(1,4,2,4,\ldots,4,1\)
explanation: |
  The combined sum gives the endpoints weight \(\frac{1}{2}\) and each interior sample weight \(1\). On \(\int_0^2 x\,dx\) with two subintervals, the width is \(1\) and the samples are \(0\), \(1\) and \(2\). The trapezoid rule and the equal-weight sum return
  \[
  \begin{aligned}
  \left(\frac{0}{2}+1+\frac{2}{2}\right)\cdot 1&=2,\\
  (0+1+2)\cdot 1&=3.
  \end{aligned}
  \]
  The integral equals \(2\), so the equal-weight sum is not the integral.
:::

::: exercise
id: l3-numerical-integration.ex-8.6.1
number: "8.6.1"
tier: basic
topics: [numerical-integration]
statement: |
  Compute the trapezoid approximation and the Simpson approximation of \(\int_1^3 x\,dx\) with \(4\) subintervals. Also compute the error estimate for each rule, using a bound for \(|f''|\) and a bound for \(|f^{(4)}|\) on \([1,3]\).
solution: |
  The width is \(\Delta x=\frac{3-1}{4}=\frac{1}{2}\). The nodes are \(1,\frac{3}{2},2,\frac{5}{2},3\), and the samples of \(x\) are those same numbers.

  The trapezoid approximation weights the endpoints by \(\frac{1}{2}\):
  \[
  \left(\frac{1}{2}+\frac{3}{2}+2+\frac{5}{2}+\frac{3}{2}\right)\cdot\frac{1}{2}=4.
  \]
  Simpson's rule uses weights \(1,4,2,4,1\) and the factor \(\frac{1}{6}\):
  \[
  \frac{1}{6}\left(1+4\cdot\frac{3}{2}+2\cdot 2+4\cdot\frac{5}{2}+3\right)=4.
  \]

  The second derivative of \(x\) is \(0\), and the fourth derivative is \(0\). Both error estimates are \(0\). The integral equals \(4\), so both approximations are exact. The appendix records \(4\) for each rule, with error estimate \(0\).
provenance: handout-answer
steps:
  - The width is \(\frac{1}{2}\), and the samples are \(1,\frac{3}{2},2,\frac{5}{2},3\).
  - The trapezoid approximation equals \(4\).
  - The Simpson approximation equals \(4\).
  - Both derivatives that enter the error estimates are \(0\), so both estimates are \(0\).
verification:
  checks:
    - expr: "(1/2 + 3/2 + 2 + 5/2 + 3/2)*(1/2)"
      expected: "4"
    - expr: "((1/2)/3)*(1 + 4*(3/2) + 2*2 + 4*(5/2) + 3)"
      expected: "4"
    - expr: "(2**3)/(12*4**2)*0"
      expected: "0"
    - expr: "(2**5)/(180*4**4)*0"
      expected: "0"
:::

::: section
title: Simpson's rule
:::

::: formal-statement
kind: method
title: Simpson's rule
source: { source: handout, section: "8.6", page: 187 }
text: |
  Let \(n\) be even, and let \(x_0,\ldots,x_n\) be the sample points spaced by \(\Delta x\). The area under the parabola through \((x_i,f(x_i))\), \((x_{i+1},f(x_{i+1}))\) and \((x_{i+2},f(x_{i+2}))\) is
  \[
  \frac{\Delta x}{3}\bigl(f(x_i)+4f(x_{i+1})+f(x_{i+2})\bigr).
  \]
  The sum of these areas is
  \[
  \begin{aligned}
  &\frac{\Delta x}{3}\bigl(f(x_0)+4f(x_1)+2f(x_2)\bigr.\\
  &\quad\bigl.+4f(x_3)+2f(x_4)+\cdots\bigr.\\
  &\quad\bigl.+2f(x_{n-2})+4f(x_{n-1})+f(x_n)\bigr).
  \end{aligned}
  \]
  This is **Simpson's rule**. The weights close in the pattern \(1,4,2,4,\ldots,4,1\) only when \(n\) is even.
:::

::: plain-explanation
text: |
  Three points fix one parabola, so the subintervals are taken in consecutive pairs, and \(n\) has to be even. On the pair from \(x_i\) to \(x_{i+2}\), the graph is matched by the parabola through the three sample points. The area under that parabola is \(\frac{\Delta x}{3}\) times \(f(x_i)+4f(x_{i+1})+f(x_{i+2})\). Adding the pairs gives these weights:

  - The outer endpoints keep weight \(1\).
  - Odd indices keep weight \(4\).
  - The even indices between the ends keep weight \(2\).
:::

::: worked-example
title: Simpson's rule for \(e^{-x^2}\)
problem: |
  Approximate the same integral \(\int_0^1 e^{-x^2}\,dx\) by Simpson's rule with four subintervals.
solution: |
  Let \(f(x)=e^{-x^2}\). Four is even, and the width is \(\Delta x=\frac{1}{4}\). The nodes are \(0,\frac{1}{4},\frac{1}{2},\frac{3}{4},1\). The weights are \(1,4,2,4,1\), and the factor in front is \(\frac{\Delta x}{3}=\frac{1}{12}\). Simpson's rule gives
  \[
  \begin{aligned}
  &\left(f(0)+4f\left(\frac{1}{4}\right)+2f\left(\frac{1}{2}\right)\right.\\
  &\quad\left.+4f\left(\frac{3}{4}\right)+f(1)\right)\frac{1}{12}.
  \end{aligned}
  \]
  The value of this sum is approximately \(0.746855\).
:::

::: guided-example
title: Simpson's rule on a short interval
problem: |
  Use Simpson's rule with two subintervals to approximate \(\int_0^2 x^2\,dx\).
steps:
  - |
    Two is even, so Simpson's rule applies. The width is \(\Delta x=\frac{2-0}{2}=1\).
  - |
    The nodes are \(0\), \(1\) and \(2\). The sample values of \(x^2\) are \(0\), \(1\) and \(4\).
  - |
    The weights on those three samples are \(1\), \(4\) and \(1\). The weighted sum of the samples is \(0+4\cdot 1+4=8\).
  - |
    Multiply by \(\frac{\Delta x}{3}=\frac{1}{3}\). The approximation is \(\frac{8}{3}\).
  - |
    The integral of \(x^2\) from \(0\) to \(2\) is \(\left[\frac{x^3}{3}\right]_0^2=\frac{8}{3}\). The approximation equals the integral.
:::

::: trap
text: |
  Simpson's rule needs an even number of subintervals, so that each parabola covers two of them and the weights finish \(4,1\). Take \(\int_0^3 x^2\,dx\), which equals \(9\). With three subintervals the width is \(1\) and the samples are \(0\), \(1\), \(4\) and \(9\). Feeding those samples to the pattern \(1,4,2,1\) gives
  \[
  \frac{1}{3}\bigl(0+4\cdot 1+2\cdot 4+9\bigr)=7.
  \]
  The value \(7\) is not equal to the integral. With two subintervals the width is \(\frac{3}{2}\) and the samples are \(0\), \(\frac{9}{4}\) and \(9\). Simpson's rule then gives
  \[
  \frac{1}{2}\left(0+4\cdot\frac{9}{4}+9\right)=9,
  \]
  which equals the integral.
:::

::: key-points
text: |
  - Simpson's rule fits a parabola through each pair of consecutive subintervals and gives \(\frac{\Delta x}{3}\bigl(f(x_0)+4f(x_1)+2f(x_2)+\cdots+4f(x_{n-1})+f(x_n)\bigr)\).
  - The number \(n\) of subintervals has to be even, so that the weights run \(1,4,2,4,\ldots,4,1\).
  - The usual slip feeds three subintervals to the pattern \(1,4,2,1\), which returns \(7\) for \(\int_0^3 x^2\,dx\). The integral is \(9\), and two subintervals give \(9\).
:::

::: going-deeper
title: Error bounds
text: |
  The **error** of an approximation is the difference between the approximation and the integral. An **error estimate** is a number at least as large as the absolute error. If \(A\) is the approximation and the estimate is \(B\), the integral lies between \(A-B\) and \(A+B\).

  Suppose:

  - \(f\) has a second derivative everywhere on \([a,b]\).
  - \(|f''(x)|\le M\) for every \(x\) in the interval.

  With \(\Delta x=(b-a)/n\), an error estimate for the trapezoid approximation is
  \[
  \frac{b-a}{12}M(\Delta x)^2=\frac{(b-a)^3}{12n^2}M.
  \]

  Suppose:

  - \(f\) has a fourth derivative everywhere on \([a,b]\).
  - \(|f^{(4)}(x)|\le M\) for every \(x\) in the interval.

  With the same \(\Delta x\), an error estimate for Simpson's approximation is
  \[
  \frac{b-a}{180}M(\Delta x)^4=\frac{(b-a)^5}{180n^4}M.
  \]

  - When the fourth derivative is identically \(0\), this estimate is \(0\), so Simpson's rule is exact for polynomials of degree at most \(3\).
  - When the second derivative is identically \(0\), the trapezoid estimate is \(0\), so the trapezoid rule is exact for linear polynomials.

  ### Subintervals for the Gaussian integral

  These estimates fix how many subintervals are enough for \(\int_0^1 e^{-x^2}\,dx\). Let \(f(x)=e^{-x^2}\). The second derivative is \((4x^2-2)e^{-x^2}\). On \([0,1]\), \(|4x^2-2|\le 2\) and \(e^{-x^2}\le 1\), so \(|f''(x)|\le 2\). The value at \(x=0\) is \(-2\), so the bound \(2\) is attained. For two correct decimal places the trapezoid estimate needs to be under \(0.005\):
  \[
  \frac{1}{12}\cdot 2\cdot\frac{1}{n^2}<0.005,
  \]
  which is \(n>\sqrt{100/3}\approx 5.77\). The first integer past that threshold is \(n=6\). The estimate is then
  \[
  \frac{1^3}{12\cdot 6^2}\cdot 2=\frac{1}{216},
  \]
  about \(0.004630\).

  - The six-interval trapezoid sum is approximately \(0.74512\). Subtracting and adding \(\frac{1}{216}\) produces an interval from about \(0.74049\) to about \(0.74975\). Those ends round to \(0.74\) and to \(0.75\).
  - With \(n=12\) the estimate is \(\frac{1}{864}\), about \(0.001157\), and the trapezoid sum is approximately \(0.746398\). The ends are then about \(0.745241\) and \(0.747555\), and each rounds to \(0.75\).

  Twelve rectangles with left endpoints give about \(0.7727\).

  ### The fourth derivative

  The same integral with Simpson's rule needs the fourth derivative. The first three derivatives of \(e^{-x^2}\) are
  \[
  \begin{aligned}
  &-2xe^{-x^2},\\
  &(4x^2-2)e^{-x^2},\\
  &(12x-8x^3)e^{-x^2}.
  \end{aligned}
  \]
  One more product rule gives
  \[
  \begin{aligned}
  &(12-24x^2)e^{-x^2}\\
  &\quad+(12x-8x^3)(-2x)e^{-x^2}.
  \end{aligned}
  \]
  The second polynomial factor is \(-24x^2+16x^4\). Adding the two polynomial factors produces \(16x^4-48x^2+12\). The fourth derivative is
  \[
  (16x^4-48x^2+12)e^{-x^2}.
  \]

  The expression \((16x^2-48x^2+12)e^{-x^2}\) puts \(x^2\) in the leading term. At \(x=\frac{1}{2}\) that expression equals \(4e^{-1/4}\), because
  \[
  16\cdot\frac{1}{4}-48\cdot\frac{1}{4}+12=4.
  \]
  The fourth derivative at the same point equals \(e^{-1/4}\), because
  \[
  16\cdot\frac{1}{16}-48\cdot\frac{1}{4}+12=1.
  \]
  The two values differ, so \((16x^2-48x^2+12)e^{-x^2}\) is not the fourth derivative.

  ### Bounding the fourth derivative

  On \([0,1]\) the fourth derivative has absolute value at most \(12\), with equality at \(x=0\). Write \(u=x^2\) and \(q(u)=16u^2-48u+12\), so the fourth derivative is \(q(u)e^{-u}\). The derivative \(q'(u)=32u-48\) is negative on \([0,1]\), and \(q\) falls from \(q(0)=12\) to \(q(1)=-20\).

  - While \(q(u)\ge 0\), the factor \(e^{-u}\) is at most \(1\), so the fourth derivative lies between \(0\) and \(12\).
  - While \(q(u)<0\), the absolute value is \(r(u)=(-16u^2+48u-12)e^{-u}\).

  Then
  \[
  r'(u)=4(4u^2-20u+15)e^{-u},
  \]
  which vanishes in \((0,1)\) at \(u=\frac{5-\sqrt{10}}{2}\). The zero of \(q\) in \((0,1)\) is \(\frac{3-\sqrt{6}}{2}\).

  - From \(2.4^2=5.76<6\) it follows that \(\sqrt{6}>2.4\), so \(\frac{3-\sqrt{6}}{2}<0.3\).
  - From \(3.2^2=10.24>10\) it follows that \(\sqrt{10}<3.2\), so \(\frac{5-\sqrt{10}}{2}>0.9\).

  The critical point of \(r\) therefore lies where \(q\) is negative. To the left of that critical point, \(4u^2-20u+15\) is positive, and between the two roots it is negative, so \(r\) rises up to the critical point and then falls through \(u=1\). The critical value equals
  \[
  16(\sqrt{10}-2)e^{(\sqrt{10}-5)/2}.
  \]
  From \(\sqrt{10}<3.2\), that prefactor is less than \(19.2\) and the exponent is less than \(-0.9\), so the critical value is less than \(19.2e^{-0.9}\). The exponential series gives
  \[
  \begin{aligned}
  e^{0.9}&>1+0.9+\frac{0.9^2}{2}+\frac{0.9^3}{6}\\
  &=2.4265>2.4,
  \end{aligned}
  \]
  and therefore \(19.2e^{-0.9}<8\). At \(u=1\) the absolute value is \(\frac{20}{e}\). Since \(e>2.5\), \(\frac{20}{e}<8\). The absolute value on this piece is below \(12\), and on the earlier piece it is at most \(12\). The Simpson estimate for this integral may use \(M=12\).

  ### Subintervals for Simpson's rule

  Requiring the Simpson estimate to be under \(0.001\) gives
  \[
  \frac{1}{180}\cdot 12\cdot\frac{1}{n^4}<0.001,
  \]
  so \(n>(200/3)^{1/4}\approx 2.86\). The even integer \(n=4\) is enough. The estimate is
  \[
  \frac{12}{180\cdot 4^4}=\frac{1}{3840},
  \]
  which is less than \(0.0003\). The four-interval Simpson sum is approximately \(0.746855\). The two ends are
  \[
  \begin{aligned}
  0.746855-0.0003&=0.746555,\\
  0.746855+0.0003&=0.747155.
  \end{aligned}
  \]
  Both numbers round to \(0.75\).
:::

::: concept-question
id: l3-numerical-integration.q-915a2fba
question: |
  Simpson's rule is used with \(n\) subintervals. Which condition on \(n\) is required?
options:
  - text: |
      \(n\) is even.
    correct: true
  - text: |
      \(n\) is odd.
  - text: |
      \(n\) may be any positive integer.
  - text: |
      \(n\) must be at least \(3\), with no parity condition.
explanation: |
  Each parabola covers two subintervals, so \(n\) has to be even. The weights then run \(1,4,2,4,\ldots,4,1\).
:::

::: concept-question
id: l3-numerical-integration.q-d1ed6f6e
question: |
  Simpson's rule with two subintervals is applied to \(\int_0^1 x^3\,dx\). Which value does it return?
options:
  - text: |
      \(\dfrac{1}{4}\)
    correct: true
  - text: |
      \(\dfrac{5}{16}\)
  - text: |
      \(\dfrac{1}{3}\)
  - text: |
      \(\dfrac{1}{2}\)
explanation: |
  The width is \(\frac{1}{2}\), and the samples of \(x^3\) are \(0\), \(\frac{1}{8}\) and \(1\). Simpson's rule returns
  \[
  \frac{1}{6}\left(0+4\cdot\frac{1}{8}+1\right)=\frac{1}{4}.
  \]
  The integral equals \(\frac{1}{4}\) as well. The trapezoid rule on the same nodes returns \(\frac{5}{16}\).
:::

::: exercise
id: l3-numerical-integration.ex-8.6.2
number: "8.6.2"
tier: basic
topics: [numerical-integration]
statement: |
  Compute the trapezoid approximation and the Simpson approximation of \(\int_0^3 x^2\,dx\) with \(4\) subintervals. Also compute the error estimate for each rule, using a bound for \(|f''|\) and a bound for \(|f^{(4)}|\) on \([0,3]\).
solution: |
  The width is \(\Delta x=\frac{3}{4}\). The nodes are \(0,\frac{3}{4},\frac{3}{2},\frac{9}{4},3\). The samples of \(x^2\) are \(0,\frac{9}{16},\frac{9}{4},\frac{81}{16},9\).

  The trapezoid approximation is
  \[
  \begin{aligned}
  &\left(\frac{9}{16}+\frac{9}{4}+\frac{81}{16}+\frac{9}{2}\right)\cdot\frac{3}{4}\\
  &=\frac{297}{32}=9.28125.
  \end{aligned}
  \]
  Simpson's rule multiplies the weighted samples by \(\frac{1}{4}\):
  \[
  \frac{1}{4}\left(4\cdot\frac{9}{16}+2\cdot\frac{9}{4}+4\cdot\frac{81}{16}+9\right)=9.
  \]

  The second derivative is \(2\), so the bound \(M=2\) is exact. The trapezoid error estimate is
  \[
  \frac{3^3}{12\cdot 4^2}\cdot 2=\frac{9}{32}=0.28125.
  \]
  The fourth derivative is \(0\), so the Simpson error estimate is \(0\). The integral equals \(9\), and Simpson's rule returns that value. The appendix records the trapezoid approximation \(9.28125\), the Simpson approximation \(9\), and Simpson error estimate \(0\). The appendix gives the trapezoid error estimate as \(0.281125\). The verified value is \(\frac{9}{32}\).
provenance: handout-answer
steps:
  - The width is \(\frac{3}{4}\), and the samples of \(x^2\) are \(0,\frac{9}{16},\frac{9}{4},\frac{81}{16},9\).
  - The trapezoid approximation equals \(\frac{297}{32}\).
  - The Simpson approximation equals \(9\).
  - With \(M=2\) the trapezoid error estimate equals \(\frac{9}{32}\), and the Simpson estimate is \(0\).
verification:
  checks:
    - expr: "(9/16 + 9/4 + 81/16 + 9/2)*(3/4)"
      expected: "297/32"
    - expr: "((3/4)/3)*(4*(9/16) + 2*(9/4) + 4*(81/16) + 9)"
      expected: "9"
    - expr: "(3**3)/(12*4**2)*2"
      expected: "9/32"
    - expr: "(3**5)/(180*4**4)*0"
      expected: "0"
discrepancy: |
  The appendix gives the trapezoid error estimate as 0.281125. The verified value is \(\frac{9}{32}\).
:::

::: exercise
id: l3-numerical-integration.ex-8.6.3
number: "8.6.3"
tier: standard
topics: [numerical-integration]
statement: |
  Compute the trapezoid approximation and the Simpson approximation of \(\int_2^4 x^3\,dx\) with \(4\) subintervals. Also compute the error estimate for each rule, using a bound for \(|f''|\) and a bound for \(|f^{(4)}|\) on \([2,4]\).
solution: |
  The width is \(\Delta x=\frac{1}{2}\). The nodes are \(2,\frac{5}{2},3,\frac{7}{2},4\). The samples of \(x^3\) are \(8,\frac{125}{8},27,\frac{343}{8},64\).

  The trapezoid approximation is
  \[
  \begin{aligned}
  &\left(4+\frac{125}{8}+27\right.\\
  &\quad\left.+\frac{343}{8}+32\right)\cdot\frac{1}{2}=\frac{243}{4}=60.75.
  \end{aligned}
  \]
  Simpson's rule gives
  \[
  \begin{aligned}
  &\frac{1}{6}\left(8+4\cdot\frac{125}{8}+2\cdot 27\right.\\
  &\quad\left.+4\cdot\frac{343}{8}+64\right)=60.
  \end{aligned}
  \]

  The second derivative is \(6x\). On \([2,4]\) its absolute value is largest at \(x=4\), where it equals \(24\). The trapezoid error estimate is
  \[
  \frac{2^3}{12\cdot 4^2}\cdot 24=1.
  \]
  The fourth derivative is \(0\), so the Simpson error estimate is \(0\). The integral equals \(60\). The appendix records \(60.75\pm 1\) for the trapezoid rule and \(60\pm 0\) for Simpson's rule.
provenance: handout-answer
steps:
  - The width is \(\frac{1}{2}\), and the samples of \(x^3\) are \(8,\frac{125}{8},27,\frac{343}{8},64\).
  - The trapezoid approximation equals \(\frac{243}{4}\).
  - The Simpson approximation equals \(60\).
  - The second-derivative bound is \(24\), so the trapezoid error estimate is \(1\). The fourth derivative is \(0\), so the Simpson estimate is \(0\).
verification:
  checks:
    - expr: "(4 + 125/8 + 27 + 343/8 + 32)*(1/2)"
      expected: "243/4"
    - expr: "((1/2)/3)*(8 + 4*(125/8) + 2*27 + 4*(343/8) + 64)"
      expected: "60"
    - expr: "(2**3)/(12*4**2)*24"
      expected: "1"
    - expr: "(2**5)/(180*4**4)*0"
      expected: "0"
:::

::: exercise
id: l3-numerical-integration.ex-8.6.4
number: "8.6.4"
tier: standard
topics: [numerical-integration]
statement: |
  Compute the trapezoid approximation and the Simpson approximation of \(\int_1^3 \frac{1}{x}\,dx\) with \(4\) subintervals. Also compute the error estimate for each rule, using a bound for \(|f''|\) and a bound for \(|f^{(4)}|\) on \([1,3]\).
solution: |
  The width is \(\Delta x=\frac{1}{2}\). The nodes are \(1,\frac{3}{2},2,\frac{5}{2},3\). The samples of \(\frac{1}{x}\) are \(1,\frac{2}{3},\frac{1}{2},\frac{2}{5},\frac{1}{3}\).

  The trapezoid approximation is
  \[
  \left(\frac{1}{2}+\frac{2}{3}+\frac{1}{2}+\frac{2}{5}+\frac{1}{6}\right)\cdot\frac{1}{2}=\frac{67}{60}.
  \]
  Simpson's rule gives
  \[
  \frac{1}{6}\left(1+4\cdot\frac{2}{3}+2\cdot\frac{1}{2}+4\cdot\frac{2}{5}+\frac{1}{3}\right)=\frac{11}{10}.
  \]

  The second derivative is \(\frac{2}{x^3}\). On \([1,3]\) this is positive and decreasing, so its maximum is the value \(2\) at \(x=1\). The trapezoid error estimate is
  \[
  \frac{2^3}{12\cdot 4^2}\cdot 2=\frac{1}{12}.
  \]
  The fourth derivative is \(\frac{24}{x^5}\), also positive and decreasing on \([1,3]\), with maximum \(24\) at \(x=1\). The Simpson error estimate is
  \[
  \frac{2^5}{180\cdot 4^4}\cdot 24=\frac{1}{60}.
  \]
  The fraction \(\frac{67}{60}\) rounds to \(1.1167\), and \(\frac{1}{12}\) rounds to \(0.0833\). The fraction \(\frac{11}{10}\) is \(1.1000\), and \(\frac{1}{60}\) rounds to \(0.0167\). The appendix records \(1.1167\pm 0.0833\) and \(1.1000\pm 0.0167\).
provenance: handout-answer
steps:
  - The width is \(\frac{1}{2}\), and the samples are \(1,\frac{2}{3},\frac{1}{2},\frac{2}{5},\frac{1}{3}\).
  - The trapezoid approximation equals \(\frac{67}{60}\).
  - The Simpson approximation equals \(\frac{11}{10}\).
  - The second-derivative bound is \(2\), so the trapezoid error estimate is \(\frac{1}{12}\). The fourth-derivative bound is \(24\), so the Simpson estimate is \(\frac{1}{60}\).
verification:
  checks:
    - expr: "(1/2 + 2/3 + 1/2 + 2/5 + 1/6)*(1/2)"
      expected: "67/60"
    - expr: "((1/2)/3)*(1 + 4*(2/3) + 2*(1/2) + 4*(2/5) + 1/3)"
      expected: "11/10"
    - expr: "(2**3)/(12*4**2)*2"
      expected: "1/12"
    - expr: "(2**5)/(180*4**4)*24"
      expected: "1/60"
:::

::: exercise
id: l3-numerical-integration.ex-8.6.6
number: "8.6.6"
tier: exam
topics: [numerical-integration]
statement: |
  Compute the trapezoid approximation and the Simpson approximation of \(\int_0^1 x\sqrt{1+x}\,dx\) with \(4\) subintervals. Also compute the error estimate for each rule, using a bound for \(|f''|\) and a bound for \(|f^{(4)}|\) on \([0,1]\).
solution: |
  The width is \(\Delta x=\frac{1}{4}\). The nodes are \(0,\frac{1}{4},\frac{1}{2},\frac{3}{4},1\). The samples of \(x\sqrt{1+x}\) are
  \[
  0,\quad \frac{\sqrt{5}}{8},\quad \frac{\sqrt{6}}{4},\quad \frac{3\sqrt{7}}{8},\quad \sqrt{2}.
  \]

  The trapezoid approximation is
  \[
  \begin{aligned}
  &\left(\frac{\sqrt{5}}{8}+\frac{\sqrt{6}}{4}\right.\\
  &\quad\left.+\frac{3\sqrt{7}}{8}+\frac{\sqrt{2}}{2}\right)\cdot\frac{1}{4}\\
  &=\frac{\sqrt{5}}{32}+\frac{\sqrt{6}}{16}\\
  &\quad+\frac{3\sqrt{7}}{32}+\frac{\sqrt{2}}{8}.
  \end{aligned}
  \]
  Simpson's rule gives
  \[
  \begin{aligned}
  &\frac{1}{12}\left(4\cdot\frac{\sqrt{5}}{8}+2\cdot\frac{\sqrt{6}}{4}\right.\\
  &\quad\left.+4\cdot\frac{3\sqrt{7}}{8}+\sqrt{2}\right)\\
  &=\frac{\sqrt{5}}{24}+\frac{\sqrt{6}}{24}\\
  &\quad+\frac{\sqrt{7}}{8}+\frac{\sqrt{2}}{12}.
  \end{aligned}
  \]

  The second derivative is \(\frac{3x+4}{4(x+1)^{3/2}}\). Its derivative has numerator \(-3(x+1)(x+2)\) and a positive denominator on \([0,1]\), so the second derivative decreases on the interval. The maximum is the value \(1\) at \(x=0\). The trapezoid error estimate is
  \[
  \frac{1^3}{12\cdot 4^2}\cdot 1=\frac{1}{192}.
  \]
  The fourth derivative is \(\frac{3(3x+8)}{16(x+1)^{7/2}}\). Its derivative has numerator \(-15(3x+10)\) and a positive denominator on \([0,1]\), so the fourth derivative decreases as well. The maximum is the value \(\frac{3}{2}\) at \(x=0\). The Simpson error estimate is
  \[
  \frac{1^5}{180\cdot 4^4}\cdot\frac{3}{2}=\frac{1}{30720}.
  \]
  The trapezoid sum rounds to \(0.6478\), and \(\frac{1}{192}\) rounds to \(0.0052\). The Simpson sum rounds to \(0.6438\), and \(\frac{1}{30720}\) rounds to \(0.000033\). The appendix records \(0.6478\pm 0.0052\) and \(0.6438\pm 0.000033\).
provenance: handout-answer
steps:
  - The width is \(\frac{1}{4}\), and the samples are \(0,\frac{\sqrt{5}}{8},\frac{\sqrt{6}}{4},\frac{3\sqrt{7}}{8},\sqrt{2}\).
  - The trapezoid approximation equals \(\frac{\sqrt{5}}{32}+\frac{\sqrt{6}}{16}+\frac{3\sqrt{7}}{32}+\frac{\sqrt{2}}{8}\).
  - The Simpson approximation equals \(\frac{\sqrt{5}}{24}+\frac{\sqrt{6}}{24}+\frac{\sqrt{7}}{8}+\frac{\sqrt{2}}{12}\).
  - The second-derivative bound is \(1\), so the trapezoid error estimate is \(\frac{1}{192}\). The fourth-derivative bound is \(\frac{3}{2}\), so the Simpson estimate is \(\frac{1}{30720}\).
verification:
  checks:
    - expr: "(sqrt(5)/8 + sqrt(6)/4 + 3*sqrt(7)/8 + sqrt(2)/2)*(1/4)"
      expected: "sqrt(5)/32 + sqrt(6)/16 + 3*sqrt(7)/32 + sqrt(2)/8"
    - expr: "((1/4)/3)*(4*(sqrt(5)/8) + 2*(sqrt(6)/4) + 4*(3*sqrt(7)/8) + sqrt(2))"
      expected: "sqrt(5)/24 + sqrt(6)/24 + sqrt(7)/8 + sqrt(2)/12"
    - expr: "(1**3)/(12*4**2)*1"
      expected: "1/192"
    - expr: "(1**5)/(180*4**4)*(3/2)"
      expected: "1/30720"
:::

::: exercise
id: l3-numerical-integration.ex-8.6.7
number: "8.6.7"
tier: exam
topics: [numerical-integration]
statement: |
  Compute the trapezoid approximation and the Simpson approximation of \(\int_1^5 \frac{x}{1+x}\,dx\) with \(4\) subintervals. Also compute the error estimate for each rule, using a bound for \(|f''|\) and a bound for \(|f^{(4)}|\) on \([1,5]\).
solution: |
  The width is \(\Delta x=1\). The nodes are \(1,2,3,4,5\). The samples of \(\frac{x}{1+x}\) are \(\frac{1}{2},\frac{2}{3},\frac{3}{4},\frac{4}{5},\frac{5}{6}\).

  The trapezoid approximation is
  \[
  \frac{1}{4}+\frac{2}{3}+\frac{3}{4}+\frac{4}{5}+\frac{5}{12}=\frac{173}{60}.
  \]
  Simpson's rule gives
  \[
  \frac{1}{3}\left(\frac{1}{2}+4\cdot\frac{2}{3}+2\cdot\frac{3}{4}+4\cdot\frac{4}{5}+\frac{5}{6}\right)=\frac{29}{10}.
  \]

  Write \(\frac{x}{1+x}=1-\frac{1}{1+x}\). The second derivative is \(-\frac{2}{(1+x)^3}\), so its absolute value is \(\frac{2}{(1+x)^3}\). On \([1,5]\) this decreases, and the maximum is \(\frac{1}{4}\) at \(x=1\). The trapezoid error estimate is
  \[
  \frac{4^3}{12\cdot 4^2}\cdot\frac{1}{4}=\frac{1}{12}.
  \]
  The fourth derivative is \(-\frac{24}{(1+x)^5}\). Its absolute value decreases on \([1,5]\), and the maximum is \(\frac{3}{4}\) at \(x=1\). The Simpson error estimate is
  \[
  \frac{4^5}{180\cdot 4^4}\cdot\frac{3}{4}=\frac{1}{60}.
  \]
  The fraction \(\frac{173}{60}\) rounds to \(2.8833\), and \(\frac{29}{10}=2.9000\). The Simpson estimate \(\frac{1}{60}\) rounds to \(0.0167\). The appendix records \(2.8833\pm 0.0834\) and \(2.9000\pm 0.0167\). The appendix gives the trapezoid error estimate as \(0.0834\). The verified value is \(\frac{1}{12}\).
provenance: handout-answer
steps:
  - The width is \(1\), and the samples are \(\frac{1}{2},\frac{2}{3},\frac{3}{4},\frac{4}{5},\frac{5}{6}\).
  - The trapezoid approximation equals \(\frac{173}{60}\).
  - The Simpson approximation equals \(\frac{29}{10}\).
  - The second-derivative bound is \(\frac{1}{4}\), so the trapezoid error estimate is \(\frac{1}{12}\). The fourth-derivative bound is \(\frac{3}{4}\), so the Simpson estimate is \(\frac{1}{60}\).
verification:
  checks:
    - expr: "(1/4 + 2/3 + 3/4 + 4/5 + 5/12)*1"
      expected: "173/60"
    - expr: "(1/3)*(1/2 + 4*(2/3) + 2*(3/4) + 4*(4/5) + 5/6)"
      expected: "29/10"
    - expr: "(4**3)/(12*4**2)*(1/4)"
      expected: "1/12"
    - expr: "(4**5)/(180*4**4)*(3/4)"
      expected: "1/60"
discrepancy: |
  The appendix gives the trapezoid error estimate as 0.0834. The verified value is \(\frac{1}{12}\).
:::

::: sheet-item
id: l3-numerical-integration.sheet-trapezoid
category: formula
text: |
  The trapezoid rule with \(n\) subintervals of length \(\Delta x=\frac{b-a}{n}\) is
  \[
  \begin{aligned}
  &\left(\frac{f(x_0)}{2}+f(x_1)+\cdots\right.\\
  &\quad\left.+f(x_{n-1})+\frac{f(x_n)}{2}\right)\Delta x.
  \end{aligned}
  \]
:::

::: sheet-item
id: l3-numerical-integration.sheet-simpson
category: formula
text: |
  Simpson's rule needs an even number of subintervals. With \(\Delta x=\frac{b-a}{n}\), it is
  \[
  \begin{aligned}
  &\frac{\Delta x}{3}\bigl(f(x_0)+4f(x_1)\bigr.\\
  &\quad\bigl.+2f(x_2)+\cdots\bigr.\\
  &\quad\bigl.+4f(x_{n-1})+f(x_n)\bigr).
  \end{aligned}
  \]
:::

::: sheet-item
id: l3-numerical-integration.sheet-weights
category: trap
text: |
  In the trapezoid rule the endpoints have weight \(\frac{1}{2}\) and each interior sample has weight \(1\). On \(\int_0^2 x\,dx\) with two subintervals, weights \(1,1,1\) give \(3\). The trapezoid weights give \(2\), and the integral equals \(2\).
:::

::: sheet-item
id: l3-numerical-integration.sheet-even
category: trap
text: |
  Simpson's rule needs an even number of subintervals, so the weights can run \(1,4,2,4,\ldots,4,1\). With three subintervals on \(\int_0^3 x^2\,dx\), the pattern \(1,4,2,1\) returns \(7\). The integral equals \(9\).
:::

::: sheet-item
id: l3-numerical-integration.sheet-trapezoid-error
category: formula
text: |
  If \(|f''(x)|\le M\) on \([a,b]\), the trapezoid error estimate with \(n\) subintervals is \(\frac{(b-a)^3}{12n^2}M\).
:::

::: sheet-item
id: l3-numerical-integration.sheet-simpson-error
category: formula
text: |
  If \(|f^{(4)}(x)|\le M\) on \([a,b]\) and \(n\) is even, the Simpson error estimate is \(\frac{(b-a)^5}{180n^4}M\).
:::

::: exercise
id: l3-numerical-integration.ex-simpson-bound-gaussian
tier: exam
topics: [numerical-integration]
statement: |
  Let \(f(x)=e^{-x^2}\).

  - (a) Compute \(f^{(4)}(x)\).
  - (b) Show that \(|f^{(4)}(x)|\le 20\) for every \(x\) in \([0,1]\).
  - (c) Using the bound from (b), find the smallest even number \(n\) of subintervals for which the Simpson error estimate for \(\int_0^1 e^{-x^2}\,dx\) is below \(10^{-3}\). State the estimate for that \(n\).
solution: |
  (a) Differentiate repeatedly, keeping the factor \(e^{-x^2}\):
  \[
  \begin{aligned}
  f'(x)&=-2x\,e^{-x^2},\\
  f''(x)&=(4x^2-2)e^{-x^2},\\
  f'''(x)&=(12x-8x^3)e^{-x^2}.
  \end{aligned}
  \]
  The product rule on \(f'''\) gives
  \[
  \begin{aligned}
  f^{(4)}(x)&=(12-24x^2)e^{-x^2}\\
  &\quad+(12x-8x^3)(-2x)e^{-x^2}\\
  &=(16x^4-48x^2+12)\,e^{-x^2}.
  \end{aligned}
  \]

  (b) Put \(u=x^2\), so \(u\) runs over \([0,1]\) when \(x\) does. Then \(f^{(4)}(x)=q(u)e^{-u}\) with \(q(u)=16u^2-48u+12\). The derivative \(q'(u)=32u-48\) is negative on \([0,1]\), so \(q\) decreases from \(q(0)=12\) to \(q(1)=16-48+12=-20\). Hence \(|q(u)|\le 20\) on \([0,1]\). Also \(0<e^{-u}\le 1\). Therefore \(|f^{(4)}(x)|\le 20\).

  (c) With \(|f^{(4)}|\le M=20\), \(b-a=1\) and \(n\) subintervals, the Simpson error estimate is
  \[
  \frac{(b-a)^5}{180\,n^4}M=\frac{20}{180\,n^4}=\frac{1}{9n^4}.
  \]

  - For \(n=2\) it equals \(\frac{1}{144}\approx 0.0069\), which is too large.
  - For \(n=4\) it equals \(\frac{1}{9\cdot 256}=\frac{1}{2304}\approx 0.00043\), which is below \(10^{-3}\).

  The smallest even \(n\) is \(4\), with estimate \(\frac{1}{2304}\).
provenance: written-for-site
steps:
  - Differentiate four times to get \((16x^4-48x^2+12)e^{-x^2}\).
  - With \(u=x^2\), the quadratic \(q(u)=16u^2-48u+12\) decreases from \(12\) to \(-20\), so the bound is \(20\).
  - The estimate is \(\frac{1}{9n^4}\); \(n=2\) is too large and \(n=4\) gives \(\frac{1}{2304}\).
verification:
  checks:
    - expr: diff(exp(-x**2), x, 4)
      expected: "(16*x**4 - 48*x**2 + 12)*exp(-x**2)"
    - expr: (16*u**2 - 48*u + 12).subs(u, 0)
      expected: "12"
    - expr: (16*u**2 - 48*u + 12).subs(u, 1)
      expected: "-20"
    - expr: 20/(180*2**4)
      expected: "1/144"
    - expr: 20/(180*4**4)
      expected: "1/2304"
:::

::: exercise
id: l3-numerical-integration.ex-simpson-exactness-quartic
tier: standard
topics: [numerical-integration]
statement: |
  Use Simpson's rule with two subintervals.

  - (a) Approximate \(\int_0^2(x^3-x^2+1)\,dx\) and compare with the exact value.
  - (b) Approximate \(\int_0^1x^4\,dx\) and find the error.
  - (c) Compare the error in (b) with the Simpson error estimate \(\frac{(b-a)^5}{180n^4}M\), where \(M\) bounds \(|f^{(4)}|\) on \([0,1]\).
solution: |
  (a) The width is \(\Delta x=1\) and the nodes are \(0\), \(1\), \(2\). The samples of \(f(x)=x^3-x^2+1\) are \(f(0)=1\), \(f(1)=1\), \(f(2)=5\). Simpson's rule gives
  \[
  \frac{1}{3}\bigl(1+4\cdot 1+5\bigr)=\frac{10}{3}.
  \]
  The exact value is
  \[
  \left[\frac{x^4}{4}-\frac{x^3}{3}+x\right]_0^2=4-\frac{8}{3}+2=\frac{10}{3}.
  \]
  The two values agree, as expected for a cubic: the fourth derivative of a cubic is \(0\).

  (b) The width is \(\frac{1}{2}\) and the nodes are \(0\), \(\frac{1}{2}\), \(1\). The samples of \(x^4\) are \(0\), \(\frac{1}{16}\), \(1\). Simpson's rule gives
  \[
  \frac{1}{6}\left(0+4\cdot\frac{1}{16}+1\right)=\frac{1}{6}\cdot\frac{5}{4}=\frac{5}{24}.
  \]
  The exact value is \(\frac{1}{5}\). The error is
  \[
  \frac{5}{24}-\frac{1}{5}=\frac{25-24}{120}=\frac{1}{120}.
  \]

  (c) The fourth derivative of \(x^4\) is the constant \(24\), so \(M=24\). With \(b-a=1\) and \(n=2\), the estimate is
  \[
  \frac{1}{180\cdot 2^4}\cdot 24=\frac{24}{2880}=\frac{1}{120}.
  \]
  The estimate equals the actual error, so for \(x^4\) the bound cannot be improved.
provenance: written-for-site
steps:
  - (a) Simpson gives \(\frac{10}{3}\), equal to the exact value.
  - (b) Simpson gives \(\frac{5}{24}\) against the exact \(\frac{1}{5}\), an error of \(\frac{1}{120}\).
  - (c) The estimate with \(M=24\) is also \(\frac{1}{120}\).
verification:
  checks:
    - expr: (1/3)*(1 + 4*1 + 5)
      expected: "10/3"
    - expr: integrate(x**3 - x**2 + 1, (x, 0, 2))
      expected: "10/3"
    - expr: (1/6)*(0 + 4*Rational(1, 16) + 1) - integrate(x**4, (x, 0, 1))
      expected: "1/120"
    - expr: 24/(180*2**4)
      expected: "1/120"
:::

::: exercise
id: l3-numerical-integration.ex-subintervals-for-tolerance
tier: exam
topics: [numerical-integration]
statement: |
  The number \(\ln 3=\int_1^3\frac{dx}{x}\) is approximated numerically. Use the error estimates \(\frac{(b-a)^3}{12n^2}M_2\) for the trapezoid rule, where \(|f''|\le M_2\), and \(\frac{(b-a)^5}{180n^4}M_4\) for Simpson's rule, where \(|f^{(4)}|\le M_4\).

  - (a) Find bounds \(M_2\) and \(M_4\) on \([1,3]\).
  - (b) Find the smallest number \(n\) of subintervals for which the trapezoid estimate is below \(10^{-4}\).
  - (c) Find the smallest even \(n\) for which the Simpson estimate is below \(10^{-4}\).
solution: |
  (a) For \(f(x)=\frac{1}{x}\), \(f''(x)=\frac{2}{x^3}\) and \(f^{(4)}(x)=\frac{24}{x^5}\). Both are positive and decreasing on \([1,3]\), so the maxima are at \(x=1\): \(M_2=2\) and \(M_4=24\).

  (b) With \(b-a=2\), the trapezoid estimate is
  \[
  \frac{2^3}{12n^2}\cdot 2=\frac{4}{3n^2}.
  \]
  The requirement gives
  \[
  \begin{aligned}
  \frac{4}{3n^2}&<10^{-4},\\
  n^2&>\frac{40000}{3}\approx 13333.3,\\
  n&>115.47.
  \end{aligned}
  \]
  The smallest integer is \(n=116\). Check:

  - \(n=115\) gives \(\frac{4}{3\cdot 13225}\approx 1.008\cdot 10^{-4}\), which is too large.
  - \(n=116\) gives \(\frac{4}{3\cdot 13456}\approx 9.9\cdot 10^{-5}\).

  (c) The Simpson estimate is
  \[
  \frac{2^5}{180n^4}\cdot 24=\frac{768}{180n^4}=\frac{64}{15n^4}.
  \]
  The requirement gives
  \[
  \begin{aligned}
  \frac{64}{15n^4}&<10^{-4},\\
  n^4&>\frac{128000}{3}\approx 42666.7,\\
  n&>14.37.
  \end{aligned}
  \]
  The smallest integer past this is \(15\), which is odd. Simpson's rule needs an even \(n\), so \(n=16\). Check:

  - \(n=14\) gives about \(1.1\cdot 10^{-4}\), which is too large.
  - \(n=16\) gives about \(6.5\cdot 10^{-5}\).

  Simpson's rule reaches the tolerance with \(16\) subintervals where the trapezoid rule needs \(116\).
provenance: written-for-site
steps:
  - \(M_2=2\) and \(M_4=24\), both attained at \(x=1\).
  - Trapezoid estimate \(\frac{4}{3n^2}<10^{-4}\) gives \(n=116\).
  - Simpson estimate \(\frac{64}{15n^4}<10^{-4}\) gives \(n>14.37\); the smallest even \(n\) is \(16\).
verification:
  checks:
    - expr: diff(1/x, x, 2).subs(x, 1)
      expected: "2"
    - expr: diff(1/x, x, 4).subs(x, 1)
      expected: "24"
    - expr: floor(sqrt(Rational(40000, 3))) + 1
      expected: "116"
    - expr: floor(sqrt(sqrt(Rational(128000, 3)))) + 1
      expected: "15"
    - expr: Rational(64, 15*16**4)
      expected: "1/15360"
    - expr: Rational(64, 15*14**4)
      expected: "4/36015"
:::
