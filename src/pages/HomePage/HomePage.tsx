import React, { useContext } from 'react';
import { PhotoList } from 'components/PhotoList/PhotoList';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/Error/Error';
import { PageOptions } from '../../components/PageOptions/PageOptions';
import { Pagination } from '../../components/Pagination/Pagination';
import { AppContext } from '../../context/Context';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export function HomePage() {
  const { state } = useContext(AppContext);
  const { photos, error, isLoading } = state;

  return (
    <div data-testid="home-page">
      <SearchBar />
      {photos && <PageOptions />}
      <div className="container mx-auto max-w-8xl">
        {isLoading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {!error && photos && <PhotoList characters={photos} />}
      </div>
      {photos && <Pagination />}
    </div>
  );
}
