import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Header } from './components/Header/Header';

describe('Router', () => {
  test('pages', () => {
    render(
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    );

    const homeLink = screen.getByTestId('home');
    userEvent.click(homeLink);
    expect(screen.getByTestId('home')).toBeInTheDocument();

    const aboutLink = screen.getByTestId('about');
    userEvent.click(aboutLink);
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });

  test('404', () => {
    render(
      <MemoryRouter initialEntries={['/notexist']}>
        <Header />
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('404')).toBeInTheDocument();
  });
});
