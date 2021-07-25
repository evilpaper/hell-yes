import React from "react";
import styled from "styled-components";

const CopyrightFolio = styled.p`
  width: 100%;
  text-align: center;
`;

const LegalLinksFolio = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 2em;
`;

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <CopyrightFolio>© {year} Hell Yes | All Rights Reserved</CopyrightFolio>;
      <LegalLinksFolio>
        Terms of service | Privacy Policy | Cookies
      </LegalLinksFolio>
    </>
  );
}
