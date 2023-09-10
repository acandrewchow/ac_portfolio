"use client";
import React from "react";
import Head from "next/head";
import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPostCard from "../components/BlogPostCard";
import Link from "next/link";
import BackToTopButton from "../components/BackToTopButton";

export default function GalleryHome() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

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
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}
