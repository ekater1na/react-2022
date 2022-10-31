import React from 'react';
import { CharacterItem } from '../CharacterItem/CharacterItem';
import { ICharacter } from '../../models/models';

import { useCharacters } from '../../hooks/useCharacters';
import { Link } from 'react-router-dom';

interface CharacterListProps {
  query: string | number;
}

export function CharacterList({ query }: CharacterListProps) {
  const { characters } = useCharacters(query);

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
