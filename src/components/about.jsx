import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const p = useParams();
  console.log(p.id);
  return <h1>welcome to about us</h1>;
};
export default About;
