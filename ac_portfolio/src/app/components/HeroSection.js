import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePicture from "../../../public/profile_pic_banff.jpg";
import { aboutData } from "../data/heroSection";
import { skillsData } from "../data/skillsData";

const HeroSection = () => {
  return (
    <div id="About" className="p-6 md:p-10 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
      >
        <div className="flex justify-center">
          <div className="rounded-xl w-80 md:w-96 h-auto overflow-hidden shadow-lg">
            <Image src={ProfilePicture} alt="profile_pic" />
          </div>
        </div>

        <div className="self-start">
          <h2 className="text-xl md:text-4xl font-firacode font-medium mb-3 text-center md:text-left">
            <span className="dark:text-white text-black">Hello,</span>{" "}
            <span className="dark:text-white text-black">I'm Andrew</span>
          </h2>
          <div className="text-left text-md font-firacode text-gray-800 dark:text-gray-200">
            {aboutData.map((paragraph) => (
              <motion.p
                key={paragraph.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6"
              >
                {paragraph.text}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="mt-12 max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="dark:text-white text-black text-2xl font-firacode font-medium text-center mb-6"
        >
          Skills
        </motion.h3>
        <div className="grid grid-cols-4 md:grid-cols-4 gap-x-2 gap-y-3 justify-items-center items-center">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: skill.delay }}
              className="flex flex-col items-center"
            >
              <skill.icon className="w-10 h-10 text-gray-700 dark:text-gray-200" />
              <p className="dark:text-white text-black text-xs mt-1">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
