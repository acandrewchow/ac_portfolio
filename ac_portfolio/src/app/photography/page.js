"use client";
import React, { useState } from "react";
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { FaCamera, FaSearch } from "react-icons/fa";

export default function PhotographyHome() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const photos = [
    "/images/photography_photos/flower.jpg",
    "/images/photography_photos/lights.jpg",
    "/images/photography_photos/squirrel.jpg",
    "/images/photography_photos/nyc.jpg",
    "/images/photography_photos/leafs.jpg",
    "/images/photography_photos/park.jpg",
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Chow's Photography</title>
        <meta name="description" content="My place where I capture moments!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground darkMode={darkMode} />
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <section className="font-firacode container mx-auto p-4">
            <div className="text-center">
              <h2 className="text-lefttext-black text-3xl font-semibold mb-4 p-4 dark:text-white">
                My Gear
              </h2>
              <div className="text-black dark:text-white flex flex-col items-center text-xl">
                <div className="flex items-center">
                  <span className="mr-2">
                    <FaCamera />
                  </span>
                  <p>Sony a6100</p>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">
                    <FaSearch />
                  </span>
                  <p>Sony 16-50mm f/3.5-5.6</p>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photos.map((photos, index) => (
                <img
                  key={index}
                  src={photos}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              ))}
            </div>
          </section>
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}
