import React from "react";
import styled from "styled-components";

const SectionHeading = styled.h2`
  font-weight: 600;
  padding-left: 6%;
`;

const List = styled.ul`
  margin-top: 1rem;
  display: flex;

  padding-left: 6%;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

  scroll-snap-type: x mandatory;

  z-index: 1000;
`;

const Card = styled.li`
  min-width: 16rem;
  height: 20rem;
  border-radius: 1rem;
  color: black;
  background-color: white;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function Featured() {
  return (
    <>
      <SectionHeading>Featured decks</SectionHeading>
      <List>
        <Card>I'm a card</Card>
        <Card>I'm a card</Card>
        <Card>I'm a card</Card>
        <Card>I'm a card</Card>
        <Card>I'm a card</Card>
        <Card>I'm a card</Card>
      </List>
    </>
  );
}
