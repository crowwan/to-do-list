import { useRef, useState } from "react";
import styled from "styled-components";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledInput from "../styled/StyledInput";
import StyledSubmitBtn from "../styled/StyledSubmitBtn";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import StyledSubTitle from "../styled/StyledSubTitle";
import StyledErrorMsg from "../styled/StyledErrorMsg";
import { login, signup } from "../api/auth";
import Loading from "../ui/Loading";
const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.inputColor};
  border-radius: 10px;
  width: 80vw;
  max-width: 600px;
  padding: 1rem;
`;

const StyledLogInInput = styled(StyledInput)`
  background-color: ${(props) => props.theme.bgColor};
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
    cursor: pointer;
    color: ${(props) => props.theme.mainColor};
    text-decoration: none;
  }
`;
function LogInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [errMsg, setErrMsg] = useState({
    id: "",
    pw: "",
    db: "",
  });
  const idRef = useRef();
  const pwRef = useRef();

  const onSignupClick = () => {
    setIsSignup((prev) => !prev);
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
  const userAuthAction = (fn) => {
    const userData = {
      uid: idRef.current.value,
      password: pwRef.current.value,
    };
    setIsLoading(true);
    fn(userData)
      .then((res) => {
        // 로그인 서버 요청을 하고 성공하면 => 뭘 하겠다.
        // 서버에서 받아온 데이터를 이용해야 한다. => setData(res);
        dispatch(setUser(true));
        setIsLoading(false);
        navigation("/today");
      })
      .catch(() => {
        setErrMsg((prev) => ({ ...prev, db: "로그인에 실패하였습니다." }));
        setIsLoading(false);
      });
  };
  const onLoginClick = (e) => {
    e.preventDefault();
    if (!loginValidate(idRef.current.value, pwRef.current.value)) return;
    // 생각보다 느림 로딩 페이지 반드시 필요
    if (!isSignup) userAuthAction(login);
    else userAuthAction(signup);
  };

  return (
    <>
      {isLoading && <Loading />}
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
            <>
              <StyledSubmitBtn>회원가입</StyledSubmitBtn>
              <StyledSignupContainer>
                <span onClick={onSignupClick}>로그인</span>
              </StyledSignupContainer>
            </>
          )}
          {errMsg.db && <StyledErrorMsg>{errMsg.db}</StyledErrorMsg>}
        </form>
      </StyledContainer>
    </>
  );
}

export default LogInForm;
