import React from 'react';
import Image from 'next/image';

const skillsData = [
  { name: 'HTML', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' },
  { name: 'CSS', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' },
  { name: 'JavaScript', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg'},
  { name: 'C', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'},
  { name: 'React', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'},
  { name: 'Next JS', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'},
  { name: 'Java', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg'},
  { name: 'Node JS', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'},
  { name: 'Elixir', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original-wordmark.svg'},
  { name: 'Phoenix', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original-wordmark.svg'},
  { name: 'SQLite', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg'},
  { name: 'PostgreSQL', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg'},
  { name: 'Figma', imageSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'},
];

const SkillsSection = ({ darkMode }) => {
    return (
      <section className={`py-10 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl text-center py-1 ${darkMode ? 'text-white' : 'dark:text-white'} mb-8`}>Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {skillsData.map(skill => (
              <div
                key={skill.name}
                className={`flex flex-col items-center p-2 sm:p-4 border-2 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-white-100'} rounded-lg transition-transform hover:scale-105`}
              >
                <Image src={skill.imageSrc} alt={skill.name} width={80} height={80} /> 
                <p className={`text-gray-800 ${darkMode ? 'dark:text-gray-200' : ''} text-sm mt-2`}></p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  


