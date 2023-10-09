import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ExperienceSection = ({ darkMode }) => {
  const experiences = [
    {
      companyLogo: "/images/experience/theScore.jpg",
      role: "Software Developer",
      companyName: "theScore",
      date: "May 2023 - August 2023",
      description:
        "theScore, a wholly-owned subsidiary of PENN Entertainment, empowers millions of sports fans through its digital media and sports betting products. Worked on the Promotions team for theScoreBet. A team responsible for creating dynamic marketing campaigns",
    },
    {
      companyLogo: "/images/experience/Guelph.jpg",
      role: "Teaching Assistant",
      companyName: "University of Guelph",
      date: "January 2023 - May 2023",
      description:
        "Teaching Assistant for CIS*2170 - User Interface Design for Winter 2023. Teaching students about UI/UX, Design practices and prototyping",
    },
    {
      companyLogo: "/images/experience/theScore.jpg",
      role: "QA Analyst",
      companyName: "theScore",
      date: "May 2022 - December 2022",
      description:
        "theScore, a wholly-owned subsidiary of PENN Entertainment, empowers millions of sports fans through its digital media and sports betting products. Worked on the Promotions team for theScoreBet. A team responsible for creating dynamic marketing campaigns",
    },
  ];

  return (
    <section
      id="Experience"
      className={`py-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl text-center font-semibold mb-8 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col rounded-lg p-4 shadow-md mb-8 text-left ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              <div className="mb-4">
                <Image
                  src={experience.companyLogo}
                  alt={`${experience.companyName} Logo`}
                  className="w-full h-auto object-contain"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {experience.role}
                </h3>
                <p className={`text-gray-600 ${darkMode ? "text-white" : ""}`}>
                  {experience.companyName}
                </p>
                <p
                  className={`text-gray-600 mt-1 ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  {experience.date}
                </p>
                <p
                  className={`mt-4 text-base ${
                    darkMode ? "text-gray-400" : "text-gray-800"
                  }`}
                >
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
