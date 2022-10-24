import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FormCardProps = {
  item: {
    title: string;
    category: string;
    description: string;
    price: string;
    date: string;
    image: string;
    notification: boolean;
    sale: boolean;
  };
};

export default function FormCard({ item }: FormCardProps) {
  return (
    <div className="container mx-auto" data-testid="form-card">
      <div className="border my-1 py-2 px-6 rounded flex flex-col items-center mb-2 h-64">
        <div className="h-1/2 flex justify-center">
          <img
            src={item.image}
            alt={item.title}
            className=" rounded-t-s"
            data-testid="form-image"
          />
        </div>
        <div className="w-full">
          <p className="text-center truncate text-red-500 text-xl font-bold">{item.title}</p>
        </div>
        <p className="font-bold text-xl px-2">{item.price}$</p>
        <p className="text-gray-400 text-sm">{item.category}</p>

        <div className="px-1 py-2">
          <span className="px-1 text-sm font-semibold text-blue-700">
            {'📆'}
            {item.date}
          </span>

          <span className={item.sale ? 'text-green-600 px-3' : 'text-gray-300 px-3'}>
            <FontAwesomeIcon icon={['fas', 'percent']} title="sale" />
          </span>

          <span className={item.notification ? 'text-green-600' : 'text-gray-300'}>
            <FontAwesomeIcon icon={['fas', 'check-square']} title="promotion" />
          </span>
        </div>
      </div>
    </div>
  );
}
