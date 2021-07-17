import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  width: 3.2em;
  height: 3em;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const Patty = styled.span`
  display: block;
  position: absolute;
  height: 0.6em;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  background-color: deeppink;
  transition: 0.2s ease-in-out;

  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 1.2em;
  }
  &:nth-child(3) {
    top: 2.4em;
  }
`;

export default function Burger() {
  return (
    <StyledBurger>
      <Patty />
      <Patty />
      <Patty />
    </StyledBurger>
  );
}
