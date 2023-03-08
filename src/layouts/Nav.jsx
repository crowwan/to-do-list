import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import routerData from "../data/routerData";
import StyledContainer from "../styled/StyledContainer";
import StyledNavItem from "../styled/StyledNavItem";

const StyledNavContainer = styled(StyledContainer)`
  width: 80vw;
  position: absolute;
  top: 3rem;
  height: calc(100vh - 3rem);
  padding-top: 2rem;
  color: #fff;
`;

function Nav({ onNavBtnClick }) {
  const navigation = useNavigate();
  const onNavClick = (path) => {
    console.log("clicked");
    navigation(path);
    onNavBtnClick();
  };
  return (
    <StyledNavContainer>
      <div>To Do</div>
      {routerData.map((a) => (
        <StyledNavItem
          key={a.name}
          icon={a.icon}
          title={a.name}
          onClick={() => onNavClick(a.path)}
        />
      ))}
    </StyledNavContainer>
  );
}

export default Nav;
