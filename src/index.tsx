import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { faCheckSquare, faPercent } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Provider } from 'react-redux';
import { store } from './redux/store';
library.add(faCheckSquare, faPercent);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="/ekater1na-REACT2022Q3">
      <App />
    </BrowserRouter>
  </Provider>
);
