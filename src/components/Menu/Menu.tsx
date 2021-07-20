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
        <NavLink to="/">
          <img
            src={Logo}
            alt="Nailed It"
            width="72px"
            height="auto"
            object-fit="cover"
          />
        </NavLink>
        <Styled.BaugetteMenu>
          <Styled.StyledNavLink activeClassName="selected" to="services">
            Services
          </Styled.StyledNavLink>
          <Styled.StyledNavLink activeClassName="selected" to="help">
            Help
          </Styled.StyledNavLink>
          <Styled.StyledNavLink activeClassName="selected" to="about">
            About
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
        <Route exact path="/services">
          <Styled.Content>
            <h1>I'm Services</h1>
          </Styled.Content>
        </Route>
        <Route exact path="/help">
          <Styled.Content>
            <h1>I'm Help</h1>
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
