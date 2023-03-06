import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Nav from "../layouts/Nav";
function Template() {
  const [open, setOpen] = useState(false);
  const onNavBtnClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div>
      <Header onNavBtnClick={onNavBtnClick} />
      {open && <Nav />}
      <Outlet />
    </div>
  );
}

export default Template;
