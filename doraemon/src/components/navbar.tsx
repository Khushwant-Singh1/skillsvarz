import React from 'react';
import logo from '../assets/Logo.png';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-1000 flex items-center justify-between p-2">
      {/* Logo */}
      <div>
        <img
          src={logo} // Use the imported logo variable
          alt="Logo"
          style={{ height: '50px' }} // Adjust height as needed
        />
      </div>

      {/* Navigation Labels */}
      <div className="flex gap-4">
        <span className="cursor-pointer hover:text-blue-700">Home</span>
        <span className="cursor-pointer hover:text-blue-700">Gadgets</span>
        <span className="cursor-pointer hover:text-blue-700">Characters</span>
        <span className="cursor-pointer hover:text-blue-700">Movies</span>
      </div>

      {/* SVG Placeholder */}
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm0 15A7 7 7 0 1 1 8 1a7 7 0 0 1 0 14z" />
          <path d="M8 4a4 4 0 1 0 4 4A4 4 0 0 0 8 4z" />
        </svg>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="bg-yellow-300 text-black rounded px-4 py-2 shadow-sm">
          Join Community
        </button>
        <button className="bg-blue-400 text-black rounded px-4 py-2 shadow-sm">
          Explore
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
