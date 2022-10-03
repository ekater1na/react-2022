import React from 'react';
import { render, screen } from '@testing-library/react';

import { Header } from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Header component', () => {
  test('renders header', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    );
    const images = screen.getByRole<HTMLInputElement>(/nav/i);
    expect(images).toBeInTheDocument();
  });
});
