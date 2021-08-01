import React, { useRef, useEffect } from "react";
import bg from "assets/images/section-1-bg.jpg";
import styled from "styled-components";

const Section = styled.section`
  height: 70vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Body = styled.div`
  height: 90%;
  padding-left: 6%;
  padding-right: 6%;
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
  const bodyEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log(typeof bodyEl?.current?.getBoundingClientRect());
    const left = bodyEl?.current?.getBoundingClientRect().left;
    console.log(left);
  }, []);

  return (
    <Section>
      <Body ref={bodyEl}>
        <Stack>
          <Title>Nail technical interviews</Title>
          <Subtitle>
            Flash cards for fast learning. Use our ready-made decks or create
            your own. Try now, no account required.
          </Subtitle>
          <Button>Create your free account</Button>
        </Stack>
      </Body>
    </Section>
  );
}
