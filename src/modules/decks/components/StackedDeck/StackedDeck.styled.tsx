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
  height: 24rem;
  border-radius: 1rem;
  color: black;
  background-color: white;
  background-size: cover;
  padding: 2rem;
  transform: rotate(${(props) => props.rotation}deg);
  z-index: ${(props) => props.index * 10};
  /* prettier-ignore */
  box-shadow: 0 4px 4px rgba(0,0,0,0.3);
`;

export const Header = styled.h1<IHeader>`
  color: ${(props) => props.textColor};
  font-weight: 500;
  font-size: 1.4em;
  margin: 0 auto;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16rem;
  margin-top: 3rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid slategrey;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 10rem;
  min-width: 5rem;
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
