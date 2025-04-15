tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    particles: {
      number: { value: 60 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.2 },
      size: { value: 3 },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "bounce" }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1
      }
    },
    background: { color: "transparent" }
  });
  