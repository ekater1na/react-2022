import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal component', () => {
  test('renders modal', () => {
    render(<Modal title="Create new product" children="" onClose={() => false} />);
    const elem = screen.getByTestId<HTMLInputElement>('modal');
    expect(elem).toBeInTheDocument();
  });
});
