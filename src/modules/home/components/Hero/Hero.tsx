import React from "react";
import bg from "assets/images/home-bg-cred-roman-mager.jpg";
import { ReactComponent as Arrow } from "assets/images/arrow.svg";
import styled, { keyframes } from "styled-components";

const rockAnimation = keyframes`
  50% { transform: translateX(0.4em) }
`;

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
  padding: 0.5rem 1.6rem;
  border-radius: 2rem;
  max-width: 16rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${(props) => props.theme.color.greyDarkest};
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.white};
    transition: all 0.2s ease-in-out;
  }
`;

const StyledArrow = styled(Arrow)`
  margin-left: 0.8em;
  fill: ${(props) => props.theme.color.white};
  width: 0.9rem;
  animation-name: ${rockAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
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
            Memorize technical definitions in no time with flashcards. Try now,
            no account required.
          </Subtitle>
          <Button>
            See the decks
            <StyledArrow />
          </Button>
        </Stack>
      </Body>
    </Section>
  );
}
