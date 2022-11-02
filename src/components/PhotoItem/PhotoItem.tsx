import React from 'react';

import { IPhoto } from '../../models/models';

interface CharacterProps {
  photo: IPhoto;
}

export function PhotoItem({ photo }: CharacterProps) {
  return (
    <div className="container mx-auto" data-testid="character-item">
      <div className="border py-1 px-6 rounded-md flex flex-col items-center my-1 h-60">
        <div className="h-3/4 flex justify-center rounded-md">
          <img
            src={photo.url_n}
            alt={photo.title}
            className="border-double rounded-md border-4 border-blue-200"
          />
        </div>
        <div className="w-full">
          <p className="text-center truncate text-blue-600 text-xl font-bold">
            {photo.title || 'No name'}
          </p>
          <div className="flex items-center justify-center">
            <span className="text-center text-sm">{photo.ownername}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-center text-blue-400 truncate text-xs" title="date-taken">
              🗓 {photo.datetaken.slice(0, 10)}
            </span>
            <span className="text-gray-400 text-xs">👁 {photo.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
