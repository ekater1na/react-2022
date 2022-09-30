import React from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Product } from './components/Product';
import { products } from './data/products';

function App() {
  return (
    <div className="container mx-auto max-w-8xl pt-5">
      <SearchBar />

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
