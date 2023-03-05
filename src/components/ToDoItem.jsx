import React from "react";
import styled from "styled-components";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const StyledItemContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #252423;
  gap: 0.5rem;
  border-radius: 5px;
  height: 4rem;
  align-items: center;
  padding: 0.8rem 1.5rem;
  font-size: 16px;
`;
const StyledTask = styled.div`
  flex: 1 0 0;
`;
const StyledCheckCircle = styled.div`
  cursor: pointer;
  width: 18px;
  height: 18px;
  outline: 1px solid #82abf1;
  border: 2px solid #252423;
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? "#82abf1" : "")};
`;
function ToDoItem() {
  return (
    <StyledItemContainer>
      <StyledCheckCircle checked />
      <StyledTask>오늘 해야할 일</StyledTask>
      <AiOutlineStar color="#82abf1" size="18px" />
      <AiFillStar color="#82abf1" />
    </StyledItemContainer>
  );
}

export default ToDoItem;
