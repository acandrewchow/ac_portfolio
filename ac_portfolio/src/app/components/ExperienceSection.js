import React from 'react';

const ExperienceSection = ({ darkMode }) => {
    const experiences = [
        {
          companyLogo: '/experience/theScore.jpg', 
          role: 'Software Developer',
          companyName: 'theScore',
          date: 'May 2023 - August 2023',
          description: 'Software Developer on Promotions',
        },
        {
          companyLogo: '/experience/Guelph.jpg', 
          role: 'Teaching Assistant',
          companyName: 'University of Guelph',
          date: 'January 2023 - May 2023',
          description: 'Teaching Assistant for CIS*2170 - User Interface Design for Winter 2023',
        },
        {
          companyLogo: '/experience/theScore.jpg', 
          role: 'QA Analyst',
          companyName: 'Example Company 2',
          date: 'May 2022 - December 2022',
          description: 'QA Analyst on Promotions',
        },
      ];

      return (
        <section className={`py-10 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl text-center font-semibold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Experience
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg shadow-md mb-6 ${
                    darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'
                  }`}
                >
                  <div className="flex items-center">
                    <div className="w-1/2 pr-4">
                      <img
                        src={experience.companyLogo}
                        alt={`${experience.companyName} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-1/2">
                      <h3 className={`text-lg md:text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                        {experience.role}
                      </h3>
                      <p className={`text-gray-600 ${darkMode ? 'text-gray-400' : ''}`}>
                        {experience.companyName}
                      </p>
                      <p className={`text-gray-600 mt-2 ${darkMode ? 'text-gray-400' : ''}`}>
                        {experience.date}
                      </p>
                      <p className={`mt-4 text-sm md:text-base ${darkMode ? 'text-gray-400' : ''}`}>
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    export default ExperienceSection;

