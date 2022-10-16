import React from 'react';
import { IProduct } from '../../models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from '../Modal/Modal';
import { Details } from '../Details/Details';

interface ProductProps {
  product: IProduct;
}
interface ProductState {
  showModal: boolean;
}

export class ProductItem extends React.Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    super(props);
    this.state = { showModal: false };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  createHandler = (product: IProduct) => {
    // this.setState({ showModal: false });
    console.log('createHandler');
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { product } = this.props;
    return (
      <div className="container mx-auto" data-testid="product-item">
        <div className="border my-1 py-2 px-6 rounded flex flex-col items-center mb-2 h-64">
          <div className="h-1/2 flex justify-center" onClick={this.showModal}>
            <img
              src={product.image}
              alt={product.title}
              className=" rounded-t-s"
              // onClick={this.showModal}
            />
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

            {this.state.showModal && (
              <Modal title="Product details" onClose={this.hideModal}>
                <Details onOpen={this.createHandler} />
              </Modal>
            )}
          </div>
        </div>
      </div>
    );
  }
}
