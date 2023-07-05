import { useState } from "react";
import Header from "./navbar";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        username,
        password,
      });
      const accessToken = response.data.token;
      setAuth({ username, password, accessToken });
      localStorage["username"] = username;
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="text-center">
        <form onSubmit={Login} className="form-control text-center">
          <h1>Login</h1>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                onChange={changeUsername}
                type="text"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input
                onChange={changePassword}
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <p className="">
            Don't have an accound? <a href="/register">Register</a>
          </p>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "5rem" }}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;