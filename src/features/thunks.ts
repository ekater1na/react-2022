import { createAsyncThunk } from '@reduxjs/toolkit';
import { SearchPhotosParams } from '../models/api';
import { IPhoto } from '../models/models';
import { api } from './api';

type SearchOptions = {
  searchValue: string;
  sortOrder: string;
  resultsPerPage: number;
  pageNumber: number;
};

export const fetchPhotos = createAsyncThunk(
  'search/fetchPhotos',
  async (searchOptions: SearchOptions, { rejectWithValue }) => {
    const { searchValue, sortOrder, resultsPerPage, pageNumber } = searchOptions;
    const params: SearchPhotosParams = {
      tags: searchValue,
      extras: 'url_n,owner_name,date_taken,views',
      page: pageNumber.toString(),
      sort: sortOrder,
      per_page: resultsPerPage.toString(),
    };

    try {
      const response = await api('photos.search', params);
      const totalPagesCount = response.photos.pages;
      const photos = response.photos.photo.filter((item: IPhoto) => item.url_n);
      return { photos, totalPagesCount };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);
