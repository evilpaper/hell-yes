import styled from "styled-components";
import img from "assets/images/card-bg.png";

export const CoverCard = styled.li`
  min-width: 16rem;
  height: 22rem;
  border-radius: 1rem;
  border: 4px solid dodgerblue;
  color: white;
  background-image: url(${img});
  background-size: cover;
  margin-right: 2rem;
  padding: 2rem;

  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-weight: 700;
  font-size: 1.6em;
`;

export const StudyTime = styled.p`
  color: ${(props) => props.theme.color.white};
  opacity: 0.7;
`;
