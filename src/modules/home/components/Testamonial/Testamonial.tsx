import React from "react";
import styled from "styled-components";
import { ReactComponent as DoubleQouteMark } from "assets/images/doubleqoutemark.svg";
import testUser1 from "assets/images/test-user-1.jpeg";
import testUser2 from "assets/images/test-user-2.jpeg";
import testUser3 from "assets/images/test-user-3.jpeg";

export default function Testamonial() {
  return (
    <Body>
      <Block>
        <StyledDoubleQouteMark />
        <Qoute>Incredible effective. Highly recommend.</Qoute>
        <AuthorBlock>
          <AuthorImage
            src={testUser1}
            alt="testamonial author"
            width="48px"
            height="48px"
            object-fit="cover"
          />
          <div>
            <AuthorName>Kirk Herrera</AuthorName>
            <AuthorTitle>Team lead</AuthorTitle>
          </div>
        </AuthorBlock>
      </Block>
      <Block>
        <StyledDoubleQouteMark />
        <Qoute>Hell yes is a great tool for active learning.</Qoute>
        <AuthorBlock>
          <AuthorImage
            src={testUser2}
            alt="testamonial author"
            width="48px"
            height="48px"
            object-fit="cover"
          />
          <div>
            <AuthorName>Alma Hansen</AuthorName>
            <AuthorTitle>Frontend Developer</AuthorTitle>
          </div>
        </AuthorBlock>
      </Block>
      <Block>
        <StyledDoubleQouteMark />
        <Qoute>Made me interview ready in a week.</Qoute>
        <AuthorBlock>
          <AuthorImage
            src={testUser3}
            alt="testamonial author"
            width="48px"
            height="48px"
            object-fit="cover"
          />
          <div>
            <AuthorName>Alberto Wood</AuthorName>
            <AuthorTitle>CTO</AuthorTitle>
          </div>
        </AuthorBlock>
      </Block>
    </Body>
  );
}

const Body = styled.div`
  margin-top: 6rem;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 6%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // The switcher pattern
  & > * {
    flex-grow: 1;
    flex-basis: calc((40rem - 100%) * 999);
  }
`;

const Block = styled.blockquote`
  padding: 2rem;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  display: flex;
  flex-direction: column;
`;

const StyledDoubleQouteMark = styled(DoubleQouteMark)`
  margin-bottom: 1rem;
`;

const Qoute = styled.p`
  font-size: 1.8em;
  line-height: 1.2;
  font-style: italic;
`;

const AuthorBlock = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  border-radius: 2rem;
  margin-right: 1.4rem;
`;

const AuthorName = styled.p`
  font-weight: 700;
`;

const AuthorTitle = styled.p`
  opacity: 0.7;
`;
