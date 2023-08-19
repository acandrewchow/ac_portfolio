import React from "react";

const BlogPostCard = ({ title, date, role, imageUrl, darkMode }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden`}>
      <img
        src={imageUrl || "/placeholder-image.jpg"}
        alt={`${title}`}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-800"}`}>{title}</h3>
        <p className={`text-gray-600 dark:text-gray-300`}>{role}</p>
        <div className="flex items-center mt-4">
          <span className={`text-gray-400 dark:text-gray-300`}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
