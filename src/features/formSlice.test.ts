import formReducer, { FormState, addFormProduct } from './formSlice';
import { IProduct } from '../models/models';

const mockProduct: IProduct = {
  id: '2',
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: '109.95',
  date: '11.10.2011',
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: {} as FileList,
  notification: true,
  sale: true,
};

describe('Form reducer', () => {
  const initialState: FormState = {
    formValues: [],
  };
  it('should handle initial state', () => {
    expect(formReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle increment', () => {
    const actual = formReducer(initialState, addFormProduct(mockProduct));
    expect(actual.formValues).toEqual([
      {
        id: '2',
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: '109.95',
        date: '11.10.2011',
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: {} as FileList,
        notification: true,
        sale: true,
      },
    ]);
  });
});
