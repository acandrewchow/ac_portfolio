import React from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="font-firacode text-center py-4 bg-zinc-900 text-white"
    >
      <div className="text-3xl md:text-3xl flex justify-center gap-4 text-gray-400 mb-2 mt-10">
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://linkedin.com/in/acandrewchow" target="_blank">
            <AiFillLinkedin />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }}>
          <a href="https://github.com/acandrewchow" target="_blank">
            <AiFillGithub />
          </a>
        </motion.div>
      </div>
      <p className="py-2"> Made with ❤️ by Andrew Chow </p>
    </footer>
  );
};

export default Footer;
