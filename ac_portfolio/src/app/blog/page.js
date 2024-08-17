"use client";
import React, { useState } from "react";
import Head from "next/head";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPostCard from "../components/BlogPostCard";
import Link from "next/link";
import BackToTopButton from "../components/BackToTopButton";
import { blogPostData } from "../data/blogPostData";


export default function BlogHome() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const postsPerPage = 5;
  const totalPages = Math.ceil(blogPostData.length / postsPerPage);

  const currentPosts = blogPostData.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
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
            {currentPosts.map((post, index) => (
              <div key={index}>
                <Link
                  href={post.link}
                  target="_blank"
                  className="hover:opacity-80"
                >
                  <BlogPostCard
                    title={post.title}
                    date={post.date}
                    description={post.description}
                    tags={post.tags}
                    darkMode={darkMode}
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center px-6 max-w-xl mx-auto">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`mx-1 px-4 py-2 rounded-full ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300 text-gray-800"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}