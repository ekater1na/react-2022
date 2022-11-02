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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
library.add(faCheckSquare, faPlusSquare, faUser, faCalendarDays);

describe('HomePage component', () => {
  it('renders', () => {
    render(<HomePage />);
    const elem = screen.getByTestId('home-page');
    expect(elem).toBeInTheDocument();
  });

  // it('load data', async () => {
  //   render(<HomePage />);
  //   const input = screen.getByPlaceholderText(/enter/i);
  //   userEvent.type(input, 'rick');
  //   const btn = screen.getByTestId('search-btn');
  //   userEvent.click(btn);
  //   const elem = screen.getAllByTestId('loader')[0];
  //   expect(elem).toBeInTheDocument();
  // });
  //
  // it('fetches data', async () => {
  //   render(
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="*" element={<HomePage />}></Route>
  //       </Routes>
  //     </BrowserRouter>
  //   );
  //   const input = screen.getByPlaceholderText(/enter/i);
  //   userEvent.type(input, 'test');
  //   const btn = screen.getByTestId('search-btn');
  //   userEvent.click(btn);
  //   await waitFor(() => expect(screen.getAllByRole('img')[0]).toBeInTheDocument(), {
  //     timeout: 1000,
  //   });
  // });
});
