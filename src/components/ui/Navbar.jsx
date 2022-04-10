import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="p-5">
      <div className="flex justify-between items-center">
        <img
          src="./assets/aeroterra-logo.png"
          className="h-6 sm:h-9"
          alt="Aeroterra Logo"
        />

        <div>
          <ul className="flex">
            <li>
              <Link
                to="/"
                className="px-3 py-2 text-md sm:text-xl font-bold text-zinc-700 hover:text-zinc-900 focus:outline-none focus:text-zinc-900"
                aria-current="page">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
