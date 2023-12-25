import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ProfilePicture from "../../../public/profile_pic.jpg";
import Link from "next/link";
import Type from "./Type";
import ResumeLink from "./ResumeLink";

const HeroSection = () => {
  return (
    <div id="About" className="text-center p-6 md:p-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-3xl font-firacode md:text-5xl font-medium">
          <span class="dark:text-white text-black">Hello,</span>{" "}
          <span class="dark:text-white text-black">I'm Andrew</span>
        </h2>

        {/* <h3 className="text-xl md:text-3xl py-2 text-yellow-400 flex justify-center items-center">
          <Type />
        </h3> */}

        <div className="mx-auto rounded-full w-60 md:w-100 h-90 md:h-100 overflow-hidden mt-10 md:mt-15 mb-10">
          <Image src={ProfilePicture} alt="profile_pic" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-left font-firacode leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-lg">
          I'm Andrew, a Software Engineering student at the University of
          Guelph. I have a passion for building innovative products designed to
          deliver value to customers. During my free time, I enjoy going to the
          gym, taking photos and teaching other students programming concepts.
        </p>

        <p className="text-left font-firacode py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-lg">
          This Winter, I am interning at theScore as a Software Developer where
          I will continue building new features for theScoreBet/ESPN Bet within
          the Promotions Team.
        </p>

        <p className="text-left font-firacode leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-lg mb-8">
          If you're interested in learning more about me, feel free to read my{" "}
          <a
            href="/blog"
            target="_blank"
            className="text-blue-700 dark:text-blue-200"
          >
            {" "}
            personal blog
          </a>{" "}
          where I document my adventures in the world of software!
        </p>
      </motion.div>

      <div className="text-3xl md:text-5xl flex justify-center gap-6 text-gray-600 dark:text-gray-400">
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
      </div>
    </div>
  );
};

export default HeroSection;
