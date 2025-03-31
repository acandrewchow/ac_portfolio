import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Gallery = ({ photos }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allTags = Array.from(new Set(photos.flatMap((photo) => photo.tags)));

  const filteredPhotos = photos.filter((photo) => {
    const matchesTags = selectedTags.length
      ? selectedTags.every((tag) => photo.tags.includes(tag))
      : true;
    const matchesSearch = searchQuery
      ? photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : true;
    return matchesTags && matchesSearch;
  });

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handlePhotoClick = (photo, index) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[newIndex]);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % filteredPhotos.length;
      setSelectedPhoto(filteredPhotos[newIndex]);
      return newIndex;
    });
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter Section */}
      <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 dark:border-zinc-700/20">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Search photos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-600"
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onClick={() => handlePhotoClick(photo, index)}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">{photo.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {photo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
            >
              <FaTimes size={24} />
            </button>

            {/* Photo Container */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-7xl">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Photo Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedPhoto.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPhoto.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-white/80 text-sm mt-2">
                  Photo {currentIndex + 1} of {filteredPhotos.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
