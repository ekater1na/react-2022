import React from 'react';
import {render, screen} from "@testing-library/react";

import {Header} from './Header';

describe('Header component', () => {
  test('renders header', () => {
    render(<Header />);
    const images = screen.getByAltText<HTMLInputElement>(/Home/i);
    expect(images).toHaveClass('relative');
  });
});
