import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ADB5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#9E9E9E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0F0F0F',
      paper: '#1C1C1C',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#9E9E9E',
    },
  },
  typography: {
    fontFamily: "'Roboto Mono', monospace",
    h1: { fontWeight: 700, fontSize: '2.5rem', letterSpacing: '0.1rem' },
    h2: { fontWeight: 600, fontSize: '2rem', letterSpacing: '0.1rem' },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
});

export default theme;
