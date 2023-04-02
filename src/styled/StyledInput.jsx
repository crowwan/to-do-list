import styled from "styled-components";
const StyledInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  placeholder: props.placeholder,
  maxLength: 40,
}))`
  background-color: ${(props) => props.theme.bgSubColor};
  outline: none;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 16px;
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  border-radius: 5px;
  margin-bottom: 2rem;

  &::placeholder {
    color: #82abf1;
  }
`;

export default StyledInput;
