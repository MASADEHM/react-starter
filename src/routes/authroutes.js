import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../services/token.service"

const Authroutes=()=>{
    const token=getCookie();
    console.log('calling authroutes');
    console.log(token)
    return(!token
        ?<Navigate to="/login" replace="true"/>
    :<Outlet/>)
}
export default Authroutes