import React from 'react';
import { products } from '../../data/products';
import { ProductItem } from '../ProductItem/ProductItem';

type FormCardProps = {
  id?: number;
  title: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
  date?: Date;
  sale?: boolean;
  notification?: boolean;
};

type FormCardsProps = {
  product: FormCardProps[];
};

type FormCardState = {
  state: Record<string, never>;
};

export class ProductList extends React.Component<FormCardsProps, FormCardState> {
  render() {
    if (!products.length) return null;

    return (
      <div className="grid grid-cols-5 gap-3" data-testid="cards">
        {products && products.map((product) => <ProductItem product={product} key={product.id} />)}
      </div>
    );
  }
}
