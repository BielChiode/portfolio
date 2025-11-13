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
  const [openCittati, setOpenCittati] = useState(false);

  return (
    <Box mt={4} id="experience">
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      <List>
        {/* Cittati */}
        <ListItem>
          <Box sx={{ width: "100%", ":hover": { cursor: "pointer" } }}>
            <Box
              display="flex"
              justifyContent="space-between"
              onClick={() => setOpenCittati(!openCittati)}
            >
              <Typography fontWeight={700} color="primary.contrastText">
                Software Engineer — Mobile Team
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography>(May 2025 - Present)</Typography>
                <IconButton
                  size="small"
                  sx={{
                    transition: "transform 0.3s",
                    transform: openCittati ? "rotate(180deg)" : "rotate(0deg)",
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
                window.open("https://www.cittati.com.br/", "_blank");
              }}
            >
              @Cittati
            </Typography>
            <Collapse in={openCittati} timeout="auto" unmountOnExit>
              <Typography
                sx={(theme) => ({ color: theme.palette.secondary.main, mt: 1 })}
                gutterBottom
              >
                <strong>Software Engineer — Mobile Team | Cittati</strong>
                <br />
                Driving Urban Mobility Transformation Through Technology
                <br />
                <br />
                • Leadership in cross-platform mobile application development
                using React Native and Expo. Managed the complete release cycle
                on the Google Play Store and Apple App Store, and led projects
                by defining the roadmap to ensure scalability and user
                satisfaction.
                <br />• Implemented a CI/CD pipeline for the project, ensuring
                greater reliability, agility, and traceability.
                <br /> • Built automations (Power Automate + Azure DevOps +
                Teams) that reduced DEV–QA interaction time by 45%, increasing
                backlog traceability and enhancing team collaboration.
                <br /> • Implemented unit tests with Jest in React Native for a
                project with no prior test coverage, achieving 50% coverage.
                Utilized Generative AI (ChatGPT, Copilot) to generate and
                validate automated tests, raising code quality and
                maintainability.
                <br /> • Actively participated in AI knowledge sharing
                initiatives within Cittati's technology team, influencing
                developers and providing guidance on leveraging AI to enhance
                productivity. Delivered a presentation on AI applications to the
                technology team.
              </Typography>
              <Typography>
                Technologies used: React.js, React Native, Next.js, Node.js,
                TypeScript, Figma, HTML, CSS, Docker, Material UI, Power
                Automate, Azure DevOps, Microsoft Teams, Jest, Generative AI; Active experience
                with agile methodologies (Scrum, Kanban, XP)
              </Typography>
            </Collapse>
          </Box>
        </ListItem>
        <Divider />
        {/* Grupo Nós */}
        <ListItem>
          <Box sx={{ width: "100%", ":hover": { cursor: "pointer" } }}>
            <Box
              display="flex"
              justifyContent="space-between"
              onClick={() => setOpenGrupoNos(!openGrupoNos)}
            >
              <Typography fontWeight={700} color="primary.contrastText">
                Software Engineer — Architecture Team
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography>(Nov 2024 - May 2025)</Typography>
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
                <strong>
                  Software Engineer — Architecture Team | Grupo Nós
                </strong>
                <br />
                <br />
                • Designed and mapped API integrations and application
                communication flows using Draw.io, ensuring standardized,
                scalable, and maintainable system architectures.
                <br />• Developed a real-time integration between Control ID and
                Oracle Autonomous Data Warehouse (ADW) using PL/SQL, automating
                employee time tracking, increasing data accuracy, and enhancing
                operational efficiency across workforce management processes.
                <br />• Contributed to the implementation of an enterprise-grade
                Identity and Access Management (IAM) solution with Keycloak,
                enabling seamless Single Sign-On (SSO) integration across
                multiple platforms, strengthening system security, and improving
                user authentication experiences.
                <br />• Led the development of an internal integration
                documentation platform, enhancing system reliability, promoting
                knowledge sharing across cross-functional teams, and
                accelerating onboarding for new developers.
              </Typography>
              <Typography>
                Technologies used: React.js, React Native, Next.js, Oracle DB,
                PL/SQL, Keycloak, Node.js, TypeScript, draw.io, Figma HTML, CSS,
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
