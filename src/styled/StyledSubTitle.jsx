import styled from "styled-components";
import StyledMainTitle from "./StyledMainTitle";

const StyledSubTitle = styled(StyledMainTitle)`
  color: ${props => props.theme.fontColor};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export default StyledSubTitle;
