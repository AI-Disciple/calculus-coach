import { useEffect, useRef, useState, useSyncExternalStore, type FormEvent, type ReactNode } from 'react';
import { getAuthState, signIn, signUp, startAuth, subscribeAuth } from '../progress/auth.ts';

/**
 * The app always shows. When accounts are on and nobody is signed in, a dialog offers sign-in once and a pill
 * brings it back. Without an account nothing can be saved.
 */
export function AuthGate({ children }: { children: ReactNode }) {
  const auth = useSyncExternalStore(subscribeAuth, getAuthState);
  const [open, setOpen] = useState(false);
  const asked = useRef(false);
  const lastStatus = useRef(auth.status);

  useEffect(() => {
    void startAuth();
  }, []);

  useEffect(() => {
    if (auth.status === 'signed-out' && !asked.current) {
      asked.current = true;
      setOpen(true);
    }
    // Pages loaded before a sign-in or sign-out hold the other account's progress, so they load again.
    const before = lastStatus.current;
    lastStatus.current = auth.status;
    const switched =
      (before === 'signed-out' && auth.status === 'signed-in') || (before === 'signed-in' && auth.status === 'signed-out');
    if (switched) window.location.reload();
  }, [auth.status]);

  // Until the saved sign-in is restored, the first requests would go out without it and show an empty record.
  if (auth.status === 'loading') return null;

  return (
    <>
      {children}
      {auth.status === 'signed-out' ? (
        <>
          <button type="button" className="auth-pill" onClick={() => setOpen(true)}>
            Sign in to save progress
          </button>
          {open ? <SignInDialog onClose={() => setOpen(false)} /> : null}
        </>
      ) : null}
    </>
  );
}

function SignInDialog({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [creating, setCreating] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage(null);
    if (creating) {
      const result = await signUp(email, password);
      if (result.error) setMessage(result.error);
      else if (result.confirmEmail) setMessage('Check your email and follow the link, then sign in.');
    } else {
      const error = await signIn(email, password);
      if (error) setMessage(error);
    }
    setBusy(false);
  }

  return (
    <dialog
      ref={ref}
      className="auth-dialog"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) ref.current?.close();
      }}
    >
      <button type="button" className="auth-close" aria-label="Close" onClick={() => ref.current?.close()}>
        ×
      </button>
      <h2>{creating ? 'Create an account' : 'Sign in'}</h2>
      <p className="auth-lead">Sign in to save your progress. You can also look around without an account.</p>
      <form onSubmit={submit} className="auth-form">
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={creating ? 'new-password' : 'current-password'}
            minLength={6}
            required
          />
        </label>
        {message ? (
          <p className="form-error" role="alert">
            {message}
          </p>
        ) : null}
        <button type="submit" className="button button-main" disabled={busy}>
          {creating ? 'Create account' : 'Sign in'}
        </button>
        <button
          type="button"
          className="button"
          onClick={() => {
            setCreating(!creating);
            setMessage(null);
          }}
        >
          {creating ? 'I already have an account' : 'Create an account'}
        </button>
      </form>
    </dialog>
  );
}
