import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import SearchBar from './SearchBar';

let container: any = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders div', () => {
  act(() => {
    render(<SearchBar />, container);
  });
  expect(container.className).toContain('bg-blue-100');

  // act(() => {
  //   render(<SearchBar name="Jenny" />, container);
  // });
  // expect(container.textContent).toBe('Hello, Jenny!');
  //
  // act(() => {
  //   render(<SearchBar name="Margaret" />, container);
  // });
  // expect(container.textContent).toBe('Hello, Margaret!');
});
