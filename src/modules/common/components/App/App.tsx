import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import Home from "modules/home/components/Home/Home";
import PricingPlans from "modules/home/components/PricingPlans/PricingPlans";
import StackedDeck from "modules/deck/components/StackedDeck/StackedDeck";
import RouterWithMenu from "modules/common/components/RouterWithMenu/RouteWithMenu";
import Instructions from "modules/instructions/components/Instructions";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <RouterWithMenu exact path="/" component={Home} />
          <RouterWithMenu exact path="/pricing" component={PricingPlans} />
          <RouterWithMenu exact path="/instructions" component={Instructions} />
          <Route exact path="/deck/:id">
            <StackedDeck />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
