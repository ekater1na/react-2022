import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductItem } from './ProductItem';
import {
  faCalendarDays,
  faCheckSquare,
  faPlusSquare,
  faPercent,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCheckSquare, faPlusSquare, faPercent, faCalendarDays);

const mockProduct = {
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
  date: new Date(),
  sale: false,
  notification: true,
};

describe('ProductItem component', () => {
  test('renders cards', () => {
    render(<ProductItem product={mockProduct} />);
    const elem = screen.getByTestId<HTMLInputElement>('product-item');
    expect(elem).toBeInTheDocument();
  });

  test('renders card with images', () => {
    render(
      <ProductItem product={mockProduct} />
    );
    const elem = screen.getAllByRole<HTMLInputElement>('img');
    expect(elem).toHaveLength(3);
  });
});
