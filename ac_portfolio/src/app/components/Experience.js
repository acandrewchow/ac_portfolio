import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Teaching Assistant",
      company: "University of Guelph",
      duration: "Jan 2023 - Present",
      description: [
        "CIS*2170 (W23) - User Interface Design",
        "CIS*1200 (F24) - Introduction to Computing",
        "CIS*1300 (F24) - Introduction to Programming",
      ],
      image: "../../images/misc/guelph.jpg", 
    },
    {
      role: "Software Developer Intern",
      company: "theScore",
      duration: "Jan 2024 - Aug 2024",
      description:
        "Core contributor on the Promotions team - Built the Refer-A-Friend program for theScoreBet and ESPN Bet Users",
      image: "../../images/misc/thescore.jpg",
    },
    {
      role: "Software Developer Intern",
      company: "theScore",
      duration: "May 2023 - Aug 2023",
      description:
        "Core contributor on the Promotions team - Developed a new playable award, Promotional Credits",
      image: "../../images/misc/thescore.jpg", 
    },
    {
      role: "QA Analyst Intern",
      company: "theScore",
      duration: "May 2022 - Dec 2022",
      description:
        "Contributed to the release of Single-Leg Grading, Parlay+ and Opt-in promotional features",
      image: "../../images/misc/thescore.jpg", 
    },
    {
      role: "Mentor",
      company: "Hackathons",
      duration: "",
      description: [
        "Providing mentorship for students at various Hackathons",
        "Deer Hacks III (2024)",
        "GDSC Hacks (2024)",
        "Hack the North (2024)",
      ],
      image: "../../images/misc/code.jpg", 
    },
  ];

  return (
    <div id="Experience" className="text-center p-6 md:p-10 py-10 bg-gray-100 dark:bg-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-2xl font-firacode md:text-3xl font-medium mb-8">
          <span className="dark:text-white text-black">Experience</span>
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center p-4 bg-white dark:bg-zinc-800 shadow-lg rounded-lg ${
                  index % 2 === 0 ? "md:justify-self-end" : "md:justify-self-start"
                }`}
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <img
                    src={experience.image}
                    alt={`${experience.company} logo`}
                    className="w-24 h-24 object-contain rounded-full border border-gray-300 dark:border-gray-600"
                  />
                </div>
                <div className="ml-4 text-left">
                  <h3 className="text-lg font-firacode font-semibold dark:text-white">
                    {experience.role} -{" "}
                    <span className="text-gray-500 dark:text-gray-400">{experience.company}</span>
                  </h3>
                  <p className="text-sm font-firacode text-gray-500 dark:text-gray-400 mb-2">
                    {experience.duration}
                  </p>
                  {Array.isArray(experience.description) ? (
                    <ul className="list-disc ml-6 font-firacode text-gray-800 dark:text-gray-300">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-firacode text-gray-800 dark:text-gray-300">
                      {experience.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;