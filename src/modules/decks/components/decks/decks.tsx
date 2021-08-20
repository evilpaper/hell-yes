import React from "react";
import styled from "styled-components";

const Body = styled.div`
  margin-top: 6rem;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 6%;
`;

const Heading = styled.h1`
  text-align: center;
`;

export default function Decks() {
  return (
    <Body>
      <Heading>Decks goes here</Heading>
    </Body>
  );
}
