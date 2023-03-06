import React from "react";
import styled from "styled-components";
import StyledMainTitle from "../styled/StyledMainTitle";

const StyledContainer = styled.div`
  background-color: #252423;
  border-radius: 10px;
  width: 80vw;
  padding: 1rem;
`;

const StyledInput = styled.div``;
function LogInForm() {
  return (
    <StyledContainer>
      <StyledMainTitle>로그인 / 회원가입</StyledMainTitle>
    </StyledContainer>
  );
}

export default LogInForm;
