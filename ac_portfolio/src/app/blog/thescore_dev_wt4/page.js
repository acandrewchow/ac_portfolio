"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Head from "next/head";
import BackToTopButton from "@/app/components/BackToTopButton";
import Slideshow from "@/app/components/SlideShow";

const photos = [
  {
    src: "/images/blog/coop_2.jpg",
    caption: "Summer 2022 Co-op Project",
  },
  {
    src: "/images/blog/jayscare.jpg",
    caption: "Jays Care Foundation 2022",
  },
  {
    src: "/images/blog/coop_s2023.jpg",
    caption: "Summer 2023 Cohort",
  },
  {
    src: "/images/blog/hackathon_one.jpg",
    caption: "theScore Co-op Hackathon Summer 2023",
  },
  {
    src: "/images/blog/hackathon_two.jpg",
    caption: "theScore Co-op Hackathon Summer 2023",
  },
  {
    src: "/images/blog/coop_w2024.jpg",
    caption: "Winter 2024 Cohort",
  },
  {
    src: "/images/photography_photos/thescore/super_bowl.jpg",
    caption: "Super Bowl at theScore Winter 2024",
  },
  {
    src: "/images/photography_photos/thescore/raptors_for_research.jpg",
    caption: "Raptors for Research 2024",
  },
  {
    src: "/images/photography_photos/thescore/raptors_for_research_two.jpg",
    caption: "Raptors for Research 2024",
  },
  {
    src: "/images/photography_photos/thescore/coop.jpg",
    caption: "Summer 2024 Cohort",
  },
  {
    src: "/images/photography_photos/thescore/jays.jpg",
    caption: "PAM Jays Event",
  },
  {
    src: "/images/photography_photos/thescore/office.jpg",
    caption: "theScore Office",
  },
];

const skillsData = [
  {
    name: "Elixir",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original-wordmark.svg",
  },
  {
    name: "Phoenix",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/phoenix/phoenix-original-wordmark.svg",
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    name: "Apache Kafka",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg",
  },
  {
    name: "GraphQl",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg",
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

      <main className="bg-white dark:bg-zinc-900">
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
                January 2024 - August 2024
              </p>
              <p
                className={`mb-10 ${
                  darkMode ? "text-white" : "text-black-600"
                }`}
              >
                By: Andrew Chow
              </p>

              <div className="flex justify-center">
                <img
                  src="/images/photography_photos/thescore/office.jpg"
                  alt="theScore Office in Toronto"
                  class="mb-12 w-96"
                />
              </div>

              <div className="max-w-3xl mx-auto text-left text-gray-800 dark:text-gray-300">
                <div className="text-center">
                  <p className="mb-10 italic">
                    During my 4th and 5th work terms, I continued my journey
                    with theScore as a Software Developer on the Promotions
                    team.
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
                  What is the Promotions Service Responsible For?
                </h3>
                <p className="mb-4">
                  The Promotions service is responsible for granting awards to
                  users on theScoreBet and ESPN Bet platforms upon completing
                  dynamic marketing campaigns. Each promotional campaign
                  includes an audience of users that are available to
                  participate in the promotion, allowing patrons to complete
                  various steps by placing qualifying actions, including
                  deposits, bets and casino wagers.
                </p>

                <p className="mb-12">
                  TLDR: We design and implement reward-based experiences to
                  drive user engagement and acquisition across our platforms.
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
                          ? "border-zinc-600 bg-zinc-500"
                          : "border-white-100"
                      } rounded-lg transition-transform hover:scale-105 mb-10`}
                    >
                      <Image
                        src={skill.src}
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

                <p>
                  My goals for this term were to continue growing as a
                  developer, seeking out opportunities to push myself further
                  and take on new challenges.​
                </p>
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  🎒 My Experience
                </h3>
                <p className="mb-6">
                  Over the past 8 months, I’ve had the opportunity of
                  contributing to the largest project undertaken by the
                  Promotions team: the Refer-A-Friend program. Referrals are a
                  crucial component for any sportsbook, driving user engagement,
                  attracting new customers, and retaining existing ones. This
                  feature provides immense value to the business, highlighting
                  the importance of innovative promotional strategies.
                </p>

                <p className="mb-6">
                  The project was extensive, impacting multiple backend services
                  and requiring significant client-side changes, including new
                  user flows. I contributed to various aspects of the Referral
                  project, such as developing new APIs, services, and
                  asynchronous jobs. I also played a key role in triaging and
                  resolving various bugs.
                </p>

                <p className="mb-6">
                  After six months of hard work, we successfully launched the
                  product in early August. It was an amazing experience to see
                  this project come to life just in time for the 2024-2025 NFL
                  season, marking one of my first major product launches I had a
                  chance to witness.
                </p>

                <p className="mb-6"></p>
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  📘 Reflection
                </h3>
                <p className="mb-6">
                  The last 8 months have undoubtedly been some of the most
                  unforgettable of my time at theScore. It’s hard to believe
                  that I’ve had the privilege of working with the same
                  incredible team across 5 work terms, dating back to May 2022.
                </p>
                <p className="mb-14">
                  Looking back, it’s incredible to see how much I’ve grown
                  personally and professionally, and to reflect on all the
                  connections and memories I’ve made with everyone at theScore.
                  I couldn’t have done it without the support of the Promotions
                  team. This team truly felt like home, and I’m going to miss
                  everyone. Though this chapter is ending, I’m excited for the
                  next one to begin :)
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  🎖️ Acknowledgements
                </h3>
                <ul>
                  <li className="mb-2">
                    🏆 Special thanks to <strong>Hughie</strong> for being a
                    great leader and mentor throughout the term.
                  </li>
                  <li className="mb-2">
                    🏆 Thanks to <strong>Pushkar</strong> for being my day one
                    mentor, answering all my questions since the first line of
                    Elixir code I wrote :)
                  </li>
                  <li className="mb-2">
                    🏆 Shoutout to everyone on the <strong>Promotions</strong>{" "}
                    team, it's been a pleasure working with all of you again!
                  </li>
                  <li className="mb-12">
                    🏆 Thanks to <strong>Michelle</strong> and{" "}
                    <strong>Nadia</strong> for shaping the co-op culture and
                    hosting all of the co-op events and activites throughout the
                    term!
                  </li>
                </ul>
                <h3 className="text-xl text-center font-semibold mt-8 mb-8">
                  Highlights
                </h3>
                <Slideshow photos={photos} darkMode={darkMode} />
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
