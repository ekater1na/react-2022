import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  faB,
  faCheckSquare,
  faCalendarDays,
  faDatabase,
  faPlusSquare,
  faPercent,
  faS,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(
  faB,
  faS,
  faPlusSquare,
  faCheckSquare,
  faPercent,
  faCalendarDays,
  faDatabase,
  faWindowMaximize
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
