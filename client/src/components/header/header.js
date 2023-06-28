import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav">
      <Link className="home-btn" to="/">
        HOME
      </Link>
      <Link className="user-img" to="/login">
        <img width={20} src="user.svg" alt="" />
      </Link>
    </div>
  );
}

export default Header;
