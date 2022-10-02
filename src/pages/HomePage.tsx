import React from 'react';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import { ProductList } from 'components/ProductList';
import Location from 'components/Location';

export function HomePage() {
  return (
    <div>
      <Location />
      <nav
        className="bg-blue-100"
        style={{
          borderTop: 'solid 1px #87CEEB',
          borderBottom: 'solid 1px #87CEEB',
          paddingBottom: '2px',
          paddingTop: '2px',
        }}
      >
        <Link to="/about">About Us</Link>
      </nav>

      <SearchBar />

      <ProductList />
    </div>
  );
}
