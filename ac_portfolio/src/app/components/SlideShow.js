"use client";
import React, { useState } from "react";

export default function Slideshow({ photos, darkMode }) {
  const [current, setCurrent] = useState(0);
  const length = photos.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }

  return (
    <div className={`${darkMode ? "bg-zinc-900" : "bg-white"} relative`}>
      <div
        className={`relative w-full h-96 flex flex-col justify-center items-center ${
          darkMode ? "bg-zinc-900" : "bg-white"
        }`}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`absolute transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            } flex flex-col items-center`}
          >
            <img
              src={photo.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
              style={{ maxHeight: "400px", maxWidth: "100%" }}
            />
            {photo.caption && (
              <p
                className={`mt-2 text-center text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {photo.caption}
              </p>
            )}
          </div>
        ))}
        <button
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
            darkMode
              ? "bg-transparent text-white border border-white"
              : "bg-transparent text-black border border-black"
          } px-4 py-2 rounded-full z-10`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#10094;
        </button>
        <button
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
            darkMode
              ? "bg-transparent text-white border border-white"
              : "bg-transparent text-black border border-black"
          } px-4 py-2 rounded-full z-10`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
