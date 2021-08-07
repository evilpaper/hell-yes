import React from "react";
import bg from "assets/images/home-bg-cred-roman-mager.jpg";
import styled from "styled-components";

const Section = styled.section`
  height: 80vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Body = styled.div`
  height: 100%;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 6%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Stack = styled.div`
  & > * {
    margin: 0;
  }
  & > * + * {
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 4.8em;
  font-weight: bold;
  max-width: 10em;
  line-height: 1;

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
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.primary};
  padding: 0.3rem 1.6rem;
  border-radius: 2rem;
  max-width: 16rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.color.greyDarkest};
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.white};
    transition: all 0.2s ease-in-out;
  }
`;

export default function Hero() {
  return (
    <Section>
      <Body>
        <Stack>
          <Title>
            Get Interview <br />
            Ready Today
          </Title>
          <Subtitle>
            Memorize technical definitions and concepts fast. Ready-made flash
            cards for developers on-the-go. Try now, no account required.
          </Subtitle>
          <Button>See the decks</Button>
        </Stack>
      </Body>
    </Section>
  );
}
