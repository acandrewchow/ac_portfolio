"use client"
import React, { useState } from "react";
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

export default function GalleryHome() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const photos = [
    "/images/gallery_photos/flower.jpg",
    "/images/gallery_photos/lights.jpg",
    "/images/gallery_photos/squirrel.jpg",
    "/images/gallery_photos/nyc.jpg",
    "/images/gallery_photos/leafs.jpg",
    "/images/gallery_photos/park.jpg",
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Chow's Gallery</title>
        <meta name="description" content="My place where I capture moments!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground darkMode={darkMode} />
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <section className="container mx-auto p-4">
            <h2 className="text-black text-2xl font-semibold mb-4 p-4 text-center dark:text-white">Capturing the moments!</h2>
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
