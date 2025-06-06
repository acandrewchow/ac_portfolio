"use client";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import Gallery from "../components/Gallery";
import { photos } from "../data/photos";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";

export default function GalleryPage() {
  const transformedPhotos = photos.map((photo, index) => ({
    id: index + 1,
    title:
      photo.caption ||
      photo.src.split("/").pop().split(".")[0].replace(/_/g, " "),
    src: photo.src,
    tags: photo.tags,
  }));

  return (
    <div className="min-h-screen">
      <Head>
        <title>Andrew Chow's Photography</title>
        <meta name="description" content="My place where I capture moments!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ParticlesBackground /> */}
      <main className="bg-zinc-900 min-h-screen">
        <Navbar />
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Photo Gallery
              </h1>
              <p className="text-gray-300 text-lg">
                Explore my collection of photographs
              </p>
            </motion.div>

            <Gallery photos={transformedPhotos} />
          </div>
        </section>
        <Footer />
        <BackToTopButton />
      </main>
    </div>
  );
}
