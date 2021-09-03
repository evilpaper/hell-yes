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

interface IHeader {
  textColor: string;
}

// This is only temporary to center placeholder components
const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Deck = styled.ul`
  position: relative;
  width: 16rem;
  height: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.li<any>`
  position: absolute;
  width: 16rem;
  height: 22rem;
  border-radius: 1rem;
  border: 2px solid ${(props) => props.borderColor};
  color: white;
  background-image: url(${(props) => props.bgImgUrl});
  background-size: cover;
  padding: 2rem;
  transform: rotate(${(props) => props.index * Math.random() * 1}deg);
  z-index: ${(props) => props.index * 10};
`;

const Header = styled.h1<IHeader>`
  color: ${(props) => props.textColor};
  font-weight: 700;
  font-size: 1.6em;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
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

  function handleCardClick(e: any) {
    setCards((originalDeck) => {
      const reducedDeck = [...originalDeck.slice(0, originalDeck.length - 1)];
      return reducedDeck;
    });
  }

  // function getRandom(min: number, max: number) {
  //   return Math.random() * (max - min) + min;
  // }

  return (
    <Content>
      <Deck>
        {cards &&
          cards.map((card, index) => (
            <Card
              key={index}
              bgImgUrl={card.bgImgUrl}
              borderColor={card.borderColor}
              onClick={handleCardClick}
              index={index}
              length={cards.length}
            >
              <Header textColor={"white"}>{card.term}</Header>
            </Card>
          ))}
        {!cards.length && <h1>Start again</h1>}
      </Deck>
      <Actions>
        <Button>No</Button>
        <Button>Flip</Button>
        <Button>Yes</Button>
      </Actions>
    </Content>
  );
}
