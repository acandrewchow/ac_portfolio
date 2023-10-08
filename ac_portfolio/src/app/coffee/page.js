"use client";
import { useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

const CoffeeTracker = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const coffeeData = [
    {
      image: "/coffee1.jpg",
      location: "Cafe A",
      cost: 4.99,
      item: "Latte",
      rating: 4.5,
    },
    {
      image: "/coffee2.jpg",
      location: "Cafe B",
      cost: 3.49,
      item: "Espresso",
      rating: 5,
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Chow's Gallery</title>
        <meta name="description" content="Trying all sorts of coffee!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground darkMode={darkMode} />
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="container mx-auto py-4 p-4">
            <section className="bg-white dark:bg-gray-900 text-white py-16">
              <div className="container mx-auto text-center">
                <h1 className="text-black dark:text-white text-4xl font-semibold mb-4">
                  Welcome to My Coffee Tracker
                </h1>
                <p className="text-black dark:text-white text-lg mb-4">
                  As a coffee connoisseur, I enjoy trying all sorts of coffee,
                  especially iced lattes! Here's a collection of all of coffees
                  I have tried at local cafes.
                </p>
              </div>
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {coffeeData.map((coffee, index) => (
                <CoffeeCard key={index} {...coffee} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer darkMode={darkMode} />
      <BackToTopButton />
    </div>
  );
};

export default CoffeeTracker;
