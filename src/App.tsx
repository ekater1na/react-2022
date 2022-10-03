import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import Location from './components/Location/Location';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <div>
      <Location />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
