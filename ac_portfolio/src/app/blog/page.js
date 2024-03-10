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
    date: "Jan 2024 - April 2024",
    role: "Software Developer on Promotions",
    imageUrl: "./images/blog/theScore.jpg",
    link: "",
  },
  {
    title: "theScore",
    date: "May 2023 - August 2023",
    role: "Software Developer on Promotions",
    imageUrl: "./images/blog/theScore.jpg",
    link: "/blog/thescore_dev_wt2",
  },
  {
    title: "theScore",
    date: "May 2022 - December 2022",
    role: "QA Analyst on Promotions",
    imageUrl: "./images/blog/theScore.jpg",
    link: "/blog/thescore_qa_wt1",
  },
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
                    imageUrl={post.imageUrl}
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
