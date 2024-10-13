import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      title: "BetGenius",
      technologies: "Python, Tensorflow, Figma",
      description:
        "Machine learning model that leverages collaborative based filtering techniques to analyze a user’s betting history to accurately predict bets",
      githubLink: "https://github.com/acandrewchow/bet-genius",
    },
    {
      title: "Spotify API Wrapper",
      technologies: "Elixir, Spotify API",
      description:
        "Elixir application that interacts with the Spotify Web API, to support various requests i.e managing playlists, fetching user data, and many more",
      githubLink: "https://github.com/acandrewchow/spotify-api-wrapper",
    },
    {
      title: "Cannon House Listings Scraper",
      technologies: "Python, Streamlit, SQLite, Amazon EC2, Twilio",
      description:
        "Cron job that fetch new house listings hourly and notify users through SMS messaging.",
      githubLink: "https://github.com/acandrewchow/cannon-housing-scraper",
    },
    {
      title: "Molecule Visualizer",
      technologies: "C, Python, JavaScript, SQL, HTML/CSS, JavaScript, Swig",
      description:
        "Full-stack application that allows users to create, update, search and import molecular structures in a responsive web environment",
      githubLink: "https://github.com/acandrewchow/molecule-visualizer",
    },
    {
      title: "ePortfolio",
      technologies: "Java",
      description:
        "Application that allows users to organize their investments and stock through an interactive ePortfolio",
      githubLink: "https://github.com/acandrewchow/ePortfolio",
    },
    {
      title: "Course Scheduling System",
      technologies: "PHP, Python, JavaScript, Laravel",
      description:
        "Course scheduling system that allows students to search for courses at the University of Guelph.",
      githubLink: "https://github.com/acandrewchow/course-scheduling-system",
    },
  ];

  return (
    <div
      id="Projects"
      className="text-center p-6 md:p-10 py-10 bg-gray-100 dark:bg-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-2xl font-firacode md:text-3xl font-medium mb-8">
          <span className="dark:text-white text-black">Projects</span>
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col p-4 bg-white dark:bg-zinc-800 shadow-lg rounded-lg ${
                  index % 2 === 0
                    ? "md:justify-self-end"
                    : "md:justify-self-start"
                }`}
              >
                <div className="text-left">
                  <h3 className="text-lg font-firacode font-semibold dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm font-firacode text-gray-500 dark:text-gray-400 mb-2">
                    {project.technologies}
                  </p>
                  <p className="font-firacode text-gray-800 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 dark:text-blue-400 font-firacode"
                  >
                    <AiFillGithub size={32} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
