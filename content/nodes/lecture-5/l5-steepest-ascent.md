---
id: l5-steepest-ascent
lecture: 5
order: 7
title: Steepest ascent and gradients normal to level sets
prerequisites: [l5-directional-derivative, l4-level-sets]
sources:
  - { source: handout, section: "14.5", page: 366 }
  - { source: handout, section: "14.5", page: 368 }
  - { source: lecture-notes-5, page: 2 }
  - { source: sheet-2, page: 2 }
  - { source: final-2021, page: 1 }
  - { source: mock-2022, page: 1 }
  - { source: final-2022, page: 1 }
  - { source: mock-exam-2, page: 1 }
  - { source: home-assignment-2022, page: 1 }
examWeight: medium
status: reviewed
notation: |
  \(f_x\), \(\frac{df}{dx}\), \(d_x f\) and the handout form \(\frac{\partial f}{\partial x}\) are the same symbol, the partial derivative of \(f\) in \(x\). The symbols \(f_y\), \(\frac{df}{dy}\), \(d_y f\) and \(\frac{\partial f}{\partial y}\) are the same symbol for the partial derivative in \(y\). The lecture writes the gradient as the column with entries \(d_x f\) and \(d_y f\). The handout writes that gradient as the row \(\langle f_x, f_y\rangle\). The symbol \(D_{\mathbf{u}} f\) is the handout's name for the directional derivative along a unit vector, and it matches \(df(x,y;\vec{u})\) when \(\vec{u}\) is that unit vector.
---

::: section
title: Steepest ascent and descent
:::

::: formal-statement
kind: theorem
title: Steepest ascent
source:
  source: handout
  section: "14.5"
  page: 368
text: |
  Write the gradient as the column \(\nabla f=\begin{pmatrix} d_x f \\ d_y f \end{pmatrix}\). Let \(\mathbf{u}\) be a unit vector, and let \(\theta\) be the angle between \(\nabla f\) and \(\mathbf{u}\). Then
  \[
  df(x,y;\mathbf{u})=|\nabla f|\cos\theta.
  \]
  The largest value is \(|\nabla f|\). It occurs when \(\mathbf{u}\) points in the direction of \(\nabla f\). That direction is **steepest ascent**, and the slope is \(|\nabla f|\). When the gradient column is nonzero, the unit vector of steepest ascent is
  \[
  \frac{\nabla f}{|\nabla f|}.
  \]
:::

::: plain-explanation
text: |
  The scalar product of two vectors equals the product of their lengths times the cosine of the angle between them. The length of a unit vector is \(1\), so the directional derivative equals \(|\nabla f|\cos\theta\). The cosine equals \(1\) when the angle is \(0\), and then the slope equals the length of the gradient. The same rule holds for a function of three variables, with the gradient column \(\begin{pmatrix} d_x f \\ d_y f \\ d_z f \end{pmatrix}\).
:::

::: formal-statement
kind: theorem
title: Steepest descent
source:
  source: handout
  section: "14.5"
  page: 368
text: |
  The smallest value of \(df(x,y;\mathbf{u})\), as \(\mathbf{u}\) runs through the unit vectors, is \(-|\nabla f|\). It occurs when \(\mathbf{u}\) points in the direction of \(-\nabla f\). That direction is **steepest descent**, and the slope is \(-|\nabla f|\).
:::

::: plain-explanation
text: |
  The cosine equals \(-1\) when the angle between \(\mathbf{u}\) and the gradient is \(\pi\). The unit vector then points opposite the gradient, and the directional derivative equals minus the length of the gradient. In three variables the direction of steepest descent is the direction of \(-\nabla f\), and the slope is again \(-|\nabla f|\).
:::

::: visual
kind: gradient
caption: |
  This is a model case, \(f=x^2+y^2\) at \((1,0)\), where the gradient is \(\langle 2,0\rangle\). Keep the point and move the direction slider. The printed directional derivative is \(2\) at \(0\) degrees, the direction of the gradient, and \(-2\) at \(180\) degrees, the direction of \(-\nabla f\).
params:
  x: 1
  y: 0
  angle: 0
:::

::: trap
text: |
  Steepest descent is the opposite of the gradient, and the slope in that direction is \(-|\nabla f|\). Taking the descent direction to be the gradient itself, without the minus sign, chooses a direction in which \(f\) increases.

  Take \(f(x,y)=x^2+y^2\) at \((1,0)\). The partial derivative in \(x\) is \(2x\), and the partial derivative in \(y\) is \(2y\). At \((1,0)\):
  \[
  \begin{aligned}
  f_x(1,0)&=2,\\
  f_y(1,0)&=0,\\
  \nabla f&=\begin{pmatrix}2\\ 0\end{pmatrix},\\
  |\nabla f|&=2.
  \end{aligned}
  \]
  The unit vector in the direction of the gradient is \(\langle 1,0\rangle\). The directional derivative in that direction equals \(2\). That value is positive, so \(f\) increases along the gradient.

  The direction of steepest descent is the opposite direction. The unit vector is \(\langle -1,0\rangle\), and the slope there is \(-2\), which equals \(-|\nabla f|\).
:::

::: key-points
text: |
  - For a unit vector \(\mathbf{u}\) at an angle \(\theta\) from \(\nabla f\), the directional derivative is \(df(x,y;\mathbf{u})=|\nabla f|\cos\theta\).
  - Steepest ascent is the direction of \(\nabla f\), and the slope is \(|\nabla f|\). When the gradient column is nonzero, the unit vector of steepest ascent is \(\nabla f/|\nabla f|\).
  - Steepest descent is the direction of \(-\nabla f\), and the slope is \(-|\nabla f|\).
  - The usual slip takes the gradient itself as the descent direction. For \(f=x^2+y^2\) at \((1,0)\) the slope along the gradient is \(2\), so \(f\) increases. The descent direction is \(\langle -1,0\rangle\), and the slope there is \(-2\).
:::

::: concept-question
id: l5-steepest-ascent.q-0fd9171a
question: |
  At a point where the gradient column is \(\begin{pmatrix}3\\ 4\end{pmatrix}\), what is the slope of steepest ascent, and in which direction does it occur?
options:
  - text: |
      The slope is \(5\), in the direction of the gradient.
    correct: true
  - text: |
      The slope is \(7\), in the direction of the gradient.
  - text: |
      The slope is \(-5\), in the direction of the gradient.
explanation: |
  The length of the column \((3,4)\) is \(5\). Steepest ascent is the direction of the gradient, and the slope is that length.
:::

::: concept-question
id: l5-steepest-ascent.q-c2ead0b0
question: |
  What is the slope of steepest descent at a point?
options:
  - text: |
      Minus the length of the gradient, in the direction of \(-\nabla f\).
    correct: true
  - text: |
      The length of the gradient, in the direction of \(\nabla f\).
  - text: |
      \(0\), in the direction of \(\nabla f\).
explanation: |
  Steepest descent points opposite the gradient. The directional derivative there equals \(-|\nabla f|\). The direction of \(\nabla f\) itself is steepest ascent, and the slope there is \(|\nabla f|\).
:::

::: section
title: Gradient normal to a level set
:::

::: formal-statement
kind: theorem
title: Gradient normal to a level set
source:
  source: handout
  section: "14.5"
  page: 368
text: |
  A direction perpendicular to the gradient is tangent to the level set. If a unit vector \(\mathbf{u}\) is perpendicular to \(\nabla f\), then \(df(x,y;\mathbf{u})=0\).
:::

::: plain-explanation
text: |
  The angle between perpendicular vectors is \(\pi/2\), and the cosine of that angle is \(0\), so the directional derivative is \(0\). The height of \(f\) stays constant to first order, which is the tangent direction of the level curve \(f(x,y)=k\). In three variables a vector perpendicular to \(\nabla f\) is tangent to the level surface.
:::

::: tip
text: |
  One vector perpendicular to the column \(\begin{pmatrix} d_x f \\ d_y f \end{pmatrix}\) is \(\begin{pmatrix} d_y f \\ -d_x f \end{pmatrix}\).
:::

::: visual
kind: gradient
caption: |
  The arrow is the gradient of \(f=x^2+y^2\). That arrow is the direction of steepest ascent, and it meets the level curve at a right angle. The opposite direction is steepest descent.
params:
  x: 1
  y: 1
  angle: 0
:::

::: worked-example
title: Gradient directions at \((3,4)\)
problem: |
  For \(f(x,y)=x^2+y^2\) at \((3,4)\), find the unit vectors of steepest ascent and steepest descent, together with their slopes. Also give one unit vector tangent to the level curve.
solution: |
  **Gradient.** The partial derivative in \(x\) is \(2x\), so \(f_x(3,4)=6\). The partial derivative in \(y\) is \(2y\), so \(f_y(3,4)=8\).
  \[
  \begin{aligned}
  \nabla f&=\begin{pmatrix}6\\ 8\end{pmatrix},\\
  |\nabla f|&=\sqrt{36+64}=10.
  \end{aligned}
  \]

  **Steepest ascent.** The unit vector of steepest ascent is
  \[
  \langle 6/10,\, 8/10\rangle=\langle 3/5,\, 4/5\rangle.
  \]
  The slope in that direction is \(10\), the length of the gradient.

  **Steepest descent.** The unit vector of steepest descent is \(\langle -3/5,\, -4/5\rangle\). The slope in that direction is \(-10\).

  **Tangent direction.** The vector \(\langle 4,-3\rangle\) is perpendicular to \(\langle 6,8\rangle\), because
  \[
  6\cdot 4+8\cdot(-3)=0.
  \]
  Its length is \(5\), so a unit tangent vector to the level curve is \(\langle 4/5,\, -3/5\rangle\). The directional derivative in that direction is \(0\). The level curve through \((3,4)\) is the circle \(x^2+y^2=25\).
:::

::: guided-example
title: Slope of \(xy+y\)
problem: |
  For \(f(x,y)=xy+y\) at \((1,2)\), find the unit vector of steepest ascent, the slope of steepest ascent, the slope of steepest descent, and one unit vector of slope \(0\).
steps:
  - The partial derivative in \(x\) is \(y\), so \(f_x(1,2)=2\). The partial derivative in \(y\) is \(x+1\), so \(f_y(1,2)=2\). The gradient column is \(\begin{pmatrix}2\\ 2\end{pmatrix}\), and its length is \(\sqrt{8}=2\sqrt{2}\).
  - The unit vector of steepest ascent is \(\langle 1/\sqrt{2},\, 1/\sqrt{2}\rangle\). The slope of steepest ascent is \(2\sqrt{2}\).
  - The slope of steepest descent is \(-2\sqrt{2}\), in the direction of \(\langle -1/\sqrt{2},\, -1/\sqrt{2}\rangle\).
  - The vector \(\langle 1,-1\rangle\) is perpendicular to \(\langle 2,2\rangle\). The unit vector \(\langle 1/\sqrt{2},\, -1/\sqrt{2}\rangle\) has directional derivative \(0\).
:::

::: key-points
text: |
  - If a unit vector \(\mathbf{u}\) is perpendicular to \(\nabla f\), then \(df(x,y;\mathbf{u})=0\), and its direction is tangent to the level set.
  - One vector perpendicular to the column \(\begin{pmatrix} d_x f \\ d_y f \end{pmatrix}\) is \(\begin{pmatrix} d_y f \\ -d_x f \end{pmatrix}\). In three variables a vector perpendicular to \(\nabla f\) is tangent to the level surface.
:::

::: concept-question
id: l5-steepest-ascent.q-52d882d7
question: |
  A unit vector is perpendicular to the gradient at a point. What is the directional derivative in that direction?
options:
  - text: |
      \(0\), and the direction is tangent to the level set.
    correct: true
  - text: |
      The length of the gradient.
  - text: |
      Minus the length of the gradient.
explanation: |
  The cosine of a right angle is \(0\), so the directional derivative is \(0\). A direction of slope \(0\) is tangent to the level set.
:::

::: exercise
id: l5-steepest-ascent.handout-14-5-20
number: "14.5.20"
tier: basic
topics:
  - gradients
  - level-sets
statement: |
  Suppose \(g(x,y)=y-x^2\). Find the gradient at \((-1,3)\). The level curve \(g(x,y)=2\) passes through that point. Describe the tangent line and the gradient vector there, and say what the picture shows.
solution: |
  The partial derivative in \(x\) is \(-2x\), so \(g_x(-1,3)=2\). The partial derivative in \(y\) is \(1\). The gradient at \((-1,3)\) is the column \(\begin{pmatrix}2\\ 1\end{pmatrix}\), which is the vector \(\langle 2,1\rangle\).

  The level equation \(g=2\) is \(y-x^2=2\), so \(y=x^2+2\). The point \((-1,3)\) lies on it, because \(3=(-1)^2+2\). The slope of this parabola is \(2x\), so at \(x=-1\) the slope is \(-2\). The tangent line is
  \[
  y-3=-2(x+1).
  \]
  A direction vector of that line is \(\langle 1,-2\rangle\). Its scalar product with \(\langle 2,1\rangle\) is
  \[
  2\cdot 1+1\cdot(-2)=0.
  \]
  The gradient is perpendicular to the tangent line of the level curve.
provenance: handout-answer
steps:
  - The gradient at \((-1,3)\) is \(\langle 2,1\rangle\).
  - The level curve \(g=2\) is \(y=x^2+2\), with tangent slope \(-2\) at \(x=-1\).
  - The gradient is perpendicular to the tangent direction \(\langle 1,-2\rangle\).
verification:
  checks:
    - expr: '(diff(y - x**2, x).subs({x: -1, y: 3}), diff(y - x**2, y).subs({x: -1, y: 3}))'
      expected: "(2, 1)"
    - expr: '3 - (-1)**2'
      expected: "2"
    - expr: 'diff(x**2 + 2, x).subs({x: -1})'
      expected: "-2"
    - expr: '2*1 + 1*(-2)'
      expected: "0"
:::

::: exercise
id: l5-steepest-ascent.handout-14-5-10
number: "14.5.10"
tier: standard
topics:
  - level-sets
  - gradients
statement: |
  The temperature at \((x,y,z)\) is \(T=xyz\). In what direction can you go from \((1,1,1)\) to keep the same temperature?
solution: |
  The partial derivatives are \(T_x=yz\), \(T_y=xz\) and \(T_z=xy\). At \((1,1,1)\) the gradient column is \(\begin{pmatrix}1\\ 1\\ 1\end{pmatrix}\).

  A direction of constant temperature is perpendicular to this gradient. One such direction is \(\langle -1,1,0\rangle\), because
  \[
  1\cdot(-1)+1\cdot 1+1\cdot 0=0.
  \]
  Any direction perpendicular to \(\nabla T=\langle 1,1,1\rangle\) keeps the temperature constant to first order. The vector \(\langle -1,1,0\rangle\) is one example.
provenance: handout-answer
steps:
  - The gradient at \((1,1,1)\) is \(\langle 1,1,1\rangle\).
  - The vector \(\langle -1,1,0\rangle\) is perpendicular to that gradient.
  - Every direction perpendicular to \(\langle 1,1,1\rangle\) keeps \(T\) constant to first order.
verification:
  checks:
    - expr: '(diff(x*y*z, x).subs({x: 1, y: 1, z: 1}), diff(x*y*z, y).subs({x: 1, y: 1, z: 1}), diff(x*y*z, z).subs({x: 1, y: 1, z: 1}))'
      expected: "(1, 1, 1)"
    - expr: '1*(-1) + 1*1 + 1*0'
      expected: "0"
:::

::: exercise
id: l5-steepest-ascent.handout-14-5-19
number: "14.5.19"
tier: standard
topics:
  - steepest-descent
statement: |
  The elevation on a portion of a hill is \(f(x,y)=100-4x^2-2y\). From the location above \((2,1)\), in which direction will water run?
solution: |
  Water runs in the direction of steepest descent. The partial derivative in \(x\) is \(-8x\), so \(f_x(2,1)=-16\). The partial derivative in \(y\) is \(-2\). The gradient column at \((2,1)\) is \(\begin{pmatrix}-16\\ -2\end{pmatrix}\).

  The opposite vector is \(\begin{pmatrix}16\\ 2\end{pmatrix}\). That vector equals \(2\langle 8,1\rangle\). Water runs in the direction of \(\langle 8,1\rangle\).
provenance: handout-answer
steps:
  - The gradient at \((2,1)\) is \((-16,-2)\).
  - The opposite vector is \((16,2)\).
  - That vector has the direction of \(\langle 8,1\rangle\).
verification:
  checks:
    - expr: '(diff(100 - 4*x**2 - 2*y, x).subs({x: 2, y: 1}), diff(100 - 4*x**2 - 2*y, y).subs({x: 2, y: 1}))'
      expected: "(-16, -2)"
    - expr: '(-diff(100 - 4*x**2 - 2*y, x).subs({x: 2, y: 1})/2, -diff(100 - 4*x**2 - 2*y, y).subs({x: 2, y: 1})/2)'
      expected: "(8, 1)"
:::

::: exercise
id: l5-steepest-ascent.handout-14-5-9
number: "14.5.9"
tier: exam
topics:
  - steepest-descent
  - gradients
statement: |
  The temperature at \((x,y,z)\) is \(T=xy+\sin(yz)\). In what direction should you go from \((1,1,1)\) to decrease the temperature as quickly as possible? What is the rate of change of temperature in this direction?
solution: |
  The partial derivative in \(x\) is \(y\), so \(T_x(1,1,1)=1\). The partial derivative in \(y\) is \(x+z\cos(yz)\), so \(T_y(1,1,1)=1+\cos 1\). The partial derivative in \(z\) is \(y\cos(yz)\), so \(T_z(1,1,1)=\cos 1\). The gradient column at the point is
  \[
  \nabla T(1,1,1)=\begin{pmatrix} 1 \\ 1+\cos 1 \\ \cos 1 \end{pmatrix}.
  \]
  The direction of steepest decrease is the direction of \(-\nabla T\). That vector is
  \[
  \langle -1,\, -1-\cos 1,\, -\cos 1\rangle.
  \]
  Its length is \(|\nabla T|\). The rate of change of temperature in this direction is the directional derivative along the unit vector in the same direction. That rate equals \(-|\nabla T|\), and
  \[
  |\nabla T|=\sqrt{2+2\cos 1+2\cos^2 1}.
  \]
  The direction and the rate are \(\langle -1,\, -1-\cos 1,\, -\cos 1\rangle\) and \(-\sqrt{2+2\cos 1+2\cos^2 1}\).
provenance: handout-answer
steps:
  - The gradient at \((1,1,1)\) is \((1,\, 1+\cos 1,\, \cos 1)\).
  - The direction of steepest decrease is the opposite vector \(\langle -1,\, -1-\cos 1,\, -\cos 1\rangle\).
  - The directional derivative along the unit vector in that direction equals \(-\sqrt{2+2\cos 1+2\cos^2 1}\).
verification:
  checks:
    - expr: '(-diff(x*y + sin(y*z), x).subs({x: 1, y: 1, z: 1}), -diff(x*y + sin(y*z), y).subs({x: 1, y: 1, z: 1}), -diff(x*y + sin(y*z), z).subs({x: 1, y: 1, z: 1}))'
      expected: "(-1, -(1 + cos(1)), -cos(1))"
    - expr: '-sqrt(diff(x*y + sin(y*z), x).subs({x: 1, y: 1, z: 1})**2 + diff(x*y + sin(y*z), y).subs({x: 1, y: 1, z: 1})**2 + diff(x*y + sin(y*z), z).subs({x: 1, y: 1, z: 1})**2)'
      expected: "-sqrt(2 + 2*cos(1) + 2*cos(1)**2)"
:::

::: exercise
id: l5-steepest-ascent.handout-14-5-18
number: "14.5.18"
tier: exam
topics:
  - steepest-descent
  - level-sets
statement: |
  A bug crawls on a hot plate. At the point \(x\) units to the right of the lower left corner and \(y\) units up from that corner, the temperature is \(T(x,y)=100-x^2-3y^3\).
  If the bug is at \((2,1)\), in what direction should it move to cool off the fastest, and how fast will the temperature drop in this direction?
  If the bug is at \((1,3)\), in what direction should it move in order to keep its temperature?
solution: |
  The partial derivative in \(x\) is \(-2x\), and the partial derivative in \(y\) is \(-9y^2\).

  At \((2,1)\):
  \[
  \begin{aligned}
  \nabla T&=\begin{pmatrix}-4\\ -9\end{pmatrix},\\
  -\nabla T&=\langle 4,9\rangle,\\
  |\nabla T|&=\sqrt{16+81}=\sqrt{97}.
  \end{aligned}
  \]
  The bug cools off fastest in the direction of \(\langle 4,9\rangle\). The unit vector in the direction of \(\langle 4,9\rangle\) is \(\langle 4,9\rangle/\sqrt{97}\). The directional derivative along that unit vector equals \(-\sqrt{97}\). The question asks how fast the temperature will drop. Read as a positive speed, the drop speed is the positive number \(\sqrt{97}\).

  At \((1,3)\) the gradient column is \(\begin{pmatrix}-2\\ -81\end{pmatrix}\). A direction of constant temperature is perpendicular to this gradient. The vectors \(\langle -81,2\rangle\) and \(\langle 81,-2\rangle\) are two such directions:
  \[
  (-2)\cdot(-81)+(-81)\cdot 2=0,
  \]
  \[
  (-2)\cdot 81+(-81)\cdot(-2)=0.
  \]
provenance: handout-answer
steps:
  - At \((2,1)\) the gradient is \((-4,-9)\), so the cooling direction is \(\langle 4,9\rangle\).
  - The directional derivative along the unit vector in that direction is \(-\sqrt{97}\). The drop speed is \(\sqrt{97}\).
  - At \((1,3)\) the gradient is \((-2,-81)\), and \(\langle -81,2\rangle\) and \(\langle 81,-2\rangle\) are perpendicular to it.
verification:
  checks:
    - expr: '(-diff(100 - x**2 - 3*y**3, x).subs({x: 2, y: 1}), -diff(100 - x**2 - 3*y**3, y).subs({x: 2, y: 1}))'
      expected: "(4, 9)"
    - expr: 'sqrt(diff(100 - x**2 - 3*y**3, x).subs({x: 2, y: 1})**2 + diff(100 - x**2 - 3*y**3, y).subs({x: 2, y: 1})**2)'
      expected: "sqrt(97)"
    - expr: '(diff(100 - x**2 - 3*y**3, x).subs({x: 2, y: 1})*4 + diff(100 - x**2 - 3*y**3, y).subs({x: 2, y: 1})*9)/sqrt(97)'
      expected: "-sqrt(97)"
    - expr: '(diff(100 - x**2 - 3*y**3, x).subs({x: 1, y: 3}), diff(100 - x**2 - 3*y**3, y).subs({x: 1, y: 3}))'
      expected: "(-2, -81)"
    - expr: 'diff(100 - x**2 - 3*y**3, x).subs({x: 1, y: 3})*(-81) + diff(100 - x**2 - 3*y**3, y).subs({x: 1, y: 3})*2'
      expected: "0"
    - expr: 'diff(100 - x**2 - 3*y**3, x).subs({x: 1, y: 3})*81 + diff(100 - x**2 - 3*y**3, y).subs({x: 1, y: 3})*(-2)'
      expected: "0"
:::

::: exercise
id: l5-steepest-ascent.final-2021-q1
tier: exam
topics: [steepest-descent, gradients]
pastExam:
  year: 2021
  paper: Final
  question: "1"
  points: 1
statement: |
  Find the unit vector in the direction in which \(f(x, y) = 4 + x^2 - 3y^2\) decreases most rapidly at the point \((1, 1)\), and find the rate of change at this point in that direction.
solution: |
  The gradient is \(\nabla f = (2x, -6y)\). At \((1, 1)\) it equals \((2, -6)\), and its length is \(\sqrt{2^2 + (-6)^2} = \sqrt{40}\).

  The function decreases most rapidly in the direction of \(-\nabla f\). The unit vector in that direction is
  \[ \vec u = \frac{(-2, 6)}{\sqrt{40}}. \]
  The rate of change there is the directional derivative
  \[ D_{\vec u} f(1, 1) = \nabla f(1, 1) \cdot \vec u = -\sqrt{40}. \]
provenance: official-key
steps:
  - The gradient at \((1, 1)\) is \((2, -6)\), with length \(\sqrt{40}\).
  - The unit vector of steepest decrease is \((-2, 6)/\sqrt{40}\).
  - The rate is the directional derivative \(-\sqrt{40}\).
verification:
  checks:
    - expr: '(diff(4 + x**2 - 3*y**2, x).subs({x: 1, y: 1}), diff(4 + x**2 - 3*y**2, y).subs({x: 1, y: 1}))'
      expected: (2, -6)
    - expr: 'sqrt(2**2 + (-6)**2)'
      expected: sqrt(40)
    - expr: '(-2/sqrt(2**2 + (-6)**2), -(-6)/sqrt(2**2 + (-6)**2))'
      expected: (-2/sqrt(40), 6/sqrt(40))
    - expr: '2*(-2)/sqrt(40) + (-6)*6/sqrt(40)'
      expected: -sqrt(40)
discrepancy: |
  The mock solutions sheet writes \((2, -6)/\sqrt{40}\) and the rate \(\sqrt{40}\), while the verified value is \((-2, 6)/\sqrt{40}\) with rate \(-\sqrt{40}\).
:::

::: exercise
id: l5-steepest-ascent.final-2022-q1
tier: exam
topics: [steepest-descent, gradients]
pastExam:
  year: 2022
  paper: Final
  question: "1"
  points: 1
statement: |
  Find the unit vector in the direction in which
  \[ f(x, y) = \frac{x^2 - y + 1}{1 + y^2 - x} \]
  decreases most rapidly at the point \((1, 1)\), and find the rate of change at this point in that direction.
solution: |
  Write \(p = x^2 - y + 1\) and \(q = 1 + y^2 - x\), so \(f = p/q\). At \((1, 1)\), \(p = 1\) and \(q = 1\).

  Then \(p_x = 2x\), \(q_x = -1\), \(p_y = -1\) and \(q_y = 2y\), so
  \[
  \begin{aligned}
  f_x &= \frac{2x \cdot q - p \cdot (-1)}{q^2},\\
  f_y &= \frac{(-1) \cdot q - p \cdot (2y)}{q^2}.
  \end{aligned}
  \]
  At \((1, 1)\) these equal \(2 + 1 = 3\) and \(-1 - 2 = -3\). The gradient is \(\nabla f(1, 1) = (3, -3)\), with length \(\sqrt{18}\).

  The unit vector of steepest decrease is
  \[ \vec u = \frac{(-3, 3)}{\sqrt{18}}, \]
  and the rate is \(D_{\vec u} f(1, 1) = \nabla f(1, 1) \cdot \vec u = -\sqrt{18}\).
provenance: official-key
steps:
  - The partial derivatives at \((1, 1)\) are \(3\) and \(-3\).
  - The gradient length is \(\sqrt{18}\).
  - The unit vector of steepest decrease is \((-3, 3)/\sqrt{18}\), and the rate is \(-\sqrt{18}\).
verification:
  checks:
    - expr: '(diff((x**2 - y + 1)/(1 + y**2 - x), x).subs({x: 1, y: 1}), diff((x**2 - y + 1)/(1 + y**2 - x), y).subs({x: 1, y: 1}))'
      expected: (3, -3)
    - expr: 'sqrt(3**2 + (-3)**2)'
      expected: sqrt(18)
    - expr: '(-3/sqrt(3**2 + (-3)**2), -(-3)/sqrt(3**2 + (-3)**2))'
      expected: (-3/sqrt(18), 3/sqrt(18))
    - expr: '3*(-3)/sqrt(18) + (-3)*3/sqrt(18)'
      expected: -sqrt(18)
:::

::: exercise
id: l5-steepest-ascent.home-2022-q1
number: "Home assignment 2022, exercise 1"
tier: standard
topics: [directional-derivative, steepest-ascent]
statement: |
  Compute the directional derivative of \(f(x, y) = x^2 + y^2\) for a unit vector \(\vec u\). Find the direction of steepest slope at any point, and the direction of horizontal slope. What relation holds between those two directions?
solution: |
  Let \(\vec u = (a, b)\) with \(a^2 + b^2 = 1\). The gradient is \(\nabla f(x, y) = (2x, 2y)\), so the directional derivative is
  \[ D_{\vec u} f(x, y) = \nabla f(x, y) \cdot \vec u = 2xa + 2yb. \]

  This value is largest when \(\vec u\) has the direction of \(\nabla f\). At the origin the gradient is \((0, 0)\), and the directional derivative is \(0\) for every unit vector. Away from the origin the length of the gradient is \(2\sqrt{x^2 + y^2}\), and the unit vector of steepest slope is
  \[ \frac{(x, y)}{\sqrt{x^2 + y^2}}. \]
  The directional derivative in that direction is \(2\sqrt{x^2 + y^2}\).

  A horizontal slope means the directional derivative is \(0\), so the unit vector is orthogonal to \(\nabla f\). Away from the origin, one such vector is
  \[ \frac{(-y, x)}{\sqrt{x^2 + y^2}}. \]
  The dot product of \((x, y)\) with \((-y, x)\) is \(0\), so the direction of steepest slope and a direction of horizontal slope are orthogonal.
provenance: official-key
steps:
  - The gradient is \((2x, 2y)\), and the directional derivative along a unit vector \((a, b)\) is \(2xa + 2yb\).
  - The steepest direction is the direction of the gradient.
  - A horizontal direction is orthogonal to the gradient, and the two directions are orthogonal.
verification:
  checks:
    - expr: '(diff(x**2 + y**2, x), diff(x**2 + y**2, y))'
      expected: (2*x, 2*y)
    - expr: 'diff(x**2 + y**2, x)*a + diff(x**2 + y**2, y)*b'
      expected: 2*x*a + 2*y*b
    - expr: 'x*(-y) + y*x'
      expected: 0
    - expr: '2*x*(x/sqrt(x**2 + y**2)) + 2*y*(y/sqrt(x**2 + y**2)) - 2*sqrt(x**2 + y**2)'
      expected: 0
    - expr: '2*x*((-y)/sqrt(x**2 + y**2)) + 2*y*(x/sqrt(x**2 + y**2))'
      expected: 0
:::

::: sheet-item
id: l5-steepest-ascent.sheet-ascent
category: formula
text: |
  Steepest ascent is the direction of the gradient column \(\nabla f=\begin{pmatrix} d_x f\\ d_y f\end{pmatrix}\). The slope is \(|\nabla f|\). When the gradient is nonzero, the unit vector is \(\nabla f/|\nabla f|\).
:::

::: sheet-item
id: l5-steepest-ascent.sheet-descent
category: formula
text: |
  Steepest descent is the direction of \(-\nabla f\). The slope in that direction is \(-|\nabla f|\).
:::

::: sheet-item
id: l5-steepest-ascent.sheet-level
category: recognition
text: |
  A direction perpendicular to the gradient is tangent to the level set. The directional derivative in that direction is \(0\).
:::

::: sheet-item
id: l5-steepest-ascent.sheet-minus
category: trap
text: |
  Steepest descent points opposite the gradient. For \(f=x^2+y^2\) at \((1,0)\), the gradient is \((2,0)\) and the directional derivative along it equals \(2\), so \(f\) increases. The descent slope is \(-2\).
:::

::: exercise
id: l5-steepest-ascent.ex-temperature-three-variables
tier: standard
topics: [gradients, steepest-ascent, directional-derivative]
statement: |
  The temperature at \((x, y, z)\) is \(T = x^2 y + y z^2\). A particle sits at \((1, 2, 1)\).
  a) In which direction does the temperature increase fastest, and what is the rate of increase?
  b) What is the rate of change of the temperature in the direction of the vector \((1, 2, 2)\)?
  c) Give a direction with \(z\)-component \(0\) in which the temperature does not change to first order.
solution: |
  The partial derivatives are
  \[
  \begin{aligned}
  T_x &= 2xy,\\
  T_y &= x^2 + z^2,\\
  T_z &= 2yz.
  \end{aligned}
  \]
  At \((1, 2, 1)\) the gradient column is \(\nabla T = (4, 2, 4)\). Its length is
  \[
  |\nabla T| = \sqrt{16 + 4 + 16} = 6.
  \]

  a) The temperature increases fastest in the direction of \(\nabla T\). The unit vector is \(\left(\frac{2}{3}, \frac{1}{3}, \frac{2}{3}\right)\). The rate of increase is \(|\nabla T| = 6\).

  b) The vector \((1, 2, 2)\) has length \(3\), so the unit vector is \(\frac{1}{3}(1, 2, 2)\). The rate of change is
  \[
  \nabla T \cdot \frac{(1, 2, 2)}{3} = \frac{4 + 4 + 8}{3} = \frac{16}{3}.
  \]
  This value is smaller than \(6\), as it has to be. Using the vector \((1, 2, 2)\) without dividing by its length would give \(16\), which exceeds the largest possible rate.

  c) A direction \((a, b, 0)\) with no change to first order is perpendicular to \(\nabla T\), so \(4a + 2b = 0\). Taking \(a = 1\) gives \(b = -2\). The vector \((1, -2, 0)\) has length \(\sqrt{5}\), and the unit vector \(\frac{1}{\sqrt{5}}(1, -2, 0)\) is such a direction.
provenance: written-for-site
steps:
  - The gradient at (1, 2, 1) is (4, 2, 4), with length 6.
  - Fastest increase is along (2/3, 1/3, 2/3) at rate 6.
  - The vector (1, 2, 2) is divided by its length 3, which gives the rate 16/3.
  - The vector (1, -2, 0) is perpendicular to the gradient.
verification:
  checks:
    - expr: 'Tuple(diff(x**2*y + y*z**2, x).subs({x: 1, y: 2, z: 1}), diff(x**2*y + y*z**2, y).subs({x: 1, y: 2, z: 1}), diff(x**2*y + y*z**2, z).subs({x: 1, y: 2, z: 1}))'
      expected: Tuple(4, 2, 4)
    - expr: 'sqrt(4**2 + 2**2 + 4**2)'
      expected: "6"
    - expr: 'Matrix([4, 2, 4]).dot(Matrix([1, 2, 2]))/3'
      expected: "16/3"
    - expr: 'Matrix([4, 2, 4]).dot(Matrix([1, -2, 0]))'
      expected: "0"
:::

::: exercise
id: l5-steepest-ascent.ex-ascent-direction-points
tier: exam
topics: [gradients, steepest-ascent, steepest-descent]
statement: |
  Let \(f(x, y) = x^2 - 3y^2\).
  a) Find all points at which the direction of steepest ascent is the direction of \((1, 1)\).
  b) At which of these points is the rate of steepest ascent equal to \(12\)?
  c) Find all points at which the direction of steepest descent is the direction of \((1, 1)\).
solution: |
  The gradient is \(\nabla f = (2x, -6y)\). At the origin it is the zero vector, so no direction of steepest ascent exists there, and the origin belongs to none of the sets below.

  a) The direction of steepest ascent is the direction of \(\nabla f\). It equals the direction of \((1, 1)\) when \(\nabla f = \lambda(1, 1)\) with \(\lambda > 0\). Then \(2x = \lambda\) and \(-6y = \lambda\), so
  \[
  x = \frac{\lambda}{2},\qquad y = -\frac{\lambda}{6}.
  \]
  Writing \(\lambda = 6s\) gives the points \((3s, -s)\) with \(s > 0\). These are the points of the line \(x = -3y\) with \(x > 0\).

  b) At \((3s, -s)\) the gradient is \((6s, 6s)\), with length \(6\sqrt{2}\,s\). The rate equals \(12\) when \(s = \frac{12}{6\sqrt{2}} = \sqrt{2}\). The point is \((3\sqrt{2}, -\sqrt{2})\). There the gradient is \((6\sqrt{2}, 6\sqrt{2})\), and its length is \(\sqrt{72 + 72} = 12\).

  c) The direction of steepest descent is the direction of \(-\nabla f\). It equals the direction of \((1, 1)\) when \(\nabla f = \lambda(1, 1)\) with \(\lambda < 0\). The same computation gives the points \((3s, -s)\) with \(s < 0\), the points of the line \(x = -3y\) with \(x < 0\). For example, at \((-3, 1)\) the gradient is \((-6, -6)\), and \(-\nabla f = (6, 6)\) points along \((1, 1)\).
provenance: written-for-site
steps:
  - The gradient is (2x, -6y), and it is zero only at the origin.
  - Steepest ascent along (1, 1) means grad f = lambda (1, 1) with lambda > 0, which gives (3s, -s) with s > 0.
  - The rate 6 sqrt(2) s equals 12 at s = sqrt(2), the point (3 sqrt(2), -sqrt(2)).
  - Steepest descent along (1, 1) gives the same line with s < 0.
verification:
  checks:
    - expr: 'Tuple(diff(x**2 - 3*y**2, x).subs({x: 3*s, y: -s}), diff(x**2 - 3*y**2, y).subs({x: 3*s, y: -s}))'
      expected: Tuple(6*s, 6*s)
    - expr: 'Tuple(diff(x**2 - 3*y**2, x).subs({x: 3*sqrt(2), y: -sqrt(2)}), diff(x**2 - 3*y**2, y).subs({x: 3*sqrt(2), y: -sqrt(2)}))'
      expected: Tuple(6*sqrt(2), 6*sqrt(2))
    - expr: 'sqrt((6*sqrt(2))**2 + (6*sqrt(2))**2)'
      expected: "12"
    - expr: 'Tuple(diff(x**2 - 3*y**2, x).subs({x: -3, y: 1}), diff(x**2 - 3*y**2, y).subs({x: -3, y: 1}))'
      expected: Tuple(-6, -6)
:::
