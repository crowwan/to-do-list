import React from "react";
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

function Nav() {
  return (
    <StyledNavContainer>
      <div>To Do</div>
      {routerData.map((a) => (
        <StyledNavItem icon={a.icon} title={a.name} />
      ))}
    </StyledNavContainer>
  );
}

export default Nav;
