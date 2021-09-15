import styled from "styled-components";

interface IHeader {
  textColor: string;
}

// This is only temporary to center placeholder components
export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Deck = styled.ul`
  position: relative;
  width: 16rem;
  height: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.li<any>`
  position: absolute;
  width: 16rem;
  height: 22rem;
  border-radius: 1rem;
  border: 2px solid ${(props) => props.borderColor};
  color: white;
  background-image: url(${(props) => props.bgImgUrl});
  background-size: cover;
  padding: 2rem;
  transform: rotate(${(props) => props.rotation}deg);
  z-index: ${(props) => props.index * 10};
`;

export const Header = styled.h1<IHeader>`
  color: ${(props) => props.textColor};
  font-weight: 700;
  font-size: 1.6em;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16rem;
  margin-top: 2rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: transparent;
  border: none;
  color: white;
  padding: 1rem;
  border-radius: 50%;
`;

export const RestartButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 1rem 2rem;
  border-radius: 2rem;
`;
