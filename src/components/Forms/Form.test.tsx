import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

const setFormValues = jest.fn();

describe('Forms component', () => {
  test('renders form', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.getByTestId('form');
    expect(elem).toBeInTheDocument();
  });

  test('form snapshot', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.getByTestId('form');
    expect(elem).toMatchSnapshot();
  });

  test('form submit disabled', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.findByTestId('btn-submit');
    await userEvent.click(elem);
    await expect(elem).not.toBeDisabled();
  });
});
