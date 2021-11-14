import React from "react";
import * as S from "./Instructions.styled";
import { ReactComponent as DoubleQouteMark } from "assets/images/doubleqoutemark.svg";

export default function Instructions() {
  return (
    <S.Body>
      <S.Heading>Make flashcards more powerful with these 3 tips</S.Heading>
      <section>
        <DoubleQouteMark />
        <h1>Retrieve</h1>
        <p>Don't cheat</p>
      </section>
      <section>
        <DoubleQouteMark />
        <h1>Re-order</h1>
        <p>Shuffle and interleave</p>
      </section>
      <section>
        <DoubleQouteMark />
        <h1>Repeat</h1>
        <p>At least 3 times</p>
      </section>
    </S.Body>
  );
}
