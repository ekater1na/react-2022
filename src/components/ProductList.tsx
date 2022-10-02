import React from 'react';
import { products } from '../data/products';
import { ProductItem } from './ProductItem';

export function ProductList() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}
