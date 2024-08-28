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
    <div className={`${darkMode ? "bg-zinc-900" : "bg-white"}`}>
      <div className="relative flex justify-center items-center max-w-3xl mx-auto">
        <button
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${
            darkMode
              ? "bg-transparent text-white border border-white"
              : "bg-transparent text-black border border-black"
          } px-2 py-1 rounded-full`}
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div className={`w-full h-96 flex flex-col justify-center items-center ${darkMode ? "bg-zinc-900" : "bg-white"}`}>
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
        </div>
        <button
          className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${
            darkMode
              ? "bg-transparent text-white border border-white"
              : "bg-transparent text-black border border-black"
          } px-2 py-1 rounded-full`}
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}