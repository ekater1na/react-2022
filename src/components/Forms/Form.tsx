import React from 'react';
import { IProduct } from '../../models/models';
import { SubmitHandler, useForm } from 'react-hook-form';
import moment from 'moment/moment';

interface FormProps {
  setFormValues: (value: IProduct) => void;
}

interface inputProps {
  name: string;
  width: string;
}

export default function Form({ setFormValues }: FormProps) {
  const errorMessage = 'Please add data';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProduct>({
    defaultValues: {
      id: '',
      title: '',
      price: '',
      description: '',
      category: '',
      date: '',
      notification: false,
    },
  });

  const Input = ({ name, width }: inputProps) => {
    return (
      <div className="w-full px-3 mb-6 md:mb-0">
        <div className={width}>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor={name}
          >
            {name}
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id={name}
            data-testid={name}
            placeholder={`Add ${name}`}
            type="text"
            {...register(name, { required: true })}
          />
          {errors[name] && (
            <p className="text-red-500 text-xs italic" data-testid={`${name}-error`}>
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    );
  };

  const onSubmit: SubmitHandler<IProduct> = (data: IProduct) => {
    setFormValues({
      ...data,
      id: moment().toString(),
      image: data.image[0]
        ? URL.createObjectURL(data.image[0])
        : require(`../../assets/default.jpg`),
    });
    reset();
  };

  const hasError = () => {
    return Object.keys(errors).length !== 0;
  };

  return (
    <div className="container mx-auto sm:max-w-2xl my-4">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)} data-testid="form">
        <div className="flex flex-wrap -mx-3 mb-6">
          <Input name="title" width="md:w-1/2" />

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="category"
                {...register('category', { required: true })}
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
              {errors.category && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <Input name="description" width="w-full" />
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-2/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="image"
            >
              Upload image
            </label>

            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="image"
              placeholder="Please choose an image"
              type="file"
              {...register('image')}
            />
          </div>

          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="date"
            >
              Date of delivery
            </label>
            <div className="datepicker relative form-floating" data-mdb-toggle-button="false">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Select a date"
                id="date"
                type="Date"
                {...register('date', { required: true })}
              />
              {errors.date && <p className="text-red-500 text-xs italic">{errorMessage}</p>}

              <button className="datepicker-toggle-button" data-mdb-toggle="datepicker">
                <i className="fas fa-calendar datepicker-toggle-icon"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <Input name="price" width="w-full md:w-1/3 px-3" />

          <div className="w-full md:w-3/6 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="notification"
            >
              Notification
            </label>

            <div className="form-check">
              <input
                data-testid="notification"
                className="px-3-2 w-4 h-4 text-blue-400 bg-gray-100 rounded border-gray-300"
                type="checkbox"
                id="notification"
                {...register('notification', { required: true })}
              />
              <label
                htmlFor="notification"
                className={errors.notification ? 'text-red-600 ml-2' : 'text-gray-800 ml-2'}
              >
                Add notifications for customers about promo
              </label>
            </div>
          </div>

          <div className="w-full md:w-1/6 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="sale"
            >
              Sale
            </label>
            <div className="">
              <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                  <input
                    id="sale"
                    type="checkbox"
                    className="sr-only peer"
                    {...register('sale')}
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
          value="submit"
          data-testid="button-submit"
          disabled={hasError()}
          className={hasError() ? 'bg-blue-100 py-4 my-6 px-16' : 'bg-green-400 py-4 my-6 px-16'}
        >
          {'Submit ➕'}
        </button>
      </form>
    </div>
  );

  // }
}
