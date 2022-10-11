import React from 'react';

import Form from '../components/Forms/Form';
import { Product } from '../models';
import FormCard from '../components/FormCard/FormCard';

type FormPageState = {
  formValues: Product[];
};

type FormPageProps = Record<string, never>;

export class FormPage extends React.Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);
    this.state = {
      formValues: [],
    };
    this.setFormValues = this.setFormValues.bind(this);
  }

  setFormValues(data: Product) {
    this.setState({
      formValues: [...this.state.formValues, data],
    });
  }

  render() {
    return (
      <div data-testid="form-page">
        <Form setFormValues={this.setFormValues} />
        <div className="" data-testid="product-cards">
          {this.state.formValues &&
            this.state.formValues.map((item, index) => <FormCard key={index} {...item} />)}
        </div>
      </div>
    );
  }
}
