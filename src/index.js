import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createRoot } from 'react-dom/client';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

/* createRoot(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);