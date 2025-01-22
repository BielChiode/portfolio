import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Javascript,
  Html5,
  Css3,
  Docker,
  Php,
  GitHub,
  ReactLogo,
} from "@mui/icons-material"; // Exemplo com ícones Material UI
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import PhpIcon from "@mui/icons-material/Php";

export default function Experiencia() {
  const technologies = [
    { name: "HTML", icon: <HtmlIcon /> },
    { name: "CSS", icon: <CssIcon /> },
    { name: "JavaScript", icon: <JavascriptIcon /> },
    { name: "PHP", icon: <PhpIcon /> },
    // { name: 'ReactJs', icon: <ReactLogo /> },
    // { name: 'NextJs', icon: <Typography>Next.js</Typography> },
    // { name: 'React Native', icon: <ReactLogo /> },
    // { name: 'Jest', icon: <Typography>Jest</Typography> },
    // { name: 'Cypress', icon: <Typography>Cypress</Typography> },
    // { name: 'AngularJS', icon: <Typography>AngularJS</Typography> },
    // { name: 'Postgres', icon: <Typography>Postgres</Typography> },
    // { name: 'MySQL', icon: <Typography>MySQL</Typography> },
    // { name: 'Bootstrap', icon: <Typography>Bootstrap</Typography> },
    // { name: 'Docker', icon: <Docker /> },
    // { name: 'Expo', icon: <Typography>Expo</Typography> },
    // { name: 'AWS', icon: <GitHub /> }, // Substituir com ícone apropriado se disponível
    // { name: 'Material UI', icon: <Typography>Material UI</Typography> },
    // { name: 'Agile (Scrum, Kanban, XP)', icon: <Typography>Agile</Typography> },
  ];
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        <ListItem>
          <Box>
            <Typography gutterBottom fontWeight={700}>
              Software Engineer -{" "}
              <Box
                as="span"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() =>
                  window.open("https://www.gruponos.com/", "_blank")
                }
              >
                Grupo nós
              </Box>{" "}
              (Nov 2024 - Present)
            </Typography>
            <Typography
              sx={(theme) => ({ color: theme.palette.secondary.main })}
              gutterBottom
            >
              • Developed a PL/SQL procedure to integrate time tracking with
              APIs, ensuring real-time updates on employee presence in stores.
              The solution automated the process, improved data accuracy, and
              enhanced monitoring, directly impacting workforce management
              efficiency.
            </Typography>
            <Typography>
              Tecnologies used: ReactJs, NextJs, Typescript, JavaScipt, Jest,
              Cypress, Oracle Cloud, Oracle database, PL/SQL, HTML, CSS, Docker,
              Material UI; Active experience with agile methodologies (Scrum,
              Kanban, XP)
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {technologies.map((tech, index) => (
                <IconButton
                  key={index}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  {tech.icon}
                  <Typography variant="caption">{tech.name}</Typography>
                </IconButton>
              ))}
            </Box>
          </Box>
        </ListItem>
        <Divider />
        <ListItem>
          <Box>
            <Typography gutterBottom fontWeight={700}>
              Front End Engineer -{" "}
              <Box
                as="span"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => window.open("https://pandora.com.br/", "_blank")}
              >
                Pandora solutions
              </Box>{" "}
              (Feb 2020 - Present)
            </Typography>

            <Typography
              sx={(theme) => ({ color: theme.palette.secondary.main })}
              gutterBottom
            >
              • Designed, developed, and maintained multiple projects (customer
              service systems, union app, web collection, admin tools) with 100%
              test coverage using ReactJS, NextJS, React Native, Jest, and
              Cypress
              <br />• Developed complex JavaScript solutions to enhance
              client-side performance and ensure seamless interaction with
              backend services
              <br />• Led the creation, prototyping, and maintenance of systems
              and products, driving innovation from concept to deployment
              <br />• Focused on prototyping, design, and UX using Figma for web
              systems and applications, delivering user-friendly interfaces
              <br />• Developed and launched a flagship union members mobile
              app, resolving deployment bottlenecks by implementing an automated
              CI/CD pipeline in GitLab, streamlining builds, submissions, and
              deployments to both Google Play and the Apple Store
              <br /> • Integrated third-party APIs using JavaScript to extend
              the functionality of applications, improving user experiences with
              real-time data handling
              <br /> • Maintained and enhanced features for iOS and Android
              applications built with React Native, improving the functionality
              and user experience
              <br /> • Managed microservices and implemented new features and
              routes in PHP for the union app, ensuring seamless integration and
              scalability
              <br /> • Developed a custom WordPress plugin with external API
              integration, expanding the platform's capabilities
              <br /> • Skilled in Linux systems (especially Ubuntu), ensuring
              efficient system management and deployment processes
            </Typography>
            <Typography>
              Tecnologies used: ReactJs, NextJs, React Native, JavaScipt, Jest,
              Cypress, AngularJS, Postgres, MySQL, HTML, CSS, Bootstrap, Docker,
              Expo, PHP, AWS, Material UI; Active experience with agile
              methodologies (Scrum, Kanban, XP)
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {technologies.map((tech, index) => (
                <IconButton
                  key={index}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  {tech.icon}
                  <Typography variant="caption">{tech.name}</Typography>
                </IconButton>
              ))}
            </Box>
          </Box>
        </ListItem>

        {/* <ListItem>
          <ListItemText
            primary="Desenvolvedor Web - XYZ Corp"
            secondary="Março 2019 - Junho 2021 | Implementação de sistemas web."
          />
        </ListItem> */}
      </List>
    </Box>
  );
}
