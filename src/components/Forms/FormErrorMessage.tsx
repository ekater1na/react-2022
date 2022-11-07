import React from 'react';
import { FieldError } from 'react-hook-form';

interface errorProps {
  name: string;
  errors: FieldError | undefined;
}
const errorMsg = 'Please add';

export const FormErrorMessage = ({ name, errors }: errorProps) => {
  return (
    <>
      {errors && (
        <p className="text-red-500 text-xs italic" data-testid={`${name}-error`}>
          {errorMsg} {name}
        </p>
      )}
    </>
  );
};
