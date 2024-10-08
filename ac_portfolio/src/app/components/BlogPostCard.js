import React from "react";

function BlogPostCard({ title, date, description, tags, darkMode }) {
  return (
    <div
      className={`p-4 border rounded-lg ${darkMode ? "border-gray-700" : "border-gray-300"} bg-white dark:bg-zinc-800`}
    >
      <h2
        className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h2>
      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        {date}
      </p>
      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        {description}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`text-xs font-semibold py-1 px-2 rounded-full ${darkMode ? "bg-zinc-700 text-gray-300" : "bg-zinc-200 text-gray-800"}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default BlogPostCard;
