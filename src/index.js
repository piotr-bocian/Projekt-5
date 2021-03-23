import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/view/App';
import reportWebVitals from './reportWebVitals';
import './styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
