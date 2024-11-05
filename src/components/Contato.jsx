import React from 'react';
import { Typography, Box, Button } from '@mui/material';

export default function Contato() {
  return (
    <Box mt={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Entre em Contato
      </Typography>
      <Typography variant="body1" gutterBottom>
        Gostou do meu trabalho? Vamos conversar!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="mailto:seuemail@email.com"
      >
        Fale Comigo
      </Button>
    </Box>
  );
}
