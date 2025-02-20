import React from 'react';
import { Typography, Box, Button } from '@mui/material';

export default function Contato() {
  return (
    <Box mt={8} mb={2} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="body1" gutterBottom>
        Got interested ? Let's have a call.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="mailto:seuemail@email.com"
      >
        Contact Me
      </Button>
    </Box>
  );
}
