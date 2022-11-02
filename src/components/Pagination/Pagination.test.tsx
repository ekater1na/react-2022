import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  test('renders ', () => {
    render(<Pagination />);
    const elem = screen.getByTestId<HTMLElement>('pagination');
    expect(elem).toBeInTheDocument();
  });
});
