---
id: outside-current-course
lecture: 8
order: 99
title: Outside the current course
prerequisites: []
sources:
  - { source: final-2021, page: "1-2" }
  - { source: final-2022, page: "9-13" }
  - { source: mock-2022, page: "1-2" }
examWeight: not-examined
status: draft
hidden: true
---

::: exercise
id: outside-current-course.final-2021-q4
outOfScope: true
tier: exam
topics: [line-integrals]
pastExam:
  year: 2021
  paper: Final
  question: "4"
  points: 1
statement: |
  Use Green's theorem to evaluate \( \displaystyle\int_C -y^3\,dx + x^3\,dy \), where \( C \) is the unit circle.
solution: |
  Write \( P = -y^3 \) and \( Q = x^3 \). Then

  \[
  \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 3x^2 + 3y^2.
  \]

  Green's theorem turns the line integral into the integral of \( 3(x^2 + y^2) \) over the unit disk. In polar coordinates that is

  \[
  \int_0^{2\pi}\int_0^1 3r^2\cdot r\,dr\,d\theta = \frac{3\pi}{2}.
  \]

  The value of the line integral is \( 3\pi/2 \).
provenance: official-key
steps:
  - The curl is \( 3x^2 + 3y^2 \).
  - The polar integral over the unit disk equals \( 3\pi/2 \).
verification:
  checks:
    - expr: "diff(x**3, x) - diff(-y**3, y)"
      expected: "3*x**2 + 3*y**2"
    - expr: "integrate(3*r**2*r, (r, 0, 1), (t, 0, 2*pi))"
      expected: "3*pi/2"
:::

::: exercise
id: outside-current-course.final-2021-q5
outOfScope: true
tier: exam
topics: [line-integrals]
pastExam:
  year: 2021
  paper: Final
  question: "5"
  points: 2
statement: |
  Compute the area of the astroid whose boundary is \( (\cos^3 t, \sin^3 t) \) for \( t \in [0, 2\pi] \). Sketch the astroid.
solution: |
  The curve has cusps at \( (\pm 1, 0) \) and \( (0, \pm 1) \), and bows in between those cusps. With \( x = \cos^3 t \) and \( y = \sin^3 t \),

  \[
  x\,dy - y\,dx = 3\cos^2 t\sin^2 t\,dt.
  \]

  The area is

  \[
  \frac12\int_0^{2\pi} 3\cos^2 t\sin^2 t\,dt
  =\frac{3}{16}\int_0^{2\pi}(1 - \cos 4t)\,dt
  =\frac{3\pi}{8}.
  \]

  The area of the astroid is \( 3\pi/8 \).
provenance: official-key
steps:
  - The sketch has four cusps, at \( (\pm 1, 0) \) and \( (0, \pm 1) \).
  - The area integrand reduces to \( 3\cos^2 t\sin^2 t \).
  - The area is \( 3\pi/8 \).
verification:
  checks:
    - expr: "integrate(cos(t)**3*diff(sin(t)**3, t) - sin(t)**3*diff(cos(t)**3, t), (t, 0, 2*pi))/2"
      expected: "3*pi/8"
:::

::: exercise
id: outside-current-course.final-2021-q6-1
outOfScope: true
tier: exam
topics: [line-integrals]
pastExam:
  year: 2021
  paper: Final
  question: "6.1"
  points: 1
statement: |
  Let \( \vec F(x, y) = (xy^2 + 2y)\,\mathbf{i} + (x^2 y + 2x + 2)\,\mathbf{j} \). Find \( f \) such that \( \nabla f = \vec F \).
solution: |
  Integrate \( xy^2 + 2y \) in \( x \):

  \[
  f(x, y) = \frac12 x^2 y^2 + 2xy + C(y).
  \]

  The \( y \)-derivative is \( x^2 y + 2x + C'(y) \). Matching the second component of \( \vec F \) forces \( C'(y) = 2 \), so \( C(y) = 2y \). A constant may be added.

  One potential is \( f(x, y) = \tfrac12 x^2 y^2 + 2xy + 2y \).
provenance: official-key
steps:
  - Integrating the first component in \( x \) leaves a function of \( y \).
  - That function is \( 2y \).
verification:
  checks:
    - expr: "(diff(Rational(1, 2)*x**2*y**2 + 2*x*y + 2*y, x), diff(Rational(1, 2)*x**2*y**2 + 2*x*y + 2*y, y))"
      expected: "(x*y**2 + 2*y, x**2*y + 2*x + 2)"
:::

::: exercise
id: outside-current-course.final-2021-q6-2
outOfScope: true
tier: exam
topics: [line-integrals]
pastExam:
  year: 2021
  paper: Final
  question: "6.2"
  points: 1
statement: |
  Let \( \vec F(x, y) = (xy^2 + 2y)\,\mathbf{i} + (x^2 y + 2x + 2)\,\mathbf{j} \), with potential \( f(x, y) = \tfrac12 x^2 y^2 + 2xy + 2y \). Evaluate \( \displaystyle\int_C \vec F\cdot d\vec r \) where \( \vec r(t) = (e^t, 1 + t) \) for \( t \in [0, 2\pi] \).
solution: |
  The field is conservative, so the line integral equals \( f \) at the end minus \( f \) at the start. The path runs from \( (1, 1) \) to \( (e^{2\pi}, 1 + 2\pi) \).

  \[
  \begin{aligned}
  f(e^{2\pi}, 1 + 2\pi) - f(1, 1)
  &= \frac12 e^{4\pi}(1 + 2\pi)^2 + 2e^{2\pi}(1 + 2\pi) + 2(1 + 2\pi) - \frac92 \\
  &= \frac12 e^{4\pi}(1 + 2\pi)^2 + 2e^{2\pi}(1 + 2\pi) + 4\pi - \frac12 - 2.
  \end{aligned}
  \]

  The value of the line integral is \( \tfrac12 e^{4\pi}(1 + 2\pi)^2 + 2e^{2\pi}(1 + 2\pi) + 4\pi - \tfrac12 - 2 \).
provenance: official-key
steps:
  - The integral equals the change in the potential.
  - The endpoints are \( (1, 1) \) and \( (e^{2\pi}, 1 + 2\pi) \).
  - The difference matches the value in the key.
verification:
  checks:
    - expr: "(Rational(1, 2)*x**2*y**2 + 2*x*y + 2*y).subs({x: exp(2*pi), y: 1 + 2*pi}) - (Rational(1, 2)*x**2*y**2 + 2*x*y + 2*y).subs({x: 1, y: 1})"
      expected: "Rational(1, 2)*exp(4*pi)*(1 + 2*pi)**2 + 2*exp(2*pi)*(1 + 2*pi) + 4*pi - Rational(1, 2) - 2"
:::

::: exercise
id: outside-current-course.final-2021-q6-3
outOfScope: true
tier: exam
topics: [line-integrals]
pastExam:
  year: 2021
  paper: Final
  question: "6.3"
  points: 1
statement: |
  Let \( \vec F(x, y) = (xy^2 + 2y)\,\mathbf{i} + (x^2 y + 2x + 2)\,\mathbf{j} \). Evaluate \( \displaystyle\int_C \vec F\cdot d\vec r \) where \( C \) is the unit circle.
solution: |
  The curl of \( \vec F \) is \( 0 \), so \( \vec F \) is conservative on the plane. The unit circle is closed. The line integral of a conservative field on a closed curve is \( 0 \).
provenance: official-key
steps:
  - The curl of \( \vec F \) is 0.
  - The unit circle is closed, so the integral is 0.
verification:
  checks:
    - expr: "diff(x**2*y + 2*x + 2, x) - diff(x*y**2 + 2*y, y)"
      expected: "0"
:::

::: exercise
id: outside-current-course.final-2021-q7-2
outOfScope: true
tier: exam
topics: [arc-length]
pastExam:
  year: 2021
  paper: Final
  question: "7.2"
  points: 1
statement: |
  Let \( S \) be the cone \( (z - 1)^2 = x^2 + y^2 \) with \( z \in [0, 1] \), so \( z = 1 - \sqrt{x^2 + y^2} \). For \( a > 0 \) let

  \[
  \bigl(x(t), y(t)\bigr) = \bigl((1 - at)\cos t,\, (1 - at)\sin t\bigr),
  \qquad t \in [0, 1/a],
  \]

  and let \( z(t) = at \), so that the curve lies on \( S \). Let \( A = (1, 0, 0) \) and \( B = (0, 0, 1) \). Compute the length \( L_{AB} \) of this curve from \( A \) to \( B \). The integral can be done with \( \sinh \).
solution: |
  Differentiating the parametrization gives speed squared \( 2a^2 + (1 - at)^2 \). The substitution \( u = 1 - at \) turns the length into

  \[
  L_{AB} = \frac1a\int_0^1 \sqrt{2a^2 + u^2}\,du.
  \]

  The antiderivative of \( \sqrt{2a^2 + u^2} \) is \( \tfrac12 u\sqrt{2a^2 + u^2} + a^2\operatorname{asinh}(u/(a\sqrt{2})) \). Evaluating it yields

  \[
  L_{AB} = a\operatorname{asinh}\Bigl(\frac{1}{a\sqrt{2}}\Bigr) + \frac12\sqrt{2 + \frac{1}{a^2}}.
  \]
provenance: official-key
steps:
  - The speed squared is \( 2a^2 + (1 - at)^2 \).
  - The length integral equals the key's formula in \( \operatorname{asinh} \).
verification:
  checks:
    - expr: "diff((1 - aa*t)*cos(t), t)**2 + diff((1 - aa*t)*sin(t), t)**2 + diff(aa*t, t)**2"
      expected: "2*aa**2 + (1 - aa*t)**2"
    - expr: "(1/aa)*integrate(sqrt(2*aa**2 + u**2), (u, 0, 1))"
      expected: "aa*asinh(1/(aa*sqrt(2))) + sqrt(2 + 1/aa**2)/2"
:::

::: exercise
id: outside-current-course.final-2021-q7-3
outOfScope: true
tier: exam
topics: [arc-length]
pastExam:
  year: 2021
  paper: Final
  question: "7.3"
  points: 1
statement: |
  For \( a > 0 \), the length from \( A = (1, 0, 0) \) to \( B = (0, 0, 1) \) along the curve of the previous part is

  \[
  L(a) = a\operatorname{asinh}\Bigl(\frac{1}{a\sqrt{2}}\Bigr) + \frac12\sqrt{2 + \frac{1}{a^2}}.
  \]

  Which value of \( a \) minimises \( L(a) \)? What is the curve for that value of \( a \)?
solution: |
  The derivative is

  \[
  L'(a) = \operatorname{asinh}\Bigl(\frac{1}{a\sqrt{2}}\Bigr) - \frac{\sqrt{2a^2 + 1}}{2a^2}.
  \]

  With \( u = 1/(a\sqrt{2}) \), the second term equals \( u\sqrt{1 + u^2} \), so \( L'(a) = \operatorname{asinh} u - u\sqrt{1 + u^2} \).

  The comparison \( u\sqrt{1 + u^2} - \operatorname{asinh} u \) has derivative \( 2u^2/\sqrt{1 + u^2} \), which is positive for \( u > 0 \), and the comparison equals 0 at \( u = 0 \). So \( L'(a) < 0 \) for every finite \( a > 0 \). The length decreases as \( a \) grows.

  \[
  \lim_{a \to \infty} L(a) = \sqrt{2},
  \]

  which is the straight-line distance from \( A \) to \( B \). No finite \( a \) attains a minimum. The infimum is the straight generator from \( (1, 0, 0) \) to \( (0, 0, 1) \), recorded by the key as \( a = +\infty \).
provenance: official-key
steps:
  - \( L'(a) \) is negative for every finite \( a > 0 \).
  - The limit of \( L(a) \) is the straight-line length \( \sqrt{2} \).
  - The minimising curve is the generator from \( A \) to \( B \).
verification:
  checks:
    - expr: "diff(Symbol('aa', positive=True)*asinh(1/(Symbol('aa', positive=True)*sqrt(2))) + sqrt(2 + 1/Symbol('aa', positive=True)**2)/2, Symbol('aa', positive=True))"
      expected: "asinh(1/(Symbol('aa', positive=True)*sqrt(2))) - sqrt(2*Symbol('aa', positive=True)**2 + 1)/(2*Symbol('aa', positive=True)**2)"
    - expr: "diff(u*sqrt(1 + u**2) - asinh(u), u)"
      expected: "2*u**2/sqrt(1 + u**2)"
    - expr: "limit(aa*asinh(1/(aa*sqrt(2))) + sqrt(2 + 1/aa**2)/2, aa, oo)"
      expected: "sqrt(2)"
    - expr: "sqrt(1**2 + 1**2)"
      expected: "sqrt(2)"
:::

::: exercise
id: outside-current-course.final-2021-q7-4
outOfScope: true
tier: exam
topics: [arc-length]
pastExam:
  year: 2021
  paper: Final
  question: "7.4"
  points: 1
statement: |
  Keep the length \( L(a) \) of the previous part, and let \( z'(t) = a \). Does \( L(a) + \max(z')^2 \) have a minimum? If the cone is a mountain, what does this minimisation account for?
solution: |
  Here \( \max(z')^2 = a^2 \). Set

  \[
  g(a) = L(a) + a^2
  = a\operatorname{asinh}\Bigl(\frac{1}{a\sqrt{2}}\Bigr) + \frac12\sqrt{2 + \frac{1}{a^2}} + a^2.
  \]

  As \( a \) tends to 0 and as \( a \) tends to infinity, \( g(a) \) tends to infinity. A continuous function on \( a > 0 \) with those limits attains a minimum.

  The verified derivative is

  \[
  g'(a) = 2a + \operatorname{asinh}\Bigl(\frac{1}{a\sqrt{2}}\Bigr) - \frac{\sqrt{2a^2 + 1}}{2a^2}.
  \]

  On the mountain, \( L(a) \) asks for a short route to the top and \( a^2 \) asks for a slope that stays moderate.
provenance: official-key
steps:
  - \( \max(z')^2 = a^2 \).
  - \( g(a) \) tends to infinity at both ends of \( a > 0 \), so a minimum exists.
  - The mountain reading is a short climb whose slope stays moderate.
verification:
  checks:
    - expr: "diff(Symbol('aa', positive=True)*asinh(1/(Symbol('aa', positive=True)*sqrt(2))) + sqrt(2 + 1/Symbol('aa', positive=True)**2)/2 + Symbol('aa', positive=True)**2, Symbol('aa', positive=True))"
      expected: "2*Symbol('aa', positive=True) + asinh(1/(Symbol('aa', positive=True)*sqrt(2))) - sqrt(2*Symbol('aa', positive=True)**2 + 1)/(2*Symbol('aa', positive=True)**2)"
    - expr: "limit(1/(aa*asinh(1/(aa*sqrt(2))) + sqrt(2 + 1/aa**2)/2 + aa**2), aa, oo)"
      expected: "0"
    - expr: "limit(1/(aa*asinh(1/(aa*sqrt(2))) + sqrt(2 + 1/aa**2)/2 + aa**2), aa, 0)"
      expected: "0"
discrepancy: |
  The official key differentiates \( a\operatorname{asinh}(1/(a\sqrt{2})) \) to \( \operatorname{asinh}(1/(a\sqrt{2})) + a/\sqrt{1 + 2a^2} \). The verified derivative of that product is \( \operatorname{asinh}(1/(a\sqrt{2})) - 1/\sqrt{1 + 2a^2} \). The verified derivative of \( g \) is \( 2a + \operatorname{asinh}(1/(a\sqrt{2})) - \sqrt{2a^2 + 1}/(2a^2) \). Since \( g \) tends to infinity at both ends, a minimum exists.
:::

::: exercise
id: outside-current-course.final-2021-q9
outOfScope: true
tier: exam
topics: [line-integrals]
pastExam:
  year: 2021
  paper: Final
  question: "9"
  points: 2
statement: |
  The earth exerts the force \( \vec F = -\vec n/r^2 \), where \( r = \sqrt{x^2 + y^2 + z^2} \) and \( \vec n = (x, y, z)/r \). The work required to escape is \( W = -\displaystyle\int_C \vec F\cdot d\vec r \), for a path from radius \( R_0 \) to radius \( R_1 \).

  1. Compute \( W \) on the vertical path \( x = y = 0 \), \( z = R_0 + t \), for \( t \in [0, R_1 - R_0] \).
  2. Compute \( \nabla(1/r) \). Can another curve from radius \( R_0 \) to radius \( R_1 \) give a smaller work?
solution: |
  On the positive \( z \)-axis, \( \vec F = (0, 0, -1/z^2) \) and \( d\vec r = (0, 0, dz) \). With \( R_1 > R_0 \),

  \[
  \int_C \vec F\cdot d\vec r
  = \int_0^{R_1 - R_0} \frac{-1}{(R_0 + t)^2}\,dt
  = \frac{1}{R_1} - \frac{1}{R_0}.
  \]

  The escape work is the negative of that integral:

  \[
  W = \frac{1}{R_0} - \frac{1}{R_1}.
  \]

  The gradient is \( \nabla(1/r) = -\vec n/r^2 \), which is \( \vec F \). The field is conservative, so every path from radius \( R_0 \) to radius \( R_1 \) has the same work. No other curve gives a smaller value.
provenance: official-key
steps:
  - The vertical integral of the force is \( 1/R_1 - 1/R_0 \).
  - The escape work \( W \) is the negative of that integral.
  - \( \nabla(1/r) = \vec F \), so the work depends only on the endpoints.
verification:
  checks:
    - expr: "integrate(-1/(R0 + t)**2, (t, 0, R1 - R0))"
      expected: "1/R1 - 1/R0"
    - expr: "-integrate(-1/(R0 + t)**2, (t, 0, R1 - R0))"
      expected: "1/R0 - 1/R1"
    - expr: "(diff(1/sqrt(x**2 + y**2 + z**2), x), diff(1/sqrt(x**2 + y**2 + z**2), y), diff(1/sqrt(x**2 + y**2 + z**2), z))"
      expected: "(-x/(x**2 + y**2 + z**2)**(Rational(3, 2)), -y/(x**2 + y**2 + z**2)**(Rational(3, 2)), -z/(x**2 + y**2 + z**2)**(Rational(3, 2)))"
discrepancy: |
  The official key gives \( W = 1/R_0 - 1/R_1 \) after writing the force as \( +\vec n/r^2 \) and writing \( \nabla(1/r) = \vec n/r^2 \). The verified integral of \( \vec F = -\vec n/r^2 \) on the vertical path is \( 1/R_1 - 1/R_0 \). The verified gradient is \( \nabla(1/r) = -\vec n/r^2 \), so the field is conservative. The escape work defined by \( W = -\int_C \vec F\cdot d\vec r \) equals \( 1/R_0 - 1/R_1 \).
:::

::: exercise
id: outside-current-course.final-2021-q10
outOfScope: true
tier: exam
topics: [probability]
pastExam:
  year: 2021
  paper: Final
  question: "10"
  points: 2
statement: |
  Let \( X \) and \( Y \) be independent, with common density

  \[
  f(t, \alpha, \beta) = \frac{t^{\alpha - 1} \beta^{\alpha} e^{-\beta t}}{\Gamma(\alpha)},
  \qquad t \ge 0,
  \]

  where \( \alpha > 0 \), \( \beta > 0 \), and \( \Gamma'(t) = \Gamma(t)\,\psi_0(t) \). For a realisation \( (x, y) \), set \( g(\alpha, \beta) = f(x, \alpha, \beta)\,f(y, \alpha, \beta) \). Find the critical-point equations of \( \log g \), and write them as one equation for \( \alpha \) using the digamma function.
solution: |
  \[
  \log g = (\alpha - 1)\log(xy) + 2\alpha\log\beta - \beta(x + y) - 2\log\Gamma(\alpha).
  \]

  The partial derivatives are

  \[
  \frac{\partial}{\partial\beta}\log g = \frac{2\alpha}{\beta} - (x + y),
  \qquad
  \frac{\partial}{\partial\alpha}\log g = \log(xy) + 2\log\beta - 2\psi_0(\alpha).
  \]

  Setting both to zero gives \( \beta = 2\alpha/(x + y) \) and

  \[
  2\psi_0(\alpha) = 2\log(2\alpha) - 2\log(x + y) + \log(xy).
  \]
provenance: official-key
steps:
  - The logarithm of \( g \) is written out.
  - The two partial derivatives are set to zero.
  - Substituting \( \beta \) produces the digamma equation for \( \alpha \).
verification:
  checks:
    - expr: "diff((al - 1)*log(xd*yd) + 2*al*log(be) - be*(xd + yd) - 2*log(gamma(al)), be)"
      expected: "2*al/be - xd - yd"
    - expr: "diff((al - 1)*log(xd*yd) + 2*al*log(be) - be*(xd + yd) - 2*log(gamma(al)), al)"
      expected: "log(xd*yd) + 2*log(be) - 2*digamma(al)"
    - expr: "diff((al - 1)*log(xd*yd) + 2*al*log(be) - be*(xd + yd) - 2*log(gamma(al)), al).subs(be, 2*al/(xd + yd))"
      expected: "log(xd*yd) + 2*log(2*al/(xd + yd)) - 2*digamma(al)"
:::

::: exercise
id: outside-current-course.final-2022-q7a
outOfScope: true
tier: exam
topics: [probability]
pastExam:
  year: 2022
  paper: Final
  question: "7a"
  points: 1
statement: |
  Let \( X \) and \( Y \) be independent, with densities \( f_X(x) = a e^{-ax} \) and \( f_Y(y) = b e^{-by} \) for \( x \ge 0 \), \( y \ge 0 \), and parameters \( a > 0 \), \( b > 0 \). Compute \( P(X > a \text{ and } Y > b) \).
solution: |
  Independence splits the probability into tails. The tail of an exponential of rate \( a \), taken at the threshold \( a \), is \( e^{-a^2} \). The same computation for \( Y \) gives \( e^{-b^2} \).

  \[
  P(X > a,\, Y > b) = e^{-(a^2 + b^2)}.
  \]
provenance: official-key
steps:
  - Each marginal tail is an exponential integral.
  - Independence multiplies the tails.
verification:
  checks:
    - expr: "integrate(Symbol('a', positive=True)*exp(-Symbol('a', positive=True)*x), (x, Symbol('a', positive=True), oo))*integrate(Symbol('b', positive=True)*exp(-Symbol('b', positive=True)*y), (y, Symbol('b', positive=True), oo))"
      expected: "exp(-(Symbol('a', positive=True)**2 + Symbol('b', positive=True)**2))"
:::

::: exercise
id: outside-current-course.final-2022-q7b
outOfScope: true
tier: exam
topics: [probability]
pastExam:
  year: 2022
  paper: Final
  question: "7b"
  points: 2
statement: |
  Keep the independent exponentials of the previous part. For \( t > 0 \), compute \( P(aX + bY < t) \) using \( u = ax + by \) and \( v = y \). Deduce the density of \( Z = aX + bY \).
solution: |
  The random variables \( aX \) and \( bY \) are independent standard exponentials: each has density \( e^{-s} \) on \( s > 0 \). Their sum \( Z \) therefore has density given by the convolution

  \[
  f_Z(z) = \int_0^z e^{-(z - s)} e^{-s}\,ds = z e^{-z}, \qquad z > 0.
  \]

  The same density is the derivative of the distribution function computed with \( u = ax + by \) and \( v = y \). The Jacobian of that map contributes a factor \( 1/a \), and the joint factor \( ab \) leaves \( b e^{-u} \). Integrating \( v \) from \( 0 \) to \( u/b \) produces \( u e^{-u} \).

  The density of \( aX + bY \) is \( z e^{-z} \) for \( z \ge 0 \).
provenance: official-key
steps:
  - \( aX \) and \( bY \) are independent exponential random variables of rate 1.
  - Their convolution is \( z e^{-z} \).
verification:
  checks:
    - expr: "integrate(exp(-(zz - s))*exp(-s), (s, 0, zz))"
      expected: "zz*exp(-zz)"
:::

::: exercise
id: outside-current-course.final-2022-q7c
outOfScope: true
tier: exam
topics: [probability]
pastExam:
  year: 2022
  paper: Final
  question: "7c"
  points: 2
statement: |
  Keep the independent exponentials of rate \( a \) and \( b \), and assume \( b > a \). Compute \( E[\sqrt{X + Y}] \), using \( u = ax + by \) and \( v = \sqrt{x + y} \). The variance of a normal law may be used as an integral identity.
solution: |
  The sum \( S = X + Y \) has density

  \[
  f_S(s) = \frac{ab}{b - a}\bigl(e^{-as} - e^{-bs}\bigr), \qquad s > 0.
  \]

  Then

  \[
  E[\sqrt{S}] = \frac{ab}{b - a}\int_0^\infty \sqrt{s}\,\bigl(e^{-as} - e^{-bs}\bigr)\,ds.
  \]

  The Gamma integral \( \displaystyle\int_0^\infty s^{1/2} e^{-ps}\,ds = \sqrt{\pi}/(2 p^{3/2}) \) gives

  \[
  E[\sqrt{X + Y}]
  = \frac{ab}{2(b - a)}\left(
  \frac{1}{a}\sqrt{\frac{\pi}{a}} - \frac{1}{b}\sqrt{\frac{\pi}{b}}
  \right).
  \]
provenance: official-key
steps:
  - The density of \( X + Y \) carries the factor \( ab/(b - a) \).
  - Each Gamma integral contributes \( \sqrt{\pi}/(2 p^{3/2}) \).
  - The expectation has the extra factor \( ab \) in front of the key's expression.
verification:
  checks:
    - expr: "integrate(sqrt(s)*Symbol('A', positive=True)*(Symbol('A', positive=True) + Symbol('D', positive=True))/Symbol('D', positive=True)*(exp(-Symbol('A', positive=True)*s) - exp(-(Symbol('A', positive=True) + Symbol('D', positive=True))*s)), (s, 0, oo))"
      expected: "Symbol('A', positive=True)*(Symbol('A', positive=True) + Symbol('D', positive=True))/(2*Symbol('D', positive=True))*(sqrt(pi/Symbol('A', positive=True))/Symbol('A', positive=True) - sqrt(pi/(Symbol('A', positive=True) + Symbol('D', positive=True)))/(Symbol('A', positive=True) + Symbol('D', positive=True)))"
discrepancy: |
  The official key gives \( \dfrac{1}{2(b - a)}\left(\dfrac{1}{a}\sqrt{\dfrac{\pi}{a}} - \dfrac{1}{b}\sqrt{\dfrac{\pi}{b}}\right) \). The verified value is \( \dfrac{ab}{2(b - a)}\left(\dfrac{1}{a}\sqrt{\dfrac{\pi}{a}} - \dfrac{1}{b}\sqrt{\dfrac{\pi}{b}}\right) \).
:::

::: exercise
id: outside-current-course.mock-2022-q6
outOfScope: true
tier: exam
topics: [probability]
pastExam:
  year: 2022
  paper: Mock
  question: "6"
  points: 5
statement: |
  Let \( X \) be a lifetime with density \( f(x, \lambda) = \lambda e^{-\lambda x} \) for \( x \ge 0 \) and \( \lambda > 0 \). Let \( Y \) be an independent copy of \( X \). The joint density is the product of the marginals.

  1. Compute the probability that two independent people both live more than 100 years, in terms of \( \lambda \).
  2. Compute \( P(X + Y > 150) \).
  3. Compute \( P(XY > 802) \).
  4. Compute \( P(X + Y \in [a, b]) \) as \( \displaystyle\int_a^b g(t)\,dt \).
  5. Deduce the density of \( Z = X + Y \).
  6. Compute \( E[Z] \).
  7. Two people lived to 74 and to 87. Which \( \lambda \) maximises the joint density for those data?
solution: |
  The marginal tail is \( P(X > 100) = e^{-100\lambda} \). Independence gives

  \[
  P(X > 100,\, Y > 100) = e^{-200\lambda}.
  \]

  The sum of two independent exponential random variables of rate \( \lambda \) has the Gamma density of shape 2,

  \[
  g(t) = \lambda^2 t e^{-\lambda t}, \qquad t > 0,
  \]

  and \( g(t) = 0 \) for \( t < 0 \). Thus \( P(X + Y \in [a, b]) = \displaystyle\int_a^b g(t)\,dt \), and the density of \( Z = X + Y \) is \( g \). Integrating by parts,

  \[
  P(X + Y > 150) = (1 + 150\lambda)\,e^{-150\lambda}.
  \]

  The mean of this Gamma law is \( E[Z] = 2/\lambda \).

  For the product,

  \[
  P(XY > 802) = \lambda\int_0^\infty \exp\bigl(-\lambda x - 802\lambda/x\bigr)\,dx.
  \]

  The substitution \( x = \sqrt{802}\,e^{u} \) turns the exponent into \( 2\lambda\sqrt{802}\,\cosh u \). The odd part of the resulting integrand integrates to 0, and the even part is the integral representation of the modified Bessel function \( K_1 \). Therefore

  \[
  P(XY > 802) = 2\lambda\sqrt{802}\,K_1\bigl(2\lambda\sqrt{802}\bigr).
  \]

  For the observations 74 and 87 the likelihood is \( \lambda^2 \exp(-\lambda(74 + 87)) = \lambda^2 e^{-161\lambda} \). Its logarithm has derivative \( 2/\lambda - 161 \). The critical point is \( \lambda = 2/161 \), and the second derivative \( -2/\lambda^2 \) shows it is a maximum.
provenance: written-for-site
steps:
  - Both surviving past 100 has probability \( e^{-200\lambda} \).
  - The sum has Gamma density \( \lambda^2 t e^{-\lambda t} \), mean \( 2/\lambda \).
  - The product probability is \( 2\lambda\sqrt{802}\,K_1(2\lambda\sqrt{802}) \).
  - The maximum likelihood estimate for the data 74 and 87 is \( 2/161 \).
verification:
  checks:
    - expr: "integrate(Symbol('lam', positive=True)*exp(-Symbol('lam', positive=True)*x), (x, 100, oo))"
      expected: "exp(-100*Symbol('lam', positive=True))"
    - expr: "integrate(Symbol('lam', positive=True)*exp(-Symbol('lam', positive=True)*x), (x, 100, oo))**2"
      expected: "exp(-200*Symbol('lam', positive=True))"
    - expr: "integrate(Symbol('lam', positive=True)**2*t*exp(-Symbol('lam', positive=True)*t), (t, 0, oo))"
      expected: "1"
    - expr: "integrate(Symbol('lam', positive=True)**2*t*exp(-Symbol('lam', positive=True)*t), (t, 150, oo))"
      expected: "(1 + 150*Symbol('lam', positive=True))*exp(-150*Symbol('lam', positive=True))"
    - expr: "integrate(t*Symbol('lam', positive=True)**2*t*exp(-Symbol('lam', positive=True)*t), (t, 0, oo))"
      expected: "2/Symbol('lam', positive=True)"
    - expr: "solve(diff(2*log(lam) - 161*lam, lam), lam)[0]"
      expected: "2/161"
    - expr: "integrate(Symbol('lam', positive=True)*exp(-Symbol('lam', positive=True)*x - 802*Symbol('lam', positive=True)/x), (x, 0, oo))"
      expected: "meijerg(((0, 1), ()), ((), ()), 1/(802*Symbol('lam', positive=True)**2))"
:::
