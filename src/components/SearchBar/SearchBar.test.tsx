import React from 'react';

import SearchBar from './SearchBar';
import { render, screen, fireEvent } from '@testing-library/react';

describe('SearchBar component', () => {
  it('Focus input', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/enter/i);
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
  it('Input content', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText<HTMLInputElement>(/enter/i);
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'Search' },
    });
    expect(input).toContainHTML('Search');
  });
});

describe('LocalStorage', () => {
  const localStorageMock = {
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });
  });

  it('set localStorage data', () => {
    const { unmount } = render(<SearchBar />);
    const input = screen.getByPlaceholderText(/enter/i);

    localStorageMock.setItem('Search', 'LS Item');
    unmount();
    expect(input).toBeTruthy();
  });

  it('get localStorage data', () => {
    const { unmount } = render(<SearchBar />);
    const input = screen.getByPlaceholderText(/enter/i);

    fireEvent.input(input, {
      target: { value: 'LS Item' },
    });
    localStorageMock.setItem('Search', 'LS Item');
    unmount();
    expect(input).toContainHTML('LS Item');
  });
});
