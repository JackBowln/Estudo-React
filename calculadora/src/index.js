import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Calculator from './Main/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <h1>Calculadora</h1>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
