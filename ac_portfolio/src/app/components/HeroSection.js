import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import ProfilePicture from "../../../public/profile_pic.png";
import Type from "./Type";

const HeroSection = () => {
  return (
    <div className="text-center p-6 md:p-10 py-10">
      <h2 className="text-4xl md:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">
        Andrew Chow
      </h2>
      <h3 className="text-xl md:text-3xl py-2 dark:text-white">
        <Type />
      </h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-xl py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-2xl">
          I'm Andrew, a Software Engineering student at the University of Guelph
          who loves to solve problems! I have a passion for building new
          products and applications through the world of technology.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p className="text-xl py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-2xl">
          From design and development to product management, my interest lies
          within the realm of understanding customers, identifying gaps and
          providing innovative solutions to solve user problems.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p className="text-xl py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-2xl">
          If you're interested in learning more about me, feel free to read my{" "}
          <a
            href="https://acandrewchow.github.io/blog"
            target="_blank"
            className="text-blue-700 dark:text-blue-200"
          >
            {" "}
            personal blog
          </a>{" "}
          where I document my adventures in the world of software!
        </p>
      </motion.div>

      <div className="text-4xl md:text-5xl flex justify-center gap-6 py-3 text-gray-600 dark:text-gray-400">
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://linkedin.com/in/acandrewchow" target="_blank">
            <AiFillLinkedin />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://github.com/acandrewchow" target="_blank">
            <AiFillGithub />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://www.instagram.com/_andrewchow/" target="_blank">
            <AiFillInstagram />
          </a>
        </motion.div>
      </div>

      <div className="mx-auto rounded-full w-60 md:w-80 h-60 md:h-80 relative overflow-hidden mt-10 md:mt-20">
        <Image src={ProfilePicture} alt="profile_pic" objectFit="cover" />
      </div>
    </div>
  );
};

export default HeroSection;
