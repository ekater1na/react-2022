import React from 'react';
import { ICharacter } from '../../models/models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CharacterProps {
  character: ICharacter;
  onClose: () => void;
}

export function Details({ character, onClose }: CharacterProps) {
  const title = 'Character details';
  return (
    <>
      <div
        className="fixed bg-black/70 top-0 right-0 left-0 bottom-0"
        onClick={onClose}
        data-testid="modal"
      />
      <div className="px-6 rounded w-[500px] p-5 bg-white absolute top-24 left-1/2 -translate-x-1/2">
        <button
          className="fixed rounded top-3 right-3  bg-gray-300 text-white text-m px-3 py-1"
          data-testid="close-button"
          onClick={onClose}
        >
          X
        </button>
        <h1 className="text-2xl text-center mb-2 text-gray-800 font-bold">{title}</h1>

        <div
          className="container mx-auto bg-gradient-to-r from-blue-900 to-blue-500 p-4 py-5 px-5 rounded-xl"
          data-testid="details"
        >
          <div className="flex items-center justify-between py-3">
            <p className="text-sm text-white mt-[3px]">Episodes: {character.episode.length}</p>
            <p className="text-sm text-white mt-[3px]">ID: {character.id}</p>
          </div>
          <div className="my-1 py-2 px-6 rounded flex flex-col items-center mb-2 h-80">
            <div className="h-1/2 flex justify-center">
              <img
                src={character.image}
                alt={character.image}
                className="border-double border-4 border-white"
              />
            </div>
            <div className="w-full">
              <p className="text-center truncate text-red-400 text-xl font-bold">
                {character.name}
              </p>
              <a href={character.origin.url} target="_blank" rel="noreferrer">
                <p className="text-center truncate text-sm px-2" title="origin name">
                  {character.origin.name}
                </p>
              </a>
            </div>
            <p className="text-gray-400 text-sm">{character.species}</p>

            <div className="px-1 py-2">
              <div className="flex items-center justify-between">
                <span className="text-white px-2">
                  {'📆'}

                  <span className="px-1 text-sm font-semibold text-blue-200">
                    {character.created.slice(0, 10)}
                  </span>
                </span>

                <span
                  data-testid="gender"
                  className={
                    character.gender === 'Male' ? 'text-blue-900 px-3' : 'text-red-600 px-3'
                  }
                >
                  <span className="text-white px-2"> Gender:</span>
                  <FontAwesomeIcon icon={['fas', 'user']} />
                </span>
                <span
                  data-testid="status"
                  className={character.status === 'Alive' ? 'text-green-600' : 'text-gray-300'}
                >
                  <span className="text-white px-2"> Status:</span>
                  <FontAwesomeIcon icon={['fas', 'check-square']} />
                </span>
              </div>
              <div className="text-center">
                <p className="text-sm text-blue-200 mt-[3px]">
                  Location: {character.location.name}
                </p>
                <button className="bg-white hover:bg-white-500 text-blue-700 font-semibold hover:text-blue-900 my-4 py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                  <a href={character.url} target="_blank" rel="noreferrer">
                    Visit page
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
