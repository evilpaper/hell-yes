import styled from "styled-components";

interface IPatty {
  open: boolean;
}

export const Burger = styled.button`
  width: 32px;
  height: 28px;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const Patty = styled.span<IPatty>`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 4px;
  opacity: 1;
  left: 0;
  background-color: black;
  transition: 0.2s ease-in-out;

  &:nth-child(1) {
    top: ${({ open }) => (open ? "12px" : "0")};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
  }
  &:nth-child(2) {
    top: 12px;
    opacity: ${({ open }) => (open ? "0" : "1")};
  }
  &:nth-child(3) {
    top: ${({ open }) => (open ? "12px" : "24px")};
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
  }
`;
