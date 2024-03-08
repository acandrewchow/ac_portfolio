import React, { useState } from "react";
import { motion } from "framer-motion";

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

const EducationSection = ({ darkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    if (hoveredIndex !== null) {
      return;
    }
    setHoveredIndex(index);
  };

  return (
    <section
      id="Education"
      className={`py-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl text-center font-firacode font-semibold mb-8 ${darkMode ? "text-white" : "text-gray-800"
            }`}
        >
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-lg overflow-hidden shadow-md mb-8`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            >
              <img
                src={edu.institutionLogo}
                alt={`${edu.institutionName} Logo`}
                layout="responsive"
                width={100}
                height={100}
                className="w-full h-full object-cover transition-opacity duration-300"
                style={{ height: "100%" }}
              />
              {hoveredIndex === index && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-start justify-end text-white opacity-0 transition-opacity duration-300 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      {edu.institutionName}
                    </h3>
                    <p className="text-base">{edu.degree}</p>
                    <p className="text-base">{edu.date}</p>
                    <p className="text-base">{edu.description}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
