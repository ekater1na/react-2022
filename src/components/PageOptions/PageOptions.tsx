import React from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setPageOptions } from '../../features/searchSlice';

export function PageOptions() {
  const { sortOrder, resultsPerPage, totalPagesCount } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;
    dispatch(setPageOptions({ name, value }));
  };

  return (
    <div className="bg-blue-200 pb-1 px-8 flex flex-row justify-between" data-testid="page-options">
      <div>
        <span className="font-bold px-2">Sort Order:</span>
        <select
          className="appearance-none border border-gray-200 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="order"
          value={sortOrder}
          name="sortOrder"
          onChange={onChange}
        >
          <option disabled value="">
            Choose order
          </option>
          <option value="date-posted-asc">date-posted ⇈</option>
          <option value="date-posted-desc">date-posted ⇊</option>
          <option value="date-taken-asc">date-taken ⇈</option>
          <option value="date-taken-desc">date-taken ⇊</option>
          <option value="interestingness-asc">interestingness ⇈</option>
          <option value="interestingness-desc">interestingness ⇊</option>
          <option value="relevance">relevance</option>
        </select>
      </div>
      <div>
        <span className="font-bold px-2">Results per page:</span>
        <input
          type="text"
          className="py-1 px-2 leading-tight text-gray-500 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          value={resultsPerPage}
          name="resultsPerPage"
          onChange={onChange}
        />
      </div>
      <div>
        <span className="font-bold px-2">Total pages:</span>
        <span>{totalPagesCount}</span>
      </div>
    </div>
  );
}
