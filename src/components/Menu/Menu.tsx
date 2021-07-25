import React, { useState } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Logo from "assets/images/logo.png";
import Burger from "components/Burger/Burger";
import Hero from "components/Hero/Hero";
import * as Styled from "./Menu.styled";

export default function Menu() {
  const [open, setOpen] = useState(false);

  function toggleMenu(): void {
    setOpen(!open);
  }

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
          <Styled.BurgerBox onClick={toggleMenu}>
            <Burger open={open} />
          </Styled.BurgerBox>
        </Styled.RightPart>
      </Styled.Nav>
      <Styled.HamburgerMenu open={open}>
        <Styled.HambugerMenuLink
          activeClassName="selected"
          to="decks"
          onClick={toggleMenu}
        >
          Decks
        </Styled.HambugerMenuLink>
        <Styled.HambugerMenuLink
          activeClassName="selected"
          to="pricing"
          onClick={toggleMenu}
        >
          Pricing
        </Styled.HambugerMenuLink>
        <Styled.HambugerMenuLink
          activeClassName="selected"
          to="about"
          onClick={toggleMenu}
        >
          About
        </Styled.HambugerMenuLink>
      </Styled.HamburgerMenu>
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
          <Hero />
          <Styled.Content>
            <h1>I'm Featured Decks Section on Landing</h1>
          </Styled.Content>
          <Styled.Content>
            <h1>I'm Testamonial Section on Landing</h1>
          </Styled.Content>
          <Styled.Content>
            <h1>I'm Pricing Section on Landing</h1>
          </Styled.Content>
        </Route>
      </Switch>
    </>
  );
}
