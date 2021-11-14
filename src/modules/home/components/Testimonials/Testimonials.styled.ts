import styled from "styled-components";
import { ReactComponent as DoubleQouteMark } from "assets/images/doubleqoutemark.svg";

export const Body = styled.div`
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

export const Block = styled.blockquote`
  padding: 2rem;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  display: flex;
  flex-direction: column;
`;

export const StyledDoubleQouteMark = styled(DoubleQouteMark)`
  margin-bottom: 1rem;
`;

export const Qoute = styled.p`
  font-size: 1.8em;
  line-height: 1.2;
  font-style: italic;
`;

export const AuthorBlock = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.img`
  border-radius: 2rem;
  margin-right: 1.4rem;
`;

export const AuthorName = styled.p`
  font-weight: 700;
`;

export const AuthorTitle = styled.p`
  opacity: 0.7;
`;
