import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "assets/images/logo.png";
import Burger from "modules/common/components/Burger/Burger";
import * as S from "./Menu.styled";

export default function Menu() {
  const [open, setOpen] = useState(false);

  function toggleMenu(): void {
    setOpen(!open);
  }

  return (
    <>
      <S.Nav>
        <S.LeftPart>
          <NavLink to="/">
            <S.Logo
              src={Logo}
              alt="Nailed It"
              width="64px"
              height="auto"
              object-fit="cover"
            />
          </NavLink>
          <S.SubwayMenu>
            <S.RouterNavLink activeClassName="selected" to="instructions">
              Instructions
            </S.RouterNavLink>
            <S.RouterNavLink activeClassName="selected" to="pricing">
              Pricing
            </S.RouterNavLink>
          </S.SubwayMenu>
        </S.LeftPart>
        <S.RightPart>
          <S.Button>My account</S.Button>
          <S.BurgerBox onClick={toggleMenu}>
            <Burger open={open} />
          </S.BurgerBox>
        </S.RightPart>
      </S.Nav>
      <S.HamburgerMenu open={open}>
        <S.HambugerMenuLink
          activeClassName="selected"
          to="instructions"
          onClick={toggleMenu}
        >
          Instructions
        </S.HambugerMenuLink>
        <S.HambugerMenuLink
          activeClassName="selected"
          to="pricing"
          onClick={toggleMenu}
        >
          Pricing
        </S.HambugerMenuLink>
      </S.HamburgerMenu>
    </>
  );
}
