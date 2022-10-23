import React from 'react';

import {act, fireEvent, render, screen} from '@testing-library/react';
import { faCalendarDays, faCheckSquare, faPercent } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FormPage } from './FormPage';

library.add(faCheckSquare, faPercent, faCalendarDays);

describe('FormPage component', () => {
  test('renders', () => {
    render(<FormPage />);
    const elem = screen.getByTestId<HTMLInputElement>('form-page');
    expect(elem).toBeInTheDocument();
  });

  test('renders form', () => {
    render(<FormPage />);
    const elem = screen.getByTestId<HTMLInputElement>('form');
    expect(elem).toBeInTheDocument();
  });

  test('renders list of cards', async () => {

    render(<FormPage />);
    const onButton = screen.getByTestId<HTMLInputElement>('button-submit');

    const title = screen.getByLabelText<HTMLInputElement>(/title/i);
    const category = screen.getByLabelText<HTMLSelectElement>(/category/i);
    const description = screen.getByLabelText<HTMLInputElement>(/description/i);
    const date = screen.getByLabelText<HTMLInputElement>(/date of delivery/i);
    const price = screen.getByLabelText<HTMLInputElement>(/price/i);

    await act(() => {
      fireEvent.change(title, {target: {value: 'electronics'}});
      fireEvent.change(category, {target: {value: 'electronics'}});
      fireEvent.change(description, {target: {value: '23'}});
      fireEvent.change(date, {target: {value: '2021-05-01'}});
      fireEvent.change(price, {target: {value: 23}});
      fireEvent.click(onButton);
    })

    const elem = screen.getByTestId<HTMLInputElement>('form-cards');
    expect(elem).toBeInTheDocument();
  });
});
