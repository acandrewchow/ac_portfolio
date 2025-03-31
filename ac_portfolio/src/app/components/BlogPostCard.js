import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const BlogPostCard = ({ title, date, description, tags, darkMode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 dark:border-zinc-700/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

      <div className="flex flex-col space-y-4 relative">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
            {title}
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {date}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-purple-800/40 transition-all duration-300"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Read more link */}
        <motion.div
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          <span className="text-sm font-medium">Read more</span>
          <FaArrowRight className="text-sm" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
