import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App.tsx';
import { createCollection, createAntiquities } from './utils/fauna.ts';
import './index.css';

// Creating collection:
// createCollection('Antiquities');

//Creating antiquities in collection:
// createAntiquities();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
