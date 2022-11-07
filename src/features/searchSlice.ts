import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPhoto } from '../models/models';
import { fetchPhotos } from './thunks';

export enum SortType {
  DatePostedDesc = 'date-posted-desc',
  DatePostedAsc = 'date-posted-asc',
  DateTakenAsc = 'date-taken-asc',
  DateTakenDesc = 'date-taken-desc',
  InterestingDesc = 'interestingness-desc',
  InterestingAsc = 'interestingness-asc',
  Relevance = 'relevance',
}

export interface InitialState {
  searchValue: string;
  sortOrder: SortType;
  resultsPerPage: number;
  pageNumber: number;
  totalPagesCount: number;
  isLoading: boolean;
  error: string;
  photos: IPhoto[];
  [key: string]: string | SortType | number | boolean | IPhoto[];
}

const initialState: InitialState = {
  searchValue: 'random',
  sortOrder: SortType.Relevance,
  resultsPerPage: 10,
  pageNumber: 1,
  totalPagesCount: 0,
  isLoading: true,
  error: '',
  photos: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
      console.log(initialState);
    },
    setPageOptions: (
      state,
      action: PayloadAction<{
        name: string;
        value: string;
      }>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      console.log(this);
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      console.log(this);

      state.isLoading = false;
      state.error = '';
      state.photos = action.payload.photos;
      state.totalPagesCount = action.payload.totalPagesCount;
    });
    builder.addCase(fetchPhotos.rejected, (state) => {
      console.log(this);

      state.isLoading = false;
      state.error = 'Error occurred';
      state.photos = [];
      state.totalPagesCount = 0;
    });
  },
});

export const { setSearchValue, setPageOptions, setCurrentPage } = searchSlice.actions;

export default searchSlice.reducer;
