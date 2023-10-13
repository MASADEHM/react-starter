import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Loginservice } from "../services/login.service";
import { setToken } from "../services/token.service";
import Menu from "../shared/menu";

const Login = () => {
  const [values, setValues] = useState(null);
  const navigate = useNavigate();
  const [err, setErr] = useState("");

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
    // call the login service and set the token
    Loginservice(values).then((r) => {
      console.log(r.data);
      if (r.data.data) {
        console.log("set token");
        console.log(r.data.data.Token);
        setToken(r.data.data.Token);
        navigate("/");
      } else {
        setErr("invalid login");
        console.log(err);
      }
    });
  };
  //#endregion
  return (
    <>
      
      <div className="container">
        <div className="row">
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
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
