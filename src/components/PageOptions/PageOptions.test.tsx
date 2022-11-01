import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageOptions } from './PageOptions';

describe('Page options component', () => {
  const onSortOrderChange = jest.fn();
  const onResultPerPageChange = jest.fn();

  test('renders ', () => {
    render(
      <PageOptions
        sortOrder={''}
        onSortOrderChange={onSortOrderChange}
        resultPerPage={5}
        onResultPerPageChange={onResultPerPageChange}
        totalCount={12}
      />
    );
    const elem = screen.getByTestId<HTMLElement>('page-options');
    expect(elem).toBeInTheDocument();
  });
});
