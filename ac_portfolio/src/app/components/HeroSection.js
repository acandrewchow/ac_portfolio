import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePicture from "../../../public/profile_pic_banff.jpg";
import { aboutData } from "../data/heroSection";
import { skillsData } from "../data/skillsData";
import { experienceData } from "../data/experienceData";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = () => {
  // This state would be controlled by the main navbar's scrollspy
  const [activeSection, setActiveSection] = useState("about");

  // This would be replaced by scrollspy logic in the main component
  // Just for demo purposes - in a real implementation, this would be controlled by the navbar
  useEffect(() => {
    // Simulate scrollspy by changing sections every few seconds
    const timer = setTimeout(() => {
      setActiveSection((prev) => {
        if (prev === "about") return "experience";
        if (prev === "experience") return "skills";
        return "about";
      });
    }, 10000); // Change section every 10 seconds for demo

    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div
      id="About"
      className="relative min-h-screen bg-zinc-900 font-sans"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-zinc-800/30 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-zinc-800/20 -z-10" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left column - Profile */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="sticky top-24">
              <div className="relative mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-zinc-800/50 rounded-2xl blur-xl"
                />
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={ProfilePicture}
                    alt="Andrew Chow"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-zinc-800/50 -z-10" />
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 lg:col-span-8"
          >
            {/* All sections are rendered, with appropriate IDs for scrollspy */}
            <div className="space-y-24">
              {/* About Section */}
              <motion.div
                id="about"
                className="space-y-12"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-light text-zinc-100 inline-flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-blue-500"></span>
                    About Me
                  </h2>
                  <div className="space-y-6">
                    {aboutData.map((paragraph, index) => (
                      <motion.p
                        key={paragraph.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                        className="text-gray-300 leading-relaxed"
                      >
                        {paragraph.text}
                      </motion.p>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-6 border border-zinc-700 bg-zinc-800/50 backdrop-blur-sm rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-zinc-700/70 rounded-lg">
                        <FaGraduationCap className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-medium text-zinc-100">Education</h3>
                    </div>
                    <p className="text-gray-300">Bachelor of Computing, Software Engineering (Co-op)</p>
                    <p className="text-gray-500 text-sm">University of Guelph, 2020-2025</p>
                  </div>
                  <div className="p-6 border border-zinc-700 bg-zinc-800/50 backdrop-blur-sm rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-zinc-700/70 rounded-lg">
                        <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-medium text-zinc-100">Location</h3>
                    </div>
                    <p className="text-gray-300">Toronto, ON</p>
                    <p className="text-gray-500 text-sm">Canada</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Experience Section */}
              <motion.div
                id="experience"
                className="space-y-12"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-light text-zinc-100 inline-flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-blue-500"></span>
                    Experience
                  </h2>
                </div>
                
                <div className="space-y-12">
                  {experienceData.map((experience, index) => (
                    <motion.div
                      key={experience.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                        <div className="md:w-1/4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-zinc-700/70 rounded-lg">
                              <experience.icon className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-sm text-gray-400">
                              {experience.period}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm">
                            {experience.location}
                          </p>
                        </div>
                        
                        <div className="md:w-3/4">
                          <h3 className="text-xl font-medium text-zinc-100 mb-1">
                            {experience.role}
                          </h3>
                          <p className="text-blue-400 mb-3">
                            {experience.company}
                          </p>
                          <p className="text-gray-400 mb-4">
                            {experience.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 text-xs bg-zinc-700/70 text-blue-400 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {index < experienceData.length - 1 && (
                        <div className="w-full h-[1px] bg-zinc-700 my-12" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Skills Section */}
              <motion.div
                id="skills"
                className="space-y-12"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl font-light text-zinc-100 inline-flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-blue-500"></span>
                    Skills & Technologies
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8">
                  {skillsData.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group flex items-center gap-3"
                    >
                      <div className="p-2 bg-zinc-700/70 rounded-lg">
                        <skill.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
