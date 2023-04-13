import styled from "styled-components";

const StyledSubmitBtn = styled.button`
  background-color: ${props => props.bgc || "#82abf1"};
  width: 100%;
  color: #fff;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  margin-top: 1rem;
`;
export default StyledSubmitBtn;
