// import React from "react";
import * as S from "./Burger.styled";

export default function Burger({ open }: { open: boolean }) {
  return (
    <S.Burger aria-label="Main menu">
      <S.Patty open={open} />
      <S.Patty open={open} />
      <S.Patty open={open} />
    </S.Burger>
  );
}
