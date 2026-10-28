/**
 * A small, safe expression language for the one-variable figures: x, numbers, pi, e,
 * + - * / ^, sin cos tan exp ln sqrt cbrt abs atan sinh cosh tanh. No eval.
 * Implicit multiplication is accepted (2x, 3(x+1), (x+1)(x-1)).
 * Powers are real: (-8)^(1/3) = -2 and x^(2/3) is defined for negative x.
 */

export type FnName = 'sin' | 'cos' | 'tan' | 'exp' | 'ln' | 'sqrt' | 'cbrt' | 'abs' | 'atan' | 'sinh' | 'cosh' | 'tanh' | 'sgn';

export type Node =
  | { t: 'num'; v: number }
  | { t: 'x' }
  | { t: 'neg'; a: Node }
  | { t: 'add' | 'sub' | 'mul' | 'div' | 'pow'; a: Node; b: Node }
  | { t: 'fn'; name: FnName; a: Node };

const FUNCTIONS: Record<string, FnName> = {
  sin: 'sin',
  cos: 'cos',
  tan: 'tan',
  exp: 'exp',
  ln: 'ln',
  log: 'ln',
  sqrt: 'sqrt',
  cbrt: 'cbrt',
  abs: 'abs',
  atan: 'atan',
  arctan: 'atan',
  sinh: 'sinh',
  cosh: 'cosh',
  tanh: 'tanh',
};

/** Below this magnitude a denominator, a log argument or a cosine counts as zero. */
const TINY = 1e-12;

export class ExpressionError extends Error {}

type Token = { k: 'num'; v: number } | { k: 'id'; v: string } | { k: 'op'; v: string };

function tokenize(source: string): Token[] {
  const text = source
    .replace(/−/g, '-')
    .replace(/[·×]/g, '*')
    .replace(/\*\*/g, '^');
  const tokens: Token[] = [];
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (/\s/.test(ch)) {
      i += 1;
    } else if (/[0-9.]/.test(ch)) {
      const match = /^(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/.exec(text.slice(i));
      if (!match) throw new ExpressionError(`Unreadable number at "${text.slice(i, i + 6)}".`);
      tokens.push({ k: 'num', v: Number(match[0]) });
      i += match[0].length;
    } else if (/[a-zA-Z]/.test(ch)) {
      const match = /^[a-zA-Z]+/.exec(text.slice(i))!;
      tokens.push({ k: 'id', v: match[0].toLowerCase() });
      i += match[0].length;
    } else if ('+-*/^()'.includes(ch)) {
      tokens.push({ k: 'op', v: ch });
      i += 1;
    } else {
      throw new ExpressionError(`Unexpected character "${ch}".`);
    }
  }
  return tokens;
}

export const num = (v: number): Node => ({ t: 'num', v });
const X: Node = { t: 'x' };
const isNum = (n: Node): n is { t: 'num'; v: number } => n.t === 'num';
const isVal = (n: Node, v: number): boolean => n.t === 'num' && n.v === v;

export function add(a: Node, b: Node): Node {
  if (isNum(a) && isNum(b)) return num(a.v + b.v);
  if (isVal(a, 0)) return b;
  if (isVal(b, 0)) return a;
  return { t: 'add', a, b };
}
export function sub(a: Node, b: Node): Node {
  if (isNum(a) && isNum(b)) return num(a.v - b.v);
  if (isVal(b, 0)) return a;
  if (isVal(a, 0)) return neg(b);
  return { t: 'sub', a, b };
}
export function mul(a: Node, b: Node): Node {
  if (isNum(a) && isNum(b)) return num(a.v * b.v);
  if (isVal(a, 0) || isVal(b, 0)) return num(0);
  if (isVal(a, 1)) return b;
  if (isVal(b, 1)) return a;
  return { t: 'mul', a, b };
}
export function div(a: Node, b: Node): Node {
  if (isVal(a, 0)) return num(0);
  if (isVal(b, 1)) return a;
  if (isNum(a) && isNum(b) && b.v !== 0) return num(a.v / b.v);
  return { t: 'div', a, b };
}
export function pow(a: Node, b: Node): Node {
  if (isVal(b, 1)) return a;
  if (isVal(b, 0)) return num(1);
  return { t: 'pow', a, b };
}
export function neg(a: Node): Node {
  if (isNum(a)) return num(-a.v);
  if (a.t === 'neg') return a.a;
  return { t: 'neg', a };
}
const fn = (name: FnName, a: Node): Node => ({ t: 'fn', name, a });

export function parse(source: string): Node {
  if (source.trim() === '') throw new ExpressionError('The function is empty.');
  const tokens = tokenize(source);
  let pos = 0;
  const peek = () => tokens[pos];
  const isOp = (v: string) => {
    const t = peek();
    return t !== undefined && t.k === 'op' && t.v === v;
  };

  function startsPrimary(): boolean {
    const t = peek();
    return t !== undefined && (t.k === 'num' || t.k === 'id' || (t.k === 'op' && t.v === '('));
  }

  function expression(): Node {
    let left = term();
    while (isOp('+') || isOp('-')) {
      const op = tokens[pos++].v;
      const right = term();
      left = op === '+' ? add(left, right) : sub(left, right);
    }
    return left;
  }

  function term(): Node {
    let left = unary();
    for (;;) {
      if (isOp('*') || isOp('/')) {
        const op = tokens[pos++].v;
        const right = unary();
        left = op === '*' ? mul(left, right) : div(left, right);
      } else if (startsPrimary()) {
        left = mul(left, power());
      } else {
        return left;
      }
    }
  }

  function unary(): Node {
    if (isOp('-')) {
      pos += 1;
      return neg(unary());
    }
    if (isOp('+')) {
      pos += 1;
      return unary();
    }
    return power();
  }

  function power(): Node {
    const base = primary();
    if (isOp('^')) {
      pos += 1;
      return pow(base, unary());
    }
    return base;
  }

  function primary(): Node {
    const t = tokens[pos++];
    if (!t) throw new ExpressionError('The expression ends too soon.');
    if (t.k === 'num') return num(t.v);
    if (t.k === 'op' && t.v === '(') {
      const inner = expression();
      if (!isOp(')')) throw new ExpressionError('A bracket is not closed.');
      pos += 1;
      return inner;
    }
    if (t.k === 'id') {
      if (t.v === 'x') return X;
      if (t.v === 'pi') return num(Math.PI);
      if (t.v === 'e') return num(Math.E);
      const name = FUNCTIONS[t.v];
      if (name) {
        if (!isOp('(')) throw new ExpressionError(`${t.v} needs brackets, as in ${t.v}(x).`);
        pos += 1;
        const inner = expression();
        if (!isOp(')')) throw new ExpressionError('A bracket is not closed.');
        pos += 1;
        return fn(name, inner);
      }
      throw new ExpressionError(`Unknown name "${t.v}". Use x, pi, e or a function such as sin(x).`);
    }
    throw new ExpressionError(`Unexpected "${t.v}".`);
  }

  const result = expression();
  if (pos < tokens.length) throw new ExpressionError(`Unexpected "${tokens[pos].v}".`);
  return result;
}

export function hasX(n: Node): boolean {
  switch (n.t) {
    case 'x':
      return true;
    case 'num':
      return false;
    case 'neg':
    case 'fn':
      return hasX(n.a);
    default:
      return hasX(n.a) || hasX(n.b);
  }
}

/** p/q with a small denominator, or null. */
export function rational(value: number, maxDenominator = 99, tolerance = 1e-9): [number, number] | null {
  if (!Number.isFinite(value)) return null;
  const sign = value < 0 ? -1 : 1;
  const target = Math.abs(value);
  let [h0, h1, k0, k1] = [0, 1, 1, 0];
  let rest = target;
  for (let step = 0; step < 24; step += 1) {
    const whole = Math.floor(rest);
    [h0, h1] = [h1, whole * h1 + h0];
    [k0, k1] = [k1, whole * k1 + k0];
    if (k1 > maxDenominator) return null;
    if (Math.abs(target - h1 / k1) <= tolerance * Math.max(1, target)) return [sign * h1, k1];
    const fraction = rest - whole;
    if (fraction < 1e-14) break;
    rest = 1 / fraction;
  }
  return null;
}

/** Real power: odd roots of negative numbers are allowed, even roots are not. */
export function realPow(a: number, b: number): number {
  if (a > 0 || a === 0) return Math.pow(a, b);
  if (Number.isInteger(b)) return Math.pow(a, b);
  const r = rational(b, 99, 1e-12);
  if (!r || r[1] % 2 === 0) return Number.NaN;
  const magnitude = Math.pow(-a, b);
  return Math.abs(r[0]) % 2 === 0 ? magnitude : -magnitude;
}

export type Fn = (x: number) => number;

export function compile(n: Node): Fn {
  switch (n.t) {
    case 'num': {
      const v = n.v;
      return () => v;
    }
    case 'x':
      return (x) => x;
    case 'neg': {
      const a = compile(n.a);
      return (x) => -a(x);
    }
    case 'add': {
      const [a, b] = [compile(n.a), compile(n.b)];
      return (x) => a(x) + b(x);
    }
    case 'sub': {
      const [a, b] = [compile(n.a), compile(n.b)];
      return (x) => a(x) - b(x);
    }
    case 'mul': {
      const [a, b] = [compile(n.a), compile(n.b)];
      return (x) => a(x) * b(x);
    }
    case 'div': {
      const [a, b] = [compile(n.a), compile(n.b)];
      return (x) => {
        const d = b(x);
        return Math.abs(d) < TINY ? Number.NaN : a(x) / d;
      };
    }
    case 'pow': {
      const [a, b] = [compile(n.a), compile(n.b)];
      return (x) => {
        const base = a(x);
        const exponent = b(x);
        if (Math.abs(base) < TINY && exponent < 0) return Number.NaN;
        return realPow(base, exponent);
      };
    }
    case 'fn': {
      const a = compile(n.a);
      switch (n.name) {
        case 'sin':
          return (x) => Math.sin(a(x));
        case 'cos':
          return (x) => Math.cos(a(x));
        case 'tan':
          return (x) => {
            const u = a(x);
            return Math.abs(Math.cos(u)) < TINY ? Number.NaN : Math.tan(u);
          };
        case 'exp':
          return (x) => Math.exp(a(x));
        case 'ln':
          return (x) => {
            const u = a(x);
            return u <= TINY ? Number.NaN : Math.log(u);
          };
        case 'sqrt':
          return (x) => {
            const u = a(x);
            return u < -TINY ? Number.NaN : Math.sqrt(Math.max(u, 0));
          };
        case 'cbrt':
          return (x) => Math.cbrt(a(x));
        case 'abs':
          return (x) => Math.abs(a(x));
        case 'atan':
          return (x) => Math.atan(a(x));
        case 'sinh':
          return (x) => Math.sinh(a(x));
        case 'cosh':
          return (x) => Math.cosh(a(x));
        case 'tanh':
          return (x) => Math.tanh(a(x));
        case 'sgn':
          return (x) => {
            const u = a(x);
            return u === 0 ? Number.NaN : Math.sign(u);
          };
      }
    }
  }
}

/** Symbolic derivative. Constants are folded so higher derivatives stay small. */
export function diff(n: Node): Node {
  switch (n.t) {
    case 'num':
      return num(0);
    case 'x':
      return num(1);
    case 'neg':
      return neg(diff(n.a));
    case 'add':
      return add(diff(n.a), diff(n.b));
    case 'sub':
      return sub(diff(n.a), diff(n.b));
    case 'mul':
      return add(mul(diff(n.a), n.b), mul(n.a, diff(n.b)));
    case 'div':
      return div(sub(mul(diff(n.a), n.b), mul(n.a, diff(n.b))), pow(n.b, num(2)));
    case 'pow': {
      const [a, b] = [n.a, n.b];
      if (!hasX(b)) {
        const exponent = compile(b)(0);
        return mul(mul(num(exponent), pow(a, num(exponent - 1))), diff(a));
      }
      if (!hasX(a)) return mul(mul(n, fn('ln', a)), diff(b));
      return mul(n, add(mul(diff(b), fn('ln', a)), div(mul(b, diff(a)), a)));
    }
    case 'fn': {
      const a = n.a;
      const da = diff(a);
      switch (n.name) {
        case 'sin':
          return mul(fn('cos', a), da);
        case 'cos':
          return neg(mul(fn('sin', a), da));
        case 'tan':
          return div(da, pow(fn('cos', a), num(2)));
        case 'exp':
          return mul(n, da);
        case 'ln':
          return div(da, a);
        case 'sqrt':
          return div(da, mul(num(2), n));
        case 'cbrt':
          return mul(mul(num(1 / 3), pow(a, num(-2 / 3))), da);
        case 'abs':
          return mul(fn('sgn', a), da);
        case 'sgn':
          return num(0);
        case 'atan':
          return div(da, add(num(1), pow(a, num(2))));
        case 'sinh':
          return mul(fn('cosh', a), da);
        case 'cosh':
          return mul(fn('sinh', a), da);
        case 'tanh':
          return div(da, pow(fn('cosh', a), num(2)));
      }
    }
  }
}

/** Sub-expressions whose zeros can bound the domain or break the derivative. */
export function constraints(n: Node, out: Node[] = []): Node[] {
  switch (n.t) {
    case 'num':
    case 'x':
      return out;
    case 'neg':
      return constraints(n.a, out);
    case 'div':
      out.push(n.b);
      constraints(n.a, out);
      return constraints(n.b, out);
    case 'pow': {
      if (hasX(n.b)) {
        out.push(n.a);
      } else {
        const exponent = compile(n.b)(0);
        if (!Number.isInteger(exponent) || exponent < 0) out.push(n.a);
      }
      constraints(n.a, out);
      return constraints(n.b, out);
    }
    case 'fn':
      if (n.name === 'sqrt' || n.name === 'ln' || n.name === 'sgn') out.push(n.a);
      if (n.name === 'tan') out.push(fn('cos', n.a));
      return constraints(n.a, out);
    default:
      constraints(n.a, out);
      return constraints(n.b, out);
  }
}

/** A parsed function with its first two derivatives ready to evaluate. */
export type Curve = {
  source: string;
  ast: Node;
  f: Fn;
  d1: Fn;
  d2: Fn;
  d1ast: Node;
  d2ast: Node;
};

export function makeCurve(source: string): Curve {
  const ast = parse(source);
  const d1ast = diff(ast);
  const d2ast = diff(d1ast);
  return { source, ast, f: compile(ast), d1: compile(d1ast), d2: compile(d2ast), d1ast, d2ast };
}

/** The value of an expression without x, such as "pi/2" or "1.5". */
export function constantValue(source: string): number {
  const ast = parse(source);
  if (hasX(ast)) throw new ExpressionError('Expected a number, not a function of x.');
  return compile(ast)(0);
}
