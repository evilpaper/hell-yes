import React from "react";
import bg from "assets/images/section-1-bg.jpg";
import styled from "styled-components";

const Section = styled.section`
  height: 80vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Center = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
`;

const Headline = styled.h1`
  font-size: 6em;
  font-weight: bold;
  background-color: transparent;
`;

export default function Hero() {
  return (
    <Section>
      <Center>
        <Headline>Nail any subject</Headline>
      </Center>
    </Section>
  );
}
