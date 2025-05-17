"use client";
import { useEffect } from "react";
import Head from "next/head";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
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
    <div>
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
      <main className="bg-zinc-900">
        <section className="min-h-screen">
          {/* <ParticlesBackground /> */}
          <Navbar />
          <HeroSection />
        </section>
        <Footer />
        <BackToTopButton />
      </main>
    </div>
  );
}
