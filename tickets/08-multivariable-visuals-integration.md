# 08: Multivariable visuals: regions, coordinates, Jacobian and solids

**What to build:** Visual blocks for multiple integration: a region viewer where the student changes integration bounds and the region and the order of integration redraw; polar, cylindrical and spherical region viewers; a change-of-variables viewer that shows a grid being transformed with its Jacobian; and a solid-between-two-surfaces viewer with the coordinate-plane cut the exam always asks to sketch.

**Blocked by:** 07

**Status:** ready-for-agent

**Suggested model:** GPT 5.6 Sol high. Claude Sonnet 5.5 xhigh is a good alternative.

**Read first:** `spec.md` (stories 30 to 33 and 35; final format block 6), `source-inventory.md` section 4 (current final format: sphere and cone 2024, plane and paraboloid 2025, splitting the shadow).

## Acceptance criteria

- [ ] Region viewer: bounds editable for dx dy and dy dx orders, the region redraws, and switching the order shows the equivalent bounds where they are simple, including a region whose shadow splits into two pieces.
- [ ] Polar region viewer (disk, sector, annulus). Cylindrical and spherical region viewers in 3D.
- [ ] Change-of-variables viewer: a grid in (u, v) mapped to (x, y) for linear maps and for named substitutions, with the Jacobian value shown and the area scaling visible.
- [ ] Solid viewer: two surfaces (for example sphere and cone, plane and paraboloid), the solid between them, its shadow in the xy-plane, and a cut by a chosen coordinate plane shown in 2D.
- [ ] Each visual is demonstrated on a stand-in or test node and covered by one smoke test that it renders and responds to a control.
- [ ] Displayed values are checked against SymPy for at least one configuration per visual.
