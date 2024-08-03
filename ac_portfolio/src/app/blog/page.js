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

const blogPostData = [
  {
    title: "theScore",
    date: "Jan 2024 - Apr 2024",
    role: "Software Developer on Promotions",
    link: "/blog/thescore_dev_wt3",
  },
  {
    title: "theScore",
    date: "May 2023 - August 2023",
    role: "Software Developer on Promotions",
    link: "/blog/thescore_dev_wt2",
  },
  {
    title: "theScore",
    date: "May 2022 - December 2022",
    role: "QA Analyst on Promotions",
    link: "/blog/thescore_qa_wt1",
  },
  {
    title: "theScore (WIP)",
    date: "May 2024 - August 2024",
    role: "Software Developer on Promotions",
    link: "/blog/thescore_dev_wt4",
  }
];

export default function BlogHome() {
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
      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <div className="pt-10 pb-5 px-6 max-w-xl mx-auto">
            <h1
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Blog
            </h1>
            <p
              className={`mt-2 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Documenting my adventures in the world of software
            </p>
          </div>

          <div className="max-w-xl mx-auto space-y-8 px-6 py-10">
            {blogPostData.map((post, index) => (
              <div key={index}>
                <Link
                  href={post.link}
                  target="_blank"
                  className="hover:opacity-80"
                >
                  <BlogPostCard
                    title={post.title}
                    date={post.date}
                    role={post.role}
                    darkMode={darkMode}
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}