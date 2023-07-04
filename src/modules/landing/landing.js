import React from "react";
import Navbar from "./Navbar";
import Placeholder from "./Placeholder";
import { Button, Divider } from "antd";
import CompanyInfo from "./CompanyInfo";
import Everything from "./Everything";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="parallax"></div>
      <div className="banner_overlay">
        <Placeholder />
        <Divider />
        <CompanyInfo />
        <Divider />

        <Everything />
      </div>
    </div>
  );
};

export default LandingPage;
