import React from 'react';
import { IProduct } from '../../models';

interface ProductProps {
  product: IProduct;
}

export function ProductItem({ product }: ProductProps) {
  return (
    <div className="container mx-auto">
      <div className="border my-4 py-1 px-6 rounded flex flex-col items-center mb-2 h-52">
        <div className="h-1/2 flex justify-center">
          <img src={product.image} alt={product.title} className=" rounded-t-s" />
        </div>
        <div className="w-full">
          <p className="text-center truncate text-red-500 text-2xl font-bold">{product.title}</p>
        </div>
        <p className="text-gray-400">{product.category}</p>
        <p className="font-bold text-xl">{product.price}$</p>
      </div>
      <a
        className="px-6 py-2 text-sm font-semibold text-blue-600 bg-blue-100 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
      >
        Show details
      </a>
    </div>
  );
}
