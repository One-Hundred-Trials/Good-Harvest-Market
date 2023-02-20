import React from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <RecoilRoot>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </RecoilRoot>
);
