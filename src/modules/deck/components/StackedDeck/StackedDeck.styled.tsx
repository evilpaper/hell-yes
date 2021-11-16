import styled from "styled-components";

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

  z-index: ${(props) => props.index * 10};
  /* prettier-ignore */
  box-shadow: 0 4px 4px rgba(0,0,0,0.3);
  overflow: hidden;

  & > * {
    margin-top: 0.6rem;
  }
`;

export const Logo = styled.img`
  margin: 0 auto;
  width: 2.6rem;
`;

export const Kicker = styled.p`
  color: ${(props) => props.theme.color.grey};
  text-align: center;
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.color.greyDark};
  font-weight: 400;
  line-height: 1.2em;
  font-size: 1.2em;
  text-align: center;
`;

export const Footer = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 4rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #fa1cff, #fa0169);
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16rem;
  margin-top: 3rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.color.grey};
  color: white;
  padding: 1rem 1rem;
  border-radius: 10rem;
  min-width: 4.6rem;
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
