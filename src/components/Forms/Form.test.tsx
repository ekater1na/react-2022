import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPlusSquare);

const setFormValues = jest.fn();

describe('Forms component', () => {
  test('renders form', async () => {
    render(<Form setFormValues={setFormValues} />);
    const elem = await screen.getByTestId('form');
    expect(elem).toBeInTheDocument();
  });

  test('form submit not disabled', async () => {
    render(<Form setFormValues={setFormValues}/>);
    const elem = await screen.findByTestId('btn-submit');
    await expect(elem).not.toBeDisabled();
  });
});
