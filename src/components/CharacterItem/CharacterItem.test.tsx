import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterItem } from './CharacterItem';
import {
  faCalendarDays,
  faCheckSquare,
  faPlusSquare,
  faPercent,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { ICharacter } from '../../models';
library.add(faCheckSquare, faPlusSquare, faPercent, faCalendarDays);

const mockCharacter: ICharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

describe('CharacterItem component', () => {
  test('renders cards', () => {
    render(<CharacterItem character={mockCharacter} />);
    const elem = screen.getByTestId<HTMLInputElement>('character-item');
    expect(elem).toBeInTheDocument();
  });

  test('renders card with images', () => {
    render(<CharacterItem character={mockCharacter} />);
    const elem = screen.getAllByRole<HTMLInputElement>('img');
    expect(elem).toHaveLength(3);
  });
});
