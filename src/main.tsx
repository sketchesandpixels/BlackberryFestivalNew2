// Workaround for "Cannot set property fetch of #<Window> which has only a getter"
// This must run before any other imports that might attempt to overwrite fetch
if (typeof window !== 'undefined') {
  try {
    const originalFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      get: () => originalFetch,
      set: () => {
        console.warn('Attempted to overwrite window.fetch, but it is read-only in this environment.');
      },
      configurable: true,
      enumerable: true
    });
  } catch (e) {
    // If we can't redefine it, it's likely already locked or we don't have permission
    // but at least we tried to intercept the setter.
  }
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
