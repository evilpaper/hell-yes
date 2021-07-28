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
  font-size: 4.8em;
  font-weight: bold;
  max-width: 10em;
  line-height: 1.2;

  @media screen and (max-width: 768px) {
    font-size: 4em;
  }

  @media screen and (max-width: 480px) {
    font-size: 3.6em;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2em;
  font-weight: regular;
  max-width: 28em;
`;

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.primary};
  padding: 0.3rem 1.6rem;
  border-radius: 2rem;
  max-width: 16rem;
  margin-top: 2rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  display: inline-block;

  &:hover {
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.primaryLight};
    border: 1px solid ${(props) => props.theme.color.primaryLight};
  }
`;

export default function Hero() {
  return (
    <Section>
      <Body>
        <Title>Nail technical interviews</Title>
        <Subtitle>
          Study flash cards and nail your next tests. Use our ready-made decks
          or make you own. Try now, no account required.{" "}
        </Subtitle>
        <Button>Create your free account</Button>
      </Body>
    </Section>
  );
}
