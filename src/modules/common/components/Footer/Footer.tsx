import React from "react";
import * as S from "./Footer.styled";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <S.Footer>
      <S.CopyrightFolio>
        Copyright © {year} Hell Yes | All Rights Reserved
      </S.CopyrightFolio>
      <S.LegalLinksFolio>
        Terms of service | Privacy Policy | Cookies
      </S.LegalLinksFolio>
    </S.Footer>
  );
}
