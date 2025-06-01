'use client';

export default function Navbar()  {
  // isMenuOpen state and onClick handlers removed for design-only purpose
  // The mobile menu will always be visible or hidden based on screen size, not toggleable.

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <a href="#" className="text-white text-2xl font-bold rounded-md px-3 py-2 hover:bg-blue-700 transition duration-300">
          MyNextApp
        </a>

        {/* Mobile menu button (static - no functionality) */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2"
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon always visible for mobile design */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-lg font-medium transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile menu (always visible for design demonstration on smaller screens, no toggle) */}
      {/* In a real app, this would be conditionally rendered based on state */}
      <div className="md:hidden mt-2 space-y-2 bg-blue-700 p-4 rounded-b-lg shadow-inner">
        <a
          href="#"
          className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-300"
        >
          Sign Up
        </a>
        <a
          href="#"
          className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="block text-white hover:bg-blue-600 px-3 py-2 rounded-md text-base font-medium transition duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}