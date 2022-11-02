import { IPhoto, IProduct } from '../models/models';
import { IInitialStateType } from './Context';

export enum ActionType {
  FetchSuccess = 'Fetch_success',
  FetchError = 'Fetch_error',
  SetSearchValue = 'Set_search_value',
  SetPageOptions = 'Set_search_options',
  SetCurrentPage = 'Set_current_page',
  ResetPage = 'Reset_page',
  AddProduct = 'Add_product',
}

export type FetchSuccess = {
  type: ActionType.FetchSuccess;
  payload: {
    photos: IPhoto[];
    totalPagesCount: number;
  };
};

export type FetchError = {
  type: ActionType.FetchError;
};

export type SetSearchValue = {
  type: ActionType.SetSearchValue;
  payload: string;
};

export type SetPageOptions = {
  type: ActionType.SetPageOptions;
  payload: {
    name: string;
    value: string;
  };
};

export type SetCurrentPage = {
  type: ActionType.SetCurrentPage;
  payload: number;
};

export type ResetPage = {
  type: ActionType.ResetPage;
};

export type AddProduct = {
  type: ActionType.AddProduct;
  payload: {
    product: IProduct;
  };
};

export type Actions =
  | FetchSuccess
  | FetchError
  | SetSearchValue
  | SetPageOptions
  | SetCurrentPage
  | ResetPage
  | AddProduct;

export const mainReducer = (state: IInitialStateType, action: Actions) => {
  switch (action.type) {
    case ActionType.FetchSuccess:
      return {
        ...state,
        isLoading: false,
        error: '',
        photos: action.payload.photos,
        totalPagesCount: action.payload.totalPagesCount,
      };
    case ActionType.FetchError:
      return {
        ...state,
        isLoading: false,
        error: 'Error occurred',
        photos: [],
        totalPagesCount: 0,
      };
    case ActionType.SetSearchValue:
      return {
        ...state,
        searchValue: action.payload,
      };
    case ActionType.SetPageOptions:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ActionType.SetCurrentPage:
      return {
        ...state,
        pageNumber: action.payload,
      };
    case ActionType.ResetPage:
      return {
        ...state,
        pageNumber: 1,
      };
    case ActionType.AddProduct:
      return {
        ...state,
        formValues: [...state.formValues, action.payload.product],
      };
    default:
      return state;
  }
};
