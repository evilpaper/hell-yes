import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { DECKS } from "constants/DECKS";

interface ICardItem {
  term: string;
  bgImgUrl: string;
  borderColor: string;
}

interface ICardItems extends Array<ICardItem> {}

type DeckParams = {
  id: string;
};

// This is only temporary to center placeholder components
export const Content = styled.section`
  padding: 3rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 16rem));
  justify-content: center;
  align-content: center;
`;

export const Card = styled.div<any>`
  min-width: 16rem;
  height: 22rem;
  border-radius: 1rem;
  border: 2px solid ${(props) => props.borderColor};
  color: white;
  background-image: url(${(props) => props.bgImgUrl});
  background-size: cover;
  padding: 2rem;

  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
`;

export default function TrainingDeck() {
  const [cards, setCards] = useState<ICardItems | []>([]);
  const params = useParams<DeckParams>();
  const { id } = params;

  useEffect(() => {
    const [selectedDeck] = DECKS.filter((deck) => deck.routeID === id);
    const { cards: cardsFromDeck = [] } = selectedDeck;
    setCards(cardsFromDeck);
  }, [id]);

  return (
    <Content>
      {cards.map((card, index) => (
        <Card
          key={index}
          bgImgUrl={card.bgImgUrl}
          borderColor={card.borderColor}
        >
          {card.term}
        </Card>
      ))}
    </Content>
  );
}
