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
    image: "/images/projects/tsb_logo.png",
    tools: [
      {
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
    link: "/projects/promotions_tracker",
  },
  {
    title: "Sports Betting Portfolio",
    description: "Web App that tracks a user's sports betting portfolio",
    image: "/images/projects/sports-portfolio.png",
    tools: [
      {
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      },
      {
        name: "Next.JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
      },
      {
        name: "Tailwind",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
    ],
    link: "https://github.com/acandrewchow/sports-betting-portfolio",
  },
  {
    title: "BetGenius",
    description:
      "A model that recommends betslips to users based on their betting hisory",
    image: "/images/projects/BetGenius.png",
    tools: [
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
      },
      {
        name: "Tensorflow",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
    link: "https://github.com/acandrewchow/BetGenius",
  },
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
          className={`text-4xl md:text-5xl text-center font-semibold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          My Work
        </h2>
        <div className={`${darkMode ? "bg-gray-900" : "text-gray-800"}`}>
          <div className="container mx-auto px-4 py-10">
            <div className="flex justify-center">
              <p
                className={`text-lg ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                🛠️ Here are some of the cool things that I have worked on
              </p>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-wrap -mx-4 ${
            darkMode ? "text-blue-400" : "text-gray-800"
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
