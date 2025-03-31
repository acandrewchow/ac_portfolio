import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCalendar,
  FaUser,
  FaTags,
  FaCode,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

// Example Blog Post Layout Component
// This component is used to display a blog post

const BlogPostLayout = ({
  title,
  date,
  author,
  tags,
  coverImage,
  children,
  darkMode,
  backToBlog = "/blog",
}) => {
  return (
    <article className="relative min-h-screen bg-white dark:bg-zinc-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-900 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />

      <div className="relative max-w-4xl mx-auto px-4 py-16">
        {/* Back to Blog Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href={backToBlog}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
          >
            <FaArrowLeft className="text-sm" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 mb-6">
            {title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <FaCalendar className="text-blue-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-blue-500" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTags className="text-blue-500" />
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.header>

        {/* Cover Image */}
        {coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-lg dark:prose-invert max-w-none bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20 dark:border-zinc-700/20"
        >
          <div className="space-y-10">
            {React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                // Handle headings
                if (child.type === "h2") {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="relative"
                    >
                      <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      <div className="flex items-center gap-3 mb-4">
                        <FaCode className="text-blue-500" />
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                          {child.props.children}
                        </h2>
                      </div>
                    </motion.div>
                  );
                }

                // Handle paragraphs
                if (child.type === "p") {
                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                      {child.props.children}
                    </motion.p>
                  );
                }

                // Handle lists
                if (child.type === "ul") {
                  return (
                    <motion.ul
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="space-y-3"
                    >
                      {React.Children.map(
                        child.props.children,
                        (li, liIndex) => (
                          <motion.li
                            key={liIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.1 * (index + liIndex),
                            }}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                            <span>{li.props.children}</span>
                          </motion.li>
                        )
                      )}
                    </motion.ul>
                  );
                }

                // Handle code blocks
                if (child.type === "pre") {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="relative"
                    >
                      <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
                        {child}
                      </div>
                    </motion.div>
                  );
                }
              }
              return child;
            })}
          </div>
        </motion.div>
      </div>
    </article>
  );
};

export default BlogPostLayout;
