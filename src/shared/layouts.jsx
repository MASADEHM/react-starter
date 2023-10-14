import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getToken } from "../services/token.service";
import Menu from "./menu";
import { Container } from "react-bootstrap";

const Layout = () => {
  const token = getToken();

  return (
    <>
      <Menu />
      <main>
        <Container>
        <Outlet />
        </Container>
      </main>
    </>
  );
};
export default Layout;
