import React from "react";
import * as S from "./CoverCard.styled";

interface Props {
  name: string;
  bgImgUrl: string;
  borderColor: string;
  textColor: string;
  children?: React.ReactNode;
}

export default function CoverCard({
  name,
  bgImgUrl,
  borderColor,
  textColor,
}: Props) {
  return (
    <S.CoverCard bgImgUrl={bgImgUrl} borderColor={borderColor}>
      <S.Title textColor={textColor}>{name}</S.Title>
      <S.StudyTime textColor={textColor}>4 mins</S.StudyTime>
    </S.CoverCard>
  );
}
