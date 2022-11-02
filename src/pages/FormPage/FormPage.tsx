import React, { useContext } from 'react';

import { IProduct } from '../../models/models';
import FormCard from '../../components/FormCard/FormCard';
import Form from '../../components/Forms/Form';
import { AppContext } from '../../context/Context';
import { ActionType } from '../../context/reducers';

export function FormPage() {
  const { state, dispatch } = useContext(AppContext);
  const formValues = state.formValues;

  const setValue = (product: IProduct) => {
    dispatch({
      type: ActionType.AddProduct,
      payload: { product },
    });
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
