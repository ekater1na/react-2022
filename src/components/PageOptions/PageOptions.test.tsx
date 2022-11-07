import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageOptions } from './PageOptions';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('Page options component', () => {
  test('renders ', () => {
    render(
      <Provider store={store}>
        <PageOptions />)
      </Provider>
    );
    const elem = screen.getByTestId<HTMLElement>('page-options');
    expect(elem).toBeInTheDocument();
  });
});
