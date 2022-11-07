import React from 'react';
import { FormErrorMessage } from './FormErrorMessage';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { IProduct } from '../../models/models';

interface inputProps {
  name: string;
  className: string;
  register: UseFormRegister<IProduct>;
  errors: FieldError | undefined;
}

export const Input = ({ name, className, register, errors }: inputProps) => {
  return (
    <div className={className}>
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
        {...(register && register(name, { required: true }))}
      />
      <FormErrorMessage name={name} errors={errors} />
    </div>
  );
};
