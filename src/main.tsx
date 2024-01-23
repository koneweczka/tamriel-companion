import React from 'react';
import ReactDOM from 'react-dom/client';
import { Client } from 'fauna';
import { MantineProvider } from '@mantine/core';
import App from './App.tsx';
import './index.css';

const client = new Client({
  // TODO: Move it later to env variables:
  secret: 'mySercret',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
