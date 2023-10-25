import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../services/token.service"
import { useSelector } from "react-redux";

const Authroutes = () => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn)
    const token = getCookie();
    console.log('calling authroutes');
    console.log(token)
    return (!isLoggedIn
        ? <Navigate to="/login" replace="true" />
        : <Outlet />)
}
export default Authroutes