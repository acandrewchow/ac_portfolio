import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePicture from "../../../public/profile_pic.jpg";

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

        <div className="mx-auto rounded-full w-60 md:w-100 h-90 md:h-100 overflow-hidden mt-10 md:mt-15 mb-10">
          <Image src={ProfilePicture} alt="profile_pic" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-left font-firacode leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-lg mb-8">
          I'm Andrew, a Software Engineering student at the University of
          Guelph. Passionate about business, technology and design, I thrive on exploring
          the intersections between these fields within software development and product.
        </p>

        <p className="text-left font-firacode leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-lg">
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
    </div>
  );
};

export default HeroSection;
