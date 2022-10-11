import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FormCardProps = {
  title: string;
  category: string;
  description: string;
  price: string;
  date: string;
  image: string;
  notification: boolean;
  sale: boolean;
};

type FormCardState = Record<string, never>;

export default class FormCard extends React.Component<FormCardProps, FormCardState> {
  render() {
    return (
      <div className="container mx-auto">
        <div className="border my-1 py-2 px-6 rounded flex flex-col items-center mb-2 h-64">
          <div className="h-1/2 flex justify-center">
            <img src={this.props.image} alt={this.props.title} className=" rounded-t-s" />
          </div>
          <div className="w-full">
            <p className="text-center truncate text-red-500 text-xl font-bold">
              {this.props.title}
            </p>
          </div>
          <p className="font-bold text-xl px-2">{this.props.price}$</p>
          <p className="text-gray-400 text-sm">{this.props.category}</p>

          <div className="px-1 py-2">
            <FontAwesomeIcon icon={['fas', 'calendar-days']} />
            <span className="px-1 text-sm font-semibold text-blue-700">{this.props.date}</span>

            <span className={this.props.sale ? 'text-green-600 px-3' : 'text-gray-300 px-3'}>
              <FontAwesomeIcon icon={['fas', 'percent']} title="sale" />
            </span>

            <span className={this.props.notification ? 'text-green-600' : 'text-gray-300'}>
              <FontAwesomeIcon icon={['fas', 'check-square']} title="promotion" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
