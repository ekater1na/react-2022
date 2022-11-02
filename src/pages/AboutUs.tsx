import React from 'react';

export function AboutUs() {
  return (
    <div>
      <div
        className="
    flex
    items-center
    justify-center
    w-screen
    h-[calc(100vh-48px)]
    bg-gradient-to-r
    from-indigo-600
    to-blue-400
  "
      >
        <div className="px-40 py-20 bg-white rounded-md shadow-xl">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">About Us</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Hi!</span> Nice to meet you
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">Have a nice day!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
