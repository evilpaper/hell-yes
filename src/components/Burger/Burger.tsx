import React from "react";
import * as Styled from "./Burger.styled";

export default function Burger({ open }: { open: boolean }) {
  return (
    <Styled.Burger aria-label="Main menu">
      <Styled.Patty open={open} />
      <Styled.Patty open={open} />
      <Styled.Patty open={open} />
    </Styled.Burger>
  );
}
