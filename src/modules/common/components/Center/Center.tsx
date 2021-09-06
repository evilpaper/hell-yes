import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const StyledCenter = styled.div`
  padding-left: 6%;
  padding-right: 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Center({ children }: Props) {
  return <StyledCenter>{children}</StyledCenter>;
}
