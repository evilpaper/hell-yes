import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/theme";
import Home from "components/Home/Home";
import PricingPlans from "components/PricingPlans/PricingPlans";
import RouterWithMenu from "components/RouterWithMenu/RouteWithMenu";

import styled from "styled-components";

// This is only temporary to center placeholder components
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
        <Switch>
          <RouterWithMenu exact path="/" component={Home} />
          <RouterWithMenu exact path="/decks" component={PricingPlans} />
          <RouterWithMenu exact path="/pricing" component={PricingPlans} />
          <RouterWithMenu exact path="/about" component={PricingPlans} />
          <Route exact path="/deck/:id">
            <Content>
              <h1>I'm deck</h1>
            </Content>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
