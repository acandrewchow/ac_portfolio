"use client"
import React from "react";
import Head from "next/head";
import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPostCard from "../components/BlogPostCard";

const blogPostData = [
  {
    title: "theScore",
    date: "May 2023 - August 2023",
    role: "Software Developer on Promotions",
    imageUrl: "./images/blog/theScore.jpg",
  },
  {
    title: "theScore",
    date: "May 2022 - December 2022",
    role: "QA Analyst on Promotions",
    imageUrl: "./images/blog/theScore.jpg",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Andrew Chow's Blogs</title>
        <meta name="description" content="Your blog description" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <ParticlesBackground darkMode={darkMode} />
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <div className="flex flex-col items-center justify-center mt-12">
            <h1 className={`text-3xl font-semibold mb-6 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>
              Welcome to my Blog!
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
              {blogPostData.map((post, index) => (
                <BlogPostCard
                  key={index}
                  title={post.title}
                  date={post.date}
                  role={post.role}
                  imageUrl={post.imageUrl}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
}
