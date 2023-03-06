import styled from "styled-components";
const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder,
}))`
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

export default StyledInput;
