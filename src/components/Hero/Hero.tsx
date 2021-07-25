import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Headline = styled.h1`
  font-size: 6em;
  font-weight: bold;
`;

export default function Hero() {
  return (
    <Section>
      <Headline>Nail any subject</Headline>
    </Section>
  );
}
