import { Box, Container, Grid2 } from "@mui/material";
import React from "react";
import AsideProfile from "../components/AsideProfile";
import Sobre from "../components/Sobre";
import Experiencia from "../components/Experiencia";
import Contato from "../components/Contato";

function Home() {
  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: "flex", height: "100vh" }}>
        <Box sx={{ width: "100%" }}>
          <AsideProfile />
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={(theme) => ({
            width: "100%",
            overflowY: "auto",
            "&::-webkit-scrollbar": { width: 8 },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.text.secondary,
              borderRadius: 10,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: theme.palette.background.paper,
            },
          })}
        >
          <Container>
            <Box id="sobre">
              <Sobre />
            </Box>
            <Box id="experiencia">
              <Experiencia />
            </Box>
            {/* <Projetos /> */}
            <Box id="contato">
              <Contato />
            </Box>
          </Container>
        </Box>
      </Grid2>
    </Grid2>
  );
}

export default Home;
