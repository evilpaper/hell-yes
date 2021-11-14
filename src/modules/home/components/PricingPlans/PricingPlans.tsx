import React from "react";
import * as S from "./PricingPlans.styled";
import { ReactComponent as Check } from "assets/images/check.svg";

export default function PricingPlans() {
  return (
    <S.Body>
      <S.Heading>Create your own decks. Select your plan.</S.Heading>
      <S.Plans>
        <S.Plan>
          <S.PlanHeading>Base</S.PlanHeading>
          <ul>
            <S.PlanContent>
              <Check />
              <S.ContentTextBlock>
                <S.USP>Study unlimited decks</S.USP>
              </S.ContentTextBlock>
            </S.PlanContent>
            <S.PlanContent>
              <Check />
              <S.ContentTextBlock>
                <S.USP>Create up to 3 custom decks</S.USP>
              </S.ContentTextBlock>
            </S.PlanContent>
          </ul>
          <S.Price>Free</S.Price>
          <S.CTA>Notify when available</S.CTA>
        </S.Plan>
        <S.Plan>
          <S.PlanHeading>Premium</S.PlanHeading>
          <ul>
            <S.PlanContent>
              <Check />
              <S.ContentTextBlock>
                <S.USP>Study unlimited decks</S.USP>
              </S.ContentTextBlock>
            </S.PlanContent>
            <S.PlanContent>
              <Check />
              <S.ContentTextBlock>
                <S.USP>Create unlimited custom decks</S.USP>
              </S.ContentTextBlock>
            </S.PlanContent>
          </ul>
          <S.Price>$1/month</S.Price>
          <S.CTA>Notify when available</S.CTA>
        </S.Plan>
      </S.Plans>
    </S.Body>
  );
}
