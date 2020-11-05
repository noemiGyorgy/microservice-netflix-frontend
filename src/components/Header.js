import React from "react";
import logo from "../media/logo.png";
import reviews from "../media/reviews.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100">
      <div className="d-flex justify-content-center w-100">
        <Link to="/">
          <img src={logo} height="75" className="mt-5" alt=""></img>
          <br />
          <img src={reviews} className="mb-5" height="75" alt="" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
