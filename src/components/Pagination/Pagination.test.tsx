import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';
import { IItem } from '../../models/models';

const Info: IItem = {
  page: 1,
  pages: 22,
  perpage: 10,
  total: 154,
  photo: [
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
  ],
};

const updatePageNumber = jest.fn();

describe('Pagination component', () => {
  test('renders ', () => {
    render(<Pagination pagesNumber={1} info={Info} updatePageNumber={updatePageNumber} />);
    const elem = screen.getByTestId<HTMLElement>('pagination');
    expect(elem).toBeInTheDocument();
  });
});
