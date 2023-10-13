import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../components/about";
import AddEvent from "../components/Events/Add";
import { Home } from "../components/home";
import Login from "../components/login";
import Users from "../components/users";

import Layout from "../shared/layouts";

const Approutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/About/:id",
        element: <About />,
      },
      {
        path: "/Users",
        element: <Users />,
      },
      {
        path: "/Add",
        element: <AddEvent />,
      },
    ],
  },
]);
export default Approutes;
