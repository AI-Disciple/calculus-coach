---
id: l5-chain-rule-general
lecture: 5
order: 9
title: The chain rule with two parameters and implicit functions
prerequisites: [l5-chain-rule-path]
sources:
  - { source: handout, section: "14.4", page: 364 }
  - { source: handout, section: "14.4", page: 365 }
  - { source: final-2022, page: 3 }
  - { source: handout, section: "14.6" }
examWeight: low
notation: |
  The curly partial \(\frac{\partial f}{\partial x}\) is the same symbol as \(f_x\), \(\frac{df}{dx}\) and \(d_x f\).
taught: lecture
status: reviewed
---

::: section
title: Chain rule in two parameters
:::

::: formal-statement
kind: theorem
title: Chain rule in two parameters
source: { source: handout, section: "14.4", page: 365 }
text: |
  Let \(f(x,y)\) be differentiable, with \(x=g(s,t)\) and \(y=h(s,t)\). When the relevant partial derivatives exist,
  \[
  \begin{aligned}
  \frac{\partial f}{\partial s}&=f_x g_s+f_y h_s,\\
  \frac{\partial f}{\partial t}&=f_x g_t+f_y h_t.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  The letter \(h\) denotes the coordinate function \(y=h(s,t)\), and \(g\) denotes \(x=g(s,t)\).

  - Hold \(t\) fixed when differentiating in \(s\). The **speeds** in that direction are \(g_s\) and \(h_s\).
  - Hold \(s\) fixed when differentiating in \(t\). The speeds in that direction are \(g_t\) and \(h_t\).
:::

::: key-points
text: |
  - If \(f(x,y)\) is differentiable, \(x=g(s,t)\) and \(y=h(s,t)\), and the relevant partial derivatives exist, then \(\frac{\partial f}{\partial s}=f_x g_s+f_y h_s\) and \(\frac{\partial f}{\partial t}=f_x g_t+f_y h_t\).
  - The \(s\)-derivative holds \(t\) fixed and uses the speeds \(g_s\) and \(h_s\). The \(t\)-derivative holds \(s\) fixed and uses the speeds \(g_t\) and \(h_t\).
:::

::: concept-question
id: l5-chain-rule-general.q-e92b1ee2
question: |
  Let \(x=g(s,t)\) and \(y=h(s,t)\). Which expression equals \(\frac{\partial f}{\partial s}\)?
options:
  - text: |
      \(f_x g_s+f_y h_s\)
    correct: true
  - text: |
      \(f_x g_t+f_y h_t\)
  - text: |
      \(f_s g_x+f_s h_y\)
explanation: |
  The \(s\)-derivative uses the partial speeds \(g_s\) and \(h_s\). The \(t\)-speeds belong to \(\frac{\partial f}{\partial t}\).
:::

::: exercise
id: l5-chain-rule-general.basic-product
tier: basic
topics: [chain-rule]
statement: |
  Let \(f(x,y)=xy\), with \(x=s+t\) and \(y=s-t\). Compute \(\frac{\partial f}{\partial s}\) and \(\frac{\partial f}{\partial t}\) by the chain rule.
solution: |
  The partial derivatives are \(f_x=y\) and \(f_y=x\). The speeds are
  \[
  x_s=1,\quad y_s=1,\quad x_t=1,\quad y_t=-1.
  \]
  The chain rule gives
  \[
  \begin{aligned}
  \frac{\partial f}{\partial s}&=y\cdot 1+x\cdot 1=x+y,\\
  \frac{\partial f}{\partial t}&=y\cdot 1+x\cdot(-1)=y-x.
  \end{aligned}
  \]
  Along the map, \(x=s+t\) and \(y=s-t\), so \(\frac{\partial f}{\partial s}=2s\) and \(\frac{\partial f}{\partial t}=-2t\).

  The composition is \((s+t)(s-t)=s^2-t^2\). Its partial derivatives are \(2s\) and \(-2t\).
provenance: written-for-site
steps:
  - The chain rule writes the two partials as \(x+y\) and \(y-x\).
  - Substitution of \(x=s+t\) and \(y=s-t\) produces \(2s\) and \(-2t\).
verification:
  checks:
    - expr: '(y*1 + x*1).subs({x: s+t, y: s-t})'
      expected: "2*s"
    - expr: '(y*1 + x*(-1)).subs({x: s+t, y: s-t})'
      expected: "-2*t"
    - expr: 'diff((s+t)*(s-t), s)'
      expected: "2*s"
    - expr: 'diff((s+t)*(s-t), t)'
      expected: "-2*t"
:::

::: section
title: Implicit differentiation
:::

::: formal-statement
kind: method
title: Implicit differentiation
source: { source: handout, section: "14.4", page: 365 }
text: |
  Let \(F(x,y,z)=c\), and suppose \(z=z(x,y)\) at a point where \(F_z\neq 0\). Then
  \[
  \begin{aligned}
  \frac{\partial z}{\partial x}&=-\frac{F_x}{F_z},\\
  \frac{\partial z}{\partial y}&=-\frac{F_y}{F_z}.
  \end{aligned}
  \]
:::

::: plain-explanation
text: |
  On the **level set**, \(F\) is constant, so its derivative with respect to \(x\) equals \(0\). The chain rule, with \(y\) held fixed, expands that derivative as
  \[
  0=F_x\cdot 1+F_y\cdot 0+F_z\frac{\partial z}{\partial x}.
  \]
  Solving for the \(z\)-derivative produces \(-\frac{F_x}{F_z}\). The derivative with respect to \(y\) uses the same expansion with \(x\) held fixed.
:::

::: visual
kind: quadric
caption: |
  The sphere \(x^2+y^2+z^2=4\) is drawn as \(x^2/4+y^2/4+z^2/4=1\). The cut axis is \(y\), so each slice value holds \(y\) fixed. Where the plane cuts the sphere, the highlighted curve is the sphere at that value of \(y\), and its slope where \(z\neq 0\) is \(\frac{\partial z}{\partial x}\).
params:
  surface: sphere
  a: 2
  b: 2
  c: 2
  axis: y
  slice: 0
:::

::: worked-example
title: Slope on the sphere
problem: |
  The sphere \(x^2+y^2+z^2=4\) defines \(z\) as a function of \(x\) and \(y\) where \(z\neq 0\). Compute \(\frac{\partial z}{\partial x}\).
solution: |
  Let \(F(x,y,z)=x^2+y^2+z^2\). The sphere is the level \(F=4\). The partial derivatives are
  \[
  F_x=2x,\qquad F_y=2y,\qquad F_z=2z.
  \]

  On the sphere, \(F\) is constant, so its derivative with respect to \(x\) equals \(0\). With \(y\) held fixed, \(\frac{\partial y}{\partial x}=0\) and \(\frac{\partial x}{\partial x}=1\). The chain rule gives
  \[
  \begin{aligned}
  0&=2x\cdot 1+2y\cdot 0+2z\frac{\partial z}{\partial x}\\
  &=2x+2z\frac{\partial z}{\partial x}.
  \end{aligned}
  \]
  Where \(z\neq 0\), one has \(F_z\neq 0\), and
  \[
  \frac{\partial z}{\partial x}=-\frac{x}{z}.
  \]
  The general formula agrees:
  \[
  -\frac{F_x}{F_z}=-\frac{2x}{2z}=-\frac{x}{z}.
  \]
:::

::: guided-example
title: Implicit derivative on \(x+y+z^2=4\)
problem: |
  Suppose \(z=z(x,y)\) on the surface \(x+y+z^2=4\), at a point where \(z\neq 0\). Compute \(\frac{\partial z}{\partial x}\).
steps:
  - |
    Let \(F(x,y,z)=x+y+z^2\). On the surface, \(F=4\), so the derivative of \(F\) with respect to \(x\) equals \(0\).
  - |
    The partial derivatives are \(F_x=1\), \(F_y=1\) and \(F_z=2z\). With \(y\) held fixed, \(\frac{\partial y}{\partial x}=0\).
  - |
    The chain rule gives
    \[
    0=1+2z\frac{\partial z}{\partial x}.
    \]
    Where \(z\neq 0\), \(\frac{\partial z}{\partial x}=-\frac{1}{2z}\).
  - |
    The positive branch \(z=\sqrt{4-x-y}\) has derivative \(-\frac{1}{2\sqrt{4-x-y}}\), which equals \(-\frac{1}{2z}\).
:::

::: trap
text: |
  Differentiation in \(x\) on a level set \(F(x,y,z)=c\) holds \(y\) fixed, so \(\frac{\partial y}{\partial x}=0\). For the sphere \(x^2+y^2+z^2=4\), the derivative is
  \[
  \frac{\partial z}{\partial x}=-\frac{x}{z}\quad\text{when } z\neq 0.
  \]
  Treating \(\frac{\partial y}{\partial x}\) as \(1\) produces \(-\frac{x+y}{z}\). The point \((0,1,\sqrt{3})\) lies on the sphere. There the correct derivative equals \(0\), and the other expression equals \(-\frac{1}{\sqrt{3}}\).
:::

::: trap
text: |
  The formulas
  \[
  \begin{aligned}
  \frac{\partial z}{\partial x}&=-\frac{F_x}{F_z},\\
  \frac{\partial z}{\partial y}&=-\frac{F_y}{F_z}
  \end{aligned}
  \]
  require \(F_z\neq 0\). On \(x^2+y^2+z^2=4\), the partial \(F_z\) equals \(2z\). The point \((2,0,0)\) lies on the sphere, and there \(F_z=0\), so \(-\frac{x}{z}\) is undefined.
:::

::: key-points
text: |
  - If \(F(x,y,z)=c\) defines \(z=z(x,y)\) at a point where \(F_z\neq 0\), then \(\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}\) and \(\frac{\partial z}{\partial y}=-\frac{F_y}{F_z}\).
  - The formulas require \(F_z\neq 0\). On \(x^2+y^2+z^2=4\) they give \(\frac{\partial z}{\partial x}=-\frac{x}{z}\) where \(z\neq 0\), and at \((2,0,0)\) the quotient is undefined.
  - The usual slip treats \(\frac{\partial y}{\partial x}\) as \(1\) when differentiating in \(x\). On the sphere it gives \(-\frac{x+y}{z}\). The variable \(y\) is held fixed, so \(\frac{\partial y}{\partial x}=0\) and the derivative is \(-\frac{x}{z}\).
:::

::: concept-question
id: l5-chain-rule-general.q-377dcf78
question: |
  For \(F(x,y,z)=c\) at a point where \(F_z\neq 0\), which expression equals \(\frac{\partial z}{\partial x}\)?
options:
  - text: |
      \(-\dfrac{F_x}{F_z}\)
    correct: true
  - text: |
      \(-\dfrac{F_z}{F_x}\)
  - text: |
      \(\dfrac{F_x}{F_z}\)
explanation: |
  The chain rule gives \(0=F_x+F_z\frac{\partial z}{\partial x}\) when \(y\) is held fixed. Solving for the \(z\)-derivative produces \(-\frac{F_x}{F_z}\).
:::

::: concept-question
id: l5-chain-rule-general.q-2084200f
question: |
  On the sphere \(x^2+y^2+z^2=4\), where \(z\neq 0\), which expression equals \(\frac{\partial z}{\partial x}\)?
options:
  - text: |
      \(-\dfrac{x}{z}\)
    correct: true
  - text: |
      \(-\dfrac{2x}{z}\)
  - text: |
      \(-\dfrac{x}{2z}\)
explanation: |
  Here \(F_x=2x\) and \(F_z=2z\). The quotient \(-\frac{F_x}{F_z}\) cancels the factor \(2\), and the derivative equals \(-\frac{x}{z}\).
:::

::: concept-question
id: l5-chain-rule-general.q-5dd4c494
question: |
  On the sphere \(x^2+y^2+z^2=4\), let \(F(x,y,z)=x^2+y^2+z^2\). What happens to the formula \(\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}\) at the point \((2,0,0)\)?
options:
  - text: |
      It cannot be used there, because \(F_z=0\).
    correct: true
  - text: |
      It gives \(\frac{\partial z}{\partial x}=0\), because \(z=0\) at the point.
  - text: |
      It gives \(\frac{\partial z}{\partial x}=-2\), because \(F_x=4\) and \(F_z=2\) there.
explanation: |
  At \((2,0,0)\) one has \(F_x=4\) and \(F_z=2z=0\). The formula divides by \(F_z\), so the quotient \(-\frac{x}{z}\) is undefined there. The value \(z=0\) sits in the denominator, so it does not make the derivative \(0\).
:::

::: exercise
id: l5-chain-rule-general.standard-implicit
tier: standard
topics: [chain-rule, implicit-differentiation]
statement: |
  Suppose \(z\) is a function of \(x\) and \(y\) on the surface \(e^z+x^2+y^2=1\). Compute \(\frac{\partial z}{\partial x}\) and \(\frac{\partial z}{\partial y}\).
solution: |
  Let \(F(x,y,z)=e^z+x^2+y^2\). The partial derivatives are
  \[
  F_x=2x,\qquad F_y=2y,\qquad F_z=e^z.
  \]
  The value \(e^z\) is never \(0\), so the implicit formulas apply:
  \[
  \begin{aligned}
  \frac{\partial z}{\partial x}&=-\frac{F_x}{F_z}=-\frac{2x}{e^z}=-2xe^{-z},\\
  \frac{\partial z}{\partial y}&=-\frac{F_y}{F_z}=-2ye^{-z}.
  \end{aligned}
  \]
provenance: written-for-site
steps:
  - The partial derivatives of \(F\) are \(2x\), \(2y\) and \(e^z\).
  - Since \(e^z\neq 0\), the quotients \(-\frac{F_x}{F_z}\) and \(-\frac{F_y}{F_z}\) are defined.
  - They equal \(-2xe^{-z}\) and \(-2ye^{-z}\).
verification:
  checks:
    - expr: '-diff(exp(z)+x**2+y**2, x)/diff(exp(z)+x**2+y**2, z)'
      expected: "-2*x*exp(-z)"
    - expr: '-diff(exp(z)+x**2+y**2, y)/diff(exp(z)+x**2+y**2, z)'
      expected: "-2*y*exp(-z)"
:::

::: exercise
id: l5-chain-rule-general.final-2022-q3c
tier: exam
topics: [chain-rule, jacobian]
examBlock: chain-rule
pastExam:
  year: 2022
  paper: Final
  question: "3c"
  points: 1
statement: |
  Let \(f(x, y) = x^2 - y^2\), let \(\vec N(t, s) = (t + s,\ t - s)\) and let \(\psi(t, s) = f(\vec N(t, s))\). Compute the Jacobian matrix of \(\vec N\), then the gradient of \(\psi\) by the chain rule.
solution: |
  The components of \(\vec N\) are \(t + s\) and \(t - s\). Their partial derivatives, in columns for \(t\) and for \(s\), give the Jacobian
  \[ J = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}. \]

  The gradient of \(f\) is \(\nabla f = (2x, -2y)\). The chain rule multiplies that column by \(J\):
  \[
  \begin{aligned}
  \nabla \psi &= \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\\
  &\qquad \begin{pmatrix} 2x \\ -2y \end{pmatrix}\\
  &= (2x - 2y,\ 2x + 2y).
  \end{aligned}
  \]
  Here \(x = t + s\) and \(y = t - s\) are the coordinates of \(\vec N\).

  Substituting those coordinates,
  \[
  \begin{aligned}
  2x-2y&=2(t+s)-2(t-s)=4s,\\
  2x+2y&=2(t+s)+2(t-s)=4t.
  \end{aligned}
  \]
  Along the map, \(\nabla \psi = (4s, 4t)\).

  Expanding directly, \(\psi(t, s) = (t + s)^2 - (t - s)^2 = 4ts\), and the gradient of \(4ts\) is the same pair \((4s, 4t)\).
provenance: official-key
steps:
  - The Jacobian of \(\vec N\) is the matrix with rows \((1, 1)\) and \((1, -1)\).
  - The chain rule gives \(\nabla \psi = (2x - 2y,\ 2x + 2y)\).
  - Along \(\vec N\), that gradient equals \((4s, 4t)\).
verification:
  checks:
    - expr: '((diff(t + s, t), diff(t + s, s)), (diff(t - s, t), diff(t - s, s)))'
      expected: ((1, 1), (1, -1))
    - expr: '(2*x*1 + (-2*y)*1, 2*x*1 + (-2*y)*(-1))'
      expected: (2*x - 2*y, 2*x + 2*y)
    - expr: '((2*x - 2*y).subs({x: t + s, y: t - s}), (2*x + 2*y).subs({x: t + s, y: t - s}))'
      expected: (4*s, 4*t)
    - expr: '(diff((t + s)**2 - (t - s)**2, t), diff((t + s)**2 - (t - s)**2, s))'
      expected: (4*s, 4*t)
:::

::: sheet-item
id: l5-chain-rule-general.sheet-formula
category: formula
text: |
  If \(x=g(s,t)\) and \(y=h(s,t)\), then
  \[
  \begin{aligned}
  \frac{\partial f}{\partial s}&=f_x g_s+f_y h_s,\\
  \frac{\partial f}{\partial t}&=f_x g_t+f_y h_t.
  \end{aligned}
  \]
  If \(F(x,y,z)=c\) and \(F_z\neq 0\), then
  \[
  \begin{aligned}
  \frac{\partial z}{\partial x}&=-\frac{F_x}{F_z},\\
  \frac{\partial z}{\partial y}&=-\frac{F_y}{F_z}.
  \end{aligned}
  \]
:::

::: sheet-item
id: l5-chain-rule-general.sheet-fz
category: trap
text: |
  The implicit formulas require \(F_z\neq 0\). When differentiating in \(x\), the variable \(y\) is held fixed, so \(\frac{\partial y}{\partial x}=0\).
:::

::: exercise
id: l5-chain-rule-general.ex-sphere-second-derivative
tier: exam
topics: [chain-rule, implicit-differentiation]
statement: |
  Near the point \((1,1,1)\), the surface \(x^2+2y^2+z^2=4\) defines \(z=z(x,y)\) with \(z>0\).

  - a) Compute \(\frac{\partial z}{\partial x}\) and \(\frac{\partial z}{\partial y}\), and evaluate them at \((x,y)=(1,1)\).
  - b) Compute \(\frac{\partial^2 z}{\partial x^2}\) as a function of \(x\), \(y\) and \(z\), and evaluate it at \((1,1)\).
solution: |
  a) Let \(F(x,y,z)=x^2+2y^2+z^2\). The surface is the level \(F=4\), with \(F_x=2x\), \(F_y=4y\) and \(F_z=2z\). At the point \(F_z=2\neq 0\), so the implicit formulas apply:
  \[
  \begin{aligned}
  \frac{\partial z}{\partial x}&=-\frac{F_x}{F_z}=-\frac{x}{z},\\
  \frac{\partial z}{\partial y}&=-\frac{F_y}{F_z}=-\frac{2y}{z}.
  \end{aligned}
  \]
  At \((1,1)\) the height is \(z=1\), so \(\frac{\partial z}{\partial x}=-1\) and \(\frac{\partial z}{\partial y}=-2\).

  b) Differentiate \(\frac{\partial z}{\partial x}=-\frac{x}{z}\) in \(x\), with \(y\) held fixed. The variable \(z\) depends on \(x\), so the quotient rule gives
  \[
  \begin{aligned}
  \frac{\partial^2 z}{\partial x^2}&=-\frac{1\cdot z-x\,\frac{\partial z}{\partial x}}{z^2}\\
  &=-\frac{z+\frac{x^2}{z}}{z^2}\\
  &=-\frac{z^2+x^2}{z^3}.
  \end{aligned}
  \]
  On the surface \(z^2=4-x^2-2y^2\), so \(z^2+x^2=4-2y^2\) and
  \[
  \frac{\partial^2 z}{\partial x^2}=-\frac{4-2y^2}{z^3}.
  \]
  At \((1,1)\) the numerator is \(2\) and \(z^3=1\), so the value is \(-2\).

  Check with the explicit branch \(z=\sqrt{4-x^2-2y^2}\): its second derivative in \(x\) at \((1,1)\) is the same number.
provenance: written-for-site
steps:
  - The implicit formulas give z_x = -x/z and z_y = -2y/z, equal to -1 and -2 at (1,1).
  - Differentiating -x/z in x with z depending on x gives -(z^2+x^2)/z^3.
  - Substituting the constraint gives -(4-2y^2)/z^3, which equals -2 at (1,1).
verification:
  checks:
    - expr: '-diff(x**2+2*y**2+z**2,x)/diff(x**2+2*y**2+z**2,z)'
      expected: "-x/z"
    - expr: '-diff(x**2+2*y**2+z**2,y)/diff(x**2+2*y**2+z**2,z)'
      expected: "-2*y/z"
    - expr: 'diff(sqrt(4-x**2-2*y**2),x).subs({x:1,y:1})'
      expected: "-1"
    - expr: 'diff(sqrt(4-x**2-2*y**2),y).subs({x:1,y:1})'
      expected: "-2"
    - expr: 'simplify(diff(sqrt(4-x**2-2*y**2),x,2) + (4-2*y**2)/sqrt(4-x**2-2*y**2)**3)'
      expected: "0"
    - expr: 'diff(sqrt(4-x**2-2*y**2),x,2).subs({x:1,y:1})'
      expected: "-2"
    - expr: '(-(4-2*y**2)/z**3).subs({y:1,z:1})'
      expected: "-2"
:::

::: exercise
id: l5-chain-rule-general.ex-two-parameter-exponential
tier: standard
topics: [chain-rule]
statement: |
  Let \(f(x,y)=x\,e^{y}\), with \(x=s^2+t\) and \(y=st\).

  - a) Compute \(\frac{\partial f}{\partial s}\) and \(\frac{\partial f}{\partial t}\) by the chain rule, as functions of \(s\) and \(t\).
  - b) Evaluate both at \((s,t)=(1,1)\).
  - c) Confirm the values by composing first and then differentiating.
solution: |
  a) The partials are \(f_x=e^{y}\) and \(f_y=x\,e^{y}\). The speeds are \(x_s=2s\), \(x_t=1\), \(y_s=t\) and \(y_t=s\). The chain rule gives
  \[
  \begin{aligned}
  \frac{\partial f}{\partial s}&=f_x x_s+f_y y_s=e^{y}\cdot 2s+x\,e^{y}\cdot t,\\
  \frac{\partial f}{\partial t}&=f_x x_t+f_y y_t=e^{y}\cdot 1+x\,e^{y}\cdot s.
  \end{aligned}
  \]
  Substituting \(x=s^2+t\) and \(y=st\),
  \[
  \begin{aligned}
  \frac{\partial f}{\partial s}&=e^{st}\bigl(2s+(s^2+t)t\bigr),\\
  \frac{\partial f}{\partial t}&=e^{st}\bigl(1+(s^2+t)s\bigr).
  \end{aligned}
  \]

  b) At \((s,t)=(1,1)\) one has \(x=2\) and \(y=1\), so \(e^{st}=e\). Then
  \[
  \begin{aligned}
  \frac{\partial f}{\partial s}&=e\,(2+2)=4e,\\
  \frac{\partial f}{\partial t}&=e\,(1+2)=3e.
  \end{aligned}
  \]

  c) The composition is \(g(s,t)=(s^2+t)\,e^{st}\). The product rule gives
  \[
  \begin{aligned}
  g_s&=2s\,e^{st}+(s^2+t)\,t\,e^{st},\\
  g_t&=e^{st}+(s^2+t)\,s\,e^{st}.
  \end{aligned}
  \]
  At \((1,1)\) these equal \(4e\) and \(3e\).
provenance: written-for-site
steps:
  - The chain rule gives f_s = e^y 2s + x e^y t and f_t = e^y + x e^y s.
  - After substituting x = s^2 + t and y = st, the values at (1,1) are 4e and 3e.
  - The product rule on (s^2+t) e^(st) gives the same two values.
verification:
  checks:
    - expr: 'simplify(diff((s**2+t)*exp(s*t),s) - exp(s*t)*(2*s+(s**2+t)*t))'
      expected: "0"
    - expr: 'simplify(diff((s**2+t)*exp(s*t),t) - exp(s*t)*(1+(s**2+t)*s))'
      expected: "0"
    - expr: 'diff((s**2+t)*exp(s*t),s).subs({s:1,t:1})'
      expected: "4*exp(1)"
    - expr: 'diff((s**2+t)*exp(s*t),t).subs({s:1,t:1})'
      expected: "3*exp(1)"
    - expr: '(exp(y)*2*s + x*exp(y)*t).subs({x:s**2+t,y:s*t})'
      expected: "exp(s*t)*(2*s+(s**2+t)*t)"
    - expr: '(exp(y)*1 + x*exp(y)*s).subs({x:s**2+t,y:s*t})'
      expected: "exp(s*t)*(1+(s**2+t)*s)"
:::

::: exercise
id: l5-chain-rule-general.handout-14-4-3
number: "14.4.3"
tier: standard
topics:
  - chain-rule
statement: |
  Use the chain rule to compute \(z_s\) and \(z_t\) for
  \[
  z=x^2y,\qquad x=\sin(st),\quad y=t^2+s^2.
  \]
solution: |
  The partial derivatives of \(z\) are \(z_x=2xy\) and \(z_y=x^2\). The speeds are
  \[
  x_s=t\cos(st),\quad x_t=s\cos(st),\quad y_s=2s,\quad y_t=2t.
  \]
  The chain rule gives
  \[
  \begin{aligned}
  z_s&=z_x x_s+z_y y_s\\
  &=2xy\,t\cos(st)+x^2\cdot 2s,\\
  z_t&=z_x x_t+z_y y_t\\
  &=2xy\,s\cos(st)+x^2\cdot 2t.
  \end{aligned}
  \]
  Substituting \(x=\sin(st)\) and \(y=t^2+s^2\), and using \(2\sin(st)\cos(st)=\sin(2st)\),
  \[
  \begin{aligned}
  z_s&=t(t^2+s^2)\sin(2st)+2s\sin^2(st),\\
  z_t&=s(t^2+s^2)\sin(2st)+2t\sin^2(st).
  \end{aligned}
  \]
  The composition is \(\sin^2(st)\,(t^2+s^2)\). Differentiating it by the product rule gives the same two expressions.
provenance: handout-answer
steps:
  - The partial derivatives of z are 2xy and x^2, and the speeds are t cos(st), s cos(st), 2s and 2t.
  - The chain rule gives z_s = 2xyt cos(st) + 2x^2 s and z_t = 2xys cos(st) + 2x^2 t.
  - Substituting x and y gives the closed forms with sin(2st) and sin^2(st).
verification:
  checks:
    - expr: '(2*x*y*t*cos(s*t) + 2*x**2*s).subs({x: sin(s*t), y: t**2 + s**2}) - diff(sin(s*t)**2*(t**2 + s**2), s)'
      expected: "0"
    - expr: '(2*x*y*s*cos(s*t) + 2*x**2*t).subs({x: sin(s*t), y: t**2 + s**2}) - diff(sin(s*t)**2*(t**2 + s**2), t)'
      expected: "0"
    - expr: 'diff(sin(s*t)**2*(t**2 + s**2), s) - (t*(t**2 + s**2)*sin(2*s*t) + 2*s*sin(s*t)**2)'
      expected: "0"
    - expr: 'diff(sin(s*t)**2*(t**2 + s**2), t) - (s*(t**2 + s**2)*sin(2*s*t) + 2*t*sin(s*t)**2)'
      expected: "0"
:::


::: exercise
id: l5-chain-rule-general.handout-14-4-5
number: "14.4.5"
tier: standard
topics:
  - chain-rule
  - implicit-differentiation
statement: |
  Use implicit differentiation to compute \(z_x\) and \(z_y\) for the surface
  \[
  2x^2+3y^2-2z^2=9.
  \]
solution: |
  Let \(F(x,y,z)=2x^2+3y^2-2z^2-9\). The surface is the level \(F=0\), and
  \[
  F_x=4x,\qquad F_y=6y,\qquad F_z=-4z.
  \]
  The implicit formulas need \(F_z\neq 0\), that is \(z\neq 0\). Where that holds,
  \[
  \begin{aligned}
  z_x&=-\frac{F_x}{F_z}=-\frac{4x}{-4z}=\frac{x}{z},\\
  z_y&=-\frac{F_y}{F_z}=-\frac{6y}{-4z}=\frac{3y}{2z}.
  \end{aligned}
  \]
  On the branch \(z=\sqrt{(2x^2+3y^2-9)/2}\) the direct derivative in \(x\) is
  \[
  \frac{\partial}{\partial x}\sqrt{\frac{2x^2+3y^2-9}{2}}=\frac{2x}{2z}=\frac{x}{z},
  \]
  and the derivative in \(y\) is \(\frac{3y}{2z}\), as the formulas give.
provenance: handout-answer
steps:
  - F_x = 4x, F_y = 6y and F_z = -4z, so the formulas apply where z is not 0.
  - z_x = x/z and z_y = 3y/(2z).
  - The explicit branch gives the same derivatives.
verification:
  checks:
    - expr: '-diff(2*x**2 + 3*y**2 - 2*z**2 - 9, x)/diff(2*x**2 + 3*y**2 - 2*z**2 - 9, z)'
      expected: "x/z"
    - expr: '-diff(2*x**2 + 3*y**2 - 2*z**2 - 9, y)/diff(2*x**2 + 3*y**2 - 2*z**2 - 9, z)'
      expected: "3*y/(2*z)"
    - expr: 'simplify(diff(sqrt((2*x**2 + 3*y**2 - 9)/2), x) - x/sqrt((2*x**2 + 3*y**2 - 9)/2))'
      expected: "0"
    - expr: 'simplify(diff(sqrt((2*x**2 + 3*y**2 - 9)/2), y) - 3*y/(2*sqrt((2*x**2 + 3*y**2 - 9)/2)))'
      expected: "0"
:::


::: exercise
id: l5-chain-rule-general.handout-14-4-7
number: "14.4.7"
tier: standard
topics:
  - chain-rule
  - related-rates
statement: |
  The ideal gas law \(PV=nRT\) relates the pressure \(P\), the volume \(V\) and the temperature \(T\) of \(n\) moles of gas. The number \(R\) is a constant. Each of \(P\), \(V\) and \(T\) is a function of time \(t\).

  - a) The pressure increases at \(0.2\) Pa/min and the temperature increases at \(1\) K/min. How fast does the volume change?
  - b) The volume decreases at \(0.3\) m\(^3\)/min and the temperature increases at \(0.5\) K/min. How fast does the pressure change?
  - c) The pressure decreases at \(0.4\) Pa/min and the volume increases at \(3\) volume units per minute, in the unit used for \(V\). How fast does the temperature change?

  Give each answer in terms of \(n\), \(R\) and the current \(P\), \(V\) and \(T\).
solution: |
  Let \(F(P,V,T)=PV-nRT\). The law says \(F\) is constant along the motion, so its derivative in \(t\) equals \(0\). The chain rule gives
  \[
  V\,P'+P\,V'-nR\,T'=0,
  \]
  where the primes are derivatives in \(t\). Each part substitutes two rates and solves for the third.

  a) With \(P'=0.2\) and \(T'=1\),
  \[
  \begin{aligned}
  0.2\,V+P\,V'&=nR,\\
  V'&=\frac{nR-0.2\,V}{P}.
  \end{aligned}
  \]

  b) With \(V'=-0.3\) and \(T'=0.5\),
  \[
  \begin{aligned}
  V\,P'-0.3\,P&=0.5\,nR,\\
  P'&=\frac{0.5\,nR+0.3\,P}{V}=\frac{nR+0.6\,P}{2V}.
  \end{aligned}
  \]

  c) With \(P'=-0.4\) and \(V'=3\),
  \[
  \begin{aligned}
  -0.4\,V+3P&=nR\,T',\\
  T'&=\frac{3P-0.4\,V}{nR}.
  \end{aligned}
  \]
provenance: handout-answer
steps:
  - The chain rule on PV - nRT = 0 gives V P' + P V' = nR T'.
  - Part a gives V' = (nR - 0.2V)/P.
  - Part b gives P' = (nR + 0.6P)/(2V).
  - Part c gives T' = (3P - 0.4V)/(nR).
verification:
  checks:
    - expr: 'solve(Rational(1, 5)*V + P*Vd - n*R, Vd)[0]'
      expected: "(n*R - Rational(1, 5)*V)/P"
    - expr: 'solve(V*Pd - Rational(3, 10)*P - Rational(1, 2)*n*R, Pd)[0]'
      expected: "(n*R + Rational(3, 5)*P)/(2*V)"
    - expr: 'solve(-Rational(2, 5)*V + 3*P - n*R*Td, Td)[0]'
      expected: "(3*P - Rational(2, 5)*V)/(n*R)"
:::


::: exercise
id: l5-chain-rule-general.handout-14-4-8
number: "14.4.8"
tier: standard
topics:
  - chain-rule
  - implicit-differentiation
statement: |
  For the ideal gas law \(PV=nRT\), verify that
  \[
  \frac{\partial P}{\partial V}\,\frac{\partial V}{\partial T}\,\frac{\partial T}{\partial P}=-1,
  \]
  where each variable is written as a function of the other two.
solution: |
  Solve the law for each variable in turn, and differentiate with the third variable held fixed:
  \[
  \begin{aligned}
  P&=\frac{nRT}{V},&\quad \frac{\partial P}{\partial V}&=-\frac{nRT}{V^2},\\
  V&=\frac{nRT}{P},&\quad \frac{\partial V}{\partial T}&=\frac{nR}{P},\\
  T&=\frac{PV}{nR},&\quad \frac{\partial T}{\partial P}&=\frac{V}{nR}.
  \end{aligned}
  \]
  The product is
  \[
  \left(-\frac{nRT}{V^2}\right)\frac{nR}{P}\cdot\frac{V}{nR}=-\frac{nRT}{PV}.
  \]
  The law says \(PV=nRT\), so the quotient equals \(1\) and the product equals \(-1\).

  The three derivatives are not fractions that cancel. If they were, the product would be \(+1\).
provenance: written-for-site
steps:
  - The three partial derivatives are -nRT/V^2, nR/P and V/(nR).
  - Their product is -nRT/(PV).
  - The law PV = nRT turns that quotient into -1.
verification:
  checks:
    - expr: 'diff(n*R*T/V, V)'
      expected: "-n*R*T/V**2"
    - expr: 'diff(n*R*T/P, T)'
      expected: "n*R/P"
    - expr: 'diff(P*V/(n*R), P)'
      expected: "V/(n*R)"
    - expr: '(diff(n*R*T/V, V)*diff(n*R*T/P, T)*diff(P*V/(n*R), P)).subs(T, P*V/(n*R))'
      expected: "-1"
:::


::: exercise
id: l5-chain-rule-general.handout-14-4-9
number: "14.4.9"
tier: exam
topics:
  - chain-rule
  - implicit-differentiation
statement: |
  Let \(F(x,y,z)\) be a function of three variables, and suppose \(F(x,y,z)=0\) defines each variable in terms of the other two: \(x=f(y,z)\), \(y=g(x,z)\) and \(z=h(x,y)\). Show that
  \[
  \frac{\partial x}{\partial y}\,\frac{\partial y}{\partial z}\,\frac{\partial z}{\partial x}=-1.
  \]
solution: |
  Assume \(F\) is differentiable and \(F_x\), \(F_y\) and \(F_z\) are all nonzero at the point.

  Substituting \(x=f(y,z)\) gives \(F(f(y,z),y,z)=0\) for all \(y\) and \(z\). Differentiate in \(y\), with \(z\) held fixed:
  \[
  F_x\frac{\partial x}{\partial y}+F_y=0
  \quad\Longrightarrow\quad
  \frac{\partial x}{\partial y}=-\frac{F_y}{F_x}.
  \]
  Substituting \(y=g(x,z)\) and differentiating in \(z\), with \(x\) held fixed:
  \[
  F_y\frac{\partial y}{\partial z}+F_z=0
  \quad\Longrightarrow\quad
  \frac{\partial y}{\partial z}=-\frac{F_z}{F_y}.
  \]
  Substituting \(z=h(x,y)\) and differentiating in \(x\), with \(y\) held fixed:
  \[
  F_x+F_z\frac{\partial z}{\partial x}=0
  \quad\Longrightarrow\quad
  \frac{\partial z}{\partial x}=-\frac{F_x}{F_z}.
  \]
  Multiplying the three quotients,
  \[
  \left(-\frac{F_y}{F_x}\right)\left(-\frac{F_z}{F_y}\right)\left(-\frac{F_x}{F_z}\right)=-1.
  \]
  Each of \(F_x\), \(F_y\) and \(F_z\) appears once in a numerator and once in a denominator, and the three minus signs multiply to \(-1\).
provenance: written-for-site
steps:
  - Differentiating F = 0 in each case gives x_y = -F_y/F_x, y_z = -F_z/F_y and z_x = -F_x/F_z.
  - The factors F_x, F_y and F_z cancel in pairs.
  - The three minus signs leave the product -1.
verification:
  checks:
    - expr: '(-Fy/Fx)*(-Fz/Fy)*(-Fx/Fz)'
      expected: "-1"
    - expr: 'simplify((-diff(x*exp(y) + y*z**2 - z, y)/diff(x*exp(y) + y*z**2 - z, x))*(-diff(x*exp(y) + y*z**2 - z, z)/diff(x*exp(y) + y*z**2 - z, y))*(-diff(x*exp(y) + y*z**2 - z, x)/diff(x*exp(y) + y*z**2 - z, z)))'
      expected: "-1"
:::


::: exercise
id: l5-chain-rule-general.handout-14-6-8
number: "14.6.8"
tier: exam
topics:
  - chain-rule
  - implicit-differentiation
statement: |
  Find all first and second partial derivatives of \(z\) with respect to \(x\) and \(y\) if
  \[
  x^2+4y^2+16z^2-64=0.
  \]
solution: |
  Let \(F(x,y,z)=x^2+4y^2+16z^2-64\). Then \(F_x=2x\), \(F_y=8y\) and \(F_z=32z\). Where \(z\neq 0\), the implicit formulas give
  \[
  \begin{aligned}
  z_x&=-\frac{2x}{32z}=-\frac{x}{16z},\\
  z_y&=-\frac{8y}{32z}=-\frac{y}{4z}.
  \end{aligned}
  \]

  For the second derivatives, differentiate these quotients again. The variable \(z\) depends on \(x\) and \(y\), so the quotient rule uses \(z_x\) and \(z_y\).

  In \(x\),
  \[
  \begin{aligned}
  z_{xx}&=-\frac{1}{16}\cdot\frac{z-x\,z_x}{z^2}\\
  &=-\frac{1}{16}\cdot\frac{z+\frac{x^2}{16z}}{z^2}\\
  &=-\frac{16z^2+x^2}{256\,z^3}.
  \end{aligned}
  \]

  In \(y\),
  \[
  \begin{aligned}
  z_{yy}&=-\frac{1}{4}\cdot\frac{z-y\,z_y}{z^2}\\
  &=-\frac{1}{4}\cdot\frac{z+\frac{y^2}{4z}}{z^2}\\
  &=-\frac{4z^2+y^2}{16\,z^3}.
  \end{aligned}
  \]

  For the mixed derivative, differentiate \(z_x=-\frac{x}{16z}\) in \(y\). Only \(z\) depends on \(y\), and the derivative of \(\frac{1}{z}\) is \(-\frac{z_y}{z^2}\), so
  \[
  \begin{aligned}
  z_{xy}&=\frac{x\,z_y}{16z^2}\\
  &=\frac{x}{16z^2}\left(-\frac{y}{4z}\right)\\
  &=-\frac{xy}{64\,z^3}.
  \end{aligned}
  \]
  Differentiating \(z_y\) in \(x\) gives the same expression, so \(z_{yx}=z_{xy}\).
provenance: handout-answer
steps:
  - The implicit formulas give z_x = -x/(16z) and z_y = -y/(4z).
  - The quotient rule, with z depending on x, gives z_xx = -(16z^2 + x^2)/(256 z^3).
  - The same step in y gives z_yy = -(4z^2 + y^2)/(16 z^3).
  - The mixed derivative is z_xy = -xy/(64 z^3).
verification:
  checks:
    - expr: 'simplify(diff(sqrt(64 - x**2 - 4*y**2)/4, x) + x/(16*(sqrt(64 - x**2 - 4*y**2)/4)))'
      expected: "0"
    - expr: 'simplify(diff(sqrt(64 - x**2 - 4*y**2)/4, y) + y/(4*(sqrt(64 - x**2 - 4*y**2)/4)))'
      expected: "0"
    - expr: 'simplify(diff(sqrt(64 - x**2 - 4*y**2)/4, x, 2) + (16*(sqrt(64 - x**2 - 4*y**2)/4)**2 + x**2)/(256*(sqrt(64 - x**2 - 4*y**2)/4)**3))'
      expected: "0"
    - expr: 'simplify(diff(sqrt(64 - x**2 - 4*y**2)/4, y, 2) + (4*(sqrt(64 - x**2 - 4*y**2)/4)**2 + y**2)/(16*(sqrt(64 - x**2 - 4*y**2)/4)**3))'
      expected: "0"
    - expr: 'simplify(diff(sqrt(64 - x**2 - 4*y**2)/4, x, y) + x*y/(64*(sqrt(64 - x**2 - 4*y**2)/4)**3))'
      expected: "0"
    - expr: 'simplify(diff(sqrt(64 - x**2 - 4*y**2)/4, y, x) + x*y/(64*(sqrt(64 - x**2 - 4*y**2)/4)**3))'
      expected: "0"
:::


::: exercise
id: l5-chain-rule-general.handout-14-6-9
number: "14.6.9"
tier: exam
topics:
  - chain-rule
  - implicit-differentiation
statement: |
  Find all first and second partial derivatives of \(z\) with respect to \(x\) and \(y\) if
  \[
  xy+yz+xz=1.
  \]
solution: |
  Let \(F(x,y,z)=xy+yz+xz-1\). Then \(F_x=y+z\), \(F_y=x+z\) and \(F_z=x+y\). Where \(x+y\neq 0\), the implicit formulas give
  \[
  \begin{aligned}
  z_x&=-\frac{y+z}{x+y},\\
  z_y&=-\frac{x+z}{x+y}.
  \end{aligned}
  \]

  Differentiate \(z_x\) in \(x\). The numerator \(y+z\) has \(x\)-derivative \(z_x\), and the denominator \(x+y\) has \(x\)-derivative \(1\). The quotient rule gives
  \[
  z_{xx}=-\frac{z_x(x+y)-(y+z)}{(x+y)^2}.
  \]
  Since \(z_x(x+y)=-(y+z)\), the numerator equals \(-2(y+z)\), and
  \[
  z_{xx}=\frac{2(y+z)}{(x+y)^2}.
  \]

  Differentiate \(z_y\) in \(y\). The same steps, with \(z_y(x+y)=-(x+z)\), give
  \[
  z_{yy}=\frac{2(x+z)}{(x+y)^2}.
  \]

  Differentiate \(z_x\) in \(y\). Now the numerator has \(y\)-derivative \(1+z_y\), and the denominator has \(y\)-derivative \(1\):
  \[
  z_{xy}=-\frac{(1+z_y)(x+y)-(y+z)}{(x+y)^2}.
  \]
  The product \((1+z_y)(x+y)\) equals \((x+y)-(x+z)=y-z\), so the numerator equals \((y-z)-(y+z)=-2z\), and
  \[
  z_{xy}=\frac{2z}{(x+y)^2}.
  \]
  The surface is also the graph \(z=\frac{1-xy}{x+y}\), and differentiating this graph confirms the five expressions.
provenance: handout-answer
steps:
  - The implicit formulas give z_x = -(y+z)/(x+y) and z_y = -(x+z)/(x+y).
  - The quotient rule and the first-derivative formulas give z_xx = 2(y+z)/(x+y)^2 and z_yy = 2(x+z)/(x+y)^2.
  - The mixed derivative is z_xy = 2z/(x+y)^2.
verification:
  checks:
    - expr: 'simplify(diff((1 - x*y)/(x + y), x) + ((y + (1 - x*y)/(x + y))/(x + y)))'
      expected: "0"
    - expr: 'simplify(diff((1 - x*y)/(x + y), y) + ((x + (1 - x*y)/(x + y))/(x + y)))'
      expected: "0"
    - expr: 'simplify(diff((1 - x*y)/(x + y), x, 2) - 2*(y + (1 - x*y)/(x + y))/(x + y)**2)'
      expected: "0"
    - expr: 'simplify(diff((1 - x*y)/(x + y), y, 2) - 2*(x + (1 - x*y)/(x + y))/(x + y)**2)'
      expected: "0"
    - expr: 'simplify(diff((1 - x*y)/(x + y), x, y) - 2*((1 - x*y)/(x + y))/(x + y)**2)'
      expected: "0"
    - expr: 'simplify(diff((1 - x*y)/(x + y), y, x) - 2*((1 - x*y)/(x + y))/(x + y)**2)'
      expected: "0"
:::
