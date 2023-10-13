import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../components/about";
import ContactUs from "../components/contactus";
import { Home } from "../components/home";
import Login from "../components/login";
import Users from "../components/users";
import { getToken } from "../services/token.service";
import Layout from "../shared/layouts";

const Routes = () => {
  const token = getToken();

  const routesForPublic = [
   
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/ContactUs",
          element: <ContactUs />,
        },

        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ];

  const routesForAuthnticated = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Users />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/Add",
          element: <add />,
        },
        {
          path: "/logout",
          element: <Login />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(token ? routesForAuthnticated : []),
  ]);

  console.log(router.routes);
  return <RouterProvider router={router} />;
};
export default Routes;
