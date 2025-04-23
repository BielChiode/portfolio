import React from "react";
import { Typography, Box, Grid2 as Grid } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import styled from "styled-components";

export default function Projetos() {
  const listaProjetos = [
    {
      titulo: "Crypto Watchlist",
      descricao:
        "A web application for real-time cryptocurrency price monitoring using the Binance API. The project allows users to view quotes for different currencies in a user-friendly and responsive interface.",
      link: "https://github.com/BielChiode/crypto-watchlist",
      height: 500,
    },
    {
      titulo: "Hit or Stand Game",
      descricao:
        "This is a blackjack (21) game app, developed with React Native and Expo. The goal of the game is to add cards for the player and the dealer, accumulating points according to the game rules.",
      link: "https://github.com/BielChiode/HitOrStand",
      height: 500,
    },
    {
      titulo: "2GO Ceno Website",
      descricao:
        "Presentation and portfolio website for a scenography company.",
      link: "https://2goceno.com/",
      height: 300,
    },
    {
      titulo: "Rick and Morty Wiki",
      descricao:
        "Rick and Morty Wiki é uma aplicação web desenvolvida com React, TypeScript e Vite que consome a API oficial de Rick and Morty para oferecer um guia completo da série. No projeto é possível explorar personagens, descobrir localizações, e consultar episódios com listagem e informações detalhadas. A interface responsiva adota um estilo futurista inspirado em glassmorphism e neon sutil usando as cores do tema, demonstrando integração com APIs públicas, otimização de performance e design moderno com Material-UI.",
      link: "https://rick-and-morty-app-steel-six.vercel.app/",
      height: 820,
    },
  ];

  return (
    <Box mt={4} id="projects">
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} mt={5}>
        {listaProjetos.map((projeto, index) => {
          const altura = projeto.height;

          return (
            <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <CardStyled
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                link={projeto.link}
                height={altura}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

const CardStyled = ({ titulo, descricao, imagem, link, height }) => {
  return (
    <StyledWrapper height={height}>
      <div className="card">
        <div className="align">
          <span className="red" />
          <span className="yellow" />
          <span className="green" />
        </div>
        <h1>{titulo}</h1>
        <p>{descricao}</p>
        <Box sx={{ display: "flex" }}>
          <Typography
            sx={{
              "&:hover": { color: "primary.main", cursor: "pointer" },
              display: "inline-block",
            }}
            onClick={(e) => {
              window.open(link, "_blank");
            }}
          >
            {link}
            <LaunchIcon sx={{ fontSize: 14, ml: 1 }} />
          </Typography>
        </Box>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 250px;
    height: 150px;
    padding: 0.5rem;
    background: rgba(100, 100, 100, 0.34);
    border-radius: 8px;
    backdrop-filter: blur(5px);
    border-bottom: 3px solid rgba(255, 255, 255, 0.44);
    border-left: 2px rgba(255, 255, 255, 0.545) outset;
    box-shadow: -40px 50px 30px rgba(0, 0, 0, 0.28);
    transform: skewX(10deg);
    transition: 0.4s;
    overflow: hidden;
    color: white;
  }

  .card:hover {
    height: ${({ height }) => height}px;
    transform: skew(0deg);
  }

  .align {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-self: flex-start;
  }

  .red {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ff605c;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  }

  .yellow {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #ffbd44;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  }

  .green {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00ca4e;
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.28);
  }

  .card h1 {
    text-align: center;
    margin: 1rem;
    color: rgb(218, 244, 237);
    text-shadow: -10px 5px 10px rgba(0, 0, 0, 0.573);
  }
`;
