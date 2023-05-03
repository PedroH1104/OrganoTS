import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);         // a "!" garante que não vai retornar um elemento nulo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);