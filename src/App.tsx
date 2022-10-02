import React from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Product } from './components/Product';
import { products } from './data/products';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container mx-auto max-w-8xl">
      <SearchBar />

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/about">About Us</Link>
      </nav>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
