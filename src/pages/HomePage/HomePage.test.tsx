import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { HomePage } from './HomePage';
import userEvent from '@testing-library/user-event';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('HomePage component', () => {
  it('renders', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const elem = screen.getByTestId('home-page');
    expect(elem).toBeInTheDocument();
  });

  it('load data', async () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/enter/i);
    userEvent.type(input, 'rick');
    const btn = screen.getByTestId('search-btn');
    userEvent.click(btn);
    const elem = screen.getAllByTestId('loader')[0];
    expect(elem).toBeInTheDocument();
  });

  it('fetches data', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
    const input = screen.getByPlaceholderText(/enter/i);
    userEvent.type(input, '');
    const btn = screen.getByTestId('search-btn');
    userEvent.click(btn);
    await waitFor(() => expect(screen.getAllByRole('img')[0]).toBeInTheDocument(), {
      timeout: 1000,
    });
  });
});
