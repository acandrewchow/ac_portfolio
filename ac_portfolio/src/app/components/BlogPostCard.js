import React from "react";

const BlogPostCard = ({ title, date, role, darkMode }) => {
  return (
    <div className="flex flex-col bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2
        className={`text-2xl font-semibold mb-2 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <span
        className={`text-md mb-1 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {role}
      </span>
      <span
        className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
      >
        {date}
      </span>
    </div>
  );
};

export default BlogPostCard;
