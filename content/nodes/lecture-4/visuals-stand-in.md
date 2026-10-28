---
id: visuals-stand-in
lecture: 4
order: 99
title: Multivariable visuals (stand-in)
prerequisites: []
sources: []
examWeight: low
status: draft
hidden: true
---

::: visual
kind: quadric
caption: |
  Move the slicing plane. The curve in that plane is the cut, and a horizontal cut is a level curve.
params:
  surface: sphere
  a: 1
  b: 1
  c: 1
  axis: z
  slice: 0
:::

::: visual
kind: tangent-plane
caption: |
  Move the point. The plane follows \(z = x^2 + y^2\), and the equation is the course formula with the numbers filled in.
params:
  x0: 1
  y0: 1
:::

::: visual
kind: gradient
caption: |
  The arrow is the gradient of \(f = x^2 + y^2\). It meets the level curve at a right angle. The direction slider sets the directional derivative.
params:
  x: 1
  y: 1
  angle: 0
:::

::: visual
kind: critical-point-viewer
caption: |
  The family is \(f = x^2 + y^2 + kxy\). The label comes from \(D\) and \(f_{xx}\).
params:
  k: 0
:::

::: visual
kind: constraint
caption: |
  The circle is the constraint \(x^2 + y^2 = 1\). The vertical line is a level curve of \(f = x\). They touch at the highlighted point.
params:
  level: 1
:::

::: visual
kind: region
caption: |
  Change the bounds and the order. The triangle \(x + y = 1\) is one piece in both orders. The peaked region splits into two pieces in one order. The exam shadow is that triangle, split by \(x^2 + y^2 = 1 - x - y\).
params:
  preset: triangle
  order: dy-dx
  intercept: 1
:::

::: visual
kind: polar-region
caption: |
  The disk \(x^2 + y^2 = 2\), the sector \(0 \le y \le x\) inside that disk, and an annulus.
params:
  shape: disk
:::

::: visual
kind: cylindrical-region
caption: |
  A solid with constant \(r\), \(\theta\) and \(z\) bounds. It starts as the cylinder \(x^2 + y^2 = 1\) from \(z = 0\) to \(z = 5\).
params:
  top: 5
:::

::: visual
kind: spherical-region
caption: |
  The set above the \(xy\)-plane, inside the unit sphere, and below the cone \(z^2 = x^2 + y^2\), in spherical coordinates.
:::

::: visual
kind: change-of-variables
caption: |
  A grid in the \(uv\)-plane and its image in the \(xy\)-plane. The Jacobian determinant is the local area scaling.
params:
  map: linear
  u: 2
  v: 0
:::

::: visual
kind: solid
caption: |
  One solid is the unit sphere below the cone. The other is the first octant below the plane and the paraboloid. The flat figure is the cut by the chosen coordinate plane.
params:
  preset: sphere-cone
  cut: y
:::
