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
import { IProduct } from '../../models/models';
library.add(faCheckSquare, faPlusSquare, faPercent, faCalendarDays);

const mockProduct: IProduct = {
  id: '1',
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: '109.95',
  date: '11.10.2011',
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: {} as FileList,
  notification: false,
  sale: false,
};

const mockProductTest: IProduct = {
  id: '2',
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: '109.95',
  date: '11.10.2011',
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: {} as FileList,
  notification: true,
  sale: true,
};

describe('FormCard component', () => {
  test('renders card', () => {
    render(<FormCard item={mockProduct} key="1" />);
    const elem = screen.getByTestId<HTMLElement>('form-image');
    expect(elem).toBeInTheDocument();
  });

  test('renders correct icons', () => {
    render(<FormCard item={mockProductTest} key="1" />);
    const notification = screen.getByTestId<HTMLElement>('notification');
    expect(notification).toHaveClass('text-green-600');

    const sale = screen.getByTestId<HTMLElement>('sale');
    expect(sale).toHaveClass('text-green-600');
  });
});
