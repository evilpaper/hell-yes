import React from "react";
import * as Styled from "./CoverCard.styled";

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
  children,
}: Props) {
  return (
    <Styled.CoverCard bgImgUrl={bgImgUrl} borderColor={borderColor}>
      <Styled.Title textColor={textColor}>{name}</Styled.Title>
      <Styled.StudyTime textColor={textColor}>4 mins</Styled.StudyTime>
    </Styled.CoverCard>
  );
}
