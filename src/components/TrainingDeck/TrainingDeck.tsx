import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoverCard from "components/CoverCard/CoverCard";
import styled from "styled-components";
import { DECKS } from "constants/DECKS";

// This is only temporary to center placeholder components
export const Content = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const defaultDeck = {
  name: "Default",
  bgImgUrl: "Default",
  borderColor: "Default",
  textColor: "Default",
};

type Deck = {
  name: string;
  bgImgUrl: string;
  borderColor: string;
  textColor: string;
};

type DeckParams = {
  id: string;
};

export default function TrainingDeck() {
  const [deck, setDeck] = useState<Deck>(defaultDeck);
  const params = useParams<DeckParams>();
  const { id } = params;

  useEffect(() => {
    const currentDeck = DECKS.filter((deck) => deck.id === id);
    setDeck(currentDeck[0]);
  }, [id]);

  return (
    <Content>
      <CoverCard
        name={deck.name}
        bgImgUrl={deck.bgImgUrl}
        textColor={deck.textColor}
        borderColor={deck.borderColor}
      />
      <CoverCard
        name={deck.name}
        bgImgUrl={deck.bgImgUrl}
        textColor={deck.textColor}
        borderColor={deck.borderColor}
      />
    </Content>
  );
}
