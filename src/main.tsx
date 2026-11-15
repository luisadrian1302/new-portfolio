import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { LanguageProvider } from './app/LanguageProvider';
import './styles/tokens.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/projects.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
