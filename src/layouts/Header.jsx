import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setIsLogin } from "../features/loginSlice";
import StyledContainer from "../styled/StyledContainer";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 3rem;
  gap: 1.2rem;
  color: #fff;
  & > div:nth-child(2) {
    flex: 1 0 0;
  }
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
const StyledLogoutBtn = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
`;
function Header({ onNavBtnClick }) {
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    dispatch(setIsLogin(false));
  };
  return (
    <StyledContainer bgColor={"#252423"}>
      <StyledHeader>
        <StyledNavButton onClick={onNavBtnClick} />
        <div>To Do</div>
        <StyledLogoutBtn onClick={onLogoutClick}>Log Out</StyledLogoutBtn>
      </StyledHeader>
    </StyledContainer>
  );
}

export default Header;
