import React from "react";
import styled from "styled-components";
import img from "assets/images/card-bg.png";

const SectionHeading = styled.h2`
  font-weight: 600;
  padding-left: 6%;
`;

const List = styled.ul`
  margin-top: 1rem;
  display: flex;
  overflow-x: scroll;

  padding-left: 6%;

  scroll-snap-type: x mandatory;
`;

const Card = styled.li`
  min-width: 16rem;
  height: 22rem;
  border-radius: 1rem;
  border: 4px solid dodgerblue;
  color: white;
  background-image: url(${img});
  background-size: cover;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(0.9);
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
