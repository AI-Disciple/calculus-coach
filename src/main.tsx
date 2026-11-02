import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import './ui/fonts.css';
import './ui/styles.css';
import './ui/moments.css';
import './ui/sidebar.css';
import { getAuthState, startAuth } from './progress/auth.ts';
import { AuthGate } from './ui/AuthGate.tsx';
import { migrateOnce } from './progress/sectionMarks.ts';
import { announceProgressSaved } from './ui/progressEvents.ts';
import { App } from './ui/App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element missing');

createRoot(rootElement).render(
  <BrowserRouter>
    <StrictMode>
      <AuthGate>
        <App />
      </AuthGate>
    </StrictMode>
  </BrowserRouter>,
);

// Section marks that older versions kept in this browser move into the progress file once.
void startAuth()
  .then(() => (getAuthState().status === 'signed-out' ? 0 : migrateOnce()))
  .then((moved) => {
    if (moved > 0) announceProgressSaved();
  });
