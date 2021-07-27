import React from "react";
import bg from "assets/images/section-1-bg.jpg";
import styled from "styled-components";

const Section = styled.section`
  height: 90vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Body = styled.div`
  height: 90%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 1.4em;
  font-weight: regular;
`;

const Line = styled.p`
  margin-top: 1em;
  color: ${(props) => props.theme.color.greyLightest};
`;

export default function Hero() {
  return (
    <Section>
      <Body>
        <Title>Nail technical interviews</Title>
        <Subtitle>
          Study flash cards to enhance learning and nail your tests. Use our
          ready-made decks or make you own.
        </Subtitle>
        <Line>Try it now, no account required</Line>
      </Body>
    </Section>
  );
}
