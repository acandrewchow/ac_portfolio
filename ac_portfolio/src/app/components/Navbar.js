import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-xl">Andrew Chow</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={toggleDarkMode}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li className="ml-8 text-xl">
          <Link href="/blog" target="_blank">
            <div className="text-black hover:text-teal-400 transition duration-300 dark:text-teal-400">Blog</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
