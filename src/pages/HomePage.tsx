import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Link } from 'react-router-dom';
import { ProductList } from 'components/ProductList';

export function HomePage() {
  return (
    <div>
      <SearchBar />

      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/about">About Us</Link>
      </nav>

      <ProductList />
    </div>
  );
}
