import React from "react";
import { Typography, Box } from "@mui/material";

export default function Sobre() {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        About me
      </Typography>
      <Typography variant="body1">
        Front-End Engineer with 5+ years of experience in developing
        high-performance web and mobile applications. Proficient in ReactJS,
        NextJS, and React Native, with solid experience in design and
        prototyping using Figma. Specialist in CI/CD with GitLab, optimizing
        deployment workflows and enhancing user experiences.
        <br />
        Knowledge in full-stack development with PHP and Node.js for
        microservices and robust API integrations. Experience in implementing
        PL/SQL solutions, including integrations with APIs. Advanced skills in
        Linux and Windows administration, ensuring efficient and stable
        deployments.
        <br />
        Effective collaborator in multidisciplinary teams, with experience in
        agile methodologies (Scrum, Kanban, XP).
      </Typography>
    </Box>
  );
}
