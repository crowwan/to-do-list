import React from "react";
import StyledContainer from "../styled/StyledContainer";
import styled from "styled-components";
import UtilButtonContainer from "../components/UtilButtonContainer";
import ToDoItem from "../components/ToDoItem";
import StyledMainTitle from "../styled/StyledMainTitle";
import StyledInput from "../styled/StyledInput";
import { dummyData } from "../data/dummyData";
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
const StyledInputContainer = styled.div`
  width: 100%;
  background-color: #252423;
  padding: 1rem;
`;

const filterByPath = (a, path) => {
  switch (path) {
    case "important":
      return a.important;
    case "today":
      return a.type === "today" || a.type === "everyday";
    case "everyday":
      return a.type === "everyday";
    default:
      return null;
  }
};

function Main({ title, path }) {
  const data = dummyData.filter((a) => filterByPath(a, path));
  return (
    <StyledContainer>
      <StyledMain>
        <StyledMainTitle>{title}</StyledMainTitle>
        <StyledInputContainer>
          <StyledInput
            placeholder={"오늘 할 일을 여기에 입력하세요."}
            maxLength={40}
          />
          <UtilButtonContainer />
        </StyledInputContainer>
        <StyledToDoContainer>
          {data.map((a, i) => (
            <ToDoItem key={i} item={a} />
          ))}
        </StyledToDoContainer>
      </StyledMain>
    </StyledContainer>
  );
}

export default Main;
