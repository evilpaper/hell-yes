import React from "react";
import testUser1 from "assets/images/test-user-1.jpeg";
import testUser2 from "assets/images/test-user-2.jpeg";
import testUser3 from "assets/images/test-user-3.jpeg";
import * as S from "./Testimonials.styled";

export default function Testamonial() {
  return (
    <S.Body>
      <S.Block>
        <S.StyledDoubleQouteMark />
        <S.Qoute>Incredible effective. Highly recommend.</S.Qoute>
        <S.AuthorBlock>
          <S.AuthorImage
            src={testUser1}
            alt="testamonial author"
            width="48px"
            height="48px"
            object-fit="cover"
          />
          <div>
            <S.AuthorName>Kirk Herrera</S.AuthorName>
            <S.AuthorTitle>Team lead</S.AuthorTitle>
          </div>
        </S.AuthorBlock>
      </S.Block>
      <S.Block>
        <S.StyledDoubleQouteMark />
        <S.Qoute>Hell yes is a great tool for active learning.</S.Qoute>
        <S.AuthorBlock>
          <S.AuthorImage
            src={testUser2}
            alt="testamonial author"
            width="48px"
            height="48px"
            object-fit="cover"
          />
          <div>
            <S.AuthorName>Alma Hansen</S.AuthorName>
            <S.AuthorTitle>Frontend Developer</S.AuthorTitle>
          </div>
        </S.AuthorBlock>
      </S.Block>
      <S.Block>
        <S.StyledDoubleQouteMark />
        <S.Qoute>Made me interview ready in a week.</S.Qoute>
        <S.AuthorBlock>
          <S.AuthorImage
            src={testUser3}
            alt="testamonial author"
            width="48px"
            height="48px"
            object-fit="cover"
          />
          <div>
            <S.AuthorName>Alberto Wood</S.AuthorName>
            <S.AuthorTitle>CTO</S.AuthorTitle>
          </div>
        </S.AuthorBlock>
      </S.Block>
    </S.Body>
  );
}
