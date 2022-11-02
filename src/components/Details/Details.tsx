import React from 'react';

import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCharacters } from '../../hooks/useCharacters';

export function Details() {
  const { id } = useParams();
  const { fetchedData } = useCharacters('');

  const character = fetchedData?.photos.photo.find((item) => item.id == id);

  const title = 'Photo details';
  return (
    <>
      <div
        className="px-6 rounded w-[700px] p-2 bg-white absolute top-24 left-1/2 -translate-x-1/2"
        data-testid="details"
      >
        <Link className="bg-red-300 p-2 rounded-xl" to="/">
          Back Home
        </Link>
        <div className="bg-gray-300 mt-4 mb-2 py-1 rounded-xl">
          <h1 className="text-3xl text-center mb-2 text-gray-800 font-bold">{title}</h1>
        </div>
        <section className="container mx-auto bg-gradient-to-r from-blue-900 to-blue-500 p-4 py-5 px-5 rounded-xl">
          <div className="flex items-center justify-between py-3">
            <p className="text-m text-white mt-[3px]">Views: {character?.views}</p>
            <p className="text-m text-white mt-[3px]">ID: {id}</p>
          </div>
          <div className="my-1 py-2 px-6 rounded flex flex-col items-center mb-2">
            <div className="h-[300px] flex justify-center">
              <img
                src={character?.url_n}
                alt={character?.id}
                className="border-double border-4 border-white"
              />
            </div>
            <div className="w-full py-4">
              <p className="text-center truncate text-red-400 text-3xl font-bold">
                {character?.title}
              </p>
              <a href={character?.server} target="_blank" rel="noreferrer">
                <p className="text-center truncate text-xl px-2" title="origin name">
                  {character?.owner}
                </p>
              </a>
            </div>
            <p className="text-gray-400 text-m">{character?.ownername}</p>

            <div className="py-2">
              <span className="text-white text-xl px-2">
                {'📆'}

                <span className="px-1 text-xl font-semibold text-blue-200">
                  {character?.datetaken.slice(0, 10)}
                </span>
              </span>
            </div>
          </div>

          <div className="px-1 py-4 text-xl">
            <div className="flex items-center justify-between">
              <span
                data-testid="gender"
                className={character?.ispublic === 1 ? 'text-green-600' : 'text-gray-300'}
              >
                <span className="text-white px-2"> Public:</span>
                <FontAwesomeIcon icon={['fas', 'check-square']} />
              </span>
              <span
                data-testid="status"
                className={character?.isfriend === 1 ? 'text-green-600 px-3' : 'text-gray-300 px-3'}
              >
                <span className="text-white px-2"> Friend:</span>
                <FontAwesomeIcon icon={['fas', 'check-square']} />
              </span>
              <span
                data-testid="status"
                className={character?.isfamily === 1 ? 'text-green-600' : 'text-gray-300'}
              >
                <span className="text-white px-2"> Family:</span>
                <FontAwesomeIcon icon={['fas', 'check-square']} />
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-m text-blue-200 mt-[3px]">Server: {character?.server}</span>
              <span className="text-m text-blue-200 mt-[3px] px-2">
                Secret: {character?.secret}
              </span>
              <span className="text-m text-blue-200 mt-[3px]">Farm: {character?.farm}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
