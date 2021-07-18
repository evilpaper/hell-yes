import React from "react";
import styled from "styled-components";

interface IPatty {
  open: boolean;
}

const StyledBurger = styled.button`
  width: 32px;
  height: 28px;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

const Patty = styled.span<IPatty>`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 4px;
  opacity: 1;
  left: 0;
  background-color: ${({ open }) => (open ? "deeppink" : "dodgerblue")};
  transition: 0.2s ease-in-out;

  &:nth-child(1) {
    top: ${({ open }) => (open ? "0" : "12px")};
    transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(45deg)")};
  }
  &:nth-child(2) {
    top: 12px;
    opacity: ${({ open }) => (open ? "1" : "0")};
  }
  &:nth-child(3) {
    top: ${({ open }) => (open ? "24px" : "12px")};
    transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(-45deg)")};
  }
`;

export default function Burger({ open }: { open: boolean }) {
  console.log(open);
  return (
    <StyledBurger aria-label="Main menu">
      <Patty open={open} />
      <Patty open={open} />
      <Patty open={open} />
    </StyledBurger>
  );
}
