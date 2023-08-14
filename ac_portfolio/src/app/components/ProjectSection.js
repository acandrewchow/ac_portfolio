import Image from 'next/image';

const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1...',
      image: '/project1.jpg',
      tools: [
        { name: 'Tool 1', image: '/tool1.png' },
        { name: 'Tool 2', image: '/tool2.png' },
      ],
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2...',
      image: '/project2.jpg',
      tools: [
        { name: 'Tool 1', image: '/tool1.png' },
        { name: 'Tool 2', image: '/tool2.png' },
      ],
    },
  ];

  const ProjectSection = ({ darkMode }) => {
    return (
      <section className={`py-10 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl md:text-5xl text-center font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Projects
          </h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'} flex flex-col md:flex-row`}
              >
                <div className="md:w-1/3">
                  <Image
                    src={project.image}
                    alt={`${project.title} Image`}
                    width={300}
                    height={200}
                    objectFit="cover"
                    className="rounded-lg md:rounded-r-none md:rounded-l-lg"
                  />
                </div>
                <div className={`md:w-2/3 ${darkMode ? 'text-white' : 'text-gray-800'} flex flex-col justify-between px-4 py-2 md:py-0`}>
                  <div>
                    <h3 className={`text-xl md:text-2xl font-semibold mb-2`}>
                      {project.title}
                    </h3>
                    <p className={`text-gray-600 mb-4`}>
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`self-start mt-auto text-blue-500 ${darkMode ? 'hover:text-blue-300' : 'hover:text-blue-700'}`}
                    >
                      Learn More
                    </a>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Image
                        key={toolIndex}
                        src={tool.image}
                        alt={`${tool.name} Icon`}
                        width={30}
                        height={30}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default ProjectSection;
