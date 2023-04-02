import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Nav from "../layouts/Nav";
function Template({ setTheme }) {
  const [open, setOpen] = useState(false);
  const onNavBtnClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onNavBtnClick={onNavBtnClick} setTheme={setTheme} />
      {open && <Nav onNavBtnClick={onNavBtnClick} />}
      <Outlet />
    </div>
  );
}

export default Template;
