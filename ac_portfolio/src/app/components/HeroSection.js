import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePicture from "../../../public/profile_pic_banff.jpg";
import { aboutData } from "../data/heroSection";
import { skillsData } from "../data/skillsData";
import { experienceData } from "../data/experienceData";

const HeroSection = () => {
  return (
    <div
      id="About"
      className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-zinc-900 dark:to-zinc-800 opacity-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent dark:from-blue-400/10 opacity-0" />
      
      <div className="relative max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Column - Profile & About */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-2xl border border-white/20 dark:border-zinc-700/20"
              >
                <Image
                  src={ProfilePicture}
                  alt="Andrew Chow"
                  width={400}
                  height={400}
                  className="object-cover aspect-square"
                  priority
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient">
                Hello, I'm Andrew
              </h2>
              <div className="space-y-4 text-base text-gray-700 dark:text-gray-300">
                {aboutData.map((paragraph, index) => (
                  <motion.p
                    key={paragraph.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    className="leading-relaxed"
                  >
                    {paragraph.text}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Experience & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient">
                Experience
              </h3>
              <div className="space-y-6">
                {experienceData.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                    whileHover={{ scale: 1.01 }}
                    className="group p-6 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-zinc-700/20"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <experience.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <h4 className="text-base font-semibold text-gray-900 dark:text-white">
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
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          {experience.company}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.8 + skillIndex * 0.1 }}
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
              transition={{ duration: 0.5, delay: 1.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 animate-gradient">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group p-4 rounded-xl bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-zinc-700/20"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30"
                      >
                        <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
