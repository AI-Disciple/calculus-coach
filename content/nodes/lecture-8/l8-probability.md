---
id: l8-probability
lecture: 8
order: 6
title: Probability with multiple integrals
prerequisites: [l7-general-regions, l3-probability-densities]
sources:
  - { source: handout, section: "9.8", page: 223 }
  - { source: final-2022, page: 9 }
  - { source: final-2022, page: 11 }
examWeight: low
examWeightNote: Only on the 2021 and 2022 finals. Placement in this lecture is provisional until the lecture has taken place. Wording taken from the handout and from the 2022 paper stays provisional until the lecture 8 notes arrive.
optional: true
status: draft
notation: |
  \(f_x\), \(\frac{df}{dx}\) and \(\frac{\partial f}{\partial x}\) all name the partial derivative of \(f\) with respect to \(x\). The symbol \(f_X\) is the density of the random variable \(X\), and \(f_{X,Y}\) is the joint density of the pair.
---

::: formal-statement
kind: method
title: An independent exponential pair
source: { source: final-2022, page: 9 }
text: |
  Let \(X\) and \(Y\) be two independent random variables of density \(f_X(x)=ae^{-ax}\) and \(f_Y(y)=be^{-by}\), defined for \(x\ge 0\) and \(y\ge 0\), where \(a>0\) and \(b>0\) are given parameters.
:::

::: plain-explanation
text: |
  Each of \(f_X\) and \(f_Y\) is nonnegative on the half-line \([0,\infty)\). The integral of each density over that half-line equals 1.

  Independence means the **joint density** on the first quadrant is the product \(f_{X,Y}(x,y)=ab\,e^{-ax-by}\). The probability of an event in that quadrant is the integral of this product over the event. The expectation of a function \(g(X,Y)\) is
  \[
  \int_0^{\infty}\int_0^{\infty} g(x,y)\,f_{X,Y}(x,y)\,dx\,dy.
  \]
:::

::: visual
kind: region
caption: |
  This is a model case with \(a=b=1\). The shaded triangle is the event \(X+Y\le t\) in the first quadrant, where \(t\) is the intercept. Move the intercept slider and switch the region order to see the limits of the iterated integral of the joint density over this triangle. The area in the readout is the area of the triangle and differs from the probability.
params:
  preset: triangle
  order: dy-dx
  intercept: 1
:::

::: worked-example
title: A density on the unit square
problem: |
  Let \(f(x,y)=4xy\) for \(0\le x\le 1\) and \(0\le y\le 1\), and let \(f(x,y)=0\) elsewhere. Show that \(f\) is a joint density, and compute \(P\left(X\le \frac{1}{2}\ \text{and}\ Y\le \frac{1}{2}\right)\).
solution: |
  The function \(f\) is nonnegative. Its integral over the unit square is
  \[
  \begin{aligned}
  \int_0^1\int_0^1 4xy\,dy\,dx&=\int_0^1 2x\,dx,\\
  &=1.
  \end{aligned}
  \]
  So \(f\) is a joint density.

  The event is the square \(0\le x\le \frac{1}{2}\), \(0\le y\le \frac{1}{2}\). An antiderivative in \(y\) is \(2xy^2\), so the inner integral is
  \[
  \int_0^{1/2} 4xy\,dy=\frac{x}{2}.
  \]
  The outer integral is
  \[
  \begin{aligned}
  \int_0^{1/2}\frac{x}{2}\,dx&=\frac{1}{4}\left(\frac{1}{2}\right)^2,\\
  &=\frac{1}{16}.
  \end{aligned}
  \]
  The probability equals \(\frac{1}{16}\).
:::

::: guided-example
title: Setting up \(P(aX+bY<t)\)
problem: |
  Let \(X\) and \(Y\) be the independent exponential random variables above, and let \(t>0\). Set up \(P(aX+bY<t)\) with the substitution \(u=ax+by\) and \(v=y\). Read off the density of \(Z=aX+bY\).
steps:
  - |
    The event is the set of \((x,y)\) with \(x\ge 0\), \(y\ge 0\) and \(ax+by<t\). That set is the triangle with vertices \((0,0)\), \(\left(\frac{t}{a},0\right)\) and \(\left(0,\frac{t}{b}\right)\).
  - |
    Independence gives the joint density \(ab\,e^{-ax-by}\) on the first quadrant. The probability is the integral of this density over the triangle.
  - |
    The substitution \(u=ax+by\), \(v=y\) has inverse \(x=\frac{1}{a}(u-bv)\) and \(y=v\). The Jacobian matrix of \((x,y)\) with respect to \((u,v)\) is
    \[
    \begin{pmatrix} 1/a & -b/a \\ 0 & 1 \end{pmatrix}.
    \]
    Its determinant equals \(\frac{1}{a}\). Since \(a>0\), the absolute value is \(\frac{1}{a}\).
  - |
    The conditions become

    - \(0<u<t\),
    - \(v\ge 0\),
    - \(u-bv\ge 0\).

    For each such \(u\), the variable \(v\) runs from \(0\) to \(\frac{u}{b}\). The integrand is \(ab\,e^{-u}\cdot\frac{1}{a}=b\,e^{-u}\).
  - |
    The inner integral equals \(\int_0^{u/b} b\,e^{-u}\,dv=u e^{-u}\). Therefore
    \[
    \begin{aligned}
    P(Z<t)&=\int_0^t u e^{-u}\,du,\\
    &=1-e^{-t}-te^{-t}.
    \end{aligned}
    \]
    Differentiating in the upper limit \(t\) gives the density \(f_Z(z)=ze^{-z}\) for \(z\ge 0\). The probability equals \(1-e^{-t}-te^{-t}\).
:::

::: concept-question
id: l8-probability.q-4e2716e1
question: |
  Let \(c>0\). Let \(f(x,y)=c\) on the rectangle \(0\le x\le 1\), \(0\le y\le 2\), and let \(f(x,y)=0\) outside that rectangle. Which value of \(c\) makes \(f\) a joint density?
options:
  - text: |
      \(c\) equals \(\frac{1}{2}\).
    correct: true
  - text: |
      \(c\) equals \(1\).
  - text: |
      \(c\) equals \(2\).
  - text: |
      \(c\) equals \(\frac{1}{4}\).
explanation: |
  The constant \(c\) is positive, so \(f\) is nonnegative. The rectangle has area \(2\). The integral of \(f\) over it equals \(2c\). That integral equals \(1\) when \(c=\frac{1}{2}\).
:::

::: concept-question
id: l8-probability.q-cbeacbd6
question: |
  Suppose \(X\) and \(Y\) are independent, with densities \(f_X\) and \(f_Y\). Which function is their joint density?
options:
  - text: |
      The product \(f_X(x)f_Y(y)\).
    correct: true
  - text: |
      The sum \(f_X(x)+f_Y(y)\).
  - text: |
      The quotient \(f_X(x)/f_Y(y)\).
  - text: |
      The maximum of \(f_X(x)\) and \(f_Y(y)\).
explanation: |
  Independence means the joint density equals the product of the two densities.
:::

::: concept-question
id: l8-probability.q-69aee8e6
question: |
  Let \(a>0\), \(b>0\) and \(t>0\). Inside the first quadrant \(x\ge 0\), \(y\ge 0\), which set is the event \(aX+bY<t\)?
options:
  - text: |
      The triangle with vertices \((0,0)\), \(\left(\frac{t}{a},0\right)\) and \(\left(0,\frac{t}{b}\right)\).
    correct: true
  - text: |
      The set where \(ax+by>t\).
  - text: |
      The rectangle \(0\le x\le t\) and \(0\le y\le t\).
  - text: |
      The half-plane \(ax+by<t\), including points with a negative coordinate.
explanation: |
  The inequalities \(x\ge 0\), \(y\ge 0\) and \(ax+by<t\) describe the triangle cut from the first quadrant by the line \(ax+by=t\). That triangle contains the origin.
:::

::: trap
text: |
  The event \(aX+bY<t\) is the side of the line \(ax+by=t\) that contains the origin. The integral of the joint density over \(x\ge 0\), \(y\ge 0\) and \(ax+by>t\) equals \(P(aX+bY>t)\).

  For \(a=b=1\) and \(t=1\), the joint density is \(e^{-x-y}\). The integral over \(x+y>1\) in the first quadrant equals \(2e^{-1}\). The probability \(P(X+Y<1)\) equals \(1-2e^{-1}\).
:::

::: key-points
text: |
  - A function \(f(x,y)\) is a joint density when it is nonnegative and its integral over the plane equals \(1\). The probability that \((X,Y)\) lies in a region \(D\) is the integral of \(f\) over \(D\).
  - If \(X\) and \(Y\) are independent, the joint density is the product \(f_X(x)f_Y(y)\). For the exponential pair it is \(f_{X,Y}(x,y)=ab\,e^{-ax-by}\) on the first quadrant, and \(E(g(X,Y))=\int_0^{\infty}\int_0^{\infty} g(x,y)\,f_{X,Y}(x,y)\,dx\,dy\).
  - For \(a,b,t>0\), the event \(aX+bY<t\) in the first quadrant is the triangle with vertices \((0,0)\), \(\left(\frac{t}{a},0\right)\) and \(\left(0,\frac{t}{b}\right)\), on the side of the line \(ax+by=t\) that contains the origin. For the exponential pair, \(P(aX+bY<t)=1-e^{-t}-te^{-t}\), so \(Z=aX+bY\) has density \(ze^{-z}\) for \(z\ge 0\).
  - The usual slip integrates the joint density over the side \(ax+by>t\) and calls the result \(P(aX+bY<t)\). That integral equals \(P(aX+bY>t)\). For \(a=b=1\) and \(t=1\) it equals \(2e^{-1}\), while \(P(X+Y<1)\) equals \(1-2e^{-1}\).
:::

::: exercise
id: l8-probability.rectangle-corner
tier: basic
topics: [probability]
statement: |
  Let \(f(x,y)=\frac{1}{2}\) for \(0\le x\le 2\) and \(0\le y\le 1\), and let \(f(x,y)=0\) elsewhere. Show that \(f\) is a joint density, and compute \(P\left(X>1\ \text{and}\ Y<\frac{1}{2}\right)\).
solution: |
  The function \(f\) is nonnegative. Its integral over the rectangle is
  \[
  \begin{aligned}
  \int_0^2\int_0^1 \frac{1}{2}\,dy\,dx&=\int_0^2 \frac{1}{2}\,dx,\\
  &=1.
  \end{aligned}
  \]
  So \(f\) is a joint density.

  The event is the rectangle \(1\le x\le 2\), \(0\le y\le \frac{1}{2}\). Its probability is
  \[
  \begin{aligned}
  \int_1^2\int_0^{1/2}\frac{1}{2}\,dy\,dx&=\int_1^2 \frac{1}{4}\,dx,\\
  &=\frac{1}{4}.
  \end{aligned}
  \]
  The probability equals \(\frac{1}{4}\).
provenance: written-for-site
steps:
  - The integral of \(f\) over \(0\le x\le 2\), \(0\le y\le 1\) equals 1.
  - The event is the rectangle \(1\le x\le 2\), \(0\le y\le 1/2\).
  - The probability equals \(1/4\).
verification:
  checks:
    - expr: "integrate(Rational(1, 2), (y, 0, 1), (x, 0, 2))"
      expected: "1"
    - expr: "integrate(Rational(1, 2), (y, 0, Rational(1, 2)), (x, 1, 2))"
      expected: "1/4"
:::

::: exercise
id: l8-probability.unit-square-sum
tier: standard
topics: [probability]
statement: |
  Let \(f(x,y)=1\) on the unit square \(0\le x\le 1\), \(0\le y\le 1\), and let \(f(x,y)=0\) elsewhere. Compute \(P(X+Y\le 1)\).
solution: |
  The integral of \(f\) over the unit square equals 1, so \(f\) is a joint density. The event \(X+Y\le 1\) inside the square is \(0\le x\le 1\) and \(0\le y\le 1-x\). The probability is
  \[
  \begin{aligned}
  \int_0^1\int_0^{1-x} 1\,dy\,dx&=\int_0^1(1-x)\,dx,\\
  &=\frac{1}{2}.
  \end{aligned}
  \]
  The probability equals \(\frac{1}{2}\).
provenance: written-for-site
steps:
  - The integral of \(f\) over the unit square equals 1.
  - The event is \(0\le x\le 1\), \(0\le y\le 1-x\).
  - The probability equals \(1/2\).
verification:
  checks:
    - expr: "integrate(1, (y, 0, 1), (x, 0, 1))"
      expected: "1"
    - expr: "integrate(1, (y, 0, 1-x), (x, 0, 1))"
      expected: "1/2"
:::

::: exercise
id: l8-probability.final-2022-q7a
tier: exam
topics: [probability]
pastExam:
  year: 2022
  paper: Final
  question: "7a"
  points: 1
statement: |
  Let \(X\) and \(Y\) be two independent random variables of density \(f_X(x)=ae^{-ax}\) and \(f_Y(y)=be^{-by}\), defined for \(x\ge 0\) and \(y\ge 0\), where \(a>0\) and \(b>0\) are given parameters. Compute the probability that \(X>a\) and \(Y>b\), that is \(P(X>a\ \text{and}\ Y>b)\).
solution: |
  Independence splits the probability into a product, \(P(X>a)P(Y>b)\). The threshold in \(X>a\) is the parameter \(a\). For \(R>a\),
  \[
  \int_a^R a e^{-ax}\,dx=e^{-a^2}-e^{-aR}.
  \]
  As \(R\to\infty\), the term \(e^{-aR}\) tends to 0, because \(a>0\). So \(P(X>a)=e^{-a^2}\). The same calculation for \(Y\) gives \(P(Y>b)=e^{-b^2}\).

  The product equals \(e^{-(a^2+b^2)}\). As a double integral, the same value is
  \[
  \int_a^{\infty}\int_b^{\infty} ab\,e^{-ax-by}\,dy\,dx.
  \]
  The probability equals \(e^{-(a^2+b^2)}\).
provenance: official-key
steps:
  - \(P(X>a)=e^{-a^2}\), because the threshold is the rate parameter \(a\).
  - \(P(Y>b)=e^{-b^2}\).
  - The probability equals \(e^{-(a^2+b^2)}\).
verification:
  checks:
    - expr: "integrate(a*exp(-a*x), (x, a, oo)).subs(a, 2)"
      expected: "exp(-4)"
    - expr: "integrate(b*exp(-b*y), (y, b, oo)).subs(b, 3)"
      expected: "exp(-9)"
    - expr: "integrate(a*b*exp(-a*x-b*y), (y, b, oo), (x, a, oo)).subs({a: 2, b: 3})"
      expected: "exp(-13)"
:::

::: exercise
id: l8-probability.final-2022-q7b
tier: exam
topics: [probability]
pastExam:
  year: 2022
  paper: Final
  question: "7b"
  points: 2
statement: |
  Let \(X\) and \(Y\) be two independent random variables of density \(f_X(x)=ae^{-ax}\) and \(f_Y(y)=be^{-by}\), defined for \(x\ge 0\) and \(y\ge 0\), where \(a>0\) and \(b>0\) are given parameters. Let \(t>0\). Compute the probability that \(aX+bY<t\), using the substitution \(u=ax+by\) and \(v=y\). Deduce the density of \(aX+bY\).
solution: |
  Write \(Z=aX+bY\). The event \(Z<t\) is \(x\ge 0\), \(y\ge 0\) and \(ax+by<t\). The joint density is \(ab\,e^{-ax-by}\).

  The substitution \(u=ax+by\), \(v=y\) has inverse \(x=\frac{1}{a}(u-bv)\) and \(y=v\). The Jacobian determinant equals \(\frac{1}{a}\), which is positive. In the new coordinates, \(0<u<t\) and \(0\le v\le \frac{u}{b}\), and the integrand is \(b\,e^{-u}\). The inner integral is
  \[
  \int_0^{u/b} b\,e^{-u}\,dv=u e^{-u}.
  \]
  An antiderivative of \(u e^{-u}\) is \(-e^{-u}(u+1)\), so
  \[
  \begin{aligned}
  P(Z<t)&=\int_0^t u e^{-u}\,du\\
  &=\bigl[-e^{-u}(u+1)\bigr]_0^t\\
  &=1-e^{-t}-te^{-t}.
  \end{aligned}
  \]
  Differentiating in \(t\) gives the density \(f_Z(z)=ze^{-z}\) for \(z\ge 0\).

  The probability equals \(1-e^{-t}-te^{-t}\), and the density of \(aX+bY\) equals \(ze^{-z}\) for \(z\ge 0\).
provenance: official-key
steps:
  - The region is \(x\ge 0\), \(y\ge 0\), \(ax+by<t\), with joint density \(ab\,e^{-ax-by}\).
  - The substitution \(u=ax+by\), \(v=y\) has Jacobian absolute value \(1/a\).
  - The integral reduces to \(\int_0^t u e^{-u}\,du\).
  - The probability equals \(1-e^{-t}-te^{-t}\), and the density is \(ze^{-z}\) for \(z\ge 0\).
verification:
  checks:
    - expr: "Matrix([[1/a, -b/a], [0, 1]]).det()"
      expected: "1/a"
    - expr: "integrate(b*exp(-u), (v, 0, u/b))"
      expected: "u*exp(-u)"
    - expr: "integrate(u*exp(-u), (u, 0, t))"
      expected: "1 - exp(-t) - t*exp(-t)"
    - expr: "diff(1 - exp(-t) - t*exp(-t), t)"
      expected: "t*exp(-t)"
    - expr: "integrate(a*b*exp(-a*x-b*y), (y, 0, (t-a*x)/b), (x, 0, t/a)).subs({a: 2, b: 3, t: 5})"
      expected: "1 - exp(-5) - 5*exp(-5)"
:::

::: exercise
id: l8-probability.final-2022-q7c
tier: exam
topics: [probability]
pastExam:
  year: 2022
  paper: Final
  question: "7c"
  points: 2
statement: |
  Let \(X\) and \(Y\) be two independent random variables of density \(f_X(x)=ae^{-ax}\) and \(f_Y(y)=be^{-by}\), defined for \(x\ge 0\) and \(y\ge 0\), where \(a>0\) and \(b>0\) are given parameters. The expectation of \(g(X,Y)\) is
  \[
  \int_0^{\infty}\int_0^{\infty} g(x,y)\,f_{X,Y}(x,y)\,dx\,dy.
  \]
  Assume \(b>a\). Compute the expectation of \(\sqrt{X+Y}\), using the substitution \(u=ax+by\) and \(v=\sqrt{x+y}\). Recall the integral expression of the variance for a standard normal random variable.
solution: |
  Independence gives \(f_{X,Y}(x,y)=ab\,e^{-ax-by}\) for \(x\ge 0\) and \(y\ge 0\). The expectation is
  \[
  \begin{aligned}
  E\bigl(\sqrt{X+Y}\bigr)\\
  &=\int_0^{\infty}\\
  &\qquad\int_0^{\infty}\\
  &\qquad\sqrt{x+y}\,ab\\
  &\qquad\quad e^{-(ax+by)}\,dx\,dy.
  \end{aligned}
  \]

  ### Substitution

  Set \(u=ax+by\) and \(v=\sqrt{x+y}\). Then \(v^2=x+y\), and
  \[
  x=\frac{bv^2-u}{b-a},\qquad y=\frac{u-av^2}{b-a}.
  \]
  The Jacobian determinant of \((u,v)\mapsto(x,y)\) equals \(-\frac{2v}{b-a}\). Here \(b>a\) and \(v\ge 0\), so the absolute value is \(\frac{2v}{b-a}\).

  The conditions \(x\ge 0\) and \(y\ge 0\) become \(v\ge 0\) and \(av^2\le u\le bv^2\). The integrand is
  \[
  v\cdot ab\,e^{-u}\cdot\frac{2v}{b-a}=\frac{2ab}{b-a}v^2 e^{-u}.
  \]
  The inner integral \(\int_{av^2}^{bv^2} e^{-u}\,du\) equals \(e^{-av^2}-e^{-bv^2}\), so
  \[
  E=\frac{2ab}{b-a}\int_0^{\infty} v^2\bigl(e^{-av^2}-e^{-bv^2}\bigr)\,dv.
  \]

  ### Standard normal integral

  A standard normal random variable has density \(\frac{1}{\sqrt{2\pi}}e^{-z^2/2}\) and variance 1. Multiplying the variance integral by \(\sqrt{2\pi}\) gives
  \[
  \int_{-\infty}^{\infty} z^2 e^{-z^2/2}\,dz=\sqrt{2\pi}.
  \]
  The integrand is even, so the integral from \(0\) to \(\infty\) equals \(\sqrt{\pi/2}\). For \(c>0\), the substitution \(z=v\sqrt{2c}\) has \(dz=\sqrt{2c}\,dv\) and \(z^2=2cv^2\). It turns the half-range identity into
  \[
  2c\sqrt{2c}\int_0^{\infty} v^2 e^{-c v^2}\,dv=\sqrt{\frac{\pi}{2}}.
  \]
  The coefficient is \(2\sqrt{2}\,c^{3/2}\), and dividing by it gives
  \[
  \int_0^{\infty} v^2 e^{-c v^2}\,dv=\frac{\sqrt{\pi}}{4c^{3/2}}.
  \]
  Apply this with \(c=a\) and with \(c=b\):
  \[
  \begin{aligned}
  E&=\frac{2ab}{b-a}\cdot\frac{\sqrt{\pi}}{4}\bigl(a^{-3/2}-b^{-3/2}\bigr),\\
  &=\frac{ab\sqrt{\pi}}{2(b-a)}\bigl(a^{-3/2}-b^{-3/2}\bigr).
  \end{aligned}
  \]
  For \(a>0\), \(\frac{1}{a}\sqrt{\pi/a}=\sqrt{\pi}\,a^{-3/2}\). The same identity holds for \(b\). The expectation equals
  \[
  \frac{ab}{2(b-a)}\left(\frac{1}{a}\sqrt{\frac{\pi}{a}}-\frac{1}{b}\sqrt{\frac{\pi}{b}}\right).
  \]
provenance: official-key
steps:
  - The integrand is \(\sqrt{x+y}\) times the joint density \(ab\,e^{-ax-by}\).
  - The substitution \(u=ax+by\), \(v=\sqrt{x+y}\) has absolute Jacobian \(\frac{2v}{b-a}\).
  - The region is \(v\ge 0\) and \(av^2\le u\le bv^2\).
  - The integral reduces to \(\frac{2ab}{b-a}\int_0^{\infty} v^2(e^{-av^2}-e^{-bv^2})\,dv\).
  - The expectation equals \(\frac{ab}{2(b-a)}\left(\frac{1}{a}\sqrt{\pi/a}-\frac{1}{b}\sqrt{\pi/b}\right)\).
verification:
  checks:
    - expr: "Matrix([[diff((b*v**2 - u)/(b - a), u), diff((b*v**2 - u)/(b - a), v)], [diff((u - a*v**2)/(b - a), u), diff((u - a*v**2)/(b - a), v)]]).det()"
      expected: "-2*v/(b - a)"
    - expr: "integrate(v**2*exp(-c*v**2), (v, 0, oo)).args[0][0]"
      expected: "sqrt(pi)/(4*c**(Rational(3, 2)))"
    - expr: "(2*a*b/(b-a))*integrate(v**2*(exp(-a*v**2)-exp(-b*v**2)), (v, 0, oo)).args[0][0]"
      expected: "a*b*sqrt(pi)*(a**(-Rational(3, 2)) - b**(-Rational(3, 2)))/(2*(b-a))"
    - expr: "((a*b/(2*(b-a)))*((1/a)*sqrt(pi/a)-(1/b)*sqrt(pi/b))).subs({a: 1, b: 2})"
      expected: "sqrt(pi)*(4 - sqrt(2))/4"
    - expr: "integrate(sqrt(x+y)*2*exp(-x-2*y), (x, 0, oo), (y, 0, oo))"
      expected: "sqrt(pi)*(4 - sqrt(2))/4"
    - expr: "integrate(sqrt(x+y)*2*5*exp(-2*x-5*y), (x, 0, oo), (y, 0, oo))"
      expected: "(5*sqrt(pi/2) - 2*sqrt(pi/5))/6"
discrepancy: |
  The official key gives \(\frac{1}{2(b-a)}\left(\frac{1}{a}\sqrt{\frac{\pi}{a}}-\frac{1}{b}\sqrt{\frac{\pi}{b}}\right)\). The verified value is \(\frac{ab}{2(b-a)}\left(\frac{1}{a}\sqrt{\frac{\pi}{a}}-\frac{1}{b}\sqrt{\frac{\pi}{b}}\right)\).
:::

::: sheet-item
id: l8-probability.sheet-joint
category: formula
text: |
  If \(X\) and \(Y\) are independent with densities \(f_X\) and \(f_Y\), the joint density is the product \(f_X(x)f_Y(y)\). The probability of a region \(D\) is the integral of that product over \(D\). The expectation \(E(g(X,Y))\) is the integral of \(g(x,y)\) times the product.
:::

::: sheet-item
id: l8-probability.sheet-origin-side
category: trap
text: |
  The event \(aX+bY<t\) is the set \(ax+by<t\). In the first quadrant that set is the triangle under the line \(ax+by=t\), on the side that contains the origin.
:::

::: going-deeper
title: Optional. The normal density and a chip count
text: |
  The handout states that \(\int_{-\infty}^{\infty} e^{-x^2/2}\,dx=\sqrt{2\pi}\), so the standard normal density is \(\frac{1}{\sqrt{2\pi}}e^{-x^2/2}\). The same section uses that curve for a long-run count of defective chips.
:::

::: exercise
id: l8-probability.ex-exponential-pair-events
tier: standard
topics: [probability]
statement: |
  Let \(X\) and \(Y\) be independent random variables with densities \(f_X(x) = ae^{-ax}\) and \(f_Y(y) = be^{-by}\), defined for \(x \ge 0\) and \(y \ge 0\), where \(a > 0\) and \(b > 0\).

  (a) Compute \(P(X < Y)\).

  (b) Compute \(E(XY)\).

  (c) Let \(t > 0\). Compute \(P(aX + bY > t)\) with the substitution \(u = ax + by\), \(v = y\).
solution: |
  By independence the joint density is \(ab\,e^{-ax-by}\) on the first quadrant.

  (a) The event \(X < Y\) is \(x \ge 0\) and \(y > x\). Then
  \[
  \begin{aligned}
  P(X < Y)&=\int_0^{\infty}\int_x^{\infty} ab\,e^{-ax-by}\, dy\, dx,\\
  &=\int_0^{\infty} a e^{-ax} e^{-bx}\, dx,\\
  &=\frac{a}{a+b}.
  \end{aligned}
  \]

  (b) The integrand \(xy\) times the density separates into a product:
  \[
  \begin{aligned}
  E(XY)&=\int_0^{\infty} x\,a e^{-ax}\, dx\\
  &\qquad\cdot\int_0^{\infty} y\,b e^{-by}\, dy,\\
  &=\frac1a\cdot\frac1b=\frac{1}{ab}.
  \end{aligned}
  \]

  (c) The event is \(x \ge 0\), \(y \ge 0\) and \(ax + by > t\), the side of the line that does not contain the origin. With \(u = ax + by\) and \(v = y\), the inverse is \(x = (u - bv)/a\) and \(y = v\), with Jacobian factor \(\frac1a\). The conditions become \(u > t\) and \(0 \le v \le u/b\), and the integrand is \(ab\,e^{-u}\cdot\frac1a = b\,e^{-u}\). The inner integral in \(v\) equals \(u e^{-u}\), so
  \[
  \begin{aligned}
  P(aX + bY > t)&=\int_t^{\infty} u e^{-u}\, du,\\
  &=(t+1)e^{-t}.
  \end{aligned}
  \]

  The answers are \(\dfrac{a}{a+b}\), \(\dfrac{1}{ab}\) and \((t+1)e^{-t}\).
provenance: written-for-site
steps:
  - The solution uses the product density and integrates \(y\) from \(x\) to \(\infty\) in (a).
  - The solution separates the integrals in (b).
  - The solution applies the substitution in (c) and states \((t+1)e^{-t}\).
verification:
  checks:
    - expr: "integrate(Symbol('a', positive=True)*Symbol('b', positive=True)*exp(-Symbol('a', positive=True)*x - Symbol('b', positive=True)*y), (y, x, oo), (x, 0, oo))"
      expected: "Symbol('a', positive=True)/(Symbol('a', positive=True) + Symbol('b', positive=True))"
    - expr: "integrate(x*y*Symbol('a', positive=True)*Symbol('b', positive=True)*exp(-Symbol('a', positive=True)*x - Symbol('b', positive=True)*y), (x, 0, oo), (y, 0, oo))"
      expected: "1/(Symbol('a', positive=True)*Symbol('b', positive=True))"
    - expr: "integrate(b*exp(-u), (v, 0, u/b), (u, t, oo))"
      expected: "(t + 1)*exp(-t)"
:::

::: exercise
id: l8-probability.ex-triangle-density
tier: standard
topics: [probability, double-integrals]
statement: |
  Let \(f(x,y) = c\,xy\) for \(0 \le y \le x \le 1\), and let \(f(x,y) = 0\) elsewhere.

  (a) Find \(c\) so that \(f\) is a joint density.

  (b) Compute \(P(X + Y \le 1)\).

  (c) Compute \(E(X)\).
solution: |
  (a) The function \(xy\) is nonnegative on the triangle, so \(c > 0\). The integral of \(xy\) over the triangle is
  \[
  \int_0^1\int_0^x xy\, dy\, dx = \int_0^1 \frac{x^{3}}{2}\, dx = \frac18.
  \]
  The integral of \(f\) equals \(1\) when \(c = 8\).

  (b) Inside the triangle the condition \(x+y \le 1\) means \(y \le 1 - x\). The smaller bound on \(y\) depends on \(x\):

  - for \(0 \le x \le \frac12\), the bound \(y \le x\) is the smaller one,
  - for \(\frac12 \le x \le 1\), the bound \(y \le 1 - x\) is the smaller one.

  So
  \[
  \begin{aligned}
  P(X+Y \le 1)\\
  &=\int_0^{1/2}\\
  &\qquad\int_0^x 8xy\, dy\, dx\\
  &\qquad+\int_{1/2}^1\\
  &\qquad\qquad\int_0^{1-x}\\
  &\qquad\qquad 8xy\, dy\, dx.
  \end{aligned}
  \]
  The first integral equals \(\int_0^{1/2} 4x^{3}\, dx = \frac{1}{16}\). The second equals \(\int_{1/2}^1 4x(1-x)^{2}\, dx = 4\left[\frac{x^{2}}{2} - \frac{2x^{3}}{3} + \frac{x^{4}}{4}\right]_{1/2}^1 = 4\cdot\frac{5}{192} = \frac{5}{48}\). The sum is \(\dfrac{1}{16}+\dfrac{5}{48} = \dfrac16\).

  (c) The expectation is
  \[
  \begin{aligned}
  E(X)&=\int_0^1\int_0^x x\cdot 8xy\, dy\, dx,\\
  &=\int_0^1 4x^{4}\, dx=\frac45.
  \end{aligned}
  \]

  The constant is \(c = 8\), the probability is \(\dfrac16\) and \(E(X) = \dfrac45\).
provenance: written-for-site
steps:
  - The solution integrates \(xy\) over the triangle to get \(1/8\), so \(c = 8\).
  - The solution splits the event \(X+Y \le 1\) at \(x = \frac12\) and finds \(\frac16\).
  - The solution computes \(E(X) = \frac45\).
verification:
  checks:
    - expr: "integrate(x*y, (y, 0, x), (x, 0, 1))"
      expected: "1/8"
    - expr: "integrate(8*x*y, (y, 0, x), (x, 0, Rational(1, 2))) + integrate(8*x*y, (y, 0, 1 - x), (x, Rational(1, 2), 1))"
      expected: "1/6"
    - expr: "integrate(8*x*x*y, (y, 0, x), (x, 0, 1))"
      expected: "4/5"
:::
