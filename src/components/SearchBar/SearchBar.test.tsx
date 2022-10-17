import React from 'react';

import SearchBar from './SearchBar';
import { render, screen } from '@testing-library/react';

const onChange = jest.fn();
const onSumbit = jest.fn();

describe('SearchBar component', () => {
  it('focus input', () => {
    render(<SearchBar searchValue="" onSearchBarChange={onChange} onSearchBarSubmit={onSumbit} />);
    const input = screen.getByPlaceholderText(/enter/i);
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
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
    const { unmount } = render(
      <SearchBar searchValue="" onSearchBarChange={onChange} onSearchBarSubmit={onSumbit} />
    );
    const input = screen.getByPlaceholderText(/enter/i);

    localStorageMock.setItem('Search', 'LS Item');
    unmount();
    expect(input).toBeTruthy();
  });


});
