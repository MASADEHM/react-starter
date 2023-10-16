import React from "react";

const Spinner = (props) => {
  return <Spinner animation="border" variant={props.variant 
    ? props.variant.toLowerCase() : 'dark'} role="status"></Spinner>;
};
export default Spinner;
