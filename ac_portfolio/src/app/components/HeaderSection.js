import React from "react";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import ProfilePicture from "../../../public/profile_pic.png"; 
import Type from "./Type";

const HeroSection = () => {
    
    const strings = ['Developer', 'Designer', 'Enthusiast']
    return (
      <div className="text-center p-6 md:p-10 py-10">
        <h2 className="text-4xl md:text-5xl py-2 text-teal-600 font-medium dark:text-teal-400">
          Andrew Chow
        </h2>
        <h3 className="text-xl md:text-3xl py-2 dark:text-white">
          <Type />
        </h3>
        <p className="text-md py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-lg">
          I'm Andrew, a Software Engineering student at the University of Guelph
          who loves to solve problems! I have a passion for building new products
          and applications through the world of technology.
        </p>
        <p className="text-md py-5 leading-7 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-lg">
          From design and development to product management, my interest lies
          within the realm of understanding customers, identifying gaps and
          providing innovative solutions to solve user problems.
        </p>
        <div className="text-4xl md:text-5xl flex justify-center gap-6 py-3 text-gray-600 dark:text-gray-400">
          <AiFillLinkedin />
          <AiFillFacebook />
          <AiFillGithub />
          <AiFillInstagram />
        </div>
        <div className="mx-auto rounded-full w-60 md:w-80 h-60 md:h-80 relative overflow-hidden mt-10 md:mt-20">
          <Image src={ProfilePicture} alt="profile_pic" objectFit="cover"/>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  
