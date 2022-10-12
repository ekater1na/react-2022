import React from 'react';
import { IProduct } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProductProps {
  product: IProduct;
}

export function ProductItem({ product }: ProductProps) {
  return (
    <div className="container mx-auto" data-testid="product-item">
      <div className="border my-1 py-2 px-6 rounded flex flex-col items-center mb-2 h-64">
        <div className="h-1/2 flex justify-center">
          <img src={product.image} alt={product.title} className=" rounded-t-s" />
        </div>
        <div className="w-full">
          <p className="text-center truncate text-red-500 text-xl font-bold">{product.title}</p>
        </div>
        <p className="font-bold text-xl px-2">{product.price}$</p>
        <p className="text-gray-400 text-sm">{product.category}</p>

        <div className="px-1 py-2">
          <FontAwesomeIcon icon={['fas', 'calendar-days']} />
          <span className="px-1 text-sm font-semibold text-blue-700">
            {product.date?.toLocaleDateString()}
          </span>

          <span className={product.sale === true ? 'text-green-600 px-3' : 'text-gray-300 px-3'}>
            <FontAwesomeIcon icon={['fas', 'percent']} title="sale" />
          </span>

          <span className={product.notification === true ? 'text-green-600' : 'text-gray-300'}>
            <FontAwesomeIcon icon={['fas', 'check-square']} title="promotion" />
          </span>
        </div>
      </div>
    </div>
  );
}
