"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ParticlesBackground from "@/app/components/ParticlesBackground";
import Head from "next/head";

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

      <main className="bg-white dark:bg-gray-900 px-4 md:px-8">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <section className="min-h-screen">
          <div className="max-w-4xl mx-auto py-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl py-2 font-medium mb-6">
                <span class="text-blue-400">Life at theScore</span>{" "}<br/>
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
              <div className="max-w-3xl mx-auto text-left text-gray-800 dark:text-gray-300">
                <p className="mb-4 italic">
                  For my second work term, I returned back to theScore. However,
                  this time I was a Software Developer on the Promotions Team!
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
};

export default TheScoreDev;
