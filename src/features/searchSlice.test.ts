import searchReducer, { InitialState } from './searchSlice';
import { SortType } from './searchSlice';

describe('Search reducer', () => {
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

  it('should handle initial state', () => {
    expect(searchReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });
});
