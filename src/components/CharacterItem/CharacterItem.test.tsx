import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterItem } from './CharacterItem';
import { IPhoto } from '../../models/models';

import {
  faCalendarDays,
  faCheckSquare,
  faPlusSquare,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCheckSquare, faPlusSquare, faUser, faCalendarDays);

const mockCharacter: IPhoto = {
  datetaken: '2011-06-04 20:27:41',
  datetakengranularity: 0,
  datetakenunknown: '0',
  farm: 66,
  height_n: 240,
  id: '52428521578',
  isfamily: 0,
  isfriend: 0,
  ispublic: 1,
  owner: '61617475@N02',
  ownername: 'Scott Mundy',
  secret: 'a7c6a94ff5',
  server: '65535',
  title: 'Houses of Parliament, London',
  url_n: 'https://live.staticflickr.com/65535/52428521578_a7c6a94ff5_n.jpg',
  views: '8482',
  width_n: 320,
};

const mockCharacterFemale: IPhoto = {
  datetaken: '2011-06-04 20:27:41',
  datetakengranularity: 0,
  datetakenunknown: '0',
  farm: 66,
  height_n: 240,
  id: '52428521578',
  isfamily: 0,
  isfriend: 0,
  ispublic: 1,
  owner: '61617475@N02',
  ownername: 'Scott Mundy',
  secret: 'a7c6a94ff5',
  server: '65535',
  title: 'Houses of Parliament, London',
  url_n: 'https://live.staticflickr.com/65535/52428521578_a7c6a94ff5_n.jpg',
  views: '8482',
  width_n: 320,
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

  test('shows correct icons', () => {
    render(<CharacterItem character={mockCharacter} />);
    const gender = screen.getByTestId<HTMLButtonElement>('gender');
    expect(gender).toHaveClass('text-blue-600 px-3');
    expect(gender).not.toHaveClass('text-red-600 px-3');

    const status = screen.getByTestId<HTMLButtonElement>('status');
    expect(status).toHaveClass('text-green-600');
    expect(status).not.toHaveClass('text-gray-300');
  });

  test('shows correct icons', () => {
    render(<CharacterItem character={mockCharacterFemale} />);
    const gender = screen.getByTestId<HTMLButtonElement>('gender');
    expect(gender).not.toHaveClass('text-blue-600 px-3');
    expect(gender).toHaveClass('text-red-600 px-3');

    const status = screen.getByTestId<HTMLButtonElement>('status');
    expect(status).not.toHaveClass('text-green-600');
    expect(status).toHaveClass('text-gray-300');
  });
});
