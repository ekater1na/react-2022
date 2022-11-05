import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../models/models';

export type FormState = {
  formValues: IProduct[];
};

const initialState: FormState = {
  formValues: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormProduct: (state, action: PayloadAction<IProduct>) => {
      state.formValues.push(action.payload);
    },
  },
});

export const { addFormProduct } = formSlice.actions;

export default formSlice.reducer;
