import styled from "styled-components";


export const Body = styled.div`
  margin-top: 6rem;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 6%;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Plans = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const Plan = styled.li`
  padding: 4rem 2rem;
  margin: 1rem;
  border: 2px solid ${(props) => props.theme.color.primaryLight};
  border-radius: 1rem;
  min-height: 26rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const PlanHeading = styled.h1`
  text-align: center;
`;

export const Price = styled.h1`
  margin-top: 2rem;
  text-align: center;
`;

export const CTA = styled.button`
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

export const PlanContent = styled.li`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`;

export const ContentTextBlock = styled.div`
  margin-left: 1rem;
`;

export const USP = styled.p`
  line-height: 1;
`;
