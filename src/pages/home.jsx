import React from "react";
import CCarousel from "../components/carousel";
import CCards from "../components/cards";
import { useSelector } from "react-redux";
export const Home = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <>
      
      <h1>welcome to event CX</h1>
      <CCarousel />
      <br />
      <CCards />

    </>
  );
};
