import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./i18n";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="google_translate_element">
    <App />
    </div>
  </React.StrictMode>
);


