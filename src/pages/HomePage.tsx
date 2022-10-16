import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { ProductList } from 'components/ProductList/ProductList';
import { products } from '../data/products';
import { ErrorMessage } from '../components/Error/Error';
import { Loader } from '../components/Loader/Loader';

type HomePageProps = Record<string, never>;

interface HomePageState {
  error: string;
  loading: boolean;
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      error: 'test error',
      loading: false,
    };
  }

  render() {
    return (
      <div>
        {this.state.loading && <Loader />}
        {this.state.error && <ErrorMessage error={this.state.error} />}
        <SearchBar />
        <div className="container mx-auto max-w-8xl">
          <ProductList product={products} />
        </div>
      </div>
    );
  }
}
