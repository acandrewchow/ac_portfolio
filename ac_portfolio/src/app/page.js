"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import ParticlesBackground from "./components/ParticlesBackground";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-504QE7Y45C";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-504QE7Y45C");
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Chow</title>
        <meta name="description" content="Personal Portfolio" />
        <meta property="og:title" content="Andrew Chow" />
        <meta
          property="og:description"
          content="Andrew Chow's Personal Website"
        />
        <meta
          property="og:image"
          content="https://andrewchow.ca/profile_pic_2024.jpg"
        />
        <meta property="og:url" content="https://andrewchow.ca" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Andrew Chow's Site" />
        <link rel="icon" href="./favicons/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-zinc-900">
        <section className="min-h-screen">
          <ParticlesBackground darkMode={darkMode} />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <HeroSection darkMode={darkMode} />
        </section>
        {/* <Footer darkMode={darkMode} /> */}
        {/* <BackToTopButton /> */}
      </main>
    </div>
  );
}