import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import Home from "modules/home/components/Home/Home";
import PricingPlans from "modules/home/components/PricingPlans/PricingPlans";
import StackedDeck from "modules/decks/components/StackedDeck/StackedDeck";
import RouterWithMenu from "modules/common/components/RouterWithMenu/RouteWithMenu";
import Decks from "modules/decks/components/Decks/Decks";
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
            <StackedDeck />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
