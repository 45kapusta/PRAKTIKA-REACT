import React from 'react';
import { createRoot } from 'react-dom/client'; // Используем createRoot вместо render
import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root')); // Создаем root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);