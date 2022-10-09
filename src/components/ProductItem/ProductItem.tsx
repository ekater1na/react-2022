import React from 'react';
import { IProduct } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProductProps {
  product: IProduct;
}

export function ProductItem({ product }: ProductProps) {
  return (
    <div className="container mx-auto">
      <div className="border my-1 py-1 px-6 rounded flex flex-col items-center mb-2 h-64">
        <div className="h-1/2 flex justify-center">
          <img src={product.image} alt={product.title} className=" rounded-t-s" />
        </div>
        <div className="w-full">
          <p className="text-center truncate text-red-500 text-xl font-bold">{product.title}</p>
        </div>
        <p className="font-bold text-xl px-2">{product.price}$</p>
        <p className="text-gray-400 text-sm">{product.category}</p>

        <div className="px-4 ">
          <FontAwesomeIcon icon={['fas', 'calendar-days']} />
          <span className="inline-block px-1.5 text-sm font-semibold text-blue-700 mr-1.5 mb-1">
            {product.date?.toLocaleDateString()}
          </span>
          <FontAwesomeIcon icon={['fas', 'percent']} />
          <span className="inline-block px-1.5 text-sm font-semibold text-blue-700 mr-1.5 mb-1">
            {product.sale?.toString()}
          </span>
          <FontAwesomeIcon icon={['fas', 'check-square']} />

          <span className="inline-block px-1.5 text-sm font-semibold text-blue-700 mr-1.5 mb-1">
            {product.notification?.toString()}
          </span>
        </div>
      </div>
      {/*<a className="px-6 py-2 text-sm font-semibold text-blue-600 bg-blue-100 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">*/}
      {/*  Show details*/}
      {/*</a>*/}
    </div>
  );
}
