import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../../context/Context';

export function Details() {
  const { state } = useContext(AppContext);
  const { photos } = state;

  const { id } = useParams();

  const photo = photos.find((item) => item.id == id);

  const title = 'Photo details';
  return (
    <>
      <div
        className="px-6 rounded w-[700px] p-2 bg-white absolute top-14 left-1/2 -translate-x-1/2"
        data-testid="details"
      >
        <Link className="bg-red-300 p-2 rounded-xl" to="/">
          Back Home
        </Link>
        <div className="bg-gray-300 mt-4 mb-2 py-1 rounded-xl">
          <h1 className="text-3xl text-center mb-2 text-gray-800 font-bold">{title}</h1>
        </div>
        <section className="container mx-auto bg-gradient-to-r from-blue-900 to-blue-500 p-4 py-2 px-5 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="text-m text-white mt-[3px]">Views: {photo?.views}</p>
            <p className="text-m text-white mt-[3px]">ID: {id}</p>
          </div>
          <div className="my-1 py-2 px-6 rounded flex flex-col items-center mb-2">
            <div className="flex justify-center">
              <img
                src={photo?.url_n}
                alt={photo?.id}
                className="border-double border-4 border-white"
              />
            </div>
            <div className="w-full py-2">
              <p className="text-center truncate text-red-400 text-3xl font-bold">{photo?.title}</p>
              <a href={photo?.server} target="_blank" rel="noreferrer">
                <p className="text-center truncate text-xl px-2" title="origin name">
                  {photo?.owner}
                </p>
              </a>
            </div>
            <p className="text-gray-400 text-m">{photo?.ownername}</p>

            <div className="py-2">
              <span className="text-white text-xl px-2">
                {'📆'}

                <span className="px-1 text-xl font-semibold text-blue-200">
                  {photo?.datetaken.slice(0, 10)}
                </span>
              </span>
            </div>
          </div>

          <div className="px-1 pb-4 text-xl">
            <div className="flex items-center justify-between">
              <span
                data-testid="ispublic"
                className={photo?.ispublic === 1 ? 'text-green-600' : 'text-gray-400/30'}
              >
                <span className="text-white px-2"> Public:</span>
                <FontAwesomeIcon icon={['fas', 'check-square']} />
              </span>
              <span
                data-testid="isfriend"
                className={photo?.isfriend === 1 ? 'text-green-600 px-3' : 'text-gray-400/30 px-3'}
              >
                <span className="text-white px-2"> Friend:</span>
                <FontAwesomeIcon icon={['fas', 'check-square']} />
              </span>
              <span
                data-testid="isfamily"
                className={photo?.isfamily === 1 ? 'text-green-600' : 'text-gray-400/30'}
              >
                <span className="text-white px-2"> Family:</span>
                <FontAwesomeIcon icon={['fas', 'check-square']} />
              </span>
            </div>
            <div className="flex items-center justify-between w-full">
              <span className="text-m text-blue-200 mt-[3px]">Server: {photo?.server}</span>
              <span className="text-m text-blue-200 mt-[3px] px-2">Secret: {photo?.secret}</span>
              <span className="text-m text-blue-200 mt-[3px]">Farm: {photo?.farm}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
