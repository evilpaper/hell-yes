import React from "react";
import { Link } from "react-router-dom";
import CoverCard from "components/CoverCard/CoverCard";
import styled from "styled-components";
import { DECKS } from "constants/DECKS";

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
  const decks = DECKS || [];

  return (
    <>
      <SectionHeading>Featured decks</SectionHeading>

      <List>
        {" "}
        {decks.map((deck) => (
          <Link to={`/deck/${deck.id}`}>
            <CoverCard
              key={deck.id}
              name={deck.name}
              bgImgUrl={deck.bgImgUrl}
              textColor={deck.textColor}
              borderColor={deck.borderColor}
            />
          </Link>
        ))}
      </List>
    </>
  );
}
