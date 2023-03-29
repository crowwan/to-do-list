import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { clearUser } from "../features/userSlice";
import StyledContainer from "../styled/StyledContainer";
import NavButton from "../components/NavButton";
import { logout } from "../util/auth";

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
// TODO: 햄버거 버튼 after before로 만들면 클릭 이벤트 설정이 전체 div박스를 감싸지 못함

const StyledLogoutBtn = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
`;
function Header({ onNavBtnClick }) {
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    (() => {
      logout().then((res) => {
        dispatch(clearUser(false));
      });
    })();
  };
  return (
    <StyledContainer bgColor={"#252423"}>
      <StyledHeader>
        <NavButton onNavBtnClick={onNavBtnClick} />
        <div>To Do</div>
        <StyledLogoutBtn onClick={onLogoutClick}>Log Out</StyledLogoutBtn>
      </StyledHeader>
    </StyledContainer>
  );
}

export default Header;
