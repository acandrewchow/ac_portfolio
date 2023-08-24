import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = ({ toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="py-10 flex justify-between dark:text-white">
      <h1 className="font-burtons text-3xl">
        <Link href="/">Andrew Chow</Link>
      </h1>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="dark:text-white focus:outline-none"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
      <div className="hidden md:flex items-center">
        <BsFillMoonStarsFill
          onClick={toggleDarkMode}
          className="text-2xl cursor-pointer dark:text-white mr-8"
        />
        <Link
          href="/blog"
          className="text-2xl hover:text-blue-500 relative hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-blue-500"
        >
          Blog
        </Link>
      </div>
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-opacity-50 bg-black transition-opacity ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-full bg-gray-100 dark:bg-gray-800 transform transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-4 right-4 focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="mb-8 text-2xl">
            <BsFillMoonStarsFill
              onClick={toggleDarkMode}
              className="cursor-pointer"
            />
          </li>
          <li className="mb-8 text-2xl">
            <Link
              href="/"
              className="text-2xl hover:text-blue-500 relative hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-blue-500"
            >
              Home
            </Link>
          </li>
          <li className="mb-8 text-2xl">
            <Link
              href="/blog"
              className="text-2xl hover:text-blue-500 relative hover:after:block hover:after:w-full hover:after:h-1 hover:after:bg-blue-500"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
