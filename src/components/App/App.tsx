import React from "react";
import Menu from "components/Menu/Menu";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    </ThemeProvider>
  );
}
