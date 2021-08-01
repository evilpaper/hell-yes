import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/theme";
import Menu from "components/Menu/Menu";
import Hero from "components/Hero/Hero";
import Featured from "components/Featured/Featured";
import Footer from "components/Footer/Footer";

import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/decks">
            <Content>
              <h1>I'm Decks</h1>
            </Content>
          </Route>
          <Route exact path="/pricing">
            <Content>
              <h1>I'm Pricing</h1>
            </Content>
          </Route>
          <Route exact path="/about">
            <Content>
              <h1>I'm About</h1>
            </Content>
          </Route>
          <Route path="/">
            <Hero />
            <Featured />
            <Content>
              <h1>I'm Testamonial Section on Landing</h1>
            </Content>
            <Content>
              <h1>I'm Pricing Section on Landing</h1>
            </Content>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
