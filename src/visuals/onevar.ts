import {
  ExpressionError,
  constantValue,
  constraints,
  makeCurve,
  rational,
  compile,
  diff,
  type Curve,
  type Fn,
  type Node,
} from './expression.ts';

export { ExpressionError, constantValue, makeCurve, type Curve };

const BIG = 1e10;

// ---------- number text ----------

/** Plain-text number: an integer, a small fraction, a multiple of pi, sqrt(n), or four decimals. */
export function fmt(value: number): string {
  if (!Number.isFinite(value)) return value > 0 ? '∞' : value < 0 ? '-∞' : 'undefined';
  if (Math.abs(value) < 1e-9) return '0';
  const whole = Math.round(value);
  if (Math.abs(value - whole) < 1e-9) return String(whole);
  const frac = rational(value, 60, 1e-9);
  if (frac) return `${frac[0]}/${frac[1]}`;
  const overPi = Math.abs(value) > 1e-3 ? rational(value / Math.PI, 12, 1e-9) : null;
  if (overPi) {
    const [p, q] = overPi;
    const head = p === 1 ? 'pi' : p === -1 ? '-pi' : `${p} pi`;
    return q === 1 ? head : `${head}/${q}`;
  }
  const squared = value * value;
  const sq = Math.abs(value) > 1e-3 ? rational(squared, 12, 1e-9) : null;
  if (sq) {
    const root = sq[1] === 1 ? `sqrt(${sq[0]})` : `sqrt(${sq[0] * sq[1]})/${sq[1]}`;
    return value < 0 ? `-${root}` : root;
  }
  return String(Number(value.toFixed(4)));
}

/** fmt, with the decimal added when the text is not already a plain number. */
export function fmtDecimal(value: number): string {
  const text = fmt(value);
  return /^-?\d+$/.test(text) || /^-?\d+\.\d+$/.test(text) ? text : `${text} (about ${Number(value.toFixed(4))})`;
}

export function fmtBound(value: number): string {
  if (value === Infinity) return '∞';
  if (value === -Infinity) return '-∞';
  return fmt(value);
}

function snap(x: number): number {
  const rounded = Math.round(x * 1e9) / 1e9;
  return Math.abs(x - rounded) < 1e-10 ? rounded : x;
}

// ---------- root finding ----------

function usable(v: number): boolean {
  return Number.isFinite(v);
}

function linspace(lo: number, hi: number, n: number): number[] {
  return Array.from({ length: n + 1 }, (_, i) => lo + ((hi - lo) * i) / n);
}

function bisect(g: Fn, a: number, b: number): number {
  let [lo, hi] = [a, b];
  let glo = g(lo);
  for (let i = 0; i < 80; i += 1) {
    const mid = (lo + hi) / 2;
    const gm = g(mid);
    if (!usable(gm)) return mid;
    if (gm === 0) return mid;
    if (Math.sign(gm) === Math.sign(glo)) {
      lo = mid;
      glo = gm;
    } else {
      hi = mid;
    }
    if (hi - lo < 1e-15 * Math.max(1, Math.abs(mid))) break;
  }
  return (lo + hi) / 2;
}

function minimiseAbs(g: Fn, a: number, b: number): number {
  let [lo, hi] = [a, b];
  for (let i = 0; i < 120; i += 1) {
    const m1 = lo + (hi - lo) / 3;
    const m2 = hi - (hi - lo) / 3;
    if (Math.abs(g(m1)) < Math.abs(g(m2))) hi = m2;
    else lo = m1;
  }
  return (lo + hi) / 2;
}

/** Sorted, de-duplicated zeros of g on [lo, hi]: sign changes and touching zeros. Poles are not zeros. */
export function zeros(g: Fn, lo: number, hi: number, samples: number[] = linspace(lo, hi, 6000)): number[] {
  const xs = samples.filter((x) => x >= lo && x <= hi);
  const vs = xs.map(g);
  const found: number[] = [];
  for (let i = 0; i < xs.length; i += 1) {
    const v = vs[i];
    if (!usable(v)) continue;
    const before = vs[i - 1];
    const after = vs[i + 1];
    if (v === 0) {
      const neighbours = [before, after].filter((n) => n !== undefined && usable(n) && Math.abs(n) > 1e-12);
      if (neighbours.length > 0) found.push(xs[i]);
      continue;
    }
    if (i + 1 < xs.length && usable(after) && v * after < 0 && Math.max(Math.abs(v), Math.abs(after)) >= 1e-12) {
      const x = bisect(g, xs[i], xs[i + 1]);
      if (Math.abs(g(x)) <= 1e-3 * Math.min(Math.abs(v), Math.abs(after)) + 1e-9) found.push(snap(x));
      continue;
    }
    if (
      i > 0 &&
      i + 1 < xs.length &&
      usable(before) &&
      usable(after) &&
      v * before > 0 &&
      v * after > 0 &&
      Math.abs(v) <= Math.abs(before) &&
      Math.abs(v) <= Math.abs(after) &&
      Math.abs(v) < 1e-3 &&
      Math.abs(before) >= 1e-12
    ) {
      const x = minimiseAbs(g, xs[i - 1], xs[i + 1]);
      if (Math.abs(g(x)) < 1e-9) found.push(snap(x));
    }
  }
  return dedupe(found);
}

function dedupe(values: number[], tolerance = 1e-7): number[] {
  const sorted = [...values].sort((p, q) => p - q);
  const out: number[] = [];
  for (const v of sorted) {
    if (out.length === 0 || Math.abs(v - out[out.length - 1]) > tolerance * Math.max(1, Math.abs(v))) out.push(v);
  }
  return out;
}

// ---------- limits ----------

export type Limit = { kind: 'finite'; value: number } | { kind: 'infinite'; sign: 1 | -1 } | { kind: 'none' };

function roundLimit(v: number): number {
  const r = Math.round(v * 1e5) / 1e5;
  return r === 0 ? 0 : r;
}

function judge(v1: number, v2: number, v3: number): Limit {
  if (![v1, v2, v3].every(usable)) {
    return { kind: 'none' };
  }
  if (Math.sign(v1) === Math.sign(v2) && Math.sign(v2) === Math.sign(v3) && Math.abs(v1) < Math.abs(v2) && Math.abs(v2) < Math.abs(v3) && Math.abs(v3) - Math.abs(v2) > 2) {
    return { kind: 'infinite', sign: v3 > 0 ? 1 : -1 };
  }
  if (Math.abs(v3 - v2) <= 2e-4 * (1 + Math.abs(v3))) return { kind: 'finite', value: roundLimit(v3) };
  return { kind: 'none' };
}

export function limitAt(f: Fn, a: number, side: 'left' | 'right'): Limit {
  const s = side === 'left' ? -1 : 1;
  const [h1, h2, h3] = [1e-4, 1e-6, 1e-8];
  return judge(f(a + s * h1), f(a + s * h2), f(a + s * h3));
}

/** Limit as x goes to +infinity (sign 1) or -infinity (sign -1). */
export function limitAtInfinity(f: Fn, sign: 1 | -1): Limit {
  const values = [1e4, 1e6, 1e8].map((x) => f(sign * x));
  if (values.some((v) => Number.isNaN(v))) return { kind: 'none' };
  if (!Number.isFinite(values[2]) && Math.sign(values[1]) === Math.sign(values[2])) {
    return { kind: 'infinite', sign: values[2] > 0 ? 1 : -1 };
  }
  return judge(values[0], values[1], values[2]);
}

export type EndBehaviour = {
  side: 'left' | 'right';
  limit: Limit;
  asymptote: { kind: 'horizontal'; y: number } | { kind: 'oblique'; m: number; b: number } | null;
};

function endBehaviour(curve: Curve, side: 'left' | 'right'): EndBehaviour {
  const sign = side === 'right' ? 1 : -1;
  const limit = limitAtInfinity(curve.f, sign);
  if (limit.kind === 'finite') return { side, limit, asymptote: { kind: 'horizontal', y: limit.value } };
  if (limit.kind === 'none') return { side, limit, asymptote: null };
  const slope = limitAtInfinity((x) => curve.f(x) / x, sign);
  if (slope.kind === 'finite' && slope.value !== 0) {
    const m = slope.value;
    const intercept = limitAtInfinity((x) => curve.f(x) - m * x, sign);
    if (intercept.kind === 'finite') {
      return { side, limit, asymptote: { kind: 'oblique', m, b: intercept.value } };
    }
  }
  return { side, limit, asymptote: null };
}

export function limitText(limit: Limit): string {
  if (limit.kind === 'finite') return fmt(limit.value);
  if (limit.kind === 'infinite') return limit.sign > 0 ? '+∞' : '-∞';
  return 'does not exist';
}

// ---------- curve analysis ----------

export type Interval = { lo: number; hi: number; loClosed: boolean; hiClosed: boolean };
export type SignPiece = { lo: number; hi: number; sign: -1 | 0 | 1 };
export type Point = { x: number; y: number };

export type Extremum = Point & {
  kind: 'max' | 'min';
  /** 'zero' f' = 0, 'undefined' f' does not exist, 'endpoint' end of the domain. */
  where: 'zero' | 'undefined' | 'endpoint';
};

export type CurveAnalysis = {
  domain: Interval[];
  yIntercept: Point | null;
  roots: number[];
  verticalAsymptotes: { x: number; left: Limit; right: Limit }[];
  holes: Point[];
  ends: EndBehaviour[];
  slopeSigns: SignPiece[];
  curvatureSigns: SignPiece[];
  extrema: Extremum[];
  /** f' = 0 without a sign change. */
  flatPoints: Point[];
  /** f' does not exist and keeps its sign (a vertical tangent, not an extremum). */
  verticalTangents: Point[];
  inflections: Point[];
  /** f'' = 0 without a sign change. */
  notInflections: Point[];
  /** Only with a restriction to [a, b]: the largest and smallest values. */
  absolute: { max: Point; min: Point } | null;
  restrict: [number, number] | null;
};

function definedAt(f: Fn, x: number): boolean {
  const v = f(x);
  return usable(v) && Math.abs(v) < BIG;
}

function constraintRoots(ast: Node, lo: number, hi: number, samples: number[]): number[] {
  const out: number[] = [];
  for (const g of constraints(ast)) out.push(...zeros(compile(g), lo, hi, samples));
  return dedupe(out);
}

function pieceProbe(lo: number, hi: number): number {
  if (lo === -Infinity && hi === Infinity) return 0;
  if (lo === -Infinity) return hi - 1 - Math.abs(hi);
  if (hi === Infinity) return lo + 1 + Math.abs(lo);
  return (lo + hi) / 2;
}

function domainOf(curve: Curve, candidates: number[]): Interval[] {
  const f = curve.f;
  const edges = [-Infinity, ...candidates, Infinity];
  type Piece = { lo: number; hi: number; inside: boolean };
  const pieces: Piece[] = [];
  for (let i = 0; i + 1 < edges.length; i += 1) {
    const [lo, hi] = [edges[i], edges[i + 1]];
    pieces.push({ lo, hi, inside: definedAt(f, pieceProbe(lo, hi)) });
  }
  const out: Interval[] = [];
  let current: Interval | null = null;
  const flush = () => {
    if (current) out.push(current);
    current = null;
  };
  for (let i = 0; i < pieces.length; i += 1) {
    const piece = pieces[i];
    const next = pieces[i + 1];
    const lowDefined = Number.isFinite(piece.lo) && definedAt(f, piece.lo);
    const highDefined = Number.isFinite(piece.hi) && definedAt(f, piece.hi);
    if (piece.inside) {
      if (current && lowDefined && pieces[i - 1]?.inside) {
        current.hi = piece.hi;
      } else {
        flush();
        current = { lo: piece.lo, hi: piece.hi, loClosed: lowDefined, hiClosed: false };
      }
      current!.hiClosed = highDefined && !next?.inside;
    } else {
      flush();
      // a single defined point between two undefined pieces
      if (next && !next.inside && highDefined) out.push({ lo: piece.hi, hi: piece.hi, loClosed: true, hiClosed: true });
    }
  }
  flush();
  return out;
}

function restrictTo(domain: Interval[], f: Fn, a: number, b: number): Interval[] {
  const out: Interval[] = [];
  for (const interval of domain) {
    const lo = Math.max(interval.lo, a);
    const hi = Math.min(interval.hi, b);
    if (lo > hi) continue;
    const loClosed = lo > interval.lo ? definedAt(f, lo) : interval.loClosed;
    const hiClosed = hi < interval.hi ? definedAt(f, hi) : interval.hiClosed;
    if (lo === hi && !(loClosed && hiClosed)) continue;
    out.push({ lo, hi, loClosed, hiClosed });
  }
  return out;
}

function signOf(v: number): -1 | 0 | 1 {
  if (!usable(v) || Math.abs(v) < 1e-10) return 0;
  return v > 0 ? 1 : -1;
}

/** Split each domain interval at the breakpoints and read the sign of g in each piece. */
function signChart(g: Fn, domain: Interval[], breakpoints: number[]): SignPiece[] {
  const out: SignPiece[] = [];
  for (const interval of domain) {
    if (interval.lo === interval.hi) continue;
    const inside = breakpoints.filter((b) => b > interval.lo && b < interval.hi);
    const edges = [interval.lo, ...inside, interval.hi];
    for (let i = 0; i + 1 < edges.length; i += 1) {
      out.push({ lo: edges[i], hi: edges[i + 1], sign: signOf(g(pieceProbe(edges[i], edges[i + 1]))) });
    }
  }
  return out;
}

function fixTest(piece: SignPiece, pieces: SignPiece[]): SignPiece | undefined {
  return pieces.find((p) => p.lo === piece.hi && p.lo !== p.hi);
}

export type AnalyseOptions = {
  xmin?: number;
  xmax?: number;
  /** Restrict to the closed interval [a, b], as in the extreme value theorem. */
  restrict?: [number, number] | null;
};

export function analyseCurve(curve: Curve, options: AnalyseOptions = {}): CurveAnalysis {
  const { f, d1, d2 } = curve;
  const xmin = options.xmin ?? -5;
  const xmax = options.xmax ?? 5;
  const restrict = options.restrict ?? null;
  const view = Math.max(Math.abs(xmin), Math.abs(xmax), 5);
  const reach = Math.max(25, 2 * view);
  const samples = [...linspace(-reach, reach, 5000), ...linspace(-view * 1.2, view * 1.2, 5000), 0]
    .sort((p, q) => p - q)
    .filter((x, i, all) => i === 0 || x !== all[i - 1]);

  const candidates = constraintRoots(curve.ast, -reach, reach, samples);
  let domain = domainOf(curve, candidates);
  if (restrict) domain = restrictTo(domain, f, restrict[0], restrict[1]);

  const clip = (lo: number, hi: number): [number, number] => [Math.max(lo, -reach), Math.min(hi, reach)];

  // vertical asymptotes and holes
  const verticalAsymptotes: CurveAnalysis['verticalAsymptotes'] = [];
  const holes: Point[] = [];
  for (const c of candidates) {
    if (definedAt(f, c)) continue;
    const left = limitAt(f, c, 'left');
    const right = limitAt(f, c, 'right');
    if (left.kind === 'infinite' || right.kind === 'infinite') {
      verticalAsymptotes.push({ x: c, left, right });
    } else if (left.kind === 'finite' && right.kind === 'finite' && Math.abs(left.value - right.value) < 1e-4 * (1 + Math.abs(left.value))) {
      holes.push({ x: c, y: left.value });
    }
  }
  // f' and f'' lose their digits next to a removable hole, so their zeros there are noise
  const nearHole = (x: number) => holes.some((h) => x !== h.x && Math.abs(x - h.x) < 0.05);

  // f' partition
  const d1Breaks: number[] = [];
  for (const interval of domain) {
    const [lo, hi] = clip(interval.lo, interval.hi);
    if (lo >= hi) continue;
    d1Breaks.push(...zeros(d1, lo, hi, samples), ...constraintRoots(curve.d1ast, lo, hi, samples));
  }
  const slopeBreaks = dedupe(d1Breaks.filter((b) => !nearHole(b)));
  const slopeSigns = signChart(d1, domain, slopeBreaks);

  // f'' partition
  const d2Breaks: number[] = [];
  for (const interval of domain) {
    const [lo, hi] = clip(interval.lo, interval.hi);
    if (lo >= hi) continue;
    d2Breaks.push(...zeros(d2, lo, hi, samples), ...constraintRoots(curve.d2ast, lo, hi, samples));
  }
  const curvatureBreaks = dedupe(d2Breaks.filter((b) => !nearHole(b)));
  const curvatureSigns = signChart(d2, domain, curvatureBreaks);

  const extrema: Extremum[] = [];
  const flatPoints: Point[] = [];
  const verticalTangents: Point[] = [];
  for (const piece of slopeSigns) {
    const next = fixTest(piece, slopeSigns);
    const c = piece.hi;
    if (!next || !Number.isFinite(c) || !definedAt(f, c)) continue;
    const slope = d1(c);
    const critical = !usable(slope) || Math.abs(slope) < 1e-9;
    if (!critical) continue;
    const y = f(c);
    if (piece.sign * next.sign < 0) {
      extrema.push({ x: c, y, kind: piece.sign > 0 ? 'max' : 'min', where: usable(slope) ? 'zero' : 'undefined' });
    } else if (piece.sign * next.sign > 0) {
      (usable(slope) ? flatPoints : verticalTangents).push({ x: c, y });
    }
  }
  // endpoints that belong to the domain
  for (const interval of domain) {
    if (interval.lo === interval.hi) continue;
    const delta = (width: number) => Math.min(1e-4 * (1 + Math.abs(width)), Math.abs(interval.hi - interval.lo) / 4);
    if (interval.loClosed && Number.isFinite(interval.lo)) {
      const here = f(interval.lo);
      const inward = f(interval.lo + delta(interval.lo));
      if (inward > here + 1e-12) extrema.push({ x: interval.lo, y: here, kind: 'min', where: 'endpoint' });
      else if (inward < here - 1e-12) extrema.push({ x: interval.lo, y: here, kind: 'max', where: 'endpoint' });
    }
    if (interval.hiClosed && Number.isFinite(interval.hi)) {
      const here = f(interval.hi);
      const inward = f(interval.hi - delta(interval.hi));
      if (inward > here + 1e-12) extrema.push({ x: interval.hi, y: here, kind: 'min', where: 'endpoint' });
      else if (inward < here - 1e-12) extrema.push({ x: interval.hi, y: here, kind: 'max', where: 'endpoint' });
    }
  }
  extrema.sort((p, q) => p.x - q.x);

  const inflections: Point[] = [];
  const notInflections: Point[] = [];
  for (const piece of curvatureSigns) {
    const next = fixTest(piece, curvatureSigns);
    const c = piece.hi;
    if (!next || !Number.isFinite(c) || !definedAt(f, c)) continue;
    if (piece.sign * next.sign < 0) inflections.push({ x: c, y: f(c) });
    else if (piece.sign * next.sign > 0 && usable(d2(c)) && Math.abs(d2(c)) < 1e-9) notInflections.push({ x: c, y: f(c) });
  }

  // intercepts
  const inDomain = (x: number) => domain.some((i) => (x > i.lo || (x === i.lo && i.loClosed)) && (x < i.hi || (x === i.hi && i.hiClosed)));
  const yIntercept = inDomain(0) && definedAt(f, 0) ? { x: 0, y: f(0) } : null;
  const roots: number[] = [];
  for (const interval of domain) {
    const [lo, hi] = clip(interval.lo, interval.hi);
    if (lo > hi) continue;
    for (const r of zeros(f, lo, hi, samples)) if (inDomain(r)) roots.push(r);
    if (interval.lo === interval.hi && Math.abs(f(interval.lo)) < 1e-12) roots.push(interval.lo);
  }

  const ends: EndBehaviour[] = [];
  const reaches = (sign: number) => !Number.isNaN(f(sign * 1e4)) && !Number.isNaN(f(sign * 1e6));
  if (!restrict) {
    if (reaches(-1)) ends.push(endBehaviour(curve, 'left'));
    if (reaches(1)) ends.push(endBehaviour(curve, 'right'));
  }

  let absolute: CurveAnalysis['absolute'] = null;
  if (restrict && domain.length === 1 && domain[0].lo === restrict[0] && domain[0].hi === restrict[1] && domain[0].loClosed && domain[0].hiClosed) {
    const points: Point[] = [
      { x: restrict[0], y: f(restrict[0]) },
      { x: restrict[1], y: f(restrict[1]) },
    ];
    for (const e of slopeBreaks) {
      if (e > restrict[0] && e < restrict[1] && definedAt(f, e)) {
        const s = d1(e);
        if (!usable(s) || Math.abs(s) < 1e-9) points.push({ x: e, y: f(e) });
      }
    }
    absolute = {
      max: points.reduce((best, p) => (p.y > best.y ? p : best)),
      min: points.reduce((best, p) => (p.y < best.y ? p : best)),
    };
  }

  const tidy = (p: Point): Point => ({ x: p.x === 0 ? 0 : p.x, y: p.y === 0 ? 0 : p.y });
  return {
    domain,
    yIntercept: yIntercept && tidy(yIntercept),
    roots: dedupe(roots),
    verticalAsymptotes,
    holes,
    ends,
    slopeSigns,
    curvatureSigns,
    extrema: extrema.map((e) => ({ ...e, ...tidy(e) })),
    flatPoints: flatPoints.map(tidy),
    verticalTangents: verticalTangents.map(tidy),
    inflections: inflections.map(tidy),
    notInflections: notInflections.map(tidy),
    absolute: absolute && { max: tidy(absolute.max), min: tidy(absolute.min) },
    restrict,
  };
}

// ---------- curve analysis text ----------

export function intervalText(i: Interval): string {
  if (i.lo === i.hi) return `{${fmt(i.lo)}}`;
  return `${i.loClosed ? '[' : '('}${fmtBound(i.lo)}, ${fmtBound(i.hi)}${i.hiClosed ? ']' : ')'}`;
}

export function domainText(domain: Interval[]): string {
  if (domain.length === 0) return 'The domain is empty.';
  return `Domain: ${domain.map(intervalText).join(' ∪ ')}`;
}

function runText(pieces: SignPiece[], sign: -1 | 1, symbol: string): string | null {
  const matching = pieces.filter((p) => p.sign === sign);
  if (matching.length === 0) return null;
  const parts = matching.map((p) => `(${fmtBound(p.lo)}, ${fmtBound(p.hi)})`);
  return `${symbol} ${sign > 0 ? '>' : '<'} 0 on ${parts.join(' and ')}`;
}

export function signText(pieces: SignPiece[], symbol: string): string {
  const parts = [runText(pieces, 1, symbol), runText(pieces, -1, symbol)].filter((p): p is string => p !== null);
  return parts.length === 0 ? `${symbol} is 0 everywhere.` : `${parts.join('; ')}.`;
}

export function extremumText(e: Extremum): string {
  const name = `${e.where === 'endpoint' ? 'Endpoint' : 'Local'} ${e.kind === 'max' ? 'maximum' : 'minimum'}`;
  const note = e.where === 'undefined' ? " f' does not exist there." : '';
  return `${name} at x = ${fmt(e.x)}, f(${fmt(e.x)}) = ${fmt(e.y)}.${note}`;
}

export function endText(end: EndBehaviour): string {
  const arrow = end.side === 'right' ? 'x → ∞' : 'x → -∞';
  if (end.asymptote?.kind === 'horizontal') return `Horizontal asymptote y = ${fmt(end.asymptote.y)} as ${arrow}.`;
  if (end.asymptote?.kind === 'oblique') {
    const { m, b } = end.asymptote;
    const slope = m === 1 ? 'x' : m === -1 ? '-x' : `${fmt(m)}x`;
    const intercept = b === 0 ? '' : b > 0 ? ` + ${fmt(b)}` : ` - ${fmt(-b)}`;
    return `Oblique asymptote y = ${slope}${intercept} as ${arrow}.`;
  }
  if (end.limit.kind === 'infinite') return `f(x) → ${limitText(end.limit)} as ${arrow}, with no asymptote.`;
  return `No asymptote as ${arrow}.`;
}

export function verticalText(v: { x: number; left: Limit; right: Limit }): string {
  const sides = [
    v.left.kind === 'none' ? null : `f → ${limitText(v.left)} from the left`,
    v.right.kind === 'none' ? null : `f → ${limitText(v.right)} from the right`,
  ].filter((s): s is string => s !== null);
  return `Vertical asymptote x = ${fmt(v.x)} (${sides.join(', ')}).`;
}

// ---------- sampling ----------

/** Points of y = f(x) with breaks (null) where f is undefined or jumps off the page at a pole. */
export function sampleCurve(f: Fn, lo: number, hi: number, count = 801, clip = 1e3): { x: number[]; y: (number | null)[] } {
  const x = linspace(lo, hi, count - 1);
  const y: (number | null)[] = x.map((t) => {
    const v = f(t);
    return usable(v) && Math.abs(v) <= clip ? v : null;
  });
  for (let i = 1; i < y.length; i += 1) {
    const [p, q] = [y[i - 1], y[i]];
    if (p !== null && q !== null && p * q < 0 && Math.abs(p) > 50 && Math.abs(q) > 50) y[i] = null;
  }
  return { x, y };
}

/** A y-range that shows the curve without being stretched by a pole. */
export function suggestYRange(values: (number | null)[], focus: number[] = []): [number, number] {
  const finite = values.filter((v): v is number => v !== null && Math.abs(v) <= 60).concat(focus.filter((v) => Math.abs(v) <= 60));
  if (finite.length === 0) return [-5, 5];
  const sorted = [...finite].sort((p, q) => p - q);
  const low = sorted[Math.floor(0.02 * (sorted.length - 1))];
  const high = sorted[Math.ceil(0.98 * (sorted.length - 1))];
  const pad = Math.max(0.5, (high - low) * 0.12);
  return [Math.min(low, ...focus.filter((v) => Math.abs(v) <= 60)) - pad, Math.max(high, ...focus.filter((v) => Math.abs(v) <= 60)) + pad];
}

// ---------- limit viewer ----------

export type LimitTarget = { kind: 'point'; a: number } | { kind: 'infinity'; sign: 1 | -1 };

export type LimitRow = { distance: number; left: number | null; right: number | null };

export type LimitReading = {
  left: Limit;
  right: Limit;
  twoSided: Limit;
  text: string;
  rows: LimitRow[];
};

function sameLimit(p: Limit, q: Limit): boolean {
  if (p.kind !== q.kind) return false;
  if (p.kind === 'finite' && q.kind === 'finite') return Math.abs(p.value - q.value) <= 1e-4 * (1 + Math.abs(p.value));
  if (p.kind === 'infinite' && q.kind === 'infinite') return p.sign === q.sign;
  return true;
}

/** Behaviour of f near x = a from each side, with a table of values. */
export function limitReading(curve: Curve, a: number): LimitReading {
  const f = curve.f;
  const left = limitAt(f, a, 'left');
  const right = limitAt(f, a, 'right');
  const point = definedAt(f, a) ? f(a) : null;
  let twoSided: Limit = { kind: 'none' };
  if (left.kind !== 'none' && sameLimit(left, right)) twoSided = left;
  const at = fmt(a);
  const side = (s: Limit, mark: string) =>
    s.kind === 'none' ? `f has no limit as x → ${at}${mark}` : `f(x) → ${limitText(s)} as x → ${at}${mark}`;
  let text: string;
  if (twoSided.kind !== 'none') {
    text = `${side(twoSided, '')}.`;
    if (twoSided.kind === 'finite') {
      if (point === null) text += ` f(${at}) is not defined, so the graph has a hole there.`;
      else if (Math.abs(point - twoSided.value) > 1e-4 * (1 + Math.abs(point))) text += ` But f(${at}) = ${fmt(point)}, so f is not continuous there.`;
      else text += ` f(${at}) = ${fmt(point)}, so f is continuous there.`;
    }
  } else {
    text = `${side(left, '⁻')}; ${side(right, '⁺')}. The two-sided limit does not exist.`;
    if (point !== null) text += ` f(${at}) = ${fmt(point)}.`;
  }
  const rows: LimitRow[] = [1, 2, 3, 4, 5, 6].map((k) => {
    const h = 10 ** -k;
    const l = f(a - h);
    const r = f(a + h);
    return { distance: h, left: usable(l) ? l : null, right: usable(r) ? r : null };
  });
  return { left, right, twoSided, text, rows };
}

export function infinityReading(curve: Curve, sign: 1 | -1): { limit: Limit; text: string; rows: { x: number; value: number | null }[] } {
  const limit = limitAtInfinity(curve.f, sign);
  const arrow = sign > 0 ? '∞' : '-∞';
  const text =
    limit.kind === 'none'
      ? `f has no limit as x → ${arrow}.`
      : `f(x) → ${limitText(limit)} as x → ${arrow}.`;
  const rows = [1, 2, 3, 4, 5, 6].map((k) => {
    const x = sign * 10 ** k;
    const v = curve.f(x);
    return { x, value: usable(v) ? v : null };
  });
  return { limit, text, rows };
}

// ---------- Newton ----------

export type NewtonStep = {
  index: number;
  x: number;
  fx: number;
  slope: number;
  /** Where the tangent line at x crosses the axis, or null if it never does. */
  next: number | null;
};

export type NewtonReading = {
  steps: NewtonStep[];
  status: 'running' | 'converged' | 'flat-tangent' | 'undefined';
  text: string;
};

export function newtonReading(curve: Curve, x0: number, count: number): NewtonReading {
  const steps: NewtonStep[] = [];
  let x = x0;
  let status: NewtonReading['status'] = 'running';
  for (let index = 0; index < count; index += 1) {
    const fx = curve.f(x);
    const slope = curve.d1(x);
    if (!usable(fx) || !usable(slope)) {
      status = 'undefined';
      steps.push({ index, x, fx: Number.NaN, slope: Number.NaN, next: null });
      break;
    }
    if (Math.abs(slope) < 1e-12) {
      status = 'flat-tangent';
      steps.push({ index, x, fx, slope, next: null });
      break;
    }
    const next = x - fx / slope;
    steps.push({ index, x, fx, slope, next });
    if (Math.abs(fx) < 1e-13) {
      status = 'converged';
      break;
    }
    x = next;
  }
  const last = steps[steps.length - 1];
  let text: string;
  if (status === 'flat-tangent') {
    text = `At x_${last.index} = ${fmt(last.x)} the tangent is horizontal (f' = 0), so Newton's method cannot continue.`;
  } else if (status === 'undefined') {
    text = `f or f' is not defined at x_${last.index} = ${fmt(last.x)}, so Newton's method stops.`;
  } else {
    const latest = status === 'converged' ? last.x : (last.next ?? last.x);
    const index = status === 'converged' ? last.index : last.index + 1;
    text = `x_${index} = ${Number(latest.toPrecision(10))}, with f(x_${index}) = ${(() => {
      const v = curve.f(latest);
      return Math.abs(v) < 1e-12 ? '0' : v.toExponential(2);
    })()}.`;
  }
  return { steps, status, text };
}

// ---------- Taylor ----------

/** Taylor coefficients c_0 ... c_order of f about a, from exact symbolic derivatives. */
export function taylorCoefficients(source: string | Curve, a: number, order: number): number[] {
  const curve = typeof source === 'string' ? makeCurve(source) : source;
  const coefficients: number[] = [];
  let node = curve.ast;
  let factorial = 1;
  for (let k = 0; k <= order; k += 1) {
    if (k > 0) {
      node = diff(node);
      factorial *= k;
    }
    const value = compile(node)(a) / factorial;
    if (!usable(value)) {
      throw new ExpressionError(k === 0 ? `f is not defined at x = ${fmt(a)}.` : `f is not differentiable ${k} times at x = ${fmt(a)}.`);
    }
    coefficients.push(value);
  }
  return coefficients;
}

export function taylorEval(coefficients: number[], a: number, x: number): number {
  return coefficients.reduce((sum, c, k) => sum + c * (x - a) ** k, 0);
}

function coefficientText(c: number): { text: string; sign: 1 | -1; unit: boolean } {
  const magnitude = Math.abs(c);
  const sign = c < 0 ? -1 : 1;
  const r = rational(magnitude, 5040, 1e-9);
  if (r) {
    const [p, q] = r;
    return { sign, unit: p === 1 && q === 1, text: q === 1 ? String(p) : `${p}/${q}` };
  }
  return { sign, unit: false, text: String(Number(magnitude.toFixed(4))) };
}

export function taylorText(coefficients: number[], a: number): string {
  const base = a === 0 ? 'x' : `(x - ${fmt(a)})`.replace('- -', '+ ');
  const terms: { sign: 1 | -1; body: string }[] = [];
  coefficients.forEach((c, k) => {
    if (Math.abs(c) < 1e-9) return;
    const { text, sign, unit } = coefficientText(c);
    const power = k === 0 ? '' : k === 1 ? base : `${base}^${k}`;
    let body: string;
    if (k === 0) body = text;
    else if (unit) body = power;
    else if (text.includes('/')) {
      const [p, q] = text.split('/');
      body = p === '1' ? `${power}/${q}` : `${p}${power}/${q}`;
    } else body = `${text}${power}`;
    terms.push({ sign, body });
  });
  if (terms.length === 0) return '0';
  return terms.map((t, i) => (i === 0 ? (t.sign < 0 ? `-${t.body}` : t.body) : `${t.sign < 0 ? '-' : '+'} ${t.body}`)).join(' ').replace(/^-\s/, '-');
}

export type TaylorReading = {
  coefficients: number[];
  polynomial: string;
  text: string;
  probe: { x: number; f: number; t: number; error: number } | null;
};

export function taylorReading(curve: Curve, a: number, order: number, probe?: number): TaylorReading {
  const coefficients = taylorCoefficients(curve, a, order);
  const polynomial = taylorText(coefficients, a);
  let probeReading: TaylorReading['probe'] = null;
  if (probe !== undefined) {
    const fv = curve.f(probe);
    if (usable(fv)) {
      const t = taylorEval(coefficients, a, probe);
      probeReading = { x: probe, f: fv, t, error: t - fv };
    }
  }
  return { coefficients, polynomial, text: `T_${order}(x) = ${polynomial}`, probe: probeReading };
}

// ---------- Riemann ----------

export type RiemannRule = 'left' | 'right' | 'midpoint';

export type Rectangle = { x0: number; x1: number; height: number };

const GAUSS = [
  [0, 0.5688888888888889],
  [0.5384693101056831, 0.47862867049936647],
  [-0.5384693101056831, 0.47862867049936647],
  [0.906179845938664, 0.23692688505618908],
  [-0.906179845938664, 0.23692688505618908],
] as const;

/** Numerical value of the integral of f over [a, b]. */
export function integralValue(f: Fn, a: number, b: number, panels = 2000): number {
  const width = (b - a) / panels;
  let total = 0;
  for (let i = 0; i < panels; i += 1) {
    const mid = a + (i + 0.5) * width;
    for (const [node, weight] of GAUSS) total += weight * f(mid + (node * width) / 2);
  }
  return (total * width) / 2;
}

export function riemannRectangles(f: Fn, a: number, b: number, n: number, rule: RiemannRule): Rectangle[] {
  const width = (b - a) / n;
  return Array.from({ length: n }, (_, i) => {
    const x0 = a + i * width;
    const x1 = x0 + width;
    const at = rule === 'left' ? x0 : rule === 'right' ? x1 : (x0 + x1) / 2;
    return { x0, x1, height: f(at) };
  });
}

export type RiemannReading = {
  rectangles: Rectangle[];
  sum: number;
  integral: number;
  error: number;
  text: string;
  bound: string | null;
};

export function riemannReading(curve: Curve, a: number, b: number, n: number, rule: RiemannRule): RiemannReading {
  const rectangles = riemannRectangles(curve.f, a, b, n, rule);
  const width = (b - a) / n;
  const sum = rectangles.reduce((total, r) => total + r.height * width, 0);
  const integral = integralValue(curve.f, a, b);
  const error = sum - integral;
  const names = { left: 'left', right: 'right', midpoint: 'midpoint' } as const;
  const relation = Math.abs(error) < 1e-9 ? 'equals' : error > 0 ? `is above the integral by ${Number(error.toPrecision(4))}` : `is below the integral by ${Number((-error).toPrecision(4))}`;
  const text = `The ${names[rule]} sum with n = ${n} is ${fmt4(sum)}. The integral is ${fmt4(integral)}. The sum ${relation.startsWith('equals') ? 'equals the integral' : relation}.`;
  // monotone on [a, b]? then left and right sums bracket the integral
  const signs = linspace(a, b, 200).map((x) => curve.d1(x)).filter(usable);
  let bound: string | null = null;
  if (signs.length > 0 && signs.every((s) => s >= -1e-9)) {
    bound = 'f is increasing on [a, b], so the left sum is below the integral and the right sum is above it.';
  } else if (signs.length > 0 && signs.every((s) => s <= 1e-9)) {
    bound = 'f is decreasing on [a, b], so the left sum is above the integral and the right sum is below it.';
  }
  return { rectangles, sum, integral, error, text, bound };
}

/** Four decimals, or an exact fraction when the value is one. */
export function fmt4(value: number): string {
  if (!Number.isFinite(value)) return 'undefined';
  const r = rational(value, 2000, 1e-9);
  if (r && r[1] <= 2000 && Math.abs(r[0]) < 1e6) return r[1] === 1 ? String(r[0]) : `${r[0]}/${r[1]} ≈ ${Number(value.toFixed(5))}`;
  return String(Number(value.toFixed(5)));
}

// ---------- curve-sketching layers ----------

export type LayerId =
  | 'domain'
  | 'intercepts'
  | 'vertical'
  | 'end-behaviour'
  | 'holes'
  | 'slope-sign'
  | 'extrema'
  | 'curvature-sign'
  | 'inflection';

export const LAYERS: { id: LayerId; label: string }[] = [
  { id: 'domain', label: 'Domain' },
  { id: 'intercepts', label: 'Intercepts' },
  { id: 'vertical', label: 'Vertical asymptotes' },
  { id: 'end-behaviour', label: 'Horizontal and oblique asymptotes' },
  { id: 'holes', label: 'Holes' },
  { id: 'slope-sign', label: "Sign of f'" },
  { id: 'extrema', label: 'Extrema' },
  { id: 'curvature-sign', label: "Sign of f''" },
  { id: 'inflection', label: 'Inflection points' },
];

/** The sentences a layer adds to the readout, one string per sentence. */
export function layerLines(a: CurveAnalysis, layer: LayerId): string[] {
  switch (layer) {
    case 'domain':
      return [`${domainText(a.domain)}.`];
    case 'intercepts': {
      const lines: string[] = [];
      lines.push(a.yIntercept ? `y-intercept: (0, ${fmt(a.yIntercept.y)}).` : 'No y-intercept, because 0 is not in the domain.');
      lines.push(a.roots.length > 0 ? `x-intercepts: x = ${a.roots.map(fmt).join(', ')}.` : 'No x-intercepts.');
      return lines;
    }
    case 'vertical':
      return a.verticalAsymptotes.length > 0 ? a.verticalAsymptotes.map(verticalText) : ['No vertical asymptotes.'];
    case 'end-behaviour':
      return a.ends.length > 0 ? a.ends.map(endText) : ['f is not defined for large |x|, so there is no asymptote at infinity.'];
    case 'holes':
      return a.holes.length > 0
        ? a.holes.map((h) => `Hole at (${fmt(h.x)}, ${fmt(h.y)}): f is not defined at x = ${fmt(h.x)}, but f(x) → ${fmt(h.y)} on both sides.`)
        : ['No holes.'];
    case 'slope-sign':
      return [signText(a.slopeSigns, "f'")];
    case 'extrema': {
      const lines = a.extrema.map(extremumText);
      if (a.extrema.length === 0) lines.push('No local or endpoint extrema.');
      for (const p of a.flatPoints) {
        lines.push(`f'(${fmt(p.x)}) = 0, but f' does not change sign, so x = ${fmt(p.x)} is not an extremum.`);
      }
      for (const p of a.verticalTangents) {
        lines.push(`f' does not exist at x = ${fmt(p.x)} and keeps its sign, so x = ${fmt(p.x)} is not an extremum (vertical tangent).`);
      }
      if (a.absolute && a.restrict) {
        const [lo, hi] = a.restrict;
        lines.push(
          `On [${fmt(lo)}, ${fmt(hi)}]: absolute maximum f(${fmt(a.absolute.max.x)}) = ${fmt(a.absolute.max.y)}, absolute minimum f(${fmt(a.absolute.min.x)}) = ${fmt(a.absolute.min.y)}.`,
        );
      }
      return lines;
    }
    case 'curvature-sign':
      return [signText(a.curvatureSigns, "f''")];
    case 'inflection': {
      const lines = a.inflections.map((p) => `Inflection point at x = ${fmt(p.x)}, f(${fmt(p.x)}) = ${fmt(p.y)} (f'' changes sign).`);
      if (a.inflections.length === 0) lines.push('No inflection points.');
      for (const p of a.notInflections) {
        lines.push(`f''(${fmt(p.x)}) = 0, but f'' does not change sign, so x = ${fmt(p.x)} is not an inflection point.`);
      }
      return lines;
    }
  }
}

// ---------- content check ----------

const FUNCTION_KINDS = new Set(['curve-sketch', 'limit', 'newton', 'taylor', 'riemann']);

/** A message when a one-variable visual block declares a function or number the figure cannot read. */
export function visualParamProblem(kind: string, params: Record<string, unknown> | undefined): string | null {
  if (!FUNCTION_KINDS.has(kind)) return null;
  const f = params?.f;
  if (typeof f !== 'string') return `visual "${kind}" needs a string parameter f`;
  try {
    makeCurve(f);
  } catch (error) {
    return `visual "${kind}": f = "${f}" is not readable (${(error as Error).message})`;
  }
  for (const key of ['a', 'b', 'x0']) {
    const value = params?.[key];
    if (typeof value === 'string') {
      try {
        constantValue(value);
      } catch (error) {
        return `visual "${kind}": ${key} = "${value}" is not a number (${(error as Error).message})`;
      }
    }
  }
  return null;
}
