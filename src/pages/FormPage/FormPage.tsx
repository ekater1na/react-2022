import React, { useState } from 'react';

import { Product } from '../../models/models';
import FormCard from '../../components/FormCard/FormCard';
import Form from '../../components/Forms/Form';

export function FormPage() {
  const [values, setValues] = useState<Product[]>([]);

  const addValue = (data: Product) => {
    setValues((prev) => [...prev, data]);
  };

  return (
    <div data-testid="form-page">
      <Form setFormValues={addValue} />
      <div className="container mx-auto max-w-8xl">
        <div className="grid grid-cols-4 gap-3" data-testid="form-cards">
          {values &&
            values.map((item: Product, index: number) => <FormCard key={index} item={item} />)}
        </div>
      </div>
    </div>
  );
}
