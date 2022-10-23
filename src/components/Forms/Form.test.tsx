import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Form from './Form';

const setFormValues = jest.fn();

describe('Forms component', () => {
  test('renders form', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.getByTestId('form');
    expect(elem).toBeInTheDocument();
  });

  test('renders working textbox', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.getByTestId('title');
    expect(elem).not.toHaveFocus();
    elem.focus();
    expect(elem).toHaveFocus();
  });

  test('renders working checkbox', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.findByTestId('notification');
    expect(elem).toBeChecked();
    fireEvent.click(elem);
    expect(elem).not.toBeChecked();
  });

  test('renders working select', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = screen.getByLabelText<HTMLSelectElement>(/category/i);
    expect(elem.value).toBe('')
    fireEvent.change(elem, { target: { value: 'electronics' } });
    expect(elem.value).toBe('electronics')
  })

  test('renders working date-picker', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = screen.getByLabelText<HTMLSelectElement>(/date/i);
    expect(elem.value).toBe('')
    fireEvent.change(elem, {target: {value: '2021-05-01'}});
    expect(elem.value).toBe('2021-05-01')
  })

  test('form submit not disabled', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.findByTestId('btn-submit');
    await expect(elem).not.toBeDisabled();
  });
});
