import React, { useState } from 'react';
import { ICharacter } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '../Modal/Modal';
import { Details } from '../Details/Details';

interface CharacterProps {
  character: ICharacter;
}

export function CharacterItem({ character }: CharacterProps) {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <div className="container mx-auto" data-testid="character-item">
      <div className="border py-2 px-6 rounded flex flex-col items-center mb-1 h-64">
        <div className="h-2/3 flex justify-center">
          <img
            src={character.image}
            alt={character.image}
            className="border-double border-4 border-blue-200"
            onClick={showModal}
          />
        </div>
        <div className="w-full">
          <p className="text-center truncate text-red-500 text-xl font-bold">{character.name}</p>
          <p className="text-center truncate text-sm">{character.origin.name}</p>
        </div>
        <p className="text-gray-400 text-xs">{character.species}</p>

        <div className="px-1">
          <span
            className={character.gender === 'Male' ? 'text-blue-600 px-3' : 'text-red-600 px-3'}
          >
            <FontAwesomeIcon icon={['fas', 'user']} title="Gender" />
          </span>

          <span className={character.status !== 'alive' ? 'text-green-600' : 'text-gray-300'}>
            <FontAwesomeIcon icon={['fas', 'check-square']} title="Status" />
          </span>

          {modal && (
            <Modal title="Character details" onClose={hideModal}>
              <Details character={character} />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
}
