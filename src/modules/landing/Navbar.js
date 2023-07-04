import React from "react";
import logo from "../../asset/logo.svg";
import "./landing.css";

const Navbar = () => {
  return (
    <div className="header_nav">
      <div className="logo_section">
        <div className="logo">
          <img src={logo} />
        </div>
        <h3>SPL</h3>
      </div>
      <div className="utility_section">
        <div> Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;
