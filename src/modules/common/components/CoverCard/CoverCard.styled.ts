import styled from "styled-components";

interface ICoverCard {
  bgImgUrl: string;
  borderColor: string;
}

interface ITitle {
  textColor: string;
}

interface IStudyTime {
  textColor: string;
}

export const CoverCard = styled.div<ICoverCard>`
  min-width: 16rem;
  height: 22rem;
  border-radius: 1rem;
  color: white;
  background-image: url(${(props) => props.bgImgUrl});
  background-size: cover;
  padding: 2rem;

  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h1<ITitle>`
  color: ${(props) => props.textColor};
  font-weight: 700;
  font-size: 1.6em;
`;

export const StudyTime = styled.p<IStudyTime>`
  color: ${(props) => props.textColor};
  opacity: 0.7;
`;
