import React from 'react';

import { CharacterList } from './CharacterList';
import { render, screen } from '@testing-library/react';
import {
  faCalendarDays,
  faCheckSquare,
  faPercent,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { ICharacter } from '../../models/models';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
library.add(faCheckSquare, faPercent, faCalendarDays, faUser);

const mockCharacters: ICharacter[] = [
  {
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
  },
  {
    id: 2,
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
  },
];

describe('CharacterList component', () => {
  test('renders list of cards', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterList characters={mockCharacters} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    const elem = screen.getByTestId<HTMLElement>('character-list');
    expect(elem).toBeInTheDocument();
  });

  test('renders cards', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterList characters={mockCharacters} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    const elem = screen.getAllByTestId<HTMLElement>('cards');
    expect(elem).toHaveLength(1);
  });
});
