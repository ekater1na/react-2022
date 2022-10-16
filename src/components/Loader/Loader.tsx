import React from 'react';

export function Loader() {
  return (
    <div className="h-screen bg-white" data-testid="loader">
      <div className="flex justify-center items-center h-1/2">
        <img
          className="h-10 w-10"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt=""
        />
      </div>
    </div>
  );
}
