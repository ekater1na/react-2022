import React from 'react';
import { render, screen } from '@testing-library/react';
import {ErrorMessage} from "./Error";


describe('Error component', () => {
  test('renders error', () => {
      const error='error'
    render(<ErrorMessage error={error} />);
    const elem = screen.getByTestId<HTMLInputElement>('error-page');
    expect(elem).toBeInTheDocument();
  });
});
