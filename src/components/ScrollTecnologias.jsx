import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

const technologies = [
  "react",
  "reactNative",
  "expo",
  "nextjs",
  "typeScript",
  "figma",
  "materialUI",
  "tailwindcss",
  "jest",
  "docker",
  "nodejs",
  "oracle",
  "aws",
  "postgresSQL",
  "HTML5",
  "CSS3",
  "javaScript",
  "git",
  "mysql",
  "bash",
];

const ScrollTecnologias = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;
    let speed = 1.4; // Velocidade do scroll

    const smoothScroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    animationFrame = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 2,
        whiteSpace: "nowrap",
      }}
    >
      {/* Gradiente esquerda */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 64,
          background:
            "linear-gradient(to right, var(--background), transparent)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />
      {/* Gradiente direita */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 64,
          background:
            "linear-gradient(to left, var(--background), transparent)",
          zIndex: 20,
          pointerEvents: "none",
        }}
      />

      <Box
        ref={scrollRef}
        sx={{ display: "flex", overflow: "hidden", whiteSpace: "nowrap" }}
      >
        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, md: 5 },
            minWidth: "max-content",
          }}
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                transition: "transform 0.3s",
                "&:hover img": { transform: "scale(1.1)" },
              }}
            >
              <img
                src={`/svg/${tech}.svg`}
                alt={tech}
                width={30}
                height={30}
                loading="lazy"
                style={{ opacity: 0.6, transition: "transform 0.3s" }}
              />
              <Typography variant="h6" color="var(--white-icon)">
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollTecnologias;
