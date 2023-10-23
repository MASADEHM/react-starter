import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import { getCookie, removeCookie } from "../services/token.service";

const Menu = () => {
  const token = getCookie();
  const nav = useNavigate();

  const Logout = (e) => {
    e.preventDefault();
    removeCookie();
    nav("/", { replace: true });
  };

  const PublicLinks = [
    { Id: 1, Path: "/About", Title: "About" },
    { Id: 2, Path: "/ContactUs", Title: "Contact Us" },
  ];
  const AuthnticatedLinks = [
    {
      Id: 3,
      Path: "/users",
      Title: "Users",
    },
    {
      Id: 4,
      Path: "/Add",
      Title: "Add",
    },
  ];
  const Links = [...(!token ? PublicLinks : AuthnticatedLinks)];

  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={require('../assests/zeroone.png')} width={90} height={35} alt="logo" />

       
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {Links.map((d) => (
              <li key={d.Id}>
                <Link to={d.Path} className="nav-link px-2 link-secondary">
                  {d.Title}
                </Link>
              </li>
            ))}
            {token && (
              <li>
                <Link className="nav-link px-2 link-secondary" onClick={Logout}>Logout</Link>

              </li>
            )}
            {!token && (
              <li>
                <Link to="/login" className="nav-link px-2 link-secondary">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </Nav>
      </header>
    </Container>
  );
};

export default Menu;
