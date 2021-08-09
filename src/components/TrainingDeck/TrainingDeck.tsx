import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoverCard from "components/CoverCard/CoverCard";
import styled from "styled-components";
import { DECKS } from "constants/DECKS";
import { stringify } from "querystring";

// This is only temporary to center placeholder components
export const Content = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IDeck {
  name: string;
  bgImgUrl: string;
  borderColor: string;
  textColor: string;
  cards?: { term: string }[];
}

interface ICardItem {
  term: string;
}

interface ICardItems extends Array<ICardItem> {}

type DeckParams = {
  id: string;
};

export default function TrainingDeck() {
  const [deck, setDeck] = useState<IDeck | {}>({});
  const [cards, setCards] = useState<ICardItems | []>([]);
  const params = useParams<DeckParams>();
  const { id } = params;

  useEffect(() => {
    const filteredDecks = DECKS.filter((deck) => deck.id === id);
    const [currentDeck] = filteredDecks || [];
    const { cards: currentCards = [] } = currentDeck;
    setCards(currentCards);
    setDeck(currentDeck);
  }, [id]);

  return (
    <Content>
      {cards.map((card) => {
        return null;
      })}
    </Content>
  );
}
