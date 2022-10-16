import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { characters } from '../data/products';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="container mx-auto max-w-8xl">
          <CharacterList character={characters} />
        </div>
      </div>
    );
  }
}
