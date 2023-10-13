import React from "react";
import { Link, Navigate, useNavigate, useNavigation } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { getToken, removeToken } from "../services/token.service";

const Menu = () => {
  const token = getToken();
  const nav = useNavigate();

  const Logout = (e) => {
    e.preventDefault();
    removeToken();
    nav("/", { replace: true });
  };

  const PublicLinks = [
    { Path: "/About", Title: "About" },
    { Path: "/ContactUs", Title: "Contact Us" },
  ];
  const AuthnticatedLinks = [
    {
      Path: "/users",
      Title: "Users",
    },
    {
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
          Event CX
        </Link>
        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {Links.map((d, i) => (
              <li>
                <Link to={d.Path} className="nav-link px-2 link-secondary">
                  {d.Title}
                </Link>
              </li>
            ))}
            {token && (
              <li>
                <a
                  href="#"
                  onClick={Logout}
                  className="nav-link px-2 link-secondary"
                >
                  Logout
                </a>
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
