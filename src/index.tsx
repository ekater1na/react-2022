import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutUs } from './pages/AboutUs';
import Location from './components/Location/Location';
import { Header } from './components/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter basename="/ekater1na-REACT2022Q3">
    <Location />
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
