import React from "react";
import styled from "styled-components";

const StyledList = styled.li`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin: 1rem 0;
  background-color: #252423;
  padding: 0.5rem 0.8rem;
  list-style: none;
  font-size: 16px;
  & span:first-child {
    color: #82abf1;
  }
`;

function StyledNavItem({ icon, title }) {
  return (
    <ul>
      <StyledList>
        <span>{icon}</span>
        <span>{title}</span>
      </StyledList>
    </ul>
  );
}

export default StyledNavItem;
