import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;
  color: #fff;
`;
const StyledModalContainer = styled.div``;

function ToDoItemModal() {
  return <StyledWrapper>ToDoItemModal</StyledWrapper>;
}

export default ToDoItemModal;
