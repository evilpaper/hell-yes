import React from "react";
import * as Styled from "./CoverCard.styled";

interface Props {
  children?: React.ReactNode;
}

export default function CoverCard({ children }: Props) {
  return (
    <Styled.CoverCard>
      <Styled.Title>Title</Styled.Title>
      <Styled.StudyTime>4 mins</Styled.StudyTime>
    </Styled.CoverCard>
  );
}
