import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { ProductList } from 'components/ProductList/ProductList';
import { products } from '../data/products';

export function HomePage() {
  return (
    <div>
      <SearchBar />
      <div className="container mx-auto max-w-8xl">
        <ProductList product={products} />
      </div>
    </div>
  );
}
