import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import ScrollTecnologias from "./ScrollTecnologias";

export default function Sobre() {
  return (
    <Box mt={4} id="about">
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>

      <Typography variant="h6" color="primary" gutterBottom>
        Summary
      </Typography>
      <Typography variant="body1" paragraph>
        Front-End Engineer with 5+ years of experience in developing
        high-performance web and mobile applications. Proficient in ReactJS,
        NextJS, and React Native, with solid experience in design and
        prototyping using Figma. Specialist in CI/CD with GitLab, optimizing
        deployment workflows and enhancing user experiences.
      </Typography>

      <Typography variant="body1" paragraph>
        Strong knowledge in full-stack development with PHP and Node.js for
        microservices and robust API integrations. Experienced in implementing
        PL/SQL solutions, including API integrations.
      </Typography>
      <Typography variant="body1" paragraph>
        Advanced skills in Linux and Windows administration, ensuring efficient
        and stable deployments. Effective team player in multidisciplinary
        teams, with experience in agile methodologies (Scrum, Kanban, XP).
      </Typography>

      <Typography variant="h6" color="primary" gutterBottom sx={{ mt: 3 }}>
        Education 🎓
      </Typography>
      <Typography variant="body1">
        📌 <b>Postgraduate in Artificial Intelligence and Automation</b> –{" "}
        <Typography
          sx={{
            "&:hover": { color: "primary.main", cursor: "pointer" },
            display: "inline-block",
          }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              "https://www.rocketseat.com.br/faculdade/ia-e-automacao",
              "_blank"
            );
          }}
        >
          @Rocketseat
        </Typography>
        <br />
        📌 <b>MBA in Software Engineering</b> –{" "}
        <Typography
          sx={{
            "&:hover": { color: "primary.main", cursor: "pointer" },
            display: "inline-block",
          }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              "https://www.fiap.com.br/mba/mba-em-engenharia-de-software/",
              "_blank"
            );
          }}
        >
          @FIAP
        </Typography>
        <br />
        📌 <b>Bachelor’s Degree in Information Systems</b> –{" "}
        <Typography
          sx={{
            "&:hover": { color: "primary.main", cursor: "pointer" },
            display: "inline-block",
          }}
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              "https://www.fiap.com.br/graduacao/bacharelado/sistemas-de-informacao/",
              "_blank"
            );
          }}
        >
          @FIAP
        </Typography>
      </Typography>
      <Divider sx={{ my: 2 }} />
      <ScrollTecnologias />
    </Box>
  );
}
