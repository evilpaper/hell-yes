import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "assets/images/logo.png";
import Burger from "modules/common/components/Burger/Burger";

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
              width="64px"
              height="auto"
              object-fit="cover"
            />
          </NavLink>
          <Styled.SubwayMenu>
            <Styled.RouterNavLink activeClassName="selected" to="instructions">
              Instructions
            </Styled.RouterNavLink>
            <Styled.RouterNavLink activeClassName="selected" to="pricing">
              Pricing
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
          to="instructions"
          onClick={toggleMenu}
        >
          Instructions
        </Styled.HambugerMenuLink>
        <Styled.HambugerMenuLink
          activeClassName="selected"
          to="pricing"
          onClick={toggleMenu}
        >
          Pricing
        </Styled.HambugerMenuLink>
      </Styled.HamburgerMenu>
    </>
  );
}
