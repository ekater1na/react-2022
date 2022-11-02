import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { AppContext } from '../../context/Context';
import { ActionType } from '../../context/reducers';

interface PageChange {
  selected: number;
}

export function Pagination() {
  const { state, dispatch } = useContext(AppContext);
  const { pageNumber, totalPagesCount } = state;

  const pageChange = (data: PageChange) => {
    dispatch({ type: ActionType.SetCurrentPage, payload: data.selected + 1 });
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
        className="flex items-center justify-between px-4 py-1 sm:px-6 "
        nextLabel=">"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="<"
        previousClassName="relative inline-flex items-center rounded-l-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-700 "
        nextClassName="relative inline-flex items-center rounded-r-md border border-gray-300 px-2 py-2 text-sm font-medium text-gray-700"
        activeClassName="py-1 bg-blue-300 mx-1"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={totalPagesCount}
        onPageChange={pageChange}
        pageClassName=""
        pageLinkClassName="relative inline-flex items-center border border-gray-300 bg-white mx-1 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-2"
      />
    </div>
  );
}
