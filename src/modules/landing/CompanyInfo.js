import React from "react";
import property from "../../asset/property.svg";
import map from "../../asset/map.svg";
import assistance from "../../asset/assistance.svg";
import investment from "../../asset/investment.svg";
import Explore from "./Explore";

const CompanyInfo = () => {
  return (
    <div className="info_container">
      <div className="info_card">
        <img className="info_image" src={property} />
        <div className="info_text">
          <h2>Property Rates</h2>
          <p>Market rates, data analytics & transactions of top project</p>
        </div>
        <Explore />
      </div>
      <div className="info_card">
        <img className="info_image" src={map} />
        <div className="info_text">
          <h2>Required Locations</h2>
          <p> Interactive Map to help you understand a City’s Estate</p>
        </div>
        <Explore />
      </div>
      <div className="info_card">
        <img className="info_image" src={assistance} />
        <div className="info_text">
          <h2>Assistance</h2>
          <p>Connect with a community of real estate enthusiasts.</p>
        </div>
        <Explore />
      </div>
      <div className="info_card">
        <img className="info_image" src={investment} />
        <div className="info_text">
          <h2>Investment</h2>
          <p>Invest in fractional properties to enjoy benefits</p>
        </div>
        <Explore />
      </div>
    </div>
  );
};

export default CompanyInfo;
