import React from 'react';

import { CharacterList } from './CharacterList';
import { render, screen } from '@testing-library/react';
import { faCalendarDays, faCheckSquare, faPercent } from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCheckSquare, faPercent, faCalendarDays);

describe('CharacterList component', () => {
  test('renders list of cards', () => {
    render(<CharacterList  />);
    const elem = screen.getByTestId<HTMLElement>('character-list');
    expect(elem).toBeInTheDocument();
  });

  test('renders cards', () => {
    render(<CharacterList  />);
    const elem = screen.getAllByTestId<HTMLElement>('cards');
    expect(elem).toHaveLength(1);
  });
});
