import React from 'react';
import { render, screen } from '@testing-library/react';
import { Details } from './Details';
import { IPhoto } from '../../models/models';
import { faCheckSquare, faPlusSquare, faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
library.add(faCheckSquare, faPlusSquare, faUser);

describe('Details component', () => {
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

  test('renders details', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    );

    const elem = screen.getByTestId<HTMLInputElement>('details');
    expect(elem).toBeInTheDocument();
  });

  // test('renders correct icons', () => {
  //   render(
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="*" element={<Details />}></Route>
  //       </Routes>
  //     </BrowserRouter>
  //   );
  //   const gender = screen.getByTestId<HTMLInputElement>('gender');
  //   expect(gender).toHaveClass('text-red-600 px-3');
  //
  //   const status = screen.getByTestId<HTMLInputElement>('status');
  //   expect(status).toHaveClass('text-gray-300');
  // });
});
