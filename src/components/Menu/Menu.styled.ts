import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface IHamburgerMenu {
  open: boolean;
}

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;

  position: fixed;
  top: 0;
  width: 100%;

  padding: 1em calc((100vw - 1024px) / 2);

  @media screen and (max-width: 1024px) {
    padding: 0.8em 1em;
  }
`;

export const Content = styled.section`
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
  font-weight: 500;
  color: ${(props) => props.theme.color.white};

  &.${(props) => props.activeClassName} {
    color: dodgerblue;
  }
`;

export const Logo = styled.img`
  display: inline-block;
`;

export const Button = styled.button`
  color: white;
  background: hsl(23, 100%, 50%);
  border: 1px solid hsl(23, 100%, 50%);
  padding: 0.2em 2em;
  border-radius: 2em;

  &:hover {
    color: white;
    background: hsl(23, 100%, 60%);
    border: 1px solid hsl(23, 100%, 60%);
  }
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

export const BurgerBox = styled.div`
  margin-left: 1em;
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
  }
`;

export const HamburgerMenu = styled.div<IHamburgerMenu>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.color.black};
  transition: 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const HambugerMenuLink = styled(RouterNavLink)`
  font-size: 2.4em;
  padding: 0.4em 0;
`;
