"use client";
import React from "react";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { BsLink, BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Head from "next/head";
import Link from "next/link";

const PromotionsTracker = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        {" "}
        <title>theScore - QA</title>
        <meta name="description" content="TSB Promotions Tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground darkMode={darkMode} />

      <main className="bg-white dark:bg-gray-900 px-4 md:px-8">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="max-w-4xl mx-auto py-8">
            <h1
              className={`text-4xl font-extrabold mb-4 text-center ${
                darkMode ? "text-yellow-400" : "text-blue-500"
              }`}
            >
              🏆 Promotions Tracker
            </h1>

            <h1
              className={`text-4xl font-extrabold mb-12 text-center ${
                darkMode ? "text-blue-400" : "text-yellow-500"
              }`}
            >
              theScore MVP (Fall 2022) 🚀
            </h1>

            <div className="max-w-full mb-8 mt-8 flex flex-col md:flex-row justify-center gap-28">
              <div className="w-full md:w-1/2 max-w-full">
                <Image
                  src="/images/projects/promotions_tracker_one.png"
                  alt="theScoreBet App"
                  width={375}
                  height={10}
                />
                <p className="text-center mt-4 mb-12 text-gray-600 dark:text-gray-300 italic">
                  Promotions Tracker - users can view promotions they are
                  participating in
                </p>

                <Image
                  src="/images/projects/promotions_tracker_two.png"
                  alt="theScoreBet App"
                  width={375}
                  height={10}
                />

                <p className="text-center mt-4 text-gray-600 dark:text-gray-300 italic">
                  Promotions Tracker - displays the actions that are required to
                  complete
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="max-w-3xl mx-auto text-left text-gray-800 dark:text-gray-300">
                  <h3 className="text-xl font-semibold mt-4 mb-2">
                    🏅 Introduction to Promotions
                  </h3>
                  <p className="mb-8">
                    Promotions are marketing campaigns that allow users to
                    participate and receive awards for completing specific
                    actions. They play a critical role in driving user
                    engagement and activation.
                  </p>
                  <ul>
                    <li>i.e Encouraging users to make their first deposit</li>
                    <li>i.e Promoting sports to users during the off-season</li>
                  </ul>
                  <h3 className="text-xl font-semibold mt-8 mb-2">
                    📦 Product Overview
                  </h3>
                  <p className="mb-8">
                    The Promotions Tracker is a product feature within
                    theScoreBet that keeps track of user promotions. The goal of
                    the promotions tracker is to provide patrons the opportunity
                    to keep track of their progression for each unique promotion
                    at a given time.
                  </p>

                  <p className="mb-8">
                    <strong>Goal:</strong> To increase user activation and
                    retention rate for theScoreBet
                  </p>
                  <p className="mb-8">
                    <strong>Teammates:</strong> Prabhjee Singh, Parth Modi,
                    Austin Go
                  </p>
                  <h3 className="text-xl font-semibold mt-8 mb-2">
                    🧑‍💻 User Problem
                  </h3>
                  <p>
                    Promotions can vary in complexity, depending on the actions
                    and steps that are required. As a result, this can cause
                    confusion to users which may drive them away from using the
                    feature. Similarly, customer service will receive a lot of
                    requests for a paticular promotion if the user has trouble
                    completing it.
                  </p>

                  <h3 className="text-xl font-semibold mt-8 mb-2">
                    🔎 User Research
                  </h3>
                  <p className="mb-8">
                    Here are a couple of requests that CX received about
                    promotional content
                  </p>
                  <li className="italic mb-8">
                    “Patron is upset that the promo was awarded for their $10
                    deposit & not their $275 one when they had no idea that they
                    were eligible for this promo earlier”
                  </li>
                  <li className="italic">
                    “Patron wanted to know if they qualify for this promotion,
                    they made a wager but the promotion is still active in their
                    account”
                  </li>

                  <h3 className="text-xl font-semibold mt-8 mb-2">
                    {" "}
                    📚 Solution
                  </h3>
                  <p className="mb-2">
                    Promotions tracker that helps track user progression for
                    each active promotion a user is participating in
                  </p>

                  <li>
                    Lists promotions that are <strong>in-progress</strong>
                  </li>
                  <li>
                    Displays <strong>actions</strong> that are required
                  </li>

                  <h3 className="text-xl font-semibold mt-8 mb-2">
                    👏 Success Factors
                  </h3>
                  <p className="mb-2">
                    Once the product is released, we can keep track of the
                    impact using several key performance indicators, including:
                  </p>
                  <li>
                    Users' Activation and Retention rate, including the % of
                    users that opt-in to promotions
                  </li>
                  <li># and % of users that complete promotions</li>
                  <li>
                    # of promotion related requests that customer service
                    receives
                  </li>
                  <h3 className="text-xl font-semibold mt-8 mb-2">
                    🍎 Lessons Learned
                  </h3>
                  <li>
                    Understanding user requirements, design and product scoping
                  </li>
                  <li>
                    Building a product to align with business needs and goals
                  </li>

                  <h3 className="text-xl font-semibold mt-8 mb-2">
                    <Link
                      href="https://www.linkedin.com/posts/thescore_early-talent-fall-presentation-day-ugcPost-7001619551599677440-6ETn?utm_source=share&utm_medium=member_desktop"
                      className="flex items-center mt-12"
                    >
                      Click here for more information
                      <BsLinkedin
                        style={{ fontSize: "1.5em", marginLeft: "0.5em" }}
                      />
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
};

export default PromotionsTracker;
