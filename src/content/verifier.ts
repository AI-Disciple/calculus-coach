import { spawn } from 'node:child_process';
import path from 'node:path';

export type VerificationRequest = { id: string; checks: { expr: string; expected: string }[] };
export type VerificationResult = { id: string; check: number; ok: boolean; message: string };

const SCRIPT = path.resolve(import.meta.dirname, '../../verifier/verify.py');
const TIMEOUT_MS = 900_000;

/** PYTHON, when set, is the path of one executable and may contain spaces. */
function pythonCommand(): string[] {
  if (process.env.PYTHON) return [process.env.PYTHON];
  return process.platform === 'win32' ? ['py', '-3.13'] : ['python3.13'];
}

export function runVerifier(requests: VerificationRequest[]): Promise<VerificationResult[]> {
  if (requests.length === 0) return Promise.resolve([]);
  const [command, ...args] = pythonCommand();
  return new Promise((resolve, reject) => {
    const child = spawn(command, [...args, SCRIPT], {
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: TIMEOUT_MS,
      env: { ...process.env, PYTHONIOENCODING: 'utf-8' },
    });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => (stdout += chunk));
    child.stderr.on('data', (chunk) => (stderr += chunk));
    child.on('error', reject);
    child.on('close', (code) => {
      if (code !== 0) return reject(new Error(`SymPy verifier exited with ${code}: ${stderr.trim()}`));
      try {
        resolve(JSON.parse(stdout) as VerificationResult[]);
      } catch {
        reject(new Error(`SymPy verifier returned unreadable output: ${stdout.slice(0, 200)}`));
      }
    });
    child.stdin.end(JSON.stringify(requests));
  });
}
