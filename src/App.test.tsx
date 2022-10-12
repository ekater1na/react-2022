import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { faCalendarDays, faCheckSquare, faPlusSquare, faPercent } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(
    faCheckSquare,
    faPlusSquare,
    faPercent,
    faCalendarDays
);

describe('Router', () => {
  test('pages', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const homeLink = screen.getByTestId('home');
    userEvent.click(homeLink);
    expect(screen.getByTestId('home')).toBeInTheDocument();

    const aboutLink = screen.getByTestId('about');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about')).toBeInTheDocument();

    const formsLink = screen.getByTestId('forms');
    userEvent.click(formsLink);
    expect(screen.getByTestId('forms')).toBeInTheDocument();
  });

  test('404', () => {
    render(
      <MemoryRouter initialEntries={['/notexist']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('404')).toBeInTheDocument();
  });
});
