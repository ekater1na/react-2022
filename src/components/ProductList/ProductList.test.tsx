import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import {ProductList} from './ProductList';

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
        render(<ProductList />, container);
    });
    expect(container.textContent).toContain('Mens Cotton Jacket');
});
