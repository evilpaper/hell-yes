import React from "react";
import CoverCard from "components/CoverCard/CoverCard";
import styled from "styled-components";

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

export default function Featured() {
  return (
    <>
      <SectionHeading>Featured decks</SectionHeading>
      <List>
        <CoverCard />
        <CoverCard />
        <CoverCard />
        <CoverCard />
        <CoverCard />
        <CoverCard />
        <CoverCard />
        <CoverCard />
        <CoverCard />
        <CoverCard />
      </List>
    </>
  );
}
