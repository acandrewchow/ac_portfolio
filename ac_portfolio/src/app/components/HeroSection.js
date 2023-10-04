import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ProfilePicture from "../../../public/profile_pic.png";
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
        <h2 className="text-4xl md:text-5xl py-2 font-medium">
          <span class="text-blue-400">Hello,</span>{" "}
          <span class="text-teal-400">I'm Andrew!</span>
        </h2>

        {/* <h3 className="text-xl md:text-3xl py-2 text-yellow-400 flex justify-center items-center">
          <Type />
        </h3> */}

        <div className="mx-auto rounded-full w-60 md:w-80 h-60 md:h-80 overflow-hidden mt-10 md:mt-15 mb-10">
          <Image src={ProfilePicture} alt="profile_pic" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-xl text-center py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-2xl">
          I'm Andrew, a Software Engineering student at the University of Guelph
          who loves to solve problems! I have a passion for building new
          products and applications through the world of technology.
        </p>

        <p className="text-xl text-center py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-2xl">
          Most recently, I interned at theScore, where I developed features for
          the Promotions team. During my internship, I had the opportunity to
          work with Elixir and Phoenix, contributing to the various microservices
          within theScoreBet
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <p className="text-xl text-center py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-2xl">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col md:flex-row md:justify-center md:space-x-6"
      >
        <div className="max-w-md">
          <div className="bg-teal-100 dark:bg-blue-700 p-4 rounded-full my-4 flex items-center justify-center md:justify-start">
            <div className="rounded-full bg-white dark:bg-gray-800 p-8">
              <h4 className="text-xl md:text-2xl py-6 text-black font-medium dark:text-white">
                🧑‍💻 What I'm up to at the moment
              </h4>
              <ul className="list-none list-inside">
                <li className="text-gray-800 dark:text-white">
                  🚀 Exploring new frameworks & technologies
                </li>
                <li className="text-gray-800 dark:text-white">
                  🚢 Learning about product management
                </li>
                <li className="text-gray-800 dark:text-white">
                  📸 Enhancing my photography skills
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-md">
          <div className="bg-teal-100 dark:bg-blue-700 p-4 rounded-lg my-10">
            <h4 className="text-xl md:text-2xl py-2 text-black font-medium dark:text-white">
              Fun Facts! 🎉
            </h4>
            <ul className="list-none list-inside">
              <li className="text-gray-800 dark:text-white">
                🥋 I have a Black Belt in Tae Kwon Do
              </li>
              <li className="text-gray-800 dark:text-white">
                💻 I can type more than 200+ words per minute
              </li>
              <li className="text-gray-800 dark:text-white">
                🐶 My favorite dogs are Pomskies
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="text-3xl md:text-3xl flex justify-center gap-6 py-3 text-gray-600 dark:text-gray-400">
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
          <ResumeLink />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
