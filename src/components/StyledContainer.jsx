import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: ${(props) => props.bgColor || "#1E1E1E"};
  padding: 0 1rem;
`;

export default StyledContainer;
