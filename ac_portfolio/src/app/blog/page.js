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

  const postsPerPage = 5;
  const totalPages = Math.ceil(blogPostData.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPostData.slice(indexOfFirstPost, indexOfLastPost);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`mx-1 px-3 py-1 rounded ${
            darkMode
              ? i === currentPage
                ? "bg-gray-700 text-white"
                : "bg-gray-800 text-gray-400"
              : i === currentPage
              ? "bg-gray-200 text-black"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
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

          <div className="max-w-3xl mx-auto px-6 py-10">
            <div className="text-left mb-10">
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

            {/* Blog Post Cards */}
            <div className="space-y-8">
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
          </div>

          <div className="flex justify-center mt-8">{renderPageNumbers()}</div>
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}
