import React from 'react';

import { ProductList } from './ProductList';
import { render, screen } from '@testing-library/react';

describe('ProductList component', () => {
  test('renders div', () => {
    render(<ProductList />);
    const images = screen.getByAltText<HTMLInputElement>(/Acer/i);
    expect(images).toHaveClass('rounded-t-s');
  });
});
