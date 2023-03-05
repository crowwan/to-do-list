import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

function Template() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Template;
