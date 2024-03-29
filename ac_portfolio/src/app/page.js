"use client";
import Head from "next/head";
import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import SkillSection from "./components/SkillSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";
import ProjectSection from "./components/MyWork";
import BackToTopButton from "./components/BackToTopButton";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Chow</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="./favicons/favicon.ico" />
      </Head>
      <main className=" bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <ParticlesBackground darkMode={darkMode} />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <HeroSection darkMode={darkMode} />
          <SkillSection darkMode={darkMode} />
          <ExperienceSection darkMode={darkMode} />
          <EducationSection darkMode={darkMode} />
          <ProjectSection darkMode={darkMode} />
          <ContactSection darkMode={darkMode} />
          <Footer darkMode={darkMode} />
          <BackToTopButton />
        </section>
      </main>
    </div>
  );
}
