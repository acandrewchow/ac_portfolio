import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-10 right-10 p-2 bg-zinc-800 rounded-full ${
        isVisible ? "visible" : "invisible"
      } hover:scale-110 hover:bg-zinc-700 transition-transform`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-white text-xl" />
    </div>
  );
};

export default BackToTopButton;
