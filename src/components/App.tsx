import React from "react";
import { ThemeProvider } from "styled-components";
import Dashboard from "../pages/Dashboard";
import { COLORS } from "../constants";
import GlobalStyle from "./globalStyles";

const theme = {
  colors: COLORS
}
function App() {

  return <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Dashboard />
  </ThemeProvider>;
}

export default App;
