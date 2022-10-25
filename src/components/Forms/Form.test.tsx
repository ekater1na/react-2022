import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
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
    expect(elem).not.toBeChecked();
    fireEvent.click(elem);
    expect(elem).toBeChecked();
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

  test('shows error for empty required field', async () => {
    render(<Form setFormValues={() => {}} />);
    const button = screen.getByTestId('button-submit');
    await act(() => {
      fireEvent.click(button);
    });
    const errorMessage = screen.getByTestId('title-error');
    expect(errorMessage).toBeInTheDocument();
  });

  test('reset data after form submit', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.findByTestId<HTMLElement>('button-submit');
    await act(() => {
      fireEvent.click(elem);
    });
    const input = await screen.findByTestId<HTMLInputElement>('title');
    await expect(input.value).toBe('');
  });

  test('form submit not disabled', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.findByTestId('button-submit');
    await expect(elem).not.toBeDisabled();
  });
});
