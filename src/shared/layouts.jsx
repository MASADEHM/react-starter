import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getToken } from "../services/token.service";
import Menu from "./menu";

const Layout = () => {
  const token = getToken();

  // Check if the user is authenticated
  // if (!token) {
  //   console.log("token is null");
  //   // If not authenticated, redirect to the login page
  //   return <Navigate to="/login" />;
  // }
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
