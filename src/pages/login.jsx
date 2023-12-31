import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Loginservice } from "../services/login.service";
import { getCookie, setCookies } from "../services/token.service";
import {
  Container,
  Row,
  Toast,
  Col,
  ToastContainer,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { singIn } from "../store/login.slice";

const Login = () => {
  //#region states
  const [values, setValues] = useState(null);
  const [err, setErr] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  //#endregion
  const token = getCookie();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  //will check cookie if exist and dispatch the sign in
 
  if (token) {
    dispatch(singIn());
  }
  //redirect if user is already logged in
  if (isLoggedIn) {
    return <Navigate to="/users" replace={true} />;
  }

  //#region  updateState
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(values);
  };
  //#endregion
  //#region  submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    // call the login service and set the token
    Loginservice(values).then((r) => {
      console.log(r.data);
      if (r.data.data) {
        if (rememberMe) {
          setCookies(rememberMe);
        }
        dispatch(singIn());
        navigate("/users");
      } else {
        setErr("invalid login");
        setShow(true);
        setisLoading(false);
        console.log(err);
      }
    });
  };
  //#endregion
  return (
    <>
      <Container>
        <Row>
          <Col className="mx-auto" sm={9} md={7} lg={5}>
            <ToastContainer
              position="top-end"
              className="p-3"
              style={{ zIndex: 1 }}
            >
              <Toast
                className="d-inline-block m-1"
                onClose={() => {
                  setShow(false);
                }}
                show={show}
                delay={3000}
                autohide
              >
                <Toast.Body>{err}</Toast.Body>
              </Toast>
            </ToastContainer>
          </Col>
        </Row>
        <Row>
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Sign In
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      onChange={handleChange}
                      required
                    />
                    <label>Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      required
                    />
                    <label>Password</label>
                  </div>

                  <div className="d-grid">
                    {!isLoading && (
                      <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        Sign in
                      </button>
                    )}
                    {isLoading && <Spinner variant="primary" />}
                  </div>
                  <div className="form-check mt-3">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setRememberMe(!rememberMe);
                      }}
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Remember Me
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};
export default Login;
