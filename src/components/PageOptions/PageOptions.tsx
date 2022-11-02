import React from 'react';

interface PageOptionsProps {
  onSortOrderChange: (sortOrder: string) => void;
  resultPerPage: number;
  onResultPerPageChange: (resultPerPage: number) => void;
  totalCount: number;
}

export function PageOptions({
  onSortOrderChange,
  resultPerPage,
  onResultPerPageChange,
  totalCount,
}: PageOptionsProps) {
  const onResultChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onResultPerPageChange(+event.target.value);
  };

  const onOrderChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onSortOrderChange(event.target.value);
  };

  return (
    <div className="bg-blue-200 pb-2 px-8 flex flex-row justify-between" data-testid="page-options">
      <div>
        <p className="font-bold">Sort Order</p>
        <select
          className="block appearance-none w-full border border-gray-200 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="order"
          onChange={onOrderChange}
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
        <p className="font-bold">Results per page</p>
        <input
          type="text"
          className="py-1 px-2 leading-tight text-gray-500 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500"
          onChange={onResultChange}
          value={resultPerPage}
        />
      </div>
      <div>
        <p className="font-bold">Total pages</p>
        <p>{totalCount}</p>
      </div>
    </div>
  );
}
