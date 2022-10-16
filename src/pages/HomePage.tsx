import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { ProductList } from 'components/ProductList/ProductList';
import { products } from '../data/products';

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div className="container mx-auto max-w-8xl">
          <ProductList product={products} />
        </div>
      </div>
    );
  }
}
