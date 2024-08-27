"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { photos } from "../data/photos";

export default function GalleryHome() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage, setPhotosPerPage] = useState(20);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const updatePhotosPerPage = () => {
      if (window.innerWidth < 640) {
        setPhotosPerPage(5); // Mobile Devices
      } else if (window.innerWidth < 1024) {
        setPhotosPerPage(12); // Tablets
      } else {
        setPhotosPerPage(20); // Desktop
      }
    };

    updatePhotosPerPage();
    window.addEventListener("resize", updatePhotosPerPage);

    return () => window.removeEventListener("resize", updatePhotosPerPage);
  }, []);

  const filteredPhotos = selectedTags.length
    ? photos.filter((photo) =>
        selectedTags.every((tag) => photo.tags.includes(tag)),
      )
    : photos;

  const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = filteredPhotos.slice(
    indexOfFirstPhoto,
    indexOfLastPhoto,
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setCurrentPage(1);
  };

  const renderTags = () => {
    const allTags = Array.from(new Set(photos.flatMap((photo) => photo.tags)));
    return allTags.map((tag) => (
      <button
        key={tag}
        onClick={() => toggleTag(tag)}
        className={`mx-1 my-1 px-3 py-1 rounded-lg ${
          darkMode
            ? selectedTags.includes(tag)
              ? "bg-zinc-700 text-white"
              : "bg-zinc-800 text-gray-400"
            : selectedTags.includes(tag)
              ? "bg-gray-200 text-black"
              : "bg-gray-300 text-gray-700"
        }`}
      >
        {tag}
      </button>
    ));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`mx-1 px-3 py-1 rounded ${
            darkMode
              ? i === currentPage
                ? "bg-zinc-700 text-white"
                : "bg-zinc-800 text-gray-400"
              : i === currentPage
                ? "bg-zinc-200 text-black"
                : "bg-zinc-300 text-gray-700"
          }`}
        >
          {i}
        </button>,
      );
    }
    return pageNumbers;
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Chow's Photography</title>
        <meta name="description" content="My place where I capture moments!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground darkMode={darkMode} />
      <main className="bg-white dark:bg-zinc-900 min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <section className="container mx-auto p-4">
          <h2 className="text-center text-black text-3xl font-semibold mb-4 p-4 dark:text-white">
            My Gear
          </h2>
          <div className="text-black dark:text-white flex flex-col items-center text-xl mb-8">
            <div className="flex items-center mb-2">
              <span className="mr-2">📷</span>
              <p>Sony a6100</p>
            </div>
            <div className="flex items-center">
              <span className="mr-2">🔍</span>
              <p>Sony 16-50mm f/3.5-5.6</p>
            </div>
          </div>

          <div className="flex justify-center mb-8">{renderTags()}</div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {currentPhotos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo.src}
                  alt={`Photo ${index + 1}`}
                  className="w-full mb-2 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg">
                  <span className="text-white text-center text-sm">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">{renderPageNumbers()}</div>
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}
