import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
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
