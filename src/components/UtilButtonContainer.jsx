import React from "react";
import styled from "styled-components";
import { FaCalendarAlt } from "react-icons/fa";
const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #252423;
  padding: 0.8rem 1.5rem;
  font-size: 20px;
  width: 100%;
  & * {
    cursor: pointer;
  }
`;

const StyledSubmitBtn = styled.button`
  background-color: transparent;
  padding: 0.2rem 1rem;
  font-size: 14px;
  color: #fff;
  border: 1px solid #fff;
`;

function UtilButtonContainer() {
  return (
    <StyledContainer>
      <FaCalendarAlt />
      <StyledSubmitBtn>추가</StyledSubmitBtn>
    </StyledContainer>
  );
}

export default UtilButtonContainer;
