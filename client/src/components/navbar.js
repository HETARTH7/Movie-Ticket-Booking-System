import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar-brand ms-4" to="/">
        HOME
      </Link>
      <Link className="btn" to="/login">
        <img width={20} src="user.svg" alt="" />
      </Link>
    </div>
  );
};

export default Navbar;
