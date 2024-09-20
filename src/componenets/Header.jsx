import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Mandeep Kaur</h1>
      <nav>
        <ul className="flex space-x-8 mt-2 p-2">
          <li>
            <Link to="/" className="hover:text-gray-300 ">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
