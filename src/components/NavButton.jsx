import styled from "styled-components";

const StyledNavButton = styled.div`
  cursor: pointer;
  position: relative;
  width: 25px;
  height: 3px;
  background-color: #fff;
  &::after {
    content: "";
    position: absolute;
    top: -8px;
    width: 25px;
    height: 3px;
    background-color: #fff;
  }
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    width: 25px;
    height: 3px;
    background-color: #fff;
  }
`;

export default function NavButton({ onNavBtnClick }) {
  return <StyledNavButton onClick={onNavBtnClick} />;
}
