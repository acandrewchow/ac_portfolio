"use client";
import Head from "next/head";
import { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import HeroSection from "./components/HeroSection";
import ContactSection from "../app/components/ContactSection";
import Navbar from "./components/Navbar";
import SkillSection from "../app/components/SkillSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
// import ProjectSection from "./components/ProjectSection";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <ParticlesBackground darkMode={darkMode}/>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <HeroSection darkMode ={darkMode}/>
        <SkillSection darkMode ={darkMode} />
        <ExperienceSection darkMode ={darkMode} />
        {/* <ProjectSection darkMode ={darkMode} /> */}
        <ContactSection darkMode={darkMode}/>
        <Footer darkMode={darkMode} />
        </section>
      </main>
    </div>
  );
}
