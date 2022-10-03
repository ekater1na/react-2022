import React from 'react';

import { ProductItem } from './ProductItem';
import { render, screen } from '@testing-library/react';

const mockProduct = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

describe('ProductItem component', () => {
  test('renders card', () => {
    render(
      // @ts-ignore
      <ProductItem product={mockProduct} />
    );
    const button = screen.getByText<HTMLInputElement>(/Show details/i);
    expect(button).toHaveClass('text-sm');
  });
});
