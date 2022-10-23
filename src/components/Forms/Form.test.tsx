import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
    expect(elem.value).toBe('');
    fireEvent.change(elem, { target: { value: 'electronics' } });
    expect(elem.value).toBe('electronics');
  });

  test('renders working date-picker', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = screen.getByLabelText<HTMLSelectElement>(/date/i);
    expect(elem.value).toBe('');
    fireEvent.change(elem, { target: { value: '2021-05-01' } });
    expect(elem.value).toBe('2021-05-01');
  });

  // test('shows error for empty required field', async () => {
  //   render(<Form setFormValues={setFormValues} />);
  //   const form = screen.getByTestId('form');
  //
  //   const button = screen.getByTestId('button-submit');
  //
  //   const title = screen.getByTestId('title');
  //   fireEvent.change(title, {target: {value: '12'}});
  //
  //   await fireEvent.submit(form);
  //   // expect(button).toBeDisabled();
  //
  //   const errorMessage = screen.getByTestId('title-error');
  //   await expect(errorMessage).toBeInTheDocument();
  // });

  test('form submit not disabled', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.findByTestId('button-submit');
    await expect(elem).not.toBeDisabled();
  });
});
