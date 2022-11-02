import React, { useReducer, useEffect } from 'react';

import { AppContext, initialState, SortType } from './Context';
import { ActionType, mainReducer } from './reducers';
import { IPhoto } from '../models/models';
import { api } from '../hooks/api';
import { SearchPhotosParams } from '../models/api';

const GlobalState = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  const { searchValue, sortOrder, resultsPerPage, pageNumber } = state;

  const fetchPhotos = async (
    searchValue: string,
    sortOrder: SortType,
    resultsPerPage: number,
    pageNumber: number
  ) => {
    const params: SearchPhotosParams = {
      tags: searchValue,
      extras: 'url_n,owner_name,date_taken,views',
      page: pageNumber,
      sort: sortOrder,
      per_page: resultsPerPage,
    };

    try {
      const response = await api('photos.search', params);
      const totalPagesCount = response.photos.pages;
      const photos = response.photos.photo.filter((item: IPhoto) => item.url_n);
      dispatch({
        type: ActionType.FetchSuccess,
        payload: { photos, totalPagesCount },
      });
      console.log(this);
    } catch (err) {
      dispatch({ type: ActionType.FetchError });
    }
  };

  useEffect(() => {
    const localStorageValue = localStorage.getItem('searchValue');
    if (localStorageValue) {
      dispatch({ type: ActionType.SetSearchValue, payload: localStorageValue });
      fetchPhotos(localStorageValue, sortOrder, resultsPerPage, pageNumber);
    } else {
      fetchPhotos('seafood', sortOrder, resultsPerPage, pageNumber);
    }
  }, []);

  useEffect(() => {
    fetchPhotos(searchValue, sortOrder, resultsPerPage, pageNumber);
  }, [sortOrder, resultsPerPage, pageNumber]);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        fetchPhotos: fetchPhotos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalState;
