import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';
import { HomePage } from './HomePage';
import userEvent from '@testing-library/user-event';

import {
  faCalendarDays,
  faCheckSquare,
  faPlusSquare,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCheckSquare, faPlusSquare, faUser, faCalendarDays);

describe('HomePage component', () => {
  it('renders', () => {
    render(<HomePage />);
    const elem = screen.getByTestId('home-page');
    expect(elem).toBeInTheDocument();
  });

  it('load data', async () => {
    render(<HomePage />);
    const input = screen.getByPlaceholderText(/enter/i);
    userEvent.type(input, 'rick');
    const btn = screen.getByTestId('search-btn');
    userEvent.click(btn);
    const elem = screen.getAllByTestId('loader')[0];
    expect(elem).toBeInTheDocument();
  });

  it('fetches data', async () => {
    render(<HomePage />);
    const input = screen.getByPlaceholderText(/enter/i);
    userEvent.type(input, 'rick');
    const btn = screen.getByTestId('search-btn');
    userEvent.click(btn);
    await waitFor(() => expect(screen.getAllByText(/rick/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
    });
  });

  it('show error', async () => {
    render(<HomePage />);
    const input = screen.getByPlaceholderText(/enter/i);
    userEvent.type(input, '55887ass7');
    const btn = screen.getByTestId('search-btn');
    userEvent.click(btn);
    await waitFor(() => expect(screen.getByText(/request failed/i)).toBeInTheDocument(), {
      timeout: 1000,
    });
  });
});
