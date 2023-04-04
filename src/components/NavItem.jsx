import styled from "styled-components";

const StyledList = styled.li`
  display: flex;
  gap: 1rem;
  width: 100%;
  margin: 1rem 0;
  background-color: ${(props) => props.theme.inputColor};
  padding: 0.5rem 0.8rem;
  list-style: none;
  font-size: 16px;
  & span:first-child {
    color: #82abf1;
  }
  & span:nth-child(2) {
    flex: 1 0 0;
  }
  &:hover {
    cursor: pointer;
    transition: all 0.5s;
    background-color: ${(props) => props.theme.hover};
  }
`;

function StyledNavItem({ icon, title, onClick, numOfData }) {
  return (
    <ul>
      <StyledList onClick={onClick}>
        <span>{icon}</span>
        <span>{title}</span>
        <span>{numOfData}</span>
      </StyledList>
    </ul>
  );
}

export default StyledNavItem;
