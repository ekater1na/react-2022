import React from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { IProduct } from '../../models';
import axios, { AxiosError } from 'axios';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../Error/Error';

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
  data: IProduct[];
  isLoaded: boolean;
  error: string;
};

export class ProductList extends React.Component<FormCardsProps, FormCardState> {
  state = {
    data: [],
    isLoaded: false,
    error: '',
  };

  async componentDidMount() {
    try {
      this.setState({ isLoaded: true, error: '' });
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
      const dataSet = response.data;
      console.log(dataSet);

      this.setState({ data: dataSet, isLoaded: false });
    } catch (e: unknown) {
      const error = e as AxiosError;
      this.setState({ isLoaded: false, error: error.message });
    }
  }

  render() {
    const { data, isLoaded, error } = this.state;

    return (
      <div>
        {isLoaded && <Loader />}
        {error && <ErrorMessage error={error} />}
        {
          <div className="grid grid-cols-5 gap-3" data-testid="cards">
            {data && data.map((product, index) => <ProductItem product={product} key={index} />)}
          </div>
        }
      </div>
    );
  }
}
