import Image from "next/image";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Molecule Visualizer",
    description:
      "Full-stack application that allows users manipulate molecules. Operations include: Uploading SDF Files, creating elements, displaying and rotating molecules",
    image: "/images/projects/MoleculeVisualizer.jpg",
    tools: [
      {
        name: "C",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "Javascript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
      },
      {
        name: "SQlite",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg",
      },
    ],
    link: "https://github.com/acandrewchow/Molecule-Viewer",
  },
  {
    title: "e-Portfolio",
    description:
      "Java Application that provides users a way to buy, sell, update, and search various investments in their portfolio",
    image: "/images/projects/ePortfolio.jpg",
    tools: [
      {
        name: "Java",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
      },
    ],
    link: "https://github.com/acandrewchow/ePortfolio",
  },
  {
    title: "Promotions Tracker",
    description:
      "Product Feature for theScoreBet, presented to Sr. Leadership during the Fall 2022 term",
    image: "/images/projects/s_bet.png",
    tools: [
      {
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
    link: "/projects/promotions_tracker",
  },
  // {
  //   title: "BetGenius",
  //   description: "Description of Project 3...",
  //   image: "/project3.jpg",
  //   tools: [
  //     {
  //       name: "Python",
  //       image:
  //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
  //     },
  //     {
  //       name: "Tensorflow",
  //       image:
  //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  //     },
  //     {
  //       name: "Figma",
  //       image:
  //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  //     },
  //   ],
  // },
];

const MyWork = ({ darkMode }) => {
  return (
    <section
      id="MyWork"
      className={`py-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl text-center font-semibold mb-8 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          My Work
        </h2>
        <div className={`${darkMode ? "bg-gray-900" : "text-gray-800"}`}>
          <div className="container mx-auto px-4 py-10">
            <p
              className={`text-lg ${darkMode ? "text-white" : "text-gray-800"}`}
            >
              🛠️ Here are some of the cool things that I've built!
            </p>
          </div>
        </div>
        <div
          className={`flex flex-wrap -mx-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 px-4 mb-8">
              <ProjectCard project={project} darkMode={darkMode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
