---
id: l2-related-rates
lecture: 2
order: 12
title: Related rates
prerequisites: [l2-implicit-differentiation]
sources:
  - { source: handout, section: "6.2", page: 131 }
examWeight: low
status: reviewed
notation: |
  \(\dot x\) means \(\frac{dx}{dt}\). The same dot on another letter means that quantity's derivative with respect to \(t\). Both \(\dot x\) and \(\frac{dx}{dt}\) name this rate.
---

::: formal-statement
kind: method
title: Related rates
source:
  source: handout
  section: "6.2"
  page: 132
text: |
  If \(y = f(x)\), the chain rule gives the unknown rate directly:
  \[
  \dot y = \frac{dy}{dt} = \frac{dy}{dx}\cdot\frac{dx}{dt} = \frac{dy}{dx}\,\dot x.
  \]

  When the two quantities are tied by an equation, the method has five steps.

  1. Decide what the two variables are.
  2. Find an equation relating them.
  3. Take \(d/dt\) of both sides.
  4. Plug in all known values at the instant in question.
  5. Solve for the unknown rate.
:::

::: plain-explanation
text: |
  Two quantities are both changing with time. You know one rate at a given instant, and you want the other. An equation between the quantities is the link. Differentiate both sides with respect to \(t\) while the letters are still variables. After that, substitute the numbers that hold at the instant, including the known rate. A number put in too early is a constant, and the derivative of a constant is 0, so the unknown rate disappears.

  If one quantity is a function of the other, that differentiation is the chain rule in one line. Evaluate \(\frac{dy}{dx}\) at the current \(x\), then multiply by the given \(\frac{dx}{dt}\).
:::

::: worked-example
title: A plane flying away
problem: |
  A plane flies directly away from you at constant altitude. How fast is the plane's distance from you increasing at the moment when the plane is flying over a point on the ground 4 miles from you?
solution: |
  The altitude is the vertical leg of a right triangle, and it stays 3 miles. Call the horizontal distance \(x\) and the slant distance from you to the plane \(y\). The speed of the plane is the rate \(\dot x\), and that rate is 500 mph. At the instant in question the horizontal distance is 4 miles.

  Pythagoras gives
  \[
  x^{2} + 3^{2} = y^{2},\quad\text{that is}\quad x^{2} + 9 = y^{2}.
  \]
  At this instant \(4^{2} + 3^{2} = y^{2}\), so the slant distance is 5 miles.

  Differentiate both sides with respect to \(t\). The altitude is constant, so the derivative of 9 is 0, and
  \[
  2x\dot x = 2y\dot y.
  \]
  Substitute the known values:
  \[
  2\cdot 4\cdot 500 = 2\cdot 5\cdot\dot y.
  \]
  Therefore \(\dot y = 400\) mph. The rate is positive, so the distance from you to the plane is increasing.
:::

::: guided-example
title: Inflating a sphere
problem: |
  A spherical balloon is inflated at a constant rate. How fast is the radius increasing when the radius is 4 cm? The volume increases at 7 cm\(^{3}\)/s. Take the steps one at a time.
steps:
  - |
    The two variables are the volume \(V\) and the radius \(r\). The known rate is \(\frac{dV}{dt}\), and that rate is 7 cm\(^{3}\)/s. At the instant in question the radius is 4 cm. The unknown rate is \(\dot r\).
  - |
    The volume of a sphere relates the two variables:
    \[
    V = \frac{4}{3}\pi r^{3}.
    \]
  - |
    Differentiate both sides with respect to \(t\). The derivative of \(r^{3}\) contributes \(3r^{2}\dot r\), so
    \[
    \frac{dV}{dt} = 4\pi r^{2}\dot r.
    \]
  - |
    Substitute the known values. The radius is 4 cm, so \(r^{2} = 16\), and \(\frac{dV}{dt} = 7\). The equation becomes
    \[
    \begin{aligned}
    7 &= 4\pi\cdot 16\cdot\dot r,\\
    &\text{that is}\quad 7 = 64\pi\dot r.
    \end{aligned}
    \]
  - |
    Solve for the unknown rate:
    \[
    \dot r = \frac{7}{64\pi}\text{ cm/s}.
    \]
    The rate is positive, so the radius is increasing.
:::

::: trap
text: |
  Two cars move on roads that cross at right angles at a point \(P\). The distance of car A north of \(P\) is \(a = 10\) km, and that distance is increasing at \(\dot a = 80\) km/h. The distance of car B east of \(P\) is \(b = 15\) km, and that distance is increasing at \(\dot b = 100\) km/h. The distance between the cars is \(c\).

  Pythagoras gives
  \[
  \begin{aligned}
  c &= \sqrt{a^{2} + b^{2}}\\
  &= \sqrt{10^{2} + 15^{2}} = \sqrt{325}\\
  &= 5\sqrt{13}\text{ km}.
  \end{aligned}
  \]
  Differentiating \(c^{2} = a^{2} + b^{2}\) gives \(\dot c = (a\dot a + b\dot b)/c\). The numerator is \(10\cdot 80 + 15\cdot 100 = 2300\), so
  \[
  \dot c = \frac{2300}{5\sqrt{13}} = \frac{460}{\sqrt{13}}
  \]
  km/h, about 127.6 km/h. The rate is positive, so the distance is increasing.

  Two wrong figures fail against this result:

  - The figure \(2300/\sqrt{13}\) is about 637.9 km/h. It fails against \(c = 5\sqrt{13}\), because it drops the factor 5 and divides by \(\sqrt{13}\) alone.
  - The figure \(92/\sqrt{13}\) is about 25.5 km/h. It fails against the same \(c\), because \((a\dot a + b\dot b)/c = 460/\sqrt{13}\).
:::

::: key-points
text: |
  - If \(y = f(x)\), then \(\dot y = \frac{dy}{dx}\,\dot x\). Evaluate \(\frac{dy}{dx}\) at the current \(x\) and multiply by the given \(\dot x\).
  - When an equation ties the quantities together, differentiate both sides with respect to \(t\) while the letters are still variables. Then substitute the values that hold at the instant and solve for the unknown rate.
  - The usual slip puts the instant's number in before differentiating. That turns the letter into a constant, its derivative is 0, and the unknown rate disappears. The correct order is to differentiate first and substitute afterwards.
:::

::: concept-question
id: l2-related-rates.q-cda8bb8d
question: |
  A point moves on the parabola \(y = x^{2}\). At one instant the \(x\)-coordinate is 6 and \(\frac{dx}{dt} = 3\). What is \(\frac{dy}{dt}\)?
options:
  - text: |
      \(12\)
  - text: |
      \(18\)
  - text: |
      \(36\)
    correct: true
  - text: |
      \(72\)
explanation: |
  The chain rule gives \(\frac{dy}{dt} = 2x\frac{dx}{dt}\). At this instant the product is \(2\cdot 6\cdot 3 = 36\).
:::

::: concept-question
id: l2-related-rates.q-2ada4e9f
question: |
  You know that \(x = 4\) at the instant you care about. When should that 4 enter the calculation?
options:
  - text: |
      Before any differentiation, so every letter has already been replaced by a number.
  - text: |
      After both sides have been differentiated with respect to \(t\).
    correct: true
  - text: |
      Only when you write the final sentence, after the rate is already known.
explanation: |
  Differentiate while \(x\) is still a variable. If \(x\) is replaced by 4 first, that part of the equation is a constant, its derivative is 0, and the unknown rate drops out.
:::

::: concept-question
id: l2-related-rates.q-c8b3db64
question: |
  A balloon's volume increases at 7 cm\(^{3}\)/s. The radius is 4 cm. What is the radius doing?
options:
  - text: |
      The radius is increasing.
    correct: true
  - text: |
      The radius is decreasing.
  - text: |
      The radius is constant.
explanation: |
  \(\dot r = \frac{7}{64\pi}\), which is positive, so the radius is increasing.
:::

::: concept-question
id: l2-related-rates.q-684be825
question: |
  One car is 10 km north of a crossing and the other is 15 km east of it. What is the distance between them?
options:
  - text: |
      \(\sqrt{13}\) km
  - text: |
      \(5\sqrt{13}\) km
    correct: true
  - text: |
      25 km
  - text: |
      325 km
explanation: |
  The distance is \(\sqrt{10^{2} + 15^{2}} = \sqrt{325} = \sqrt{25\cdot 13} = 5\sqrt{13}\) km.
:::

::: concept-question
id: l2-related-rates.q-25265dc1
question: |
  Those cars move at 80 km/h north and 100 km/h east. How fast is the distance between them changing?
options:
  - text: |
      \(\dfrac{92}{\sqrt{13}}\) km/h
  - text: |
      \(\dfrac{460}{\sqrt{13}}\) km/h
    correct: true
  - text: |
      \(\dfrac{2300}{\sqrt{13}}\) km/h
  - text: |
      25 km/h
explanation: |
  The distance is \(c = 5\sqrt{13}\) km. The numerator \(a\dot a + b\dot b\) is \(10\cdot 80 + 15\cdot 100 = 2300\). Dividing by \(c\) gives
  \[
  \frac{2300}{5\sqrt{13}} = \frac{460}{\sqrt{13}}\text{ km/h}.
  \]
  The rate is positive, so the distance is increasing.
:::

::: going-deeper
title: Water poured into a cone
text: |
  Water is poured into a cone that points down. The container's height is 30 cm and its base radius is 10 cm. Water enters at 10 cm\(^{3}\)/s. When the depth is 4 cm, similar triangles make the surface radius one third of the depth, and the volume of water is
  \[
  V = \pi h^{3}/27.
  \]
  Differentiating with respect to \(t\) and substituting the known rate and this depth gives
  \[
  \frac{dh}{dt} = \frac{90}{16\pi}\text{ cm/s},
  \]
  so the level is rising. Ladders, shadows and scissors are further problems in the same section.
:::

::: exercise
id: l2-related-rates.ex-parabola
number: "Example 6.2.1"
tier: basic
topics: [related-rates]
statement: |
  An object moves on the path \(y = x^{2}\). At \(t = 5\) the \(x\)-coordinate is 6 and \(\frac{dx}{dt} = 3\). How fast is the \(y\)-coordinate changing?
solution: |
  The path is \(y = x^{2}\). At the instant in question the \(x\)-coordinate is 6, and the rate \(\frac{dx}{dt}\) is 3.

  The chain rule gives
  \[
  \begin{aligned}
  \frac{dy}{dt}&= 2x\frac{dx}{dt},\\
  \frac{dy}{dt}&= 2\cdot 6\cdot 3 = 36.
  \end{aligned}
  \]
  The rate is positive, so the \(y\)-coordinate is increasing.
provenance: handout-answer
steps:
  - |
    The path is \(y = x^{2}\), with \(x = 6\) and \(\frac{dx}{dt} = 3\).
  - |
    \(\frac{dy}{dt} = 2x\frac{dx}{dt} = 36\), and the \(y\)-coordinate is increasing.
verification:
  checks:
    - expr: "2*6*3"
      expected: "36"
:::

::: exercise
id: l2-related-rates.ex-ladder
number: "6.2 exercise 3"
tier: standard
topics: [related-rates]
statement: |
  A ladder 13 m long rests on horizontal ground and leans against a vertical wall. The foot of the ladder is pulled away from the wall at 0.6 m/s. How fast is the top sliding down the wall when the foot is 5 m from the wall?
solution: |
  The two variables are the distance \(x\) from the wall to the foot and the height \(y\) of the top. The length of the ladder is the constant 13 m. The known rate is \(\dot x = 0.6\) m/s, which equals \(\frac{3}{5}\) m/s. At the instant in question the foot is 5 m from the wall. The unknown rate is \(\dot y\).

  The relation is
  \[
  x^{2} + y^{2} = 13^{2} = 169.
  \]
  At this instant
  \[
  \begin{aligned}
  5^{2} + y^{2}&= 169,\\
  y^{2}&= 144,
  \end{aligned}
  \]
  so the height is 12 m.

  Differentiate both sides with respect to \(t\):
  \[
  \begin{aligned}
  2x\dot x + 2y\dot y&= 0,\\
  \dot y&= -\frac{x\dot x}{y}.
  \end{aligned}
  \]
  Substitute the known values:
  \[
  \dot y = -\frac{5\cdot(3/5)}{12} = -\frac{1}{4}.
  \]
  The height is decreasing at \(\frac{1}{4}\) m/s, so the top slides down the wall at that speed.
provenance: written-for-site
steps:
  - |
    The ladder gives \(x^{2} + y^{2} = 169\), with \(x = 5\) and \(\dot x = 3/5\).
  - |
    The height is 12 m.
  - |
    \(\dot y = -1/4\) m/s, so the top slides down at \(1/4\) m/s.
verification:
  checks:
    - expr: "sqrt(13**2 - 5**2)"
      expected: "12"
    - expr: "-5*(3/5)/12"
      expected: "-1/4"
:::

::: exercise
id: l2-related-rates.ex-cone
tier: standard
topics: [related-rates]
statement: |
  A tank is a cone with its point down, \(10\) m high, with a top of radius \(5\) m. Water is pumped in at \(8\) m\(^{3}\)/min. How fast is the water level rising when the water is \(4\) m deep?
solution: |
  The two variables are the volume \(V\) of the water and its depth \(h\). The water also has a surface radius \(r\). The known rate is \(\dot V = 8\) m\(^{3}\)/min, and the unknown rate is \(\dot h\).

  The water forms a cone similar to the tank, so \(\frac{r}{h} = \frac{5}{10}\) and \(r = \frac{h}{2}\). The volume of the water is
  \[
  V = \frac{1}{3}\pi r^{2} h = \frac{1}{3}\pi\left(\frac{h}{2}\right)^{2} h = \frac{\pi h^{3}}{12}.
  \]
  The radius \(r\) changes with \(h\), so it has to be replaced before differentiating.

  Differentiate both sides with respect to \(t\):
  \[
  \dot V = \frac{\pi h^{2}}{4}\dot h.
  \]
  Substitute \(h = 4\) and \(\dot V = 8\). Then
  \[
  8 = \frac{\pi\cdot 16}{4}\dot h = 4\pi\dot h,
  \]
  so \(\dot h = \frac{2}{\pi}\) m/min, about \(0.64\) m/min. The rate is positive, so the level is rising.
provenance: written-for-site
steps:
  - |
    Similar triangles give \(r = h/2\), so \(V = \pi h^{3}/12\).
  - |
    \(\dot V = \frac{\pi h^{2}}{4}\dot h\).
  - |
    With \(h = 4\) and \(\dot V = 8\), \(\dot h = 2/\pi\) m/min, and the level is rising.
verification:
  checks:
    - expr: simplify(Rational(1, 3)*pi*(h/2)**2*h - pi*h**3/12)
      expected: "0"
    - expr: diff(pi*h**3/12, h).subs(h, 4)
      expected: "4*pi"
    - expr: 8/(4*pi)
      expected: "2/pi"
:::

::: exercise
id: l2-related-rates.ex-cars
number: "Example 6.2.6"
tier: exam
topics: [related-rates]
statement: |
  Two straight roads cross at right angles at \(P\). At one instant car A is 10 km north of \(P\) and driving north at 80 km/h, and car B is 15 km east of \(P\) and driving east at 100 km/h. How fast is the distance between the cars changing? Is that distance increasing or decreasing?
solution: |
  The distance of car A north of \(P\) is \(a = 10\) km, and it increases at \(\dot a = 80\) km/h. The distance of car B east of \(P\) is \(b = 15\) km, and it increases at \(\dot b = 100\) km/h. Let \(c\) be the distance between the cars.

  The roads are perpendicular, so \(c^{2} = a^{2} + b^{2}\). At this instant the distance is
  \[
  c = \sqrt{10^{2} + 15^{2}} = \sqrt{325} = 5\sqrt{13}\text{ km}.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \begin{aligned}
  2c\dot c&= 2a\dot a + 2b\dot b,\\
  \dot c&= (a\dot a + b\dot b)/c.
  \end{aligned}
  \]
  The numerator is \(10\cdot 80 + 15\cdot 100 = 2300\). Therefore
  \[
  \dot c = \frac{2300}{5\sqrt{13}} = \frac{460}{\sqrt{13}}\text{ km/h},
  \]
  about 127.6 km/h. The rate is positive, so the distance between the cars is increasing.
provenance: written-for-site
steps:
  - |
    The distance is \(c = 5\sqrt{13}\) km.
  - |
    \(\dot c = (a\dot a + b\dot b)/c = 460/\sqrt{13}\) km/h.
  - |
    The rate is positive, so the distance is increasing.
verification:
  checks:
    - expr: "sqrt(10**2 + 15**2)"
      expected: "5*sqrt(13)"
    - expr: "(10*80 + 15*100)/(5*sqrt(13))"
      expected: "460/sqrt(13)"
:::

::: sheet-item
id: l2-related-rates.sheet-steps
category: formula
text: |
  1. Name the two variables.
  2. Write an equation relating them.
  3. Differentiate both sides with respect to \(t\).
  4. Plug in the known values at that instant.
  5. Solve for the unknown rate.

  If \(y = f(x)\), then
  \[
  \frac{dy}{dt} = \frac{dy}{dx}\cdot\frac{dx}{dt}.
  \]
:::

::: exercise
id: l2-related-rates.ex-related-rates-plane-angle
tier: standard
topics: [related-rates]
statement: |
  A plane flies directly away from you at constant altitude \(3\) miles and speed \(500\) mph. At the moment when the plane is over a point on the ground \(4\) miles from you:

  (a) How fast is the distance from you to the plane increasing?

  (b) How fast is the angle of elevation \(\theta\) of the plane, seen from where you stand, changing?
solution: |
  Let \(x\) be the horizontal distance, \(y\) the slant distance from you to the plane, and \(\theta\) the angle of elevation. The altitude is the constant \(3\), and \(\dot x = 500\) mph. At the instant in question \(x = 4\), so \(y = \sqrt{4^{2} + 3^{2}} = 5\) miles.

  (a) Pythagoras gives \(x^{2} + 9 = y^{2}\). Differentiate both sides with respect to \(t\). The derivative of \(9\) is \(0\), so
  \[
  2x\dot x = 2y\dot y.
  \]
  Substitute the known values:
  \[
  2\cdot 4\cdot 500 = 2\cdot 5\cdot\dot y.
  \]
  Therefore \(\dot y = 400\) mph. The rate is positive, so the distance is increasing.

  (b) The angle satisfies
  \[
  \tan\theta = \frac{3}{x}.
  \]
  Differentiate both sides with respect to \(t\):
  \[
  \sec^{2}\theta\,\dot\theta = -\frac{3}{x^{2}}\dot x.
  \]
  Since \(\cos\theta = \frac{x}{y}\), we have \(\sec^{2}\theta = \frac{y^{2}}{x^{2}}\), and so
  \[
  \dot\theta = -\frac{3\dot x}{y^{2}}.
  \]
  Substitute \(\dot x = 500\) and \(y = 5\):
  \[
  \dot\theta = -\frac{3\cdot 500}{25} = -60
  \]
  radians per hour, which is \(-1\) radian per minute. The rate is negative, so the angle of elevation is decreasing.
provenance: written-for-site
steps:
  - The slant distance is \(y = 5\) miles.
  - From \(x^{2} + 9 = y^{2}\), \(\dot y = x\dot x / y = 400\) mph.
  - From \(\tan\theta = 3/x\), \(\dot\theta = -3\dot x / y^{2} = -60\) radians per hour.
verification:
  checks:
    - expr: sqrt(4**2 + 3**2)
      expected: "5"
    - expr: 4*500/5
      expected: "400"
    - expr: diff(atan(3/x), x).subs(x, 4)*500
      expected: "-60"
    - expr: 3*500/5**2
      expected: "60"
:::

::: exercise
id: l2-related-rates.ex-related-rates-balloon
tier: standard
topics: [related-rates]
statement: |
  A spherical balloon is inflated so that its volume increases at \(7\) cm\(^{3}\)/s.

  (a) How fast is the radius increasing when the radius is \(4\) cm?

  (b) How fast is the surface area increasing at that moment?

  (c) By what factor does the rate of the radius change when the radius is \(8\) cm, with the same volume rate?
solution: |
  The volume and the surface area are
  \[
  V = \frac{4}{3}\pi r^{3},\qquad S = 4\pi r^{2}.
  \]
  The known rate is \(\dot V = 7\) cm\(^{3}\)/s.

  (a) Differentiate with respect to \(t\):
  \[
  \dot V = 4\pi r^{2}\dot r.
  \]
  Substitute \(r = 4\) and \(\dot V = 7\):
  \[
  7 = 64\pi\dot r,
  \]
  so \(\dot r = \frac{7}{64\pi}\) cm/s, about \(0.035\) cm/s. The rate is positive, so the radius is increasing.

  (b) Differentiate \(S = 4\pi r^{2}\):
  \[
  \dot S = 8\pi r\dot r.
  \]
  Substitute \(r = 4\) and \(\dot r = \frac{7}{64\pi}\):
  \[
  \dot S = 8\pi\cdot 4\cdot\frac{7}{64\pi} = \frac{7}{2} \text{ cm}^{2}/\text{s}.
  \]
  The surface area is increasing at \(3.5\) cm\(^{2}\)/s.

  (c) From (a),
  \[
  \dot r = \frac{\dot V}{4\pi r^{2}}.
  \]
  With the same \(\dot V\), doubling \(r\) from \(4\) to \(8\) multiplies the denominator by \(4\), so \(\dot r\) is multiplied by \(\frac{1}{4}\). At \(r = 8\), \(\dot r = \frac{7}{256\pi}\) cm/s.
provenance: written-for-site
steps:
  - 'Part (a): \(\dot V = 4\pi r^{2}\dot r\), so \(\dot r = 7/(64\pi)\) cm/s.'
  - 'Part (b): \(\dot S = 8\pi r\dot r = 7/2\) cm\(^{2}\)/s.'
  - 'Part (c): \(\dot r\) is multiplied by \(1/4\).'
verification:
  checks:
    - expr: 7/(4*pi*4**2)
      expected: 7/(64*pi)
    - expr: 8*pi*4*7/(64*pi)
      expected: Rational(7, 2)
    - expr: (7/(4*pi*8**2))/(7/(4*pi*4**2))
      expected: Rational(1, 4)
    - expr: 7/(4*pi*8**2)
      expected: 7/(256*pi)
:::
