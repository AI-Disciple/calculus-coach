---
id: l5-directional-derivative
lecture: 5
order: 6
title: Directional derivatives and the gradient
prerequisites: [l5-partial-derivatives]
sources:
  - { source: handout, section: "14.5", page: 366 }
  - { source: handout, section: "14.5", page: 367 }
  - { source: lecture-notes-5, page: 2 }
  - { source: sheet-2, page: 2 }
examWeight: medium
status: reviewed
notation: |
  \(f_x\), \(\frac{df}{dx}\), \(d_x f\) and the handout form \(\frac{\partial f}{\partial x}\) are the same symbol, the partial derivative of \(f\) in \(x\). The symbols \(f_y\), \(\frac{df}{dy}\), \(d_y f\) and \(\frac{\partial f}{\partial y}\) are the same symbol for the partial derivative in \(y\). The lecture writes the directional derivative as \(df(x,y;\vec{u})\). The handout's curly partial and \(D_{\mathbf{u}} f\) match these symbols: the curly partial matches \(f_x\), and \(D_{\mathbf{u}} f\) matches \(df(x,y;\vec{u})\). The handout's \(D_{\mathbf{u}} f\) uses a unit vector.
---

::: section
title: Directional derivative from the partials
:::

::: formal-statement
kind: definition
title: Directional derivative
source:
  source: lecture-notes-5
  page: 2
text: |
  The **directional derivative** of \(f\) in the direction \(\vec{u}=(a,b)\) is
  \[
  df(x,y;\vec{u})=\lim_{\varepsilon\to 0}\frac{f\big((x,y)+\varepsilon\vec{u}\big)-f(x,y)}{\varepsilon}.
  \]
:::

::: plain-explanation
text: |
  The point \((x,y)+\varepsilon\vec{u}\) leaves \((x,y)\) by the step \(\varepsilon a\) in \(x\) and the step \(\varepsilon b\) in \(y\). The limit is the ordinary derivative of the height along that straight line, taken at \(\varepsilon=0\). The parameter \(\varepsilon\) measures distance along the line when the length of \(\vec{u}\) is \(1\).
:::

::: formal-statement
kind: theorem
title: Directional derivative from the partials
source:
  source: lecture-notes-5
  page: 2
text: |
  For \(\vec{u}=(a,b)\),
  \[
  df(x,y;\vec{u})=a\cdot\frac{df}{dx}(x,y)+b\cdot\frac{df}{dy}(x,y).
  \]
:::

::: plain-explanation
text: |
  The formula is written for the vector \(\vec{u}=(a,b)\) from the definition. It multiplies the partial derivative in \(x\) by \(a\) and the partial derivative in \(y\) by \(b\). For the two coordinate directions:

  - Along \(\vec{e}_x=(1,0)\) the right-hand side is the partial derivative in \(x\).
  - Along \(\vec{e}_y=(0,1)\) it is the partial derivative in \(y\).
:::

::: key-points
text: |
  - The directional derivative \(df(x,y;\vec{u})\) is the ordinary derivative of the height along the line \((x,y)+\varepsilon\vec{u}\), taken at \(\varepsilon=0\). The parameter \(\varepsilon\) measures distance along the line when \(\vec{u}\) has length \(1\).
  - For \(\vec{u}=(a,b)\), the value is \(df(x,y;\vec{u})=a f_x+b f_y\). The first component multiplies the partial derivative in \(x\), and the second component multiplies the partial derivative in \(y\).
  - Along \(\vec{e}_x=(1,0)\) the value is \(f_x\), and along \(\vec{e}_y=(0,1)\) it is \(f_y\).
:::

::: concept-question
id: l5-directional-derivative.q-65df389e
question: |
  For \(\vec{u}=(a,b)\), which expression equals the lecture's \(df(x,y;\vec{u})\)?
options:
  - text: |
      \(a f_x+b f_y\).
    correct: true
  - text: |
      \(a f_y+b f_x\).
  - text: |
      \(f_x+f_y\).
explanation: |
  The lecture theorem multiplies the partial derivative in \(x\) by the first component \(a\), and the partial derivative in \(y\) by the second component \(b\).
:::

::: concept-question
id: l5-directional-derivative.q-e4ff49be
question: |
  Along the unit vector \(\vec{e}_x=(1,0)\), what does \(df(x,y;\vec{e}_x)\) equal?
options:
  - text: |
      The partial derivative in \(x\).
    correct: true
  - text: |
      The partial derivative in \(y\).
  - text: |
      The sum of the two partial derivatives.
explanation: |
  The theorem with \((a,b)=(1,0)\) returns \(1\cdot f_x+0\cdot f_y\), which is the partial derivative in \(x\).
:::

::: section
title: Gradient and slope per unit distance
:::

::: formal-statement
kind: definition
title: Gradient
source:
  source: lecture-notes-5
  page: 2
text: |
  The **gradient** of \(f\) is the column
  \[
  \nabla f(x,y)=\begin{pmatrix} d_x f(x,y) \\ d_y f(x,y) \end{pmatrix}.
  \]
:::

::: plain-explanation
text: |
  The two entries are the partial derivatives already named \(d_x f\) and \(d_y f\). The handout writes the same vector as the row \(\langle f_x, f_y\rangle\). The scalar product with a direction vector is the same number for the column and for the row.
:::

::: formal-statement
kind: theorem
title: Directional derivative as a scalar product
source:
  source: lecture-notes-5
  page: 2
text: |
  \[
  df(x,y;\vec{u})=\nabla f(x,y)\cdot\vec{u}.
  \]
  The centre dot is the scalar product in \(\mathbb{R}^2\).
:::

::: plain-explanation
text: |
  Expanding the scalar product recovers \(a\, d_x f+b\, d_y f\). The directional derivative is that scalar. The gradient is the column that was dotted with \(\vec{u}\).
:::

::: formal-statement
kind: method
title: Slope per unit distance
source:
  source: handout
  section: "14.5"
  page: 367
text: |
  The handout's directional derivative \(D_{\mathbf{u}} f\) is the **slope of the graph per unit distance**. The direction \(\mathbf{u}\) in that symbol is a unit vector, and
  \[
  D_{\mathbf{u}} f=\nabla f\cdot\mathbf{u}.
  \]
  If a direction is given by a vector \(\mathbf{v}\) of length \(|\mathbf{v}|\), the unit vector is \(\mathbf{v}/|\mathbf{v}|\), and the slope per unit distance is
  \[
  \nabla f\cdot(\mathbf{v}/|\mathbf{v}|).
  \]
:::

::: plain-explanation
text: |
  The lecture formula \(df(x,y;\vec{u})\) is written for the vector \(\vec{u}\) that is used in the limit. There are two cases:

  - When that vector is a unit vector, \(df(x,y;\vec{u})\) equals the handout's \(D_{\mathbf{u}} f\), and the value is a slope per unit distance.
  - When the given vector \(\mathbf{v}\) has some other length, divide \(\mathbf{v}\) by \(|\mathbf{v}|\) before the scalar product.

  The quotient \(\nabla f\cdot\mathbf{v}\) is the derivative along the parametrization \((x,y)+t\mathbf{v}\). At \(t=1\) the point has moved a distance \(|\mathbf{v}|\).
:::

::: visual
kind: gradient
caption: |
  The arrow is the gradient of \(f=x^2+y^2\) at the point \((x,y)\). The angle picks a direction through that point. The value attached to the direction is the directional derivative.
params:
  x: 1
  y: 1
  angle: 0
:::

::: worked-example
title: Example 14.5.1
problem: |
  Find the slope of \(z=x^2+y^2\) at \((1,2)\) in the direction of \(\langle 3,4\rangle\).
solution: |
  The partial derivative in \(x\) is \(2x\), so its value at \((1,2)\) is \(2\). The partial derivative in \(y\) is \(2y\), so its value at \((1,2)\) is \(4\). The gradient column at the point is
  \[
  \begin{pmatrix}2\\ 4\end{pmatrix}.
  \]

  The length of \(\langle 3,4\rangle\) is \(5\), and the unit vector in that direction is \(\langle 3/5,\, 4/5\rangle\). The slope per unit distance is the scalar product
  \[
  \begin{aligned}
  \text{slope}&=2\cdot\frac{3}{5}+4\cdot\frac{4}{5}\\
  &=\frac{6}{5}+\frac{16}{5}=\frac{22}{5}.
  \end{aligned}
  \]
  The slope is \(\dfrac{22}{5}\).
:::

::: guided-example
title: Slope of a product
problem: |
  Find the slope per unit distance of \(f(x,y)=xy\) at \((2,3)\) in the direction of \(\langle 1,1\rangle\).
steps:
  - The partial derivative in \(x\) is \(y\), so \(f_x(2,3)=3\). The partial derivative in \(y\) is \(x\), so \(f_y(2,3)=2\). The gradient column at the point is \(\begin{pmatrix}3\\ 2\end{pmatrix}\).
  - The length of \(\langle 1,1\rangle\) is \(\sqrt{2}\). The unit vector is \(\left\langle \dfrac{1}{\sqrt{2}},\, \dfrac{1}{\sqrt{2}}\right\rangle\).
  - |
    The slope per unit distance is
    \[
    \dfrac{3}{\sqrt{2}}+\dfrac{2}{\sqrt{2}}=\dfrac{5}{\sqrt{2}}=\dfrac{5\sqrt{2}}{2}.
    \]
:::

::: trap
text: |
  The slope per unit distance uses a **unit vector**. Forgetting to divide by the length produces the wrong rate. Take \(f(x,y)=x^2+xy+y^2\) at \((1,1)\) in the direction of \(\mathbf{v}=\langle 2,1\rangle\).
  \[
  \begin{aligned}
  f_x&=2x+y=3,\\
  f_y&=x+2y=3.
  \end{aligned}
  \]
  The dot product with \(\mathbf{v}\), before dividing by its length, is
  \[
  \nabla f\cdot\langle 2,1\rangle=3\cdot 2+3\cdot 1=9.
  \]
  \[
  \begin{aligned}
  \lvert\mathbf{v}\rvert&=\sqrt{5},\\
  \text{unit vector}&=\langle 2/\sqrt{5},\, 1/\sqrt{5}\rangle.
  \end{aligned}
  \]
  The directional derivative per unit distance is \(9/\sqrt{5}\), which equals \(9\sqrt{5}/5\).

  The number \(9\) is \(df\bigl((1,1);\langle 2,1\rangle\bigr)\). It is the derivative along the line \((1,1)+t\langle 2,1\rangle\). At \(t=1\) that line has moved a distance \(\sqrt{5}\), and the height has changed by \(9\) to first order. A move of length \(1\) then changes the height by \(9/\sqrt{5}\). Using \(9\) as the slope per unit distance is the wrong rate.
:::

::: key-points
text: |
  - The gradient is the column \(\nabla f(x,y)=\begin{pmatrix} d_x f(x,y)\\ d_y f(x,y)\end{pmatrix}\), and \(df(x,y;\vec{u})=\nabla f(x,y)\cdot\vec{u}\). The scalar product is the same number for the column and for the row \(\langle f_x, f_y\rangle\).
  - The symbol \(D_{\mathbf{u}} f=\nabla f\cdot\mathbf{u}\) takes a unit vector \(\mathbf{u}\), and its value is the slope of the graph per unit distance.
  - For a direction given by a vector \(\mathbf{v}\), the slope per unit distance is \(\nabla f\cdot(\mathbf{v}/|\mathbf{v}|)\). The number \(\nabla f\cdot\mathbf{v}\) is the derivative along the parametrization \((x,y)+t\mathbf{v}\).
  - The usual slip uses the raw scalar product \(\nabla f\cdot\mathbf{v}\) as the slope per unit distance. For \(f=x^2+xy+y^2\) at \((1,1)\) in the direction of \(\langle 2,1\rangle\) that number is \(9\), and the slope per unit distance is \(9/\sqrt{5}=9\sqrt{5}/5\).
:::

::: concept-question
id: l5-directional-derivative.q-94778fdb
question: |
  The slope per unit distance of a function is required in the direction of \(\mathbf{v}=\langle 2,1\rangle\). Which vector is dotted with the gradient?
options:
  - text: |
      The unit vector \(\langle 2,1\rangle/\sqrt{5}\).
    correct: true
  - text: |
      The vector \(\langle 2,1\rangle\).
  - text: |
      The vector \(\sqrt{5}\,\langle 2,1\rangle\).
explanation: |
  The slope per unit distance uses a unit vector. The length of \(\langle 2,1\rangle\) is \(\sqrt{5}\), so the unit vector is \(\langle 2,1\rangle/\sqrt{5}\). The scalar product with \(\langle 2,1\rangle\) itself is the lecture derivative along that vector.
:::

::: exercise
id: l5-directional-derivative.handout-14-5-1
number: "14.5.1"
tier: basic
topics:
  - directional-derivative
  - gradients
statement: |
  Find \(D_{\mathbf{u}} f\) for \(f(x,y)=x^2+xy+y^2\) in the direction of \(\mathbf{v}=\langle 2,1\rangle\) at the point \((1,1)\).
solution: |
  The partial derivative in \(x\) is \(2x+y\), so \(f_x(1,1)=3\). The partial derivative in \(y\) is \(x+2y\), so \(f_y(1,1)=3\). The gradient column at the point is \(\begin{pmatrix}3\\ 3\end{pmatrix}\).

  The length of \(\mathbf{v}=\langle 2,1\rangle\) is \(\sqrt{5}\). The unit vector is \(\langle 2/\sqrt{5},\, 1/\sqrt{5}\rangle\). The handout's \(D_{\mathbf{u}} f\) uses that unit vector, so
  \[
  \begin{aligned}
  D_{\mathbf{u}} f(1,1)&=3\cdot\frac{2}{\sqrt{5}}+3\cdot\frac{1}{\sqrt{5}}\\
  &=\frac{9}{\sqrt{5}}=\frac{9\sqrt{5}}{5}.
  \end{aligned}
  \]
  The raw scalar product with \(\langle 2,1\rangle\) equals \(9\). That number is \(df\bigl((1,1);\langle 2,1\rangle\bigr)\). The slope per unit distance is \(\dfrac{9\sqrt{5}}{5}\).
provenance: handout-answer
steps:
  - The gradient at \((1,1)\) is the column \((3,3)\).
  - The unit vector in the direction of \(\langle 2,1\rangle\) is \(\langle 2,1\rangle/\sqrt{5}\).
  - The slope per unit distance is \(9\sqrt{5}/5\).
verification:
  checks:
    - expr: '(diff(x**2 + x*y + y**2, x).subs({x: 1, y: 1}), diff(x**2 + x*y + y**2, y).subs({x: 1, y: 1}))'
      expected: "(3, 3)"
    - expr: 'diff(x**2 + x*y + y**2, x).subs({x: 1, y: 1})*2 + diff(x**2 + x*y + y**2, y).subs({x: 1, y: 1})*1'
      expected: "9"
    - expr: '(diff(x**2 + x*y + y**2, x).subs({x: 1, y: 1})*2 + diff(x**2 + x*y + y**2, y).subs({x: 1, y: 1})*1)/sqrt(5) - 9*sqrt(5)/5'
      expected: "0"
:::

::: exercise
id: l5-directional-derivative.handout-14-5-2
number: "14.5.2"
tier: basic
topics:
  - directional-derivative
statement: |
  Find \(D_{\mathbf{u}} f\) for \(f(x,y)=\sin(xy)\) in the direction of \(\mathbf{v}=\langle -1,1\rangle\) at the point \((3,1)\).
solution: |
  The partial derivative in \(x\) is \(y\cos(xy)\), so \(f_x(3,1)=\cos 3\). The partial derivative in \(y\) is \(x\cos(xy)\), so \(f_y(3,1)=3\cos 3\). The gradient column at the point is \(\begin{pmatrix}\cos 3\\ 3\cos 3\end{pmatrix}\).

  The length of \(\langle -1,1\rangle\) is \(\sqrt{2}\). The unit vector is \(\langle -1/\sqrt{2},\, 1/\sqrt{2}\rangle\). Then
  \[
  \begin{aligned}
  D_{\mathbf{u}} f(3,1)&=\cos 3\cdot\left(-\frac{1}{\sqrt{2}}\right)\\
  &\quad+3\cos 3\cdot\frac{1}{\sqrt{2}}\\
  &=\sqrt{2}\,\cos 3.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The gradient at \((3,1)\) is \((\cos 3,\, 3\cos 3)\).
  - Divide \(\langle -1,1\rangle\) by \(\sqrt{2}\).
  - The scalar product equals \(\sqrt{2}\cos 3\).
verification:
  checks:
    - expr: '(diff(sin(x*y), x).subs({x: 3, y: 1}), diff(sin(x*y), y).subs({x: 3, y: 1}))'
      expected: "(cos(3), 3*cos(3))"
    - expr: '(diff(sin(x*y), x).subs({x: 3, y: 1})*(-1) + diff(sin(x*y), y).subs({x: 3, y: 1})*1)/sqrt(2)'
      expected: "sqrt(2)*cos(3)"
:::

::: exercise
id: l5-directional-derivative.handout-14-5-3
number: "14.5.3"
tier: standard
topics:
  - directional-derivative
statement: |
  Find \(D_{\mathbf{u}} f\) for \(f(x,y)=e^x\cos y\) in the direction \(30^\circ\) from the positive \(x\)-axis, at the point \((1,\pi/4)\).
solution: |
  The partial derivative in \(x\) is \(e^x\cos y\). At \((1,\pi/4)\) it equals \(e\cos(\pi/4)=e\sqrt{2}/2\). The partial derivative in \(y\) is \(-e^x\sin y\). At the point it equals \(-e\sqrt{2}/2\).

  An angle of \(30^\circ\) from the positive \(x\)-axis gives the unit vector \(\langle \sqrt{3}/2,\, 1/2\rangle\). The directional derivative is
  \[
  \begin{aligned}
  &\frac{e\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2}+\left(-\frac{e\sqrt{2}}{2}\right)\cdot\frac{1}{2}\\
  &=\frac{e\sqrt{2}\,(\sqrt{3}-1)}{4}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The gradient at \((1,\pi/4)\) is \(\bigl(e\sqrt{2}/2,\, -e\sqrt{2}/2\bigr)\).
  - The unit vector at \(30^\circ\) is \(\langle \sqrt{3}/2,\, 1/2\rangle\).
  - The scalar product equals \(e\sqrt{2}(\sqrt{3}-1)/4\).
verification:
  checks:
    - expr: '(diff(exp(x)*cos(y), x).subs({x: 1, y: pi/4}), diff(exp(x)*cos(y), y).subs({x: 1, y: pi/4}))'
      expected: "(exp(1)*sqrt(2)/2, -exp(1)*sqrt(2)/2)"
    - expr: 'diff(exp(x)*cos(y), x).subs({x: 1, y: pi/4})*cos(pi/6) + diff(exp(x)*cos(y), y).subs({x: 1, y: pi/4})*sin(pi/6)'
      expected: "exp(1)*sqrt(2)*(sqrt(3)-1)/4"
:::

::: exercise
id: l5-directional-derivative.handout-14-5-4
number: "14.5.4"
tier: standard
topics:
  - directional-derivative
statement: |
  The temperature of a thin plate in the \(xy\)-plane is \(T=x^2+y^2\). How fast does the temperature change at \((1,5)\) when the point moves in a direction \(30^\circ\) from the positive \(x\)-axis?
solution: |
  The partial derivative in \(x\) is \(2x\), so \(T_x(1,5)=2\). The partial derivative in \(y\) is \(2y\), so \(T_y(1,5)=10\). The gradient column is \(\begin{pmatrix}2\\ 10\end{pmatrix}\).

  The direction \(30^\circ\) from the positive \(x\)-axis has unit vector \(\langle \sqrt{3}/2,\, 1/2\rangle\). The rate of change of temperature is
  \[
  2\cdot\frac{\sqrt{3}}{2}+10\cdot\frac{1}{2}=\sqrt{3}+5.
  \]
provenance: handout-answer
steps:
  - The gradient at \((1,5)\) is \((2,10)\).
  - The unit vector at \(30^\circ\) is \(\langle \sqrt{3}/2,\, 1/2\rangle\).
  - The rate is \(\sqrt{3}+5\).
verification:
  checks:
    - expr: 'diff(x**2 + y**2, x).subs({x: 1, y: 5})*cos(pi/6) + diff(x**2 + y**2, y).subs({x: 1, y: 5})*sin(pi/6)'
      expected: "sqrt(3)+5"
:::

::: exercise
id: l5-directional-derivative.handout-14-5-5
number: "14.5.5"
tier: standard
topics:
  - directional-derivative
statement: |
  The density of a thin plate at \((x,y)\) is \(1/\sqrt{x^2+y^2+1}\). Find the rate of change of the density at \((2,1)\) in the direction \(\pi/3\) radians from the positive \(x\)-axis.
solution: |
  Write \(\rho=(x^2+y^2+1)^{-1/2}\). The partial derivative in \(x\) is \(\rho_x=-x(x^2+y^2+1)^{-3/2}\), and the partial derivative in \(y\) is \(\rho_y=-y(x^2+y^2+1)^{-3/2}\).

  At \((2,1)\) the quantity \(x^2+y^2+1\) equals \(6\), so \(\rho_x=-2\cdot 6^{-3/2}\) and \(\rho_y=-6^{-3/2}\). The direction \(\pi/3\) has unit vector \(\langle 1/2,\, \sqrt{3}/2\rangle\). The rate is
  \[
  \begin{aligned}
  &-2\cdot 6^{-3/2}\cdot\frac{1}{2}\\
  &\quad+\bigl(-6^{-3/2}\bigr)\cdot\frac{\sqrt{3}}{2}\\
  &=-6^{-3/2}\left(1+\frac{\sqrt{3}}{2}\right).
  \end{aligned}
  \]
  Since \(6^{3/2}=6\sqrt{6}\), this equals
  \[
  -\frac{2+\sqrt{3}}{12\sqrt{6}}=-\frac{\sqrt{6}\,(2+\sqrt{3})}{72}.
  \]
provenance: handout-answer
steps:
  - The partial derivatives are \(-x(x^2+y^2+1)^{-3/2}\) and \(-y(x^2+y^2+1)^{-3/2}\).
  - At \((2,1)\) they equal \(-2\cdot 6^{-3/2}\) and \(-6^{-3/2}\).
  - The scalar product with \(\langle 1/2,\, \sqrt{3}/2\rangle\) equals \(-\sqrt{6}(2+\sqrt{3})/72\).
verification:
  checks:
    - expr: '(diff(1/sqrt(x**2+y**2+1), x).subs({x: 2, y: 1}), diff(1/sqrt(x**2+y**2+1), y).subs({x: 2, y: 1}))'
      expected: "(-2*6**(-Rational(3,2)), -6**(-Rational(3,2)))"
    - expr: 'diff(1/sqrt(x**2+y**2+1), x).subs({x: 2, y: 1})*cos(pi/3) + diff(1/sqrt(x**2+y**2+1), y).subs({x: 2, y: 1})*sin(pi/3)'
      expected: "-sqrt(6)*(2+sqrt(3))/72"
:::

::: exercise
id: l5-directional-derivative.handout-14-5-6
number: "14.5.6"
tier: standard
topics:
  - directional-derivative
statement: |
  The electric potential at \((x,y)\) is \(\ln\sqrt{x^2+y^2}\). Find the rate of change of the potential at \((3,4)\) toward the origin, and also in a direction at a right angle to the direction toward the origin.
solution: |
  The potential equals \(\frac{1}{2}\ln(x^2+y^2)\). The partial derivative in \(x\) is \(x/(x^2+y^2)\), and the partial derivative in \(y\) is \(y/(x^2+y^2)\). At \((3,4)\) the denominator is \(25\), so the gradient column is \(\begin{pmatrix}3/25\\ 4/25\end{pmatrix}\).

  The vector from \((3,4)\) to the origin is \(\langle -3,-4\rangle\), and its length is \(5\). The unit vector toward the origin is \(\langle -3/5,\, -4/5\rangle\). The rate toward the origin is
  \[
  \frac{3}{25}\cdot\left(-\frac{3}{5}\right)+\frac{4}{25}\cdot\left(-\frac{4}{5}\right)=-\frac{1}{5}.
  \]
  One unit vector at a right angle to \(\langle -3,-4\rangle\) is \(\langle 4/5,\, -3/5\rangle\). The rate in that direction is
  \[
  \frac{3}{25}\cdot\frac{4}{5}+\frac{4}{25}\cdot\left(-\frac{3}{5}\right)=0.
  \]
  The two rates are \(-\dfrac{1}{5}\) and \(0\).
provenance: handout-answer
steps:
  - The gradient at \((3,4)\) is \((3/25,\, 4/25)\).
  - The unit vector toward the origin is \(\langle -3/5,\, -4/5\rangle\), and the rate is \(-1/5\).
  - A perpendicular unit vector is \(\langle 4/5,\, -3/5\rangle\), and the rate is \(0\).
verification:
  checks:
    - expr: '(diff(log(sqrt(x**2+y**2)), x).subs({x: 3, y: 4}), diff(log(sqrt(x**2+y**2)), y).subs({x: 3, y: 4}))'
      expected: "(Rational(3, 25), Rational(4, 25))"
    - expr: 'diff(log(sqrt(x**2+y**2)), x).subs({x: 3, y: 4})*(-3)/5 + diff(log(sqrt(x**2+y**2)), y).subs({x: 3, y: 4})*(-4)/5'
      expected: "-Rational(1, 5)"
    - expr: 'diff(log(sqrt(x**2+y**2)), x).subs({x: 3, y: 4})*(4)/5 + diff(log(sqrt(x**2+y**2)), y).subs({x: 3, y: 4})*(-3)/5'
      expected: "0"
:::

::: exercise
id: l5-directional-derivative.handout-14-5-16
number: "14.5.16"
tier: exam
topics:
  - directional-derivative
statement: |
  Find the directions in which the directional derivative of \(f(x,y)=x^2+\sin(xy)\) at the point \((1,0)\) has the value \(1\).
solution: |
  The partial derivative in \(x\) is \(2x+y\cos(xy)\), so \(f_x(1,0)=2\). The partial derivative in \(y\) is \(x\cos(xy)\), so \(f_y(1,0)=1\). The gradient column at the point is \(\begin{pmatrix}2\\ 1\end{pmatrix}\).

  A unit direction \(\langle a,b\rangle\) satisfies two conditions:

  - \(a^2+b^2=1\),
  - \(2a+b=1\).

  Then \(b=1-2a\), and
  \[
  a^2+(1-2a)^2=1.
  \]
  Expanding gives \(5a^2-4a=0\), so \(a=0\) or \(a=4/5\). The matching second components are \(b=1\) and \(b=-3/5\).

  The two directions are \(\langle 0,1\rangle\) and \(\langle 4/5,\, -3/5\rangle\).
provenance: handout-answer
steps:
  - The gradient at \((1,0)\) is \((2,1)\).
  - The unit-circle equation \(2a+b=1\) has the solutions \((a,b)=(0,1)\) and \((4/5,-3/5)\).
  - Both vectors are unit vectors, and both scalar products equal \(1\).
verification:
  checks:
    - expr: '(diff(x**2 + sin(x*y), x).subs({x: 1, y: 0}), diff(x**2 + sin(x*y), y).subs({x: 1, y: 0}))'
      expected: "(2, 1)"
    - expr: '2*0 + 1*1'
      expected: "1"
    - expr: '2*Rational(4, 5) + 1*Rational(-3, 5)'
      expected: "1"
    - expr: '0**2 + 1**2'
      expected: "1"
    - expr: 'Rational(4, 5)**2 + Rational(-3, 5)**2'
      expected: "1"
:::

::: exercise
id: l5-directional-derivative.handout-14-5-21
number: "14.5.21"
tier: exam
topics:
  - gradients
statement: |
  The gradient is a vector-valued function of two variables. Let \(f\) and \(g\) be differentiable functions of \(x\) and \(y\), and let \(n\) be a constant. Prove
  \[
  \nabla(fg)=f\nabla g+g\nabla f,
  \]
  \[
  \nabla\left(\frac{f}{g}\right)=\frac{g\nabla f-f\nabla g}{g^2},
  \]
  \[
  \nabla(f^n)=n f^{n-1}\nabla f.
  \]
solution: |
  The gradient is the column of partial derivatives.

  For the product, the partial derivative of \(fg\) in \(x\) equals \(f\) times the partial derivative of \(g\) in \(x\), plus \(g\) times the partial derivative of \(f\) in \(x\). The same identity holds with \(y\) in place of \(x\). Those two partials are the entries of the column \(f\nabla g+g\nabla f\). Therefore \(\nabla(fg)=f\nabla g+g\nabla f\).

  For the quotient, the partial derivative of \(f/g\) in \(x\) equals \((g f_x-f g_x)/g^2\). The same identity holds for \(y\). Those two partials are the entries of the column \((g\nabla f-f\nabla g)/g^2\).

  For the power, the partial derivative of \(f^n\) in \(x\) equals \(n f^{n-1} f_x\). The same identity holds for \(y\). Those two partials are the entries of the column \(n f^{n-1}\nabla f\).
provenance: written-for-site
steps:
  - Apply the one-variable product rule to each partial of \(fg\).
  - Apply the one-variable quotient rule to each partial of \(f/g\).
  - Apply the one-variable power rule to each partial of \(f^n\).
verification:
  checks:
    - expr: 'diff(f(x, y)*g(x, y), x) - (f(x, y)*diff(g(x, y), x) + g(x, y)*diff(f(x, y), x))'
      expected: "0"
    - expr: 'diff(f(x, y)*g(x, y), y) - (f(x, y)*diff(g(x, y), y) + g(x, y)*diff(f(x, y), y))'
      expected: "0"
    - expr: 'diff(f(x, y)/g(x, y), x) - (g(x, y)*diff(f(x, y), x) - f(x, y)*diff(g(x, y), x))/g(x, y)**2'
      expected: "0"
    - expr: 'diff(f(x, y)/g(x, y), y) - (g(x, y)*diff(f(x, y), y) - f(x, y)*diff(g(x, y), y))/g(x, y)**2'
      expected: "0"
    - expr: 'diff(f(x, y)**n, x) - n*f(x, y)**(n-1)*diff(f(x, y), x)'
      expected: "0"
    - expr: 'diff(f(x, y)**n, y) - n*f(x, y)**(n-1)*diff(f(x, y), y)'
      expected: "0"
:::

::: exercise
id: l5-directional-derivative.sheet-2-5-1
number: "sheet 2 exercise 5.1"
tier: standard
topics:
  - directional-derivative
  - steepest-ascent
statement: |
  For \(f(x,y)=x^2+xy+y^2\), compute the directional derivative in a general unit direction, and find the direction of steepest slope.
solution: |
  The partial derivative in \(x\) is \(2x+y\). The partial derivative in \(y\) is \(x+2y\). The gradient is the column
  \[
  \nabla f(x,y)=\begin{pmatrix} 2x+y \\ x+2y \end{pmatrix}.
  \]
  Let \((a,b)\) be a unit direction, so \(a^2+b^2=1\). The directional derivative in that direction is
  \[
  \begin{aligned}
  df(x,y;(a,b))&=a(2x+y)\\
  &\quad+b(x+2y).
  \end{aligned}
  \]
  The direction of steepest slope is the direction of the gradient.

  - The gradient column is the zero column at the origin, and there the directional derivative is \(0\) for every unit direction.
  - At every other point the gradient column itself names the direction of steepest slope.
provenance: written-for-site
steps:
  - The gradient column is \((2x+y,\, x+2y)\).
  - For a unit direction \((a,b)\), the directional derivative is \(a(2x+y)+b(x+2y)\).
  - The direction of steepest slope is the direction of the gradient.
verification:
  checks:
    - expr: '(diff(x**2 + x*y + y**2, x), diff(x**2 + x*y + y**2, y))'
      expected: "(2*x + y, x + 2*y)"
    - expr: 'a*diff(x**2 + x*y + y**2, x) + b*diff(x**2 + x*y + y**2, y)'
      expected: "a*(2*x + y) + b*(x + 2*y)"
    - expr: '(2*x + y).subs({x: 0, y: 0})'
      expected: "0"
    - expr: '(x + 2*y).subs({x: 0, y: 0})'
      expected: "0"
:::

::: exercise
id: l5-directional-derivative.sheet-2-5-2
number: "sheet 2 exercise 5.2"
tier: standard
topics:
  - directional-derivative
  - steepest-ascent
statement: |
  For \(f(x,y)=e^{xy}\), compute the directional derivative in a general unit direction, and find the direction of steepest slope.
solution: |
  The partial derivative in \(x\) is \(y e^{xy}\). The partial derivative in \(y\) is \(x e^{xy}\). The gradient is the column
  \[
  \nabla f(x,y)=\begin{pmatrix} y e^{xy} \\ x e^{xy} \end{pmatrix}.
  \]
  Let \((a,b)\) be a unit direction, so \(a^2+b^2=1\). The directional derivative in that direction is
  \[
  df(x,y;(a,b))=e^{xy}(ay+bx).
  \]
  The direction of steepest slope is the direction of the gradient.

  - At the origin the gradient is the zero column, and the directional derivative is \(0\) for every unit direction.
  - At every other point the gradient column itself names the direction of steepest slope.
provenance: written-for-site
steps:
  - The gradient column is \((y e^{xy},\, x e^{xy})\).
  - For a unit direction \((a,b)\), the directional derivative is \(e^{xy}(ay+bx)\).
  - The direction of steepest slope is the direction of the gradient.
verification:
  checks:
    - expr: '(diff(exp(x*y), x), diff(exp(x*y), y))'
      expected: "(y*exp(x*y), x*exp(x*y))"
    - expr: 'a*diff(exp(x*y), x) + b*diff(exp(x*y), y)'
      expected: "exp(x*y)*(a*y + b*x)"
:::

::: exercise
id: l5-directional-derivative.sheet-2-5-4
number: "sheet 2 exercise 5.4"
tier: standard
topics:
  - directional-derivative
  - steepest-ascent
statement: |
  For \(f(x,y)=\arctan(y/x)\), compute the directional derivative in a general unit direction, and find the direction of steepest slope.
solution: |
  On the domain \(x\neq 0\), the partial derivative in \(x\) is \(-y/(x^2+y^2)\), and the partial derivative in \(y\) is \(x/(x^2+y^2)\). The gradient is the column
  \[
  \nabla f(x,y)=\begin{pmatrix} -y/(x^2+y^2) \\ x/(x^2+y^2) \end{pmatrix}.
  \]
  Let \((a,b)\) be a unit direction, so \(a^2+b^2=1\). The directional derivative in that direction is
  \[
  df(x,y;(a,b))=\frac{-ay+bx}{x^2+y^2}.
  \]
  The direction of steepest slope is the direction of the gradient. On the domain \(x\neq 0\) the second entry \(x/(x^2+y^2)\) is nonzero, so the gradient column is nonzero. It equals \(\bigl(1/(x^2+y^2)\bigr)\) times the column \((-y,x)\).
provenance: written-for-site
steps:
  - The gradient column is \(\bigl(-y/(x^2+y^2),\, x/(x^2+y^2)\bigr)\) for \(x\neq 0\).
  - For a unit direction \((a,b)\), the directional derivative is \((-ay+bx)/(x^2+y^2)\).
  - The direction of steepest slope is the direction of the gradient.
verification:
  checks:
    - expr: 'diff(atan(y/x), x) + y/(x**2 + y**2)'
      expected: "0"
    - expr: 'diff(atan(y/x), y) - x/(x**2 + y**2)'
      expected: "0"
    - expr: 'a*(-y)/(x**2 + y**2) + b*x/(x**2 + y**2)'
      expected: "(b*x - a*y)/(x**2 + y**2)"
:::

::: exercise
id: l5-directional-derivative.sheet-2-5-5
number: "sheet 2 exercise 5.5"
tier: standard
topics:
  - directional-derivative
  - steepest-ascent
statement: |
  For \(f(x,y,z)=\ln(xy+yz+zx)\), compute the directional derivative in a general unit direction, and find the direction of steepest slope.
solution: |
  Write \(p=xy+yz+zx\), and work where \(p>0\). The three partial derivatives are
  \[
  \begin{aligned}
  f_x&=\frac{y+z}{p},\\
  f_y&=\frac{x+z}{p},\\
  f_z&=\frac{x+y}{p}.
  \end{aligned}
  \]
  The gradient is the column with those three entries. Let \((a,b,c)\) be a unit direction, so \(a^2+b^2+c^2=1\). The directional derivative in that direction is
  \[
  \begin{aligned}
  &\nabla f\cdot(a,b,c)\\
  &=\frac{a(y+z)+b(x+z)+c(x+y)}{p}.
  \end{aligned}
  \]
  The direction of steepest slope is the direction of the gradient, which is the direction of the column \((y+z,\, x+z,\, x+y)\).
provenance: written-for-site
steps:
  - The gradient column is \(((y+z)/p,\, (x+z)/p,\, (x+y)/p)\) with \(p=xy+yz+zx\).
  - For a unit direction \((a,b,c)\), the directional derivative is that column dotted with \((a,b,c)\).
  - The direction of steepest slope is the direction of the gradient.
verification:
  checks:
    - expr: '(diff(log(x*y + y*z + z*x), x), diff(log(x*y + y*z + z*x), y), diff(log(x*y + y*z + z*x), z))'
      expected: "((y + z)/(x*y + y*z + z*x), (x + z)/(x*y + y*z + z*x), (x + y)/(x*y + y*z + z*x))"
    - expr: 'a*diff(log(x*y + y*z + z*x), x) + b*diff(log(x*y + y*z + z*x), y) + c*diff(log(x*y + y*z + z*x), z)'
      expected: "(a*(y + z) + b*(x + z) + c*(x + y))/(x*y + y*z + z*x)"
:::

::: sheet-item
id: l5-directional-derivative.sheet-dot
category: formula
text: |
  For \(\vec{u}=(a,b)\), the lecture formula is \(df(x,y;\vec{u})=a f_x+b f_y\). With the gradient column \(\nabla f=\begin{pmatrix} d_x f\\ d_y f\end{pmatrix}\), the same number is the scalar product \(\nabla f\cdot\vec{u}\).
:::

::: sheet-item
id: l5-directional-derivative.sheet-unit
category: formula
text: |
  The handout symbol \(D_{\mathbf{u}} f\) uses a unit vector. If the given direction vector is \(\mathbf{v}\), the slope per unit distance is \(\nabla f\cdot(\mathbf{v}/|\mathbf{v}|)\).
:::

::: sheet-item
id: l5-directional-derivative.sheet-length
category: trap
text: |
  Divide by the length before reading a slope per unit distance. For \(f=x^2+xy+y^2\) at \((1,1)\) in the direction of \(\langle 2,1\rangle\), the raw scalar product is \(9\), and the slope per unit distance is \(9\sqrt{5}/5\). Using \(9\) as the slope per unit distance is the wrong rate.
:::

::: exercise
id: l5-directional-derivative.ex-slope-cubic-product
tier: standard
topics: [directional-derivative, gradients]
statement: |
  Let \(f(x,y)=x^2y\) and let \(P=(2,1)\).

  a) Compute \(\nabla f(P)\).

  b) Compute \(df(P;\vec v)\) for \(\vec v=(3,-4)\), and the slope per unit distance in the direction of \(\vec v\).

  c) Find the unit directions at \(P\) in which the slope is \(0\).

  d) Find the largest slope per unit distance at \(P\) and a direction that attains it.
solution: |
  a) The partials are \(f_x=2xy\) and \(f_y=x^2\). At \(P\), \(f_x=4\) and \(f_y=4\), so \(\nabla f(P)=(4,4)\).

  b) The scalar product with \(\vec v=(3,-4)\) is \(4\cdot 3+4\cdot(-4)=-4\). This is the derivative of \(t\mapsto f(P+t\vec v)\) at \(t=0\). The length of \(\vec v\) is \(5\), so the slope per unit distance is \(-\frac{4}{5}\).

  c) A unit direction \((a,b)\) has \(a^2+b^2=1\), and the slope is \(4a+4b\). It equals \(0\) when \(b=-a\), so \(2a^2=1\) and \(a=\pm\frac{1}{\sqrt{2}}\). The two directions are \(\frac{1}{\sqrt{2}}(1,-1)\) and \(\frac{1}{\sqrt{2}}(-1,1)\).

  d) The slope in a unit direction \(\vec u\) is \(\nabla f(P)\cdot\vec u\), which is largest when \(\vec u\) points along \(\nabla f(P)\). The unit vector is \(\frac{1}{\sqrt{2}}(1,1)\), and the largest slope is \(|\nabla f(P)|=\sqrt{16+16}=4\sqrt{2}\).
provenance: written-for-site
steps:
  - The gradient at P is (4,4).
  - The raw product with (3,-4) is -4, and the slope per unit distance is -4/5.
  - The zero-slope unit directions are plus or minus (1,-1)/sqrt(2).
  - The largest slope is 4 sqrt(2) in the direction (1,1)/sqrt(2).
verification:
  checks:
    - expr: '(diff(x**2*y,x).subs({x:2,y:1}), diff(x**2*y,y).subs({x:2,y:1}))'
      expected: "(4,4)"
    - expr: '4*3+4*(-4)'
      expected: "-4"
    - expr: '(4*3+4*(-4))/5'
      expected: "-Rational(4,5)"
    - expr: 'diff((2+3*t)**2*(1-4*t),t).subs(t,0)'
      expected: "-4"
    - expr: '(4*(1/sqrt(2)) + 4*(-1/sqrt(2)), 4*(-1/sqrt(2)) + 4*(1/sqrt(2)))'
      expected: "(0,0)"
    - expr: '4*(1/sqrt(2)) + 4*(1/sqrt(2))'
      expected: "4*sqrt(2)"
    - expr: 'sqrt(4**2+4**2)'
      expected: "4*sqrt(2)"
:::

::: exercise
id: l5-directional-derivative.ex-slope-along-a-line
tier: standard
topics: [directional-derivative, chain-rule]
statement: |
  Let \(z=x^2+y^2\), \(P=(1,2)\) and \(\vec v=(3,4)\).

  a) Compute \(h(t)=f(P+t\vec v)\) and \(h'(0)\).

  b) Compute the slope per unit distance in the direction of \(\vec v\) from the gradient.

  c) Reparametrise the line by the distance \(s\) from \(P\), and confirm the slope from the new parametrisation.
solution: |
  a) The point on the line is \((1+3t,\,2+4t)\), so
  \[
  \begin{aligned}
  h(t)&=(1+3t)^2+(2+4t)^2\\
  &=5+22t+25t^2.
  \end{aligned}
  \]
  Then \(h'(0)=22\). By the chain rule, \(h'(0)=\nabla f(P)\cdot\vec v=(2,4)\cdot(3,4)=22\).

  b) The length of \(\vec v\) is \(5\), so the unit vector is \((\frac{3}{5},\frac{4}{5})\). The slope per unit distance is
  \[
  (2,4)\cdot\left(\frac{3}{5},\frac{4}{5}\right)=\frac{6+16}{5}=\frac{22}{5}.
  \]

  c) A point at distance \(s\) from \(P\) along the line is \(P+s\left(\frac{3}{5},\frac{4}{5}\right)\). The height there is
  \[
  \begin{aligned}
  g(s)&=\left(1+\tfrac{3s}{5}\right)^2\\
  &\quad+\left(2+\tfrac{4s}{5}\right)^2\\
  &=5+\tfrac{22}{5}s+s^2.
  \end{aligned}
  \]
  Then \(g'(0)=\frac{22}{5}\). The path \(t\mapsto P+t\vec v\) moves at speed \(5\), so \(h'(0)=5\,g'(0)=22\).
provenance: written-for-site
steps:
  - The height along the line is 5 + 22t + 25t^2, so h'(0) = 22.
  - The gradient (2,4) dotted with the unit vector (3/5,4/5) is 22/5.
  - With the distance s as parameter, g(s) = 5 + 22s/5 + s^2 and g'(0) = 22/5.
verification:
  checks:
    - expr: 'expand((1+3*t)**2+(2+4*t)**2)'
      expected: "5+22*t+25*t**2"
    - expr: 'diff((1+3*t)**2+(2+4*t)**2,t).subs(t,0)'
      expected: "22"
    - expr: 'diff((1+3*s/5)**2+(2+4*s/5)**2,s).subs(s,0)'
      expected: "Rational(22,5)"
    - expr: 'expand((1+3*s/5)**2+(2+4*s/5)**2)'
      expected: "5+Rational(22,5)*s+s**2"
    - expr: '(2*1*3 + 2*2*4)'
      expected: "22"
:::
