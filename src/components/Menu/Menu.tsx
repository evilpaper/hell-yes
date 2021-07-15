import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Logo from "assets/images/logo.png";

const Nav = styled.nav`
  border: 1px solid tomato;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Menu() {
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
        <div>
          <NavLink activeClassName="selected" to="services">
            Services
          </NavLink>
          <NavLink activeClassName="selected" to="help">
            Help
          </NavLink>
          <NavLink activeClassName="selected" to="about">
            About
          </NavLink>
        </div>
        <button>Login</button>
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
