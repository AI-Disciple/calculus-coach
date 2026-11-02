import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import './ui/fonts.css';
import './ui/styles.css';
import './ui/moments.css';
import './ui/sidebar.css';
import { HOSTED, getAuthState, startAuth } from './progress/auth.ts';
import { AuthGate } from './ui/AuthGate.tsx';
import { migrateOnce } from './progress/sectionMarks.ts';
import { announceProgressSaved } from './ui/progressEvents.ts';
import { App } from './ui/App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element missing');

// The hosted site is static files, so a reload on a deep link has no server to answer it. Its routes live after the #.
const Router = HOSTED ? HashRouter : BrowserRouter;

createRoot(rootElement).render(
  <Router>
    <StrictMode>
      <AuthGate>
        <App />
      </AuthGate>
    </StrictMode>
  </Router>,
);

// Section marks that older versions kept in this browser move into the progress file once.
void startAuth()
  .then(() => (getAuthState().status === 'signed-out' ? 0 : migrateOnce()))
  .then((moved) => {
    if (moved > 0) announceProgressSaved();
  });
