import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useState, useEffect } from "react";

const ParticlesBackground = () => {
  const [particleSize, setParticleSize] = useState(4);
  const [lineDistance, setLineDistance] = useState(600);
  const [density, setDensity] = useState(2000);

  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    setParticleSize(isMobile ? 6 : 8);
    setLineDistance(isMobile ? 300 : 600);
    setDensity(isMobile ? 1500 : 2000);
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
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: density,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "star",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.1,
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
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: {
              value: "#ffffff",
            },
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        // interactivity: {
        //   detect_on: "canvas",
        //   events: {
        //     onhover: {
        //       enable: true,
        //       mode: "repulse",
        //     },
        //     onclick: {
        //       enable: true,
        //       mode: "push",
        //     },
        //     resize: true,
        //   },
        //   modes: {
        //     grab: {
        //       distance: 400,
        //       line_linked: {
        //         opacity: 0.5,
        //       },
        //     },
        //     bubble: {
        //       distance: 400,
        //       size: 40,
        //       duration: 2,
        //       opacity: 4,
        //       speed: 3,
        //     },
        //     repulse: {
        //       distance: 200,
        //     },
        //     push: {
        //       particles_nb: 4,
        //     },
        //     remove: {
        //       particles_nb: 2,
        //     },
        //   },
        // },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground; 