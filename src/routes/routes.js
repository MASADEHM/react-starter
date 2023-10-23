import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "../pages/contactus";
import { Home } from "../pages/home";
import Login from "../pages/login";
import Users from "../pages/users";
import Layout from "../shared/layouts";
import Authroutes from "./authroutes";
import AddEvent from "../components/Events/Add";
import NotFound from "../shared/notfound";
import About from "../pages/about";

const Routes = () => {

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
        {
          path: '*',
          element: <NotFound />
        }
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
          element: <Authroutes />,
          children: [
            {
              path: "/users",
              element: <Users />,
            },
            {
              path: "/Add",
              element: <AddEvent />,
            },
            {
              path: "/logout",
              element: <Login />,
            },
          ]
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForAuthnticated
  ]);

  console.log(router.routes);
  return <RouterProvider router={router} />;
};
export default Routes;
