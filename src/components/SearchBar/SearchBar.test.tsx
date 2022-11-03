import React from 'react';

import { SearchBar } from './SearchBar';
import { render, screen } from '@testing-library/react';

describe('SearchBar component', () => {
  it('renders', () => {
    render(<SearchBar />);
    const elem = screen.getByTestId('search-bar');
    expect(elem).toBeInTheDocument();
  });

  it('has focus input', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/enter/i);
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});

