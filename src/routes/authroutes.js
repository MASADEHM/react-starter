import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Authroutes = () => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    console.log('calling authroutes');
    return (!isLoggedIn
        ? <Navigate to="/login" replace="true" />
        : <Outlet />)
}
export default Authroutes