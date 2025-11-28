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
        Hey there! I’m Gabriel Chiode — a Software Engineer with 5+ years of
        experience building high-performance web and mobile applications. I
        specialize in ReactJS, Next.js, and React Native (Expo), combining
        strong front-end expertise with solid backend and CI/CD foundations.
        <br /> <br />
        Throughout my career, I’ve developed and maintained production-scale
        apps used daily by thousands of users, delivering end-to-end solutions
        across web, mobile, and cloud environments. I’ve worked with CI/CD
        pipelines (GitLab & Azure DevOps), RESTful APIs, PL/SQL integrations,
        automated deployments, and agile environments that demand consistency,
        scalability, and clean architecture.
        <br /> <br />
        One of my biggest strengths is using Artificial Intelligence to
        accelerate and elevate development. I’m a daily advanced user of
        Generative AI (ChatGPT, Copilot, Cursor), applying it to write and
        validate automated tests, prototype faster, improve decision-making, and
        optimize engineering workflows. At Cittati, I built automations with
        Power Automate + Azure DevOps + Teams that reduced developer response
        time by 45%, and introduced unit tests in a React Native project,
        reaching 50% coverage—all supported by AI-driven workflows.
        <br /> <br />
        I also bring hands-on experience with CI/CD automation, cloud workflows,
        mobile publishing (Google Play & App Store), IAM with Keycloak (SSO),
        and UX/UI prototyping with Figma. My background includes maintaining
        microservices, building internal documentation platforms, and achieving
        100% test coverage in multiple systems earlier in my career.
        <br /> <br />
        Outside of coding, I’m passionate about learning, experimenting with AI,
        and building solutions that simplify processes and empower people. I
        enjoy contributing to tech discussions, mentoring teammates, and pushing
        the limits of what AI-assisted development can deliver.
      </Typography>

      {/* <Typography variant="body1" paragraph>
        Strong knowledge in full-stack development with PHP and Node.js for
        microservices and robust API integrations. Experienced in implementing
        PL/SQL solutions, including API integrations.
      </Typography>
      <Typography variant="body1" paragraph>
        Advanced skills in Linux and Windows administration, ensuring efficient
        and stable deployments. Effective team player in multidisciplinary
        teams, with experience in agile methodologies (Scrum, Kanban, XP).
      </Typography> */}

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
