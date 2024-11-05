import React from 'react';
import {
  Typography,
  Box,
  Grid2 as Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

export default function Projetos() {
  const projectList = [
    {
      title: 'E-commerce App',
      description: 'Desenvolvimento de um sistema completo de vendas.',
    },
    {
      title: 'Dashboard de Estatísticas',
      description: 'Sistema de visualização de dados usando Recharts.',
    },
  ];

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Projetos
      </Typography>
      <Grid container spacing={4}>
        {projectList.map((project, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Ver Projeto
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
