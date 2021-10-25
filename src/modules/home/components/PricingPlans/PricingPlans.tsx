import React from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "assets/images/check.svg";

export default function PricingPlans() {
  return (
    <Body>
      <Heading>Create your own decks. Select your plan.</Heading>
      <Plans>
        <Plan>
          <PlanHeading>Base</PlanHeading>
          <ul>
            <PlanContent>
              <Check />
              <ContentTextBlock>
                <USP>Study unlimited decks</USP>
              </ContentTextBlock>
            </PlanContent>
            <PlanContent>
              <Check />
              <ContentTextBlock>
                <USP>Create up to 3 custom decks</USP>
              </ContentTextBlock>
            </PlanContent>
          </ul>
          <Price>Free</Price>
          <CTA>Create your free account</CTA>
        </Plan>
        <Plan>
          <PlanHeading>Premium</PlanHeading>
          <ul>
            <PlanContent>
              <Check />
              <ContentTextBlock>
                <USP>Study unlimited decks</USP>
              </ContentTextBlock>
            </PlanContent>
            <PlanContent>
              <Check />
              <ContentTextBlock>
                <USP>Create unlimited custom decks</USP>
              </ContentTextBlock>
            </PlanContent>
          </ul>
          <Price>$1/month</Price>
          <CTA>Buy Premium</CTA>
        </Plan>
      </Plans>
    </Body>
  );
}

const Body = styled.div`
  margin-top: 6rem;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 6%;
`;

const Heading = styled.h1`
  text-align: center;
`;

const Plans = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Plan = styled.li`
  padding: 4rem 2rem;
  margin: 1rem;
  border: 2px solid ${(props) => props.theme.color.primaryLight};
  border-radius: 1rem;
  min-height: 26rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PlanHeading = styled.h1`
  text-align: center;
`;

const Price = styled.h1`
  margin-top: 2rem;
  text-align: center;
`;

const CTA = styled.button`
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.primary};
  border: 1px solid ${(props) => props.theme.color.primary};
  padding: 0.3rem 1.6rem;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  width: 100%;
  margin-top: 2rem;

  &:hover {
    color: ${(props) => props.theme.color.greyDarkest};
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.white};
    transition: all 0.2s ease-in-out;
  }
`;

const PlanContent = styled.li`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`;

const ContentTextBlock = styled.div`
  margin-left: 1rem;
`;

const USP = styled.p`
  line-height: 1;
`;
