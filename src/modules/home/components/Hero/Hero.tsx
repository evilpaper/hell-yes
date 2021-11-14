import React from "react";
import { useHistory } from "react-router-dom";
import { DECKS } from "constants/DECKS";
import * as S from "./Hero.styled";

const routeID = DECKS[0].routeID;

export default function Hero() {
  const history = useHistory();

  function handleButtonClick() {
    history.push(`/deck/${routeID}`);
  }

  return (
    <S.Section>
      <S.Body>
        <S.Stack>
          <S.Title>
            Get Interview <br />
            Ready Today
          </S.Title>
          <S.Subtitle>
            Memorize technical definitions in no time with flashcards. Try now,
            no account required.
          </S.Subtitle>
          <S.Button onClick={handleButtonClick}>
            Try! It's free
            <S.StyledArrow />
          </S.Button>
        </S.Stack>
      </S.Body>
    </S.Section>
  );
}
