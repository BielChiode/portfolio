import React, { useState } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  Divider,
  Collapse,
  Fade,
  IconButton,
} from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Experiencia() {
  const [openGrupoNos, setOpenGrupoNos] = useState(false);
  const [openPandora, setOpenPandora] = useState(false);

  return (
    <Box mt={4} id="experience">
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
              <Box display="flex" alignItems="center">
                <Typography>(Nov 2024 - Present)</Typography>
                <IconButton
                  size="small"
                  sx={{
                    transition: "transform 0.3s",
                    transform: openGrupoNos ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
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
                <br />• Led the implementation of an identity and access
                management system, enabling seamless integration between
                multiple enterprise platforms with Single Sign-On (SSO). This
                solution improved security, simplified authentication and
                enhanced access control.
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
              <Box display="flex" alignItems="center">
                <Typography>(Feb 2020 - Nov 2024)</Typography>
                <IconButton
                  size="small"
                  sx={{
                    transition: "transform 0.3s",
                    transform: openPandora ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
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
              <Fade in={openPandora}>
                <Box mt={2}>
                  <Typography fontWeight={700}>
                    Career Progression 🚀
                  </Typography>
                  <Timeline position="alternate-reverse">
                    {[
                      {
                        title: "Intern in Systems Analysis and Development",
                        date: "Feb 2020 - Feb 2022",
                      },
                      {
                        title: "Entry-Level Front End Developer",
                        date: "Feb 2022 - July 2022",
                      },
                      {
                        title: "Junior Front End Engineer",
                        date: "July 2022 - July 2023",
                      },
                      {
                        title: "Mid Front End Engineer",
                        date: "July 2023 - Present",
                      },
                    ].map((item, index) => (
                      <TimelineItem key={index}>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <WorkOutlineIcon />
                          </TimelineDot>
                          {index !== 3 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                          <Typography fontWeight={600}>{item.title}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.date}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </Box>
              </Fade>
            </Collapse>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
