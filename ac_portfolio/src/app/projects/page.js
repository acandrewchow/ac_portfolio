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
        <section className="container mx-auto p-4">
          <div
            id="Projects"
            className="p-6 md:p-10 py-10 bg-white dark:bg-zinc-900"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl font-firacode text-center text-gray-900 dark:text-white mb-8">
                Projects
              </h2>
              <div className="flex flex-col items-center gap-8">
                {projectsData.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * project.id }}
                    className="bg-zinc-200 dark:bg-zinc-800 rounded-2xl p-6 max-w-xl w-full relative shadow-md"
                  >
                    <h3 className="text-xl text-gray-900 dark:text-white font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-zinc-300 dark:bg-zinc-700 text-gray-800 dark:text-gray-300 text-xs px-2 mb-4 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition"
                      >
                        <FaGithub size={24} />
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
