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
import { motion } from "framer-motion";

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
        <motion.button
          key={i}
          onClick={() => setCurrentPage(i)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mx-1 px-4 py-2 rounded-lg transition-all duration-300 ${
            darkMode
              ? i === currentPage
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-zinc-800/50 text-gray-400 hover:bg-zinc-700/50"
              : i === currentPage
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
              : "bg-zinc-100 text-gray-700 hover:bg-zinc-200"
          }`}
        >
          {i}
        </motion.button>
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
      <main className="bg-white dark:bg-zinc-900 min-h-screen">
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <div className="relative max-w-4xl mx-auto px-6 py-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-900 opacity-50 rounded-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)] rounded-3xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 mb-4">
                  Blog
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Documenting my adventures in the world of software
                </p>
              </motion.div>

              {/* Blog Post Cards */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {currentPosts.map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Link href={post.link} target="_blank" className="block">
                      <BlogPostCard
                        title={post.title}
                        date={post.date}
                        description={post.description}
                        tags={post.tags}
                        darkMode={darkMode}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center mt-12"
              >
                {renderPageNumbers()}
              </motion.div>
            </div>
          </div>
        </section>
        <Footer darkMode={darkMode} />
        <BackToTopButton />
      </main>
    </div>
  );
}
