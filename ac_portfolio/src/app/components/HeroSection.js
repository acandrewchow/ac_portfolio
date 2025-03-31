import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePicture from "../../../public/profile_pic_banff.jpg";
import { aboutData } from "../data/heroSection";
import { skillsData } from "../data/skillsData";

const HeroSection = () => {
  return (
    <div
      id="About"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-900 opacity-50" />

      <div className="relative max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:-mt-96"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Animated gradient border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-30 animate-pulse" />
              <div className="relative rounded-2xl overflow-hidden bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-2xl border border-white/20 dark:border-zinc-700/20">
                <Image
                  src={ProfilePicture}
                  alt="profile_pic"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
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
