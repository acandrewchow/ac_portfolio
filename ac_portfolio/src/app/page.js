"use client";
import Head from "next/head";
import { useState } from "react";
import HeroSection from "../app/components/HeaderSection";
import ContactSection from "../app/components/ContactSection";
import Header from "../app/components/Header";
import SkillSection from "../app/components/SkillSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <HeroSection darkMode ={darkMode}/>
        </section>
        <SkillSection darkMode ={darkMode} />
        <ExperienceSection darkMode ={darkMode} />
        <ContactSection darkMode={darkMode}/>
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
}
