import styled from "styled-components";
const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder,
  maxLength: props.maxLength || 500,
}))`
  background-color: #5f5f5f;
  outline: none;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 16px;
  color: white;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 2rem;

  &::placeholder {
    color: #82abf1;
  }
`;

export default StyledInput;
