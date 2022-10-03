import React from 'react';
import { render, screen } from '@testing-library/react';

import Location from './Location';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

describe('Location component', () => {
  test('renders location', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Location />}></Route>
        </Routes>
      </BrowserRouter>
    );
    const images = screen.getByText<HTMLInputElement>(/Location/i);
    expect(images).toBeInTheDocument();
  });
});
