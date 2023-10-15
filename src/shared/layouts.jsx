import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "./menu";
import { Container } from "react-bootstrap";

const Layout = () => {
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
