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
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
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
`;
const NavBtnContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.headerColor};
`;

const filterByPath = (path) => (target) => {
  if (path === "important") return target.important;
  if (path === "today")
    return target.type === "today" || target.type === "everyday";
  if (path === "everyday") return target.type === "everyday";
};

function Nav({ onNavBtnClick }) {
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
    <StyledWrapper onClick={onWrapperClick} ref={wrapperRef}>
      <StyledNavContainer>
        <NavBtnContainer>
          <NavButton onNavBtnClick={onNavBtnClick} />
        </NavBtnContainer>
        <div style={{ marginTop: "5rem" }}>To Do</div>
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
