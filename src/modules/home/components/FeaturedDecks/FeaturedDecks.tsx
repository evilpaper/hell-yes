import React from "react";
import { Link } from "react-router-dom";
import CoverCard from "modules/common/components/CoverCard/CoverCard";
import * as S from "./FeaturedDecks.styled";
import { DECKS } from "constants/DECKS";

export default function FeaturedDecks() {
  const decks = DECKS || [];

  return (
    <>
      <S.SectionHeading>Featured decks</S.SectionHeading>
      <S.List>
        {decks.map((deck) => (
          <S.ListItem key={deck.id}>
            <Link to={`/deck/${deck.routeID}`}>
              <CoverCard
                name={deck.name}
                bgImgUrl={deck.bgImgUrl}
                textColor={deck.textColor}
                borderColor={deck.borderColor}
              />
            </Link>
          </S.ListItem>
        ))}
      </S.List>
    </>
  );
}
