import React from "react";
import styled from "styled-components";
import StyledContainer from "../styled/StyledContainer";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 3rem;
  gap: 1.2rem;
  color: #fff;
`;
const StyledNavButton = styled.div`
  cursor: pointer;
  position: relative;
  width: 25px;
  height: 3px;
  background-color: #fff;
  &::after {
    content: "";
    position: absolute;
    top: -8px;
    width: 25px;
    height: 3px;
    background-color: #fff;
  }
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    width: 25px;
    height: 3px;
    background-color: #fff;
  }
`;

function Header({ onNavBtnClick }) {
  return (
    <StyledContainer bgColor={"#252423"}>
      <StyledHeader>
        <StyledNavButton onClick={onNavBtnClick} />
        <div>To Do</div>
      </StyledHeader>
    </StyledContainer>
  );
}

export default Header;
