import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100, 
            density: {
              enable: true,
              value_area: 1100,
            },
          },
          color: {
            value: "#f4c32d", 
          },
          shape: {
            type: "star", 
            polygon: {
              nb_sides: 6, 
            },
          },
          size: {
            value: 3, 
            random: true, 
            anim: {
              enable: true,
              speed: 10,
              size_min: 2,
              sync: false,
            },
          },
          opacity: {
            value: 0.6, 
            random: true, 
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
