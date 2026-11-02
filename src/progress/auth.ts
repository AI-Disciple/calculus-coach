import { createClient, type Session, type SupabaseClient } from '@supabase/supabase-js';

type AuthConfig = { mode: 'file' } | { mode: 'supabase'; url: string; anonKey: string };

export type AuthState =
  | { status: 'loading' }
  | { status: 'none' }
  | { status: 'signed-out' }
  | { status: 'signed-in'; email: string };

/** True in the build for the hosted site, which has no server and talks to Supabase from the browser. */
export const HOSTED = Boolean(import.meta.env.VITE_SUPABASE_URL);

let client: SupabaseClient | null = null;
let session: Session | null = null;
let state: AuthState = { status: 'loading' };
const listeners = new Set<() => void>();
let started: Promise<void> | undefined;

function set(next: AuthState) {
  state = next;
  listeners.forEach((listener) => listener());
}

function setSession(next: Session | null) {
  session = next;
  set(next ? { status: 'signed-in', email: next.user.email ?? '' } : { status: 'signed-out' });
}

/** Asks the server whether accounts are on, and if so restores the saved sign-in. Safe to call more than once. */
export function startAuth(): Promise<void> {
  started ??= (async () => {
    let config: AuthConfig = { mode: 'file' };
    if (HOSTED) {
      config = { mode: 'supabase', url: import.meta.env.VITE_SUPABASE_URL, anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY };
    } else {
      try {
        const response = await fetch('/api/auth-config', { cache: 'no-store' });
        if (response.ok) config = (await response.json()) as AuthConfig;
      } catch {
        // The server did not answer; the app falls back to the local file mode and shows its usual errors.
      }
    }
    if (config.mode !== 'supabase') return set({ status: 'none' });
    client = createClient(config.url, config.anonKey);
    client.auth.onAuthStateChange((_event, next) => setSession(next));
    const { data } = await client.auth.getSession();
    setSession(data.session);
  })();
  return started;
}

export function supabaseClient(): SupabaseClient | null {
  return client;
}

export function getAuthState(): AuthState {
  return state;
}

export function subscribeAuth(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** The header every progress request carries when accounts are on. */
export function authHeaders(): Record<string, string> {
  return session ? { authorization: `Bearer ${session.access_token}` } : {};
}

export async function signIn(email: string, password: string): Promise<string | null> {
  if (!client) return 'Accounts are not set up.';
  const { error } = await client.auth.signInWithPassword({ email, password });
  return error ? error.message : null;
}

/** Returns an error, or a notice when the project asks the learner to confirm the email first. */
export async function signUp(email: string, password: string): Promise<{ error?: string; confirmEmail?: boolean }> {
  if (!client) return { error: 'Accounts are not set up.' };
  const { data, error } = await client.auth.signUp({ email, password });
  if (error) return { error: error.message };
  return data.session ? {} : { confirmEmail: true };
}

export async function signOut(): Promise<void> {
  await client?.auth.signOut();
}
