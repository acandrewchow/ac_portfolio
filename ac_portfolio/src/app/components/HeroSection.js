import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePicture from "../../../public/profile_pic_banff.jpg";
import { aboutData } from "../data/heroSection";
import { skillsData } from "../data/skillsData";
import { experienceData } from "../data/experienceData";
import { FaBook, FaCode, FaUserNinja, FaMountain } from "react-icons/fa";

const funFacts = [
  {
    icon: FaCode,
    title: "I can type up to 200 words per minute",
  },
  {
    icon: FaUserNinja,
    title: "I have a Black Belt in Tae Kwon Do",
  },
  {
    icon: FaMountain,
    title: "Love hiking and outdoor adventures",
  },
  {
    icon: FaBook,
    title: "Passion for teaching students",
  },
];

const HeroSection = () => {
  return (
    <div
      id="About"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative space-y-6"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Animated gradient border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-30 animate-pulse" />
              <div className="relative rounded-2xl overflow-hidden bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-2xl border border-white/20 dark:border-zinc-700/20">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src={ProfilePicture}
                    alt="profile_pic"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
            </div>

            {/* Fun Facts Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl mt-12 font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient">
                Fun Facts
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={fact.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    className="group p-4 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-zinc-700/20"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <fact.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {fact.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient"
              >
                Hello, I'm Andrew
              </motion.h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                {aboutData.map((paragraph, index) => (
                  <motion.p
                    key={paragraph.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className="leading-relaxed hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {paragraph.text}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pt-8"
            >
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient">
                Experience
              </h3>
              <div className="space-y-6">
                {experienceData.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                    className="group p-6 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-zinc-700/20"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <experience.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {experience.role}
                          </h4>
                          <div className="flex flex-col items-start sm:items-end">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {experience.period}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {experience.location}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                          {experience.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              whileHover={{ scale: 1.05 }}
                              className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pt-8"
            >
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group p-4 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-zinc-700/20"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
