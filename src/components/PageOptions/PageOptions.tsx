import React from 'react';

interface PageOptions {
  totalCount: number;
}

export function PageOptions({ totalCount }: PageOptions) {
  return (
    <div className="bg-blue-200 py-2 px-8 flex flex-row justify-between" data-testid="page-options">
      <div>
        <p className="font-bold">Sort Order</p>
        <select
          className="block appearance-none w-full border border-gray-200 text-gray-700 py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="order"
        >
          <option disabled value="">
            Choose order
          </option>
          <option value="name A-Z">name A-Z</option>
          <option value="name Z-A">name Z-A</option>
          <option value="status A-Z">status A-Z</option>
          <option value="status Z-A">status Z-A</option>
        </select>
      </div>
      <div>
        <p className="font-bold">Results per page</p>
        <input
          className="py-1 px-2 leading-tight text-gray-500 bg-white rounded-lg border border-gray-300"
          type="text"
        />
      </div>
      <div>
        <p className="font-bold">Total pages</p>
        <p>{totalCount}</p>
      </div>
    </div>
  );
}
