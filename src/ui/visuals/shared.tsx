import { useEffect, useMemo, useRef, useState } from 'react';
import type { Data, Layout } from 'plotly.js';
import Plotly from 'plotly.js-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory';
import { constantValue, makeCurve, type Curve } from '../../visuals/onevar.ts';

const Plot = createPlotlyComponent(Plotly);
const PLOT_CONFIG = { displayModeBar: false, responsive: true } as const;
/** A flat figure pans on drag and resets on double-click. The wheel scrolls the page unless Ctrl is held. */
const FLAT_CONFIG = { displayModeBar: false, responsive: true, scrollZoom: false, doubleClick: 'reset' } as const;
const ZOOM_STEP = 1.5;

export type Theme = {
  canvas: string;
  text: string;
  border: string;
  surface: string;
  plane: string;
  highlight: string;
};

export type VisualParams = Record<string, unknown> | undefined;

function currentTheme(): Theme {
  const root = document.documentElement;
  const style = getComputedStyle(root);
  const dark = root.dataset.theme === 'dark';
  return {
    canvas: style.getPropertyValue('--canvas').trim(),
    text: style.getPropertyValue('--text').trim(),
    border: style.getPropertyValue('--border').trim(),
    surface: dark ? '#a3cdee' : '#1f6c9f',
    plane: dark ? '#e4d2a2' : '#956400',
    highlight: dark ? '#f0b7b4' : '#9f2f2d',
  };
}

export function useTheme(): Theme {
  const [theme, setTheme] = useState(currentTheme);
  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(currentTheme()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);
  return theme;
}

export function fade(color: string, alpha: number): string {
  if (!color.startsWith('#')) return color;
  const body = color.replace('#', '');
  const value = body.length === 3 ? body.split('').map((part) => part + part).join('') : body;
  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

/** Axes with free ranges, so the curve is never squashed to a 1:1 aspect ratio. */
export function layoutXY(
  theme: Theme,
  xRange: [number, number],
  yRange: [number, number],
  extra: Partial<Layout> = {},
): Partial<Layout> {
  const axis = { color: theme.text, gridcolor: theme.border, zerolinecolor: theme.text };
  return {
    height: 420,
    margin: { l: 48, r: 18, t: 18, b: 46 },
    paper_bgcolor: theme.canvas,
    plot_bgcolor: theme.canvas,
    font: { color: theme.text },
    showlegend: false,
    xaxis: { ...axis, title: { text: 'x' }, range: xRange },
    yaxis: { ...axis, title: { text: 'y' }, range: yRange },
    ...extra,
  };
}

/** Plotly takes dotted attribute paths in relayout, which its Layout type does not list. */
function axisRanges(x: number[], y: number[]): Partial<Layout> {
  return { 'xaxis.range': x, 'yaxis.range': y } as Partial<Layout>;
}

export function Figure({ data, layout }: { data: Data[]; layout: Partial<Layout> }) {
  const flat = !layout.scene;
  const graph = useRef<Plotly.PlotlyHTMLElement | null>(null);
  const box = useRef<HTMLDivElement>(null);
  // Plotly writes the live ranges back into the layout object it was given, so the start view is copied here.
  const home = useMemo(
    () => ({ x: layout.xaxis?.range?.slice(), y: layout.yaxis?.range?.slice() }),
    [layout],
  );

  // Ctrl and the wheel zoom about the centre. A plain wheel keeps scrolling the page.
  useEffect(() => {
    const element = box.current;
    if (!flat || !element) return;
    function onWheel(event: WheelEvent) {
      if (!event.ctrlKey) return;
      event.preventDefault();
      zoom(event.deltaY < 0 ? 1 / ZOOM_STEP : ZOOM_STEP);
    }
    element.addEventListener('wheel', onWheel, { passive: false });
    return () => element.removeEventListener('wheel', onWheel);
  }, [flat]);

  function zoom(factor: number) {
    const div = graph.current as (Plotly.PlotlyHTMLElement & { layout: Partial<Layout> }) | null;
    const x = div?.layout.xaxis?.range as [number, number] | undefined;
    const y = div?.layout.yaxis?.range as [number, number] | undefined;
    if (!div || !x || !y) return;
    const scaled = ([lo, hi]: [number, number]) => {
      const middle = (lo + hi) / 2;
      const half = ((hi - lo) / 2) * factor;
      return [middle - half, middle + half];
    };
    void Plotly.relayout(div, axisRanges(scaled(x), scaled(y)));
  }

  function reset() {
    if (graph.current && home.x && home.y) void Plotly.relayout(graph.current, axisRanges(home.x as number[], home.y as number[]));
  }

  return (
    <div className="visual-figure" ref={box}>
      <Plot
        data={data}
        layout={flat ? { dragmode: 'pan', ...layout } : layout}
        config={flat ? FLAT_CONFIG : PLOT_CONFIG}
        useResizeHandler
        style={{ width: '100%', height: '100%' }}
        onInitialized={(_figure, div) => {
          graph.current = div as Plotly.PlotlyHTMLElement;
        }}
        onUpdate={(_figure, div) => {
          graph.current = div as Plotly.PlotlyHTMLElement;
        }}
        onDoubleClick={flat ? reset : undefined}
      />
      {flat ? (
        <div className="figure-zoom" role="group" aria-label="Zoom">
          <button type="button" aria-label="Zoom in" title="Zoom in (Ctrl + wheel)" onClick={() => zoom(1 / ZOOM_STEP)}>
            +
          </button>
          <button type="button" aria-label="Zoom out" title="Zoom out (Ctrl + wheel)" onClick={() => zoom(ZOOM_STEP)}>
            −
          </button>
          <button type="button" aria-label="Reset view" title="Reset view (double-click)" onClick={reset}>
            ⟲
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function formatNumber(value: number): string {
  if (Math.abs(value) < 1e-8) return '0';
  return Number(value.toFixed(3)).toString();
}

/** Significant digits, with exponent form for very large or small values and a dash for missing ones. */
export function sig(value: number | null, digits = 6): string {
  if (value === null || !Number.isFinite(value)) return '–';
  if (Math.abs(value) < 1e-300) return '0';
  const text = Number(value.toPrecision(digits)).toString();
  const magnitude = Math.abs(value);
  if (magnitude >= 1e10 || magnitude < 1e-5) return Number(value.toPrecision(digits)).toExponential();
  return text;
}

export function RangeControl({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display?: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="field">
      <span>
        {label}: {display ?? formatNumber(value)}
      </span>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.currentTarget.value))}
      />
    </label>
  );
}

export function CheckControl({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="check">
      <input
        type="checkbox"
        aria-label={label}
        checked={checked}
        onChange={(event) => onChange(event.currentTarget.checked)}
      />
      <span>{label}</span>
    </label>
  );
}

export function numericParam(params: VisualParams, key: string, fallback: number, min: number, max: number): number {
  const raw = params?.[key];
  let value = Number.NaN;
  if (typeof raw === 'number') value = raw;
  else if (typeof raw === 'string' && raw.trim() !== '') {
    value = Number(raw);
    if (!Number.isFinite(value)) {
      try {
        value = constantValue(raw);
      } catch {
        value = Number.NaN;
      }
    }
  }
  if (!Number.isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

export function choiceParam<T extends string>(params: VisualParams, key: string, allowed: readonly T[], fallback: T): T {
  const raw = params?.[key];
  return typeof raw === 'string' && allowed.includes(raw as T) ? (raw as T) : fallback;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

type CurveState = { curve: Curve; error: string | null };

function parseCurve(source: string, fallback: Curve | null): CurveState {
  try {
    return { curve: makeCurve(source), error: null };
  } catch (error) {
    const message = error instanceof Error && error.message ? error.message : 'The function could not be read.';
    return { curve: fallback ?? makeCurve('x'), error: message };
  }
}

/** The typed function, the last one that parsed, and the message for the current input if it did not. */
export function useCurveInput(params: VisualParams, fallbackSource: string) {
  const [text, setText] = useState(() => {
    const raw = params?.f;
    return typeof raw === 'string' && raw.trim() !== '' ? raw : fallbackSource;
  });
  const [state, setState] = useState<CurveState>(() => parseCurve(text, parseCurve(fallbackSource, null).curve));

  function change(next: string) {
    setText(next);
    setState((current) => parseCurve(next, current.curve));
  }

  return { text, curve: state.curve, error: state.error, change };
}

export function FunctionInput({ text, onChange }: { text: string; onChange: (value: string) => void }) {
  return (
    <label className="field">
      <span>f(x)</span>
      <input
        type="text"
        aria-label="Function"
        value={text}
        spellCheck={false}
        autoComplete="off"
        onChange={(event) => onChange(event.currentTarget.value)}
      />
    </label>
  );
}

export function ErrorReadout({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="alert" className="visual-readout">
      {message}
    </p>
  );
}
