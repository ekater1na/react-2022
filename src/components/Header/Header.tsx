import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <nav
      className="relative flex flex-wrap items-center justify-center px-2 py-2 bg-blue-400 w-full"
      data-testid="header"
    >
      <NavLink data-testid="home" className="px-4 text-2xl text-red-500" to="/">
        Home
      </NavLink>
      <NavLink
        data-testid="about"
        className="px-4 text-2xl"
        end
        to="/about"
        style={({ isActive }) => ({ color: isActive ? 'white' : 'blue' })}
      >
        About Us
      </NavLink>
      <NavLink
        data-testid="forms"
        className="px-4 text-2xl"
        end
        to="/forms"
        style={({ isActive }) => ({ color: isActive ? 'white' : 'blue' })}
      >
        Forms
      </NavLink>
      <NavLink
        data-testid="404"
        className="px-4 text-2xl"
        end
        to="/404"
        style={({ isActive }) => ({ color: isActive ? 'white' : 'blue' })}
      >
        404
      </NavLink>
    </nav>
  );
}
