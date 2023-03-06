import React from "react";
import StyledContainer from "../styled/StyledContainer";
import styled from "styled-components";
import UtilButtonContainer from "../components/UtilButtonContainer";
import ToDoItem from "../components/ToDoItem";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledInput from "../styled/StyledInput";
const StyledMain = styled.main`
  color: #fff;
  min-height: calc(100vh - 3rem);
  padding: 2rem 0;
`;

const StyledToDoContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

function Main({ title }) {
  const test = [1, 2, 3, 4, 5, 6];
  return (
    <StyledContainer>
      <StyledMain>
        <StyledMainTitle>{title}</StyledMainTitle>
        <StyledInput placeholder={"작업 추가"} />
        <UtilButtonContainer />
        <StyledToDoContainer>
          {test.map((a) => (
            <ToDoItem />
          ))}
        </StyledToDoContainer>
      </StyledMain>
    </StyledContainer>
  );
}

export default Main;
