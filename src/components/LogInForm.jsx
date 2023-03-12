import React, { useRef, useState } from "react";
import styled from "styled-components";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledInput from "../styled/StyledInput";
import StyledSubmitBtn from "../styled/StyledSubmitBtn";
import { useDispatch } from "react-redux";
import { setIsLogin } from "../features/loginSlice";
import { useNavigate } from "react-router-dom";
import StyledSubTitle from "../styled/StyledSubTitle";
const StyledContainer = styled.div`
  background-color: #252423;
  border-radius: 10px;
  width: 80vw;
  padding: 1rem;
`;

const StyledLogInInput = styled(StyledInput)`
  background-color: #1e1e1e;
  border: none;
  margin-bottom: 1rem;
`;

const StyledSignupContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  font-size: 12px;
  flex-direction: row-reverse;
  margin-top: 1rem;
  & span {
    color: #82abf1;
    text-decoration: none;
  }
`;
function LogInForm() {
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();

  const onSignupClick = () => {
    setIsSignup(true);
  };

  const onLoginClick = () => {
    // TODO: validation
    console.log(idRef.current.value, pwRef.current.value);
    dispatch(setIsLogin(true));
    navigation("/today");
  };

  return (
    <StyledContainer>
      <StyledMainTitle>{isSignup ? "회원가입" : "로그인"}</StyledMainTitle>
      <StyledSubTitle>아이디</StyledSubTitle>
      <StyledLogInInput type="text" placeholder={"아이디"} ref={idRef} />
      <StyledSubTitle>비밀번호</StyledSubTitle>
      <StyledLogInInput type="password" placeholder={"비밀번호"} ref={pwRef} />
      {!isSignup ? (
        <>
          <StyledSubmitBtn onClick={onLoginClick}>로그인</StyledSubmitBtn>
          <StyledSignupContainer>
            <span onClick={onSignupClick}>회원가입</span>
          </StyledSignupContainer>
        </>
      ) : (
        <StyledSubmitBtn onClick={onLoginClick}>회원가입</StyledSubmitBtn>
      )}
    </StyledContainer>
  );
}

export default LogInForm;
