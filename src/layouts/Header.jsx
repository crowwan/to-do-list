import React from "react";
import styled from "styled-components";
import StyledContainer from "../components/StyledContainer";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 3rem;
  color: #fff;
`;
const StyledNavButton = styled.span``;

function Header() {
  return (
    <StyledContainer bgColor={"#252423"}>
      <StyledHeader>Header</StyledHeader>
    </StyledContainer>
  );
}

export default Header;
