import React, { useState } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";

export default function Experiencia() {
  const [openGrupoNos, setOpenGrupoNos] = useState(false);
  const [openPandora, setOpenPandora] = useState(false);

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        {/* Grupo Nós */}
        <ListItem>
          <Box sx={{ width: "100%", ":hover": { cursor: "pointer" } }}>
            <Box
              display="flex"
              justifyContent="space-between"
              onClick={() => setOpenGrupoNos(!openGrupoNos)}
            >
              <Typography fontWeight={700} color="primary.contrastText">
                Software Engineer
              </Typography>
              <Typography>(Nov 2024 - Present)</Typography>
            </Box>
            <Typography
              sx={{
                "&:hover": { color: "primary.main", cursor: "pointer" },
                display: "inline-block",
              }}
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://www.gruponos.com/", "_blank");
              }}
            >
              @Grupo Nós
            </Typography>
            <Collapse in={openGrupoNos} timeout="auto" unmountOnExit>
              <Typography
                sx={(theme) => ({ color: theme.palette.secondary.main, mt: 1 })}
                gutterBottom
              >
                • Developed a PL/SQL procedure to integrate time tracking with
                APIs, ensuring real-time updates on employee presence in stores.
                The solution automated the process, improved data accuracy, and
                enhanced monitoring, directly impacting workforce management
                efficiency.
              </Typography>
              <Typography>
                Tecnologies used: ReactJs, NextJs, Typescript, JavaScript, Jest,
                Cypress, Oracle Cloud, Oracle database, PL/SQL, HTML, CSS,
                Docker, Material UI; Active experience with agile methodologies
                (Scrum, Kanban, XP)
              </Typography>
            </Collapse>
          </Box>
        </ListItem>
        <Divider />

        {/* Pandora Solutions */}
        <ListItem>
          <Box sx={{ width: "100%", ":hover": { cursor: "pointer" } }}>
            <Box
              display="flex"
              justifyContent="space-between"
              onClick={() => setOpenPandora(!openPandora)}
            >
              <Typography fontWeight={700} color="primary.contrastText">
                Front End Engineer
              </Typography>
              <Typography>(Feb 2020 - Nov 2024)</Typography>
            </Box>
            <Typography
              sx={{
                "&:hover": { color: "primary.main", cursor: "pointer" },
                display: "inline-block",
              }}
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://pandora.com.br/", "_blank");
              }}
            >
              @Pandora Solutions
            </Typography>

            <Collapse in={openPandora} timeout="auto" unmountOnExit>
              <Typography
                sx={(theme) => ({ color: theme.palette.secondary.main, mt: 1 })}
                gutterBottom
              >
                • Designed, developed, and maintained multiple projects
                (customer service systems, union app, web collection, admin
                tools) with 100% test coverage using ReactJS, NextJS, React
                Native, Jest, and Cypress
                <br />• Developed complex JavaScript solutions to enhance
                client-side performance and ensure seamless interaction with
                backend services
                <br />• Led the creation, prototyping, and maintenance of
                systems and products, driving innovation from concept to
                deployment
                <br />• Focused on prototyping, design, and UX using Figma for
                web systems and applications, delivering user-friendly
                interfaces
                <br />• Developed and launched a flagship union members mobile
                app, resolving deployment bottlenecks by implementing an
                automated CI/CD pipeline in GitLab, streamlining builds,
                submissions, and deployments to both Google Play and the Apple
                Store
                <br /> • Integrated third-party APIs using JavaScript to extend
                the functionality of applications, improving user experiences
                with real-time data handling
                <br /> • Maintained and enhanced features for iOS and Android
                applications built with React Native, improving the
                functionality and user experience
                <br /> • Managed microservices and implemented new features and
                routes in PHP for the union app, ensuring seamless integration
                and scalability
                <br /> • Developed a custom WordPress plugin with external API
                integration, expanding the platform's capabilities
                <br /> • Skilled in Linux systems (especially Ubuntu), ensuring
                efficient system management and deployment processes
              </Typography>
              <Typography>
                Tecnologies used: ReactJs, NextJs, React Native, JavaScript,
                Jest, Cypress, AngularJS, Postgres, MySQL, HTML, CSS, Bootstrap,
                Docker, Expo, PHP, AWS, Material UI; Active experience with
                agile methodologies (Scrum, Kanban, XP)
              </Typography>
            </Collapse>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
