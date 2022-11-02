import React from 'react';
import { IPhoto, IProduct } from '../models/models';
import { Actions } from './reducers';

export enum SortType {
  DatePostedDesc = 'date-posted-desc',
  DatePostedAsc = 'date-posted-asc',
  DateTakenAsc = 'date-taken-asc',
  DateTakenDesc = 'date-taken-desc',
  InterestingDesc = 'interestingness-desc',
  InterestingAsc = 'interestingness-asc',
  Relevance = 'relevance',
}

export type IInitialStateType = {
  searchValue: string;
  sortOrder: SortType;
  resultsPerPage: number;
  pageNumber: number;
  totalPagesCount: number;
  isLoading: boolean;
  error: string;
  photos: IPhoto[];
  formValues: IProduct[];
};

export type IInitialContextType = {
  state: IInitialStateType;
  dispatch: React.Dispatch<Actions>;
  fetchPhotos: (
    searchValue: string,
    sortOrder: SortType,
    resultsPerPage: number,
    pageNumber: number
  ) => void;
};

export const initialState = {
  searchValue: 'random',
  sortOrder: SortType.Relevance,
  resultsPerPage: 10,
  pageNumber: 1,
  totalPagesCount: 0,
  isLoading: false,
  error: '',
  photos: [],
  formValues: [],
};

export const AppContext = React.createContext<IInitialContextType>({
  state: initialState,
  dispatch: () => null,
  fetchPhotos: () => null,
});
