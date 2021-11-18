import styled from "styled-components";

export const SectionHeading = styled.h2`
  font-weight: 600;
  padding-left: 6%;
`;

export const List = styled.ul`
  margin-top: 1rem;
  display: flex;
  overflow-x: scroll;

  padding-left: 6%;
  padding-top: 1rem;
  padding-bottom: 1rem;

  scroll-snap-type: x mandatory;
  scroll-padding: 0 0 0 6%;
`;

export const ListItem = styled.li`
  margin-right: 2rem;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
`;
