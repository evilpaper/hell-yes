import React from "react";
import styled from "styled-components";
import { ReactComponent as DoubleQouteMark } from "assets/images/doubleqoutemark.svg";

const Body = styled.div`
  margin-top: 6rem;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 6%;
  min-height: 75vh;
`;

const Heading = styled.h1`
  text-align: center;
`;

export default function About() {
  return (
    <Body>
      <Heading>Make flashcards more powerful with these 3 tips</Heading>
      <section>
        <DoubleQouteMark />
        <h1>Retrieve</h1>
        <p>Don't cheat</p>
      </section>
      <section>
        <DoubleQouteMark />
        <h1>Re-order</h1>
        <p>Shuffle and interleave</p>
      </section>
      <section>
        <DoubleQouteMark />
        <h1>Repeat</h1>
        <p>At least 3 times</p>
      </section>
    </Body>
  );
}
