import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { ProductList } from 'components/ProductList/ProductList';

export function HomePage() {
  return (
    <div>
      <SearchBar />
      <div className="container mx-auto max-w-8xl">
        <ProductList />
      </div>
    </div>
  );
}
