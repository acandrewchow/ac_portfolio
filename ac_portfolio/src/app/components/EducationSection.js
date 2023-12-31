import React from "react";
import Image from "next/image";

const EducationSection = ({ darkMode }) => {
  const education = [
    {
      institutionLogo: "/images/education/Guelph.jpg",
      degree: "Bachelor of Computing",
      institutionName: "University of Guelph",
      date: "September 2020 - May 2025 (Expected)",
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
        <div className="font-firacode grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg p-4 shadow-md mb-8 text-left ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            >
              <div className="mb-4">
                <Image
                  src={edu.institutionLogo}
                  alt={`${edu.institutionName} Logo`}
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
                  {edu.institutionName}
                </h3>
                <p className={`text-gray-600 ${darkMode ? "text-white" : ""}`}>
                  {edu.degree}
                </p>
                <p
                  className={`text-gray-600 mt-1 ${
                    darkMode ? "text-white" : ""
                  }`}
                >
                  {edu.date}
                </p>
                <p
                  className={`mt-4 text-base ${
                    darkMode ? "text-gray-400" : "text-gray-800"
                  }`}
                >
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
