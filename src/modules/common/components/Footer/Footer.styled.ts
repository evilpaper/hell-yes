import styled from "styled-components";

export const Footer = styled.footer`
  padding: 2rem 0;
  & > * + * {
    margin-top: 2rem;
  }
`;

export const CopyrightFolio = styled.p`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.color.greyLight};
`;

export const LegalLinksFolio = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 2em;
  color: ${(props) => props.theme.color.grey};
`;
