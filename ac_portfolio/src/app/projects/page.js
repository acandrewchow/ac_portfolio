"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import BackToTopButton from "../components/BackToTopButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../data/projectData";

export default function ProjectsHome() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <ParticlesBackground darkMode={darkMode} />
      <main className="bg-white dark:bg-zinc-900 min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <section className="container mx-auto px-4 py-16">
          <div id="Projects" className="relative">
            <div className="absolute inset-0 bg-gradient-to-br  dark:from-zinc-900 dark:to-zinc-900 opacity-50 rounded-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10 p-8 md:p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 mb-12">
                Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * project.id }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-zinc-700/20"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                      >
                        <span className="text-sm font-medium">
                          View Project
                        </span>
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}
