import React from 'react';

import { IProduct } from '../../models/models';
import FormCard from '../../components/FormCard/FormCard';
import Form from '../../components/Forms/Form';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addFormProduct } from '../../features/formSlice';

export function FormPage() {
  const { formValues } = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();

  const setValue = (user: IProduct) => {
    dispatch(addFormProduct(user));
  };

  return (
    <div data-testid="form-page">
      <Form setFormValues={setValue} />
      <div className="container mx-auto max-w-8xl">
        <div className="grid grid-cols-4 gap-3" data-testid="form-cards">
          {formValues && formValues.map((item: IProduct) => <FormCard key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}
