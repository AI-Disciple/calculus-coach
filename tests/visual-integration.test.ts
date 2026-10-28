import { describe, expect, test } from 'vitest';
import { runVerifier, type VerificationResult } from '../src/content/verifier.ts';
import {
  changeReading,
  cylindricalReading,
  examShadowPiece,
  polarReading,
  regionReading,
  solidReading,
  sphericalReading,
  stripsArea,
  switchOrder,
} from '../src/visuals/integration.ts';

function expectVerified(results: VerificationResult[]) {
  const failed = results.filter((result) => !result.ok).map((result) => `${result.id}: ${result.message}`);
  expect(failed).toEqual([]);
}

describe('region readings', () => {
  test('describes the default triangle in both orders', () => {
    const dy = regionReading('triangle', 'dy-dx', { intercept: 1 });
    const dx = regionReading('triangle', 'dx-dy', { intercept: 1 });
    expect(dy.text).toBe('x runs from 0 to 1, and y runs from 0 to 1 - x.');
    expect(dx.text).toBe('y runs from 0 to 1, and x runs from 0 to 1 - y.');
    expect(dy.areaText).toBe('The area is 1/2.');
    expect(dx.areaText).toBe('The area is 1/2.');
    expect(dy.areaExpr).toBe('1/2');
    expect(dx.areaExpr).toBe('1/2');
    expect(stripsArea(dy.strips)).toBeCloseTo(1 / 2, 8);
    expect(stripsArea(switchOrder(dy.strips))).toBeCloseTo(1 / 2, 8);
    expect(stripsArea(switchOrder(dx.strips))).toBeCloseTo(1 / 2, 8);
    expect(switchOrder(dy.strips)).toHaveLength(1);
    expect(switchOrder(dx.strips)).toHaveLength(1);
  });

  test('switches the default split between two pieces and one piece', () => {
    const dy = regionReading('split', 'dy-dx', { peak: 1, base: 2, height: 1 });
    const dx = regionReading('split', 'dx-dy', { peak: 1, base: 2, height: 1 });
    expect(dy.text).toBe(
      'This order uses two pieces. For x from 0 to 1, y runs from 0 to x. For x from 1 to 2, y runs from 0 to 2 - x.',
    );
    expect(dx.text).toBe('This order uses one piece. y runs from 0 to 1, and x runs from y to 2 - y.');
    expect(dy.areaText).toBe('The area is 1.');
    expect(dx.areaText).toBe('The area is 1.');
    expect(dy.areaExpr).toBe('1');
    expect(dx.areaExpr).toBe('1');
    expect(dy.strips).toHaveLength(2);
    expect(dx.strips).toHaveLength(1);
    expect(switchOrder(dy.strips)).toHaveLength(1);
    expect(switchOrder(dx.strips)).toHaveLength(2);
    expect(stripsArea(dy.strips)).toBeCloseTo(1, 8);
    expect(stripsArea(dx.strips)).toBeCloseTo(1, 8);
    expect(stripsArea(switchOrder(dy.strips))).toBeCloseTo(1, 8);
    expect(stripsArea(switchOrder(dx.strips))).toBeCloseTo(1, 8);
  });

  test('keeps the exam shadow curve and rewrites the triangle bounds', () => {
    const dy = regionReading('exam-shadow', 'dy-dx');
    const dx = regionReading('exam-shadow', 'dx-dy');
    expect(dy.text).toBe(
      'x runs from 0 to 1, and y runs from 0 to 1 - x. The curve x^2 + y^2 = 1 - x - y separates this shadow into two pieces.',
    );
    expect(dx.text).toBe(
      'y runs from 0 to 1, and x runs from 0 to 1 - y. The curve x^2 + y^2 = 1 - x - y separates this shadow into two pieces.',
    );
    expect(dy.meetText).toBe('On y = 0 the pieces meet at x = (-1 + sqrt(5))/2.');
    expect(dy.meetExpr).toBe('(-1 + sqrt(5))/2');
    expect(examShadowPiece(0, 0)).toBe('paraboloid');
    expect(examShadowPiece(1 / 2, 1 / 2)).toBe('plane');
    expect(examShadowPiece(1, 1)).toBe('outside');
    expect(examShadowPiece(0.2, 0.2)).toBe('paraboloid');
    expect(examShadowPiece(0.7, 0.2)).toBe('plane');
  });
});

describe('polar, cylindrical and spherical readings', () => {
  test('keeps the three polar presets exact', () => {
    expect(polarReading('disk').text).toBe(
      'The region is 0 ≤ r ≤ sqrt(2), 0 ≤ theta ≤ 2 pi. The area is 2 pi.',
    );
    expect(polarReading('disk').areaExpr).toBe('2*pi');
    expect(polarReading('sector').text).toBe(
      'The region is 0 ≤ r ≤ sqrt(2), 0 ≤ theta ≤ pi/4. The area is pi/4.',
    );
    expect(polarReading('annulus').text).toBe(
      'The region is 1/2 ≤ r ≤ 1, 0 ≤ theta ≤ 2 pi. The area is 3 pi / 4.',
    );
  });

  test('states the cylinder and the spherical exam region', () => {
    const cylinder = cylindricalReading();
    const shorter = cylindricalReading({ z1: 4 });
    expect(cylinder.text).toBe('The region is 0 ≤ r ≤ 1, 0 ≤ theta ≤ 2 pi, 0 ≤ z ≤ 5. The volume is 5 pi.');
    expect(shorter.text).toBe('The region is 0 ≤ r ≤ 1, 0 ≤ theta ≤ 2 pi, 0 ≤ z ≤ 4. The volume is 4 pi.');
    expect(cylinder.volumeExpr).toBe('5*pi');
    expect(cylinder.pointText).toBe('The point r = 1, theta = pi/2, z = 5 is (x, y, z) = (0, 1, 5).');
    expect(cylinder.pointExpr).toBe('(0, 1, 5)');

    const ball = sphericalReading();
    expect(ball.text).toBe(
      'The region is 0 ≤ rho ≤ 1, pi/4 ≤ phi ≤ pi/2, 0 ≤ theta ≤ 2 pi. The volume is pi sqrt(2) / 3.',
    );
    expect(ball.phiText).toBe('Phi is the angle from the positive z-axis.');
    expect(ball.pointText).toBe('The point rho = 1, phi = pi/2, theta = 0 is (x, y, z) = (1, 0, 0).');
    expect(ball.volumeExpr).toBe('pi*sqrt(2)/3');
    expect(ball.pointExpr).toBe('(1, 0, 0)');

    const smaller = sphericalReading({ rho1: 1 / 2 });
    expect(smaller.pointText).toBe('The point rho = 1/2, phi = pi/2, theta = 0 is (x, y, z) = (1/2, 0, 0).');
    expect(smaller.pointExpr).toBe('(1/2, 0, 0)');
    expect(smaller.text).not.toContain('pi sqrt(2) / 3');
  });
});

describe('change of variables', () => {
  test('states the linear, shear and parabola maps', () => {
    const linear = changeReading('linear', 2, 0);
    expect(linear.text).toBe(
      'The map is x = (u + v)/2, y = (u - v)/2. The Jacobian determinant is -1/2. The outlined cell has area 1 in the uv-plane and area 1/2 in the xy-plane.',
    );
    expect(linear.pointText).toBe('This point (u, v) = (2, 0) goes to (x, y) = (1, 1).');
    expect(linear.jacobianExpr).toBe('-1/2');
    expect(changeReading('linear', 1, 1).text).toContain('The Jacobian determinant is -1/2.');

    const shear = changeReading('shear', 2, 1 / 2);
    expect(shear.text).toBe(
      'The map is x = u, y = u v. The Jacobian determinant is 2. The outlined cell has area 1 in the uv-plane and area 3/2 in the xy-plane.',
    );
    expect(shear.pointText).toBe('This point (u, v) = (2, 1/2) goes to (x, y) = (2, 1).');
    expect(shear.jacobianExpr).toBe('2');
    expect(changeReading('shear', 2, 0).text).toContain('area 3/2 in the xy-plane.');

    const parabola = changeReading('parabola', 1, 0);
    expect(parabola.text).toBe(
      'The map is x = sqrt(u - v), y = v. The Jacobian determinant is 1/2. The outlined cell has area 1/4 in the uv-plane and area (2 - sqrt(2))/3 in the xy-plane.',
    );
    expect(parabola.pointText).toBe('This point (u, v) = (1, 0) goes to (x, y) = (1, 0).');
    expect(parabola.jacobianExpr).toBe('1/2');
    expect(parabola.xyAreaExpr).toBe('(2 - sqrt(2))/3');

    const outside = changeReading('parabola', 0, 1);
    expect(outside.pointText).toBe('This point (u, v) = (0, 1) is outside the domain of the map.');
    expect(outside.x).toBeUndefined();
    expect(outside.y).toBeUndefined();
  });
});

describe('solids between two surfaces', () => {
  test('states the sphere-cone solid and its cuts', () => {
    const solid = solidReading('sphere-cone', 'y');
    expect(solid.text).toBe(
      'The solid is the set above the xy-plane, inside the sphere x^2 + y^2 + z^2 = 1, and below the cone z^2 = x^2 + y^2. Its shadow is the disk x^2 + y^2 ≤ 1.',
    );
    expect(solid.heightText).toBe('At (1/2, 0) the height is 1/2.');
    expect(solid.heightExpr).toBe('1/2');
    expect(solid.meetExpr).toBe('1/sqrt(2)');
    expect(solid.cutText).toBe(
      'The cut by y = 0 meets the cone and the sphere at x = 1/sqrt(2) and at x = -1/sqrt(2).',
    );
    expect(solidReading('sphere-cone', 'x').cutText).toBe(
      'The cut by x = 0 meets the cone and the sphere at y = 1/sqrt(2) and at y = -1/sqrt(2).',
    );
    expect(solidReading('sphere-cone', 'z').cutText).toBe(
      'The cut by z = 0 is the shadow, the disk x^2 + y^2 ≤ 1.',
    );
  });

  test('states the plane-paraboloid solid and its cuts', () => {
    const solid = solidReading('plane-paraboloid', 'y');
    expect(solid.text).toBe(
      'The solid is the set in the first octant below both z = 1 - x - y and z = x^2 + y^2. Its shadow is the triangle x ≥ 0, y ≥ 0, x + y ≤ 1, split by the curve x^2 + y^2 = 1 - x - y.',
    );
    expect(solid.heightText).toBe('At (1/5, 1/5) the height is 2/25.');
    expect(solid.heightExpr).toBe('2/25');
    expect(solid.cutText).toBe(
      'The cut by y = 0 meets the plane and the paraboloid at x = (-1 + sqrt(5))/2.',
    );
    expect(solidReading('plane-paraboloid', 'x').cutText).toBe(
      'The cut by x = 0 meets the plane and the paraboloid at y = (-1 + sqrt(5))/2.',
    );
    expect(solidReading('plane-paraboloid', 'z').cutText).toBe(
      'The cut by z = 0 is the shadow, the triangle x ≥ 0, y ≥ 0, x + y ≤ 1.',
    );
  });
});

describe('SymPy checks for integration visuals', () => {
  test('matches the hand-written expressions', async () => {
    const triangle = regionReading('triangle', 'dy-dx', { intercept: 1 });
    const split = regionReading('split', 'dy-dx', { peak: 1, base: 2, height: 1 });
    const exam = regionReading('exam-shadow', 'dy-dx');
    const disk = polarReading('disk');
    const cylinder = cylindricalReading();
    const ball = sphericalReading();
    const linear = changeReading('linear', 2, 0);
    const shear = changeReading('shear', 2, 1 / 2);
    const parabola = changeReading('parabola', 1, 0);
    const sphere = solidReading('sphere-cone', 'y');
    const paraboloid = solidReading('plane-paraboloid', 'y');

    const results = await runVerifier([
      {
        id: 'triangle-area',
        checks: [{ expr: 'integrate(1, (y, 0, 1 - x), (x, 0, 1))', expected: triangle.areaExpr }],
      },
      {
        id: 'split-dy-dx',
        checks: [
          {
            expr: 'integrate(1, (y, 0, x), (x, 0, 1)) + integrate(1, (y, 0, 2 - x), (x, 1, 2))',
            expected: split.areaExpr,
          },
        ],
      },
      {
        id: 'split-dx-dy',
        checks: [{ expr: 'integrate(1, (x, y, 2 - y), (y, 0, 1))', expected: '1' }],
      },
      {
        id: 'exam-meet',
        checks: [{ expr: 'solve(x**2 + x - 1, x)[0]', expected: exam.meetExpr ?? '' }],
      },
      {
        id: 'polar-disk',
        checks: [{ expr: 'integrate(r, (r, 0, sqrt(2)), (theta, 0, 2*pi))', expected: disk.areaExpr }],
      },
      {
        id: 'cylindrical-volume',
        checks: [{ expr: 'integrate(r, (r, 0, 1), (theta, 0, 2*pi), (z, 0, 5))', expected: cylinder.volumeExpr }],
      },
      {
        id: 'cylindrical-point',
        checks: [
          {
            expr: 'Tuple(r*cos(theta), r*sin(theta), z).subs(r, 1).subs(theta, pi/2).subs(z, 5)',
            expected: cylinder.pointExpr,
          },
        ],
      },
      {
        id: 'spherical-volume',
        checks: [
          {
            expr: 'integrate(rho**2 * sin(phi), (rho, 0, 1), (phi, pi/4, pi/2), (theta, 0, 2*pi))',
            expected: ball.volumeExpr,
          },
        ],
      },
      {
        id: 'spherical-point',
        checks: [
          {
            expr: 'Tuple(rho*sin(phi)*cos(theta), rho*sin(phi)*sin(theta), rho*cos(phi)).subs(rho, 1).subs(phi, pi/2).subs(theta, 0)',
            expected: ball.pointExpr,
          },
        ],
      },
      {
        id: 'jacobian-linear',
        checks: [
          {
            expr: '(Rational(1, 2)*Rational(-1, 2) - Rational(1, 2)*Rational(1, 2))',
            expected: linear.jacobianExpr,
          },
        ],
      },
      {
        id: 'jacobian-shear',
        checks: [
          {
            expr: '(diff(u, u)*diff(u*v, v) - diff(u, v)*diff(u*v, u)).subs({u: 2, v: Rational(1, 2)})',
            expected: shear.jacobianExpr,
          },
        ],
      },
      {
        id: 'jacobian-parabola',
        checks: [
          {
            expr: '(diff(sqrt(u - v), u)*diff(v, v) - diff(sqrt(u - v), v)*diff(v, u)).subs({u: 1, v: 0})',
            expected: parabola.jacobianExpr,
          },
        ],
      },
      {
        id: 'parabola-cell',
        checks: [
          {
            expr: 'integrate(1/(2*sqrt(u - v)), (v, 0, Rational(1, 2)), (u, Rational(1, 2), 1))',
            expected: parabola.xyAreaExpr,
          },
        ],
      },
      {
        id: 'sphere-height',
        checks: [{ expr: 'Min(Rational(1, 2), sqrt(1 - Rational(1, 4)))', expected: sphere.heightExpr }],
      },
      {
        id: 'paraboloid-height',
        checks: [
          {
            expr: 'Min(1 - Rational(1, 5) - Rational(1, 5), Rational(1, 25) + Rational(1, 25))',
            expected: paraboloid.heightExpr,
          },
        ],
      },
      {
        id: 'sphere-meet',
        checks: [{ expr: 'sqrt(Rational(1, 2))', expected: sphere.meetExpr ?? '' }],
      },
    ]);

    expectVerified(results);
  });
});
