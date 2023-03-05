import React from "react";
import StyledContainer from "../styled/StyledContainer";
import styled from "styled-components";
import UtilButtonContainer from "../components/UtilButtonContainer";
import ToDoItem from "../components/ToDoItem";
const StyledMain = styled.main`
  color: #fff;
  min-height: calc(100vh - 3rem);
  padding: 2rem 0;
`;
const StyledMainTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input.attrs({
  placeholder: "작업 추가",
})`
  background-color: #252423;
  outline: none;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 16px;
  color: white;
  width: 100%;
  border-bottom: 1px solid #fff;

  &::placeholder {
    color: #82abf1;
  }
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
        <StyledInput />
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
