import React from 'react';
import { useLocation } from 'react-router-dom';

const Location = () => {
  const location = useLocation();
  const pageTitle = location.pathname;

  return (
    <p className="bg-blue-100">
      <b>Location:</b> {pageTitle === '/' ? 'Main' : pageTitle.replace(/\//g, '')} Page
    </p>
  );
};

export default Location;
