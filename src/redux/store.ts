import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import formReducer from '../features/formSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
