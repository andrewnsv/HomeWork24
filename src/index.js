import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import axios from 'axios';

axios.defaults.baseURL = 'https://642b0b34b11efeb759a94d2d.mockapi.io/';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
