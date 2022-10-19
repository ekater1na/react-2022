import React from 'react';
import { render, screen } from '@testing-library/react';
import { Details } from './Details';
import { ICharacter } from '../../models';
import {faCheckSquare, faPlusSquare, faUser} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faCheckSquare, faPlusSquare, faUser);

describe('Details component', () => {
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

  test('renders details', () => {
    render(<Details character={mockCharacter} />);
    const elem = screen.getByTestId<HTMLInputElement>('details');
    expect(elem).toBeInTheDocument();
  });
});
