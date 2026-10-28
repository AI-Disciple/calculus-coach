# 07: Multivariable visuals: surfaces, tangent plane, gradient, critical points, constraints

**What to build:** Nodes can embed interactive visual blocks. This ticket delivers the first five: a rotatable 3D quadric viewer with parameter sliders and linked level curves and cross sections with a movable slicing plane; a tangent plane viewer with a movable point; a gradient and directional-derivative viewer on a contour plot with a direction control; a critical-point viewer showing the local surface and the Hessian determinant with a parameter slider for families such as x^2 + y^2 + kxy; and a constraint curve against level curves of f for Lagrange multipliers. Visuals explain and never grade.

**Blocked by:** 02

**Status:** ready-for-agent

**Suggested model:** GPT 5.6 Sol high (the geometry and the numbers shown must be correct). Claude Sonnet 5.5 xhigh is a good alternative.

**Read first:** `spec.md` (stories 24 to 29 and 35; technology: Plotly).

## Acceptance criteria

- [ ] A visual block type with parameters declared in the node file, rendered with Plotly, respecting light and dark themes, and loading lazily so node pages stay fast.
- [ ] Quadric viewer: paraboloid, sphere, cone, both hyperboloids, hyperbolic paraboloid, with sliders for their parameters. Level curves and the cuts x = 0, y = 0 and z = c are linked to the surface, with a slicing plane that moves.
- [ ] Tangent plane viewer for a graph z = f(x, y) with a movable point, showing the plane's equation in the course's form Z = f + (x - x0) f_x + (y - y0) f_y.
- [ ] Gradient viewer: contour plot, gradient arrow at a point, direction control, live directional derivative value, visible normality to the level curve.
- [ ] Critical-point viewer: local surface near a critical point, f_xx, f_yy, f_xy and D shown, classification label from D and f_xx, parameter slider for a family (x^2 + y^2 + kxy at minimum).
- [ ] Constraint viewer: constraint curve over level curves of f, with the tangency point highlighted.
- [ ] Each visual is demonstrated on a stand-in or test node and covered by one smoke test that it renders and responds to a control.
- [ ] Displayed values are checked against SymPy or hand computation for at least one configuration per visual.
