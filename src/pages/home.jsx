import React from "react";
import CCarousel from "../components/carousel";
import CCards from "../components/cards";
import { getCookie } from "../services/token.service";
import { useDispatch, useSelector } from "react-redux";
import { singIn } from "../store/login.slice";
export const Home = () => {

  const dispatch = useDispatch();
  const cookie = getCookie();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  if (!isLoggedIn) {
    if (cookie) {
      dispatch(singIn())
    }
  }
  return (
    <>

      <h1>welcome to event CX</h1>
      <CCarousel />
      <br />
      <CCards />

    </>
  );
};
