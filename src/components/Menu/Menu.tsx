import React, { useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Logo from "assets/images/logo.png";
import Burger from "components/Burger/Burger";

const Nav = styled.nav`
  border: 1px solid tomato;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  padding: 0.4em calc((100vw - 960px) / 2);

  @media screen and (max-width: 820px) {
    padding: 0.4em 1em;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  padding: 0 2em;
  text-decoration: none;
  cursor: pointer;

  &.${(props) => props.activeClassName} {
    color: dodgerblue;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border: 2px solid tomato;
  padding: 1em 2em;
  border-radius: 2em;
`;

const BaugetteMenu = styled.div`
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const RightPart = styled.div`
  display: flex;
  align-items: center;
`;

const HamburgerMenu = styled.div`
  margin-left: 1em;
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={Logo}
            alt="Nailed It"
            width="72px"
            height="auto"
            object-fit="cover"
          />
        </NavLink>
        <BaugetteMenu>
          <StyledNavLink activeClassName="selected" to="services">
            Services
          </StyledNavLink>
          <StyledNavLink activeClassName="selected" to="help">
            Help
          </StyledNavLink>
          <StyledNavLink activeClassName="selected" to="about">
            About
          </StyledNavLink>
        </BaugetteMenu>
        <RightPart>
          <StyledButton>Login</StyledButton>
          <HamburgerMenu onClick={() => setOpen(!open)}>
            <Burger open={open} />
          </HamburgerMenu>
        </RightPart>
      </Nav>
      <Switch>
        <Route exact path="/services">
          <Content>
            <h1>I'm Services</h1>
          </Content>
        </Route>
        <Route exact path="/help">
          <Content>
            <h1>I'm Help</h1>
          </Content>
        </Route>
        <Route exact path="/about">
          <Content>
            <h1>I'm About</h1>
          </Content>
        </Route>
        <Route path="/">
          <Content>
            <h1>I'm Landing</h1>
          </Content>
        </Route>
      </Switch>
    </>
  );
}
