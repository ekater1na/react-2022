import React from 'react';

import { render, screen } from '@testing-library/react';
import {
    faCalendarDays,
    faCheckSquare,
    faPercent,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FormPage } from './FormPage';
library.add(faCheckSquare, faPercent, faCalendarDays);

describe('FormPage component', () => {
    test('renders', () => {
        render(<FormPage />);
        const elem = screen.getByTestId<HTMLInputElement>('form-page');
        expect(elem).toBeInTheDocument();
    });
});
