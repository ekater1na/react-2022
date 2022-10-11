import React from 'react';

import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

const formCardValue = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    date: '11.10.2011',
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
];

describe('FormCard component', () => {
  test('renders cards', () => {
    render(
      // @ts-ignore
      <FormCard item={formCardValue} key={formCardValue.id} />
    );
    const elem = screen.getAllByRole<HTMLInputElement>('img');
    expect(elem).toHaveLength(1);
  });

  test('renders card with images', () => {
    render(
      // @ts-ignore
      <FormCard item={formCardValue} key={formCardValue.id} />
    );
    const elem = screen.getByRole<HTMLInputElement>('img');
    expect(elem).toBeInTheDocument();
  });
});
