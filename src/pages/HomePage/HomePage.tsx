import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/Error/Error';
import { useCharacters } from '../../hooks/characters';

export function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const { error, loading, fetchCharacters } = useCharacters(searchValue);
  const [changePage, setChangePage] = useState(true);

  const handleSearchBarChange = (value: string) => {
    setSearchValue(value);
    setChangePage(false);
  };

  const handleSearchBarSubmit = () => {
    fetchCharacters(searchValue);
    setChangePage(true);
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
        {!error && !changePage && <CharacterList query="" />}
        {!error && changePage && <CharacterList query={searchValue} />}
      </div>
    </div>
  );
}
