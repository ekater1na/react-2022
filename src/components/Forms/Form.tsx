import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Product } from '../../models';

interface FormErrors {
  [key: string]: string | boolean | undefined;
}

interface FormProps {
  setFormValues: (value: Product) => void;
}

interface FormState {
  formValues: Product;
  errors: FormErrors;
}

export default class Form extends React.Component<FormProps, FormState> {
  form: React.RefObject<HTMLFormElement>;
  title: React.RefObject<HTMLInputElement>;
  price: React.RefObject<HTMLInputElement>;
  description: React.RefObject<HTMLInputElement>;
  image: React.RefObject<HTMLInputElement>;
  category: React.RefObject<HTMLSelectElement>;
  date: React.RefObject<HTMLInputElement>;
  sale: React.RefObject<HTMLInputElement>;
  notification: React.RefObject<HTMLInputElement>;

  errorMessage = 'Please add data';

  constructor(props: FormProps) {
    super(props);

    this.form = React.createRef();
    this.title = React.createRef();
    this.price = React.createRef();
    this.description = React.createRef();
    this.image = React.createRef();
    this.category = React.createRef();
    this.date = React.createRef();
    this.sale = React.createRef();
    this.notification = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hasError = this.hasError.bind(this);

    this.state = {
      formValues: {
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
        date: '',
        sale: false,
        notification: false,
      },
      errors: {},
    };
  }

  async setFormState() {
    await this.setState({
      formValues: {
        title: this.title.current!.value,
        price: this.price.current!.value,
        description: this.description.current!.value,
        image:
          (this.image.current?.files as FileList)[0] !== undefined
            ? URL.createObjectURL((this.image.current?.files as FileList)[0])
            : require(`../../assets/default.jpg`),
        category: this.category.current!.value,
        date: this.date.current!.value,
        sale: this.sale.current!.checked,
        notification: this.notification.current!.checked,
      },
      errors: {},
    });
  }

  async validateField(fieldName: string) {
    if (!this.state.formValues[fieldName]) {
      await this.setState({
        errors: { ...this.state.errors, [fieldName]: this.state.formValues[fieldName] },
      });
    }
  }

  async validate() {
    await this.setFormState();
    await this.validateField('title');
    await this.validateField('category');
    await this.validateField('description');
    await this.validateField('image');
    await this.validateField('date');
    await this.validateField('price');
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    this.setState({
      errors: { ...this.state.errors, [name]: undefined },
    });
  }

  hasError() {
    if (
      this.state.errors.title === '' ||
      this.state.errors.category === '' ||
      this.state.errors.description === '' ||
      this.state.errors.date === '' ||
      this.state.errors.price === '' ||
      Object.keys(this.state.errors).length === 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  async handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await this.validate();

    if (Object.keys(this.state.errors).length === 0) {
      this.props.setFormValues(this.state.formValues);

      this.form.current?.reset();
      this.notification.current!.checked = false;
      this.sale.current!.checked = false;
      this.date.current!.value = '';
    }
  }

  render() {
    return (
      <div className="container mx-auto sm:max-w-2xl my-4">
        <form className="w-full" onSubmit={this.handleSubmit} ref={this.form} data-testid="form">
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
                data-testid="title"
                placeholder="Add title"
                type="text"
                ref={this.title}
              />
              {this.state.errors.title !== undefined && (
                <p className="text-red-500 text-xs italic" data-testid="title-error">
                  {this.errorMessage}
                </p>
              )}
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
                  defaultValue={this.state.formValues.category}
                >
                  <option disabled value="">
                    Choose category
                  </option>
                  <option value="men's clothing">men&apos;s clothing</option>
                  <option value="jewelery">jewelery</option>
                  <option value="electronics">electronics</option>
                  <option value="women's clothing">women&apos;s clothing</option>
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
                {this.state.errors.category !== undefined && (
                  <p className="text-red-500 text-xs italic">{this.errorMessage}</p>
                )}
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
              {this.state.errors.description !== undefined && (
                <p className="text-red-500 text-xs italic">{this.errorMessage}</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-2/3 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-image"
              >
                Upload image
              </label>

              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-image"
                placeholder="Please choose an image"
                type="file"
                ref={this.image}
              />
              {this.state.errors.image !== undefined && (
                <p className="text-red-500 text-xs italic">{this.errorMessage}</p>
              )}
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
                {this.state.errors.date !== undefined && (
                  <p className="text-red-500 text-xs italic">{this.errorMessage}</p>
                )}

                <button className="datepicker-toggle-button" data-mdb-toggle="datepicker">
                  <i className="fas fa-calendar datepicker-toggle-icon"></i>
                </button>
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
                placeholder="Add price"
                type="text"
                ref={this.price}
              />
              {this.state.errors.price !== undefined && (
                <p className="text-red-500 text-xs italic">{this.errorMessage}</p>
              )}
            </div>

            <div className="w-full md:w-3/6 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-sale"
              >
                Notification
              </label>

              <div className="form-check">
                <input
                  data-testid="notification"
                  onChange={this.handleChange}
                  className="px-3-2 w-4 h-4 text-blue-400 bg-gray-100 rounded border-gray-300"
                  type="checkbox"
                  defaultChecked={true}
                  id="flexCheckIndeterminate"
                  ref={this.notification}
                />
                <label
                  className="form-check-label ml-2 text-gray-800"
                  htmlFor="flexCheckIndeterminate"
                >
                  Add notifications for customers about promo
                </label>
              </div>
            </div>

            <div className="w-full md:w-1/6 px-3">
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
                      name="sale"
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={true}
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

          <button
            type="submit"
            data-testid="btn-submit"
            disabled={this.hasError()}
            className={
              this.hasError() ? 'bg-blue-100 py-4 my-6 px-16' : 'bg-green-400 py-4 my-6 px-16'
            }
          >
            Submit
            <FontAwesomeIcon className="px-2" icon={['fas', 'plus-square']} />
          </button>
        </form>
      </div>
    );
  }
}
