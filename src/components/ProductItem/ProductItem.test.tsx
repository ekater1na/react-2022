import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import {ProductItem} from './ProductItem';

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
        // @ts-ignore
        render(<ProductItem product="Mens Cotton Jacket"/>, container);
    });
    expect(container.textContent).toContain('Mens Cotton Jacket');
});

