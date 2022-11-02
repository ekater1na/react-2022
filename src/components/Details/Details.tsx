import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IPhoto } from '../../models/models';

export function Details() {
  const { id } = useParams();
  const [character, setCharacter] = useState<IPhoto>();

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setCharacter(data);
    })();
  }, [api]);

  const title = 'Photo details';
  return (
    <>
      <div
        className="px-6 rounded w-[800px] p-2 bg-white absolute top-24 left-1/2 -translate-x-1/2"
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
            <p className="text-m text-white mt-[3px]">Episodes: {character?.farm}</p>
            <p className="text-m text-white mt-[3px]">ID: {id}</p>
          </div>
          <div className="my-1 py-2 px-6 rounded flex flex-col items-center mb-2">
            <div className="h-[300px] flex justify-center">
              <img
                src={character?.id}
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
                  {character?.title}
                </p>
              </a>
            </div>
            <p className="text-gray-400 text-m">{character?.owner}</p>

            <div className="px-1 py-4 text-xl">
              <div className="flex items-center justify-between">
                <span className="text-white px-2">
                  {'📆'}

                  {/*<span className="px-1 text-sm font-semibold text-blue-200">*/}
                  {/*  {character?.created.slice(0, 10)}*/}
                  {/*</span>*/}
                </span>

                <span
                  data-testid="gender"
                  className={character?.ispublic === 0 ? 'text-blue-900 px-3' : 'text-red-600 px-3'}
                >
                  <span className="text-white px-2"> Gender:</span>
                  <FontAwesomeIcon icon={['fas', 'user']} />
                </span>
                <span
                  data-testid="status"
                  className={character?.isfriend === 0 ? 'text-green-600' : 'text-gray-300'}
                >
                  <span className="text-white px-2"> Status:</span>
                  <FontAwesomeIcon icon={['fas', 'check-square']} />
                </span>
              </div>
              <div className="text-center py-2">
                <p className="text-m text-blue-200 mt-[3px]">Location: {character?.title}</p>
                {/*<button className=" mt-16 bg-white hover:bg-white-500 text-blue-700 font-semibold hover:text-blue-900 my-4 py-1 px-4 border border-blue-500 hover:border-transparent rounded">*/}
                {/*  <a href={character?.url} target="_blank" rel="noreferrer">*/}
                {/*    Visit page*/}
                {/*  </a>*/}
                {/*</button>*/}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
