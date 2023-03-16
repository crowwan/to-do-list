import React, { useRef, useState } from "react";
import styled from "styled-components";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledInput from "../styled/StyledInput";
import StyledSubmitBtn from "../styled/StyledSubmitBtn";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import StyledSubTitle from "../styled/StyledSubTitle";
import StyledErrorMsg from "../styled/StyledErrorMsg";
import axios from "axios";
import { login } from "../util/auth";
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
  const [errMsg, setErrMsg] = useState({
    id: "",
    pw: "",
  });
  const idRef = useRef();
  const pwRef = useRef();

  const onSignupClick = () => {
    setIsSignup(true);
  };

  const loginValidate = (id, pw) => {
    let ret = true;
    if (!id.length) {
      setErrMsg((prev) => ({ ...prev, id: "아이디를 입력해주세요." }));
      ret = false;
    } else {
      setErrMsg((prev) => ({ ...prev, id: "" }));
    }
    if (!pw.length) {
      setErrMsg((prev) => ({ ...prev, pw: "비밀번호를 입력해주세요." }));
      ret = false;
    } else {
      setErrMsg((prev) => ({ ...prev, pw: "" }));
    }
    return ret;
  };

  const onLoginClick = (e) => {
    e.preventDefault();
    if (!loginValidate(idRef.current.value, pwRef.current.value)) return;
    // 생각보다 느림 로딩 페이지 반드시 필요
    (() => {
      const userData = {
        uid: idRef.current.value,
        password: pwRef.current.value,
      };
      login(userData).then((res) => {
        dispatch(setUser(true));
        navigation("/today");
      });
    })();
  };

  return (
    <StyledContainer>
      <form onSubmit={onLoginClick}>
        <StyledMainTitle>{isSignup ? "회원가입" : "로그인"}</StyledMainTitle>
        <StyledSubTitle>아이디</StyledSubTitle>
        <StyledLogInInput type="text" placeholder={"아이디"} ref={idRef} />
        {errMsg.id && <StyledErrorMsg>{errMsg.id}</StyledErrorMsg>}
        <StyledSubTitle>비밀번호</StyledSubTitle>
        <StyledLogInInput
          type="password"
          placeholder={"비밀번호"}
          ref={pwRef}
        />
        {errMsg.pw && <StyledErrorMsg>{errMsg.pw}</StyledErrorMsg>}
        {!isSignup ? (
          <>
            <StyledSubmitBtn>로그인</StyledSubmitBtn>
            <StyledSignupContainer>
              <span onClick={onSignupClick}>회원가입</span>
            </StyledSignupContainer>
          </>
        ) : (
          <StyledSubmitBtn>회원가입</StyledSubmitBtn>
        )}
      </form>
    </StyledContainer>
  );
}

export default LogInForm;
