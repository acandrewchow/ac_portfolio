import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`text-center py-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <p> Made with ❤️ by Andrew Chow </p>
    </footer>
  );
};

export default Footer;
