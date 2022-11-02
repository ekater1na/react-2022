import React from 'react';

import { IPhoto } from '../../models/models';

interface CharacterProps {
  character: IPhoto;
}

export function CharacterItem({ character }: CharacterProps) {
  return (
    <div className="container mx-auto" data-testid="character-item">
      <div className="border py-1 px-6 rounded flex flex-col items-center my-1 h-60">
        <div className="h-3/4 flex justify-center">
          <img
            src={character.url_n}
            alt={character.title}
            className="border-double border-4 border-blue-200"
          />
        </div>
        <div className="w-full">
          <p className="text-center truncate text-blue-600 text-xl font-bold">
            {character.title || 'No name'}
          </p>
          <div className="flex items-center justify-between p-2">
            <span className="text-center text-blue-400 truncate text-xs" title="date-taken">
              🗓 {character.datetaken.slice(0, 10)}
            </span>
            <span className="text-center truncate text-m">{character.ownername}</span>
            <span className="text-gray-400 text-xs">👁 {character.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
