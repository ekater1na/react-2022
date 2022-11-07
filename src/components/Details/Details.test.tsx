import React from 'react';
import { render, screen } from '@testing-library/react';
import { Details } from './Details';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
library.add(faCheckSquare);

describe('Details component', () => {
  test('renders details', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Details />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    const elem = screen.getByTestId<HTMLInputElement>('details');
    expect(elem).toBeInTheDocument();
  });

  test('renders correct icons', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Details />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    const ispublic = screen.getByTestId<HTMLInputElement>('ispublic');
    expect(ispublic).toHaveClass('text-gray-400/30');

    const isfriend = screen.getByTestId<HTMLInputElement>('isfriend');
    expect(isfriend).toHaveClass('text-gray-400/30 px-3');

    const isfamily = screen.getByTestId<HTMLInputElement>('isfamily');
    expect(isfamily).toHaveClass('text-gray-400/30');
  });
});
