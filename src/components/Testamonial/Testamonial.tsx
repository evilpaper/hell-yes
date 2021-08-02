import React from "react";
import styled from "styled-components";
import { ReactComponent as DoubleQouteMark } from "assets/images/doubleqoutemark.svg";
import testUser1 from "assets/images/test-user-1.jpeg";
import testUser2 from "assets/images/test-user-2.jpeg";
import testUser3 from "assets/images/test-user-3.jpeg";

const Body = styled.div`
  margin-top: 1rem;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 6%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Block = styled.blockquote`
  padding: 2rem;
  flex: 1;
`;

const Qoute = styled.p`
  font-size: 1.8em;
  line-height: 1.2;
  font-style: italic;
`;

const AuthorBlock = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.img`
  border-radius: 2rem;
  margin-right: 1rem;
`;

const AuthorName = styled.p`
  font-weight: 700;
`;

const AuthorTitle = styled.p`
  opacity: 0.7;
`;

export default function Testamonial() {
  return (
    <Body>
      <Block>
        <DoubleQouteMark />
        <Qoute>Incredible effective. Highly recommend.</Qoute>
        <AuthorBlock>
          <AuthorImage
            src={testUser1}
            alt="testamonial author"
            width="56px"
            height="56px"
            object-fit="cover"
          />
          <div>
            <AuthorName>Kirk Herrera</AuthorName>
            <AuthorTitle>Team lead</AuthorTitle>
          </div>
        </AuthorBlock>
      </Block>
      <Block>
        <DoubleQouteMark />
        <Qoute>Hell yes is a great tool for active learning.</Qoute>
        <AuthorBlock>
          <AuthorImage
            src={testUser2}
            alt="testamonial author"
            width="56px"
            height="56px"
            object-fit="cover"
          />
          <div>
            <AuthorName>Alma Hansen</AuthorName>
            <AuthorTitle>Frontend Developer</AuthorTitle>
          </div>
        </AuthorBlock>
      </Block>
      <Block>
        <DoubleQouteMark />
        <Qoute>Made me interview ready in a week.</Qoute>
        <AuthorBlock>
          <AuthorImage
            src={testUser3}
            alt="testamonial author"
            width="56px"
            height="56px"
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
