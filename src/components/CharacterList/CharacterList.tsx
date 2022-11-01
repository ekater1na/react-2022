import React from 'react';
import { Link } from 'react-router-dom';

import { CharacterItem } from '../CharacterItem/CharacterItem';
import { ICharacter } from '../../models/models';

interface CharacterListProps {
  characters: ICharacter[];
}

export function CharacterList({ characters }: CharacterListProps) {
  return (
    <div data-testid={'character-list'}>
      {
        <div className="grid grid-cols-5 gap-3" data-testid="cards">
          {characters.map((item: ICharacter) => (
            <Link to={'character/' + item.id} key={item.id}>
              <CharacterItem character={item} key={item.id} />
            </Link>
          ))}
        </div>
      }
    </div>
  );
}
