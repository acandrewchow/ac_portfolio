import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePicture from "../../../public/profile_pic_banff.jpg";

const HeroSection = () => {
  return (
    <div id="About" className="text-center p-6 md:p-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-2xl font-firacode md:text-3xl font-medium">
          <span class="dark:text-white text-black">Hello,</span>{" "}
          <span class="dark:text-white text-black">I'm Andrew</span>
        </h2>

        <div className="mx-auto rounded-xl w-80 md:w-100 h-90 md:h-100 overflow-hidden mt-10 md:mt-15 mb-10">
          <Image src={ProfilePicture} alt="profile_pic" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="text-left font-firacode leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-md mb-8">
          <p className="mb-4">
            Software Engineering student at the University of Guelph with
            experience in developing scalable applications. My interests
            lie within software development and product management
          </p>
          <p className="mb-4">
            I was previously at theScore where I built promotional features in Elixir for over 5
            million users across theScore Bet and ESPN Bet platforms
          </p>
          <p className="mb-4">
            Right now I am currently interested in software and product 2025 Winter
            Internships, feel free to take a look at my resume{" "}
            <a href="resume.pdf" className="text-blue-500 hover:underline">
              here
            </a>
            
          </p>

          <p className="mb-4">
            I can be reached at {" "}
            <a
              href="mailto:ac.andrewchow@gmail.com"
              className="text-blue-500 hover:underline"
            >
              ac.andrewchow@gmail.com
            </a>{" "}
            if you want to chat :)
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
