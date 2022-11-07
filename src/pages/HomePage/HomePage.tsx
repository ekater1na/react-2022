import React from 'react';
import { PhotoList } from 'components/PhotoList/PhotoList';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMessage } from '../../components/Error/Error';
import { PageOptions } from '../../components/PageOptions/PageOptions';
import { Pagination } from '../../components/Pagination/Pagination';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useAppSelector } from '../../redux/hooks';

export function HomePage() {
  const { photos, error, isLoading } = useAppSelector((state) => state.search);

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
