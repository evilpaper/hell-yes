import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CoverCard from "components/CoverCard/CoverCard";
import styled from "styled-components";

// This is only temporary to center placeholder components
export const Content = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function TrainingDeck() {
  const params = useParams();
  console.log(params);
  useEffect(() => {});
  return (
    <Content>
      <h1>I'm a deck in training mode.</h1>
    </Content>
  );
}
