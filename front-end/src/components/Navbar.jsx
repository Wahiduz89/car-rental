import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left: Logo & Desktop Nav */}
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <img
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="Car Rental Logo"
                />
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                href="/"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:border-blue-500"
              >
                Home
              </a>
              <a
                href="/cars"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:border-blue-500"
              >
                Cars
              </a>
              <a
                href="/terms"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:border-blue-500"
              >
           TermsAndConditions
           </a>
              <a
                href="/contact"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:border-blue-500"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right: Action Buttons (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="tel:1234567890"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400 transition duration-300"
            >
              Dial
            </a>
            <a
              href="/book"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              {isMobileMenuOpen ? (
                // Close (X) icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="/cars"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Cars
            </a>
            <a
              href="/terms"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
           TermsAndConditions

            </a>
            <a
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="px-2 space-y-2">
              <a
                href="tel:1234567890"
                className="block text-center px-3 py-2 rounded-md text-base font-medium text-white bg-green-500 hover:bg-green-400 transition duration-300"
              >
                Dial
              </a>
              <a
                href="/book"
                className="block text-center px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-400 transition duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
