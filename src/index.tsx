import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import logo_green from './Asset/logo_green.svg';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
  <header>
    <p>Leaf'UP</p>
    <img src={logo_green}/>
  </header>
    <App />
  </React.StrictMode>
);

reportWebVitals();
