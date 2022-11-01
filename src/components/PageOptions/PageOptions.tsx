import React from 'react';

interface PageOptionsProps {
  sortOrder: string;
  onSortOrderChange: (sortOrder: string) => void;
  resultPerPage: number;
  onResultPerPageChange: (resultPerPage: number) => void;
  totalCount: number;
}

export function PageOptions({
  sortOrder,
  onSortOrderChange,
  resultPerPage,
  onResultPerPageChange,
  totalCount,
}: PageOptionsProps) {
  const onResultChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onResultPerPageChange(+event.target.value);
    console.log(resultPerPage);
  };

  const onOrderChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log('sortOrder1', sortOrder);
    onSortOrderChange(event.target.value);
    console.log('sortOrder2', sortOrder);
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
          <option value="id-asc">id asc</option>
          <option value="id-desc">id desc</option>
          <option value="name-asc">name asc</option>
          <option value="name-desc">name desc</option>
          <option value="status-asc">status asc</option>
          <option value="status-desc">status desc</option>
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
