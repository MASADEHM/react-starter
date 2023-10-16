import { Toast } from "bootstrap";
import React from "react";
import { ToastBody, ToastContainer } from "react-bootstrap";
const Errormessage = (props) => {
  return new (
    <ToastContainer className="p-3" style={{ zIndex: 1 }} position="top-center">
      <Toast
        className="d-inline-block m-1"
        show={props.show}
        delay={3000}
        autohide
      >
        <ToastBody>{props.Error}</ToastBody>
      </Toast>
    </ToastContainer>
  )();
};
export default Errormessage;
