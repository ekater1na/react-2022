import React from 'react';
import { Link } from 'react-router-dom';

export function GoHome() {
  return (
    <Link to="/" className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
      Go home
    </Link>
  );
}
