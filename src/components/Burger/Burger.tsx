import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  width: 32px;
  height: 28px;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const Patty = styled.span`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 4px;
  opacity: 1;
  left: 0;
  background-color: deeppink;
  transition: 0.2s ease-in-out;

  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 12px;
  }
  &:nth-child(3) {
    top: 24px;
  }
`;

export default function Burger() {
  return (
    <StyledBurger aria-label="Main menu">
      <Patty />
      <Patty />
      <Patty />
    </StyledBurger>
  );
}
