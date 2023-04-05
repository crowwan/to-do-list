import styled from "styled-components";

const StyledNavButton = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  & div:nth-child(1) {
    width: 25px;
    height: 3px;
    background-color: #fff;
  }
  & div:nth-child(2) {
    width: 25px;
    height: 3px;
    background-color: #fff;
  }
  & div:nth-child(3) {
    width: 25px;
    height: 3px;
    background-color: #fff;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export default function NavButton({ onNavBtnClick }) {
  return (
    <StyledNavButton onClick={onNavBtnClick}>
      <div></div>
      <div></div>
      <div></div>
    </StyledNavButton>
  );
}
