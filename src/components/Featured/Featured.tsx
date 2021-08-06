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

const ListItem = styled.li`
  margin-right: 2rem;
`;

export default function Featured() {
  const decks = DECKS || [];

  return (
    <>
      <SectionHeading>Featured decks</SectionHeading>

      <List>
        {" "}
        {decks.map((deck) => (
          <ListItem key={deck.id}>
            <Link to={`/deck/${deck.id}`}>
              <CoverCard
                name={deck.name}
                bgImgUrl={deck.bgImgUrl}
                textColor={deck.textColor}
                borderColor={deck.borderColor}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
