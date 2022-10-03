import React from 'react';

import { ProductList } from './ProductList';
import { render, screen } from '@testing-library/react';

describe('ProductList component', () => {
  test('renders cards', () => {
    render(<ProductList />);
    const elem = screen.getAllByAltText<HTMLElement>(/samsung/i);
    expect(elem).toBeTruthy();
  });
});
