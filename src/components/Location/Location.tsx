import React from 'react';
import { useLocation } from 'react-router-dom';

export function Location() {
  const location = useLocation();

  const pageTitle = location.pathname;

  return (
    <div className="bg-blue-400 w-[200px] flex-col">
      <p className="font-bold text-blue-800">Location:</p>
      <p className="text-white">
        {pageTitle === '/' ? 'MAIN' : pageTitle.replace(/\//g, ' ').toUpperCase()}
      </p>
    </div>
  );
}
