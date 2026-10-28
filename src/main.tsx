import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import './ui/fonts.css';
import './ui/styles.css';
import './ui/moments.css';
import './ui/sidebar.css';
import { migrateOnce } from './progress/sectionMarks.ts';
import { announceProgressSaved } from './ui/progressEvents.ts';
import { App } from './ui/App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element missing');

createRoot(rootElement).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
);

// Section marks that older versions kept in this browser move into the progress file once.
void migrateOnce().then((moved) => {
  if (moved > 0) announceProgressSaved();
});
