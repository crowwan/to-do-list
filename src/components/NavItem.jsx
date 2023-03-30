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
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: #3b3a39;
  }
`;

function StyledNavItem({ icon, title, onClick }) {
  return (
    <ul>
      <StyledList onClick={onClick}>
        <span>{icon}</span>
        <span>{title}</span>
      </StyledList>
    </ul>
  );
}

export default StyledNavItem;
