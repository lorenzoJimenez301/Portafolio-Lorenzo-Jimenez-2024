import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import fondoPiel from '../src/Images/FondoPiel.png';
import fondoGris from '../src/Images/FondoGris.png';
import samuraiNegro from '../src/Images/Samurai_Black.png';
import samuraiBlanco from '../src/Images/Samurai_White.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
