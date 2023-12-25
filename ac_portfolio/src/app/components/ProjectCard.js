// components/ProjectCard.js
import React from "react";
import Image from "next/image";

const ProjectCard = ({ project, darkMode }) => (
  <div
    className={`font-firacode mb-8 ${
      darkMode ? "bg-gray-800" : "bg-white"
    } rounded-lg shadow-md overflow-hidden md:flex transition-transform hover:scale-105`}
  >
    <div className="md:w-1/2">
      <Image
        src={project.image}
        alt={`${project.title} Image`}
        layout="responsive"
        width={600}
        height={400}
        objectFit="cover"
        className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
      />
    </div>
    <div
      className={`md:w-1/2 p-6 ${darkMode ? "text-white" : "text-gray-800"}`}
    >
      <h3 className={`text-xl md:text-2xl font-semibold mb-2`}>
        {project.title}
      </h3>
      <p className={`${darkMode ? "text-white" : "text-gray-800"} mb-4`}>
        {project.description}
      </p>
      <div className="flex items-center space-x-2">
        {project.tools.map((tool, toolIndex) => (
          <Image
            key={toolIndex}
            src={tool.image}
            alt={`${tool.name} Icon`}
            width={50}
            height={50}
          />
        ))}
      </div>
      <div className="mt-4">
        <a
          href={project.link}
          target="_blank"
          className={`text-blue-500 ${
            darkMode ? "hover:text-blue-300" : "hover:text-blue-700"
          }`}
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
