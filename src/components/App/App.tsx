import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/theme";
import Menu from "components/Menu/Menu";
import Footer from "components/Footer/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Menu />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
