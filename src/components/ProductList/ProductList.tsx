import React from 'react';
import { products } from '../../data/products';
import { ProductItem } from '../ProductItem/ProductItem';

export function ProductList() {
  return (
    <div className="grid grid-cols-5 gap-3">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}
