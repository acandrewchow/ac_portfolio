import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useState, useEffect } from "react";

const ParticlesBackground = ( {darkMode }) => {
  const [particleSize, setParticleSize] = useState(4);
  const [lineDistance, setLineDistance] = useState(600); 

  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768; 
    setParticleSize(isMobile ? 3 : 6); 
    setLineDistance(isMobile ? 300 : 600);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 1,
        },
        particles: {
          number: {
            value: 20,
            density: {
              enable: false,
              value_area: 1200,
            },
          },
          color: {
            value: darkMode ? "#fff" : "#000", 
          },
          shape: {
            type: "star",
            options: {
              sides: 5,
            },
          },
          opacity: {
            value: darkMode ? 0.2 : 0.2, 
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: particleSize,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: lineDistance, 
            color: darkMode ? "#ffffff" : "#000000",
            opacity: 0.2,
            width: 2,
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 1200,
              rotateY: 1200,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
