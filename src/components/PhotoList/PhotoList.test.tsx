import React from 'react';

import { PhotoList } from './PhotoList';
import { render, screen } from '@testing-library/react';
import {
  faCalendarDays,
  faCheckSquare,
  faPercent,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { IPhoto } from '../../models/models';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
library.add(faCheckSquare, faPercent, faCalendarDays, faUser);

const mockPhotos: IPhoto[] = [
  {
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
  },
  {
    datetaken: '2011-06-04 20:27:41',
    datetakengranularity: 0,
    datetakenunknown: '0',
    farm: 66,
    height_n: 240,
    id: '52428521579',
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
  },
];

describe('PhotoList component', () => {
  test('renders', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoList characters={mockPhotos} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    const elem = screen.getByTestId<HTMLElement>('character-list');
    screen.debug();
    expect(elem).toBeInTheDocument();
  });

  test('renders cards', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoList characters={mockPhotos} />}></Route>
        </Routes>
      </BrowserRouter>
    );
    const elem = screen.getAllByTestId<HTMLElement>('cards');
    expect(elem).toHaveLength(1);
  });
});
