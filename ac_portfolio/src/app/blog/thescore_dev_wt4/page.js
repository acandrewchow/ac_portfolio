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
                    For my last work term, I continued to work at theScore as a
                    Software Developer on the Promotions team.
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

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  🎒 My Experience
                </h3>
                <p className="mb-6"></p>

                <p className="mb-6"></p>

                <p className="mb-6"></p>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  📘 Reflection
                </h3>

                <p className="mb-6">
                  The last four months is definitely going down in the books as
                  one of the most unforgettable experiences I've had at
                  theScore. It's hard to believe that I've been working on the
                  same team for a total of 5 work terms (20 months), dating back
                  to May 2022.
                </p>

                <p className="mb-6">
                  When I look back, it's amazing to see how much I have grown
                  personally, professionally and all of the connections and memories
                  I've made with everybody at theScore.
                </p>

                {/* <h3 className="text-xl font-semibold mt-8 mb-4">
                  🎖️ Highlights
                </h3> */}

                {/* <div className="flex justify-center">
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
                </div> */}
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
