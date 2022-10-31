import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageOptions } from './PageOptions';

describe('Page options component', () => {
  test('renders ', () => {
    render(<PageOptions totalCount={12} />);
    const elem = screen.getByTestId<HTMLInputElement>('page-options');
    expect(elem).toBeInTheDocument();
  });
});
