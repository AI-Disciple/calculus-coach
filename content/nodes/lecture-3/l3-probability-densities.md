---
id: l3-probability-densities
lecture: 3
order: 12
title: Probability densities
prerequisites: [l3-improper-integrals]
sources:
  - { source: handout, section: "9.8", page: 223 }
  - { source: lecture-notes-3, page: 4 }
  - { source: midterm-app }
  - { source: midterm-2021, page: 2 }
examWeight: medium
status: reviewed
---

::: section
title: Probability density
:::

::: formal-statement
kind: definition
title: Probability density
source: { source: handout, section: "9.8", page: 223 }
text: |
  Let \(f\) be a function from \(\mathbb{R}\) to \(\mathbb{R}\). If \(f(x)\ge 0\) for every real \(x\) and

  \[
  \int_{-\infty}^{\infty} f(x)\,dx=1,
  \]

  then \(f\) is a **probability density function**.
:::

::: plain-explanation
text: |
  A density stays nonnegative. The area under its graph equals 1. That area is an integral over the whole real line. Where the function equals zero, it adds no area. Where the function is negative, it is not a density.
:::

::: formal-statement
kind: definition
title: Densities on the half-line
source: { source: lecture-notes-3, page: 4 }
text: |
  If \(f(x)=0\) for every \(x<0\), then \(f\) is a probability density when \(f(x)\ge 0\) for every \(x\ge 0\) and

  \[
  \int_{0}^{+\infty} f(x)\,dx=1.
  \]

  The **expectation** is

  \[
  E(X)=\int_{0}^{+\infty} x f(x)\,dx,
  \]

  provided that integral converges.

  The probability of the event \(X>2\) is

  \[
  P(X>2)=\int_{2}^{\infty} f(x)\,dx.
  \]
:::

::: plain-explanation
text: |
  If \(f\) is zero for every negative \(x\), the integral over the whole line reduces to an integral that starts at 0. The mean is the integral of \(x f(x)\) from 0 to \(+\infty\). That mean exists only when the integral converges. For every \(t\ge 0\), the probability \(P(X>t)\) is the integral of \(f\) from \(t\) to \(\infty\). The probability \(P(X>2)\) is the case \(t=2\). Nonnegativity is required for \(x\ge 0\).
:::

::: worked-example
title: A half-line density with a free constant
problem: |
  Let \(c\) be a constant. Define \(f\) by \(f(x)=0\) for \(x<0\) and

  \[
  f(x)=\frac{c}{(1+x)^{3}}\quad\text{for }x\ge 0.
  \]

  Find \(c\) so that \(f\) is a probability density. Then compute \(E(X)\) and \(P(X>2)\).
solution: |
  ### Finding c

  For \(x\ge 0\) the denominator \((1+x)^{3}\) is positive, and \(f\) is zero for \(x<0\). Two cases:

  - If \(c\ge 0\), then \(f(x)\ge 0\) for every \(x\).
  - If \(c<0\), then \(f\) is negative on \([0,\infty)\).

  The integral of \(\frac{1}{(1+x)^{3}}\) from 0 to \(\infty\) has antiderivative \(-\frac{1}{2(1+x)^{2}}\). Evaluating from 0 to \(\infty\) gives

  \[
  0-\left(-\frac{1}{2}\right)=\frac{1}{2}.
  \]

  The integral of \(f\) therefore equals \(\frac{c}{2}\). This equals 1 when \(c=2\). The constant is \(c=2\). For \(x\ge 0\),

  \[
  f(x)=\frac{2}{(1+x)^{3}},
  \]

  and \(f(x)=0\) for \(x<0\). The integral of this \(f\) from 0 to \(\infty\) equals \(2\cdot\frac{1}{2}=1\). Since \(f\) is nonnegative, \(f\) is a probability density.

  ### The expectation

  The expectation is the integral of \(x f(x)\) from 0 to \(\infty\). Substitute \(u=1+x\), so \(x=u-1\) and the limits change from \(x=0\) to \(\infty\) into \(u=1\) to \(\infty\). Then

  \[
  \begin{aligned}
  E(X)&=2\int_{1}^{\infty}\left(u^{-2}-u^{-3}\right)\,du\\
  &=2\left[-u^{-1}+\frac{1}{2}u^{-2}\right]_{1}^{\infty}.
  \end{aligned}
  \]

  The value at infinity is 0. The value at \(u=1\) is \(-\frac{1}{2}\). The bracket equals \(0-\left(-\frac{1}{2}\right)=\frac{1}{2}\). Multiplying by 2 gives \(E(X)=1\).

  ### The probability

  The probability \(P(X>2)\) is the integral of \(f\) from 2 to \(\infty\). An antiderivative of \(\frac{2}{(1+x)^{3}}\) is \(-\frac{1}{(1+x)^{2}}\). Evaluating from 2 to \(\infty\) gives

  \[
  0-\left(-\frac{1}{9}\right)=\frac{1}{9}.
  \]

  The probability is \(P(X>2)=\frac{1}{9}\).
:::

::: guided-example
title: A constant density on a finite interval
problem: |
  Let \(c\) be a constant. Let \(f(x)=c\) for \(0\le x\le 4\), and let \(f(x)=0\) otherwise. Find \(c\) so that \(f\) is a probability density. Then compute \(E(X)\) and \(P(X>2)\).
steps:
  - |
    The values of \(f\) are nonnegative when \(c\ge 0\). The integral of \(f\) over the whole line equals the integral of the constant \(c\) from 0 to 4, which is \(4c\). Set \(4c=1\). The constant is \(c=\frac{1}{4}\). With this choice the integral of \(f\) equals 1 and \(f\ge 0\), so \(f\) is a probability density.
  - |
    The mean is \(\int_{-\infty}^{\infty} x f(x)\,dx\). Outside \([0,4]\) the integrand is zero, so

    \[
    E(X)=\int_{0}^{4} x\cdot\frac{1}{4}\,dx=\left[\frac{x^{2}}{8}\right]_{0}^{4}=2.
    \]

    The expectation is \(E(X)=2\).
  - |
    The probability \(P(X>2)\) is the integral of \(f\) from 2 to \(\infty\). On \((4,\infty)\) the density is zero, so the integral runs from 2 to 4:

    \[
    P(X>2)=\int_{2}^{4}\frac{1}{4}\,dx=\frac{1}{2}.
    \]

    The probability is \(P(X>2)=\frac{1}{2}\).
:::

::: trap
text: |
  A function is a probability density only when \(f(x)\ge 0\) for every \(x\) and the integral of \(f\) over the whole line equals 1. Let \(f\) equal \(-2\) on \([-1,0)\), equal \(3\) on \([0,1]\), and equal \(0\) elsewhere. Its integral is

  \[
  \int_{-1}^{0}(-2)\,dx+\int_{0}^{1} 3\,dx=-2+3=1.
  \]

  On \([-1,0)\) the function equals \(-2\). The integral over that interval equals \(-2\). That value cannot be a probability. This function is not a density.
:::

::: key-points
text: |
  - A function \(f\) is a probability density when \(f(x)\ge 0\) for every \(x\) and \(\int_{-\infty}^{\infty} f(x)\,dx=1\).
  - If \(f(x)=0\) for every \(x<0\), the integral starts at 0, \(E(X)=\int_{0}^{+\infty} x f(x)\,dx\) when that integral converges, and \(P(X>t)=\int_{t}^{\infty} f(x)\,dx\).
  - The usual slip checks only that the integral equals 1. The function equal to \(-2\) on \([-1,0)\), to \(3\) on \([0,1]\) and to \(0\) elsewhere has integral 1 and is not a density, because it is negative on \([-1,0)\).
:::

::: going-deeper
title: The bell curve
text: |
  ### The standard normal density

  The function \(e^{-x^{2}/2}\) has no elementary antiderivative. For every \(x\ge 1\),

  \[
  0<e^{-x^{2}/2}\le e^{-x/2}.
  \]

  The comparison integral \(\int_{1}^{\infty} e^{-x/2}\,dx\) equals \(2e^{-1/2}\), which is finite, so the positive tail of \(e^{-x^{2}/2}\) converges. The integrand is even, so the integral from \(-\infty\) to \(-1\) equals the integral from 1 to \(\infty\). On the finite interval \([-1,1]\) the integrand is continuous, so the integral there is finite. The integral over the whole line is finite. Call its value \(A\). Then \(A>0\). The quotient \(e^{-x^{2}/2}/A\) is nonnegative and integrates to 1, so it is a probability density. It is the **standard normal density**. Its graph is the **bell curve**. A multivariable argument gives \(A=\sqrt{2\pi}\). With that constant the mean is 0 and the variance is 1, so the standard deviation is 1.

  ### Centre and standard deviation

  A centre \(\mu\) and a standard deviation \(\sigma>0\) give the density

  \[
  \frac{1}{\sigma\sqrt{2\pi}}\exp\left(-\frac{(x-\mu)^{2}}{2\sigma^{2}}\right).
  \]

  The substitution \(u=(x-\mu)/\sigma\) reduces the integral of this function to the standard normal integral, so the function is a density. The same substitution gives mean \(\mu\) and variance \(\sigma^{2}\). The standard deviation is \(\sigma\).
:::

::: concept-question
id: l3-probability-densities.q-89a11a8d
question: |
  For \(\lambda > 0\), is \(f(x) = \lambda e^{-\lambda x}\) on \(x \geq 0\) a probability density, and what is \(E(X)\)?
options:
  - text: |
      Yes, and \(E(X) = \frac{1}{\lambda}\)
    correct: true
  - text: |
      Yes, and \(E(X) = \lambda\)
  - text: |
      No, it does not integrate to 1
  - text: |
      Yes, and \(E(X) = \frac{1}{\lambda^{2}}\)
explanation: |
  The function is nonnegative and
  \[
  \int_{0}^{\infty} \lambda e^{-\lambda x}\, dx = 1,
  \]
  so it is a density. Integration by parts gives \(E(X) = \frac{1}{\lambda}\).
:::

::: concept-question
id: l3-probability-densities.q-509fe36e
question: |
  For \(\lambda > 0\), is \(f(x) = \lambda^{2} x e^{-\lambda x}\) on \(x \geq 0\) a density, and what is \(E(X)\)?
options:
  - text: |
      Yes, and \(E(X) = \frac{2}{\lambda}\)
    correct: true
  - text: |
      Yes, and \(E(X) = \frac{1}{\lambda}\)
  - text: |
      No, it integrates to 2
  - text: |
      Yes, and \(E(X) = \frac{\lambda}{2}\)
explanation: |
  Since
  \[
  \int_{0}^{\infty} \lambda^{2} x e^{-\lambda x}\, dx = 1,
  \]
  the function is a density. Then
  \[
  E(X) = \lambda^{2} \int_{0}^{\infty} x^{2} e^{-\lambda x}\, dx = \frac{2}{\lambda}.
  \]
:::

::: concept-question
id: l3-probability-densities.q-a86ca74e
question: |
  For \(a > 0\), is \(f(x) = \frac{1}{\pi} \cdot \frac{a}{x^{2} + a^{2}}\) a density on \(\mathbb{R}\), and what is \(E(X)\)?
options:
  - text: |
      Yes, but \(E(X)\) does not exist. The defining integral diverges.
    correct: true
  - text: |
      Yes, and \(E(X) = 0\)
  - text: |
      Yes, and \(E(X) = a\)
  - text: |
      No, it does not integrate to 1
explanation: |
  Since \(\frac{d}{dx}\arctan(x/a) = \frac{a}{x^{2} + a^{2}}\),
  \[
  \int_{-\infty}^{\infty} \frac{1}{\pi} \frac{a}{x^{2} + a^{2}}\, dx = 1.
  \]
  The integral \(\int |x| f(x)\, dx\) diverges at infinity, so \(E(X)\) is undefined.
:::

::: exercise
id: l3-probability-densities.k1
tier: basic
topics: [probability-densities]
statement: |
  Find \(c\) such that \(f(x)=c\,x(1-x)\) on \([0,1]\) (and \(f(x)=0\) elsewhere) is a probability density.
solution: |
  The integral of the unscaled function is

  \[
  \int_0^1 x(1-x)\,dx=\frac{1}{2}-\frac{1}{3}=\frac{1}{6}.
  \]

  The choice \(c=6\) makes the integral equal to \(1\). On \([0,1]\), \(x(1-x)\ge 0\), so \(f\ge 0\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x*(1 - x), (x, 0, 1))
      expected: "1/6"
    - expr: integrate(6*x*(1 - x), (x, 0, 1))
      expected: "1"
:::

::: section
title: Probability as an integral
:::

::: formal-statement
kind: definition
title: Probability as an integral
source: { source: handout, section: "9.8", page: 223 }
text: |
  Let \(X\) be a random variable with probability density \(f\). The probability that \(X\) lies between \(a\) and \(b\) is

  \[
  \int_{a}^{b} f(x)\,dx.
  \]
:::

::: plain-explanation
text: |
  The integral is the area under the density between \(a\) and \(b\). For \(a\le b\), that area is at most 1, because the total area under \(f\) is 1. The probability that \(X\) takes some real value is the integral over the whole line, which equals 1.
:::

::: formal-statement
kind: definition
title: Distribution function
source: { source: handout, section: "9.8", page: 223 }
text: |
  The **cumulative distribution function** of \(X\) is

  \[
  F(x)=P(X\le x)=\int_{-\infty}^{x} f(t)\,dt.
  \]

  This function is also called the distribution of \(X\).
:::

::: plain-explanation
text: |
  \(F(x)\) is the probability that the outcome is at most \(x\). Moving \(x\) to the right adds the probability of the new outcomes, so \(F\) does not decrease. Far to the left, \(F\) equals 0. Far to the right, \(F\) equals 1.
:::

::: key-points
text: |
  - For a random variable \(X\) with density \(f\), the probability that \(X\) lies between \(a\) and \(b\) is \(\int_{a}^{b} f(x)\,dx\), the area under \(f\) between \(a\) and \(b\).
  - The distribution function is \(F(x)=P(X\le x)=\int_{-\infty}^{x} f(t)\,dt\). It does not decrease. Far to the left \(F\) equals 0, and far to the right it equals 1.
:::

::: exercise
id: l3-probability-densities.s17-1b
tier: basic
topics: [probability-densities]
number: "Integral bank, Ex. 17.1"
statement: |
  Let \(\lambda>0\) and let \(f(x)=\lambda e^{-\lambda x}\) for \(x\ge 0\). Compute \(P(X>2)\).
solution: |
  \(P(X>2)\) is the integral of the density from \(2\) to infinity. An antiderivative of \(\lambda e^{-\lambda x}\) is \(-e^{-\lambda x}\).

  \[
  \begin{aligned}
  P(X>2)&=\int_2^\infty\lambda e^{-\lambda x}\,dx\\
  &=\lim_{R\to\infty}\big[-e^{-\lambda x}\big]_2^R\\
  &=e^{-2\lambda}.
  \end{aligned}
  \]

  The same antiderivative gives \(P(X>t)=e^{-\lambda t}\) for every \(t\ge 0\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(lam*exp(-lam*x), (x, 2, oo)).subs(lam, 3)
      expected: "exp(-6)"
    - expr: integrate(lam*exp(-lam*x), (x, 2, oo)).args[0][0]
      expected: "exp(-2*lam)"
:::

::: section
title: Mean and variance
:::

::: formal-statement
kind: definition
title: Mean
source: { source: handout, section: "9.8", page: 223 }
text: |
  The **mean** of a random variable \(X\) with probability density \(f\) is

  \[
  \mu=E(X)=\int_{-\infty}^{\infty} x f(x)\,dx,
  \]

  provided the integral converges. When the mean exists, it is unique.
:::

::: plain-explanation
text: |
  The mean weights each position \(x\) by the density and adds those contributions as an integral. It is the balance point of a beam of total mass 1 whose density along the line is \(f\). The integral has to converge. When \(\int_{-\infty}^{\infty}|x|f(x)\,dx\) diverges, \(E(X)\) does not exist. In that situation the symmetric limit \(\lim_{R\to\infty}\int_{-R}^{R} x f(x)\,dx\) may equal 0.
:::

::: formal-statement
kind: definition
title: Variance
source: { source: handout, section: "9.8", page: 223 }
text: |
  Suppose the mean \(\mu=E(X)\) exists. The **variance** of \(X\) is

  \[
  V(X)=\int_{-\infty}^{\infty}(x-\mu)^{2} f(x)\,dx,
  \]

  and the **standard deviation** is \(\sigma=\sqrt{V(X)}\).
:::

::: plain-explanation
text: |
  The factor \((x-\mu)^{2}\) is the squared distance from the mean, and \(f(x)\) weights that distance. The expansion \((x-\mu)^{2}=x^{2}-2\mu x+\mu^{2}\) integrates to \(E(X^{2})-2\mu E(X)+\mu^{2}\). When \(E(X^{2})\) exists, substituting \(E(X)=\mu\) leaves \(E(X^{2})-\mu^{2}\). The standard deviation is the square root of the variance, so it is measured in the same units as \(X\).
:::

::: formal-statement
kind: definition
title: Discrete expected value
source: { source: handout, section: "9.8", page: 223 }
text: |
  If the possible values of \(X\) are \(x_{1},\ldots,x_{n}\), then \(X\) is a **discrete random variable** and

  \[
  E(X)=\sum_{i=1}^{n} x_{i} P(x_{i}).
  \]

  The expected value is also called the mean.
:::

::: plain-explanation
text: |
  Each value is multiplied by the probability of that value, and the products are added. For a fair six-sided die the values are the integers from 1 to 6, and each has probability \(\frac{1}{6}\).
:::

::: trap
text: |
  The mean is the integral of \(x f(x)\) over the whole line. The function \(f(x)=\frac{1}{2}e^{-|x|}\) is nonnegative, and its integral over \(\mathbb{R}\) equals 1, so it is a density. The integral of \(|x|f(x)\) equals 1, so the mean exists. The integrals of \(x f(x)\) are
  \[
  \begin{aligned}
  \int_{0}^{\infty} x f(x)\,dx&=\frac{1}{2},\\
  \int_{-\infty}^{0} x f(x)\,dx&=-\frac{1}{2},\\
  \int_{-\infty}^{\infty} x f(x)\,dx&=0.
  \end{aligned}
  \]
  The integral over the whole line equals 0, so \(E(X)=0\). Starting the mean integral at 0 drops the contribution \(-\frac{1}{2}\).
:::

::: key-points
text: |
  - The mean is \(\mu=E(X)=\int_{-\infty}^{\infty} x f(x)\,dx\), provided the integral converges. When \(\int_{-\infty}^{\infty}|x|f(x)\,dx\) diverges, \(E(X)\) does not exist.
  - When the mean exists, the variance is \(V(X)=\int_{-\infty}^{\infty}(x-\mu)^{2} f(x)\,dx\) and the standard deviation is \(\sigma=\sqrt{V(X)}\).
  - The usual slip starts the mean integral at 0. For \(f(x)=\frac{1}{2}e^{-|x|}\) it gives \(\frac{1}{2}\). The integral runs over the whole line, the part from \(-\infty\) to 0 equals \(-\frac{1}{2}\), and \(E(X)=0\).
:::

::: going-deeper
title: Defective chips
text: |
  ### Is a count of 15 plausible?

  In the long run, 1 chip in every 100 is defective. A batch of 1000 chips then has expected number of defectives equal to 10, because \(1000\cdot 0.01=10\). A batch with 15 defectives can be compared with a normal density of mean 10 and variance \(1000\cdot 0.01\cdot 0.99=9.9\),

  \[
  \begin{aligned}
  f(x)&=\frac{1}{\sqrt{2\pi}\,\sqrt{1000\cdot 0.01\cdot 0.99}}\\
  &\quad\exp\left(\frac{-(x-10)^{2}}{2\cdot 1000\cdot 0.01\cdot 0.99}\right).
  \end{aligned}
  \]

  The integral of \(f\) from 15 to 15 equals 0, because the interval is a single point. The integral from 14.5 to 15.5 is about 0.036. The two-tail probability \(P(|X-10|\ge 5)\) is about 0.11, so a count of 15 is compatible with this approximation. The two-tail probability \(P(|X-10|\ge 10)\) is about 0.0015, so a count of 20 is suspicious.

  ### Cutoffs

  A 1% cutoff sits between deviations 8 and 9. The probability of a deviation of at least 8 is about 0.011. The probability of a deviation of at least 9 is about 0.004. Counts of 19 or more, and counts of 1 or fewer, should be investigated. A two-tail probability near 0.05 occurs at a deviation of 6. That cutoff marks counts of 16 or more, and counts of 4 or fewer.
:::

::: exercise
id: l3-probability-densities.k2
tier: basic
topics: [probability-densities]
statement: |
  With \(f(x)=6x(1-x)\) on \([0,1]\), compute \(E(X)\).
solution: |
  The expectation is the integral of \(x f(x)\). The graph of \(f\) is symmetric about \(x=\frac{1}{2}\), so the mean is \(\frac{1}{2}\). The integral gives the same value:

  \[
  \begin{aligned}
  E(X)&=6\int_0^1(x^2-x^3)\,dx\\
  &=6\left(\frac{1}{3}-\frac{1}{4}\right)\\
  &=\frac{1}{2}.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(x*6*x*(1 - x), (x, 0, 1))
      expected: "1/2"
:::

::: sheet-item
id: l3-probability-densities.sheet-density
category: formula
text: |
  A function \(f\) is a probability density when \(f(x)\ge 0\) for every \(x\) and \(\int_{-\infty}^{\infty} f(x)\,dx=1\).
:::

::: sheet-item
id: l3-probability-densities.sheet-probability
category: formula
text: |
  If \(X\) has density \(f\), the probability that \(X\) lies between \(a\) and \(b\) is \(\int_{a}^{b} f(x)\,dx\).
:::

::: sheet-item
id: l3-probability-densities.sheet-mean
category: formula
text: |
  \(\mu=E(X)=\int_{-\infty}^{\infty} x f(x)\,dx\), when the integral converges.
:::

::: sheet-item
id: l3-probability-densities.sheet-variance
category: formula
text: |
  \(V(X)=\int_{-\infty}^{\infty}(x-\mu)^{2} f(x)\,dx=E(X^{2})-\mu^{2}\), and \(\sigma=\sqrt{V(X)}\).
:::

::: sheet-item
id: l3-probability-densities.sheet-half-line
category: formula
text: |
  If \(f(x)=0\) for \(x<0\), then \(E(X)=\int_{0}^{\infty} x f(x)\,dx\) and \(P(X>2)=\int_{2}^{\infty} f(x)\,dx\).
:::

::: sheet-item
id: l3-probability-densities.sheet-distribution
category: formula
text: |
  The distribution function is \(F(x)=P(X\le x)=\int_{-\infty}^{x} f(t)\,dt\).
:::

::: sheet-item
id: l3-probability-densities.sheet-discrete
category: formula
text: |
  If \(X\) takes finitely many values \(x_{i}\) with probabilities \(P(x_{i})\), then \(E(X)=\sum_{i} x_{i} P(x_{i})\).
:::

::: sheet-item
id: l3-probability-densities.sheet-exponential
category: formula
text: |
  For \(\lambda>0\), the density \(\lambda e^{-\lambda x}\) on \(x\ge 0\) has mean \(\frac{1}{\lambda}\), variance \(\frac{1}{\lambda^{2}}\), and \(P(X>a)=e^{-\lambda a}\) for \(a\ge 0\).
:::

::: sheet-item
id: l3-probability-densities.sheet-uniform
category: formula
text: |
  The uniform density on \([a,b]\) has mean \(\frac{a+b}{2}\) and standard deviation \(\frac{b-a}{2\sqrt{3}}\).
:::

::: sheet-item
id: l3-probability-densities.sheet-negative
category: trap
text: |
  If \(f=-2\) on \([-1,0)\) and \(f=3\) on \([0,1]\), the integral equals 1 and the piece on \([-1,0)\) integrates to \(-2\). The negative piece means \(f\) is not a density.
:::

::: sheet-item
id: l3-probability-densities.sheet-mean-support
category: trap
text: |
  For \(f(x)=\frac{1}{2}e^{-|x|}\), the integral of \(x f(x)\) from 0 to \(\infty\) equals \(\frac{1}{2}\). The mean is the integral over the whole line, and \(E(X)=0\).
:::

::: exercise
id: l3-probability-densities.s17-1a
tier: standard
topics: [probability-densities]
number: "Integral bank, Ex. 17.1"
statement: |
  Let \(\lambda>0\), and let \(f(x)=\lambda e^{-\lambda x}\) for \(x\ge 0\) (and \(f(x)=0\) for \(x<0\)). Check that \(f\) is a probability density, and compute \(E(X)\) as a function of \(\lambda\).
solution: |
  A function is a density when it is nonnegative and integrates to \(1\). For \(\lambda>0\), \(f(x)\ge 0\). For \(R>0\),

  \[
  \int_0^R\lambda e^{-\lambda x}\,dx=1-e^{-\lambda R},
  \]

  which tends to \(1\) as \(R\to\infty\). So \(f\) is a density.

  The expectation is \(\int_0^\infty x\lambda e^{-\lambda x}\,dx\). Integrate by parts with \(u=x\) and \(v'=\lambda e^{-\lambda x}\), so \(v=-e^{-\lambda x}\). For \(R>0\),

  \[
  \begin{aligned}
  &\int_0^R x\lambda e^{-\lambda x}\,dx\\
  &=\big[-xe^{-\lambda x}\big]_0^R+\int_0^R e^{-\lambda x}\,dx\\
  &=-Re^{-\lambda R}+\frac{1-e^{-\lambda R}}{\lambda}.
  \end{aligned}
  \]

  As \(R\to\infty\), both \(Re^{-\lambda R}\) and \(e^{-\lambda R}\) tend to \(0\). The expectation equals \(\frac{1}{\lambda}\).
provenance: written-for-site
steps:
  - Check that \(f\ge 0\) and that the integral of \(f\) equals \(1\).
  - Integrate \(x\lambda e^{-\lambda x}\) by parts.
  - The boundary term \(Re^{-\lambda R}\) tends to \(0\).
  - The expectation equals \(\frac{1}{\lambda}\).
verification:
  checks:
    - expr: integrate(lam*exp(-lam*x), (x, 0, oo)).subs(lam, 3)
      expected: "1"
    - expr: integrate(lam*exp(-lam*x), (x, 0, oo)).args[0][0]
      expected: "1"
    - expr: integrate(x*lam*exp(-lam*x), (x, 0, oo)).subs(lam, 3)
      expected: "1/3"
    - expr: integrate(x*lam*exp(-lam*x), (x, 0, oo)).args[0][0]
      expected: "1/lam"
:::

::: exercise
id: l3-probability-densities.s17-2
tier: standard
topics: [probability-densities]
number: "Integral bank, Ex. 17.2"
statement: |
  Let \(\lambda>0\) and let \(f(x)=\lambda^2 x e^{-\lambda x}\) for \(x\ge 0\). Is \(f\) a density? Compute \(E(X)\).
solution: |
  For \(\lambda>0\) and an integer \(n\ge 0\), set
  \[
  I_n=\int_0^\infty x^n e^{-\lambda x}\,dx.
  \]
  Integration by parts gives
  \[
  I_n=\frac{n}{\lambda}I_{n-1},\qquad I_0=\frac{1}{\lambda},
  \]
  because the boundary term tends to \(0\). Therefore
  \[
  I_n=\frac{n!}{\lambda^{n+1}}.
  \]

  The function \(f\) is nonnegative. Its integral is \(\lambda^2 I_1=\lambda^2\cdot\frac{1}{\lambda^2}=1\), so \(f\) is a density.

  \[
  \begin{aligned}
  E(X)&=\lambda^2\int_0^\infty x^2 e^{-\lambda x}\,dx\\
  &=\lambda^2 I_2\\
  &=\lambda^2\cdot\frac{2}{\lambda^3}=\frac{2}{\lambda}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The integrals \(I_n=\int_0^\infty x^n e^{-\lambda x}\,dx\) satisfy \(I_n=\frac{n}{\lambda}I_{n-1}\).
  - Then \(I_n=\frac{n!}{\lambda^{n+1}}\).
  - The integral of \(f\) equals \(1\), so \(f\) is a density.
  - The expectation equals \(\frac{2}{\lambda}\).
verification:
  checks:
    - expr: integrate(lam**2*x*exp(-lam*x), (x, 0, oo)).subs(lam, 3)
      expected: "1"
    - expr: integrate(lam**2*x*exp(-lam*x), (x, 0, oo)).args[0][0]
      expected: "1"
    - expr: integrate(x*lam**2*x*exp(-lam*x), (x, 0, oo)).subs(lam, 3)
      expected: "2/3"
    - expr: integrate(x*lam**2*x*exp(-lam*x), (x, 0, oo)).args[0][0]
      expected: "2/lam"
:::

::: exercise
id: l3-probability-densities.s17-3
tier: exam
topics: [probability-densities, improper-integrals]
number: "Integral bank, Ex. 17.3"
statement: |
  Let \(a>0\) and \(f(x)=\frac{1}{\pi}\frac{a}{x^2+a^2}\) on \(\mathbb{R}\). Check that \(f\) is a density. Does the integral defining \(E(X)=\int_{-\infty}^{\infty} xf(x)\,dx\) converge?
solution: |
  For \(a>0\), \(f(x)>0\). The derivative of \(\arctan(x/a)\) is \(\frac{a}{x^2+a^2}\), so

  \[
  \int_{-R}^{R}f(x)\,dx=\frac{1}{\pi}\left[\arctan\frac{x}{a}\right]_{-R}^{R},
  \]

  which tends to \(\frac{1}{\pi}\left(\frac{\pi}{2}+\frac{\pi}{2}\right)=1\) as \(R\to\infty\). So \(f\) is a density.

  On the positive half-line,

  \[
  \int_0^R xf(x)\,dx=\frac{a}{2\pi}\ln\frac{R^2+a^2}{a^2}.
  \]

  This tends to \(+\infty\) as \(R\to\infty\), so \(\int_0^\infty xf(x)\,dx\) diverges and \(E(X)\) does not exist.

  The line \(E(X)=0\), drawn from the oddness of \(xf(x)\), needs a convergent integral. The symmetric limit \(\lim_{R\to\infty}\int_{-R}^{R} xf(x)\,dx\) equals \(0\).
provenance: written-for-site
steps:
  - The antiderivative of \(\frac{a}{x^2+a^2}\) is \(\arctan(x/a)\).
  - The integral of \(f\) over the line equals \(1\).
  - The integral of \(xf(x)\) from \(0\) to infinity diverges.
  - So \(E(X)\) does not exist.
verification:
  checks:
    - expr: integrate((1/pi)*a/(x**2 + a**2), (x, -oo, oo)).subs(a, 3)
      expected: "1"
    - expr: integrate((1/pi)*a/(x**2 + a**2), (x, -oo, oo)).args[0][0]
      expected: "1"
:::

::: exercise
id: l3-probability-densities.k3
tier: standard
topics: [probability-densities]
statement: |
  With \(f(x)=6x(1-x)\) on \([0,1]\), compute \(\operatorname{Var}(X)\).
solution: |
  The variance is \(E(X^2)-E(X)^2\). From the integral of \(xf(x)\), \(E(X)=\frac{1}{2}\). The second moment is

  \[
  \begin{aligned}
  E(X^2)&=6\int_0^1(x^3-x^4)\,dx\\
  &=6\left(\frac{1}{4}-\frac{1}{5}\right)\\
  &=\frac{3}{10}.
  \end{aligned}
  \]

  Therefore \(\operatorname{Var}(X)=\frac{3}{10}-\frac{1}{4}=\frac{1}{20}\).
provenance: written-for-site
steps:
  - Compute \(E(X^2)\) as the integral of \(x^2 f(x)\).
  - That integral equals \(\frac{3}{10}\).
  - Subtract \(E(X)^2=\frac{1}{4}\) to get \(\frac{1}{20}\).
verification:
  checks:
    - expr: integrate(x**2*6*x*(1 - x), (x, 0, 1))
      expected: "3/10"
    - expr: integrate(x**2*6*x*(1 - x), (x, 0, 1)) - (integrate(x*6*x*(1 - x), (x, 0, 1)))**2
      expected: "1/20"
:::

::: exercise
id: l3-probability-densities.k4
tier: basic
topics: [probability-densities]
statement: |
  \(X\) is exponential with \(\lambda=\frac{1}{2}\). Compute \(P(1<X<3)\).
solution: |
  The density is \(\frac{1}{2}e^{-x/2}\) for \(x\ge 0\). An antiderivative is \(-e^{-x/2}\).

  \[
  \begin{aligned}
  P(1<X<3)&=\int_1^3\frac{1}{2}e^{-x/2}\,dx\\
  &=\big[-e^{-x/2}\big]_1^3\\
  &=e^{-1/2}-e^{-3/2}.
  \end{aligned}
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate((1/2)*exp(-x/2), (x, 1, 3))
      expected: "exp(-1/2) - exp(-3/2)"
:::

::: exercise
id: l3-probability-densities.k5
tier: standard
topics: [probability-densities]
statement: |
  \(X\) is exponential with \(\lambda=2\). Compute \(E(X^2)\).
solution: |
  For an exponential density with parameter \(\lambda>0\),

  \[
  E(X^2)=\int_0^\infty x^2\lambda e^{-\lambda x}\,dx=\frac{2}{\lambda^2}.
  \]

  With \(\lambda=2\), this equals \(\frac{2}{4}=\frac{1}{2}\).

  The mean is \(\frac{1}{\lambda}\), so the variance is \(\frac{2}{\lambda^2}-\frac{1}{\lambda^2}=\frac{1}{\lambda^2}\).
provenance: written-for-site
steps:
  - Use \(\int_0^\infty x^2\lambda e^{-\lambda x}\,dx=\frac{2}{\lambda^2}\).
  - Substitute \(\lambda=2\) to get \(\frac{1}{2}\).
verification:
  checks:
    - expr: integrate(x**2*2*exp(-2*x), (x, 0, oo))
      expected: "1/2"
:::

::: exercise
id: l3-probability-densities.k6
tier: basic
topics: [probability-densities]
statement: |
  Find \(c\) such that \(f(x)=c\,e^{-|x|}\) on \(\mathbb{R}\) is a density.
solution: |
  The integrand \(e^{-|x|}\) is even, so

  \[
  \int_{-\infty}^{\infty}e^{-|x|}\,dx=2\int_0^\infty e^{-x}\,dx=2.
  \]

  The choice \(c=\frac{1}{2}\) makes the integral equal to \(1\), and \(f\ge 0\).
provenance: written-for-site
verification:
  checks:
    - expr: integrate(exp(-Abs(x)), (x, -oo, oo))
      expected: "2"
    - expr: integrate((1/2)*exp(-Abs(x)), (x, -oo, oo))
      expected: "1"
:::

::: exercise
id: l3-probability-densities.k7
tier: standard
topics: [probability-densities, improper-integrals]
statement: |
  The function \(f(x)=\frac{1}{x^2}\) on \([1,\infty)\) is a density. Does \(E(X)\) exist? That is, does \(\int_1^\infty x f(x)\,dx\) converge?
solution: |
  The function \(f\) is nonnegative, and

  \[
  \int_1^\infty\frac{1}{x^2}\,dx=1,
  \]

  so \(f\) is a density. The expectation integral is

  \[
  \int_1^\infty x\cdot\frac{1}{x^2}\,dx=\int_1^\infty\frac{1}{x}\,dx.
  \]

  The integral from \(1\) to \(R\) equals \(\ln R\), which tends to infinity. The expectation diverges, so \(E(X)\) does not exist.
provenance: written-for-site
steps:
  - The integral of \(\frac{1}{x^2}\) from \(1\) to infinity equals \(1\).
  - The expectation integral is the integral of \(\frac{1}{x}\).
  - That integral diverges, so \(E(X)\) does not exist.
verification:
  checks:
    - expr: integrate(1/x**2, (x, 1, oo))
      expected: "1"
:::

::: exercise
id: l3-probability-densities.k8
tier: standard
topics: [probability-densities]
statement: |
  \(X\) is exponential with \(\lambda=1\). Find its median \(m\), the number with \(P(X\le m)=\frac{1}{2}\).
solution: |
  The density is \(e^{-x}\) for \(x\ge 0\), so

  \[
  P(X\le m)=\int_0^m e^{-x}\,dx=1-e^{-m}.
  \]

  Set this equal to \(\frac{1}{2}\): \(e^{-m}=\frac{1}{2}\), hence \(m=\ln 2\). The mean of this density is \(1\).
provenance: written-for-site
steps:
  - The cumulative probability is \(1-e^{-m}\).
  - Set it equal to \(\frac{1}{2}\).
  - Solve to get \(m=\ln 2\).
verification:
  checks:
    - expr: integrate(exp(-x), (x, 0, log(2)))
      expected: "1/2"
:::

::: exercise
id: l3-probability-densities.k9
tier: basic
topics: [probability-densities]
statement: |
  \(X\) has density \(2x\) on \([0,1]\). Compute \(P\left(X\le\frac{1}{2}\right)\).
solution: |
  \[
  P\left(X\le\frac{1}{2}\right)=\int_0^{1/2}2x\,dx=\left[x^2\right]_0^{1/2}=\frac{1}{4}.
  \]
provenance: written-for-site
verification:
  checks:
    - expr: integrate(2*x, (x, 0, 1/2))
      expected: "1/4"
:::

::: exercise
id: l3-probability-densities.k10
tier: exam
topics: [probability-densities]
statement: |
  \(X\) has density \(xe^{-x}\) on \([0,\infty)\). Compute \(\operatorname{Var}(X)\).
solution: |
  The variance is \(E(X^2)-E(X)^2\). With this density,

  \[
  E(X)=\int_0^\infty x^2 e^{-x}\,dx=2,
  \]

  and

  \[
  E(X^2)=\int_0^\infty x^3 e^{-x}\,dx=6.
  \]

  Therefore \(\operatorname{Var}(X)=6-2^2=2\).

  For the density \(\lambda^2 x e^{-\lambda x}\) with \(\lambda>0\), the same moments give variance \(\frac{2}{\lambda^2}\).
provenance: written-for-site
steps:
  - The expectation is \(\int_0^\infty x^2 e^{-x}\,dx=2\).
  - The second moment is \(\int_0^\infty x^3 e^{-x}\,dx=6\).
  - The variance is \(6-4=2\).
verification:
  checks:
    - expr: integrate(x*x*exp(-x), (x, 0, oo))
      expected: "2"
    - expr: integrate(x**2*x*exp(-x), (x, 0, oo))
      expected: "6"
    - expr: integrate(x**2*x*exp(-x), (x, 0, oo)) - integrate(x*x*exp(-x), (x, 0, oo))**2
      expected: "2"
:::

::: exercise
id: l3-probability-densities.midterm-2021-ex5.1
number: "5.1"
statement: |
  Let \(X\) and \(Y\) be independent random variables with the same density \(f(x) = e^{-x}\) for \(x > 0\) and \(f(x) = 0\) for \(x \le 0\). The density of the couple \((X, Y)\) is \(g(x, y) = f(x)f(y)\). Compute \(\ln(g)\) when it is well defined and find the level sets of this function. What is the common feature of those level sets?
tier: exam
topics:
  - probability-densities
  - level-sets
solution: |
  For \(x > 0\) and \(y > 0\), one has
  \[
  \begin{aligned}
  g(x, y) &= e^{-x}e^{-y} = e^{-x-y},\\
  \ln(g(x, y)) &= -x - y.
  \end{aligned}
  \]
  Elsewhere \(g = 0\) and \(\ln(g)\) is undefined. The level set \(\ln(g) = c\) is the line \(x + y = -c\). The open first quadrant forces \(c < 0\). All these traces are parallel lines of slope \(-1\).
provenance: written-for-site
steps:
  - Compute ln(g) = -x - y on x > 0, y > 0.
  - Write the level sets as x + y = constant.
  - Note that the lines are parallel.
verification:
  checks:
    - expr: exp(-x)*exp(-y) - exp(-x - y)
      expected: "0"
pastExam:
  year: 2021
  paper: Midterm
  question: "5.1"
  points: 1
:::

::: exercise
id: l3-probability-densities.midterm-2021-ex5.2
number: "5.2"
statement: |
  Sketch the topographic map of \(\ln(g)\) in the domain where it is well defined. Is there a symmetry?
tier: exam
topics:
  - probability-densities
  - level-sets
solution: |
  The domain is the open first quadrant. The contours are the segments of the lines \(x + y = k\) for \(k > 0\). Values of \(\ln(g)\) decrease as one moves away from the origin, from near 0 toward \(-\infty\). The map is symmetric across the diagonal \(y = x\), since \(\ln(g(x, y)) = \ln(g(y, x))\).
provenance: written-for-site
steps:
  - Draw parallel lines x + y = k in the first quadrant.
  - Mark symmetry across y = x.
verification:
  checkable: false
  reason: The answer is a topographic sketch.
pastExam:
  year: 2021
  paper: Midterm
  question: "5.2"
  points: 1
:::

::: exercise
id: l3-probability-densities.midterm-2021-ex5.3
number: "5.3"
statement: |
  Sketch the 3D graph of \(g\).
tier: exam
topics:
  - probability-densities
solution: |
  For \(x > 0\) and \(y > 0\), \(g(x, y) = e^{-x-y}\). The surface tends to 1 as \((x, y)\) approaches the origin from the first quadrant, and it decays to 0 as \(x\) or \(y\) tends to \(+\infty\). Outside that quadrant \(g = 0\).
provenance: written-for-site
steps:
  - Sketch e^{-x-y} over x > 0, y > 0, decaying away from the origin.
verification:
  checkable: false
  reason: The answer is a 3D sketch of the density.
pastExam:
  year: 2021
  paper: Midterm
  question: "5.3"
  points: 1
:::

::: exercise
id: l3-probability-densities.handout-9.8.1
number: "9.8.1"
tier: basic
topics: [probability-densities, improper-integrals]
statement: |
  Verify that

  \[
  \int_{1}^{\infty} e^{-x/2}\,dx=\frac{2}{\sqrt{e}}.
  \]
solution: |
  The antiderivative of \(e^{-x/2}\) is \(-2e^{-x/2}\). For \(R>1\),

  \[
  \begin{aligned}
  \int_{1}^{R} e^{-x/2}\,dx&=\left[-2e^{-x/2}\right]_{1}^{R}\\
  &=-2e^{-R/2}+2e^{-1/2}.
  \end{aligned}
  \]

  As \(R\to\infty\), the term \(e^{-R/2}\) tends to 0. The improper integral equals \(2e^{-1/2}\). That value is \(\frac{2}{\sqrt{e}}\).
provenance: written-for-site
steps:
  - Write the improper integral as a limit.
  - The antiderivative of \(e^{-x/2}\) is \(-2e^{-x/2}\).
  - The limit equals \(2e^{-1/2}\).
verification:
  checks:
    - expr: integrate(exp(-x/2), (x, 1, oo))
      expected: "2*exp(-1/2)"
    - expr: integrate(exp(-x/2), (x, 1, oo)) - 2/sqrt(exp(1))
      expected: "0"
:::

::: exercise
id: l3-probability-densities.handout-9.8.2
number: "9.8.2"
tier: standard
topics: [probability-densities]
statement: |
  Let \(c>0\). Let \(f(x)=0\) for \(x<0\) and \(f(x)=c e^{-cx}\) for \(x\ge 0\). Show that \(f\) is a probability density, and compute its mean and its standard deviation.
solution: |
  For \(c>0\), \(f(x)\ge 0\). For \(R>0\),

  \[
  \int_{0}^{R} c e^{-cx}\,dx=1-e^{-cR},
  \]

  which tends to 1 as \(R\to\infty\). So \(f\) is a density.

  The mean is \(\int_{0}^{\infty} x c e^{-cx}\,dx\). Integrate by parts with \(u=x\) and \(v'=c e^{-cx}\), so \(v=-e^{-cx}\). For \(R>0\),

  \[
  \int_{0}^{R} x c e^{-cx}\,dx=-Re^{-cR}+\frac{1-e^{-cR}}{c}.
  \]

  As \(R\to\infty\), both \(Re^{-cR}\) and \(e^{-cR}\) tend to 0. The mean equals \(\frac{1}{c}\).

  For the second moment, integrate by parts with \(u=x^{2}\). Then

  \[
  \begin{aligned}
  &\int_{0}^{R} x^{2} c e^{-cx}\,dx\\
  &=-R^{2}e^{-cR}\\
  &\quad+\frac{2}{c}\int_{0}^{R} x c e^{-cx}\,dx.
  \end{aligned}
  \]

  The boundary term \(R^{2}e^{-cR}\) tends to 0, and the remaining integral tends to the mean \(\frac{1}{c}\). Therefore \(E(X^{2})=\frac{2}{c^{2}}\). The variance is

  \[
  V(X)=\frac{2}{c^{2}}-\left(\frac{1}{c}\right)^{2}=\frac{1}{c^{2}}.
  \]

  Since \(c>0\), the standard deviation is \(\sigma=\frac{1}{c}\). The mean is \(\frac{1}{c}\). The standard deviation is \(\frac{1}{c}\).
provenance: handout-answer
steps:
  - Check that \(f\ge 0\) and that the integral of \(f\) equals 1.
  - Integrate \(x c e^{-cx}\) by parts to get the mean \(\frac{1}{c}\).
  - The second moment equals \(\frac{2}{c^{2}}\).
  - The variance is \(\frac{1}{c^{2}}\), so the standard deviation is \(\frac{1}{c}\).
verification:
  checks:
    - expr: integrate(c*exp(-c*x), (x, 0, oo)).subs(c, 3)
      expected: "1"
    - expr: integrate(c*exp(-c*x), (x, 0, oo)).args[0][0]
      expected: "1"
    - expr: integrate(x*c*exp(-c*x), (x, 0, oo)).subs(c, 3)
      expected: "1/3"
    - expr: integrate(x*c*exp(-c*x), (x, 0, oo)).args[0][0]
      expected: "1/c"
    - expr: integrate(x**2*c*exp(-c*x), (x, 0, oo)).args[0][0] - (integrate(x*c*exp(-c*x), (x, 0, oo)).args[0][0])**2
      expected: "1/c**2"
    - expr: sqrt(integrate(x**2*c*exp(-c*x), (x, 0, oo)).subs(c, 3) - (integrate(x*c*exp(-c*x), (x, 0, oo)).subs(c, 3))**2)
      expected: "1/3"
:::

::: exercise
id: l3-probability-densities.handout-9.8.3
number: "9.8.3"
tier: standard
topics: [probability-densities]
statement: |
  Let \(a<b\). The uniform density on \([a,b]\) equals \(\frac{1}{b-a}\) on that interval and equals 0 elsewhere. Compute its mean and its standard deviation.
solution: |
  The mean is the integral of \(x f(x)\) from \(a\) to \(b\):

  \[
  \mu=\int_{a}^{b}\frac{x}{b-a}\,dx=\frac{b^{2}-a^{2}}{2(b-a)}=\frac{a+b}{2},
  \]

  because \(b^{2}-a^{2}=(b-a)(a+b)\). The mean is \(\frac{a+b}{2}\).

  The second moment is

  \[
  \begin{aligned}
  E(X^{2})&=\int_{a}^{b}\frac{x^{2}}{b-a}\,dx\\
  &=\frac{b^{3}-a^{3}}{3(b-a)}\\
  &=\frac{a^{2}+ab+b^{2}}{3},
  \end{aligned}
  \]

  because \(b^{3}-a^{3}=(b-a)(a^{2}+ab+b^{2})\). The variance is \(E(X^{2})-\mu^{2}\):

  \[
  \begin{aligned}
  V(X)&=\frac{a^{2}+ab+b^{2}}{3}-\left(\frac{a+b}{2}\right)^{2}\\
  &=\frac{4(a^{2}+ab+b^{2})-3(a+b)^{2}}{12}.
  \end{aligned}
  \]

  The numerator is \(4a^{2}+4ab+4b^{2}-3a^{2}-6ab-3b^{2}=a^{2}-2ab+b^{2}=(b-a)^{2}\). So \(V(X)=\frac{(b-a)^{2}}{12}\). Since \(b>a\),

  \[
  \sigma=\frac{b-a}{\sqrt{12}}=\frac{b-a}{2\sqrt{3}}.
  \]

  The standard deviation is \(\frac{b-a}{2\sqrt{3}}\).
provenance: handout-answer
steps:
  - The mean is \(\frac{a+b}{2}\).
  - The second moment is \(\frac{a^{2}+ab+b^{2}}{3}\).
  - The variance is \(\frac{(b-a)^{2}}{12}\).
  - The standard deviation is \(\frac{b-a}{2\sqrt{3}}\).
verification:
  checks:
    - expr: simplify(integrate(x/(b - a), (x, a, b)))
      expected: "(a + b)/2"
    - expr: simplify(12*(integrate(x**2/(b - a), (x, a, b)) - integrate(x/(b - a), (x, a, b))**2) - (b - a)**2)
      expected: "0"
    - expr: integrate(x/(b - a), (x, a, b)).subs(a, 1).subs(b, 5)
      expected: "3"
    - expr: sqrt(integrate(x**2/(b - a), (x, a, b)) - integrate(x/(b - a), (x, a, b))**2).subs(a, 1).subs(b, 5)
      expected: "(5 - 1)/(2*sqrt(3))"
:::

::: exercise
id: l3-probability-densities.handout-9.8.4
number: "9.8.4"
tier: basic
topics: [probability-densities]
statement: |
  A fair six-sided die shows the integers from 1 to 6, each with probability \(\frac{1}{6}\). Compute the expected value of one roll.
solution: |
  The expected value is the sum of each face times its probability:

  \[
  \begin{aligned}
  E(X)&=\sum_{k=1}^{6} k\cdot\frac{1}{6}\\
  &=\frac{1+2+3+4+5+6}{6}\\
  &=\frac{21}{6}=\frac{7}{2}.
  \end{aligned}
  \]

  The expected value of one roll is \(\frac{7}{2}\).
provenance: handout-answer
steps:
  - Each face has probability \(\frac{1}{6}\).
  - Add \(k/6\) for \(k\) from 1 to 6.
  - The expected value equals \(\frac{7}{2}\).
verification:
  checks:
    - expr: summation(k/6, (k, 1, 6))
      expected: "7/2"
:::

::: exercise
id: l3-probability-densities.handout-9.8.5
number: "9.8.5"
tier: standard
topics: [probability-densities]
statement: |
  Three fair six-sided dice are rolled once each. Compute the expected value of the sum of the three faces.
solution: |
  The faces are integers \(i\), \(j\) and \(k\), each from 1 to 6. There are 216 outcomes, each with probability \(\frac{1}{216}\). The expected sum is

  \[
  E=\frac{1}{216}\sum_{i=1}^{6}\sum_{j=1}^{6}\sum_{k=1}^{6}(i+j+k).
  \]

  The sums of \(i\), of \(j\) and of \(k\) are equal, so the triple sum of \(i+j+k\) is three times the triple sum of \(i\). Each fixed \(i\) occurs for 36 pairs \((j,k)\), and \(\sum_{i=1}^{6} i=21\), so

  \[
  \sum_{i=1}^{6}\sum_{j=1}^{6}\sum_{k=1}^{6} i=36\cdot 21=756.
  \]

  The sum of \(i+j+k\) is \(3\cdot 756=2268\). Then \(E=\frac{2268}{216}\). Since \(216\cdot\frac{21}{2}=2268\), the quotient is \(\frac{21}{2}\). The expected sum is \(\frac{21}{2}\).
provenance: handout-answer
steps:
  - Each of the 216 outcomes has probability \(\frac{1}{216}\).
  - The triple sum of \(i+j+k\) equals \(3\cdot 756=2268\).
  - Dividing by 216 gives \(\frac{21}{2}\).
verification:
  checks:
    - expr: summation(summation(summation((i + j + k)/216, (k, 1, 6)), (j, 1, 6)), (i, 1, 6))
      expected: "21/2"
    - expr: 3*summation(k/6, (k, 1, 6))
      expected: "21/2"
:::

::: exercise
id: l3-probability-densities.handout-9.8.8
number: "9.8.8"
tier: standard
topics: [probability-densities]
statement: |
  Let \(f(x)=x\) for \(-1\le x\le 1\), let \(f(x)=1\) for \(1<x\le 2\), and let \(f(x)=0\) otherwise. Show that \(\int_{-\infty}^{\infty} f(x)\,dx=1\). Is \(f\) a probability density?
solution: |
  On \([-1,1]\) the integrand is \(x\), and

  \[
  \int_{-1}^{1} x\,dx=\left[\frac{x^{2}}{2}\right]_{-1}^{1}=0.
  \]

  On \((1,2]\) the integrand is 1, and that integral equals 1. Elsewhere \(f\) is zero. The integral of \(f\) over the whole line equals 1.

  On \([-1,0)\), \(f(x)=x\). At \(x=-\frac{1}{2}\), the value is \(f\left(-\frac{1}{2}\right)=-\frac{1}{2}\). The integral of \(f\) from \(-1\) to 0 equals \(-\frac{1}{2}\). A probability cannot equal \(-\frac{1}{2}\). So \(f\) is not a density.
provenance: written-for-site
steps:
  - The integral of \(x\) from \(-1\) to 1 equals 0.
  - The integral of 1 from 1 to 2 equals 1, so the full integral equals 1.
  - On \([-1,0)\) the function is negative.
  - So \(f\) is not a density.
verification:
  checks:
    - expr: integrate(x, (x, -1, 1)) + integrate(1, (x, 1, 2))
      expected: "1"
    - expr: integrate(x, (x, -1, 0))
      expected: "-1/2"
    - expr: x.subs(x, -1/2)
      expected: "-1/2"
:::

::: exercise
id: l3-probability-densities.ex-triangular-cdf
tier: standard
topics: [probability-densities]
statement: |
  Let \(f(x) = x\) for \(0 \le x \le 1\), \(f(x) = 2 - x\) for \(1 < x \le 2\), and \(f(x) = 0\) otherwise.

  (a) Show that \(f\) is a probability density.

  (b) Find the distribution function \(F(x) = P(X \le x)\) for \(x\) in \([0, 1]\) and for \(x\) in \([1, 2]\).

  (c) Compute \(P(X > \frac{3}{2})\).

  (d) Compute \(E(X)\) and \(V(X)\).
solution: |
  (a) The function is nonnegative on \([0, 2]\) and zero elsewhere. The integral over the line is
  \[
  \begin{aligned}
  &\int_0^1 x\,dx + \int_1^2 (2 - x)\,dx\\
  &= \frac{1}{2} + \left[2x - \frac{x^2}{2}\right]_1^2\\
  &= \frac{1}{2} + \left(2 - \frac{3}{2}\right) = 1.
  \end{aligned}
  \]
  So \(f\) is a probability density.

  (b) For \(x\) in \([0, 1]\), \(F(x) = \int_0^x t\,dt = \frac{x^2}{2}\). In particular \(F(1) = \frac{1}{2}\).

  For \(x\) in \([1, 2]\), \(F(x)\) is \(F(1)\) plus the integral of the second piece from \(1\) to \(x\):
  \[
  \begin{aligned}
  F(x) &= \frac{1}{2} + \int_1^x (2 - t)\,dt\\
  &= \frac{1}{2} + 2(x - 1) - \frac{x^2 - 1}{2}\\
  &= -\frac{x^2}{2} + 2x - 1.
  \end{aligned}
  \]
  At \(x = 2\) this equals \(-2 + 4 - 1 = 1\), as it must.

  (c) The probability of the complement is \(P(X > \frac{3}{2}) = 1 - F(\frac{3}{2})\). Here \(F(\frac{3}{2}) = -\frac{9}{8} + 3 - 1 = \frac{7}{8}\), so \(P(X > \frac{3}{2}) = \frac{1}{8}\).

  (d) The mean is
  \[
  \begin{aligned}
  E(X) &= \int_0^1 x^2\,dx + \int_1^2 x(2 - x)\,dx\\
  &= \frac{1}{3} + \left[x^2 - \frac{x^3}{3}\right]_1^2\\
  &= \frac{1}{3} + \left(\frac{4}{3} - \frac{2}{3}\right) = 1.
  \end{aligned}
  \]
  The second moment is
  \[
  \begin{aligned}
  E(X^2) &= \int_0^1 x^3\,dx + \int_1^2 x^2(2 - x)\,dx\\
  &= \frac{1}{4} + \left[\frac{2x^3}{3} - \frac{x^4}{4}\right]_1^2\\
  &= \frac{1}{4} + \frac{11}{12} = \frac{7}{6}.
  \end{aligned}
  \]
  The variance is \(V(X) = \frac{7}{6} - 1^2 = \frac{1}{6}\).
provenance: written-for-site
steps:
  - |
    Check \(f \ge 0\) and that the two areas \(\frac{1}{2}\) and \(\frac{1}{2}\) add to \(1\).
  - |
    Integrate each piece, adding \(F(1) = \frac{1}{2}\) on the second piece.
  - |
    Compute \(1 - F(\frac{3}{2}) = \frac{1}{8}\).
  - |
    Compute \(E(X) = 1\) and \(E(X^2) = \frac{7}{6}\), then \(V(X) = \frac{1}{6}\).
verification:
  checks:
    - expr: integrate(x, (x, 0, 1)) + integrate(2 - x, (x, 1, 2))
      expected: 1
    - expr: Rational(1,2) + integrate(2 - t, (t, 1, x))
      expected: -x**2/2 + 2*x - 1
    - expr: (-x**2/2 + 2*x - 1).subs(x, 2)
      expected: 1
    - expr: 1 - (-x**2/2 + 2*x - 1).subs(x, Rational(3,2))
      expected: 1/8
    - expr: integrate(x*x, (x, 0, 1)) + integrate(x*(2 - x), (x, 1, 2))
      expected: 1
    - expr: integrate(x**2*x, (x, 0, 1)) + integrate(x**2*(2 - x), (x, 1, 2))
      expected: 7/6
    - expr: Rational(7,6) - 1
      expected: 1/6
:::

::: exercise
id: l3-probability-densities.ex-rayleigh
tier: exam
topics: [probability-densities, substitution]
statement: |
  Let \(f(x) = x e^{-x^2/2}\) for \(x \ge 0\) and \(f(x) = 0\) for \(x < 0\). You may use \(\int_0^{\infty} e^{-x^2/2}\,dx = \sqrt{\frac{\pi}{2}}\).

  (a) Show that \(f\) is a probability density.

  (b) Compute \(P(X > 2)\).

  (c) Compute \(E(X^2)\) by the substitution \(u = \frac{x^2}{2}\).

  (d) Compute \(E(X)\) and \(V(X)\).
solution: |
  (a) The function is nonnegative. The substitution \(u = \frac{x^2}{2}\) has \(du = x\,dx\), and for \(R > 0\)
  \[
  \begin{aligned}
  \int_0^R x e^{-x^2/2}\,dx &= \int_0^{R^2/2} e^{-u}\,du\\
  &= 1 - e^{-R^2/2}.
  \end{aligned}
  \]
  This tends to \(1\) as \(R \to \infty\), so \(f\) is a density.

  (b) The same antiderivative \(-e^{-x^2/2}\) gives
  \[ P(X > 2) = \lim_{R \to \infty}\left[-e^{-x^2/2}\right]_2^R = e^{-2}. \]

  (c) Write \(x^3 e^{-x^2/2} = x^2 \cdot x e^{-x^2/2}\). With \(u = \frac{x^2}{2}\), one has \(x^2 = 2u\), \(x\,dx = du\), and the limits \(0\) and \(\infty\) stay the same. Then
  \[
  \begin{aligned}
  E(X^2) &= \int_0^{\infty} 2u\,e^{-u}\,du\\
  &= 2\int_0^{\infty} u e^{-u}\,du = 2.
  \end{aligned}
  \]

  (d) The mean is \(E(X) = \int_0^{\infty} x \cdot x e^{-x^2/2}\,dx\). Integrate by parts with the factor \(x\) and the factor \(x e^{-x^2/2}\), whose antiderivative is \(-e^{-x^2/2}\). For \(R > 0\),
  \[
  \begin{aligned}
  &\int_0^R x^2 e^{-x^2/2}\,dx\\
  &= \left[-x e^{-x^2/2}\right]_0^R + \int_0^R e^{-x^2/2}\,dx.
  \end{aligned}
  \]
  The boundary term \(-R e^{-R^2/2}\) tends to \(0\), and the integral tends to \(\sqrt{\frac{\pi}{2}}\). So \(E(X) = \sqrt{\frac{\pi}{2}}\).

  The variance is \(V(X) = E(X^2) - E(X)^2 = 2 - \frac{\pi}{2}\).
provenance: written-for-site
steps:
  - |
    Substitute \(u = \frac{x^2}{2}\) to get \(1 - e^{-R^2/2}\), which tends to \(1\).
  - |
    Evaluate \(-e^{-x^2/2}\) from \(2\) to \(\infty\).
  - |
    Substitute \(u = \frac{x^2}{2}\) in \(x^3 e^{-x^2/2}\) and obtain \(2\int_0^{\infty} u e^{-u}\,du = 2\).
  - |
    Integrate \(x^2 e^{-x^2/2}\) by parts and use the given integral. Then \(V(X) = 2 - \frac{\pi}{2}\).
verification:
  checks:
    - expr: integrate(x*exp(-x**2/2), (x, 0, oo))
      expected: 1
    - expr: integrate(x*exp(-x**2/2), (x, 2, oo))
      expected: exp(-2)
    - expr: integrate(x**3*exp(-x**2/2), (x, 0, oo))
      expected: 2
    - expr: integrate(x**2*exp(-x**2/2), (x, 0, oo))
      expected: sqrt(pi/2)
    - expr: 2 - (sqrt(pi/2))**2
      expected: 2 - pi/2
:::
