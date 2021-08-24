import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "common/theme/theme";
import Home from "modules/home/components/Home/Home";
import PricingPlans from "modules/home/components/PricingPlans/PricingPlans";
import TrainingDeck from "components/TrainingDeck/TrainingDeck";
import RouterWithMenu from "components/RouterWithMenu/RouteWithMenu";
import Decks from "modules/decks/components/decks/Decks";
import About from "modules/about/components/About";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <RouterWithMenu exact path="/" component={Home} />
          <RouterWithMenu exact path="/decks" component={Decks} />
          <RouterWithMenu exact path="/pricing" component={PricingPlans} />
          <RouterWithMenu exact path="/about" component={About} />
          <Route exact path="/deck/:id">
            <TrainingDeck />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
