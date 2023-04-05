import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import routerData from "../data/routerData";
import StyledContainer from "../styled/StyledContainer";
import NavItem from "../components/NavItem";
import { slideIn } from "../animations/slideIn";
import NavButton from "../components/NavButton";
import { useSelector } from "react-redux";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.open ? "block" : "none")};
  @media screen and (min-width: 1280px) {
    position: relative;
    height: transparent;
    width: 500px;
    display: block;
  }
`;

const StyledNavContainer = styled(StyledContainer)`
  width: 80vw;
  max-width: 500px;
  background-color: ${(props) => props.theme.bgColor};
  position: fixed;
  height: calc(100%);
  /* padding-top: 1rem; */
  color: ${(props) => props.theme.fontColor};
  animation: ${slideIn} 0.2s ease;
  @media screen and (min-width: 1280px) {
    position: relative;
    width: 500px;
    height: transparent;
  }
`;
const NavBtnContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.headerColor};
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
const StyledNavTitle = styled.div`
  margin-top: 5rem;

  @media screen and (min-width: 1280px) {
    margin-top: 0;
    padding-top: 3rem;
  }
`;

const filterByPath = (path) => (target) => {
  if (path === "important") return target.important;
  if (path === "today")
    return target.type === "today" || target.type === "everyday";
  if (path === "everyday") return target.type === "everyday";
};

function Nav({ onNavBtnClick, open }) {
  const navigation = useNavigate();
  const wrapperRef = useRef();
  const data = useSelector((state) => state.data);
  const onNavClick = (path) => {
    navigation(path);
    onNavBtnClick();
  };
  const onWrapperClick = (e) => {
    if (e.target === wrapperRef.current) onNavBtnClick();
  };
  return (
    <StyledWrapper onClick={onWrapperClick} ref={wrapperRef} open={open}>
      <StyledNavContainer>
        <NavBtnContainer>
          <NavButton onNavBtnClick={onNavBtnClick} />
        </NavBtnContainer>
        <StyledNavTitle>To Do</StyledNavTitle>
        {routerData.map((a) => (
          <NavItem
            key={a.name}
            icon={a.icon}
            title={a.name}
            onClick={() => onNavClick(a.path)}
            numOfData={data.filter(filterByPath(a.path)).length}
          />
        ))}
      </StyledNavContainer>
    </StyledWrapper>
  );
}

export default Nav;
