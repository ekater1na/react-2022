import React from 'react';
import { IProduct } from '../models';
import { Link } from 'react-router-dom';

interface ProductProps {
  product: IProduct;
}

export function ProductItem({ product }: ProductProps) {
  return (
    <div className="container mx-auto">
      <div className="border my-4 py-2 px-4 rounded flex flex-col items-center mb-2 h-64">
        <img src={product.image} alt={product.title} className=" max-h-36  rounded-t-s" />

        <p className="text-center">{product.title}</p>
        <p className="font-bold">{product.price}</p>
      </div>
      <Link
        to="/404"
        className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
      >
        Show details
      </Link>
    </div>
  );
}
