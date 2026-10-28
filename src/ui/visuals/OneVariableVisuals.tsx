import { useMemo, useState } from 'react';
import type { Data, Shape } from 'plotly.js';
import {
  LAYERS,
  analyseCurve,
  constantValue,
  fmt,
  infinityReading,
  layerLines,
  limitReading,
  newtonReading,
  riemannReading,
  sampleCurve,
  suggestYRange,
  taylorEval,
  taylorReading,
  type CurveAnalysis,
  type Interval,
  type LayerId,
  type RiemannRule,
} from '../../visuals/onevar.ts';
import {
  CheckControl,
  ErrorReadout,
  Figure,
  FunctionInput,
  RangeControl,
  clamp,
  choiceParam,
  fade,
  formatNumber,
  layoutXY,
  numericParam,
  sig,
  useCurveInput,
  useTheme,
  type Theme,
  type VisualParams,
} from './shared.tsx';

type Num = number | null;

function lineTrace(x: Num[], y: Num[], color: string, width = 2, dash?: 'dot' | 'dash'): Data {
  return {
    type: 'scatter',
    mode: 'lines',
    x,
    y,
    connectgaps: false,
    line: { color, width, dash },
    hoverinfo: 'skip',
  } as Data;
}

type MarkerOptions = {
  color: string;
  size?: number;
  symbol?: string;
  /** A hollow marker: the fill is the page colour and only the ring shows. */
  open?: boolean;
  text?: string[];
  positions?: string[];
};

function markerTrace(theme: Theme, x: number[], y: number[], options: MarkerOptions): Data {
  const { color, size = 10, symbol = 'circle', open = false, text, positions } = options;
  return {
    type: 'scatter',
    mode: text ? 'markers+text' : 'markers',
    x,
    y,
    text,
    textposition: positions ?? 'top center',
    textfont: { color: theme.text, size: 12 },
    cliponaxis: false,
    marker: {
      symbol,
      size,
      color: open ? theme.canvas : color,
      line: { color, width: 2 },
    },
    hoverinfo: 'skip',
  } as Data;
}

function rectShape(x0: number, x1: number, fillcolor: string, layer: 'below' | 'above' = 'below'): Partial<Shape> {
  return {
    type: 'rect',
    xref: 'x',
    yref: 'paper',
    x0,
    x1,
    y0: 0,
    y1: 1,
    fillcolor,
    line: { width: 0 },
    layer,
  };
}

function vLine(x: number, color: string, dash: 'dot' | 'dash', width = 1.5): Partial<Shape> {
  return { type: 'line', xref: 'x', yref: 'paper', x0: x, x1: x, y0: 0, y1: 1, line: { color, width, dash } };
}

// ---------- curve sketch ----------

const LAYER_IDS = LAYERS.map((layer) => layer.id);

function layersParam(params: VisualParams): LayerId[] {
  const raw = params?.layers;
  const list = Array.isArray(raw) ? raw : typeof raw === 'string' ? raw.split(',') : [];
  return list.map((item) => String(item).trim()).filter((item): item is LayerId => (LAYER_IDS as string[]).includes(item));
}

/** The parts of [lo, hi] that lie outside the domain. */
function outsideDomain(domain: Interval[], lo: number, hi: number): [number, number][] {
  const bands: [number, number][] = [];
  let cursor = lo;
  for (const interval of domain) {
    if (interval.hi < cursor) continue;
    if (interval.lo > hi) break;
    if (interval.lo > cursor) bands.push([cursor, Math.min(interval.lo, hi)]);
    cursor = Math.max(cursor, interval.hi);
  }
  if (cursor < hi) bands.push([cursor, hi]);
  return bands;
}

function curveSketchFigure(
  theme: Theme,
  f: (x: number) => number,
  analysis: CurveAnalysis,
  layers: Set<LayerId>,
  xmin: number,
  xmax: number,
) {
  const sample = sampleCurve(f, xmin, xmax, 1201);
  const yRange = suggestYRange(sample.y);
  const data: Data[] = [lineTrace(sample.x, sample.y, theme.surface, 3)];
  const shapes: Partial<Shape>[] = [];
  const visible = (x: number) => x >= xmin && x <= xmax;
  const grey = fade(theme.text, 0.13);

  if (layers.has('curvature-sign')) {
    for (const piece of analysis.curvatureSigns) {
      const lo = Math.max(piece.lo, xmin);
      const hi = Math.min(piece.hi, xmax);
      if (lo >= hi || piece.sign === 0) continue;
      shapes.push(rectShape(lo, hi, fade(piece.sign > 0 ? theme.plane : theme.surface, 0.14)));
    }
  }

  if (layers.has('domain')) {
    for (const [lo, hi] of outsideDomain(analysis.domain, xmin, xmax)) shapes.push(rectShape(lo, hi, grey));
    const closedX: number[] = [];
    const closedY: number[] = [];
    const openX: number[] = [];
    const openY: number[] = [];
    for (const interval of analysis.domain) {
      const ends: [number, boolean, number][] = [
        [interval.lo, interval.loClosed, 1e-7],
        [interval.hi, interval.hiClosed, -1e-7],
      ];
      for (const [x, closed, inward] of ends) {
        if (!Number.isFinite(x) || !visible(x)) continue;
        const direct = f(x);
        if (closed && Number.isFinite(direct)) {
          closedX.push(x);
          closedY.push(direct);
        } else if (!closed) {
          const near = f(x + inward);
          if (Number.isFinite(near) && Math.abs(near) < 1e3) {
            openX.push(x);
            openY.push(near);
          }
        }
      }
    }
    if (closedX.length > 0) data.push(markerTrace(theme, closedX, closedY, { color: theme.surface, size: 9 }));
    if (openX.length > 0) data.push(markerTrace(theme, openX, openY, { color: theme.surface, size: 9, open: true }));
  }

  if (layers.has('slope-sign')) {
    for (const piece of analysis.slopeSigns) {
      const lo = Math.max(piece.lo, xmin);
      const hi = Math.min(piece.hi, xmax);
      if (lo >= hi) continue;
      const part = sampleCurve(f, lo, hi, 241);
      const color = piece.sign > 0 ? theme.surface : piece.sign < 0 ? theme.highlight : theme.border;
      data.push(lineTrace(part.x, part.y, piece.sign === 0 ? fade(theme.text, 0.45) : color, 4));
    }
  }

  if (layers.has('vertical')) {
    for (const asymptote of analysis.verticalAsymptotes) {
      if (visible(asymptote.x)) shapes.push(vLine(asymptote.x, theme.plane, 'dash', 2));
    }
  }

  if (layers.has('end-behaviour')) {
    const seen = new Set<string>();
    for (const end of analysis.ends) {
      const asymptote = end.asymptote;
      if (!asymptote) continue;
      const key = asymptote.kind === 'horizontal' ? `h${asymptote.y}` : `o${asymptote.m}:${asymptote.b}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const [m, b] = asymptote.kind === 'horizontal' ? [0, asymptote.y] : [asymptote.m, asymptote.b];
      data.push(lineTrace([xmin, xmax], [m * xmin + b, m * xmax + b], theme.plane, 2, 'dash'));
    }
  }

  if (layers.has('intercepts')) {
    const xs: number[] = [];
    const ys: number[] = [];
    if (analysis.yIntercept && visible(analysis.yIntercept.x)) {
      xs.push(analysis.yIntercept.x);
      ys.push(analysis.yIntercept.y);
    }
    for (const root of analysis.roots) {
      if (visible(root)) {
        xs.push(root);
        ys.push(0);
      }
    }
    if (xs.length > 0) data.push(markerTrace(theme, xs, ys, { color: theme.plane, size: 10 }));
  }

  if (layers.has('holes') && analysis.holes.length > 0) {
    const holes = analysis.holes.filter((hole) => visible(hole.x));
    data.push(markerTrace(theme, holes.map((h) => h.x), holes.map((h) => h.y), { color: theme.highlight, size: 11, open: true }));
  }

  if (layers.has('extrema')) {
    const points = analysis.extrema.filter((e) => visible(e.x));
    if (points.length > 0) {
      data.push(
        markerTrace(theme, points.map((e) => e.x), points.map((e) => e.y), {
          color: theme.highlight,
          size: 11,
          text: points.map((e) => `${e.where === 'endpoint' ? 'end ' : ''}${e.kind}`),
          positions: points.map((e) => (e.kind === 'max' ? 'top center' : 'bottom center')),
        }),
      );
    }
    if (analysis.absolute) {
      const { max, min } = analysis.absolute;
      data.push(
        markerTrace(theme, [max.x, min.x], [max.y, min.y], {
          color: theme.plane,
          size: 14,
          symbol: 'star',
          text: ['abs max', 'abs min'],
          positions: ['top center', 'bottom center'],
        }),
      );
    }
  }

  if (layers.has('inflection') && analysis.inflections.length > 0) {
    const points = analysis.inflections.filter((p) => visible(p.x));
    data.push(markerTrace(theme, points.map((p) => p.x), points.map((p) => p.y), { color: theme.plane, size: 12, symbol: 'diamond' }));
  }

  if (analysis.restrict) {
    shapes.push(vLine(analysis.restrict[0], theme.text, 'dot', 1.5), vLine(analysis.restrict[1], theme.text, 'dot', 1.5));
  }

  return { data, layout: layoutXY(theme, [xmin, xmax], yRange, { shapes: shapes as Shape[] }) };
}

export function CurveSketchViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const input = useCurveInput(params, 'x^2/(x-1)');
  const [xmin, setXmin] = useState(() => Math.round(numericParam(params, 'xmin', -5, -10, -0.5) * 2) / 2);
  const [xmax, setXmax] = useState(() => Math.round(numericParam(params, 'xmax', 5, 0.5, 10) * 2) / 2);
  const [layers, setLayers] = useState<Set<LayerId>>(() => new Set(layersParam(params)));
  const [restrictOn, setRestrictOn] = useState(false);
  const [restrictStart, setRestrictStart] = useState(-1);
  const [restrictEnd, setRestrictEnd] = useState(2);

  const start = clamp(restrictStart, xmin, xmax - 0.5);
  const end = clamp(restrictEnd, start + 0.5, xmax);
  const restrictLo = restrictOn ? start : null;
  const restrictHi = restrictOn ? end : null;

  const result = useMemo(() => {
    try {
      const restrict: [number, number] | null = restrictLo !== null && restrictHi !== null ? [restrictLo, restrictHi] : null;
      return { analysis: analyseCurve(input.curve, { xmin, xmax, restrict }), problem: null };
    } catch (error) {
      return { analysis: null, problem: error instanceof Error ? error.message : 'The curve could not be analysed.' };
    }
  }, [input.curve, xmin, xmax, restrictLo, restrictHi]);

  function toggle(id: LayerId, on: boolean) {
    setLayers((current) => {
      const next = new Set(current);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  const figure = result.analysis ? curveSketchFigure(theme, input.curve.f, result.analysis, layers, xmin, xmax) : null;
  const lines = result.analysis
    ? LAYERS.filter((layer) => layers.has(layer.id)).flatMap((layer) => layerLines(result.analysis!, layer.id))
    : [];

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <FunctionInput text={input.text} onChange={input.change} />
        <RangeControl label="View from" value={xmin} min={-10} max={-0.5} step={0.5} onChange={setXmin} />
        <RangeControl label="View to" value={xmax} min={0.5} max={10} step={0.5} onChange={setXmax} />
      </div>
      <div className="visual-checks">
        {LAYERS.map((layer) => (
          <CheckControl key={layer.id} label={layer.label} checked={layers.has(layer.id)} onChange={(on) => toggle(layer.id, on)} />
        ))}
        <CheckControl label="Restrict to a closed interval" checked={restrictOn} onChange={setRestrictOn} />
      </div>
      {restrictOn ? (
        <div className="visual-controls">
          <RangeControl label="Interval start" value={start} min={xmin} max={xmax - 0.5} step={0.5} onChange={setRestrictStart} />
          <RangeControl label="Interval end" value={end} min={xmin + 0.5} max={xmax} step={0.5} onChange={setRestrictEnd} />
        </div>
      ) : null}
      <ErrorReadout message={input.error ?? result.problem} />
      {figure ? <Figure data={figure.data} layout={figure.layout} /> : null}
      {lines.length > 0 ? (
        <div className="visual-readout-list">
          {lines.map((line, index) => (
            <p key={`${index}-${line}`} className="visual-readout">
              {line}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

// ---------- limits ----------

type Approach = 'point' | 'plus-infinity' | 'minus-infinity';
const APPROACHES = ['point', 'plus-infinity', 'minus-infinity'] as const;
const APPROACH_LABEL: Record<Approach, string> = {
  point: 'A point',
  'plus-infinity': 'x → ∞',
  'minus-infinity': 'x → -∞',
};

function distanceText(distance: number): string {
  const k = Math.round(-Math.log10(distance));
  return k <= 3 ? String(Number(distance.toPrecision(3))) : `1e-${k}`;
}

function ValueTable({ label, head, rows }: { label: string; head: string[]; rows: string[][] }) {
  return (
    <div className="visual-table" tabIndex={0} role="region" aria-label={label}>
      <table>
        <thead>
          <tr>
            {head.map((cell, index) => (
              <th key={index} scope="col">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, column) => (
                <td key={column}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LimitViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const input = useCurveInput(params, 'sin(x)/x');
  const [approach, setApproach] = useState<Approach>(() => choiceParam(params, 'approach', APPROACHES, 'point'));
  const [a, setA] = useState(() => numericParam(params, 'a', 0, -5, 5));
  const [pointZoom, setPointZoom] = useState(0);
  const [farZoom, setFarZoom] = useState(2);
  const curve = input.curve;
  const isPoint = approach === 'point';
  const sign: 1 | -1 = approach === 'minus-infinity' ? -1 : 1;

  const reading = useMemo(() => (isPoint ? limitReading(curve, a) : null), [curve, a, isPoint]);
  const far = useMemo(() => (isPoint ? null : infinityReading(curve, sign)), [curve, sign, isPoint]);
  const e = isPoint ? pointZoom : farZoom;
  const half = 10 ** e;

  const view = useMemo(() => {
    const lo = isPoint ? a - half : sign > 0 ? 0 : -half;
    const hi = isPoint ? a + half : sign > 0 ? half : 0;
    const sample = sampleCurve(curve.f, lo, hi, 1201);
    return { lo, hi, sample };
  }, [curve, isPoint, a, half, sign]);

  const limitValue = isPoint
    ? reading?.twoSided.kind === 'finite'
      ? reading.twoSided.value
      : null
    : far?.limit.kind === 'finite'
      ? far.limit.value
      : null;
  const atA = isPoint ? curve.f(a) : Number.NaN;
  const definedAtA = Number.isFinite(atA) && Math.abs(atA) < 1e10;
  const focus = [limitValue, definedAtA ? atA : null].filter((v): v is number => v !== null);
  const yRange = suggestYRange(view.sample.y, focus);

  const data: Data[] = [lineTrace(view.sample.x, view.sample.y, theme.surface, 3)];
  const shapes: Partial<Shape>[] = [];
  if (isPoint) {
    shapes.push(vLine(a, theme.text, 'dot'));
    const jumps = limitValue !== null && (!definedAtA || Math.abs(atA - limitValue) > 1e-4 * (1 + Math.abs(limitValue)));
    if (limitValue !== null && jumps) data.push(markerTrace(theme, [a], [limitValue], { color: theme.surface, size: 11, open: true }));
    if (definedAtA) data.push(markerTrace(theme, [a], [atA], { color: theme.highlight, size: 10 }));
  } else if (limitValue !== null) {
    shapes.push({ type: 'line', xref: 'paper', yref: 'y', x0: 0, x1: 1, y0: limitValue, y1: limitValue, line: { color: theme.plane, width: 2, dash: 'dash' } });
  }
  const layout = layoutXY(theme, [view.lo, view.hi], yRange, {
    shapes: shapes as Shape[],
    dragmode: 'pan',
    uirevision: `${approach}|${a}|${e}|${curve.source}`,
  });

  const text = isPoint ? reading!.text : far!.text;
  const aText = fmt(a);

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <FunctionInput text={input.text} onChange={input.change} />
        <label className="field">
          <span>Approach</span>
          <select aria-label="Approach" value={approach} onChange={(event) => setApproach(event.currentTarget.value as Approach)}>
            {APPROACHES.map((id) => (
              <option key={id} value={id}>
                {APPROACH_LABEL[id]}
              </option>
            ))}
          </select>
        </label>
        {isPoint ? <RangeControl label="Point a" value={a} min={-5} max={5} step={0.1} onChange={setA} /> : null}
        {isPoint ? (
          <RangeControl
            label="Zoom"
            value={pointZoom}
            min={-4}
            max={1}
            step={0.25}
            display={`half-width ${sig(half, 3)}`}
            onChange={setPointZoom}
          />
        ) : (
          <RangeControl
            label="Zoom"
            value={farZoom}
            min={1}
            max={6}
            step={0.25}
            display={`|x| up to ${sig(half, 3)}`}
            onChange={setFarZoom}
          />
        )}
      </div>
      <ErrorReadout message={input.error} />
      <p className="visual-readout">{text}</p>
      <Figure data={data} layout={layout} />
      {reading ? (
        <ValueTable
          label="Values of f near the point"
          head={['Distance h', `f(${aText} - h)`, `f(${aText} + h)`]}
          rows={reading.rows.map((row) => [distanceText(row.distance), sig(row.left), sig(row.right)])}
        />
      ) : far ? (
        <ValueTable label="Values of f at large x" head={['x', 'f(x)']} rows={far.rows.map((row) => [sig(row.x), sig(row.value)])} />
      ) : null}
    </div>
  );
}

// ---------- Newton ----------

export function NewtonViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const input = useCurveInput(params, 'x^2-2');
  const [x0, setX0] = useState(() => numericParam(params, 'x0', 1, -4, 4));
  const [count, setCount] = useState(() => Math.round(numericParam(params, 'n', 4, 1, 8)));
  const curve = input.curve;
  const reading = useMemo(() => newtonReading(curve, x0, count), [curve, x0, count]);

  const last = reading.steps[reading.steps.length - 1];
  const finalX = last.next;
  const iterates = reading.steps.map((step) => step.x).concat(finalX === null ? [] : [finalX]);
  const finite = iterates.filter((v) => Number.isFinite(v));
  const lo = clamp(Math.min(...finite) - 1, -20, 20);
  const hi = clamp(Math.max(...finite) + 1, -20, 20);
  const sample = useMemo(() => sampleCurve(curve.f, lo, hi, 801), [curve, lo, hi]);
  const yRange = suggestYRange(sample.y, [0]);

  const data: Data[] = [lineTrace(sample.x, sample.y, theme.surface, 3)];
  const dotted = fade(theme.text, 0.55);
  for (const step of reading.steps) {
    if (!Number.isFinite(step.fx)) continue;
    data.push(lineTrace([step.x, step.x], [0, step.fx], dotted, 1.5, 'dot'));
    if (step.next !== null) data.push(lineTrace([step.x, step.next], [step.fx, 0], theme.plane, 2.5));
  }
  const labelled = reading.steps.map((step) => step.x).concat(finalX === null ? [] : [finalX]);
  data.push(
    markerTrace(theme, labelled, labelled.map(() => 0), {
      color: theme.highlight,
      size: 9,
      text: labelled.map((_, index) => `x${index}`),
      positions: labelled.map((_, index) => (index % 2 === 0 ? 'top center' : 'bottom center')),
    }),
  );

  const rows = reading.steps.map((step) => [String(step.index), sig(step.x, 10), sig(step.fx, 10)]);
  if (finalX !== null) {
    const value = curve.f(finalX);
    rows.push([String(last.index + 1), sig(finalX, 10), sig(Number.isFinite(value) ? value : null, 10)]);
  }

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <FunctionInput text={input.text} onChange={input.change} />
        <RangeControl label="Starting point x0" value={x0} min={-4} max={4} step={0.1} onChange={setX0} />
        <RangeControl label="Steps n" value={count} min={1} max={8} step={1} onChange={setCount} />
      </div>
      <ErrorReadout message={input.error} />
      <p className="visual-readout">{reading.text}</p>
      <Figure data={data} layout={layoutXY(theme, [lo, hi], yRange)} />
      <ValueTable label="Newton iterates" head={['k', 'x_k', 'f(x_k)']} rows={rows} />
    </div>
  );
}

// ---------- Taylor ----------

// The derivative expressions grow about fourfold with each order. Order 9 takes a second or two
// for ln(cos x) and order 10 runs out of memory, so the slider stops at 8.
const MAX_ORDER = 8;

export function TaylorViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const input = useCurveInput(params, 'ln(cos(x))');
  const xmin = numericParam(params, 'xmin', -1.4, -10, -0.1);
  const xmax = numericParam(params, 'xmax', 1.4, 0.1, 10);
  const [centreText, setCentreText] = useState(() => {
    const raw = params?.a;
    return typeof raw === 'string' || typeof raw === 'number' ? String(raw) : '0';
  });
  const [centre, setCentre] = useState(() => numericParam(params, 'a', 0, -10, 10));
  const [centreProblem, setCentreProblem] = useState<string | null>(null);
  const [order, setOrder] = useState(() => Math.round(numericParam(params, 'order', 4, 0, MAX_ORDER)));
  const [lower, setLower] = useState(false);
  const [probe, setProbe] = useState(() => {
    const fallback = numericParam(params, 'a', 0, -10, 10) + (xmax - numericParam(params, 'a', 0, -10, 10)) / 2;
    return clamp(Math.round(numericParam(params, 'probe', fallback, xmin, xmax) / 0.05) * 0.05, xmin, xmax);
  });
  const curve = input.curve;

  function changeCentre(value: string) {
    setCentreText(value);
    try {
      const parsed = constantValue(value);
      if (!Number.isFinite(parsed)) throw new Error('not finite');
      setCentre(clamp(parsed, -10, 10));
      setCentreProblem(null);
    } catch {
      setCentreProblem('The centre must be a number such as 0 or pi/2. The graph keeps the last valid centre.');
    }
  }

  // The probe is read below, so moving the comparison slider never rebuilds the derivatives.
  const result = useMemo(() => {
    try {
      return { reading: taylorReading(curve, centre, order), problem: null };
    } catch (error) {
      return { reading: null, problem: error instanceof Error ? error.message : 'The polynomial could not be built.' };
    }
  }, [curve, centre, order]);
  const reading = result.reading;

  const sample = useMemo(() => sampleCurve(curve.f, xmin, xmax, 801), [curve, xmin, xmax]);
  const yRange = suggestYRange(sample.y);
  const middle = (yRange[0] + yRange[1]) / 2;
  const reach = 3 * ((yRange[1] - yRange[0]) / 2);
  const clipped = (value: number) => clamp(value, middle - reach, middle + reach);

  const data: Data[] = [];
  if (reading) {
    if (lower) {
      for (let k = 0; k < order; k += 1) {
        const partial = reading.coefficients.slice(0, k + 1);
        data.push(lineTrace(sample.x, sample.x.map((x) => clipped(taylorEval(partial, centre, x))), fade(theme.highlight, 0.35), 1));
      }
    }
    data.push(lineTrace(sample.x, sample.x.map((x) => clipped(taylorEval(reading.coefficients, centre, x))), theme.highlight, 3));
  }
  data.push(lineTrace(sample.x, sample.y, theme.surface, 3));
  const atCentre = curve.f(centre);
  if (Number.isFinite(atCentre)) data.push(markerTrace(theme, [centre], [atCentre], { color: theme.plane, size: 11 }));
  const shapes: Partial<Shape>[] = reading ? [vLine(probe, theme.text, 'dot')] : [];

  const probeValue = curve.f(probe);
  const probeTaylor = reading ? taylorEval(reading.coefficients, centre, probe) : Number.NaN;
  const probeReading =
    reading && Number.isFinite(probeValue) ? { x: probe, f: probeValue, t: probeTaylor, error: probeTaylor - probeValue } : null;

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <FunctionInput text={input.text} onChange={input.change} />
        <label className="field">
          <span>Centre a</span>
          <input
            type="text"
            aria-label="Centre a"
            value={centreText}
            spellCheck={false}
            autoComplete="off"
            onChange={(event) => changeCentre(event.currentTarget.value)}
          />
        </label>
        <RangeControl label="Order n" value={order} min={0} max={MAX_ORDER} step={1} onChange={setOrder} />
        <RangeControl label="Compare at x" value={probe} min={xmin} max={xmax} step={0.05} onChange={setProbe} />
      </div>
      <div className="visual-checks">
        <CheckControl label="Show lower orders" checked={lower} onChange={setLower} />
      </div>
      {centreProblem ? <p className="visual-note">{centreProblem}</p> : null}
      <ErrorReadout message={input.error} />
      <ErrorReadout message={result.problem} />
      {reading ? <p className="visual-readout">{reading.text}</p> : null}
      {probeReading ? (
        <p className="visual-readout">
          {`At x = ${formatNumber(probeReading.x)}: f(x) = ${sig(probeReading.f, 5)}, T_${order}(x) = ${sig(probeReading.t, 5)}, so the error is ${sig(Math.abs(probeReading.error), 5)}.`}
        </p>
      ) : null}
      <Figure data={data} layout={layoutXY(theme, [xmin, xmax], yRange, { shapes: shapes as Shape[] })} />
    </div>
  );
}

// ---------- Riemann ----------

const RULES = ['left', 'right', 'midpoint'] as const;
const RULE_LABEL: Record<RiemannRule, string> = { left: 'Left', right: 'Right', midpoint: 'Midpoint' };

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

export function RiemannViewer({ params }: { params: VisualParams }) {
  const theme = useTheme();
  const input = useCurveInput(params, 'x^2');
  const [rule, setRule] = useState<RiemannRule>(() => choiceParam(params, 'rule', RULES, 'left'));
  const [a, setA] = useState(() => round1(numericParam(params, 'a', 0, -5, 4.9)));
  const [b, setB] = useState(() => Math.max(round1(numericParam(params, 'b', 1, -4.9, 5)), round1(numericParam(params, 'a', 0, -5, 4.9)) + 0.1));
  const [n, setN] = useState(() => Math.round(numericParam(params, 'n', 4, 1, 200)));
  const curve = input.curve;

  const reading = useMemo(() => riemannReading(curve, a, b, n, rule), [curve, a, b, n, rule]);
  const defined = Number.isFinite(reading.sum) && reading.rectangles.every((rectangle) => Number.isFinite(rectangle.height));

  const pad = Math.max(0.3, (b - a) * 0.15);
  const lo = a - pad;
  const hi = b + pad;
  const sample = useMemo(() => sampleCurve(curve.f, lo, hi, 801), [curve, lo, hi]);
  const heights = defined ? reading.rectangles.map((rectangle) => rectangle.height) : [];
  const yRange = suggestYRange(sample.y, [0, ...heights]);

  const data: Data[] = [];
  if (defined) {
    const x: Num[] = [];
    const y: Num[] = [];
    for (const r of reading.rectangles) {
      x.push(r.x0, r.x0, r.x1, r.x1, r.x0, null);
      y.push(0, r.height, r.height, 0, 0, null);
    }
    data.push({
      type: 'scatter',
      mode: 'lines',
      x,
      y,
      fill: 'toself',
      fillcolor: fade(theme.surface, 0.28),
      line: { color: theme.surface, width: n > 60 ? 0.5 : 1.5 },
      connectgaps: false,
      hoverinfo: 'skip',
    } as Data);
  }
  data.push(lineTrace(sample.x, sample.y, theme.highlight, 3));

  return (
    <div className="visual-block">
      <div className="visual-controls">
        <FunctionInput text={input.text} onChange={input.change} />
        <label className="field">
          <span>Rule</span>
          <select aria-label="Rule" value={rule} onChange={(event) => setRule(event.currentTarget.value as RiemannRule)}>
            {RULES.map((id) => (
              <option key={id} value={id}>
                {RULE_LABEL[id]}
              </option>
            ))}
          </select>
        </label>
        <RangeControl label="n" value={n} min={1} max={200} step={1} onChange={setN} />
        <RangeControl label="Lower limit a" value={a} min={-5} max={5} step={0.1} onChange={(value) => { setA(round1(Math.min(value, b - 0.1))); }} />
        <RangeControl label="Upper limit b" value={b} min={-5} max={5} step={0.1} onChange={(value) => { setB(round1(Math.max(value, a + 0.1))); }} />
      </div>
      <ErrorReadout message={input.error} />
      {defined ? (
        <>
          <p className="visual-readout">{reading.text}</p>
          {reading.bound ? <p className="visual-readout">{reading.bound}</p> : null}
        </>
      ) : (
        <p className="visual-readout">f is not defined at every point the rectangles use, so there is no sum to show.</p>
      )}
      <Figure data={data} layout={layoutXY(theme, [lo, hi], yRange)} />
    </div>
  );
}
