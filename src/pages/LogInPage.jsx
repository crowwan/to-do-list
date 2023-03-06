import React from "react";
import styled from "styled-components";
import LogInForm from "../components/LogInForm";
import StyledContainer from "../styled/StyledContainer";

const StyledPageContainer = styled(StyledContainer)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LogInPage() {
  return (
    <StyledPageContainer>
      <LogInForm />
    </StyledPageContainer>
  );
}

export default LogInPage;
