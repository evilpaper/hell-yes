import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4em;
  padding: 0.4em calc((100vw - 960px) / 2);

  @media screen and (max-width: 820px) {
    padding: 0.4em 1em;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0 2em;
  text-decoration: none;
  cursor: pointer;

  &.${(props) => props.activeClassName} {
    color: dodgerblue;
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid black;
  padding: 0.6em 2em;
  border-radius: 2em;
`;

export const BaugetteMenu = styled.div`
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const RightPart = styled.div`
  display: flex;
  align-items: center;
`;

export const HamburgerMenu = styled.div`
  margin-left: 1em;
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;
