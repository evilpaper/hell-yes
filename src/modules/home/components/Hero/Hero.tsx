import React from "react";
import { useHistory } from "react-router-dom";
import bg from "assets/images/home-bg-cred-roman-mager.jpg";
import { ReactComponent as Arrow } from "assets/images/arrow.svg";
import styled, { keyframes } from "styled-components";
import { DECKS } from "constants/DECKS";

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
  background: linear-gradient(45deg, #fa1cff, #fa0169);
  border: none;
  padding: 0.5rem 1.6rem;
  border-radius: 2rem;
  max-width: 16rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.color.greyDarkest};
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.white};
    transition: all 0.2s ease-in-out;

    & > * {
      fill: ${(props) => props.theme.color.greyDarkest};
    }
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

const routeID = DECKS[0].routeID;

export default function Hero() {
  const history = useHistory();

  function handleButtonClick() {
    history.push(`/deck/${routeID}`);
  }

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
          <Button onClick={handleButtonClick}>
            Try! It's free
            <StyledArrow />
          </Button>
        </Stack>
      </Body>
    </Section>
  );
}
