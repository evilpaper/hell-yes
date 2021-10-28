import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as Styled from "./StackedDeck.styled";
import { DECKS } from "constants/DECKS";

interface ICardItem {
  term: string;
  rotation: number;
}

interface ICardItems extends Array<ICardItem> {}

type DeckParams = {
  id: string;
};

function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function TrainingDeck() {
  const [cards, setCards] = useState<ICardItems | []>([]);
  const params = useParams<DeckParams>();
  const history = useHistory();
  const { id } = params;

  useEffect(() => {
    const [selectedDeck] = DECKS.filter((deck) => deck.routeID === id);
    const { cards: cardsFromDeck = [] } = selectedDeck;
    const cardsWithRotation = cardsFromDeck.map((item) => ({
      ...item,
      rotation: getRandom(-5, 5),
    }));
    setCards(cardsWithRotation);
  }, [id]);

  function handleCardClick(e: any) {
    setCards((originalDeck) => {
      const reducedDeck = [...originalDeck.slice(0, originalDeck.length - 1)];
      return reducedDeck;
    });
  }

  function handleBackClick(e: any) {
    history.goBack();
  }

  function handleRestartClick(e: any) {
    console.log("Nice click");
  }

  return (
    <Styled.Content>
      <Styled.BackButton onClick={handleBackClick}>Back</Styled.BackButton>
      <Styled.Deck>
        {cards &&
          cards.map((card, index) => (
            <Styled.Card
              key={index}
              onClick={handleCardClick}
              index={index}
              length={cards.length}
              rotation={card.rotation}
            >
              <Styled.Header textColor={"black"}>{card.term}</Styled.Header>
            </Styled.Card>
          ))}
        {!cards.length && (
          <Styled.RestartButton onClick={handleRestartClick}>
            Start again
          </Styled.RestartButton>
        )}
      </Styled.Deck>
      <Styled.Actions>
        <Styled.Button onClick={handleCardClick}>No</Styled.Button>
        <Styled.Button>Flip</Styled.Button>
        <Styled.Button onClick={handleCardClick}>Yes</Styled.Button>
      </Styled.Actions>
    </Styled.Content>
  );
}
