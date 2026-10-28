export type Order = 'dy-dx' | 'dx-dy';
export type RegionPreset = 'triangle' | 'split' | 'exam-shadow';
export type PolarShape = 'disk' | 'sector' | 'annulus';
export type MapId = 'linear' | 'shear' | 'parabola';
export type SolidPreset = 'sphere-cone' | 'plane-paraboloid';
export type CutPlane = 'x' | 'y' | 'z';
export type ShadowPiece = 'paraboloid' | 'plane' | 'outside';

export type LinearBound = { intercept: number; slope: number };
export type Strip = {
  outer0: number;
  outer1: number;
  lower: LinearBound;
  upper: LinearBound;
};

export type RegionReading = {
  order: Order;
  text: string;
  areaText: string;
  areaExpr: string;
  strips: Strip[];
  meetText?: string;
  meetExpr?: string;
};

export type PolarReading = {
  shape: PolarShape;
  r0: number;
  r1: number;
  theta0: number;
  theta1: number;
  text: string;
  areaExpr: string;
};

export type CylindricalReading = {
  r0: number;
  r1: number;
  theta0: number;
  theta1: number;
  z0: number;
  z1: number;
  text: string;
  volumeExpr: string;
  pointText: string;
  pointExpr: string;
};

export type SphericalReading = {
  rho0: number;
  rho1: number;
  phi0: number;
  phi1: number;
  theta0: number;
  theta1: number;
  text: string;
  phiText: string;
  volumeExpr: string;
  pointText: string;
  pointExpr: string;
};

export type ChangeReading = {
  text: string;
  pointText: string;
  jacobianExpr: string;
  xyAreaExpr: string;
  outside: boolean;
  x?: number;
  y?: number;
};

export type SolidReading = {
  text: string;
  heightText: string;
  heightExpr: string;
  cutText: string;
  meetExpr?: string;
};

export type MapGeometry = {
  u0: number;
  u1: number;
  v0: number;
  v1: number;
  triangular: boolean;
  cell: { u0: number; u1: number; v0: number; v1: number };
};

const EPS = 1e-9;

export const EXAM_MEET = (-1 + Math.sqrt(5)) / 2;
export const EXAM_ARC_RADIUS = Math.sqrt(3 / 2);
export const PHI_TEXT = 'Phi is the angle from the positive z-axis.';

export const MAP_SAMPLE: Record<MapId, { u: number; v: number }> = {
  linear: { u: 2, v: 0 },
  shear: { u: 2, v: 1 / 2 },
  parabola: { u: 1, v: 0 },
};

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const next = x % y;
    x = y;
    y = next;
  }
  return x || 1;
}

function snapNumber(value: number): number {
  if (!Number.isFinite(value) || Math.abs(value) < 1e-9) return 0;
  const nearest = Math.round(value);
  if (Math.abs(value - nearest) < 1e-8) return nearest;
  for (let denominator = 2; denominator <= 12; denominator += 1) {
    const numerator = Math.round(value * denominator);
    if (Math.abs(value - numerator / denominator) < 1e-8) return numerator / denominator;
  }
  return value;
}

export function formatNum(value: number): string {
  const snapped = snapNumber(value);
  if (Number.isInteger(snapped)) return String(snapped);
  const sign = snapped < 0 ? '-' : '';
  const absolute = Math.abs(snapped);
  for (let denominator = 2; denominator <= 12; denominator += 1) {
    const numerator = Math.round(absolute * denominator);
    if (Math.abs(absolute - numerator / denominator) < 1e-9) {
      const divisor = gcd(numerator, denominator);
      return `${sign}${numerator / divisor}/${denominator / divisor}`;
    }
  }
  return `${sign}${Number(absolute.toFixed(4))}`;
}

function close(a: number, b: number): boolean {
  return Math.abs(a - b) <= 1e-8 * Math.max(1, Math.abs(a), Math.abs(b));
}

function formatLinear(bound: LinearBound, variable: string): string {
  const intercept = snapNumber(bound.intercept);
  const slope = snapNumber(bound.slope);
  if (Math.abs(slope) < 1e-9) return formatNum(intercept);
  if (Math.abs(intercept) < 1e-9) {
    if (Math.abs(slope - 1) < 1e-9) return variable;
    if (Math.abs(slope + 1) < 1e-9) return `-${variable}`;
    return `${formatNum(slope)} ${variable}`;
  }
  if (Math.abs(slope - 1) < 1e-9) return `${formatNum(intercept)} + ${variable}`;
  if (Math.abs(slope + 1) < 1e-9) return `${formatNum(intercept)} - ${variable}`;
  if (slope < 0) return `${formatNum(intercept)} - ${formatNum(-slope)} ${variable}`;
  return `${formatNum(intercept)} + ${formatNum(slope)} ${variable}`;
}

export function stripsArea(strips: Strip[]): number {
  return strips.reduce((sum, strip) => {
    const width = strip.outer1 - strip.outer0;
    const rise = strip.upper.intercept - strip.lower.intercept;
    const slope = strip.upper.slope - strip.lower.slope;
    const squared = (strip.outer1 ** 2 - strip.outer0 ** 2) / 2;
    return sum + rise * width + slope * squared;
  }, 0);
}

type Point = { x: number; y: number };
type EdgeFn = { intercept: number; slope: number };

function stripPolygon(strip: Strip): Point[] {
  const at = (bound: LinearBound, outer: number) => bound.intercept + bound.slope * outer;
  const raw = [
    { x: strip.outer0, y: at(strip.lower, strip.outer0) },
    { x: strip.outer1, y: at(strip.lower, strip.outer1) },
    { x: strip.outer1, y: at(strip.upper, strip.outer1) },
    { x: strip.outer0, y: at(strip.upper, strip.outer0) },
  ];
  const points: Point[] = [];
  for (const point of raw) {
    const previous = points[points.length - 1];
    if (!previous || Math.hypot(previous.x - point.x, previous.y - point.y) > 1e-8) points.push(point);
  }
  if (points.length > 1) {
    const first = points[0];
    const last = points[points.length - 1];
    if (Math.hypot(first.x - last.x, first.y - last.y) <= 1e-8) points.pop();
  }
  return points;
}

function edgeFunction(a: Point, b: Point): EdgeFn | null {
  if (Math.abs(a.y - b.y) <= 1e-8) return null;
  const slope = (b.x - a.x) / (b.y - a.y);
  return { slope, intercept: a.x - slope * a.y };
}

export function switchOrder(strips: Strip[]): Strip[] {
  const polygons = strips.map(stripPolygon).filter((polygon) => polygon.length >= 3);
  const events: number[] = [];
  for (const polygon of polygons) {
    for (const point of polygon) {
      if (events.every((event) => Math.abs(event - point.y) > 1e-8)) events.push(point.y);
    }
  }
  events.sort((a, b) => a - b);

  const result: Strip[] = [];
  for (let index = 0; index < events.length - 1; index += 1) {
    const outer0 = events[index];
    const outer1 = events[index + 1];
    const mid = (outer0 + outer1) / 2;
    const intervals: { left: EdgeFn; right: EdgeFn; leftX: number; rightX: number }[] = [];
    for (const polygon of polygons) {
      const hits: { x: number; fn: EdgeFn }[] = [];
      for (let edge = 0; edge < polygon.length; edge += 1) {
        const start = polygon[edge];
        const end = polygon[(edge + 1) % polygon.length];
        const low = Math.min(start.y, end.y);
        const high = Math.max(start.y, end.y);
        if (mid <= low + 1e-8 || mid >= high - 1e-8) continue;
        const fn = edgeFunction(start, end);
        if (!fn) continue;
        hits.push({ x: fn.intercept + fn.slope * mid, fn });
      }
      hits.sort((a, b) => a.x - b.x);
      for (let hit = 0; hit + 1 < hits.length; hit += 2) {
        intervals.push({
          left: hits[hit].fn,
          right: hits[hit + 1].fn,
          leftX: hits[hit].x,
          rightX: hits[hit + 1].x,
        });
      }
    }
    intervals.sort((a, b) => a.leftX - b.leftX);
    const merged: typeof intervals = [];
    for (const interval of intervals) {
      const last = merged[merged.length - 1];
      if (last && interval.leftX <= last.rightX + 1e-7) {
        if (interval.rightX > last.rightX) {
          last.right = interval.right;
          last.rightX = interval.rightX;
        }
      } else if (interval.rightX - interval.leftX > 1e-8) {
        merged.push({ ...interval });
      }
    }
    for (const interval of merged) {
      result.push({
        outer0,
        outer1,
        lower: interval.left,
        upper: interval.right,
      });
    }
  }
  return result;
}

function triangleStrips(intercept: number): Strip[] {
  return [
    {
      outer0: 0,
      outer1: intercept,
      lower: { intercept: 0, slope: 0 },
      upper: { intercept, slope: -1 },
    },
  ];
}

function splitStrips(peak: number, base: number, height: number): Strip[] {
  const run = base - peak;
  return [
    {
      outer0: 0,
      outer1: peak,
      lower: { intercept: 0, slope: 0 },
      upper: { intercept: 0, slope: height / peak },
    },
    {
      outer0: peak,
      outer1: base,
      lower: { intercept: 0, slope: 0 },
      upper: { intercept: (height * base) / run, slope: -height / run },
    },
  ];
}

const COUNT_WORD = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];

function boundsSentence(order: Order, strips: Strip[], counted: boolean): string {
  const outer = order === 'dy-dx' ? 'x' : 'y';
  const inner = order === 'dy-dx' ? 'y' : 'x';
  const pieces = strips.map((strip) => ({
    from: formatNum(strip.outer0),
    to: formatNum(strip.outer1),
    lower: formatLinear(strip.lower, outer),
    upper: formatLinear(strip.upper, outer),
  }));
  if (!counted) {
    const piece = pieces[0];
    return `${outer} runs from ${piece.from} to ${piece.to}, and ${inner} runs from ${piece.lower} to ${piece.upper}.`;
  }
  const count = COUNT_WORD[pieces.length] ?? String(pieces.length);
  const noun = pieces.length === 1 ? 'piece' : 'pieces';
  if (pieces.length === 1) {
    const piece = pieces[0];
    return `This order uses one piece. ${outer} runs from ${piece.from} to ${piece.to}, and ${inner} runs from ${piece.lower} to ${piece.upper}.`;
  }
  const body = pieces
    .map((piece) => `For ${outer} from ${piece.from} to ${piece.to}, ${inner} runs from ${piece.lower} to ${piece.upper}.`)
    .join(' ');
  return `This order uses ${count} ${noun}. ${body}`;
}

export function regionReading(
  preset: RegionPreset,
  order: Order,
  params: { intercept?: number; peak?: number; base?: number; height?: number } = {},
): RegionReading {
  const intercept = params.intercept ?? 1;
  const peak = params.peak ?? 1;
  const base = params.base ?? 2;
  const height = params.height ?? 1;
  const defining = preset === 'split' ? splitStrips(peak, base, height) : triangleStrips(preset === 'triangle' ? intercept : 1);
  const strips = order === 'dy-dx' ? defining : switchOrder(defining);
  const areaExpr = formatNum(stripsArea(defining));
  const reading: RegionReading = {
    order,
    text: boundsSentence(order, strips, preset === 'split'),
    areaText: `The area is ${areaExpr}.`,
    areaExpr,
    strips,
  };
  if (preset === 'exam-shadow') {
    reading.text = `${reading.text} The curve x^2 + y^2 = 1 - x - y separates this shadow into two pieces.`;
    reading.meetText = 'On y = 0 the pieces meet at x = (-1 + sqrt(5))/2.';
    reading.meetExpr = '(-1 + sqrt(5))/2';
  }
  return reading;
}

export function examShadowPiece(x: number, y: number): ShadowPiece {
  if (x < -EPS || y < -EPS || x + y > 1 + EPS) return 'outside';
  if (x * x + y * y <= 1 - x - y + EPS) return 'paraboloid';
  return 'plane';
}

export function examArc(samples = 48): { x: number; y: number }[] {
  const start = Math.atan2(EXAM_MEET + 0.5, 0.5);
  const end = Math.atan2(0.5, EXAM_MEET + 0.5);
  return Array.from({ length: samples }, (_, index) => {
    const angle = start + ((end - start) * index) / (samples - 1);
    return {
      x: -0.5 + EXAM_ARC_RADIUS * Math.cos(angle),
      y: -0.5 + EXAM_ARC_RADIUS * Math.sin(angle),
    };
  });
}

const POLAR_PRESETS: Record<PolarShape, { r0: number; r1: number; theta0: number; theta1: number; text: string; areaExpr: string }> = {
  disk: {
    r0: 0,
    r1: Math.SQRT2,
    theta0: 0,
    theta1: 2 * Math.PI,
    text: 'The region is 0 ≤ r ≤ sqrt(2), 0 ≤ theta ≤ 2 pi. The area is 2 pi.',
    areaExpr: '2*pi',
  },
  sector: {
    r0: 0,
    r1: Math.SQRT2,
    theta0: 0,
    theta1: Math.PI / 4,
    text: 'The region is 0 ≤ r ≤ sqrt(2), 0 ≤ theta ≤ pi/4. The area is pi/4.',
    areaExpr: 'pi/4',
  },
  annulus: {
    r0: 1 / 2,
    r1: 1,
    theta0: 0,
    theta1: 2 * Math.PI,
    text: 'The region is 1/2 ≤ r ≤ 1, 0 ≤ theta ≤ 2 pi. The area is 3 pi / 4.',
    areaExpr: '3*pi/4',
  },
};

export function polarPreset(shape: PolarShape): { r0: number; r1: number; theta0: number; theta1: number } {
  const preset = POLAR_PRESETS[shape];
  return { r0: preset.r0, r1: preset.r1, theta0: preset.theta0, theta1: preset.theta1 };
}

export function polarReading(
  shape: PolarShape,
  r0?: number,
  r1?: number,
  theta0?: number,
  theta1?: number,
): PolarReading {
  const preset = POLAR_PRESETS[shape];
  const bounds = {
    r0: r0 ?? preset.r0,
    r1: r1 ?? preset.r1,
    theta0: theta0 ?? preset.theta0,
    theta1: theta1 ?? preset.theta1,
  };
  const exact =
    close(bounds.r0, preset.r0) &&
    close(bounds.r1, preset.r1) &&
    close(bounds.theta0, preset.theta0) &&
    close(bounds.theta1, preset.theta1);
  if (exact) return { shape, ...bounds, text: preset.text, areaExpr: preset.areaExpr };
  const area = 0.5 * (bounds.r1 ** 2 - bounds.r0 ** 2) * (bounds.theta1 - bounds.theta0);
  const areaExpr = formatNum(area);
  return {
    shape,
    ...bounds,
    areaExpr,
    text: `The region is ${formatNum(bounds.r0)} ≤ r ≤ ${formatNum(bounds.r1)}, ${formatNum(bounds.theta0)} ≤ theta ≤ ${formatNum(bounds.theta1)}. The area is ${areaExpr}.`,
  };
}

export function cylindricalPoint(r: number, theta: number, z: number): { x: number; y: number; z: number; text: string; expr: string } {
  if (close(r, 1) && close(theta, Math.PI / 2) && close(z, 5)) {
    return {
      x: 0,
      y: 1,
      z: 5,
      text: 'The point r = 1, theta = pi/2, z = 5 is (x, y, z) = (0, 1, 5).',
      expr: '(0, 1, 5)',
    };
  }
  const x = snapNumber(r * Math.cos(theta));
  const y = snapNumber(r * Math.sin(theta));
  const height = snapNumber(z);
  const expr = `(${formatNum(x)}, ${formatNum(y)}, ${formatNum(height)})`;
  return {
    x,
    y,
    z: height,
    expr,
    text: `The point r = ${formatNum(r)}, theta = ${formatNum(theta)}, z = ${formatNum(height)} is (x, y, z) = ${expr}.`,
  };
}

export function cylindricalReading(
  bounds: { r0?: number; r1?: number; theta0?: number; theta1?: number; z0?: number; z1?: number } = {},
): CylindricalReading {
  const region = {
    r0: bounds.r0 ?? 0,
    r1: bounds.r1 ?? 1,
    theta0: bounds.theta0 ?? 0,
    theta1: bounds.theta1 ?? 2 * Math.PI,
    z0: bounds.z0 ?? 0,
    z1: bounds.z1 ?? 5,
  };
  const point = cylindricalPoint(1, Math.PI / 2, region.z1);
  const standard =
    close(region.r0, 0) &&
    close(region.r1, 1) &&
    close(region.theta0, 0) &&
    close(region.theta1, 2 * Math.PI) &&
    close(region.z0, 0);
  const top = Math.round(region.z1);
  if (standard && close(region.z1, top)) {
    return {
      ...region,
      z1: top,
      text: `The region is 0 ≤ r ≤ 1, 0 ≤ theta ≤ 2 pi, 0 ≤ z ≤ ${top}. The volume is ${top} pi.`,
      volumeExpr: `${top}*pi`,
      pointText: point.text,
      pointExpr: point.expr,
    };
  }
  const volume = 0.5 * (region.r1 ** 2 - region.r0 ** 2) * (region.theta1 - region.theta0) * (region.z1 - region.z0);
  const volumeExpr = formatNum(volume);
  return {
    ...region,
    volumeExpr,
    pointText: point.text,
    pointExpr: point.expr,
    text: `The region is ${formatNum(region.r0)} ≤ r ≤ ${formatNum(region.r1)}, ${formatNum(region.theta0)} ≤ theta ≤ ${formatNum(region.theta1)}, ${formatNum(region.z0)} ≤ z ≤ ${formatNum(region.z1)}. The volume is ${volumeExpr}.`,
  };
}

export function sphericalPoint(rho: number, phi: number, theta: number): { x: number; y: number; z: number; text: string; expr: string } {
  if (close(phi, Math.PI / 2) && close(theta, 0)) {
    const rhoText = formatNum(rho);
    return {
      x: snapNumber(rho),
      y: 0,
      z: 0,
      text: `The point rho = ${rhoText}, phi = pi/2, theta = 0 is (x, y, z) = (${rhoText}, 0, 0).`,
      expr: `(${rhoText}, 0, 0)`,
    };
  }
  const x = snapNumber(rho * Math.sin(phi) * Math.cos(theta));
  const y = snapNumber(rho * Math.sin(phi) * Math.sin(theta));
  const z = snapNumber(rho * Math.cos(phi));
  const expr = `(${formatNum(x)}, ${formatNum(y)}, ${formatNum(z)})`;
  return {
    x,
    y,
    z,
    expr,
    text: `The point rho = ${formatNum(rho)}, phi = ${formatNum(phi)}, theta = ${formatNum(theta)} is (x, y, z) = ${expr}.`,
  };
}

export function sphericalReading(
  bounds: { rho0?: number; rho1?: number; phi0?: number; phi1?: number; theta0?: number; theta1?: number } = {},
): SphericalReading {
  const region = {
    rho0: bounds.rho0 ?? 0,
    rho1: bounds.rho1 ?? 1,
    phi0: bounds.phi0 ?? Math.PI / 4,
    phi1: bounds.phi1 ?? Math.PI / 2,
    theta0: bounds.theta0 ?? 0,
    theta1: bounds.theta1 ?? 2 * Math.PI,
  };
  const point = sphericalPoint(region.rho1, region.phi1, region.theta0);
  const exact =
    close(region.rho0, 0) &&
    close(region.rho1, 1) &&
    close(region.phi0, Math.PI / 4) &&
    close(region.phi1, Math.PI / 2) &&
    close(region.theta0, 0) &&
    close(region.theta1, 2 * Math.PI);
  if (exact) {
    return {
      ...region,
      phiText: PHI_TEXT,
      text: 'The region is 0 ≤ rho ≤ 1, pi/4 ≤ phi ≤ pi/2, 0 ≤ theta ≤ 2 pi. The volume is pi sqrt(2) / 3.',
      volumeExpr: 'pi*sqrt(2)/3',
      pointText: point.text,
      pointExpr: point.expr,
    };
  }
  const volume =
    ((region.rho1 ** 3 - region.rho0 ** 3) / 3) *
    (Math.cos(region.phi0) - Math.cos(region.phi1)) *
    (region.theta1 - region.theta0);
  const volumeExpr = formatNum(volume);
  return {
    ...region,
    phiText: PHI_TEXT,
    volumeExpr,
    pointText: point.text,
    pointExpr: point.expr,
    text: `The region is ${formatNum(region.rho0)} ≤ rho ≤ ${formatNum(region.rho1)}, ${formatNum(region.phi0)} ≤ phi ≤ ${formatNum(region.phi1)}, ${formatNum(region.theta0)} ≤ theta ≤ ${formatNum(region.theta1)}. The volume is ${volumeExpr}.`,
  };
}

const MAP_TEXT: Record<MapId, string> = {
  linear: 'The map is x = (u + v)/2, y = (u - v)/2.',
  shear: 'The map is x = u, y = u v.',
  parabola: 'The map is x = sqrt(u - v), y = v.',
};

const CELL_TEXT: Record<MapId, string> = {
  linear: 'The outlined cell has area 1 in the uv-plane and area 1/2 in the xy-plane.',
  shear: 'The outlined cell has area 1 in the uv-plane and area 3/2 in the xy-plane.',
  parabola: 'The outlined cell has area 1/4 in the uv-plane and area (2 - sqrt(2))/3 in the xy-plane.',
};

const CELL_AREA: Record<MapId, string> = {
  linear: '1/2',
  shear: '3/2',
  parabola: '(2 - sqrt(2))/3',
};

export function mapGeometry(map: MapId): MapGeometry {
  if (map === 'linear') return { u0: 0, u1: 2, v0: 0, v1: 2, triangular: false, cell: { u0: 0, u1: 1, v0: 0, v1: 1 } };
  if (map === 'shear') return { u0: 0, u1: 4, v0: 0, v1: 1, triangular: false, cell: { u0: 1, u1: 2, v0: 0, v1: 1 } };
  return { u0: 0, u1: 1, v0: 0, v1: 1, triangular: true, cell: { u0: 1 / 2, u1: 1, v0: 0, v1: 1 / 2 } };
}

export function mapPoint(map: MapId, u: number, v: number): { x: number; y: number } | null {
  if (map === 'linear') return { x: (u + v) / 2, y: (u - v) / 2 };
  if (map === 'shear') return { x: u, y: u * v };
  if (u < v - EPS) return null;
  return { x: Math.sqrt(Math.max(0, u - v)), y: v };
}

export function changeReading(map: MapId, u: number, v: number): ChangeReading {
  const xyAreaExpr = CELL_AREA[map];
  const image = mapPoint(map, u, v);
  if (image === null) {
    return {
      text: `${MAP_TEXT[map]} The point is outside the domain of the map. ${CELL_TEXT[map]}`,
      pointText: `This point (u, v) = (${formatNum(u)}, ${formatNum(v)}) is outside the domain of the map.`,
      jacobianExpr: '',
      xyAreaExpr,
      outside: true,
    };
  }
  if (map === 'parabola' && image.x < 1e-8) {
    return {
      text: `${MAP_TEXT[map]} The Jacobian determinant is undefined along u = v. ${CELL_TEXT[map]}`,
      pointText: `This point (u, v) = (${formatNum(u)}, ${formatNum(v)}) goes to (x, y) = (0, ${formatNum(image.y)}).`,
      jacobianExpr: '',
      xyAreaExpr,
      outside: false,
      x: 0,
      y: image.y,
    };
  }
  const jacobianExpr = map === 'linear' ? '-1/2' : map === 'shear' ? formatNum(u) : formatNum(1 / (2 * image.x));
  return {
    text: `${MAP_TEXT[map]} The Jacobian determinant is ${jacobianExpr}. ${CELL_TEXT[map]}`,
    pointText: `This point (u, v) = (${formatNum(u)}, ${formatNum(v)}) goes to (x, y) = (${formatNum(image.x)}, ${formatNum(image.y)}).`,
    jacobianExpr,
    xyAreaExpr,
    outside: false,
    x: image.x,
    y: image.y,
  };
}

const SPHERE_CONE =
  'The solid is the set above the xy-plane, inside the sphere x^2 + y^2 + z^2 = 1, and below the cone z^2 = x^2 + y^2. Its shadow is the disk x^2 + y^2 ≤ 1.';
const PLANE_PARABOLOID =
  'The solid is the set in the first octant below both z = 1 - x - y and z = x^2 + y^2. Its shadow is the triangle x ≥ 0, y ≥ 0, x + y ≤ 1, split by the curve x^2 + y^2 = 1 - x - y.';

const SOLID_CUTS: Record<SolidPreset, Record<CutPlane, string>> = {
  'sphere-cone': {
    y: 'The cut by y = 0 meets the cone and the sphere at x = 1/sqrt(2) and at x = -1/sqrt(2).',
    x: 'The cut by x = 0 meets the cone and the sphere at y = 1/sqrt(2) and at y = -1/sqrt(2).',
    z: 'The cut by z = 0 is the shadow, the disk x^2 + y^2 ≤ 1.',
  },
  'plane-paraboloid': {
    y: 'The cut by y = 0 meets the plane and the paraboloid at x = (-1 + sqrt(5))/2.',
    x: 'The cut by x = 0 meets the plane and the paraboloid at y = (-1 + sqrt(5))/2.',
    z: 'The cut by z = 0 is the shadow, the triangle x ≥ 0, y ≥ 0, x + y ≤ 1.',
  },
};

export function solidHeight(preset: SolidPreset, x: number, y: number): number | null {
  if (preset === 'sphere-cone') {
    const radiusSquared = x * x + y * y;
    if (radiusSquared > 1 + EPS) return null;
    return Math.min(Math.sqrt(radiusSquared), Math.sqrt(Math.max(0, 1 - radiusSquared)));
  }
  if (x < -EPS || y < -EPS || x + y > 1 + EPS) return null;
  return Math.min(Math.max(0, 1 - x - y), x * x + y * y);
}

export function solidReading(preset: SolidPreset, cut: CutPlane): SolidReading {
  if (preset === 'sphere-cone') {
    return {
      text: SPHERE_CONE,
      heightText: 'At (1/2, 0) the height is 1/2.',
      heightExpr: '1/2',
      meetExpr: '1/sqrt(2)',
      cutText: SOLID_CUTS[preset][cut],
    };
  }
  return {
    text: PLANE_PARABOLOID,
    heightText: 'At (1/5, 1/5) the height is 2/25.',
    heightExpr: '2/25',
    cutText: SOLID_CUTS[preset][cut],
  };
}
