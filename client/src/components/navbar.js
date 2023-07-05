import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const user = localStorage["username"];

  const Logout = (e) => {
    localStorage.removeItem("username");
    window.location.href = "/";
  };
  return (
    <div className="navbar">
      <Link className="navbar-brand ms-4" to="/">
        HOME
      </Link>
      <div className="d-flex">
        <Link className="btn" to="/login">
          <img width={20} src="user.svg" alt="" />
        </Link>
        <button
          className="btn btn-outline-danger"
          hidden={!user ? true : false}
          onClick={Logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
