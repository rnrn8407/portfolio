"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS?: any;
  }
}

const particleConfig = {
  particles: {
    number: {
      value: 38,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#39ff14", // ネオンっぽい緑
    },
    shape: {
      type: "polygon",
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 3,
      },
      image: {
        width: 190,
        height: 100,
      },
    },
    opacity: {
      value: 0.664994832269074,
      random: false,
      anim: {
        enable: true,
        speed: 2.2722661797524872,
        opacity_min: 0.08115236356258881,
        sync: false,
      },
    },
    size: {
      value: 3,
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
      color: "#39ff14", // 線もネオン緑に
      opacity: 0.6,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 961.4383117143238,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
};

export default function ParticlesBackground() {
  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", particleConfig);
      }
    };

    const scriptId = "particles-js-cdn";
    const existingScript = document.getElementById(scriptId);

    if (existingScript) {
      initParticles();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = initParticles;
    document.body.appendChild(script);

    return () => {
      const particlesDiv = document.getElementById("particles-js");
      if (particlesDiv) {
        particlesDiv.innerHTML = "";
      }
    };
  }, []);

  return <div id="particles-js" />;
}
