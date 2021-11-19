import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import * as S from "./StackedDeck.styled";
import { DECKS } from "constants/DECKS";

interface ICardItem {
  term: string;
  definition: string;
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
  const [deck, setDeck] = useState<any>();
  const [windowHeight, setWindowHeight] = useState(0);
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
    setDeck(selectedDeck);
    setCards(cardsWithRotation);
  }, [id]);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, [windowHeight]);

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
    <S.Background height={windowHeight}>
      <S.Content>
        <S.TopBar>
          <S.BackButton onClick={handleBackClick}>
            <S.BackIcon />
            Back
          </S.BackButton>
        </S.TopBar>
        <S.Deck>
          {cards &&
            cards.map((card, index) => (
              <S.Card
                key={index}
                onClick={handleCardClick}
                index={index}
                length={cards.length}
                rotation={card.rotation}
              >
                <S.Logo src={deck.logo} alt="Deck logo" />
                {/* <S.Kicker>Term</S.Kicker> */}
                <S.Header>{card.definition}</S.Header>
                <S.Footer>{deck.name}</S.Footer>
              </S.Card>
            ))}
          {!cards.length && (
            <S.RestartButton onClick={handleRestartClick}>
              Start again
            </S.RestartButton>
          )}
        </S.Deck>
        <S.Actions>
          <S.SelectButton onClick={handleCardClick}>
            <S.CrossIcon />
          </S.SelectButton>
          <S.FlipButton>Flip</S.FlipButton>
          <S.SelectButton onClick={handleCardClick}>
            <S.CheckIcon />
          </S.SelectButton>
        </S.Actions>
      </S.Content>
    </S.Background>
  );
}
