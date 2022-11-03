import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

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
    const elem = screen.getByTestId<HTMLElement>('header');
    expect(elem).toBeInTheDocument();
  });

  test('changes active link colour', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    );
    const elem = screen.getByTestId('404');
    fireEvent.click(elem);
    expect(elem).toHaveStyle({ color: 'white' });
  });
});
