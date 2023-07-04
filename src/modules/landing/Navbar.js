import React from "react";
import logo from "../../asset/logo.svg";
import "./landing.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();
  return (
    <div className="header_nav">
      <div className="logo_section">
        <div className="logo">
          <img src={logo} />
        </div>
        <h3 style={{ marginInline: "20px" }}>SPL</h3>
      </div>
      <div className="utility_section">
        <div> Home</div>
        <div>About</div>
        <div>Contact</div>
        <div onClick={() => history("/LOGIN")}>Login</div>
      </div>
    </div>
  );
};

export default Navbar;
