import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

const setFormValues = jest.fn();

describe('Forms component', () => {
  test('renders form', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.getByTestId('form');
    expect(elem).toBeInTheDocument();
  });

  // test('form snapshot', () => {
  //   const form = render(<Forms setFormValues={setFormValues} />);
  //   expect(form).toMachSnapshot();
  // });
  //
  // test('form submit disabled', async () => {
  //   render(<Forms setFormValues={setFormValues} />);
  //   expect(screen.getByRole('button')).toBeDisabled();
  //   userEvent.type(await screen.findByTestId('title'), 'q');
  //   expect(screen.getByRole('button')).not.toBeDisabled();
  // });
});
