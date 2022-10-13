import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader component', () => {
  test('renders loader', () => {
    render(<Loader />);
    const elem = screen.getByTestId<HTMLInputElement>('loader');
    expect(elem).toBeInTheDocument();
  });
});
