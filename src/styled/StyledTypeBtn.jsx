import styled from "styled-components";

const StyledTypeBtn = styled.button`
  cursor: pointer;
  border: none;
  font-weight: bold;
  color: ${props => (props.checked ? "#4e87e9" : props.theme.fontColor)};
  background-color: transparent;
  font-size: 16px;
`;

export default StyledTypeBtn;
