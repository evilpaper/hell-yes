import React, { useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Logo from "assets/images/logo.png";
import Burger from "components/Burger/Burger";
import * as Styled from "./Menu.styled";
import { addSyntheticLeadingComment } from "typescript";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Styled.Nav>
        <Styled.LeftPart>
          <NavLink to="/">
            <Styled.Logo
              src={Logo}
              alt="Nailed It"
              width="54px"
              height="auto"
              object-fit="cover"
            />
          </NavLink>
          <Styled.SubwayMenu>
            <Styled.RouterNavLink activeClassName="selected" to="decks">
              Decks
            </Styled.RouterNavLink>
            <Styled.RouterNavLink activeClassName="selected" to="pricing">
              Pricing
            </Styled.RouterNavLink>
            <Styled.RouterNavLink activeClassName="selected" to="about">
              About
            </Styled.RouterNavLink>
          </Styled.SubwayMenu>
        </Styled.LeftPart>
        <Styled.RightPart>
          <Styled.Button>Login</Styled.Button>
          <Styled.BurgerBox onClick={() => setOpen(!open)}>
            <Burger open={open} />
          </Styled.BurgerBox>
        </Styled.RightPart>
      </Styled.Nav>
      <Styled.HamburgerMenu open={open} />
      <Switch>
        <Route exact path="/decks">
          <Styled.Content>
            <h1>I'm Decks</h1>
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
