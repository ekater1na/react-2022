import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IProduct } from '../../models';

let productData = {
  title: '',
  price: '',
  description: '',
  image: '',
  category: '',
  rating: {
    rate: 0,
    count: 0,
  },
  date: '',
  sale: '',
  notification: '',
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export default class Forms extends React.Component {
  title = React.createRef<HTMLInputElement>();
  price = React.createRef<HTMLInputElement>();
  description = React.createRef<HTMLInputElement>();
  image = React.createRef<HTMLInputElement>();
  category = React.createRef<HTMLSelectElement>();
  date = React.createRef<HTMLInputElement>();
  sale = React.createRef<HTMLInputElement>();
  notification = React.createRef<HTMLInputElement>();

  // constructor(props: {} | unknown) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.title = React.createRef();
  // }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    productData = {
      title: this.title.current!.value,
      price: this.price.current!.value,
      description: this.description.current!.value,
      image: this.image.current!.value,
      category: this.category.current!.value,
      rating: {
        rate: 0,
        count: 0,
      },
      date: this.date.current!.value,
      sale: this.sale.current!.value,
      notification: this.notification.current!.value,
    };

    console.log('input', productData);
  };

  render() {
    return (
      <div className="container mx-auto sm:max-w-2xl my-4">
        <form className="w-full" onSubmit={this.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-title"
                placeholder="Title"
                type="text"
                ref={this.title}
              />
              {/*<p className="text-red-500 text-xs italic">Please fill out this field.</p>*/}
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Category
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-category"
                  ref={this.category}
                >
                  <option>men&apos;s clothing</option>
                  <option>jewelery</option>
                  <option>electronics</option>
                  <option>women&apos;s clothing</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-description"
              >
                Description
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-description"
                placeholder="Write description"
                type="text"
                ref={this.description}
              />
              {/*<p className="text-gray-600 text-xs italic">*/}
              {/*  Make it as long and as crazy as you would like*/}
              {/*</p>*/}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Upload image
              </label>

              <div className="md:w-2/3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-image"
                  placeholder="Please choose an image"
                  type="text"
                  ref={this.image}
                />
                <button type="submit">Upload</button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Price
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-price"
                placeholder="20.99$"
                type="text"
                ref={this.price}
              />
            </div>

            <div className="w-full md:w-1/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-date"
              >
                Date of delivery
              </label>
              <div
                className="datepicker relative form-floating mb-3"
                data-mdb-toggle-button="false"
              >
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Select a date"
                  type="Date"
                  ref={this.date}
                />

                <button className="datepicker-toggle-button" data-mdb-toggle="datepicker">
                  <i className="fas fa-calendar datepicker-toggle-icon"></i>
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-sale"
              >
                Sale
              </label>
              <div className="">
                <div className="flex">
                  <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={false}
                      ref={this.sale}
                      readOnly={true}
                    />
                    <div
                      onClick={() => {}}
                      className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-400  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-400"
                    ></div>
                    <span className="ml-2 text-sm font-medium text-gray-900">ON</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="form-check">
              <input
                className="px-3-2 w-4 h-4 text-blue-400 bg-gray-100 rounded border-gray-300"
                type="checkbox"
                // checked={false}
                id="flexCheckIndeterminate"
                ref={this.notification}
              />
              <label
                className="form-check-label ml-2 inline-block text-gray-800"
                htmlFor="flexCheckIndeterminate"
              >
                Add notifications for customers about promo
              </label>
            </div>
          </div>

          <button
            type="submit"
            value="Submit"
            className="px-6 py-2 my-6 text-sm font-semibold text-blue-600 bg-blue-100 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
          >
            Submit
            <FontAwesomeIcon className="px-2" icon={['fas', 'plus-square']} />
          </button>
        </form>

        {/*<div className="flex items-center justify-center">*/}
        {/* */}
        {/*</div>*/}
      </div>
    );
  }
}
