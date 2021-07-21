import React, { useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Logo from "assets/images/logo.png";
import Burger from "components/Burger/Burger";
import * as Styled from "./Menu.styled";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Styled.Nav>
        <Styled.BaugetteMenu>
          <NavLink to="/">
            <Styled.Logo
              src={Logo}
              alt="Nailed It"
              width="72px"
              height="auto"
              object-fit="cover"
            />
          </NavLink>
          <Styled.StyledNavLink activeClassName="selected" to="decks">
            Decks
          </Styled.StyledNavLink>
          <Styled.StyledNavLink activeClassName="selected" to="how">
            How It Works
          </Styled.StyledNavLink>
          <Styled.StyledNavLink activeClassName="selected" to="pricing">
            Pricing
          </Styled.StyledNavLink>
          <Styled.StyledNavLink activeClassName="selected" to="about">
            About us
          </Styled.StyledNavLink>
        </Styled.BaugetteMenu>
        <Styled.RightPart>
          <Styled.StyledButton>Login</Styled.StyledButton>
          <Styled.HamburgerMenu onClick={() => setOpen(!open)}>
            <Burger open={open} />
          </Styled.HamburgerMenu>
        </Styled.RightPart>
      </Styled.Nav>
      <Switch>
        <Route exact path="/decks">
          <Styled.Content>
            <h1>I'm Decks</h1>
          </Styled.Content>
        </Route>
        <Route exact path="/how">
          <Styled.Content>
            <h1>I'm How It Works</h1>
          </Styled.Content>
        </Route>
        <Route exact path="/pricing">
          <Styled.Content>
            <h1>I'm Pricing</h1>
          </Styled.Content>
        </Route>
        <Route exact path="/about">
          <Styled.Content>
            <h1>I'm About</h1>
          </Styled.Content>
        </Route>
        <Route path="/">
          <Styled.Content>
            <h1>I'm Landing</h1>
          </Styled.Content>
        </Route>
      </Switch>
    </>
  );
}
