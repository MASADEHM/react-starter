import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../components/about";
import ContactUs from "../components/contactus";
import { Home } from "../components/home";
import Login from "../components/login";
import Users from "../components/users";
import Layout from "../shared/layouts";
import Authroutes from "./authroutes";
import AddEvent from "../components/Events/Add";

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
          element: <Authroutes/>,
          children:[
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
