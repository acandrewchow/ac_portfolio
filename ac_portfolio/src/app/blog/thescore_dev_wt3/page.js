"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Head from "next/head";
import BackToTopButton from "@/app/components/BackToTopButton";

const skillsData = [
  {
    name: "Elixir",
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original-wordmark.svg",
  },
  {
    name: "Phoenix",
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "Apache Kafka",
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg",
  },
  {
    name: "GraphQl",
    imageSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg",
  },
];

const TheScoreDev = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>theScore - Software Developer</title>
        <meta name="description" content="Software Developer Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground darkMode={darkMode} />

      <main className="bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <section className="min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl py-2 font-medium mb-6">
                <span class="text-blue-400">Life at theScore</span> <br />
                <span class="text-yellow-400">Software Developer</span>
              </h2>

              <p
                className={`mb-2 ${darkMode ? "text-white" : "text-black-600"}`}
              >
                Winter 2024
              </p>
              <p
                className={`mb-10 ${
                  darkMode ? "text-white" : "text-black-600"
                }`}
              >
                By: Andrew Chow
              </p>

              <div className="flex justify-center">
                <div className="max-w-xl">
                  <Image
                    src="/images/blog/thescore_office.jpg"
                    alt="theScore Office in Toronto"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="mb-12"
                  />
                </div>
              </div>

              <div className="max-w-3xl mx-auto text-left text-gray-800 dark:text-gray-300">
                <div className="text-center">
                  <p className="mb-10 italic">
                    For my third work term, I returned back to theScore working
                    as a Software Developer on the Promotions team!
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-4 mb-4">
                  What is theScore?
                </h3>
                <p className="mb-12">
                  theScore, a wholly-owned subsidiary of PENN Entertainment,
                  empowers millions of sports fans through its digital media and
                  sports betting products. Its media app ‘theScore’ is one of
                  the most popular in North America, delivering fans highly
                  personalized live scores, news, stats, and betting information
                  from their favorite teams, leagues, and players. theScore’s
                  sports betting app ‘theScore Bet Sportsbook & Casino’ delivers
                  an immersive and holistic mobile sports betting and iCasino
                  experience. theScore Bet is currently live in the Company's
                  home province of Ontario. theScore also creates and
                  distributes innovative digital content through its web, social
                  and esports platforms.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-4">
                  💻 Technologies Used
                </h3>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                  {skillsData.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center p-2 sm:p-4 border-2 ${
                        darkMode
                          ? "border-gray-700 bg-gray-800"
                          : "border-white-100"
                      } rounded-lg transition-transform hover:scale-105 mb-10`}
                    >
                      <Image
                        src={skill.imageSrc}
                        alt={skill.name}
                        width={90}
                        height={90}
                      />
                      <p
                        className={`text-gray-800 ${
                          darkMode ? "dark:text-gray-200" : ""
                        } text-sm mt-2`}
                      ></p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  📚 Learning Goals
                </h3>

                <ul class="list-none">
                  <li class="flex items-start">
                    <span class="mr-2 text-primary">
                      &#8226; Continue learning new skills while contributing to
                      new product features
                    </span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2 text-primary">
                      &#8226; Start participating in code reviews
                    </span>
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2 text-primary">
                      &#8226; Seeking new leadership opportunities, learnings,
                      etc
                    </span>
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  🎒 My Experience
                </h3>
                <p className="mb-6">
                  I spent the first couple of weeks starting where I had left
                  off previously, getting caught up to speed with the projects
                  that were on-going.
                </p>

                <p className="mb-6">
                  For the next couple of months, the team was going to be
                  working on a large feature aimed towards driving user
                  engagement and acquisition. The product scope was fairly large
                  as the work required was across various services. I had the
                  opportunity to partake in the planning meetings, which
                  included the breakdown of various stories into their
                  respective components.
                </p>

                <p className="mb-6">
                  During my time, I had the chance to work on new components and
                  features that taught me new development skills. In addition, I
                  started participating in code reviews where I had the chance
                  to understand new coding conventions and code quality
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  📘 Reflection
                </h3>

                <p className="mb-6">
                  Overall, the last four months have been filled with new
                  learnings and excitement. I had the opportunity to work on new
                  projects, allowing me tackle new problems and partake in more
                  leadership opportunities. Since this is the end of my first 4
                  months, I'm going to be continue working on the same project
                  for the same 4 months till the end of my term in August. Stay
                  tuned for more!
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  🎖️ Highlights
                </h3>

                <div className="flex justify-center">
                  <Image
                    src="/images/blog/raptors_for_research.jpg"
                    alt="Raptors for Research Tournament"
                    layout="responsive"
                    width={750}
                    height={750}
                    className="mt-4 mb-4"
                  />
                </div>
                <div className="flex justify-center italic">
                  <span>Raptors for Research Charity Tournament</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
};

export default TheScoreDev;
