import React from 'react';
import { useLocation } from 'react-router-dom';

const Location = () => {
  const location = useLocation();
  // const location = { pathname: '/useLocation' };

  const pageTitle = location.pathname;

  return (
    <div className="flex justify-end  px-2 py-0 bg-blue-100">
      <b className="px-2">Location: </b> {pageTitle === '/' ? 'Main' : pageTitle.replace(/\//g, '')}{' '}
      Page
    </div>
  );
};

export default Location;
