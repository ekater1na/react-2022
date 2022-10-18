import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { ICharacter, IResponse } from '../../models';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/Error/Error';
import axios, { AxiosError } from 'axios';
import { CharacterItem } from '../../components/CharacterItem/CharacterItem';

export function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showList, setShowList] = useState(true);

  const handleSearchBarChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchBarSubmit = () => {
    fetchData(searchValue);
  };

  const fetchData = async (searchValue: string) => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IResponse>(
        `https://rickandmortyapi.com/api/character/?name=${searchValue}`
      );
      const dataSet = response.data.results;
      setCharacters(dataSet);
      setLoading(false);
      setShowList(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
      setLoading(false);
      setShowList(false);
    }
  };

  return (
    <div data-testid="home-page">
      <SearchBar
        searchValue={searchValue}
        onSearchBarChange={handleSearchBarChange}
        onSearchBarSubmit={handleSearchBarSubmit}
      />
      <div className="container mx-auto max-w-8xl">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {showList && <CharacterList characters={characters} />}
        <div className="grid grid-cols-5 gap-3" data-testid="cards">
          {!error &&
            characters &&
            characters.map((item: ICharacter) => <CharacterItem character={item} key={item.id} />)}
        </div>
      </div>
    </div>
  );
}
