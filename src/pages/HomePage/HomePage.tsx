import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { CharacterList } from 'components/CharacterList/CharacterList';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/Error/Error';
import { useCharacters } from '../../hooks/useCharacters';
import { PageOptions } from '../../components/PageOptions/PageOptions';
import { Pagination } from '../../components/Pagination/Pagination';

export function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const { error, loading, fetchCharacters, totalCount, pages } = useCharacters(searchValue);

  const handleSearchBarChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchBarSubmit = () => {
    fetchCharacters(searchValue);
  };

  return (
    <div data-testid="home-page">
      <SearchBar
        searchValue={searchValue}
        onSearchBarChange={handleSearchBarChange}
        onSearchBarSubmit={handleSearchBarSubmit}
      />
      <PageOptions totalCount={totalCount} pages={pages}/>
      <div className="container mx-auto max-w-8xl">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {!error && <CharacterList query={searchValue} />}
      </div>
      <Pagination />
    </div>
  );
}
