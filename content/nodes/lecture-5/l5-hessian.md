---
id: l5-hessian
lecture: 5
order: 10
title: The Hessian matrix
prerequisites: [l5-higher-derivatives]
sources:
  - { source: handout, section: "14.6", page: 371 }
  - { source: lecture-notes-5, page: 4 }
examWeight: high
examWeightNote: The Hessian classifies the critical points of lecture 6, which carry 20% of the two recent finals.
notation: |
  The curly partial \(\frac{\partial f}{\partial x}\) is the same symbol as \(f_x\), \(\frac{df}{dx}\) and \(d_x f\). The second partials are \(\frac{d^2 f}{dx^2}\), \(\frac{d^2 f}{dx\,dy}\) and \(\frac{d^2 f}{dy^2}\).
status: reviewed
---

::: section
title: The Hessian matrix
:::

::: formal-statement
kind: definition
title: The Hessian matrix
source: { source: lecture-notes-5, page: 4 }
text: |
  Let \(f\) be twice differentiable. The **Hessian matrix** of \(f\) is
  \[
  H_f=\begin{pmatrix}
  \dfrac{d^2 f}{dx^2} & \dfrac{d^2 f}{dx\,dy} \\[1.2em]
  \dfrac{d^2 f}{dx\,dy} & \dfrac{d^2 f}{dy^2}
  \end{pmatrix}.
  \]
:::

::: plain-explanation
text: |
  The rows of \(H_f\) are filled in this order:

  - The first row holds the second partial in \(x\), then the mixed partial.
  - The second row holds that mixed partial, then the second partial in \(y\).

  When the mixed partials agree, the two off-diagonal entries are equal and \(H_f\) is **symmetric**.
:::

::: trap
text: |
  The off-diagonal entries of \(H_f\) are the mixed partial \(\frac{d^2 f}{dx\,dy}\). For \(f(x,y)=x^2+xy\) that mixed partial equals \(1\), so
  \[
  H_f=\begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}
  \]
  and \(D=-1\). Placing \(f_{xx}\) on the off-diagonal produces the matrix with \(2\) in every off-diagonal entry. Its determinant is \(2\cdot 0-2^2=-4\).
:::

::: key-points
text: |
  - For twice differentiable \(f\), the Hessian matrix \(H_f\) has \(\frac{d^2 f}{dx^2}\) and \(\frac{d^2 f}{dy^2}\) on the diagonal, and both off-diagonal entries are the mixed partial \(\frac{d^2 f}{dx\,dy}\).
  - When the mixed partials agree, the two off-diagonal entries are equal and \(H_f\) is symmetric.
  - The usual slip places \(f_{xx}\) on the off-diagonal, which puts \(2\) in every off-diagonal entry for \(f(x,y)=x^2+xy\). The off-diagonal entry is the mixed partial \(1\), so \(H_f=\begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}\).
:::

::: concept-question
id: l5-hessian.q-c9f1d447
question: |
  For \(f(x,y)=x^2+xy\), which matrix is \(H_f\)?
options:
  - text: |
      \(\begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}\)
    correct: true
  - text: |
      \(\begin{pmatrix} 2x+y & 1 \\ 1 & x \end{pmatrix}\)
  - text: |
      \(\begin{pmatrix} 2 & 2 \\ 2 & 0 \end{pmatrix}\)
explanation: |
  The second partials are \(f_{xx}=2\), \(f_{xy}=1\) and \(f_{yy}=0\). The first partials \(2x+y\) and \(x\) belong in \(\nabla f\), and the off-diagonal of \(H_f\) is the mixed partial \(1\).
:::

::: concept-question
id: l5-hessian.q-0991aa6d
question: |
  Which derivative is the off-diagonal entry of \(H_f\)?
options:
  - text: |
      \(\dfrac{d^2 f}{dx\,dy}\)
    correct: true
  - text: |
      \(\dfrac{d^2 f}{dx^2}\)
  - text: |
      \(\dfrac{df}{dx}\)
explanation: |
  Both off-diagonal entries are the mixed partial \(\frac{d^2 f}{dx\,dy}\). The corner \(\frac{d^2 f}{dx^2}\) is the first diagonal entry.
:::

::: section
title: The determinant \(D\)
:::

::: formal-statement
kind: definition
title: The determinant \(D\)
source: { source: lecture-notes-5, page: 4 }
text: |
  At a point where the second partials exist,
  \[
  D=\det H_f=\frac{d^2 f}{dx^2}\cdot\frac{d^2 f}{dy^2}-\left(\frac{d^2 f}{dx\,dy}\right)^2.
  \]
:::

::: plain-explanation
text: |
  \(D\) is the **determinant** of the \(2\times 2\) matrix \(H_f\). Compute it in two steps:

  1. Multiply the two diagonal entries.
  2. Subtract the square of the off-diagonal entry from that product.

  The test that uses \(D\) is the next lecture. This lecture computes \(H_f\) and \(D\).
:::

::: worked-example
title: Hessian of \(x^2+xy\)
problem: |
  Let \(f(x,y)=x^2+xy\). Compute \(H_f\) and \(D\).
solution: |
  \[
  \begin{aligned}
  f_x&=2x+y,\qquad f_y=x,\\
  f_{xx}&=2,\qquad f_{xy}=1,\\
  f_{yx}&=1,\qquad f_{yy}=0,\\
  H_f&=\begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix},\\
  D&=2\cdot 0-1^2=-1.
  \end{aligned}
  \]
  The test that uses \(D\) is the next lecture.
:::

::: guided-example
title: Hessian of \(xy+y^2\)
problem: |
  Let \(f(x,y)=xy+y^2\). Compute \(H_f\) and \(D\).
steps:
  - |
    The first partials are \(f_x=y\) and \(f_y=x+2y\).
  - |
    Differentiating again gives \(f_{xx}=0\), \(f_{xy}=1\), \(f_{yx}=1\) and \(f_{yy}=2\).
  - |
    The Hessian matrix is
    \[
    H_f=\begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}.
    \]
  - |
    The determinant is \(D=0\cdot 2-1^2=-1\).
:::

::: trap
text: |
  The sign of \(f_{xx}\) alone does not settle a point. For \(f(x,y)=x^2+xy\),
  \[
  f_{xx}=2,\qquad D=2\cdot 0-1^2=-1.
  \]
  The next lecture reads \(f_{xx}\) together with \(D\). Recording only that \(f_{xx}\) is positive leaves this point unsettled.
:::

::: key-points
text: |
  - At a point where the second partials exist, \(D=\det H_f=f_{xx}f_{yy}-(f_{xy})^2\).
  - \(D\) subtracts the square of the mixed partial from the product of the diagonal entries. The test that uses \(D\) is the next lecture.
  - The usual slip lets a positive \(f_{xx}\) settle a point. For \(f(x,y)=x^2+xy\), \(f_{xx}=2\) and \(D=-1\). The sign of \(f_{xx}\) alone leaves the point unsettled, and the next lecture reads \(f_{xx}\) together with \(D\).
:::

::: concept-question
id: l5-hessian.q-08efbfbb
question: |
  Which expression equals \(D\)?
options:
  - text: |
      \(f_{xx}f_{yy}-(f_{xy})^2\)
    correct: true
  - text: |
      \(f_{xx}f_{yy}-f_{xy}\)
  - text: |
      \(f_{xx}+f_{yy}\)
explanation: |
  The determinant subtracts the square of the mixed partial. For \(f(x,y)=x^2+4xy\), one has \(f_{xx}=2\), \(f_{xy}=4\) and \(f_{yy}=0\), so \(D=-16\). The expression \(f_{xx}f_{yy}-f_{xy}\) equals \(-4\).
:::

::: exercise
id: l5-hessian.basic-quadratic
tier: basic
topics: [hessian, second-derivatives]
statement: |
  Let \(f(x,y)=x^2+3y^2\). Compute the four second partials, the matrix \(H_f\), and \(D\).
solution: |
  The first partials are \(f_x=2x\) and \(f_y=6y\). Differentiating again, \(f_{xx}=2\), \(f_{xy}=0\), \(f_{yx}=0\) and \(f_{yy}=6\). The Hessian matrix is
  \[
  H_f=\begin{pmatrix} 2 & 0 \\ 0 & 6 \end{pmatrix}.
  \]
  The determinant is \(D=2\cdot 6-0^2=12\).
provenance: written-for-site
steps:
  - The second partials are \(f_{xx}=2\), \(f_{xy}=0\), \(f_{yx}=0\) and \(f_{yy}=6\).
  - The matrix is diagonal with entries \(2\) and \(6\), and \(D=12\).
verification:
  checks:
    - expr: 'diff(x**2 + 3*y**2, x, 2)'
      expected: "2"
    - expr: 'diff(diff(x**2 + 3*y**2, x), y)'
      expected: "0"
    - expr: 'diff(diff(x**2 + 3*y**2, y), x)'
      expected: "0"
    - expr: 'diff(x**2 + 3*y**2, y, 2)'
      expected: "6"
    - expr: 'diff(x**2 + 3*y**2, x, 2)*diff(x**2 + 3*y**2, y, 2) - diff(diff(x**2 + 3*y**2, x), y)**2'
      expected: "12"
:::

::: exercise
id: l5-hessian.standard-monomial
tier: standard
topics: [hessian, second-derivatives]
statement: |
  Let \(f(x,y)=x^2 y\). Compute the four second partials, the matrix \(H_f\), and \(D\).
solution: |
  The first partials are \(f_x=2xy\) and \(f_y=x^2\). Differentiating again, \(f_{xx}=2y\), \(f_{xy}=2x\), \(f_{yx}=2x\) and \(f_{yy}=0\). The Hessian matrix is
  \[
  H_f=\begin{pmatrix} 2y & 2x \\ 2x & 0 \end{pmatrix}.
  \]
  The determinant is \(D=2y\cdot 0-(2x)^2=-4x^2\).
provenance: written-for-site
steps:
  - The second partials are \(f_{xx}=2y\), \(f_{xy}=2x\), \(f_{yx}=2x\) and \(f_{yy}=0\).
  - The determinant is \(-4x^2\).
verification:
  checks:
    - expr: 'diff(x**2*y, x, 2)'
      expected: "2*y"
    - expr: 'diff(diff(x**2*y, x), y)'
      expected: "2*x"
    - expr: 'diff(diff(x**2*y, y), x)'
      expected: "2*x"
    - expr: 'diff(x**2*y, y, 2)'
      expected: "0"
    - expr: 'diff(x**2*y, x, 2)*diff(x**2*y, y, 2) - diff(diff(x**2*y, x), y)**2'
      expected: "-4*x**2"
:::

::: exercise
id: l5-hessian.exam-cubic
tier: exam
topics: [hessian, second-derivatives]
statement: |
  Let \(f(x,y)=x^3+xy+y^2\). Compute the four second partials, the matrix \(H_f\), and \(D\).
solution: |
  The first partials are \(f_x=3x^2+y\) and \(f_y=x+2y\). Differentiating again, \(f_{xx}=6x\), \(f_{xy}=1\), \(f_{yx}=1\) and \(f_{yy}=2\). The Hessian matrix is
  \[
  H_f=\begin{pmatrix} 6x & 1 \\ 1 & 2 \end{pmatrix}.
  \]
  The determinant is \(D=6x\cdot 2-1^2=12x-1\).
provenance: written-for-site
steps:
  - The second partials are \(f_{xx}=6x\), \(f_{xy}=1\), \(f_{yx}=1\) and \(f_{yy}=2\).
  - The determinant is \(12x-1\).
verification:
  checks:
    - expr: 'diff(x**3 + x*y + y**2, x, 2)'
      expected: "6*x"
    - expr: 'diff(diff(x**3 + x*y + y**2, x), y)'
      expected: "1"
    - expr: 'diff(diff(x**3 + x*y + y**2, y), x)'
      expected: "1"
    - expr: 'diff(x**3 + x*y + y**2, y, 2)'
      expected: "2"
    - expr: 'diff(x**3 + x*y + y**2, x, 2)*diff(x**3 + x*y + y**2, y, 2) - diff(diff(x**3 + x*y + y**2, x), y)**2'
      expected: "12*x - 1"
:::

::: sheet-item
id: l5-hessian.sheet-formula
category: formula
text: |
  \[
  H_f=\begin{pmatrix}
  \dfrac{d^2 f}{dx^2} & \dfrac{d^2 f}{dx\,dy} \\[1.2em]
  \dfrac{d^2 f}{dx\,dy} & \dfrac{d^2 f}{dy^2}
  \end{pmatrix}
  \]
  \[
  \begin{aligned}
  D&=\det H_f,\\
  &=\frac{d^2 f}{dx^2}\cdot\frac{d^2 f}{dy^2}\\
  &\qquad-\left(\frac{d^2 f}{dx\,dy}\right)^2.
  \end{aligned}
  \]
:::

::: sheet-item
id: l5-hessian.sheet-fxx
category: trap
text: |
  The sign of \(f_{xx}\) alone does not settle a point. For \(f(x,y)=x^2+xy\), one has \(f_{xx}=2\) and \(D=-1\). The off-diagonal entry is the mixed partial, and \(D\) subtracts the square of that entry.
:::

::: exercise
id: l5-hessian.ex-hessian-exponential
tier: standard
topics: [hessian, second-derivatives]
statement: |
  Let \(f(x,y)=e^{xy}\).
  a) Compute \(H_f\) and \(D\) as functions of \(x\) and \(y\).
  b) Evaluate \(H_f\) and \(D\) at \((0,0)\) and at \((1,1)\).
  c) Find all points where \(D=0\).
solution: |
  a) The first partials are \(f_x=y\,e^{xy}\) and \(f_y=x\,e^{xy}\). Differentiating again,
  \[
  \begin{aligned}
  f_{xx}&=y^2e^{xy},\\
  f_{xy}&=e^{xy}+xy\,e^{xy}=(1+xy)e^{xy},\\
  f_{yy}&=x^2e^{xy}.
  \end{aligned}
  \]
  The mixed partial \(f_{yx}\) gives the same expression, so
  \[
  H_f=e^{xy}\begin{pmatrix} y^2 & 1+xy \\ 1+xy & x^2 \end{pmatrix}.
  \]
  The determinant is
  \[
  \begin{aligned}
  D&=e^{2xy}\bigl(x^2y^2-(1+xy)^2\bigr),\\
  &=-e^{2xy}(1+2xy).
  \end{aligned}
  \]

  b) At \((0,0)\), \(e^{xy}=1\), so
  \[
  H_f=\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix},\qquad D=-1.
  \]
  At \((1,1)\), \(e^{xy}=e\), so
  \[
  H_f=e\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix},\qquad D=-3e^2.
  \]

  c) The factor \(e^{2xy}\) is never \(0\), so \(D=0\) exactly when \(1+2xy=0\). The points are those on the hyperbola \(xy=-\frac{1}{2}\).
provenance: written-for-site
steps:
  - The second partials are y^2 e^(xy), (1+xy) e^(xy) and x^2 e^(xy).
  - D equals -e^(2xy)(1+2xy), which is -1 at (0,0) and -3e^2 at (1,1).
  - D vanishes exactly on the hyperbola xy = -1/2.
verification:
  checks:
    - expr: 'diff(exp(x*y),x,2)'
      expected: "y**2*exp(x*y)"
    - expr: 'diff(diff(exp(x*y),x),y)'
      expected: "(1+x*y)*exp(x*y)"
    - expr: 'diff(diff(exp(x*y),y),x)'
      expected: "(1+x*y)*exp(x*y)"
    - expr: 'diff(exp(x*y),y,2)'
      expected: "x**2*exp(x*y)"
    - expr: 'simplify(diff(exp(x*y),x,2)*diff(exp(x*y),y,2) - diff(diff(exp(x*y),x),y)**2)'
      expected: "-(1+2*x*y)*exp(2*x*y)"
    - expr: '(diff(exp(x*y),x,2)*diff(exp(x*y),y,2) - diff(diff(exp(x*y),x),y)**2).subs({x:0,y:0})'
      expected: "-1"
    - expr: 'simplify((diff(exp(x*y),x,2)*diff(exp(x*y),y,2) - diff(diff(exp(x*y),x),y)**2).subs({x:1,y:1}))'
      expected: "-3*exp(2)"
    - expr: 'solve(-(1+2*x*y), y)'
      expected: "[-1/(2*x)]"
:::
