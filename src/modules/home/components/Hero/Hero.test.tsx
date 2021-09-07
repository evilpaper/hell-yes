import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import Hero from "./Hero";

test("renders title, subtitle and button", () => {
  render(
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  );
  const title = screen.getByText(/Get Interview/i);
  expect(title).toBeInTheDocument();
});
