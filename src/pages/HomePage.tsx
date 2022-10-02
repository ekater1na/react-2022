import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { Link } from 'react-router-dom';
import { ProductList } from 'components/ProductList';
import Location from 'components/Location';

export function HomePage() {
  return (
    <div>
      <nav
        style={{
          borderBottom: 'solid 1px #87CEEB',
          paddingBottom: '2px',

          paddingTop: '2px',
          margin: '2px 0',
        }}
      >
        <Link to="/about">About Us</Link>
      </nav>

      <Location />

      <SearchBar />

      <ProductList />
    </div>
  );
}
