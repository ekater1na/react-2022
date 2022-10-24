import React from 'react';

import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';
import {
  faCalendarDays,
  faPlusSquare,
  faCheckSquare,
  faPercent,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {Product} from "../../models/models";
library.add(faCheckSquare, faPlusSquare, faPercent, faCalendarDays);

const mockProduct: Product =
  {
    id: '1',
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: '109.95',
    date: '11.10.2011',
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    notification: false,
    sale: false,
  }
;

describe('FormCard component', () => {
  test('renders card with images', () => {
    render(<FormCard item={mockProduct} />);
    const elem = screen.getByTestId<HTMLInputElement>('form-image');
    expect(elem).toBeInTheDocument();
  });
});
