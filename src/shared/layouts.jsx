import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getToken } from "../services/token.service";
import Menu from "./menu";

const Layout = () => {
  const token = getToken();

  return (
    <>
      <Menu />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      ;
    </>
  );
};
export default Layout;
