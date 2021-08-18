import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/theme";
import Home from "components/Home/Home";
import PricingPlans from "components/PricingPlans/PricingPlans";
import TrainingDeck from "components/TrainingDeck/TrainingDeck";
import RouterWithMenu from "components/RouterWithMenu/RouteWithMenu";
import Featured from "components/Featured/Featured";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <RouterWithMenu exact path="/" component={Home} />
          <RouterWithMenu exact path="/decks" component={Featured} />
          <RouterWithMenu exact path="/pricing" component={PricingPlans} />
          <RouterWithMenu exact path="/about" component={PricingPlans} />
          <Route exact path="/deck/:id">
            <TrainingDeck />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
