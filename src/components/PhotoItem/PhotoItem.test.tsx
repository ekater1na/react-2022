import React from 'react';
import { render, screen } from '@testing-library/react';
import { PhotoItem } from './PhotoItem';
import { IPhoto } from '../../models/models';

import {
  faCalendarDays,
  faCheckSquare,
  faPlusSquare,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCheckSquare, faPlusSquare, faUser, faCalendarDays);

const mockPhoto: IPhoto = {
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

describe('PhotoItem component', () => {
  test('renders cards', () => {
    render(<PhotoItem photo={mockPhoto} />);
    const elem = screen.getByTestId<HTMLInputElement>('character-item');
    expect(elem).toBeInTheDocument();
  });

  test('renders card with images', () => {
    render(<PhotoItem photo={mockPhoto} />);
    const elem = screen.getAllByRole<HTMLInputElement>('img');
    expect(elem).toHaveLength(1);
  });
});
