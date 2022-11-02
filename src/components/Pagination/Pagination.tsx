import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { IItem } from '../../models/models';

interface Pagination {
  pagesNumber: number;
  info: IItem;
  updatePagesNumber: (data: number) => void;
}

interface PageChange {
  selected: number;
}

export function Pagination({ pagesNumber, info, updatePagesNumber }: Pagination) {
  const pageChange = (data: PageChange) => {
    updatePagesNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="flex flex-row justify-center" data-testid="pagination">
      <ReactPaginate
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        nextLabel=">"
        forcePage={pagesNumber === 1 ? 0 : pagesNumber - 1}
        previousLabel="<"
        previousClassName="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        nextClassName="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info.pages}
        onPageChange={pageChange}
        pageClassName=""
        pageLinkClassName="relative inline-flex items-center border border-gray-300 bg-white mx-1 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-2"
      />
    </div>
  );
}
