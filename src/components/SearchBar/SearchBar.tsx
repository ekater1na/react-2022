import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/Context';
import { ActionType } from '../../context/reducers';

export function SearchBar() {
  const { state, dispatch, fetchPhotos } = useContext(AppContext);
  const { searchValue, sortOrder, resultsPerPage, pageNumber } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    dispatch({ type: ActionType.SetSearchValue, payload: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (searchValue) {
      fetchPhotos(searchValue, sortOrder, resultsPerPage, pageNumber);
      dispatch({ type: ActionType.SetCurrentPage, payload: 1 });
      dispatch({ type: ActionType.ResetPage });
    }
  };

  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(searchValue));
  }, [searchValue]);

  return (
    <div className="bg-blue-200 flex flex-col justify-center">
      <div className="relative p-1 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-2">
          <form
            role="form"
            className="relative flex z-50 bg-white rounded-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="enter"
              className="rounded-full flex-1 px-6 py-1 text-gray-700 focus:outline-none"
              onChange={handleChange}
              value={searchValue}
            />
            <button
              className="bg-blue-600 text-white rounded-full font-semibold px-8 py-2 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
              data-testid="search-btn"
              type={'submit'}
            >
              Search
            </button>
          </form>
          <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
          <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
          <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
          <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
        </div>
      </div>
    </div>
  );
}
