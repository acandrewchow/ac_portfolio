import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import ResumeLink from "./ResumeLink";

const Navbar = ({ toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`px-52 py-6 flex justify-between ${
        isMobileMenuOpen
          ? "bg-white dark:bg-gray-900 dark:text-white"
          : "bg-white dark:bg-gray-900"
      } sticky top-0 z-50`}
    >
      <h1 className="text-black dark:text-white font-yuji text-3xl mt-1">
        <Link href="/">AC</Link>
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
        <ResumeLink />
        <Link
          href="/blog"
          className="text-black dark:text-white mr-4 text-lg hover:scale-105 transform transition duration-300 ml-8"
        >
          blog
        </Link>
        <Link
          href="/gallery"
          className="text-black dark:text-white mr-8 text-lg hover:scale-105 transform transition duration-300 ml-4"
        >
          gallery
        </Link>
        <BsFillMoonStarsFill
          onClick={toggleDarkMode}
          className="text-2xl cursor-pointer dark:text-white hover:scale-105 transform transition duration-300"
        />
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
          className="absolute top-4 right-4 focus:outline-none hover:scale-105"
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
          <li className="mb-8 text-2xl hover:scale-105 ">
            <BsFillMoonStarsFill
              onClick={toggleDarkMode}
              className="cursor-pointer"
            />
          </li>
          <li className="mb-8 text-xl hover:scale-105 ">
            <Link href="/">home</Link>
          </li>
          <li className="mb-8 text-xl hover:scale-105 ">
            <Link href="/blog">blog</Link>
          </li>
          <li className="mb-8 text-xl hover:scale-105 ">
            <Link href="/gallery">gallery</Link>
          </li>
          <li className="mb-8 text-xl hover:scale-105 ">
            <Link
              href="https://docs.google.com/gview?url=https://github.com/acandrewchow/resume/raw/main/Chow_Andrew-Resume.pdf&embedded=true"
              target="_blank"
            >
              resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
