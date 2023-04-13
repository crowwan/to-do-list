import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../layouts/Header";
import Nav from "../layouts/Nav";

const SectionContainer = styled.div`
  display: flex;
`;

function Template({ setTheme }) {
  const [open, setOpen] = useState(false);
  const onNavBtnClick = () => {
    setOpen(prev => !prev);
  };

  return (
    <div>
      <Header onNavBtnClick={onNavBtnClick} setTheme={setTheme} />
      <SectionContainer>
        <Nav onNavBtnClick={onNavBtnClick} open={open} />
        <Outlet />
      </SectionContainer>
    </div>
  );
}

export default Template;
