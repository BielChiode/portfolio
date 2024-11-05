import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';
import Home from './pages/Home';
import { useCallback, useState } from 'react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
