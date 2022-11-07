import React from 'react';

import { SearchBar } from './SearchBar';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

describe('SearchBar component', () => {
  it('renders', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const elem = screen.getByTestId('search-bar');
    expect(elem).toBeInTheDocument();
  });

  it('has focus input', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input = screen.getByPlaceholderText(/enter/i);
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
