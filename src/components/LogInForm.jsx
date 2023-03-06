import React from "react";
import styled from "styled-components";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledInput from "../styled/StyledInput";
const StyledContainer = styled.div`
  background-color: #252423;
  border-radius: 10px;
  width: 80vw;
  padding: 1rem;
`;

const StyledSubTitle = styled(StyledMainTitle)`
  font-size: 14px;
  font-weight: 400;
`;
const StyledLogInInput = styled(StyledInput)`
  background-color: #1e1e1e;
  border: none;
  margin-bottom: 1rem;
`;
const StyledSubmitBtn = styled.button`
  background-color: #82abf1;
  color: #fff;
  border: none;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  font-weight: bold;
`;
const StyledBtnContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin-top: 1rem;
`;
function LogInForm() {
  return (
    <StyledContainer>
      <StyledMainTitle>로그인 / 회원가입</StyledMainTitle>
      <StyledSubTitle>아이디</StyledSubTitle>
      <StyledLogInInput type="text" placeholder={"아이디"} />
      <StyledSubTitle>비밀번호</StyledSubTitle>
      <StyledLogInInput type="password" placeholder={"비밀번호"} />
      <StyledBtnContainer>
        <StyledSubmitBtn>회원가입</StyledSubmitBtn>
        <StyledSubmitBtn>로그인</StyledSubmitBtn>
      </StyledBtnContainer>
    </StyledContainer>
  );
}

export default LogInForm;
