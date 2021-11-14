import React from "react";
import * as S from "./Center.styled";

interface Props {
  children?: React.ReactNode;
}

export default function Center({ children }: Props) {
  return <S.Center>{children}</S.Center>;
}
