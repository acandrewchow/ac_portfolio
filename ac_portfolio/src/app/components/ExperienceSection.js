import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = ({ darkMode }) => {
  const experiences = [
    {
      companyLogo: "/images/experience/theScore.jpg",
      role: "Software Developer Intern",
      companyName: "theScore",
      date: "January 2024 - Present",
      description: "Building new features with Elixir!",
    },
    {
      companyLogo: "/images/experience/tutoring.jpg",
      role: "Tutor",
      companyName: "Self-employed",
      date: "Nov 2023 - Present",
      description:
        "Teaching students computer science and programming concepts",
    },
    {
      companyLogo: "/images/experience/theScore.jpg",
      role: "Software Developer Intern",
      companyName: "theScore",
      date: "May 2023 - August 2023",
      description: "",
    },
    {
      companyLogo: "/images/experience/Guelph.jpg",
      role: "Teaching Assistant",
      companyName: "University of Guelph",
      date: "January 2023 - May 2023",
      description:
        "Teaching Assistant for CIS*2170 - User Interface Design for Winter 2023",
    },
    {
      companyLogo: "/images/experience/theScore.jpg",
      role: "QA Analyst Intern",
      companyName: "theScore",
      date: "May 2022 - December 2022",
      description: "",
    },
  ];

  return (
    <section
      id="Experience"
      className={`py-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl text-center font-firacode font-semibold mb-8 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-lg overflow-hidden shadow-md mb-8 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              <img
                src={experience.companyLogo}
                alt={`${experience.companyName} Logo`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {experience.companyName}
                </h3>
                <p className="text-lg">{experience.role}</p>
                <p className="text-sm text-gray-600">{experience.date}</p>
                <p className="mt-2 text-sm">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
