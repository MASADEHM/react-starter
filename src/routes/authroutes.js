import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../services/token.service"

const Authroutes=()=>{
    const token=getToken();
    console.log('calling authroutes');
    return(!token
        ?<Navigate to="/login" replace="true"/>
    :<Outlet/>)
}
export default Authroutes