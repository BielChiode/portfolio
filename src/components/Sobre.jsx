import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Sobre() {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        About me
      </Typography>
      <Typography variant="body1">
        Skilled Front-End Developer with 4+ years of experience in building web
        and mobile applications. Proficient in ReactJS, NextJS, React Native,
        and Figma. Expert in GitLab CI/CD for optimizing deployments and
        enhancing user experiences. Strong in full-stack development with PHP
        and NodeJs for microservices and API integration. Adept at managing
        Linux environments and ensuring smooth deployments. Collaborative team
        player experienced in Agile (Scrum, Kanban, XP) methodologies.
      </Typography>
    </Box>
  );
}
