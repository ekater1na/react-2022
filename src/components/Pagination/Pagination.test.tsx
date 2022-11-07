import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';
import { store } from '../../redux/store';
import {Provider} from "react-redux";

describe('Pagination component', () => {
  test('renders ', () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    const elem = screen.getByTestId<HTMLElement>('pagination');
    expect(elem).toBeInTheDocument();
  });
});
