import React from 'react';
import Image from 'next/image';

const skillsData = [
  { name: 'HTML', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
  { name: 'CSS', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
  { name: 'JavaScript', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg'},
  { name: 'C', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'},
  { name: 'React', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'},
  { name: 'Java', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg'},
  { name: 'Node JS', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'},
  { name: 'Elixir', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original-wordmark.svg'},
  { name: 'Phoenix', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original-wordmark.svg'},
  { name: 'SQLite', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg'},
  { name: 'PostgreSQL', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg'},
  { name: 'Figma', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'},
];

const SkillsSection = () => {
    return (
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center py-1 dark:text-white mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8"> {/* Use gap utility class for spacing */}
            {skillsData.map(skill => (
              <div key={skill.name} className="flex flex-col items-center p-4 border-2 border-white-100 rounded-lg transition-transform hover:scale-105">
                <Image src={skill.imageSrc} alt={skill.name} width={100} height={100} />
                <p className="text-gray-800 dark:text-gray-200 text-sm mt-2"></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  


