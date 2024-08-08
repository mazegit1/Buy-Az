import React, { useState } from 'react';

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header flex items-center justify-between py-4 px-6 sm:px-8 lg:px-20">
      <div className="header-left">
        <a
          href="/"
          className="text-[#5E2BFF] font-bold text-2xl sm:text-3xl lg:text-4xl"
        >
          Buy.<span className="text-[#E85F5C]">az</span>
        </a>
      </div>

      <div className="header-right hidden lg:flex items-center gap-8 lg:gap-12">
        <a
          href="/"
          className="font-semibold text-lg sm:text-xl lg:text-2xl transition-all ease-in-out duration-300 hover:border-b hover:border-b-black hover:scale-110"
        >
          Home
        </a>
        <a
          href="#ads"
          className="font-medium text-[#6f6f6f] text-lg sm:text-xl lg:text-2xl transition-all ease-in-out duration-300 hover:border-b hover:border-b-[#6f6f6f] hover:scale-110"
        >
          Search
        </a>
        <a
          href="#cards"
          className="font-medium text-[#6f6f6f] text-lg sm:text-xl lg:text-2xl transition-all ease-in-out duration-300 hover:border-b hover:border-b-[#6f6f6f] hover:scale-110"
        >
          About
        </a>
        <a
          href="#contacts"
          className="font-medium text-[#6f6f6f] text-lg sm:text-xl lg:text-2xl transition-all ease-in-out duration-300 hover:border-b hover:border-b-[#6f6f6f] hover:scale-110"
        >
          Contacts
        </a>
      </div>

      <div className="lg:hidden flex items-center">
        <button
          className="text-[#5E2BFF] focus:outline-none"
          onClick={toggleMenu}
        >
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } lg:hidden flex-col items-center mt-4 space-y-4`}
      >
        <a
          href="/"
          className="font-semibold text-xl transition-all ease-in-out duration-300 hover:border-b hover:border-b-black hover:scale-110"
        >
          Home
        </a>
        <a
          href="#ads"
          className="font-medium text-[#6f6f6f] text-xl transition-all ease-in-out duration-300 hover:border-b hover:border-b-[#6f6f6f] hover:scale-110"
        >
          Search
        </a>
        <a
          href="#cards"
          className="font-medium text-[#6f6f6f] text-xl transition-all ease-in-out duration-300 hover:border-b hover:border-b-[#6f6f6f] hover:scale-110"
        >
          About
        </a>
        <a
          href="#contacts"
          className="font-medium text-[#6f6f6f] text-xl transition-all ease-in-out duration-300 hover:border-b hover:border-b-[#6f6f6f] hover:scale-110"
        >
          Contacts
        </a>
      </div>
    </div>
  );
};

export default Navbar;
