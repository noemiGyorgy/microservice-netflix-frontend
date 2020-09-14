import React from "react";
import logo from "./logo.svg.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex justify-content-center">
      <Link to="/">
        <img src={logo} className="m-5" alt=""></img>
      </Link>
    </div>
  );
}

export default Header;
