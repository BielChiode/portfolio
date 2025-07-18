import React from "react";
import {
  Typography,
  Box,
  Container,
  Paper,
  IconButton,
  styled,
  Tooltip,
  Avatar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "text.primary",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: "#64ffda",
    transform: "scale(1.2)",
  },
}));

export default function AsideProfile() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { md: "100vh", xs: "auto" },
        backgroundColor: "background.default",
      }}
    >
      <Paper
        sx={{
          width: "90%",
          mt: { md: 0, xs: 4 },
          bgcolor: "background.paper",
          p: 6,
          borderRadius: 4,
          boxShadow: "0px 0px 10px 1px rgba(0, 173, 181, 0.5)",
        }}
      >
        <Box display="flex" alignItems="center" mb={1}>
          <Avatar
            alt="Foto perfil"
            src="foto-perfil.jpeg"
            sx={{ mr: 2, width: 80, height: 80 }}
          />
          <Typography variant="h4" color="primary.main">
            Gabriel V. Chiode
          </Typography>
        </Box>
        <Typography variant="h6" color="secondary.main" gutterBottom>
          Frontend / Mobile Engineer
        </Typography>
        <Typography sx={{ mt: 2, color: "text.primary" }}>
          I build intuitive, responsive and efficient user interfaces.
        </Typography>

        <Box sx={{ gap: 2, mt: 4 }}>
          {["About", "Experience", "Projects"].map((item, index) => (
            <Box
              key={index}
              onClick={() => scrollToSection(item.toLowerCase())}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                "&:hover .line": { width: "40px" },
              }}
            >
              <Box
                className="line"
                sx={{
                  width: "20px",
                  height: "2px",
                  transition: "width 0.3s ease-in-out, background-color 0.3s",
                  mr: 2,
                  backgroundColor: "primary.main",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: "text.secondary",
                  cursor: "pointer",
                  transition: "color 0.3s",
                  "&:hover": {
                    color: "#FFF",
                  },
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 6,
          }}
        >
          <Tooltip title="GitHub" arrow>
            <StyledIconButton
              component="a"
              href="https://github.com/BielChiode"
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
            </StyledIconButton>
          </Tooltip>
          {/* <Tooltip title="Instagram" arrow>
            <StyledIconButton
              component="a"
              href="https://www.instagram.com"
              target="_blank"
            >
              <InstagramIcon fontSize="large" />
            </StyledIconButton>
          </Tooltip> */}
          <Tooltip title="Linkedin" arrow>
            <StyledIconButton
              component="a"
              href="https://www.linkedin.com/in/gabriel-vysomirskis-chiode-589554157/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </StyledIconButton>
          </Tooltip>
        </Box>
      </Paper>
    </Container>
  );
}
