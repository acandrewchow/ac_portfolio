"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Head from "next/head";
import PipeOperatorExample from "@/app/components/PipeOperatorExample";
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

      <main className="bg-white dark:bg-gray-900 px-4 md:px-20 lg:px-40">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <section className="min-h-screen">
          <div className="max-w-4xl mx-auto py-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl py-2 font-medium mb-6">
                <span class="text-blue-400">Life at theScore</span> <br />
                <span class="text-yellow-400">Software Developer</span>
              </h2>

              <p
                className={`mb-2 ${darkMode ? "text-white" : "text-black-600"}`}
              >
                August 2023
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
                    For my second work term, I returned back to theScore.
                    However, this time I was a Software Developer on the
                    Promotions Team!
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
                  What is the Promotions Team?
                </h3>
                <p className="mb-4">
                  The Promotions team at theScore is responsible for creating
                  marketing campaigns that allow users to participate and
                  receive awards for completing user actions. Each promotion can
                  contain a set of rules that define an audience, as well as the
                  type of action(s) required.
                </p>
                <p className="mb-4">Example:</p>
                <li>User X bets Y to receive a $Z Bonus Bet</li>
                <li>User X registers to receive $Y Cash Back</li>

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
                <p className="mb-4">
                  The main tech-stack at theScore is built on Elixir & Phoenix.{" "}
                  <a
                    href="https://elixir-lang.org/"
                    target="_blank"
                    className="text-blue-400"
                  >
                    Elixir
                  </a>{" "}
                  is a functional programming language that runs on the Erlang
                  virtual machine (BEAM) and is designed for building highly
                  scalable, fault-tolerant, and distributed applications.
                  Similarly, it pairs well for systems that need to handle a
                  large number of concurrent users and processes, which is what
                  theScoreBet excels at. On the other hand,
                  <a
                    href="https://www.phoenixframework.org/"
                    target="_blank"
                    className="text-blue-400"
                  >
                    {" "}
                    Phoenix
                  </a>{" "}
                  is a web framework written in Elixir that builds web
                  applications. Some cool things about Phoenix include channels,
                  websockets and LiveViews, which is a feature that allows
                  developers to build real-time interactive user interfaces with
                  server-rendered HTML templates and minimal JavaScript!
                </p>

                <p className="mb-8">
                  One of the cool things I learned about Elixir these past
                  months is the pipe operator! <strong>&#124;&gt;</strong> The
                  pipe operator allows you to chain function calls making the
                  code more clear and readable.
                </p>
                <PipeOperatorExample />

                <h3 className="text-xl font-semibold mt-12 mb-4">
                  💬 Communication
                </h3>
                <p className="mb-4">
                  As a service team, communicating with other backend services
                  is important. In this regard, we rely on{" "}
                  <a
                    href="https://grpc.io/docs/"
                    target="_blank"
                    className="text-blue-400"
                  >
                    gRPC
                  </a>{" "}
                  (Google Remote Procedure Call) protocols to transmit
                  information between different services. Leveraging gRPC, we
                  can exchange data and execute remote procedures across various
                  services, enhancing the overall reliability and performance of
                  our distributed system. Similarly, we use{" "}
                  <a
                    href="https://kafka.apache.org/"
                    target="_blank"
                    className="text-blue-400"
                  >
                    Kafka
                  </a>{" "}
                  as our message publishing system to consume various types of
                  messages that can be sent via gRPC.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  📚 Learning Goals
                </h3>
                <p className="mb-4">
                  Here are a couple of goals I wanted to accomplish over the
                  next 4 months at theScore
                </p>
                <ul class="list-none">
                  <li class="flex items-start">
                    <span class="mr-2 text-primary">&#8226;</span>
                    Learn new languages and tools: Elixir, Phoenix, gRPC, Kafka,
                    etc
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2 text-primary">&#8226;</span>
                    Contribute! Building new features and products to deliver to
                    users
                  </li>
                  <li class="flex items-start">
                    <span class="mr-2 text-primary">&#8226;</span>
                    Understand system architecture and design at a technical
                    level
                  </li>
                </ul>
                <h3 className="text-xl font-semibold mt-8 mb-4">
                  🎒 My Experience
                </h3>
                <p className="mb-4">
                  During the first couple of weeks, I spent the time onboarding,
                  configuring my personal development environment, reading
                  documentation and asking questions. Pushkar, my onboarding
                  buddy helped me with my first couple of tickets. At first, it
                  was overwhelming jumping into the code base for the first
                  time. My previous QA experience had helped me a lot as I
                  already had a solid understanding of the product. To me, it
                  was more of a puzzle to solve where I needed to put the pieces
                  together. In the end, I was able to open my first pull
                  request! Safe to say, things went well as staging was still
                  in-tact.
                </p>

                <p className="mb-4">
                  After the first couple of weeks, I was getting the hang of
                  everything. I had the opportunity to work on various features,
                  including optimizing one of our gRPC endpoints that we
                  support. Futhermore, I had the chance to build UI components
                  using Phoenix LiveView! One of the things that I love the most
                  about being a developer is being able to make an impact by
                  delivering products to customers. It's extremely rewarding
                  knowing that my work will impact many users around the world.
                </p>

                <p className="mb-4">
                  Near the end of my work term, I had the opportunity to
                  participate in theScore's Summer 2023 Co-op{" "}
                  <a
                    href="https://www.linkedin.com/posts/thescore_co-op-hackathon-summer-2023-activity-7095410718916653057-Cf9E?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                    className="text-blue-400"
                  >
                    Hackathon
                  </a>
                  . My team and I decided to build an AI feature that would
                  recommend bets to users based on their betting history. To do
                  this, we created a recommendation engine using collaborative
                  based filtering and trained a machine learning model with
                  available markets and bets. In the end, it was really fun and
                  a great experience as we presented our product to the Sr.
                  Leadership team! Shoutout to my team, for the amazing work and
                  effort that was put into the Hackathon.
                </p>

                <div className="flex justify-center">
                  <div className="max-w-xl max-h-xl">
                    <Image
                      src="/images/blog/hackathon_one.jpg"
                      alt="co-op hackathon"
                      layout="responsive"
                      width={450}
                      height={450}
                      className="mt-4 mb-4"
                    />
                  </div>
                </div>
                <div className="flex justify-center italic">
                  <span>Team 1: D-Generators</span>
                </div>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  📘 Reflection
                </h3>

                <p className="mb-4">
                  Over the last 4 months, my journey as a software developer has
                  been awesome. I was able to develop new features, collaborate
                  with team members, network with others, and learn new
                  technical skills and best coding practices. As such, I'm
                  excited what lies ahead as I continue to grow my career in
                  software development. Cheers to the next adventure. 🍻
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">
                  🎖️ Acknowledgements
                </h3>
                <ul>
                  <li className="mb-2">
                    🏆 Special thanks to <strong>Pushkar</strong> and{" "}
                    <strong>Hughie</strong> for being great mentors, leaders who
                    provided me with feedback and guidance
                  </li>
                  <li className="mb-2">
                    🏆 Shoutout to everyone on the <strong>Promotions</strong>{" "}
                    team, it's been a pleasure working with all of you again!
                  </li>
                  <li className="mb-2">
                    🏆 Thanks to <strong>Michelle</strong> for hosting all of
                    the co-op events, hackathons and activites throughout the
                    term
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Image
                    src="/images/blog/hackathon_two.jpg"
                    alt="co-op students"
                    layout="responsive"
                    width={750}
                    height={750}
                    className="mt-4 mb-4"
                  />
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
