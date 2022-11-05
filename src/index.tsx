import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {
  faCheckSquare,
  faCalendarDays,
  faPercent,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import GlobalState from 'context/GlobalState';
import { Provider } from 'react-redux';
import { store } from './redux/store';
library.add(faCheckSquare, faUser, faCalendarDays, faPercent);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalState>
      <BrowserRouter basename="/ekater1na-REACT2022Q3">
        <App />
      </BrowserRouter>
    </GlobalState>
  </Provider>
);
