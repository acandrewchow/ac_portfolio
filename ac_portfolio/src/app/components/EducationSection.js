import React from "react";
import { motion } from "framer-motion";

const EducationSection = ({ darkMode }) => {
  const education = [
    {
      institutionLogo: "/images/education/Guelph.jpg",
      degree: "Bachelor of Computing",
      institutionName: "University of Guelph",
      date: "September 2020 - May 2025",
      description: "Software Engineering (Co-op)",
    },
    {
      institutionLogo: "/images/education/Brock.jpg",
      degree: "Bachelor of Science, Bachelor of Education",
      institutionName: "Brock University",
      date: "September 2019 - April 2020",
      description: "Concurrent Education Intermediate/Senior",
    },
  ];

  return (
    <section
      id="Education"
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
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-lg overflow-hidden shadow-md mb-8 ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              <img
                src={edu.institutionLogo}
                alt={`${edu.institutionName} Logo`}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {edu.institutionName}
                </h3>
                <p className="text-lg">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.date}</p>
                <p className="mt-2 text-sm">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
