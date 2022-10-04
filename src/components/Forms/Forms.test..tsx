import React from 'react';
import { render, screen } from '@testing-library/react';

import Forms from './Forms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Forms component', () => {
    test('renders form', () => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Forms />}></Route>
                </Routes>
            </BrowserRouter>
        );
        const elem = screen.getByRole<HTMLInputElement>(/nav/i);
        expect(elem).toBeInTheDocument();
    });
});
