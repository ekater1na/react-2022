import React from 'react';
import { render, screen } from '@testing-library/react';

import Location from './Location';

describe('Location component', () => {
  test('renders location', () => {
    render(<Location />);
    const images = screen.getByText<HTMLInputElement>(/useLocation/i);
    expect(images).toHaveClass('px-2');
  });
});
