import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8em calc((100vw - 1024px) / 2);

  @media screen and (max-width: 760px) {
    padding: 0.8em 1em;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RouterNavLink = styled(NavLink)`
  padding: 0 2em;
  text-decoration: none;
  cursor: pointer;
  color: gray;

  &.${(props) => props.activeClassName} {
    color: white;
  }
`;

export const Logo = styled.img`
  display: inline-block;
`;

export const StyledButton = styled.button`
  background: white;
  border: 1px solid white;
  padding: 0.2em 2em;
  border-radius: 2em;
  color: black;
`;

export const SubwayMenu = styled.div`
  margin-left: 2em;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const RightPart = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HamburgerMenu = styled.div`
  margin-left: 1em;
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;
