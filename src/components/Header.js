import React from "react";
import logo from "./logo.svg.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar fixed-top navbar-dark w-100 mb-5">
      <div className="d-flex justify-content-center w-100">
        <Link to="/">
          <img src={logo} height="75" className="m-5" alt=""></img>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
