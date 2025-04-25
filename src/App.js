import { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Home from "./pages/Home";
import { initGA } from "./analytics";

function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
